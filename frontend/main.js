

function closeModal(tx) {
    $('#exampleModal').modal('hide');
    $('#thanksYou').modal('show');
    window.tx_id = tx;
    document.getElementById('tx').innerText = tx;
}

var app = angular.module("myApp", []);
app.controller('hashBountiesCtrl', function ($scope, $http) {
  fetch("HashCracker.json").then((e) => e.json().then(function (text) {
    window.HashCrackerJson = text
    window.HashCrackerAbi = web3.eth.contract(window.HashCrackerJson.abi);
    window.HashCracker = window.HashCrackerAbi.at(window.HashCrackerJson['networks']['3'].address);
    loadedHashCracker($scope)
  }));

  function loadedHashCracker($scope) {
    loadHashBounties($scope)
  }

  function loadHashBounties($scope) {
    window.HashCracker.getHashCracksLength(function (err, value) {
      if (err) {
        console.log('err', err);
      } else {
        var length = value.toNumber();
        window.hashBounties = [];
        for (var index = 0; index < length; index++) {
          loadHashBounty(index, $scope)
        }
      }
    })
  }


  function loadHashBounty(index, $scope) {
    window.HashCracker.hashCracks(index, function (err, value) {
      if (err) {
        console.log('err', err);
      } else {
        window.hashBounties[index] = value
        $scope.$apply(function () {
          $scope.hashBounties = window.hashBounties
          console.log('$scope.hashBounties', $scope.hashBounties)
        });
      }
    })
  }
});


function pay() {
  console.log(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value);
  window.HashCracker.requestHashCrack(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value, {'value': document.forms['submit_hash'].price.value * 10**18}, closeModal)
}