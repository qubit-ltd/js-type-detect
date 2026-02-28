////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasTypeNameOf from './impl/has-type-name-of';
import HTML_DOM_TYPE_NAMES from './impl/html-dom-type-names';

/**
 * Determines whether the specified object is a HTML DOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a HTML DOM object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isHtmlDom(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  return hasTypeNameOf(obj, HTML_DOM_TYPE_NAMES);
}

export default isHtmlDom;
