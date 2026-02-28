////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isPlainObject } from '../src';

/**
 * Unit test of the `isPlainObject()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isPlainObject()` function', () => {
  test('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });

  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);

    expect(isPlainObject({})).toBe(true);
  });

  test('should return false for non-plain objects', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(Math)).toBe(false);
    class Unicorn {}
    expect(isPlainObject(new Unicorn())).toBe(false);
  });

  test('should works across realms', () => {
    expect(isPlainObject(runInNewContext('({})'))).toBe(true);
    expect(isPlainObject(runInNewContext('({foo: "bar"})'))).toBe(true);
    expect(isPlainObject(runInNewContext('Object.create(null)'))).toBe(true);
    expect(isPlainObject(runInNewContext('new Object()'))).toBe(true);
    expect(isPlainObject(runInNewContext('[]'))).toBe(false);
    expect(isPlainObject(runInNewContext('new Date()'))).toBe(false);
    expect(isPlainObject(runInNewContext('new Map()'))).toBe(false);
    expect(isPlainObject(runInNewContext('new Set()'))).toBe(false);
    expect(isPlainObject(runInNewContext('Math'))).toBe(false);
    expect(isPlainObject(runInNewContext('class Unicorn {}; new Unicorn()'))).toBe(false);
    expect(isPlainObject(runInNewContext('0'))).toBe(false);
    expect(isPlainObject(runInNewContext('false'))).toBe(false);
    expect(isPlainObject(runInNewContext('null'))).toBe(false);
    expect(isPlainObject(runInNewContext('undefined'))).toBe(false);
  });
});
