////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

import getTypeName from './get-type-name';
import BUILT_IN_TYPE_NAMES from './impl/built-in-type-names';
import GLOBAL_OBJECT_NAMES from './impl/global-object-names';
import hasToStringValueOf from './impl/has-to-string-value-of';

/**
 * Tests whether the specified constructor function is the constructor of a
 * built-in class.
 *
 * The following special functions are also considered as built-in "classes":
 * - `BigInt` (a function)
 * - `Symbol` (a function)
 * - `Proxy` (a function)
 *
 * The following special global objects are also considered as built-in "classes":
 * - `Math`
 * - `JSON`
 * - `Reflect`
 * - `Atomics`
 *
 * @param {function|object} Class
 *     The constructor function to be checked.
 * @returns {boolean}
 *     `true` if the specified constructor function is the constructor of a
 *     built-in class; `false` otherwise.
 */
function isBuiltInClass(Class) {
  if (Class === undefined || Class === null) {
    return false;
  }
  // 处理跨realm的内置特殊对象
  if (hasToStringValueOf(Class, GLOBAL_OBJECT_NAMES)) {
    return true;
  }
  // 自定义类检测，如果函数被定义在用户代码中，则不是内置类
  if (typeof Class === 'function') {
    const funcName = Function.prototype.toString.call(Class);
    // 检测是否是class关键字定义的类
    if (funcName.startsWith('class ')) {
      // 只有内置类在严格模式下不会以"class "开头
      return false;
    }
    // 对于跨realm的情况，可以检测函数名称，但需要限制只有特定名称的才被识别为内置类
    if (Class.name === 'Proxy') {
      return true;    // Proxy 要特殊处理
    }
    const name = getTypeName(Class.prototype);
    return BUILT_IN_TYPE_NAMES.includes(name);
  }
  return false;
}

export default isBuiltInClass;
