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






