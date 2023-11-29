/**
 * Routes to handle interactions with user's computer or file server (SharePoint)
 * 
 * 
 * *CMV
 * The routes here may/should exist in the electron-app
 * 
 */

/**
 * Creates a new document
 * @param {*} eve 
 * @param {*} data = { folder path, folder name, folder contents }
 * @req User Creds
 * @returns success/fail info
 */
createDoc

/**
 * Deletes an existing Document
 * @param {*} eve
 * @param {*} handler
 * @param {*} data = { folder path }
 * @req User Creds
 * @returns success/fail info
 */
deleteDoc


/**
 * Save a document after changes
 * @param {*} eve 
 * @param {*} data = { folder path }
 * @req User Creds
 * @returns success/fail info
 */
saveDoc

/**
 * A way to get a list of documents
 * @param {*} eve 
 * @param {*} data = { consultnat:String, dept:String, folder path }
 * @req User Creds
 * @returns success/fail info
 */
GetClosedDocs => {
    
    db.query(pack)


}

module.exports = (server)=>{
    
}