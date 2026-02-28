////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import isArguments from '../src/is-arguments';

/**
 * Unit test of the `isArguments()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isArguments()` function', () => {
  it('arguments', () => {
    // 定义一个函数，返回它接收到的arguments对象
    function getArguments() {
      return arguments;
    }
    const args = getArguments(1, 2, 3);
    expect(isArguments(args)).toBe(true);
  });

  it('invalid arguments', () => {
    // 使用Symbol.toStringTag创建一个伪装成Arguments的对象
    const fakeArgs = {
      [Symbol.toStringTag]: 'Arguments',
    };
    // 没有callee和length属性，所以不是真正的arguments对象
    expect(isArguments(fakeArgs)).toBe(false);

    // 添加一个更完整的模拟，但仍有一些缺失
    const incompleteArgs = {
      [Symbol.toStringTag]: 'Arguments',
      callee() {},
      length: 3,
    };
    // 重新定义toString方法来避免使用Symbol.toStringTag
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function () {
      if (this === incompleteArgs) {
        return '[object Arguments]';
      }
      return originalToString.call(this);
    };

    // 现在添加数字索引属性，这个应该返回true
    const completelyFakeArgs = {
      'callee': function () {},
      'length': 3,
      '0': 'a',
      '1': 'b',
      '2': 'c',
    };
    Object.defineProperty(completelyFakeArgs, Symbol.toStringTag, {
      value: 'Arguments',
      configurable: true,
    });
    expect(isArguments(completelyFakeArgs)).toBe(true);

    // 恢复原始toString方法

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('checks for error accessing callee in strict mode', () => {
    // 创建一个在严格模式下的arguments对象，访问callee会抛出错误
    function createStrictModeArguments() {
      return arguments;
    }

    const strictArgs = createStrictModeArguments(1, 2, 3);

    // 创建一个对象模拟严格模式下的参数对象
    const mockStrictArgs = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function () {
      if (this === mockStrictArgs) {
        return '[object Arguments]';
      }
      return originalToString.call(this);
    };

    // 模拟在访问callee时抛出TypeError，消息中包含"callee"
    Object.defineProperty(mockStrictArgs, 'callee', {
      get() {
        throw new TypeError('callee is not accessible in strict mode');
      },
    });

    expect(isArguments(mockStrictArgs)).toBe(true);

    // 恢复原始toString方法

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('fake arguments', () => {
    // 创建一个toString方法返回[object Arguments]的对象
    const obj = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function fakeToString() {
      if (this === obj) {
        return '[object Arguments]';
      }
      return originalToString.call(this);
    };
    expect(isArguments(obj)).toBe(true);

    // 恢复原始toString方法

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('non-arguments object', () => {
    expect(isArguments({})).toBe(false);
    expect(isArguments([])).toBe(false);
    expect(isArguments(new Date())).toBe(false);
    expect(isArguments(/regex/)).toBe(false);
    expect(isArguments(() => {})).toBe(false);
  });

  it('primitive values', () => {
    expect(isArguments(123)).toBe(false);
    expect(isArguments('string')).toBe(false);
    expect(isArguments(true)).toBe(false);
    expect(isArguments(Symbol('sym'))).toBe(false);
    expect(isArguments(BigInt(123))).toBe(false);
  });

  it('nullish values', () => {
    expect(isArguments(null)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
  });

  it('should works across realms', () => {
    const argsFromAnotherRealm = runInNewContext('(function() { return arguments; })(1, 2, 3)');
    expect(isArguments(argsFromAnotherRealm)).toBe(true);
  });
});
