////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import WEAK_COLLECTION_TYPE_NAMES from './weak-collection-type-names';

/**
 * The array of type names for weak reference objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const WEAK_TYPE_NAMES = [
  ...WEAK_COLLECTION_TYPE_NAMES,
  'WeakRef',
];

export default WEAK_TYPE_NAMES;
