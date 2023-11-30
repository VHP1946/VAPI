let readline = require('readline');
let modules = require('./request_packs/pack_selector.js');
const { exec } = require('child_process');
let { Core } = require('vhp-api')

let runner = new Core({
    host: 'http://localhost:5000/',
    dev: { comments: false, https: false }
})

if (false) {
    runner.SENDrequest({
    }).then(response => {
        console.log('Response >', response, '\n\n')
    })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let askForServer = (question = 'Do you need a server? -> ') => {
    return new Promise((resolve, reject) => {
        rl.question(question, answr => {
            if (answr == 'yes') {//start another server
                if (process.platform == 'linux') {
                    exec(`gnome-terminal -x bash -c "npm run dev; exec bash"`, (stderr) => {
                        console.log(stderr)
                    });//run npm run test')
                } else {
                    exec('start npm run dev')
                }
            }
            RUNroute()
        })
    })
}

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

        askForType().then(answrType => {  // ask default or custom request pack
            let req = modules.selector(answrRoute, answrType);
            if (req) {
                //console.log('Request >',answrRoute)
                runner.SENDrequest({
                    route: answrRoute,
                    pack: req
                }).then(response => {
                    console.log('\n\nResponse >', response)
                    /*
                    let check = modules.checker({ route: answrRoute, type: answrType, response: response });
                    if (!check.success){
                        console.log('Expected >', check.data);
                    }
                    console.log('Check >', check.msg, '\n\n');
                    */
                    RUNroute()
                })
            } else {
                console.log('Request was not found')
                RUNroute();  // ask again
            }
        })
    })
}

askForServer();
