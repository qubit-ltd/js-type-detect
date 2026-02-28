////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import getTypeName from '../get-type-name';

/**
 * Check if the given object has the specified type name.
 *
 * @param obj
 *     the given object, which cannot be null or be undefined.
 * @param names
 *     the array of type names to be checked.
 * @return {boolean}
 *     `true` if the object has the specified type name; `false` otherwise.
 */
function hasTypeNameOf(obj, names) {
  const typeName = getTypeName(obj);
  return names.includes(typeName);
}

export default hasTypeNameOf;
