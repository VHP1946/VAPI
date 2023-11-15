/**
 * Routes to handle Price Keys
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */

/**
 * Retrieves a specific Price Key from the database
 * If sent nothing, automatically returns 'current' Price Key
 * @param {*} eve 
 * @param {*} data = { version: String } Price Key version
 * @req Store info
 * @returns {data: Object} single Price Key object
 */
getKey
    // Query DB
    // Return result


/**
 * Takes a department and gets all of the keys associated with it
 * @param {*} eve 
 * @param {*} data = { dept: String }
 * @req Store info
 * @returns {data: Array} list of Price Key objects
 */
queryKeys
    // Query DB
    // Return results


/**
 * Uses the selected department to select the correct keymaker and creates the new key
 * @param {*} eve 
 * @param {*} data = { dept: String, raw: Object }
 * @req Price Book paths, Price Book base name, properly-named maker.js files
 * @returns {data: Object} new Price Key object
 * 
 * *CMV:
 * - This can stay here so long as it accepts the pricing file in a "semi" raw form (csv or 
 * simple object). The client side would be responsible for pre-formating the book. The route
 * can the finish the creation, test the key, and update the key with key id.
 * 
 * - Project settings should be pulled here. it could be part of the model for this route.
 */
createKey
    // Convert raw data as needed
    // Select correct maker
    // Run maker
    // Return Price Key object


/**
 * Takes new or modified key object and saves it to the correct database based on department
 * "update" = boolean to dictate whether to replace the 'current' version
 * @param {*} eve 
 * @param {*} data = { key: Object, dept: String, update: Boolean }
 * @req Store info
 * @returns {data: null}
 */
saveKey
    // Save new doc to DB
    // if (update) => find current => update current with new info


/**
 * Takes an existing key and makes that the current key
 * @param {*} eve 
 * @param {*} data = { pkid: String }
 * @req Store info
 * @returns {data: null}
 */
makeCurrent
    // Update DB with new info


/**
 * Takes a deprtment and gets the keys
 * @param {*} eve 
 * @param {*} data = {allow any thing in scheme}
 * @req Store info
 * @returns success/fail info
 */
queryKeys
