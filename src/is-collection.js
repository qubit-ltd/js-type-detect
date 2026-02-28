////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import COLLECTION_TYPE_NAMES from './impl/collection-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a built-in collection object, i.e., a
 * `Map` or a `Set` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in collection object, i.e., an
 *     `Map` or a `Set` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isCollection(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof Map !== 'undefined' && value instanceof Map) {
    return true;
  }
  if (typeof Set !== 'undefined' && value instanceof Set) {
    return true;
  }
  return hasToStringValueOf(value, COLLECTION_TYPE_NAMES);
}

export default isCollection;
