# type-detect

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/type-detect.svg)](https://npmjs.com/package/@qubit-ltd/type-detect)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/qubit-ltd/js-type-detect/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/qubit-ltd/js-type-detect/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/qubit-ltd/js-type-detect/badge.svg?branch=master)](https://coveralls.io/github/qubit-ltd/js-type-detect?branch=master)

[type-detect] 是一个轻量级的 JavaScript 库，提供用于检测 JavaScript 变量类型的工具。
它设计为兼容最新的 ECMAScript 标准。

如果你想获取变量的更详细的类型信息，可以使用 [typeinfo] 库，它是基于 [type-detect] 构建的。

## 亮点特性

- **跨域兼容性**：能够在不同的JavaScript域（iframe、窗口、工作线程）之间正确识别类型
- **全面的类型检测**：提供30多个专门函数，精确检查JavaScript内置类型
- **丰富的Web API支持**：检测300多种浏览器特定对象，包括DOM、HTML DOM、SVG DOM和CSSOM元素
- **轻量级**：体积小，依赖少
- **100%测试覆盖率**：全面测试确保在所有环境中的可靠性
- **支持现代JavaScript**：兼容最新的ECMAScript特性和标准
- **环境感知**：安全检查环境特定类型（DOM、CSSOM、文件API）
- **健壮的检测方法**：使用对象内部特征而非不可靠的原型链检查

## 全面的 Web API 类型检测

本库提供了对浏览器特定对象类型的广泛支持，使其对 Web 应用程序特别有价值。类型检测涵盖以下主要 Web API 类别：

### DOM API 支持
该库可以识别核心[文档对象模型 (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)中的 50 多个 DOM API 接口，包括：

- 核心元素：`Document`、`Node`、`Element`、`Text`
- 事件：`Event`、`CustomEvent`
- DOM 抽象：`Range`、`NodeList`、`HTMLCollection`
- 解析工具：`DOMParser`
- 现代 API：`MutationObserver`、`TextEncoder`/`TextDecoder`

### HTML DOM 支持
我们全面支持来自 [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) 的 100 多种类型检测，包括：

- 所有 HTML 元素：`HTMLDivElement`、`HTMLAnchorElement`、`HTMLImageElement` 等
- 表单元素：`HTMLFormElement`、`HTMLInputElement`、`HTMLSelectElement`
- 媒体元素：`HTMLVideoElement`、`HTMLAudioElement`
- Canvas 接口：`CanvasRenderingContext2D`、`ImageBitmap`
- 浏览器接口：`Window`、`Navigator`、`History`
- 拖放接口：`DataTransfer`、`DragEvent`

### SVG DOM 支持
该库提供了来自 [SVG API](https://developer.mozilla.org/en-US/docs/Web/API/SVG_API) 的 100 多种类型检测，包括：

- SVG 元素：`SVGSVGElement`、`SVGPathElement`、`SVGCircleElement`
- 动画元素：`SVGAnimateElement`、`SVGAnimateTransformElement`
- 滤镜元素：`SVGFilterElement` 和所有滤镜效果元素
- 数据类型：`SVGLength`、`SVGTransform`、`SVGAnimatedNumber`

### CSSOM 支持
我们支持来自 [CSS 对象模型 (CSSOM)](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) 的 70 多种类型检测，包括：

- 核心接口：`CSS`、`CSSStyleDeclaration`、`CSSRule`、`StyleSheet`
- 特定规则类型：`CSSStyleRule`、`CSSMediaRule`、`CSSKeyframesRule`
- 字体接口：`FontFace`、`FontFaceSet`
- 现代 CSS Typed OM：`CSSStyleValue`、`CSSUnitValue`、`CSSTransformValue`
- 动画和过渡：`AnimationEvent`、`TransitionEvent`

与许多主要关注 JavaScript 内置类型的类型检查库不同，[type-detect] 提供了这种广泛的浏览器对象检测，同时保持可靠的跨域兼容性和小巧的包大小。

## 与sindresorhus/is的比较

虽然[sindresorhus/is](https://github.com/sindresorhus/is)是一个优秀的类型检查库，也是本项目的灵感来源，但`type-detect`在以下几个方面有所不同：

- **Apache 2.0许可证**：对企业和商业应用更加宽松
- **专门的检测函数**：更细粒度的类型检查（如`isWeakCollection`、`isGenerator`、`isNumeric`）
- **更强的跨域支持**：对跨域兼容性进行了广泛测试
- **注重DOM和浏览器API**：增强了对浏览器特定对象的检测（文件API、CSSOM、DOM元素）
- **核心函数架构**：所有类型检查都基于中央`getTypeName`函数，保持一致性
- **详细文档**：提供关于跨域检测和限制（如Proxy检测）的详细解释

这两个库都是类型检查的优秀选择，`type-detect`更加注重浏览器环境和专门的JavaScript类型检测。

## 致谢

本项目参考了由 Sindre Sorhus 创建的优秀库 [sindresorhus/is](https://github.com/sindresorhus/is)。我们在此对他在 JavaScript 类型检查工具方面的开创性工作表示感谢。

## 目录

- [安装](#installation)
- [使用](#usage)
- [全面的 Web API 类型检测](#全面的-web-api-类型检测)
  - [DOM API 支持](#dom-api-支持)
  - [HTML DOM 支持](#html-dom-支持)
  - [SVG DOM 支持](#svg-dom-支持)
  - [CSSOM 支持](#cssom-支持)
- [为何不使用`instanceof`](#why-not-instanceof)
- [跨域类型检测](#cross-realm)
- [为何无法检测`Proxy`类型](#why-no-proxy)
- [测试覆盖率](#test-coverage)
- [贡献](#contributing)
- [许可证](#license)

## <span id="installation">安装</span>

您可以通过 `npm` 安装 [type-detect]:
```sh
npm install @qubit-ltd/type-detect
```
或者通过 `yarn` 安装:
```bash
yarn add @qubit-ltd/type-detect
```

## <span id="usage">使用</span>

该库提供了以下用于类型检测的函数：

- `getTypeName(value): string`：获取值的类型名称。这是一个实用函数，返回给定值的类型名称。
  它可以处理特殊情况，如 null、undefined、HTML 元素，并能正确识别带有自定义 `Symbol.toStringTag` 
  属性的对象。它是本库中许多类型检测函数使用的核心功能。
- `isArguments(value): boolean`：指定值是否为 JavaScript 内建的 `arguments` 对象，
  即一个类似数组的对象，表示传递给函数的参数。
- `isArray(value): boolean`：指定值是否为 JavaScript 内建的数组。
- `isBigInt(value): boolean`：指定值是否为 JavaScript 内建的 `bigint` 基本类型。
- `isBlob(value): boolean`：指定值是否为 JavaScript 内建的 `Blob` 对象。
- `isBoolean(value): boolean`：指定值是否为 JavaScript 内建的 `boolean` 基本类型或 `Boolean` 对象。
- `isBuffer(value): boolean`：指定值是否为 JavaScript 内建的 `ArrayBuffer` 或 `SharedArrayBuffer` 对象。
- `isBuiltInClass(Class): boolean`：指定类是否为 JavaScript 内建类。
- `isCollection(value): boolean`：指定值是否为 JavaScript 内建的集合对象，即 `Map` 或 `Set` 对象。
  注意，`WeakMap` 和 `WeakSet` 对象不被视为普通集合对象，它们可以通过 `isWeakCollection(value)` 函数检测。
- `isConsole(value): boolean`：指定值是否为 JavaScript 内建的 `console` 对象。
- `isCssom(value): boolean`：指定值是否为 JavaScript 内建的 `CSSOM` 对象。
- `isDataView(value): boolean`：指定值是否为 JavaScript 内建的 `DataView` 对象。
- `isDate(value): boolean`：指定值是否为 JavaScript 内建的 `Date` 对象。
- `isDom(value): boolean`：指定值是否为 JavaScript 内建的 DOM 对象。
- `isError(value): boolean`：指定值是否为 JavaScript 内建的 `Error` 类或其子类的实例。
- `isEvent(value): boolean`：指定值是否为 JavaScript 内建的事件对象，即 JavaScript 内建的 `Event` 类或其子类的实例。
- `isFile(value): boolean`：指定值是否为 JavaScript 文件 API 对象，即 `File`、`Blob`、`FileList`、
  `FileReader` 或 `FileReaderSync` 类的实例。该函数会在确定类型之前检查当前环境中 File API 功能的可用性。
- `isFunction(value): boolean`：指定值是否为 JavaScript 函数对象。注意，异步函数也被视为函数对象，
  但生成器函数不是。要检测生成器函数，请使用 `isGenerator(value)` 函数。
- `isGenerator(value): boolean`：指定值是否为 JavaScript 生成器对象或生成器函数。
- `isGlobalObject(value): boolean`: 指定值是否为[全局对象]。
- `isHtmlElement(value): boolean`：指定值是否为 JavaScript DOM 元素。它会检查特定的 DOM 元素属性，
  如 'innerHTML'、'ownerDocument'、'style'、'attributes' 和 'nodeValue'。
- `isIntl(value): boolean`：指定值是否为 JavaScript `Intl` 命名空间下的内建对象。
- `isIterator(value): boolean`：指定值是否为迭代器对象，即具有 `next()` 方法的对象。
- `isMap(value): boolean`：指定值是否为 JavaScript 内建的 `Map` 对象。此函数可以正确地跨不同的 JavaScript 领域工作。
- `isNonNullObject(value): boolean`：指定值是否为非空对象，即值类型为 'object' 且不为 null。
- `isNumber(value): boolean`：指定值是否为 JavaScript 内建的 `number` 基本类型或 `Number` 对象。
- `isNumeric(value): boolean`：指定值是否为 JavaScript 内建的 `number` 基本类型、`bigint` 基本类型或 `Number` 对象。
- `isPlainObject(value): boolean`：指定值是否为纯 JavaScript 对象。如果对象是通过 `{}`、`new Object()`
  或 `Object.create(null)` 创建的，并且没有自定义的 `Symbol.toStringTag` 或 `Symbol.iterator`，
  则被认为是纯对象。
- `isPrimitive(value): boolean`：指定值是否为 JavaScript 基本值。基本值是不是对象且没有方法的值。
  在 JavaScript 中，有 7 种基本数据类型：string、number、bigint、boolean、undefined、symbol 和 null。
- `isPrimitiveWrapper(value): boolean`：指定值是否为 JavaScript 基本包装对象。
  基本包装对象是基本数据类型的对象形式。在 JavaScript 中，有 5 种基本包装类型：String 对象、
  Number 对象、BigInt 对象、Boolean 对象和 Symbol 对象。
- `isPromise(value): boolean`：指定值是否为 JavaScript 内建的 `Promise` 对象。
- `isRegExp(value): boolean`：指定值是否为 JavaScript 内建的 `RegExp` 对象。
- `isSet(value): boolean`：指定值是否为 JavaScript 内建的 `Set` 对象。此函数可以正确地跨不同的 JavaScript 领域工作。
- `isString(value): boolean`：指定值是否为 JavaScript 内建的 `string` 基本类型或 `String` 对象。
- `isSymbol(value): boolean`：指定值是否为 JavaScript 内建的 `Symbol` 基本类型。
- `isTypedArray(value): boolean`：指定值是否为 JavaScript 内建的类型化数组对象。
- `isWeak(value): boolean`：指定值是否为 JavaScript 内建的弱引用对象，即 `WeakMap`、`WeakSet` 或 `WeakRef` 对象。
- `isWeakCollection(value): boolean`：指定值是否为 JavaScript 内建的弱引用集合对象，即 `WeakMap`、或 `WeakSet` 对象。

以下代码展示了如何使用这些函数：
```js
import { isTypedArray } from '@qubit-ltd/type-detect';

function foo(value) {
  if (isTypedArray(value)) {
    ...
  } else {
    ...
  }
}
```

## <span id="why-not-instanceof">为何不使用`instanceof`</span>

虽然`instanceof`是JavaScript内置的运算符，看起来是一种简单的类型检测解决方案，但它存在几个显著的局限性，使其不适合可靠的类型检测：

1. **跨域不兼容**：当对象在不同的JavaScript域（realm）中创建时（例如，来自iframe、跨窗口边界或来自vm上下文），`instanceof`运算符会失效。这是因为`instanceof`检查对象的原型链是否包含构造函数的原型属性，但来自不同域的构造函数具有不同的原型对象。

2. **原型链操作**：由于原型链可以在运行时修改，`instanceof`检查可能被欺骗或破坏，导致结果不可靠。

3. **原始值问题**：`instanceof`对原始值不能按预期工作。例如，`"string" instanceof String`返回`false`，尽管它显然是一个字符串。

4. **子类问题**：在处理子类时，`instanceof`对子类和父类都会返回`true`，这可能不是您需要的确切类型信息。

本库采用更健壮的方法来可靠地检测类型，如检查内部属性、使用`Symbol.toStringTag`以及检查对象的结构和行为，这些方法在不同的执行上下文中都能一致地工作。

## <span id="cross-realm">跨域类型检测</span>

JavaScript中的"域"（realm）本质上是一个隔离的执行环境，具有自己的全局对象和一组内置对象。域可以以各种形式存在：

- 浏览器中的不同框架（iframe）
- 浏览器中的不同窗口
- 工作线程（Web Workers、Service Workers）
- 通过API如Node.js的`vm`模块创建的单独执行上下文

当对象在域之间传递时，它们保持其行为，但失去了与接收域中构造函数的直接原型链连接。这意味着跨域边界的传统类型检查如`instanceof`会失败。

例如：

```js
// 在主域中
const mainArray = new Array();
console.log(mainArray instanceof Array); // true

// 在iframe或vm上下文（不同域）中
const frameArray = iframe.contentWindow.Array();
console.log(frameArray instanceof Array); // false - 因为它是一个不同的Array构造函数！
```

[type-detect]库通过使用在域边界上可靠工作的技术解决了这个问题。正如我们的测试套件所示，无论创建位置，库的函数都能正确识别类型：

```js
// 来自is-typed-array.test.js
test('should works across realms', () => {
  expect(isTypedArray(runInNewContext('new Int8Array(2)'))).toBe(true);
  expect(isTypedArray(runInNewContext('new Uint8Array(2)'))).toBe(true);
  // ...以及其他类型化数组
});
```

这种跨域能力在现代Web应用程序中至关重要，因为它们经常在窗口边界、iframe或工作者上下文之间传递对象。通过使用对象的内在特性而不是它们的原型链，[type-detect]确保在所有JavaScript环境中进行一致且可靠的类型检测。

## <span id="why-no-proxy">为何无法检测`Proxy`类型</span>

在JavaScript的设计中，`Proxy`对象的主要目的之一是允许开发者自定义对象操作的行为，它能代理另一个对象（即目标对象）。
`Proxy`最关键的特性之一便是其透明性——对于外部代码而言，除非代理对象被设计为有意暴露自身，
否则很难区别一个`Proxy`对象与其所代理的目标对象。这主要是因为`Proxy`能够拦截并重定义几乎所有的对象基础操作，
包括但不限于属性读取、设置以及属性的枚举。

因此，当使用[type-detect]等库尝试获取对象的类型信息时，由于`Proxy`的这种透明化特征，这些库仅能处理并"看见"最终的操作结果，
而无法直接判断这些操作是否受到`Proxy`的拦截。如果`Proxy`完美模仿了其所代理的目标对象的行为，那么就不存在一个可靠的方法，
通过操作结果来断定该对象是否为一个`Proxy`。简言之，`Proxy`的设计哲学在于使其自身对外部观察几乎不可见，因此，
除非代理对象特意通过某些拦截行为暴露其身份，否则即便是专门用于获取类型信息的库也无法确切判断一个对象是否为`Proxy`。
这样的设计极大地增强了`Proxy`的强大性和灵活性，但同时也意味着直接通过外部检测来识别`Proxy`对象将是一个挑战。

## <span id="test-coverage">测试覆盖率</span>

本库在整个代码库中保持100%测试覆盖率：

- **语句覆盖率**：100%
- **分支覆盖率**：100%
- **函数覆盖率**：100%
- **行覆盖率**：100%

某些文件，如 `global-object.js`，由于依赖运行时评估和环境特定行为，存在特定的测试挑战。这些通过专门的测试包装器处理，在保持生产代码完整性的同时验证功能。

测试套件包括对所有导出函数和常量的全面测试，包括边缘情况和环境特定功能，如可能在所有 JavaScript 环境中都不可用的 File API 组件。

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]中提出问题或提交拉取请求。

## <span id="license">许可证</span>

[type-detect] 在 Apache 2.0 许可下分发。有关更多详情，请参阅[LICENSE](LICENSE)文件。


[type-detect]: https://npmjs.com/package/@qubit-ltd/type-detect
[typeinfo]: https://npmjs.com/package/@qubit-ltd/typeinfo
[全局对象]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub仓库]: https://github.com/qubit-ltd/js-type-detect