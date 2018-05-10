fetch("HashCracker.json").then((e) => e.json().then(function(text){window.contract = text}));

function closeModal(tx) {
    $('#exampleModal').modal('hide');
    $('#thanksYou').modal('show');
    window.tx = tx;
}

function pay() {
    var contractAbi = web3.eth.contract(window.contract.abi);
    var myContract = contractAbi.at(window.contract['networks']['3'].address);
    console.log(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value);
    myContract.requestHashCrack(document.forms['submit_hash'].hash_to_break.value, document.forms['submit_hash'].hash_type.value, {'value': document.forms['submit_hash'].price.value * 10**18}, closeModal)
}