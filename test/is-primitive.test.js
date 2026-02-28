////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isPrimitive } from '../src';

/**
 * Unit test of the `isPrimitive()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isPrimitive()` function', () => {
  it('should return true for primitive values', () => {
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive(123.456)).toBe(true);
    expect(isPrimitive(NaN)).toBe(true);
    expect(isPrimitive(Infinity)).toBe(true);
    expect(isPrimitive('')).toBe(true);
    expect(isPrimitive('string')).toBe(true);
    expect(isPrimitive('template string')).toBe(true);

    if (typeof Symbol !== 'undefined') {
      expect(isPrimitive(Symbol('test'))).toBe(true);
      expect(isPrimitive(Symbol.iterator)).toBe(true);
    }

    if (typeof BigInt !== 'undefined') {
      expect(isPrimitive(BigInt(123))).toBe(true);
      expect(isPrimitive(123n)).toBe(true);
    }
  });

  it('should return false for non-primitive values', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(/regex/)).toBe(false);
    expect(isPrimitive(new Date())).toBe(false);
    expect(isPrimitive(() => {})).toBe(false);
    expect(isPrimitive(() => {})).toBe(false);
    expect(isPrimitive(class TestClass {})).toBe(false);

    // 包装对象不是原始值
    expect(isPrimitive(new String('test'))).toBe(false);
    expect(isPrimitive(new Number(123))).toBe(false);
    expect(isPrimitive(new Boolean(true))).toBe(false);

    if (typeof Map !== 'undefined') {
      expect(isPrimitive(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isPrimitive(new Set())).toBe(false);
    }
    if (typeof WeakMap !== 'undefined') {
      expect(isPrimitive(new WeakMap())).toBe(false);
    }
    if (typeof WeakSet !== 'undefined') {
      expect(isPrimitive(new WeakSet())).toBe(false);
    }
    if (typeof Symbol !== 'undefined' && typeof Symbol.for !== 'undefined') {
      expect(isPrimitive(Object(Symbol.for('test')))).toBe(false);
    }
    if (typeof BigInt !== 'undefined') {
      expect(isPrimitive(Object(BigInt(123)))).toBe(false);
    }
  });

  it('should handle primitive values from different realms', () => {
    // 基本类型值在跨域中是安全的
    expect(isPrimitive(vm.runInNewContext('null'))).toBe(true);
    expect(isPrimitive(vm.runInNewContext('undefined'))).toBe(true);
    expect(isPrimitive(vm.runInNewContext('123'))).toBe(true);
    expect(isPrimitive(vm.runInNewContext('"test"'))).toBe(true);
    expect(isPrimitive(vm.runInNewContext('true'))).toBe(true);
  });

  it('should handle non-primitive values from different realms', () => {
    // 非原始值在跨域中是安全的
    expect(isPrimitive(vm.runInNewContext('({})'))).toBe(false);
    expect(isPrimitive(vm.runInNewContext('[]'))).toBe(false);
    expect(isPrimitive(vm.runInNewContext('new Date()'))).toBe(false);
    expect(isPrimitive(vm.runInNewContext('() => {}'))).toBe(false);
  });
});
