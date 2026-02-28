////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a RegExp object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a RegExp object; `false` otherwise.
 * @author Haixing Hu
 */
function isRegExp(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (value instanceof RegExp) {
    return true;
  }
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

export default isRegExp;
