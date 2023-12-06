const { Core, Store } = require('vhp-api');
let runner = new Core({
    auth: { user: 'VOGCH', pswrd: 'vogel123' },
    client: true,
    dev: {
        https: true,
        comments: true
    }
});


module.exports = {

    QUERYtracks: (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let resp = await QUERYtracks(handler, server, handler.pack.data);
            let response = {
                success: resp.success,
                model: {}
            }
            if (response.success) {
                response.model = resp.result;
            }

            return resolve(response);
        })
    },

    GETtrack: (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let resp = await QUERYtracks(handler, server, handler.pack.data);
            let response = {
                success: resp.success,
                model: {}
            }
            if (response.success) {
                if (Array.isArray(resp.result)) {
                    response.model = resp.result[0];
                } else {
                    response.model = resp.result;
                }
            }

            return resolve(response);
        })
    },

    GETuserTracks: (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let user = 'MURRY';
            let resp = await QUERYtracks(handler, server, { estimator: user });
            let response = {
                success: resp.success,
                model: {}
            }
            if (resp.success) {
                response.model = resp.result;
            }
            return resolve(response);
        })
    }
}


function QUERYtracks(handler, server, query = {}) {
    return new Promise((resolve, reject) => {
        let reqpack = {
            db: 'Replacement',
            collect: 'Tracking350',
            method: 'QUERY',
            options: {
                query: query
            }
        }
        server.mart.request({ pack: reqpack, route: 'STORE' }).then(resp => {
            return resolve(resp);
        })
    })
}

/*
function QUERYtracks(handler, server, query = {}) {
    return new Promise((resolve, reject) => {
        let reqpack = {
            db: 'Replacement',
            collect: 'Tracking350',
            method: 'QUERY',
            options: {
                query: query
            }
        }
        runner.SENDrequest({ pack: reqpack, route: 'STORE' }).then(resp => {
            return resolve(resp);
        })
    })
}
*/