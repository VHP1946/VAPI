/**
 * Routes to handle interactions with Settings objects and databases
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */

/**
 * Retrieves a specific Settings object from the database
 * @param {*} eve 
 * @param {*} data = { version: String, dept: String }
 * @req Store info
 * @returns {data: Object} single Settings object
 */
getSettings
    // Query DB
    // Return result


/**
 * Retrieves all Settings objects from the database
 *  // We currently do not save versions, we just keep one rolling 'current' one for each application/dept
 * @param {*} eve 
 * @param {*} data = { dept: String }
 * @req Store info
 * @returns {data: Array} list of Settings objects
 */
querySettings
    // Query DB
    // Return results


/**
 * Updates an existing Settings object
 * @param {*} eve 
 * @param {*} data = { dept: String, keyid: String, settings: Object }
 * @req Store info
 * @returns {data: null}
 */
updateSettings
    // Update DB doc with current Settings object


/**
 * Sets an existing Settings object to the 'current'
 *  // We currently do not save versions, we just keep one rolling 'current' one for each application/dept
 * @param {*} eve 
 * @param {*} data = { dept: String, keyid: String }
 * @req Store info
 * @returns {data: null}
 */
makeCurrent
    // Update DB with new info