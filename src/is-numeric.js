////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import NUMERIC_TYPE_NAMES from './impl/numeric-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a primitive `number`, or a primitive `bigint`,
 * or a built-in `Number` object.
 *
 * Note that a native `bigint` value is considered as a numeric value.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `number`, or a primitive `bigint`,
 *     or a built-in `Number` object; `false` otherwise.
 * @see isNumber
 * @see isBigInt
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isNumeric(value) {
  const type = typeof value;
  if (type === 'number' || type === 'bigint') {
    return true;
  }
  if (type !== 'object' || value === null) {
    return false;
  }
  return hasToStringValueOf(value, NUMERIC_TYPE_NAMES);
}

export default isNumeric;
