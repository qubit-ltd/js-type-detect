////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * @jest-environment jsdom
 */

import isConsole from '../src/is-console';

/**
 * Unit test of the `isConsole()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isConsole()` function', () => {
  it('undefined', () => {
    expect(isConsole(undefined)).toBe(false);
  });
  it('null', () => {
    expect(isConsole(null)).toBe(false);
  });
  it('123', () => {
    expect(isConsole(123)).toBe(false);
  });
  it('"str"', () => {
    expect(isConsole('str')).toBe(false);
  });
  it('{}', () => {
    expect(isConsole({})).toBe(false);
  });
  if (window && window.console) {
    it('window.console', () => {
      expect(isConsole(window.console)).toBe(true);
    });
  }
  if (console) {
    it('console', () => {
      expect(isConsole(console)).toBe(true);
    });
  }

  it('checks toString result', () => {
    // 创建一个模拟对象，toString会返回[object Console]
    const mockConsole = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function mockToString() {
      if (this === mockConsole) {
        return '[object Console]';
      }
      return originalToString.call(this);
    };

    expect(isConsole(mockConsole)).toBe(true);

    // 恢复原始toString方法

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('handles error during toString call', () => {
    // 创建一个模拟对象，调用toString时会抛出错误
    const errorObject = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function mockToString() {
      if (this === errorObject) {
        throw new Error('Intentional error in toString');
      }
      return originalToString.call(this);
    };

    // 应该忽略错误并继续检查其他条件
    expect(isConsole(errorObject)).toBe(false);

    // 恢复原始toString方法

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('handles objects with some console-like methods', () => {
    // 创建一个带有部分控制台方法的对象
    const partialConsole = {
      log() {},
      error() {},
      // 缺少一些必要的方法
    };
    expect(isConsole(partialConsole)).toBe(false);

    // 添加所有必要的方法
    const completeConsole = {
      log() {},
      error() {},
      warn() {},
      info() {},
    };
    expect(isConsole(completeConsole)).toBe(true);
  });

  it('should works across realms', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    try {
      // 获取iframe中的console对象
      const iframeConsole = iframe.contentWindow.console;
      expect(isConsole(iframeConsole)).toBe(true);
    } finally {
      document.body.removeChild(iframe);
    }
  });
});
