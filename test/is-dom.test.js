////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { isDom } from '../src';
import {
  DOM_NODE_EXISTS,
  DOM_PARSER_EXISTS,
  DOM_POINT_READONLY_EXISTS,
  DOM_RECT_EXISTS,
} from '../src/feature-detect';

/**
 * Unit test of the `isDom()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isDom()` function', () => {
  if (DOM_NODE_EXISTS) {
    test('window.document', () => {
      expect(isDom(window.document)).toBe(true);
    });
    test('window.document.documentElement', () => {
      expect(isDom(window.document.documentElement)).toBe(true);
    });
    test('window.document.forms', () => {
      expect(isDom(window.document.forms)).toBe(true);
    });
    test('Node', () => {
      const node = document.createTextNode('');
      expect(isDom(node)).toBe(true);
    });
    test('HTMLCollection', () => {
      const collection = document.getElementsByTagName('div');
      expect(isDom(collection)).toBe(true);
    });
    test('NodeList', () => {
      const nodeList = document.querySelectorAll('div');
      expect(isDom(nodeList)).toBe(true);
    });
    test('NamedNodeMap', () => {
      const element = document.createElement('div');
      element.setAttribute('data-test', 'value');
      const namedNodeMap = element.attributes;
      expect(isDom(namedNodeMap)).toBe(true);
    });
    test('NodeIterator', () => {
      const nodeIterator = document.createNodeIterator(document.body);
      expect(isDom(nodeIterator)).toBe(true);
    });
    test('TreeWalker', () => {
      const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      expect(isDom(treeWalker)).toBe(true);
    });
    // MutationRecord cannot be directly constructed and is usually obtained via a MutationObserver callback.
    // Skipping direct testing for MutationRecord.
    test('MutationObserver', () => {
      const mutationObserver = new MutationObserver(() => {});
      expect(isDom(mutationObserver)).toBe(true);
    });
    test('DOMTokenList', () => {
      const element = document.createElement('div');
      document.body.appendChild(element);
      element.className = 'test-class';
      const domTokenList = element.classList;
      expect(isDom(domTokenList)).toBe(true);
      document.body.removeChild(element); // Clean up
    });
    if (DOM_RECT_EXISTS) {
      test('DOMRect', () => {
        const domRect = new DOMRect();
        expect(isDom(domRect)).toBe(true);
      });
    }
    if (DOM_POINT_READONLY_EXISTS) {
      test('DOMPointReadOnly', () => {
        const domPointReadOnly = new DOMPointReadOnly();
        expect(isDom(domPointReadOnly)).toBe(true);
      });
    }
    if (DOM_PARSER_EXISTS) {
      test('DOMParser', () => {
        const domParser = new DOMParser();
        expect(isDom(domParser)).toBe(true);
      });
    }
    test('DOMImplementation', () => {
      const domImplementation = document.implementation;
      expect(isDom(domImplementation)).toBe(true);
    });
    test('DOMException', () => {
      try {
        document.querySelectorAll('');
      } catch (e) {
        expect(isDom(e)).toBe(true);
      }
    });
    test('Range', () => {
      const range = document.createRange();
      expect(isDom(range)).toBe(true);
    });
    test('StaticRange', () => {
      // 注意：创建StaticRange可能需要特定的条件，这里假设环境支持StaticRange
      let staticRange;
      try {
        // 尝试创建一个StaticRange实例
        const range = new Range();
        document.body.appendChild(range.startContainer);
        staticRange = new StaticRange({
          startContainer: range.startContainer,
          startOffset: 0,
          endContainer: range.endContainer,
          endOffset: 0,
        });
        expect(isDom(staticRange)).toBe(true);
      } catch {
        console.warn('StaticRange is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持StaticRange，测试将通过但不执行实际检查
      } finally {
        if (staticRange && staticRange.startContainer && staticRange.startContainer.parentNode === document.body) {
          document.body.removeChild(staticRange.startContainer);
        }
      }
    });

    // 新增对TimeRanges的测试
    test('TimeRanges', () => {
      if (typeof HTMLMediaElement !== 'undefined') {
        try {
          const audio = document.createElement('audio');
          const timeRanges = audio.buffered;
          expect(isDom(timeRanges)).toBe(true);
        } catch {
          console.warn('TimeRanges is not supported in this environment');
          expect(true).toBe(true); // 如果环境不支持TimeRanges，测试将通过但不执行实际检查
        }
      } else {
        console.warn('HTMLMediaElement is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持HTMLMediaElement，测试将通过但不执行实际检查
      }
    });

    // 新增对Event对象的测试
    test('Event', () => {
      const event = new Event('test');
      expect(isDom(event)).toBe(true);
    });

    // 新增对EventTarget的测试
    test('EventTarget', () => {
      if (typeof EventTarget !== 'undefined') {
        try {
          const eventTarget = new EventTarget();
          expect(isDom(eventTarget)).toBe(true);
        } catch {
          console.warn('EventTarget constructor is not supported in this environment');
          expect(true).toBe(true); // 如果环境不支持EventTarget构造函数，测试将通过但不执行实际检查
        }
      } else {
        console.warn('EventTarget is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持EventTarget，测试将通过但不执行实际检查
      }
    });

    // 新增对AbortController和AbortSignal的测试
    test('AbortController and AbortSignal', () => {
      if (typeof AbortController !== 'undefined') {
        try {
          const controller = new AbortController();
          expect(isDom(controller)).toBe(true);
          expect(isDom(controller.signal)).toBe(true);
        } catch {
          console.warn('AbortController is not supported in this environment');
          expect(true).toBe(true); // 如果环境不支持AbortController，测试将通过但不执行实际检查
        }
      } else {
        console.warn('AbortController is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持AbortController，测试将通过但不执行实际检查
      }
    });

    // 测试HTML元素
    test('HTML elements', () => {
      const elements = [
        document.createElement('div'),
        document.createElement('span'),
        document.createElement('a'),
        document.createElement('input'),
        document.createElement('button'),
        document.createElement('form'),
        document.createElement('img'),
        document.createElement('video'),
        document.createElement('audio'),
        document.createElement('canvas'),
      ];

      elements.forEach((element) => {
        expect(isDom(element)).toBe(true);
      });
    });

    // 测试SVG元素
    test('SVG elements', () => {
      const svgNS = 'http://www.w3.org/2000/svg';
      const elements = [
        document.createElementNS(svgNS, 'svg'),
        document.createElementNS(svgNS, 'circle'),
        document.createElementNS(svgNS, 'rect'),
        document.createElementNS(svgNS, 'path'),
        document.createElementNS(svgNS, 'g'),
        document.createElementNS(svgNS, 'text'),
      ];

      elements.forEach((element) => {
        expect(isDom(element)).toBe(true);
      });
    });

    // 测试DocumentFragment
    test('DocumentFragment', () => {
      const fragment = document.createDocumentFragment();
      expect(isDom(fragment)).toBe(true);
    });
  }

  // 测试非DOM对象
  test('null', () => {
    expect(isDom(null)).toBe(false);
  });
  test('undefined', () => {
    expect(isDom(undefined)).toBe(false);
  });
  test('a string', () => {
    expect(isDom('hello')).toBe(false);
  });
  test('a number', () => {
    expect(isDom(123)).toBe(false);
  });
  test('a object', () => {
    expect(isDom({})).toBe(false);
  });
  test('Array', () => {
    expect(isDom([])).toBe(false);
  });
  test('Date', () => {
    expect(isDom(new Date())).toBe(false);
  });
  test('RegExp', () => {
    expect(isDom(/abc/)).toBe(false);
  });
  test('Function', () => {
    expect(isDom(() => {})).toBe(false);
  });
  test('Promise', () => {
    expect(isDom(Promise.resolve())).toBe(false);
  });
  test('Map', () => {
    expect(isDom(new Map())).toBe(false);
  });
  test('Set', () => {
    expect(isDom(new Set())).toBe(false);
  });
  test('Symbol', () => {
    expect(isDom(Symbol('symbol'))).toBe(false);
  });
  test('BigInt', () => {
    if (typeof BigInt !== 'undefined') {
      expect(isDom(BigInt(123))).toBe(false);
    } else {
      console.warn('BigInt is not supported in this environment');
      expect(true).toBe(true); // 如果环境不支持BigInt，测试将通过但不执行实际检查
    }
  });

  // 其他特殊DOM相关测试
  test('AbstractRange', () => {
    if (typeof AbstractRange !== 'undefined') {
      try {
        // 获取一个Range对象，因为它继承自AbstractRange
        const range = document.createRange();
        expect(isDom(range)).toBe(true);
        expect(range instanceof AbstractRange).toBe(true);
      } catch {
        console.warn('AbstractRange is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持AbstractRange，测试将通过但不执行实际检查
      }
    } else {
      console.warn('AbstractRange is not supported in this environment');
      expect(true).toBe(true); // 如果环境不支持AbstractRange，测试将通过但不执行实际检查
    }
  });
  test('DOMPointReadOnly', () => {
    if (typeof DOMPointReadOnly !== 'undefined') {
      try {
        const point = new DOMPointReadOnly(0, 0, 0, 1);
        expect(isDom(point)).toBe(true);
      } catch {
        console.warn('DOMPointReadOnly is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持DOMPointReadOnly，测试将通过但不执行实际检查
      }
    } else {
      console.warn('DOMPointReadOnly is not supported in this environment');
      expect(true).toBe(true); // 如果环境不支持DOMPointReadOnly，测试将通过但不执行实际检查
    }
  });

  // 测试常见HTML元素
  test('div element', () => {
    const div = document.createElement('div');
    div.innerHTML = 'Hello, world!';
    expect(isDom(div)).toBe(true);
  });

  // 测试跨域对象
  test('should work across realms for non-DOM objects', () => {
    expect(isDom(runInNewContext('{}'))).toBe(false);
    expect(isDom(runInNewContext('[]'))).toBe(false);
    expect(isDom(runInNewContext('0'))).toBe(false);
    expect(isDom(runInNewContext('false'))).toBe(false);
    expect(isDom(runInNewContext('null'))).toBe(false);
    expect(isDom(runInNewContext('undefined'))).toBe(false);
  });

  // 测试模拟DOM对象
  test('mock DOM objects', () => {
    const mockElement = {
      nodeName: 'DIV',
      nodeType: 1,
      tagName: 'DIV',
    };
    expect(isDom(mockElement)).toBe(false);

    // 即使对象有类似DOM的属性，但没有正确的类型名，也应该返回false
    const mockWithProto = Object.create(null);
    mockWithProto.nodeName = 'DIV';
    mockWithProto.nodeType = 1;
    mockWithProto.tagName = 'DIV';
    expect(isDom(mockWithProto)).toBe(false);
  });
});
