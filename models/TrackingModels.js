const ModelBase = require('./ModelClass.js');

class TrackingModel extends ModelBase {
    constructor(handler, server) {
        super();
        this.db = 'Replacement';
        this.collect = 'Tracking350';
        this.query = handler.pack.data;
        this.list = this.QUERYdb(this.db, this.collect, this.query);
    }
}


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
        runner.SENDrequest({ pack: reqpack, route: 'STORE' }).then(resp => {
            return resolve(resp);
        })
    })
}