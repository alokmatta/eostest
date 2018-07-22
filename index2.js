const Sunbeam = require('sunbeam')
const Eos = require('eosjs')

const readNodeConf = {
  httpEndpoint: 'http://35.189.86.89:8888',
  keyProvider: [
    '5K3suvHZKVbMoTuEhakjy2ouf7zsHx14GSQRUsVtQez9qudhNVX'
  ]
}

const writeNodeConf = {
  httpEndpoint: 'http://35.189.86.89:8888',
  keyProvider: [
    '5K3suvHZKVbMoTuEhakjy2ouf7zsHx14GSQRUsVtQez9qudhNVX'
  ]
}
const eos = {
  Eos,
  readNodeConf,
  writeNodeConf
}

const opts = { account: 'testuser1115', dev: true }
const sb = new Sunbeam(eos, opts)

const order = sb.createOrder({
    symbol: 'BTCUSD',
    price: '10000',
    amount: '-99.797',
    type: 'EXCHANGE_LIMIT',
    clientId: '123'
  })
  
  sb.place(order, (err, res) => {
    if (err) throw err
  
    console.log('placed "sell" order')
    console.log(JSON.stringify(res, null, '  '))
  })
  

  // orders, default account', opts.account - testuser4321
sb.orders('BTCUSD', {}, (err, res) => {
    if (err) throw err
  
    console.log('orders, default account', opts.account)
    console.log(JSON.stringify(res, null, '  '))
  })
