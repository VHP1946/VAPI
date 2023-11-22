/**
 * Routes to handle interactions with Reporting and Analytics requests
 * All responses in pack = { success: Boolean, msg: String, data: ANY, lvl: String }
 * 
 * GETmetrics
 * GETanalytics
 * GETmonthBreakdown
 * GETannualBreakdown
 * 
 */

const tools = require('./tools/track_analytics.js');

module.exports = class AnalyticsController {
    constructor() {
    }

    /**
     * Creates a set of basic metrics for requested query
     * @param {*} data
     * @requires
     * @returns {data: Object} object containing metrics info
     */
    GETmetrics = (handler) => {
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
            return resolve(pack)
        })
    }

    /**
     * Creates a set of deeper metrics/analytics for requested query
     * @param {*} data
     * @requires
     * @returns {data: Object} object containing analytics info
     */
    GETanalytics = (handler) => {
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
            return resolve(pack)
        })
    }
}

/**
 * Creates a set of data structured around reporting a whole/single month or year
 * @param {*} data
 * @req User Creds
 * @returns {data: Object} object containing breakdown info
 */
getMonthBreakdown
getAnnualBreakdown

/**
 * Provides a list of reports available for given conditions
 * @param {*} data
 * @req User Creds
 * @returns {data: Object} list of Report names and descriptions
 */
getReportList
// Query available reports
// Filter to only those that user has access to
// Return report list

/**
 * Returns the data neccessary for a requested report
 * @param {*} data = Report name
 * @req User Creds
 * @returns {data: Object} object containing report info (pdf?)
 */
getReport
// Check that report exists
// Check that user has access to that report
// Calculate report requirements
// Package report data
// Return report object