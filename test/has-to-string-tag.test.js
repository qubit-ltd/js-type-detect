////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import hasToStringTag from '../src/has-to-string-tag';

/**
 * Unit test of the `hasToStringTag()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `hasToStringTag()` function', () => {
  // 测试原始数据类型（它们不是对象，应该返回 false）
  test('primitive values should return false', () => {
    expect(hasToStringTag(123)).toBe(false);
    expect(hasToStringTag('string')).toBe(false);
    expect(hasToStringTag(true)).toBe(false);
    expect(hasToStringTag(false)).toBe(false);
    expect(hasToStringTag(undefined)).toBe(false);
    expect(hasToStringTag(Symbol('test'))).toBe(false);
    if (typeof BigInt === 'function') {
      expect(hasToStringTag(BigInt(123))).toBe(false);
    }
  });

  // 测试 null（它不是一个对象，应该返回 false）
  test('null should return false', () => {
    expect(hasToStringTag(null)).toBe(false);
  });

  // 测试普通对象（根据是否支持 Symbol.toStringTag 决定行为）
  test('plain objects without toStringTag', () => {
    const obj = {};
    expect(hasToStringTag(obj)).toBe(false);
  });

  // 测试具有 Symbol.toStringTag 属性的对象
  test('objects with toStringTag as own property', () => {
    if ((typeof Symbol !== 'undefined') && (typeof Symbol.toStringTag !== 'undefined')) {
      const obj = {};
      obj[Symbol.toStringTag] = 'Test';
      expect(hasToStringTag(obj)).toBe(true);
    } else {
      // 如果环境不支持 Symbol.toStringTag，则跳过此测试
      console.log('Environment does not support Symbol.toStringTag, skipping test');
    }
  });

  // 测试内置的对象（大多数内置对象的 Symbol.toStringTag 是在原型链上，而不是自身属性）
  // 根据 hasToStringTag 的实现，它检查的是对象是否有 Symbol.toStringTag in obj
  // 内置对象的行为需要具体测试
  test('built-in objects with toStringTag', () => {
    if ((typeof Symbol !== 'undefined') && (typeof Symbol.toStringTag !== 'undefined')) {
      // 创建一个具有直接 Symbol.toStringTag 属性的对象
      const objWithTag = { [Symbol.toStringTag]: 'CustomObject' };
      expect(hasToStringTag(objWithTag)).toBe(true);

      // 对于内置对象，根据实际情况验证
      // 根据 hasToStringTag 的实现，如果 Symbol.toStringTag in obj 为 true，那么结果为 true
      // 我们需要具体测试每个内置对象

      // 对于 Date 对象
      const dateObj = new Date();
      const dateHasTag = Symbol.toStringTag in dateObj;
      expect(hasToStringTag(dateObj)).toBe(dateHasTag);

      // 对于 Map 对象
      const mapObj = new Map();
      const mapHasTag = Symbol.toStringTag in mapObj;
      expect(hasToStringTag(mapObj)).toBe(mapHasTag);

      // 对于 Set 对象
      const setObj = new Set();
      const setHasTag = Symbol.toStringTag in setObj;
      expect(hasToStringTag(setObj)).toBe(setHasTag);

      // 对于 RegExp 对象

      // eslint-disable-next-line prefer-regex-literals
      const regexObj = new RegExp('abc');
      const regexHasTag = Symbol.toStringTag in regexObj;
      expect(hasToStringTag(regexObj)).toBe(regexHasTag);

      // 对于 ArrayBuffer 对象
      const bufferObj = new ArrayBuffer(10);
      const bufferHasTag = Symbol.toStringTag in bufferObj;
      expect(hasToStringTag(bufferObj)).toBe(bufferHasTag);

      // 对于 Promise 对象
      const promiseObj = Promise.resolve();
      const promiseHasTag = Symbol.toStringTag in promiseObj;
      expect(hasToStringTag(promiseObj)).toBe(promiseHasTag);
    } else {
      // 如果环境不支持 Symbol.toStringTag，则跳过此测试
      console.log('Environment does not support Symbol.toStringTag, skipping test');
    }
  });

  // 测试跨 realm 行为
  test('should work across realms', () => {
    if ((typeof Symbol !== 'undefined') && (typeof Symbol.toStringTag !== 'undefined')) {
      // 创建一个带有 Symbol.toStringTag 的对象
      const objWithTagAcrossRealm = runInNewContext('({ [Symbol.toStringTag]: "Test" })');
      expect(hasToStringTag(objWithTagAcrossRealm)).toBe(true);

      // 内置对象，根据实际情况验证
      const dateAcrossRealm = runInNewContext('new Date()');
      const dateHasTag = Symbol.toStringTag in dateAcrossRealm;
      expect(hasToStringTag(dateAcrossRealm)).toBe(dateHasTag);

      const mapAcrossRealm = runInNewContext('new Map()');
      const mapHasTag = Symbol.toStringTag in mapAcrossRealm;
      expect(hasToStringTag(mapAcrossRealm)).toBe(mapHasTag);

      // 普通对象
      expect(hasToStringTag(runInNewContext('{}'))).toBe(false);
    } else {
      // 如果环境不支持 Symbol.toStringTag，则跳过此测试
      console.log('Environment does not support Symbol.toStringTag, skipping test');
    }
  });
});
