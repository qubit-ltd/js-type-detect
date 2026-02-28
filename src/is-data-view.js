////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a data view object, i.e., an `DataView`
 * object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a data view object, i.e., an `DataView`
 *     object; `false` otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isDataView(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (typeof DataView !== 'undefined' && value instanceof DataView) {
    return true;
  }
  return Object.prototype.toString.call(value) === '[object DataView]';
}

export default isDataView;
