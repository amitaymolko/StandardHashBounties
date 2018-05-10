var contract_information = {
  "contractName": "HashCracker",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "hashCracks",
      "outputs": [
        {
          "name": "requestorAddress",
          "type": "address"
        },
        {
          "name": "bountyValue",
          "type": "uint256"
        },
        {
          "name": "hashBytes",
          "type": "bytes32"
        },
        {
          "name": "hashType",
          "type": "string"
        },
        {
          "name": "crackerAddress",
          "type": "address"
        },
        {
          "name": "crackedPassword",
          "type": "string"
        },
        {
          "name": "cancelled",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "requestorAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "bountyValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "hashBytes",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "hashType",
          "type": "string"
        }
      ],
      "name": "NewHashEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "crackerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "hashCrackIndex",
          "type": "uint256"
        }
      ],
      "name": "CrackedHashEvent",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hashBytes",
          "type": "bytes32"
        },
        {
          "name": "_hashType",
          "type": "string"
        }
      ],
      "name": "requestHashCrack",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        },
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "submitCrack",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "cancelHashCrack",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHashCracksLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604080517f736861323536000000000000000000000000000000000000000000000000000081526001600682018190528251918290036026018220805460ff1990811683179091557f73686133000000000000000000000000000000000000000000000000000000008352600483018290529251918290036024019091208054909216179055610d84806100a66000396000f30060806040526004361061006c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301b2c43281146100715780635cb591fa146100c457806390fdecda14610122578063ba7d733614610149578063da8de31b14610161575b600080fd5b60408051602060046024803582810135601f81018590048502860185019096528585526100c295833595369560449491939091019190819084018382808284375094975061029b9650505050505050565b005b3480156100d057600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100c29583359536956044949193909101919081908401838280828437509497506105bf9650505050505050565b34801561012e57600080fd5b5061013761084a565b60408051918252519081900360200190f35b34801561015557600080fd5b506100c2600435610851565b34801561016d57600080fd5b506101796004356109a0565b6040805173ffffffffffffffffffffffffffffffffffffffff808a16825260208083018a90529282018890528516608082015282151560c082015260e06060820181815287519183019190915286519192909160a08401916101008501919089019080838360005b838110156101f95781810151838201526020016101e1565b50505050905090810190601f1680156102265780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610259578181015183820152602001610241565b50505050905090810190601f1680156102865780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b806001816040518082805190602001908083835b602083106102ce5780518252601f1990920191602091820191016102af565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff161515915061030c905057600080fd5b66038d7ea4c6800034101561032057600080fd5b6040805160e0810182523373ffffffffffffffffffffffffffffffffffffffff908116825234602080840191825283850188815260608501888152600060808701819052875180850190985280885260a087019790975260c0860187905286546001810180895597805286517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636007909202918201805473ffffffffffffffffffffffffffffffffffffffff19169190971617865593517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56485015590517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565840155518051610455937f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56601929190910190610cc0565b50608082015160048201805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff90921691909117905560a082015180516104b1916005840191602090910190610cc0565b5060c08201518160060160006101000a81548160ff0219169083151502179055505050507f7fa461e2168f2e67290a768902eeef413a7086b80bd00282808b6bb55681da2333348585604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561057d578181015183820152602001610565565b50505050905090810190601f1680156105aa5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050565b6000806000848154811015156105d157fe5b9060005260206000209060070201905060405180807f7368613235360000000000000000000000000000000000000000000000000000815250600601905060405180910390206000191681600301604051808280546001816001161561010002031660029004801561067a5780601f1061065857610100808354040283529182019161067a565b820191906000526020600020905b815481529060010190602001808311610666575b5050915050604051809103902060001916141561072d576002836040518082805190602001908083835b602083106106c35780518252601f1990920191602091820191016106a4565b51815160209384036101000a600019018019909216911617905260405191909301945091925050808303816000865af1158015610704573d6000803e3d6000fd5b5050506040513d602081101561071957600080fd5b50519150610728848484610b33565b610844565b604080517f73686133000000000000000000000000000000000000000000000000000000008152905190819003600401812060038301805491929091819083906002610100600183161502600019019091160480156107c35780601f106107a15761010080835404028352918201916107c3565b820191906000526020600020905b8154815290600101906020018083116107af575b5050915050604051809103902060001916141561006c57826040518082805190602001908083835b6020831061080a5780518252601f1990920191602091820191016107eb565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150610728848484610b33565b50505050565b6000545b90565b6000813373ffffffffffffffffffffffffffffffffffffffff1660008281548110151561087a57fe5b600091825260209091206007909102015473ffffffffffffffffffffffffffffffffffffffff16146108ab57600080fd5b826000818154811015156108bb57fe5b600091825260209091206004600790920201015473ffffffffffffffffffffffffffffffffffffffff16158015610914575060008054829081106108fb57fe5b600091825260209091206006600790920201015460ff16155b151561091f57600080fd5b600080548590811061092d57fe5b6000918252602082206006600790920201908101805460ff1916600190811790915581549082015460405192965073ffffffffffffffffffffffffffffffffffffffff9091169281156108fc029290818181858888f19350505050158015610999573d6000803e3d6000fd5b5050505050565b60008054829081106109ae57fe5b60009182526020918290206007919091020180546001808301546002808501546003860180546040805161010097831615979097026000190190911693909304601f810189900489028601890190935282855273ffffffffffffffffffffffffffffffffffffffff9095169750919591949391830182828015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b50505050600483015460058401805460408051602060026101006001861615026000190190941693909304601f8101849004840282018401909252818152959673ffffffffffffffffffffffffffffffffffffffff9094169593945090830182828015610b205780601f10610af557610100808354040283529160200191610b20565b820191906000526020600020905b815481529060010190602001808311610b0357829003601f168201915b5050506006909301549192505060ff1687565b600083600081815481101515610b4557fe5b600091825260209091206004600790920201015473ffffffffffffffffffffffffffffffffffffffff16158015610b9e57506000805482908110610b8557fe5b600091825260209091206006600790920201015460ff16155b1515610ba957600080fd5b6000805486908110610bb757fe5b60009182526020909120600790910201600281015490925083141561006c5760048201805473ffffffffffffffffffffffffffffffffffffffff19163373ffffffffffffffffffffffffffffffffffffffff161790558351610c229060058401906020870190610cc0565b506040805173ffffffffffffffffffffffffffffffffffffffff331681526020810187905281517f0d543ef6f4a593d88bf5126fc281243b51bdff236df66b9dbf4932f84fba8e0c929181900390910190a1600182015460405173ffffffffffffffffffffffffffffffffffffffff33169180156108fc02916000818181858888f19350505050158015610cba573d6000803e3d6000fd5b50610999565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d0157805160ff1916838001178555610d2e565b82800160010185558215610d2e579182015b82811115610d2e578251825591602001919060010190610d13565b50610d3a929150610d3e565b5090565b61084e91905b80821115610d3a5760008155600101610d445600a165627a7a7230582037f6d661376913d1a0562c052a4cf616568ac6c8acb2b44d20e55e84cb4f63220029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301b2c43281146100715780635cb591fa146100c457806390fdecda14610122578063ba7d733614610149578063da8de31b14610161575b600080fd5b60408051602060046024803582810135601f81018590048502860185019096528585526100c295833595369560449491939091019190819084018382808284375094975061029b9650505050505050565b005b3480156100d057600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100c29583359536956044949193909101919081908401838280828437509497506105bf9650505050505050565b34801561012e57600080fd5b5061013761084a565b60408051918252519081900360200190f35b34801561015557600080fd5b506100c2600435610851565b34801561016d57600080fd5b506101796004356109a0565b6040805173ffffffffffffffffffffffffffffffffffffffff808a16825260208083018a90529282018890528516608082015282151560c082015260e06060820181815287519183019190915286519192909160a08401916101008501919089019080838360005b838110156101f95781810151838201526020016101e1565b50505050905090810190601f1680156102265780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610259578181015183820152602001610241565b50505050905090810190601f1680156102865780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b806001816040518082805190602001908083835b602083106102ce5780518252601f1990920191602091820191016102af565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205460ff161515915061030c905057600080fd5b66038d7ea4c6800034101561032057600080fd5b6040805160e0810182523373ffffffffffffffffffffffffffffffffffffffff908116825234602080840191825283850188815260608501888152600060808701819052875180850190985280885260a087019790975260c0860187905286546001810180895597805286517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636007909202918201805473ffffffffffffffffffffffffffffffffffffffff19169190971617865593517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56485015590517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565840155518051610455937f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56601929190910190610cc0565b50608082015160048201805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff90921691909117905560a082015180516104b1916005840191602090910190610cc0565b5060c08201518160060160006101000a81548160ff0219169083151502179055505050507f7fa461e2168f2e67290a768902eeef413a7086b80bd00282808b6bb55681da2333348585604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561057d578181015183820152602001610565565b50505050905090810190601f1680156105aa5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050565b6000806000848154811015156105d157fe5b9060005260206000209060070201905060405180807f7368613235360000000000000000000000000000000000000000000000000000815250600601905060405180910390206000191681600301604051808280546001816001161561010002031660029004801561067a5780601f1061065857610100808354040283529182019161067a565b820191906000526020600020905b815481529060010190602001808311610666575b5050915050604051809103902060001916141561072d576002836040518082805190602001908083835b602083106106c35780518252601f1990920191602091820191016106a4565b51815160209384036101000a600019018019909216911617905260405191909301945091925050808303816000865af1158015610704573d6000803e3d6000fd5b5050506040513d602081101561071957600080fd5b50519150610728848484610b33565b610844565b604080517f73686133000000000000000000000000000000000000000000000000000000008152905190819003600401812060038301805491929091819083906002610100600183161502600019019091160480156107c35780601f106107a15761010080835404028352918201916107c3565b820191906000526020600020905b8154815290600101906020018083116107af575b5050915050604051809103902060001916141561006c57826040518082805190602001908083835b6020831061080a5780518252601f1990920191602091820191016107eb565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150610728848484610b33565b50505050565b6000545b90565b6000813373ffffffffffffffffffffffffffffffffffffffff1660008281548110151561087a57fe5b600091825260209091206007909102015473ffffffffffffffffffffffffffffffffffffffff16146108ab57600080fd5b826000818154811015156108bb57fe5b600091825260209091206004600790920201015473ffffffffffffffffffffffffffffffffffffffff16158015610914575060008054829081106108fb57fe5b600091825260209091206006600790920201015460ff16155b151561091f57600080fd5b600080548590811061092d57fe5b6000918252602082206006600790920201908101805460ff1916600190811790915581549082015460405192965073ffffffffffffffffffffffffffffffffffffffff9091169281156108fc029290818181858888f19350505050158015610999573d6000803e3d6000fd5b5050505050565b60008054829081106109ae57fe5b60009182526020918290206007919091020180546001808301546002808501546003860180546040805161010097831615979097026000190190911693909304601f810189900489028601890190935282855273ffffffffffffffffffffffffffffffffffffffff9095169750919591949391830182828015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b50505050600483015460058401805460408051602060026101006001861615026000190190941693909304601f8101849004840282018401909252818152959673ffffffffffffffffffffffffffffffffffffffff9094169593945090830182828015610b205780601f10610af557610100808354040283529160200191610b20565b820191906000526020600020905b815481529060010190602001808311610b0357829003601f168201915b5050506006909301549192505060ff1687565b600083600081815481101515610b4557fe5b600091825260209091206004600790920201015473ffffffffffffffffffffffffffffffffffffffff16158015610b9e57506000805482908110610b8557fe5b600091825260209091206006600790920201015460ff16155b1515610ba957600080fd5b6000805486908110610bb757fe5b60009182526020909120600790910201600281015490925083141561006c5760048201805473ffffffffffffffffffffffffffffffffffffffff19163373ffffffffffffffffffffffffffffffffffffffff161790558351610c229060058401906020870190610cc0565b506040805173ffffffffffffffffffffffffffffffffffffffff331681526020810187905281517f0d543ef6f4a593d88bf5126fc281243b51bdff236df66b9dbf4932f84fba8e0c929181900390910190a1600182015460405173ffffffffffffffffffffffffffffffffffffffff33169180156108fc02916000818181858888f19350505050158015610cba573d6000803e3d6000fd5b50610999565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d0157805160ff1916838001178555610d2e565b82800160010185558215610d2e579182015b82811115610d2e578251825591602001919060010190610d13565b50610d3a929150610d3e565b5090565b61084e91905b80821115610d3a5760008155600101610d445600a165627a7a7230582037f6d661376913d1a0562c052a4cf616568ac6c8acb2b44d20e55e84cb4f63220029",
  "sourceMap": "25:3076:0:-;;;1046:164;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1086:24:0;;;;;;1113:4;1086:24;;;;;;;;;;;;;;;;:31;;-1:-1:-1;;1086:31:0;;;;;;;;1127:22;;;;;;;;;;;;;;;;;;;;:29;;;;;;;;25:3076;;;;;;",
  "deployedSourceMap": "25:3076:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1216:318;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1216:318:0;;-1:-1:-1;1216:318:0;;-1:-1:-1;;;;;;;1216:318:0;;;1540:605;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1540:605:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1540:605:0;;-1:-1:-1;1540:605:0;;-1:-1:-1;;;;;;;1540:605:0;2981:118;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2981:118:0;;;;;;;;;;;;;;;;;;;;2151:290;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2151:290:0;;;;;474:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;474:29:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1216:318;1298:9;746:14;761:9;746:25;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;746:25:0;;;;;-1:-1:-1;746:25:0;;;;;;;;;;;;;738:34;;;-1:-1:-1;738:34:0;;-1:-1:-1;738:34:0;;;;;1010:11;997:9;:24;;989:33;;;;;;1381:72;;;;;;;;1391:10;1381:72;;;;;;1403:9;1381:72;;;;;;;;;;;;;;;;;;;-1:-1:-1;1381:72:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27:10:-1;;1381:72:0;23:18:-1;;45:23;;;1365:89:0;;;;;;;;;;;;;;;-1:-1:-1;;1365:89:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1365:89:0;;;;;;;;;-1:-1:-1;;1365:89:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1469:58;1482:10;1494:9;1505:10;1517:9;1469:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1469:58:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1216:318;;;:::o;1540:605::-;1619:22;1651:27;1681:10;1692:6;1681:18;;;;;;;;;;;;;;;;;;;;1651:48;;1746:19;;;;;;;;;;;;;;;;;;;1713:52;;;1723:9;:18;;1713:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:52;;;;1709:430;;;1798:17;1805:9;1798:17;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1798:17:0;;;;;;;-1:-1:-1;263:2;;-1:-1;;1798:17:0;;;;-1:-1:-1;1798:17:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1798:17:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1798:17:0;;-1:-1:-1;1829:61:0;1856:6;1864:9;1798:17;1829:26;:61::i;:::-;1709:430;;;1944:17;;;;;;;;;;;;;;;;1921:18;;;1911:29;;1944:17;;1921:18;;1944:17;;1921:18;;1911:29;;;;;;;-1:-1:-1;;1911:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;;;;1907:232;;;2004:9;1994:20;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1994:20:0;;;;;;;;;;;;;;;;1977:37;;2028:61;2055:6;2063:9;2074:14;2028:26;:61::i;1907:232::-;1540:605;;;;:::o;2981:118::-;3047:4;3075:17;2981:118;;:::o;2151:290::-;2273:27;2211:6;652:10;613:49;;:10;624:6;613:18;;;;;;;;;;;;;;;;;;;;;;;:35;;;:49;605:58;;;;;;2239:6;851:10;862:6;851:18;;;;;;;;;;;;;;;;;;:33;:18;;;;;:33;;;;:41;:74;;;;-1:-1:-1;897:10:0;:18;;908:6;;897:18;;;;;;;;;;;;;;:28;:18;;;;;:28;;;;896:29;851:74;843:83;;;;;;;;2303:10;:18;;2314:6;;2303:18;;;;;;;;;;;;;2331:19;2303:18;;;;;2331:19;;;:26;;-1:-1:-1;;2331:26:0;2353:4;2331:26;;;;;;2375;;2412:21;;;;2367:67;;2303:18;;-1:-1:-1;2375:26:0;;;;;2367:67;;;;;;;2303:18;2367:67;2412:21;2375:26;2367:67;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2367:67:0;673:1;2151:290;;;:::o;474:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;474:29:0;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;474:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;474:29:0;;;;;;;-1:-1:-1;;474:29:0;;;:::o;2447:528::-;2593:27;2558:6;851:10;862:6;851:18;;;;;;;;;;;;;;;;;;:33;:18;;;;;:33;;;;:41;:74;;;;-1:-1:-1;897:10:0;:18;;908:6;;897:18;;;;;;;;;;;;;;:28;:18;;;;;:28;;;;896:29;851:74;843:83;;;;;;;;2623:10;:18;;2634:6;;2623:18;;;;;;;;;;;;;;;;;;;2674:19;;;;2623:18;;-1:-1:-1;2655:38:0;;2651:318;;;2709:24;;;:37;;-1:-1:-1;;2709:37:0;2736:10;2709:37;;;;;2760;;;;:25;;;;:37;;;;;:::i;:::-;-1:-1:-1;2817:36:0;;;;2834:10;2817:36;;;;;;;;;;;;;;;;;;;;;;2897:21;;;;2868:51;;:28;2876:10;2868:28;;:51;;;;;;;;;2897:21;2868:28;:51;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2868:51:0;2651:318;;25:3076;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25:3076:0;;;-1:-1:-1;25:3076:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity 0.4.23;\n\ncontract HashCracker {\n  \n    event NewHashEvent(address requestorAddress, uint bountyValue, bytes32 hashBytes, string hashType);\n    event CrackedHashEvent(address crackerAddress, uint hashCrackIndex);\n \n    struct HashCrack {\n        address requestorAddress;\n        uint bountyValue;\n\n        bytes32 hashBytes;\n        string hashType;\n       \n        address crackerAddress;\n        string crackedPassword;\n\n        bool cancelled;\n    }\n\n    HashCrack[] public hashCracks;\n    mapping (string => bool) validHashTypes;\n\n    modifier hashCrackBySender(uint _index) {\n        require(hashCracks[_index].requestorAddress == msg.sender);\n        _;\n    }\n\n    modifier validHashType(string _hashType) {\n        require(validHashTypes[_hashType]);\n        _;\n    }\n\n    modifier validHashCrack(uint _index) {\n        require(hashCracks[_index].crackerAddress == 0x00 && !hashCracks[_index].cancelled);\n        _;\n    }\n    \n    modifier validMinValue() {\n        require(msg.value >= 0.001 ether);\n        _;\n    }\n\n    constructor()\n    public \n    {\n        validHashTypes[\"sha256\"] = true;\n        validHashTypes[\"sha3\"] = true;\n        // validHashTypes[\"ripemd160\"] = true;\n    }\n\n    function requestHashCrack(bytes32 _hashBytes, string _hashType)\n    validHashType(_hashType)\n    validMinValue\n    payable\n    public \n    {\n        hashCracks.push(HashCrack(msg.sender, msg.value, _hashBytes, _hashType, 0x00, \"\", false));\n        emit NewHashEvent(msg.sender, msg.value, _hashBytes, _hashType);\n    }\n\n    function submitCrack(uint _index, string _password) \n    public \n    {\n        bytes32 hashedPassword;\n        HashCrack storage hashCrack = hashCracks[_index];\n        if (keccak256(hashCrack.hashType) == keccak256(\"sha256\")) {\n            hashedPassword = sha256(_password);\n            handleCrackAttemptInternal(_index, _password, hashedPassword);\n        } else if (keccak256(hashCrack.hashType) == keccak256(\"sha3\")) {\n            hashedPassword = keccak256(_password);\n            handleCrackAttemptInternal(_index, _password, hashedPassword);\n        } else {\n            revert();\n        }\n    }\n\n    function cancelHashCrack(uint _index)\n    hashCrackBySender(_index) \n    validHashCrack(_index)\n    public \n    {\n        HashCrack storage hashCrack = hashCracks[_index];\n        hashCrack.cancelled = true;\n        address(hashCrack.requestorAddress).transfer(hashCrack.bountyValue);\n    }\n\n    function handleCrackAttemptInternal(uint _index, string _password, bytes32 _hashedPassword)\n    validHashCrack(_index)\n    internal\n    {\n        HashCrack storage hashCrack = hashCracks[_index];\n        if (_hashedPassword == hashCrack.hashBytes) {\n            hashCrack.crackerAddress = msg.sender;\n            hashCrack.crackedPassword = _password;\n\n            emit CrackedHashEvent(msg.sender, _index);\n\n            address(msg.sender).transfer(hashCrack.bountyValue);\n        } else {\n            revert();\n        }\n    }\n\n    function getHashCracksLength() \n    public \n    view \n    returns(uint) \n    {\n        return hashCracks.length;\n    }\n}\n",
  "sourcePath": "/Volumes/code/projects/decipher/contracts/HashCracker.sol",
  "ast": {
    "absolutePath": "/Volumes/code/projects/decipher/contracts/HashCracker.sol",
    "exportedSymbols": {
      "HashCracker": [
        318
      ]
    },
    "id": 319,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 318,
        "linearizedBaseContracts": [
          318
        ],
        "name": "HashCracker",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 11,
            "name": "NewHashEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "indexed": false,
                  "name": "requestorAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "74:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "74:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "indexed": false,
                  "name": "bountyValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "100:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "100:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7,
                  "indexed": false,
                  "name": "hashBytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "118:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "118:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "name": "hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "137:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "137:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "73:80:0"
            },
            "src": "55:99:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17,
            "name": "CrackedHashEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "indexed": false,
                  "name": "crackerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "182:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "name": "hashCrackIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "206:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:45:0"
            },
            "src": "159:68:0"
          },
          {
            "canonicalName": "HashCracker.HashCrack",
            "id": 32,
            "members": [
              {
                "constant": false,
                "id": 19,
                "name": "requestorAddress",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "261:24:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 18,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "261:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21,
                "name": "bountyValue",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "295:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "295:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23,
                "name": "hashBytes",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "322:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 22,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "322:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 25,
                "name": "hashType",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "349:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 24,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27,
                "name": "crackerAddress",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "382:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 26,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "382:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 29,
                "name": "crackedPassword",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "414:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "414:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31,
                "name": "cancelled",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "447:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 30,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "447:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "HashCrack",
            "nodeType": "StructDefinition",
            "scope": 318,
            "src": "234:234:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 35,
            "name": "hashCracks",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "474:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
              "typeString": "struct HashCracker.HashCrack[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 33,
                "name": "HashCrack",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 32,
                "src": "474:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                  "typeString": "struct HashCracker.HashCrack"
                }
              },
              "id": 34,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "474:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage_ptr",
                "typeString": "struct HashCracker.HashCrack[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 39,
            "name": "validHashTypes",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "509:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
              "typeString": "mapping(string => bool)"
            },
            "typeName": {
              "id": 38,
              "keyType": {
                "id": 36,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "518:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "509:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                "typeString": "mapping(string => bool)"
              },
              "valueType": {
                "id": 37,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "528:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "595:86:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 44,
                              "name": "hashCracks",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35,
                              "src": "613:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                              }
                            },
                            "id": 46,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 45,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "624:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "613:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                              "typeString": "struct HashCracker.HashCrack storage ref"
                            }
                          },
                          "id": 47,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "requestorAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19,
                          "src": "613:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 48,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "652:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "652:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "613:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 43,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "605:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "605:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "605:58:0"
                },
                {
                  "id": 53,
                  "nodeType": "PlaceholderStatement",
                  "src": "673:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "name": "hashCrackBySender",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "582:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "581:13:0"
            },
            "src": "555:126:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "728:62:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "validHashTypes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "746:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                            "typeString": "mapping(string memory => bool)"
                          }
                        },
                        "id": 62,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 61,
                          "name": "_hashType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57,
                          "src": "761:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "746:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 59,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "738:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "738:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64,
                  "nodeType": "ExpressionStatement",
                  "src": "738:34:0"
                },
                {
                  "id": 65,
                  "nodeType": "PlaceholderStatement",
                  "src": "782:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 67,
            "name": "validHashType",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "_hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "710:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "709:18:0"
            },
            "src": "687:103:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "833:111:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 77,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 72,
                                "name": "hashCracks",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 35,
                                "src": "851:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                  "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                                }
                              },
                              "id": 74,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 73,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 69,
                                "src": "862:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "851:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref"
                              }
                            },
                            "id": 75,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "crackerAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27,
                            "src": "851:33:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30783030",
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "888:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x00"
                          },
                          "src": "851:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "896:29:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 78,
                                "name": "hashCracks",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 35,
                                "src": "897:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                  "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                                }
                              },
                              "id": 80,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 79,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 69,
                                "src": "908:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "897:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref"
                              }
                            },
                            "id": 81,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31,
                            "src": "897:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "851:74:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 71,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "843:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "843:83:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "843:83:0"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "936:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "name": "validHashCrack",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "820:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "819:13:0"
            },
            "src": "796:148:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "979:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 91,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "997:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "997:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "302e303031",
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1010:11:0",
                          "subdenomination": "ether",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000_by_1",
                            "typeString": "int_const 1000000000000000"
                          },
                          "value": "0.001"
                        },
                        "src": "997:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 90,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "989:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "989:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "989:33:0"
                },
                {
                  "id": 97,
                  "nodeType": "PlaceholderStatement",
                  "src": "1032:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "name": "validMinValue",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "976:2:0"
            },
            "src": "954:86:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 114,
              "nodeType": "Block",
              "src": "1076:134:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "validHashTypes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1086:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                          "typeString": "mapping(string memory => bool)"
                        }
                      },
                      "id": 104,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "736861323536",
                        "id": 103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1101:8:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                          "typeString": "literal_string \"sha256\""
                        },
                        "value": "sha256"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1086:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1113:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1086:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 107,
                  "nodeType": "ExpressionStatement",
                  "src": "1086:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 108,
                        "name": "validHashTypes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1127:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                          "typeString": "mapping(string memory => bool)"
                        }
                      },
                      "id": 110,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "73686133",
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1142:6:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                          "typeString": "literal_string \"sha3\""
                        },
                        "value": "sha3"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1127:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1152:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1127:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "1127:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 115,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1057:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1076:0:0"
            },
            "scope": 318,
            "src": "1046:164:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 152,
              "nodeType": "Block",
              "src": "1355:179:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 131,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "1391:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 132,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1391:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 133,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "1403:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1403:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 135,
                            "name": "_hashBytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "1414:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 136,
                            "name": "_hashType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119,
                            "src": "1426:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30783030",
                            "id": 137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1437:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x00"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "",
                            "id": 138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1443:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            },
                            "value": ""
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1447:5:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 130,
                          "name": "HashCrack",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "1381:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_HashCrack_$32_storage_ptr_$",
                            "typeString": "type(struct HashCracker.HashCrack storage pointer)"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1381:72:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_memory",
                          "typeString": "struct HashCracker.HashCrack memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_HashCrack_$32_memory",
                          "typeString": "struct HashCracker.HashCrack memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "hashCracks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "1365:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                          "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                        }
                      },
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1365:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_HashCrack_$32_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct HashCracker.HashCrack storage ref) returns (uint256)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1365:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 142,
                  "nodeType": "ExpressionStatement",
                  "src": "1365:89:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 333,
                          "src": "1482:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1482:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 333,
                          "src": "1494:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1494:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "_hashBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "1505:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 149,
                        "name": "_hashType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119,
                        "src": "1517:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 143,
                      "name": "NewHashEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1469:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_bytes32_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes32,string memory)"
                      }
                    },
                    "id": 150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1469:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 151,
                  "nodeType": "EmitStatement",
                  "src": "1464:63:0"
                }
              ]
            },
            "documentation": null,
            "id": 153,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 122,
                    "name": "_hashType",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 119,
                    "src": "1298:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 123,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 121,
                  "name": "validHashType",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 67,
                  "src": "1284:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1284:24:0"
              },
              {
                "arguments": null,
                "id": 125,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 124,
                  "name": "validMinValue",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "1313:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1313:13:0"
              }
            ],
            "name": "requestHashCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "name": "_hashBytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1242:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 119,
                  "name": "_hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1262:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1241:38:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1355:0:0"
            },
            "scope": 318,
            "src": "1216:318:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 217,
              "nodeType": "Block",
              "src": "1609:536:0",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 161,
                      "name": "hashedPassword",
                      "nodeType": "VariableDeclaration",
                      "scope": 218,
                      "src": "1619:22:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 160,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1619:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 162,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1619:22:0"
                },
                {
                  "assignments": [
                    164
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 164,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 218,
                      "src": "1651:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 163,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "1651:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "1681:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 167,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 166,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 155,
                      "src": "1692:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1681:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1651:48:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 170,
                            "name": "hashCrack",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 164,
                            "src": "1723:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                              "typeString": "struct HashCracker.HashCrack storage pointer"
                            }
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hashType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 25,
                          "src": "1723:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        ],
                        "id": 169,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "1713:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                          "typeString": "function () pure returns (bytes32)"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1713:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "736861323536",
                          "id": 174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1756:8:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                            "typeString": "literal_string \"sha256\""
                          },
                          "value": "sha256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                            "typeString": "literal_string \"sha256\""
                          }
                        ],
                        "id": 173,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "1746:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                          "typeString": "function () pure returns (bytes32)"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1746:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1713:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 164,
                              "src": "1921:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 192,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hashType",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 25,
                            "src": "1921:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          ],
                          "id": 190,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 327,
                          "src": "1911:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1911:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "73686133",
                            "id": 195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1954:6:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                              "typeString": "literal_string \"sha3\""
                            },
                            "value": "sha3"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                              "typeString": "literal_string \"sha3\""
                            }
                          ],
                          "id": 194,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 327,
                          "src": "1944:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1944:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "1911:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 214,
                      "nodeType": "Block",
                      "src": "2106:33:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 211,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                338,
                                339
                              ],
                              "referencedDeclaration": 338,
                              "src": "2120:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2120:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 213,
                          "nodeType": "ExpressionStatement",
                          "src": "2120:8:0"
                        }
                      ]
                    },
                    "id": 215,
                    "nodeType": "IfStatement",
                    "src": "1907:232:0",
                    "trueBody": {
                      "id": 210,
                      "nodeType": "Block",
                      "src": "1963:137:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "hashedPassword",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1977:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 200,
                                  "name": "_password",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 157,
                                  "src": "2004:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 199,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 327,
                                "src": "1994:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1994:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "1977:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 203,
                          "nodeType": "ExpressionStatement",
                          "src": "1977:37:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 205,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 155,
                                "src": "2055:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 206,
                                "name": "_password",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2063:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 207,
                                "name": "hashedPassword",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 161,
                                "src": "2074:14:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 204,
                              "name": "handleCrackAttemptInternal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 308,
                              "src": "2028:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bytes32_$returns$__$",
                                "typeString": "function (uint256,string memory,bytes32)"
                              }
                            },
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2028:61:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 209,
                          "nodeType": "ExpressionStatement",
                          "src": "2028:61:0"
                        }
                      ]
                    }
                  },
                  "id": 216,
                  "nodeType": "IfStatement",
                  "src": "1709:430:0",
                  "trueBody": {
                    "id": 189,
                    "nodeType": "Block",
                    "src": "1767:134:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "hashedPassword",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 161,
                            "src": "1781:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 179,
                                "name": "_password",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "1805:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 178,
                              "name": "sha256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 342,
                              "src": "1798:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha256_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1798:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "1781:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 182,
                        "nodeType": "ExpressionStatement",
                        "src": "1781:34:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 184,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "1856:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "_password",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 157,
                              "src": "1864:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 186,
                              "name": "hashedPassword",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1875:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 183,
                            "name": "handleCrackAttemptInternal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 308,
                            "src": "1829:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint256,string memory,bytes32)"
                            }
                          },
                          "id": 187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1829:61:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 188,
                        "nodeType": "ExpressionStatement",
                        "src": "1829:61:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 218,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "submitCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 218,
                  "src": "1561:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 154,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1561:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 157,
                  "name": "_password",
                  "nodeType": "VariableDeclaration",
                  "scope": 218,
                  "src": "1574:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1574:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1560:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1609:0:0"
            },
            "scope": 318,
            "src": "1540:605:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 250,
              "nodeType": "Block",
              "src": "2263:178:0",
              "statements": [
                {
                  "assignments": [
                    230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 230,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 251,
                      "src": "2273:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 229,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "2273:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 234,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 231,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "2303:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 233,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 232,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2314:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2303:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2273:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 235,
                        "name": "hashCrack",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "2331:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack storage pointer"
                        }
                      },
                      "id": 237,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "cancelled",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31,
                      "src": "2331:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2353:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2331:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 240,
                  "nodeType": "ExpressionStatement",
                  "src": "2331:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 246,
                          "name": "hashCrack",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "2412:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                            "typeString": "struct HashCracker.HashCrack storage pointer"
                          }
                        },
                        "id": 247,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bountyValue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 21,
                        "src": "2412:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 242,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 230,
                              "src": "2375:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 243,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "requestorAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19,
                            "src": "2375:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 241,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2367:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2367:35:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2367:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2367:67:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 249,
                  "nodeType": "ExpressionStatement",
                  "src": "2367:67:0"
                }
              ]
            },
            "documentation": null,
            "id": 251,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 223,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 220,
                    "src": "2211:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 222,
                  "name": "hashCrackBySender",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 55,
                  "src": "2193:17:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2193:25:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 220,
                    "src": "2239:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 227,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "validHashCrack",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2224:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2224:22:0"
              }
            ],
            "name": "cancelHashCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 220,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 251,
                  "src": "2176:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 219,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2176:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2175:13:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 228,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2263:0:0"
            },
            "scope": 318,
            "src": "2151:290:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 307,
              "nodeType": "Block",
              "src": "2583:392:0",
              "statements": [
                {
                  "assignments": [
                    264
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 264,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 308,
                      "src": "2593:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 263,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "2593:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 268,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 265,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "2623:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 267,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 266,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 253,
                      "src": "2634:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2623:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2593:48:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 269,
                      "name": "_hashedPassword",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 257,
                      "src": "2655:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "hashCrack",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 264,
                        "src": "2674:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack storage pointer"
                        }
                      },
                      "id": 271,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hashBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23,
                      "src": "2674:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2655:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 305,
                    "nodeType": "Block",
                    "src": "2936:33:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 302,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              338,
                              339
                            ],
                            "referencedDeclaration": 338,
                            "src": "2950:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2950:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 304,
                        "nodeType": "ExpressionStatement",
                        "src": "2950:8:0"
                      }
                    ]
                  },
                  "id": 306,
                  "nodeType": "IfStatement",
                  "src": "2651:318:0",
                  "trueBody": {
                    "id": 301,
                    "nodeType": "Block",
                    "src": "2695:235:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 273,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 264,
                              "src": "2709:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "crackerAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27,
                            "src": "2709:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 276,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "2736:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2736:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2709:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 279,
                        "nodeType": "ExpressionStatement",
                        "src": "2709:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 264,
                              "src": "2760:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 282,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "crackedPassword",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29,
                            "src": "2760:25:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 283,
                            "name": "_password",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 255,
                            "src": "2788:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "2760:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 285,
                        "nodeType": "ExpressionStatement",
                        "src": "2760:37:0"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 287,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 333,
                                "src": "2834:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 288,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2834:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 289,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 253,
                              "src": "2846:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 286,
                            "name": "CrackedHashEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2817:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2817:36:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 291,
                        "nodeType": "EmitStatement",
                        "src": "2812:41:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 297,
                                "name": "hashCrack",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 264,
                                "src": "2897:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                  "typeString": "struct HashCracker.HashCrack storage pointer"
                                }
                              },
                              "id": 298,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "bountyValue",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 21,
                              "src": "2897:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 293,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 333,
                                    "src": "2876:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2876:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 292,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2868:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 295,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2868:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2868:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2868:51:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 300,
                        "nodeType": "ExpressionStatement",
                        "src": "2868:51:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 308,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 260,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 253,
                    "src": "2558:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 261,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 259,
                  "name": "validHashCrack",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2543:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2543:22:0"
              }
            ],
            "name": "handleCrackAttemptInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 253,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2483:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 252,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2483:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 255,
                  "name": "_password",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2496:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 254,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 257,
                  "name": "_hashedPassword",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2514:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 256,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2482:56:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2583:0:0"
            },
            "scope": 318,
            "src": "2447:528:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "3058:41:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 313,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "3075:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 314,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "3075:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 312,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "3068:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHashCracksLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3009:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 311,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "3047:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 310,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3047:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3046:6:0"
            },
            "scope": 318,
            "src": "2981:118:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 319,
        "src": "25:3076:0"
      }
    ],
    "src": "0:3102:0"
  },
  "legacyAST": {
    "absolutePath": "/Volumes/code/projects/decipher/contracts/HashCracker.sol",
    "exportedSymbols": {
      "HashCracker": [
        318
      ]
    },
    "id": 319,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 318,
        "linearizedBaseContracts": [
          318
        ],
        "name": "HashCracker",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 11,
            "name": "NewHashEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "indexed": false,
                  "name": "requestorAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "74:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "74:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "indexed": false,
                  "name": "bountyValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "100:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "100:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7,
                  "indexed": false,
                  "name": "hashBytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "118:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "118:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "name": "hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "137:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "137:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "73:80:0"
            },
            "src": "55:99:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17,
            "name": "CrackedHashEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "indexed": false,
                  "name": "crackerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "182:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "name": "hashCrackIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "206:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:45:0"
            },
            "src": "159:68:0"
          },
          {
            "canonicalName": "HashCracker.HashCrack",
            "id": 32,
            "members": [
              {
                "constant": false,
                "id": 19,
                "name": "requestorAddress",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "261:24:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 18,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "261:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21,
                "name": "bountyValue",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "295:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "295:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23,
                "name": "hashBytes",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "322:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 22,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "322:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 25,
                "name": "hashType",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "349:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 24,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 27,
                "name": "crackerAddress",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "382:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 26,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "382:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 29,
                "name": "crackedPassword",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "414:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 28,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "414:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 31,
                "name": "cancelled",
                "nodeType": "VariableDeclaration",
                "scope": 32,
                "src": "447:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 30,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "447:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "HashCrack",
            "nodeType": "StructDefinition",
            "scope": 318,
            "src": "234:234:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 35,
            "name": "hashCracks",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "474:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
              "typeString": "struct HashCracker.HashCrack[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 33,
                "name": "HashCrack",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 32,
                "src": "474:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                  "typeString": "struct HashCracker.HashCrack"
                }
              },
              "id": 34,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "474:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage_ptr",
                "typeString": "struct HashCracker.HashCrack[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 39,
            "name": "validHashTypes",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "509:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
              "typeString": "mapping(string => bool)"
            },
            "typeName": {
              "id": 38,
              "keyType": {
                "id": 36,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "518:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "509:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                "typeString": "mapping(string => bool)"
              },
              "valueType": {
                "id": 37,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "528:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "595:86:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 44,
                              "name": "hashCracks",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35,
                              "src": "613:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                              }
                            },
                            "id": 46,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 45,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "624:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "613:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                              "typeString": "struct HashCracker.HashCrack storage ref"
                            }
                          },
                          "id": 47,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "requestorAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19,
                          "src": "613:35:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 48,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "652:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "652:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "613:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 43,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "605:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "605:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "605:58:0"
                },
                {
                  "id": 53,
                  "nodeType": "PlaceholderStatement",
                  "src": "673:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "name": "hashCrackBySender",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "582:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "581:13:0"
            },
            "src": "555:126:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "728:62:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "validHashTypes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "746:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                            "typeString": "mapping(string memory => bool)"
                          }
                        },
                        "id": 62,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 61,
                          "name": "_hashType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57,
                          "src": "761:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "746:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 59,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "738:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "738:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64,
                  "nodeType": "ExpressionStatement",
                  "src": "738:34:0"
                },
                {
                  "id": 65,
                  "nodeType": "PlaceholderStatement",
                  "src": "782:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 67,
            "name": "validHashType",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "_hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "710:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "709:18:0"
            },
            "src": "687:103:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "833:111:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 77,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 72,
                                "name": "hashCracks",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 35,
                                "src": "851:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                  "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                                }
                              },
                              "id": 74,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 73,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 69,
                                "src": "862:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "851:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref"
                              }
                            },
                            "id": 75,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "crackerAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27,
                            "src": "851:33:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30783030",
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "888:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x00"
                          },
                          "src": "851:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "896:29:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 78,
                                "name": "hashCracks",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 35,
                                "src": "897:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                                  "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                                }
                              },
                              "id": 80,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 79,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 69,
                                "src": "908:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "897:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                                "typeString": "struct HashCracker.HashCrack storage ref"
                              }
                            },
                            "id": 81,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31,
                            "src": "897:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "851:74:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 71,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "843:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "843:83:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "843:83:0"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "936:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "name": "validHashCrack",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "820:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "819:13:0"
            },
            "src": "796:148:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "979:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 91,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "997:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "997:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "302e303031",
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1010:11:0",
                          "subdenomination": "ether",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000_by_1",
                            "typeString": "int_const 1000000000000000"
                          },
                          "value": "0.001"
                        },
                        "src": "997:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 90,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        336,
                        337
                      ],
                      "referencedDeclaration": 336,
                      "src": "989:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "989:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "989:33:0"
                },
                {
                  "id": 97,
                  "nodeType": "PlaceholderStatement",
                  "src": "1032:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "name": "validMinValue",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "976:2:0"
            },
            "src": "954:86:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 114,
              "nodeType": "Block",
              "src": "1076:134:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "validHashTypes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1086:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                          "typeString": "mapping(string memory => bool)"
                        }
                      },
                      "id": 104,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "736861323536",
                        "id": 103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1101:8:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                          "typeString": "literal_string \"sha256\""
                        },
                        "value": "sha256"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1086:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1113:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1086:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 107,
                  "nodeType": "ExpressionStatement",
                  "src": "1086:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 108,
                        "name": "validHashTypes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1127:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_bool_$",
                          "typeString": "mapping(string memory => bool)"
                        }
                      },
                      "id": 110,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "73686133",
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1142:6:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                          "typeString": "literal_string \"sha3\""
                        },
                        "value": "sha3"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1127:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1152:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1127:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "1127:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 115,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1057:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1076:0:0"
            },
            "scope": 318,
            "src": "1046:164:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 152,
              "nodeType": "Block",
              "src": "1355:179:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 131,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "1391:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 132,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1391:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 133,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "1403:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1403:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 135,
                            "name": "_hashBytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "1414:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 136,
                            "name": "_hashType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119,
                            "src": "1426:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30783030",
                            "id": 137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1437:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x00"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "",
                            "id": 138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1443:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            },
                            "value": ""
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1447:5:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 130,
                          "name": "HashCrack",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "1381:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_HashCrack_$32_storage_ptr_$",
                            "typeString": "type(struct HashCracker.HashCrack storage pointer)"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1381:72:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_memory",
                          "typeString": "struct HashCracker.HashCrack memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_HashCrack_$32_memory",
                          "typeString": "struct HashCracker.HashCrack memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "hashCracks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "1365:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                          "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                        }
                      },
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1365:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_HashCrack_$32_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct HashCracker.HashCrack storage ref) returns (uint256)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1365:89:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 142,
                  "nodeType": "ExpressionStatement",
                  "src": "1365:89:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 333,
                          "src": "1482:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1482:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 333,
                          "src": "1494:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1494:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "_hashBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "1505:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 149,
                        "name": "_hashType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119,
                        "src": "1517:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 143,
                      "name": "NewHashEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1469:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_bytes32_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes32,string memory)"
                      }
                    },
                    "id": 150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1469:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 151,
                  "nodeType": "EmitStatement",
                  "src": "1464:63:0"
                }
              ]
            },
            "documentation": null,
            "id": 153,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 122,
                    "name": "_hashType",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 119,
                    "src": "1298:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 123,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 121,
                  "name": "validHashType",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 67,
                  "src": "1284:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1284:24:0"
              },
              {
                "arguments": null,
                "id": 125,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 124,
                  "name": "validMinValue",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "1313:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1313:13:0"
              }
            ],
            "name": "requestHashCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "name": "_hashBytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1242:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 119,
                  "name": "_hashType",
                  "nodeType": "VariableDeclaration",
                  "scope": 153,
                  "src": "1262:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1241:38:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1355:0:0"
            },
            "scope": 318,
            "src": "1216:318:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 217,
              "nodeType": "Block",
              "src": "1609:536:0",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 161,
                      "name": "hashedPassword",
                      "nodeType": "VariableDeclaration",
                      "scope": 218,
                      "src": "1619:22:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 160,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1619:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 162,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1619:22:0"
                },
                {
                  "assignments": [
                    164
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 164,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 218,
                      "src": "1651:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 163,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "1651:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "1681:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 167,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 166,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 155,
                      "src": "1692:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1681:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1651:48:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 170,
                            "name": "hashCrack",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 164,
                            "src": "1723:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                              "typeString": "struct HashCracker.HashCrack storage pointer"
                            }
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hashType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 25,
                          "src": "1723:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        ],
                        "id": 169,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "1713:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                          "typeString": "function () pure returns (bytes32)"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1713:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "736861323536",
                          "id": 174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1756:8:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                            "typeString": "literal_string \"sha256\""
                          },
                          "value": "sha256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_af55790ffe3aced4bba4137afd958140c8b3138f4a53685d60bc4f3afe4e94bb",
                            "typeString": "literal_string \"sha256\""
                          }
                        ],
                        "id": 173,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "1746:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                          "typeString": "function () pure returns (bytes32)"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1746:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1713:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 164,
                              "src": "1921:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 192,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hashType",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 25,
                            "src": "1921:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          ],
                          "id": 190,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 327,
                          "src": "1911:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1911:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "73686133",
                            "id": 195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1954:6:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                              "typeString": "literal_string \"sha3\""
                            },
                            "value": "sha3"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_a3bb7d232ce5b2c4a05b9ce120bb1786b2c6482cef2b7fe3a951fc0995cc394e",
                              "typeString": "literal_string \"sha3\""
                            }
                          ],
                          "id": 194,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 327,
                          "src": "1944:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1944:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "1911:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 214,
                      "nodeType": "Block",
                      "src": "2106:33:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 211,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                338,
                                339
                              ],
                              "referencedDeclaration": 338,
                              "src": "2120:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2120:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 213,
                          "nodeType": "ExpressionStatement",
                          "src": "2120:8:0"
                        }
                      ]
                    },
                    "id": 215,
                    "nodeType": "IfStatement",
                    "src": "1907:232:0",
                    "trueBody": {
                      "id": 210,
                      "nodeType": "Block",
                      "src": "1963:137:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "hashedPassword",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1977:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 200,
                                  "name": "_password",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 157,
                                  "src": "2004:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 199,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 327,
                                "src": "1994:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1994:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "src": "1977:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 203,
                          "nodeType": "ExpressionStatement",
                          "src": "1977:37:0"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 205,
                                "name": "_index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 155,
                                "src": "2055:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 206,
                                "name": "_password",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2063:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 207,
                                "name": "hashedPassword",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 161,
                                "src": "2074:14:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 204,
                              "name": "handleCrackAttemptInternal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 308,
                              "src": "2028:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bytes32_$returns$__$",
                                "typeString": "function (uint256,string memory,bytes32)"
                              }
                            },
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2028:61:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 209,
                          "nodeType": "ExpressionStatement",
                          "src": "2028:61:0"
                        }
                      ]
                    }
                  },
                  "id": 216,
                  "nodeType": "IfStatement",
                  "src": "1709:430:0",
                  "trueBody": {
                    "id": 189,
                    "nodeType": "Block",
                    "src": "1767:134:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "hashedPassword",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 161,
                            "src": "1781:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 179,
                                "name": "_password",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "1805:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 178,
                              "name": "sha256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 342,
                              "src": "1798:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha256_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1798:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "1781:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 182,
                        "nodeType": "ExpressionStatement",
                        "src": "1781:34:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 184,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "1856:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "_password",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 157,
                              "src": "1864:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 186,
                              "name": "hashedPassword",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1875:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 183,
                            "name": "handleCrackAttemptInternal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 308,
                            "src": "1829:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint256,string memory,bytes32)"
                            }
                          },
                          "id": 187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1829:61:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 188,
                        "nodeType": "ExpressionStatement",
                        "src": "1829:61:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 218,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "submitCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 218,
                  "src": "1561:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 154,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1561:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 157,
                  "name": "_password",
                  "nodeType": "VariableDeclaration",
                  "scope": 218,
                  "src": "1574:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1574:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1560:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1609:0:0"
            },
            "scope": 318,
            "src": "1540:605:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 250,
              "nodeType": "Block",
              "src": "2263:178:0",
              "statements": [
                {
                  "assignments": [
                    230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 230,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 251,
                      "src": "2273:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 229,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "2273:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 234,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 231,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "2303:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 233,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 232,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2314:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2303:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2273:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 235,
                        "name": "hashCrack",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "2331:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack storage pointer"
                        }
                      },
                      "id": 237,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "cancelled",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31,
                      "src": "2331:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2353:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2331:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 240,
                  "nodeType": "ExpressionStatement",
                  "src": "2331:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 246,
                          "name": "hashCrack",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "2412:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                            "typeString": "struct HashCracker.HashCrack storage pointer"
                          }
                        },
                        "id": 247,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bountyValue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 21,
                        "src": "2412:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 242,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 230,
                              "src": "2375:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 243,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "requestorAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19,
                            "src": "2375:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 241,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2367:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2367:35:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2367:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2367:67:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 249,
                  "nodeType": "ExpressionStatement",
                  "src": "2367:67:0"
                }
              ]
            },
            "documentation": null,
            "id": 251,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 223,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 220,
                    "src": "2211:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 222,
                  "name": "hashCrackBySender",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 55,
                  "src": "2193:17:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2193:25:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 220,
                    "src": "2239:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 227,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "validHashCrack",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2224:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2224:22:0"
              }
            ],
            "name": "cancelHashCrack",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 220,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 251,
                  "src": "2176:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 219,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2176:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2175:13:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 228,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2263:0:0"
            },
            "scope": 318,
            "src": "2151:290:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 307,
              "nodeType": "Block",
              "src": "2583:392:0",
              "statements": [
                {
                  "assignments": [
                    264
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 264,
                      "name": "hashCrack",
                      "nodeType": "VariableDeclaration",
                      "scope": 308,
                      "src": "2593:27:0",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                        "typeString": "struct HashCracker.HashCrack"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 263,
                        "name": "HashCrack",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 32,
                        "src": "2593:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 268,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 265,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "2623:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 267,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 266,
                      "name": "_index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 253,
                      "src": "2634:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2623:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_HashCrack_$32_storage",
                      "typeString": "struct HashCracker.HashCrack storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2593:48:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 269,
                      "name": "_hashedPassword",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 257,
                      "src": "2655:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "hashCrack",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 264,
                        "src": "2674:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                          "typeString": "struct HashCracker.HashCrack storage pointer"
                        }
                      },
                      "id": 271,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hashBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23,
                      "src": "2674:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2655:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 305,
                    "nodeType": "Block",
                    "src": "2936:33:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 302,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              338,
                              339
                            ],
                            "referencedDeclaration": 338,
                            "src": "2950:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2950:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 304,
                        "nodeType": "ExpressionStatement",
                        "src": "2950:8:0"
                      }
                    ]
                  },
                  "id": 306,
                  "nodeType": "IfStatement",
                  "src": "2651:318:0",
                  "trueBody": {
                    "id": 301,
                    "nodeType": "Block",
                    "src": "2695:235:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 273,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 264,
                              "src": "2709:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "crackerAddress",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27,
                            "src": "2709:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 276,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 333,
                              "src": "2736:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2736:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2709:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 279,
                        "nodeType": "ExpressionStatement",
                        "src": "2709:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "hashCrack",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 264,
                              "src": "2760:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                "typeString": "struct HashCracker.HashCrack storage pointer"
                              }
                            },
                            "id": 282,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "crackedPassword",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29,
                            "src": "2760:25:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 283,
                            "name": "_password",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 255,
                            "src": "2788:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "2760:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 285,
                        "nodeType": "ExpressionStatement",
                        "src": "2760:37:0"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 287,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 333,
                                "src": "2834:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 288,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2834:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 289,
                              "name": "_index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 253,
                              "src": "2846:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 286,
                            "name": "CrackedHashEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2817:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2817:36:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 291,
                        "nodeType": "EmitStatement",
                        "src": "2812:41:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 297,
                                "name": "hashCrack",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 264,
                                "src": "2897:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_HashCrack_$32_storage_ptr",
                                  "typeString": "struct HashCracker.HashCrack storage pointer"
                                }
                              },
                              "id": 298,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "bountyValue",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 21,
                              "src": "2897:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 293,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 333,
                                    "src": "2876:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2876:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 292,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2868:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 295,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2868:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2868:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2868:51:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 300,
                        "nodeType": "ExpressionStatement",
                        "src": "2868:51:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 308,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 260,
                    "name": "_index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 253,
                    "src": "2558:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 261,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 259,
                  "name": "validHashCrack",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2543:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2543:22:0"
              }
            ],
            "name": "handleCrackAttemptInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 253,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2483:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 252,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2483:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 255,
                  "name": "_password",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2496:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 254,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 257,
                  "name": "_hashedPassword",
                  "nodeType": "VariableDeclaration",
                  "scope": 308,
                  "src": "2514:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 256,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2482:56:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2583:0:0"
            },
            "scope": 318,
            "src": "2447:528:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "3058:41:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 313,
                      "name": "hashCracks",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35,
                      "src": "3075:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_HashCrack_$32_storage_$dyn_storage",
                        "typeString": "struct HashCracker.HashCrack storage ref[] storage ref"
                      }
                    },
                    "id": 314,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "3075:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 312,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "3068:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHashCracksLength",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3009:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 311,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "3047:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 310,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3047:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3046:6:0"
            },
            "scope": 318,
            "src": "2981:118:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 319,
        "src": "25:3076:0"
      }
    ],
    "src": "0:3102:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x84227c5a9a44483a52e5f9c9ce1f1c4407fff455",
      "transactionHash": "0x57944774b40cb5698156612f4b5feea6f208b46566f87893977fac8692caa3b4"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0xeced0499abe8c581f8e595cd64790c4b355e0e86",
      "transactionHash": "0xa68c64e5d6b22ce92d868918a2361439287a97d773a0a86a1184e0d9cbfe2ad8"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-10T19:41:10.444Z"
};

function pay() {
    var contractAbi = web3.eth.contract(contract_information.abi);
    var myContract = contractAbi.at(networks['networks']['3'].address);
    myContract.requestHashCrack(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value, {'value': document.forms['submit_hash'].price.value * 10**18}, console.log)
}