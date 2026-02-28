////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isPrimitiveWrapper } from '../src';

/**
 * Unit test of the `isPrimitiveWrapper()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isPrimitiveWrapper()` function', () => {
  it('should return true for primitive wrapper objects', () => {
    expect(isPrimitiveWrapper(new String(''))).toBe(true);
    expect(isPrimitiveWrapper(new String('test'))).toBe(true);
    expect(isPrimitiveWrapper(Object('test'))).toBe(true);

    expect(isPrimitiveWrapper(new Number(0))).toBe(true);
    expect(isPrimitiveWrapper(new Number(123))).toBe(true);
    expect(isPrimitiveWrapper(Object(123))).toBe(true);

    expect(isPrimitiveWrapper(new Boolean(false))).toBe(true);
    expect(isPrimitiveWrapper(new Boolean(true))).toBe(true);
    expect(isPrimitiveWrapper(Object(true))).toBe(true);

    if (typeof Symbol !== 'undefined') {
      const sym = Symbol('test');
      expect(isPrimitiveWrapper(Object(sym))).toBe(true);
    }

    if (typeof BigInt !== 'undefined') {
      const bigint = BigInt(123);
      expect(isPrimitiveWrapper(Object(bigint))).toBe(true);
    }
  });

  it('should return false for primitive values', () => {
    expect(isPrimitiveWrapper(null)).toBe(false);
    expect(isPrimitiveWrapper(undefined)).toBe(false);
    expect(isPrimitiveWrapper('')).toBe(false);
    expect(isPrimitiveWrapper('string')).toBe(false);
    expect(isPrimitiveWrapper(0)).toBe(false);
    expect(isPrimitiveWrapper(123)).toBe(false);
    expect(isPrimitiveWrapper(true)).toBe(false);
    expect(isPrimitiveWrapper(false)).toBe(false);

    if (typeof Symbol !== 'undefined') {
      expect(isPrimitiveWrapper(Symbol('test'))).toBe(false);
      expect(isPrimitiveWrapper(Symbol.iterator)).toBe(false);
    }

    if (typeof BigInt !== 'undefined') {
      expect(isPrimitiveWrapper(BigInt(123))).toBe(false);
      expect(isPrimitiveWrapper(123n)).toBe(false);
    }
  });

  it('should return false for non-primitive wrapper objects', () => {
    expect(isPrimitiveWrapper({})).toBe(false);
    expect(isPrimitiveWrapper([])).toBe(false);
    expect(isPrimitiveWrapper(/regex/)).toBe(false);
    expect(isPrimitiveWrapper(new Date())).toBe(false);
    expect(isPrimitiveWrapper(() => {})).toBe(false);
    expect(isPrimitiveWrapper(() => {})).toBe(false);

    if (typeof Map !== 'undefined') {
      expect(isPrimitiveWrapper(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isPrimitiveWrapper(new Set())).toBe(false);
    }
    if (typeof WeakMap !== 'undefined') {
      expect(isPrimitiveWrapper(new WeakMap())).toBe(false);
    }
    if (typeof WeakSet !== 'undefined') {
      expect(isPrimitiveWrapper(new WeakSet())).toBe(false);
    }
  });

  it('should handle mock primitive wrapper objects', () => {
    const mockStringObject = {};
    Object.defineProperty(mockStringObject, Symbol.toStringTag, { value: 'String' });
    expect(Object.prototype.toString.call(mockStringObject)).toBe('[object String]');
    expect(isPrimitiveWrapper(mockStringObject)).toBe(true);

    const mockNumberObject = {};
    Object.defineProperty(mockNumberObject, Symbol.toStringTag, { value: 'Number' });
    expect(Object.prototype.toString.call(mockNumberObject)).toBe('[object Number]');
    expect(isPrimitiveWrapper(mockNumberObject)).toBe(true);

    const mockBooleanObject = {};
    Object.defineProperty(mockBooleanObject, Symbol.toStringTag, { value: 'Boolean' });
    expect(Object.prototype.toString.call(mockBooleanObject)).toBe('[object Boolean]');
    expect(isPrimitiveWrapper(mockBooleanObject)).toBe(true);
  });

  it('should work across different realms', () => {
    expect(isPrimitiveWrapper(vm.runInNewContext('new String("test")'))).toBe(true);
    expect(isPrimitiveWrapper(vm.runInNewContext('new Number(123)'))).toBe(true);
    expect(isPrimitiveWrapper(vm.runInNewContext('new Boolean(true)'))).toBe(true);

    expect(isPrimitiveWrapper(vm.runInNewContext('"test"'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('123'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('true'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('null'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('{}'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('[]'))).toBe(false);
    expect(isPrimitiveWrapper(vm.runInNewContext('new Date()'))).toBe(false);
  });
});
