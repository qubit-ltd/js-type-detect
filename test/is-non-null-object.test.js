////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import isNonNullObject from '../src/is-non-null-object';

describe('Test the `isNonNullObject()` function', () => {
  it('returns true for objects', () => {
    expect(isNonNullObject({})).toBe(true);
    expect(isNonNullObject([])).toBe(true);
    expect(isNonNullObject(new Date())).toBe(true);
    expect(isNonNullObject(new Map())).toBe(true);
    expect(isNonNullObject(new Set())).toBe(true);
    expect(isNonNullObject(new WeakMap())).toBe(true);
    expect(isNonNullObject(new WeakSet())).toBe(true);

    // eslint-disable-next-line prefer-regex-literals
    expect(isNonNullObject(new RegExp('abc'))).toBe(true);
    expect(isNonNullObject(new Error('test'))).toBe(true);
    expect(isNonNullObject(Object.create(null))).toBe(true);
  });

  it('returns false for null', () => {
    expect(isNonNullObject(null)).toBe(false);
  });

  it('returns false for primitive values', () => {
    expect(isNonNullObject(undefined)).toBe(false);
    expect(isNonNullObject(0)).toBe(false);
    expect(isNonNullObject(123)).toBe(false);
    expect(isNonNullObject(NaN)).toBe(false);
    expect(isNonNullObject(Infinity)).toBe(false);
    expect(isNonNullObject('')).toBe(false);
    expect(isNonNullObject('string')).toBe(false);
    expect(isNonNullObject(true)).toBe(false);
    expect(isNonNullObject(false)).toBe(false);
    expect(isNonNullObject(Symbol('symbol'))).toBe(false);
    expect(isNonNullObject(BigInt(123))).toBe(false);
  });

  it('returns false for functions', () => {
    expect(isNonNullObject(() => {})).toBe(false);
    expect(isNonNullObject(() => {})).toBe(false);
    expect(isNonNullObject(Object)).toBe(false);
    expect(isNonNullObject(Array)).toBe(false);
  });

  it('should works across realms', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    try {
      const obj = iframe.contentWindow.Object.create(null);
      expect(isNonNullObject(obj)).toBe(true);

      const arr = new iframe.contentWindow.Array();
      expect(isNonNullObject(arr)).toBe(true);
    } finally {
      document.body.removeChild(iframe);
    }
  });
});
