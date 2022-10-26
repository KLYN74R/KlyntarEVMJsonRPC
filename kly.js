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

METHODS_MAPPING.set('eth_chainId',_=>7331)

METHODS_MAPPING.set('eth_protocolVersion',_=>"1337")

METHODS_MAPPING.set('eth_syncing',_=>{

    return false

    //Or do smth with VERIFICATION_THREAD | GENERATION_THREAD

})

// Don't need in KLY
METHODS_MAPPING.set('eth_coinbase',_=>'0x0000000000000000000000000000000000000000')

// Don't need in KLY
METHODS_MAPPING.set('eth_mining',_=>false)

// Don't need in KLY
METHODS_MAPPING.set('eth_hashrate',_=>0)

METHODS_MAPPING.set('eth_gasPrice',_=>{

    //Returns the current price per gas in wei
    //do it later(we should migrate to energy)
    // + we'll add more advanced way to count
    return 1337_1337_1337

})


// Don't need in KLY
METHODS_MAPPING.set('eth_accounts',_=>[])


// We'll return blocknumber in order to changes in KLYNTAR symbiote
METHODS_MAPPING.set('eth_blockNumber',_=>{

    //But for tests now it's 13371337
    return 1337_1337

})

// We'll take balances from local storage
METHODS_MAPPING.set('eth_getBalance',params=>{

    let [address,quantityOrTag] = params

    // But for tests now it's 13371337
    // Returns current balance in wei (1 ether=10^9 gwei=10^18 wei)
    
    return 1337_1337_1337

})

// Returns the value from a storage position at a given address
METHODS_MAPPING.set('eth_getStorageAt',params=>{

    let [address,quantity,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x13371337'

})

// Returns the number of transactions sent from an address
METHODS_MAPPING.set('eth_getTransactionCount',params=>{

    let [address,quantityOrTag] = params

    //But for tests now it's 13371337

    return 1337

})


// Returns the number of transactions in a block from a block matching the given block hash
METHODS_MAPPING.set('eth_getBlockTransactionCountByHash',params=>{

    let [blockHash] = params

    //Again - take from storage

    return 1337

})

// Returns the number of transactions in a block with appropriate block height
METHODS_MAPPING.set('eth_getBlockTransactionCountByNumber',params=>{

    let [blockIndex] = params

    //Again - take from storage

    return 1337

})

// Don't need in KLY
// Info: We'll use simple blocks without uncles, so this value will be 0 by default
// However, if you use our KLY-EVM JSON-RPC2.0 implementation you'll need to change behaviour
METHODS_MAPPING.set('eth_getUncleCountByBlockHash',_=>0)

METHODS_MAPPING.set('eth_getUncleCountByBlockNumber',_=>0)



// Returns code at a given address
METHODS_MAPPING.set('eth_getCode',params=>{

    let [address,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056'

})

/*

The sign method calculates an Ethereum specific signature with:
sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).

*/
METHODS_MAPPING.set('eth_sign',params=>{

    let [address,message] = params

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})

// Signs a transaction that can be submitted to the network at a later time using with
METHODS_MAPPING.set('eth_signTransaction',params=>{

    let [transaction] = params

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})


// Creates new message call transaction or a contract creation, if the data field contains code
METHODS_MAPPING.set('eth_sendTransaction',params=>{

    let [transaction] = params

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})

//Creates new message call transaction or a contract creation for signed transactions
METHODS_MAPPING.set('eth_sendRawTransaction',params=>{

    // The signed transaction data
    let [transaction] = params

    // Returns 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available
    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})

//Executes a new message call immediately without creating a transaction on the block chain
METHODS_MAPPING.set('eth_call',params=>{

    let [transaction] = params

    // the return value of executed contract
    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})



//Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
METHODS_MAPPING.set('eth_estimateGas',params=>{

    let [transaction] = params

    //getGasAmountForContractCall()

    // the return value of executed contract
    return 21000
    
})



METHODS_MAPPING.set('eth_getBlockByHash',params=>{

    let [blockHash,fullOrNot] = params

    //WE'll get block headers from storage/cache

    return 21000 
    
})



METHODS_MAPPING.set('eth_getBlockByNumber',params=>{

    let [blockHash,fullOrNot] = params

    //WE'll get block headers from storage/cache

    return {}
    
})



METHODS_MAPPING.set('eth_getTransactionByHash',params=>{

    let [txHash] = params

    return {}
    
})


METHODS_MAPPING.set('eth_getTransactionByBlockNumberAndIndex',params=>{

    let [blockNumber,txIndex] = params

    return {}
    
})

// Take from vm deploymentResult.receipt
METHODS_MAPPING.set('eth_getTransactionReceipt',params=>{

    let [txHash] = params

    return {}
    
})


// Returns information about a uncle of a block by hash and uncle index position
METHODS_MAPPING.set('eth_getUncleByBlockHashAndIndex',_=>{})

METHODS_MAPPING.set('eth_getUncleByBlockNumberAndIndex',_=>{})



METHODS_MAPPING.set('eth_getCompilers',_=>{

    return ['solidity']
    
})


//___________________________ COMPILLERS ___________________________

METHODS_MAPPING.set('eth_compileSolidity',params=>{

    let [codeSource] = params

    //Do compilation via solc

    return ''
    
})


METHODS_MAPPING.set('eth_compileLLL',params=>{

    let [codeSource] = params

    //Do compilation via solc

    return ''
    
})



METHODS_MAPPING.set('eth_compileSerpent',params=>{

    let [codeSource] = params

    //Do compilation via solc

    return ''
    
})


//___________________________ FILTERS ___________________________

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newfilter
METHODS_MAPPING.set('eth_newFilter',params=>{

    // Coming soon

    return ''
    
})

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newblockfilter
METHODS_MAPPING.set('eth_newBlockFilter',params=>{

    // Coming soon

    return ''
    
})

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newblockfilter
METHODS_MAPPING.set('eth_newPendingTransactionFilter',params=>{

    // Coming soon

    return ''
    
})

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newblockfilter
METHODS_MAPPING.set('eth_uninstallFilter',params=>{

    // Coming soon

    return ''
    
})

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newblockfilter
METHODS_MAPPING.set('eth_getFilterChanges',params=>{

    // Coming soon

    return ''
    
})

//https://ethereum.org/ru/developers/docs/apis/json-rpc/#eth_newblockfilter
METHODS_MAPPING.set('eth_getFilterLogs',params=>{

    // Coming soon

    return ''
    
})


//Returns an array of all logs matching a given filter object
METHODS_MAPPING.set('eth_getLogs',params=>{

    let [filterOptions] = params

    //We get logs from storage
    return ''
    
})


//___________________________ MINING STUFF ___________________________


// Don't need in KLY
METHODS_MAPPING.set('eth_getWork',_=>

    [

        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000'

    ]
    
)


// Don't need in KLY
METHODS_MAPPING.set('eth_submitWork',_=>

    [

        '0x0000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000'

    ]
    
)




// Don't need in KLY
METHODS_MAPPING.set('eth_submitHashrate',_=>

    [
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    ]
    
)
