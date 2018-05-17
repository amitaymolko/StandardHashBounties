const fetch = require('fetch')
const contract = require('truffle-contract')
const scryptsy = require('scryptsy')
const ethUtil = require('ethereumjs-util')
const HDWalletProviderPriv = require("truffle-hdwallet-provider-privkey");
const HDWalletProvider = require("truffle-hdwallet-provider");

require('dotenv').config({ path: '.env' })

const NETWORK = process.env.NETWORK
const ORACLE_FROM_ADDRESS = process.env.ORACLE_FROM_ADDRESS
const ORACLE_PRIVATE_KEY = process.env.ORACLE_PRIVATE_KEY
console.log('NETWORK', NETWORK)

const HashCrackerContract = require('../build/contracts/HashCracker.json')

const Web3 = require('web3')
let web3 
if (NETWORK == 'development') {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
} else if (NETWORK == 'ropsten') {
    web3 = new Web3(new HDWalletProviderPriv(ORACLE_PRIVATE_KEY, `https://ropsten.infura.io/`))
}

const BN = web3.utils.BN

const hashCrackerContract = contract(HashCrackerContract)
hashCrackerContract.setProvider(web3.currentProvider)

if (typeof hashCrackerContract.currentProvider.sendAsync !== "function") {
    hashCrackerContract.currentProvider.sendAsync = function () {
        return hashCrackerContract.currentProvider.send.apply(
            hashCrackerContract.currentProvider, arguments
        );
    };
}

const validScrypt = (scryptParams, password) => {
    const kdfparams = {
        dklen: scryptParams[1].toNumber(),
        salt: scryptParams[2].substring(2),
        n: scryptParams[3].toNumber(),
        r: scryptParams[4].toNumber(),
        p: scryptParams[5].toNumber()
    }
    const ciphertext = scryptParams[0].substring(2)
    const mac = scryptParams[6].substring(2)

    const derivedKey = scryptsy(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen)
    // console.log('derivedKey.slice(16, 32)', derivedKey.slice(16, 32))

    const ciphertextHex = Buffer.from(ciphertext, 'hex')
    const calculatedMac = ethUtil.sha3(Buffer.concat([derivedKey.slice(16, 32), ciphertextHex]))
   
    return calculatedMac.toString('hex') == mac
}

web3.eth.getAccounts().then(accounts => {
    console.log('accounts', accounts)
    // console.log('ORACLE_FROM_ADDRESS', ORACLE_FROM_ADDRESS)
    
    var oracle = ORACLE_FROM_ADDRESS
    if (NETWORK == 'development') {
        oracle = accounts[2]
    }
    web3.eth.defaultAccount = oracle;

    const run = async () => {
        const deployedHashCrackerContract = await hashCrackerContract.deployed()
        
        var event = deployedHashCrackerContract.RequestHashCheck();
        event.watch(async (err, result) => {
            if (err) {
                console.log('err', err);
                return;
            } else {
                const hashCrackIndex = result.args.hashCrackIndex.toNumber();
                const crackerAddress = result.args.crackerAddress;
                const crackerPassword = result.args.crackerPassword;
                const hashCrack = await deployedHashCrackerContract.hashCracks(hashCrackIndex);
                if (!hashCrack[6]) {
                    const hash = hashCrack[2]
                    const hashType = hashCrack[3]
                    if (hashType == 'scrypt') {
                        const scryptParams = await deployedHashCrackerContract.getScrypt(hash);
                        const valid = validScrypt(scryptParams, crackerPassword)
                        console.log('valid', valid)

                        if (valid) {
                            await deployedHashCrackerContract.submitValidCrack(hashCrackIndex, crackerAddress, crackerPassword, { from: oracle, gas: 470000 })
                            const hashCrack2 = await deployedHashCrackerContract.hashCracks(hashCrackIndex);
                            console.log('hashCrack2', hashCrack2)
                        }                         
                    }
                }
            }
        });

    }

    run()
})


