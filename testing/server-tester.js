let readline = require('readline');
let modules = require('./request_packs/pack_selector.js');
const { exec, execFileSync } = require('child_process');
let Core = require('vhp-api')

//start new console
//run server on that console

var startup = async () => {
    //await exec('start npm run start');
    
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let askForType = (question = 'What Request Type? -> ') => {
    return new Promise((resolve, reject) => {
        rl.question(question, answr => {
            if (answr === '') { answr = 'default' }
            rl.write(`Use ${answr} pack\n`);
            return resolve(answr);
        })
    })
}
let RUNroute = (question = 'Run which route? -> ') => {
    rl.question(question, answrRoute => {

        rl.write(`\nRunning route -> ${answrRoute}`);
        askForType().then(answrType => { // ask default or custom request pack
            let req = modules.selector(answrRoute, answrType);
            if (req) {
                console.log('Request Route >', req);

                let addy = 'http://localhost';
                let port = '5000';
                let full = addy + ':' + port + '/api/' + 'PING';
                
                exec(`start cmd /c curl -url ${full}`);
                /*
                fetch(`${full}`).then(resp=>{
                    console.log(resp);
                    RUNroute(question);//ask again
                });
                */
                
                // run request
                // checker
                // write response {success:Boolean, response:Object}
                
            } else {
                console.log('Request was not found')
                RUNroute(question);//ask again
            }
        })
    })
}

RUNroute();