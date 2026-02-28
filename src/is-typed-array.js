////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import TYPED_ARRAY_TYPE_NAMES from './impl/typed-array-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a typed-array.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a typed-array; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isTypedArray(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined') {
    if (ArrayBuffer.isView(value) && !(value instanceof DataView)) {
      return true;
    }
  }
  return hasToStringValueOf(value, TYPED_ARRAY_TYPE_NAMES);
}

export default isTypedArray;
