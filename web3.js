import keccak256 from 'keccak256'



METHODS_MAPPING.set('web3_clientVersion',_=>CONFIG.EVM.clientVersion)

METHODS_MAPPING.set('web3_sha3',params=>{

    //[0] - string to get keccak256 hash from
    if(typeof params[0]==='string') return '0x'+keccak256(params[0]).toString('hex')

    else return {error:'Parameter is not a string'}

})
