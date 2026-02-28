////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is an non-null object.
 *
 * @param value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is an non-null object; `false` otherwise.
 */
function isNonNullObject(value) {
  return (value !== null) && (typeof value === 'object');
}

export default isNonNullObject;
