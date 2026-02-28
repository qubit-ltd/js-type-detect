////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FUNCTION_TYPE_NAMES from './impl/function-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a function object.
 *
 * An async function is also a function object, but the generator function is not
 * a function object. To detect generator functions, use the `isGenerator()`.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a function object; `false` otherwise.
 * @author Haixing Hu
 * @see isGenerator
 */
function isFunction(value) {
  if (typeof value !== 'function') {
    return false;
  }
  return hasToStringValueOf(value, FUNCTION_TYPE_NAMES);
}

export default isFunction;
