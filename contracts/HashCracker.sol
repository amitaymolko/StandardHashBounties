pragma solidity 0.4.23;

contract HashCracker {

    event Log(string message);
    event LogBytes32(string message, bytes32 _bytes);
    event NewHashEvent(address requestorAddress, uint bountyValue, bytes32 hashBytes, string hashType);
    event CrackedHashEvent(address crackerAddress, uint hashCrackIndex);
 
    struct HashCrack {
        address requestorAddress;
        uint bountyValue;

        bytes32 hashBytes;
        string hashType;
       
        string crackedPassword;
        address crackerAddress;
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
        hashCracks.push(HashCrack(msg.sender, msg.value, _hashBytes, _hashType, "", 0x00));
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
        } else if (keccak256(hashCrack.hashType) == keccak256("ripemd160")) {
            revert();
            // bytes20 hashedPassword = ripemd160(_password);
            // handleCrackAttemptInternal(_index, _password, hashedPassword);
        } else {
            revert();
        }
    }

    function handleCrackAttemptInternal(uint _index, string _password, bytes32 _hashedPassword)
    internal
    {
        HashCrack storage hashCrack = hashCracks[_index];
        emit LogBytes32("_hashedPassword", _hashedPassword);
        emit LogBytes32("hashCrack.hashBytes", hashCrack.hashBytes);
        bool cracked = (_hashedPassword == hashCrack.hashBytes);
        if (cracked) {
            hashCrack.crackedPassword = _password;
            hashCrack.crackerAddress = msg.sender;

            emit CrackedHashEvent(msg.sender, _index);

            address(msg.sender).transfer(hashCrack.bountyValue);
        } else {
            revert();
        }
    }

    function getHashCracksLength() public view returns(uint) {
        return hashCracks.length;
    }
}
