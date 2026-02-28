////////////////////////////////////////////////////////////////////////////////
import BUFFER_TYPE_NAMES from './buffer-type-names';
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import COLLECTION_TYPE_NAMES from './collection-type-names';
import ERROR_TYPE_NAMES from './error-type-names';
import FUNCTION_TYPE_NAMES from './function-type-names';
import GENERATOR_TYPE_NAMES from './generator-type-names';
import GLOBAL_OBJECT_NAMES from './global-object-names';
import INTL_TYPE_NAMES from './intl-type-names';
import ITERATOR_TYPE_NAMES from './iterator-type-names';
import NUMERIC_TYPE_NAMES from './numeric-type-names';
import TYPED_ARRAY_TYPE_NAMES from './typed-array-type-names';
import WEAK_TYPE_NAMES from './weak-type-names';

/**
 * The array of names for built-in classes.
 *
 * @type {string[]}
 * @author Haixing Hu
 */
const BUILT_IN_TYPE_NAMES = [
  'Null',
  'Undefined',
  'Object',
  'Boolean',
  'String',
  'Symbol',
  ...NUMERIC_TYPE_NAMES,
  ...FUNCTION_TYPE_NAMES,
  ...GENERATOR_TYPE_NAMES,
  'Array',
  'Date',
  'RegExp',
  'DataView',
  'Promise',
  'Proxy',
  ...ERROR_TYPE_NAMES,
  ...COLLECTION_TYPE_NAMES,
  ...TYPED_ARRAY_TYPE_NAMES,
  ...BUFFER_TYPE_NAMES,
  ...WEAK_TYPE_NAMES,
  ...INTL_TYPE_NAMES,
  ...ITERATOR_TYPE_NAMES,
  ...GLOBAL_OBJECT_NAMES,
];

export default BUILT_IN_TYPE_NAMES;
