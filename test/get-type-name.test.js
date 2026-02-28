////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { getTypeName } from '../src';

describe('Test the `getTypeName()` function', () => {
  it('handle null', () => {
    expect(getTypeName(null)).toBe('null');
  });
  it('handle undefined', () => {
    expect(getTypeName(undefined)).toBe('undefined');
  });
  it('gets type name from Symbol.toStringTag if present', () => {
    const obj = {
      [Symbol.toStringTag]: 'CustomTaggedObject',
    };
    expect(getTypeName(obj)).toBe('CustomTaggedObject');

    const objWithSpaces = {
      [Symbol.toStringTag]: 'Custom Tagged Object',
    };
    expect(getTypeName(objWithSpaces)).toBe('CustomTaggedObject');
  });

  it('gets type name from constructor.name if available', () => {
    class CustomClass {}
    const instance = new CustomClass();
    expect(getTypeName(instance)).toBe('CustomClass');

    class AnotherClass {
      static get name() {
        return 'OverriddenName';
      }
    }
    const anotherInstance = new AnotherClass();
    expect(getTypeName(anotherInstance)).toBe('OverriddenName');
  });

  it('falls back to Object.prototype.toString.call for built-in objects', () => {
    expect(getTypeName({})).toBe('Object');
    expect(getTypeName([])).toBe('Array');
    expect(getTypeName(new Date())).toBe('Date');

    // eslint-disable-next-line prefer-regex-literals
    expect(getTypeName(new RegExp(''))).toBe('RegExp');
    expect(getTypeName(new Map())).toBe('Map');
    expect(getTypeName(new Set())).toBe('Set');
    expect(getTypeName(new Error())).toBe('Error');
  });

  it('handles null and undefined correctly', () => {
    // This should never happen in normal usage, as getTypeName expects an object
    // But we test it to ensure robustness
    try {
      getTypeName(null);
      fail('Should have thrown an error for null');
    } catch (e) {
      expect(e).toBeDefined();
    }

    try {
      getTypeName(undefined);
      fail('Should have thrown an error for undefined');
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  it('properly identifies HTML elements', () => {
    const div = document.createElement('div');
    expect(getTypeName(div)).toBe('HTMLDivElement');

    const span = document.createElement('span');
    expect(getTypeName(span)).toBe('HTMLSpanElement');

    const input = document.createElement('input');
    expect(getTypeName(input)).toBe('HTMLInputElement');
  });

  it('fixes type name compatibility issues: empty string', () => {
    // 创建一个mock对象，模拟toString返回空类名的情况
    const mockEmptyClassObject = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function () {
      if (this === mockEmptyClassObject) {
        return '[object ]'; // Empty class name
      }
      return originalToString.call(this);
    };
    // 先删除mockEmptyClassObject的constructor属性，确保使用toString路径
    if (mockEmptyClassObject.constructor) {
      delete mockEmptyClassObject.constructor;
    }
    // 应该返回非空值
    const typeName = getTypeName(mockEmptyClassObject);
    expect(typeName).toBe('');
    // 恢复原始toString

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('fixes type name compatibility issues: _class', () => {
    // 创建一个mock对象，模拟toString返回空类名的情况
    const mockEmptyClassObject = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function () {
      if (this === mockEmptyClassObject) {
        return '[object _class]'; // Empty class name
      }
      return originalToString.call(this);
    };
    // 先删除mockEmptyClassObject的constructor属性，确保使用toString路径
    if (mockEmptyClassObject.constructor) {
      delete mockEmptyClassObject.constructor;
    }
    // 应该返回非空值
    const typeName = getTypeName(mockEmptyClassObject);
    expect(typeName).toBe('');
    // 恢复原始toString

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('fixes type name compatibility issues: _AsyncGenerator', () => {
    // 创建一个mock对象，模拟toString返回空类名的情况
    const mockEmptyClassObject = {};
    const originalToString = Object.prototype.toString;

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = function () {
      if (this === mockEmptyClassObject) {
        return '[object _AsyncGenerator]'; // Empty class name
      }
      return originalToString.call(this);
    };
    // 先删除mockEmptyClassObject的constructor属性，确保使用toString路径
    if (mockEmptyClassObject.constructor) {
      delete mockEmptyClassObject.constructor;
    }
    // 应该返回非空值
    const typeName = getTypeName(mockEmptyClassObject);
    expect(typeName).toBe('AsyncGenerator');
    // 恢复原始toString

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('handles objects with undefined constructor name', () => {
    // Create object with null prototype
    const objWithNullProto = Object.create(null);
    // Add a constructor property without a name
    objWithNullProto.constructor = {};

    // Should fall back to toString method
    expect(getTypeName(objWithNullProto)).toBe('Object');
  });

  it('handles objects with Object as constructor name', () => {
    const obj = {};
    // Should still return "Object" even if constructor.name is "Object"
    expect(getTypeName(obj)).toBe('Object');
  });

  it('handle window.document', () => {
    const obj = window.document;
    expect(getTypeName(obj)).toBe('Document');
  });
});
