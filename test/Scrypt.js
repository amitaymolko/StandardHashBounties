const Scrypt = artifacts.require('Scrypt')

contract('Scrypt', (accounts) => {
  
  var account = accounts[0]
  var account2 = accounts[1]

  const minValue = web3.toWei(0.001, 'ether')
  const inputBytes = "0x19af5e7a09875927cdec8900a5b4ce1e428b6746836586ea6838d1cf5a0271152052d7e775c9b3a5d8ebf40e2be3be234707816a758b6eec1ba28c54a4b6cf63de200008010994fb7a49c0f5f4b2c365e168f27701366acb3c326c11366b027eb96119140b"

  it('deploy and grab', async () => {
    Contract = await Scrypt.new()
  }) 

  // it('fails to submit hashcrack with invalid amoun', async () => {
  //   try {
  //     const value = web3.toWei(0.0001, 'ether')
  //     const tx = await Contract.requestHashCrack(0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD, "sha256", { value })
  //     console.log('tx', tx)
  //     throw new Error('unauthorized tx')
  //   } catch (err) {
  //     if (!err.message.endsWith('revert')) {
  //       throw err
  //     }
  //     return
  //   }
  // })

  it('fires NewHashEvent', async() => {
    const hash = web3.sha3(inputBytes, { encoding: "hex" })
    await Contract.requestScryptHashCrack(hash, inputBytes) 
    const scryptHashParam = await Contract.getScrypt(hash)
    console.log('scryptHashParam', scryptHashParam[3].toString())

    // assert.isTrue(false)
  })

})
