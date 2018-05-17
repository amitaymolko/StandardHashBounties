


function closeModals() {
    $('#exampleModal').modal('hide');
    $('#cancelModal').modal('hide');
    $('#submitModal').modal('hide');
}

function closeModal(tx, tx_id) {
    closeModals();

    $('#thanksYou').modal('show');
    window.tx_id = tx_id;
    document.getElementById('tx').innerText = tx_id.substr(0, 12) + "...";
    document.getElementById('tx').href = "http://ropsten.etherscan.io/tx/" + tx_id;
}

var app = angular.module("myApp", []);
app.directive("fileread", [function () {
  return {
    scope: {
      fileread: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.fileread = loadEvent.target.result;
          });
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]);

app.controller('hashBountiesCtrl', function ($scope, $http) {
  $scope.hashTypes = [
    { name: 'sha256', value: 'sha256' }, 
    { name: 'sha3', value: 'sha256' },
    { name: 'Ethereum Wallet', value: 'scrypt', file: 1 },
  ];

  fetch("HashCracker.json").then((e) => e.json().then(function (text) {
    $scope.HashCrackerJson = text
    $scope.HashCrackerAbi = web3.eth.contract($scope.HashCrackerJson.abi);
    $scope.HashCracker = $scope.HashCrackerAbi.at($scope.HashCrackerJson['networks']['3'].address);
    loadedHashCracker($scope)
  }));

  function loadedHashCracker($scope) {
    loadHashBounties($scope)
  }

  function loadHashBounties($scope) {
    $scope.HashCracker.getHashCracksLength(function (err, value) {
      if (err) {
        console.log('err', err);
      } else {
        var length = value.toNumber();
        $scope.hashBounties = [];
        for (var index = 0; index < length; index++) {
          loadHashBounty(index, $scope)
        }
      }
    })
  }

  function loadHashBounty(index, $scope) {
    $scope.HashCracker.hashCracks(index, function (err, value) {
      if (err) {
        console.log('err', err);
      } else {
        $scope.$apply(function () {
            value[8] = index;
            if (value[2] != 0x00)
              $scope.hashBounties.push(value);
          console.log('$scope.hashBounties', $scope.hashBounties)
        });
      }
    })
  }
  
  $scope.setUploadFile = function(changeEvent) {
    var reader = new FileReader();
    reader.onload = function (loadEvent) {
      $scope.$apply(function () {
        $scope.inputFile = loadEvent.target.result;
      });
    }
    reader.readAsDataURL(changeEvent.target.files[0]);
  }
    $scope.bounty_price = function(bignum) {
        return web3.fromWei(bignum.toNumber(), "ether" )
    }
    $scope.status = function(hash_bounty) {
        
        if(hash_bounty[6])
            return 'Cancelled';
            
        if(hash_bounty[5].length > 0)
            return 'Cracked (' + hash_bounty[5] + ')'
        
        return 'Pending';
        
    }
    $scope.check_user = function(address) {
        
        if(address == web3.eth.accounts[0]) {
            return 'user_request';
        } 
        return 0;
    }
    
    $scope.openCancelModal = function(index) {
        $scope.selectedIndex = index;
        $('#cancelModal').modal('show')
    }
    
    $scope.openSubmitCrackModal = function(index) {
          $scope.selectedIndex = index;
        $('#submitModal').modal('show')
    }
  function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    return hex;
  } 

  $scope.requestHashCrack = function() {
    console.log('$scope', $scope)
    
    var hash = $scope.inputHash
    var hash_type = $scope.selectedItem.value
    var file = $scope.inputFile
    var price = $scope.inputPrice
    var inputData = ""

    if (hash_type == 'scrypt' && file.startsWith('data:;base64,')) {
      var data = file.substring('data:;base64,'.length)
      var dataString = atob(data)
      var json = JSON.parse(dataString)
      inputData = `0x${json.Crypto.ciphertext}${decimalToHex(json.Crypto.kdfparams.dklen)}${json.Crypto.kdfparams.salt}${decimalToHex(json.Crypto.kdfparams.n, 4)}${decimalToHex(json.Crypto.kdfparams.r)}${decimalToHex(json.Crypto.kdfparams.p)}${json.Crypto.mac}`      
      hash = web3.sha3(inputData, { encoding: "hex" })
    }

    console.log(hash, hash_type, price, inputData);
    $scope.HashCracker.requestHashCrack(hash, hash_type, inputData, { 'value': price * 10**18}, closeModal)
  }
    
    $scope.submitCrack = function() {
        console.log($scope.selectedIndex, document.forms['submit_crack'].password.value);
      $scope.HashCracker.submitCrack($scope.selectedIndex, document.forms['submit_crack'].password.value, { 'value': 0.001 * 10 ** 18 }, closeModal)
    }
    
    $scope.cancelHashBounty = function() {
        $scope.HashCracker.cancelHashCrack($scope.selectedIndex, closeModal)
    }
});

