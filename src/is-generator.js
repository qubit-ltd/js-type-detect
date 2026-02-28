////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import getTypeName from './get-type-name';

/**
 * Tests whether the specified value is a generator object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a generator object; `false` otherwise.
 * @author Haixing Hu
 */
function isGenerator(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  return /Generator$/.test(getTypeName(value));
}

export default isGenerator;
