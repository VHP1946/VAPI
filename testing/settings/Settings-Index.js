/**
 * General Settings - Used by almost all applications
 * - Lifecycle ( Stage & Status )
 * - Progress ( unattached / un-processed "statuses" )
 * - Manufacturers
 * - Utility (gas, elec, etc.) Options
 */
const general = require('./Settings-General.json');


/**
 * Grouping Settings - Used by all applications in a "group"
 * - Their Workflow
 * - Products / Modules
 */
const replacement = require('./Settings-Replacement.json');
const service = require('./Settings-Service.json');


/**
 * Pricing Settings - Used by all applications requiring pricing / financing calculations
 * - Product-specific variables (margin, laborRate, etc.)
 * - Rate / Plan Tables
 */
const pricing = require('./Settings-Pricing.json');


/**
 * Application-specific Settings for Estimator Apps
 * - Functionality settings (GUI) (editable)
 */
const estimator = require('./Settings-Estimator.json');

/**
 * Application-specific Settings for Tracking Apps
 * - Functionality settings (GUI) (editable)
 * - Sales Metrics (prstdate, prstvia, etc.)
 * - Source / Generators
 * - Categories / Types
 */
const marketing = require('./Settings-Tracking.json');

/**
 * Application-specific Settings for Board Apps
 * - Functionality settings (GUI) (editable)
 * If there are none, omit file
 */
const boards = require('./Settings-Board.json');

/**
 * Application-specific Settings for Manager Apps
 * - Functionality settings (GUI) (editable)
 * If there are none, omit file
 */
const managers = require('./Settings-Manager.json');


/**
 * Reviews Settings
 */
const reviews = require('./Settings-Reviews.json');



/**
 * products - What can a consultant quote? / What services can a tech perform?
 * profiles - what application modules are needed to quote what is allowed?
 * grouping - Which department group(s) does it belong to (replacement, service, etc.)?
 * apptype - What type is the application / what is its primary function (estimator, tracker, etc.)? 
 * category - What Tracking category it belongs to
 */




/**
 * NEEDS:
 * Estimators : General, Grouping, Estimators
 * Trackers : General, Grouping, Marketing
 * Boards : General, Grouping, Reviews
 * Manager Apps : General, Grouping(s), Reviews
 */


/**
 * Provided Constants / Hardcoded GenTools
 * - Month Array ( including Carry-Over )
 */
const gentools = require('./gentools.js');
