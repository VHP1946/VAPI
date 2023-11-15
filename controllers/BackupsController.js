/**
 * Routes to handle backing up of databases
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */


/**
 * Pull in data that is to be backed up
 * @param {*} data = { pack: Object }
 * @returns {data: Array} list of objects
 */
queryDB
    // Query DB
    // Return results


/**
 * Save pulled data to backup files and locations
 * @param {*} data = { pack: Object, list: Object, backup folder path: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 * 
 *    Needs electron
 */
backupDB
    // Convert data to JSON
    // Tag JSON with date (added to file name)
    // Save to proper backup location