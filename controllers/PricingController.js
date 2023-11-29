/**
 * Routes to handle Price Keys
 * 
 * QUERYkeys
 * GETkey
 * GETallKeys
 * CREATEkey
 * SAVEkey
 * MAKEcurrent
 * 
 */

module.exports = class PricingController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            QUERYkeys: {
                name: 'QUERYkeys',
                route: this.QUERYkeys,
                models: ['QUERYkeys'],
                scheme: 'QUERYkeys'
            },
            GETkey: {
                name: 'GETkey',
                route: this.GETkey,
                models: ['GETkey'],
                scheme: 'GETkey'
            },
            GETallKeys: {
                name: 'GETallKeys',
                route: this.GETallKeys,
                models: ['GETallKeys'],
                scheme: 'GETallKeys'
            },
            CREATEkey: {
                name: 'CREATEkey',
                route: this.CREATEkey,
                models: ['CREATEkey'],
                scheme: 'CREATEkey'
            },
            SAVEkey: {
                name: 'SAVEkey',
                route: this.SAVEkey,
                models: ['SAVEkey'],
                scheme: 'SAVEkey'
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
     * Retrieves a list of tracking items from the database based on requested query
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Array } list of Price Key objects
     */
    QUERYkeys = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return results
            return resolve(respack);
        })
    }

    /**
     * Retrieves a specific Price Key from the database
     * If sent nothing, automatically returns 'current' Price Key
     * @requires { data: String } Price Key version
     * @returns { data: Object } Price Key object
     */
    GETkey = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return result
            return resolve(respack);
        })
    }

    /**
     * Retrieves a list of all Price Keys in a database
     * @requires { data: null }
     * @returns { data: Array } list of Price Key objects
     */
    GETallKeys = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query DB
            // Return results
            return resolve(respack);
        })
    }

    /**
     * Uses provided info to select the correct keymaker and create a new Price Key
     * @requires { data: Object } raw Price Book data
     * @internal Price Book paths, Price Book base name, properly-named maker.js files
     * @returns { data: Object } new Price Key object
     * 
     * *CMV:
     * - This can stay here so long as it accepts the pricing file in a "semi" raw form (csv or 
     * simple object). The client side would be responsible for pre-formating the book. The route
     * can the finish the creation, test the key, and update the key with key id.
     * 
     * - Project settings should be pulled here. it could be part of the model for this route.
     */
    CREATEkey = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Convert raw data as needed
            // Select correct maker
            // Run maker
            // Return Price Key object
            return resolve(respack);
        })
    }

    /**
     * Takes a new or modified key object and saves it to the database
     * @requries { data: Object } Price Key object
     * @returns { data: null }
     */
    SAVEkey = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Save new doc to DB
            return resolve(respack);
        })
    }

    /**
     * Takes an existing key and makes that the current key
     * @requires { data: String } pkid = id of key
     * @returns { data: null }
     */
    MAKEcurrent = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Update DB with new info
            return resolve(respack);
        })
    }
}