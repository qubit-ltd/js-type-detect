# type-detect

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/type-detect.svg)](https://npmjs.com/package/@qubit-ltd/type-detect)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/qubit-ltd/js-type-detect/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/qubit-ltd/js-type-detect/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/qubit-ltd/js-type-detect/badge.svg?branch=master)](https://coveralls.io/github/qubit-ltd/js-type-detect?branch=master)


[type-detect] is a lightweight JavaScript library that provides utilities
for detecting the type of JavaScript variables. It is designed to be
compatible with the latest ECMAScript standards.

If you want to get more detailed type information of a variable, you can use the
[typeinfo] library, which is built on top of [type-detect].

## Highlights

- **Cross-realm compatibility**: Correctly identifies types across different JavaScript realms (iframes, windows, workers)
- **Comprehensive type detection**: 30+ specialized functions for precise type checking of JavaScript built-ins
- **Extensive Web API support**: Detects 300+ browser-specific objects, including DOM, HTML DOM, SVG DOM, and CSSOM elements
- **Lightweight**: Small footprint with minimal dependencies
- **100% test coverage**: Thorough testing ensures reliability in all environments
- **Modern JavaScript support**: Compatible with the latest ECMAScript features and standards
- **Environment awareness**: Safely checks for environment-specific types (DOM, CSSOM, File API)
- **Robust detection methods**: Uses internal object characteristics rather than unreliable prototype checks

## Comprehensive Web API Type Detection

This library offers extensive support for detecting browser-specific object types, making it especially valuable for web applications. The type detection covers the following major web API categories:

### DOM API Support
The library can identify over 50 DOM API interfaces from the core [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), including:

- Core elements: `Document`, `Node`, `Element`, `Text`
- Events: `Event`, `CustomEvent`
- DOM abstractions: `Range`, `NodeList`, `HTMLCollection` 
- Parsing utilities: `DOMParser`
- Modern APIs: `MutationObserver`, `TextEncoder`/`TextDecoder`

### HTML DOM Support
We support comprehensive detection of over 100 types from the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API), including:

- All HTML elements: `HTMLDivElement`, `HTMLAnchorElement`, `HTMLImageElement`, etc.
- Form elements: `HTMLFormElement`, `HTMLInputElement`, `HTMLSelectElement`
- Media elements: `HTMLVideoElement`, `HTMLAudioElement`
- Canvas interfaces: `CanvasRenderingContext2D`, `ImageBitmap`
- Browser interfaces: `Window`, `Navigator`, `History`
- Drag and drop interfaces: `DataTransfer`, `DragEvent`

### SVG DOM Support
The library provides detection for over 100 types from the [SVG API](https://developer.mozilla.org/en-US/docs/Web/API/SVG_API), including:

- SVG elements: `SVGSVGElement`, `SVGPathElement`, `SVGCircleElement`
- Animation elements: `SVGAnimateElement`, `SVGAnimateTransformElement`
- Filter elements: `SVGFilterElement` and all filter effect elements
- Data types: `SVGLength`, `SVGTransform`, `SVGAnimatedNumber`

### CSSOM Support
We support detection for over 70 types from the [CSS Object Model (CSSOM)](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model), including:

- Core interfaces: `CSS`, `CSSStyleDeclaration`, `CSSRule`, `StyleSheet`
- Specific rule types: `CSSStyleRule`, `CSSMediaRule`, `CSSKeyframesRule`
- Font interfaces: `FontFace`, `FontFaceSet`
- Modern CSS Typed OM: `CSSStyleValue`, `CSSUnitValue`, `CSSTransformValue`
- Animation and transition: `AnimationEvent`, `TransitionEvent`

Unlike many type-checking libraries that focus primarily on JavaScript's built-in types, [type-detect] offers this extensive browser object detection while maintaining reliable cross-realm compatibility and a small package size.

## Comparison with sindresorhus/is

While [sindresorhus/is](https://github.com/sindresorhus/is) is an excellent type-checking library that inspired this project, `type-detect` differentiates itself in several ways:

- **Apache 2.0 License**: More permissive for enterprise and commercial applications
- **Specialized detection functions**: More granular type checking (e.g., `isWeakCollection`, `isGenerator`, `isNumeric`)
- **Stronger cross-realm support**: Extensively tested for cross-realm compatibility
- **DOM and browser API focus**: Enhanced detection for browser-specific objects (File API, CSSOM, DOM elements)
- **Core function architecture**: All type checks build upon a central `getTypeName` function for consistency
- **Explanatory documentation**: Detailed explanations for cross-realm detection and limitations (like Proxy detection)

Both libraries are excellent choices for type checking, with `type-detect` placing additional emphasis on browser environments and specialized JavaScript type detection.

## Acknowledgments

This project draws inspiration from the excellent [sindresorhus/is](https://github.com/sindresorhus/is) library created by Sindre Sorhus. We'd like to express our gratitude for his pioneering work in JavaScript type checking utilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Comprehensive Web API Type Detection](#comprehensive-web-api-type-detection)
  - [DOM API Support](#dom-api-support)
  - [HTML DOM Support](#html-dom-support)
  - [SVG DOM Support](#svg-dom-support)
  - [CSSOM Support](#cssom-support)
- [Why Not Use `instanceof`](#why-not-instanceof)
- [Cross-Realm Type Detection](#cross-realm)
- [Why `Proxy` Type Cannot be Detected](#why-no-proxy)
- [Test Coverage](#test-coverage)
- [Contributing](#contributing)
- [License](#license)

## <span id="installation">Installation</span>

You can install [type-detect] via `npm`:
```sh
npm install @qubit-ltd/type-detect
```
or via `yarn`:
```bash
yarn add @qubit-ltd/type-detect
```
## <span id="usage">Usage</span>

The library provides the following functions for type detection:

- `getTypeName(value): string`: gets the type name of a value. This is a utility function
  that returns the name of the type of the given value. It handles special cases like null,
  undefined, HTML elements, and properly identifies objects with custom `Symbol.toStringTag`
  properties. It's the core function used by many type detection functions in this library.
- `isArguments(value): boolean`: whether the specified value is the JavaScript
  built-in `arguments` object, i.e., an array-like object representing the
  arguments passed to a function.
- `isArray(value): boolean`: whether the specified value is a JavaScript
  built-in array.
- `isBigInt(value): boolean`: whether the specified value is a JavaScript
  built-in `bigint` primitive.
- `isBlob(value): boolean`: whether the specified value is a JavaScript
  built-in `Blob` object.
- `isBoolean(value): boolean`: whether the specified value is a JavaScript
  built-in `boolean` primitive or `Boolean` object.
- `isBuffer(value): boolean`: whether the specified value is a JavaScript
  built-in `ArrayBuffer` or `SharedArrayBuffer` object.
- `isBuiltInClass(Class): boolean`: whether the specified class is a JavaScript
  built-in class.
- `isCollection(value): boolean`: whether the specified value is a JavaScript
  built-in collection object, i.e., a `Map` or `Set` object. Note that the
  `WeakMap` and `WeakSet` objects are not considered normal collection objects,
  and they can be detected by the `isWeakCollection(value)` function.
- `isConsole(value): boolean`: whether the specified value is a JavaScript
  built-in `console` object.
- `isCssom(value): boolean`: whether the specified value is a JavaScript
  built-in `CSSOM` object.
- `isDataView(value): boolean`: whether the specified value is a JavaScript
  built-in `DataView` object.
- `isDate(value): boolean`: whether the specified value is a JavaScript
  built-in `Date` object.
- `isDom(value): boolean`: whether the specified value is a JavaScript
  built-in DOM object.
- `isError(value): boolean`: whether the specified value is an instance of the
  JavaScript built-in `Error` class or its subclass.
- `isEvent(value): boolean`: whether the specified value is a JavaScript
  built-in event object, i.e., an instance of the JavaScript built-in `Event`
  class or its subclass.
- `isFile(value): boolean`: whether the specified value is a JavaScript File API 
  object, i.e., an instance of the `File`, `Blob`, `FileList`, `FileReader`, 
  or `FileReaderSync` class. This function will check for the availability of File API 
  features in the current environment before making the type determination.
- `isFunction(value): boolean`: whether the specified value is a JavaScript
  function object. Note that async functions are also considered function objects,
  but generator functions are not. To detect generator functions, use the
  `isGenerator(value)` function.
- `isGenerator(value): boolean`: whether the specified value is a JavaScript
  generator object or a generator function.
- `isGlobalObject(value): boolean`: whether the specified value is the [global object].
- `isHtmlElement(value): boolean`: whether the specified value is a JavaScript
  DOM element. It checks for specific DOM element properties like 'innerHTML',
  'ownerDocument', 'style', 'attributes', and 'nodeValue'.
- `isIntl(value): boolean`: whether the specified value is a JavaScript
  built-in object under the `Intl` namespace.
- `isIterator(value): boolean`: whether the specified value is an iterator
  object, i.e., an object with a `next()` method.
- `isMap(value): boolean`: whether the specified value is a JavaScript
  built-in `Map` object. This function works correctly across different JavaScript realms.
- `isNonNullObject(value): boolean`: whether the specified value is a non-null
  object, i.e., the value is of type 'object' and is not null.
- `isNumber(value): boolean`: whether the specified value is a JavaScript
  built-in `number` primitive, or a `Number` object.
- `isNumeric(value): boolean`: whether the specified value is a JavaScript
  built-in `number` primitive, or `bigint` primitive, or `Number` object.
- `isPlainObject(value): boolean`: whether the specified value is a plain JavaScript
  object. An object is considered plain if it's created by `{}`, `new Object()`, or
  `Object.create(null)`, and doesn't have custom `Symbol.toStringTag` or `Symbol.iterator`.
- `isPrimitive(value): boolean`: whether the specified value is a JavaScript
  primitive value. A primitive value is a value that is not an object and has no methods.
  In JavaScript, there are 7 primitive data types: string, number, bigint, boolean,
  undefined, symbol, and null.
- `isPrimitiveWrapper(value): boolean`: whether the specified value is a JavaScript
  primitive wrapper object. A primitive wrapper object is an object form of primitive
  data types. In JavaScript, there are 5 primitive wrapper types: String object,
  Number object, BigInt object, Boolean object, and Symbol object.
- `isPromise(value): boolean`: whether the specified value is a JavaScript
  built-in `Promise` object.
- `isRegExp(value): boolean`: whether the specified value is a JavaScript
  built-in `RegExp` object.
- `isSet(value): boolean`: whether the specified value is a JavaScript
  built-in `Set` object. This function works correctly across different JavaScript realms.
- `isString(value): boolean`: whether the specified value is a JavaScript
  built-in `string` primitive, or `String` object.
- `isSymbol(value): boolean`: whether the specified value is a JavaScript
  built-in `Symbol` primitive.
- `isTypedArray(value): boolean`: whether the specified value is a JavaScript
  built-in typed array object.
- `isWeak(value): boolean`: whether the specified value is a JavaScript
  built-in weak referenced object, i.e., a `WeakMap`, `WeakSet`, or `WeakRef`
  object.
- `isWeakCollection(value): boolean`: whether the specified value is a JavaScript
  built-in weak reference collection object, i.e., a `WeakMap`, or `WeakSet` object.

The following code shows how to use these functions:
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

## <span id="why-not-instanceof">Why Not Use `instanceof`</span>

While `instanceof` is a built-in JavaScript operator that appears to be a simple solution for type checking, it has several significant limitations that make it unsuitable for reliable type detection:

1. **Cross-realm incompatibility**: The `instanceof` operator fails when objects are created in different JavaScript realms (e.g., from iframes, across window boundaries, or from vm contexts). This is because `instanceof` checks if the prototype chain of an object contains the prototype property of a constructor, but constructors from different realms have different prototype objects.

2. **Prototype chain manipulation**: Since prototype chains can be modified at runtime, `instanceof` checks can be spoofed or broken, leading to unreliable results.

3. **Primitive values**: `instanceof` doesn't work as expected with primitive values. For example, `"string" instanceof String` returns `false` even though it's clearly a string.

4. **Subclass issues**: When dealing with subclasses, `instanceof` will return `true` for both the subclass and parent class, which may not be the exact type information you need.

This library takes a more robust approach by using various techniques to detect types reliably, such as examining internal properties, using `Symbol.toStringTag`, and checking the object's structure and behavior, which work consistently across different execution contexts.

## <span id="cross-realm">Cross-Realm Type Detection</span>

A JavaScript "realm" is essentially an isolated execution environment with its own global object and set of built-in objects. Realms can exist in various forms:

- Different frames (iframes) in a browser
- Different windows in a browser
- Worker threads (Web Workers, Service Workers)
- Separate execution contexts created via APIs like Node.js's `vm` module

When objects are passed between realms, they maintain their behavior but lose their direct prototype chain connection to constructors in the receiving realm. This means traditional type checking with `instanceof` fails across realm boundaries.

For example:

```js
// In main realm
const mainArray = new Array();
console.log(mainArray instanceof Array); // true

// In iframe or vm context (different realm)
const frameArray = iframe.contentWindow.Array();
console.log(frameArray instanceof Array); // false - because it's a different Array constructor!
```

The [type-detect] library solves this problem by using techniques that work reliably across realm boundaries. As demonstrated in our test suite, the library's functions correctly identify types regardless of where they were created:

```js
// From is-typed-array.test.js
test('should works across realms', () => {
  expect(isTypedArray(runInNewContext('new Int8Array(2)'))).toBe(true);
  expect(isTypedArray(runInNewContext('new Uint8Array(2)'))).toBe(true);
  // ...and other typed arrays
});
```

This cross-realm capability is crucial in modern web applications that frequently pass objects between window boundaries, iframes, or worker contexts. By using intrinsic characteristics of objects rather than their prototype chains, [type-detect] ensures consistent and reliable type detection in all JavaScript environments.

## <span id="why-no-proxy">Why `Proxy` Type Cannot be Detected</span>

One of the primary purposes of `Proxy` objects in JavaScript is to allow developers 
to customize the behavior of object operations, acting as a delegate for another 
object (referred to as the target object). One of the key features of `Proxy` is 
its transparency—externally, unless the proxy object is intentionally designed 
to reveal itself, it is challenging to distinguish a `Proxy` object from the 
target object it represents. This is largely because `Proxy` can intercept and
redefine almost all fundamental operations of an object, including but not 
limited to property access, assignment, and enumeration.

Therefore, when libraries like [type-detect] attempt to retrieve type information 
of an object, the inherent transparency of `Proxy` means these libraries can 
only process and "see" the final outcomes of operations, without direct means
to identify whether these operations were intercepted by a `Proxy`. If a 
`Proxy` flawlessly mimics the behavior of its target object, there exists no 
reliable method to determine from the operation outcomes whether an object is 
a `Proxy`. In essence, the design philosophy of `Proxy` aims to make it nearly
invisible to external observation, making it impossible for even libraries 
specialized in fetching type information to definitively ascertain if an object 
is a `Proxy`, unless the proxy object deliberately exposes its identity through 
certain intercepting behaviors. This design significantly enhances the power
and flexibility of `Proxy`, but it also means that directly detecting `Proxy`
objects through external observation presents a challenge.

## <span id="test-coverage">Test Coverage</span>

This library maintains 100% test coverage across its codebase:

- **Statement Coverage**: 100%
- **Branch Coverage**: 100%
- **Function Coverage**: 100%
- **Line Coverage**: 100%

Some files, such as `global-object.js`, have specific testing challenges due to their reliance on runtime evaluations and environment-specific behavior. These are handled through specialized test wrappers that verify the functionality while maintaining the integrity of the production code.

The test suite includes comprehensive tests for all exported functions and constants, including edge cases and environment-specific features like File API components that may not be available in all JavaScript environments.

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free to raise an issue or submit a pull request in the [GitHub repository].

## <span id="license">License</span>

[type-detect] is distributed under the Apache 2.0 license. See the [LICENSE](LICENSE) file for more details.


[type-detect]: https://npmjs.com/package/@qubit-ltd/type-detect
[typeinfo]: https://npmjs.com/package/@qubit-ltd/typeinfo
[global object]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/qubit-ltd/js-type-detect