////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import BUFFER_TYPE_NAMES from './impl/buffer-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a buffer object, i.e., an `ArrayBuffer`
 * or a `SharedBuffer` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a buffer object, i.e., an `ArrayBuffer`
 *     or a `SharedBuffer` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isBuffer(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return true;
  }
  if (typeof SharedArrayBuffer !== 'undefined' && value instanceof SharedArrayBuffer) {
    return true;
  }
  return hasToStringValueOf(value, BUFFER_TYPE_NAMES);
}

export default isBuffer;
