/**
 * Tools/functions for use by Analytics Controller
 */
module.exports = {
    GENmetrics,
    GENanalytics
}


/**
 * Generates basic metrics for given data
 * @param {*} list
 * @returns metrics object
 */
var GENmetrics = (list) => {
    return new Promise((resolve, reject) => {
        let metrics = {};
        // calc averages

        return resolve(metrics);
    })
}

/**
 * Generates more detailed analytics for given data
 * @param {*} list
 * @returns analytics object
 */
var GENanalytics = (list) => {
    return new Promise((resolve, reject) => {
        let metrics = GENmetrics(list);
        let analytics = {};

        return resolve(analytics);
    })
}


