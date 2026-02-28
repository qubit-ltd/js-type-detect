////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import HTML_CANVAS_TYPE_NAMES from './html-canvas-type-names';
import HTML_DRAG_AND_DROP_TYPE_NAMES from './html-drag-and-drop-type-names';
import HTML_ELEMENT_TYPE_NAMES from './html-element-type-names';
import HTML_MEDIA_TYPE_NAMES from './html-media-type-names';

/**
 * The array of type names for HTML DOM objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API">The HTML DOM API</a>
 */
const HTML_DOM_TYPE_NAMES = [
  ...HTML_ELEMENT_TYPE_NAMES,
  // Web app and browser integration interfaces
  'BarProp',
  'Navigator',
  'Window',
  // Deprecated web app and browser integration interfaces
  'External',
  // Obsolete web app and browser integration interfaces
  'Plugin',
  'PluginArray',
  // Form support interfaces
  'FormDataEvent',
  'HTMLFormControlsCollection',
  'HTMLOptionsCollection',
  'RadioNodeList',
  'ValidityState',
  ...HTML_CANVAS_TYPE_NAMES,
  ...HTML_MEDIA_TYPE_NAMES,
  ...HTML_DRAG_AND_DROP_TYPE_NAMES,
  // Page history interfaces
  'BeforeUnloadEvent',
  'HashChangeEvent',
  'History',
  'Location',
  'PageRevealEvent',
  'PageSwapEvent',
  'PageTransitionEvent',
  'PopStateEvent',
  // Web Components interfaces
  'CustomElementRegistry',
  // Miscellaneous and supporting interfaces
  'DOMStringList',
  'DOMStringMap',
  'ErrorEvent',
  'HTMLAllCollection',
  'MimeType',
  'MimeTypeArray',
  'PromiseRejectionEvent',
];

export default HTML_DOM_TYPE_NAMES;
