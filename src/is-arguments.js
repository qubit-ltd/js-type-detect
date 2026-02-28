////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether a value is an arguments object of a function.
 *
 * @param {any} value
 *     the value to be checked.
 * @return {boolean}
 *     {@code true} if the value is an arguments object of a function;
 *     {@code false} otherwise.
 * @author Haixing Hu
 */
function isArguments(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const stringTag = Object.prototype.toString.call(value);
  if (stringTag === '[object Arguments]') {
    // Note that we should check if the object is disguised by Symbol.toStringTag.
    // However, if the object's toString value is [object Arguments], it is
    // usually a real arguments object, or an object specifically designed
    // to mimic an arguments object.
    // In strict mode, accessing 'callee' property of an arguments object
    // throws a TypeError. So we should handle this case.
    if (Object.prototype.hasOwnProperty.call(value, Symbol.toStringTag)
        && value[Symbol.toStringTag] === 'Arguments') {
      // If symbolic tag is explicitly set to 'Arguments', we need more
      // checks to ensure it's a real arguments object.
      try {
        return (typeof value.length === 'number')
            && (('callee' in value) || ('length' in value));
      } catch (e) {
        // In strict mode, accessing 'callee' may throw TypeError
        return e instanceof TypeError && e.message.includes('callee');
      }
    }
    return true;
  }
  return false;
}

export default isArguments;
