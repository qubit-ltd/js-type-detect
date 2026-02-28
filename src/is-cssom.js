////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import CSSOM_TYPE_NAMES from './impl/cssom-type-names';
import hasTypeNameOf from './impl/has-type-name-of';

/**
 * Determines whether the specified object is a CSSOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a CSSOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isCssom(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  return hasTypeNameOf(obj, CSSOM_TYPE_NAMES);
}

export default isCssom;
