////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import GLOBAL_OBJECT from '../src/global-object';
import GLOBAL_OBJECT_NAMES from '../src/impl/global-object-names';
import isGlobalObject from '../src/is-global-object';

/**
 * Unit test of the `isGlobalObject()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isGlobalObject()` function', () => {
  it('returns true for the global object', () => {
    expect(isGlobalObject(GLOBAL_OBJECT)).toBe(true);
  });

  it('returns true for the globalThis', () => {
    expect(isGlobalObject(globalThis)).toBe(true);
  });

  it('returns false for a plain object', () => {
    expect(isGlobalObject({})).toBe(false);
  });

  it('returns false for a number', () => {
    expect(isGlobalObject(123)).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isGlobalObject('abc')).toBe(false);
  });

  it('returns false for a boolean', () => {
    expect(isGlobalObject(true)).toBe(false);
  });

  it('returns false for a function', () => {
    expect(isGlobalObject(() => {})).toBe(false);
  });

  it('returns false for a symbol', () => {
    expect(isGlobalObject(Symbol('test'))).toBe(false);
  });

  it('returns false for a BigInt', () => {
    expect(isGlobalObject(BigInt(123))).toBe(false);
  });

  it('returns false for null', () => {
    expect(isGlobalObject(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isGlobalObject(undefined)).toBe(false);
  });

  it('should works across realms', () => {
    expect(isGlobalObject(runInNewContext('this'))).toBe(true);
    expect(isGlobalObject(runInNewContext('globalThis'))).toBe(true);
  });

  it('recognizes global object by toString tag', () => {
    // Create a mock object that mimics a global object's toString value
    const mockGlobalObject = {};
    const originalToString = Object.prototype.toString;

    GLOBAL_OBJECT_NAMES.forEach((name) => {
      // eslint-disable-next-line no-extend-native
      Object.prototype.toString = function mockToString() {
        if (this === mockGlobalObject) {
          return name;
        }
        return originalToString.call(this);
      };

      expect(isGlobalObject(mockGlobalObject)).toBe(true);
    });

    // Restore original toString

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('handles objects with some global object properties', () => {
    // This object has some properties that would make it look like a global object
    // but it's missing others, so it should return false
    const partialGlobalLike = {
      Object() {},
      Array() {},
      String() {},
      // Missing other required properties
    };
    expect(isGlobalObject(partialGlobalLike)).toBe(false);
  });

  it('detects cross-realm global objects by their properties', () => {
    // Create a mock object that has all the properties of a global object
    const mockCompleteGlobal = {
      globalThis: {}, // Will be set to self-reference
      Object() {},
      Array() {},
      String() {},
      Number() {},
      Boolean() {},
      Math: {},
      Date() {},
      JSON: {},
      parseInt() {},
      parseFloat() {},
      isNaN() {},
      isFinite() {},
    };
    // Set self-reference for globalThis property
    mockCompleteGlobal.globalThis = mockCompleteGlobal;

    expect(isGlobalObject(mockCompleteGlobal)).toBe(true);
  });

  it('handles error during property access', () => {
    // Create an object with a property getter that throws an error
    const errorObject = {};
    Object.defineProperty(errorObject, 'Object', {
      get() {
        throw new Error('Intentional error');
      },
    });

    expect(isGlobalObject(errorObject)).toBe(false);
  });
});
