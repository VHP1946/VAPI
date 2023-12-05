/**
 * Routes to handle interactions with Project objects and databases
 * 
 * QUERYprojects
 * GETproject
 * GETallProjects
 * GETuserProjects
 * 
 * CREATEproject
 * SAVEproject
 * DELETEproject
 * SELLproject
 * APPROVEproject
 * SPLITproject
 * 
 * INITproject
 * STASHproject
 * GETstashed
 * 
 * UPDATEprojectID
 * 
 */

module.exports = class ProjectsController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            QUERYprojects: {
                name: 'QUERYprojects',
                route: this.QUERYprojects,
                models: ['QUERYprojects'],
                scheme: 'projects'
            },
            GETproject: {
                name: 'GETproject',
                route: this.GETproject,
                models: ['GETproject'],
                scheme: 'GETproject'
            },
            GETallProjects: {
                name: 'GETallProjects',
                route: this.GETallProjects,
                models: ['GETallProjects'],
                scheme: 'GETallProjects'
            },
            GETuserProjects: {
                name: 'GETuserProjects',
                route: this.GETuserProjects,
                models: ['GETuserProjects'],
                scheme: 'GETuserProjects'
            },
            CREATEproject: {
                name: 'CREATEproject',
                route: this.CREATEproject,
                models: ['CREATEproject'],
                scheme: 'CREATEproject'
            },
            SAVEproject: {
                name: 'SAVEproject',
                route: this.SAVEproject,
                models: ['SAVEproject'],
                scheme: 'SAVEproject'
            },
            DELETEproject: {
                name: 'DELETEproject',
                route: this.DELETEproject,
                models: ['DELETEproject'],
                scheme: 'DELETEproject'
            },
            SELLproject: {
                name: 'SELLproject',
                route: this.SELLproject,
                models: ['SELLproject'],
                scheme: 'SELLproject'
            },
            APPROVEproject: {
                name: 'APPROVEproject',
                route: this.APPROVEproject,
                models: ['APPROVEproject'],
                scheme: 'APPROVEproject'
            },
            SPLITproject: {
                name: 'SPLITproject',
                route: this.SPLITproject,
                models: ['SPLITproject'],
                scheme: 'SPLITproject'
            },
            INITproject: {
                name: 'INITproject',
                route: this.INITproject,
                models: ['INITproject'],
                scheme: 'INITproject'
            },
            STASHproject: {
                name: 'STASHproject',
                route: this.STASHproject,
                models: ['STASHproject'],
                scheme: 'STASHproject'
            },
            GETstashed: {
                name: 'GETstashed',
                route: this.GETstashed,
                models: ['GETstashed'],
                scheme: 'GETstashed'
            },
            UPDATEprojectID: {
                name: 'UPDATEprojectID',
                route: this.UPDATEprojectID,
                models: ['UPDATEprojectID'],
                scheme: 'UPDATEprojectID'
            },
            testdeep: {
                name: 'testdeep',
                route: this.testdeep,
                models: [],
                scheme: 'testDeep'
            }
        }
    }

    testdeep = (handler, server) => {
        return new Promise(async (resolve, reject) => {

            let response = this.tools.aresponse(handler);

            return resolve(response)
        })
    }

    /**
     * Retrieves a list of Projects from the database based on requested query
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Array } list of Project objects
     */
    QUERYprojects = (handler, server) => {
        return new Promise(async (resolve, reject) => {

            let response = this.tools.aresponse(handler);

            return resolve(response)
        })
    }

    /**
     * Retrieves a specific Project doc/object from the database
     * @request { data: Object } Project object / id ?
     * @returns { data: Object } Project object
     */
    GETproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB based on needs
            // Return result
            let response = this.tools.aresponse(handler);

            return resolve(response)
        })
    }

    /**
     * Retrieves a list of Projects from the database
     * @request { data: null }
     * @returns { data: Array } list of Projects
     */
    GETallProjects = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB based on needs
            // Return result
            let response = this.tools.aresponse(handler);

            return resolve(response)
        })
    }

    /**
     * Retrieves a list of the CURRENT USER's Projects from the database
     * @request { data: null }
     * @internal User's Creds
     * @returns { data: Array } list of Projects
     */
    GETuserProjects = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB based on needs
            // Return results
            let response = this.tools.aresponse(handler);

            return resolve(response)
        })
    }

    /**
     * Creates a new Project using model-provided object
     *   Model to handle data structure, dates, user info / estimator
     * @request { data: Object } Project object
     * @returns { data: Object } updated Project object
     * 
     *     Needs electron
     */
    CREATEproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Validate 'shell' info
            // Flesh out Project object
            // Attempt to create a Project folder
            // Save Project to DB as a new doc
            // Return full Project object
            return resolve(respack);
        })
    }

    /**
     * Saves a Project to the database
     * @require { data: Object } Project object to be saved/updated
     * @returns { data: Object } updated Project object
     */
    SAVEproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update lastdate to current date (?)
            // Update datelog (?)
            // Update DB doc with new object info
            // Return updated Project object
            return resolve(respack);
        })
    }

    /**
     * Deletes a Project object/doc from the database
     * @require { data: Object } Project object / ID ?
     * @returns { data: null }
     * 
     *     Needs electron
     */
    DELETEproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Remove associated doc from the DB
            return resolve(respack);
        })
    }

    /**
     * Updates the Project's stage, status, etc. to move it to the next step of the lifecycle (Submitted)
     * @require { data: Object } Project object / ID ?
     * @returns { data: Object } updated Project object
     */
    SELLproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update datelog
            // Update status and/or stage
            // Update DB doc
            // Return updated Project object
            return resolve(respack);
        })
    }

    /**
     * Updates the Project's stage, status, etc. to move it to the next step of the lifecycle (job)
     * @require { data: Object } = { project: object / ID ?, jobnum: String }
     * @returns { data: Object } updated Project object
     * 
     *     Needs electron
     */
    APPROVEproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update datelog
            // Update status and/or stage
            // Move project folder to new location (copy & delete instead?)
            // Update froot
            // Update DB doc
            // Return updated Project object
            return resolve(respack);
        })
    }

    /**
     * Splits off a new Project from an existing one
     * @require { data: Object } = { project: object / ID ?, newname: String }
     * @returns { data: Object } = { old: Object, new: Object }
     * 
     *     Needs electron
     */
    SPLITproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
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
            return resolve(respack);
        })
    }

    /**
     * Initializes the project builder with neccessary info
     * @requires { data: null } 
     * @returns { data: Object } = { project: Object, settings: Object, pricekey: Object, userinfo: Object }
     */
    INITproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Pull projecttoload
            // Pull correct Price Key
            // Pull settings
            // Pull userinfo & spdrive
            // Return all info
            return resolve(respack);
        })
    }

    /**
     * Saves a copy of the working project locally for later comparison or use in another window
     * @requires { data: Object } Project object
     * @internal projtoload Variable
     * @returns { data: null }
     * 
     * *CMV
     * - the route could have uses in the api somewhere, but for this purpose it is best in electron.
     * If we were to leave it here it would have to stash the project under the users name (which it could).
     * This would work all the way until they lose the connection.
     */
    STASHproject = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Check variable location exists
            // Update variable with given object
            return resolve(respack);
        })
    }

    /**
     * Retrieves the locally-saved project data for comparison or use in a new window
     * @requires { data: null }
     * @internal projtoload Variable
     * @returns { data: Object } Project object
     * 
     * *CMV - this is attached to the stash route above. The same would apply and it should stay (local).
     */
    GETstashed = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Check variable location exists
            // Return object stored in variable
            return resolve(respack);
        })
    }

    /**
     * Updates the ID property of a Project
     * @requires { data: Object } = { project: Object, newid: String }
     * @returns { data: Object } updated Project object
     * 
     *     Needs electron
     */
    UPDATEprojectID = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Use Project object to get froot
            // Check to make sure folder at froot exists
            // Check to make sure no files from that folder are open
            // Check to make sure newid is unique?
            // Rename project folder (copy & delete instead?)
            // Update Project object with newid (.id, .froot)
            // Update lastdate and datelog
            // Update Project doc in the DB
            // Return updated Project object
            return resolve(respack);
        })
    }
}