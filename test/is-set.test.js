////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isSet } from '../src';
import { SET_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isSet()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isSet()` function', () => {
  if (SET_EXISTS) {
    test('Set', () => {
      expect(isSet(new Set())).toBe(true);
      expect(isSet(new Set([1, 2, 3]))).toBe(true);
    });
  }
  test('non-Set objects', () => {
    expect(isSet({})).toBe(false);
    expect(isSet(new Date())).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(new WeakSet())).toBe(false);
    expect(isSet(new WeakMap())).toBe(false);
    expect(isSet(new Boolean(true))).toBe(false);
    expect(isSet(new Number(123))).toBe(false);
    expect(isSet(new String('test'))).toBe(false);
    expect(isSet(Object.create(null))).toBe(false);
  });
  test('primitive values', () => {
    expect(isSet(0)).toBe(false);
    expect(isSet(123)).toBe(false);
    expect(isSet('abc')).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(false)).toBe(false);
    expect(isSet(Symbol('test'))).toBe(false);
    expect(isSet(BigInt(123))).toBe(false);
  });
  test('nullish values', () => {
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isSet(runInNewContext('new Set()'))).toBe(true);
    expect(isSet(runInNewContext('new WeakSet()'))).toBe(false);
    expect(isSet(runInNewContext('new Map()'))).toBe(false);
    expect(isSet(runInNewContext('0'))).toBe(false);
    expect(isSet(runInNewContext('false'))).toBe(false);
    expect(isSet(runInNewContext('null'))).toBe(false);
    expect(isSet(runInNewContext('undefined'))).toBe(false);
  });
});
