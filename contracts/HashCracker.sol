pragma solidity 0.4.23;

contract HashCracker {
  
    event NewHashEvent(address requestorAddress, uint bountyValue, bytes32 hashBytes, string hashType);
    event CrackedHashEvent(address crackerAddress, uint hashCrackIndex);
 
    struct HashCrack {
        address requestorAddress;
        uint bountyValue;

        bytes32 hashBytes;
        string hashType;
       
        address crackerAddress;
        string crackedPassword;
    }

    HashCrack[] public hashCracks;
    mapping (string => bool) validHashTypes;

    modifier validHashType(string _hashType) {
        require(validHashTypes[_hashType]);
        _;
    }
    
    modifier validMinValue() {
        require(msg.value >= 0.001 ether);
        _;
    }

    constructor()
    public 
    {
        validHashTypes["sha256"] = true;
        validHashTypes["sha3"] = true;
        // validHashTypes["ripemd160"] = true;
    }

    function requestHashCrack(bytes32 _hashBytes, string _hashType)
    validHashType(_hashType)
    validMinValue
    payable
    public 
    {
        hashCracks.push(HashCrack(msg.sender, msg.value, _hashBytes, _hashType, 0x00, ""));
        emit NewHashEvent(msg.sender, msg.value, _hashBytes, _hashType);
    }

    function submitCrack(uint _index, string _password) 
    public 
    {
        bytes32 hashedPassword;
        HashCrack storage hashCrack = hashCracks[_index];
        if (keccak256(hashCrack.hashType) == keccak256("sha256")) {
            hashedPassword = sha256(_password);
            handleCrackAttemptInternal(_index, _password, hashedPassword);
        } else if (keccak256(hashCrack.hashType) == keccak256("sha3")) {
            hashedPassword = keccak256(_password);
            handleCrackAttemptInternal(_index, _password, hashedPassword);
        } else {
            revert();
        }
    }

    function handleCrackAttemptInternal(uint _index, string _password, bytes32 _hashedPassword)
    internal
    {
        HashCrack storage hashCrack = hashCracks[_index];
        bool cracked = (_hashedPassword == hashCrack.hashBytes);
        if (cracked && hashCrack.crackerAddress == 0x00) {
            hashCrack.crackerAddress = msg.sender;
            hashCrack.crackedPassword = _password;

            emit CrackedHashEvent(msg.sender, _index);

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
