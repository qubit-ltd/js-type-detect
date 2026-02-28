////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isArray } from '../src';

/**
 * Unit test of the `isArray()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isArray()` function', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);

    expect(isArray([])).toBe(true);

    expect(isArray(new Array(5))).toBe(true);
    expect(isArray(Array.of(1, 2, 3))).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray('abc')).toBe(false);
    expect(isArray(/abc/)).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(() => {})).toBe(false);

    if (typeof Map !== 'undefined') {
      expect(isArray(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isArray(new Set())).toBe(false);
    }
    if (typeof WeakMap !== 'undefined') {
      expect(isArray(new WeakMap())).toBe(false);
    }
    if (typeof WeakSet !== 'undefined') {
      expect(isArray(new WeakSet())).toBe(false);
    }
    if (typeof Symbol !== 'undefined') {
      expect(isArray(Symbol('test'))).toBe(false);
    }
  });

  it('should work with array-like objects', () => {
    const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
    expect(isArray(arrayLike)).toBe(false);

    function testFunc() {
      // arguments 是类数组对象
      expect(isArray(arguments)).toBe(false);
    }
    testFunc(1, 2, 3);
  });

  it('should work across different realms', () => {
    const arrayFromVM = vm.runInNewContext('[]');
    expect(isArray(arrayFromVM)).toBe(true);

    const arrayLikeFromVM = vm.runInNewContext('({0: "a", 1: "b", length: 2})');
    expect(isArray(arrayLikeFromVM)).toBe(false);

    const objectFromVM = vm.runInNewContext('({})');
    expect(isArray(objectFromVM)).toBe(false);
  });
});
