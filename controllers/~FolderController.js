/**
 * Routes to handle interactions with user's computer or file server (SharePoint)
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 * 
 * *CMV
 * The routes here may/should exist in the electron-app
 */

/**
 * Creates a new folder
 * @param {*} eve 
 * @param {*} data = { fpath: String, foldername: String, folder contents: Object }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
createFolder
    // Check to see if folder already exists
    // Create new root folder at folder path
    // Loop through folder contents object and create subfolders


/**
 * Deletes an existing folder
 * @param {*} eve 
 * @param {*} data = { fpath: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
deleteFolder
    // Check to see if any files from that folder are open
    // Attempt to remove folder


/**
 * Moves an existing folder to another location
 * @param {*} eve 
 * @param {*} data = { oldpath: String, newpath: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
moveFolder
    // Check to see that folder exists
    // Check to see if any files from that folder are open
    // Check that new file path is not already used
    // Copy contents of old into new 
    // Attempt to remove old folder


/**
 * Copies an existing folder to another location
 * @param {*} eve 
 * @param {*} data = { oldpath: String, newpath: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
copyFolder
    // Check to see that old folder exists
    // Check that new file path is not already used
    // Copy contents of old into new 


/**
 * Exactly what it sounds like...
 * @param {*} eve 
 * @param {*} data = { fpath: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
openFolder


/**
 * Exactly what it sounds like...
 * @param {*} eve 
 * @param {*} data = { fpath: String, fname: String }
 * @req User Creds (spdrive)
 * @returns {data: null}
 */
openFile