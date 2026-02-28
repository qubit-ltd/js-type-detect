////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import EVENT_TYPE_NAMES from '../src/impl/event-type-names';
import isEvent from '../src/is-event';

describe('Test the `isEvent()` function', () => {
  it('returns true for DOM events', () => {
    const clickEvent = new Event('click');
    expect(isEvent(clickEvent)).toBe(true);

    const mouseEvent = new MouseEvent('mousemove');
    expect(isEvent(mouseEvent)).toBe(true);

    const keyEvent = new KeyboardEvent('keydown');
    expect(isEvent(keyEvent)).toBe(true);

    const customEvent = new CustomEvent('custom');
    expect(isEvent(customEvent)).toBe(true);
  });

  it('returns true for objects with event-like interface', () => {
    const fakeEvent = {
      type: 'click',
      target: document.body,
      currentTarget: document.body,
      preventDefault() {},
      stopPropagation() {},
    };
    expect(isEvent(fakeEvent)).toBe(true);
  });

  it('returns false for objects missing event properties', () => {
    const missingType = {
      // missing type
      target: document.body,
      currentTarget: document.body,
      preventDefault() {},
      stopPropagation() {},
    };
    expect(isEvent(missingType)).toBe(false);

    const wrongTypeType = {
      type: 123, // not a string
      target: document.body,
      currentTarget: document.body,
      preventDefault() {},
      stopPropagation() {},
    };
    expect(isEvent(wrongTypeType)).toBe(false);

    const missingTarget = {
      type: 'click',
      // missing target
      currentTarget: document.body,
      preventDefault() {},
      stopPropagation() {},
    };
    expect(isEvent(missingTarget)).toBe(false);

    const missingCurrentTarget = {
      type: 'click',
      target: document.body,
      // missing currentTarget
      preventDefault() {},
      stopPropagation() {},
    };
    expect(isEvent(missingCurrentTarget)).toBe(false);

    const missingPreventDefault = {
      type: 'click',
      target: document.body,
      currentTarget: document.body,
      // missing preventDefault
      stopPropagation() {},
    };
    expect(isEvent(missingPreventDefault)).toBe(false);

    const preventDefaultNotFunction = {
      type: 'click',
      target: document.body,
      currentTarget: document.body,
      preventDefault: 'not a function',
      stopPropagation() {},
    };
    expect(isEvent(preventDefaultNotFunction)).toBe(false);

    const missingStopPropagation = {
      type: 'click',
      target: document.body,
      currentTarget: document.body,
      preventDefault() {},
      // missing stopPropagation
    };
    expect(isEvent(missingStopPropagation)).toBe(false);

    const stopPropagationNotFunction = {
      type: 'click',
      target: document.body,
      currentTarget: document.body,
      preventDefault() {},
      stopPropagation: 'not a function',
    };
    expect(isEvent(stopPropagationNotFunction)).toBe(false);
  });

  it('returns true for objects with matching toString values', () => {
    // Create a mock object with toString value matching known event values
    const mockEvent = {};
    const originalToString = Object.prototype.toString;

    EVENT_TYPE_NAMES.forEach((typeName) => {
      // eslint-disable-next-line no-extend-native
      Object.prototype.toString = function mockToString() {
        if (this === mockEvent) {
          return `[object ${typeName}]`;
        }
        return originalToString.call(this);
      };

      expect(isEvent(mockEvent)).toBe(true);
    });

    // Restore original toString

    // eslint-disable-next-line no-extend-native
    Object.prototype.toString = originalToString;
  });

  it('returns false for plain objects', () => {
    expect(isEvent({})).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isEvent([])).toBe(false);
  });

  it('returns false for primitive values', () => {
    expect(isEvent(123)).toBe(false);
    expect(isEvent('event')).toBe(false);
    expect(isEvent(true)).toBe(false);
    expect(isEvent(Symbol('event'))).toBe(false);
    expect(isEvent(BigInt(123))).toBe(false);
  });

  it('returns false for null and undefined', () => {
    expect(isEvent(null)).toBe(false);
    expect(isEvent(undefined)).toBe(false);
  });

  it('returns false for non-event objects', () => {
    expect(isEvent(new Date())).toBe(false);
    expect(isEvent(new Map())).toBe(false);
    expect(isEvent(new Set())).toBe(false);
    expect(isEvent(new Error())).toBe(false);
    expect(isEvent(() => {})).toBe(false);
    expect(isEvent(/regex/)).toBe(false);
  });

  it('works with cross-realm events', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    try {
      // Create an event in the iframe's context
      const iframeEvent = iframe.contentWindow.document.createEvent('Event');
      iframeEvent.initEvent('test', true, true);

      expect(isEvent(iframeEvent)).toBe(true);
    } finally {
      document.body.removeChild(iframe);
    }
  });
});
