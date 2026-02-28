////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import hasToStringTag from './has-to-string-tag';
import fixTypeNameCompatibility from './impl/fix-type-name-compatibility';

/**
 * Gets the type name of a value.
 *
 * @param {any} value
 *     the value to be detected.
 * @return {string}
 *     the type name of the value.
 */
function getTypeName(value) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  let typeName = '';
  if (hasToStringTag(value)) {
    // Note that Generator and AsyncGenerator objects has defined its own
    // Symbol.toStringTag property, so the following code will handle those cases.
    typeName = value[Symbol.toStringTag].replace(/\s/g, '');
  } else {
    const { constructor } = value;
    if (constructor
        && (constructor.name !== undefined)
        && (constructor.name !== null)
        && (constructor.name !== 'Object')) {
      // user defined class instance
      typeName = constructor.name;
    } else {
      const str = Object.prototype.toString.call(value);
      typeName = str.slice(8, -1).replace(/\s/g, '');
    }
  }
  return fixTypeNameCompatibility(typeName);
}

export default getTypeName;
