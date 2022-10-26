/*

████████╗██╗  ██╗███████╗    ███╗   ███╗ ██████╗ ███████╗████████╗    ███╗   ██╗███████╗███████╗██████╗ ███████╗██████╗ 
╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔═══██╗██╔════╝╚══██╔══╝    ████╗  ██║██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗
   ██║   ███████║█████╗      ██╔████╔██║██║   ██║███████╗   ██║       ██╔██╗ ██║█████╗  █████╗  ██║  ██║█████╗  ██║  ██║
   ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██║   ██║╚════██║   ██║       ██║╚██╗██║██╔══╝  ██╔══╝  ██║  ██║██╔══╝  ██║  ██║
   ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║╚██████╔╝███████║   ██║       ██║ ╚████║███████╗███████╗██████╔╝███████╗██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚══════╝   ╚═╝       ╚═╝  ╚═══╝╚══════╝╚══════╝╚═════╝ ╚══════╝╚═════╝ 


   Details:

   [+] https://klyntar.org/kly-evm/json-rpc2.0
   [+] https://ethereum.org/ru/developers/docs/apis/json-rpc

*/

METHODS_MAPPING.set('eth_chainId',_=>"0x1CA3") //7331 in hex. Will be custom via configs

METHODS_MAPPING.set('eth_protocolVersion',_=>"1337")

METHODS_MAPPING.set('eth_syncing',_=>{

    return false

    //Or do smth with VERIFICATION_THREAD | GENERATION_THREAD

})


METHODS_MAPPING.set('eth_coinbase',_=>'0x0000000000000000000000000000000000000000')

METHODS_MAPPING.set('eth_mining',_=>false)

METHODS_MAPPING.set('eth_hashrate',_=>0)

METHODS_MAPPING.set('eth_gasPrice',_=>{

    return 1337 //do it later(we should migrate to energy)

})


METHODS_MAPPING.set('eth_accounts',_=>[])

//We'll return blocknumber in order to changes in KLYNTAR symbiote
METHODS_MAPPING.set('eth_blockNumber',_=>{

    //But for tests now it's 13371337
    return 13371337

})

//We'll take balances from local storage
METHODS_MAPPING.set('eth_getBalance',params=>{

    let [address,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x13371337'

})

//We'll take it from local storage
METHODS_MAPPING.set('eth_getStorageAt',params=>{

    let [address,quantityOrTag,another] = params

    //But for tests now it's 13371337

    return '0x13371337'

})

//We'll it balances from local storage
METHODS_MAPPING.set('eth_getTransactionCount',params=>{

    let [address,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x13371337'

})

//We'll take balances from local storage
METHODS_MAPPING.set('eth_getBlockTransactionCountByHash',params=>{

    let [blockHash] = params

    //Again - take from storage

    return '0x13371337'

})

//We'll it balances from local storage
METHODS_MAPPING.set('eth_getCode',params=>{

    let [address,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x13371337'

})


//We'll it balances from local storage
METHODS_MAPPING.set('eth_sign',params=>{

    let [address,message] = params

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})


METHODS_MAPPING.set('eth_signTransaction',params=>{

    let [address,message] = params

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})
