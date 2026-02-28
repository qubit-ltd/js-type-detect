////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isCollection } from '../src';
import {
  MAP_EXISTS,
  SET_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
} from '../src/feature-detect';

/**
 * Unit test of the `isCollection()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isCollection()` function', () => {
  if (MAP_EXISTS) {
    test('Map', () => {
      expect(isCollection(new Map())).toBe(true);
    });
  }
  if (SET_EXISTS) {
    test('Set', () => {
      expect(isCollection(new Set())).toBe(true);
    });
  }
  test('non-Collection object', () => {
    expect(isCollection({ abc: 123 })).toBe(false);
    expect(isCollection(new Boolean(true))).toBe(false);
    if (WEAKMAP_EXISTS) {
      expect(isCollection(new WeakMap())).toBe(false);
    }
    if (WEAKSET_EXISTS) {
      expect(isCollection(new WeakSet())).toBe(false);
    }
    expect(isCollection([])).toBe(false);
  });
  test('primitive values', () => {
    expect(isCollection(0)).toBe(false);
    expect(isCollection('abc')).toBe(false);
    expect(isCollection(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isCollection(null)).toBe(false);
    expect(isCollection(undefined)).toBe(false);
  });
  test('should works across realms', () => {
    expect(isCollection(runInNewContext('new Set()'))).toBe(true);
    expect(isCollection(runInNewContext('new Map()'))).toBe(true);
    expect(isCollection(runInNewContext('new WeakMap()'))).toBe(false);
    expect(isCollection(runInNewContext('new WeakSet()'))).toBe(false);
    expect(isCollection(runInNewContext('[]'))).toBe(false);
    expect(isCollection(runInNewContext('{}'))).toBe(false);
    expect(isCollection(runInNewContext('0'))).toBe(false);
    expect(isCollection(runInNewContext('false'))).toBe(false);
    expect(isCollection(runInNewContext('null'))).toBe(false);
    expect(isCollection(runInNewContext('undefined'))).toBe(false);
  });
});
