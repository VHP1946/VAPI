const fs = require('fs');
const ModelBase = require('./ModelClass.js');

module.exports = class SettingsModel extends ModelBase {
    constructor() {
        super();
        this.db = 'Settings';

        return (handler, server) => {
            return new Promise(async (resolve, reject) => {
                let appinfo = handler.pack.data.appinfo;
                let usercreds = handler.pack.data.userinfo;

                let resp = await this.GETsettings(server, appinfo, usercreds);

                let response = {
                    success: resp.success,
                    model: {}
                }
                if (response.success) {
                    response.model = resp.result;
                }

                return resolve(response);
            })
        }

    }

    GETsettings(server, appinfo, usercreds) {
        return new Promise(async (resolve, reject) => {
            let settings = {
                grouping: appinfo.grouping,  // there should always be a settings file for a Grouping; it will contain the workscheme, which is always required
                apptype: appinfo.apptype,  // the App Type (Estimator, Tracking, etc.) should always be defined, but we may have some that do not require specific files
                category: appinfo.category,
                workscheme: {}
            };

            // use usercreds and appinfo to decide what products the user has access to within the app
            let products = [];
            for (let i = 0; i < usercreds.groups.length; i++) {
                if (usercreds.groups[i].group.toLowerCase() == settings.grouping.toLowerCase()) {
                    for (let y = 0; y < usercreds.groups[i].categories.length; y++) {
                        if (usercreds.groups[i].categories[y].category.toLowerCase() == settings.category.toLowerCase()) {
                            products.push(...usercreds.groups[i].categories[y].products);
                        }
                    }
                }
            }

            // grab General settings
            let gensets = await this.QUERYdb(server, this.db, 'General', { category: 'General' });
            if (gensets.length == 1) {
                gensets = gensets[0];
                if (gensets.always) {
                    settings = { ...settings, ...gensets.always }
                }
            } else if (gensets.length > 1) {
                console.log("Pulled too many General settings documents from General collection")
            } else if (gensets.length = 0) {
                console.log("Did not find General settings in General collection")
            }

            // grab Pricing settings   -   move within products to account for apps that will not need pricing
            let pricesets = await this.QUERYdb(server, this.db, 'General', { category: 'Pricing' });
            if (pricesets.length == 1) {
                pricesets = pricesets[0];
            } else if (pricesets.length > 1) {
                console.log("Pulled too many Pricing settings documents from General collection")
            } else if (pricesets.length = 0) {
                console.log("Did not find Pricing settings in General collection")
            }

            // figure out what Grouping is required via appinfo, grab those settings
            let groupsets = await this.QUERYdb(server, this.db, 'Group', { group: settings.grouping, category: settings.category });
            if (groupsets.length == 1) {
                groupsets = groupsets[0];
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

                // populate products object
                for (let i = 0; i < products.length; i++) {
                    if (settings.products == undefined) { settings.products = {} };  // initialize if not there; placed here so if there are no products it will skip it
                    let thisproduct = products[i].toLowerCase();
                    settings.products[thisproduct] = groupsets.products[thisproduct];

                    if (settings.profiles == undefined) { settings.profiles = {} };
                    if (settings.products[thisproduct].profile != undefined && settings.products[thisproduct].profile != null
                        && settings.profiles[settings.products[thisproduct].profile] == undefined) {
                            console.log('PROFILE');
                        settings.profiles[settings.products[thisproduct].profile] = { ...groupsets.productProfiles[settings.products[thisproduct].profile] }
                    }

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
            } else if (groupsets.length > 1) {
                console.log("Pulled too many Group settings documents from Groups collection")
            } else if (groupsets.length = 0) {
                console.log("Did not find Group settings in Groups collection")
            }

            let appsets = await this.QUERYdb(server, this.db, 'App', { apptype: settings.apptype });
            if (appsets.length == 1) {
                settings = { ...settings, appsets: appsets[0] };
                delete settings.appsets._id;
                delete settings.appsets.apptype;
            } else if (appsets.length > 1) {
                console.log("Pulled too many AppType settings documents from Apps collection")
            } else if (appsets.length = 0) {
                console.log("Did not find any AppType settings in Apps collection")
            }

            return resolve({ success: true, msg: 'Settings Combined', result: settings });
        })
    }
}