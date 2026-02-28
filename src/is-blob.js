////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a Blob object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a Blob object; `false` otherwise.
 * @author Haixing Hu
 */
function isBlob(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  if (typeof Blob !== 'undefined' && value instanceof Blob) {
    return true;
  }
  return Object.prototype.toString.call(value) === '[object Blob]';
}

export default isBlob;
