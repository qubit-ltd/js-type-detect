////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isPromise } from '../src';
import { PROMISE_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isPromise()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isPromise()` function', () => {
  if (PROMISE_EXISTS) {
    it('Promise', () => {
      const promise = new Promise((resolve) => {
        resolve(true);
      });
      expect(isPromise(promise)).toBe(true);
    });

    it('Promise.resolve', () => {
      const promise = Promise.resolve(true);
      expect(isPromise(promise)).toBe(true);
    });

    it('Promise.reject', () => {
      const promise = Promise.reject(new Error('test')).catch(() => {});
      expect(isPromise(promise)).toBe(true);
    });

    it('mock Promise with correct toString tag', () => {
      const mockPromise = {};
      Object.defineProperty(mockPromise, Symbol.toStringTag, { value: 'Promise' });
      expect(Object.prototype.toString.call(mockPromise)).toBe('[object Promise]');
      expect(isPromise(mockPromise)).toBe(true);
    });

    it('thenable object', () => {
      const thenable = {
        then(resolve) { resolve(); },
        catch(reject) { reject(); },
      };
      expect(isPromise(thenable)).toBe(true);
    });

    it('should handle error during instanceof check', () => {
      // 创建一个会在 instanceof 检查时抛出错误的对象
      const badProxyHandler = {
        get(target, prop) {
          if (prop === Symbol.hasInstance) {
            return () => { throw new Error('instanceof test error'); };
          }
          return target[prop];
        },
      };

      const originalPromise = global.Promise;
      try {
        // 使用 Proxy 来模拟 instanceof 检查失败但其他检查成功的情况
        global.Promise = new Proxy(Promise, badProxyHandler);

        const thenable = {
          then(resolve) { resolve(); },
          catch(reject) { reject(); },
        };
        // 这应该触发 try-catch 中的代码
        expect(isPromise(thenable)).toBe(true);

        const mockPromise = {};
        Object.defineProperty(mockPromise, Symbol.toStringTag, { value: 'Promise' });
        expect(isPromise(mockPromise)).toBe(true);
      } finally {
        global.Promise = originalPromise;
      }
    });

    it('should handle error during property access', () => {
      // 创建一个在访问 then 属性时抛出错误的对象
      const errorOnPropertyAccess = Object.create(null);
      Object.defineProperty(errorOnPropertyAccess, 'then', {
        get() { throw new Error('Property access error'); },
      });

      // 这将触发 catch 块中的第二部分检测
      expect(isPromise(errorOnPropertyAccess)).toBe(false);

      // 创建一个在访问 then 属性时不抛出错误，但在访问 catch 属性时抛出错误的对象
      const errorOnCatchAccess = {
        then() {},
      };
      Object.defineProperty(errorOnCatchAccess, 'catch', {
        get() { throw new Error('Property access error'); },
      });

      // 这也会触发 catch 块并测试不同的代码路径
      expect(isPromise(errorOnCatchAccess)).toBe(false);

      // 创建一个对象，其 toString 方法返回 [object Promise]，但访问 then/catch 属性时抛出错误
      const promiseLikeWithToStringError = {};
      Object.defineProperty(promiseLikeWithToStringError, Symbol.toStringTag, {
        value: 'Promise',
      });
      Object.defineProperty(promiseLikeWithToStringError, 'then', {
        get() { throw new Error('Property access error'); },
      });

      // 这会在 catch 块中命中第一个条件
      expect(isPromise(promiseLikeWithToStringError)).toBe(true);
    });
  }

  it('should handle environments without Promise', () => {
    // 保存原始 Promise
    const originalPromise = global.Promise;
    try {
      // 模拟 Promise 不存在的环境
      delete global.Promise;
      expect(typeof Promise).toBe('undefined');
      expect(isPromise({})).toBe(false);
    } finally {
      // 恢复原始 Promise
      global.Promise = originalPromise;
    }
  });

  it('should return false for non-Promise objects', () => {
    expect(isPromise({})).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise(0)).toBe(false);
    expect(isPromise(false)).toBe(false);
    expect(isPromise('')).toBe(false);
    expect(isPromise([])).toBe(false);
    if (typeof Map !== 'undefined') {
      expect(isPromise(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isPromise(new Set())).toBe(false);
    }
    expect(isPromise(new Date())).toBe(false);
    expect(isPromise(() => {})).toBe(false);

    // 对象有 then 但没有 catch
    const thenOnly = {
      then() {},
    };
    expect(isPromise(thenOnly)).toBe(false);

    // 对象有 catch 但没有 then
    const catchOnly = {
      catch() {},
    };
    expect(isPromise(catchOnly)).toBe(false);

    // then 和 catch 不是函数
    const nonFunctionProps = {
      then: 'not a function',
      catch: 'not a function',
    };
    expect(isPromise(nonFunctionProps)).toBe(false);
  });

  test('should works across realms without Promise', () => {
    expect(isPromise(vm.runInNewContext('new WeakSet()'))).toBe(false);
    expect(isPromise(vm.runInNewContext('{}'))).toBe(false);
    expect(isPromise(vm.runInNewContext('[]'))).toBe(false);
    expect(isPromise(vm.runInNewContext('0'))).toBe(false);
    expect(isPromise(vm.runInNewContext('false'))).toBe(false);
    expect(isPromise(vm.runInNewContext('null'))).toBe(false);
    expect(isPromise(vm.runInNewContext('undefined'))).toBe(false);
  });

  if (PROMISE_EXISTS) {
    test('should works across realms with Promise', () => {
      const context = {
        Promise,
      };
      const promise = vm.runInNewContext('Promise.resolve(true)', context);
      expect(isPromise(promise)).toBe(true);
    });
  }
});
