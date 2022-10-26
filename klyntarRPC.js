/*



    
code	message	meaning

-32700	Parse error	Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.
-32600	Invalid Request	The JSON sent is not a valid Request object.
-32601	Method not found	The method does not exist / is not available.
-32602	Invalid params	Invalid method parameter(s).
-32603	Internal error	Internal JSON-RPC error.


-32000 to -32099	Server error	Reserved for implementation-defined server-errors.







*/


import UWS from 'uWebSockets.js'
import {Buffer} from 'buffer'

//Make it visible from all the modules
global.METHODS_MAPPING=new Map()


let modules = ['web3','net','kly','db','shh']

for(let mod of modules) await import(`./${mod}.js`)


let payloadLimit = 100000000000; //in bytes


//Advanced function which also check limits(useful in routes where we accept relatively small data chunks not to paste payload size checker in each handler)
let BODY=(bytes,limit)=>{

    return new Promise(
        
        resolve => resolve(bytes.byteLength<=limit && JSON.parse(Buffer.from(bytes)))
        
    ).catch(e=>e)

}


let ERROR_RETURN=(code,message,id)=>JSON.stringify(

    {
        jsonrpc:"2.0",
        error: {code,message},
        id
    }

)

let RETURN_RESULT=(result,id)=>JSON.stringify(

    {
        jsonrpc:"2.0",
        result,
        id
    }

)



//_____________ SERVER _____________

UWS.App()

.post('/',response=>response.writeHeader('Access-Control-Allow-Origin','*').onAborted(()=>response.aborted=true).onData(async v=>{

    //Body looks like this {"jsonrpc": "2.0", "method": "subtract", "params": [42, 23], "id": 1}
    //Response looks like {"jsonrpc": "2.0", "result": 19, "id": 1}

    let body=await BODY(v,payloadLimit).catch(e=>e)

    if(!body) response.end(ERROR_RETURN(-32700,"Parse error",body.id))


    if(body.jsonrpc==='2.0' && typeof body.method==='string' && Array.isArray(body.params)){

        if(METHODS_MAPPING.has(body.method)){

            let result = await METHODS_MAPPING.get(body.method)(body.params)

            if(result.error) response.end(ERROR_RETURN(-32602,"Invalid params",body.id))

            else response.end(RETURN_RESULT(result,body.id))

        }else response.end(ERROR_RETURN(-32601,"Method not found",body.id))

    }else response.end(ERROR_RETURN(-32600,"Invalid Request",body.id))

}))


.get('/health',response=>response.end("KLYNTAR says <OK>"))


.listen(7331,descriptor=>{

    console.log("[+] JSON-RPC for KLY-EVM is available on port 7331")

})