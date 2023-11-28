let lib = require('../tools/index.js');  //  all of the 'tool' functions used in this application

let AnalyticsController = require('./AnalyticsController.js');
/*
let BackupsController = require('./BackupsController.js');
let DocumentsController = require('./DocumentsController.js');
let PricingController = require('./PricingController.js');
let ProjectsController = require('./ProjectsController.js');
let SettingsController = require('./SettingsController.js');
let SupportController = require('./SupportController.js');
*/
let TrackingController = require('./TrackingController.js');

module.exports = {
    ...new AnalyticsController(lib),
    //...new BackupsController(lib),
    //...new DocumentsController(lib),
    //...new PricingController(lib),
    //...new ProjectsController(lib),
    //...new SettingsController(lib),
    //...new SupportController(lib),
    ...new TrackingController(lib)
}
