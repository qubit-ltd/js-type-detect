////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import qubitConfig from '@qubit-ltd/eslint-config';

export default [
  ...qubitConfig,
  {
    languageOptions: {
      globals: {
        BigInt: 'readonly',
        BigInt64Array: 'readonly',
        BigUint64Array: 'readonly',
        AggregateError: 'readonly',
        InternalError: 'readonly',
        SharedArrayBuffer: 'readonly',
        WeakRef: 'readonly',
        FinalizationRegistry: 'readonly',
        globalThis: 'readonly',
        // Browser globals
        Blob: 'readonly',
        Event: 'readonly',
        File: 'readonly',
        DOMException: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        typeDetectGlobalObject: 'readonly',
      },
    },
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        jest: true,
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        BigInt: 'readonly',
        BigInt64Array: 'readonly',
        BigUint64Array: 'readonly',
        AggregateError: 'readonly',
        InternalError: 'readonly',
        SharedArrayBuffer: 'readonly',
        WeakRef: 'readonly',
        FinalizationRegistry: 'readonly',
        globalThis: 'readonly',
        // Browser globals
        Blob: 'readonly',
        Event: 'readonly',
        File: 'readonly',
        DOMException: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        typeDetectGlobalObject: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
      'import/namespace': 'off',
      'func-names': 'off',
      'max-classes-per-file': 'off',
      'no-unused-vars': ['warn', { varsIgnorePattern: '.*' }],
      'prefer-rest-params': 'off',
      'no-empty-function': 'off',
    },
  },
];
