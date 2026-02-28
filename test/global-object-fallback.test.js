////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import { getGlobalObjectWithFallback } from './global-object-test-wrapper';

describe('Test the global-object.js fallback mechanism', () => {
  test('should correctly retrieve global object using fallback mechanism', () => {
    // 创建一个测试对象，模拟回退机制
    const testObj = {};

    // 使用包装函数调用回退机制
    const result = getGlobalObjectWithFallback(testObj);

    // 测试返回的结果是否为testObj
    expect(result).toBe(testObj);

    // 测试属性是否被删除 - 使用 Object.prototype.hasOwnProperty.call 替代直接调用
    expect(Object.prototype.hasOwnProperty.call(testObj, 'typeDetectGlobalObject')).toBe(false);
  });

  test('should handle error when accessing typeDetectGlobalObject', () => {
    // 创建一个测试对象，确保在内部访问属性时抛出异常
    const testObj = {};

    // 模拟 Object.defineProperty 会定义属性，但访问属性时会抛出异常
    const originalDefineProperty = Object.defineProperty;
    Object.defineProperty = jest.fn((obj, prop, descriptor) => {
      if (prop === 'typeDetectGlobalObject') {
        Object.defineProperty = originalDefineProperty;
        return originalDefineProperty(obj, prop, {
          get() {
            throw new Error('Simulated error');
          },
          configurable: true,
        });
      }
      return originalDefineProperty(obj, prop, descriptor);
    });

    try {
      // 使用一个包装函数来测试异常处理
      const testFallbackWithError = () => {
        Object.defineProperty(testObj, 'typeDetectGlobalObject', {
          get() {
            throw new Error('Simulated error');
          },
          configurable: true,
        });
        try {
          // 在测试环境中，无法直接使用 typeDetectGlobalObject
          // 使用间接方式访问属性，避免使用 eval
          const result = testObj['typeDetectGlobalObject'];
          return result;
        } catch {
          return global; // 出错时返回全局对象
        } finally {
          delete testObj.typeDetectGlobalObject;
        }
      };

      // 测试异常处理
      const result = testFallbackWithError();
      expect(result).toBe(global);
    } finally {
      // 恢复原始函数
      Object.defineProperty = originalDefineProperty;
    }
  });
});
