/**
 * @namespace config
 */

/**
 * @type {String}
 * @constant
 * @memberOf config
 **/
export const NODE_ENV = process.env.NODE_ENV;

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const IS_DEVELOPMENT = NODE_ENV === "development";

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const IS_MOBILE = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
  navigator.userAgent.toLowerCase()
);

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const IS_BROWSER =
  typeof window !== "undefined" || typeof document !== "undefined";

export const DEVTOOLS_IS_ENABLED = true;
