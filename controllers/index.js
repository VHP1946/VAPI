let lib ={};//require('../bin/lib.js') //all of the 'tool' functions used in this application
let TrackingController = require('./Trackers/TrackingController.js');

module.exports = {
    ...new TrackingController(lib)
}
