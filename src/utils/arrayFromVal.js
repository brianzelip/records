'use-strict';

/**
 * @param {Array | String | undefined} val The value to create an array from
 * @returns {Array} An array with no empty string items from an array, or
 * an array containing the string, or undefined.
 */
export default function (val) {
  if (Array.isArray(val)) {
    return val.filter((item) => item !== '');
  } else if (typeof val === 'string') {
    return [val];
  } else {
    // form submission passes undefined when more inputs have been added
    // and all inputs are blank
    return undefined;
  }
}
