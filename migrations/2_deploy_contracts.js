
var HashCracker = artifacts.require("./HashCracker.sol");

module.exports = async (deployer, network, accounts) => {

  var account = accounts[0]
  var account2 = accounts[1]
  var oracle = accounts[2]
  
  deployer.deploy(HashCracker, oracle)
};
