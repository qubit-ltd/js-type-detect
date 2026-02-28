////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Whether the `Symbol` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_EXISTS = (typeof Symbol !== 'undefined');

/**
 * Whether the `Symbol.iterator` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_ITERATOR_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.iterator !== 'undefined'));

/**
 * Whether the `Symbol.matchAll` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_MATCH_ALL_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.matchAll !== 'undefined'));

/**
 * Whether the `Symbol.toStringTag` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_TO_STRING_TAG_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.toStringTag !== 'undefined'));

/**
 * Whether the `bigint` primitive and the `BigInt` function exists.
 *
 * @type {boolean}
 */
export const BIGINT_EXISTS = (typeof BigInt !== 'undefined');

/**
 * Whether the `RegExp` class exists.
 *
 * @type {boolean}
 */
export const REGEXP_EXISTS = (typeof RegExp !== 'undefined');

/**
 * Whether the `Array.isArray()` function exists.
 *
 * @type {boolean}
 */
export const ARRAY_ISARRAY_EXISTS = (typeof Array.isArray === 'function');

/**
 * Whether the `AggregateError` class exists.
 *
 * @type {boolean}
 */
export const AGGREGATEERROR_EXISTS = (typeof AggregateError !== 'undefined');

/**
 * Whether the `InternalError` class exists.
 *
 * @type {boolean}
 */
export const INTERNALERROR_EXISTS = (typeof InternalError !== 'undefined');

/**
 * Whether the `Map` class exists.
 *
 * @type {boolean}
 */
export const MAP_EXISTS = (typeof Map !== 'undefined');

/**
 * Whether the `Set` class exists.
 *
 * @type {boolean}
 */
export const SET_EXISTS = (typeof Set !== 'undefined');

/**
 * Whether the `WeakMap` class exists.
 *
 * @type {boolean}
 */
export const WEAKMAP_EXISTS = (typeof WeakMap !== 'undefined');

/**
 * Whether the `WeakSet` class exists.
 *
 * @type {boolean}
 */
export const WEAKSET_EXISTS = (typeof WeakSet !== 'undefined');

/**
 * Whether the `Int8Array` class exists.
 *
 * @type {boolean}
 */
export const INT8ARRAY_EXISTS = (typeof Int8Array !== 'undefined');

/**
 * Whether the `Uint8Array` class exists.
 *
 * @type {boolean}
 */
export const UINT8ARRAY_EXISTS = (typeof Uint8Array !== 'undefined');

/**
 * Whether the `Uint8ClampedArray` class exists.
 *
 * @type {boolean}
 */
export const UINT8CLAMPEDARRAY_EXISTS = (typeof Uint8ClampedArray !== 'undefined');

/**
 * Whether the `Int16Array` class exists.
 *
 * @type {boolean}
 */
export const INT16ARRAY_EXISTS = (typeof Int16Array !== 'undefined');

/**
 * Whether the `Uint16Array` class exists.
 *
 * @type {boolean}
 */
export const UINT16ARRAY_EXISTS = (typeof Uint16Array !== 'undefined');

/**
 * Whether the `Int32Array` class exists.
 *
 * @type {boolean}
 */
export const INT32ARRAY_EXISTS = (typeof Int32Array !== 'undefined');

/**
 * Whether the `Uint32Array` class exists.
 *
 * @type {boolean}
 */
export const UINT32ARRAY_EXISTS = (typeof Uint32Array !== 'undefined');

/**
 * Whether the `BigInt64Array` class exists.
 *
 * @type {boolean}
 */
export const BIGINT64ARRAY_EXISTS = (typeof BigInt64Array !== 'undefined');

/**
 * Whether the `BigUint64Array` class exists.
 *
 * @type {boolean}
 */
export const BIGUINT64ARRAY_EXISTS = (typeof BigUint64Array !== 'undefined');

/**
 * Whether the `Float32Array` class exists.
 *
 * @type {boolean}
 */
export const FLOAT32ARRAY_EXISTS = (typeof Float32Array !== 'undefined');

/**
 * Whether the `Float64Array` class exists.
 *
 * @type {boolean}
 */
export const FLOAT64ARRAY_EXISTS = (typeof Float64Array !== 'undefined');

/**
 * Whether the `ArrayBuffer` class exists.
 *
 * @type {boolean}
 */
export const ARRAYBUFFER_EXISTS = (typeof ArrayBuffer !== 'undefined');

/**
 * Whether the `SharedArrayBuffer` class exists.
 *
 * @type {boolean}
 */
export const SHAREDARRAYBUFFER_EXISTS = (typeof SharedArrayBuffer !== 'undefined');

/**
 * Whether the `DataView` class exists.
 *
 * @type {boolean}
 */
export const DATAVIEW_EXISTS = (typeof DataView !== 'undefined');

/**
 * Whether the `WeakRef` class exists.
 *
 * @type {boolean}
 */
export const WEAKREF_EXISTS = (typeof WeakRef !== 'undefined');

/**
 * Whether the `Promise` class exists.
 *
 * @type {boolean}
 */
export const PROMISE_EXISTS = (typeof Promise !== 'undefined');

/**
 * Whether the `Map.prototype.entries()` method exists.
 *
 * @type {boolean}
 */
export const MAP_ENTRIES_EXISTS = (MAP_EXISTS && (typeof Map.prototype.entries === 'function'));

/**
 * Whether the `Set.prototype.entries()` method exists.
 *
 * @type {boolean}
 */
export const SET_ENTRIES_EXISTS = (SET_EXISTS && (typeof Set.prototype.entries === 'function'));

/**
 * Whether the `Map.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const MAP_ITERATOR_EXISTS = (MAP_EXISTS && (typeof Map.prototype.entries === 'function'));

/**
 * Whether the `Set.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const SET_ITERATOR_EXISTS = (SET_EXISTS && (typeof Set.prototype.entries === 'function'));

/**
 * Whether the `Array.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const ARRAY_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && typeof Array.prototype[Symbol.iterator] === 'function');

/**
 * Whether the `String.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const STRING_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && (typeof String.prototype[Symbol.iterator] === 'function'));

/**
 * Whether the `RegExp.prototype[Symbol.matchAll]()` method exists.
 *
 * @type {boolean}
 */
export const REGEXP_ITERATOR_EXISTS = (REGEXP_EXISTS && SYMBOL_MATCH_ALL_EXISTS && (typeof RegExp.prototype[Symbol.matchAll] === 'function'));

/**
 * Whether the `Intl` object exists.
 *
 * @type {boolean}
 */
export const INTL_EXISTS = (typeof Intl !== 'undefined');

/**
 * Whether the `Intl.Collator` class exists.
 *
 * @type {boolean}
 */
export const INTL_COLLATOR_EXISTS = (INTL_EXISTS && (typeof Intl.Collator !== 'undefined'));

/**
 * Whether the `Intl.DateTimeFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_DATETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DateTimeFormat !== 'undefined'));

/**
 * Whether the `Intl.DisplayNames` class exists.
 *
 * @type {boolean}
 */
export const INTL_DISPLAYNAMES_EXISTS = (INTL_EXISTS && (typeof Intl.DisplayNames !== 'undefined'));

/**
 * Whether the `Intl.DurationFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_DURATIONFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DurationFormat !== 'undefined'));

/**
 * Whether the `Intl.ListFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_LISTFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.ListFormat !== 'undefined'));

/**
 * Whether the `Intl.Locale` class exists.
 *
 * @type {boolean}
 */
export const INTL_LOCALE_EXISTS = (INTL_EXISTS && (typeof Intl.Locale !== 'undefined'));

/**
 * Whether the `Intl.NumberFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_NUMBERFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.NumberFormat !== 'undefined'));

/**
 * Whether the `Intl.PluralRules` class exists.
 *
 * @type {boolean}
 */
export const INTL_PLURALRULES_EXISTS = (INTL_EXISTS && (typeof Intl.PluralRules !== 'undefined'));

/**
 * Whether the `Intl.RelativeTimeFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_RELATIVETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.RelativeTimeFormat !== 'undefined'));

/**
 * Whether the `Intl.Segmenter` class exists.
 *
 * @type {boolean}
 */
export const INTL_SEGMENTER_EXISTS = (INTL_EXISTS && (typeof Intl.Segmenter !== 'undefined'));

/**
 * Whether the `Intl.Segmenter.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const INTL_SEGMENTER_ITERATOR_EXISTS = (INTL_SEGMENTER_EXISTS && SYMBOL_ITERATOR_EXISTS);

/**
 * Whether the `FinalizationRegistry` class exists.
 *
 * @type {boolean}
 */
export const FINALIZATIONREGISTRY_EXISTS = (typeof FinalizationRegistry === 'function');

/**
 * Whether the `Atomics` object exists.
 *
 * @type {boolean}
 */
export const ATOMICS_EXISTS = (typeof Atomics === 'object');

/**
 * Whether the `Reflect` object exists.
 *
 * @type {boolean}
 */
export const REFLECT_EXISTS = (typeof Reflect === 'object');

/**
 * Whether the `Proxy` class exists.
 *
 * @type {boolean}
 */
export const PROXY_EXISTS = (typeof Proxy === 'function');

/**
 * Whether the `Node` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_NODE_EXISTS = (typeof Node === 'function');

/**
 * Whether the `HTMLCollection` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const HTML_COLLECTION_EXISTS = (typeof HTMLCollection === 'function');

/**
 * Whether the `NodeList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const NODE_LIST_EXISTS = (typeof NodeList === 'function');

/**
 * Whether the `NamedNodeMap` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const NAMED_NODE_MAP_EXISTS = (typeof NamedNodeMap === 'function');

/**
 * Whether the `NodeIterator` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const NODE_ITERATOR_EXISTS = (typeof NodeIterator === 'function');

/**
 * Whether the `TreeWalker` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const TREE_WALKER_EXISTS = (typeof TreeWalker === 'function');

/**
 * Whether the `AbstractRange` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const ABSTRACT_RANGE_EXISTS = (typeof AbstractRange === 'function');

/**
 * Whether the `MutationRecord` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const MUTATION_RECORD_EXISTS = (typeof MutationRecord === 'function');

/**
 * Whether the `MutationObserver` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const MUTATION_OBSERVER_EXISTS = (typeof MutationObserver === 'function');

/**
 * Whether the `DOMTokenList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_TOKEN_LIST_EXISTS = (typeof DOMTokenList === 'function');

/**
 * Whether the `DOMRect` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_RECT_EXISTS = (typeof DOMRect === 'function');

/**
 * Whether the `DOMPointReadOnly` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_POINT_READONLY_EXISTS = (typeof DOMPointReadOnly === 'function');

/**
 * Whether the `DOMParser` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_PARSER_EXISTS = (typeof DOMParser === 'function');

/**
 * Whether the `DOMImplementation` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_IMPLEMENTATION_EXISTS = (typeof DOMImplementation === 'function');

/**
 * Whether the `DOMException` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const DOM_EXCEPTION_EXISTS = (typeof DOMException === 'function');

/**
 * Whether the `TimeRanges` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const TIME_RANGES_EXISTS = (typeof TimeRanges === 'function');

/**
 * Whether the `CSS` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const CSS_EXISTS = (typeof CSS === 'function');

/**
 * Whether the `CSSRule` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const CSS_RULE_EXISTS = (typeof CSSRule === 'function');

/**
 * Whether the `CSSRuleList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const CSS_RULE_LIST_EXISTS = (typeof CSSRuleList === 'function');

/**
 * Whether the `CSSStyleDeclaration` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const CSS_STYLE_DECLARATION_EXISTS = (typeof CSSStyleDeclaration === 'function');

/**
 * Whether the `StyleSheet` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const STYLE_SHEET_EXISTS = (typeof StyleSheet === 'function');

/**
 * Whether the `StyleSheetList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const STYLE_SHEET_LIST_EXISTS = (typeof StyleSheetList === 'function');

/**
 * Whether the `FontFace` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const FONT_FACE_EXISTS = (typeof FontFace === 'function');

/**
 * Whether the `FontFaceSet` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const FONT_FACE_SET_EXISTS = (typeof FontFaceSet === 'function');

/**
 * Whether the `MediaList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const MEDIA_LIST_EXISTS = (typeof MediaList === 'function');

/**
 * Whether the `MediaQueryList` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const MEDIA_QUERY_LIST_EXISTS = (typeof MediaQueryList === 'function');

/**
 * Whether the `Screen` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const SCREEN_EXISTS = (typeof Screen === 'function');

/**
 * Whether the `AbortSignal` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const ABORT_SIGNAL_EXISTS = (typeof AbortSignal === 'function');

/**
 * Whether the `AbortController` class in the DOM API exists.
 *
 * @type {boolean}
 */
export const ABORT_CONTROLLER_EXISTS = (typeof AbortController === 'function');

/**
 * Whether the `Event` class in the Web API exists.
 *
 * @type {boolean}
 */
export const EVENT_EXISTS = (typeof Event === 'function');

/**
 * Whether the `File` class in the Web API exists.
 *
 * @type {boolean}
 */
export const FILE_EXISTS = (typeof File === 'function');

/**
 * Whether the `Blob` class in the Web API exists.
 *
 * @type {boolean}
 */
export const BLOB_EXISTS = (typeof Blob === 'function');

/**
 * Whether the `FileList` class in the Web API exists.
 *
 * @type {boolean}
 */
export const FILE_LIST_EXISTS = (typeof FileList === 'function');

/**
 * Whether the `FileReader` class in the Web API exists.
 *
 * @type {boolean}
 */
export const FILE_READER_EXISTS = (typeof FileReader === 'function');

/**
 * Whether the `FileReaderSync` class in the Web API exists.
 *
 * @type {boolean}
 */
export const FILE_READER_SYNC_EXISTS = (typeof FileReaderSync === 'function');

/**
 * Whether the async function exists.
 *
 * @type {boolean}
 */

// eslint-disable-next-line func-names, no-empty-function
export const ASYNC_FUNCTION_EXISTS = ((async function () {}).constructor.name === 'AsyncFunction');
