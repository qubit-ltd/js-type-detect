////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ITERATOR_TYPE_NAMES from './impl/iterator-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a built-in iterator object or conforms
 * to the iterator protocol (has a `next` method).
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in iterator object or conforms
 *     to the iterator protocol; `false` otherwise.
 * @author Haixing Hu
 */
function isIterator(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  // first check if it is a built-in iterator type
  if (hasToStringValueOf(value, ITERATOR_TYPE_NAMES)) {
    return true;
  }
  // then loosely check if it conforms to the iterator protocol (has a next method)
  return typeof value.next === 'function';
}

export default isIterator;
