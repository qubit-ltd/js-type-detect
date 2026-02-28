////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_COLLECTION_TYPE_NAMES from './impl/weak-collection-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a built-in weak collection object, i.e., a
 * `WeakMap` or a `WeakSet` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in weak collection object, i.e.,
 *     an `WeakMap` or a `WeakSet` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isWeakCollection(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if ((typeof WeakMap !== 'undefined' && value instanceof WeakMap)
   || (typeof WeakSet !== 'undefined' && value instanceof WeakSet)) {
    return true;
  }
  return hasToStringValueOf(value, WEAK_COLLECTION_TYPE_NAMES);
}

export default isWeakCollection;
