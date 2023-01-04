import {EVM_ROUTE_HANDLER} from './klyntarRPC.js'

import UWS from 'uWebSockets.js'

 

//_____________ SERVER _____________


UWS.App()

.post('/',EVM_ROUTE_HANDLER)

.get('/health',response=>response.end("KLYNTAR says <OK>"))

.listen(7331,descriptor=>{

    console.log(`[+] [${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}] JSON-RPC for KLY-EVM is available on port 7331`)

})