let AnalyticsSchemes = require('./AnalyticsSchemes.js');
let BackupsSchemes = require('./BackupsSchemes.js');
let PricingSchemes = require('./PricingSchemes.js');
let ProjectSchemes = require('./ProjectSchemes.js');
let SettingsSchemes = require('./SettingsSchemes.js');
let SupportSchemes = require('./SupportSchemes.js');
let TrackingSchemes = require('./TrackingSchemes.js');


module.exports = {
    ...AnalyticsSchemes,
    ...BackupsSchemes,
    ...PricingSchemes,
    ...ProjectSchemes,
    ...SettingsSchemes,
    ...SupportSchemes,
    ...TrackingSchemes
}
