////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import vm from 'node:vm';
import { isBlob } from '../src';
import { BLOB_EXISTS } from '../src/feature-detect';

/**
 * Unit test of the `isBlob()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBlob()` function', () => {
  if (BLOB_EXISTS) {
    it('Blob', () => {
      const blob = new Blob([''], { type: 'text/plain' });
      expect(isBlob(blob)).toBe(true);
    });

    it('mock Blob with correct toString tag', () => {
      const mockBlob = {};
      Object.defineProperty(mockBlob, Symbol.toStringTag, { value: 'Blob' });
      expect(Object.prototype.toString.call(mockBlob)).toBe('[object Blob]');
      expect(isBlob(mockBlob)).toBe(true);
    });
  }

  it('should handle environments without Blob', () => {
    // 保存原始 Blob
    const originalBlob = global.Blob;
    try {
      // 模拟 Blob 不存在的环境
      delete global.Blob;
      expect(typeof Blob).toBe('undefined');
      expect(isBlob({})).toBe(false);
    } finally {
      // 恢复原始 Blob
      global.Blob = originalBlob;
    }
  });

  it('should return false for non-Blob objects', () => {
    expect(isBlob({})).toBe(false);
    expect(isBlob(null)).toBe(false);
    expect(isBlob(undefined)).toBe(false);
    expect(isBlob(0)).toBe(false);
    expect(isBlob(false)).toBe(false);
    expect(isBlob('')).toBe(false);
    expect(isBlob([])).toBe(false);
    if (typeof Map !== 'undefined') {
      expect(isBlob(new Map())).toBe(false);
    }
    if (typeof Set !== 'undefined') {
      expect(isBlob(new Set())).toBe(false);
    }
    expect(isBlob(new Date())).toBe(false);
    expect(isBlob(() => {})).toBe(false);
  });

  test('should works across realms without Blob', () => {
    expect(isBlob(vm.runInNewContext('new WeakSet()'))).toBe(false);
    expect(isBlob(vm.runInNewContext('{}'))).toBe(false);
    expect(isBlob(vm.runInNewContext('[]'))).toBe(false);
    expect(isBlob(vm.runInNewContext('0'))).toBe(false);
    expect(isBlob(vm.runInNewContext('false'))).toBe(false);
    expect(isBlob(vm.runInNewContext('null'))).toBe(false);
    expect(isBlob(vm.runInNewContext('undefined'))).toBe(false);
  });

  if (BLOB_EXISTS) {
    test('should works across realms with Blob', () => {
      const context = {
        Blob,
      };
      const blob = vm.runInNewContext('new Blob([\'\'], { type: \'text/plain\' })', context);
      expect(isBlob(blob)).toBe(true);
    });
  }
});
