/**
 * Tools/functions for use by Reporting Controller
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
var GENmetrics=(list)=>{
    return new Promise ((resolve,reject)=>{
        let metrics = {};
        // calc averages

        return resolve(metrics)
    })
}


var GENanalytics=()=>{
    return new Promise ((resolve,reject)=>{
        let analytics = {};
        return resolve(analytics)
    })
}


