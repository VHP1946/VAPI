/**
 * Routes to handle interactions with Tracker objects and databases
 * 
 *  QUERYtracks
 * 
 *  GETtrack
 *  GETallTracks
 *  GETuserTracks
 *  getDeptTracks
 *  
 *  CREATEtrack
 *  SAVEtrack
 *  DELETEtrack
 * 
 *  payTracks
 *  closeTracks
 *  
 */

module.exports = class TrackingController {
    constructor() {
    }

    /**
     * Retrieves a list of tracking items from the database based on requested query
     * @returns {data: Array} list of Tracks
     */
    QUERYtracks = (handler) =>{
        return new Promise(async (resolve,reject)=>{
            let collection = 'Tracking350';
            let query = handler.pack.reqdata;
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'QUERY',
                options: {
                    query: query
                }
            })
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data;
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracks retrieved' : 'Tracks NOT retrieved';

            return resolve(handler);
        })
    }

    /**
     * Retrieves a single Track doc/object from the database
     * @returns {data: Object} Track object
     */
    GETtrack = (handler) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let idTOfind = handler.pack.reqdata.id;
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'QUERY',
                options: {
                    query: { id: idTOfind }
                }
            })
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data[0];
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Track retrieved' : 'Track NOT retrieved';

            return resolve(handler)
        })
    }

    /**
     * Retrieves list of tracking items from the database
     * @returns {data: Array} list of Tracks
     */
    GETallTracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'QUERY',
                options: { query: {} }
            });
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data;
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracks retrieved' : 'Tracks NOT retrieved';

            return resolve(handler);
        })
    }

    /**
     * Retrieves list of tracking items from the database based on current user
     * @returns {data: Array} list of Tracks
     */
    GETuserTracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let username = handler.username;
            let resp = await handler.services.mart({  // needs to be in () so compiler does not see { data: pack.data } as a code block
                db: 'Replacement',
                collect: collection,
                method: 'QUERY',
                options: { query: { estimator: username } }
            });
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data;
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracks retrieved' : 'Tracks NOT retrieved';

            return resolve(handler);
        })
    }

    /**
     * Creates a new Track using "shell" info
     * @returns {data: Object} new Track object
     */
    CREATEtrack = (handler) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let tobj = handler.pack.reqdata;
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'INSERT',
                options: { docs: tobj }
            });
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data[0];
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracking item created' : 'Tracking item NOT created';

            return resolve(handler);
        })
    }

    /**
     * Saves a Track to the database
     * @returns {data: Object} updated Track object
     *    Update lastdate to current date (?)
     *    Update DB doc with new object info
     *    Return updated Track object
     */
    SAVEtrack = (handler) => {
        return new Promise (async (resolve,reject) => {
            let collection = 'Tracking350';
            let tobj = handler.pack.reqdata;
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'UPDATE',
                options: { 
                    query: { id: tobj.id },
                    doc: tobj 
                }
            });
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data[0];
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracking item saved' : 'Tracking item NOT saved';

            return resolve (handler);
        })
    }

    /**
     * Deletes a Track from the database
     * @returns {data: null}
     */
    DELETEtrack = (handler) => {
        return new Promise (async (resolve,reject) => {
            let collection = 'Tracking350';
            let tid = handler.pack.reqdata;
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: collection,
                method: 'REMOVE',
                options: { 
                    query: { id: tid },
                }
            });
            handler.pack.success = resp.success;
            handler.pack.resdata = null;
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Tracking item deleted' : 'Tracking item NOT deleted';
            
            return resolve(handler);
        })
    }
}


getDeptTracks
// Query DB based on needs
// Return results