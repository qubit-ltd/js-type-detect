////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isWeak } from '../src';
import {
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
} from '../src/feature-detect';

/**
 * Unit test of the `isWeak()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isWeak()` function', () => {
  if (WEAKMAP_EXISTS) {
    test('WeakMap', () => {
      expect(isWeak(new WeakMap())).toBe(true);
    });
  }
  if (WEAKSET_EXISTS) {
    test('WeakSet', () => {
      expect(isWeak(new WeakSet())).toBe(true);
    });
  }
  if (WEAKREF_EXISTS) {
    test('WeakRef', () => {
      const x = {};
      expect(isWeak(new WeakRef(x))).toBe(true);
    });
  }
  test('non-Weak object', () => {
    expect(isWeak({ abc: 123 })).toBe(false);
    expect(isWeak(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isWeak(0)).toBe(false);
    expect(isWeak('abc')).toBe(false);
    expect(isWeak(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isWeak(null)).toBe(false);
    expect(isWeak(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isWeak(runInNewContext('new WeakSet()'))).toBe(true);
    expect(isWeak(runInNewContext('new WeakMap()'))).toBe(true);
    expect(isWeak(runInNewContext('x = {}; new WeakRef(x)'))).toBe(true);
    expect(isWeak(runInNewContext('new Set()'))).toBe(false);
    expect(isWeak(runInNewContext('new Map()'))).toBe(false);
    expect(isWeak(runInNewContext('{}'))).toBe(false);
    expect(isWeak(runInNewContext('[]'))).toBe(false);
    expect(isWeak(runInNewContext('0'))).toBe(false);
    expect(isWeak(runInNewContext('false'))).toBe(false);
    expect(isWeak(runInNewContext('null'))).toBe(false);
    expect(isWeak(runInNewContext('undefined'))).toBe(false);
  });
});
