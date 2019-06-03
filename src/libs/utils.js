/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @returns {String} Combined classes
 */
export const composeClasses = (...styles) => {
    let classes = '';

    styles.forEach((arg) => {
        if (arg) {
            classes += `${arg} `;
        }
    });

    return classes.trim();
};

/**
 * @param arr
 * @returns {arg is Array<any> | boolean}
 */
export const isNotEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;


/**
 * @param {*} obj The object to test
 * @returns {*} boolean
 */
export const isObjectEmpty = (obj = {}) =>
    !obj || Object.keys(obj).length === 0;

/**
 * Delete an array of keys from a given object
 * @param {Object} targetObj Object to remove propeties from
 * @param {Array} props Array of object properties to be deleted
 * @returns {Object} A copy of the orginal object excluding the specified properties
 */
export const omit = (targetObj, props) => {
    // Clone the targetObj to avoid mutating the original data
    const obj = Object.assign({}, targetObj);

    if (!Array.isArray(props)) {
        console.error('[utils.omit] Keys to be omitted should be an array');
        return;
    }

    props.forEach(prop => {
        obj.hasOwnProperty(prop) && delete obj[prop];
    });

    return obj;
};


/**
 * Helper to check that a link points to an external url rather than a relative path
 * @param {*} url The url
 * @returns {Boolean} The result
 */
export const isExternalUrl = (url) => url && url.indexOf('http') > -1;
