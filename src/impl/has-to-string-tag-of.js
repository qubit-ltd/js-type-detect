////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasToStringTag from '../has-to-string-tag';

/**
 * Check if the given object has the specified to-string tag.
 *
 * @param obj
 *     the given object, which cannot be null or be undefined.
 * @param tags
 *     the array of tags to be checked.
 * @return {boolean}
 *     `true` if the object has the specified to-string tag; `false` otherwise.
 */
function hasToStringTagOf(obj, tags) {
  if (hasToStringTag(obj)) {
    const tag = obj[Symbol.toStringTag];
    return tags.includes(tag);
  } else {
    return false;
  }
}

export default hasToStringTagOf;
