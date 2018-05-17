


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

app.controller('hashBountiesCtrl', function ($scope, $http) {
  $scope.hashTypes = [
    { name: 'sha256' }, 
    { name: 'sha3' },
    { name: 'Ethereum Wallet', file: 1 },
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
            value[7] = index;
if (value[2] != 0x00)
            $scope.hashBounties.push(value);
          console.log('$scope.hashBounties', $scope.hashBounties)
        });
      }
    })
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
    
    $scope.pay = function() {
      var hash = document.forms['submit_hash'].hash_to_break.value
      var hash_type = document.forms['submit_hash'].hash_type.value
      var price = document.forms['submit_hash'].price.value

      console.log(hash, hash_type, price);
      var input = ""
      $scope.HashCracker.requestHashCrack(hash, hash_type, input, { 'value': price * 10**18}, closeModal)
    }
    
    $scope.submitCrack = function() {
        console.log($scope.selectedIndex, document.forms['submit_crack'].password.value);
        $scope.HashCracker.submitCrack($scope.selectedIndex, document.forms['submit_crack'].password.value, closeModal)
    }
    
    $scope.cancelHashBounty = function() {
        $scope.HashCracker.cancelHashCrack($scope.selectedIndex, closeModal)
    }
});

