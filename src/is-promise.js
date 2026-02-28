////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a Promise object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a Promise object; `false` otherwise.
 * @author Haixing Hu
 */
function isPromise(value) {
  if (typeof value !== 'object' || value === null || typeof Promise === 'undefined') {
    return false;
  }
  try {
    if (value instanceof Promise) {
      return true;
    }
  } catch {
    // ignore error during instanceof check
  }
  // use toString value to cross realms
  if (Object.prototype.toString.call(value) === '[object Promise]') {
    return true;
  }
  try {
    return (typeof value.then === 'function') && (typeof value.catch === 'function');
  } catch {
    return false;
  }
}

export default isPromise;
