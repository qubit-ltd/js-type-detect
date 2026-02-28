////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isNumber } from '../src';
import { BIGINT_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isNumber()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isNumber()` function', () => {
  test('primitive number, normal value', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(0.0)).toBe(true);
    expect(isNumber(Number(0))).toBe(true);
    expect(isNumber(Number(0.0))).toBe(true);
  });
  test('primitive number, infinity', () => {
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(Number(Infinity))).toBe(true);
    expect(isNumber(Number(-Infinity))).toBe(true);
  });
  test('primitive number, NaN', () => {
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Number(NaN))).toBe(true);
  });
  test('primitive non-numeric', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber(Symbol.for('meta'))).toBe(false);
    expect(isNumber((x) => x)).toBe(false);
  });
  test('Number object, normal value', () => {
    expect(isNumber(new Number(0))).toBe(true);
    expect(isNumber(new Number(-1))).toBe(true);
  });
  test('Number object, infinity', () => {
    expect(isNumber(new Number(Infinity))).toBe(true);
    expect(isNumber(new Number(-Infinity))).toBe(true);
  });
  test('Number object, NaN', () => {
    expect(isNumber(new Number(NaN))).toBe(true);
  });
  test('non-Numeric object', () => {
    expect(isNumber({ abc: 123 })).toBe(false);
    expect(isNumber(new Boolean(true))).toBe(false);
  });
  test('nullish values', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
  if (BIGINT_EXISTS) {
    test('primitive bigint', () => {
      expect(isNumber(0n)).toBe(false);
      expect(isNumber(1n)).toBe(false);
      expect(isNumber(BigInt(0))).toBe(false);
      expect(isNumber(BigInt(1))).toBe(false);
    });
  }
  test('should works across realms', () => {
    expect(isNumber(runInNewContext('0'))).toBe(true);
    expect(isNumber(runInNewContext('1.2'))).toBe(true);
    expect(isNumber(runInNewContext('new Number(123)'))).toBe(true);
    expect(isNumber(runInNewContext('new Number(Infinity)'))).toBe(true);
    expect(isNumber(runInNewContext('false'))).toBe(false);
    expect(isNumber(runInNewContext('new Boolean(true)'))).toBe(false);
    expect(isNumber(runInNewContext('null'))).toBe(false);
    expect(isNumber(runInNewContext('undefined'))).toBe(false);
    expect(isNumber(runInNewContext('1n'))).toBe(false);
    expect(isNumber(runInNewContext('BigInt(123)'))).toBe(false);
  });
});
