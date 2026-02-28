////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isDate } from '../src';

/**
 * Unit test of the `isDate()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isDate()` function', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2023-01-01'))).toBe(true);
    expect(isDate(new Date(2023, 0, 1))).toBe(true);
    expect(isDate(new Date(1672531200000))).toBe(true);
  });

  it('should return false for non-Date objects', () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(0)).toBe(false);
    expect(isDate(123456789)).toBe(false);
    expect(isDate('2023-01-01')).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate(/regex/)).toBe(false);
    expect(isDate(() => {})).toBe(false);

    if (typeof Map !== 'undefined') {
      expect(isDate(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isDate(new Set())).toBe(false);
    }
    if (typeof Symbol !== 'undefined') {
      expect(isDate(Symbol('test'))).toBe(false);
    }
  });

  it('should handle objects with date-like properties', () => {
    const dateLike = {
      getFullYear: () => 2023,
      getMonth: () => 0,
      getDate: () => 1,
    };
    expect(isDate(dateLike)).toBe(false);
  });

  it('should handle mock Date objects', () => {
    const mockDate = {};
    Object.defineProperty(mockDate, Symbol.toStringTag, { value: 'Date' });
    expect(Object.prototype.toString.call(mockDate)).toBe('[object Date]');
    expect(isDate(mockDate)).toBe(true);
  });

  it('should work across different realms', () => {
    const dateFromVM = vm.runInNewContext('new Date()');
    expect(isDate(dateFromVM)).toBe(true);

    const objectFromVM = vm.runInNewContext('({})');
    expect(isDate(objectFromVM)).toBe(false);

    const dateStringFromVM = vm.runInNewContext('"2023-01-01"');
    expect(isDate(dateStringFromVM)).toBe(false);
  });
});
