fetch("HashCracker.json").then((e) => e.json().then(function(text){
  window.HashCrackerJson = text
  window.HashCrackerAbi = web3.eth.contract(window.HashCrackerJson.abi);
  window.HashCracker = window.HashCrackerAbi.at(window.HashCrackerJson['networks']['3'].address);
}));

function closeModal(tx) {
    $('#exampleModal').modal('hide');
    $('#thanksYou').modal('show');
    window.tx = tx;
}

function pay() {
    console.log(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value);
  window.HashCracker.requestHashCrack(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value, {'value': document.forms['submit_hash'].price.value * 10**18}, closeModal)
}