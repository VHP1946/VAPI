let TrackingModel = require('./TrackingModels.js');
let SettingsModel = require('./SettingsModels.js');

module.exports = {
    ...TrackingModel,
    SettingsModel: new SettingsModel()
}
