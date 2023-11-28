const CoreServer = require('vapi-core-server');
//index of contollers is function that returns object
//const cons = (index.js of controllers)

let core = new CoreServer({
    config: require('./dev/vhp-config.json'),
    type: 'http',
    controllers: {}
})
