pragma solidity 0.4.23;

import "./Scrypt.sol";
import "./Oracle.sol";

contract HashCracker is Scrypt, Oracle {
  
    event NewHashEvent(address requestorAddress, uint bountyValue, bytes32 hashBytes, string hashType);
    event RequestHashCheck(uint hashCrackIndex, address crackerAddress, string crackerPassword);
    event CrackedHashEvent(address crackerAddress, uint hashCrackIndex);
 
    struct HashCrack {
        address requestorAddress;
        uint bountyValue;

        bytes32 hashBytes;
        string hashType;
       
        address crackerAddress;
        string crackerPassword;

        bool cancelled;
        bool redeemed;

        mapping (string => address) pendingCrackRequests;
    }

    HashCrack[] public hashCracks;
    mapping (string => bool) validHashTypes;

    modifier hashCrackBySender(uint _index) {
        require(hashCracks[_index].requestorAddress == msg.sender);
        _;
    }

    modifier validHashType(string _hashType) {
        require(validHashTypes[_hashType]);
        _;
    }

    modifier validHashCrack(uint _index) {
        require(hashCracks[_index].crackerAddress == 0x00 && !hashCracks[_index].cancelled);
        _;
    }
    
    modifier validMinValue(uint _value) {
        require(msg.value >= _value);
        _;
    }

    constructor(address _oracleAddress)
    Oracle(_oracleAddress)
    public 
    {
        validHashTypes["sha256"] = true;
        validHashTypes["sha3"] = true;
        validHashTypes["scrypt"] = true;
    }

    function requestHashCrack(bytes32 _hash, string _hashType, bytes _input)
    validHashType(_hashType)
    validMinValue(0.1 ether)
    payable
    public 
    {
        if (keccak256(_hashType) == keccak256("scrypt")) {
            requestScryptHashCrack(_hash, _input);
        }
        hashCracks.push(HashCrack(msg.sender, msg.value, _hash, _hashType, 0x00, "", false, false));
        emit NewHashEvent(msg.sender, msg.value, _hash, _hashType);
    }

    function submitCrack(uint _index, string _password) 
    validMinValue(0.01 ether)
    payable
    public 
    {
        HashCrack storage hashCrack = hashCracks[_index];
        if (hashCrack.pendingCrackRequests[_password] != 0x00) { // other user witth same password request
            revert();
        } 
        oracle.transfer(msg.value);
        bytes32 hashedPassword;
        if (keccak256(hashCrack.hashType) == keccak256("sha256")) {
            hashedPassword = sha256(_password);
            handleCrackAttemptInternal(_index, msg.sender, _password, hashedPassword);
        } else if (keccak256(hashCrack.hashType) == keccak256("sha3")) {
            hashedPassword = keccak256(_password);
            handleCrackAttemptInternal(_index, msg.sender, _password, hashedPassword);
        } else if (keccak256(hashCrack.hashType) == keccak256("scrypt")) {
            hashCrack.pendingCrackRequests[_password] = msg.sender;
            emit RequestHashCheck(_index, msg.sender, _password);
        } else {
            revert();
        }
    }

    function submitValidCrack(uint _index, address _crackerAddress, string _crackerPassword) 
    onlyOracle
    public 
    {
        HashCrack storage hashCrack = hashCracks[_index];
        handleCrackAttemptInternal(_index, _crackerAddress, _crackerPassword, hashCrack.hashBytes);
    }

    function handleCrackAttemptInternal(uint _index, address _crackerAddress, string _crackerPassword, bytes32 _hashedPassword)
    validHashCrack(_index)
    internal
    {
        HashCrack storage hashCrack = hashCracks[_index];
        if (_hashedPassword == hashCrack.hashBytes) {
            hashCrack.crackerAddress = _crackerAddress;
            hashCrack.crackerPassword = _crackerPassword;

            emit CrackedHashEvent(_crackerAddress, _index);
            
            // if (keccak256(hashCrack.hashType) == keccak256("sha256") || keccak256(hashCrack.hashType) == keccak256("sha3")) {
            //     redeemRewardUnsafe(_index);
            // }
        } else {
            revert();
        }
    }

    function cancelHashCrack(uint _index)
    hashCrackBySender(_index) 
    validHashCrack(_index)
    public 
    {
        HashCrack storage hashCrack = hashCracks[_index];
        hashCrack.cancelled = true;
        address(hashCrack.requestorAddress).transfer(hashCrack.bountyValue);
    }

    function redeemRewardUnsafe(uint _index)
    public
    {
        HashCrack storage hashCrack = hashCracks[_index];
        if (msg.sender == hashCrack.crackerAddress && !hashCrack.redeemed) {
            hashCrack.redeemed = true;
            address(msg.sender).transfer(hashCrack.bountyValue);
        } else {
            revert();
        }
    }

    function getHashCracksLength() 
    public 
    view 
    returns(uint) 
    {
        return hashCracks.length;
    }
}
