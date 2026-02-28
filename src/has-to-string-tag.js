////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * Tests whether an object has `Symbol.toStringTag` property.
 *
 * @param {object} obj
 *     the specified object.
 * @return {boolean}
 *     `true` if the specified object has the `Symbol.toStringTag` property;
 *     `false` otherwise.
 * @author Haixing Hu
 */
function hasToStringTag(obj) {
  return (obj !== null)
    && (typeof obj === 'object' || typeof obj === 'function')
    && (typeof Symbol !== 'undefined')
    && (typeof Symbol.toStringTag !== 'undefined')
    && (obj[Symbol.toStringTag] !== undefined && obj[Symbol.toStringTag] !== null);
}

export default hasToStringTag;
