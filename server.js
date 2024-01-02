const CoreServer = require('vapi-core-server');
//index of contollers is function that returns object

let core = new CoreServer({
    config: require('./configs/dev/local-config.json'),
    type: 'http',
    controls: {
        controllers: require('./controllers/index.js'),
        models: require('./models/index.js'),
        request_schemes: require('./request_schemes/index.js')
    }
})
