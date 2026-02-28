////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `number`, or a built-in
 * `Number` object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `number`, or a built-in
 *     `Number` object; `false` otherwise.
 * @see isNumeric
 * @see isBigInt
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isNumber(value) {
  if (typeof value === 'number') {
    return true;
  }
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return Object.prototype.toString.call(value) === '[object Number]';
}

export default isNumber;
