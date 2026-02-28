////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is an instance of the built-in `Error`
 * class or its subclass.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is an instance of the built-in `Error`
 *     class or its subclass; `false` otherwise.
 * @author Haixing Hu
 */
function isError(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof Error !== 'undefined' && value instanceof Error) {
    return true;
  }
  if (typeof DOMException !== 'undefined' && value instanceof DOMException) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  return type === '[object Error]' || type === '[object DOMException]';
}

export default isError;
