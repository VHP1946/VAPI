/**
 * Routes to handle interactions with Tracker objects and databases
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */


/**
 * Retrieves a single Track doc/object from the database
 * @param {*} eve 
 * @param {*} data = { id: String }
 * @req User Creds, Store Info
 * @returns {data: Object} Track object
 */
getTrack
    // Query DB based on needs
    // Return result


/**
 * Retrieves list of tracking items from the database
 * @param {*} eve 
 * @param {*} data = { dept: String }
 * @req User Creds, Store Info
 * @returns {data: Array} list of Tracks
 */
queryTracks
getUserTracks
getDeptTracks
    // Query DB based on needs
    // Return results


/**
 * Creates a new Track using "shell" info
 * @param {*} eve 
 * @param {*} data = { track: Object }
 * @req Data-Structures, User Creds (to set estimator)
 * @errors 
 * @returns {data: Object} new Track object
 */
createTrack
    // Validate 'shell' info
    // Flesh out Track object
    // Save Track to DB as a new doc
    // Return full Track object


/**
 * Saves a Track to the database
 * @param {*} eve 
 * @param {*} data = { track: Object }
 * @req User Creds, Store Info
 * @returns {data: Object} updated Track object
 */
saveTrack
    // Update lastdate to current date (?)
    // Update DB doc with new object info
    // Return updated Track object


/**
 * Deletes a Track from the database
 * @param {*} eve 
 * @param {*} data = { id: String }
 * @req User Creds, Store Info
 * @returns {data: null}
 */
deleteTrack
    // Remove associated doc from the DB


/**
 * Checks to see if a Track exists in the DB
 * @param {*} eve 
 * @param {*} data = { id: String }
 * @req User Creds, Store Info
 * @returns {data: null}
 */
checkTrack = getTrack


/**
 * Gather analytics
 * @param {
 *  dept:String
 * } data in handler.data
 * 
 * 
 * depending on department, rotate a analytic function. If no match use default
 * 
 * 
 * 
 * 
 */