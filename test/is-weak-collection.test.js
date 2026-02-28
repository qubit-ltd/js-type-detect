////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isWeakCollection } from '../src';
import { WEAKMAP_EXISTS, WEAKSET_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isWeakCollection()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isWeakCollection()` function', () => {
  if (WEAKMAP_EXISTS) {
    test('WeakMap', () => {
      expect(isWeakCollection(new WeakMap())).toBe(true);
    });
  }
  if (WEAKSET_EXISTS) {
    test('WeakSet', () => {
      expect(isWeakCollection(new WeakSet())).toBe(true);
    });
  }
  test('non-Weak object', () => {
    expect(isWeakCollection({ abc: 123 })).toBe(false);
    expect(isWeakCollection(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isWeakCollection(0)).toBe(false);
    expect(isWeakCollection('abc')).toBe(false);
    expect(isWeakCollection(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isWeakCollection(null)).toBe(false);
    expect(isWeakCollection(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isWeakCollection(runInNewContext('new WeakSet()'))).toBe(true);
    expect(isWeakCollection(runInNewContext('new WeakMap()'))).toBe(true);
    expect(isWeakCollection(runInNewContext('new Set()'))).toBe(false);
    expect(isWeakCollection(runInNewContext('new Map()'))).toBe(false);
    expect(isWeakCollection(runInNewContext('{}'))).toBe(false);
    expect(isWeakCollection(runInNewContext('[]'))).toBe(false);
    expect(isWeakCollection(runInNewContext('0'))).toBe(false);
    expect(isWeakCollection(runInNewContext('false'))).toBe(false);
    expect(isWeakCollection(runInNewContext('null'))).toBe(false);
    expect(isWeakCollection(runInNewContext('undefined'))).toBe(false);
  });
});
