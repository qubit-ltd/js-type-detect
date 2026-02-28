////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import getTypeName from './get-type-name';
import DOM_TYPE_NAMES from './impl/dom-type-names';
import HTML_DOM_TYPE_NAMES from './impl/html-dom-type-names';
import SVG_DOM_TYPE_NAMES from './impl/svg-dom-type-names';

/**
 * Determines whether the specified object is a DOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a DOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isDom(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  const typeName = getTypeName(obj);
  return DOM_TYPE_NAMES.includes(typeName)
    || HTML_DOM_TYPE_NAMES.includes(typeName)
    || SVG_DOM_TYPE_NAMES.includes(typeName);
}

export default isDom;
