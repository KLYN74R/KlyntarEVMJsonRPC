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
   [+] https://metamask.github.io/api-playground/api-documentation/
   [+] https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J
   


*/

import web3 from 'web3'


METHODS_MAPPING.set('eth_chainId',_=>CONFIG.EVM.chainId)

METHODS_MAPPING.set('eth_protocolVersion',_=>CONFIG.EVM.protocolVersionInHex)

//Or do smth with VERIFICATION_THREAD | GENERATION_THREAD
METHODS_MAPPING.set('eth_syncing',_=>false)


//___________________________________Don't need in KLY symbiotes___________________________________

METHODS_MAPPING.set('eth_coinbase',_=>CONFIG.EVM.coinbase)

METHODS_MAPPING.set('eth_mining',_=>false)

METHODS_MAPPING.set('eth_hashrate',_=>0)

METHODS_MAPPING.set('eth_accounts',_=>[])


// Don't need in KLY
// Info: We'll use simple blocks without uncles, so this value will be 0 by default
// However, if you use our KLY-EVM JSON-RPC2.0 implementation you'll need to change behaviour
METHODS_MAPPING.set('eth_getUncleCountByBlockHash',_=>0)

METHODS_MAPPING.set('eth_getUncleCountByBlockNumber',_=>0)

// Returns information about a uncle of a block by hash and uncle index position
METHODS_MAPPING.set('eth_getUncleByBlockHashAndIndex',_=>{})

METHODS_MAPPING.set('eth_getUncleByBlockNumberAndIndex',_=>{})


// MINING STUFF ___________________________

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




//___________________________________Used on KLY symbiotes___________________________________


//Returns the current price per gas in wei
//do it later(we should migrate to energy)
// + we'll add more advanced way to count

METHODS_MAPPING.set('eth_gasPrice',_=>CONFIG.EVM.gasPriceInWeiAndHex)


// We'll return blocknumber in order to changes in KLYNTAR symbiote
METHODS_MAPPING.set('eth_blockNumber',_=>{

    //But for tests now it's 13371337
    return '0x'+blockInHex//'0xCC07C9'

})




// We'll take balances from local storage
METHODS_MAPPING.set('eth_getBalance',async params=>{

    let [address,quantityOrTag] = params

    let account = await KLY_EVM.getAccount(address)

    let balanceInHexAndInWei = web3.utils.toHex(web3.utils.fromWei(account.balance.toString(),'ether'))

    return balanceInHexAndInWei


})


// Returns the number of transactions sent from an address
METHODS_MAPPING.set('eth_getTransactionCount',async params=>{

    let [address,quantityOrTag] = params

    let account = await KLY_EVM.getAccount(address)

    let nonceInHex = web3.utils.toHex(account.nonce.toString())

    return nonceInHex

})


// Returns the value from a storage position at a given address
METHODS_MAPPING.set('eth_getStorageAt',params=>{

    let [address,quantity,quantityOrTag] = params

    //But for tests now it's 13371337

    return '0x13371337'

})


// Returns the number of transactions in a block from a block matching the given block hash
METHODS_MAPPING.set('eth_getBlockTransactionCountByHash',params=>{

    let [blockHash] = params

    //Again - take from storage

    return '0x539'

})

// Returns the number of transactions in a block with appropriate block height
METHODS_MAPPING.set('eth_getBlockTransactionCountByNumber',params=>{

    let [blockIndex] = params

    //Again - take from storage

    return '0x539'

})


// Returns code at a given address
METHODS_MAPPING.set('eth_getCode',async params=>{

    let [address,quantityOrTag] = params

    let account = await KLY_EVM.getAccount(address)

    let codeHash = '0x'+Buffer.from(account.codeHash).toString('hex')

    return codeHash

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

    // On the machine where we make .runCall({tx,block}) we return
    // '0x'+execResult.returnValue.toString('hex') to get the exectution result(contract interaction/default tx)

    return "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
    
})



//Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
METHODS_MAPPING.set('eth_estimateGas',params=>{

    let [transaction] = params

    //getGasAmountForContractCall()

    // the return value of executed contract
    return '0x5208'
    
})



METHODS_MAPPING.set('eth_getBlockByHash',params=>{

    let [blockHash,fullOrNot] = params

    //WE'll get block headers from storage/cache

    return '0x5208'
    
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



//___________________________ COMPILLERS ___________________________


METHODS_MAPPING.set('eth_getCompilers',_=>{

    return ['solidity']
    
})


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