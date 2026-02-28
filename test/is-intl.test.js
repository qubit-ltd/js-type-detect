////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isIntl } from '../src';
import {
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
} from '../src/feature-detect';

/**
 * Unit test of the `isIntl()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isIntl()` function', () => {
  if (INTL_COLLATOR_EXISTS) {
    test('Intl.Collator', () => {
      expect(isIntl(new Intl.Collator('zh'))).toBe(true);
    });
  }
  if (INTL_DATETIMEFORMAT_EXISTS) {
    test('Intl.DateTimeFormat', () => {
      expect(isIntl(new Intl.DateTimeFormat('zh'))).toBe(true);
    });
  }
  if (INTL_DISPLAYNAMES_EXISTS) {
    test('Intl.DisplayNames', () => {
      expect(isIntl(new Intl.DisplayNames('zh', { type: 'region' }))).toBe(true);
    });
  }
  if (INTL_DURATIONFORMAT_EXISTS) {
    test('Intl.DurationFormat', () => {
      expect(isIntl(new Intl.DurationFormat('zh', { style: 'long' }))).toBe(true);
    });
  }
  if (INTL_LISTFORMAT_EXISTS) {
    test('Intl.ListFormat', () => {
      expect(isIntl(new Intl.ListFormat('zh'))).toBe(true);
    });
  }
  if (INTL_LOCALE_EXISTS) {
    test('Intl.Locale', () => {
      expect(isIntl(new Intl.Locale('zh'))).toBe(true);
    });
  }
  if (INTL_NUMBERFORMAT_EXISTS) {
    test('Intl.NumberFormat', () => {
      expect(isIntl(new Intl.NumberFormat('zh'))).toBe(true);
    });
  }
  if (INTL_PLURALRULES_EXISTS) {
    test('Intl.PluralRules', () => {
      expect(isIntl(new Intl.PluralRules('zh'))).toBe(true);
    });
  }
  if (INTL_RELATIVETIMEFORMAT_EXISTS) {
    test('Intl.RelativeTimeFormat', () => {
      expect(isIntl(new Intl.RelativeTimeFormat('zh'))).toBe(true);
    });
  }
  if (INTL_SEGMENTER_EXISTS) {
    test('Intl.Segmenter', () => {
      expect(isIntl(new Intl.Segmenter('zh'))).toBe(true);
    });
  }
  test('non-Intl object', () => {
    expect(isIntl({ abc: 123 })).toBe(false);
    expect(isIntl(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isIntl(0)).toBe(false);
    expect(isIntl('abc')).toBe(false);
    expect(isIntl(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isIntl(null)).toBe(false);
    expect(isIntl(undefined)).toBe(false);
  });

  test('should works across realms', () => {
    if (INTL_COLLATOR_EXISTS) {
      expect(isIntl(runInNewContext('new Intl.Collator("zh")'))).toBe(true);
    }
    if (INTL_NUMBERFORMAT_EXISTS) {
      expect(isIntl(runInNewContext('new Intl.NumberFormat("zh")'))).toBe(true);
    }
    if (INTL_DATETIMEFORMAT_EXISTS) {
      expect(isIntl(runInNewContext('new Intl.DateTimeFormat("zh")'))).toBe(true);
    }

    expect(isIntl(runInNewContext('{}'))).toBe(false);
    expect(isIntl(runInNewContext('[]'))).toBe(false);
    expect(isIntl(runInNewContext('0'))).toBe(false);
    expect(isIntl(runInNewContext('false'))).toBe(false);
    expect(isIntl(runInNewContext('null'))).toBe(false);
    expect(isIntl(runInNewContext('undefined'))).toBe(false);
  });
});
