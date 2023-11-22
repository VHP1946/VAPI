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

const tools = require('./tools/track_analytics.js');

module.exports = class AnalyticsController {
    constructor() {
    }

    /**
     * Creates a set of basic metrics for requested query
     * @requires
     * @returns {resdata: Object} object containing metrics info
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
     * @requires
     * @returns {resdata: Object} object containing analytics info
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

    /**
     * Creates a commission payout "report"
     * @returns {data: Object} object containing commissions details
     */
    GETcommissions = (handler) => {
        return new Promise (async (resolve,reject) => {
            
            return resolve (handler);
        })
    }
}

/**
 * Creates a set of data structured around reporting a whole/single month or year
 * @req User Creds
 * @returns {resdata: Object} object containing breakdown info
 */
GETmonthBreakdown
GETannualBreakdown

/**
 * Provides a list of reports available for given conditions
 * @req User Creds
 * @returns {resdata: Object} list of Report names and descriptions
 */
GETreportList
// Query available reports
// Filter to only those that user has access to
// Return report list

/**
 * Returns the data neccessary for a requested report
 * @req User Creds
 * @returns {resdata: Object} object containing report info (pdf?)
 */
GETreport
// Check that report exists
// Check that user has access to that report
// Calculate report requirements
// Package report data
// Return report object