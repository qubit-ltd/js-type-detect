////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2026.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The array of type names for DOM objects.
 *
 * @type {string[]}
 * @author Haixing Hu
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">Document Object Model (DOM)</a>
 */
const DOM_TYPE_NAMES = [
  // DOM interfaces
  'AbortController',
  'AbortSignal',
  'AbstractRange',
  'Attr',
  'CDATASection',
  'CharacterData',
  'Comment',
  'CustomEvent',
  'Document',
  'DocumentFragment',
  'DocumentType',
  'DOMError', // deprecated
  'DOMException',
  'DOMImplementation',
  'DOMParser',
  'DOMPoint',
  'DOMPointReadOnly',
  'DOMRect',
  'DOMTokenList',
  'Element',
  'Event',
  'EventTarget',
  'HTMLCollection',
  'MutationObserver',
  'MutationRecord',
  'NamedNodeMap',
  'Node',
  'NodeIterator',
  'NodeList',
  'ProcessingInstruction',
  'Range',
  'StaticRange',
  'Text',
  'TextDecoder',
  'TextEncoder',
  'TimeRanges',
  'TreeWalker',
  'XMLDocument',
  // Obsolete DOM interfaces
  'DOMConfiguration',
  'DOMErrorHandler',
  'DOMImplementationList',
  'DOMImplementationRegistry',
  'DOMImplementationSource',
  'DOMLocator',
  'DOMObject',
  'DOMSettableTokenList',
  'DOMUserData',
  'ElementTraversal',
  'Entity',
  'EntityReference',
  'NameList',
  'Notation',
  'TypeInfo',
  'UserDataHandler',
];

export default DOM_TYPE_NAMES;
