/**
 * Routes to handle interactions with Reporting and Analytics requests
 * All responses in { success: Boolean, msg: String, data: ANY, lvl: String }
 */

const tools = require('./ReportingTools.js');


/**
 * Creates a set of basic metrics for requested query
 * @param {*} data
 * @requires
 * @returns {data: Object} object containing metrics info
 */
getMetrics
    // Query correct database for required info
    // Run GENmetrics
    // Return Metrics object


/**
 * Creates a set of deeper metrics/analytics for requested query
 * @param {*} data
 * @requires
 * @returns {data: Object} object containing analytics info
 */
getAnalytics
    // Query correct database for required info
    // Run GENmetrics
    // Run remaining analytics
    // Return Analytics object


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