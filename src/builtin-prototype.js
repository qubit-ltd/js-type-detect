////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  AGGREGATEERROR_EXISTS,
  ARRAYBUFFER_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGINT_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  DATAVIEW_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  INTERNALERROR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ENTRIES_EXISTS,
  MAP_EXISTS,
  PROMISE_EXISTS,
  REGEXP_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ENTRIES_EXISTS,
  SET_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  STRING_ITERATOR_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
  SYMBOL_EXISTS,
} from './feature-detect';

// Define prototypes for various ES5+ built-in objects

export const SymbolPrototype = (SYMBOL_EXISTS ? Symbol.prototype : undefined);
export const BigIntPrototype = (BIGINT_EXISTS ? BigInt.prototype : undefined);
export const RegExpPrototype = (REGEXP_EXISTS ? RegExp.prototype : undefined);

export const AggregateErrorPrototype = (AGGREGATEERROR_EXISTS ? AggregateError.prototype : undefined);
export const InternalErrorPrototype = (INTERNALERROR_EXISTS ? InternalError.prototype : undefined);

export const MapPrototype = (MAP_EXISTS ? Map.prototype : undefined);
export const SetPrototype = (SET_EXISTS ? Set.prototype : undefined);
export const WeakMapPrototype = (WEAKMAP_EXISTS ? WeakMap.prototype : undefined);
export const WeakSetPrototype = (WEAKSET_EXISTS ? WeakSet.prototype : undefined);

export const Int8ArrayPrototype = (INT8ARRAY_EXISTS ? Int8Array.prototype : undefined);
export const Uint8ArrayPrototype = (UINT8ARRAY_EXISTS ? Uint8Array.prototype : undefined);
export const Uint8ClampedArrayPrototype = (UINT8CLAMPEDARRAY_EXISTS ? Uint8ClampedArray.prototype : undefined);
export const Int16ArrayPrototype = (INT16ARRAY_EXISTS ? Int16Array.prototype : undefined);
export const Uint16ArrayPrototype = (UINT16ARRAY_EXISTS ? Uint16Array.prototype : undefined);
export const Int32ArrayPrototype = (INT32ARRAY_EXISTS ? Int32Array.prototype : undefined);
export const Uint32ArrayPrototype = (UINT32ARRAY_EXISTS ? Uint32Array.prototype : undefined);
export const BigInt64ArrayPrototype = (BIGINT64ARRAY_EXISTS ? BigInt64Array.prototype : undefined);
export const BigUint64ArrayPrototype = (BIGUINT64ARRAY_EXISTS ? BigUint64Array.prototype : undefined);
export const Float32ArrayPrototype = (FLOAT32ARRAY_EXISTS ? Float32Array.prototype : undefined);
export const Float64ArrayPrototype = (FLOAT64ARRAY_EXISTS ? Float64Array.prototype : undefined);

export const ArrayBufferPrototype = (ARRAYBUFFER_EXISTS ? ArrayBuffer.prototype : undefined);
export const SharedArrayBufferPrototype = (SHAREDARRAYBUFFER_EXISTS ? SharedArrayBuffer.prototype : undefined);
export const DataViewPrototype = (DATAVIEW_EXISTS ? DataView.prototype : undefined);

export const WeakRefPrototype = (WEAKREF_EXISTS ? WeakRef.prototype : undefined);
export const PromisePrototype = (PROMISE_EXISTS ? Promise.prototype : undefined);

export const MapIteratorPrototype = (MAP_ENTRIES_EXISTS ? Object.getPrototypeOf(new Map().entries()) : undefined);
export const SetIteratorPrototype = (SET_ENTRIES_EXISTS ? Object.getPrototypeOf(new Set().entries()) : undefined);
export const ArrayIteratorPrototype = (ARRAY_ITERATOR_EXISTS && Object.getPrototypeOf([][Symbol.iterator]()));
export const StringIteratorPrototype = (STRING_ITERATOR_EXISTS && Object.getPrototypeOf(''[Symbol.iterator]()));
export const RegExpIteratorPrototype = (REGEXP_ITERATOR_EXISTS && Object.getPrototypeOf(/^[a-z]/[Symbol.matchAll]()));

export const IntlCollatorPrototype = (INTL_COLLATOR_EXISTS ? Intl.Collator.prototype : undefined);
export const IntlDateTimeFormatPrototype = (INTL_DATETIMEFORMAT_EXISTS ? Intl.DateTimeFormat.prototype : undefined);
export const IntlDisplayNamesPrototype = (INTL_DISPLAYNAMES_EXISTS ? Intl.DisplayNames.prototype : undefined);
export const IntlDurationFormatPrototype = (INTL_DURATIONFORMAT_EXISTS ? Intl.DurationFormat.prototype : undefined);
export const IntlListFormatPrototype = (INTL_LISTFORMAT_EXISTS ? Intl.ListFormat.prototype : undefined);
export const IntlLocalePrototype = (INTL_LOCALE_EXISTS ? Intl.Locale.prototype : undefined);
export const IntlNumberFormatPrototype = (INTL_NUMBERFORMAT_EXISTS ? Intl.NumberFormat.prototype : undefined);
export const IntlPluralRulesPrototype = (INTL_PLURALRULES_EXISTS ? Intl.PluralRules.prototype : undefined);

export const IntlRelativeTimeFormatPrototype = (INTL_RELATIVETIMEFORMAT_EXISTS
  ? Intl.RelativeTimeFormat.prototype
  : undefined);
export const IntlSegmenterPrototype = (INTL_SEGMENTER_EXISTS ? Intl.Segmenter.prototype : undefined);
export const IntelSegmentIteratorPrototype = (INTL_SEGMENTER_ITERATOR_EXISTS
  ? Object.getPrototypeOf(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment('')[Symbol.iterator]())
  : undefined);

export const FinalizationRegistryPrototype = (FINALIZATIONREGISTRY_EXISTS ? FinalizationRegistry.prototype : undefined);
