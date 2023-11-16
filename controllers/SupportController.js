/**
 * Routes to handle interactions with our Support system
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */


/**
 * Starts up a new email messege to the support team
 * Uses the default email application 
 * @param {*} eve 
 * @param {*} data
 * @req Support Email
 * @returns {data: null}
 * 
 *    Requires electron?
 */
emailSupport
    // Gather application info (name, version)
    // Call OS to start new email 


/**
 * Opens a new window to the Support Portal 
 * @param {*} eve 
 * @param {*} data
 * @req Support Web Address, Application's Support Web Address?
 * @returns {data: null}
 */
openPortal
    // Gather application info (name, version)
    // Open new window directed at proper address 