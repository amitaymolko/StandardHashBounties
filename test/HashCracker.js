const HashCracker = artifacts.require('HashCracker')

contract('HashCracker', (accounts) => {
  
  var account = accounts[0]
  var account2 = accounts[1]

  const minValue = web3.toWei(0.001, 'ether')

  it('deploy and grab', async () => {
    Contract = await HashCracker.new()
    // console.log('Contract', Contract.address)
  })

  it('fails to submit hashcrack with invalid hashtype', async () => {
    try {
      const value = web3.toWei(0.1, 'ether')
      const tx = await Contract.requestHashCrack(0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD, "invalid_hash_type", { value })
      console.log('tx', tx)
      throw new Error('unauthorized tx')
    } catch (err) {
      if (!err.message.endsWith('revert')) {
        throw err
      }
      return
    }
  })

  it('fails to submit hashcrack with invalid amoun', async () => {
    try {
      const value = web3.toWei(0.0001, 'ether')
      const tx = await Contract.requestHashCrack(0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD, "sha256", { value })
      console.log('tx', tx)
      throw new Error('unauthorized tx')
    } catch (err) {
      if (!err.message.endsWith('revert')) {
        throw err
      }
      return
    }
  })

  it('fires NewHashEvent', (done) => {
    const value = web3.toWei(0.1, 'ether')
    var event = Contract.NewHashEvent()
    event.watch(function (err, result) {
      if (err) {
        console.log(err)
        return
      }
      
      assert.isTrue(result.args.requestorAddress == account)
      assert.isTrue(result.args.bountyValue.toString() == value)
      assert.isTrue(result.args.hashBytes == 0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD)
      assert.isTrue(result.args.hashType == "sha256")

      event.stopWatching()
      done()
    })
    Contract.requestHashCrack(0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD, "sha256", { value }) //Password1
  })

  it('fails to submit crack with wrong password', async () => {
    try {
      const value = web3.toWei(0.1, 'ether')
      const tx = await Contract.submitCrack(0, "wrong_password")
      console.log('tx', tx)
      throw new Error('unauthorized tx')
    } catch (err) {
      if (!err.message.endsWith('revert')) {
        throw err
      }
      return
    }
  })

  it('fires CrackedHashEvent', (done) => {
    const value = web3.toWei(0.1, 'ether')
    var event = Contract.CrackedHashEvent()
    event.watch(function (err, result) {
      if (err) {
        console.log(err)
        return
      }

      console.log('result', result)

      assert.isTrue(result.args.requestorAddress == account)
      assert.isTrue(result.args.bountyValue.toString() == value)
      assert.isTrue(result.args.hashBytes == 0x19513FDC9DA4FB72A4A05EB66917548D3C90FF94D5419E1F2363EEA89DFEE1DD)
      assert.isTrue(result.args.hashType == "sha256")

      event.stopWatching()
      done()
    })
    Contract.submitCrack(0, "Password1", { from: account2 })
  })

  // it('submit crack with password', async() => { 
  //   // const predictionLength = await Contract.getPredictionByAddressLength(account)   
    
  //   // const block = web3.eth.blockNumber
        
  //   // const prediction = await Contract.getPredictionByAddressByIndex(account, predictionLength)   
  //   // assert.isTrue(prediction[1].toNumber() === block + 2)
  // })

  // it('claim reward fails', async () => {
  //   const balance = web3.fromWei(await web3.eth.getBalance(account).toNumber(), 'ether')

  //   const index = await Contract.getPendingPredictionIndexByAddress(account)
  //   assert.isTrue(index >= 0)

  //   await Contract.claimReward(index)

  //   var balance2 = web3.fromWei(await web3.eth.getBalance(account).toNumber(), 'ether')
  //   assert.isTrue(balance > balance2)
  // })
})
