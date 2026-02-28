////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import GLOBAL_OBJECT from './global-object';
import GLOBAL_OBJECT_NAMES from './impl/global-object-names';

/**
 * Tests whether the specified value is the global object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is the global object; `false` otherwise.
 * @author Haixing Hu
 */
function isGlobalObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (value === GLOBAL_OBJECT) {
    return true;
  }
  const str = Object.prototype.toString.call(value);
  if (GLOBAL_OBJECT_NAMES.includes(str)) {
    return true;
  }
  try {
    const hasGlobalThis = ('globalThis' in value) && (value.globalThis === value);
    const hasCommonGlobals = (typeof value.Object === 'function')
      && (typeof value.Array === 'function')
      && (typeof value.String === 'function')
      && (typeof value.Number === 'function')
      && (typeof value.Boolean === 'function')
      && (typeof value.Math === 'object')
      && (typeof value.Date === 'function')
      && (typeof value.JSON === 'object');
    const hasGlobalMethods = (typeof value.parseInt === 'function')
      && (typeof value.parseFloat === 'function')
      && (typeof value.isNaN === 'function')
      && (typeof value.isFinite === 'function');
    return hasGlobalThis && hasCommonGlobals && hasGlobalMethods;
  } catch (e) {
    return false;
  }
}

export default isGlobalObject;
