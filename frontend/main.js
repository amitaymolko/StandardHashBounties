fetch("HashCracker.json").then((e) => e.json().then(function(text){
  window.HashCrackerJson = text
  window.HashCrackerAbi = web3.eth.contract(window.HashCrackerJson.abi);
  window.HashCracker = window.HashCrackerAbi.at(window.HashCrackerJson['networks']['3'].address);
  loadedHashCracker()
}));

function closeModal(tx) {
    $('#exampleModal').modal('hide');
    $('#thanksYou').modal('show');
    window.tx = tx;
}

function loadedHashCracker() {
  loadHashBounties()
}

function loadHashBounties() {
  window.HashCracker.getHashCracksLength(function (err, value) {
    if (err) {
      console.log('err', err);
    } else {
      var length = value.toNumber();
      window.hashBounties = [];
      for (var index = 0; index < length; index++) {
        loadHashBounty(index)
      }
    }
  })
}

function loadHashBounty(index) {
  window.HashCracker.hashCracks(index, function (err, value) {
    if (err) {
      console.log('err', err);
    } else {
      window.hashBounties[index] = value
      reloadHashCrackes()
    }
  })
}

function reloadHashCrackes() {
}

function pay() {
  console.log(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value);
  window.HashCracker.requestHashCrack(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value, {'value': document.forms['submit_hash'].price.value * 10**18}, closeModal)
}