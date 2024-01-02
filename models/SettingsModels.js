const ModelBase = require('./ModelClass.js');

module.exports = class SettingsModel extends ModelBase {
    constructor(handler, server) {
        super();
        this.db = 'Settings';
        this.collect = 'Settings';
        console.log("SETTINGS MODULE >> ", handler)
        //this.query = handler.pack.data || {};

        return {
            SettingsModel: (handler, server) => {
                return new Promise((resolve, reject) => {
                    let appinfo = handler.pack.data.appinfo;
                    let usercreds = handler.pack.data.userinfo;
                    let settings = {
                        grouping: appinfo.grouping,  // there should always be a settings file for a Grouping; it will contain the workscheme, which is always required
                        apptype: appinfo.apptype,  // the App Type (Estimator, Tracking, etc.) should always be defined, but we may have some that do not require specific files
                        workscheme: {}
                    };

                    // use usercreds and appinfo to decide what products the user has access to within the app
                    let products = usercreds.access[settings.grouping.toLowerCase()].products || [];

                    // grab General settings
                    let gensets = require('../testing/settings/top-level/Settings-General.json');

                    // add General's "hardcoded" / "always" block to object [workscheme,progress]
                    if (gensets.always) {
                        settings = { ...settings, ...gensets.always }
                    }

                    // figure out what Grouping is required via appinfo, grab those settings
                    let groupsets = require(`../testing/settings/groups/Settings-${settings.grouping}.json`);

                    // add Grouping's "always" block to object
                    if (groupsets.always) {
                        settings = { ...settings, ...groupsets.always }
                    }

                    // use Grouping's workscheme list to only pull in what is allowed
                    for (let i = 0; i < groupsets.workscheme.length; i++) {
                        let stage = groupsets.workscheme[i].toLowerCase();
                        let statuses = gensets.workscheme.stage[stage].statuses;
                        settings.workscheme[stage] = gensets.workscheme.stage[stage];
                        settings.workscheme[stage].statuses = {};
                        for (let y = 0; y < statuses.length; y++) {
                            let thisstatus = statuses[y].toLowerCase();
                            settings.workscheme[stage].statuses[thisstatus] = gensets.workscheme.status[thisstatus];
                        }
                    }

                    // attempt to grab App-Specific settings
                    if (fs.existsSync(`../testing/settings/apptypes/Settings-${settings.apptype}.json`)) {
                        let appsets = require(`../testing/settings/apptypes/Settings-${settings.apptype}.json`);
                        settings = { ...settings, appsets: appsets }  // keep App-Specific settings together for easier use
                    }

                    // grab Pricing settings
                    let pricesets = require('../testing/settings/top-level/Settings-Pricing.json');

                    // populate products object
                    for (let i = 0; i < products.length; i++) {
                        if (settings.products == undefined) { settings.products = {} };  // initialize if not there; placed here so if there are no products it will skip it
                        let thisproduct = products[i].toLowerCase();
                        settings.products[thisproduct] = groupsets.products[thisproduct];

                        // will "profiles" be the final property and Products just fill it?
                        if (settings.profiles == undefined) { settings.profiles = {} };

                        // add Manufacturer info from each product via its list - if null or missing, no manf needed; if [], still add "default"
                        if (groupsets.products[thisproduct].manufacturers != undefined && groupsets.products[thisproduct].manufacturers != null) {
                            if (settings.manufacturers == undefined) { settings.manufacturers = {} };  // initialize if not there; placed her so if there are no manufacturers it will skip it
                            let mans = groupsets.products[thisproduct].manufacturers;
                            mans.push('default');
                            for (let y = 0; y < mans.length; y++) {
                                let thisman = mans[y].toLowerCase();
                                if (settings.manufacturers[thisman] == undefined) {   // if this manufacturer has not be logged yet, add it
                                    settings.manufacturers[thisman] = gensets.manufacturers[thisman];  // use General Settings to get base info
                                    if (groupsets.manufacturers && groupsets.manufacturers[thisman]) {  // if there are Group Settings for the Manf, add them
                                        settings.manufacturers[thisman] = {
                                            ...settings.manufacturers[thisman],
                                            ...groupsets.manufacturers[thisman]
                                        }
                                    }

                                }
                            }
                        }

                        // pull pricing "statics"
                        if (groupsets.products[thisproduct].pricing != undefined && groupsets.products[thisproduct].pricing != null && groupsets.products[thisproduct].pricing.length > 0) {
                            if (settings.pricing == undefined) { settings.pricing = {} }// initialize if not there; placed here so if there are no pricing options it will skip it

                            for (let y = 0; y < groupsets.products[thisproduct].pricing.length; y++) {
                                if (settings.pricing[groupsets.products[thisproduct].pricing[y]] == undefined) {
                                    settings.pricing[groupsets.products[thisproduct].pricing[y]] = pricesets.pricing[groupsets.products[thisproduct].pricing[y]];
                                }
                            }
                        }

                        // pull correct Financing plans, add to object
                        if (groupsets.products[thisproduct].fincodes != undefined && groupsets.products[thisproduct].fincodes != null && groupsets.products[thisproduct].fincodes.length > 0) {
                            settings.finplans = [];
                            let fincodes = groupsets.products[thisproduct].fincodes;
                            let finplans = pricesets.financing.finplans;

                            for (let y = 0; y < fincodes.length; y++) {   // loop through all the fincodes the product requires
                                let found = false;
                                let thiscode = fincodes[y];

                                for (let k = 0; k < settings.finplans.length; k++) {  // loop through current settings.finplans list to see if it has already been added
                                    if (settings.finplans[k].name == thiscode) {
                                        found = true;
                                        break;
                                    }
                                }

                                if (found == false) {  // if not already added, add to settings.finplans array
                                    for (let z = 0; z < finplans.length; z++) {
                                        if (finplans[z].name == thiscode) {
                                            settings.finplans.push(finplans[z])
                                            break;
                                        }
                                    }
                                }

                            }
                        }
                    }

                    return resolve(settings);
                })
            }
        }
    }

    
}

function GETsettings(handler, server) {
    return new Promise((resolve, reject) => {
        let appinfo = handler.pack.data.appinfo;
        let usercreds = handler.pack.data.userinfo;
        let settings = {
            grouping: appinfo.grouping,  // there should always be a settings file for a Grouping; it will contain the workscheme, which is always required
            apptype: appinfo.apptype,  // the App Type (Estimator, Tracking, etc.) should always be defined, but we may have some that do not require specific files
            workscheme: {}
        };

        // use usercreds and appinfo to decide what products the user has access to within the app
        let products = usercreds.access[settings.grouping.toLowerCase()].products || [];

        // grab General settings
        let gensets = require('../testing/settings/top-level/Settings-General.json');

        // add General's "hardcoded" / "always" block to object [workscheme,progress]
        if (gensets.always) {
            settings = { ...settings, ...gensets.always }
        }

        // figure out what Grouping is required via appinfo, grab those settings
        let groupsets = require(`../testing/settings/groups/Settings-${settings.grouping}.json`);

        // add Grouping's "always" block to object
        if (groupsets.always) {
            settings = { ...settings, ...groupsets.always }
        }

        // use Grouping's workscheme list to only pull in what is allowed
        for (let i = 0; i < groupsets.workscheme.length; i++) {
            let stage = groupsets.workscheme[i].toLowerCase();
            let statuses = gensets.workscheme.stage[stage].statuses;
            settings.workscheme[stage] = gensets.workscheme.stage[stage];
            settings.workscheme[stage].statuses = {};
            for (let y = 0; y < statuses.length; y++) {
                let thisstatus = statuses[y].toLowerCase();
                settings.workscheme[stage].statuses[thisstatus] = gensets.workscheme.status[thisstatus];
            }
        }

        // attempt to grab App-Specific settings
        if (fs.existsSync(`../testing/settings/apptypes/Settings-${settings.apptype}.json`)) {
            let appsets = require(`../testing/settings/apptypes/Settings-${settings.apptype}.json`);
            settings = { ...settings, appsets: appsets }  // keep App-Specific settings together for easier use
        }

        // grab Pricing settings
        let pricesets = require('../testing/settings/top-level/Settings-Pricing.json');

        // populate products object
        for (let i = 0; i < products.length; i++) {
            if (settings.products == undefined) { settings.products = {} };  // initialize if not there; placed here so if there are no products it will skip it
            let thisproduct = products[i].toLowerCase();
            settings.products[thisproduct] = groupsets.products[thisproduct];

            // will "profiles" be the final property and Products just fill it?
            if (settings.profiles == undefined) { settings.profiles = {} };

            // add Manufacturer info from each product via its list - if null or missing, no manf needed; if [], still add "default"
            if (groupsets.products[thisproduct].manufacturers != undefined && groupsets.products[thisproduct].manufacturers != null) {
                if (settings.manufacturers == undefined) { settings.manufacturers = {} };  // initialize if not there; placed her so if there are no manufacturers it will skip it
                let mans = groupsets.products[thisproduct].manufacturers;
                mans.push('default');
                for (let y = 0; y < mans.length; y++) {
                    let thisman = mans[y].toLowerCase();
                    if (settings.manufacturers[thisman] == undefined) {   // if this manufacturer has not be logged yet, add it
                        settings.manufacturers[thisman] = gensets.manufacturers[thisman];  // use General Settings to get base info
                        if (groupsets.manufacturers && groupsets.manufacturers[thisman]) {  // if there are Group Settings for the Manf, add them
                            settings.manufacturers[thisman] = {
                                ...settings.manufacturers[thisman],
                                ...groupsets.manufacturers[thisman]
                            }
                        }

                    }
                }
            }

            // pull pricing "statics"
            if (groupsets.products[thisproduct].pricing != undefined && groupsets.products[thisproduct].pricing != null && groupsets.products[thisproduct].pricing.length > 0) {
                if (settings.pricing == undefined) { settings.pricing = {} }// initialize if not there; placed here so if there are no pricing options it will skip it

                for (let y = 0; y < groupsets.products[thisproduct].pricing.length; y++) {
                    if (settings.pricing[groupsets.products[thisproduct].pricing[y]] == undefined) {
                        settings.pricing[groupsets.products[thisproduct].pricing[y]] = pricesets.pricing[groupsets.products[thisproduct].pricing[y]];
                    }
                }
            }

            // pull correct Financing plans, add to object
            if (groupsets.products[thisproduct].fincodes != undefined && groupsets.products[thisproduct].fincodes != null && groupsets.products[thisproduct].fincodes.length > 0) {
                settings.finplans = [];
                let fincodes = groupsets.products[thisproduct].fincodes;
                let finplans = pricesets.financing.finplans;

                for (let y = 0; y < fincodes.length; y++) {   // loop through all the fincodes the product requires
                    let found = false;
                    let thiscode = fincodes[y];

                    for (let k = 0; k < settings.finplans.length; k++) {  // loop through current settings.finplans list to see if it has already been added
                        if (settings.finplans[k].name == thiscode) {
                            found = true;
                            break;
                        }
                    }

                    if (found == false) {  // if not already added, add to settings.finplans array
                        for (let z = 0; z < finplans.length; z++) {
                            if (finplans[z].name == thiscode) {
                                settings.finplans.push(finplans[z])
                                break;
                            }
                        }
                    }

                }
            }
        }

        return resolve(settings);
    })
}