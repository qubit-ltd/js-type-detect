////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a symbol object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a symbol object; `false` otherwise.
 * @author Haixing Hu
 */
function isSymbol(value) {
  if (typeof value === 'symbol') {
    return true;
  }
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return Object.prototype.toString.call(value) === '[object Symbol]';
}

export default isSymbol;
