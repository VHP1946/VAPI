let readline = require('readline');
let modules = require('./request_packs/pack_selector.js');
let Core = require('vhp-api')

//start new console
//run server on that console


const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

let askForType=(question='What Request Type? -> ')=>{
    return new Promise((resolve,reject)=>{
        rl.question(question,answr=>{
            if(answr===''){answr='default'}
            rl.write(`Use ${answr} pack\n`);
            return resolve(answr);
        })
    })
}
let RUNroute=(question='Run what route? -> ')=>{
    rl.question(question,answrRoute=>{

        rl.write(`\nRunning route -> ${answrRoute}\n`);
        askForType().then(answrType=>{ // ask default or custom request pack
            let req = modules.selector(answrRoute,answrType);
            if(req){
                console.log('Request Route >',req);
                // run request
                // checker
                // write response {success:Boolean, response:Object}
                RUNroute(question);//ask again
            }else{
                console.log('Request was not found')
                RUNroute(question);//ask again
            }
        })
    })
}
RUNroute();