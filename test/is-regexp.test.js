////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isRegExp } from '../src';

/**
 * Unit test of the `isRegExp()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isRegExp()` function', () => {
  it('should return true for RegExp objects', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(/abc/g)).toBe(true);
    expect(isRegExp(/abc/i)).toBe(true);
    expect(isRegExp(/abc/m)).toBe(true);
    expect(isRegExp(/abc/gimuy)).toBe(true);

    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('abc'))).toBe(true);

    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('abc', 'g'))).toBe(true);

    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(RegExp('abc'))).toBe(true);
  });

  it('should return false for non-RegExp objects', () => {
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp(123)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
    expect(isRegExp('')).toBe(false);
    expect(isRegExp('abc')).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(false)).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(() => {})).toBe(false);

    if (typeof Map !== 'undefined') {
      expect(isRegExp(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isRegExp(new Set())).toBe(false);
    }
    if (typeof Symbol !== 'undefined') {
      expect(isRegExp(Symbol('test'))).toBe(false);
    }
  });

  it('should handle objects with regex-like properties', () => {
    const regexLike = {
      source: 'abc',
      flags: 'g',
      exec: () => {},
      test: () => {},
    };
    expect(isRegExp(regexLike)).toBe(false);
  });

  it('should handle mock RegExp objects', () => {
    const mockRegExp = {};
    Object.defineProperty(mockRegExp, Symbol.toStringTag, { value: 'RegExp' });
    expect(Object.prototype.toString.call(mockRegExp)).toBe('[object RegExp]');
    expect(isRegExp(mockRegExp)).toBe(true);
  });

  it('should work across different realms', () => {
    const regExpFromVM = vm.runInNewContext('/abc/');
    expect(isRegExp(regExpFromVM)).toBe(true);

    const regExpWithFlagsFromVM = vm.runInNewContext('/abc/gi');
    expect(isRegExp(regExpWithFlagsFromVM)).toBe(true);

    const newRegExpFromVM = vm.runInNewContext('new RegExp("abc", "g")');
    expect(isRegExp(newRegExpFromVM)).toBe(true);

    const objectFromVM = vm.runInNewContext('({})');
    expect(isRegExp(objectFromVM)).toBe(false);

    const stringFromVM = vm.runInNewContext('"abc"');
    expect(isRegExp(stringFromVM)).toBe(false);
  });
});
