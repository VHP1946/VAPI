/**
 * what we want to do is create a master class that manages the sessions of the tracker app.
 * This should not require us to change the way we provide the models to the server. 
 * 
 * Two things could happen:
 * 
 * 1) two classes are creted. A sub class to manage the different sessions, and an extended class to 
 *    specifically manage the tracking app sessions. The functions below can be placed in the specific 
 *    class for more concise code. The spefic class should be initialized in this file, and pass the
 *    neeed models to the exports.
 */


/**
 * For caching data for models. Simply, it will allow the models to store client reqeust, and skip a trip
 * to the database. ModelData will provide simple functionality on the lists, but any special functioning
 * can be extended by the child class. Lists will hold the caching for the models and will be identifiable
 * by the: (all of these things are still being worked out)
 * - requester
 * - time
 * - filter
 * 
 * @todo It will be a challenge to keep the data refreshed. Since the models only pass the required data to the
 * controllers, the controllers do not have a good way to notify the models for refresh. To solve this, we may
 * need to add a "master" model class to attach to the server. This class would handle the distrubution of models
 * upon request AND recieve direction on request end on need changes to cache data.
 * 
 * @todo understand a good way to auto check for refreshes in cached data. The data will have attachd a retrieved
 * data which can be used for age. The specific model could be in charge of setting the refresh check time. Some
 * data may be required to stay fresher than others. It also may be good for the the client to have a specific call
 * available to flush the data, overriding the timer. 
 * 
 * Use Cases: The class is not meant to be used all the time as most of the time it will be necessary to retrieve
 * fresh data. More often than not i see data being cached in analytic views were the data is being referenced and
 * not changed during this time.
 * In the actual model functions, the developer will have the option to check whether the data is available already,
 * and if the data available is usable. To do so, the function can GETlist from ModelData. If the data available was
 * not usable, the model function will retrieve it, then have the option to cache that data using SETlist.
 * When setting the list, you can attach whether or not the data is being "watched". In this situation, ModelData will
 * set that specific list on a timer to be checked with the same data from the data. 
 * 
 * Types of checks:
 * - stale timeout - a way to let ModelData know that if the data has not been referenced in a set time, it is purged.
 * It should be noted that each time the data is referenced, the reference time is reset.
 * - refresh timeout - given an interval, the data is repulled and checked if anything has changed. If it was chaged,
 * the list is refreshed, otherwise the retrieved list is discarded.
 * - 
 * 
 * *Remember the data in the list will have a filter attached to it. This means the check will be on the data retrieved
 * with the filter set.
 * 
 * 
 */

module.exports = class ModelBase {
    constructor() {
        this.lists = {};
    }

    QUERYdb(db, collect, query = {}) {
        return new Promise((resolve, reject) => {
            let reqpack = {
                db: db,
                collect: collect,
                method: 'QUERY',
                options: {
                    query: query
                }
            }
            server.mart.request({ pack: reqpack, route: 'STORE' }).then(resp => {
                return resolve(resp);
            })
        })
    }

    SETlist(flts, name, list) {
        //check valid list (array)
        //check if list already exits (proper clean when needed)
        this.lists[name] = list;
        //confirm add(true) OR not(false)
    }

    GETlist(name, list) {
        if (this.lists[name] && this.lists[name].length < 1) {//check if exists AND is full
            return this.lists[name].data;
        } else { return null }
    }
    REFRESHlists(names) {

    }
}
