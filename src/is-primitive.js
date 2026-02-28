////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive value.
 *
 * A primitive value is a value that is not an object and has no methods.
 * In JavaScript, there are 7 primitive data types:
 * - string
 * - number
 * - bigint
 * - boolean
 * - undefined
 * - symbol
 * - null
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive value; `false` otherwise.
 * @author Haixing Hu
 */
function isPrimitive(value) {
  if (value === null) {
    return true;
  }
  const type = typeof value;
  return type !== 'object' && type !== 'function';
}

export default isPrimitive;
