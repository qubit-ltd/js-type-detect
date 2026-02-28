////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isBuffer } from '../src';
import {
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
} from '../src/feature-detect';

/**
 * Unit test of the `isBuffer()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBuffer()` function', () => {
  if (ARRAYBUFFER_EXISTS) {
    test('ArrayBuffer', () => {
      expect(isBuffer(new ArrayBuffer(2))).toBe(true);
    });
  }
  if (SHAREDARRAYBUFFER_EXISTS) {
    test('SharedArrayBuffer', () => {
      expect(isBuffer(new SharedArrayBuffer(2))).toBe(true);
    });
  }
  test('non-Buffer object', () => {
    expect(isBuffer({ abc: 123 })).toBe(false);
    expect(isBuffer(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer('abc')).toBe(false);
    expect(isBuffer(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    if (ARRAYBUFFER_EXISTS) {
      expect(isBuffer(runInNewContext('new ArrayBuffer(2)'))).toBe(true);
    }
    if (SHAREDARRAYBUFFER_EXISTS) {
      expect(isBuffer(runInNewContext('new SharedArrayBuffer(2)'))).toBe(true);
    }
    expect(isBuffer(runInNewContext('{}'))).toBe(false);
    expect(isBuffer(runInNewContext('[]'))).toBe(false);
    expect(isBuffer(runInNewContext('0'))).toBe(false);
    expect(isBuffer(runInNewContext('false'))).toBe(false);
    expect(isBuffer(runInNewContext('null'))).toBe(false);
    expect(isBuffer(runInNewContext('undefined'))).toBe(false);
  });
});
