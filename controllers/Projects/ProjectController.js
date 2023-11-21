/**
 * Routes to handle interactions with Project objects and databases
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */


/**
 * Retrieves a single Project doc/object from the database
 * @param {*} eve 
 * @param {*} data = { id: String }
 * @req User Creds, Store Info
 * @returns {data: Object} Project object
 */
getProject
    // Query DB based on needs
    // Return result


/**
 * Retrieves list of projects from the database
 * @param {*} eve 
 * @param {*} data = { dept: String }
 * @req User Creds, Store Info
 * @returns {data: Array} list of projects
 */
queryProjects
getUserProjects
getDeptProjects

getActiveProjects
getClosedProjects
getSubmittedProjects
    // Query DB based on needs
    // Return results


/**
 * Creates a new Project using "shell" info
 * @param {*} eve 
 * @param {*} data = { project: Object }
 * @req Data-Structures, User Creds (to set estimator)
 * @returns {data: Object} new Project object
 */
createProject
    // Validate 'shell' info
    // Flesh out Project object
    // Attempt to create a Project folder
    // Save Project to DB as a new doc
    // Return full Project object


/**
 * Saves a Project to the database
 * @param {*} eve 
 * @param {*} data = { project: Object }
 * @req User Creds, Store Info
 * @returns {data: Object} updated Project object
 */
saveProject
    // Update lastdate to current date
    // Update datelog
    // Update DB doc with new object info
    // Return updated Project object


/**
 * Deletes a Project from the database
 * @param {*} eve 
 * @param {*} data = { id: String }
 * @req User Creds, Store Info
 * @returns {data: null}
 */
deleteProject
    // Remove associated doc from the DB


/**
 * Updates the Project's stage, status, etc. to move it to the next step of the lifecycle (Submitted)
 * @param {*} eve 
 * @param {*} data = { id: String, project: Object }
 * @req User Creds, Store Info
 * @returns {data: Object} updated Project object
 */
sellProject
    // Update datelog
    // Update status and/or stage
    // Update DB doc
    // Return updated Project object


/**
 * Updates the Project's stage, status, etc. to move it to the next step of the lifecycle (job)
 * @param {*} eve 
 * @param {*} data = { id: String, project: Object }
 * @req User Creds, Store Info
 * @returns {data: Object} updated Project object
 * 
 * *CMV:
 * -here is an example of splitting the original route because we need to interact with 
 */
approveProject
    // Update datelog
    // Update status and/or stage
    // Move project folder to new location (copy & delete instead?)
    // Update froot
    // Update DB doc
    // Return updated Project object


/**
 * Saves a copy of the working project locally for later comparison or use in another window
 * @param {*} eve 
 * @param {*} data = { project: Object }
 * @req projtoload variable, User Creds
 * @returns {data: null}
 * 
 * *CMV
 * - the route could have uses in the api somewhere, but for this purpose it is best in electron.
 * If we were to leave it here it would have to stash the project under the users name (which it could).
 * This would work all the way until they lose the connection.
 */
stashProject
    // Check variable location exists
    // Update variable with given object


/**
 * Retrieves the locally-saved project data for comparison or use in a new window
 * @param {*} eve 
 * @param {*} data 
 * @req projtoload variable, User Creds
 * @returns {data: Object} Project object
 * 
 * *CMV - this is attached to the stash route above. The same would apply and it should stay (local).
 */
getStashed
    // Check variable location exists
    // Return object stored in variable


/**
 * Updates the ID property of a Project
 * @param {*} eve 
 * @param {*} data = { project: Object, newid: String }
 * @req User Creds (spdrive), Store Info
 * @returns {data: Object} updated Project object
 */   
updateProjectID
    // Use Project object to get froot
    // Check to make sure folder at froot exists
    // Check to make sure no files from that folder are open
    // Check to make sure newid is unique?
    // Rename project folder (copy & delete instead?)
    // Update Project object with newid (.id, .froot)
    // Update lastdate and datelog
    // Update Project doc in the DB
    // Return updated Project object


/**
 * Splits off a new Project from an existing one
 * @param {*} eve 
 * @param {*} data = { project: Object }
 * @req User Creds (spdrive), Store Info
 * @returns {old: Object, new: Object}
 */   
splitProject
    // Clone Project object
    // Delete _id from cloned object
    // Update cloned object.froot
    // Assign new object.id using nextquotenum
    // Attempt to create a new project folder for the new project object
    // Copy contents of old project folder to the new project folder
    // Update lastdate and datelog on original Project object ('Split to:')
    // Update lastdate and datelog on new Project object ('Split from:')
    // Update original Project doc in the DB
    // Insert new object into DB
    // Return both Project objects


/**
 * Initializes the project builder with neccessary info
 * @param {*} eve 
 * @param {*} data 
 * @returns settings object, Price Key object, user info and spdrive path
 */    
initProject
    // Pull projecttoload
    // Pull correct Price Key
    // Pull settings
    // Pull userinfo & spdrive
    // Return all info