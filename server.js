const CoreServer = require('../server.js');//)('vapi-core-server');
//index of contollers is function that returns object

let core = new CoreServer({
    config: require('./configs/vhp-config.json'),
    type: 'http',
    controllers: {
        routes:require('./controllers/index.js'),
        models:require('./models/index.js'),
        request_schemes:require('./request_schemes/index.js')
    }
})
