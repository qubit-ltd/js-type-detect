////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Fixes the compatibility problems of the name of the type of an object.
 *
 * @param {string} typeName
 *     the name of a type to be fixed.
 * @return {string}
 *     the fixed name of the type.
 * @author Haixing Hu
 * @private
 */
function fixTypeNameCompatibility(typeName) {
  // in es6 target, babel translate the anonymous class as a function of the name ''
  if (typeName === '') {
    return '';
  }
  // in es5 target, babel translate the anonymous class as a function of the
  // name '_class'
  if (typeName === '_class') {
    return '';
  }
  // in es5 and es6 targets, babel translate the async generator object to
  // an object built with a function named '_AsyncGenerator()'
  if (typeName === '_AsyncGenerator') {
    return 'AsyncGenerator';
  }
  // otherwise, return the original name
  return typeName;
}

export default fixTypeNameCompatibility;
