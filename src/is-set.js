////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a built-in `Set` object.
 *
 * @param value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in `Set` object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isSet(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof Set !== 'undefined' && value instanceof Set) {
    return true;
  }
  return Object.prototype.toString.call(value) === '[object Set]';
}

export default isSet;
