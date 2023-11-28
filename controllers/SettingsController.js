/**
 * Routes to handle interactions with Settings objects and databases
 * 
 * QUERYsettings
 * GETsettings
 * GETallSettings
 * SAVEsettings
 * MAKEcurrent
 * 
 */

module.exports = class SettingsController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            QUERYsettings: {
                name: 'QUERYsettings',
                route: this.QUERYsettings,
                models: ['QUERYsettings'],
                scheme: 'QUERYsettings'
            },
            GETsettings: {
                name: 'GETsettings',
                route: this.GETsettings,
                models: ['GETsettings'],
                scheme: 'GETsettings'
            },
            GETallSettings: {
                name: 'GETallSettings',
                route: this.GETallSettings,
                models: ['GETallSettings'],
                scheme: 'GETallSettings'
            },
            SAVEsettings: {
                name: 'SAVEsettings',
                route: this.SAVEsettings,
                models: ['SAVEsettings'],
                scheme: 'SAVEsettings'
            },
            MAKEcurrent: {
                name: 'MAKEcurrent',
                route: this.MAKEcurrent,
                models: ['MAKEcurrent'],
                scheme: 'MAKEcurrent'
            }
        }
    }

    /**
      * Retrieves a list of Settings objects from the database based on requested query
      * @request { data: Object } query = { property: value, ... }
      * @returns { data: Array } list of Settings objects
      */
    QUERYsettings = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return results
            return resolve(respack);
        })
    }

    /**
    * Retrieves a specific Settings object from the database
    * @requires { data: Object } = { version: String, dept: String }
    * @returns { data: Object } Settings object
    */
    GETsettings = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return result
            return resolve(respack);
        })
    }

    /**
     * Retrieves a list of all Settings objects in a database
     * @requires { data: null }
     * @returns { data: Array } list of Settings objects
     */
    GETallSettings = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return results
            return resolve(respack);
        })
    }

    /**
     * Updates an existing Settings object in the database
     * @require { data: Object } Settings object
     * @returns { data: Object } updated Settings object
     */
    SAVEsettings = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update DB doc with current Settings object
            return resolve(respack);
        })
    }

    /**
     * Sets an existing Settings object to the 'current'
     *  // We currently do not save versions, we just keep one rolling 'current' one for each application/dept
     * @requires { data: String } setid = id of Settings object
     * @returns { data: null }
     */
    MAKEcurrent = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update DB with new info
            return resolve(respack);
        })
    }
}