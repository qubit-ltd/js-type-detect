////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a plain object.
 *
 * An object is plain if it's created by either {}, new Object(), or Object.create(null).
 *
 * @param value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a plain object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is-plain-obj/blob/main/index.js">is-plain-obj</a>
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return ((prototype === null)
       || (prototype === Object.prototype)
       || (Object.getPrototypeOf(prototype) === null))
    && !(Symbol.toStringTag in value)
    && !(Symbol.iterator in value);
}

export default isPlainObject;
