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
        this.tools = lib;

        return {  // export all routes
            QUERYtracks: {
                name: 'QUERYtracks',
                route: this.QUERYtracks,
                models: ['QUERYtracks'],
                scheme: 'QUERYtracks'
            },
            GETtrack: {
                name: 'GETtrack',
                route: this.GETtrack,
                models: ['GETtrack'],
                scheme: 'GETtrack'
            },
            GETallTracks: {
                name: 'GETallTracks',
                route: this.GETallTracks,
                models: ['GETallTracks'],
                scheme: 'GETallTracks'
            },
            GETuserTracks: {
                name: 'GETuserTracks',
                route: this.GETuserTracks,
                models: ['GETuserTracks'],
                scheme: 'GETuserTracks'
            },
            CREATEtrack: {
                name: 'CREATEtrack',
                route: this.CREATEtrack,
                models: ['CREATEtrack'],
                scheme: 'CREATEtrack'
            },
            SAVEtrack: {
                name: 'SAVEtrack',
                route: this.SAVEtrack,
                models: ['SAVEtrack'],
                scheme: 'SAVEtrack'
            },
            DELETEtrack: {
                name: 'DELETEtrack',
                route: this.DELETEtrack,
                models: ['DELETEtrack'],
                scheme: 'DELETEtrack'
            },
            PAYtracks: {
                name: 'PAYtracks',
                route: this.PAYtracks,
                models: ['PAYtracks'],
                scheme: 'PAYtracks'
            },
            CLOSEtracks: {
                name: 'CLOSEtracks',
                route: this.CLOSEtracks,
                models: ['CLOSEtracks'],
                scheme: 'CLOSEtracks'
            },
            ARCHIVEtracks: {
                name: 'ARCHIVEtracks',
                route: this.ARCHIVEtracks,
                models: ['ARCHIVEtracks'],
                scheme: 'ARCHIVEtracks'
            }
        }
    }

    /**
     * Retrieves a list of tracking items from the database based on requested query
     * @request { data: Object } query = { property: value, ... }
     * @returns { data: Array } list of Tracks
     */
    QUERYtracks = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let pack = {
                db: 'Replacement',
                collect: 'Tracking350',
                method: 'QUERY',
                options: {
                    query: handler.reqpack.pack.data
                }
            };
            let respack = {
                success: true,
                data: handler.reqpack.pack.data,
                errors: [],
                msg: 'TESTING'
            }
            //console.log("SERVER > ", server);
            //console.log("Handler >", handler);

            console.log('reqdata', handler.reqpack.pack.data)

            /*
            let resp = await server.services.store.request(pack);
            respack.success = resp.success;
            respack.data = resp.data;
            respack.errors = resp.errors;
            respack.msg = respack.success ? 'Tracks retrieved' : 'Tracks NOT retrieved';
            */

            return resolve(respack);
        })
    }

    /**
     * Retrieves a single Track doc/object from the database
     * @request { data: Object } Track object / id ?
     * @returns { data: Object } Track object
     */
    GETtrack = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let idTOfind = handler.reqpack.pack.data.id;
            let respack = {
                success: true,
                data: handler.reqpack.pack.data,
                errors: [],
                msg: 'TESTING'
            }
            /*
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: 'Tracking350',
                method: 'QUERY',
                options: {
                    query: { id: idTOfind }
                }
            })
            handler.pack.success = resp.success;
            handler.pack.resdata = resp.data[0];
            handler.pack.errors = resp.errors;
            handler.pack.msg = handler.pack.success ? 'Track retrieved' : 'Track NOT retrieved';
            */
            
            return resolve(respack)
        })
    }

    /**
     * Retrieves a list of tracking items from the database
     * @request { data: null }
     * @returns { data: Array } list of Tracks
     */
    GETallTracks = (handler, server) => {
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

            return resolve(respack);
        })
    }

    /**
     * Retrieves a list of the CURRENT USER's tracking items from the database
     * @request { data: null }
     * @internal User's Creds
     * @returns { data: Array } list of Tracks
     */
    GETuserTracks = (handler, server) => {
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

            return resolve(respack);
        })
    }

    /**
     * Creates a new Track using model-provided object
     *   Model to handle data structure, dates, user info / estimator
     * @request { data: Object } Track object = { id: String, projectname: String, ...}
     * @returns { data: Object } new Track object
     */
    CREATEtrack = (handler, server) => {
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

            return resolve(respack);
        })
    }

    /**
     * Saves a Track to the database
     * @require { data: Object } Track object to be saved/updated
     * @returns { data: Object } updated Track object
     *    Update lastdate to current date (?)
     *    Update DB doc with new object info
     *    Return updated Track object
     */
    SAVEtrack = (handler, server) => {
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

            return resolve(respack);
        })
    }

    /**
     * Deletes a Track object/doc from the database
     * @require { data: Object } Track object / ID ?
     * @returns { data: null }
     */
    DELETEtrack = (handler, server) => {
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

            return resolve(respack);
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
     * @require { data: null }
     * @returns { data: Array } list of Tracks to be confirmed
     */
    PAYtracks = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Get list from DB (per CONS, one CONS, etc?) / Get list from application (user checks off what they want)
            // Validate list (check for basic "can be paid" flags)
            // Change STATUS
            // Save list back to DB
            // Return stats (number approved, number rejected, why, etc.)
            return resolve(respack);
        })
    }

    /**
     * Closes out track items
     * Handles split between "to be paid" and "not to be paid"
     * @require { data: Array } list of Tracks
     * @returns { data: null }
     */
    CLOSEtracks = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Pull basic list from application (manager should have final approved/denied)
            // Change STATUS
            // Save list back to DB
            // Return stats (number approved, number rejected, etc.)
            return resolve(respack);
        })
    }

    /**
     * Performs final archival process for tracks once closed and confirmed
     * @require { data: Array } list of Tracks
     * @returns { data: null }
     */
    ARCHIVEtracks = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Get list from DB (use search for "closed"?)
            // Change STATUS
            // Change STAGE
            // Update DB doc
            // Relocate to "archive" DB?
            return resolve(respack);
        })
    }
}
