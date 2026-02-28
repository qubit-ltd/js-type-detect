////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import INTL_TYPE_NAMES from './impl/intl-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a built-in object in the `Intl`
 * namespace.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in object in the `Intl`
 *     namespace; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isIntl(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return hasToStringValueOf(value, INTL_TYPE_NAMES);
}

export default isIntl;
