////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isMap } from '../src';
import { MAP_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isMap()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isMap()` function', () => {
  if (MAP_EXISTS) {
    test('Map', () => {
      expect(isMap(new Map())).toBe(true);
      expect(isMap(new Map([['a', 1], ['b', 2]]))).toBe(true);
    });
  }
  test('non-Map objects', () => {
    expect(isMap({})).toBe(false);
    expect(isMap(new Date())).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap(new Set())).toBe(false);
    expect(isMap(new WeakMap())).toBe(false);
    expect(isMap(new WeakSet())).toBe(false);
    expect(isMap(new Boolean(true))).toBe(false);
    expect(isMap(new Number(123))).toBe(false);
    expect(isMap(new String('test'))).toBe(false);
    expect(isMap(Object.create(null))).toBe(false);
  });
  test('primitive values', () => {
    expect(isMap(0)).toBe(false);
    expect(isMap(123)).toBe(false);
    expect(isMap('abc')).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap(false)).toBe(false);
    expect(isMap(Symbol('test'))).toBe(false);
    expect(isMap(BigInt(123))).toBe(false);
  });
  test('nullish values', () => {
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isMap(runInNewContext('new Map()'))).toBe(true);
    expect(isMap(runInNewContext('new WeakMap()'))).toBe(false);
    expect(isMap(runInNewContext('new Set()'))).toBe(false);
    expect(isMap(runInNewContext('0'))).toBe(false);
    expect(isMap(runInNewContext('false'))).toBe(false);
    expect(isMap(runInNewContext('null'))).toBe(false);
    expect(isMap(runInNewContext('undefined'))).toBe(false);
  });
});
