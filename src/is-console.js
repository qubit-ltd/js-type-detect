////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Determines whether the specified object is a `window.console` object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a `window.console` object; `false` otherwise.
 * @author Haixing Hu
 */
function isConsole(obj) {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  if (typeof console !== 'undefined' && obj === console) {
    return true;
  }
  if (typeof window !== 'undefined' && obj === window.console) {
    return true;
  }
  try {
    if (Object.prototype.toString.call(obj) === '[object Console]') {
      return true;
    }
  } catch {
    // Ignore error
  }
  // Duck-typing fallback for cross-realm or mock consoles
  return typeof obj.log === 'function'
      && typeof obj.error === 'function'
      && typeof obj.warn === 'function'
      && typeof obj.info === 'function';
}

export default isConsole;
