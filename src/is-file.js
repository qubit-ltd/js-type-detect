////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import FILE_TYPE_NAMES from './impl/file-type-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified value is a JavaScript File API object.
 *
 * A File API object is an instance of the `File`, `Blob`, `FileList`,
 * `FileReader`, or `FileReaderSync` class.
 *
 * @param {any} value
 *     The value to test.
 * @return {boolean}
 *     `true` if the specified value is a JavaScript File API object; `false`
 *     otherwise.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function isFile(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return hasToStringValueOf(value, FILE_TYPE_NAMES);
}

export default isFile;
