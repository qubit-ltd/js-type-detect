////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isFunction } from '../src';
import { ASYNC_FUNCTION_EXISTS, SYMBOL_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isFunction()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isFunction()` function', () => {
  it('returns true for a named function', () => {
    function foo() { console.log('hello'); }
    expect(isFunction(foo)).toBe(true);
  });
  it('returns true for an unnamed function', () => {
    expect(isFunction(() => { console.log('hello'); })).toBe(true);
  });
  it('returns true for an arrow function', () => {
    expect(isFunction((x) => x + 1)).toBe(true);
  });
  test('returns false for a generator function', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    expect(isFunction(foo)).toBe(false);
  });
  test('returns false for a generator object', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    const x = foo();
    expect(isFunction(x)).toBe(false);
  });
  if (ASYNC_FUNCTION_EXISTS) {
    it('returns true for a named async function', () => {
      async function foo() { console.log('hello'); }
      expect(isFunction(foo)).toBe(true);
    });
    it('returns true for an unnamed async function', () => {
      expect(isFunction(async () => { console.log('hello'); })).toBe(true);
    });
    it('returns true for an async arrow function', () => {
      expect(isFunction(async (x) => x + 1)).toBe(true);
    });
    test('returns false for an async generator function', () => {
      async function* foo() {
        yield 'a';
        yield 'b';
        yield 'c';
      }
      expect(isFunction(foo)).toBe(false);
    });
    test('returns false for an async generator object', () => {
      async function* foo() {
        yield 'a';
        yield 'b';
        yield 'c';
      }
      const x = foo();
      expect(isFunction(x)).toBe(false);
    });
  }
  it('returns false for a string', () => {
    expect(isFunction('test')).toBe(false);
  });
  it('returns false for a number', () => {
    expect(isFunction(123)).toBe(false);
  });
  it('returns false for an object', () => {
    expect(isFunction({})).toBe(false);
  });
  it('returns false for an array', () => {
    expect(isFunction([])).toBe(false);
  });
  it('returns false for a boolean', () => {
    expect(isFunction(true)).toBe(false);
  });
  if (SYMBOL_EXISTS) {
    it('returns false for a symbol', () => {
      expect(isFunction(Symbol('test'))).toBe(false);
    });
  }
  it('returns false for null', () => {
    expect(isFunction(null)).toBe(false);
  });
  it('returns false for undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });
  it('should works across realms for non-function', () => {
    expect(isFunction(runInNewContext('() => 42'))).toBe(true);
    expect(isFunction(runInNewContext('{}'))).toBe(false);
    expect(isFunction(runInNewContext('[]'))).toBe(false);
    expect(isFunction(runInNewContext('0'))).toBe(false);
    expect(isFunction(runInNewContext('false'))).toBe(false);
    expect(isFunction(runInNewContext('null'))).toBe(false);
    expect(isFunction(runInNewContext('undefined'))).toBe(false);
  });
  it('should works across realms for named function', () => {
    expect(isFunction(runInNewContext('function foo() { return 42; }; foo'))).toBe(true);
  });
  it('should works across realms for unnamed function', () => {
    expect(isFunction(runInNewContext('foo = function () { console.log(\'hello\'); }; foo'))).toBe(true);
  });
  it('should works across realms for array function', () => {
    expect(isFunction(runInNewContext('foo = (x) => x + 1; foo'))).toBe(true);
  });
  it('should works across realms for named async function', () => {
    expect(isFunction(runInNewContext('async function foo() { return 42; }; foo'))).toBe(true);
  });
  it('should works across realms for unnamed async function', () => {
    expect(isFunction(runInNewContext('foo = async function () { console.log(\'hello\'); }; foo'))).toBe(true);
  });
  it('should works across realms for async array function', () => {
    expect(isFunction(runInNewContext('foo = async (x) => x + 1; foo'))).toBe(true);
  });
});
