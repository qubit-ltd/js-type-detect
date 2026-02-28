////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Check if the given object has the specified toString value.
 *
 * @param obj
 *     the given object, which cannot be null or be undefined.
 * @param names
 *     the array of type names to be checked.
 * @return {boolean}
 *     `true` if the object has the specified toString value; `false` otherwise.
 */
function hasToStringValueOf(obj, names) {
  const str = Object.prototype.toString.call(obj);
  for (let i = 0; i < names.length; i += 1) {
    if (str === `[object ${names[i]}]`) {
      return true;
    }
  }
  return false;
}

export default hasToStringValueOf;
