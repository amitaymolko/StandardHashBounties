pragma solidity 0.4.23;

contract Oracle {

  address public oracle;
  
  constructor (address _oracle) public {
    oracle = _oracle;
  }

  modifier onlyOracle() {
    require(this.isOracle(msg.sender));
    _;
  }

  function isOracle(address _sender) public view returns(bool) {
    return _sender == oracle;
  }
}