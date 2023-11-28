module.exports = {
    nxtprojectnum
}


/**
 * Create a new and unique quote number by
 * using the date / time and the app name
 * 
 * @param {*} appinfo
 * @param {*} suffix - optional; allows addition of things like 'BETA'
 * 
 * @returns id as String
 */
var nxtprojectnum = (appinfo, suffix) => {
    let id = `${appinfo.name}-${new Date().getTime()}`
    if (suffix) { id = id + `-${suffix}` }
    return id;
}