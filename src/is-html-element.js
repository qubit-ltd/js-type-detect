////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasTypeNameOf from './impl/has-type-name-of';
import HTML_ELEMENT_TYPE_NAMES from './impl/html-element-type-names';
import isPlainObject from './is-plain-object';

const DOM_PROPERTIES_TO_CHECK = [
  'innerHTML',
  'ownerDocument',
  'style',
  'attributes',
  'nodeValue',
];

function isCustomizedHtmlElement(value) {
  if (typeof value.nodeName !== 'string') {
    return false;
  }
  if (isPlainObject(value)) {
    return false;
  }
  return DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
}

/**
 * Tests whether the specified value is a DOM element.
 *
 * @param value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a DOM element; `false` otherwise.
 * @author Haixing Hu
 */
function isHtmlElement(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return hasTypeNameOf(value, HTML_ELEMENT_TYPE_NAMES) || isCustomizedHtmlElement(value);
}

export default isHtmlElement;
