/**
 * Routes to handle interactions with Reporting and Analytics requests
 * 
 * GETmetrics
 * GETanalytics
 * GETcommissions
 * GETmonthBreakdown
 * GETannualBreakdown
 * 
 * GETreportList
 * GETreport
 */

module.exports = class AnalyticsController {
    constructor(lib) {
        this.tools = lib;

        return {  // export all routes
            GETmetrics: {
                name: 'GETmetrics',
                route: this.GETmetrics,
                models: ['GETmetrics'],
                scheme: 'GETmetrics'
            },
            GETanalytics: {
                name: 'GETanalytics',
                route: this.GETanalytics,
                models: ['GETanalytics'],
                scheme: 'GETanalytics'
            },
            GETcommissions: {
                name: 'GETcommissions',
                route: this.GETcommissions,
                models: ['GETcommissions'],
                scheme: 'GETcommissions'
            },
            GETmonthBreakdown: {
                name: 'GETmonthBreakdown',
                route: this.GETmonthBreakdown,
                models: ['GETmonthBreakdown'],
                scheme: 'GETmonthBreakdown'
            },
            GETannualBreakdown: {
                name: 'GETannualBreakdown',
                route: this.GETannualBreakdown,
                models: ['GETannualBreakdown'],
                scheme: 'GETannualBreakdown'
            },
            GETreportList: {
                name: 'GETreportList',
                route: this.GETreportList,
                models: ['GETreportList'],
                scheme: 'GETreportList'
            },
            GETreport: {
                name: 'GETreport',
                route: this.GETreport,
                models: ['GETreport'],
                scheme: 'GETreport'
            }
        }
    }

    /**
     * Creates a set of basic metrics for requested query
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Object } object containing metrics info
     */
    GETmetrics = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let pack = {
                success: true,
                msg: 'Metrics generated',
                data: {},
                errors: null
            }
            let { success, msg, data: list } = await handler.services.mart({
                db: 'Replacement',
                collect: 'Tracking350',
                method: 'QUERY'
            })
            let metrics = tools.GENmetrics(list);
            pack.data = metrics;
            return resolve(respack);
        })
    }

    /**
     * Creates a set of deeper metrics/analytics for requested query
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Object } object containing analytics info
     */
    GETanalytics = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            let pack = {
                success: true,
                msg: 'Analytics generated',
                data: {},
                errors: null
            }
            let resp = await handler.services.mart({
                db: 'Replacement',
                collect: 'Tracking350',
                method: 'QUERY'
            })
            let list = resp.data;
            let analytics = tools.GENanalytics(list);
            pack.data = analytics;
            return resolve(respack);
        })
    }

    /**
     * Creates a commission payout "report"
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Object } object containing commissions details
     */
    GETcommissions = (handler, server) => {
        return new Promise(async (resolve, reject) => {

            return resolve(respack);
        })
    }

    /**
     * Creates a set of data structured around reporting a single month
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Object } object containing breakdown info
     */
    GETmonthBreakdown = (handler, server) => {
        return new Promise(async (resolve, reject) => {

            return resolve(respack);
        })
    }

    /**
     * Creates a set of data structured around reporting a whole year
     * @requires { data: Object } query = { property: value, ... }
     * @returns { data: Object } object containing breakdown info
     */
    GETannualBreakdown = (handler, server) => {
        return new Promise(async (resolve, reject) => {

            return resolve(respack);
        })
    }

    /**
     * Provides a list of reports available to the CURRENT USER
     * @requires { data: null }
     * @returns { data: Object } list of Report names and descriptions
     */
    GETreportList = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Query available reports
            // Filter to only those that user has access to
            // Return report list
            return resolve(respack);
        })
    }

    /**
     * Returns the data neccessary for a requested report
     * @requires { data: String } name of requested report
     * @returns { data: Object } object containing report info (pdf?)
     */
    GETreport = (handler, server) => {
        return new Promise(async (resolve, reject) => {
            // Check that report exists
            // Check that user has access to that report
            // Calculate report requirements
            // Package report data
            // Return report object
            return resolve(respack);
        })
    }
}










