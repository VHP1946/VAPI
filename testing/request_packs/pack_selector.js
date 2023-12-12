const tools = require('../../tools/vg-gentools.js');

// list of modules -> JSON file
let modules = {
    defaults: {},
    projects: {},
    tracking: {}
}

for (let m in modules) {
    let mod = require(`./${m}.json`);
    for (let r in mod) {
        modules[m][r] = r;
    }
}
console.log('Request packs set up >\n', modules);

/**
 * Takes module to find JSON file.
 * Takes route to match route in file
 * Takes type to test a pack in that route. Can
 * add any pack to route and reach it through the
 * type. A 'default' pack should always exist.
 *
 * @param {String} module
 * @param {String} route
 * @param {String} type
 */
const selector = (route, type) => {
    let runroute = false;
    let runmod = false
    for (let m in modules) {
        for (let r in modules[m]) {
            if (r == route) {
                runmod = m
                runroute = true;
                break;
            }
        }
    }
    if (runroute) {
        stashmodule = require(`./${runmod}.json`);
        try { return stashmodule[route].request[type] }
        catch (err) { console.error(err); return false; }
    }
}
let stashmodule = null;

const checker = ({
    route,
    type,
    response
}) => {
    if (!stashmodule[route].response || !stashmodule[route].response[type]) { return { success: true, msg: 'Nothing to check against', data: null } }

    let resdata = stashmodule[route].response[type];

    if (typeof resdata == 'object' && !Array.isArray(resdata)) {                             // if it is an object...
        if (tools.deepEqual(resdata, response.data)) { return { success: true, msg: 'Passed', data: resdata } }
    } else if (typeof resdata == 'object' && Array.isArray(resdata)) {                       // if it is an array...
        if (Array.isArray(response.data)) { return { success: true, msg: 'Passed', data: resdata } }
    } else if (typeof resdata == 'string') {                                                 // if it is a string...
        if (resdata == response.data) { return { success: true, msg: 'Passed', data: resdata } }
    }

    return { success: false, msg: 'Failed', data: resdata };  // returns a false if nothing matches

    //compare response to stash module reponse
    //deep equal?
}

const recorder = ({ file, route, type, response }) => {
    if (type != 'default') {//don't override default

    }
    stashmodule = null; //better way to clear
}

module.exports = {
    selector,
    checker,
    recorder
}
