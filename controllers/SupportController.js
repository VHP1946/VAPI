/**
 * Routes to handle interactions with our Support system
 * 
 * EMAILsupport
 * SUBMITissue
 * OPENportal
 * 
 */

module.exports = class SupportController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            EMAILsupport: {
                name: 'EMAILsupport',
                route: this.EMAILsupport,
                models: ['EMAILsupport'],
                scheme: 'EMAILsupport'
            },
            SUBMITissue: {
                name: 'SUBMITissue',
                route: this.SUBMITissue,
                models: ['SUBMITissue'],
                scheme: 'SUBMITissue'
            },
            OPENportal: {
                name: 'OPENportal',
                route: this.OPENportal,
                models: ['OPENportal'],
                scheme: 'OPENportal'
            }
        }
    }

    /**
     * Starts up a new email messege to the support team using the default email client
     * @requires { data: null }
     * @internal Support Email Address
     * @returns { data: null }
     * 
     *    Requires electron?
     */
    EMAILsupport = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Gather application info (name, version)
            // Call OS to start new email 
            return resolve(respack);
        })
    }

    /**
     * Automatically submits an issue to the support email with Application and Document info
     * @requires { data: Object } User-submitted info (comments, etc.)
     * @internal Support Email Address, Application Info, User Email Address
     * @returns { data: null }
     */
    SUBMITissue = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Gather application info (name, version)
            // Gather document info ( submitted or pulled ?)
            // Generate email
            // Send email
            return resolve(respack);
        })
    }

    /**
     * Opens a new window to the Support Portal 
     * @requires { data: null }
     * @internal Support Web Address, Application's Support Web Address?
     * @returns { data: null }
     */
    OPENportal = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Gather application info (name, version)
            // Open new window directed at proper address 
            return resolve(respack);
        })
    }
}