////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import EVENT_TYPE_NAMES from './impl/event-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Determines whether the specified object is an event object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is an event object; `false` otherwise.
 */
function isEvent(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  if (typeof Event !== 'undefined' && obj instanceof Event) {
    return true;
  }
  if (hasToStringValueOf(obj, EVENT_TYPE_NAMES)) {
    return true;
  }
  return typeof obj.type === 'string'
      && obj.target !== undefined
      && obj.currentTarget !== undefined
      && typeof obj.preventDefault === 'function'
      && typeof obj.stopPropagation === 'function';
}

export default isEvent;
