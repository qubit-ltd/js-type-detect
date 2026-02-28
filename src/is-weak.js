////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_TYPE_NAMES from './impl/weak-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a weak reference object, i.e., a
 * `WeakMap`, a `WeakSet` or a `WeakRef` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a weak reference object, i.e., a
 *     `WeakMap`, a `WeakSet` or a `WeakRef` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isWeak(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if ((typeof WeakMap !== 'undefined' && value instanceof WeakMap)
   || (typeof WeakSet !== 'undefined' && value instanceof WeakSet)
   || (typeof WeakRef !== 'undefined' && value instanceof WeakRef)) {
    return true;
  }
  return hasToStringValueOf(value, WEAK_TYPE_NAMES);
}

export default isWeak;
