////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `bigint`.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `bigint`; `false` otherwise.
 * @author Haixing Hu
 */
function isBigInt(value) {
  return typeof value === 'bigint';
}

export default isBigInt;
