/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 413);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 26);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 5 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 43),
    getValue = __webpack_require__(/*! ./_getValue */ 46);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 21);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 9 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 55);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 13);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 34),
    objectToString = __webpack_require__(/*! ./_objectToString */ 35);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 12 */
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 13 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 14 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 15 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 17 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 38),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 39),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 40),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 41),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 42);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 18 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isKey = __webpack_require__(/*! ./_isKey */ 25),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 63),
    toString = __webpack_require__(/*! ./toString */ 19);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 19 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 66);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 20 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 21 */
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 22 */
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5),
    root = __webpack_require__(/*! ./_root */ 3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 23 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 47),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 54),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 56),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 57),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 58);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 24 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 18),
    toKey = __webpack_require__(/*! ./_toKey */ 14);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 25 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 26 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 33)))

/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObject = __webpack_require__(/*! ./isObject */ 6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 28 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 29 */,
/* 30 */
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 24);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 35 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 39 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 40 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 41 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 42 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 43 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 27),
    isMasked = __webpack_require__(/*! ./_isMasked */ 44),
    isObject = __webpack_require__(/*! ./isObject */ 6),
    toSource = __webpack_require__(/*! ./_toSource */ 28);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 44 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 45);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 45 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 46 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 47 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 48),
    ListCache = __webpack_require__(/*! ./_ListCache */ 17),
    Map = __webpack_require__(/*! ./_Map */ 22);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 48 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 49),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 50),
    hashGet = __webpack_require__(/*! ./_hashGet */ 51),
    hashHas = __webpack_require__(/*! ./_hashHas */ 52),
    hashSet = __webpack_require__(/*! ./_hashSet */ 53);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 49 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 50 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 51 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 52 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 53 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 54 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 55 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 56 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 57 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 58 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 64);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 64 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 65);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 65 */
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 66 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 20),
    isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 67 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/*!*********************************************!*\
  !*** ./src/stores/twitter/prepare-query.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);


function prepareQuery(type, data) {
    var additionalData = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data, { encode: false });
    var query = '/c9-blocks/get_twitter_' + type + '/' + (additionalData ? '?' + additionalData : '');

    return query;
}

/***/ }),
/* 226 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ 67);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 227 */
/*!***************************************!*\
  !*** ./src/stores/twitter/actions.js ***!
  \***************************************/
/*! exports provided: apiFetch, setTwitterFeed, setTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["apiFetch"] = apiFetch;
/* harmony export (immutable) */ __webpack_exports__["setTwitterFeed"] = setTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["setTwitterProfile"] = setTwitterProfile;
function apiFetch(request) {
	return {
		type: "API_FETCH",
		request: request
	};
}

function setTwitterFeed(query, feed) {
	return {
		type: "SET_TWITTER_FEED",
		query: query,
		feed: feed
	};
}

function setTwitterProfile(query, profile) {
	return {
		type: "SET_TWITTER_PROFILE",
		query: query,
		profile: profile
	};
}

/***/ }),
/* 228 */
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 426);


/***/ }),
/* 229 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar__ = __webpack_require__(/*! ./components/sidebar */ 428);
/**
 * Internal dependencies
 */
var updateCategory = wp.blocks.updateCategory;
var _wp$components = wp.components,
    G = _wp$components.G,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;

/**
 * Icon
 */

var logo = wp.element.createElement(
	SVG,
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 234.92 174.65" },
	wp.element.createElement(
		"defs",
		null,
		wp.element.createElement(
			"style",
			null,
			".cls-1{fill-rule:evenodd;fill:url(#linear-gradient);}"
		),
		wp.element.createElement(
			"linearGradient",
			{
				id: "linear-gradient",
				x1: "79.12",
				y1: "23.81",
				x2: "166.4",
				y2: "158.22",
				gradientUnits: "userSpaceOnUse"
			},
			wp.element.createElement("stop", { offset: "0", stopColor: "#61cae5" }),
			wp.element.createElement("stop", { offset: "0.12", stopColor: "#64c6e1" }),
			wp.element.createElement("stop", { offset: "0.25", stopColor: "#6dbad3" }),
			wp.element.createElement("stop", { offset: "0.39", stopColor: "#7ba7bd" }),
			wp.element.createElement("stop", { offset: "0.54", stopColor: "#8f8b9f" }),
			wp.element.createElement("stop", { offset: "0.68", stopColor: "#a96877" }),
			wp.element.createElement("stop", { offset: "0.83", stopColor: "#c93d48" }),
			wp.element.createElement("stop", { offset: "0.92", stopColor: "#df1f26" })
		)
	),
	wp.element.createElement(
		"title",
		null,
		"c9-feather-logo-icon"
	),
	wp.element.createElement(
		G,
		{ id: "Layer_2", "data-name": "Layer 2" },
		wp.element.createElement(
			G,
			{ id: "logo_gradient", "data-name": "logo gradient" },
			wp.element.createElement(Path, {
				className: "cls-1",
				d: "M47,138.06C40.37,123.9,40.84,36.41,83.54,22.4c0,0-15.64,7.29-10.12,27.45,7.2-13.68,20.33-37.22,57.77-43.46,24-2.89-13.15,1.1-6,22.22.24-8.88,59.41-45,108-19.81C246.43,104.69,177,110.06,177,110.06h0s14.95,2.38,23.83-.5c-9.12,39.84-63.13,42.14-63.13,42.14s20.51,5.11,34.92,2.47c-49.45,32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09,25.09,0,1,0-6-6.27L79.9,120.4l-2.23-3.25-30.59,21M183.72,33.74a16.25,16.25,0,1,1-18.84,13.17,16.24,16.24,0,0,1,18.84-13.17ZM54.17,148l-.39-.55.43.52,0,0Zm-34.43-6.55,8.45-5.5,5.5,8.44-8.44,5.5-5.51-8.44Zm-4.37,14.87-5.5-8.44,8.45-5.5,5.5,8.44-8.45,5.5ZM5.5,162.79,0,154.34l8.45-5.5,5.5,8.44L5.5,162.79Zm46.86-13.87L13.41,174.65,6.46,164.31,45,139.3l7.33,9.62Z"
			})
		)
	)
);

if (updateCategory) {
	updateCategory("c9-blocks", { icon: logo });
}







/***/ }),
/* 414 */
/*!**************************************************!*\
  !*** ./src/update-category/deregister-blocks.js ***!
  \**************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var unregisterBlockType = wp.blocks.unregisterBlockType;


var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		unregisterBlockType("core/verse");
		// unregisterBlockType("core/columns");
	});
}

/***/ }),
/* 415 */
/*!*************************************************!*\
  !*** ./src/update-category/register-filters.js ***!
  \*************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var addFilter = wp.hooks.addFilter;


function formatClassName(className) {
	var result = className.replace("wp-block-c9-blocks", "c9");
	return result;
}

addFilter("c9-blocks.editor.className", "c9-blocks/format-classname", formatClassName);
addFilter("c9-blocks.blocks.className", "c9-blocks/format-classname", formatClassName);

/***/ }),
/* 416 */
/*!************************************************!*\
  !*** ./src/update-category/register-styles.js ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// const { registerBlockStyle } = wp.blocks;

var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		// registerBlockStyle("core/button", {
		// 	name: "custom-button-style",
		// 	label: "My Button Style"
		// });
	});
}

/***/ }),
/* 417 */
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 418);


/***/ }),
/* 418 */
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 425);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),
/* 419 */
/*!***************************************!*\
  !*** ./src/stores/twitter/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { feeds: {}, profiles: {} };
	var action = arguments[1];

	switch (action.type) {
		case "SET_TWITTER_FEED":
			if (!state.feeds[action.query] && action.feed) {
				state.feeds[action.query] = action.feed;
			}
			break;
		case "SET_TWITTER_PROFILE":
			if (!state.profiles[action.query] && action.profile) {
				state.profiles[action.query] = action.profile;
			}
			break;
		// no default
	}

	return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),
/* 420 */
/*!*****************************************!*\
  !*** ./src/stores/twitter/selectors.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 225);


function getTwitterFeed(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("feed", data);

	return state.feeds[query];
}

function getTwitterProfile(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("profile", data);

	return state.profiles[query];
}

/***/ }),
/* 421 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 422);
var parse = __webpack_require__(/*! ./parse */ 423);
var formats = __webpack_require__(/*! ./formats */ 226);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 422 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 67);
var formats = __webpack_require__(/*! ./formats */ 226);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) { // eslint-disable-line func-name-matching
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint'; // eslint-disable-line valid-typeof
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 423 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 67);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 424 */
/*!****************************************!*\
  !*** ./src/stores/twitter/controls.js ***!
  \****************************************/
/*! exports provided: API_FETCH */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["API_FETCH"] = API_FETCH;
var _wp = wp,
    apiFetch = _wp.apiFetch;


function API_FETCH(_ref) {
	var request = _ref.request;

	return apiFetch(request).then(function (fetchedData) {
		if (fetchedData && fetchedData.success && fetchedData.response) {
			return fetchedData.response;
		}
		return false;
	});
}

/***/ }),
/* 425 */
/*!*****************************************!*\
  !*** ./src/stores/twitter/resolvers.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(/*! ./actions */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 225);


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterFeed),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterProfile);




function getTwitterFeed(data) {
	var query, feed;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterFeed$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("feed", data);
					_context.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					feed = _context.sent;
					return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterFeed"](query, feed));

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getTwitterProfile(data) {
	var query, profile;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterProfile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("profile", data);
					_context2.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					profile = _context2.sent;
					return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterProfile"](query, profile));

				case 5:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/***/ }),
/* 426 */
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 427);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 427 */
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 428 */
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_appender__ = __webpack_require__(/*! ../color-appender */ 431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__ = __webpack_require__(/*! ../../../assets/c9-feather-logo-gray.svg */ 437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_modal__ = __webpack_require__(/*! ../templates-modal */ 438);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    Dashicon = _wp$components.Dashicon;








var C9 = function (_Component) {
	_inherits(C9, _Component);

	function C9() {
		_classCallCheck(this, C9);

		var _this = _possibleConstructorReturn(this, (C9.__proto__ || Object.getPrototypeOf(C9)).apply(this, arguments));

		_this.state = {
			isModalOpen: false
		};
		return _this;
	}

	_createClass(C9, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var isModalOpen = this.state.isModalOpen;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					PluginSidebarMoreMenuItem,
					{
						icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__["a" /* default */], { style: { width: "20px", margin: "0 10px 0 6px" } }),
						target: "c9-blocks"
					},
					__("COVERT NINE Blocks", "c9-blocks")
				),
				wp.element.createElement(
					PluginSidebar,
					{
						name: "c9-blocks",
						id: "c9-blocks",
						title: __("COVERT NINE Blocks", "c9-blocks")
					},
					wp.element.createElement(
						PanelBody,
						{ className: "plugin-c9-panel" },
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "section-templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-schedule" }),
							__("Section Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "page-templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-editor-code" }),
							__("Page Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "saved-blocks" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-admin-settings" }),
							__("Saved Blocks", "c9-blocks")
						)
					),
					wp.element.createElement(
						PanelBody,
						null,
						wp.element.createElement(
							"h5",
							{ className: "components-base-control__label" },
							wp.element.createElement(
								"b",
								null,
								"Color Palette"
							)
						),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__color_appender__["a" /* default */], null)
					)
				),
				"section-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "sections"
				}) : "",
				"page-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "pages"
				}) : "",
				"saved-blocks" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "blocks"
				}) : ""
			);
		}
	}]);

	return C9;
}(Component);

registerPlugin("c9-blocks", {
	icon: wp.element.createElement(
		"div",
		{ className: "c9-plugin-icon" },
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__["a" /* default */], null)
	),
	render: C9
});

/***/ }),
/* 429 */
/*!********************************************!*\
  !*** ./src/components/sidebar/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 430);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 430 */
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/sidebar/editor.scss ***!
  \***********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg{display:block;height:16px}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg *{stroke:initial !important}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg [fill=\"#fff\"]{fill:#fff !important}.edit-post-pinned-plugins .components-icon-button .c9-plugin-icon span{margin:-2px}.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon span [fill=\"#fff\"]{fill:#555d66 !important}.plugin-c9-panel .plugin-c9-panel-button{display:block;width:100%;height:auto;padding:15px 10px;margin-bottom:16px;flex-shrink:0;overflow:hidden;color:inherit;text-align:center;cursor:pointer;background:none;border:1px solid;border-radius:4px;transition:0.2s color, 0.2s background-color, 0.2s border-color, 0.2s box-shadow}.plugin-c9-panel .plugin-c9-panel-button,.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{border-color:rgba(79,89,105,0.2);box-shadow:none}.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{color:#191e23;background-color:#f8f9f9}.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled{color:#191e23;border-color:#007fac;box-shadow:0 0 0 2px #00a0d2}.plugin-c9-panel .plugin-c9-panel-button span{display:block;margin:0 auto;margin-top:3px;text-align:center;height:24px}\n", ""]);


/***/ }),
/* 431 */
/*!************************************************!*\
  !*** ./src/components/color-appender/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(/*! lodash/get */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_palette__ = __webpack_require__(/*! ../custom-palette */ 434);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-undef */
/* eslint-disable camelcase */





var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
/**
 * Internal block libraries
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;

var ColorAppender = function (_Component) {
	_inherits(ColorAppender, _Component);

	function ColorAppender() {
		_classCallCheck(this, ColorAppender);

		var _this = _possibleConstructorReturn(this, (ColorAppender.__proto__ || Object.getPrototypeOf(ColorAppender)).apply(this, arguments));

		_this.saveConfig = _this.saveConfig.bind(_this);
		_this.saveC9Colors = _this.saveC9Colors.bind(_this);
		_this.saveColors = _this.saveColors.bind(_this);
		_this.kbColorUniqueID = -1;
		_this.state = {
			isSaving: false,
			c9Colors: c9_blocks_params.colors ? JSON.parse(c9_blocks_params.colors) : { palette: [], override: false },
			origColors: c9_blocks_params.orig_colors ? c9_blocks_params.orig_colors[0] : [],
			colors: ""
		};
		return _this;
	}

	_createClass(ColorAppender, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (!this.state.colors) {
				this.setState({ colors: this.props.baseColors });
			}

			this.kbColorUniqueID = this.state.c9Colors ? this.state.c9Colors.palette.length : 0;
		}
	}, {
		key: "saveConfig",
		value: function saveConfig() {
			var _this2 = this;

			if (false === this.state.isSaving) {
				this.setState({ isSaving: true });
				var config = this.state.c9Colors;
				var settingModel = new wp.api.models.Settings({
					c9_blocks_colors: JSON.stringify(config)
				});
				// eslint-disable-next-line no-unused-vars
				settingModel.save().then(function (response) {
					_this2.setState({ isSaving: false, c9Colors: config });
					c9_blocks_params.colors = JSON.stringify(config);
					_this2.props.updateSettings({ colors: _this2.state.colors });
				});
			}
		}
	}, {
		key: "saveC9Colors",
		value: function saveC9Colors(value, index) {
			var c9Colors = this.state.c9Colors;

			c9Colors.palette[index] = Object.assign({}, c9Colors[index], value);
			this.setState({
				c9Colors: c9Colors
			});
		}
	}, {
		key: "saveColors",
		value: function saveColors(value, index) {
			var colors = this.state.colors;

			colors[index] = value;

			this.setState({ colors: colors });
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    c9Colors = _state.c9Colors,
			    colors = _state.colors,
			    origColors = _state.origColors;


			var nonEditables = [];
			var editables = [];

			Array.from(this.state.colors).map(function (curr) {
				if (undefined !== curr.slug && "c9-palette" === curr.slug.substr(0, 10)) {
					editables.push(curr);
				} else {
					nonEditables.push(curr);
				}
			});

			return wp.element.createElement(
				"div",
				{ className: "c9-block-default-palette" },
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"Theme Colors."
					),
					nonEditables.map(function (curr) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(
								Tooltip,
								{
									text: curr.name ||
									// translators: %s: color hex code e.g: "#f00".
									sprintf(__("Color code: %s"), curr.color)
								},
								wp.element.createElement(
									"div",
									{
										className: "components-color-palette__item",
										style: { color: curr.color }
									},
									wp.element.createElement(Dashicon, { icon: "lock" })
								)
							)
						);
					})
				),
				wp.element.createElement("hr", null),
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"C9 Block Colors."
					),
					editables.map(function (curr, index) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__custom_palette__["a" /* default */], {
								nameValue: curr.name ? curr.name : __("Color") + " " + index + 1,
								colorValue: curr.color ? curr.color : "#ffffff",
								onSave: function onSave(value, title) {
									_this3.saveC9Colors({ color: value, name: title, slug: curr.slug }, index);
									_this3.saveColors({ color: value, name: title, slug: curr.slug }, (nonEditables.length ? nonEditables.length : 0) + index);
									_this3.saveConfig();
								}
							})
						);
					}),
					0 < c9Colors.palette.length && wp.element.createElement(
						"div",
						{ className: "c9-colors-remove-last" },
						wp.element.createElement(
							Tooltip,
							{ text: __("Remove Last Color") },
							wp.element.createElement(
								Button,
								{
									type: "button",
									isDestructive: true,
									onClick: function onClick() {
										c9Colors.palette.pop();
										colors.pop();
										_this3.kbColorUniqueID -= 1;
										_this3.setState({ c9Colors: c9Colors });
										_this3.setState({ colors: colors });
										_this3.saveConfig();
									},
									"aria-label": __("Remove Last Color")
								},
								wp.element.createElement(Dashicon, { icon: "editor-removeformatting" })
							)
						)
					)
				),
				wp.element.createElement(
					"div",
					{ className: "c9-colors-add-new" },
					wp.element.createElement(
						Button,
						{
							type: "button",
							className: this.state.isSaving ? "kb-add-btn-is-saving" : "kb-add-btn-is-active",
							isPrimary: true,
							disabled: this.state.isSaving,
							onClick: function onClick() {
								if (_this3.state.isSaving) {
									return;
								}
								if (undefined === c9Colors.palette) {
									c9Colors.palette = [];
								}
								var id = _this3.kbColorUniqueID;
								c9Colors.palette.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "c9-palette-" + id
								});
								colors.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "c9-palette-" + id
								});
								_this3.kbColorUniqueID += 1;
								_this3.setState({ c9Colors: c9Colors });
								_this3.setState({ colors: colors });
								_this3.saveConfig();
							},
							"aria-label": __("Add Color")
						},
						__("Add Color")
					)
				),
				undefined !== c9Colors.palette && undefined !== c9Colors.palette[0] && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(ToggleControl, {
						label: __("Use only C9 Blocks Colors?"),
						checked: undefined !== c9Colors.override ? c9Colors.override : false,
						onChange: function onChange(value) {
							var newColors = void 0;
							var newC9Colors = _this3.state.c9Colors;
							if (true === value) {
								newColors = newC9Colors.palette;
								newC9Colors.override = true;
							} else {
								newC9Colors.override = false;
								newColors = [].concat(_toConsumableArray(origColors), _toConsumableArray(newC9Colors.palette));
							}
							_this3.setState({ c9Colors: newC9Colors });
							_this3.setState({ colors: newColors });
							_this3.saveConfig();
						}
					})
				)
			);
		}
	}]);

	return ColorAppender;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (compose([withSelect(function (select) {
	var _select = select("core/block-editor"),
	    getSettings = _select.getSettings;

	var settings = getSettings();
	return {
		baseColors: __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(settings, ["colors"], [])
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/block-editor"),
	    updateSettings = _dispatch.updateSettings;

	return {
		updateSettings: updateSettings
	};
})])(ColorAppender));

/***/ }),
/* 432 */
/*!***************************************************!*\
  !*** ./src/components/color-appender/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 433);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 433 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/color-appender/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-block-default-palette .components-color-palette__item{display:flex;align-items:center;justify-content:center}.c9-block-default-palette .components-color-palette__item-wrapper{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item-wrapper:hover{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item svg{color:#646464}.c9-colors-remove-last{display:inline-block;height:28px;width:28px;margin-right:14px;margin-bottom:14px}.c9-colors-remove-last .components-button{border-radius:50%;height:100%;width:100%;padding:0;display:flex;align-items:center;justify-content:center}.c9-colors-add-new{margin-bottom:16px}\n", ""]);


/***/ }),
/* 434 */
/*!************************************************!*\
  !*** ./src/components/custom-palette/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ColorIndicator = _wp$components.ColorIndicator,
    ColorPicker = _wp$components.ColorPicker,
    TextControl = _wp$components.TextControl,
    Tooltip = _wp$components.Tooltip;




var CustomPalette = function (_Component) {
	_inherits(CustomPalette, _Component);

	function CustomPalette() {
		_classCallCheck(this, CustomPalette);

		var _this = _possibleConstructorReturn(this, (CustomPalette.__proto__ || Object.getPrototypeOf(CustomPalette)).apply(this, arguments));

		_this.toggleVisible = function () {
			_this.setState({ isVisible: true });
		};

		_this.toggleClose = function () {
			if (true === _this.state.isVisible) {
				_this.setState({ isVisible: false });
				_this.props.onSave(_this.state.color, _this.state.name);
			}
		};

		_this.changeColor = function (value) {
			_this.setState({ color: value });
		};

		_this.state = {
			isVisible: false,
			color: "",
			name: ""
		};
		return _this;
	}

	_createClass(CustomPalette, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setState({ color: this.props.colorValue, name: this.props.nameValue });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return wp.element.createElement(
				"div",
				{ className: "c9-custom-color-settings-container" },
				this.state.isVisible && wp.element.createElement(
					Popover,
					{
						position: "top left",
						className: "popover-color",
						onClose: this.toggleClose
					},
					wp.element.createElement(ColorPicker, {
						color: undefined === this.state.color || "" === this.state.color ? this.props.colorValue : this.state.color,
						onChangeComplete: function onChangeComplete(color) {
							return _this2.changeColor(color.hex);
						},
						disableAlpha: true
					}),
					wp.element.createElement(TextControl, {
						label: __("Name:"),
						value: undefined === this.state.name || "" === this.state.name ? this.props.nameValue : this.state.name,
						onChange: function onChange(value) {
							return _this2.setState({ name: value });
						}
					})
				),
				this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleClose
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				),
				!this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleVisible
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				)
			);
		}
	}]);

	return CustomPalette;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (CustomPalette);

/***/ }),
/* 435 */
/*!***************************************************!*\
  !*** ./src/components/custom-palette/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 436);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 436 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/custom-palette/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-custom-color-settings-container{display:flex;align-items:center}.c9-custom-color-settings-container .c9-color-icon-indicate{position:relative;transform:scale(1);transition:transform 0.1s ease;border-radius:50%;padding:0}.c9-custom-color-settings-container .c9-color-icon-indicate:hover{transform:scale(1.2)}.c9-custom-color-settings-container .c9-color-icon-indicate .component-color-indicator.c9-advanced-color-indicate{width:28px;height:28px;border-radius:50%;margin:0}.components-popover.popover-color>.components-popover__content>.components-base-control{padding:0 10px}\n", ""]);


/***/ }),
/* 437 */
/*!*****************************************!*\
  !*** ./assets/c9-feather-logo-gray.svg ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
  "data-name": "Layer 2"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
  d: "M47 138.06C40.37 123.9 40.84 36.41 83.54 22.4c0 0-15.64 7.29-10.12 27.45 7.2-13.68 20.33-37.22 57.77-43.46 24-2.89-13.15 1.1-6 22.22.24-8.88 59.41-45 108-19.81C246.43 104.69 177 110.06 177 110.06s14.95 2.38 23.83-.5c-9.12 39.84-63.13 42.14-63.13 42.14s20.51 5.11 34.92 2.47c-49.45 32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09 25.09 0 10-6-6.27L79.9 120.4l-2.23-3.25-30.59 21M183.72 33.74a16.25 16.25 0 11-18.84 13.17 16.24 16.24 0 0118.84-13.17zM54.17 148l-.39-.55.43.52zm-34.43-6.55l8.45-5.5 5.5 8.44-8.44 5.5-5.51-8.44zm-4.37 14.87l-5.5-8.44 8.45-5.5 5.5 8.44-8.45 5.5zm-9.87 6.47L0 154.34l8.45-5.5 5.5 8.44-8.45 5.51zm46.86-13.87l-38.95 25.73-6.95-10.34L45 139.3l7.33 9.62z",
  fill: "#121212",
  fillRule: "evenodd",
  "data-name": "logo dark grey"
}));

var SvgC9FeatherLogoGray = function SvgC9FeatherLogoGray(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({
    viewBox: "0 0 234.92 174.65"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["a"] = (SvgC9FeatherLogoGray);

/***/ }),
/* 438 */
/*!*************************************************!*\
  !*** ./src/components/templates-modal/index.js ***!
  \*************************************************/
/*! exports provided: TemplatesModal */
/*! exports used: TemplatesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesModalWithSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase__ = __webpack_require__(/*! lodash/startCase */ 439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_button__ = __webpack_require__(/*! ./layout-button */ 456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_button__ = __webpack_require__(/*! ./section-button */ 457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 460);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Modal = _wp$components.Modal,
    TabPanel = _wp$components.TabPanel,
    Tooltip = _wp$components.Tooltip,
    Icon = _wp$components.Icon;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var _wp$blocks = wp.blocks,
    createBlock = _wp$blocks.createBlock,
    rawHandler = _wp$blocks.rawHandler;

var apiFetch = wp.apiFetch;





// templates


var TemplatesModal = function (_Component) {
	_inherits(TemplatesModal, _Component);

	function TemplatesModal() {
		_classCallCheck(this, TemplatesModal);

		var _this = _possibleConstructorReturn(this, (TemplatesModal.__proto__ || Object.getPrototypeOf(TemplatesModal)).apply(this, arguments));

		_this.getReusableBlocks = _this.getReusableBlocks.bind(_this);

		_this.state = {
			reusables: []
		};

		_this.getReusableBlocks();
		return _this;
	}

	_createClass(TemplatesModal, [{
		key: "getReusableBlocks",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var canUserUseUnfilteredHTML, postType, reusables, blocks;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								canUserUseUnfilteredHTML = this.props.canUserUseUnfilteredHTML;
								_context.next = 3;
								return apiFetch({ path: "/wp/v2/types/wp_block" });

							case 3:
								postType = _context.sent;
								_context.next = 6;
								return apiFetch({ path: "/wp/v2/" + postType.rest_base });

							case 6:
								reusables = _context.sent;
								blocks = reusables.map(function (item) {
									return {
										name: item.title.raw,
										content: rawHandler({
											HTML: item.content.raw,
											mode: "BLOCKS",
											canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
										})
									};
								});


								this.setState({
									reusables: blocks
								});

							case 9:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getReusableBlocks() {
				return _ref.apply(this, arguments);
			}

			return getReusableBlocks;
		}()
	}, {
		key: "markupToBlock",
		value: function markupToBlock(templateObj, canUserUseUnfilteredHTML) {
			var blockObj = Object.assign({}, templateObj);
			// eslint-disable-next-line no-unused-vars
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(blockObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					blockObj[key] = rawHandler({
						HTML: blockObj[key],
						mode: "BLOCKS",
						canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
					});
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return blockObj;
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    resetBlocks = _props.resetBlocks,
			    canUserUseUnfilteredHTML = _props.canUserUseUnfilteredHTML;

			// define section and layout templates

			var sections = Object.assign({
				test: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				})]
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].sections, canUserUseUnfilteredHTML));

			var layouts = Object.assign({
				default: [createBlock("core/paragraph", {})],
				hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				}), createBlock("c9-blocks/grid", {}, [createBlock("c9-blocks/column-container", {
					columns: 3,
					layout: "c9-3-col-equal"
				})])],
				featured: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", {
					placeholder: __("Layout Switcher", "c9-blocks")
				})],
				nested: [createBlock("c9-blocks/grid", {}, [createBlock("c9-blocks/column-container", { columns: 3, layout: "c9-3-col-equal" }, [createBlock("c9-blocks/column", {}, [createBlock("core/button", { text: "Make this Recipe" })])])])]
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].layouts, canUserUseUnfilteredHTML));

			return wp.element.createElement(
				Modal,
				_extends({
					className: "c9-templates-modal",
					position: "top",
					size: "lg"
				}, this.props),
				wp.element.createElement(
					TabPanel,
					{
						className: "c9-template-tabs c9-component-modal-tab-panel",
						tabs: [{
							name: "sections",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Simple sections to construct your page.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Sections")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "pages",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Pre-designed ready to use pages.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Pages")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "blocks",
							title: wp.element.createElement(
								Tooltip,
								{ text: __("My Templates.", "c9-blocks") },
								wp.element.createElement(
									"span",
									null,
									__("Saved Blocks")
								)
							),
							className: "c9-template-tabs-tab"
						}],
						initialTabName: this.props.initial
					},
					function (tab) {
						switch (tab.name) {
							case "sections":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										Object.keys(sections).map(function (k) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
												icon: "wordpress",
												label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
												section: sections[k]
											});
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							case "pages":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-layout-options" },
										Object.keys(layouts).map(function (k) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__layout_button__["a" /* default */], {
												icon: "wordpress",
												label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
												layout: layouts[k]
											});
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							default:
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										_this2.state.reusables.map(function (obj) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
												icon: "wordpress",
												label: __(obj.name, "c9-blocks"),
												section: obj.content
											});
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
						}
					}
				)
			);
		}
	}]);

	return TemplatesModal;
}(Component);

var TemplatesModalWithSelect = compose([withSelect(function (select, _ref2) {
	var clientId = _ref2.clientId;

	var _select = select("core/editor"),
	    getBlock = _select.getBlock,
	    canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML;

	var block = getBlock(clientId);
	return {
		block: block,
		canUserUseUnfilteredHTML: canUserUseUnfilteredHTML()
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks,
	    insertBlocks = _dispatch.insertBlocks;

	return {
		resetBlocks: resetBlocks,
		insertBlocks: insertBlocks
	};
})])(TemplatesModal);



/***/ }),
/* 439 */
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ 440),
    upperFirst = __webpack_require__(/*! ./upperFirst */ 449);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),
/* 440 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 441),
    deburr = __webpack_require__(/*! ./deburr */ 442),
    words = __webpack_require__(/*! ./words */ 445);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 441 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 442 */
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ 443),
    toString = __webpack_require__(/*! ./toString */ 19);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 443 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ 444);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 444 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 445 */
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ 446),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ 447),
    toString = __webpack_require__(/*! ./toString */ 19),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ 448);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 446 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 447 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 448 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 449 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ 450);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 450 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ 451),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 229),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ 453),
    toString = __webpack_require__(/*! ./toString */ 19);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 451 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 452);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 452 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 453 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ 454),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 229),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ 455);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 454 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 455 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 456 */
/*!*********************************************************!*\
  !*** ./src/components/templates-modal/layout-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var LayoutButton = function LayoutButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    layout = _ref.layout,
	    resetBlocks = _ref.resetBlocks,
	    insertBlocks = _ref.insertBlocks;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				resetBlocks([]);
				insertBlocks(layout);
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks,
	    insertBlocks = _dispatch.insertBlocks;

	return {
		resetBlocks: resetBlocks,
		insertBlocks: insertBlocks
	};
})(LayoutButton));

/***/ }),
/* 457 */
/*!**********************************************************!*\
  !*** ./src/components/templates-modal/section-button.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var SectionButton = function SectionButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    section = _ref.section,
	    insertBlocks = _ref.insertBlocks;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				insertBlocks(section);
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    insertBlocks = _dispatch.insertBlocks;

	return {
		insertBlocks: insertBlocks
	};
})(SectionButton));

/***/ }),
/* 458 */
/*!****************************************************!*\
  !*** ./src/components/templates-modal/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 459);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 459 */
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/templates-modal/editor.scss ***!
  \*******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-templates-modal .components-modal__header{border-bottom:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs{margin-top:-24px}@media (min-width: 600px){.c9-templates-modal{min-width:600px;max-width:600px;margin-left:-300px;transform:none;top:112px}}@media (min-width: 840px){.c9-templates-modal{min-width:800px;max-width:800px;margin-left:-400px;transform:none}}.c9-templates-modal .components-modal__header .components-modal__icon-container svg{display:block;margin-right:10px}.c9-templates-modal .components-modal__header .components-modal__header-heading{font-weight:600}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options{display:grid;grid-column-gap:1rem;grid-row-gap:1rem;grid-template-columns:repeat(6, 1fr)}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button{border-width:1px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;border-radius:3px;box-shadow:inset 0 -1px 0 #ccc;padding:5px}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button:active,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button:active{border-color:#999;box-shadow:insert 0 1px 0 #999}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button span,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button span{display:block;font-size:0.8rem;padding:2px 0}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab{padding:12px 16px;color:inherit}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab:focus{outline:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab.is-active{position:relative;border-bottom:2px solid #00a0d2;z-index:1}\n", ""]);


/***/ }),
/* 460 */
/*!************************************************************!*\
  !*** ./src/components/templates-modal/templates-markup.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var templateMarkups = {
	layouts: {
		testBlocks: '\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1,"minScreenHeight":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:10vh"><!-- wp:c9-blocks/column-container {"columns":1,"columnMaxWidth":0,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel {"instanceId":1} -->\n\t\t<div id="c9-carousel-indicator-1" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item active"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/carousel -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles {"instanceId":0} -->\n\t\t<div class="c9-toggles accordion" id="accordion-0"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-0" data-toggle="collapse" data-target="#c9-toggles-collapse1-0"><div class="mb-0"><span class="c9-toggles-toggle-label">Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-0" data-parent="#accordion-0"></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-0" data-toggle="collapse" data-target="#c9-toggles-collapse2-0"><div class="mb-0"><span class="c9-toggles-toggle-label">Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-0" data-parent="#accordion-0"></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t\t<!-- /wp:c9-blocks/toggles -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-h"></h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":0} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"></div><div class="carousel-item"></div><div class="carousel-item"></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta -->\n\t\t<div style="text-align:center" class="c9-cta c9-block-cta container p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text"></div></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:c9-blocks/social-share /-->\n\t\t\n\t\t<!-- wp:c9-blocks/horizontal-tabs {"instanceId":0} -->\n\t\t<div class="c9-horizontal-tabs" data-tab-active="tab-1"><ul class="nav nav-tabs d-flex nav-justified" role="tablist"><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a></li><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a></li></ul><div class="c9-tabs-content tab-content"><!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-horizontal-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-1-0" aria-labelledby="tab-1"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-horizontal-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-2-0" aria-labelledby="tab-2"></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs {"instanceId":0} -->\n\t\t<div class="c9-vertical-tabs row" data-tab-active="tab-1"><div class="col-xs-12 col-sm-3"><div class="nav flex-column nav-pills" role="tablist"><a data-toggle="pill" role="tab" href="#tab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a><a data-toggle="pill" role="tab" href="#tab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a></div></div><div class="col-xs-12 col-sm-9"><div class="c9-tabs-content tab-content"><!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-1-0" aria-labelledby="tab-1"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-2-0" aria-labelledby="tab-2"></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs -->\n\t\t\n\t\t<!-- wp:c9-blocks/posts-grid {"instanceId":0} -->\n\t\t<div class="c9-posts-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/post-grid /--></div>\n\t\t<!-- /wp:c9-blocks/posts-grid -->\n\t\t',
		markdown: '<!-- wp:c9-blocks/carousel {"instanceId":0} -->\n<div id="c9-carousel-indicator-0" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item active"><!-- wp:heading -->\n<h2>awdawd</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>waad</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdadawdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/carousel -->',
		testBg: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		restaurantMenuLandingPage: '\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1,"containerHue":"#313131","overlayHue":"#313131","overlayOpacity":7,"blendMode":"multiply","minScreenHeight":50,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov"} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:50vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-1" class="c9-video-custom" playsinline autoplay muted loop style="min-height:50vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov" type="video/mp4"/></video></div></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.7);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"full","columns":1,"layout":"one-column","containerWidth":"container-fluid","verticalAlign":"bottom"} -->\n\t\t<div class="container-fluid alignfull c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"bottom"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"New Fall Menu","type":"c9-txl display-","textColor":"#abb8c3","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#abb8c3">New Fall Menu</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"ORDER THIS FISH ONLINE RIGHT NOW","tagLevel":6,"textColor":"#ffffff","weight":"normal"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-h font-weight-normal" style="color:#ffffff">ORDER THIS FISH ONLINE RIGHT NOW</h6></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"get started","buttonAlignment":"left","buttonTextColor":"#313131","buttonShape":"outline","buttonTarget":true,"ctaLayout":"three-quarters","ctaPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"align":"wide"} -->\n\t\t<div style="text-align:left" class="c9-cta c9-block-cta container alignwide p-5"><div class="row"><div class="c9-cta-content col-12 col-md-9"><div class="c9-cta-text c9-sh"><p>Make a reservation, buy a ring, get engaged, high five.</p></div></div><div class="c9-cta-button col-12 col-md-3"><a href="#" target="_blank" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-medium" style="color:#313131">get started<span class="sr-only">(Link opens in new window)</span></a></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":2,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":7,"blendMode":"multiply","minScreenHeight":80,"focalPoint":{"x":0.4700460829493088,"y":0.8641975308641975}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:80vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.7);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"center","minScreenHeight":43} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:43vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Brunch","subheading":"Available on weekends and holidays","addSubheading":true,"displayLevel":"5","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-5" style="color:#ffffff">Brunch</h1><div class="c9-txl display-5"><small class="text-muted">&nbsp;Available on weekends and holidays</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"align":"wide","columns":3,"columnsGap":1,"layout":"c9-3-col-wideright","verticalAlign":"bottom","overlayHue":"#ffffff","overlayOpacity":10,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-wideright"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Small Plates","subheading":"served all day","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Small Plates</h5><div class="c9-h h5"><small class="text-muted">&nbsp;served all day</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nachos","subheading":"$16","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Nachos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$16</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Tacos","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Tacos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Plate of 3 small tacos. Like the tiniest tacos you\u2019ve ever seen for fourteen big ones</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Charcuterie","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Charcuterie</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Beef Tips","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Beef Tips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">At this far into the fake menu we ran out of ideas</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Mac &amp; Cheese","subheading":"$10","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Mac &amp; Cheese</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$10</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":0,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg"],"id":[7340,7342,7341]} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Entrees","subheading":"7am-noon","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Entrees</h5><div class="c9-h h5"><small class="text-muted">&nbsp;7am-noon</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"NY Strip","subheading":"$26","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">NY Strip</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$26</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Grilled Chicken","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Grilled Chicken</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Pork Loin","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Pork Loin</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Kielbasa","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Kielbasa</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Sausages are pretty good. Not quite sure what this kind is though</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Lamb Chops","subheading":"$22","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Lamb Chops</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$22</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">How dare you think about eating these tiny baby animals</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Burger","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Burger</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Like those fake meat burgers. This is the real deal</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Lasagna","subheading":"$17","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Lasagna</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$17</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with things that aren\u2019t meat</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":1,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg"],"id":[7369,7335,7334],"captionTitle":["Brunch Cocktails","Charcuterie Plate","Now this is podracing"],"captionContent":["Get hammered right after church!","I mean it\'s mostly fruit but it\'s close",null]} -->\n\t\t<div id="c9-image-carousel-indicator-1" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Brunch Cocktails</h5><p>Get hammered right after church!</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Charcuterie Plate</h5><p>I mean it\'s mostly fruit but it\'s close</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Now this is podracing</h5></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sides","subheading":"add for $1.00 - $6.00","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Sides</h5><div class="c9-h h5"><small class="text-muted">&nbsp;add for $1.00 - $6.00</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Chips","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Chips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Side Salad","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Side Salad</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Peanuts","subheading":"$1","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Peanuts</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$1</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Yogurt","subheading":"$2","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Yogurt</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$2</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Cereal","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Cereal</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"French Fries","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">French Fries</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Steak Bites","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Steak Bites</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs {"tabActive":"tab-saturday","tabsData":[{"slug":"tab-saturday","title":"Saturday"},{"slug":"tab-sunday","title":"Sunday"}],"instanceId":0,"verticalAlign":"center"} -->\n\t\t<div class="c9-vertical-tabs row" data-tab-active="tab-saturday"><div class="col-xs-12 col-sm-3"><div class="nav flex-column nav-pills" role="tablist"><a data-toggle="pill" role="tab" href="#tab-tab-saturday-0" class="nav-link active" id="tab-button-tab-saturday">Saturday</a><a data-toggle="pill" role="tab" href="#tab-tab-sunday-0" class="nav-link" id="tab-button-tab-sunday">Sunday</a></div></div><div class="col-xs-12 col-sm-9"><div class="c9-tabs-content tab-content align-self-center"><!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-saturday","tabActive":"tab-saturday","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-saturday-0" aria-labelledby="tab-saturday"><!-- wp:heading {"level":6} -->\n\t\t<h6>Saturday Brunch Specials</h6>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Chef will make something and your server will tell you what it is and you will pay $25</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Bottomless mimosas and we\u2019ll make the newest hire clean up the $30</p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-sunday","tabActive":"tab-saturday","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-sunday-0" aria-labelledby="tab-sunday"><!-- wp:heading {"level":6} -->\n\t\t<h6>Sunday Brunch Specials</h6>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Chef will make osmething and your server will tell you what it is and you will pay $25</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Ditch church and prove it for 10% off your total</p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#eeeeee","minScreenHeight":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:10vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","minScreenHeight":10} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sustainable Food Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Sustainable Food Mission</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":4,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h4 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":3,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"normal","minScreenHeight":80,"focalPoint":{"x":0.4700460829493088,"y":0.8641975308641975}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:80vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:normal"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"center","minScreenHeight":43} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:43vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Dinner","subheading":"New Fall Menu","addSubheading":true,"displayLevel":"5","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-5" style="color:#ffffff">Dinner</h1><div class="c9-txl display-5"><small class="text-muted">&nbsp;New Fall Menu</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"align":"wide","columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"bottom","overlayHue":"#ffffff","overlayOpacity":10,"blendMode":"multiply","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-equal"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:multiply"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Small Plates","subheading":"served all day","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Small Plates</h5><div class="c9-h h5"><small class="text-muted">&nbsp;served all day</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nachos","subheading":"$16","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Nachos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$16</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Charcuterie","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Charcuterie</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Beef Tips","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Beef Tips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">At this far into the fake menu we ran out of ideas</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Mac &amp; Cheese","subheading":"$10","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Mac &amp; Cheese</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$10</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Bacon Stick","subheading":"$40","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Bacon Stick</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$40</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is $40 of bacon on a stick. Prepare your veins for cholesterol</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":2,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg"],"id":[7340,7342,7341]} -->\n\t\t<div id="c9-image-carousel-indicator-2" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-2" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-2" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-2" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Entrees","subheading":"7am-noon","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Entrees</h5><div class="c9-h h5"><small class="text-muted">&nbsp;7am-noon</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"NY Strip","subheading":"$26","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">NY Strip</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$26</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Grilled Chicken","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Grilled Chicken</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Pork Loin","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Pork Loin</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Kielbasa","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Kielbasa</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Sausages are pretty good. Not quite sure what this kind is though</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Lamb Chops","subheading":"$22","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Lamb Chops</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$22</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">How dare you think about eating these tiny baby animals</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Burger","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Burger</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Like those fake meat burgers. This is the real deal</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Lasagna","subheading":"$17","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Lasagna</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$17</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with things that aren\u2019t meat</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Flatbread Pizza","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Flatbread Pizza</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with tomatoes, meat, and mystery sauce</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":3,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg"],"id":[7339,7336,7337],"captionTitle":["Chernobyl Burger","Side Salad","Chernobyl Fruit"],"captionContent":["For all you vegans out there","This thing is full of weirdness","Good for stronk bones"]} -->\n\t\t<div id="c9-image-carousel-indicator-3" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Burger</h5><p>For all you vegans out there</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Side Salad</h5><p>This thing is full of weirdness</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Fruit</h5><p>Good for stronk bones</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:spacer {"height":27} -->\n\t\t<div style="height:27px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sides","subheading":"add for $1.00 - $6.00","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Sides</h5><div class="c9-h h5"><small class="text-muted">&nbsp;add for $1.00 - $6.00</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Chips","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Chips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Side Salad","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Side Salad</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"French Fries","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">French Fries</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Steak Bites","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Steak Bites</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->',
		serviceLandingPage: '<!-- wp:c9-blocks/grid {"instanceId":0,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n\t\t<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n\t\t<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"type":"c9-txl display-","textColor":"#eeeeee","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 1</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 2</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 3</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-equal","minScreenHeight":1} -->\n\t\t<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:1vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Reason #1</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Reason Maybe 3,000</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":60,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4"} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-2" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Schedule Consultation","tagLevel":3,"displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h2" style="color:#ffffff">Schedule Consultation</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"One of our professionals will walk you through the process","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h4 class="c9-sh font-weight-light" style="color:#ffffff">One of our professionals will walk you through the process</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer {"height":42} -->\n\t\t<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:button {"textColor":"vivid-green-cyan","className":"is-style-outline"} -->\n\t\t<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">Schedule Now</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":3,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":0,"className":"is-style-default"} -->\n\t\t<div class="c9-toggles is-style-default accordion" id="accordion-0"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-0" data-toggle="collapse" data-target="#c9-toggles-collapse1-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1.\xA0</strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-0" data-toggle="collapse" data-target="#c9-toggles-collapse2-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2.</strong>\xA0Do you have to do a consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-0" data-toggle="collapse" data-target="#c9-toggles-collapse3-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3.</strong>\xA0Do you work with not for profits or non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-0" data-toggle="collapse" data-target="#c9-toggles-collapse4-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4.</strong>\xA0Can I see what an image carousel looks like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-0" data-parent="#accordion-0"><!-- wp:c9-blocks/image-carousel {"instanceId":3,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n\t\t<div id="c9-image-carousel-indicator-3" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-0" data-toggle="collapse" data-target="#c9-toggles-collapse5-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5.\xA0</strong>Reading the whole thing: can we do it? No.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-0" data-parent="#accordion-0"><!-- wp:c9-blocks/image-carousel {"instanceId":4,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n\t\t<div id="c9-image-carousel-indicator-4" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-4" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-4" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-4" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-4" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-4" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t\t<!-- /wp:c9-blocks/toggles --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":13} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Brands","subheading":"2000 - 2010","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Our Brands</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel {"instanceId":1,"autoSlide":false} -->\n\t\t<div id="c9-carousel-indicator-1" class="c9-carousel carousel slide" data-ride="carousel" data-interval="false" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item active"><!-- wp:gallery {"ids":[7437,7438,7439,7440],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"ids":[7440,7439,7438,7437],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"ids":[7440,7439,7438,7437],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:spacer {"height":60} -->\n\t\t<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:spacer {"height":60} -->\n\t\t<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":4} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 1 - Intermediate Subheading</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:list -->\n\t\t<ul><li>Download documents from link</li><li>Fill out and return documents to client</li><li>Review forms with internal team</li><li>Send superfluous status emails</li><li>Erroneaously misspell corporate words</li><li>Try not to die of eating too many hamburgers</li><li>It\'s harder than you think</li></ul>\n\t\t<!-- /wp:list --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":0,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg"],"id":[7416,7339,7337],"captionTitle":["Slide Caption","Chernobyl Burger","Chernobyl Oranges"],"captionContent":["Step 1 caption","I\'d eat it for sure.","Don\'t eat them."]} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Step 1 caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Burger</h5><p>I\'d eat it for sure.</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Oranges</h5><p>Don\'t eat them.</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":5,"containerHue":"#e9e9e9"} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh;background-color:rgba(233,233,233,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":2,"layout":"c9-2-col-equal","containerWidth":"container-narrow"} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 2</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nocusing solely on the bottom lineanot echnology immersion along the information highway will close the door on your foot</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 3</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop.&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn how to do the thing</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Watch Video","buttonAlignment":"right","buttonTextColor":"#00d084","buttonSize":"c9-button-size-large","buttonShape":"outline","buttonTarget":true,"ctaLayout":"three-quarters","ctaPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"ctaWidth":"container-fluid","ctaBackgroundColor":"#404041","ctaTextColor":"#eeeeee","align":"full"} -->\n\t\t<div style="background-color:rgba(64,64,65,1);text-align:right" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-9"><div class="c9-cta-text c9-sh" style="color:#eeeeee"><p>Watch our video walk through to get a guided tour.</p></div></div><div class="c9-cta-button col-12 col-md-3"><a href="#" target="_blank" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-large" style="color:#00d084">Watch Video<span class="sr-only">(Link opens in new window)</span></a></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:spacer {"height":70} -->\n\t\t<div style="height:70px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nine More Seasons\xA0","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Nine More Seasons\xA0</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":6,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Nine more seasons until I get that dipping szechuan sauce! For ninety-seven more years, Morty! I want that mcnuggut sauce Morty! Guess Who!</p><cite>A Person Wrote this</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Sign up now</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":1,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Office Interior","Library Interior","Office Chairs"],"captionContent":["Slide caption goes here","Subheading information would go here","Don\'t sit on them or you\'re fired"]} -->\n\t\t<div id="c9-image-carousel-indicator-1" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Office Interior</h5><p>Slide caption goes here</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Library Interior</h5><p>Subheading information would go here</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Office Chairs</h5><p>Don\'t sit on them or you\'re fired</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":7,"minScreenHeight":76} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:76vh"><!-- wp:c9-blocks/column-container {"align":"full","columns":1,"layout":"one-column","containerWidth":"container-fluid","containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg","bgImgAttach":true,"overlayHue":"#313131","blendMode":"multiply","minScreenHeight":80,"focalPoint":{"x":0.5161290322580645,"y":1}} -->\n\t\t<div class="container-fluid alignfull c9-column-container c9-fixed c9-layout-columns-1 one-column c9-columns-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:51.61290322580645% 100%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.5);mix-blend-mode:multiply"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"About Us","subheading":"Est. 2019","addSubheading":true,"tagLevel":3,"type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-txl font-weight-light" style="color:#ffffff">About Us</h3><div class="c9-txl display-3"><small class="text-muted">&nbsp;Est. 2019</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":8,"containerHue":"#eeeeee","minScreenHeight":50,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:50vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":10} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Our Mission</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Program Benefits","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Program Benefits</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":9,"rows":2,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":3,"columnsGap":1,"layout":"c9-3-col-equal","containerWidth":"container-narrow"} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7520} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/three-girls-drinking-beers-1024x682.jpg" alt="" class="wp-image-7520"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Drinking with Friends","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Drinking with Friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Especially at happy hour","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Especially at happy hour</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7521} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stock-image-3-1024x682.jpg" alt="" class="wp-image-7521"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Adventures","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Adventures</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Especially with the dudes","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Especially with the dudes</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7522} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-blur-wide-1024x682.jpg" alt="" class="wp-image-7522"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Drinking with Friends","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Drinking with Friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Free tickets to VIP shit you don\'t event want","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Free tickets to VIP shit you don\'t event want</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":2,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg"],"id":[7536,7535,7534]} -->\n\t\t<div id="c9-image-carousel-indicator-2" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-2" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-2" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-2" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Customer Testimonials","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Customer Testimonials</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer {"height":57} -->\n\t\t<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7491,"align":"center"} -->\n\t\t<div class="wp-block-image"><figure class="aligncenter"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-responsive-theme-e1567053405233-1024x856.jpeg" alt="" class="wp-image-7491"/><figcaption>Girl waving at some strangers cause she\'s lost</figcaption></figure></div>\n\t\t<!-- /wp:image --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Meet Girl Who Lost","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Meet Girl Who Lost</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p><cite>Girl who\'s trying to find her friends</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:spacer {"height":31} -->\n\t\t<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"See how this girl found her friends","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">See how this girl found her friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Buy NOW</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":11} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Meet Star Wars Girl","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Meet Star Wars Girl</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <a href="#">Dramatically maintain</a> clicks-and-mortar.</p><cite>Girl who\'s trying to find her friends</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:spacer {"height":31} -->\n\t\t<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"See how this girl found her friends","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">See how this girl found her friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">SEE HER STORY</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7496,"align":"center"} -->\n\t\t<div class="wp-block-image"><figure class="aligncenter"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg" alt="girl in tesitmonial from WordPress Gutenberg Block" class="wp-image-7496"/></figure></div>\n\t\t<!-- /wp:image --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":12,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":10,"blendMode":"multiply","minScreenHeight":70,"focalPoint":{"x":0.2350230414746544,"y":0.4375}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:70vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:23.502304147465438% 43.75%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,1);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Ready to sign up?","tagLevel":5,"displayLevel":"1","type":"c9-txl display-","textColor":"#ffffff"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-txl" style="color:#ffffff">Ready to sign up?</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Free for one month","tagLevel":4,"displayLevel":"4","textColor":"#ffffff","weight":"light","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h4 class="c9-h h4 font-weight-light" style="color:#ffffff">Free for one month</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"customTextColor":"#ffffff","className":"is-style-outline"} -->\n\t\t<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color" href="#" style="color:#ffffff">Get Started</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->'
	},
	sections: {
		faqTogglesWithHeading: '<!-- wp:c9-blocks/grid {"instanceId":23,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":3,"className":"is-style-default"} -->\n<div class="c9-toggles is-style-default accordion" id="accordion-3"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-3" data-toggle="collapse" data-target="#c9-toggles-collapse1-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1. </strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-3" data-toggle="collapse" data-target="#c9-toggles-collapse2-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2.</strong> Do you have to do a consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-3" data-toggle="collapse" data-target="#c9-toggles-collapse3-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3.</strong> Do you work with not for profits or non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-3" data-toggle="collapse" data-target="#c9-toggles-collapse4-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4.</strong> Can I see what an image carousel looks like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":9,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-9" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-9" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-9" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-9" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-3" data-toggle="collapse" data-target="#c9-toggles-collapse5-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5. </strong>Reading the whole thing: can we do it? No.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":10,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-10" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-10" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-10" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-10" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		headerWith3Modules: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"type":"c9-txl display-","textColor":"#eeeeee","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 1</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 2</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 3</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		missionStatement: '<!-- wp:c9-blocks/grid {"instanceId":32,"containerHue":"#eeeeee","minScreenHeight":50,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:50vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":10} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Our Mission</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:separator -->\n<hr class="wp-block-separator"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center","className":"is-style-default"} -->\n<div class="wp-block-button aligncenter is-style-default"><a class="wp-block-button__link" href="#">Our History</a></div>\n<!-- /wp:button -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		serviceOfferingHeader: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		videoBackgroundCallToAction: '"<!-- wp:c9-blocks/grid {"instanceId":19,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":60,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-19" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Schedule Consultation","tagLevel":3,"displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h h2" style="color:#ffffff">Schedule Consultation</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"One of our professionals will walk you through the process","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h4 class="c9-sh font-weight-light" style="color:#ffffff">One of our professionals will walk you through the process</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":42} -->\n<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"textColor":"vivid-green-cyan","className":"is-style-outline"} -->\n<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">Schedule Now</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"'
	}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE4ZGZjMWRjODcxY2JiNTAxNzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcHJlcGFyZS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXBkYXRlLWNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzcz80MDNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3M/YzU3MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2xvci1hcHBlbmRlci9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20tcGFsZXR0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20tcGFsZXR0ZS9lZGl0b3Iuc2Nzcz8yYjFlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3RhcnRDYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJ1cnIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVidXJyTGV0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlV29yZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNhc2VGaXJzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9sYXlvdXQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3M/MGY0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3RlbXBsYXRlcy1tYXJrdXAuanMiXSwibmFtZXMiOlsicHJlcGFyZVF1ZXJ5IiwidHlwZSIsImRhdGEiLCJhZGRpdGlvbmFsRGF0YSIsInFzIiwic3RyaW5naWZ5IiwiZW5jb2RlIiwicXVlcnkiLCJhcGlGZXRjaCIsInJlcXVlc3QiLCJzZXRUd2l0dGVyRmVlZCIsImZlZWQiLCJzZXRUd2l0dGVyUHJvZmlsZSIsInByb2ZpbGUiLCJ1cGRhdGVDYXRlZ29yeSIsIndwIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIkciLCJQYXRoIiwiU1ZHIiwibG9nbyIsImljb24iLCJ1bnJlZ2lzdGVyQmxvY2tUeXBlIiwibG9hZEJsb2Nrc0VkaXRvciIsIndpbmRvdyIsIl93cExvYWRCbG9ja0VkaXRvciIsIl93cExvYWRHdXRlbmJlcmdFZGl0b3IiLCJ0aGVuIiwiYWRkRmlsdGVyIiwiaG9va3MiLCJmb3JtYXRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJyZXN1bHQiLCJyZXBsYWNlIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJzZWxlY3RvcnMiLCJhY3Rpb25zIiwiY29udHJvbHMiLCJyZXNvbHZlcnMiLCJzdGF0ZSIsImZlZWRzIiwicHJvZmlsZXMiLCJhY3Rpb24iLCJnZXRUd2l0dGVyRmVlZCIsImdldFR3aXR0ZXJQcm9maWxlIiwiQVBJX0ZFVENIIiwiZmV0Y2hlZERhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwYXRoIiwicmVnaXN0ZXJQbHVnaW4iLCJwbHVnaW5zIiwiZWRpdFBvc3QiLCJQbHVnaW5TaWRlYmFyIiwiUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSIsIkZyYWdtZW50IiwiZWxlbWVudCIsIl9fIiwiaTE4biIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlBhbmVsQm9keSIsIkRhc2hpY29uIiwiQzkiLCJhcmd1bWVudHMiLCJpc01vZGFsT3BlbiIsIndpZHRoIiwibWFyZ2luIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJUb2dnbGVDb250cm9sIiwiVG9vbHRpcCIsIndpdGhTZWxlY3QiLCJ3aXRoRGlzcGF0Y2giLCJjb21wb3NlIiwic3ByaW50ZiIsIkNvbG9yQXBwZW5kZXIiLCJzYXZlQ29uZmlnIiwiYmluZCIsInNhdmVDOUNvbG9ycyIsInNhdmVDb2xvcnMiLCJrYkNvbG9yVW5pcXVlSUQiLCJpc1NhdmluZyIsImM5Q29sb3JzIiwiYzlfYmxvY2tzX3BhcmFtcyIsImNvbG9ycyIsIkpTT04iLCJwYXJzZSIsInBhbGV0dGUiLCJvdmVycmlkZSIsIm9yaWdDb2xvcnMiLCJvcmlnX2NvbG9ycyIsInByb3BzIiwiYmFzZUNvbG9ycyIsImxlbmd0aCIsImNvbmZpZyIsInNldHRpbmdNb2RlbCIsImFwaSIsIm1vZGVscyIsIlNldHRpbmdzIiwiYzlfYmxvY2tzX2NvbG9ycyIsInNhdmUiLCJ1cGRhdGVTZXR0aW5ncyIsInZhbHVlIiwiaW5kZXgiLCJub25FZGl0YWJsZXMiLCJlZGl0YWJsZXMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJ1bmRlZmluZWQiLCJjdXJyIiwic2x1ZyIsInN1YnN0ciIsInB1c2giLCJuYW1lIiwiY29sb3IiLCJ0aXRsZSIsInBvcCIsImlkIiwibmV3Q29sb3JzIiwibmV3QzlDb2xvcnMiLCJzZWxlY3QiLCJnZXRTZXR0aW5ncyIsInNldHRpbmdzIiwiZ2V0IiwiZGlzcGF0Y2giLCJQb3BvdmVyIiwiQ29sb3JJbmRpY2F0b3IiLCJDb2xvclBpY2tlciIsIlRleHRDb250cm9sIiwiQ3VzdG9tUGFsZXR0ZSIsInRvZ2dsZVZpc2libGUiLCJpc1Zpc2libGUiLCJ0b2dnbGVDbG9zZSIsIm9uU2F2ZSIsImNoYW5nZUNvbG9yIiwiY29sb3JWYWx1ZSIsIm5hbWVWYWx1ZSIsImhleCIsImNvbG9yRGVmYXVsdCIsIk1vZGFsIiwiVGFiUGFuZWwiLCJJY29uIiwiY3JlYXRlQmxvY2siLCJyYXdIYW5kbGVyIiwiVGVtcGxhdGVzTW9kYWwiLCJnZXRSZXVzYWJsZUJsb2NrcyIsInJldXNhYmxlcyIsImNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCIsInBvc3RUeXBlIiwicmVzdF9iYXNlIiwiaXRlbSIsInJhdyIsImNvbnRlbnQiLCJIVE1MIiwibW9kZSIsInRlbXBsYXRlT2JqIiwiYmxvY2tPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwia2V5IiwicmVzZXRCbG9ja3MiLCJzZWN0aW9ucyIsInRlc3QiLCJhbGlnbiIsInRleHQiLCJtYXJrdXBUb0Jsb2NrIiwidGVtcGxhdGVNYXJrdXBzIiwibGF5b3V0cyIsImRlZmF1bHQiLCJoZXJvIiwiY29sdW1ucyIsImxheW91dCIsImZlYXR1cmVkIiwiaGVpZ2h0IiwibWVkaWFQb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwibmVzdGVkIiwiaW5pdGlhbCIsInRhYiIsInN0YXJ0Q2FzZSIsImsiLCJvYmoiLCJUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QiLCJjbGllbnRJZCIsImdldEJsb2NrIiwiYmxvY2siLCJpbnNlcnRCbG9ja3MiLCJMYXlvdXRCdXR0b24iLCJsYWJlbCIsIlNlY3Rpb25CdXR0b24iLCJzZWN0aW9uIiwidGVzdEJsb2NrcyIsIm1hcmtkb3duIiwidGVzdEJnIiwicmVzdGF1cmFudE1lbnVMYW5kaW5nUGFnZSIsInNlcnZpY2VMYW5kaW5nUGFnZSIsImZhcVRvZ2dsZXNXaXRoSGVhZGluZyIsImhlYWRlcldpdGgzTW9kdWxlcyIsIm1pc3Npb25TdGF0ZW1lbnQiLCJzZXJ2aWNlT2ZmZXJpbmdIZWFk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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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a0JBQWtCLGdGQUFnRixnQkFBZ0IsMklBQTJJLGFBQWEscUJBQXFCLGtCQUFrQixxQ0FBcUMseUpBQXlKLGlCQUFpQixtQkFBbUIscUNBQXFDLGtCQUFrQiwrQkFBK0IsWUFBWSx1S0FBdUssa0JBQWtCLCtCQUErQixtS0FBbUssY0FBYyxpQkFBaUIsY0FBYyxvR0FBb0csa0JBQWtCLGNBQWMsMEdBQTBHLGFBQWEsOEdBQThHLGtCQUFrQixnQ0FBZ0MsVUFBVTs7Ozs7Ozs7Ozs7OztBQ0YxOEQsSUFBTXZCLGtCQUFrQjtBQUN2QkMsVUFBUztBQUNSd0IsdzdPQURRO0FBZ0ZSQyxZQUNDLGdvREFqRk87QUFrRlJDLFVBQ0MsMHpIQW5GTztBQW9GUkMsd2x6Q0FwRlE7QUFtZVJDO0FBbmVRLEVBRGM7QUE0OEJ2QmxDLFdBQVU7QUFDVG1DLHlCQUNDLHk2VkFGUTtBQUdUQyxzQkFDQyxnMkhBSlE7QUFLVEMsb0JBQ0MsMmxGQU5RO0FBT1RDLHlCQUNDLDB6SEFSUTtBQVNUQywrQkFDQztBQVZRO0FBNThCYSxDQUF4Qjs7QUEwOUJlbEMsd0VBQWYsRSIsImZpbGUiOiIuL2Rpc3QvYmxvY2tzLnVwZGF0ZS1jYXRlZ29yeS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjE4ZGZjMWRjODcxY2JiNTAxNzkiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XG59IGNhdGNoKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcblx0XHRnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBoZXhUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBhcnJheS5wdXNoKCclJyArICgoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNikpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0oKSk7XG5cbnZhciBjb21wYWN0UXVldWUgPSBmdW5jdGlvbiBjb21wYWN0UXVldWUocXVldWUpIHtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbal0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLm9ialtpdGVtLnByb3BdID0gY29tcGFjdGVkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiBhcnJheVRvT2JqZWN0KHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSBvcHRpb25zICYmIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyAmJiAob3B0aW9ucy5wbGFpbk9iamVjdHMgfHwgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpKSB8fCAhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbdGFyZ2V0LCBzb3VyY2VdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgIWlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBtZXJnZVRhcmdldCA9IGFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmIGlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRhcmdldCwgaSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IHRhcmdldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SXRlbSAmJiB0eXBlb2YgdGFyZ2V0SXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gbWVyZ2UodGFyZ2V0SXRlbSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChoYXMuY2FsbChhY2MsIGtleSkpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gbWVyZ2UoYWNjW2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBtZXJnZVRhcmdldCk7XG59O1xuXG52YXIgYXNzaWduID0gZnVuY3Rpb24gYXNzaWduU2luZ2xlU291cmNlKHRhcmdldCwgc291cmNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBhY2Nba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRhcmdldCk7XG59O1xuXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHN0ciwgZGVjb2RlciwgY2hhcnNldCkge1xuICAgIHZhciBzdHJXaXRob3V0UGx1cyA9IHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIC8vIHVuZXNjYXBlIG5ldmVyIHRocm93cywgbm8gdHJ5Li4uY2F0Y2ggbmVlZGVkOlxuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXMucmVwbGFjZSgvJVswLTlhLWZdezJ9L2dpLCB1bmVzY2FwZSk7XG4gICAgfVxuICAgIC8vIHV0Zi04XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJXaXRob3V0UGx1cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXM7XG4gICAgfVxufTtcblxudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShzdHIsIGRlZmF1bHRFbmNvZGVyLCBjaGFyc2V0KSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBzdHI7XG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICByZXR1cm4gZXNjYXBlKHN0cmluZykucmVwbGFjZSgvJXVbMC05YS1mXXs0fS9naSwgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUyNiUyMycgKyBwYXJzZUludCgkMC5zbGljZSgyKSwgMTYpICsgJyUzQic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgLy8gLVxuICAgICAgICAgICAgfHwgYyA9PT0gMHgyRSAvLyAuXG4gICAgICAgICAgICB8fCBjID09PSAweDVGIC8vIF9cbiAgICAgICAgICAgIHx8IGMgPT09IDB4N0UgLy8gflxuICAgICAgICAgICAgfHwgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIC8vIDAtOVxuICAgICAgICAgICAgfHwgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIC8vIGEtelxuICAgICAgICAgICAgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICApIHtcbiAgICAgICAgICAgIG91dCArPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIGhleFRhYmxlW2NdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhFMCB8IChjID4+IDEyKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSAxO1xuICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNGRikgPDwgMTApIHwgKHN0cmluZy5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG52YXIgY29tcGFjdCA9IGZ1bmN0aW9uIGNvbXBhY3QodmFsdWUpIHtcbiAgICB2YXIgcXVldWUgPSBbeyBvYmo6IHsgbzogdmFsdWUgfSwgcHJvcDogJ28nIH1dO1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWVbaV07XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgcmVmcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IG9iajogb2JqLCBwcm9wOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYWN0UXVldWUocXVldWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuXG52YXIgY29tYmluZSA9IGZ1bmN0aW9uIGNvbWJpbmUoYSwgYikge1xuICAgIHJldHVybiBbXS5jb25jYXQoYSwgYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheVRvT2JqZWN0OiBhcnJheVRvT2JqZWN0LFxuICAgIGFzc2lnbjogYXNzaWduLFxuICAgIGNvbWJpbmU6IGNvbWJpbmUsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBkZWNvZGU6IGRlY29kZSxcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gICAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICAgIG1lcmdlOiBtZXJnZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZVF1ZXJ5KCB0eXBlLCBkYXRhICkge1xuICAgIGNvbnN0IGFkZGl0aW9uYWxEYXRhID0gcXMuc3RyaW5naWZ5KCBkYXRhLCB7IGVuY29kZTogZmFsc2UgfSApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYC9jOS1ibG9ja3MvZ2V0X3R3aXR0ZXJfJHsgdHlwZSB9LyR7IGFkZGl0aW9uYWxEYXRhID8gYD8keyBhZGRpdGlvbmFsRGF0YSB9YCA6ICcnIH1gO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3ByZXBhcmUtcXVlcnkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsLmFzc2lnbihcbiAgICB7XG4gICAgICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgRm9ybWF0XG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgZnVuY3Rpb24gYXBpRmV0Y2gocmVxdWVzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiQVBJX0ZFVENIXCIsXG5cdFx0cmVxdWVzdFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcIlNFVF9UV0lUVEVSX0ZFRURcIixcblx0XHRxdWVyeSxcblx0XHRmZWVkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUd2l0dGVyUHJvZmlsZShxdWVyeSwgcHJvZmlsZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiU0VUX1RXSVRURVJfUFJPRklMRVwiLFxuXHRcdHF1ZXJ5LFxuXHRcdHByb2ZpbGVcblx0fTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9hY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyB1cGRhdGVDYXRlZ29yeSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBHLCBQYXRoLCBTVkcgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogSWNvblxuICovXG5cbmNvbnN0IGxvZ28gPSAoXG5cdDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjM0LjkyIDE3NC42NVwiPlxuXHRcdDxkZWZzPlxuXHRcdFx0PHN0eWxlPntgLmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO31gfTwvc3R5bGU+XG5cdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0aWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxuXHRcdFx0XHR4MT1cIjc5LjEyXCJcblx0XHRcdFx0eTE9XCIyMy44MVwiXG5cdFx0XHRcdHgyPVwiMTY2LjRcIlxuXHRcdFx0XHR5Mj1cIjE1OC4yMlwiXG5cdFx0XHRcdGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjNjFjYWU1XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC4xMlwiIHN0b3BDb2xvcj1cIiM2NGM2ZTFcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcENvbG9yPVwiIzZkYmFkM1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMzlcIiBzdG9wQ29sb3I9XCIjN2JhN2JkXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC41NFwiIHN0b3BDb2xvcj1cIiM4ZjhiOWZcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjY4XCIgc3RvcENvbG9yPVwiI2E5Njg3N1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuODNcIiBzdG9wQ29sb3I9XCIjYzkzZDQ4XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC45MlwiIHN0b3BDb2xvcj1cIiNkZjFmMjZcIiAvPlxuXHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHQ8L2RlZnM+XG5cdFx0PHRpdGxlPmM5LWZlYXRoZXItbG9nby1pY29uPC90aXRsZT5cblx0XHQ8RyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XG5cdFx0XHQ8RyBpZD1cImxvZ29fZ3JhZGllbnRcIiBkYXRhLW5hbWU9XCJsb2dvIGdyYWRpZW50XCI+XG5cdFx0XHRcdDxQYXRoXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xzLTFcIlxuXHRcdFx0XHRcdGQ9XCJNNDcsMTM4LjA2QzQwLjM3LDEyMy45LDQwLjg0LDM2LjQxLDgzLjU0LDIyLjRjMCwwLTE1LjY0LDcuMjktMTAuMTIsMjcuNDUsNy4yLTEzLjY4LDIwLjMzLTM3LjIyLDU3Ljc3LTQzLjQ2LDI0LTIuODktMTMuMTUsMS4xLTYsMjIuMjIuMjQtOC44OCw1OS40MS00NSwxMDgtMTkuODFDMjQ2LjQzLDEwNC42OSwxNzcsMTEwLjA2LDE3NywxMTAuMDZoMHMxNC45NSwyLjM4LDIzLjgzLS41Yy05LjEyLDM5Ljg0LTYzLjEzLDQyLjE0LTYzLjEzLDQyLjE0czIwLjUxLDUuMTEsMzQuOTIsMi40N2MtNDkuNDUsMzIuNC0xMTYuODYtNC44Ni0xMTYuODYtNC44Ni0uMjcuMDgtLjgzLS40My0xLjU4LTEuMzFsMTEyLTc4YTI1LjA5LDI1LjA5LDAsMSwwLTYtNi4yN0w3OS45LDEyMC40bC0yLjIzLTMuMjUtMzAuNTksMjFNMTgzLjcyLDMzLjc0YTE2LjI1LDE2LjI1LDAsMSwxLTE4Ljg0LDEzLjE3LDE2LjI0LDE2LjI0LDAsMCwxLDE4Ljg0LTEzLjE3Wk01NC4xNywxNDhsLS4zOS0uNTUuNDMuNTIsMCwwWm0tMzQuNDMtNi41NSw4LjQ1LTUuNSw1LjUsOC40NC04LjQ0LDUuNS01LjUxLTguNDRabS00LjM3LDE0Ljg3LTUuNS04LjQ0LDguNDUtNS41LDUuNSw4LjQ0LTguNDUsNS41Wk01LjUsMTYyLjc5LDAsMTU0LjM0bDguNDUtNS41LDUuNSw4LjQ0TDUuNSwxNjIuNzlabTQ2Ljg2LTEzLjg3TDEzLjQxLDE3NC42NSw2LjQ2LDE2NC4zMSw0NSwxMzkuM2w3LjMzLDkuNjJaXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvRz5cblx0XHQ8L0c+XG5cdDwvU1ZHPlxuKTtcblxuaWYgKHVwZGF0ZUNhdGVnb3J5KSB7XG5cdHVwZGF0ZUNhdGVnb3J5KFwiYzktYmxvY2tzXCIsIHsgaWNvbjogbG9nbyB9KTtcbn1cblxuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3NcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnNcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlc1wiO1xuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS5qcyIsImNvbnN0IHsgdW5yZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL3ZlcnNlXCIpO1xuXHRcdC8vIHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL2NvbHVtbnNcIik7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9kZXJlZ2lzdGVyLWJsb2Nrcy5qcyIsImNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcblxuZnVuY3Rpb24gZm9ybWF0Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuXHRjb25zdCByZXN1bHQgPSBjbGFzc05hbWUucmVwbGFjZShcIndwLWJsb2NrLWM5LWJsb2Nrc1wiLCBcImM5XCIpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmVkaXRvci5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmJsb2Nrcy5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnMuanMiLCIvLyBjb25zdCB7IHJlZ2lzdGVyQmxvY2tTdHlsZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdC8vIHJlZ2lzdGVyQmxvY2tTdHlsZShcImNvcmUvYnV0dG9uXCIsIHtcblx0XHQvLyBcdG5hbWU6IFwiY3VzdG9tLWJ1dHRvbi1zdHlsZVwiLFxuXHRcdC8vIFx0bGFiZWw6IFwiTXkgQnV0dG9uIFN0eWxlXCJcblx0XHQvLyB9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlcy5qcyIsImltcG9ydCBcIi4uL3N0b3Jlcy90d2l0dGVyXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0b3Jlcy5qcyIsImltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29udHJvbHMgZnJvbSBcIi4vY29udHJvbHNcIjtcbmltcG9ydCAqIGFzIHJlc29sdmVycyBmcm9tIFwiLi9yZXNvbHZlcnNcIjtcblxuY29uc3QgeyByZWdpc3RlclN0b3JlIH0gPSB3cC5kYXRhO1xuXG5yZWdpc3RlclN0b3JlKFwiYzktYmxvY2tzL3R3aXR0ZXJcIiwge1xuXHRyZWR1Y2VyLFxuXHRzZWxlY3RvcnMsXG5cdGFjdGlvbnMsXG5cdGNvbnRyb2xzLFxuXHRyZXNvbHZlcnNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL2luZGV4LmpzIiwiZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgZmVlZHM6IHt9LCBwcm9maWxlczoge30gfSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiU0VUX1RXSVRURVJfRkVFRFwiOlxuXHRcdFx0aWYgKCFzdGF0ZS5mZWVkc1thY3Rpb24ucXVlcnldICYmIGFjdGlvbi5mZWVkKSB7XG5cdFx0XHRcdHN0YXRlLmZlZWRzW2FjdGlvbi5xdWVyeV0gPSBhY3Rpb24uZmVlZDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJTRVRfVFdJVFRFUl9QUk9GSUxFXCI6XG5cdFx0XHRpZiAoIXN0YXRlLnByb2ZpbGVzW2FjdGlvbi5xdWVyeV0gJiYgYWN0aW9uLnByb2ZpbGUpIHtcblx0XHRcdFx0c3RhdGUucHJvZmlsZXNbYWN0aW9uLnF1ZXJ5XSA9IGFjdGlvbi5wcm9maWxlO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Ly8gbm8gZGVmYXVsdFxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3JlZHVjZXIuanMiLCJpbXBvcnQgcHJlcGFyZVF1ZXJ5IGZyb20gXCIuL3ByZXBhcmUtcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3aXR0ZXJGZWVkKHN0YXRlLCBkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwiZmVlZFwiLCBkYXRhKTtcblxuXHRyZXR1cm4gc3RhdGUuZmVlZHNbcXVlcnldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHdpdHRlclByb2ZpbGUoc3RhdGUsIGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXG5cdHJldHVybiBzdGF0ZS5wcm9maWxlc1txdWVyeV07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBhcnJheVByZWZpeEdlbmVyYXRvcnMgPSB7XG4gICAgYnJhY2tldHM6IGZ1bmN0aW9uIGJyYWNrZXRzKHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICB9LFxuICAgIGNvbW1hOiAnY29tbWEnLFxuICAgIGluZGljZXM6IGZ1bmN0aW9uIGluZGljZXMocHJlZml4LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICB9LFxuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgIH1cbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0Rm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tkZWZhdWx0Rm9ybWF0XSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaXNOb25OdWxsaXNoUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNOb25OdWxsaXNoUHJpbWl0aXZlKHYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnc3ltYm9sJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG59O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgY2hhcnNldFxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSBvYmouam9pbignLCcpO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG4vLyBUaGlzIGlzIHdoYXQgYnJvd3NlcnMgd2lsbCBzdWJtaXQgd2hlbiB0aGUg4pyTIGNoYXJhY3RlciBvY2N1cnMgaW4gYW5cbi8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBib2R5IGFuZCB0aGUgZW5jb2Rpbmcgb2YgdGhlIHBhZ2UgY29udGFpbmluZ1xuLy8gdGhlIGZvcm0gaXMgaXNvLTg4NTktMSwgb3Igd2hlbiB0aGUgc3VibWl0dGVkIGZvcm0gaGFzIGFuIGFjY2VwdC1jaGFyc2V0XG4vLyBhdHRyaWJ1dGUgb2YgaXNvLTg4NTktMS4gUHJlc3VtYWJseSBhbHNvIHdpdGggb3RoZXIgY2hhcnNldHMgdGhhdCBkbyBub3QgY29udGFpblxuLy8gdGhlIOKckyBjaGFyYWN0ZXIsIHN1Y2ggYXMgdXMtYXNjaWkuXG52YXIgaXNvU2VudGluZWwgPSAndXRmOD0lMjYlMjMxMDAwMyUzQic7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKVxuXG4vLyBUaGVzZSBhcmUgdGhlIHBlcmNlbnQtZW5jb2RlZCB1dGYtOCBvY3RldHMgcmVwcmVzZW50aW5nIGEgY2hlY2ttYXJrLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgYWN0dWFsbHkgaXMgdXRmLTggZW5jb2RlZC5cbnZhciBjaGFyc2V0U2VudGluZWwgPSAndXRmOD0lRTIlOUMlOTMnOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBjbGVhblN0ciA9IG9wdGlvbnMuaWdub3JlUXVlcnlQcmVmaXggPyBzdHIucmVwbGFjZSgvXlxcPy8sICcnKSA6IHN0cjtcbiAgICB2YXIgbGltaXQgPSBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQ7XG4gICAgdmFyIHBhcnRzID0gY2xlYW5TdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIGxpbWl0KTtcbiAgICB2YXIgc2tpcEluZGV4ID0gLTE7IC8vIEtlZXAgdHJhY2sgb2Ygd2hlcmUgdGhlIHV0Zjggc2VudGluZWwgd2FzIGZvdW5kXG4gICAgdmFyIGk7XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldDtcbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAocGFydHNbaV0uaW5kZXhPZigndXRmOD0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0c1tpXSA9PT0gY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV0gPT09IGlzb1NlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNraXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaSA9IHBhcnRzLmxlbmd0aDsgLy8gVGhlIGVzbGludCBzZXR0aW5ncyBkbyBub3QgYWxsb3cgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGkgPT09IHNraXBJbmRleCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICB2YXIgYnJhY2tldEVxdWFsc1BvcyA9IHBhcnQuaW5kZXhPZignXT0nKTtcbiAgICAgICAgdmFyIHBvcyA9IGJyYWNrZXRFcXVhbHNQb3MgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBicmFja2V0RXF1YWxzUG9zICsgMTtcblxuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UocG9zICsgMSksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmludGVycHJldE51bWVyaWNFbnRpdGllcyAmJiBjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIHZhbCA9IGludGVycHJldE51bWVyaWNFbnRpdGllcyh2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmNvbW1hICYmIHZhbC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmNvbWJpbmUob2JqW2tleV0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuICAgIHZhciBsZWFmID0gdmFsO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBvcHRpb25zLmRlcHRoID4gMCAmJiBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAob3B0aW9ucy5kZXB0aCA+IDAgJiYgKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxudmFyIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZWNvZGVyICE9PSBudWxsICYmIG9wdHMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRzLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGNoYXJzZXQgPSB0eXBlb2Ygb3B0cy5jaGFyc2V0ID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmNoYXJzZXQgOiBvcHRzLmNoYXJzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBhbGxvd1Byb3RvdHlwZXM6IHR5cGVvZiBvcHRzLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXMsXG4gICAgICAgIGFycmF5TGltaXQ6IHR5cGVvZiBvcHRzLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0cy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdCxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBjb21tYTogdHlwZW9mIG9wdHMuY29tbWEgPT09ICdib29sZWFuJyA/IG9wdHMuY29tbWEgOiBkZWZhdWx0cy5jb21tYSxcbiAgICAgICAgZGVjb2RlcjogdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXIsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRzLmRlbGltaXRlcikgPyBvcHRzLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uLCBuby1leHRyYS1wYXJlbnNcbiAgICAgICAgZGVwdGg6ICh0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgfHwgb3B0cy5kZXB0aCA9PT0gZmFsc2UpID8gK29wdHMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aCxcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IG9wdHMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWUsXG4gICAgICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogdHlwZW9mIG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID09PSAnYm9vbGVhbicgPyBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA6IGRlZmF1bHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyxcbiAgICAgICAgcGFyYW1ldGVyTGltaXQ6IHR5cGVvZiBvcHRzLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdCxcbiAgICAgICAgcGFyc2VBcnJheXM6IG9wdHMucGFyc2VBcnJheXMgIT09IGZhbHNlLFxuICAgICAgICBwbGFpbk9iamVjdHM6IHR5cGVvZiBvcHRzLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHMsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKTtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSB1dGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcblxuZXhwb3J0IGZ1bmN0aW9uIEFQSV9GRVRDSCh7IHJlcXVlc3QgfSkge1xuXHRyZXR1cm4gYXBpRmV0Y2gocmVxdWVzdCkudGhlbihmZXRjaGVkRGF0YSA9PiB7XG5cdFx0aWYgKGZldGNoZWREYXRhICYmIGZldGNoZWREYXRhLnN1Y2Nlc3MgJiYgZmV0Y2hlZERhdGEucmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiBmZXRjaGVkRGF0YS5yZXNwb25zZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9jb250cm9scy5qcyIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHByZXBhcmVRdWVyeSBmcm9tIFwiLi9wcmVwYXJlLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0VHdpdHRlckZlZWQoZGF0YSkge1xuXHRjb25zdCBxdWVyeSA9IHByZXBhcmVRdWVyeShcImZlZWRcIiwgZGF0YSk7XG5cdGNvbnN0IGZlZWQgPSB5aWVsZCBhY3Rpb25zLmFwaUZldGNoKHsgcGF0aDogcXVlcnkgfSk7XG5cblx0cmV0dXJuIGFjdGlvbnMuc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldFR3aXR0ZXJQcm9maWxlKGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXHRjb25zdCBwcm9maWxlID0geWllbGQgYWN0aW9ucy5hcGlGZXRjaCh7IHBhdGg6IHF1ZXJ5IH0pO1xuXG5cdHJldHVybiBhY3Rpb25zLnNldFR3aXR0ZXJQcm9maWxlKHF1ZXJ5LCBwcm9maWxlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9yZXNvbHZlcnMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHsgcmVnaXN0ZXJQbHVnaW4gfSA9IHdwLnBsdWdpbnM7XG5jb25zdCB7IFBsdWdpblNpZGViYXIsIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gfSA9IHdwLmVkaXRQb3N0O1xuXG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgQnV0dG9uLCBQYW5lbEJvZHksIERhc2hpY29uIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5cbmltcG9ydCBDb2xvckFwcGVuZGVyIGZyb20gXCIuLi9jb2xvci1hcHBlbmRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmdcIjtcbmltcG9ydCB7IFRlbXBsYXRlc01vZGFsIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy1tb2RhbFwiO1xuXG5jbGFzcyBDOSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlzTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW1cblx0XHRcdFx0XHRpY29uPXs8TG9nbyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIG1hcmdpbjogXCIwIDEwcHggMCA2cHhcIiB9fSAvPn1cblx0XHRcdFx0XHR0YXJnZXQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e19fKFwiQ09WRVJUIE5JTkUgQmxvY2tzXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0+XG5cdFx0XHRcdDxQbHVnaW5TaWRlYmFyXG5cdFx0XHRcdFx0bmFtZT1cImM5LWJsb2Nrc1wiXG5cdFx0XHRcdFx0aWQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkNPVkVSVCBOSU5FIEJsb2Nrc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcInNlY3Rpb24tdGVtcGxhdGVzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NoZWR1bGVcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTZWN0aW9uIFRlbXBsYXRlc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJwYWdlLXRlbXBsYXRlc1wiIH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWVkaXRvci1jb2RlXCIgLz5cblx0XHRcdFx0XHRcdFx0e19fKFwiUGFnZSBUZW1wbGF0ZXNcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IFwic2F2ZWQtYmxvY2tzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tc2V0dGluZ3NcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTYXZlZCBCbG9ja3NcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8Yj5cblx0XHRcdFx0XHRcdFx0XHRDb2xvciBQYWxldHRlXG5cdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHQ8Q29sb3JBcHBlbmRlciAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXI+XG5cdFx0XHRcdHtcInNlY3Rpb24tdGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0gLz59XG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KX1cblx0XHRcdFx0XHRcdGluaXRpYWw9XCJzZWN0aW9uc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtcInBhZ2UtdGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0gLz59XG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KX1cblx0XHRcdFx0XHRcdGluaXRpYWw9XCJwYWdlc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtcInNhdmVkLWJsb2Nrc1wiID09PSBpc01vZGFsT3BlbiA/IChcblx0XHRcdFx0XHQ8VGVtcGxhdGVzTW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiVGVtcGxhdGVzXCJcblx0XHRcdFx0XHRcdGljb249ezxEYXNoaWNvbiBpY29uPXtcInNjaGVkdWxlXCJ9IC8+fVxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSl9XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiYmxvY2tzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0KX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5yZWdpc3RlclBsdWdpbihcImM5LWJsb2Nrc1wiLCB7XG5cdGljb246IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXBsdWdpbi1pY29uXCI+XG5cdFx0XHQ8TG9nbyAvPlxuXHRcdDwvZGl2PlxuXHQpLFxuXHRyZW5kZXI6IEM5XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246aG92ZXIgLmM5LXBsdWdpbi1pY29uIHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxNnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnICosLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgKiwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgKntzdHJva2U6aW5pdGlhbCAhaW1wb3J0YW50fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl0sLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXSwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXXtmaWxsOiNmZmYgIWltcG9ydGFudH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uIC5jOS1wbHVnaW4taWNvbiBzcGFue21hcmdpbjotMnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3BhbiBbZmlsbD1cXFwiI2ZmZlxcXCJde2ZpbGw6IzU1NWQ2NiAhaW1wb3J0YW50fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b257ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvO3BhZGRpbmc6MTVweCAxMHB4O21hcmdpbi1ib3R0b206MTZweDtmbGV4LXNocmluazowO292ZXJmbG93OmhpZGRlbjtjb2xvcjppbmhlcml0O3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MXB4IHNvbGlkO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246MC4ycyBjb2xvciwgMC4ycyBiYWNrZ3JvdW5kLWNvbG9yLCAwLjJzIGJvcmRlci1jb2xvciwgMC4ycyBib3gtc2hhZG93fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24sLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpob3ZlciwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246Zm9jdXM6ZW5hYmxlZCwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZSwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZTplbmFibGVke2JvcmRlci1jb2xvcjpyZ2JhKDc5LDg5LDEwNSwwLjIpO2JveC1zaGFkb3c6bm9uZX0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmhvdmVyLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5Zjl9LnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1cywucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztib3JkZXItY29sb3I6IzAwN2ZhYztib3gtc2hhZG93OjAgMCAwIDJweCAjMDBhMGQyfS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87bWFyZ2luLXRvcDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjI0cHh9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgZ2V0IGZyb20gXCJsb2Rhc2gvZ2V0XCI7XG5pbXBvcnQgQ3VzdG9tUGFsZXR0ZSBmcm9tIFwiLi4vY3VzdG9tLXBhbGV0dGVcIjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCwgRGFzaGljb24sIEJ1dHRvbiwgVG9vbHRpcCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFNlbGVjdCwgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xuY29uc3QgeyBfXywgc3ByaW50ZiB9ID0gd3AuaTE4bjtcbmNsYXNzIENvbG9yQXBwZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMuc2F2ZUNvbmZpZyA9IHRoaXMuc2F2ZUNvbmZpZy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2F2ZUM5Q29sb3JzID0gdGhpcy5zYXZlQzlDb2xvcnMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNhdmVDb2xvcnMgPSB0aGlzLnNhdmVDb2xvcnMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmtiQ29sb3JVbmlxdWVJRCA9IC0xO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc1NhdmluZzogZmFsc2UsXG5cdFx0XHRjOUNvbG9yczogYzlfYmxvY2tzX3BhcmFtcy5jb2xvcnNcblx0XHRcdFx0PyBKU09OLnBhcnNlKGM5X2Jsb2Nrc19wYXJhbXMuY29sb3JzKVxuXHRcdFx0XHQ6IHsgcGFsZXR0ZTogW10sIG92ZXJyaWRlOiBmYWxzZSB9LFxuXHRcdFx0b3JpZ0NvbG9yczogYzlfYmxvY2tzX3BhcmFtcy5vcmlnX2NvbG9yc1xuXHRcdFx0XHQ/IGM5X2Jsb2Nrc19wYXJhbXMub3JpZ19jb2xvcnNbMF1cblx0XHRcdFx0OiBbXSxcblx0XHRcdGNvbG9yczogXCJcIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmNvbG9ycykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogdGhpcy5wcm9wcy5iYXNlQ29sb3JzIH0pO1xuXHRcdH1cblxuXHRcdHRoaXMua2JDb2xvclVuaXF1ZUlEID0gdGhpcy5zdGF0ZS5jOUNvbG9yc1xuXHRcdFx0PyB0aGlzLnN0YXRlLmM5Q29sb3JzLnBhbGV0dGUubGVuZ3RoXG5cdFx0XHQ6IDA7XG5cdH1cblxuXHRzYXZlQ29uZmlnKCkge1xuXHRcdGlmIChmYWxzZSA9PT0gdGhpcy5zdGF0ZS5pc1NhdmluZykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzU2F2aW5nOiB0cnVlIH0pO1xuXHRcdFx0Y29uc3QgY29uZmlnID0gdGhpcy5zdGF0ZS5jOUNvbG9ycztcblx0XHRcdGNvbnN0IHNldHRpbmdNb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRcdFx0YzlfYmxvY2tzX2NvbG9yczogSlNPTi5zdHJpbmdpZnkoY29uZmlnKVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRcdHNldHRpbmdNb2RlbC5zYXZlKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc1NhdmluZzogZmFsc2UsIGM5Q29sb3JzOiBjb25maWcgfSk7XG5cdFx0XHRcdGM5X2Jsb2Nrc19wYXJhbXMuY29sb3JzID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcblx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVTZXR0aW5ncyh7IGNvbG9yczogdGhpcy5zdGF0ZS5jb2xvcnMgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0c2F2ZUM5Q29sb3JzKHZhbHVlLCBpbmRleCkge1xuXHRcdGNvbnN0IHsgYzlDb2xvcnMgfSA9IHRoaXMuc3RhdGU7XG5cdFx0YzlDb2xvcnMucGFsZXR0ZVtpbmRleF0gPSB7IC4uLmM5Q29sb3JzW2luZGV4XSwgLi4udmFsdWUgfTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGM5Q29sb3JzXG5cdFx0fSk7XG5cdH1cblx0c2F2ZUNvbG9ycyh2YWx1ZSwgaW5kZXgpIHtcblx0XHRjb25zdCB7IGNvbG9ycyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb2xvcnNbaW5kZXhdID0gdmFsdWU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgY29sb3JzIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGM5Q29sb3JzLCBjb2xvcnMsIG9yaWdDb2xvcnMgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRjb25zdCBub25FZGl0YWJsZXMgPSBbXTtcblx0XHRjb25zdCBlZGl0YWJsZXMgPSBbXTtcblxuXHRcdEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb2xvcnMpLm1hcChjdXJyID0+IHtcblx0XHRcdGlmICh1bmRlZmluZWQgIT09IGN1cnIuc2x1ZyAmJiBcImM5LXBhbGV0dGVcIiA9PT0gY3Vyci5zbHVnLnN1YnN0cigwLCAxMCkpIHtcblx0XHRcdFx0ZWRpdGFibGVzLnB1c2goY3Vycik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub25FZGl0YWJsZXMucHVzaChjdXJyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZVwiPlxuXHRcdFx0XHR7Y29sb3JzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+VGhlbWUgQ29sb3JzLjwvcD5cblx0XHRcdFx0XHRcdHtub25FZGl0YWJsZXMubWFwKGN1cnIgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtjdXJyLnNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyLm5hbWUgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzOiBjb2xvciBoZXggY29kZSBlLmc6IFwiI2YwMFwiLlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcHJpbnRmKF9fKFwiQ29sb3IgY29kZTogJXNcIiksIGN1cnIuY29sb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLWNvbG9yLXBhbGV0dGVfX2l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogY3Vyci5jb2xvciB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImxvY2tcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0e2NvbG9ycyAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWNvbG9yLXBhbGV0dGVcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPkM5IEJsb2NrIENvbG9ycy48L3A+XG5cdFx0XHRcdFx0XHR7ZWRpdGFibGVzLm1hcCgoY3VyciwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT17Y3Vyci5zbHVnfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZV9faXRlbS13cmFwcGVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxDdXN0b21QYWxldHRlXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyLm5hbWUgPyBjdXJyLm5hbWUgOiBfXyhcIkNvbG9yXCIpICsgXCIgXCIgKyBpbmRleCArIDFcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e2N1cnIuY29sb3IgPyBjdXJyLmNvbG9yIDogXCIjZmZmZmZmXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblNhdmU9eyh2YWx1ZSwgdGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlQzlDb2xvcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjb2xvcjogdmFsdWUsIG5hbWU6IHRpdGxlLCBzbHVnOiBjdXJyLnNsdWcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb2xvcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjb2xvcjogdmFsdWUsIG5hbWU6IHRpdGxlLCBzbHVnOiBjdXJyLnNsdWcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQobm9uRWRpdGFibGVzLmxlbmd0aCA/IG5vbkVkaXRhYmxlcy5sZW5ndGggOiAwKSArIGluZGV4XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbmZpZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0ezAgPCBjOUNvbG9ycy5wYWxldHRlLmxlbmd0aCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzktY29sb3JzLXJlbW92ZS1sYXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJSZW1vdmUgTGFzdCBDb2xvclwiKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjOUNvbG9ycy5wYWxldHRlLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ycy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmtiQ29sb3JVbmlxdWVJRCAtPSAxO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjOUNvbG9yczogYzlDb2xvcnMgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogY29sb3JzIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbmZpZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtfXyhcIlJlbW92ZSBMYXN0IENvbG9yXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImVkaXRvci1yZW1vdmVmb3JtYXR0aW5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWNvbG9ycy1hZGQtbmV3XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmlzU2F2aW5nXG5cdFx0XHRcdFx0XHRcdFx0PyBcImtiLWFkZC1idG4taXMtc2F2aW5nXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwia2ItYWRkLWJ0bi1pcy1hY3RpdmVcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc1NhdmluZ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNTYXZpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHVuZGVmaW5lZCA9PT0gYzlDb2xvcnMucGFsZXR0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdGM5Q29sb3JzLnBhbGV0dGUgPSBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRsZXQgaWQgPSB0aGlzLmtiQ29sb3JVbmlxdWVJRDtcblx0XHRcdFx0XHRcdFx0YzlDb2xvcnMucGFsZXR0ZS5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCIjODg4ODg4XCIsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogX18oXCJDb2xvclwiKSArIFwiIFwiICsgaWQsXG5cdFx0XHRcdFx0XHRcdFx0c2x1ZzogXCJjOS1wYWxldHRlLVwiICsgaWRcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCIjODg4ODg4XCIsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogX18oXCJDb2xvclwiKSArIFwiIFwiICsgaWQsXG5cdFx0XHRcdFx0XHRcdFx0c2x1ZzogXCJjOS1wYWxldHRlLVwiICsgaWRcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMua2JDb2xvclVuaXF1ZUlEICs9IDE7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjOUNvbG9yczogYzlDb2xvcnMgfSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IGNvbG9ycyB9KTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlQ29uZmlnKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17X18oXCJBZGQgQ29sb3JcIil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKFwiQWRkIENvbG9yXCIpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3VuZGVmaW5lZCAhPT0gYzlDb2xvcnMucGFsZXR0ZSAmJiB1bmRlZmluZWQgIT09IGM5Q29sb3JzLnBhbGV0dGVbMF0gJiYgKFxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlVzZSBvbmx5IEM5IEJsb2NrcyBDb2xvcnM/XCIpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtcblx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgIT09IGM5Q29sb3JzLm92ZXJyaWRlID8gYzlDb2xvcnMub3ZlcnJpZGUgOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IG5ld0NvbG9ycztcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdDOUNvbG9ycyA9IHRoaXMuc3RhdGUuYzlDb2xvcnM7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydWUgPT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdDb2xvcnMgPSBuZXdDOUNvbG9ycy5wYWxldHRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3QzlDb2xvcnMub3ZlcnJpZGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdDOUNvbG9ycy5vdmVycmlkZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3Q29sb3JzID0gWy4uLm9yaWdDb2xvcnMsIC4uLm5ld0M5Q29sb3JzLnBhbGV0dGVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYzlDb2xvcnM6IG5ld0M5Q29sb3JzIH0pO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IG5ld0NvbG9ycyB9KTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb25maWcoKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoW1xuXHR3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3QgeyBnZXRTZXR0aW5ncyB9ID0gc2VsZWN0KFwiY29yZS9ibG9jay1lZGl0b3JcIik7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRiYXNlQ29sb3JzOiBnZXQoc2V0dGluZ3MsIFtcImNvbG9yc1wiXSwgW10pXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3QgeyB1cGRhdGVTZXR0aW5ncyB9ID0gZGlzcGF0Y2goXCJjb3JlL2Jsb2NrLWVkaXRvclwiKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXBkYXRlU2V0dGluZ3Ncblx0XHR9O1xuXHR9KVxuXSkoQ29sb3JBcHBlbmRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb2xvci1hcHBlbmRlci9pbmRleC5qcyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jOS1ibG9jay1kZWZhdWx0LXBhbGV0dGUgLmNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZV9faXRlbXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXJ7dHJhbnNmb3JtOnNjYWxlKDEuMSl9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXI6aG92ZXJ7dHJhbnNmb3JtOnNjYWxlKDEuMSl9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtIHN2Z3tjb2xvcjojNjQ2NDY0fS5jOS1jb2xvcnMtcmVtb3ZlLWxhc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjI4cHg7d2lkdGg6MjhweDttYXJnaW4tcmlnaHQ6MTRweDttYXJnaW4tYm90dG9tOjE0cHh9LmM5LWNvbG9ycy1yZW1vdmUtbGFzdCAuY29tcG9uZW50cy1idXR0b257Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jOS1jb2xvcnMtYWRkLW5ld3ttYXJnaW4tYm90dG9tOjE2cHh9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdEJ1dHRvbixcblx0UG9wb3Zlcixcblx0Q29sb3JJbmRpY2F0b3IsXG5cdENvbG9yUGlja2VyLFxuXHRUZXh0Q29udHJvbCxcblx0VG9vbHRpcFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcblxuY2xhc3MgQ3VzdG9tUGFsZXR0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzVmlzaWJsZTogZmFsc2UsXG5cdFx0XHRjb2xvcjogXCJcIixcblx0XHRcdG5hbWU6IFwiXCJcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yVmFsdWUsIG5hbWU6IHRoaXMucHJvcHMubmFtZVZhbHVlIH0pO1xuXHR9XG5cblx0dG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiB0cnVlIH0pO1xuXHR9O1xuXG5cdHRvZ2dsZUNsb3NlID0gKCkgPT4ge1xuXHRcdGlmICh0cnVlID09PSB0aGlzLnN0YXRlLmlzVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmNvbG9yLCB0aGlzLnN0YXRlLm5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRjaGFuZ2VDb2xvciA9IHZhbHVlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29sb3I6IHZhbHVlIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmlzVmlzaWJsZSAmJiAoXG5cdFx0XHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wIGxlZnRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9wb3Zlci1jb2xvclwiXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLnRvZ2dsZUNsb3NlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDb2xvclBpY2tlclxuXHRcdFx0XHRcdFx0XHRjb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0dW5kZWZpbmVkID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8IFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5wcm9wcy5jb2xvclZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZUNvbXBsZXRlPXtjb2xvciA9PiB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yLmhleCl9XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVBbHBoYVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJOYW1lOlwiKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdHVuZGVmaW5lZCA9PT0gdGhpcy5zdGF0ZS5uYW1lIHx8IFwiXCIgPT09IHRoaXMuc3RhdGUubmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLm5hbWVWYWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0OiB0aGlzLnN0YXRlLm5hbWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BvcG92ZXI+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmlzVmlzaWJsZSAmJiAoXG5cdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJFZGl0IENvbG9yXCIpfT5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcImM5LWNvbG9yLWljb24taW5kaWNhdGVcIn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50b2dnbGVDbG9zZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENvbG9ySW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktYWR2YW5jZWQtY29sb3ItaW5kaWNhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0cmFuc3BhcmVudFwiID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgPT09IHRoaXMuc3RhdGUuY29sb3IgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLmNvbG9yRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshdGhpcy5zdGF0ZS5pc1Zpc2libGUgJiYgKFxuXHRcdFx0XHRcdDxUb29sdGlwIHRleHQ9e19fKFwiRWRpdCBDb2xvclwiKX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XCJjOS1jb2xvci1pY29uLWluZGljYXRlXCJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlzaWJsZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENvbG9ySW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktYWR2YW5jZWQtY29sb3ItaW5kaWNhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0cmFuc3BhcmVudFwiID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgPT09IHRoaXMuc3RhdGUuY29sb3IgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLmNvbG9yRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWxldHRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY3VzdG9tLXBhbGV0dGUvaW5kZXguanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYzktY3VzdG9tLWNvbG9yLXNldHRpbmdzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRle3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjFzIGVhc2U7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRlOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjIpfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRlIC5jb21wb25lbnQtY29sb3ItaW5kaWNhdG9yLmM5LWFkdmFuY2VkLWNvbG9yLWluZGljYXRle3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjB9LmNvbXBvbmVudHMtcG9wb3Zlci5wb3BvdmVyLWNvbG9yPi5jb21wb25lbnRzLXBvcG92ZXJfX2NvbnRlbnQ+LmNvbXBvbmVudHMtYmFzZS1jb250cm9se3BhZGRpbmc6MCAxMHB4fVxcblwiLCBcIlwiXSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9XG4vKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIFwiZGF0YS1uYW1lXCI6IFwiTGF5ZXIgMlwiXG59LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTQ3IDEzOC4wNkM0MC4zNyAxMjMuOSA0MC44NCAzNi40MSA4My41NCAyMi40YzAgMC0xNS42NCA3LjI5LTEwLjEyIDI3LjQ1IDcuMi0xMy42OCAyMC4zMy0zNy4yMiA1Ny43Ny00My40NiAyNC0yLjg5LTEzLjE1IDEuMS02IDIyLjIyLjI0LTguODggNTkuNDEtNDUgMTA4LTE5LjgxQzI0Ni40MyAxMDQuNjkgMTc3IDExMC4wNiAxNzcgMTEwLjA2czE0Ljk1IDIuMzggMjMuODMtLjVjLTkuMTIgMzkuODQtNjMuMTMgNDIuMTQtNjMuMTMgNDIuMTRzMjAuNTEgNS4xMSAzNC45MiAyLjQ3Yy00OS40NSAzMi40LTExNi44Ni00Ljg2LTExNi44Ni00Ljg2LS4yNy4wOC0uODMtLjQzLTEuNTgtMS4zMWwxMTItNzhhMjUuMDkgMjUuMDkgMCAxMC02LTYuMjdMNzkuOSAxMjAuNGwtMi4yMy0zLjI1LTMwLjU5IDIxTTE4My43MiAzMy43NGExNi4yNSAxNi4yNSAwIDExLTE4Ljg0IDEzLjE3IDE2LjI0IDE2LjI0IDAgMDExOC44NC0xMy4xN3pNNTQuMTcgMTQ4bC0uMzktLjU1LjQzLjUyem0tMzQuNDMtNi41NWw4LjQ1LTUuNSA1LjUgOC40NC04LjQ0IDUuNS01LjUxLTguNDR6bS00LjM3IDE0Ljg3bC01LjUtOC40NCA4LjQ1LTUuNSA1LjUgOC40NC04LjQ1IDUuNXptLTkuODcgNi40N0wwIDE1NC4zNGw4LjQ1LTUuNSA1LjUgOC40NC04LjQ1IDUuNTF6bTQ2Ljg2LTEzLjg3bC0zOC45NSAyNS43My02Ljk1LTEwLjM0TDQ1IDEzOS4zbDcuMzMgOS42MnpcIixcbiAgZmlsbDogXCIjMTIxMjEyXCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgXCJkYXRhLW5hbWVcIjogXCJsb2dvIGRhcmsgZ3JleVwiXG59KSk7XG5cbnZhciBTdmdDOUZlYXRoZXJMb2dvR3JheSA9IGZ1bmN0aW9uIFN2Z0M5RmVhdGhlckxvZ29HcmF5KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyMzQuOTIgMTc0LjY1XCJcbiAgfSwgcHJvcHMpLCBfcmVmKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0M5RmVhdGhlckxvZ29HcmF5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2M5LWZlYXRoZXItbG9nby1ncmF5LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1vZGFsLCBUYWJQYW5lbCwgVG9vbHRpcCwgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjcmVhdGVCbG9jaywgcmF3SGFuZGxlciB9ID0gd3AuYmxvY2tzO1xuY29uc3QgYXBpRmV0Y2ggPSB3cC5hcGlGZXRjaDtcbmltcG9ydCBzdGFydENhc2UgZnJvbSBcImxvZGFzaC9zdGFydENhc2VcIjtcbmltcG9ydCBMYXlvdXRCdXR0b24gZnJvbSBcIi4vbGF5b3V0LWJ1dHRvblwiO1xuaW1wb3J0IFNlY3Rpb25CdXR0b24gZnJvbSBcIi4vc2VjdGlvbi1idXR0b25cIjtcbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcblxuLy8gdGVtcGxhdGVzXG5pbXBvcnQgdGVtcGxhdGVNYXJrdXBzIGZyb20gXCIuL3RlbXBsYXRlcy1tYXJrdXBcIjtcblxuY2xhc3MgVGVtcGxhdGVzTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXG5cdFx0dGhpcy5nZXRSZXVzYWJsZUJsb2NrcyA9IHRoaXMuZ2V0UmV1c2FibGVCbG9ja3MuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZXVzYWJsZXM6IFtdXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0UmV1c2FibGVCbG9ja3MoKTtcblx0fVxuXG5cdGFzeW5jIGdldFJldXNhYmxlQmxvY2tzKCkge1xuXHRcdGNvbnN0IHsgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgcG9zdFR5cGUgPSBhd2FpdCBhcGlGZXRjaCh7IHBhdGg6IGAvd3AvdjIvdHlwZXMvd3BfYmxvY2tgIH0pO1xuXHRcdGNvbnN0IHJldXNhYmxlcyA9IGF3YWl0IGFwaUZldGNoKHsgcGF0aDogYC93cC92Mi8ke3Bvc3RUeXBlLnJlc3RfYmFzZX1gIH0pO1xuXG5cdFx0Y29uc3QgYmxvY2tzID0gcmV1c2FibGVzLm1hcChpdGVtID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG5hbWU6IGl0ZW0udGl0bGUucmF3LFxuXHRcdFx0XHRjb250ZW50OiByYXdIYW5kbGVyKHtcblx0XHRcdFx0XHRIVE1MOiBpdGVtLmNvbnRlbnQucmF3LFxuXHRcdFx0XHRcdG1vZGU6IFwiQkxPQ0tTXCIsXG5cdFx0XHRcdFx0Y2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MXG5cdFx0XHRcdH0pXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyZXVzYWJsZXM6IGJsb2Nrc1xuXHRcdH0pO1xuXHR9XG5cblx0bWFya3VwVG9CbG9jayh0ZW1wbGF0ZU9iaiwgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKSB7XG5cdFx0bGV0IGJsb2NrT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVPYmopO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhibG9ja09iaikpIHtcblx0XHRcdGJsb2NrT2JqW2tleV0gPSByYXdIYW5kbGVyKHtcblx0XHRcdFx0SFRNTDogYmxvY2tPYmpba2V5XSxcblx0XHRcdFx0bW9kZTogXCJCTE9DS1NcIixcblx0XHRcdFx0Y2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmxvY2tPYmo7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyByZXNldEJsb2NrcywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gZGVmaW5lIHNlY3Rpb24gYW5kIGxheW91dCB0ZW1wbGF0ZXNcblxuXHRcdGNvbnN0IHNlY3Rpb25zID0ge1xuXHRcdFx0dGVzdDogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvY292ZXJcIiwgeyBhbGlnbjogXCJmdWxsXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9idXR0b25cIiwge1xuXHRcdFx0XHRcdHRleHQ6IF9fKFwiTGF5b3V0IFN3aXRjaGVyXCIsIFwiYzktYmxvY2tzXCIpLFxuXHRcdFx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdH0pXG5cdFx0XHRdLFxuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwcy5zZWN0aW9ucywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKVxuXHRcdH07XG5cblx0XHRjb25zdCBsYXlvdXRzID0ge1xuXHRcdFx0ZGVmYXVsdDogW2NyZWF0ZUJsb2NrKFwiY29yZS9wYXJhZ3JhcGhcIiwge30pXSxcblx0XHRcdGhlcm86IFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2NvdmVyXCIsIHsgYWxpZ246IFwiZnVsbFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvYnV0dG9uXCIsIHtcblx0XHRcdFx0XHR0ZXh0OiBfXyhcIkxheW91dCBTd2l0Y2hlclwiLCBcImM5LWJsb2Nrc1wiKSxcblx0XHRcdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvZ3JpZFwiLCB7fSwgW1xuXHRcdFx0XHRcdGNyZWF0ZUJsb2NrKFwiYzktYmxvY2tzL2NvbHVtbi1jb250YWluZXJcIiwge1xuXHRcdFx0XHRcdFx0Y29sdW1uczogMyxcblx0XHRcdFx0XHRcdGxheW91dDogXCJjOS0zLWNvbC1lcXVhbFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XSlcblx0XHRcdF0sXG5cdFx0XHRmZWF0dXJlZDogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvaGVhZGluZ1wiLCB7fSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9zcGFjZXJcIiwgeyBoZWlnaHQ6IFwiMTBcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL21lZGlhLXRleHRcIiwgeyBhbGlnbjogXCJmdWxsXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9zcGFjZXJcIiwgeyBoZWlnaHQ6IFwiNDBcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3F1b3RlXCIsIHt9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3NwYWNlclwiLCB7IGhlaWdodDogXCIyMFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvbWVkaWEtdGV4dFwiLCB7IG1lZGlhUG9zaXRpb246IFwicmlnaHRcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3BhcmFncmFwaFwiLCB7XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKFwiTGF5b3V0IFN3aXRjaGVyXCIsIFwiYzktYmxvY2tzXCIpXG5cdFx0XHRcdH0pXG5cdFx0XHRdLFxuXHRcdFx0bmVzdGVkOiBbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiYzktYmxvY2tzL2dyaWRcIiwge30sIFtcblx0XHRcdFx0XHRjcmVhdGVCbG9jayhcblx0XHRcdFx0XHRcdFwiYzktYmxvY2tzL2NvbHVtbi1jb250YWluZXJcIixcblx0XHRcdFx0XHRcdHsgY29sdW1uczogMywgbGF5b3V0OiBcImM5LTMtY29sLWVxdWFsXCIgfSxcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvY29sdW1uXCIsIHt9LCBbXG5cdFx0XHRcdFx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2J1dHRvblwiLCB7IHRleHQ6IFwiTWFrZSB0aGlzIFJlY2lwZVwiIH0pXG5cdFx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRdKVxuXHRcdFx0XSxcblx0XHRcdC8vIGNvbnZlcnQgbWFya3VwIHRvIGFjdHVhbCBibG9ja3Ncblx0XHRcdC4uLnRoaXMubWFya3VwVG9CbG9jayh0ZW1wbGF0ZU1hcmt1cHMubGF5b3V0cywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGNsYXNzTmFtZT1cImM5LXRlbXBsYXRlcy1tb2RhbFwiXG5cdFx0XHRcdHBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0c2l6ZT1cImxnXCJcblx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUYWJQYW5lbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImM5LXRlbXBsYXRlLXRhYnMgYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbFwiXG5cdFx0XHRcdFx0dGFicz17W1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBcInNlY3Rpb25zXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcIlNpbXBsZSBzZWN0aW9ucyB0byBjb25zdHJ1Y3QgeW91ciBwYWdlLlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImM5LWJsb2Nrc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlNlY3Rpb25zXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjOS10ZW1wbGF0ZS10YWJzLXRhYlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBcInBhZ2VzXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e19fKFwiUHJlLWRlc2lnbmVkIHJlYWR5IHRvIHVzZSBwYWdlcy5cIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiUGFnZXNcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImM5LXRlbXBsYXRlLXRhYnMtdGFiXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwiYmxvY2tzXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJNeSBUZW1wbGF0ZXMuXCIsIFwiYzktYmxvY2tzXCIpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlNhdmVkIEJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiYzktdGVtcGxhdGUtdGFicy10YWJcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0aW5pdGlhbFRhYk5hbWU9e3RoaXMucHJvcHMuaW5pdGlhbH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0YWIgPT4ge1xuXHRcdFx0XHRcdFx0c3dpdGNoICh0YWIubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlIFwic2VjdGlvbnNcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGFiLnRpdGxlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1zZWN0aW9uLW9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMoc2VjdGlvbnMpLm1hcChrID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWN0aW9uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJ3b3JkcHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oc3RhcnRDYXNlKGspLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VjdGlvbj17c2VjdGlvbnNba119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRCbG9ja3MoW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiQ2xlYXIgcGFnZVwiLCBcImM5LWJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRjYXNlIFwicGFnZXNcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGFiLnRpdGxlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1sYXlvdXQtb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhsYXlvdXRzKS5tYXAoayA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGF5b3V0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJ3b3JkcHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oc3RhcnRDYXNlKGspLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzW2tdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QmxvY2tzKFtdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb24gaWNvbj1cInRyYXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIkNsZWFyIHBhZ2VcIiwgXCJjOS1ibG9ja3NcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGFiLnRpdGxlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1zZWN0aW9uLW9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5yZXVzYWJsZXMubWFwKG9iaiA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VjdGlvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKG9iai5uYW1lLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VjdGlvbj17b2JqLmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRCbG9ja3MoW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiQ2xlYXIgcGFnZVwiLCBcImM5LWJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdDwvVGFiUGFuZWw+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgVGVtcGxhdGVzTW9kYWxXaXRoU2VsZWN0ID0gY29tcG9zZShbXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCwgeyBjbGllbnRJZCB9KSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRCbG9jaywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MIH0gPSBzZWxlY3QoXCJjb3JlL2VkaXRvclwiKTtcblx0XHRjb25zdCBibG9jayA9IGdldEJsb2NrKGNsaWVudElkKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YmxvY2ssXG5cdFx0XHRjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUw6IGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCgpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3QgeyByZXNldEJsb2NrcywgaW5zZXJ0QmxvY2tzIH0gPSBkaXNwYXRjaChcImNvcmUvZWRpdG9yXCIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXNldEJsb2Nrcyxcblx0XHRcdGluc2VydEJsb2Nrc1xuXHRcdH07XG5cdH0pXG5dKShUZW1wbGF0ZXNNb2RhbCk7XG5cbmV4cG9ydCB7IFRlbXBsYXRlc01vZGFsV2l0aFNlbGVjdCBhcyBUZW1wbGF0ZXNNb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2luZGV4LmpzIiwidmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyksXG4gICAgdXBwZXJGaXJzdCA9IHJlcXVpcmUoJy4vdXBwZXJGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvXG4gKiBbc3RhcnQgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGV0dGVyX2Nhc2UjU3R5bGlzdGljX29yX3NwZWNpYWxpc2VkX3VzYWdlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMS4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RhcnQgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnLS1mb28tYmFyLS0nKTtcbiAqIC8vID0+ICdGb28gQmFyJ1xuICpcbiAqIF8uc3RhcnRDYXNlKCdmb29CYXInKTtcbiAqIC8vID0+ICdGb28gQmFyJ1xuICpcbiAqIF8uc3RhcnRDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ0ZPTyBCQVInXG4gKi9cbnZhciBzdGFydENhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/ICcgJyA6ICcnKSArIHVwcGVyRmlyc3Qod29yZCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydENhc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3RhcnRDYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRlYnVyckxldHRlciA9IHJlcXVpcmUoJy4vX2RlYnVyckxldHRlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBMYXRpbiBVbmljb2RlIGxldHRlcnMgKGV4Y2x1ZGluZyBtYXRoZW1hdGljYWwgb3BlcmF0b3JzKS4gKi9cbnZhciByZUxhdGluID0gL1tcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx4ZmZcXHUwMTAwLVxcdTAxN2ZdL2c7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKSBhbmRcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrc19mb3JfU3ltYm9scykuXG4gKi9cbnZhciByZUNvbWJvTWFyayA9IFJlZ0V4cChyc0NvbWJvLCAnZycpO1xuXG4vKipcbiAqIERlYnVycnMgYHN0cmluZ2AgYnkgY29udmVydGluZ1xuICogW0xhdGluLTEgU3VwcGxlbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW4tMV9TdXBwbGVtZW50XyhVbmljb2RlX2Jsb2NrKSNDaGFyYWN0ZXJfdGFibGUpXG4gKiBhbmQgW0xhdGluIEV4dGVuZGVkLUFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX0V4dGVuZGVkLUEpXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMgYW5kIHJlbW92aW5nXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWJ1cnIoJ2TDqWrDoCB2dScpO1xuICogLy8gPT4gJ2RlamEgdnUnXG4gKi9cbmZ1bmN0aW9uIGRlYnVycihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmcucmVwbGFjZShyZUxhdGluLCBkZWJ1cnJMZXR0ZXIpLnJlcGxhY2UocmVDb21ib01hcmssICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VQcm9wZXJ0eU9mID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5T2YnKTtcblxuLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xudmFyIGRlYnVycmVkTGV0dGVycyA9IHtcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxuICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcbiAgJ1xceGUwJzogJ2EnLCAgJ1xceGUxJzogJ2EnLCAnXFx4ZTInOiAnYScsICdcXHhlMyc6ICdhJywgJ1xceGU0JzogJ2EnLCAnXFx4ZTUnOiAnYScsXG4gICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcbiAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxuICAnXFx4YzgnOiAnRScsICAnXFx4YzknOiAnRScsICdcXHhjYSc6ICdFJywgJ1xceGNiJzogJ0UnLFxuICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxuICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxuICAnXFx4ZWMnOiAnaScsICAnXFx4ZWQnOiAnaScsICdcXHhlZSc6ICdpJywgJ1xceGVmJzogJ2knLFxuICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXG4gICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxuICAnXFx4ZjInOiAnbycsICAnXFx4ZjMnOiAnbycsICdcXHhmNCc6ICdvJywgJ1xceGY1JzogJ28nLCAnXFx4ZjYnOiAnbycsICdcXHhmOCc6ICdvJyxcbiAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcbiAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcbiAgJ1xceGRkJzogJ1knLCAgJ1xceGZkJzogJ3knLCAnXFx4ZmYnOiAneScsXG4gICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXG4gICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXG4gICdcXHhkZic6ICdzcycsXG4gIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXG4gICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxuICAnXFx1MDEwMSc6ICdhJywgICdcXHUwMTAzJzogJ2EnLCAnXFx1MDEwNSc6ICdhJyxcbiAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxuICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXG4gICdcXHUwMTBlJzogJ0QnLCAgJ1xcdTAxMTAnOiAnRCcsICdcXHUwMTBmJzogJ2QnLCAnXFx1MDExMSc6ICdkJyxcbiAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcbiAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcbiAgJ1xcdTAxMWMnOiAnRycsICAnXFx1MDExZSc6ICdHJywgJ1xcdTAxMjAnOiAnRycsICdcXHUwMTIyJzogJ0cnLFxuICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXG4gICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcbiAgJ1xcdTAxMjgnOiAnSScsICAnXFx1MDEyYSc6ICdJJywgJ1xcdTAxMmMnOiAnSScsICdcXHUwMTJlJzogJ0knLCAnXFx1MDEzMCc6ICdJJyxcbiAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcbiAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcbiAgJ1xcdTAxMzYnOiAnSycsICAnXFx1MDEzNyc6ICdrJywgJ1xcdTAxMzgnOiAnaycsXG4gICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXG4gICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXG4gICdcXHUwMTQzJzogJ04nLCAgJ1xcdTAxNDUnOiAnTicsICdcXHUwMTQ3JzogJ04nLCAnXFx1MDE0YSc6ICdOJyxcbiAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxuICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcbiAgJ1xcdTAxNGQnOiAnbycsICAnXFx1MDE0Zic6ICdvJywgJ1xcdTAxNTEnOiAnbycsXG4gICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxuICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcbiAgJ1xcdTAxNWEnOiAnUycsICAnXFx1MDE1Yyc6ICdTJywgJ1xcdTAxNWUnOiAnUycsICdcXHUwMTYwJzogJ1MnLFxuICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXG4gICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxuICAnXFx1MDE2Myc6ICd0JywgICdcXHUwMTY1JzogJ3QnLCAnXFx1MDE2Nyc6ICd0JyxcbiAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXG4gICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxuICAnXFx1MDE3NCc6ICdXJywgICdcXHUwMTc1JzogJ3cnLFxuICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcbiAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXG4gICdcXHUwMTdhJzogJ3onLCAgJ1xcdTAxN2MnOiAneicsICdcXHUwMTdlJzogJ3onLFxuICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcbiAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXG4gICdcXHUwMTQ5JzogXCInblwiLCAnXFx1MDE3Zic6ICdzJ1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnJMZXR0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlYnVyckxldHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3dvcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlXb3JkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qc1xuLy8gbW9kdWxlIGlkID0gNDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGVXb3JkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlV29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVXb3Jkcy5qc1xuLy8gbW9kdWxlIGlkID0gNDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFNsaWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMYXlvdXRCdXR0b24gPSAoeyBsYWJlbCwgaWNvbiwgbGF5b3V0LCByZXNldEJsb2NrcywgaW5zZXJ0QmxvY2tzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCbG9ja3MoW10pO1xuICAgICAgICAgICAgICAgIGluc2VydEJsb2NrcyhsYXlvdXQpO1xuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8SWNvbiBpY29uPXtpY29ufSAvPlxuXHRcdFx0PHNwYW4+e2xhYmVsfTwvc3Bhbj5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdGNvbnN0IHsgcmVzZXRCbG9ja3MsIGluc2VydEJsb2NrcyB9ID0gZGlzcGF0Y2goXCJjb3JlL2VkaXRvclwiKTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlc2V0QmxvY2tzLFxuXHRcdGluc2VydEJsb2Nrc1xuXHR9O1xufSkoTGF5b3V0QnV0dG9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9sYXlvdXQtYnV0dG9uLmpzIiwiY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5cbmNvbnN0IFNlY3Rpb25CdXR0b24gPSAoeyBsYWJlbCwgaWNvbiwgc2VjdGlvbiwgaW5zZXJ0QmxvY2tzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0QmxvY2tzKHNlY3Rpb24pO1xuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8SWNvbiBpY29uPXtpY29ufSAvPlxuXHRcdFx0PHNwYW4+e2xhYmVsfTwvc3Bhbj5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdGNvbnN0IHsgaW5zZXJ0QmxvY2tzIH0gPSBkaXNwYXRjaChcImNvcmUvZWRpdG9yXCIpO1xuXG5cdHJldHVybiB7XG5cdFx0aW5zZXJ0QmxvY2tzXG5cdH07XG59KShTZWN0aW9uQnV0dG9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLWJ1dHRvbi5qcyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYzktdGVtcGxhdGVzLW1vZGFsIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXJ7Ym9yZGVyLWJvdHRvbTpub25lfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJze21hcmdpbi10b3A6LTI0cHh9QG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXsuYzktdGVtcGxhdGVzLW1vZGFse21pbi13aWR0aDo2MDBweDttYXgtd2lkdGg6NjAwcHg7bWFyZ2luLWxlZnQ6LTMwMHB4O3RyYW5zZm9ybTpub25lO3RvcDoxMTJweH19QG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KXsuYzktdGVtcGxhdGVzLW1vZGFse21pbi13aWR0aDo4MDBweDttYXgtd2lkdGg6ODAwcHg7bWFyZ2luLWxlZnQ6LTQwMHB4O3RyYW5zZm9ybTpub25lfX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXIgLmNvbXBvbmVudHMtbW9kYWxfX2ljb24tY29udGFpbmVyIHN2Z3tkaXNwbGF5OmJsb2NrO21hcmdpbi1yaWdodDoxMHB4fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlciAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVyLWhlYWRpbmd7Zm9udC13ZWlnaHQ6NjAwfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9uc3tkaXNwbGF5OmdyaWQ7Z3JpZC1jb2x1bW4tZ2FwOjFyZW07Z3JpZC1yb3ctZ2FwOjFyZW07Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg2LCAxZnIpfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbiwuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnMgYnV0dG9ue2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjojZDhkOGQ4ICNkMWQxZDEgI2JhYmFiYTtib3JkZXItcmFkaXVzOjNweDtib3gtc2hhZG93Omluc2V0IDAgLTFweCAwICNjY2M7cGFkZGluZzo1cHh9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktbGF5b3V0LW9wdGlvbnMgYnV0dG9uOmFjdGl2ZSwuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnMgYnV0dG9uOmFjdGl2ZXtib3JkZXItY29sb3I6Izk5OTtib3gtc2hhZG93Omluc2VydCAwIDFweCAwICM5OTl9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktbGF5b3V0LW9wdGlvbnMgYnV0dG9uIHNwYW4sLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbiBzcGFue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjAuOHJlbTtwYWRkaW5nOjJweCAwfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJzIC5jOS10ZW1wbGF0ZS10YWJzLXRhYntwYWRkaW5nOjEycHggMTZweDtjb2xvcjppbmhlcml0fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJzIC5jOS10ZW1wbGF0ZS10YWJzLXRhYjpmb2N1c3tvdXRsaW5lOm5vbmV9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuY29tcG9uZW50cy10YWItcGFuZWxfX3RhYnMgLmM5LXRlbXBsYXRlLXRhYnMtdGFiLmlzLWFjdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMDBhMGQyO3otaW5kZXg6MX1cXG5cIiwgXCJcIl0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTEhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB0ZW1wbGF0ZU1hcmt1cHMgPSB7XG5cdGxheW91dHM6IHtcblx0XHR0ZXN0QmxvY2tzOiBgXG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MSxcIm1pblNjcmVlbkhlaWdodFwiOjEwfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwiY29sdW1uTWF4V2lkdGhcIjowLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWNhcm91c2VsLWluZGljYXRvci0xXCIgY2xhc3M9XCJjOS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjAsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjEsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjIsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzIHtcImluc3RhbmNlSWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcyBhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbi0wXCI+PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MSxcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcxLTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTEtMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPlRvZ2dsZSBJdGVtPC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTEtMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjIsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMi0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UyLTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj5Ub2dnbGUgSXRlbTwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UyLTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oXCI+PC9oMT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MH0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY3RhIC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiIGNsYXNzPVwiYzktY3RhIGM5LWJsb2NrLWN0YSBjb250YWluZXIgcC01XCI+PGRpdiBjbGFzcz1cInJvd1wiPjxkaXYgY2xhc3M9XCJjOS1jdGEtY29udGVudCBjb2wtMTIgY29sLW1kLThcIj48ZGl2IGNsYXNzPVwiYzktY3RhLXRleHRcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY3RhIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3NvY2lhbC1zaGFyZSAvLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzIHtcImluc3RhbmNlSWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktaG9yaXpvbnRhbC10YWJzXCIgZGF0YS10YWItYWN0aXZlPVwidGFiLTFcIj48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnMgZC1mbGV4IG5hdi1qdXN0aWZpZWRcIiByb2xlPVwidGFibGlzdFwiPjxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgZGF0YS10b2dnbGU9XCJ0YWJcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLTEtMFwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi0xXCI+VGFiIDE8L2E+PC9saT48bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi0yLTBcIiBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi0yXCI+VGFiIDI8L2E+PC9saT48L3VsPjxkaXYgY2xhc3M9XCJjOS10YWJzLWNvbnRlbnQgdGFiLWNvbnRlbnRcIj48IS0tIHdwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi0xXCIsXCJ0YWJBY3RpdmVcIjpcInRhYi0xXCIsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ob3Jpem9udGFsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItMS0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLTFcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLTJcIixcInRhYkFjdGl2ZVwiOlwidGFiLTFcIixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWhvcml6b250YWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi0yLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItMlwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicyB7XCJpbnN0YW5jZUlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMgcm93XCIgZGF0YS10YWItYWN0aXZlPVwidGFiLTFcIj48ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0zXCI+PGRpdiBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIiByb2xlPVwidGFibGlzdFwiPjxhIGRhdGEtdG9nZ2xlPVwicGlsbFwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItMS0wXCIgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cInRhYi1idXR0b24tdGFiLTFcIj5UYWIgMTwvYT48YSBkYXRhLXRvZ2dsZT1cInBpbGxcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLTItMFwiIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRhYi1idXR0b24tdGFiLTJcIj5UYWIgMjwvYT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS05XCI+PGRpdiBjbGFzcz1cImM5LXRhYnMtY29udGVudCB0YWItY29udGVudFwiPjwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi0xXCIsXCJ0YWJBY3RpdmVcIjpcInRhYi0xXCIsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLTEtMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi0xXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLTJcIixcInRhYkFjdGl2ZVwiOlwidGFiLTFcIixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItMi0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLTJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIgLS0+PC9kaXY+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvcG9zdHMtZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXBvc3RzLWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvcG9zdC1ncmlkIC8tLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvcG9zdHMtZ3JpZCAtLT5cblx0XHRgLFxuXHRcdG1hcmtkb3duOlxuXHRcdFx0JzwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsIHtcImluc3RhbmNlSWRcIjowfSAtLT5cXG48ZGl2IGlkPVwiYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBjbGFzcz1cImM5LWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MCxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjwhLS0gd3A6aGVhZGluZyAtLT5cXG48aDI+YXdkYXdkPC9oMj5cXG48IS0tIC93cDpoZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPndhYWQ8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjEsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPmF3ZGF3ZGF3PC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjoyLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW1cIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5hd2RhZGF3ZGF3ZGF3PC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwgLS0+Jyxcblx0XHR0ZXN0Qmc6XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTUsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGdcIixcImJnSW1nQXR0YWNoXCI6dHJ1ZSxcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjgwfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktZml4ZWQgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo4MHZoXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjgpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcImNvbnRhaW5lckltZ1VSTFwiOm51bGwsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuNTExNTIwNzM3MzI3MTg5LFwieVwiOjAuNjI1fX0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlcnZpY2UgT2ZmZXJpbmcgTGFuZGluZyBQYWdlXCIsXCJzdWJoZWFkaW5nXCI6XCJzdWJoZWFkaW5nXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPlNlcnZpY2UgT2ZmZXJpbmcgTGFuZGluZyBQYWdlPC9oMT48ZGl2IGNsYXNzPVwiYzktaCBoMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtzdWJoZWFkaW5nPC9zbWFsbD48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnNwYWNlciAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cXG48IS0tIC93cDpzcGFjZXIgLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjozLFwibGF5b3V0XCI6XCJjOS0zLWNvbC1lcXVhbFwiLFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVySHVlXCI6XCIjZmZmZmZmXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktMy1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVwIDFcIixcInRhZ0xldmVsXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWhcIj5TdGVwIDE8L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLsKgPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgMlwiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMjwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBYLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVwIDNcIixcInRhZ0xldmVsXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWhcIj5TdGVwIDM8L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkNhcGl0YWxpemUgb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPicsXG5cdFx0cmVzdGF1cmFudE1lbnVMYW5kaW5nUGFnZTogXG5cdFx0YFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjEsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6NyxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjUwLFwiY29udGFpbmVyVmlkZW9VUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9yZXN0YXVyYW50LXZpZGVvLWJnLXdlYi5tb3ZcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy12aWRlb1wiIHN0eWxlPVwibWluLWhlaWdodDo1MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS12aWRlby1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiYzktZW1iZWQtY29udGFpbmVyXCI+PHZpZGVvIGlkPVwiY29udGFpbmVyVmlkZW8tMVwiIGNsYXNzPVwiYzktdmlkZW8tY3VzdG9tXCIgcGxheXNpbmxpbmUgYXV0b3BsYXkgbXV0ZWQgbG9vcCBzdHlsZT1cIm1pbi1oZWlnaHQ6NTB2aFwiPjxzb3VyY2Ugc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3Jlc3RhdXJhbnQtdmlkZW8tYmctd2ViLm1vdlwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+PC92aWRlbz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuNyk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJmdWxsXCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1mbHVpZFwiLFwidmVydGljYWxBbGlnblwiOlwiYm90dG9tXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgYWxpZ25mdWxsIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWJvdHRvbSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIHtcInZlcnRpY2FsQWxpZ25cIjpcImJvdHRvbVwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0IGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1ib3R0b21cIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTmV3IEZhbGwgTWVudVwiLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNhYmI4YzNcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImM5LXR4bCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2FiYjhjM1wiPk5ldyBGYWxsIE1lbnU8L2gxPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT1JERVIgVEhJUyBGSVNIIE9OTElORSBSSUdIVCBOT1dcIixcInRhZ0xldmVsXCI6NixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwid2VpZ2h0XCI6XCJub3JtYWxcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNiBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbm9ybWFsXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+T1JERVIgVEhJUyBGSVNIIE9OTElORSBSSUdIVCBOT1c8L2g2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY3RhIHtcInR5cGVcIjpcImM5LXNoXCIsXCJidXR0b25UZXh0XCI6XCJnZXQgc3RhcnRlZFwiLFwiYnV0dG9uQWxpZ25tZW50XCI6XCJsZWZ0XCIsXCJidXR0b25UZXh0Q29sb3JcIjpcIiMzMTMxMzFcIixcImJ1dHRvblNoYXBlXCI6XCJvdXRsaW5lXCIsXCJidXR0b25UYXJnZXRcIjp0cnVlLFwiY3RhTGF5b3V0XCI6XCJ0aHJlZS1xdWFydGVyc1wiLFwiY3RhUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiYWxpZ25cIjpcIndpZGVcIn0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiIGNsYXNzPVwiYzktY3RhIGM5LWJsb2NrLWN0YSBjb250YWluZXIgYWxpZ253aWRlIHAtNVwiPjxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwiYzktY3RhLWNvbnRlbnQgY29sLTEyIGNvbC1tZC05XCI+PGRpdiBjbGFzcz1cImM5LWN0YS10ZXh0IGM5LXNoXCI+PHA+TWFrZSBhIHJlc2VydmF0aW9uLCBidXkgYSByaW5nLCBnZXQgZW5nYWdlZCwgaGlnaCBmaXZlLjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktY3RhLWJ1dHRvbiBjb2wtMTIgY29sLW1kLTNcIj48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBjOS1idXR0b24tc2hhcGUtb3V0bGluZSBjOS1idXR0b24tc2l6ZS1tZWRpdW1cIiBzdHlsZT1cImNvbG9yOiMzMTMxMzFcIj5nZXQgc3RhcnRlZDxzcGFuIGNsYXNzPVwic3Itb25seVwiPihMaW5rIG9wZW5zIGluIG5ldyB3aW5kb3cpPC9zcGFuPjwvYT48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY3RhIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjIsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3NoYXduLWFuZy1ubXBXX1d3d1ZTYy11bnNwbGFzaC5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo3LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODAsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuNDcwMDQ2MDgyOTQ5MzA4OCxcInlcIjowLjg2NDE5NzUzMDg2NDE5NzV9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjQ3LjAwNDYwODI5NDkzMDg3NSUgODYuNDE5NzUzMDg2NDE5NzUlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zaGF3bi1hbmctbm1wV19Xd3dWU2MtdW5zcGxhc2guanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjcpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo0M30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgb25lLWNvbHVtblwiIHN0eWxlPVwibWluLWhlaWdodDo0M3ZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIHtcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0IGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXJcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQnJ1bmNoXCIsXCJzdWJoZWFkaW5nXCI6XCJBdmFpbGFibGUgb24gd2Vla2VuZHMgYW5kIGhvbGlkYXlzXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcImRpc3BsYXlMZXZlbFwiOlwiNVwiLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktdHhsIGRpc3BsYXktNVwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPkJydW5jaDwvaDE+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7QXZhaWxhYmxlIG9uIHdlZWtlbmRzIGFuZCBob2xpZGF5czwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJ3aWRlXCIsXCJjb2x1bW5zXCI6MyxcImNvbHVtbnNHYXBcIjoxLFwibGF5b3V0XCI6XCJjOS0zLWNvbC13aWRlcmlnaHRcIixcInZlcnRpY2FsQWxpZ25cIjpcImJvdHRvbVwiLFwib3ZlcmxheUh1ZVwiOlwiI2ZmZmZmZlwiLFwib3ZlcmxheU9wYWNpdHlcIjoxMCxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsaWdud2lkZSBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBteS01IGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0zIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1ib3R0b20gYzktMy1jb2wtd2lkZXJpZ2h0XCI+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7bWl4LWJsZW5kLW1vZGU6b3ZlcmxheVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMSBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNtYWxsIFBsYXRlc1wiLFwic3ViaGVhZGluZ1wiOlwic2VydmVkIGFsbCBkYXlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPlNtYWxsIFBsYXRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7c2VydmVkIGFsbCBkYXk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTmFjaG9zXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk5hY2hvczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE2PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+SG9tZW1hZGUgdG9ydGlsbGFzLCBjYXJuaXRhcywgbm8gYmVhbnMsIHplcm8gYmVhbnMsIHN0ZWFrcywgY2hpd293YSBjaGVlc2UsIG90aGVyIGdvb2Qgc3R1ZmY8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiVGFjb3NcIixcInN1YmhlYWRpbmdcIjpcIiQxM1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+VGFjb3M8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMzwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlBsYXRlIG9mIDMgc21hbGwgdGFjb3MuIExpa2UgdGhlIHRpbmllc3QgdGFjb3MgeW914oCZdmUgZXZlciBzZWVuIGZvciBmb3VydGVlbiBiaWcgb25lczwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDaGFyY3V0ZXJpZVwiLFwic3ViaGVhZGluZ1wiOlwiJDE0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5DaGFyY3V0ZXJpZTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+VGhpcyBpcyB3aGVyZSBpdHMgYXQgZmVsbGFzLiBCZWVmIGplcmt5IGluIGxpdHRsZSB0aW55IHNsaWNlcyBhbmQgc29tZSB3ZWlyZCBkaXBzIHRoYXQgbWFrZSBubyBzZW5zZTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJCZWVmIFRpcHNcIixcInN1YmhlYWRpbmdcIjpcIiQxMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+QmVlZiBUaXBzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5BdCB0aGlzIGZhciBpbnRvIHRoZSBmYWtlIG1lbnUgd2UgcmFuIG91dCBvZiBpZGVhczwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNYWMgXFx1MDAyNmFtcDsgQ2hlZXNlXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTBcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk1hYyAmYW1wOyBDaGVlc2U8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMDwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkxldOKAmXMgYmUgaG9uZXN0IHdpdGggb3Vyc2VsdmVz4oCmIG5vIG9uZSBpcyBnb2luZyB0byBvcmRlciB0aGlzPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MCxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hYmhpc2hlay1zYW53YS1saW1idS1MUjU1OURjc3Q3MC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1IbE5jaWd2VWk0US11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1XOU9LcnhCcWlaQS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIl0sXCJpZFwiOls3MzQwLDczNDIsNzM0MV19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWJoaXNoZWstc2Fud2EtbGltYnUtTFI1NTlEY3N0NzAtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstSGxOY2lndlVpNFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstVzlPS3J4QnFpWkEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRW50cmVlc1wiLFwic3ViaGVhZGluZ1wiOlwiN2FtLW5vb25cIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPkVudHJlZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOzdhbS1ub29uPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5ZIFN0cmlwXCIsXCJzdWJoZWFkaW5nXCI6XCIkMjZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk5ZIFN0cmlwPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMjY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5TYWx0ZWQsIHBlcHBlcmVkLCBidXR0ZXJlZD8gV2UgYXJlIGluIHJlYWwgdHJvdWJsZSBpZiB3ZSBtZXNzIHNvbWV0aGluZyB0aGlzIGVhc3kgdXA8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiR3JpbGxlZCBDaGlja2VuXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkdyaWxsZWQgQ2hpY2tlbjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+R3JpbGxlZCBjaGlja2VuIGZ1bGwgb2YgbmF0dXJhbGx5IGdyb3duIHRoaW5ncyBhbmQgc2FkbmVzcyBjYXVzZSBubyBvbmUgZXZlciB3YW50cyBhIGdyaWxsZWQgY2hpY2tlbjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJQb3JrIExvaW5cIixcInN1YmhlYWRpbmdcIjpcIiQxOVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+UG9yayBMb2luPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Tb21lIG90aGVyIHdlaXJkIG1lYXQgdGhhdCBJ4oCZdmUgc2VlbiBhdCB0aGUgc3RvcmUgYmVmb3JlLiBGdWxsIG9mIGluZ3JlZGllbnRzIGFuZCB0aGluZ3MuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIktpZWxiYXNhXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPktpZWxiYXNhPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5TYXVzYWdlcyBhcmUgcHJldHR5IGdvb2QuIE5vdCBxdWl0ZSBzdXJlIHdoYXQgdGhpcyBraW5kIGlzIHRob3VnaDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJMYW1iIENob3BzXCIsXCJzdWJoZWFkaW5nXCI6XCIkMjJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkxhbWIgQ2hvcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQyMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkhvdyBkYXJlIHlvdSB0aGluayBhYm91dCBlYXRpbmcgdGhlc2UgdGlueSBiYWJ5IGFuaW1hbHM8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiVmVnZ2llIEJ1cmdlclwiLFwic3ViaGVhZGluZ1wiOlwiJDEzXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5WZWdnaWUgQnVyZ2VyPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTM8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5MaWtlIHRob3NlIGZha2UgbWVhdCBidXJnZXJzLiBUaGlzIGlzIHRoZSByZWFsIGRlYWw8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiVmVnZ2llIExhc2FnbmFcIixcInN1YmhlYWRpbmdcIjpcIiQxN1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+VmVnZ2llIExhc2FnbmE8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNzwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPk1hZGUgd2l0aCB0aGluZ3MgdGhhdCBhcmVu4oCZdCBtZWF0PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MSxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zdGVmYW4tam9obnNvbi14SUZiRGVHY3k0NC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1NNEU3WDN6ODBQUS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1qWnZsVC1GdlRaTS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIl0sXCJpZFwiOls3MzY5LDczMzUsNzMzNF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJCcnVuY2ggQ29ja3RhaWxzXCIsXCJDaGFyY3V0ZXJpZSBQbGF0ZVwiLFwiTm93IHRoaXMgaXMgcG9kcmFjaW5nXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJHZXQgaGFtbWVyZWQgcmlnaHQgYWZ0ZXIgY2h1cmNoIVwiLFwiSSBtZWFuIGl0J3MgbW9zdGx5IGZydWl0IGJ1dCBpdCdzIGNsb3NlXCIsbnVsbF19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc3RlZmFuLWpvaG5zb24teElGYkRlR2N5NDQtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkJydW5jaCBDb2NrdGFpbHM8L2g1PjxwPkdldCBoYW1tZXJlZCByaWdodCBhZnRlciBjaHVyY2ghPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstTTRFN1gzejgwUFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkNoYXJjdXRlcmllIFBsYXRlPC9oNT48cD5JIG1lYW4gaXQncyBtb3N0bHkgZnJ1aXQgYnV0IGl0J3MgY2xvc2U8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1qWnZsVC1GdlRaTS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Tm93IHRoaXMgaXMgcG9kcmFjaW5nPC9oNT48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTaWRlc1wiLFwic3ViaGVhZGluZ1wiOlwiYWRkIGZvciAkMS4wMCAtICQ2LjAwXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5TaWRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7YWRkIGZvciAkMS4wMCAtICQ2LjAwPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkNoaXBzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+Q2hpcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNpZGUgU2FsYWRcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5TaWRlIFNhbGFkPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJQZWFudXRzXCIsXCJzdWJoZWFkaW5nXCI6XCIkMVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+UGVhbnV0czwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiWW9ndXJ0XCIsXCJzdWJoZWFkaW5nXCI6XCIkMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+WW9ndXJ0PC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDZXJlYWxcIixcInN1YmhlYWRpbmdcIjpcIiQ0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5DZXJlYWw8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZyZW5jaCBGcmllc1wiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkZyZW5jaCBGcmllczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlYWsgQml0ZXNcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5TdGVhayBCaXRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMge1widGFiQWN0aXZlXCI6XCJ0YWItc2F0dXJkYXlcIixcInRhYnNEYXRhXCI6W3tcInNsdWdcIjpcInRhYi1zYXR1cmRheVwiLFwidGl0bGVcIjpcIlNhdHVyZGF5XCJ9LHtcInNsdWdcIjpcInRhYi1zdW5kYXlcIixcInRpdGxlXCI6XCJTdW5kYXlcIn1dLFwiaW5zdGFuY2VJZFwiOjAsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMgcm93XCIgZGF0YS10YWItYWN0aXZlPVwidGFiLXNhdHVyZGF5XCI+PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tM1wiPjxkaXYgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCIgcm9sZT1cInRhYmxpc3RcIj48YSBkYXRhLXRvZ2dsZT1cInBpbGxcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLXNhdHVyZGF5LTBcIiBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwidGFiLWJ1dHRvbi10YWItc2F0dXJkYXlcIj5TYXR1cmRheTwvYT48YSBkYXRhLXRvZ2dsZT1cInBpbGxcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLXN1bmRheS0wXCIgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwidGFiLWJ1dHRvbi10YWItc3VuZGF5XCI+U3VuZGF5PC9hPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTlcIj48ZGl2IGNsYXNzPVwiYzktdGFicy1jb250ZW50IHRhYi1jb250ZW50IGFsaWduLXNlbGYtY2VudGVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLXNhdHVyZGF5XCIsXCJ0YWJBY3RpdmVcIjpcInRhYi1zYXR1cmRheVwiLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi1zYXR1cmRheS0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLXNhdHVyZGF5XCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6Nn0gLS0+XG5cdFx0PGg2PlNhdHVyZGF5IEJydW5jaCBTcGVjaWFsczwvaDY+XG5cdFx0PCEtLSAvd3A6aGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+Q2hlZiB3aWxsIG1ha2Ugc29tZXRoaW5nIGFuZCB5b3VyIHNlcnZlciB3aWxsIHRlbGwgeW91IHdoYXQgaXQgaXMgYW5kIHlvdSB3aWxsIHBheSAkMjU8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Cb3R0b21sZXNzIG1pbW9zYXMgYW5kIHdl4oCZbGwgbWFrZSB0aGUgbmV3ZXN0IGhpcmUgY2xlYW4gdXAgdGhlICQzMDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi1zdW5kYXlcIixcInRhYkFjdGl2ZVwiOlwidGFiLXNhdHVyZGF5XCIsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLXN1bmRheS0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLXN1bmRheVwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjZ9IC0tPlxuXHRcdDxoNj5TdW5kYXkgQnJ1bmNoIFNwZWNpYWxzPC9oNj5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5DaGVmIHdpbGwgbWFrZSBvc21ldGhpbmcgYW5kIHlvdXIgc2VydmVyIHdpbGwgdGVsbCB5b3Ugd2hhdCBpdCBpcyBhbmQgeW91IHdpbGwgcGF5ICQyNTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkRpdGNoIGNodXJjaCBhbmQgcHJvdmUgaXQgZm9yIDEwJSBvZmYgeW91ciB0b3RhbDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIC0tPjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MCxcImNvbnRhaW5lckh1ZVwiOlwiI2VlZWVlZVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MTB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM4LDIzOCwyMzgsMSlcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wiLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiIHN0eWxlPVwibWluLWhlaWdodDoxMHZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuXHRcdDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cblx0XHQ8IS0tIC93cDpzZXBhcmF0b3IgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdXN0YWluYWJsZSBGb29kIE1pc3Npb25cIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiMVwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDMgY2xhc3M9XCJjOS1oIGgxXCI+U3VzdGFpbmFibGUgRm9vZCBNaXNzaW9uPC9oMz48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb24ndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi5cIixcInRhZ0xldmVsXCI6NCxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGg0IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5BbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uJ3QgbGV0IHRoYXQgc3RvcCB5b3UgZnJvbSByZWFkaW5nIG91ciBkZXZhc3RhdGluZyB3ZWIgY29weSB3aGVyZSB3ZSBqdXN0IGRlc2NyaWJlIHRoZSBmb29kIGluc3RlYWQgb2YgbGV0dGluZyB5b3UgcHV0IGl0IGluIHlvdXIgbW91dGggY2F1c2UgdGhpcyBpcyBqdXN0ICBhIHNjcmVlbiBtYW4uPC9oND48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNlcGFyYXRvciAtLT5cblx0XHQ8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG5cdFx0PCEtLSAvd3A6c2VwYXJhdG9yIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MyxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcGV0ci1zZXZjb3ZpYy1xRTFqeFlYaXdPQS11bnNwbGFzaC5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJub3JtYWxcIixcIm1pblNjcmVlbkhlaWdodFwiOjgwLFwiZm9jYWxQb2ludFwiOntcInhcIjowLjQ3MDA0NjA4Mjk0OTMwODgsXCJ5XCI6MC44NjQxOTc1MzA4NjQxOTc1fX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojgwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo0Ny4wMDQ2MDgyOTQ5MzA4NzUlIDg2LjQxOTc1MzA4NjQxOTc1JTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcGV0ci1zZXZjb3ZpYy1xRTFqeFlYaXdPQS11bnNwbGFzaC5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bm9ybWFsXCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo0M30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgb25lLWNvbHVtblwiIHN0eWxlPVwibWluLWhlaWdodDo0M3ZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIHtcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0IGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXJcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRGlubmVyXCIsXCJzdWJoZWFkaW5nXCI6XCJOZXcgRmFsbCBNZW51XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcImRpc3BsYXlMZXZlbFwiOlwiNVwiLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktdHhsIGRpc3BsYXktNVwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPkRpbm5lcjwvaDE+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7TmV3IEZhbGwgTWVudTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJ3aWRlXCIsXCJjb2x1bW5zXCI6MyxcImNvbHVtbnNHYXBcIjoxLFwibGF5b3V0XCI6XCJjOS0zLWNvbC1lcXVhbFwiLFwidmVydGljYWxBbGlnblwiOlwiYm90dG9tXCIsXCJvdmVybGF5SHVlXCI6XCIjZmZmZmZmXCIsXCJvdmVybGF5T3BhY2l0eVwiOjEwLFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYWxpZ253aWRlIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWJvdHRvbSBjOS0zLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDEpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0xIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU21hbGwgUGxhdGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJzZXJ2ZWQgYWxsIGRheVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+U21hbGwgUGxhdGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtzZXJ2ZWQgYWxsIGRheTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOYWNob3NcIixcInN1YmhlYWRpbmdcIjpcIiQxNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TmFjaG9zPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Ib21lbWFkZSB0b3J0aWxsYXMsIGNhcm5pdGFzLCBubyBiZWFucywgemVybyBiZWFucywgc3RlYWtzLCBjaGl3b3dhIGNoZWVzZSwgb3RoZXIgZ29vZCBzdHVmZjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDaGFyY3V0ZXJpZVwiLFwic3ViaGVhZGluZ1wiOlwiJDE0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5DaGFyY3V0ZXJpZTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+VGhpcyBpcyB3aGVyZSBpdHMgYXQgZmVsbGFzLiBCZWVmIGplcmt5IGluIGxpdHRsZSB0aW55IHNsaWNlcyBhbmQgc29tZSB3ZWlyZCBkaXBzIHRoYXQgbWFrZSBubyBzZW5zZTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJCZWVmIFRpcHNcIixcInN1YmhlYWRpbmdcIjpcIiQxMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+QmVlZiBUaXBzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5BdCB0aGlzIGZhciBpbnRvIHRoZSBmYWtlIG1lbnUgd2UgcmFuIG91dCBvZiBpZGVhczwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNYWMgXFx1MDAyNmFtcDsgQ2hlZXNlXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTBcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk1hYyAmYW1wOyBDaGVlc2U8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMDwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkxldOKAmXMgYmUgaG9uZXN0IHdpdGggb3Vyc2VsdmVz4oCmIG5vIG9uZSBpcyBnb2luZyB0byBvcmRlciB0aGlzPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkJhY29uIFN0aWNrXCIsXCJzdWJoZWFkaW5nXCI6XCIkNDBcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkJhY29uIFN0aWNrPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNDA8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5UaGlzIGlzICQ0MCBvZiBiYWNvbiBvbiBhIHN0aWNrLiBQcmVwYXJlIHlvdXIgdmVpbnMgZm9yIGNob2xlc3Rlcm9sPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MixcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hYmhpc2hlay1zYW53YS1saW1idS1MUjU1OURjc3Q3MC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1IbE5jaWd2VWk0US11bnNwbGFzaC0xMDI0eDY4My5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1XOU9LcnhCcWlaQS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIl0sXCJpZFwiOls3MzQwLDczNDIsNzM0MV19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWJoaXNoZWstc2Fud2EtbGltYnUtTFI1NTlEY3N0NzAtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstSGxOY2lndlVpNFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstVzlPS3J4QnFpWkEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRW50cmVlc1wiLFwic3ViaGVhZGluZ1wiOlwiN2FtLW5vb25cIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPkVudHJlZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOzdhbS1ub29uPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5ZIFN0cmlwXCIsXCJzdWJoZWFkaW5nXCI6XCIkMjZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk5ZIFN0cmlwPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMjY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5TYWx0ZWQsIHBlcHBlcmVkLCBidXR0ZXJlZD8gV2UgYXJlIGluIHJlYWwgdHJvdWJsZSBpZiB3ZSBtZXNzIHNvbWV0aGluZyB0aGlzIGVhc3kgdXA8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiR3JpbGxlZCBDaGlja2VuXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkdyaWxsZWQgQ2hpY2tlbjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+R3JpbGxlZCBjaGlja2VuIGZ1bGwgb2YgbmF0dXJhbGx5IGdyb3duIHRoaW5ncyBhbmQgc2FkbmVzcyBjYXVzZSBubyBvbmUgZXZlciB3YW50cyBhIGdyaWxsZWQgY2hpY2tlbjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJQb3JrIExvaW5cIixcInN1YmhlYWRpbmdcIjpcIiQxOVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+UG9yayBMb2luPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Tb21lIG90aGVyIHdlaXJkIG1lYXQgdGhhdCBJ4oCZdmUgc2VlbiBhdCB0aGUgc3RvcmUgYmVmb3JlLiBGdWxsIG9mIGluZ3JlZGllbnRzIGFuZCB0aGluZ3MuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIktpZWxiYXNhXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPktpZWxiYXNhPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5TYXVzYWdlcyBhcmUgcHJldHR5IGdvb2QuIE5vdCBxdWl0ZSBzdXJlIHdoYXQgdGhpcyBraW5kIGlzIHRob3VnaDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJMYW1iIENob3BzXCIsXCJzdWJoZWFkaW5nXCI6XCIkMjJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkxhbWIgQ2hvcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQyMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkhvdyBkYXJlIHlvdSB0aGluayBhYm91dCBlYXRpbmcgdGhlc2UgdGlueSBiYWJ5IGFuaW1hbHM8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiVmVnZ2llIEJ1cmdlclwiLFwic3ViaGVhZGluZ1wiOlwiJDEzXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5WZWdnaWUgQnVyZ2VyPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTM8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5MaWtlIHRob3NlIGZha2UgbWVhdCBidXJnZXJzLiBUaGlzIGlzIHRoZSByZWFsIGRlYWw8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiVmVnZ2llIExhc2FnbmFcIixcInN1YmhlYWRpbmdcIjpcIiQxN1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+VmVnZ2llIExhc2FnbmE8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNzwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPk1hZGUgd2l0aCB0aGluZ3MgdGhhdCBhcmVu4oCZdCBtZWF0PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZsYXRicmVhZCBQaXp6YVwiLFwic3ViaGVhZGluZ1wiOlwiJDE5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5GbGF0YnJlYWQgUGl6emE8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxOTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPk1hZGUgd2l0aCB0b21hdG9lcywgbWVhdCwgYW5kIG15c3Rlcnkgc2F1Y2U8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjozLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3J1c3RpYy12ZWdhbi1wUktESlpXTlV2WS11bnNwbGFzaC02ODN4MTAyNC5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9qZW5uaWZlci1zY2htaWR0LXpPbFE3bEYtM3ZzLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2VkZ2FyLWNhc3RyZWpvbi0xQ3NhVmR3Zklldy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIl0sXCJpZFwiOls3MzM5LDczMzYsNzMzN10sXCJjYXB0aW9uVGl0bGVcIjpbXCJDaGVybm9ieWwgQnVyZ2VyXCIsXCJTaWRlIFNhbGFkXCIsXCJDaGVybm9ieWwgRnJ1aXRcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIkZvciBhbGwgeW91IHZlZ2FucyBvdXQgdGhlcmVcIixcIlRoaXMgdGhpbmcgaXMgZnVsbCBvZiB3ZWlyZG5lc3NcIixcIkdvb2QgZm9yIHN0cm9uayBib25lc1wiXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ydXN0aWMtdmVnYW4tcFJLREpaV05VdlktdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkNoZXJub2J5bCBCdXJnZXI8L2g1PjxwPkZvciBhbGwgeW91IHZlZ2FucyBvdXQgdGhlcmU8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9qZW5uaWZlci1zY2htaWR0LXpPbFE3bEYtM3ZzLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TaWRlIFNhbGFkPC9oNT48cD5UaGlzIHRoaW5nIGlzIGZ1bGwgb2Ygd2VpcmRuZXNzPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZWRnYXItY2FzdHJlam9uLTFDc2FWZHdmSWV3LXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5DaGVybm9ieWwgRnJ1aXQ8L2g1PjxwPkdvb2QgZm9yIHN0cm9uayBib25lczwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjoyN30gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDoyN3B4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTaWRlc1wiLFwic3ViaGVhZGluZ1wiOlwiYWRkIGZvciAkMS4wMCAtICQ2LjAwXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5TaWRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7YWRkIGZvciAkMS4wMCAtICQ2LjAwPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkNoaXBzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+Q2hpcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ0PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNpZGUgU2FsYWRcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5TaWRlIFNhbGFkPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGcmVuY2ggRnJpZXNcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5GcmVuY2ggRnJpZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZWFrIEJpdGVzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U3RlYWsgQml0ZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPmAsXG5cdFx0c2VydmljZUxhbmRpbmdQYWdlOiBgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MCxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJiZ0ltZ0F0dGFjaFwiOnRydWUsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjksXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo5MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LWZpeGVkIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6OTB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOSk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjE1NX0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDoxNTVweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VydmljZSBPZmZlcmluZ1wiLFwic3ViaGVhZGluZ1wiOlwiTGFuZGluZyBQYWdlIFRlbXBsYXRlXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZWVlZWVlXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS10eGwgZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNlZWVlZWVcIj5TZXJ2aWNlIE9mZmVyaW5nPC9oMT48ZGl2IGNsYXNzPVwiYzktdHhsIGRpc3BsYXktMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtMYW5kaW5nIFBhZ2UgVGVtcGxhdGU8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjMsXCJjb2x1bW5zR2FwXCI6MSxcImxheW91dFwiOlwiYzktMy1jb2wtZXF1YWxcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcmxheUh1ZVwiOlwiI2VlZWVlZVwiLFwib3ZlcmxheU9wYWNpdHlcIjoxMCxcImJsZW5kTW9kZVwiOlwibm9ybWFsXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgbXktNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTMtY29sLWVxdWFsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjF2aFwiPjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpO21peC1ibGVuZC1tb2RlOm5vcm1hbFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMSBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cblx0XHQ8aDM+U3RlcCAxPC9oMz5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiZuYnNwOzwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XG5cdFx0PGgzPlN0ZXAgMjwvaDM+XG5cdFx0PCEtLSAvd3A6aGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5BdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGludG8gbG90cyBvZiBib3Jpbmcgc2hpdC48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxuXHRcdDxoMz5TdGVwIDM8L2gzPlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+Q2FwaXRhbGl6ZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwid2lkZVwiLFwiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLWVxdWFsXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsaWdud2lkZSBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LTItY29sLWVxdWFsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjF2aFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo0fSAtLT5cblx0XHQ8aDQ+UmVhc29uICMxPC9oND5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPk5hbm90ZWNobm9sb2d5IGltbWVyc2lvbiBhbG9uZyB0aGUgaW5mb3JtYXRpb24gaGlnaHdheSB3aWxsIGNsb3NlIHRoZSBsb29wIG9uIGZvY3VzaW5nIHNvbGVseSBvbiB0aGUgYm90dG9tIGxpbmUuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo0fSAtLT5cblx0XHQ8aDQ+UmVhc29uIE1heWJlIDMsMDAwPC9oND5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPlBvZGNhc3Rpbmcgb3BlcmF0aW9uYWwgY2hhbmdlIG1hbmFnZW1lbnQgaW5zaWRlIG9mIHdvcmtmbG93cyB0byBlc3RhYmxpc2ggYSBmcmFtZXdvcmsuIFRha2luZyBzZWFtbGVzcyBrZXkgcGVyZm9ybWFuY2U8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NjAsXCJjb250YWluZXJWaWRlb1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L1BleGVscy1WaWRlb3MtMjcwNi0xLm1wNFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLWJhY2tncm91bmQgYzktZ3JpZC1oYXMtdmlkZW9cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NjB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktdmlkZW8tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImM5LWVtYmVkLWNvbnRhaW5lclwiPjx2aWRlbyBpZD1cImNvbnRhaW5lclZpZGVvLTJcIiBjbGFzcz1cImM5LXZpZGVvLWN1c3RvbVwiIHBsYXlzaW5saW5lIGF1dG9wbGF5IG11dGVkIGxvb3Agc3R5bGU9XCJtaW4taGVpZ2h0OjYwdmhcIj48c291cmNlIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9QZXhlbHMtVmlkZW9zLTI3MDYtMS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPjwvdmlkZW8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjgpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtd2lkZWxlZnRcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0yLWNvbC13aWRlbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNjaGVkdWxlIENvbnN1bHRhdGlvblwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCIyXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaCBoMlwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPlNjaGVkdWxlIENvbnN1bHRhdGlvbjwvaDM+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPbmUgb2Ygb3VyIHByb2Zlc3Npb25hbHMgd2lsbCB3YWxrIHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzXCIsXCJ0YWdMZXZlbFwiOjQsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg0IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5PbmUgb2Ygb3VyIHByb2Zlc3Npb25hbHMgd2lsbCB3YWxrIHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzPC9oND48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjo0Mn0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDo0MnB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpidXR0b24ge1widGV4dENvbG9yXCI6XCJ2aXZpZC1ncmVlbi1jeWFuXCIsXCJjbGFzc05hbWVcIjpcImlzLXN0eWxlLW91dGxpbmVcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBpcy1zdHlsZS1vdXRsaW5lXCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmsgaGFzLXRleHQtY29sb3IgaGFzLXZpdmlkLWdyZWVuLWN5YW4tY29sb3JcIiBocmVmPVwiI1wiPlNjaGVkdWxlIE5vdzwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpidXR0b24gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjozLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGQVEgVG9nZ2xlc1wiLFwic3ViaGVhZGluZ1wiOlwid2l0aCBpbWFnZSBjYXJvdXNlbHNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaFwiPkZBUSBUb2dnbGVzPC9oMT48ZGl2IGNsYXNzPVwiYzktaCBoMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDt3aXRoIGltYWdlIGNhcm91c2Vsczwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcyB7XCJ0b2dnbGVDb3VudFwiOjUsXCJpbnN0YW5jZUlkXCI6MCxcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtZGVmYXVsdFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcyBpcy1zdHlsZS1kZWZhdWx0IGFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uLTBcIj48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoxLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzEtMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMS0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4xLsKgPC9zdHJvbmc+SG93IGxvbmcgaXMgdGhlIGNvbnN1bHRhdGlvbj88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMS0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcyLTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTItMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+Mi48L3N0cm9uZz7CoERvIHlvdSBoYXZlIHRvIGRvIGEgY29uc3VsdGF0aW9uPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UyLTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjozLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzMtMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMy0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4zLjwvc3Ryb25nPsKgRG8geW91IHdvcmsgd2l0aCBub3QgZm9yIHByb2ZpdHMgb3Igbm9uLXByb2ZpdHM/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTMtMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjQsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nNC0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2U0LTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjQuPC9zdHJvbmc+wqBDYW4gSSBzZWUgd2hhdCBhbiBpbWFnZSBjYXJvdXNlbCBsb29rcyBsaWtlPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U0LTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjozLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb24gM1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uIDM8L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6NSxcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmc1LTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTUtMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+NS7CoDwvc3Ryb25nPlJlYWRpbmcgdGhlIHdob2xlIHRoaW5nOiBjYW4gd2UgZG8gaXQ/IE5vLjwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U1LTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjo0LFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb24gM1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uIDM8L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxM30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk91ciBCcmFuZHNcIixcInN1YmhlYWRpbmdcIjpcIjIwMDAgLSAyMDEwXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS1oXCI+T3VyIEJyYW5kczwvaDE+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjEsXCJhdXRvU2xpZGVcIjpmYWxzZX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWNhcm91c2VsLWluZGljYXRvci0xXCIgY2xhc3M9XCJjOS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cImZhbHNlXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjowLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PCEtLSB3cDpnYWxsZXJ5IHtcImlkc1wiOls3NDM3LDc0MzgsNzQzOSw3NDQwXSxcImNvbHVtbnNcIjo0LFwiaW1hZ2VDcm9wXCI6ZmFsc2V9IC0tPlxuXHRcdDx1bCBjbGFzcz1cIndwLWJsb2NrLWdhbGxlcnkgY29sdW1ucy00XCI+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby04LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM3XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tOC9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzdcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTcuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzhcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby03L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOFwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNi5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOVwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTYvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM5XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby01LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDQwXCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNS9cIiBjbGFzcz1cIndwLWltYWdlLTc0NDBcIi8+PC9maWd1cmU+PC9saT48L3VsPlxuXHRcdDwhLS0gL3dwOmdhbGxlcnkgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MSxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PCEtLSB3cDpnYWxsZXJ5IHtcImlkc1wiOls3NDQwLDc0MzksNzQzOCw3NDM3XSxcImNvbHVtbnNcIjo0LFwiaW1hZ2VDcm9wXCI6ZmFsc2V9IC0tPlxuXHRcdDx1bCBjbGFzcz1cIndwLWJsb2NrLWdhbGxlcnkgY29sdW1ucy00XCI+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby01LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDQwXCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNS9cIiBjbGFzcz1cIndwLWltYWdlLTc0NDBcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTYuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzlcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby02L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOVwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNy5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTcvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM4XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby04LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM3XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tOC9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzdcIi8+PC9maWd1cmU+PC9saT48L3VsPlxuXHRcdDwhLS0gL3dwOmdhbGxlcnkgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MixcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PCEtLSB3cDpnYWxsZXJ5IHtcImlkc1wiOls3NDQwLDc0MzksNzQzOCw3NDM3XSxcImNvbHVtbnNcIjo0LFwiaW1hZ2VDcm9wXCI6ZmFsc2V9IC0tPlxuXHRcdDx1bCBjbGFzcz1cIndwLWJsb2NrLWdhbGxlcnkgY29sdW1ucy00XCI+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby01LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDQwXCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNS9cIiBjbGFzcz1cIndwLWltYWdlLTc0NDBcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTYuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzlcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby02L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOVwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNy5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTcvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM4XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby04LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM3XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tOC9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzdcIi8+PC9maWd1cmU+PC9saT48L3VsPlxuXHRcdDwhLS0gL3dwOmdhbGxlcnkgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NjB9IC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6NjBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjYwfSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjYwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo0fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC13aWRlbGVmdFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktMi1jb2wtd2lkZWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6NH0gLS0+XG5cdFx0PGg0PlN0ZXAgMSAtIEludGVybWVkaWF0ZSBTdWJoZWFkaW5nPC9oND5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPk5hbm90ZWNobm9sb2d5IGltbWVyc2lvbiBhbG9uZyB0aGUgaW5mb3JtYXRpb24gaGlnaHdheSB3aWxsIGNsb3NlIHRoZSBsb29wIG9uIGZvY3VzaW5nIHNvbGVseSBvbiB0aGUgYm90dG9tIGxpbmUuIE9yZ2FuaWNhbGx5IGdyb3cgdGhlIGhvbGlzdGljIHdvcmxkIHZpZXcgb2YgZGlzcnVwdGl2ZSBpbm5vdmF0aW9uIHZpYSB3b3JrcGxhY2UgZGl2ZXJzaXR5IGFuZCBlbXBvd2VybWVudC48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6bGlzdCAtLT5cblx0XHQ8dWw+PGxpPkRvd25sb2FkIGRvY3VtZW50cyBmcm9tIGxpbms8L2xpPjxsaT5GaWxsIG91dCBhbmQgcmV0dXJuIGRvY3VtZW50cyB0byBjbGllbnQ8L2xpPjxsaT5SZXZpZXcgZm9ybXMgd2l0aCBpbnRlcm5hbCB0ZWFtPC9saT48bGk+U2VuZCBzdXBlcmZsdW91cyBzdGF0dXMgZW1haWxzPC9saT48bGk+RXJyb25lYW91c2x5IG1pc3NwZWxsIGNvcnBvcmF0ZSB3b3JkczwvbGk+PGxpPlRyeSBub3QgdG8gZGllIG9mIGVhdGluZyB0b28gbWFueSBoYW1idXJnZXJzPC9saT48bGk+SXQncyBoYXJkZXIgdGhhbiB5b3UgdGhpbms8L2xpPjwvdWw+XG5cdFx0PCEtLSAvd3A6bGlzdCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MCxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zZXJ2aWNlcy1sYW5kaW5nLXBhZ2UtYmctNjgzeDEwMjQuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcnVzdGljLXZlZ2FuLXBSS0RKWldOVXZZLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2VkZ2FyLWNhc3RyZWpvbi0xQ3NhVmR3Zklldy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIl0sXCJpZFwiOls3NDE2LDczMzksNzMzN10sXCJjYXB0aW9uVGl0bGVcIjpbXCJTbGlkZSBDYXB0aW9uXCIsXCJDaGVybm9ieWwgQnVyZ2VyXCIsXCJDaGVybm9ieWwgT3Jhbmdlc1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU3RlcCAxIGNhcHRpb25cIixcIkknZCBlYXQgaXQgZm9yIHN1cmUuXCIsXCJEb24ndCBlYXQgdGhlbS5cIl19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc2VydmljZXMtbGFuZGluZy1wYWdlLWJnLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TdGVwIDEgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3J1c3RpYy12ZWdhbi1wUktESlpXTlV2WS11bnNwbGFzaC02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Q2hlcm5vYnlsIEJ1cmdlcjwvaDU+PHA+SSdkIGVhdCBpdCBmb3Igc3VyZS48L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lZGdhci1jYXN0cmVqb24tMUNzYVZkd2ZJZXctdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkNoZXJub2J5bCBPcmFuZ2VzPC9oNT48cD5Eb24ndCBlYXQgdGhlbS48L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo1LFwiY29udGFpbmVySHVlXCI6XCIjZTllOWU5XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjMzLDIzMywyMzMsMSlcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC1lcXVhbFwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS0yLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo0fSAtLT5cblx0XHQ8aDQ+U3RlcCAyPC9oND5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPk5vY3VzaW5nIHNvbGVseSBvbiB0aGUgYm90dG9tIGxpbmVhbm90IGVjaG5vbG9neSBpbW1lcnNpb24gYWxvbmcgdGhlIGluZm9ybWF0aW9uIGhpZ2h3YXkgd2lsbCBjbG9zZSB0aGUgZG9vciBvbiB5b3VyIGZvb3Q8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjR9IC0tPlxuXHRcdDxoND5TdGVwIDM8L2g0PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+TmFub3RlY2hub2xvZ3kgaW1tZXJzaW9uIGFsb25nIHRoZSBpbmZvcm1hdGlvbiBoaWdod2F5IHdpbGwgY2xvc2UgdGhlIGxvb3AuJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+TGVhcm4gaG93IHRvIGRvIHRoZSB0aGluZzwvYT48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY3RhIHtcInR5cGVcIjpcImM5LXNoXCIsXCJidXR0b25UZXh0XCI6XCJXYXRjaCBWaWRlb1wiLFwiYnV0dG9uQWxpZ25tZW50XCI6XCJyaWdodFwiLFwiYnV0dG9uVGV4dENvbG9yXCI6XCIjMDBkMDg0XCIsXCJidXR0b25TaXplXCI6XCJjOS1idXR0b24tc2l6ZS1sYXJnZVwiLFwiYnV0dG9uU2hhcGVcIjpcIm91dGxpbmVcIixcImJ1dHRvblRhcmdldFwiOnRydWUsXCJjdGFMYXlvdXRcIjpcInRocmVlLXF1YXJ0ZXJzXCIsXCJjdGFQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjdGFXaWR0aFwiOlwiY29udGFpbmVyLWZsdWlkXCIsXCJjdGFCYWNrZ3JvdW5kQ29sb3JcIjpcIiM0MDQwNDFcIixcImN0YVRleHRDb2xvclwiOlwiI2VlZWVlZVwiLFwiYWxpZ25cIjpcImZ1bGxcIn0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg2NCw2NCw2NSwxKTt0ZXh0LWFsaWduOnJpZ2h0XCIgY2xhc3M9XCJjOS1jdGEgYzktYmxvY2stY3RhIGNvbnRhaW5lci1mbHVpZCBhbGlnbmZ1bGwgcC01XCI+PGRpdiBjbGFzcz1cInJvd1wiPjxkaXYgY2xhc3M9XCJjOS1jdGEtY29udGVudCBjb2wtMTIgY29sLW1kLTlcIj48ZGl2IGNsYXNzPVwiYzktY3RhLXRleHQgYzktc2hcIiBzdHlsZT1cImNvbG9yOiNlZWVlZWVcIj48cD5XYXRjaCBvdXIgdmlkZW8gd2FsayB0aHJvdWdoIHRvIGdldCBhIGd1aWRlZCB0b3VyLjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktY3RhLWJ1dHRvbiBjb2wtMTIgY29sLW1kLTNcIj48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBjOS1idXR0b24tc2hhcGUtb3V0bGluZSBjOS1idXR0b24tc2l6ZS1sYXJnZVwiIHN0eWxlPVwiY29sb3I6IzAwZDA4NFwiPldhdGNoIFZpZGVvPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KExpbmsgb3BlbnMgaW4gbmV3IHdpbmRvdyk8L3NwYW4+PC9hPjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jdGEgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NzB9IC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6NzBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuXHRcdDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cblx0XHQ8IS0tIC93cDpzZXBhcmF0b3IgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOaW5lIE1vcmUgU2Vhc29uc8KgXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS1oXCI+TmluZSBNb3JlIFNlYXNvbnPCoDwvaDE+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6NixcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC1lcXVhbFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktMi1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpxdW90ZSAtLT5cblx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cIndwLWJsb2NrLXF1b3RlXCI+PHA+TmluZSBtb3JlIHNlYXNvbnMgdW50aWwgSSBnZXQgdGhhdCBkaXBwaW5nIHN6ZWNodWFuIHNhdWNlISBGb3IgbmluZXR5LXNldmVuIG1vcmUgeWVhcnMsIE1vcnR5ISBJIHdhbnQgdGhhdCBtY251Z2d1dCBzYXVjZSBNb3J0eSEgR3Vlc3MgV2hvITwvcD48Y2l0ZT5BIFBlcnNvbiBXcm90ZSB0aGlzPC9jaXRlPjwvYmxvY2txdW90ZT5cblx0XHQ8IS0tIC93cDpxdW90ZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmJ1dHRvbiB7XCJhbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gYWxpZ25jZW50ZXJcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGlua1wiIGhyZWY9XCIjXCI+U2lnbiB1cCBub3c8L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIk9mZmljZSBJbnRlcmlvclwiLFwiTGlicmFyeSBJbnRlcmlvclwiLFwiT2ZmaWNlIENoYWlyc1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgY2FwdGlvbiBnb2VzIGhlcmVcIixcIlN1YmhlYWRpbmcgaW5mb3JtYXRpb24gd291bGQgZ28gaGVyZVwiLFwiRG9uJ3Qgc2l0IG9uIHRoZW0gb3IgeW91J3JlIGZpcmVkXCJdfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1Pk9mZmljZSBJbnRlcmlvcjwvaDU+PHA+U2xpZGUgY2FwdGlvbiBnb2VzIGhlcmU8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkxpYnJhcnkgSW50ZXJpb3I8L2g1PjxwPlN1YmhlYWRpbmcgaW5mb3JtYXRpb24gd291bGQgZ28gaGVyZTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5PZmZpY2UgQ2hhaXJzPC9oNT48cD5Eb24ndCBzaXQgb24gdGhlbSBvciB5b3UncmUgZmlyZWQ8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo3LFwibWluU2NyZWVuSGVpZ2h0XCI6NzZ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NzZ2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcImZ1bGxcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLWZsdWlkXCIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9naXJscy1pbi1iZy1jb250YWluZXItYmxvY2suanBnXCIsXCJiZ0ltZ0F0dGFjaFwiOnRydWUsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo4MCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC41MTYxMjkwMzIyNTgwNjQ1LFwieVwiOjF9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGFsaWduZnVsbCBjOS1jb2x1bW4tY29udGFpbmVyIGM5LWZpeGVkIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtbiBjOS1jb2x1bW5zLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwdmhcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUxLjYxMjkwMzIyNTgwNjQ1JSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9naXJscy1pbi1iZy1jb250YWluZXItYmxvY2suanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjUpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIHtcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0IGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXJcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQWJvdXQgVXNcIixcInN1YmhlYWRpbmdcIjpcIkVzdC4gMjAxOVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjMsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgzIGNsYXNzPVwiYzktdHhsIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+QWJvdXQgVXM8L2gzPjxkaXYgY2xhc3M9XCJjOS10eGwgZGlzcGxheS0zXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO0VzdC4gMjAxOTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo4LFwiY29udGFpbmVySHVlXCI6XCIjZWVlZWVlXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo1MCxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjUwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPdXIgTWlzc2lvblwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCIxXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMyBjbGFzcz1cImM5LWggaDFcIj5PdXIgTWlzc2lvbjwvaDM+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzZXBhcmF0b3IgLS0+XG5cdFx0PGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuXHRcdDwhLS0gL3dwOnNlcGFyYXRvciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb24ndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi5cIixcInRhZ0xldmVsXCI6NSxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGg1IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5BbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uJ3QgbGV0IHRoYXQgc3RvcCB5b3UgZnJvbSByZWFkaW5nIG91ciBkZXZhc3RhdGluZyB3ZWIgY29weSB3aGVyZSB3ZSBqdXN0IGRlc2NyaWJlIHRoZSBmb29kIGluc3RlYWQgb2YgbGV0dGluZyB5b3UgcHV0IGl0IGluIHlvdXIgbW91dGggY2F1c2UgdGhpcyBpcyBqdXN0ICBhIHNjcmVlbiBtYW4uPC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNlcGFyYXRvciAtLT5cblx0XHQ8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG5cdFx0PCEtLSAvd3A6c2VwYXJhdG9yIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiUHJvZ3JhbSBCZW5lZml0c1wiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktaFwiPlByb2dyYW0gQmVuZWZpdHM8L2gxPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjksXCJyb3dzXCI6MixcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0zIGM5LTMtY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0xIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aW1hZ2Uge1wiaWRcIjo3NTIwfSAtLT5cblx0XHQ8ZmlndXJlIGNsYXNzPVwid3AtYmxvY2staW1hZ2VcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC90aHJlZS1naXJscy1kcmlua2luZy1iZWVycy0xMDI0eDY4Mi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cIndwLWltYWdlLTc1MjBcIi8+PC9maWd1cmU+XG5cdFx0PCEtLSAvd3A6aW1hZ2UgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNb3JlIERyaW5raW5nIHdpdGggRnJpZW5kc1wiLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPk1vcmUgRHJpbmtpbmcgd2l0aCBGcmllbmRzPC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkVzcGVjaWFsbHkgYXQgaGFwcHkgaG91clwiLFwidGFnTGV2ZWxcIjo2LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDYgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkVzcGVjaWFsbHkgYXQgaGFwcHkgaG91cjwvaDY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+TGVhcm4gbW9yZTwvYT48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aW1hZ2Uge1wiaWRcIjo3NTIxfSAtLT5cblx0XHQ8ZmlndXJlIGNsYXNzPVwid3AtYmxvY2staW1hZ2VcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zdG9jay1pbWFnZS0zLTEwMjR4NjgyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwid3AtaW1hZ2UtNzUyMVwiLz48L2ZpZ3VyZT5cblx0XHQ8IS0tIC93cDppbWFnZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1vcmUgQWR2ZW50dXJlc1wiLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPk1vcmUgQWR2ZW50dXJlczwvaDU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJFc3BlY2lhbGx5IHdpdGggdGhlIGR1ZGVzXCIsXCJ0YWdMZXZlbFwiOjYsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNiBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RXNwZWNpYWxseSB3aXRoIHRoZSBkdWRlczwvaDY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+TGVhcm4gbW9yZTwvYT48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aW1hZ2Uge1wiaWRcIjo3NTIyfSAtLT5cblx0XHQ8ZmlndXJlIGNsYXNzPVwid3AtYmxvY2staW1hZ2VcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1ibHVyLXdpZGUtMTAyNHg2ODIuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJ3cC1pbWFnZS03NTIyXCIvPjwvZmlndXJlPlxuXHRcdDwhLS0gL3dwOmltYWdlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTW9yZSBEcmlua2luZyB3aXRoIEZyaWVuZHNcIixcInRhZ0xldmVsXCI6NX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5Nb3JlIERyaW5raW5nIHdpdGggRnJpZW5kczwvaDU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGcmVlIHRpY2tldHMgdG8gVklQIHNoaXQgeW91IGRvbid0IGV2ZW50IHdhbnRcIixcInRhZ0xldmVsXCI6NixcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg2IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5GcmVlIHRpY2tldHMgdG8gVklQIHNoaXQgeW91IGRvbid0IGV2ZW50IHdhbnQ8L2g2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPjxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPkxlYXJuIG1vcmU8L2E+PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MixcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9jb25jZXJ0LWNyb3dkLWRhbmNpbmctMTU0MDMzOC13ZWIyLTEwMjR4NjgyLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FkdWx0LWFwcGxhdXNlLWF1ZGllbmNlLTYyNTY0NC13ZWItMTAyNHg2ODIuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtYmFja2xpdC1iYW5kLTE1NDE0Ny13ZWItMTAyNHg2ODIuanBnXCJdLFwiaWRcIjpbNzUzNiw3NTM1LDc1MzRdfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2NvbmNlcnQtY3Jvd2QtZGFuY2luZy0xNTQwMzM4LXdlYjItMTAyNHg2ODIuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWR1bHQtYXBwbGF1c2UtYXVkaWVuY2UtNjI1NjQ0LXdlYi0xMDI0eDY4Mi5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1iYWNrbGl0LWJhbmQtMTU0MTQ3LXdlYi0xMDI0eDY4Mi5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNlcGFyYXRvciAtLT5cblx0XHQ8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG5cdFx0PCEtLSAvd3A6c2VwYXJhdG9yIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ3VzdG9tZXIgVGVzdGltb25pYWxzXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS1oXCI+Q3VzdG9tZXIgVGVzdGltb25pYWxzPC9oMT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjo1N30gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDo1N3B4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJjb2x1bW5zR2FwXCI6NCxcImxheW91dFwiOlwiYzktMi1jb2wtZXF1YWxcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0yLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtNCBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmltYWdlIHtcImlkXCI6NzQ5MSxcImFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWltYWdlXCI+PGZpZ3VyZSBjbGFzcz1cImFsaWduY2VudGVyXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZ3V0ZW5iZXJnLXJlc3BvbnNpdmUtdGhlbWUtZTE1NjcwNTM0MDUyMzMtMTAyNHg4NTYuanBlZ1wiIGFsdD1cIlwiIGNsYXNzPVwid3AtaW1hZ2UtNzQ5MVwiLz48ZmlnY2FwdGlvbj5HaXJsIHdhdmluZyBhdCBzb21lIHN0cmFuZ2VycyBjYXVzZSBzaGUncyBsb3N0PC9maWdjYXB0aW9uPjwvZmlndXJlPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmltYWdlIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTWVldCBHaXJsIFdobyBMb3N0XCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjRcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaCBoNFwiPk1lZXQgR2lybCBXaG8gTG9zdDwvaDM+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpxdW90ZSAtLT5cblx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cIndwLWJsb2NrLXF1b3RlXCI+PHA+RWZmaWNpZW50bHkgdW5sZWFzaCBjcm9zcy1tZWRpYSBpbmZvcm1hdGlvbiB3aXRob3V0IGNyb3NzLW1lZGlhIHZhbHVlLiBRdWlja2x5IG1heGltaXplIHRpbWVseSBkZWxpdmVyYWJsZXMgZm9yIHJlYWwtdGltZSBzY2hlbWFzLiBEcmFtYXRpY2FsbHkgbWFpbnRhaW4gY2xpY2tzLWFuZC1tb3J0YXIuPC9wPjxjaXRlPkdpcmwgd2hvJ3MgdHJ5aW5nIHRvIGZpbmQgaGVyIGZyaWVuZHM8L2NpdGU+PC9ibG9ja3F1b3RlPlxuXHRcdDwhLS0gL3dwOnF1b3RlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjMxfSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjMxcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlZSBob3cgdGhpcyBnaXJsIGZvdW5kIGhlciBmcmllbmRzXCIsXCJ0YWdMZXZlbFwiOjUsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoNSBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U2VlIGhvdyB0aGlzIGdpcmwgZm91bmQgaGVyIGZyaWVuZHM8L2g1PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YnV0dG9uIHtcImFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBhbGlnbmNlbnRlclwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rXCIgaHJlZj1cIiNcIj5CdXkgTk9XPC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjExfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwiY29sdW1uc0dhcFwiOjQsXCJsYXlvdXRcIjpcImM5LTItY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMi1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTQgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNZWV0IFN0YXIgV2FycyBHaXJsXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjRcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaCBoNFwiPk1lZXQgU3RhciBXYXJzIEdpcmw8L2gzPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cXVvdGUgLS0+XG5cdFx0PGJsb2NrcXVvdGUgY2xhc3M9XCJ3cC1ibG9jay1xdW90ZVwiPjxwPkVmZmljaWVudGx5IHVubGVhc2ggY3Jvc3MtbWVkaWEgaW5mb3JtYXRpb24gd2l0aG91dCBjcm9zcy1tZWRpYSB2YWx1ZS4gUXVpY2tseSBtYXhpbWl6ZSB0aW1lbHkgZGVsaXZlcmFibGVzIGZvciByZWFsLXRpbWUgc2NoZW1hcy4gPGEgaHJlZj1cIiNcIj5EcmFtYXRpY2FsbHkgbWFpbnRhaW48L2E+IGNsaWNrcy1hbmQtbW9ydGFyLjwvcD48Y2l0ZT5HaXJsIHdobydzIHRyeWluZyB0byBmaW5kIGhlciBmcmllbmRzPC9jaXRlPjwvYmxvY2txdW90ZT5cblx0XHQ8IS0tIC93cDpxdW90ZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjozMX0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDozMXB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTZWUgaG93IHRoaXMgZ2lybCBmb3VuZCBoZXIgZnJpZW5kc1wiLFwidGFnTGV2ZWxcIjo1LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDUgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPlNlZSBob3cgdGhpcyBnaXJsIGZvdW5kIGhlciBmcmllbmRzPC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmJ1dHRvbiB7XCJhbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gYWxpZ25jZW50ZXJcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGlua1wiIGhyZWY9XCIjXCI+U0VFIEhFUiBTVE9SWTwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpidXR0b24gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDppbWFnZSB7XCJpZFwiOjc0OTYsXCJhbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1pbWFnZVwiPjxmaWd1cmUgY2xhc3M9XCJhbGlnbmNlbnRlclwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2d1dGVuYmVyZy10ZXN0aW1vbmlhbC0xMDI0eDEwMjQuanBlZ1wiIGFsdD1cImdpcmwgaW4gdGVzaXRtb25pYWwgZnJvbSBXb3JkUHJlc3MgR3V0ZW5iZXJnIEJsb2NrXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDk2XCIvPjwvZmlndXJlPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmltYWdlIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9jcm93ZC1kYW5jaW5nLmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjEwLFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NzAsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuMjM1MDIzMDQxNDc0NjU0NCxcInlcIjowLjQzNzV9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NzB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjIzLjUwMjMwNDE0NzQ2NTQzOCUgNDMuNzUlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9jcm93ZC1kYW5jaW5nLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtd2lkZWxlZnRcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0yLWNvbC13aWRlbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlJlYWR5IHRvIHNpZ24gdXA/XCIsXCJ0YWdMZXZlbFwiOjUsXCJkaXNwbGF5TGV2ZWxcIjpcIjFcIixcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS10eGxcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5SZWFkeSB0byBzaWduIHVwPzwvaDU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGcmVlIGZvciBvbmUgbW9udGhcIixcInRhZ0xldmVsXCI6NCxcImRpc3BsYXlMZXZlbFwiOlwiNFwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNCBjbGFzcz1cImM5LWggaDQgZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5GcmVlIGZvciBvbmUgbW9udGg8L2g0PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YnV0dG9uIHtcImN1c3RvbVRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwiY2xhc3NOYW1lXCI6XCJpcy1zdHlsZS1vdXRsaW5lXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gaXMtc3R5bGUtb3V0bGluZVwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rIGhhcy10ZXh0LWNvbG9yXCIgaHJlZj1cIiNcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5HZXQgU3RhcnRlZDwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpidXR0b24gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5gXG5cdH0sXG5cdHNlY3Rpb25zOiB7XG5cdFx0ZmFxVG9nZ2xlc1dpdGhIZWFkaW5nOlxuXHRcdFx0JzwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjIzLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGQVEgVG9nZ2xlc1wiLFwic3ViaGVhZGluZ1wiOlwid2l0aCBpbWFnZSBjYXJvdXNlbHNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaFwiPkZBUSBUb2dnbGVzPC9oMT48ZGl2IGNsYXNzPVwiYzktaCBoMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDt3aXRoIGltYWdlIGNhcm91c2Vsczwvc21hbGw+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcyB7XCJ0b2dnbGVDb3VudFwiOjUsXCJpbnN0YW5jZUlkXCI6MyxcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtZGVmYXVsdFwifSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcyBpcy1zdHlsZS1kZWZhdWx0IGFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uLTNcIj48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoxLFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzEtM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMS0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4xLsKgPC9zdHJvbmc+SG93IGxvbmcgaXMgdGhlIGNvbnN1bHRhdGlvbj88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMS0zXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTNcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MixcImlkXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcyLTNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTItM1wiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+Mi48L3N0cm9uZz7CoERvIHlvdSBoYXZlIHRvIGRvIGEgY29uc3VsdGF0aW9uPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UyLTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjozLFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzMtM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMy0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4zLjwvc3Ryb25nPsKgRG8geW91IHdvcmsgd2l0aCBub3QgZm9yIHByb2ZpdHMgb3Igbm9uLXByb2ZpdHM/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTMtM1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0zXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjQsXCJpZFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nNC0zXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2U0LTNcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjQuPC9zdHJvbmc+wqBDYW4gSSBzZWUgd2hhdCBhbiBpbWFnZSBjYXJvdXNlbCBsb29rcyBsaWtlPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U0LTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjo5LFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb24gM1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiXX0gLS0+XFxuPGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci05XCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uIDM8L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6NSxcImlkXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmc1LTNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTUtM1wiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+NS7CoDwvc3Ryb25nPlJlYWRpbmcgdGhlIHdob2xlIHRoaW5nOiBjYW4gd2UgZG8gaXQ/IE5vLjwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U1LTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxMCxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIl0sXCJpZFwiOls3NDQ4LDc0NDksNzQ1MF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uIDNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIl19IC0tPlxcbjxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb24gMzwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTEwXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+Jyxcblx0XHRoZWFkZXJXaXRoM01vZHVsZXM6XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTUsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo5LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6OTB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojkwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjkpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjoxNTV9IC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTU1cHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlcnZpY2UgT2ZmZXJpbmdcIixcInN1YmhlYWRpbmdcIjpcIkxhbmRpbmcgUGFnZSBUZW1wbGF0ZVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2VlZWVlZVwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktdHhsIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZWVlZWVlXCI+U2VydmljZSBPZmZlcmluZzwvaDE+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTFcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7TGFuZGluZyBQYWdlIFRlbXBsYXRlPC9zbWFsbD48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnNwYWNlciAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cXG48IS0tIC93cDpzcGFjZXIgLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJsYXlIdWVcIjpcIiNlZWVlZWVcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJibGVuZE1vZGVcIjpcIm5vcm1hbFwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MSxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0zLWNvbC1lcXVhbFwiIHN0eWxlPVwibWluLWhlaWdodDoxdmhcIj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKTttaXgtYmxlbmQtbW9kZTpub3JtYWxcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XFxuPGgzPlN0ZXAgMTwvaDM+XFxuPCEtLSAvd3A6aGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4mbmJzcDs8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxcbjxoMz5TdGVwIDI8L2gzPlxcbjwhLS0gL3dwOmhlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBpbnRvIGxvdHMgb2YgYm9yaW5nIHNoaXQuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cXG48aDM+U3RlcCAzPC9oMz5cXG48IS0tIC93cDpoZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkNhcGl0YWxpemUgb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPicsXG5cdFx0bWlzc2lvblN0YXRlbWVudDpcblx0XHRcdCc8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjozMixcImNvbnRhaW5lckh1ZVwiOlwiI2VlZWVlZVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NTAsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDo1MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKVwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm1pblNjcmVlbkhlaWdodFwiOjEwfSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgb25lLWNvbHVtblwiIHN0eWxlPVwibWluLWhlaWdodDoxMHZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT3VyIE1pc3Npb25cIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiMVwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDMgY2xhc3M9XCJjOS1oIGgxXCI+T3VyIE1pc3Npb248L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c2VwYXJhdG9yIC0tPlxcbjxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cXG48IS0tIC93cDpzZXBhcmF0b3IgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJBbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uXFwndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi5cIixcInRhZ0xldmVsXCI6NSxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGg1IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5BbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uXFwndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi48L2g1PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjMwfSAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjMwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmJ1dHRvbiB7XCJhbGlnblwiOlwiY2VudGVyXCIsXCJjbGFzc05hbWVcIjpcImlzLXN0eWxlLWRlZmF1bHRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBhbGlnbmNlbnRlciBpcy1zdHlsZS1kZWZhdWx0XCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmtcIiBocmVmPVwiI1wiPk91ciBIaXN0b3J5PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmJ1dHRvbiAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+Jyxcblx0XHRzZXJ2aWNlT2ZmZXJpbmdIZWFkZXI6XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTUsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGdcIixcImJnSW1nQXR0YWNoXCI6dHJ1ZSxcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjgwfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktZml4ZWQgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo4MHZoXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjgpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcImNvbnRhaW5lckltZ1VSTFwiOm51bGwsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuNTExNTIwNzM3MzI3MTg5LFwieVwiOjAuNjI1fX0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlcnZpY2UgT2ZmZXJpbmcgTGFuZGluZyBQYWdlXCIsXCJzdWJoZWFkaW5nXCI6XCJzdWJoZWFkaW5nXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPlNlcnZpY2UgT2ZmZXJpbmcgTGFuZGluZyBQYWdlPC9oMT48ZGl2IGNsYXNzPVwiYzktaCBoMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtzdWJoZWFkaW5nPC9zbWFsbD48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnNwYWNlciAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cXG48IS0tIC93cDpzcGFjZXIgLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjozLFwibGF5b3V0XCI6XCJjOS0zLWNvbC1lcXVhbFwiLFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVySHVlXCI6XCIjZmZmZmZmXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktMy1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVwIDFcIixcInRhZ0xldmVsXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWhcIj5TdGVwIDE8L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLsKgPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgMlwiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMjwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBYLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVwIDNcIixcInRhZ0xldmVsXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWhcIj5TdGVwIDM8L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkNhcGl0YWxpemUgb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPicsXG5cdFx0dmlkZW9CYWNrZ3JvdW5kQ2FsbFRvQWN0aW9uOlxuXHRcdFx0J1wiPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTksXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEuanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjYwLFwiY29udGFpbmVyVmlkZW9VUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9QZXhlbHMtVmlkZW9zLTI3MDYtMS5tcDRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kIGM5LWdyaWQtaGFzLXZpZGVvXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjYwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LXZpZGVvLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjOS1lbWJlZC1jb250YWluZXJcIj48dmlkZW8gaWQ9XCJjb250YWluZXJWaWRlby0xOVwiIGNsYXNzPVwiYzktdmlkZW8tY3VzdG9tXCIgcGxheXNpbmxpbmUgYXV0b3BsYXkgbXV0ZWQgbG9vcCBzdHlsZT1cIm1pbi1oZWlnaHQ6NjB2aFwiPjxzb3VyY2Ugc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L1BleGVscy1WaWRlb3MtMjcwNi0xLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+PC92aWRlbz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC13aWRlbGVmdFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLXdpZGVsZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2NoZWR1bGUgQ29uc3VsdGF0aW9uXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjJcIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oIGgyXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2NoZWR1bGUgQ29uc3VsdGF0aW9uPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3NcIixcInRhZ0xldmVsXCI6NCxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDQgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3M8L2g0PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjQyfSAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjQycHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmJ1dHRvbiB7XCJ0ZXh0Q29sb3JcIjpcInZpdmlkLWdyZWVuLWN5YW5cIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtb3V0bGluZVwifSAtLT5cXG48ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGlzLXN0eWxlLW91dGxpbmVcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBoYXMtdGV4dC1jb2xvciBoYXMtdml2aWQtZ3JlZW4tY3lhbi1jb2xvclwiIGhyZWY9XCIjXCI+U2NoZWR1bGUgTm93PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlwiJ1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZU1hcmt1cHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvdGVtcGxhdGVzLW1hcmt1cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=