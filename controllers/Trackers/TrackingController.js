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
 *  PAYtracks
 *  CLOSEtracks
 *  ARCHIVEtracks
 *
 */

module.exports = class TrackingController {
    constructor(lib) {
        /* Any setup for tracking controller

        */
        return { //export all routes
            QUERYtracks:{
                name:'QUERYtracks',
                route:this.QUERYtracks,
                models:['QUERYtracks'],
                scheme:'QUERYtracks'
            }
        }
    }

    /**
     * Retrieves a list of tracking items from the database based on requested query
     * @request reqdata = query = { property: value }
     * @returns {resdata: Array} list of Tracks
     */
    QUERYtracks = (handler,server) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let query = handler.reqdata;
            console.log("SERVER > ",server);
            console.log("Handler >", handler);
            /*
            let resp = await server.services.store.request({
                db: 'Replacement',
                collect: collection,
                method: 'QUERY',
                options: {
                    query: query
                }
            })
            */
            handler.respack.success = resp.success;
            handler.respack.data = resp.data;
            handler.respack.errors = resp.errors;
            handler.respack.msg = handler.respack.success ? 'Tracks retrieved' : 'Tracks NOT retrieved';

            return resolve(handler);
        })
    }

    /**
     * Retrieves a single Track doc/object from the database
     * @request reqdata = Track object / id ?
     * @returns {resdata: Object} Track object
     */
    GETtrack = (handler,server) => {
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
     * @request none
     * @returns {resdata: Array} list of Tracks
     */
    GETallTracks = (handler,server) => {
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
     * Retrieves a list of the CURRENT USER's tracking items from the database
     * @request User's Creds ?
     * @returns {resdata: Array} list of Tracks
     */
    GETuserTracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            let collection = 'Tracking350';
            let username = handler.username;  // Pass via reqdata, handler itself, etc?
            let resp = await handler.services.mart({
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
     *   Model to handle data structure, dates, user info / estimator
     * @request reqdata = Track object = { id: String, projectname: String, ...}
     * @returns {resdata: Object} new Track object
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
     * @require reqdata = Track object to be saved/updated
     * @returns {resdata: Object} updated Track object
     *    Update lastdate to current date (?)
     *    Update DB doc with new object info
     *    Return updated Track object
     */
    SAVEtrack = (handler) => {
        return new Promise(async (resolve, reject) => {
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

            return resolve(handler);
        })
    }

    /**
     * Deletes a Track from the database
     * @require reqdata = Track ID
     * @returns {resdata: null}
     */
    DELETEtrack = (handler) => {
        return new Promise(async (resolve, reject) => {
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


    /**       PAYOUT FLOW
     * PAYtracks (pulls list, does initial marking)
     * Tracks listed on screen for manager's review (manager adjusts marks as needed)
     * CLOSEtracks (handles final status changes and recording)
     * @ 1 Year : ARCHIVEtracks
     */

    /**
     * Marks track items as "to be paid"
     * @returns
     */
    PAYtracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            // Get list from DB (per CONS, one CONS, etc?) / Get list from application (user checks off what they want)
            // Validate list (check for basic "can be paid" flags)
            // Change STATUS
            // Save list back to DB
            // Return stats (number approved, number rejected, why, etc.)
            return resolve(handler);
        })
    }

    /**
     * Closes out track items
     * Handles split between "to be paid" and "not to be paid"
     * @returns
     */
    CLOSEtracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            // Pull basic list from application (manager should have final approved/denied)
            // Change STATUS
            // Save list back to DB
            // Return stats (number approved, number rejected, etc.)
            return resolve(handler);
        })
    }

    /**
     * Performs final archival process for tracks once closed and confirmed
     * @returns
     */
    ARCHIVEtracks = (handler) => {
        return new Promise(async (resolve, reject) => {
            // Get list from DB (use search for "closed"?)
            // Change STATUS
            // Change STAGE
            // Update DB doc
            // Relocate to "archive" DB?
            return resolve(handler);
        })
    }
}
