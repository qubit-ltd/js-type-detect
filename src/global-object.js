////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The global object.
 *
 * A global object is an object that always exists in the global scope.
 *
 * @type {object}
 * @author Haixing Hu
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Global_object
 */
const GLOBAL_OBJECT = ((obj) => {
  if (typeof globalThis === 'object') {
    return globalThis;
  }
  Object.defineProperty(obj, 'typeDetectGlobalObject', {
    get() {
      return this;
    },
    configurable: true,
  });
  const global = typeDetectGlobalObject;
  delete obj.typeDetectGlobalObject;
  return global;
})(Object.prototype);

export default GLOBAL_OBJECT;
