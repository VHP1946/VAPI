/**
 * Routes to handle backing up of databases
 * 
 * QUERYbackups
 * BACKUPdb
 * 
 */

module.exports = class BackupsController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            QUERYbackups: {
                name: 'QUERYbackups',
                route: this.QUERYbackups,
                models: ['QUERYbackups'],
                scheme: 'QUERYbackups'
            },
            BACKUPdb: {
                name: 'BACKUPdb',
                route: this.BACKUPdb,
                models: ['BACKUPdb'],
                scheme: 'BACKUPdb'
            }
        }
    }

    /**
     * Finds info on current backups (last update, etc.)
     * @requires { data: Object } query object (dept, type, etc.) ?
     * @returns { data: Object } object containing backups info
     */
    QUERYbackups = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Retrieve backup location (in settings, user-requested ?)
            // Scan folder for files
            // Return file info
            return resolve(respack);
        })
    }

    /**
     * Pull data and save to backup files and locations
     * @requires { data: Object } query object (dept, type, etc.) ?
     * @returns { data: null }
     * 
     *    Needs electron
     */
    BACKUPdb = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Retrieve backup location (in settings, user-requested ?)
            // Retrieve proper data
            // Convert data to JSON
            // Tag JSON with date (added to file name)
            // Save to proper backup location
            return resolve(respack);
        })
    }
}