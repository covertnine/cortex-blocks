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
/******/ 	return __webpack_require__(__webpack_require__.s = 490);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/*!********************************************************!*\
  !*** ./src/components/animations-panel/utils/index.js ***!
  \********************************************************/
/*! exports provided: createCustomConfig, initAnimate, restartAnimate, animateOptions, animateConfigs */
/*! exports used: animateOptions, createCustomConfig, initAnimate, restartAnimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCustomConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return restartAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animateOptions; });
/* unused harmony export animateConfigs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__(/*! gsap */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__ = __webpack_require__(/*! gsap/ScrollTrigger */ 46);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Utilities for initiating gsap
 */




if (typeof window !== "undefined") {
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].registerPlugin(__WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */]);
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].core.globals("ScrollTrigger", __WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */]);
}

var createCustomConfig = function createCustomConfig(animateVal, animateDelay, animateSpeed) {
	return [animateConfigs[animateVal][0], Object.assign({}, animateConfigs[animateVal][1], {
		delay: animateDelay / 1000,
		duration: animateSpeed / 1000
	})];
};

var initAnimate = function initAnimate(target, enableAnimate, animateVal, animateDelay, animateSpeed, animateScrub) {
	var customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed);
	customConfig = editorCustomConfigModify(customConfig, target, animateScrub);

	if (enableAnimate) {
		__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].fromTo.apply(__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */], [target].concat(_toConsumableArray(customConfig)));
	}
};

var editorCustomConfigModify = function editorCustomConfigModify(config, target, animateScrub) {
	return [config[0], Object.assign({}, config[1], {
		scrollTrigger: {
			id: target,
			trigger: target,
			scroller: SCROLLER,
			// markers: true,
			scrub: animateScrub
		}
	})];
};

var restartAnimate = function restartAnimate(target, animateVal, animateDelay, animateSpeed, animateScrub, enableAnimate) {
	var customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed, animateScrub);
	__WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */].getAll().forEach(function (st) {
		if (st.vars.id === target) {
			st.kill();
		}
	});
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].set(target, { clearProps: true });

	if (!enableAnimate) {
		return;
	}

	if (animateScrub) {
		customConfig = editorCustomConfigModify(customConfig, target, animateScrub);
	}
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].fromTo.apply(__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */], [target].concat(_toConsumableArray(customConfig)));
};

/**
 * Animate Configurations
 */

var DEFAULT_SPEED = 2;
var SCROLLER = ".interface-interface-skeleton__content";

var animateOptions = [{ value: null, label: "Select animation", disabled: true }, {
	value: "fade",
	label: "Fade"
}, {
	value: "fadeUp",
	label: "Fade Up"
}, {
	value: "fadeDown",
	label: "Fade Down"
}, {
	value: "fadeLeft",
	label: "Fade Left"
}, {
	value: "fadeRight",
	label: "Fade Right"
}];

var animateConfigs = {
	fade: [{
		opacity: 0
	}, { opacity: 1, duration: DEFAULT_SPEED }],
	fadeUp: [{
		opacity: 0,
		y: 100
	}, { opacity: 1, duration: DEFAULT_SPEED, y: 0 }],
	fadeDown: [{
		opacity: 0,
		y: -100
	}, { opacity: 1, duration: DEFAULT_SPEED, y: 0 }],
	fadeLeft: [{
		opacity: 0,
		x: -100
	}, { opacity: 1, duration: DEFAULT_SPEED, x: 0 }],
	fadeRight: [{
		opacity: 0,
		x: 100
	}, { opacity: 1, duration: DEFAULT_SPEED, x: 0 }]
};

/***/ }),

/***/ 35:
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/*! exports provided: GSCache, Animation, Timeline, Tween, PropTween, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, TweenMax, TweenLite, TimelineMax, TimelineLite, default, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, _getProperty, _numExp, _numWithUnitExp, _isString, _isUndefined, _renderComplexString, _relExp, _setDefaults, _removeLinkedListItem, _forEachName, _sortPropTweensByPriority, _colorStringFilter, _replaceRandom, _checkPlugin, _plugins, _ticker, _config, _roundModifier, _round, _missingPlugin, _getSetter, _getCache */
/*! exports used: GSCache, PropTween, _checkPlugin, _colorStringFilter, _config, _forEachName, _getCache, _getProperty, _getSetter, _isString, _isUndefined, _missingPlugin, _numExp, _numWithUnitExp, _plugins, _relExp, _renderComplexString, _replaceRandom, _round, _sortPropTweensByPriority, _ticker, getUnit, gsap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSCache; });
/* unused harmony export Animation */
/* unused harmony export Timeline */
/* unused harmony export Tween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PropTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return gsap; });
/* unused harmony export Power0 */
/* unused harmony export Power1 */
/* unused harmony export Power2 */
/* unused harmony export Power3 */
/* unused harmony export Power4 */
/* unused harmony export Linear */
/* unused harmony export Quad */
/* unused harmony export Cubic */
/* unused harmony export Quart */
/* unused harmony export Quint */
/* unused harmony export Strong */
/* unused harmony export Elastic */
/* unused harmony export Back */
/* unused harmony export SteppedEase */
/* unused harmony export Bounce */
/* unused harmony export Sine */
/* unused harmony export Expo */
/* unused harmony export Circ */
/* unused harmony export TweenMax */
/* unused harmony export TweenLite */
/* unused harmony export TimelineMax */
/* unused harmony export TimelineLite */
/* unused harmony export default */
/* unused harmony export wrap */
/* unused harmony export wrapYoyo */
/* unused harmony export distribute */
/* unused harmony export random */
/* unused harmony export snap */
/* unused harmony export normalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getUnit; });
/* unused harmony export clamp */
/* unused harmony export splitColor */
/* unused harmony export toArray */
/* unused harmony export mapRange */
/* unused harmony export pipe */
/* unused harmony export unitize */
/* unused harmony export interpolate */
/* unused harmony export shuffle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _numExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _numWithUnitExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _renderComplexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _relExp; });
/* unused harmony export _setDefaults */
/* unused harmony export _removeLinkedListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _forEachName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _sortPropTweensByPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _colorStringFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _replaceRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _checkPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _config; });
/* unused harmony export _roundModifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _missingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _getSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _getCache; });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.5.0
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" ? ArrayBuffer.isView : function () {},
    _isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[\.\d]+/,
    _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _parseVars = function _parseVars(params, type, parent) {
  //reads the arguments passed to one of the key methods and figures out if the user is defining things with the OLD/legacy syntax where the duration is the 2nd parameter, and then it adjusts things accordingly and spits back the corrected vars object (with the duration added if necessary, as well as runBackwards or startAt or immediateRender). type 0 = to()/staggerTo(), 1 = from()/staggerFrom(), 2 = fromTo()/staggerFromTo()
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars;

  isLegacy && (vars.duration = params[1]);
  vars.parent = parent;

  if (type) {
    irVars = vars;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return vars;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
  }
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p];
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (!child || child._end > animation._dur || child._start < 0) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  return (tTime /= cycleDuration) && ~~tTime === tTime ? ~~tTime - 1 : ~~tTime;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _round(animation._dp._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _round(position + child._delay);
  child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  timeline._recent = child;
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && prevRatio && !tween._start && tween._zTime > _tinyNum && !tween._dp._lock || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart" ? 0 : 1,
      // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0. Also, if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    prevIteration = _animationCycle(tween._tTime, repeatDelay);

    if (iteration !== prevIteration) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
    // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
    return;
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    suppressEvents || _callback(tween, "onStart");
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (!child._dur && child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (!child._dur && child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _round(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    i = position.charAt(0);

    if (i === "<" || i === ">") {
      return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
    }

    i = position.indexOf("=");

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = +(position.charAt(i - 1) + position.substr(i + 1));
    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value) {
  return (value + "").substr((parseFloat(value) + "").length);
},
    clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

  return function (raw) {
    return Math.floor(Math.round(parseFloat(raw) / v) * v * p) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min + Math.random() * (max - min)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        //for shorthand like #9F0
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback) {
      var i;
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars, time) {
    var parent = vars.parent || _globalTimeline;
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
    parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
    vars.reversed && this.reverse();
    vars.paused && this.paused(true);
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime); //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.


      while (parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause

      _lazySafeRender(this, _totalTime, suppressEvents);
    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detatched parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      this._rDelay = value;
      return _onUpdateTotalDuration(this);
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, time) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars, time) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime !== this._time || prevPaused !== !this._ts) {
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur + 0.0001 : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
      }

      !prevTime && time && !suppressEvents && _callback(this, "onStart");

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    if (!_isNumber(position)) {
      position = _parsePosition(this, position);
    }

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  };

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        tween = Tween.to(tl, _setDefaults(vars, {
      ease: "none",
      lazy: false,
      time: endTime,
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
        tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }));

    return tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._time = this._tTime = this._pTime = 0;
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end)) {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto",
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  if (!tl) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && prevStartAt.render(-1, true).kill();

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      if (immediateRender) {
        if (time > 0) {
          autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        } else if (dur && !(time < 0 && prevStartAt)) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0)); //Also make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, time, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      time.duration = vars;
      vars = time;
      time = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = _this3.parent,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = _assertThisInitialized(_this3);

      if (keyframes) {
        _setDefaults(tl.vars.defaults, {
          ease: "none"
        });

        keyframes.forEach(function (frame) {
          return tl.to(parsedTargets, frame, ">");
        });
      } else {
        l = parsedTargets.length;
        staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = {};

          for (p in vars) {
            if (_staggerPropsToSkip.indexOf(p) < 0) {
              copy[p] = vars[p];
            }
          }

          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    parent && _postAddChecks(parent, _assertThisInitialized(_this3));

    if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;
        time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      time && !prevTime && !suppressEvents && _callback(this, "onStart");
      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = 0;

      if (this.parent) {
        return _interrupt(this);
      }
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweenng, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return new Tween(targets, _parseVars(arguments, 1));
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return new Tween(targets, _parseVars(arguments, 2));
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref) {
    var name = _ref.name,
        effect = _ref.effect,
        plugins = _ref.plugins,
        defaults = _ref.defaults,
        extendTimeline = _ref.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.5.0";
_coreReady = 1;

if (_windowExists()) {
  _wake();
}

var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ 45:
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/*! exports provided: gsap, default, CSSPlugin, TweenMax, TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ */
/*! exports used: gsap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gsapWithCSS; });
/* unused harmony export default */
/* unused harmony export TweenMax */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(/*! ./gsap-core.js */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__ = __webpack_require__(/*! ./CSSPlugin.js */ 58);
/* unused harmony reexport CSSPlugin */
/* unused harmony reexport TweenLite */
/* unused harmony reexport TimelineMax */
/* unused harmony reexport TimelineLite */
/* unused harmony reexport Power0 */
/* unused harmony reexport Power1 */
/* unused harmony reexport Power2 */
/* unused harmony reexport Power3 */
/* unused harmony reexport Power4 */
/* unused harmony reexport Linear */
/* unused harmony reexport Quad */
/* unused harmony reexport Cubic */
/* unused harmony reexport Quart */
/* unused harmony reexport Quint */
/* unused harmony reexport Strong */
/* unused harmony reexport Elastic */
/* unused harmony reexport Back */
/* unused harmony reexport SteppedEase */
/* unused harmony reexport Bounce */
/* unused harmony reexport Sine */
/* unused harmony reexport Expo */
/* unused harmony reexport Circ */


var gsapWithCSS = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].registerPlugin(__WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__["a" /* CSSPlugin */]) || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */],
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ 46:
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/*! exports provided: ScrollTrigger, default */
/*! exports used: ScrollTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTrigger; });
/* unused harmony export default */
/*!
 * ScrollTrigger 3.5.0
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _raf,
    _request,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _proxies = [],
    _scrollers = [],
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 1,
    _passThrough = function _passThrough(v) {
  return v;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
    return arguments.length ? element[s] = value : element[s];
  }));
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
  var d = _ref2.d,
      d2 = _ref2.d2,
      a = _ref2.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref3) {
  var s = _ref3.s,
      d2 = _ref3.d2,
      d = _ref3.d,
      a = _ref3.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _horizontal = {
  s: _scrollLeft,
  p: _left,
  p2: _Left,
  os: _right,
  os2: _Right,
  d: _width,
  d2: _Width,
  a: "x",
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  }
},
    _vertical = {
  s: _scrollTop,
  p: _top,
  p2: _Top,
  os: _bottom,
  os2: _Bottom,
  d: _height,
  d2: _Height,
  a: "y",
  op: _horizontal,
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  }
},
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
},
    // if the element already has position: absolute, leave that, otherwise make it position: relative
_setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    //_isInViewport = element => (element = _getBounds(element)) && !(element.top > (_win.innerHeight || _docEl.clientHeight) || element.bottom < 0 || element.left > (_win.innerWidth || _docEl.clientWidth) || element.right < 0) && element,
_getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref4) {
  var d2 = _ref4.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabels = function _getLabels(animation) {
  return function (value) {
    var a = [],
        labels = animation.labels,
        duration = animation.duration(),
        p;

    for (p in labels) {
      a.push(labels[p] / duration);
    }

    return gsap.utils.snap(a, value);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func) {
  return element.addEventListener(type, func, {
    passive: true
  });
},
    _removeListener = function _removeListener(element, type, func) {
  return element.removeEventListener(type, func);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (relative) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
  var startColor = _ref5.startColor,
      endColor = _ref5.endColor,
      fontSize = _ref5.fontSize,
      indent = _ref5.indent,
      fontWeight = _ref5.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type);
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.insertBefore(e, parent.children[0]);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? 1 : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start;
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _sync = function _sync() {
  return _request || (_request = _raf(_updateAll));
},
    _onScroll = function _onScroll() {
  if (!_request) {
    _request = _raf(_updateAll);
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _onResize = function _onResize() {
  return !_refreshing && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 3) {
      _win.matchMedia(_media[i]).matches ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      _creatingMedia = _media[matches[i]];
      _media[matches[i] + 2] = _media[matches[i] + 1](e);
    }

    _creatingMedia = 0;

    _refreshAll(0, 1);

    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 4) {
    if (!media || _savedStyles[i + 3] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i + 2].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll()); // record the scroll positions so that in each refresh() we can ensure that it doesn't shift. Remember, pinning can make things change around, especially if the same element is pinned multiple times. If one was already recorded, don't re-record because unpinning may have occurred and made it shorter.

        trigger.revert();
      }
    }
  }

  _revertRecorded(media);

  media || _dispatch("revert");
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  for (_i = 0; _i < _triggers.length; _i++) {
    _triggers[_i].refresh();
  }

  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _i = _triggers.length;

  while (_i--) {
    _triggers[_i].scroll.rec = 0;
  }

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function _updateAll() {
  var l = _triggers.length,
      time = _getTime(),
      recordVelocity = time - _time1 >= 50,
      scroll = l && _triggers[0].scroll();

  _direction = _lastScroll > scroll ? -1 : 1;
  _lastScroll = scroll;

  if (recordVelocity) {
    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
      _lastScrollTime = 0;

      _dispatch("scrollEnd");
    }

    _time2 = _time1;
    _time1 = time;
  }

  if (_direction < 0) {
    _i = l;

    while (_i--) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }

    _direction = 1;
  } else {
    for (_i = 0; _i < l; _i++) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }
  }

  _request = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = cs[_width];
    pinStyle[_height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));

    var element = _toArray(trigger)[0] || _body,
        bounds = _getBounds(element) || {},
        offsets = value.split(" "),
        localOffset,
        globalOffset,
        display;

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    scrollerMax = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  return Math.round(value);
},
    _prefixExp = /(?:webkit|moz|length|cssText)/i,
    _reparent = function _reparent(element, parent) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }
    } else {
      style.cssText = element._stOrig;
    }

    parent.appendChild(element);
  }
},
    // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    tween && tween.kill();
    lastScroll1 = initialValue;
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = getScroll();

      if (value !== lastScroll1 && value !== lastScroll2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that!
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = Math.round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;
  return getTween;
};

_horizontal.op = _vertical;
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = 0;
    this.vars && this.kill(1); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var direction = vars.horizontal ? _horizontal : _vertical,
        _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        isToggle = !scrub && scrub !== 0,
        scroller = _toArray(vars.scroller || _win)[0],
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        tweenTo,
        pinCache,
        snapFunc,
        isReverted,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress;

    self.media = _creatingMedia;
    anticipatePin *= 45;

    _triggers.push(self);

    self.scroller = scroller;
    self.scroll = _getScrollFunc(scroller, direction);
    scroll1 = self.scroll();
    self.vars = vars;
    animation = animation || vars.animation;
    "refreshPriority" in vars && (_sort = 1);
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      scrubSmooth = _isNumber(scrub) && scrub;
      scrubSmooth && (scrubTween = gsap.to(animation, {
        ease: "power3",
        duration: scrubSmooth,
        onComplete: function onComplete() {
          return onScrubComplete && onScrubComplete(self);
        }
      }));
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      _isObject(snap) || (snap = {
        snapTo: snap
      });
      gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getLabels(animation) : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = _abs(velocity / 2) * velocity / 0.185,
              naturalEnd = totalProgress + change1,
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              scroll = self.scroll(),
              endScroll = Math.round(start + endValue * change),
              tween = tweenTo.tween;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: Math.abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onComplete: function onComplete() {
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
          }
        } else if (self.isActive) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _toArray(trigger || pin)[0];
    pin = pin === true ? trigger : _toArray(pin)[0];
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        pinCache.spacer = spacer = _doc.createElement("div");
        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

      if (!useFixedPosition) {
        _makePositionable(scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== isReverted) {
        if (r) {
          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        isReverted = r;
      }
    };

    self.refresh = function (soft) {
      if (_refreshing || !self.enabled) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      _refreshing = 1;
      scrubTween && scrubTween.kill();
      invalidateOnRefresh && animation && animation.progress(0).invalidate();
      isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (pin || !trigger ? "0 0" : "0 100%"),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curPin = _triggers[i].pin;
        curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
      }

      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
          cs = curTrigger.end - curTrigger.start;
          curPin === trigger && (offset += cs);
          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = self.scroll(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && self.scroll(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          animation.progress(1, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.progress(0, true);
        } else {
          pinChange = change;
        }
      } else if (trigger && self.scroll()) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      for (i = 0; i < triggerIndex; i++) {
        // make sure we revert from first to last to make sure things reach their end state properly
        curTrigger = _triggers[i].pin;
        curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
      }

      self.start = start;
      self.end = end;
      scroll1 = scroll2 = self.scroll(); // reset velocity

      scroll1 < prevScroll && self.scroll(prevScroll);
      self.revert(false);
      _refreshing = 0;
      prevAnimProgress && isToggle && animation.progress(prevAnimProgress, true);

      if (prevProgress !== self.progress) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        scrubTween && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update();
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.update = function (reset, recordVelocity) {
      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween.vars.totalProgress = clipped;
            scrubTween.invalidate().restart();
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(pinStart + pinChange * clipped);
          } else if (stateChanged) {
            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || action)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                pin.style.top = bounds.top + (direction === _vertical ? _offset : 0) + _px;
                pin.style.left = bounds.left + (direction === _vertical ? 0 : _offset) + _px;
              }

              _reparent(pin, !reset && (isActive || action) ? _body : spacer);
            }

            _setState(isActive || action ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            if (animation && (action === "complete" || action === "reset" || action in animation)) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && onToggle(self);
            callbacks[toggleState] && callbacks[toggleState](self);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && callbacks[toggleState](self);
            }
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(scroll);
      }
    };

    self.enable = function () {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
        !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
          return start || end || self.refresh();
        }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick.
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill();
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      _triggers.splice(i, 1);

      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode.removeChild(m);
      });
      pinCache && (pinCache.uncache = 1);
    };

    self.enable();
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();

      if (_windowExists() && window.document) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
      }

      if (gsap) {
        _toArray = gsap.utils.toArray;
        _clamp = gsap.utils.clamp;
        gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

        if (_body) {
          _raf = _win.requestAnimationFrame || function (f) {
            return setTimeout(f, 16);
          };

          _addListener(_win, "mousewheel", _onScroll);

          _root = [_win, _doc, _docEl, _body];

          _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


          var bodyStyle = _body.style,
              border = bodyStyle.borderTop,
              bounds;
          bodyStyle.borderTop = "1px solid #000"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

          bounds = _getBounds(_body);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
          _syncInterval = setInterval(_sync, 200);
          gsap.delayedCall(0.5, function () {
            return _startup = 0;
          });

          _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


          _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
            return _pointerIsDown = 1;
          });

          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
            return _pointerIsDown = 0;
          });

          _transformProp = gsap.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted = _getTime();
          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc, "visibilitychange", function () {
            var w = _win.innerWidth,
                h = _win.innerHeight;

            if (_doc.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
            return _lastScrollTime || _refreshAll();
          }, _win, "resize", _onResize];

          _iterateAutoRefresh(_addListener);
        }
      }
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    for (var p in config) {
      _defaults[p] = config[p];
    }
  };

  ScrollTrigger.kill = function kill() {
    _enabled = 0;

    _triggers.slice(0).forEach(function (trigger) {
      return trigger.kill(1);
    });
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "autoRefreshEvents" in vars && (_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none"));
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _toArray(target)[0];

    _isViewport(t) ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 3);
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.5.0";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    var i = _savedStyles.indexOf(target);

    i >= 0 && _savedStyles.splice(i, 4);

    _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : _refreshAll(true);
};

ScrollTrigger.update = _updateAll;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.slice(0);
};

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ 490:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ 491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_animations_panel_frontend_js__ = __webpack_require__(/*! ./components/animations-panel/frontend.js */ 492);
/**
 * Gutenberg Blocks Frontend JS
 *
 * All blocks frontend related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */




/***/ }),

/***/ 491:
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

/* eslint-disable no-undef */

/**
 * Block Frontend
 */

function readyYoutube(playerID, videoID) {
	if (YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
		var player = new YT.Player(playerID, {
			playerVars: {
				autoplay: 1,
				controls: 0,
				disablekb: 0,
				autohide: 1,
				wmode: "opaque",
				hd: 1,
				enablejsapi: 1,
				loop: 1,
				showinfo: 0,
				// eslint-disable-next-line camelcase
				iv_load_policy: 3,
				rel: 0,
				modestbranding: 1,
				playlist: videoID
			},
			videoId: videoID,
			events: {
				onReady: onPlayerReady
			}
		});
	} else {
		setTimeout(function () {
			readyYoutube(playerID, videoID);
		}, 100);
	}
}

// API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();
	event.target.playVideo();

	// this .c9-video element -> .c9-embed-container -> .c9-video-container
	// console.log(event.target)
	event.target.f.parentNode.parentNode.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
	var embeds = document.getElementsByClassName("c9-video");
	for (var i = 0; i < embeds.length; i++) {
		var playerID = embeds[i].getAttribute("id");
		var id = embeds[i].getAttribute("video-id");
		readyYoutube(playerID, id);
	}

	// if video custom elements are present
	var $ = window.jQuery;

	$(".c9-video-container").each(function () {
		var self = this;
		var check = $(".c9-video-custom", this).length;
		if (0 < check) {
			$(".c9-video-custom", this).on("canplay", function () {
				$(self).css({ opacity: 1 });
			});
		}
	});
});

/***/ }),

/***/ 492:
/*!*****************************************************!*\
  !*** ./src/components/animations-panel/frontend.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ./utils */ 34);
/**
 * Animations Frontend
 */



document.addEventListener("DOMContentLoaded", function () {
	// simple timeline setups
	var gsap = window.gsap;
	var ScrollTrigger = window.ScrollTrigger;
	// register plugin
	gsap.registerPlugin(ScrollTrigger);

	var animateTargets = document.querySelectorAll("[data-c9-animate]");
	// console.log(animateTargets);

	//setup gsap
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = animateTargets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;

			var animateVal = element.dataset.c9Animate;
			var animateDelay = element.dataset.c9AnimateDelay;
			var animateSpeed = element.dataset.c9AnimateSpeed;
			var animateScrub = element.dataset.c9AnimateScrub;
			// console.log(animateVal, animateDelay, animateSpeed);
			var customConfig = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createCustomConfig */])(animateVal, animateDelay, animateSpeed);
			// string to boolean
			animateScrub = "true" === animateScrub;
			gsap.fromTo(element, customConfig[0], Object.assign({}, customConfig[1], {
				scrollTrigger: {
					trigger: element,
					scrub: animateScrub
				}
			}));
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
});

/***/ }),

/***/ 58:
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default, _getBBox, _createElement, checkPrefix */
/*! exports used: CSSPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSPlugin; });
/* unused harmony export default */
/* unused harmony export _getBBox */
/* unused harmony export _createElement */
/* unused harmony export checkPrefix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(/*! ./gsap-core.js */ 35);
/*!
 * CSSPlugin 3.5.0
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
    //transforms and borderRadius are relative to the size of the element itself!
    return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["u" /* _ticker */].time) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["g" /* _getCache */])(parent);
      cache.time = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["u" /* _ticker */].time;
      cache.width = parent[measureProperty];
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["h" /* _getProperty */])(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, target.style, prop, 0, 1, __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["q" /* _renderComplexString */]),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["d" /* _colorStringFilter */])(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */]) || [];
  endValues = end.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */]) || [];

  if (endValues.length) {
    while (result = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */].exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */].lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["p" /* _relExp */].test(end)) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["m" /* _numExp */]).map(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */]);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["g" /* _getCache */])(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* GSCache */](target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = !cache.uncache && target.getAttribute("data-svg-origin");

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(Math.sqrt(a * a + b * b + c * c));
      scaleY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
  cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
  cache.z = z + px;
  cache.scaleX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(scaleX);
  cache.scaleY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(scaleY);
  cache.rotation = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotation) + deg;
  cache.rotationX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotationX) + deg;
  cache.rotationY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(start);
  return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a11);
    a21 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a21);
    a12 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a12);
    a22 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(tx + xPercent / 100 * temp.width);
    ty = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);

  if (forceCSS) {
    //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
    target.style[_transformProp] = temp;
  }
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["j" /* _isString */])(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var style = _tempDivStyler.style,
      startCache = target._gsap,
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;
  style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)

  style[_transformProp] = transforms;

  _doc.body.appendChild(_tempDivStyler);

  endCache = _parseTransform(_tempDivStyler, 1);

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(startValue);
      endUnit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _doc.body.removeChild(_tempDivStyler);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["o" /* _plugins */][p] && Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["c" /* _checkPlugin */])(p, vars, tween, index, target, targets)) {
        //plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["r" /* _replaceRandom */])(endValue);
      }

      if (specialProp) {
        if (specialProp(this, target, p, endValue, tween)) {
          hasPriority = 1;
        }
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
      } else if (type !== "undefined") {
        startValue = _get(target, p);
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform || _parseTransform(target); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (endValue + "").substr((endNum + "").length) || (p in __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units ? __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[p] : startUnit);

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, p, startValue, endUnit);
          }

          this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit) {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, target[p], endValue, index, targets);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["l" /* _missingPlugin */])(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["t" /* _sortPropTweensByPriority */])(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["k" /* _isUndefined */])(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["i" /* _getSetter */])(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(rotation, function (name) {
    __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[name] = "px";
});

__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].registerPlugin(CSSPlugin);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA4N2Q0ZDllZGQ1N2MxZGY2NDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3NhcC9nc2FwLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvU2Nyb2xsVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiY29yZSIsImdsb2JhbHMiLCJjcmVhdGVDdXN0b21Db25maWciLCJhbmltYXRlVmFsIiwiYW5pbWF0ZURlbGF5IiwiYW5pbWF0ZVNwZWVkIiwiYW5pbWF0ZUNvbmZpZ3MiLCJkZWxheSIsImR1cmF0aW9uIiwiaW5pdEFuaW1hdGUiLCJ0YXJnZXQiLCJlbmFibGVBbmltYXRlIiwiYW5pbWF0ZVNjcnViIiwiY3VzdG9tQ29uZmlnIiwiZWRpdG9yQ3VzdG9tQ29uZmlnTW9kaWZ5IiwiZnJvbVRvIiwiY29uZmlnIiwic2Nyb2xsVHJpZ2dlciIsImlkIiwidHJpZ2dlciIsInNjcm9sbGVyIiwiU0NST0xMRVIiLCJzY3J1YiIsInJlc3RhcnRBbmltYXRlIiwiZ2V0QWxsIiwiZm9yRWFjaCIsInN0IiwidmFycyIsImtpbGwiLCJzZXQiLCJjbGVhclByb3BzIiwiREVGQVVMVF9TUEVFRCIsImFuaW1hdGVPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImRpc2FibGVkIiwiZmFkZSIsIm9wYWNpdHkiLCJmYWRlVXAiLCJ5IiwiZmFkZURvd24iLCJmYWRlTGVmdCIsIngiLCJmYWRlUmlnaHQiLCJyZWFkeVlvdXR1YmUiLCJwbGF5ZXJJRCIsInZpZGVvSUQiLCJZVCIsIlBsYXllciIsInBsYXllciIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiYXV0b2hpZGUiLCJ3bW9kZSIsImhkIiwiZW5hYmxlanNhcGkiLCJsb29wIiwic2hvd2luZm8iLCJpdl9sb2FkX3BvbGljeSIsInJlbCIsIm1vZGVzdGJyYW5kaW5nIiwicGxheWxpc3QiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJtdXRlIiwicGxheVZpZGVvIiwiZiIsInBhcmVudE5vZGUiLCJzdHlsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtYmVkcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiJCIsImpRdWVyeSIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJvbiIsImNzcyIsImFuaW1hdGVUYXJnZXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJkYXRhc2V0IiwiYzlBbmltYXRlIiwiYzlBbmltYXRlRGVsYXkiLCJjOUFuaW1hdGVTcGVlZCIsImM5QW5pbWF0ZVNjcnViIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFD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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRSxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7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QUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1Qzs7O0FBR3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzTEFBc0w7QUFDdEw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUdBQXlHO0FBQ3pHOztBQUVBO0FBQ0EsK0RBQStEOztBQUUvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7O0FBRTVFLGlDQUFpQztBQUNqQyxPQUFPO0FBQ1A7O0FBRUEsNkJBQTZCOztBQUU3Qiw4TUFBOE07QUFDOU07QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRkFBMkY7O0FBRTNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0ZBQStGOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjs7QUFFbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3SEFBd0g7O0FBRXhIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSx5RUFBeUU7QUFDekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0IsOENBQThDOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRTs7QUFFakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNk5BQTZOOztBQUU3UTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxhQUFhLG9GQUFvRixJQUFJLFVBQVUsT0FBTzs7O0FBRzdIO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsU0FBUztBQUNUO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0Esb1hBQW9YLHlDQUF5QztBQUM3WjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SCw4QkFBOEI7O0FBRXZKLFNBQVM7QUFDVCx1REFBdUQsb0RBQW9ELE9BQU87O0FBRWxIOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDRFQUE0RTs7O0FBRzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQSw2REFBNkQ7QUFDN0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FO0FBQ25FOztBQUVBO0FBQ0EsS0FBSztBQUNMLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDLHlDQUF5Qzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFOztBQUUxRTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1RkFBdUY7O0FBRXZGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhIQUE4SDs7QUFFOUg7QUFDQSw0SEFBNEgsWUFBWTtBQUN4STs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMklBQTJJOztBQUUzSSxnSUFBZ0k7O0FBRWhJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RDs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw0R0FBNEc7O0FBRTVHO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBLENBQUMsR0FBRzs7QUFFSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFLGVBQWU7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1REFBdUQ7O0FBRXZELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtB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QUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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LE9BQU87QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLE9BQU87QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsT0FBTztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOEpBQThKOztBQUU5SjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHFGQUFxRjs7QUFFL0k7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9COztBQUVBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGOztBQUV0RjtBQUNB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0OTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwODdkNGQ5ZWRkNTdjMWRmNjQ3IiwiLyoqXG4gKiBVdGlsaXRpZXMgZm9yIGluaXRpYXRpbmcgZ3NhcFxuICovXG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IGB1bmRlZmluZWRgKSB7XG5cdGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cdGdzYXAuY29yZS5nbG9iYWxzKFwiU2Nyb2xsVHJpZ2dlclwiLCBTY3JvbGxUcmlnZ2VyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbUNvbmZpZyA9IChhbmltYXRlVmFsLCBhbmltYXRlRGVsYXksIGFuaW1hdGVTcGVlZCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdGFuaW1hdGVDb25maWdzW2FuaW1hdGVWYWxdWzBdLFxuXHRcdHtcblx0XHRcdC4uLmFuaW1hdGVDb25maWdzW2FuaW1hdGVWYWxdWzFdLFxuXHRcdFx0ZGVsYXk6IGFuaW1hdGVEZWxheSAvIDEwMDAsXG5cdFx0XHRkdXJhdGlvbjogYW5pbWF0ZVNwZWVkIC8gMTAwMFxuXHRcdH1cblx0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW5pbWF0ZSA9IChcblx0dGFyZ2V0LFxuXHRlbmFibGVBbmltYXRlLFxuXHRhbmltYXRlVmFsLFxuXHRhbmltYXRlRGVsYXksXG5cdGFuaW1hdGVTcGVlZCxcblx0YW5pbWF0ZVNjcnViXG4pID0+IHtcblx0bGV0IGN1c3RvbUNvbmZpZyA9IGNyZWF0ZUN1c3RvbUNvbmZpZyhhbmltYXRlVmFsLCBhbmltYXRlRGVsYXksIGFuaW1hdGVTcGVlZCk7XG5cdGN1c3RvbUNvbmZpZyA9IGVkaXRvckN1c3RvbUNvbmZpZ01vZGlmeShjdXN0b21Db25maWcsIHRhcmdldCwgYW5pbWF0ZVNjcnViKTtcblxuXHRpZiAoZW5hYmxlQW5pbWF0ZSkge1xuXHRcdGdzYXAuZnJvbVRvKHRhcmdldCwgLi4uY3VzdG9tQ29uZmlnKTtcblx0fVxufTtcblxuY29uc3QgZWRpdG9yQ3VzdG9tQ29uZmlnTW9kaWZ5ID0gKGNvbmZpZywgdGFyZ2V0LCBhbmltYXRlU2NydWIpID0+IHtcblx0cmV0dXJuIFtcblx0XHRjb25maWdbMF0sXG5cdFx0e1xuXHRcdFx0Li4uY29uZmlnWzFdLFxuXHRcdFx0c2Nyb2xsVHJpZ2dlcjoge1xuXHRcdFx0XHRpZDogdGFyZ2V0LFxuXHRcdFx0XHR0cmlnZ2VyOiB0YXJnZXQsXG5cdFx0XHRcdHNjcm9sbGVyOiBTQ1JPTExFUixcblx0XHRcdFx0Ly8gbWFya2VyczogdHJ1ZSxcblx0XHRcdFx0c2NydWI6IGFuaW1hdGVTY3J1YlxuXHRcdFx0fVxuXHRcdH1cblx0XTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXN0YXJ0QW5pbWF0ZSA9IChcblx0dGFyZ2V0LFxuXHRhbmltYXRlVmFsLFxuXHRhbmltYXRlRGVsYXksXG5cdGFuaW1hdGVTcGVlZCxcblx0YW5pbWF0ZVNjcnViLFxuXHRlbmFibGVBbmltYXRlXG4pID0+IHtcblx0bGV0IGN1c3RvbUNvbmZpZyA9IGNyZWF0ZUN1c3RvbUNvbmZpZyhcblx0XHRhbmltYXRlVmFsLFxuXHRcdGFuaW1hdGVEZWxheSxcblx0XHRhbmltYXRlU3BlZWQsXG5cdFx0YW5pbWF0ZVNjcnViXG5cdCk7XG5cdFNjcm9sbFRyaWdnZXIuZ2V0QWxsKCkuZm9yRWFjaChzdCA9PiB7XG5cdFx0aWYgKHN0LnZhcnMuaWQgPT09IHRhcmdldCkge1xuXHRcdFx0c3Qua2lsbCgpO1xuXHRcdH1cblx0fSk7XG5cdGdzYXAuc2V0KHRhcmdldCwgeyBjbGVhclByb3BzOiB0cnVlIH0pO1xuXG5cdGlmICghZW5hYmxlQW5pbWF0ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChhbmltYXRlU2NydWIpIHtcblx0XHRjdXN0b21Db25maWcgPSBlZGl0b3JDdXN0b21Db25maWdNb2RpZnkoY3VzdG9tQ29uZmlnLCB0YXJnZXQsIGFuaW1hdGVTY3J1Yik7XG5cdH1cblx0Z3NhcC5mcm9tVG8odGFyZ2V0LCAuLi5jdXN0b21Db25maWcpO1xufTtcblxuLyoqXG4gKiBBbmltYXRlIENvbmZpZ3VyYXRpb25zXG4gKi9cblxuY29uc3QgREVGQVVMVF9TUEVFRCA9IDI7XG5jb25zdCBTQ1JPTExFUiA9IFwiLmludGVyZmFjZS1pbnRlcmZhY2Utc2tlbGV0b25fX2NvbnRlbnRcIjtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGVPcHRpb25zID0gW1xuXHR7IHZhbHVlOiBudWxsLCBsYWJlbDogXCJTZWxlY3QgYW5pbWF0aW9uXCIsIGRpc2FibGVkOiB0cnVlIH0sXG5cdHtcblx0XHR2YWx1ZTogXCJmYWRlXCIsXG5cdFx0bGFiZWw6IFwiRmFkZVwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJmYWRlVXBcIixcblx0XHRsYWJlbDogXCJGYWRlIFVwXCJcblx0fSxcblx0e1xuXHRcdHZhbHVlOiBcImZhZGVEb3duXCIsXG5cdFx0bGFiZWw6IFwiRmFkZSBEb3duXCJcblx0fSxcblx0e1xuXHRcdHZhbHVlOiBcImZhZGVMZWZ0XCIsXG5cdFx0bGFiZWw6IFwiRmFkZSBMZWZ0XCJcblx0fSxcblx0e1xuXHRcdHZhbHVlOiBcImZhZGVSaWdodFwiLFxuXHRcdGxhYmVsOiBcIkZhZGUgUmlnaHRcIlxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0ZUNvbmZpZ3MgPSB7XG5cdGZhZGU6IFtcblx0XHR7XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0fSxcblx0XHR7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiBERUZBVUxUX1NQRUVEIH1cblx0XSxcblx0ZmFkZVVwOiBbXG5cdFx0e1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdHk6IDEwMFxuXHRcdH0sXG5cdFx0eyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogREVGQVVMVF9TUEVFRCwgeTogMCB9XG5cdF0sXG5cdGZhZGVEb3duOiBbXG5cdFx0e1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdHk6IC0xMDBcblx0XHR9LFxuXHRcdHsgb3BhY2l0eTogMSwgZHVyYXRpb246IERFRkFVTFRfU1BFRUQsIHk6IDAgfVxuXHRdLFxuXHRmYWRlTGVmdDogW1xuXHRcdHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR4OiAtMTAwXG5cdFx0fSxcblx0XHR7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiBERUZBVUxUX1NQRUVELCB4OiAwIH1cblx0XSxcblx0ZmFkZVJpZ2h0OiBbXG5cdFx0e1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdHg6IDEwMFxuXHRcdH0sXG5cdFx0eyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogREVGQVVMVF9TUEVFRCwgeDogMCB9XG5cdF1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL3V0aWxzL2luZGV4LmpzIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy41LjBcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjAsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgX2NvbmZpZyA9IHtcbiAgYXV0b1NsZWVwOiAxMjAsXG4gIGZvcmNlM0Q6IFwiYXV0b1wiLFxuICBudWxsVGFyZ2V0V2FybjogMSxcbiAgdW5pdHM6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIlwiXG4gIH1cbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICBkdXJhdGlvbjogLjUsXG4gIG92ZXJ3cml0ZTogZmFsc2UsXG4gIGRlbGF5OiAwXG59LFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgPyBBcnJheUJ1ZmZlci5pc1ZpZXcgOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgLy9vbmx5IG51bWJlcnMgKGluY2x1ZGluZyBuZWdhdGl2ZXMgYW5kIGRlY2ltYWxzKSBidXQgTk9UIHJlbGF0aXZlIHZhbHVlcy5cbl9udW1FeHAgPSAvWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC1cXCtdKlxcZCovZyxcbiAgICAvL2ZpbmRzIGFueSBudW1iZXJzLCBpbmNsdWRpbmcgb25lcyB0aGF0IHN0YXJ0IHdpdGggKz0gb3IgLT0sIG5lZ2F0aXZlIG51bWJlcnMsIGFuZCBvbmVzIGluIHNjaWVudGlmaWMgbm90YXRpb24gbGlrZSAxZS04LlxuX251bVdpdGhVbml0RXhwID0gL1stKz0uXSpcXGQrWy5lLV0qXFxkKlthLXolXSovZyxcbiAgICBfY29tcGxleFN0cmluZ051bUV4cCA9IC9bLSs9Ll0qXFxkKyg/OlxcLnxlLXxlKSpcXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bXFwuXFxkXSsvLFxuICAgIF9kZWxpbWl0ZWRWYWx1ZUV4cCA9IC9bI1xcLSsuXSpcXGJbYS16XFxkLT0rJS5dKy9naSxcbiAgICBfZ2xvYmFsVGltZWxpbmUsXG4gICAgX3dpbixcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2RvYyxcbiAgICBfZ2xvYmFscyA9IHt9LFxuICAgIF9pbnN0YWxsU2NvcGUgPSB7fSxcbiAgICBfY29yZVJlYWR5LFxuICAgIF9pbnN0YWxsID0gZnVuY3Rpb24gX2luc3RhbGwoc2NvcGUpIHtcbiAgcmV0dXJuIChfaW5zdGFsbFNjb3BlID0gX21lcmdlKHNjb3BlLCBfZ2xvYmFscykpICYmIGdzYXA7XG59LFxuICAgIF9taXNzaW5nUGx1Z2luID0gZnVuY3Rpb24gX21pc3NpbmdQbHVnaW4ocHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5LCBcInNldCB0b1wiLCB2YWx1ZSwgXCJNaXNzaW5nIHBsdWdpbj8gZ3NhcC5yZWdpc3RlclBsdWdpbigpXCIpO1xufSxcbiAgICBfd2FybiA9IGZ1bmN0aW9uIF93YXJuKG1lc3NhZ2UsIHN1cHByZXNzKSB7XG4gIHJldHVybiAhc3VwcHJlc3MgJiYgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xufSxcbiAgICBfYWRkR2xvYmFsID0gZnVuY3Rpb24gX2FkZEdsb2JhbChuYW1lLCBvYmopIHtcbiAgcmV0dXJuIG5hbWUgJiYgKF9nbG9iYWxzW25hbWVdID0gb2JqKSAmJiBfaW5zdGFsbFNjb3BlICYmIChfaW5zdGFsbFNjb3BlW25hbWVdID0gb2JqKSB8fCBfZ2xvYmFscztcbn0sXG4gICAgX2VtcHR5RnVuYyA9IGZ1bmN0aW9uIF9lbXB0eUZ1bmMoKSB7XG4gIHJldHVybiAwO1xufSxcbiAgICBfcmVzZXJ2ZWRQcm9wcyA9IHt9LFxuICAgIF9sYXp5VHdlZW5zID0gW10sXG4gICAgX2xhenlMb29rdXAgPSB7fSxcbiAgICBfbGFzdFJlbmRlcmVkRnJhbWUsXG4gICAgX3BsdWdpbnMgPSB7fSxcbiAgICBfZWZmZWN0cyA9IHt9LFxuICAgIF9uZXh0R0NGcmFtZSA9IDMwLFxuICAgIF9oYXJuZXNzUGx1Z2lucyA9IFtdLFxuICAgIF9jYWxsYmFja05hbWVzID0gXCJcIixcbiAgICBfaGFybmVzcyA9IGZ1bmN0aW9uIF9oYXJuZXNzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldCA9IHRhcmdldHNbMF0sXG4gICAgICBoYXJuZXNzUGx1Z2luLFxuICAgICAgaTtcbiAgX2lzT2JqZWN0KHRhcmdldCkgfHwgX2lzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0cyA9IFt0YXJnZXRzXSk7XG5cbiAgaWYgKCEoaGFybmVzc1BsdWdpbiA9ICh0YXJnZXQuX2dzYXAgfHwge30pLmhhcm5lc3MpKSB7XG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX2FycmF5Q29udGFpbnNBbnkgPSBmdW5jdGlvbiBfYXJyYXlDb250YWluc0FueSh0b1NlYXJjaCwgdG9GaW5kKSB7XG4gIC8vc2VhcmNoZXMgb25lIGFycmF5IHRvIGZpbmQgbWF0Y2hlcyBmb3IgYW55IG9mIHRoZSBpdGVtcyBpbiB0aGUgdG9GaW5kIGFycmF5LiBBcyBzb29uIGFzIG9uZSBpcyBmb3VuZCwgaXQgcmV0dXJucyB0cnVlLiBJdCBkb2VzIE5PVCByZXR1cm4gYWxsIHRoZSBtYXRjaGVzOyBpdCdzIHNpbXBseSBhIGJvb2xlYW4gc2VhcmNoLlxuICB2YXIgbCA9IHRvRmluZC5sZW5ndGgsXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgdG9TZWFyY2guaW5kZXhPZih0b0ZpbmRbaV0pIDwgMCAmJiArK2kgPCBsOykge31cblxuICByZXR1cm4gaSA8IGw7XG59LFxuICAgIF9wYXJzZVZhcnMgPSBmdW5jdGlvbiBfcGFyc2VWYXJzKHBhcmFtcywgdHlwZSwgcGFyZW50KSB7XG4gIC8vcmVhZHMgdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gb25lIG9mIHRoZSBrZXkgbWV0aG9kcyBhbmQgZmlndXJlcyBvdXQgaWYgdGhlIHVzZXIgaXMgZGVmaW5pbmcgdGhpbmdzIHdpdGggdGhlIE9MRC9sZWdhY3kgc3ludGF4IHdoZXJlIHRoZSBkdXJhdGlvbiBpcyB0aGUgMm5kIHBhcmFtZXRlciwgYW5kIHRoZW4gaXQgYWRqdXN0cyB0aGluZ3MgYWNjb3JkaW5nbHkgYW5kIHNwaXRzIGJhY2sgdGhlIGNvcnJlY3RlZCB2YXJzIG9iamVjdCAod2l0aCB0aGUgZHVyYXRpb24gYWRkZWQgaWYgbmVjZXNzYXJ5LCBhcyB3ZWxsIGFzIHJ1bkJhY2t3YXJkcyBvciBzdGFydEF0IG9yIGltbWVkaWF0ZVJlbmRlcikuIHR5cGUgMCA9IHRvKCkvc3RhZ2dlclRvKCksIDEgPSBmcm9tKCkvc3RhZ2dlckZyb20oKSwgMiA9IGZyb21UbygpL3N0YWdnZXJGcm9tVG8oKVxuICB2YXIgaXNMZWdhY3kgPSBfaXNOdW1iZXIocGFyYW1zWzFdKSxcbiAgICAgIHZhcnNJbmRleCA9IChpc0xlZ2FjeSA/IDIgOiAxKSArICh0eXBlIDwgMiA/IDAgOiAxKSxcbiAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgIGlyVmFycztcblxuICBpc0xlZ2FjeSAmJiAodmFycy5kdXJhdGlvbiA9IHBhcmFtc1sxXSk7XG4gIHZhcnMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmICh0eXBlKSB7XG4gICAgaXJWYXJzID0gdmFycztcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgIC8vIGluaGVyaXRhbmNlIGhhc24ndCBoYXBwZW5lZCB5ZXQsIGJ1dCBzb21lb25lIG1heSBoYXZlIHNldCBhIGRlZmF1bHQgaW4gYW4gYW5jZXN0b3IgdGltZWxpbmUuIFdlIGNvdWxkIGRvIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIpIGJ1dCB0aGF0J2QgZXhhY3QgYSBzbGlnaHQgcGVyZm9ybWFuY2UgcGVuYWx0eSBiZWNhdXNlIF9pbmhlcml0RGVmYXVsdHMoKSBhbHNvIHJ1bnMgaW4gdGhlIFR3ZWVuIGNvbnN0cnVjdG9yLiBXZSdyZSBwYXlpbmcgYSBzbWFsbCBrYiBwcmljZSBoZXJlIHRvIGdhaW4gc3BlZWQuXG4gICAgICBpclZhcnMgPSBwYXJlbnQudmFycy5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShpclZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTsgLy8gXCJmcm9tXCIgdmFyc1xuICB9XG5cbiAgcmV0dXJuIHZhcnM7XG59LFxuICAgIF9sYXp5UmVuZGVyID0gZnVuY3Rpb24gX2xhenlSZW5kZXIoKSB7XG4gIHZhciBsID0gX2xhenlUd2VlbnMubGVuZ3RoLFxuICAgICAgYSA9IF9sYXp5VHdlZW5zLnNsaWNlKDApLFxuICAgICAgaSxcbiAgICAgIHR3ZWVuO1xuXG4gIF9sYXp5TG9va3VwID0ge307XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIHR3ZWVuID0gYVtpXTtcbiAgICB0d2VlbiAmJiB0d2Vlbi5fbGF6eSAmJiAodHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSkuX2xhenkgPSAwKTtcbiAgfVxufSxcbiAgICBfbGF6eVNhZmVSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVNhZmVSZW5kZXIoYW5pbWF0aW9uLCB0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7XG4gIGFuaW1hdGlvbi5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cbn0sXG4gICAgX251bWVyaWNJZlBvc3NpYmxlID0gZnVuY3Rpb24gX251bWVyaWNJZlBvc3NpYmxlKHZhbHVlKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiAobiB8fCBuID09PSAwKSAmJiAodmFsdWUgKyBcIlwiKS5tYXRjaChfZGVsaW1pdGVkVmFsdWVFeHApLmxlbmd0aCA8IDIgPyBuIDogX2lzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xufSxcbiAgICBfcGFzc1Rocm91Z2ggPSBmdW5jdGlvbiBfcGFzc1Rocm91Z2gocCkge1xuICByZXR1cm4gcDtcbn0sXG4gICAgX3NldERlZmF1bHRzID0gZnVuY3Rpb24gX3NldERlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXRLZXlmcmFtZURlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiB8fCBwID09PSBcImVhc2VcIiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIG9iaikge1xuICAgIHAgaW4gZXhjbHVkaW5nIHx8IChjb3B5W3BdID0gb2JqW3BdKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICBmdW5jID0gdmFycy5rZXlmcmFtZXMgPyBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZShjaGlsZCk7XG4gIGNoaWxkLl9hY3QgPSAwO1xufSxcbiAgICBfdW5jYWNoZSA9IGZ1bmN0aW9uIF91bmNhY2hlKGFuaW1hdGlvbiwgY2hpbGQpIHtcbiAgaWYgKCFjaGlsZCB8fCBjaGlsZC5fZW5kID4gYW5pbWF0aW9uLl9kdXIgfHwgY2hpbGQuX3N0YXJ0IDwgMCkge1xuICAgIC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjogaWYgYSBjaGlsZCBhbmltYXRpb24gaXMgcGFzc2VkIGluIHdlIHNob3VsZCBvbmx5IHVuY2FjaGUgaWYgdGhhdCBjaGlsZCBFWFRFTkRTIHRoZSBhbmltYXRpb24gKGl0cyBlbmQgdGltZSBpcyBiZXlvbmQgdGhlIGVuZClcbiAgICB2YXIgYSA9IGFuaW1hdGlvbjtcblxuICAgIHdoaWxlIChhKSB7XG4gICAgICBhLl9kaXJ0eSA9IDE7XG4gICAgICBhID0gYS5wYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3JlY2FjaGVBbmNlc3RvcnMgPSBmdW5jdGlvbiBfcmVjYWNoZUFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5wYXJlbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgLy9zb21ldGltZXMgd2UgbXVzdCBmb3JjZSBhIHJlLXNvcnQgb2YgYWxsIGNoaWxkcmVuIGFuZCB1cGRhdGUgdGhlIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gb2YgYWxsIGFuY2VzdG9yIHRpbWVsaW5lcyBpbW1lZGlhdGVseSBpbiBjYXNlLCBmb3IgZXhhbXBsZSwgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuICAgIHBhcmVudC5fZGlydHkgPSAxO1xuICAgIHBhcmVudC50b3RhbER1cmF0aW9uKCk7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG59LFxuICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbn0sXG4gICAgLy8gZmVlZCBpbiB0aGUgdG90YWxUaW1lIGFuZCBjeWNsZUR1cmF0aW9uIGFuZCBpdCdsbCByZXR1cm4gdGhlIGN5Y2xlIChpdGVyYXRpb24gbWludXMgMSkgYW5kIGlmIHRoZSBwbGF5aGVhZCBpcyBleGFjdGx5IGF0IHRoZSB2ZXJ5IEVORCwgaXQgd2lsbCBOT1QgYnVtcCB1cCB0byB0aGUgbmV4dCBjeWNsZS5cbl9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICByZXR1cm4gKHRUaW1lIC89IGN5Y2xlRHVyYXRpb24pICYmIH5+dFRpbWUgPT09IHRUaW1lID8gfn50VGltZSAtIDEgOiB+fnRUaW1lO1xufSxcbiAgICBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSA9IGZ1bmN0aW9uIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudFRpbWUsIGNoaWxkKSB7XG4gIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xufSxcbiAgICBfc2V0RW5kID0gZnVuY3Rpb24gX3NldEVuZChhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xufSxcbiAgICBfYWxpZ25QbGF5aGVhZCA9IGZ1bmN0aW9uIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgdG90YWxUaW1lKSB7XG4gIC8vIGFkanVzdHMgdGhlIGFuaW1hdGlvbidzIF9zdGFydCBhbmQgX2VuZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHRvdGFsVGltZSAob25seSBpZiB0aGUgcGFyZW50J3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSBhbmQgdGhlIGFuaW1hdGlvbiBpc24ndCBwYXVzZWQpLiBJdCBkb2Vzbid0IGRvIGFueSByZW5kZXJpbmcgb3IgZm9yY2luZyB0aGluZ3MgYmFjayBpbnRvIHBhcmVudCB0aW1lbGluZXMsIGV0Yy4gLSB0aGF0J3Mgd2hhdCB0b3RhbFRpbWUoKSBpcyBmb3IuXG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICBhbmltYXRpb24uX3N0YXJ0ID0gX3JvdW5kKGFuaW1hdGlvbi5fZHAuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgIF9zZXRFbmQoYW5pbWF0aW9uKTtcblxuICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pOyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuXG4vKlxuX3RvdGFsVGltZVRvVGltZSA9IChjbGFtcGVkVG90YWxUaW1lLCBkdXJhdGlvbiwgcmVwZWF0LCByZXBlYXREZWxheSwgeW95bykgPT4ge1xuXHRsZXQgY3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgcmVwZWF0RGVsYXksXG5cdFx0dGltZSA9IF9yb3VuZChjbGFtcGVkVG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cdGlmICh0aW1lID4gZHVyYXRpb24pIHtcblx0XHR0aW1lID0gZHVyYXRpb247XG5cdH1cblx0cmV0dXJuICh5b3lvICYmICh+fihjbGFtcGVkVG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgJiAxKSkgPyBkdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xufSxcbiovXG5fcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICB2YXIgdDtcblxuICBpZiAoY2hpbGQuX3RpbWUgfHwgY2hpbGQuX2luaXR0ZWQgJiYgIWNoaWxkLl9kdXIpIHtcbiAgICAvL2luIGNhc2UsIGZvciBleGFtcGxlLCB0aGUgX3N0YXJ0IGlzIG1vdmVkIG9uIGEgdHdlZW4gdGhhdCBoYXMgYWxyZWFkeSByZW5kZXJlZC4gSW1hZ2luZSBpdCdzIGF0IGl0cyBlbmQgc3RhdGUsIHRoZW4gdGhlIHN0YXJ0VGltZSBpcyBtb3ZlZCBXQVkgbGF0ZXIgKGFmdGVyIHRoZSBlbmQgb2YgdGhpcyB0aW1lbGluZSksIGl0IHNob3VsZCByZW5kZXIgYXQgaXRzIGJlZ2lubmluZy5cbiAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgY2hpbGQucmVuZGVyKHQsIHRydWUpO1xuICAgIH1cbiAgfSAvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblxuXG4gIGlmIChfdW5jYWNoZSh0aW1lbGluZSwgY2hpbGQpLl9kcCAmJiB0aW1lbGluZS5faW5pdHRlZCAmJiB0aW1lbGluZS5fdGltZSA+PSB0aW1lbGluZS5fZHVyICYmIHRpbWVsaW5lLl90cykge1xuICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9ycyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQuLi5cbiAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgIHQgPSB0aW1lbGluZTtcblxuICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC4gSWYgaXQncyBjdXJyZW50bHkgemVybywgdGhvdWdoLCBpdCBtYXkgbm90IGJlIHNjaGVkdWxlZCB0byByZW5kZXIgdW50aWwgbGF0ZXIgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIGl0IHRvIGFsaWduIHdpdGggdGhlIGN1cnJlbnQgcGxheWhlYWQgcG9zaXRpb24uIE9ubHkgbW92ZSB0byBjYXRjaCB1cCB3aXRoIHRoZSBwbGF5aGVhZC5cblxuICAgICAgICB0ID0gdC5fZHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUuX3pUaW1lID0gLV90aW55TnVtOyAvLyBoZWxwcyBlbnN1cmUgdGhhdCB0aGUgbmV4dCByZW5kZXIoKSB3aWxsIGJlIGZvcmNlZCAoY3Jvc3NpbmdTdGFydCA9IHRydWUgaW4gcmVuZGVyKCkpLCBldmVuIGlmIHRoZSBkdXJhdGlvbiBoYXNuJ3QgY2hhbmdlZCAod2UncmUgYWRkaW5nIGEgY2hpbGQgd2hpY2ggd291bGQgbmVlZCB0byBnZXQgcmVuZGVyZWQpLiBEZWZpbml0ZWx5IGFuIGVkZ2UgY2FzZS4gTm90ZTogd2UgTVVTVCBkbyB0aGlzIEFGVEVSIHRoZSBsb29wIGFib3ZlIHdoZXJlIHRoZSB0b3RhbFRpbWUoKSBtaWdodCB0cmlnZ2VyIGEgcmVuZGVyKCkgYmVjYXVzZSB0aGlzIF9hZGRUb1RpbWVsaW5lKCkgbWV0aG9kIGdldHMgY2FsbGVkIGZyb20gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgQkVGT1JFIHR3ZWVucyBldmVuIHJlY29yZCB0aGVpciB0YXJnZXRzLCBldGMuIHNvIHdlIHdvdWxkbid0IHdhbnQgdGhpbmdzIHRvIGdldCB0cmlnZ2VyZWQgaW4gdGhlIHdyb25nIG9yZGVyLlxuICB9XG59LFxuICAgIF9hZGRUb1RpbWVsaW5lID0gZnVuY3Rpb24gX2FkZFRvVGltZWxpbmUodGltZWxpbmUsIGNoaWxkLCBwb3NpdGlvbiwgc2tpcENoZWNrcykge1xuICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICBjaGlsZC5fc3RhcnQgPSBfcm91bmQocG9zaXRpb24gKyBjaGlsZC5fZGVsYXkpO1xuICBjaGlsZC5fZW5kID0gX3JvdW5kKGNoaWxkLl9zdGFydCArIChjaGlsZC50b3RhbER1cmF0aW9uKCkgLyBNYXRoLmFicyhjaGlsZC50aW1lU2NhbGUoKSkgfHwgMCkpO1xuXG4gIF9hZGRMaW5rZWRMaXN0SXRlbSh0aW1lbGluZSwgY2hpbGQsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGltZWxpbmUuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG5cbiAgdGltZWxpbmUuX3JlY2VudCA9IGNoaWxkO1xuICBza2lwQ2hlY2tzIHx8IF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCk7XG4gIHJldHVybiB0aW1lbGluZTtcbn0sXG4gICAgX3Njcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2Nyb2xsVHJpZ2dlcihhbmltYXRpb24sIHRyaWdnZXIpIHtcbiAgcmV0dXJuIChfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyIHx8IF9taXNzaW5nUGx1Z2luKFwic2Nyb2xsVHJpZ2dlclwiLCB0cmlnZ2VyKSkgJiYgX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUodHJpZ2dlciwgYW5pbWF0aW9uKTtcbn0sXG4gICAgX2F0dGVtcHRJbml0VHdlZW4gPSBmdW5jdGlvbiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgX2luaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lKTtcblxuICBpZiAoIXR3ZWVuLl9pbml0dGVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoIWZvcmNlICYmIHR3ZWVuLl9wdCAmJiAodHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkgIT09IGZhbHNlIHx8ICF0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSkgJiYgX2xhc3RSZW5kZXJlZEZyYW1lICE9PSBfdGlja2VyLmZyYW1lKSB7XG4gICAgX2xhenlUd2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgICB0d2Vlbi5fbGF6eSA9IFt0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzXTtcbiAgICByZXR1cm4gMTtcbiAgfVxufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmIHByZXZSYXRpbyAmJiAhdHdlZW4uX3N0YXJ0ICYmIHR3ZWVuLl96VGltZSA+IF90aW55TnVtICYmICF0d2Vlbi5fZHAuX2xvY2sgfHwgKHR3ZWVuLl90cyA8IDAgfHwgdHdlZW4uX2RwLl90cyA8IDApICYmIHR3ZWVuLmRhdGEgIT09IFwiaXNGcm9tU3RhcnRcIiAmJiB0d2Vlbi5kYXRhICE9PSBcImlzU3RhcnRcIiA/IDAgOiAxLFxuICAgICAgLy8gY2hlY2sgcGFyZW50J3MgX2xvY2sgYmVjYXVzZSB3aGVuIGEgdGltZWxpbmUgcmVwZWF0cy95b3lvcyBhbmQgZG9lcyBpdHMgYXJ0aWZpY2lhbCB3cmFwcGluZywgd2Ugc2hvdWxkbid0IGZvcmNlIHRoZSByYXRpbyBiYWNrIHRvIDAuIEFsc28sIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuXG4gIHJlcGVhdERlbGF5ID0gdHdlZW4uX3JEZWxheSxcbiAgICAgIHRUaW1lID0gMCxcbiAgICAgIHB0LFxuICAgICAgaXRlcmF0aW9uLFxuICAgICAgcHJldkl0ZXJhdGlvbjtcblxuICBpZiAocmVwZWF0RGVsYXkgJiYgdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vIGluIGNhc2UgdGhlcmUncyBhIHplcm8tZHVyYXRpb24gdHdlZW4gdGhhdCBoYXMgYSByZXBlYXQgd2l0aCBhIHJlcGVhdERlbGF5XG4gICAgdFRpbWUgPSBfY2xhbXAoMCwgdHdlZW4uX3REdXIsIHRvdGFsVGltZSk7XG4gICAgaXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCByZXBlYXREZWxheSk7XG4gICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgLy8gaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyYXRpbyAhPT0gcHJldlJhdGlvIHx8IGZvcmNlIHx8IHR3ZWVuLl96VGltZSA9PT0gX3RpbnlOdW0gfHwgIXRvdGFsVGltZSAmJiB0d2Vlbi5felRpbWUpIHtcbiAgICBwcmV2SXRlcmF0aW9uID0gdHdlZW4uX3pUaW1lO1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZSB8fCAoc3VwcHJlc3NFdmVudHMgPyBfdGlueU51bSA6IDApOyAvLyB3aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgIHN1cHByZXNzRXZlbnRzIHx8IChzdXBwcmVzc0V2ZW50cyA9IHRvdGFsVGltZSAmJiAhcHJldkl0ZXJhdGlvbik7IC8vIGlmIGl0IHdhcyByZW5kZXJlZCBwcmV2aW91c2x5IGF0IGV4YWN0bHkgMCAoX3pUaW1lKSBhbmQgbm93IHRoZSBwbGF5aGVhZCBpcyBtb3ZpbmcgYXdheSwgRE9OJ1QgZmlyZSBjYWxsYmFja3Mgb3RoZXJ3aXNlIHRoZXknbGwgc2VlbSBsaWtlIGR1cGxpY2F0ZXMuXG5cbiAgICB0d2Vlbi5yYXRpbyA9IHJhdGlvO1xuICAgIHR3ZWVuLl9mcm9tICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG4gICAgdHdlZW4uX3RpbWUgPSAwO1xuICAgIHR3ZWVuLl90VGltZSA9IHRUaW1lO1xuICAgIHN1cHByZXNzRXZlbnRzIHx8IF9jYWxsYmFjayh0d2VlbiwgXCJvblN0YXJ0XCIpO1xuICAgIHB0ID0gdHdlZW4uX3B0O1xuXG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgdHdlZW4uX3N0YXJ0QXQgJiYgdG90YWxUaW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICB0d2Vlbi5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblVwZGF0ZVwiKTtcbiAgICB0VGltZSAmJiB0d2Vlbi5fcmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0d2Vlbi5wYXJlbnQgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgaWYgKCh0b3RhbFRpbWUgPj0gdHdlZW4uX3REdXIgfHwgdG90YWxUaW1lIDwgMCkgJiYgdHdlZW4ucmF0aW8gPT09IHJhdGlvKSB7XG4gICAgICByYXRpbyAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0d2VlbiwgMSk7XG5cbiAgICAgIGlmICghc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHR3ZWVuLCByYXRpbyA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICB0d2Vlbi5fcHJvbSAmJiB0d2Vlbi5fcHJvbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICghdHdlZW4uX3pUaW1lKSB7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lO1xuICB9XG59LFxuICAgIF9maW5kTmV4dFBhdXNlVHdlZW4gPSBmdW5jdGlvbiBfZmluZE5leHRQYXVzZVR3ZWVuKGFuaW1hdGlvbiwgcHJldlRpbWUsIHRpbWUpIHtcbiAgdmFyIGNoaWxkO1xuXG4gIGlmICh0aW1lID4gcHJldlRpbWUpIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0IDw9IHRpbWUpIHtcbiAgICAgIGlmICghY2hpbGQuX2R1ciAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPiBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9sYXN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA+PSB0aW1lKSB7XG4gICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0IDwgcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9wcmV2O1xuICAgIH1cbiAgfVxufSxcbiAgICBfc2V0RHVyYXRpb24gPSBmdW5jdGlvbiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBkdXJhdGlvbiwgc2tpcFVuY2FjaGUsIGxlYXZlUGxheWhlYWQpIHtcbiAgdmFyIHJlcGVhdCA9IGFuaW1hdGlvbi5fcmVwZWF0LFxuICAgICAgZHVyID0gX3JvdW5kKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmQoZHVyICogKHJlcGVhdCArIDEpICsgYW5pbWF0aW9uLl9yRGVsYXkgKiByZXBlYXQpO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkID8gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCBhbmltYXRpb24uX3RUaW1lID0gYW5pbWF0aW9uLl90RHVyICogdG90YWxQcm9ncmVzcykgOiBhbmltYXRpb24ucGFyZW50ICYmIF9zZXRFbmQoYW5pbWF0aW9uKTtcbiAgc2tpcFVuY2FjaGUgfHwgX3VuY2FjaGUoYW5pbWF0aW9uLnBhcmVudCwgYW5pbWF0aW9uKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24gaW5zdGFuY2VvZiBUaW1lbGluZSA/IF91bmNhY2hlKGFuaW1hdGlvbikgOiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24uX2R1cik7XG59LFxuICAgIF96ZXJvUG9zaXRpb24gPSB7XG4gIF9zdGFydDogMCxcbiAgZW5kVGltZTogX2VtcHR5RnVuY1xufSxcbiAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24pIHtcbiAgdmFyIGxhYmVscyA9IGFuaW1hdGlvbi5sYWJlbHMsXG4gICAgICByZWNlbnQgPSBhbmltYXRpb24uX3JlY2VudCB8fCBfemVyb1Bvc2l0aW9uLFxuICAgICAgY2xpcHBlZER1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgPj0gX2JpZ051bSA/IHJlY2VudC5lbmRUaW1lKGZhbHNlKSA6IGFuaW1hdGlvbi5fZHVyLFxuICAgICAgLy9pbiBjYXNlIHRoZXJlJ3MgYSBjaGlsZCB0aGF0IGluZmluaXRlbHkgcmVwZWF0cywgdXNlcnMgYWxtb3N0IG5ldmVyIGludGVuZCBmb3IgdGhlIGluc2VydGlvbiBwb2ludCBvZiBhIG5ldyBjaGlsZCB0byBiZSBiYXNlZCBvbiBhIFNVUEVSIGxvbmcgdmFsdWUgbGlrZSB0aGF0IHNvIHdlIGNsaXAgaXQgYW5kIGFzc3VtZSB0aGUgbW9zdCByZWNlbnRseS1hZGRlZCBjaGlsZCdzIGVuZFRpbWUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgaSxcbiAgICAgIG9mZnNldDtcblxuICBpZiAoX2lzU3RyaW5nKHBvc2l0aW9uKSAmJiAoaXNOYU4ocG9zaXRpb24pIHx8IHBvc2l0aW9uIGluIGxhYmVscykpIHtcbiAgICAvL2lmIHRoZSBzdHJpbmcgaXMgYSBudW1iZXIgbGlrZSBcIjFcIiwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBsYWJlbCB3aXRoIHRoYXQgbmFtZSwgb3RoZXJ3aXNlIGludGVycHJldCBpdCBhcyBhIG51bWJlciAoYWJzb2x1dGUgdmFsdWUpLlxuICAgIGkgPSBwb3NpdGlvbi5jaGFyQXQoMCk7XG5cbiAgICBpZiAoaSA9PT0gXCI8XCIgfHwgaSA9PT0gXCI+XCIpIHtcbiAgICAgIHJldHVybiAoaSA9PT0gXCI8XCIgPyByZWNlbnQuX3N0YXJ0IDogcmVjZW50LmVuZFRpbWUocmVjZW50Ll9yZXBlYXQgPj0gMCkpICsgKHBhcnNlRmxvYXQocG9zaXRpb24uc3Vic3RyKDEpKSB8fCAwKTtcbiAgICB9XG5cbiAgICBpID0gcG9zaXRpb24uaW5kZXhPZihcIj1cIik7XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHBvc2l0aW9uIGluIGxhYmVscyB8fCAobGFiZWxzW3Bvc2l0aW9uXSA9IGNsaXBwZWREdXJhdGlvbik7XG4gICAgICByZXR1cm4gbGFiZWxzW3Bvc2l0aW9uXTtcbiAgICB9XG5cbiAgICBvZmZzZXQgPSArKHBvc2l0aW9uLmNoYXJBdChpIC0gMSkgKyBwb3NpdGlvbi5zdWJzdHIoaSArIDEpKTtcbiAgICByZXR1cm4gaSA+IDEgPyBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLnN1YnN0cigwLCBpIC0gMSkpICsgb2Zmc2V0IDogY2xpcHBlZER1cmF0aW9uICsgb2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09IG51bGwgPyBjbGlwcGVkRHVyYXRpb24gOiArcG9zaXRpb247XG59LFxuICAgIF9jb25kaXRpb25hbFJldHVybiA9IGZ1bmN0aW9uIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuYykge1xuICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBmdW5jKHZhbHVlKSA6IGZ1bmM7XG59LFxuICAgIF9jbGFtcCA9IGZ1bmN0aW9uIF9jbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbn0sXG4gICAgZ2V0VW5pdCA9IGZ1bmN0aW9uIGdldFVuaXQodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSArIFwiXCIpLnN1YnN0cigocGFyc2VGbG9hdCh2YWx1ZSkgKyBcIlwiKS5sZW5ndGgpO1xufSxcbiAgICBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBsZWF2ZVN0cmluZ3MpIHtcbiAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKF9kb2MucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNodWZmbGUgPSBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcbiAgfSk7XG59LFxuICAgIC8vIGFsdGVybmF0aXZlIHRoYXQncyBhIGJpdCBmYXN0ZXIgYW5kIG1vcmUgcmVsaWFibHkgZGl2ZXJzZSBidXQgYmlnZ2VyOiAgIGZvciAobGV0IGosIHYsIGkgPSBhLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB2ID0gYVstLWldLCBhW2ldID0gYVtqXSwgYVtqXSA9IHYpOyByZXR1cm4gYTtcbi8vZm9yIGRpc3RyaWJ1dGluZyB2YWx1ZXMgYWNyb3NzIGFuIGFycmF5LiBDYW4gYWNjZXB0IGEgbnVtYmVyLCBhIGZ1bmN0aW9uIG9yIChtb3N0IGNvbW1vbmx5KSBhIGZ1bmN0aW9uIHdoaWNoIGNhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczoge2Jhc2UsIGFtb3VudCwgZnJvbSwgZWFzZSwgZ3JpZCwgYXhpcywgbGVuZ3RoLCBlYWNofS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGluZGV4LCB0YXJnZXQsIGFycmF5LiBSZWNvZ25pemVzIHRoZSBmb2xsb3dpbmdcbmRpc3RyaWJ1dGUgPSBmdW5jdGlvbiBkaXN0cmlidXRlKHYpIHtcbiAgaWYgKF9pc0Z1bmN0aW9uKHYpKSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICB2YXIgdmFycyA9IF9pc09iamVjdCh2KSA/IHYgOiB7XG4gICAgZWFjaDogdlxuICB9LFxuICAgICAgLy9uOjEgaXMganVzdCB0byBpbmRpY2F0ZSB2IHdhcyBhIG51bWJlcjsgd2UgbGV2ZXJhZ2UgdGhhdCBsYXRlciB0byBzZXQgdiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCB3ZSBnZXQuIElmIGEgbnVtYmVyIGlzIHBhc3NlZCBpbiwgd2UgdHJlYXQgaXQgbGlrZSB0aGUgb2xkIHN0YWdnZXIgdmFsdWUgd2hlcmUgMC4xLCBmb3IgZXhhbXBsZSwgd291bGQgbWVhbiB0aGF0IHRoaW5ncyB3b3VsZCBiZSBkaXN0cmlidXRlZCB3aXRoIDAuMSBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgcmF0aGVyIHRoYW4gYSB0b3RhbCBcImFtb3VudFwiIHRoYXQncyBjaHVua2VkIG91dCBhbW9uZyB0aGVtIGFsbC5cbiAgZWFzZSA9IF9wYXJzZUVhc2UodmFycy5lYXNlKSxcbiAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgIGJhc2UgPSBwYXJzZUZsb2F0KHZhcnMuYmFzZSkgfHwgMCxcbiAgICAgIGNhY2hlID0ge30sXG4gICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgIHJhdGlvcyA9IGlzTmFOKGZyb20pIHx8IGlzRGVjaW1hbCxcbiAgICAgIGF4aXMgPSB2YXJzLmF4aXMsXG4gICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgcmF0aW9ZID0gZnJvbTtcblxuICBpZiAoX2lzU3RyaW5nKGZyb20pKSB7XG4gICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgY2VudGVyOiAuNSxcbiAgICAgIGVkZ2VzOiAuNSxcbiAgICAgIGVuZDogMVxuICAgIH1bZnJvbV0gfHwgMDtcbiAgfSBlbHNlIGlmICghaXNEZWNpbWFsICYmIHJhdGlvcykge1xuICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgcmF0aW9ZID0gZnJvbVsxXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgdmFyIGwgPSAoYSB8fCB2YXJzKS5sZW5ndGgsXG4gICAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdLFxuICAgICAgICBvcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkLFxuICAgICAgICBqLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgd3JhcEF0O1xuXG4gICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgIHdyYXBBdCA9IHZhcnMuZ3JpZCA9PT0gXCJhdXRvXCIgPyAwIDogKHZhcnMuZ3JpZCB8fCBbMSwgX2JpZ051bV0pWzFdO1xuXG4gICAgICBpZiAoIXdyYXBBdCkge1xuICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICB3aGlsZSAobWF4IDwgKG1heCA9IGFbd3JhcEF0KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICYmIHdyYXBBdCA8IGwpIHt9XG5cbiAgICAgICAgd3JhcEF0LS07XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdID0gW107XG4gICAgICBvcmlnaW5YID0gcmF0aW9zID8gTWF0aC5taW4od3JhcEF0LCBsKSAqIHJhdGlvWCAtIC41IDogZnJvbSAlIHdyYXBBdDtcbiAgICAgIG9yaWdpblkgPSByYXRpb3MgPyBsICogcmF0aW9ZIC8gd3JhcEF0IC0gLjUgOiBmcm9tIC8gd3JhcEF0IHwgMDtcbiAgICAgIG1heCA9IDA7XG4gICAgICBtaW4gPSBfYmlnTnVtO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgIHggPSBqICUgd3JhcEF0IC0gb3JpZ2luWDtcbiAgICAgICAgeSA9IG9yaWdpblkgLSAoaiAvIHdyYXBBdCB8IDApO1xuICAgICAgICBkaXN0YW5jZXNbal0gPSBkID0gIWF4aXMgPyBfc3FydCh4ICogeCArIHkgKiB5KSA6IE1hdGguYWJzKGF4aXMgPT09IFwieVwiID8geSA6IHgpO1xuICAgICAgICBkID4gbWF4ICYmIChtYXggPSBkKTtcbiAgICAgICAgZCA8IG1pbiAmJiAobWluID0gZCk7XG4gICAgICB9XG5cbiAgICAgIGZyb20gPT09IFwicmFuZG9tXCIgJiYgc2h1ZmZsZShkaXN0YW5jZXMpO1xuICAgICAgZGlzdGFuY2VzLm1heCA9IG1heCAtIG1pbjtcbiAgICAgIGRpc3RhbmNlcy5taW4gPSBtaW47XG4gICAgICBkaXN0YW5jZXMudiA9IGwgPSAocGFyc2VGbG9hdCh2YXJzLmFtb3VudCkgfHwgcGFyc2VGbG9hdCh2YXJzLmVhY2gpICogKHdyYXBBdCA+IGwgPyBsIC0gMSA6ICFheGlzID8gTWF0aC5tYXgod3JhcEF0LCBsIC8gd3JhcEF0KSA6IGF4aXMgPT09IFwieVwiID8gbCAvIHdyYXBBdCA6IHdyYXBBdCkgfHwgMCkgKiAoZnJvbSA9PT0gXCJlZGdlc1wiID8gLTEgOiAxKTtcbiAgICAgIGRpc3RhbmNlcy5iID0gbCA8IDAgPyBiYXNlIC0gbCA6IGJhc2U7XG4gICAgICBkaXN0YW5jZXMudSA9IGdldFVuaXQodmFycy5hbW91bnQgfHwgdmFycy5lYWNoKSB8fCAwOyAvL3VuaXRcblxuICAgICAgZWFzZSA9IGVhc2UgJiYgbCA8IDAgPyBfaW52ZXJ0RWFzZShlYXNlKSA6IGVhc2U7XG4gICAgfVxuXG4gICAgbCA9IChkaXN0YW5jZXNbaV0gLSBkaXN0YW5jZXMubWluKSAvIGRpc3RhbmNlcy5tYXggfHwgMDtcbiAgICByZXR1cm4gX3JvdW5kKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSB2IDwgMSA/IE1hdGgucG93KDEwLCAodiArIFwiXCIpLmxlbmd0aCAtIDIpIDogMTsgLy90byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAobGlrZSAyNCAqIDAuMSA9PSAyLjQwMDAwMDAwMDAwMDAwMDQpLCB3ZSBjaG9wIG9mZiBhdCBhIHNwZWNpZmljIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyAobXVjaCBmYXN0ZXIgdGhhbiB0b0ZpeGVkKClcblxuICByZXR1cm4gZnVuY3Rpb24gKHJhdykge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcCkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7XG4gIH07XG59LFxuICAgIHNuYXAgPSBmdW5jdGlvbiBzbmFwKHNuYXBUbywgdmFsdWUpIHtcbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShzbmFwVG8pLFxuICAgICAgcmFkaXVzLFxuICAgICAgaXMyRDtcblxuICBpZiAoIWlzQXJyYXkgJiYgX2lzT2JqZWN0KHNuYXBUbykpIHtcbiAgICByYWRpdXMgPSBpc0FycmF5ID0gc25hcFRvLnJhZGl1cyB8fCBfYmlnTnVtO1xuXG4gICAgaWYgKHNuYXBUby52YWx1ZXMpIHtcbiAgICAgIHNuYXBUbyA9IHRvQXJyYXkoc25hcFRvLnZhbHVlcyk7XG5cbiAgICAgIGlmIChpczJEID0gIV9pc051bWJlcihzbmFwVG9bMF0pKSB7XG4gICAgICAgIHJhZGl1cyAqPSByYWRpdXM7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHdlIGRvbid0IGhhdmUgdG8gTWF0aC5zcXJ0KCkgaW4gdGhlIGxvb3AuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBUbyA9IF9yb3VuZE1vZGlmaWVyKHNuYXBUby5pbmNyZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsICFpc0FycmF5ID8gX3JvdW5kTW9kaWZpZXIoc25hcFRvKSA6IF9pc0Z1bmN0aW9uKHNuYXBUbykgPyBmdW5jdGlvbiAocmF3KSB7XG4gICAgaXMyRCA9IHNuYXBUbyhyYXcpO1xuICAgIHJldHVybiBNYXRoLmFicyhpczJEIC0gcmF3KSA8PSByYWRpdXMgPyBpczJEIDogcmF3O1xuICB9IDogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciB4ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnggOiByYXcpLFxuICAgICAgICB5ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnkgOiAwKSxcbiAgICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgICAgY2xvc2VzdCA9IDAsXG4gICAgICAgIGkgPSBzbmFwVG8ubGVuZ3RoLFxuICAgICAgICBkeCxcbiAgICAgICAgZHk7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoaXMyRCkge1xuICAgICAgICBkeCA9IHNuYXBUb1tpXS54IC0geDtcbiAgICAgICAgZHkgPSBzbmFwVG9baV0ueSAtIHk7XG4gICAgICAgIGR4ID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkeCA9IE1hdGguYWJzKHNuYXBUb1tpXSAtIHgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHggPCBtaW4pIHtcbiAgICAgICAgbWluID0gZHg7XG4gICAgICAgIGNsb3Nlc3QgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsb3Nlc3QgPSAhcmFkaXVzIHx8IG1pbiA8PSByYWRpdXMgPyBzbmFwVG9bY2xvc2VzdF0gOiByYXc7XG4gICAgcmV0dXJuIGlzMkQgfHwgY2xvc2VzdCA9PT0gcmF3IHx8IF9pc051bWJlcihyYXcpID8gY2xvc2VzdCA6IGNsb3Nlc3QgKyBnZXRVbml0KHJhdyk7XG4gIH0pO1xufSxcbiAgICByYW5kb20gPSBmdW5jdGlvbiByYW5kb20obWluLCBtYXgsIHJvdW5kaW5nSW5jcmVtZW50LCByZXR1cm5GdW5jdGlvbikge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKF9pc0FycmF5KG1pbikgPyAhbWF4IDogcm91bmRpbmdJbmNyZW1lbnQgPT09IHRydWUgPyAhIShyb3VuZGluZ0luY3JlbWVudCA9IDApIDogIXJldHVybkZ1bmN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBtaW5bfn4oTWF0aC5yYW5kb20oKSAqIG1pbi5sZW5ndGgpXSA6IChyb3VuZGluZ0luY3JlbWVudCA9IHJvdW5kaW5nSW5jcmVtZW50IHx8IDFlLTUpICYmIChyZXR1cm5GdW5jdGlvbiA9IHJvdW5kaW5nSW5jcmVtZW50IDwgMSA/IE1hdGgucG93KDEwLCAocm91bmRpbmdJbmNyZW1lbnQgKyBcIlwiKS5sZW5ndGggLSAyKSA6IDEpICYmIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20odmFsdWUpIHtcbiAgLy9yZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgcmFuZG9tKC4uLikgaW4gYSBzdHJpbmcgd2l0aCB0aGUgY2FsY3VsYXRlZCByYW5kb20gdmFsdWUuIGNhbiBiZSBhIHJhbmdlIGxpa2UgcmFuZG9tKC0xMDAsIDEwMCwgNSkgb3IgYW4gYXJyYXkgbGlrZSByYW5kb20oWzAsIDEwMCwgNTAwXSlcbiAgdmFyIHByZXYgPSAwLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBpLFxuICAgICAgbnVtcyxcbiAgICAgIGVuZCxcbiAgICAgIGlzQXJyYXk7XG5cbiAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgIGVuZCA9IHZhbHVlLmluZGV4T2YoXCIpXCIsIGkpO1xuICAgIGlzQXJyYXkgPSB2YWx1ZS5jaGFyQXQoaSArIDcpID09PSBcIltcIjtcbiAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgIHMgKz0gdmFsdWUuc3Vic3RyKHByZXYsIGkgLSBwcmV2KSArIHJhbmRvbShpc0FycmF5ID8gbnVtcyA6ICtudW1zWzBdLCBpc0FycmF5ID8gMCA6ICtudW1zWzFdLCArbnVtc1syXSB8fCAxZS01KTtcbiAgICBwcmV2ID0gZW5kICsgMTtcbiAgfVxuXG4gIHJldHVybiBzICsgdmFsdWUuc3Vic3RyKHByZXYsIHZhbHVlLmxlbmd0aCAtIHByZXYpO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2NvcGU7XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICBzY29wZSA9IHYuY2FsbGJhY2tTY29wZSB8fCBhbmltYXRpb247XG4gIGV4ZWN1dGVMYXp5Rmlyc3QgJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXG4gIHJldHVybiBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24ucHJvZ3Jlc3MoKSA8IDEgJiYgX2NhbGxiYWNrKGFuaW1hdGlvbiwgXCJvbkludGVycnVwdFwiKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3F1aWNrVHdlZW4sXG4gICAgX2NyZWF0ZVBsdWdpbiA9IGZ1bmN0aW9uIF9jcmVhdGVQbHVnaW4oY29uZmlnKSB7XG4gIGNvbmZpZyA9ICFjb25maWcubmFtZSAmJiBjb25maWdbXCJkZWZhdWx0XCJdIHx8IGNvbmZpZzsgLy9VTUQgcGFja2FnaW5nIHdyYXBzIHRoaW5ncyBvZGRseSwgc28gZm9yIGV4YW1wbGUgTW90aW9uUGF0aEhlbHBlciBiZWNvbWVzIHtNb3Rpb25QYXRoSGVscGVyOk1vdGlvblBhdGhIZWxwZXIsIGRlZmF1bHQ6TW90aW9uUGF0aEhlbHBlcn0uXG5cbiAgdmFyIG5hbWUgPSBjb25maWcubmFtZSxcbiAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICBQbHVnaW4gPSBuYW1lICYmICFpc0Z1bmMgJiYgY29uZmlnLmluaXQgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgfSA6IGNvbmZpZyxcbiAgICAgIC8vaW4gY2FzZSBzb21lb25lIHBhc3NlcyBpbiBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHBsdWdpbiwgbGlrZSBDdXN0b21FYXNlXG4gIGluc3RhbmNlRGVmYXVsdHMgPSB7XG4gICAgaW5pdDogX2VtcHR5RnVuYyxcbiAgICByZW5kZXI6IF9yZW5kZXJQcm9wVHdlZW5zLFxuICAgIGFkZDogX2FkZFByb3BUd2VlbixcbiAgICBraWxsOiBfa2lsbFByb3BUd2VlbnNPZixcbiAgICBtb2RpZmllcjogX2FkZFBsdWdpbk1vZGlmaWVyLFxuICAgIHJhd1ZhcnM6IDBcbiAgfSxcbiAgICAgIHN0YXRpY3MgPSB7XG4gICAgdGFyZ2V0VGVzdDogMCxcbiAgICBnZXQ6IDAsXG4gICAgZ2V0U2V0dGVyOiBfZ2V0U2V0dGVyLFxuICAgIGFsaWFzZXM6IHt9LFxuICAgIHJlZ2lzdGVyOiAwXG4gIH07XG5cbiAgX3dha2UoKTtcblxuICBpZiAoY29uZmlnICE9PSBQbHVnaW4pIHtcbiAgICBpZiAoX3BsdWdpbnNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc2V0RGVmYXVsdHMoUGx1Z2luLCBfc2V0RGVmYXVsdHMoX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBpbnN0YW5jZURlZmF1bHRzKSwgc3RhdGljcykpOyAvL3N0YXRpYyBtZXRob2RzXG5cblxuICAgIF9tZXJnZShQbHVnaW4ucHJvdG90eXBlLCBfbWVyZ2UoaW5zdGFuY2VEZWZhdWx0cywgX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBzdGF0aWNzKSkpOyAvL2luc3RhbmNlIG1ldGhvZHNcblxuXG4gICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgIGlmIChjb25maWcudGFyZ2V0VGVzdCkge1xuICAgICAgX2hhcm5lc3NQbHVnaW5zLnB1c2goUGx1Z2luKTtcblxuICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgIH1cblxuICAgIG5hbWUgPSAobmFtZSA9PT0gXCJjc3NcIiA/IFwiQ1NTXCIgOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkpICsgXCJQbHVnaW5cIjsgLy9mb3IgdGhlIGdsb2JhbCBuYW1lLiBcIm1vdGlvblBhdGhcIiBzaG91bGQgYmVjb21lIE1vdGlvblBhdGhQbHVnaW5cbiAgfVxuXG4gIF9hZGRHbG9iYWwobmFtZSwgUGx1Z2luKTtcblxuICBjb25maWcucmVnaXN0ZXIgJiYgY29uZmlnLnJlZ2lzdGVyKGdzYXAsIFBsdWdpbiwgUHJvcFR3ZWVuKTtcbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ09MT1JTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fMjU1ID0gMjU1LFxuICAgIF9jb2xvckxvb2t1cCA9IHtcbiAgYXF1YTogWzAsIF8yNTUsIF8yNTVdLFxuICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gIHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuICBibGFjazogWzAsIDAsIDBdLFxuICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICB0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuICBibHVlOiBbMCwgMCwgXzI1NV0sXG4gIG5hdnk6IFswLCAwLCAxMjhdLFxuICB3aGl0ZTogW18yNTUsIF8yNTUsIF8yNTVdLFxuICBvbGl2ZTogWzEyOCwgMTI4LCAwXSxcbiAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gIG9yYW5nZTogW18yNTUsIDE2NSwgMF0sXG4gIGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcbiAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICBncmVlbjogWzAsIDEyOCwgMF0sXG4gIHJlZDogW18yNTUsIDAsIDBdLFxuICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICBjeWFuOiBbMCwgXzI1NSwgXzI1NV0sXG4gIHRyYW5zcGFyZW50OiBbXzI1NSwgXzI1NSwgXzI1NSwgMF1cbn0sXG4gICAgX2h1ZSA9IGZ1bmN0aW9uIF9odWUoaCwgbTEsIG0yKSB7XG4gIGggPSBoIDwgMCA/IGggKyAxIDogaCA+IDEgPyBoIC0gMSA6IGg7XG4gIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xufSxcbiAgICBzcGxpdENvbG9yID0gZnVuY3Rpb24gc3BsaXRDb2xvcih2LCB0b0hTTCwgZm9yY2VBbHBoYSkge1xuICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBoLFxuICAgICAgcyxcbiAgICAgIGwsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBkLFxuICAgICAgd2FzSFNMO1xuXG4gIGlmICghYSkge1xuICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAvL3NvbWV0aW1lcyBhIHRyYWlsaW5nIGNvbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuICAgICAgdiA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb2xvckxvb2t1cFt2XSkge1xuICAgICAgYSA9IF9jb2xvckxvb2t1cFt2XTtcbiAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgaWYgKHYubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIC8vZm9yIHNob3J0aGFuZCBsaWtlICM5RjBcbiAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICBnID0gdi5jaGFyQXQoMik7XG4gICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiO1xuICAgICAgfVxuXG4gICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgIGEgPSBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdO1xuICAgIH0gZWxzZSBpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcbiAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICBpZiAoIXRvSFNMKSB7XG4gICAgICAgIGggPSArYVswXSAlIDM2MCAvIDM2MDtcbiAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICBsID0gK2FbMl0gLyAxMDA7XG4gICAgICAgIGcgPSBsIDw9IC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICBhLmxlbmd0aCA+IDMgJiYgKGFbM10gKj0gMSk7IC8vY2FzdCBhcyBudW1iZXJcblxuICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICBhWzFdID0gX2h1ZShoLCByLCBnKTtcbiAgICAgICAgYVsyXSA9IF9odWUoaCAtIDEgLyAzLCByLCBnKTtcbiAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgLy9pZiByZWxhdGl2ZSB2YWx1ZXMgYXJlIGZvdW5kLCBqdXN0IHJldHVybiB0aGUgcmF3IHN0cmluZ3Mgd2l0aCB0aGUgcmVsYXRpdmUgcHJlZml4ZXMgaW4gcGxhY2UuXG4gICAgICAgIGEgPSB2Lm1hdGNoKF9udW1FeHApO1xuICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHYubWF0Y2goX3N0cmljdE51bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICB9XG5cbiAgaWYgKHRvSFNMICYmICF3YXNIU0wpIHtcbiAgICByID0gYVswXSAvIF8yNTU7XG4gICAgZyA9IGFbMV0gLyBfMjU1O1xuICAgIGIgPSBhWzJdIC8gXzI1NTtcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICBoID0gcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBoID0gbWF4ID09PSByID8gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCkgOiBtYXggPT09IGcgPyAoYiAtIHIpIC8gZCArIDIgOiAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH1cblxuICAgIGFbMF0gPSB+fihoICsgLjUpO1xuICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgIGFbMl0gPSB+fihsICogMTAwICsgLjUpO1xuICB9XG5cbiAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgcmV0dXJuIGE7XG59LFxuICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gIC8vIHN0cmlwcyBvdXQgdGhlIGNvbG9ycyBmcm9tIHRoZSBzdHJpbmcsIGZpbmRzIGFsbCB0aGUgbnVtZXJpYyBzbG90cyAod2l0aCB1bml0cykgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UuIFRoZSBBcnJheSBhbHNvIGhhcyBhIFwiY1wiIHByb3BlcnR5IHdoaWNoIGlzIGFuIEFycmF5IG9mIHRoZSBpbmRleCB2YWx1ZXMgd2hlcmUgdGhlIGNvbG9ycyBiZWxvbmcuIFRoaXMgaXMgdG8gaGVscCB3b3JrIGFyb3VuZCBpc3N1ZXMgd2hlcmUgdGhlcmUncyBhIG1pcy1tYXRjaGVkIG9yZGVyIG9mIGNvbG9yL251bWVyaWMgZGF0YSBsaWtlIGRyb3Atc2hhZG93KCNmMDAgMHB4IDFweCAycHgpIGFuZCBkcm9wLXNoYWRvdygweCAxcHggMnB4ICNmMDApLiBUaGlzIGlzIGJhc2ljYWxseSBhIGhlbHBlciBmdW5jdGlvbiB1c2VkIGluIF9mb3JtYXRDb2xvcnMoKVxuICB2YXIgdmFsdWVzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICBpID0gLTE7XG4gIHYuc3BsaXQoX2NvbG9yRXhwKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBhKTtcbiAgICBjLnB1c2goaSArPSBhLmxlbmd0aCArIDEpO1xuICB9KTtcbiAgdmFsdWVzLmMgPSBjO1xuICByZXR1cm4gdmFsdWVzO1xufSxcbiAgICBfZm9ybWF0Q29sb3JzID0gZnVuY3Rpb24gX2Zvcm1hdENvbG9ycyhzLCB0b0hTTCwgb3JkZXJNYXRjaERhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgIHR5cGUgPSB0b0hTTCA/IFwiaHNsYShcIiA6IFwicmdiYShcIixcbiAgICAgIGkgPSAwLFxuICAgICAgYyxcbiAgICAgIHNoZWxsLFxuICAgICAgZCxcbiAgICAgIGw7XG5cbiAgaWYgKCFjb2xvcnMpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIChjb2xvciA9IHNwbGl0Q29sb3IoY29sb3IsIHRvSFNMLCAxKSkgJiYgdHlwZSArICh0b0hTTCA/IGNvbG9yWzBdICsgXCIsXCIgKyBjb2xvclsxXSArIFwiJSxcIiArIGNvbG9yWzJdICsgXCIlLFwiICsgY29sb3JbM10gOiBjb2xvci5qb2luKFwiLFwiKSkgKyBcIilcIjtcbiAgfSk7XG5cbiAgaWYgKG9yZGVyTWF0Y2hEYXRhKSB7XG4gICAgZCA9IF9jb2xvck9yZGVyRGF0YShzKTtcbiAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgIGlmIChjLmpvaW4ocmVzdWx0KSAhPT0gZC5jLmpvaW4ocmVzdWx0KSkge1xuICAgICAgc2hlbGwgPSBzLnJlcGxhY2UoX2NvbG9yRXhwLCBcIjFcIikuc3BsaXQoX251bVdpdGhVbml0RXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyAofmMuaW5kZXhPZihpKSA/IGNvbG9ycy5zaGlmdCgpIHx8IHR5cGUgKyBcIjAsMCwwLDApXCIgOiAoZC5sZW5ndGggPyBkIDogY29sb3JzLmxlbmd0aCA/IGNvbG9ycyA6IG9yZGVyTWF0Y2hEYXRhKS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNoZWxsKSB7XG4gICAgc2hlbGwgPSBzLnNwbGl0KF9jb2xvckV4cCk7XG4gICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgY29sb3JzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzaGVsbFtsXTtcbn0sXG4gICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcyA9IFwiKD86XFxcXGIoPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXFxcKC4rP1xcXFwpKXxcXFxcQiMoPzpbMC05YS1mXXszfSl7MSwyfVxcXFxiXCIsXG4gICAgICAvL3dlJ2xsIGR5bmFtaWNhbGx5IGJ1aWxkIHRoaXMgUmVndWxhciBFeHByZXNzaW9uIHRvIGNvbnNlcnZlIGZpbGUgc2l6ZS4gQWZ0ZXIgYnVpbGRpbmcgaXQsIGl0IHdpbGwgYmUgYWJsZSB0byBmaW5kIHJnYigpLCByZ2JhKCksICMgKGhleGFkZWNpbWFsKSwgYW5kIG5hbWVkIGNvbG9yIHZhbHVlcyBsaWtlIHJlZCwgYmx1ZSwgcHVycGxlLCBldGMuLFxuICBwO1xuXG4gIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICBzICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbn0oKSxcbiAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gIHZhciBjb21iaW5lZCA9IGEuam9pbihcIiBcIiksXG4gICAgICB0b0hTTDtcbiAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgaWYgKF9jb2xvckV4cC50ZXN0KGNvbWJpbmVkKSkge1xuICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgYVswXSA9IF9mb3JtYXRDb2xvcnMoYVswXSwgdG9IU0wsIF9jb2xvck9yZGVyRGF0YShhWzFdKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3JkZXIgb2YgbnVtYmVycy9jb2xvcnMgbWF0Y2ggd2l0aCB0aGUgRU5EIHZhbHVlLlxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElDS0VSXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fdGlja2VyQWN0aXZlLFxuICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgX2xhZ1RocmVzaG9sZCA9IDUwMCxcbiAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBfbGFzdFVwZGF0ZSA9IF9zdGFydFRpbWUsXG4gICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICBfbGlzdGVuZXJzID0gW10sXG4gICAgICBfaWQsXG4gICAgICBfcmVxLFxuICAgICAgX3JhZixcbiAgICAgIF9zZWxmLFxuICAgICAgX2RlbHRhLFxuICAgICAgX2ksXG4gICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgbWFudWFsID0gdiA9PT0gdHJ1ZSxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGZyYW1lO1xuXG4gICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgX3RpY2tlckFjdGl2ZSA9IDA7XG4gICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICB9LFxuICAgIGxhZ1Ntb290aGluZzogZnVuY3Rpb24gbGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMSAvIF90aW55TnVtOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblxuICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuICAgIH0sXG4gICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgX25leHRUaW1lID0gX3NlbGYudGltZSAqIDEwMDAgKyBfZ2FwO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2spIHtcbiAgICAgIF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykgPCAwICYmIF9saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cbiAgICAgIF93YWtlKCk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjYWxsYmFjaykge1xuICAgICAgdmFyIGk7XG4gICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgfSxcbiAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBfc2VsZjtcbn0oKSxcbiAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICByZXR1cm4gIV90aWNrZXJBY3RpdmUgJiYgX3RpY2tlci53YWtlKCk7XG59LFxuICAgIC8vYWxzbyBlbnN1cmVzIHRoZSBjb3JlIGNsYXNzZXMgYXJlIGluaXRpYWxpemVkLlxuXG4vKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVBU0lOR1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuX2Vhc2VNYXAgPSB7fSxcbiAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgIF9xdW90ZXNFeHAgPSAvW1wiJ10vZyxcbiAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gIC8vdGFrZXMgYSBzdHJpbmcgbGlrZSBcInt3aWdnbGVzOjEwLCB0eXBlOmFudGljaXBhdGV9KVwiIGFuZCB0dXJucyBpdCBpbnRvIGEgcmVhbCBvYmplY3QuIE5vdGljZSBpdCBlbmRzIGluIFwiKVwiIGFuZCBpbmNsdWRlcyB0aGUge30gd3JhcHBlcnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSBvbmx5IHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGVhc2UgY29uZmlncyBhbmQgcHJpb3JpdGl6ZWQgb3B0aW1pemF0aW9uIHJhdGhlciB0aGFuIHJldXNhYmlsaXR5LlxuICB2YXIgb2JqID0ge30sXG4gICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgIGkgPSAxLFxuICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgIGluZGV4LFxuICAgICAgdmFsLFxuICAgICAgcGFyc2VkVmFsO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFsID0gc3BsaXRbaV07XG4gICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgIG9ialtrZXldID0gaXNOYU4ocGFyc2VkVmFsKSA/IHBhcnNlZFZhbC5yZXBsYWNlKF9xdW90ZXNFeHAsIFwiXCIpLnRyaW0oKSA6ICtwYXJzZWRWYWw7XG4gICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gIHZhciBvcGVuID0gdmFsdWUuaW5kZXhPZihcIihcIikgKyAxLFxuICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG9wZW4sIH5uZXN0ZWQgJiYgbmVzdGVkIDwgY2xvc2UgPyB2YWx1ZS5pbmRleE9mKFwiKVwiLCBjbG9zZSArIDEpIDogY2xvc2UpO1xufSxcbiAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAvL25hbWUgY2FuIGJlIGEgc3RyaW5nIGxpa2UgXCJlbGFzdGljLm91dCgxLDAuNSlcIiwgYW5kIHBhc3MgaW4gX2Vhc2VNYXAgYXMgb2JqIGFuZCBpdCdsbCBwYXJzZSBpdCBvdXQgYW5kIGNhbGwgdGhlIGFjdHVhbCBmdW5jdGlvbiBsaWtlIF9lYXNlTWFwLkVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwwLjUpLiBJdCB3aWxsIGFsc28gcGFyc2UgY3VzdG9tIGVhc2Ugc3RyaW5ncyBhcyBsb25nIGFzIEN1c3RvbUVhc2UgaXMgbG9hZGVkIGFuZCByZWdpc3RlcmVkIChpbnRlcm5hbGx5IGFzIF9lYXNlTWFwLl9DRSkuXG4gIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgZWFzZSA9IF9lYXNlTWFwW3NwbGl0WzBdXTtcbiAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG59LFxuICAgIF9pbnZlcnRFYXNlID0gZnVuY3Rpb24gX2ludmVydEVhc2UoZWFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICB9O1xufSxcbiAgICAvLyBhbGxvdyB5b3lvRWFzZSB0byBiZSBzZXQgaW4gY2hpbGRyZW4gYW5kIGhhdmUgdGhvc2UgYWZmZWN0ZWQgd2hlbiB0aGUgcGFyZW50L2FuY2VzdG9yIHRpbWVsaW5lIHlveW9zLlxuX3Byb3BhZ2F0ZVlveW9FYXNlID0gZnVuY3Rpb24gX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pIHtcbiAgdmFyIGNoaWxkID0gdGltZWxpbmUuX2ZpcnN0LFxuICAgICAgZWFzZTtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUaW1lbGluZSkge1xuICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLCBpc1lveW8pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudmFycy55b3lvRWFzZSAmJiAoIWNoaWxkLl95b3lvIHx8ICFjaGlsZC5fcmVwZWF0KSAmJiBjaGlsZC5feW95byAhPT0gaXNZb3lvKSB7XG4gICAgICBpZiAoY2hpbGQudGltZWxpbmUpIHtcbiAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLnRpbWVsaW5lLCBpc1lveW8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWFzZSA9IGNoaWxkLl9lYXNlO1xuICAgICAgICBjaGlsZC5fZWFzZSA9IGNoaWxkLl95RWFzZTtcbiAgICAgICAgY2hpbGQuX3lFYXNlID0gZWFzZTtcbiAgICAgICAgY2hpbGQuX3lveW8gPSBpc1lveW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgfVxufSxcbiAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xufSxcbiAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgIH07XG4gIH1cblxuICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgcmV0dXJuIHAgPCAuNSA/IGVhc2VJbihwICogMikgLyAyIDogMSAtIGVhc2VJbigoMSAtIHApICogMikgLyAyO1xuICAgIH07XG4gIH1cblxuICB2YXIgZWFzZSA9IHtcbiAgICBlYXNlSW46IGVhc2VJbixcbiAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0XG4gIH0sXG4gICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICBmb3IgKHZhciBwIGluIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9lYXNlSW5PdXRGcm9tT3V0ID0gZnVuY3Rpb24gX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgfTtcbn0sXG4gICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICB2YXIgcDEgPSBhbXBsaXR1ZGUgPj0gMSA/IGFtcGxpdHVkZSA6IDEsXG4gICAgICAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIHAyID0gXzJQSSAvIHAyOyAvL3ByZWNhbGN1bGF0ZSB0byBvcHRpbWl6ZVxuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2NvbmZpZ0JhY2sgPSBmdW5jdGlvbiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpIHtcbiAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgfVxuXG4gIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn07IC8vIGEgY2hlYXBlciAoa2IgYW5kIGNwdSkgYnV0IG1vcmUgbWlsZCB3YXkgdG8gZ2V0IGEgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIGJ5IGZlZWRpbmcgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2UgPSByYXRpbyA9PiB7XG4vLyBcdGxldCB5ID0gMC41ICsgcmF0aW8gLyAyO1xuLy8gXHRyZXR1cm4gcCA9PiAoMiAqICgxIC0gcCkgKiBwICogeSArIHAgKiBwKTtcbi8vIH0sXG4vLyBhIHN0cm9uZ2VyIChidXQgbW9yZSBleHBlbnNpdmUga2IvY3B1KSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgdGhhdCBsZXRzIHlvdSBmZWVkIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlU3Ryb25nID0gcmF0aW8gPT4ge1xuLy8gXHRyYXRpbyA9IC41ICsgcmF0aW8gLyAyO1xuLy8gXHRsZXQgbyA9IDEgLyAzICogKHJhdGlvIDwgLjUgPyByYXRpbyA6IDEgLSByYXRpbyksXG4vLyBcdFx0YiA9IHJhdGlvIC0gbyxcbi8vIFx0XHRjID0gcmF0aW8gKyBvO1xuLy8gXHRyZXR1cm4gcCA9PiBwID09PSAxID8gcCA6IDMgKiBiICogKDEgLSBwKSAqICgxIC0gcCkgKiBwICsgMyAqIGMgKiAoMSAtIHApICogcCAqIHAgKyBwICogcCAqIHA7XG4vLyB9O1xuXG5cbl9mb3JFYWNoTmFtZShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLCBmdW5jdGlvbiAobmFtZSwgaSkge1xuICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/IE1hdGgucG93KHAgKiAyLCBwb3dlcikgLyAyIDogMSAtIE1hdGgucG93KCgxIC0gcCkgKiAyLCBwb3dlcikgLyAyO1xuICB9KTtcbn0pO1xuXG5fZWFzZU1hcC5MaW5lYXIuZWFzZU5vbmUgPSBfZWFzZU1hcC5ub25lID0gX2Vhc2VNYXAuTGluZWFyLmVhc2VJbjtcblxuX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuKGZ1bmN0aW9uIChuLCBjKSB7XG4gIHZhciBuMSA9IDEgLyBjLFxuICAgICAgbjIgPSAyICogbjEsXG4gICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gIH07XG5cbiAgX2luc2VydEVhc2UoXCJCb3VuY2VcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9LCBlYXNlT3V0KTtcbn0pKDcuNTYyNSwgMi43NSk7XG5cbl9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA/IE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQ2lyY1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gLShfc3FydCgxIC0gcCAqIHApIC0gMSk7XG59KTtcblxuX2luc2VydEVhc2UoXCJTaW5lXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID09PSAxID8gMSA6IC1fY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQmFja1wiLCBfY29uZmlnQmFjayhcImluXCIpLCBfY29uZmlnQmFjayhcIm91dFwiKSwgX2NvbmZpZ0JhY2soKSk7XG5cbl9lYXNlTWFwLlN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuc3RlcHMgPSBfZ2xvYmFscy5TdGVwcGVkRWFzZSA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoc3RlcHMsIGltbWVkaWF0ZVN0YXJ0KSB7XG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHtcbiAgICAgIHN0ZXBzID0gMTtcbiAgICB9XG5cbiAgICB2YXIgcDEgPSAxIC8gc3RlcHMsXG4gICAgICAgIHAyID0gc3RlcHMgKyAoaW1tZWRpYXRlU3RhcnQgPyAwIDogMSksXG4gICAgICAgIHAzID0gaW1tZWRpYXRlU3RhcnQgPyAxIDogMCxcbiAgICAgICAgbWF4ID0gMSAtIF90aW55TnVtO1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuICgocDIgKiBfY2xhbXAoMCwgbWF4LCBwKSB8IDApICsgcDMpICogcDE7XG4gICAgfTtcbiAgfVxufTtcbl9kZWZhdWx0cy5lYXNlID0gX2Vhc2VNYXBbXCJxdWFkLm91dFwiXTtcblxuX2ZvckVhY2hOYW1lKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfY2FsbGJhY2tOYW1lcyArPSBuYW1lICsgXCIsXCIgKyBuYW1lICsgXCJQYXJhbXMsXCI7XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ0FDSEVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIEdTQ2FjaGUgPSBmdW5jdGlvbiBHU0NhY2hlKHRhcmdldCwgaGFybmVzcykge1xuICB0aGlzLmlkID0gX2dzSUQrKztcbiAgdGFyZ2V0Ll9nc2FwID0gdGhpcztcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuaGFybmVzcyA9IGhhcm5lc3M7XG4gIHRoaXMuZ2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0IDogX2dldFByb3BlcnR5O1xuICB0aGlzLnNldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldFNldHRlciA6IF9nZXRTZXR0ZXI7XG59O1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBTklNQVRJT05cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IHZhciBBbmltYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbmltYXRpb24odmFycywgdGltZSkge1xuICAgIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmU7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgfHwgMCkge1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFycy5yZXBlYXREZWxheSB8fCAwO1xuICAgICAgdGhpcy5feW95byA9ICEhdmFycy55b3lvIHx8ICEhdmFycy55b3lvRWFzZTtcbiAgICB9XG5cbiAgICB0aGlzLl90cyA9IDE7XG5cbiAgICBfc2V0RHVyYXRpb24odGhpcywgK3ZhcnMuZHVyYXRpb24sIDEsIDEpO1xuXG4gICAgdGhpcy5kYXRhID0gdmFycy5kYXRhO1xuICAgIF90aWNrZXJBY3RpdmUgfHwgX3RpY2tlci53YWtlKCk7XG4gICAgcGFyZW50ICYmIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgdGhpcywgdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IHBhcmVudC5fdGltZSwgMSk7XG4gICAgdmFycy5yZXZlcnNlZCAmJiB0aGlzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdER1cjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgcmV0dXJuIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9yZXBlYXQgPCAwID8gdmFsdWUgOiAodmFsdWUgLSB0aGlzLl9yZXBlYXQgKiB0aGlzLl9yRGVsYXkpIC8gKHRoaXMuX3JlcGVhdCArIDEpKTtcbiAgfTtcblxuICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX3dha2UoKTtcblxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCBfdG90YWxUaW1lKTsgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3IgdGltZWxpbmVzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZCwgd2Ugc2hvdWxkIHJlc2V0IHRoZWlyIHRvdGFsVGltZSgpIHdoaWNoIHdpbGwgYWxzbyBlbnN1cmUgdGhhdCB0aGV5J3JlIGxpbmVkIHVwIHByb3Blcmx5IGFuZCBlbmFibGVkLiBTa2lwIGZvciBhbmltYXRpb25zIHRoYXQgYXJlIG9uIHRoZSByb290ICh3YXN0ZWZ1bCkuIEV4YW1wbGU6IGEgVGltZWxpbmVMaXRlLmV4cG9ydFJvb3QoKSBpcyBwZXJmb3JtZWQgd2hlbiB0aGVyZSdzIGEgcGF1c2VkIHR3ZWVuIG9uIHRoZSByb290LCB0aGUgZXhwb3J0IHdpbGwgbm90IGNvbXBsZXRlIHVudGlsIHRoYXQgdHdlZW4gaXMgdW5wYXVzZWQsIGJ1dCBpbWFnaW5lIGEgY2hpbGQgZ2V0cyByZXN0YXJ0ZWQgbGF0ZXIsIGFmdGVyIGFsbCBbdW5wYXVzZWRdIHR3ZWVucyBoYXZlIGNvbXBsZXRlZC4gVGhlIHN0YXJ0IG9mIHRoYXQgY2hpbGQgd291bGQgZ2V0IHB1c2hlZCBvdXQsIGJ1dCBvbmUgb2YgdGhlIGFuY2VzdG9ycyBtYXkgaGF2ZSBjb21wbGV0ZWQuXG5cblxuICAgICAgd2hpbGUgKHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5wYXJlbnQuX3RpbWUgIT09IHBhcmVudC5fc3RhcnQgKyAocGFyZW50Ll90cyA+PSAwID8gcGFyZW50Ll90VGltZSAvIHBhcmVudC5fdHMgOiAocGFyZW50LnRvdGFsRHVyYXRpb24oKSAtIHBhcmVudC5fdFRpbWUpIC8gLXBhcmVudC5fdHMpKSB7XG4gICAgICAgICAgcGFyZW50LnRvdGFsVGltZShwYXJlbnQuX3RUaW1lLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuICYmICh0aGlzLl90cyA+IDAgJiYgX3RvdGFsVGltZSA8IHRoaXMuX3REdXIgfHwgdGhpcy5fdHMgPCAwICYmIF90b3RhbFRpbWUgPiAwIHx8ICF0aGlzLl90RHVyICYmICFfdG90YWxUaW1lKSkge1xuICAgICAgICAvL2lmIHRoZSBhbmltYXRpb24gZG9lc24ndCBoYXZlIGEgcGFyZW50LCBwdXQgaXQgYmFjayBpbnRvIGl0cyBsYXN0IHBhcmVudCAocmVjb3JkZWQgYXMgX2RwIGZvciBleGFjdGx5IGNhc2VzIGxpa2UgdGhpcykuIExpbWl0IHRvIHBhcmVudHMgd2l0aCBhdXRvUmVtb3ZlQ2hpbGRyZW4gKGxpa2UgZ2xvYmFsVGltZWxpbmUpIHNvIHRoYXQgaWYgdGhlIHVzZXIgbWFudWFsbHkgcmVtb3ZlcyBhbiBhbmltYXRpb24gZnJvbSBhIHRpbWVsaW5lIGFuZCB0aGVuIGFsdGVycyBpdHMgcGxheWhlYWQsIGl0IGRvZXNuJ3QgZ2V0IGFkZGVkIGJhY2sgaW4uXG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRoaXMuX2RwLCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdFRpbWUgIT09IF90b3RhbFRpbWUgfHwgIXRoaXMuX2R1ciAmJiAhc3VwcHJlc3NFdmVudHMgfHwgdGhpcy5faW5pdHRlZCAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgPT09IF90aW55TnVtIHx8ICFfdG90YWxUaW1lICYmICF0aGlzLl9pbml0dGVkICYmICh0aGlzLmFkZCB8fCB0aGlzLl9wdExvb2t1cCkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciBfcHRMb29rdXAgb24gYSBUd2VlbiBpbnN0YW5jZSB0byBlbnN1cmUgaXQgaGFzIGFjdHVhbGx5IGZpbmlzaGVkIGJlaW5nIGluc3RhbnRpYXRlZCwgb3RoZXJ3aXNlIGlmIHRoaXMucmV2ZXJzZSgpIGdldHMgY2FsbGVkIGluIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIGl0IGNvdWxkIHRyaWdnZXIgYSByZW5kZXIoKSBoZXJlIGV2ZW4gdGhvdWdoIHRoZSBfdGFyZ2V0cyB3ZXJlbid0IHBvcHVsYXRlZCwgdGh1cyB3aGVuIF9pbml0KCkgaXMgY2FsbGVkIHRoZXJlIHdvbid0IGJlIGFueSBQcm9wVHdlZW5zIChpdCdsbCBhY3QgbGlrZSB0aGUgdHdlZW4gaXMgbm9uLWZ1bmN0aW9uYWwpXG4gICAgICB0aGlzLl90cyB8fCAodGhpcy5fcFRpbWUgPSBfdG90YWxUaW1lKTsgLy8gb3RoZXJ3aXNlLCBpZiBhbiBhbmltYXRpb24gaXMgcGF1c2VkLCB0aGVuIHRoZSBwbGF5aGVhZCBpcyBtb3ZlZCBiYWNrIHRvIHplcm8sIHRoZW4gcmVzdW1lZCwgaXQnZCByZXZlcnQgYmFjayB0byB0aGUgb3JpZ2luYWwgdGltZSBhdCB0aGUgcGF1c2VcblxuICAgICAgX2xhenlTYWZlUmVuZGVyKHRoaXMsIF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udGltZSA9IGZ1bmN0aW9uIHRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgdGhpcy5fZHVyIHx8ICh2YWx1ZSA/IHRoaXMuX2R1ciA6IDApLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl90aW1lOyAvLyBub3RlOiBpZiB0aGUgbW9kdWx1cyByZXN1bHRzIGluIDAsIHRoZSBwbGF5aGVhZCBjb3VsZCBiZSBleGFjdGx5IGF0IHRoZSBlbmQgb3IgdGhlIGJlZ2lubmluZywgYW5kIHdlIGFsd2F5cyBkZWZlciB0byB0aGUgRU5EIHdpdGggYSBub24temVybyB2YWx1ZSwgb3RoZXJ3aXNlIGlmIHlvdSBzZXQgdGhlIHRpbWUoKSB0byB0aGUgdmVyeSBlbmQgKGR1cmF0aW9uKCkpLCBpdCB3b3VsZCByZW5kZXIgYXQgdGhlIFNUQVJUIVxuICB9O1xuXG4gIF9wcm90by50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24gdG90YWxQcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMudG90YWxEdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdFRpbWUgLyB0aGlzLl90RHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkgKiAodGhpcy5feW95byAmJiAhKHRoaXMuaXRlcmF0aW9uKCkgJiAxKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5kdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuX2R1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5pdGVyYXRpb24gPSBmdW5jdGlvbiBpdGVyYXRpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGFkZGl0aW9uOlxuICAvLyBpc1BsYXlpbmdCYWNrd2FyZHMoKSB7XG4gIC8vIFx0bGV0IGFuaW1hdGlvbiA9IHRoaXMsXG4gIC8vIFx0XHRvcmllbnRhdGlvbiA9IDE7IC8vIDEgPSBmb3J3YXJkLCAtMSA9IGJhY2t3YXJkXG4gIC8vIFx0d2hpbGUgKGFuaW1hdGlvbikge1xuICAvLyBcdFx0b3JpZW50YXRpb24gKj0gYW5pbWF0aW9uLnJldmVyc2VkKCkgfHwgKGFuaW1hdGlvbi5yZXBlYXQoKSAmJiAhKGFuaW1hdGlvbi5pdGVyYXRpb24oKSAmIDEpKSA/IC0xIDogMTtcbiAgLy8gXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXJlbnQ7XG4gIC8vIFx0fVxuICAvLyBcdHJldHVybiBvcmllbnRhdGlvbiA8IDA7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by50aW1lU2NhbGUgPSBmdW5jdGlvbiB0aW1lU2NhbGUodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydHMgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIHJlY29yZGVkIHRpbWVTY2FsZS4gU3BlY2lhbCBjYXNlOiBpZiBzb21lb25lIGNhbGxzIHJldmVyc2UoKSBvbiBhbiBhbmltYXRpb24gd2l0aCB0aW1lU2NhbGUgb2YgMCwgd2UgYXNzaWduIGl0IC1fdGlueU51bSB0byByZW1lbWJlciBpdCdzIHJldmVyc2VkLlxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ydHMgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdFRpbWUgPSB0aGlzLnBhcmVudCAmJiB0aGlzLl90cyA/IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRoaXMucGFyZW50Ll90aW1lLCB0aGlzKSA6IHRoaXMuX3RUaW1lOyAvLyBtYWtlIHN1cmUgdG8gZG8gdGhlIHBhcmVudFRvQ2hpbGRUb3RhbFRpbWUoKSBCRUZPUkUgc2V0dGluZyB0aGUgbmV3IF90cyBiZWNhdXNlIHRoZSBvbGQgb25lIG11c3QgYmUgdXNlZCBpbiB0aGF0IGNhbGN1bGF0aW9uLlxuICAgIC8vIHByaW9yaXRpemUgcmVuZGVyaW5nIHdoZXJlIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBsaW5lcyB1cCBpbnN0ZWFkIG9mIHRoaXMuX3RUaW1lIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgYSB0d2VlbiB0aGF0J3MgYW5pbWF0aW5nIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgaW4gdGhlIHNhbWUgcmVuZGVyaW5nIGxvb3AgKHNhbWUgcGFyZW50KSwgdGh1cyBpZiB0aGUgdGltZVNjYWxlIHR3ZWVuIHJlbmRlcnMgZmlyc3QsIGl0IHdvdWxkIGFsdGVyIF9zdGFydCBCRUZPUkUgX3RUaW1lIHdhcyBzZXQgb24gdGhhdCB0aWNrIChpbiB0aGUgcmVuZGVyaW5nIGxvb3ApLCBlZmZlY3RpdmVseSBmcmVlemluZyBpdCB1bnRpbCB0aGUgdGltZVNjYWxlIHR3ZWVuIGZpbmlzaGVzLlxuXG4gICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgdGhpcy5fdHMgPSB0aGlzLl9wcyB8fCB2YWx1ZSA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSB3aGljaCB3b3VsZCBiZSAwIGlmIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkLlxuXG4gICAgcmV0dXJuIF9yZWNhY2hlQW5jZXN0b3JzKHRoaXMudG90YWxUaW1lKF9jbGFtcCgtdGhpcy5fZGVsYXksIHRoaXMuX3REdXIsIHRUaW1lKSwgdHJ1ZSkpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZWQgPSBmdW5jdGlvbiBwYXVzZWQodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcHMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcyA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcFRpbWUgPSB0aGlzLl90VGltZSB8fCBNYXRoLm1heCgtdGhpcy5fZGVsYXksIHRoaXMucmF3VGltZSgpKTsgLy8gaWYgdGhlIHBhdXNlIG9jY3VycyBkdXJpbmcgdGhlIGRlbGF5IHBoYXNlLCBtYWtlIHN1cmUgdGhhdCdzIGZhY3RvcmVkIGluIHdoZW4gcmVzdW1pbmcuXG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9hY3QgPSAwOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlLCBzbyBhIHBhdXNlZCB0d2VlbiB3b3VsZCBlZmZlY3RpdmVseSBoYXZlIGEgdGltZVNjYWxlIG9mIDAuIFdlIHJlY29yZCB0aGUgXCJyZWFsXCIgdGltZVNjYWxlIGFzIF9ydHMgKHJlY29yZGVkIHRpbWUgc2NhbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfd2FrZSgpO1xuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fcnRzOyAvL29ubHkgZGVmZXIgdG8gX3BUaW1lIChwYXVzZVRpbWUpIGlmIHRUaW1lIGlzIHplcm8uIFJlbWVtYmVyLCBzb21lb25lIGNvdWxkIHBhdXNlKCkgYW4gYW5pbWF0aW9uLCB0aGVuIHNjcnViIHRoZSBwbGF5aGVhZCBhbmQgcmVzdW1lKCkuIElmIHRoZSBwYXJlbnQgZG9lc24ndCBoYXZlIHNtb290aENoaWxkVGltaW5nLCB3ZSByZW5kZXIgYXQgdGhlIHJhd1RpbWUoKSBiZWNhdXNlIHRoZSBzdGFydFRpbWUgd29uJ3QgZ2V0IHVwZGF0ZWQuXG5cbiAgICAgICAgdGhpcy50b3RhbFRpbWUodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nID8gdGhpcy5yYXdUaW1lKCkgOiB0aGlzLl90VGltZSB8fCB0aGlzLl9wVGltZSwgdGhpcy5wcm9ncmVzcygpID09PSAxICYmICh0aGlzLl90VGltZSAtPSBfdGlueU51bSkgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSk7IC8vIGVkZ2UgY2FzZTogYW5pbWF0aW9uLnByb2dyZXNzKDEpLnBhdXNlKCkucGxheSgpIHdvdWxkbid0IHJlbmRlciBhZ2FpbiBiZWNhdXNlIHRoZSBwbGF5aGVhZCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQsIGJ1dCB0aGUgY2FsbCB0byB0b3RhbFRpbWUoKSBiZWxvdyB3aWxsIGFkZCBpdCBiYWNrIHRvIGl0cyBwYXJlbnQuLi5hbmQgbm90IHJlbW92ZSBpdCBhZ2FpbiAoc2luY2UgcmVtb3Zpbmcgb25seSBoYXBwZW5zIHVwb24gcmVuZGVyaW5nIGF0IGEgbmV3IHRpbWUpLiBPZmZzZXR0aW5nIHRoZSBfdFRpbWUgc2xpZ2h0bHkgaXMgZG9uZSBzaW1wbHkgdG8gY2F1c2UgdGhlIGZpbmFsIHJlbmRlciBpbiB0b3RhbFRpbWUoKSB0aGF0J2xsIHBvcCBpdCBvZmYgaXRzIHRpbWVsaW5lIChpZiBhdXRvUmVtb3ZlQ2hpbGRyZW4gaXMgdHJ1ZSwgb2YgY291cnNlKS4gQ2hlY2sgdG8gbWFrZSBzdXJlIF96VGltZSBpc24ndCAtX3RpbnlOdW0gdG8gYXZvaWQgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBwdXNoZWQgdG8gdGhlIGVuZCBidXQgSU5TSURFIGEgdHdlZW4vY2FsbGJhY2ssIHRoZSB0aW1lbGluZSBpdHNlbGYgaXMgcGF1c2VkIHRodXMgaGFsdGluZyByZW5kZXJpbmcgYW5kIGxlYXZpbmcgYSBmZXcgdW5yZW5kZXJlZC4gV2hlbiByZXN1bWluZywgaXQgd291bGRuJ3QgcmVuZGVyIHRob3NlIG90aGVyd2lzZS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRUaW1lID0gZnVuY3Rpb24gc3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7XG4gICAgICBwYXJlbnQgJiYgKHBhcmVudC5fc29ydCB8fCAhdGhpcy5wYXJlbnQpICYmIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgdGhpcywgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH07XG5cbiAgX3Byb3RvLmVuZFRpbWUgPSBmdW5jdGlvbiBlbmRUaW1lKGluY2x1ZGVSZXBlYXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0ICsgKF9pc05vdEZhbHNlKGluY2x1ZGVSZXBlYXRzKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIE1hdGguYWJzKHRoaXMuX3RzKTtcbiAgfTtcblxuICBfcHJvdG8ucmF3VGltZSA9IGZ1bmN0aW9uIHJhd1RpbWUod3JhcFJlcGVhdHMpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7IC8vIF9kcCA9IGRldGF0Y2hlZCBwYXJlbnRcblxuICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgIHRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID8gcmF3VGltZSA6IGFuaW1hdGlvbi5yYXdUaW1lKCk7XG5cbiAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXBlYXQgPSB2YWx1ZTtcbiAgICAgIHJldHVybiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXBlYXQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fckRlbGF5O1xuICB9O1xuXG4gIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5feW95bztcbiAgfTtcblxuICBfcHJvdG8uc2VlayA9IGZ1bmN0aW9uIHNlZWsocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnBsYXkoKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucGxheSA9IGZ1bmN0aW9uIHBsYXkoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCksIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBhdFRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZWQgPSBmdW5jdGlvbiByZXZlcnNlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAhIXZhbHVlICE9PSB0aGlzLnJldmVyc2VkKCkgJiYgdGhpcy50aW1lU2NhbGUoLXRoaXMuX3J0cyB8fCAodmFsdWUgPyAtX3RpbnlOdW0gOiAwKSk7IC8vIGluIGNhc2UgdGltZVNjYWxlIGlzIHplcm8sIHJldmVyc2luZyB3b3VsZCBoYXZlIG5vIGVmZmVjdCBzbyB3ZSB1c2UgX3RpbnlOdW0uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydHMgPCAwO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9pbml0dGVkID0gMDtcbiAgICB0aGlzLl96VGltZSA9IC1fdGlueU51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHAsXG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fc3RhcnQsXG4gICAgICAgIHJhd1RpbWU7XG4gICAgcmV0dXJuICEhKCFwYXJlbnQgfHwgdGhpcy5fdHMgJiYgdGhpcy5faW5pdHRlZCAmJiBwYXJlbnQuaXNBY3RpdmUoKSAmJiAocmF3VGltZSA9IHBhcmVudC5yYXdUaW1lKHRydWUpKSA+PSBzdGFydCAmJiByYXdUaW1lIDwgdGhpcy5lbmRUaW1lKHRydWUpIC0gX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90by5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24gZXZlbnRDYWxsYmFjayh0eXBlLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHZhcnMgPSB0aGlzLnZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgZGVsZXRlIHZhcnNbdHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzW3R5cGVdID0gY2FsbGJhY2s7XG4gICAgICAgIHBhcmFtcyAmJiAodmFyc1t0eXBlICsgXCJQYXJhbXNcIl0gPSBwYXJhbXMpO1xuICAgICAgICB0eXBlID09PSBcIm9uVXBkYXRlXCIgJiYgKHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyc1t0eXBlXTtcbiAgfTtcblxuICBfcHJvdG8udGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgIHZhciBfdGhlbiA9IHNlbGYudGhlbjtcbiAgICAgICAgc2VsZi50aGVuID0gbnVsbDsgLy8gdGVtcG9yYXJpbHkgbnVsbCB0aGUgdGhlbigpIG1ldGhvZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zMjIpXG5cbiAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuX2luaXR0ZWQgJiYgc2VsZi50b3RhbFByb2dyZXNzKCkgPT09IDEgJiYgc2VsZi5fdHMgPj0gMCB8fCAhc2VsZi5fdFRpbWUgJiYgc2VsZi5fdHMgPCAwKSB7XG4gICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm9tID0gX3Jlc29sdmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvbjtcbn0oKTtcblxuX3NldERlZmF1bHRzKEFuaW1hdGlvbi5wcm90b3R5cGUsIHtcbiAgX3RpbWU6IDAsXG4gIF9zdGFydDogMCxcbiAgX2VuZDogMCxcbiAgX3RUaW1lOiAwLFxuICBfdER1cjogMCxcbiAgX2RpcnR5OiAwLFxuICBfcmVwZWF0OiAwLFxuICBfeW95bzogZmFsc2UsXG4gIHBhcmVudDogbnVsbCxcbiAgX2luaXR0ZWQ6IGZhbHNlLFxuICBfckRlbGF5OiAwLFxuICBfdHM6IDEsXG4gIF9kcDogMCxcbiAgcmF0aW86IDAsXG4gIF96VGltZTogLV90aW55TnVtLFxuICBfcHJvbTogMCxcbiAgX3BzOiBmYWxzZSxcbiAgX3J0czogMVxufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElNRUxJTkVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lKHZhcnMsIHRpbWUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQW5pbWF0aW9uLmNhbGwodGhpcywgdmFycywgdGltZSkgfHwgdGhpcztcbiAgICBfdGhpcy5sYWJlbHMgPSB7fTtcbiAgICBfdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9ICEhdmFycy5zbW9vdGhDaGlsZFRpbWluZztcbiAgICBfdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAhIXZhcnMuYXV0b1JlbW92ZUNoaWxkcmVuO1xuICAgIF90aGlzLl9zb3J0ID0gX2lzTm90RmFsc2UodmFycy5zb3J0Q2hpbGRyZW4pO1xuICAgIF90aGlzLnBhcmVudCAmJiBfcG9zdEFkZENoZWNrcyhfdGhpcy5wYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAwLCB0aGlzKSwgX3BhcnNlUG9zaXRpb24odGhpcywgX2lzTnVtYmVyKHZhcnMpID8gYXJndW1lbnRzWzNdIDogcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAxLCB0aGlzKSwgX3BhcnNlUG9zaXRpb24odGhpcywgX2lzTnVtYmVyKHZhcnMpID8gYXJndW1lbnRzWzNdIDogcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzLCBwb3NpdGlvbikge1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMiwgdGhpcyksIF9wYXJzZVBvc2l0aW9uKHRoaXMsIF9pc051bWJlcihmcm9tVmFycykgPyBhcmd1bWVudHNbNF0gOiBwb3NpdGlvbikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSAhIXZhcnMuaW1tZWRpYXRlUmVuZGVyO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuY2FsbCA9IGZ1bmN0aW9uIGNhbGwoY2FsbGJhY2ssIHBhcmFtcywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcyksIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH0gLy9PTkxZIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5ISBNYXliZSBkZWxldGU/XG4gIDtcblxuICBfcHJvdG8yLnN0YWdnZXJUbyA9IGZ1bmN0aW9uIHN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdmFycy5zdGFnZ2VyID0gdmFycy5zdGFnZ2VyIHx8IHN0YWdnZXI7XG4gICAgdmFycy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZUFsbDtcbiAgICB2YXJzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlQWxsUGFyYW1zO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24gc3RhZ2dlckZyb20odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5ydW5CYWNrd2FyZHMgPSAxO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb21UbyA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tVG8odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHRvVmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodG9WYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl9kaXJ0eSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5fdER1cixcbiAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICB0VGltZSA9IHRoaXMgIT09IF9nbG9iYWxUaW1lbGluZSAmJiB0b3RhbFRpbWUgPiB0RHVyIC0gX3RpbnlOdW0gJiYgdG90YWxUaW1lID49IDAgPyB0RHVyIDogdG90YWxUaW1lIDwgX3RpbnlOdW0gPyAwIDogdG90YWxUaW1lLFxuICAgICAgICBjcm9zc2luZ1N0YXJ0ID0gdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwICYmICh0aGlzLl9pbml0dGVkIHx8ICFkdXIpLFxuICAgICAgICB0aW1lLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2UGF1c2VkLFxuICAgICAgICBwYXVzZVR3ZWVuLFxuICAgICAgICB0aW1lU2NhbGUsXG4gICAgICAgIHByZXZTdGFydCxcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgeW95byxcbiAgICAgICAgaXNZb3lvO1xuXG4gICAgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCBmb3JjZSB8fCBjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUgJiYgZHVyKSB7XG4gICAgICAgIC8vaWYgdG90YWxEdXJhdGlvbigpIGZpbmRzIGEgY2hpbGQgd2l0aCBhIG5lZ2F0aXZlIHN0YXJ0VGltZSBhbmQgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgdGhpbmdzIGdldCBzaGlmdGVkIGFyb3VuZCBpbnRlcm5hbGx5IHNvIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSB0aW1lIGFjY29yZGluZ2x5LiBGb3IgZXhhbXBsZSwgaWYgYSB0d2VlbiBzdGFydHMgYXQgLTMwIHdlIG11c3Qgc2hpZnQgRVZFUllUSElORyBmb3J3YXJkIDMwIHNlY29uZHMgYW5kIG1vdmUgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSBiYWNrd2FyZCBieSAzMCBzZWNvbmRzIHNvIHRoYXQgdGhpbmdzIGFsaWduIHdpdGggdGhlIHBsYXloZWFkIChubyBqdW1wKS5cbiAgICAgICAgdFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgICB0b3RhbFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICBwcmV2U3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICAgIHRpbWVTY2FsZSA9IHRoaXMuX3RzO1xuICAgICAgcHJldlBhdXNlZCA9ICF0aW1lU2NhbGU7XG5cbiAgICAgIGlmIChjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgIGR1ciB8fCAocHJldlRpbWUgPSB0aGlzLl96VGltZSk7IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUsIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhc3VwcHJlc3NFdmVudHMpICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIHlveW8gPSB0aGlzLl95b3lvO1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuICAgICAgICB0aW1lID0gX3JvdW5kKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgKHByZXZJdGVyYXRpb24gPSBpdGVyYXRpb24pOyAvLyBlZGdlIGNhc2UgLSBpZiBzb21lb25lIGRvZXMgYWRkUGF1c2UoKSBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb2YgYSByZXBlYXRpbmcgdGltZWxpbmUsIHRoYXQgcGF1c2UgaXMgdGVjaG5pY2FsbHkgYXQgdGhlIHNhbWUgc3BvdCBhcyB0aGUgZW5kIHdoaWNoIGNhdXNlcyB0aGlzLl90aW1lIHRvIGdldCBzZXQgdG8gMCB3aGVuIHRoZSB0b3RhbFRpbWUgd291bGQgbm9ybWFsbHkgcGxhY2UgdGhlIHBsYXloZWFkIGF0IHRoZSBlbmQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIzODIzLWNsb3NpbmctbmF2LWFuaW1hdGlvbi1ub3Qtd29ya2luZy1vbi1pZS1hbmQtaXBob25lLTYtbWF5YmUtb3RoZXItb2xkZXItYnJvd3Nlci8/dGFiPWNvbW1lbnRzI2NvbW1lbnQtMTEzMDA1XG5cbiAgICAgICAgaWYgKHlveW8gJiYgaXRlcmF0aW9uICYgMSkge1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICAgIGlzWW95byA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgbWFrZSBzdXJlIGNoaWxkcmVuIGF0IHRoZSBlbmQvYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSBhcmUgcmVuZGVyZWQgcHJvcGVybHkuIElmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgYSAzLXNlY29uZCBsb25nIHRpbWVsaW5lIHJlbmRlcmVkIGF0IDIuOSBzZWNvbmRzIHByZXZpb3VzbHksIGFuZCBub3cgcmVuZGVycyBhdCAzLjIgc2Vjb25kcyAod2hpY2hcbiAgICAgICAgd291bGQgZ2V0IHRyYW5zbGF0ZWQgdG8gMi44IHNlY29uZHMgaWYgdGhlIHRpbWVsaW5lIHlveW9zIG9yIDAuMiBzZWNvbmRzIGlmIGl0IGp1c3QgcmVwZWF0cyksIHRoZXJlXG4gICAgICAgIGNvdWxkIGJlIGEgY2FsbGJhY2sgb3IgYSBzaG9ydCB0d2VlbiB0aGF0J3MgYXQgMi45NSBvciAzIHNlY29uZHMgaW4gd2hpY2ggd291bGRuJ3QgcmVuZGVyLiBTb1xuICAgICAgICB3ZSBuZWVkIHRvIHB1c2ggdGhlIHRpbWVsaW5lIHRvIHRoZSBlbmQgKGFuZC9vciBiZWdpbm5pbmcgZGVwZW5kaW5nIG9uIGl0cyB5b3lvIHZhbHVlKS4gQWxzbyB3ZSBtdXN0XG4gICAgICAgIGVuc3VyZSB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIFRpbWVsaW5lIHdvcmsuXG4gICAgICAgICovXG5cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgdmFyIHJld2luZGluZyA9IHlveW8gJiYgcHJldkl0ZXJhdGlvbiAmIDEsXG4gICAgICAgICAgICAgIGRvZXNXcmFwID0gcmV3aW5kaW5nID09PSAoeW95byAmJiBpdGVyYXRpb24gJiAxKTtcbiAgICAgICAgICBpdGVyYXRpb24gPCBwcmV2SXRlcmF0aW9uICYmIChyZXdpbmRpbmcgPSAhcmV3aW5kaW5nKTtcbiAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IDAgOiBkdXI7XG4gICAgICAgICAgdGhpcy5fbG9jayA9IDE7XG4gICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUgfHwgKGlzWW95byA/IDAgOiBfcm91bmQoaXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbikpLCBzdXBwcmVzc0V2ZW50cywgIWR1cikuX2xvY2sgPSAwO1xuICAgICAgICAgICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcbiAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICh0aGlzLmludmFsaWRhdGUoKS5fbG9jayA9IDEpO1xuXG4gICAgICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lIHx8IHByZXZQYXVzZWQgIT09ICF0aGlzLl90cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVyID0gdGhpcy5fZHVyOyAvLyBpbiBjYXNlIHRoZSBkdXJhdGlvbiBjaGFuZ2VkIGluIHRoZSBvblJlcGVhdFxuXG4gICAgICAgICAgdER1ciA9IHRoaXMuX3REdXI7XG5cbiAgICAgICAgICBpZiAoZG9lc1dyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSAyO1xuICAgICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyBkdXIgKyAwLjAwMDEgOiAtMC4wMDAxO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgICAgIGlmICghdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0gLy9pbiBvcmRlciBmb3IgeW95b0Vhc2UgdG8gd29yayBwcm9wZXJseSB3aGVuIHRoZXJlJ3MgYSBzdGFnZ2VyLCB3ZSBtdXN0IHN3YXAgb3V0IHRoZSBlYXNlIGluIGVhY2ggc3ViLXR3ZWVuLlxuXG5cbiAgICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UodGhpcywgaXNZb3lvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faGFzUGF1c2UgJiYgIXRoaXMuX2ZvcmNpbmcgJiYgdGhpcy5fbG9jayA8IDIpIHtcbiAgICAgICAgcGF1c2VUd2VlbiA9IF9maW5kTmV4dFBhdXNlVHdlZW4odGhpcywgX3JvdW5kKHByZXZUaW1lKSwgX3JvdW5kKHRpbWUpKTtcblxuICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgIHRUaW1lIC09IHRpbWUgLSAodGltZSA9IHBhdXNlVHdlZW4uX3N0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICB0aGlzLl9pbml0dGVkID0gMTtcbiAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICB9XG5cbiAgICAgICFwcmV2VGltZSAmJiB0aW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICBpZiAodGltZSA+PSBwcmV2VGltZSAmJiB0b3RhbFRpbWUgPj0gMCkge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCB0aW1lID49IGNoaWxkLl9zdGFydCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSAtX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gZmxhZyB6VGltZSBhcyBuZWdhdGl2ZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fbGFzdDtcbiAgICAgICAgdmFyIGFkanVzdGVkVGltZSA9IHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lOyAvL3doZW4gdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBtdXN0IHBhc3MgdGhhdCBpbmZvcm1hdGlvbiBkb3duIHRvIHRoZSBjaGlsZCBhbmltYXRpb25zIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMga25vdyB3aGV0aGVyIHRvIHJlbmRlciB0aGVpciBzdGFydGluZyBvciBlbmRpbmcgdmFsdWVzLlxuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fcHJldjtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCBhZGp1c3RlZFRpbWUgPD0gY2hpbGQuX2VuZCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gYWRqdXN0ZWRUaW1lID8gLV90aW55TnVtIDogX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gYWRqdXN0IHpUaW1lIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGF1c2VUd2VlbiAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICBpZiAodGhpcy5fdHMpIHtcbiAgICAgICAgICAvL3RoZSBjYWxsYmFjayByZXN1bWVkIHBsYXliYWNrISBTbyBzaW5jZSB3ZSBtYXkgaGF2ZSBoZWxkIGJhY2sgdGhlIHBsYXloZWFkIGR1ZSB0byB3aGVyZSB0aGUgcGF1c2UgaXMgcG9zaXRpb25lZCwgZ28gYWhlYWQgYW5kIGp1bXAgdG8gd2hlcmUgaXQncyBTVVBQT1NFRCB0byBiZSAoaWYgbm8gcGF1c2UgaGFwcGVuZWQpLlxuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gcHJldlN0YXJ0OyAvL2lmIHRoZSBwYXVzZSB3YXMgYXQgYW4gZWFybGllciB0aW1lIGFuZCB0aGUgdXNlciByZXN1bWVkIGluIHRoZSBjYWxsYmFjaywgaXQgY291bGQgcmVwb3NpdGlvbiB0aGUgdGltZWxpbmUgKGNoYW5naW5nIGl0cyBzdGFydFRpbWUpLCB0aHJvd2luZyB0aGluZ3Mgb2ZmIHNsaWdodGx5LCBzbyB3ZSBtYWtlIHN1cmUgdGhlIF9zdGFydCBkb2Vzbid0IHNoaWZ0LlxuXG4gICAgICAgICAgX3NldEVuZCh0aGlzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgaWYgKHRUaW1lID09PSB0RHVyICYmIHREdXIgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkgfHwgIXRUaW1lICYmIHByZXZUaW1lKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydCB8fCBNYXRoLmFicyh0aW1lU2NhbGUpICE9PSBNYXRoLmFicyh0aGlzLl90cykpIGlmICghdGhpcy5fbG9jaykge1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lKSkge1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCFfaXNOdW1iZXIocG9zaXRpb24pKSB7XG4gICAgICBwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEFuaW1hdGlvbikpIHtcbiAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5hZGQob2JqLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGFiZWwoY2hpbGQsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICBjaGlsZCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzOyAvL2Rvbid0IGFsbG93IGEgdGltZWxpbmUgdG8gYmUgYWRkZWQgdG8gaXRzZWxmIGFzIGEgY2hpbGQhXG4gIH07XG5cbiAgX3Byb3RvMi5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKG5lc3RlZCwgdHdlZW5zLCB0aW1lbGluZXMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAobmVzdGVkID09PSB2b2lkIDApIHtcbiAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR3ZWVucyA9PT0gdm9pZCAwKSB7XG4gICAgICB0d2VlbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aW1lbGluZXMgPT09IHZvaWQgMCkge1xuICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgfVxuXG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgdHdlZW5zICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgbmVzdGVkICYmIGEucHVzaC5hcHBseShhLCBjaGlsZC5nZXRDaGlsZHJlbih0cnVlLCB0d2VlbnMsIHRpbWVsaW5lcykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRCeUlkID0gZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgaSA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUxhYmVsKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5raWxsVHdlZW5zT2YoY2hpbGQpO1xuICAgIH1cblxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICBpZiAoY2hpbGQgPT09IHRoaXMuX3JlY2VudCkge1xuICAgICAgdGhpcy5fcmVjZW50ID0gdGhpcy5fbGFzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9yY2luZyA9IDE7XG5cbiAgICBpZiAoIXRoaXMuX2RwICYmIHRoaXMuX3RzKSB7XG4gICAgICAvL3NwZWNpYWwgY2FzZSBmb3IgdGhlIGdsb2JhbCB0aW1lbGluZSAob3IgYW55IG90aGVyIHRoYXQgaGFzIG5vIHBhcmVudCBvciBkZXRhY2hlZCBwYXJlbnQpLlxuICAgICAgdGhpcy5fc3RhcnQgPSBfcm91bmQoX3RpY2tlci50aW1lIC0gKHRoaXMuX3RzID4gMCA/IF90b3RhbFRpbWUyIC8gdGhpcy5fdHMgOiAodGhpcy50b3RhbER1cmF0aW9uKCkgLSBfdG90YWxUaW1lMikgLyAtdGhpcy5fdHMpKTtcbiAgICB9XG5cbiAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgdGhpcy5fZm9yY2luZyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRMYWJlbCA9IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGFiZWxzW2xhYmVsXSA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwobGFiZWwpIHtcbiAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB0ID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2sgfHwgX2VtcHR5RnVuYywgcGFyYW1zKTtcbiAgICB0LmRhdGEgPSBcImlzUGF1c2VcIjtcbiAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIHQsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPT09IHBvc2l0aW9uICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSxcbiAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiAhPT0gdHdlZW5zW2ldICYmIHR3ZWVuc1tpXS5raWxsKHRhcmdldHMsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBpc0dsb2JhbFRpbWUgPSBfaXNOdW1iZXIob25seUFjdGl2ZSksXG4gICAgICAgIC8vIGEgbnVtYmVyIGlzIGludGVycHJldGVkIGFzIGEgZ2xvYmFsIHRpbWUuIElmIHRoZSBhbmltYXRpb24gc3BhbnNcbiAgICBjaGlsZHJlbjtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAvLyBub3RlOiBpZiB0aGlzIGlzIGZvciBvdmVyd3JpdGluZywgaXQgc2hvdWxkIG9ubHkgYmUgZm9yIHR3ZWVucyB0aGF0IGFyZW4ndCBwYXVzZWQgYW5kIGFyZSBpbml0dGVkLlxuICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkcmVuID0gY2hpbGQuZ2V0VHdlZW5zT2YocGFyc2VkVGFyZ2V0cywgb25seUFjdGl2ZSkpLmxlbmd0aCkge1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICB2YXJzID0gdmFycyB8fCB7fTtcblxuICAgIHZhciB0bCA9IHRoaXMsXG4gICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICBfdmFycyA9IHZhcnMsXG4gICAgICAgIHN0YXJ0QXQgPSBfdmFycy5zdGFydEF0LFxuICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgIG9uU3RhcnRQYXJhbXMgPSBfdmFycy5vblN0YXJ0UGFyYW1zLFxuICAgICAgICB0d2VlbiA9IFR3ZWVuLnRvKHRsLCBfc2V0RGVmYXVsdHModmFycywge1xuICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIHRpbWU6IGVuZFRpbWUsXG4gICAgICBkdXJhdGlvbjogdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpIHx8IF90aW55TnVtLFxuICAgICAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICAgICAgdGwucGF1c2UoKTtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIHRsLl90aW1lKSAvIHRsLnRpbWVTY2FsZSgpKTtcbiAgICAgICAgdHdlZW4uX2R1ciAhPT0gZHVyYXRpb24gJiYgX3NldER1cmF0aW9uKHR3ZWVuLCBkdXJhdGlvbiwgMCwgMSkucmVuZGVyKHR3ZWVuLl90aW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgX29uU3RhcnQgJiYgX29uU3RhcnQuYXBwbHkodHdlZW4sIG9uU3RhcnRQYXJhbXMgfHwgW10pOyAvL2luIGNhc2UgdGhlIHVzZXIgaGFkIGFuIG9uU3RhcnQgaW4gdGhlIHZhcnMgLSB3ZSBkb24ndCB3YW50IHRvIG92ZXJ3cml0ZSBpdC5cbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdHdlZW47XG4gIH07XG5cbiAgX3Byb3RvMi50d2VlbkZyb21UbyA9IGZ1bmN0aW9uIHR3ZWVuRnJvbVRvKGZyb21Qb3NpdGlvbiwgdG9Qb3NpdGlvbiwgdmFycykge1xuICAgIHJldHVybiB0aGlzLnR3ZWVuVG8odG9Qb3NpdGlvbiwgX3NldERlZmF1bHRzKHtcbiAgICAgIHN0YXJ0QXQ6IHtcbiAgICAgICAgdGltZTogX3BhcnNlUG9zaXRpb24odGhpcywgZnJvbVBvc2l0aW9uKVxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlY2VudCA9IGZ1bmN0aW9uIHJlY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjZW50O1xuICB9O1xuXG4gIF9wcm90bzIubmV4dExhYmVsID0gZnVuY3Rpb24gbmV4dExhYmVsKGFmdGVyVGltZSkge1xuICAgIGlmIChhZnRlclRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYWZ0ZXJUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYWZ0ZXJUaW1lKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5wcmV2aW91c0xhYmVsID0gZnVuY3Rpb24gcHJldmlvdXNMYWJlbChiZWZvcmVUaW1lKSB7XG4gICAgaWYgKGJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYmVmb3JlVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGJlZm9yZVRpbWUpLCAxKTtcbiAgfTtcblxuICBfcHJvdG8yLmN1cnJlbnRMYWJlbCA9IGZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKSA6IHRoaXMucHJldmlvdXNMYWJlbCh0aGlzLl90aW1lICsgX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90bzIuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHNoaWZ0Q2hpbGRyZW4oYW1vdW50LCBhZGp1c3RMYWJlbHMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbGFiZWxzID0gdGhpcy5sYWJlbHMsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWRqdXN0TGFiZWxzKSB7XG4gICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGxhYmVsc1twXSArPSBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgY2hpbGQuaW52YWxpZGF0ZSgpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gX0FuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihpbmNsdWRlTGFiZWxzKSB7XG4gICAgaWYgKGluY2x1ZGVMYWJlbHMgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZUxhYmVscyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIG5leHQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLl90aW1lID0gdGhpcy5fdFRpbWUgPSB0aGlzLl9wVGltZSA9IDA7XG4gICAgaW5jbHVkZUxhYmVscyAmJiAodGhpcy5sYWJlbHMgPSB7fSk7XG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNoaWxkID0gc2VsZi5fbGFzdCxcbiAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgcHJldixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHBhcmVudDtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZi50aW1lU2NhbGUoKHNlbGYuX3JlcGVhdCA8IDAgPyBzZWxmLmR1cmF0aW9uKCkgOiBzZWxmLnRvdGFsRHVyYXRpb24oKSkgLyAoc2VsZi5yZXZlcnNlZCgpID8gLXZhbHVlIDogdmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fZGlydHkpIHtcbiAgICAgIHBhcmVudCA9IHNlbGYucGFyZW50O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJldiA9IGNoaWxkLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cbiAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblxuICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICBpZiAoc3RhcnQgPiBwcmV2U3RhcnQgJiYgc2VsZi5fc29ydCAmJiBjaGlsZC5fdHMgJiYgIXNlbGYuX2xvY2spIHtcbiAgICAgICAgICAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgICAgc2VsZi5fbG9jayA9IDE7IC8vcHJldmVudCBlbmRsZXNzIHJlY3Vyc2l2ZSBjYWxscyAtIHRoZXJlIGFyZSBtZXRob2RzIHRoYXQgZ2V0IHRyaWdnZXJlZCB0aGF0IGNoZWNrIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gd2hlbiB3ZSBhZGQoKS5cblxuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHNlbGYsIGNoaWxkLCBzdGFydCAtIGNoaWxkLl9kZWxheSwgMSkuX2xvY2sgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGFydCA9IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgIGlmICghcGFyZW50ICYmICFzZWxmLl9kcCB8fCBwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGFydCArPSBzdGFydCAvIHNlbGYuX3RzO1xuICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgIHNlbGYuX3RUaW1lIC09IHN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgIHByZXZTdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgIGNoaWxkID0gcHJldjtcbiAgICAgIH1cblxuICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgIHNlbGYuX2RpcnR5ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgfTtcblxuICBUaW1lbGluZS51cGRhdGVSb290ID0gZnVuY3Rpb24gdXBkYXRlUm9vdCh0aW1lKSB7XG4gICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgIF9sYXp5U2FmZVJlbmRlcihfZ2xvYmFsVGltZWxpbmUsIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWUsIF9nbG9iYWxUaW1lbGluZSkpO1xuXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUgPSBfdGlja2VyLmZyYW1lO1xuICAgIH1cblxuICAgIGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkge1xuICAgICAgX25leHRHQ0ZyYW1lICs9IF9jb25maWcuYXV0b1NsZWVwIHx8IDEyMDtcbiAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5fdHMpIGlmIChfY29uZmlnLmF1dG9TbGVlcCAmJiBfdGlja2VyLl9saXN0ZW5lcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB3aGlsZSAoY2hpbGQgJiYgIWNoaWxkLl90cykge1xuICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCB8fCBfdGlja2VyLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaW1lbGluZTtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFRpbWVsaW5lLnByb3RvdHlwZSwge1xuICBfbG9jazogMCxcbiAgX2hhc1BhdXNlOiAwLFxuICBfZm9yY2luZzogMFxufSk7XG5cbnZhciBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAvL25vdGU6IHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIG51bGwsIHNldHRlciksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0TnVtcyxcbiAgICAgIGNvbG9yLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBzdGFydE51bSxcbiAgICAgIGhhc1JhbmRvbSxcbiAgICAgIGE7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGhhc1JhbmRvbSA9IH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICB9XG5cbiAgaWYgKHN0cmluZ0ZpbHRlcikge1xuICAgIGEgPSBbc3RhcnQsIGVuZF07XG4gICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblxuICAgIHN0YXJ0ID0gYVswXTtcbiAgICBlbmQgPSBhWzFdO1xuICB9XG5cbiAgc3RhcnROdW1zID0gc3RhcnQubWF0Y2goX2NvbXBsZXhTdHJpbmdOdW1FeHApIHx8IFtdO1xuXG4gIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICBlbmROdW0gPSByZXN1bHRbMF07XG4gICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuICAgICAgY29sb3IgPSAxO1xuICAgIH1cblxuICAgIGlmIChlbmROdW0gIT09IHN0YXJ0TnVtc1ttYXRjaEluZGV4KytdKSB7XG4gICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDsgLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG4gICAgICBwdC5fcHQgPSB7XG4gICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgIGM6IGVuZE51bS5jaGFyQXQoMSkgPT09IFwiPVwiID8gcGFyc2VGbG9hdChlbmROdW0uc3Vic3RyKDIpKSAqIChlbmROdW0uY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgOiBwYXJzZUZsb2F0KGVuZE51bSkgLSBzdGFydE51bSxcbiAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgIH07XG4gICAgICBpbmRleCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmxhc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG5cbiAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpIHx8IGhhc1JhbmRvbSkge1xuICAgIHB0LmUgPSAwOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG4gIH1cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIGluZGV4LCB0YXJnZXRzLCBtb2RpZmllciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgX2lzRnVuY3Rpb24oZW5kKSAmJiAoZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCwgdGFyZ2V0cykpO1xuICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgcGFyc2VkU3RhcnQgPSBzdGFydCAhPT0gXCJnZXRcIiA/IHN0YXJ0IDogIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBmdW5jUGFyYW0gPyB0YXJnZXRbcHJvcC5pbmRleE9mKFwic2V0XCIpIHx8ICFfaXNGdW5jdGlvbih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXShmdW5jUGFyYW0pIDogdGFyZ2V0W3Byb3BdKCksXG4gICAgICBzZXR0ZXIgPSAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IF9zZXR0ZXJQbGFpbiA6IGZ1bmNQYXJhbSA/IF9zZXR0ZXJGdW5jV2l0aFBhcmFtIDogX3NldHRlckZ1bmMsXG4gICAgICBwdDtcblxuICBpZiAoX2lzU3RyaW5nKGVuZCkpIHtcbiAgICBpZiAofmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcbiAgICAgIGVuZCA9IHBhcnNlRmxvYXQocGFyc2VkU3RhcnQpICsgcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSAqIChlbmQuY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZFN0YXJ0ICE9PSBlbmQpIHtcbiAgICBpZiAoIWlzTmFOKHBhcnNlZFN0YXJ0ICogZW5kKSkge1xuICAgICAgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsICtwYXJzZWRTdGFydCB8fCAwLCBlbmQgLSAocGFyc2VkU3RhcnQgfHwgMCksIHR5cGVvZiBjdXJyZW50VmFsdWUgPT09IFwiYm9vbGVhblwiID8gX3JlbmRlckJvb2xlYW4gOiBfcmVuZGVyUGxhaW4sIDAsIHNldHRlcik7XG4gICAgICBmdW5jUGFyYW0gJiYgKHB0LmZwID0gZnVuY1BhcmFtKTtcbiAgICAgIG1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0aGlzLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRoaXMuX3B0ID0gcHQ7XG4gICAgfVxuXG4gICAgIWN1cnJlbnRWYWx1ZSAmJiAhKHByb3AgaW4gdGFyZ2V0KSAmJiBfbWlzc2luZ1BsdWdpbihwcm9wLCBlbmQpO1xuICAgIHJldHVybiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHRoaXMsIHRhcmdldCwgcHJvcCwgcGFyc2VkU3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIgfHwgX2NvbmZpZy5zdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSk7XG4gIH1cbn0sXG4gICAgLy9jcmVhdGVzIGEgY29weSBvZiB0aGUgdmFycyBvYmplY3QgYW5kIHByb2Nlc3NlcyBhbnkgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIChwdXR0aW5nIHRoZSByZXN1bHRpbmcgdmFsdWVzIGRpcmVjdGx5IGludG8gdGhlIGNvcHkpIGFzIHdlbGwgYXMgc3RyaW5ncyB3aXRoIFwicmFuZG9tKClcIiBpbiB0aGVtLiBJdCBkb2VzIE5PVCBwcm9jZXNzIHJlbGF0aXZlIHZhbHVlcy5cbl9wcm9jZXNzVmFycyA9IGZ1bmN0aW9uIF9wcm9jZXNzVmFycyh2YXJzLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2Vlbikge1xuICBfaXNGdW5jdGlvbih2YXJzKSAmJiAodmFycyA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpO1xuXG4gIGlmICghX2lzT2JqZWN0KHZhcnMpIHx8IHZhcnMuc3R5bGUgJiYgdmFycy5ub2RlVHlwZSB8fCBfaXNBcnJheSh2YXJzKSB8fCBfaXNUeXBlZEFycmF5KHZhcnMpKSB7XG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YXJzKSA/IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiB2YXJzO1xuICB9XG5cbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICBjb3B5W3BdID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnNbcF0sIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfY2hlY2tQbHVnaW4gPSBmdW5jdGlvbiBfY2hlY2tQbHVnaW4ocHJvcGVydHksIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHZhciBwbHVnaW4sIHB0LCBwdExvb2t1cCwgaTtcblxuICBpZiAoX3BsdWdpbnNbcHJvcGVydHldICYmIChwbHVnaW4gPSBuZXcgX3BsdWdpbnNbcHJvcGVydHldKCkpLmluaXQodGFyZ2V0LCBwbHVnaW4ucmF3VmFycyA/IHZhcnNbcHJvcGVydHldIDogX3Byb2Nlc3NWYXJzKHZhcnNbcHJvcGVydHldLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2VlbiksIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgaWYgKHR3ZWVuICE9PSBfcXVpY2tUd2Vlbikge1xuICAgICAgcHRMb29rdXAgPSB0d2Vlbi5fcHRMb29rdXBbdHdlZW4uX3RhcmdldHMuaW5kZXhPZih0YXJnZXQpXTsgLy9ub3RlOiB3ZSBjYW4ndCB1c2UgdHdlZW4uX3B0TG9va3VwW2luZGV4XSBiZWNhdXNlIGZvciBzdGFnZ2VyZWQgdHdlZW5zLCB0aGUgaW5kZXggZnJvbSB0aGUgZnVsbFRhcmdldHMgYXJyYXkgd29uJ3QgbWF0Y2ggd2hhdCBpdCBpcyBpbiBlYWNoIGluZGl2aWR1YWwgdHdlZW4gdGhhdCBzcGF3bnMgZnJvbSB0aGUgc3RhZ2dlci5cblxuICAgICAgaSA9IHBsdWdpbi5fcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHB0TG9va3VwW3BsdWdpbi5fcHJvcHNbaV1dID0gcHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn0sXG4gICAgX292ZXJ3cml0aW5nVHdlZW4sXG4gICAgLy9zdG9yZSBhIHJlZmVyZW5jZSB0ZW1wb3JhcmlseSBzbyB3ZSBjYW4gYXZvaWQgb3ZlcndyaXRpbmcgaXRzZWxmLlxuX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpIHtcbiAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgZWFzZSA9IHZhcnMuZWFzZSxcbiAgICAgIHN0YXJ0QXQgPSB2YXJzLnN0YXJ0QXQsXG4gICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgIGxhenkgPSB2YXJzLmxhenksXG4gICAgICBvblVwZGF0ZSA9IHZhcnMub25VcGRhdGUsXG4gICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlID0gdmFycy5jYWxsYmFja1Njb3BlLFxuICAgICAgcnVuQmFja3dhcmRzID0gdmFycy5ydW5CYWNrd2FyZHMsXG4gICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICBrZXlmcmFtZXMgPSB2YXJzLmtleWZyYW1lcyxcbiAgICAgIGF1dG9SZXZlcnQgPSB2YXJzLmF1dG9SZXZlcnQsXG4gICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgcHJldlN0YXJ0QXQgPSB0d2Vlbi5fc3RhcnRBdCxcbiAgICAgIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgIGZ1bGxUYXJnZXRzID0gcGFyZW50ICYmIHBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiID8gcGFyZW50LnBhcmVudC5fdGFyZ2V0cyA6IHRhcmdldHMsXG4gICAgICBhdXRvT3ZlcndyaXRlID0gdHdlZW4uX292ZXJ3cml0ZSA9PT0gXCJhdXRvXCIsXG4gICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgY2xlYW5WYXJzLFxuICAgICAgaSxcbiAgICAgIHAsXG4gICAgICBwdCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgZ3NEYXRhLFxuICAgICAgaGFybmVzcyxcbiAgICAgIHBsdWdpbixcbiAgICAgIHB0TG9va3VwLFxuICAgICAgaW5kZXgsXG4gICAgICBoYXJuZXNzVmFycyxcbiAgICAgIG92ZXJ3cml0dGVuO1xuICB0bCAmJiAoIWtleWZyYW1lcyB8fCAhZWFzZSkgJiYgKGVhc2UgPSBcIm5vbmVcIik7XG4gIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gIHR3ZWVuLl95RWFzZSA9IHlveW9FYXNlID8gX2ludmVydEVhc2UoX3BhcnNlRWFzZSh5b3lvRWFzZSA9PT0gdHJ1ZSA/IGVhc2UgOiB5b3lvRWFzZSwgX2RlZmF1bHRzLmVhc2UpKSA6IDA7XG5cbiAgaWYgKHlveW9FYXNlICYmIHR3ZWVuLl95b3lvICYmICF0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy90aGVyZSBtdXN0IGhhdmUgYmVlbiBhIHBhcmVudCB0aW1lbGluZSB3aXRoIHlveW86dHJ1ZSB0aGF0IGlzIGN1cnJlbnRseSBpbiBpdHMgeW95byBwaGFzZSwgc28gZmxpcCB0aGUgZWFzZXMuXG4gICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgdHdlZW4uX3lFYXNlID0gdHdlZW4uX2Vhc2U7XG4gICAgdHdlZW4uX2Vhc2UgPSB5b3lvRWFzZTtcbiAgfVxuXG4gIGlmICghdGwpIHtcbiAgICAvL2lmIHRoZXJlJ3MgYW4gaW50ZXJuYWwgdGltZWxpbmUsIHNraXAgYWxsIHRoZSBwYXJzaW5nIGJlY2F1c2Ugd2UgcGFzc2VkIHRoYXQgdGFzayBkb3duIHRoZSBjaGFpbi5cbiAgICBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMDtcbiAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdOyAvL3NvbWVvbmUgbWF5IG5lZWQgdG8gc3BlY2lmeSBDU1Mtc3BlY2lmaWMgdmFsdWVzIEFORCBub24tQ1NTIHZhbHVlcywgbGlrZSBpZiB0aGUgZWxlbWVudCBoYXMgYW4gXCJ4XCIgcHJvcGVydHkgcGx1cyBpdCdzIGEgc3RhbmRhcmQgRE9NIGVsZW1lbnQuIFdlIGFsbG93IHBlb3BsZSB0byBkaXN0aW5ndWlzaCBieSB3cmFwcGluZyBwbHVnaW4tc3BlY2lmaWMgc3R1ZmYgaW4gYSBjc3M6e30gb2JqZWN0IGZvciBleGFtcGxlLlxuXG4gICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuICAgIHByZXZTdGFydEF0ICYmIHByZXZTdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkua2lsbCgpO1xuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZSxcbiAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICBjYWxsYmFja1Njb3BlOiBjYWxsYmFja1Njb3BlLFxuICAgICAgICBzdGFnZ2VyOiAwXG4gICAgICB9LCBzdGFydEF0KSkpOyAvL2NvcHkgdGhlIHByb3BlcnRpZXMvdmFsdWVzIGludG8gYSBuZXcgb2JqZWN0IHRvIGF2b2lkIGNvbGxpc2lvbnMsIGxpa2UgdmFyIHRvID0ge3g6MH0sIGZyb20gPSB7eDo1MDB9OyB0aW1lbGluZS5mcm9tVG8oZSwgZnJvbSwgdG8pLmZyb21UbyhlLCB0bywgZnJvbSk7XG5cblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICBhdXRvUmV2ZXJ0IHx8ICh0d2Vlbi5fc3RhcnRBdCA9IDApOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZSBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSBvciB3aGVuIGF1dG9SZXZlcnQgaXMgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgfSBlbHNlIGlmIChkdXIgJiYgISh0aW1lIDwgMCAmJiBwcmV2U3RhcnRBdCkpIHtcbiAgICAgICAgICB0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgICByZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ1bkJhY2t3YXJkcyAmJiBkdXIpIHtcbiAgICAgIC8vZnJvbSgpIHR3ZWVucyBtdXN0IGJlIGhhbmRsZWQgdW5pcXVlbHk6IHRoZWlyIGJlZ2lubmluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZCBidXQgd2UgZG9uJ3Qgd2FudCBvdmVyd3JpdGluZyB0byBvY2N1ciB5ZXQgKHdoZW4gdGltZSBpcyBzdGlsbCAwKS4gV2FpdCB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zIGJlZm9yZSBkb2luZyBhbGwgdGhlIHJvdXRpbmVzIGxpa2Ugb3ZlcndyaXRpbmcuIEF0IHRoYXQgdGltZSwgd2Ugc2hvdWxkIHJlbmRlciBhdCB0aGUgRU5EIG9mIHRoZSB0d2VlbiB0byBlbnN1cmUgdGhhdCB0aGluZ3MgaW5pdGlhbGl6ZSBjb3JyZWN0bHkgKHJlbWVtYmVyLCBmcm9tKCkgdHdlZW5zIGdvIGJhY2t3YXJkcylcbiAgICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgICAhYXV0b1JldmVydCAmJiAodHdlZW4uX3N0YXJ0QXQgPSAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTsgLy9pbiByYXJlIGNhc2VzIChsaWtlIGlmIGEgZnJvbSgpIHR3ZWVuIHJ1bnMgYW5kIHRoZW4gaXMgaW52YWxpZGF0ZSgpLWVkKSwgaW1tZWRpYXRlUmVuZGVyIGNvdWxkIGJlIHRydWUgYnV0IHRoZSBpbml0aWFsIGZvcmNlZC1yZW5kZXIgZ2V0cyBza2lwcGVkLCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgdGhlIHJlbmRlciBpbiB0aGlzIGNvbnRleHQgd2hlbiB0aGUgX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDBcblxuICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IFwiaXNGcm9tU3RhcnRcIixcbiAgICAgICAgICAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cbiAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBpbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgICAgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyByZW5kZXIgaW1tZWRpYXRlbHkgYnkgZGVmYXVsdCwgYnV0IGlmIHdlJ3JlIG5vdCBzcGVjaWZpY2FsbHkgaW5zdHJ1Y3RlZCB0byByZW5kZXIgdGhpcyB0d2VlbiBpbW1lZGlhdGVseSwgd2Ugc2hvdWxkIHNraXAgdGhpcyBhbmQgbWVyZWx5IF9pbml0KCkgdG8gcmVjb3JkIHRoZSBzdGFydGluZyB2YWx1ZXMgKHJlbmRlcmluZyB0aGVtIGltbWVkaWF0ZWx5IHdvdWxkIHB1c2ggdGhlbSB0byBjb21wbGV0aW9uIHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoYXQgY2FzZSAtIHdlJ2QgaGF2ZSB0byByZW5kZXIoLTEpIGltbWVkaWF0ZWx5IGFmdGVyKVxuICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQgLy9lbnN1cmVzIHRoYXQgbmVzdGVkIHR3ZWVucyB0aGF0IGhhZCBhIHN0YWdnZXIgYXJlIGhhbmRsZWQgcHJvcGVybHksIGxpa2UgZ3NhcC5mcm9tKFwiLmNsYXNzXCIsIHt5OmdzYXAudXRpbHMud3JhcChbLTEwMCwxMDBdKX0pXG5cbiAgICAgICAgfSwgY2xlYW5WYXJzKTtcbiAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTsgLy8gaW4gY2FzZSBzb21lb25lIGRvZXMgc29tZXRoaW5nIGxpa2UgLmZyb20oLi4uLCB7Y3NzOnt9fSlcblxuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBwKSk7XG5cbiAgICAgICAgaWYgKCFpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLl9zdGFydEF0LCBfdGlueU51bSk7IC8vZW5zdXJlcyB0aGF0IHRoZSBpbml0aWFsIHZhbHVlcyBhcmUgcmVjb3JkZWRcblxuICAgICAgICB9IGVsc2UgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHdlZW4uX3B0ID0gMDtcbiAgICBsYXp5ID0gZHVyICYmIF9pc05vdEZhbHNlKGxhenkpIHx8IGxhenkgJiYgIWR1cjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgZ3NEYXRhID0gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRhcmdldHMpW2ldLl9nc2FwO1xuICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgIF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gJiYgX2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblxuICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGlmIChoYXJuZXNzICYmIChwbHVnaW4gPSBuZXcgaGFybmVzcygpKS5pbml0KHRhcmdldCwgaGFybmVzc1ZhcnMgfHwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIGZ1bGxUYXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwbHVnaW4ubmFtZSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHB0TG9va3VwW25hbWVdID0gcHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXJuZXNzIHx8IGhhcm5lc3NWYXJzKSB7XG4gICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IF9jaGVja1BsdWdpbihwLCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCBmdWxsVGFyZ2V0cykpKSB7XG4gICAgICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB0TG9va3VwW3BdID0gcHQgPSBfYWRkUHJvcFR3ZWVuLmNhbGwodHdlZW4sIHRhcmdldCwgcCwgXCJnZXRcIiwgY2xlYW5WYXJzW3BdLCBpbmRleCwgZnVsbFRhcmdldHMsIDAsIHZhcnMuc3RyaW5nRmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHdlZW4uX29wICYmIHR3ZWVuLl9vcFtpXSAmJiB0d2Vlbi5raWxsKHRhcmdldCwgdHdlZW4uX29wW2ldKTtcblxuICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gdHdlZW47XG5cbiAgICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXQsIHB0TG9va3VwLCB0d2Vlbi5nbG9iYWxUaW1lKDApKTsgLy9BbHNvIG1ha2Ugc3VyZSB0aGUgb3ZlcndyaXRpbmcgZG9lc24ndCBvdmVyd3JpdGUgVEhJUyB0d2VlbiEhIVxuXG5cbiAgICAgICAgb3ZlcndyaXR0ZW4gPSAhdHdlZW4ucGFyZW50O1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9wdCAmJiBsYXp5ICYmIChfbGF6eUxvb2t1cFtnc0RhdGEuaWRdID0gMSk7XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgdHdlZW4uX29uSW5pdCAmJiB0d2Vlbi5fb25Jbml0KHR3ZWVuKTsgLy9wbHVnaW5zIGxpa2UgUm91bmRQcm9wcyBtdXN0IHdhaXQgdW50aWwgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIGFyZSBpbnN0YW50aWF0ZWQuIEluIHRoZSBwbHVnaW4ncyBpbml0KCkgZnVuY3Rpb24sIGl0IHNldHMgdGhlIF9vbkluaXQgb24gdGhlIHR3ZWVuIGluc3RhbmNlLiBNYXkgbm90IGJlIHByZXR0eS9pbnR1aXRpdmUsIGJ1dCBpdCdzIGZhc3QgYW5kIGtlZXBzIGZpbGUgc2l6ZSBkb3duLlxuICB9XG5cbiAgdHdlZW4uX2Zyb20gPSAhdGwgJiYgISF2YXJzLnJ1bkJhY2t3YXJkczsgLy9uZXN0ZWQgdGltZWxpbmVzIHNob3VsZCBuZXZlciBydW4gYmFja3dhcmRzIC0gdGhlIGJhY2t3YXJkcy1uZXNzIGlzIGluIHRoZSBjaGlsZCB0d2VlbnMuXG5cbiAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gIHR3ZWVuLl9pbml0dGVkID0gKCF0d2Vlbi5fb3AgfHwgdHdlZW4uX3B0KSAmJiAhb3ZlcndyaXR0ZW47IC8vIGlmIG92ZXJ3cml0dGVuUHJvcHMgcmVzdWx0ZWQgaW4gdGhlIGVudGlyZSB0d2VlbiBiZWluZyBraWxsZWQsIGRvIE5PVCBmbGFnIGl0IGFzIGluaXR0ZWQgb3IgZWxzZSBpdCBtYXkgcmVuZGVyIGZvciBvbmUgdGljay5cbn0sXG4gICAgX2FkZEFsaWFzZXNUb1ZhcnMgPSBmdW5jdGlvbiBfYWRkQWxpYXNlc1RvVmFycyh0YXJnZXRzLCB2YXJzKSB7XG4gIHZhciBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMCxcbiAgICAgIHByb3BlcnR5QWxpYXNlcyA9IGhhcm5lc3MgJiYgaGFybmVzcy5hbGlhc2VzLFxuICAgICAgY29weSxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgYWxpYXNlcztcblxuICBpZiAoIXByb3BlcnR5QWxpYXNlcykge1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgY29weSA9IF9tZXJnZSh7fSwgdmFycyk7XG5cbiAgZm9yIChwIGluIHByb3BlcnR5QWxpYXNlcykge1xuICAgIGlmIChwIGluIGNvcHkpIHtcbiAgICAgIGFsaWFzZXMgPSBwcm9wZXJ0eUFsaWFzZXNbcF0uc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IGFsaWFzZXMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvcHlbYWxpYXNlc1tpXV0gPSBjb3B5W3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfcGFyc2VGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodmFsdWUsIHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwodHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykgOiBfaXNTdHJpbmcodmFsdWUpICYmIH52YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSA/IF9yZXBsYWNlUmFuZG9tKHZhbHVlKSA6IHZhbHVlO1xufSxcbiAgICBfc3RhZ2dlclR3ZWVuUHJvcHMgPSBfY2FsbGJhY2tOYW1lcyArIFwicmVwZWF0LHJlcGVhdERlbGF5LHlveW8scmVwZWF0UmVmcmVzaCx5b3lvRWFzZVwiLFxuICAgIF9zdGFnZ2VyUHJvcHNUb1NraXAgPSAoX3N0YWdnZXJUd2VlblByb3BzICsgXCIsaWQsc3RhZ2dlcixkZWxheSxkdXJhdGlvbixwYXVzZWQsc2Nyb2xsVHJpZ2dlclwiKS5zcGxpdChcIixcIik7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHdlZW4sIF9BbmltYXRpb24yKTtcblxuICBmdW5jdGlvbiBUd2Vlbih0YXJnZXRzLCB2YXJzLCB0aW1lLCBza2lwSW5oZXJpdCkge1xuICAgIHZhciBfdGhpczM7XG5cbiAgICBpZiAodHlwZW9mIHZhcnMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRpbWUuZHVyYXRpb24gPSB2YXJzO1xuICAgICAgdmFycyA9IHRpbWU7XG4gICAgICB0aW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycyksIHRpbWUpIHx8IHRoaXM7XG4gICAgdmFyIF90aGlzMyR2YXJzID0gX3RoaXMzLnZhcnMsXG4gICAgICAgIGR1cmF0aW9uID0gX3RoaXMzJHZhcnMuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF90aGlzMyR2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgc3RhZ2dlciA9IF90aGlzMyR2YXJzLnN0YWdnZXIsXG4gICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAga2V5ZnJhbWVzID0gX3RoaXMzJHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBkZWZhdWx0cyA9IF90aGlzMyR2YXJzLmRlZmF1bHRzLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgeW95b0Vhc2UgPSBfdGhpczMkdmFycy55b3lvRWFzZSxcbiAgICAgICAgcGFyZW50ID0gX3RoaXMzLnBhcmVudCxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIHRsLFxuICAgICAgICBpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBsLFxuICAgICAgICBwLFxuICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgIHN0YWdnZXJGdW5jLFxuICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2U7XG4gICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgIF90aGlzMy5fcHRMb29rdXAgPSBbXTsgLy9Qcm9wVHdlZW4gbG9va3VwLiBBbiBhcnJheSBjb250YWluaW5nIGFuIG9iamVjdCBmb3IgZWFjaCB0YXJnZXQsIGhhdmluZyBrZXlzIGZvciBlYWNoIHR3ZWVuaW5nIHByb3BlcnR5XG5cbiAgICBfdGhpczMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcblxuICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgIHZhcnMgPSBfdGhpczMudmFycztcbiAgICAgIHRsID0gX3RoaXMzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgZGVmYXVsdHM6IGRlZmF1bHRzIHx8IHt9XG4gICAgICB9KTtcbiAgICAgIHRsLmtpbGwoKTtcbiAgICAgIHRsLnBhcmVudCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcblxuICAgICAgaWYgKGtleWZyYW1lcykge1xuICAgICAgICBfc2V0RGVmYXVsdHModGwudmFycy5kZWZhdWx0cywge1xuICAgICAgICAgIGVhc2U6IFwibm9uZVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgIHJldHVybiB0bC50byhwYXJzZWRUYXJnZXRzLCBmcmFtZSwgXCI+XCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgc3RhZ2dlckZ1bmMgPSBzdGFnZ2VyID8gZGlzdHJpYnV0ZShzdGFnZ2VyKSA6IF9lbXB0eUZ1bmM7XG5cbiAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgIC8vdXNlcnMgY2FuIHBhc3MgaW4gY2FsbGJhY2tzIGxpa2Ugb25TdGFydC9vbkNvbXBsZXRlIGluIHRoZSBzdGFnZ2VyIG9iamVjdC4gVGhlc2Ugc2hvdWxkIGZpcmUgd2l0aCBlYWNoIGluZGl2aWR1YWwgdHdlZW4uXG4gICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgIGlmICh+X3N0YWdnZXJUd2VlblByb3BzLmluZGV4T2YocCkpIHtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlIHx8IChzdGFnZ2VyVmFyc1RvTWVyZ2UgPSB7fSk7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICBpZiAoX3N0YWdnZXJQcm9wc1RvU2tpcC5pbmRleE9mKHApIDwgMCkge1xuICAgICAgICAgICAgICBjb3B5W3BdID0gdmFyc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb3B5LnN0YWdnZXIgPSAwO1xuICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSAmJiBfbWVyZ2UoY29weSwgc3RhZ2dlclZhcnNUb01lcmdlKTtcbiAgICAgICAgICBjdXJUYXJnZXQgPSBwYXJzZWRUYXJnZXRzW2ldOyAvL2Rvbid0IGp1c3QgY29weSBkdXJhdGlvbiBvciBkZWxheSBiZWNhdXNlIGlmIHRoZXkncmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24sIHdlJ2QgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBfaXNGdW5jT3JTdHJpbmcoKSB3b3VsZCBldmFsdWF0ZSBhcyB0cnVlIGluIHRoZSBjaGlsZCB0d2VlbnMsIGVudGVyaW5nIHRoaXMgbG9vcCwgZXRjLiBTbyB3ZSBwYXJzZSB0aGUgdmFsdWUgc3RyYWlnaHQgZnJvbSB2YXJzIGFuZCBkZWZhdWx0IHRvIDAuXG5cbiAgICAgICAgICBjb3B5LmR1cmF0aW9uID0gK19wYXJzZUZ1bmNPclN0cmluZyhkdXJhdGlvbiwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpO1xuICAgICAgICAgIGNvcHkuZGVsYXkgPSAoK19wYXJzZUZ1bmNPclN0cmluZyhkZWxheSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIHx8IDApIC0gX3RoaXMzLl9kZWxheTtcblxuICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWVvbmUgZG9lcyBkZWxheTpcInJhbmRvbSgxLCA1KVwiLCByZXBlYXQ6LTEsIGZvciBleGFtcGxlLCB0aGUgZGVsYXkgc2hvdWxkbid0IGJlIGluc2lkZSB0aGUgcmVwZWF0LlxuICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgIF90aGlzMy5fc3RhcnQgKz0gZGVsYXk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC50byhjdXJUYXJnZXQsIGNvcHksIHN0YWdnZXJGdW5jKGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDsgLy8gaWYgdGhlIHRpbWVsaW5lJ3MgZHVyYXRpb24gaXMgMCwgd2UgZG9uJ3QgbmVlZCBhIHRpbWVsaW5lIGludGVybmFsbHkhXG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczMudGltZWxpbmUgPSAwOyAvL3NwZWVkIG9wdGltaXphdGlvbiwgZmFzdGVyIGxvb2t1cHMgKG5vIGdvaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4pXG4gICAgfVxuXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YocGFyc2VkVGFyZ2V0cyk7XG5cbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICB9XG5cbiAgICBwYXJlbnQgJiYgX3Bvc3RBZGRDaGVja3MocGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpO1xuXG4gICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmQocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICBfdGhpczMuX3RUaW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblxuICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPiB0RHVyIC0gX3RpbnlOdW0gJiYgdG90YWxUaW1lID49IDAgPyB0RHVyIDogdG90YWxUaW1lIDwgX3RpbnlOdW0gPyAwIDogdG90YWxUaW1lLFxuICAgICAgICB0aW1lLFxuICAgICAgICBwdCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICBpc1lveW8sXG4gICAgICAgIHJhdGlvLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgeW95b0Vhc2U7XG5cbiAgICBpZiAoIWR1cikge1xuICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICB9IGVsc2UgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCAhdG90YWxUaW1lIHx8IGZvcmNlIHx8IHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAvL3RoaXMgc2Vuc2VzIGlmIHdlJ3JlIGNyb3NzaW5nIG92ZXIgdGhlIHN0YXJ0IHRpbWUsIGluIHdoaWNoIGNhc2Ugd2UgbXVzdCByZWNvcmQgX3pUaW1lIGFuZCBmb3JjZSB0aGUgcmVuZGVyLCBidXQgd2UgZG8gaXQgaW4gdGhpcyBsZW5ndGh5IGNvbmRpdGlvbmFsIHdheSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAodXN1YWxseSB3ZSBjYW4gc2tpcCB0aGUgY2FsY3VsYXRpb25zKTogdGhpcy5faW5pdHRlZCAmJiAodGhpcy5felRpbWUgPCAwKSAhPT0gKHRvdGFsVGltZSA8IDApXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG4gICAgICAgIHRpbWUgPSBfcm91bmQodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBpc1lveW8gPSB0aGlzLl95b3lvICYmIGl0ZXJhdGlvbiAmIDE7XG5cbiAgICAgICAgaWYgKGlzWW95bykge1xuICAgICAgICAgIHlveW9FYXNlID0gdGhpcy5feUVhc2U7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICBpZiAodGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlICYmIHRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgICAvL2NvdWxkIGJlIGR1cmluZyB0aGUgcmVwZWF0RGVsYXkgcGFydC4gTm8gbmVlZCB0byByZW5kZXIgYW5kIGZpcmUgY2FsbGJhY2tzLlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICAgIHRpbWVsaW5lICYmIHRoaXMuX3lFYXNlICYmIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKTsgLy9yZXBlYXRSZWZyZXNoIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICAgIGlmICh0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gZm9yY2UgPSAxOyAvL2ZvcmNlLCBvdGhlcndpc2UgaWYgbGF6eSBpcyB0cnVlLCB0aGUgX2F0dGVtcHRJbml0VHdlZW4oKSB3aWxsIHJldHVybiBhbmQgd2UnbGwganVtcCBvdXQgYW5kIGdldCBjYXVnaHQgYm91bmNpbmcgb24gZWFjaCB0aWNrLlxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihfcm91bmQoY3ljbGVEdXJhdGlvbiAqIGl0ZXJhdGlvbiksIHRydWUpLmludmFsaWRhdGUoKS5fbG9jayA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICBpZiAoX2F0dGVtcHRJbml0VHdlZW4odGhpcywgdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykpIHtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IDA7IC8vIGluIGNvbnN0cnVjdG9yIGlmIGltbWVkaWF0ZVJlbmRlciBpcyB0cnVlLCB3ZSBzZXQgX3RUaW1lIHRvIC1fdGlueU51bSB0byBoYXZlIHRoZSBwbGF5aGVhZCBjcm9zcyB0aGUgc3RhcnRpbmcgcG9pbnQgYnV0IHdlIGNhbid0IGxlYXZlIF90VGltZSBhcyBhIG5lZ2F0aXZlIG51bWJlci5cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgLy8gd2hpbGUgaW5pdHRpbmcsIGEgcGx1Z2luIGxpa2UgSW5lcnRpYVBsdWdpbiBtaWdodCBhbHRlciB0aGUgZHVyYXRpb24sIHNvIHJlcnVuIGZyb20gdGhlIHN0YXJ0IHRvIGVuc3VyZSBldmVyeXRoaW5nIHJlbmRlcnMgYXMgaXQgc2hvdWxkLlxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9hY3QgPSAxOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gKHlveW9FYXNlIHx8IHRoaXMuX2Vhc2UpKHRpbWUgLyBkdXIpO1xuXG4gICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuICAgICAgcHQgPSB0aGlzLl9wdDtcblxuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiByYXRpbywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgIGlmICh0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdG90YWxUaW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgZm9yY2UpOyAvL25vdGU6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSB0dWNrIHRoaXMgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIGxlc3MgdHJhdmVsZWQgYXJlYXMgKG1vc3QgdHdlZW5zIGRvbid0IGhhdmUgYW4gb25VcGRhdGUpLiBXZSdkIGp1c3QgaGF2ZSBpdCBhdCB0aGUgZW5kIGJlZm9yZSB0aGUgb25Db21wbGV0ZSwgYnV0IHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgYmVmb3JlIGFueSBvblVwZGF0ZSBpcyBjYWxsZWQsIHNvIHdlIEFMU08gcHV0IGl0IGhlcmUgYW5kIHRoZW4gaWYgaXQncyBub3QgY2FsbGVkLCB3ZSBkbyBzbyBsYXRlciBuZWFyIHRoZSBvbkNvbXBsZXRlLlxuXG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXBlYXQgJiYgaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmIHRoaXMudmFycy5vblJlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG5cbiAgICAgIGlmICgodFRpbWUgPT09IHRoaXMuX3REdXIgfHwgIXRUaW1lKSAmJiB0aGlzLl90VGltZSA9PT0gdFRpbWUpIHtcbiAgICAgICAgdG90YWxUaW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmICF0aGlzLl9vblVwZGF0ZSAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdGhpcy5fdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB3ZSdyZSByZW5kZXJpbmcgYXQgZXhhY3RseSBhIHRpbWUgb2YgMCwgYXMgdGhlcmUgY291bGQgYmUgYXV0b1JldmVydCB2YWx1ZXMgdGhhdCBzaG91bGQgZ2V0IHNldCBvbiB0aGUgbmV4dCB0aWNrIChpZiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0VGltZSwgbmVnYXRpdmUgdG90YWxUaW1lKS4gRG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgLy8gaWYgcHJldlRpbWUgYW5kIHRUaW1lIGFyZSB6ZXJvLCB3ZSBzaG91bGRuJ3QgZmlyZSB0aGUgb25SZXZlcnNlQ29tcGxldGUuIFRoaXMgY291bGQgaGFwcGVuIGlmIHlvdSBnc2FwLnRvKC4uLiB7cGF1c2VkOnRydWV9KS5wbGF5KCk7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMy50YXJnZXRzID0gZnVuY3Rpb24gdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgfTtcblxuICBfcHJvdG8zLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9zdGFydEF0ID0gdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9hY3QgPSB0aGlzLl9sYXp5ID0gMDtcbiAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5pbnZhbGlkYXRlKCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IDA7XG5cbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lbGluZSkge1xuICAgICAgdmFyIHREdXIgPSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgIHRoaXMudGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHZhcnMsIF9vdmVyd3JpdGluZ1R3ZWVuICYmIF9vdmVyd3JpdGluZ1R3ZWVuLnZhcnMub3ZlcndyaXRlICE9PSB0cnVlKS5fZmlyc3QgfHwgX2ludGVycnVwdCh0aGlzKTsgLy8gaWYgbm90aGluZyBpcyBsZWZ0IHR3ZWVubmcsIGludGVycnVwdC5cblxuICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTsgLy8gaWYgYSBuZXN0ZWQgdHdlZW4gaXMga2lsbGVkIHRoYXQgY2hhbmdlcyB0aGUgZHVyYXRpb24sIGl0IHNob3VsZCBhZmZlY3QgdGhpcyB0d2VlbidzIGR1cmF0aW9uLiBXZSBtdXN0IHVzZSB0aGUgcmF0aW8sIHRob3VnaCwgYmVjYXVzZSBzb21ldGltZXMgdGhlIGludGVybmFsIHRpbWVsaW5lIGlzIHN0cmV0Y2hlZCBsaWtlIGZvciBrZXlmcmFtZXMgd2hlcmUgdGhleSBkb24ndCBhbGwgYWRkIHVwIHRvIHdoYXRldmVyIHRoZSBwYXJlbnQgdHdlZW4ncyBkdXJhdGlvbiB3YXMgc2V0IHRvLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgIGtpbGxpbmdUYXJnZXRzID0gdGFyZ2V0cyA/IHRvQXJyYXkodGFyZ2V0cykgOiBwYXJzZWRUYXJnZXRzLFxuICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICBvdmVyd3JpdHRlblByb3BzLFxuICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgcCxcbiAgICAgICAgcHQsXG4gICAgICAgIGk7XG5cbiAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICB9XG5cbiAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgIGlmICh2YXJzICE9PSBcImFsbFwiKSB7XG4gICAgICAvL3NvIHBlb3BsZSBjYW4gcGFzcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgIHAgPSB7fTtcblxuICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhcnMgPSBwO1xuICAgICAgfVxuXG4gICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgfVxuXG4gICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKH5raWxsaW5nVGFyZ2V0cy5pbmRleE9mKHBhcnNlZFRhcmdldHNbaV0pKSB7XG4gICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzO1xuICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICBpZiAocHQpIHtcbiAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJPdmVyd3JpdGVQcm9wcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXR0ZWQgJiYgIXRoaXMuX3B0ICYmIGZpcnN0UFQgJiYgX2ludGVycnVwdCh0aGlzKTsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBhcmUga2lsbGVkLCBraWxsIHRoZSB0d2Vlbi4gV2l0aG91dCB0aGlzIGxpbmUsIGlmIHRoZXJlJ3MgYSB0d2VlbiB3aXRoIG11bHRpcGxlIHRhcmdldHMgYW5kIHRoZW4geW91IGtpbGxUd2VlbnNPZigpIGVhY2ggdGFyZ2V0IGluZGl2aWR1YWxseSwgdGhlIHR3ZWVuIHdvdWxkIHRlY2huaWNhbGx5IHN0aWxsIHJlbWFpbiBhY3RpdmUgYW5kIGZpcmUgaXRzIG9uQ29tcGxldGUgZXZlbiB0aG91Z2ggdGhlcmUgYXJlbid0IGFueSBtb3JlIHByb3BlcnRpZXMgdHdlZW5pbmcuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICBUd2Vlbi5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uIGRlbGF5ZWRDYWxsKGRlbGF5LCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuICAgIHJldHVybiBuZXcgVHdlZW4oY2FsbGJhY2ssIDAsIHtcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlOiBzY29wZVxuICAgIH0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMikpO1xuICB9O1xuXG4gIFR3ZWVuLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMpO1xuICB9O1xuXG4gIFR3ZWVuLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUd2Vlbi5wcm90b3R5cGUsIHtcbiAgX3RhcmdldHM6IFtdLFxuICBfbGF6eTogMCxcbiAgX3N0YXJ0QXQ6IDAsXG4gIF9vcDogMCxcbiAgX29uSW5pdDogMFxufSk7IC8vYWRkIHRoZSBwZXJ0aW5lbnQgdGltZWxpbmUgbWV0aG9kcyB0byBUd2VlbiBpbnN0YW5jZXMgc28gdGhhdCB1c2VycyBjYW4gY2hhaW4gY29udmVuaWVudGx5IGFuZCBjcmVhdGUgYSB0aW1lbGluZSBhdXRvbWF0aWNhbGx5LiAocmVtb3ZlZCBkdWUgdG8gY29uY2VybnMgdGhhdCBpdCdkIHVsdGltYXRlbHkgYWRkIHRvIG1vcmUgY29uZnVzaW9uIGVzcGVjaWFsbHkgZm9yIGJlZ2lubmVycylcbi8vIF9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLHNldCxjYWxsLGFkZCxhZGRMYWJlbCxhZGRQYXVzZVwiLCBuYW1lID0+IHtcbi8vIFx0VHdlZW4ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0bGV0IHRsID0gbmV3IFRpbWVsaW5lKCk7XG4vLyBcdFx0cmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRsLCB0aGlzKVtuYW1lXS5hcHBseSh0bCwgdG9BcnJheShhcmd1bWVudHMpKTtcbi8vIFx0fVxuLy8gfSk7XG4vL2ZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBMZXZlcmFnZSB0aGUgdGltZWxpbmUgY2FsbHMuXG5cblxuX2ZvckVhY2hOYW1lKFwic3RhZ2dlclRvLHN0YWdnZXJGcm9tLHN0YWdnZXJGcm9tVG9cIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgVHdlZW5bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKCksXG4gICAgICAgIHBhcmFtcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICBwYXJhbXMuc3BsaWNlKG5hbWUgPT09IFwic3RhZ2dlckZyb21Ub1wiID8gNSA6IDQsIDAsIDApO1xuICAgIHJldHVybiB0bFtuYW1lXS5hcHBseSh0bCwgcGFyYW1zKTtcbiAgfTtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQUk9QVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX3NldHRlclBsYWluID0gZnVuY3Rpb24gX3NldHRlclBsYWluKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJGdW5jID0gZnVuY3Rpb24gX3NldHRlckZ1bmModGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0odmFsdWUpO1xufSxcbiAgICBfc2V0dGVyRnVuY1dpdGhQYXJhbSA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jV2l0aFBhcmFtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKGRhdGEuZnAsIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9zZXR0ZXJBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX2dldFNldHRlciA9IGZ1bmN0aW9uIF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odGFyZ2V0W3Byb3BlcnR5XSkgPyBfc2V0dGVyRnVuYyA6IF9pc1VuZGVmaW5lZCh0YXJnZXRbcHJvcGVydHldKSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlID8gX3NldHRlckF0dHJpYnV0ZSA6IF9zZXR0ZXJQbGFpbjtcbn0sXG4gICAgX3JlbmRlclBsYWluID0gZnVuY3Rpb24gX3JlbmRlclBsYWluKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgIHMgPSBcIlwiO1xuXG4gIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgLy9iID0gYmVnaW5uaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmI7XG4gIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgLy9lID0gZW5kaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmU7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBzID0gcHQucCArIChwdC5tID8gcHQubShwdC5zICsgcHQuYyAqIHJhdGlvKSA6IE1hdGgucm91bmQoKHB0LnMgKyBwdC5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDApICsgczsgLy93ZSB1c2UgdGhlIFwicFwiIHByb3BlcnR5IGZvciB0aGUgdGV4dCBpbmJldHdlZW4gKGxpa2UgYSBzdWZmaXgpLiBBbmQgaW4gdGhlIGNvbnRleHQgb2YgYSBjb21wbGV4IHN0cmluZywgdGhlIG1vZGlmaWVyIChtKSBpcyB0eXBpY2FsbHkganVzdCBNYXRoLnJvdW5kKCksIGxpa2UgZm9yIFJHQiBjb2xvcnMuXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcyArPSBkYXRhLmM7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBjaHVuayBvZiBub24tbnVtZXJpYyB0ZXh0LlxuICB9XG5cbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHMsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cbn0sXG4gICAgX2FkZFBsdWdpbk1vZGlmaWVyID0gZnVuY3Rpb24gX2FkZFBsdWdpbk1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICBwdCA9IG5leHQ7XG4gIH1cbn0sXG4gICAgX2tpbGxQcm9wVHdlZW5zT2YgPSBmdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZihwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgaWYgKHB0LnAgPT09IHByb3BlcnR5ICYmICFwdC5vcCB8fCBwdC5vcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcgPSAxO1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xufSxcbiAgICBfc2V0dGVyV2l0aE1vZGlmaWVyID0gZnVuY3Rpb24gX3NldHRlcldpdGhNb2RpZmllcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbn0sXG4gICAgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSA9IGZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkocGFyZW50KSB7XG4gIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICBuZXh0LFxuICAgICAgcHQyLFxuICAgICAgZmlyc3QsXG4gICAgICBsYXN0OyAvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byBkbyB0aGVpciB3b3JrIGFmdGVyIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyB3ZXJlIGNyZWF0ZWQgKGxpa2UgUm91bmRQcm9wc1BsdWdpbiBhbmQgTW9kaWZpZXJzUGx1Z2luKVxuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdDIgPSBmaXJzdDtcblxuICAgIHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcbiAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSB7XG4gICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdCA9IHB0O1xuICAgIH1cblxuICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgcHQyLl9wcmV2ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBwdDtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICBwYXJlbnQuX3B0ID0gZmlyc3Q7XG59OyAvL1Byb3BUd2VlbiBrZXk6IHQgPSB0YXJnZXQsIHAgPSBwcm9wLCByID0gcmVuZGVyZXIsIGQgPSBkYXRhLCBzID0gc3RhcnQsIGMgPSBjaGFuZ2UsIG9wID0gb3ZlcndyaXRlUHJvcGVydHkgKE9OTFkgcG9wdWxhdGVkIHdoZW4gaXQncyBkaWZmZXJlbnQgdGhhbiBwKSwgcHIgPSBwcmlvcml0eSwgX25leHQvX3ByZXYgZm9yIHRoZSBsaW5rZWQgbGlzdCBzaWJsaW5ncywgc2V0ID0gc2V0dGVyLCBtID0gbW9kaWZpZXIsIG1TZXQgPSBtb2RpZmllclNldHRlciAodGhlIG9yaWdpbmFsIHNldHRlciwgYmVmb3JlIGEgbW9kaWZpZXIgd2FzIGFkZGVkKVxuXG5cbmV4cG9ydCB2YXIgUHJvcFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgdGhpcy5zID0gc3RhcnQ7XG4gICAgdGhpcy5jID0gY2hhbmdlO1xuICAgIHRoaXMucCA9IHByb3A7XG4gICAgdGhpcy5yID0gcmVuZGVyZXIgfHwgX3JlbmRlclBsYWluO1xuICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgdGhpcy5wciA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5fcHJldiA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBQcm9wVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0OyAvL2luIGNhc2UgaXQgd2FzIGFscmVhZHkgc2V0IChhIFByb3BUd2VlbiBjYW4gb25seSBoYXZlIG9uZSBtb2RpZmllcilcblxuICAgIHRoaXMuc2V0ID0gX3NldHRlcldpdGhNb2RpZmllcjtcbiAgICB0aGlzLm0gPSBmdW5jO1xuICAgIHRoaXMubXQgPSB0YXJnZXQ7IC8vbW9kaWZpZXIgdGFyZ2V0XG5cbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gIH07XG5cbiAgcmV0dXJuIFByb3BUd2Vlbjtcbn0oKTsgLy9Jbml0aWFsaXphdGlvbiB0YXNrc1xuXG5fZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG59KTtcblxuX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2Vlbjtcbl9nbG9iYWxzLlRpbWVsaW5lTGl0ZSA9IF9nbG9iYWxzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG5fZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICBkZWZhdWx0czogX2RlZmF1bHRzLFxuICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gIGlkOiBcInJvb3RcIixcbiAgc21vb3RoQ2hpbGRUaW1pbmc6IHRydWVcbn0pO1xuX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIF9nc2FwID0ge1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlUGx1Z2luKGNvbmZpZyk7XG4gICAgfSk7XG4gIH0sXG4gIHRpbWVsaW5lOiBmdW5jdGlvbiB0aW1lbGluZSh2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lbGluZSh2YXJzKTtcbiAgfSxcbiAgZ2V0VHdlZW5zT2Y6IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpO1xuICB9LFxuICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIF9pc1N0cmluZyh0YXJnZXQpICYmICh0YXJnZXQgPSB0b0FycmF5KHRhcmdldClbMF0pOyAvL2luIGNhc2Ugc2VsZWN0b3IgdGV4dCBvciBhbiBhcnJheSBpcyBwYXNzZWQgaW5cblxuICAgIHZhciBnZXR0ZXIgPSBfZ2V0Q2FjaGUodGFyZ2V0IHx8IHt9KS5nZXQsXG4gICAgICAgIGZvcm1hdCA9IHVuaXQgPyBfcGFzc1Rocm91Z2ggOiBfbnVtZXJpY0lmUG9zc2libGU7XG5cbiAgICB1bml0ID09PSBcIm5hdGl2ZVwiICYmICh1bml0ID0gXCJcIik7XG4gICAgcmV0dXJuICF0YXJnZXQgPyB0YXJnZXQgOiAhcHJvcGVydHkgPyBmdW5jdGlvbiAocHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICAgIH0gOiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICB9LFxuICBxdWlja1NldHRlcjogZnVuY3Rpb24gcXVpY2tTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkge1xuICAgIHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHNldHRlcnMgPSB0YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBnc2FwLnF1aWNrU2V0dGVyKHQsIHByb3BlcnR5LCB1bml0KTtcbiAgICAgIH0pLFxuICAgICAgICAgIGwgPSBzZXR0ZXJzLmxlbmd0aDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGkgPSBsO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBzZXR0ZXJzW2ldKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXRbMF0gfHwge307XG5cbiAgICB2YXIgUGx1Z2luID0gX3BsdWdpbnNbcHJvcGVydHldLFxuICAgICAgICBjYWNoZSA9IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBwID0gY2FjaGUuaGFybmVzcyAmJiAoY2FjaGUuaGFybmVzcy5hbGlhc2VzIHx8IHt9KVtwcm9wZXJ0eV0gfHwgcHJvcGVydHksXG4gICAgICAgIC8vIGluIGNhc2UgaXQncyBhbiBhbGlhcywgbGlrZSBcInJvdGF0ZVwiIGZvciBcInJvdGF0aW9uXCIuXG4gICAgc2V0dGVyID0gUGx1Z2luID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcCA9IG5ldyBQbHVnaW4oKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCA9IDA7XG4gICAgICBwLmluaXQodGFyZ2V0LCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIF9xdWlja1R3ZWVuLCAwLCBbdGFyZ2V0XSk7XG4gICAgICBwLnJlbmRlcigxLCBwKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCAmJiBfcmVuZGVyUHJvcFR3ZWVucygxLCBfcXVpY2tUd2Vlbik7XG4gICAgfSA6IGNhY2hlLnNldCh0YXJnZXQsIHApO1xuXG4gICAgcmV0dXJuIFBsdWdpbiA/IHNldHRlciA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldHRlcih0YXJnZXQsIHAsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgY2FjaGUsIDEpO1xuICAgIH07XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVmZmVjdCA9IF9yZWYuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZi5wbHVnaW5zLFxuICAgICAgICBkZWZhdWx0cyA9IF9yZWYuZGVmYXVsdHMsXG4gICAgICAgIGV4dGVuZFRpbWVsaW5lID0gX3JlZi5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIHV0aWxzOiB7XG4gICAgd3JhcDogd3JhcCxcbiAgICB3cmFwWW95bzogd3JhcFlveW8sXG4gICAgZGlzdHJpYnV0ZTogZGlzdHJpYnV0ZSxcbiAgICByYW5kb206IHJhbmRvbSxcbiAgICBzbmFwOiBzbmFwLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIGdldFVuaXQ6IGdldFVuaXQsXG4gICAgY2xhbXA6IGNsYW1wLFxuICAgIHNwbGl0Q29sb3I6IHNwbGl0Q29sb3IsXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtXG4gIH1cbn07XG5cbl9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLGRlbGF5ZWRDYWxsLHNldCxraWxsVHdlZW5zT2ZcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9nc2FwW25hbWVdID0gVHdlZW5bbmFtZV07XG59KTtcblxuX3RpY2tlci5hZGQoVGltZWxpbmUudXBkYXRlUm9vdCk7XG5cbl9xdWlja1R3ZWVuID0gX2dzYXAudG8oe30sIHtcbiAgZHVyYXRpb246IDBcbn0pOyAvLyAtLS0tIEVYVFJBIFBMVUdJTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIF9nZXRQbHVnaW5Qcm9wVHdlZW4gPSBmdW5jdGlvbiBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHBsdWdpbiwgcHJvcCkge1xuICB2YXIgcHQgPSBwbHVnaW4uX3B0O1xuXG4gIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wICYmIHB0Lm9wICE9PSBwcm9wICYmIHB0LmZwICE9PSBwcm9wKSB7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZE1vZGlmaWVycyA9IGZ1bmN0aW9uIF9hZGRNb2RpZmllcnModHdlZW4sIG1vZGlmaWVycykge1xuICB2YXIgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBwdDtcblxuICBmb3IgKHAgaW4gbW9kaWZpZXJzKSB7XG4gICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHQgPSB0d2Vlbi5fcHRMb29rdXBbaV1bcF07XG5cbiAgICAgIGlmIChwdCAmJiAocHQgPSBwdC5kKSkge1xuICAgICAgICBpZiAocHQuX3B0KSB7XG4gICAgICAgICAgLy8gaXMgYSBwbHVnaW5cbiAgICAgICAgICBwdCA9IF9nZXRQbHVnaW5Qcm9wVHdlZW4ocHQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHQgJiYgcHQubW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXJzW3BdLCB0d2VlbiwgdGFyZ2V0c1tpXSwgcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIF9idWlsZE1vZGlmaWVyUGx1Z2luID0gZnVuY3Rpb24gX2J1aWxkTW9kaWZpZXJQbHVnaW4obmFtZSwgbW9kaWZpZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHJhd1ZhcnM6IDEsXG4gICAgLy9kb24ndCBwcmUtcHJvY2VzcyBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgb3IgXCJyYW5kb20oKVwiIHN0cmluZ3MuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG4gICAgICB0d2Vlbi5fb25Jbml0ID0gZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHZhciB0ZW1wLCBwO1xuXG4gICAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wW25hbWVdID0gMTtcbiAgICAgICAgICB9KTsgLy9pZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyB0byByb3VuZFByb3BzLCBsaWtlIFwieCx5XCIsIHdlIHJvdW5kIHRvIHdob2xlIG51bWJlcnMuXG5cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgICAgIHRlbXBbcF0gPSBtb2RpZmllcih2YXJzW3BdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRNb2RpZmllcnModHdlZW4sIHZhcnMpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59OyAvL3JlZ2lzdGVyIGNvcmUgcGx1Z2luc1xuXG5cbmV4cG9ydCB2YXIgZ3NhcCA9IF9nc2FwLnJlZ2lzdGVyUGx1Z2luKHtcbiAgbmFtZTogXCJhdHRyXCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcCwgcHQ7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgcHQgPSB0aGlzLmFkZCh0YXJnZXQsIFwic2V0QXR0cmlidXRlXCIsICh0YXJnZXQuZ2V0QXR0cmlidXRlKHApIHx8IDApICsgXCJcIiwgdmFyc1twXSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgcHQgJiYgKHB0Lm9wID0gcCk7XG5cbiAgICAgIHRoaXMuX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9XG59LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDsgLy90byBwcmV2ZW50IHRoZSBjb3JlIHBsdWdpbnMgZnJvbSBiZWluZyBkcm9wcGVkIHZpYSBhZ2dyZXNzaXZlIHRyZWUgc2hha2luZywgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoaXMgd2F5LlxuXG5Ud2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy41LjBcIjtcbl9jb3JlUmVhZHkgPSAxO1xuXG5pZiAoX3dpbmRvd0V4aXN0cygpKSB7XG4gIF93YWtlKCk7XG59XG5cbnZhciBQb3dlcjAgPSBfZWFzZU1hcC5Qb3dlcjAsXG4gICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICBQb3dlcjMgPSBfZWFzZU1hcC5Qb3dlcjMsXG4gICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICBRdWFkID0gX2Vhc2VNYXAuUXVhZCxcbiAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgUXVpbnQgPSBfZWFzZU1hcC5RdWludCxcbiAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgQmFjayA9IF9lYXNlTWFwLkJhY2ssXG4gICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgU2luZSA9IF9lYXNlTWFwLlNpbmUsXG4gICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5leHBvcnQgeyBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcbmV4cG9ydCB7IFR3ZWVuIGFzIFR3ZWVuTWF4LCBUd2VlbiBhcyBUd2VlbkxpdGUsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTWF4LCBUaW1lbGluZSBhcyBUaW1lbGluZUxpdGUsIGdzYXAgYXMgZGVmYXVsdCwgd3JhcCwgd3JhcFlveW8sIGRpc3RyaWJ1dGUsIHJhbmRvbSwgc25hcCwgbm9ybWFsaXplLCBnZXRVbml0LCBjbGFtcCwgc3BsaXRDb2xvciwgdG9BcnJheSwgbWFwUmFuZ2UsIHBpcGUsIHVuaXRpemUsIGludGVycG9sYXRlLCBzaHVmZmxlIH07IC8vZXhwb3J0IHNvbWUgaW50ZXJuYWwgbWV0aG9kcy9vcm9qZWN0cyBmb3IgdXNlIGluIENTU1BsdWdpbiBzbyB0aGF0IHdlIGNhbiBleHRlcm5hbGl6ZSB0aGF0IGZpbGUgYW5kIGFsbG93IGN1c3RvbSBidWlsZHMgdGhhdCBleGNsdWRlIGl0LlxuXG5leHBvcnQgeyBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9yZXBsYWNlUmFuZG9tLCBfY2hlY2tQbHVnaW4sIF9wbHVnaW5zLCBfdGlja2VyLCBfY29uZmlnLCBfcm91bmRNb2RpZmllciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3NhcC9nc2FwLWNvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IHsgZ3NhcCwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjLCBUd2VlbkxpdGUsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXggfSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcbmltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCIuL0NTU1BsdWdpbi5qc1wiO1xudmFyIGdzYXBXaXRoQ1NTID0gZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pIHx8IGdzYXAsXG4gICAgLy8gdG8gcHJvdGVjdCBmcm9tIHRyZWUgc2hha2luZ1xuVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcbmV4cG9ydCB7IGdzYXBXaXRoQ1NTIGFzIGdzYXAsIGdzYXBXaXRoQ1NTIGFzIGRlZmF1bHQsIENTU1BsdWdpbiwgVHdlZW5NYXhXaXRoQ1NTIGFzIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dzYXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyohXG4gKiBTY3JvbGxUcmlnZ2VyIDMuNS4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIwLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIGdzYXAsXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWwsXG4gICAgX2JvZHksXG4gICAgX3Jvb3QsXG4gICAgX3Jlc2l6ZURlbGF5LFxuICAgIF9yYWYsXG4gICAgX3JlcXVlc3QsXG4gICAgX3RvQXJyYXksXG4gICAgX2NsYW1wLFxuICAgIF90aW1lMixcbiAgICBfc3luY0ludGVydmFsLFxuICAgIF9yZWZyZXNoaW5nLFxuICAgIF9wb2ludGVySXNEb3duLFxuICAgIF90cmFuc2Zvcm1Qcm9wLFxuICAgIF9pLFxuICAgIF9wcmV2V2lkdGgsXG4gICAgX3ByZXZIZWlnaHQsXG4gICAgX2F1dG9SZWZyZXNoLFxuICAgIF9zb3J0LFxuICAgIF9saW1pdENhbGxiYWNrcyxcbiAgICAvLyBpZiB0cnVlLCB3ZSdsbCBvbmx5IHRyaWdnZXIgY2FsbGJhY2tzIGlmIHRoZSBhY3RpdmUgc3RhdGUgdG9nZ2xlcywgc28gaWYgeW91IHNjcm9sbCBpbW1lZGlhdGVseSBwYXN0IGJvdGggdGhlIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zIG9mIGEgU2Nyb2xsVHJpZ2dlciAodGh1cyBpbmFjdGl2ZSB0byBpbmFjdGl2ZSksIG5laXRoZXIgaXRzIG9uRW50ZXIgbm9yIG9uTGVhdmUgd2lsbCBiZSBjYWxsZWQuIFRoaXMgaXMgdXNlZnVsIGR1cmluZyBzdGFydHVwLlxuX3N0YXJ0dXAgPSAxLFxuICAgIF9wcm94aWVzID0gW10sXG4gICAgX3Njcm9sbGVycyA9IFtdLFxuICAgIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgX3RpbWUxID0gX2dldFRpbWUoKSxcbiAgICBfbGFzdFNjcm9sbFRpbWUgPSAwLFxuICAgIF9lbmFibGVkID0gMSxcbiAgICBfcGFzc1Rocm91Z2ggPSBmdW5jdGlvbiBfcGFzc1Rocm91Z2godikge1xuICByZXR1cm4gdjtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCBfd2luZG93RXhpc3RzKCkgJiYgKGdzYXAgPSB3aW5kb3cuZ3NhcCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbiAmJiBnc2FwO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGUpIHtcbiAgcmV0dXJuICEhfl9yb290LmluZGV4T2YoZSk7XG59LFxuICAgIF9nZXRQcm94eVByb3AgPSBmdW5jdGlvbiBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHJldHVybiB+X3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSAmJiBfcHJveGllc1tfcHJveGllcy5pbmRleE9mKGVsZW1lbnQpICsgMV1bcHJvcGVydHldO1xufSxcbiAgICBfZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxGdW5jKGVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIHMgPSBfcmVmLnMsXG4gICAgICBzYyA9IF9yZWYuc2M7XG5cbiAgdmFyIGkgPSBfc2Nyb2xsZXJzLmluZGV4T2YoZWxlbWVudCksXG4gICAgICBvZmZzZXQgPSBzYyA9PT0gX3ZlcnRpY2FsLnNjID8gMSA6IDI7XG5cbiAgIX5pICYmIChpID0gX3Njcm9sbGVycy5wdXNoKGVsZW1lbnQpIC0gMSk7XG4gIHJldHVybiBfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdIHx8IChfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdID0gX2dldFByb3h5UHJvcChlbGVtZW50LCBzKSB8fCAoX2lzVmlld3BvcnQoZWxlbWVudCkgPyBzYyA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gZWxlbWVudFtzXSA9IHZhbHVlIDogZWxlbWVudFtzXTtcbiAgfSkpO1xufSxcbiAgICBfZ2V0Qm91bmRzRnVuYyA9IGZ1bmN0aW9uIF9nZXRCb3VuZHNGdW5jKGVsZW1lbnQpIHtcbiAgcmV0dXJuIF9nZXRQcm94eVByb3AoZWxlbWVudCwgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIikgfHwgKF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gZnVuY3Rpb24gKCkge1xuICAgIF93aW5PZmZzZXRzLndpZHRoID0gX3dpbi5pbm5lcldpZHRoO1xuICAgIF93aW5PZmZzZXRzLmhlaWdodCA9IF93aW4uaW5uZXJIZWlnaHQ7XG4gICAgcmV0dXJuIF93aW5PZmZzZXRzO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuICB9KTtcbn0sXG4gICAgX2dldFNpemVGdW5jID0gZnVuY3Rpb24gX2dldFNpemVGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0LCBfcmVmMikge1xuICB2YXIgZCA9IF9yZWYyLmQsXG4gICAgICBkMiA9IF9yZWYyLmQyLFxuICAgICAgYSA9IF9yZWYyLmE7XG4gIHJldHVybiAoYSA9IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYSgpW2RdO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoaXNWaWV3cG9ydCA/IF93aW5bXCJpbm5lclwiICsgZDJdIDogc2Nyb2xsZXJbXCJjbGllbnRcIiArIGQyXSkgfHwgMDtcbiAgfTtcbn0sXG4gICAgX2dldE9mZnNldHNGdW5jID0gZnVuY3Rpb24gX2dldE9mZnNldHNGdW5jKGVsZW1lbnQsIGlzVmlld3BvcnQpIHtcbiAgcmV0dXJuICFpc1ZpZXdwb3J0IHx8IH5fcHJveGllcy5pbmRleE9mKGVsZW1lbnQpID8gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF93aW5PZmZzZXRzO1xuICB9O1xufSxcbiAgICBfbWF4U2Nyb2xsID0gZnVuY3Rpb24gX21heFNjcm9sbChlbGVtZW50LCBfcmVmMykge1xuICB2YXIgcyA9IF9yZWYzLnMsXG4gICAgICBkMiA9IF9yZWYzLmQyLFxuICAgICAgZCA9IF9yZWYzLmQsXG4gICAgICBhID0gX3JlZjMuYTtcbiAgcmV0dXJuIChzID0gXCJzY3JvbGxcIiArIGQyKSAmJiAoYSA9IF9nZXRQcm94eVByb3AoZWxlbWVudCwgcykpID8gYSgpIC0gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkoKVtkXSA6IF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gTWF0aC5tYXgoX2RvY0VsW3NdLCBfYm9keVtzXSkgLSAoX3dpbltcImlubmVyXCIgKyBkMl0gfHwgX2RvY0VsW1wiY2xpZW50XCIgKyBkMl0gfHwgX2JvZHlbXCJjbGllbnRcIiArIGQyXSkgOiBlbGVtZW50W3NdIC0gZWxlbWVudFtcIm9mZnNldFwiICsgZDJdO1xufSxcbiAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoID0gZnVuY3Rpb24gX2l0ZXJhdGVBdXRvUmVmcmVzaChmdW5jLCBldmVudHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYXV0b1JlZnJlc2gubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAoIWV2ZW50cyB8fCB+ZXZlbnRzLmluZGV4T2YoX2F1dG9SZWZyZXNoW2kgKyAxXSkpICYmIGZ1bmMoX2F1dG9SZWZyZXNoW2ldLCBfYXV0b1JlZnJlc2hbaSArIDFdLCBfYXV0b1JlZnJlc2hbaSArIDJdKTtcbiAgfVxufSxcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2NhbGxJZkZ1bmMgPSBmdW5jdGlvbiBfY2FsbElmRnVuYyh2YWx1ZSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpICYmIHZhbHVlKCk7XG59LFxuICAgIF9jb21iaW5lRnVuYyA9IGZ1bmN0aW9uIF9jb21iaW5lRnVuYyhmMSwgZjIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0MSA9IF9jYWxsSWZGdW5jKGYxKSxcbiAgICAgICAgcmVzdWx0MiA9IF9jYWxsSWZGdW5jKGYyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfY2FsbElmRnVuYyhyZXN1bHQxKTtcblxuICAgICAgX2NhbGxJZkZ1bmMocmVzdWx0Mik7XG4gICAgfTtcbiAgfTtcbn0sXG4gICAgX2FicyA9IE1hdGguYWJzLFxuICAgIF9zY3JvbGxMZWZ0ID0gXCJzY3JvbGxMZWZ0XCIsXG4gICAgX3Njcm9sbFRvcCA9IFwic2Nyb2xsVG9wXCIsXG4gICAgX2xlZnQgPSBcImxlZnRcIixcbiAgICBfdG9wID0gXCJ0b3BcIixcbiAgICBfcmlnaHQgPSBcInJpZ2h0XCIsXG4gICAgX2JvdHRvbSA9IFwiYm90dG9tXCIsXG4gICAgX3dpZHRoID0gXCJ3aWR0aFwiLFxuICAgIF9oZWlnaHQgPSBcImhlaWdodFwiLFxuICAgIF9SaWdodCA9IFwiUmlnaHRcIixcbiAgICBfTGVmdCA9IFwiTGVmdFwiLFxuICAgIF9Ub3AgPSBcIlRvcFwiLFxuICAgIF9Cb3R0b20gPSBcIkJvdHRvbVwiLFxuICAgIF9wYWRkaW5nID0gXCJwYWRkaW5nXCIsXG4gICAgX21hcmdpbiA9IFwibWFyZ2luXCIsXG4gICAgX1dpZHRoID0gXCJXaWR0aFwiLFxuICAgIF9IZWlnaHQgPSBcIkhlaWdodFwiLFxuICAgIF9weCA9IFwicHhcIixcbiAgICBfaG9yaXpvbnRhbCA9IHtcbiAgczogX3Njcm9sbExlZnQsXG4gIHA6IF9sZWZ0LFxuICBwMjogX0xlZnQsXG4gIG9zOiBfcmlnaHQsXG4gIG9zMjogX1JpZ2h0LFxuICBkOiBfd2lkdGgsXG4gIGQyOiBfV2lkdGgsXG4gIGE6IFwieFwiLFxuICBzYzogZnVuY3Rpb24gc2ModmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF93aW4uc2Nyb2xsVG8odmFsdWUsIF92ZXJ0aWNhbC5zYygpKSA6IF93aW4ucGFnZVhPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsTGVmdF0gfHwgX2RvY0VsW19zY3JvbGxMZWZ0XSB8fCBfYm9keVtfc2Nyb2xsTGVmdF0gfHwgMDtcbiAgfVxufSxcbiAgICBfdmVydGljYWwgPSB7XG4gIHM6IF9zY3JvbGxUb3AsXG4gIHA6IF90b3AsXG4gIHAyOiBfVG9wLFxuICBvczogX2JvdHRvbSxcbiAgb3MyOiBfQm90dG9tLFxuICBkOiBfaGVpZ2h0LFxuICBkMjogX0hlaWdodCxcbiAgYTogXCJ5XCIsXG4gIG9wOiBfaG9yaXpvbnRhbCxcbiAgc2M6IGZ1bmN0aW9uIHNjKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKF9ob3Jpem9udGFsLnNjKCksIHZhbHVlKSA6IF93aW4ucGFnZVlPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsVG9wXSB8fCBfZG9jRWxbX3Njcm9sbFRvcF0gfHwgX2JvZHlbX3Njcm9sbFRvcF0gfHwgMDtcbiAgfVxufSxcbiAgICBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIF93aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0sXG4gICAgX21ha2VQb3NpdGlvbmFibGUgPSBmdW5jdGlvbiBfbWFrZVBvc2l0aW9uYWJsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiA/IFwiYWJzb2x1dGVcIiA6IFwicmVsYXRpdmVcIjtcbn0sXG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBoYXMgcG9zaXRpb246IGFic29sdXRlLCBsZWF2ZSB0aGF0LCBvdGhlcndpc2UgbWFrZSBpdCBwb3NpdGlvbjogcmVsYXRpdmVcbl9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgLy9faXNJblZpZXdwb3J0ID0gZWxlbWVudCA9PiAoZWxlbWVudCA9IF9nZXRCb3VuZHMoZWxlbWVudCkpICYmICEoZWxlbWVudC50b3AgPiAoX3dpbi5pbm5lckhlaWdodCB8fCBfZG9jRWwuY2xpZW50SGVpZ2h0KSB8fCBlbGVtZW50LmJvdHRvbSA8IDAgfHwgZWxlbWVudC5sZWZ0ID4gKF93aW4uaW5uZXJXaWR0aCB8fCBfZG9jRWwuY2xpZW50V2lkdGgpIHx8IGVsZW1lbnQucmlnaHQgPCAwKSAmJiBlbGVtZW50LFxuX2dldEJvdW5kcyA9IGZ1bmN0aW9uIF9nZXRCb3VuZHMoZWxlbWVudCwgd2l0aG91dFRyYW5zZm9ybXMpIHtcbiAgdmFyIHR3ZWVuID0gd2l0aG91dFRyYW5zZm9ybXMgJiYgX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudClbX3RyYW5zZm9ybVByb3BdICE9PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiICYmIGdzYXAudG8oZWxlbWVudCwge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB4UGVyY2VudDogMCxcbiAgICB5UGVyY2VudDogMCxcbiAgICByb3RhdGlvbjogMCxcbiAgICByb3RhdGlvblg6IDAsXG4gICAgcm90YXRpb25ZOiAwLFxuICAgIHNjYWxlOiAxLFxuICAgIHNrZXdYOiAwLFxuICAgIHNrZXdZOiAwXG4gIH0pLnByb2dyZXNzKDEpLFxuICAgICAgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdHdlZW4gJiYgdHdlZW4ucHJvZ3Jlc3MoMCkua2lsbCgpO1xuICByZXR1cm4gYm91bmRzO1xufSxcbiAgICBfZ2V0U2l6ZSA9IGZ1bmN0aW9uIF9nZXRTaXplKGVsZW1lbnQsIF9yZWY0KSB7XG4gIHZhciBkMiA9IF9yZWY0LmQyO1xuICByZXR1cm4gZWxlbWVudFtcIm9mZnNldFwiICsgZDJdIHx8IGVsZW1lbnRbXCJjbGllbnRcIiArIGQyXSB8fCAwO1xufSxcbiAgICBfZ2V0TGFiZWxzID0gZnVuY3Rpb24gX2dldExhYmVscyhhbmltYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIGxhYmVscyA9IGFuaW1hdGlvbi5sYWJlbHMsXG4gICAgICAgIGR1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCksXG4gICAgICAgIHA7XG5cbiAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICBhLnB1c2gobGFiZWxzW3BdIC8gZHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBnc2FwLnV0aWxzLnNuYXAoYSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICBfbXVsdGlMaXN0ZW5lciA9IGZ1bmN0aW9uIF9tdWx0aUxpc3RlbmVyKGZ1bmMsIGVsZW1lbnQsIHR5cGVzLCBjYWxsYmFjaykge1xuICByZXR1cm4gdHlwZXMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICByZXR1cm4gZnVuYyhlbGVtZW50LCB0eXBlLCBjYWxsYmFjayk7XG4gIH0pO1xufSxcbiAgICBfYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBfYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYykge1xuICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYykge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpO1xufSxcbiAgICBfbWFya2VyRGVmYXVsdHMgPSB7XG4gIHN0YXJ0Q29sb3I6IFwiZ3JlZW5cIixcbiAgZW5kQ29sb3I6IFwicmVkXCIsXG4gIGluZGVudDogMCxcbiAgZm9udFNpemU6IFwiMTZweFwiLFxuICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgdG9nZ2xlQWN0aW9uczogXCJwbGF5XCIsXG4gIGFudGljaXBhdGVQaW46IDBcbn0sXG4gICAgX2tleXdvcmRzID0ge1xuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIGNlbnRlcjogMC41LFxuICBib3R0b206IDEsXG4gIHJpZ2h0OiAxXG59LFxuICAgIF9vZmZzZXRUb1B4ID0gZnVuY3Rpb24gX29mZnNldFRvUHgodmFsdWUsIHNpemUpIHtcbiAgaWYgKF9pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgZXFJbmRleCA9IHZhbHVlLmluZGV4T2YoXCI9XCIpLFxuICAgICAgICByZWxhdGl2ZSA9IH5lcUluZGV4ID8gKyh2YWx1ZS5jaGFyQXQoZXFJbmRleCAtIDEpICsgMSkgKiBwYXJzZUZsb2F0KHZhbHVlLnN1YnN0cihlcUluZGV4ICsgMSkpIDogMDtcblxuICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgdmFsdWUuaW5kZXhPZihcIiVcIikgPiBlcUluZGV4ICYmIChyZWxhdGl2ZSAqPSBzaXplIC8gMTAwKTtcbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIGVxSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHJlbGF0aXZlICsgKHZhbHVlIGluIF9rZXl3b3JkcyA/IF9rZXl3b3Jkc1t2YWx1ZV0gKiBzaXplIDogfnZhbHVlLmluZGV4T2YoXCIlXCIpID8gcGFyc2VGbG9hdCh2YWx1ZSkgKiBzaXplIC8gMTAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59LFxuICAgIF9jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbiBfY3JlYXRlTWFya2VyKHR5cGUsIG5hbWUsIGNvbnRhaW5lciwgZGlyZWN0aW9uLCBfcmVmNSwgb2Zmc2V0LCBtYXRjaFdpZHRoRWwpIHtcbiAgdmFyIHN0YXJ0Q29sb3IgPSBfcmVmNS5zdGFydENvbG9yLFxuICAgICAgZW5kQ29sb3IgPSBfcmVmNS5lbmRDb2xvcixcbiAgICAgIGZvbnRTaXplID0gX3JlZjUuZm9udFNpemUsXG4gICAgICBpbmRlbnQgPSBfcmVmNS5pbmRlbnQsXG4gICAgICBmb250V2VpZ2h0ID0gX3JlZjUuZm9udFdlaWdodDtcblxuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSBfaXNWaWV3cG9ydChjb250YWluZXIpIHx8IF9nZXRQcm94eVByb3AoY29udGFpbmVyLCBcInBpblR5cGVcIikgPT09IFwiZml4ZWRcIixcbiAgICAgIGlzU2Nyb2xsZXIgPSB0eXBlLmluZGV4T2YoXCJzY3JvbGxlclwiKSAhPT0gLTEsXG4gICAgICBwYXJlbnQgPSB1c2VGaXhlZFBvc2l0aW9uID8gX2JvZHkgOiBjb250YWluZXIsXG4gICAgICBpc1N0YXJ0ID0gdHlwZS5pbmRleE9mKFwic3RhcnRcIikgIT09IC0xLFxuICAgICAgY29sb3IgPSBpc1N0YXJ0ID8gc3RhcnRDb2xvciA6IGVuZENvbG9yLFxuICAgICAgY3NzID0gXCJib3JkZXItY29sb3I6XCIgKyBjb2xvciArIFwiO2ZvbnQtc2l6ZTpcIiArIGZvbnRTaXplICsgXCI7Y29sb3I6XCIgKyBjb2xvciArIFwiO2ZvbnQtd2VpZ2h0OlwiICsgZm9udFdlaWdodCArIFwiO3BvaW50ZXItZXZlbnRzOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWYsQXJpYWw7ei1pbmRleDoxMDAwO3BhZGRpbmc6NHB4IDhweDtib3JkZXItd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7XCI7XG5cbiAgY3NzICs9IFwicG9zaXRpb246XCIgKyAoaXNTY3JvbGxlciAmJiB1c2VGaXhlZFBvc2l0aW9uID8gXCJmaXhlZDtcIiA6IFwiYWJzb2x1dGU7XCIpO1xuICAoaXNTY3JvbGxlciB8fCAhdXNlRml4ZWRQb3NpdGlvbikgJiYgKGNzcyArPSAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyBfcmlnaHQgOiBfYm90dG9tKSArIFwiOlwiICsgKG9mZnNldCArIHBhcnNlRmxvYXQoaW5kZW50KSkgKyBcInB4O1wiKTtcbiAgbWF0Y2hXaWR0aEVsICYmIChjc3MgKz0gXCJib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOlwiICsgbWF0Y2hXaWR0aEVsLm9mZnNldFdpZHRoICsgXCJweDtcIik7XG4gIGUuX2lzU3RhcnQgPSBpc1N0YXJ0O1xuICBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3NhcC1tYXJrZXItXCIgKyB0eXBlKTtcbiAgZS5zdHlsZS5jc3NUZXh0ID0gY3NzO1xuICBlLmlubmVyVGV4dCA9IG5hbWUgfHwgbmFtZSA9PT0gMCA/IHR5cGUgKyBcIi1cIiArIG5hbWUgOiB0eXBlO1xuICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGUsIHBhcmVudC5jaGlsZHJlblswXSk7XG4gIGUuX29mZnNldCA9IGVbXCJvZmZzZXRcIiArIGRpcmVjdGlvbi5vcC5kMl07XG5cbiAgX3Bvc2l0aW9uTWFya2VyKGUsIDAsIGRpcmVjdGlvbiwgaXNTdGFydCk7XG5cbiAgcmV0dXJuIGU7XG59LFxuICAgIF9wb3NpdGlvbk1hcmtlciA9IGZ1bmN0aW9uIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHN0YXJ0LCBkaXJlY3Rpb24sIGZsaXBwZWQpIHtcbiAgdmFyIHZhcnMgPSB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiXG4gIH0sXG4gICAgICBzaWRlID0gZGlyZWN0aW9uW2ZsaXBwZWQgPyBcIm9zMlwiIDogXCJwMlwiXSxcbiAgICAgIG9wcG9zaXRlU2lkZSA9IGRpcmVjdGlvbltmbGlwcGVkID8gXCJwMlwiIDogXCJvczJcIl07XG4gIG1hcmtlci5faXNGbGlwcGVkID0gZmxpcHBlZDtcbiAgdmFyc1tkaXJlY3Rpb24uYSArIFwiUGVyY2VudFwiXSA9IGZsaXBwZWQgPyAtMTAwIDogMDtcbiAgdmFyc1tkaXJlY3Rpb24uYV0gPSBmbGlwcGVkID8gMSA6IDA7XG4gIHZhcnNbXCJib3JkZXJcIiArIHNpZGUgKyBfV2lkdGhdID0gMTtcbiAgdmFyc1tcImJvcmRlclwiICsgb3Bwb3NpdGVTaWRlICsgX1dpZHRoXSA9IDA7XG4gIHZhcnNbZGlyZWN0aW9uLnBdID0gc3RhcnQ7XG4gIGdzYXAuc2V0KG1hcmtlciwgdmFycyk7XG59LFxuICAgIF90cmlnZ2VycyA9IFtdLFxuICAgIF9pZHMgPSB7fSxcbiAgICBfc3luYyA9IGZ1bmN0aW9uIF9zeW5jKCkge1xuICByZXR1cm4gX3JlcXVlc3QgfHwgKF9yZXF1ZXN0ID0gX3JhZihfdXBkYXRlQWxsKSk7XG59LFxuICAgIF9vblNjcm9sbCA9IGZ1bmN0aW9uIF9vblNjcm9sbCgpIHtcbiAgaWYgKCFfcmVxdWVzdCkge1xuICAgIF9yZXF1ZXN0ID0gX3JhZihfdXBkYXRlQWxsKTtcbiAgICBfbGFzdFNjcm9sbFRpbWUgfHwgX2Rpc3BhdGNoKFwic2Nyb2xsU3RhcnRcIik7XG4gICAgX2xhc3RTY3JvbGxUaW1lID0gX2dldFRpbWUoKTtcbiAgfVxufSxcbiAgICBfb25SZXNpemUgPSBmdW5jdGlvbiBfb25SZXNpemUoKSB7XG4gIHJldHVybiAhX3JlZnJlc2hpbmcgJiYgX3Jlc2l6ZURlbGF5LnJlc3RhcnQodHJ1ZSk7XG59LFxuICAgIC8vIGlnbm9yZSByZXNpemVzIHRyaWdnZXJlZCBieSByZWZyZXNoKClcbl9saXN0ZW5lcnMgPSB7fSxcbiAgICBfZW1wdHlBcnJheSA9IFtdLFxuICAgIF9tZWRpYSA9IFtdLFxuICAgIF9jcmVhdGluZ01lZGlhLFxuICAgIC8vIHdoZW4gU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhKCkgaXMgY2FsbGVkLCB3ZSByZWNvcmQgdGhlIGN1cnJlbnQgbWVkaWEga2V5IGhlcmUgKGxpa2UgXCIobWluLXdpZHRoOiA4MDBweClcIikgc28gdGhhdCB3ZSBjYW4gYXNzaWduIGl0IHRvIGV2ZXJ5dGhpbmcgdGhhdCdzIGNyZWF0ZWQgZHVyaW5nIHRoYXQgY2FsbC4gVGhlbiB3ZSBjYW4gcmV2ZXJ0IGp1c3QgdGhvc2Ugd2hlbiBuZWNlc3NhcnkuIEluIHRoZSBTY3JvbGxUcmlnZ2VyJ3MgaW5pdCgpIGNhbGwsIHRoZSBfY3JlYXRpbmdNZWRpYSBpcyByZWNvcmRlZCBhcyBhIFwibWVkaWFcIiBwcm9wZXJ0eSBvbiB0aGUgaW5zdGFuY2UuXG5fbGFzdE1lZGlhVGljayxcbiAgICBfb25NZWRpYUNoYW5nZSA9IGZ1bmN0aW9uIF9vbk1lZGlhQ2hhbmdlKGUpIHtcbiAgdmFyIHRpY2sgPSBnc2FwLnRpY2tlci5mcmFtZSxcbiAgICAgIG1hdGNoZXMgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGlmIChfbGFzdE1lZGlhVGljayAhPT0gdGljayB8fCBfc3RhcnR1cCkge1xuICAgIF9yZXZlcnRBbGwoKTtcblxuICAgIGZvciAoOyBpIDwgX21lZGlhLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBfd2luLm1hdGNoTWVkaWEoX21lZGlhW2ldKS5tYXRjaGVzID8gbWF0Y2hlcy5wdXNoKGkpIDogX3JldmVydEFsbCgxLCBfbWVkaWFbaV0pIHx8IF9pc0Z1bmN0aW9uKF9tZWRpYVtpICsgMl0pICYmIF9tZWRpYVtpICsgMl0oKTsgLy8gRmlyZWZveCBkb2Vzbid0IHVwZGF0ZSB0aGUgXCJtYXRjaGVzXCIgcHJvcGVydHkgb2YgdGhlIE1lZGlhUXVlcnlMaXN0IG9iamVjdCBjb3JyZWN0bHkgLSBpdCBvbmx5IGRvZXMgc28gYXMgaXQgY2FsbHMgaXRzIGNoYW5nZSBoYW5kbGVyIC0gc28gd2UgbXVzdCByZS1jcmVhdGUgYSBtZWRpYSBxdWVyeSBoZXJlIHRvIGVuc3VyZSBpdCdzIGFjY3VyYXRlLlxuICAgIH1cblxuICAgIF9yZXZlcnRSZWNvcmRlZCgpOyAvLyBpbiBjYXNlIGtpbGxpbmcvcmV2ZXJ0aW5nIGFueSBvZiB0aGUgYW5pbWF0aW9ucyBhY3R1YWxseSBhZGRlZCBpbmxpbmUgc3R5bGVzIGJhY2suXG5cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfY3JlYXRpbmdNZWRpYSA9IF9tZWRpYVttYXRjaGVzW2ldXTtcbiAgICAgIF9tZWRpYVttYXRjaGVzW2ldICsgMl0gPSBfbWVkaWFbbWF0Y2hlc1tpXSArIDFdKGUpO1xuICAgIH1cblxuICAgIF9jcmVhdGluZ01lZGlhID0gMDtcblxuICAgIF9yZWZyZXNoQWxsKDAsIDEpO1xuXG4gICAgX2xhc3RNZWRpYVRpY2sgPSB0aWNrO1xuXG4gICAgX2Rpc3BhdGNoKFwibWF0Y2hNZWRpYVwiKTtcbiAgfVxufSxcbiAgICBfc29mdFJlZnJlc2ggPSBmdW5jdGlvbiBfc29mdFJlZnJlc2goKSB7XG4gIHJldHVybiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKSB8fCBfcmVmcmVzaEFsbCh0cnVlKTtcbn0sXG4gICAgX2Rpc3BhdGNoID0gZnVuY3Rpb24gX2Rpc3BhdGNoKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnNbdHlwZV0gJiYgX2xpc3RlbmVyc1t0eXBlXS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZigpO1xuICB9KSB8fCBfZW1wdHlBcnJheTtcbn0sXG4gICAgX3NhdmVkU3R5bGVzID0gW10sXG4gICAgLy8gd2hlbiBTY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMoKSBpcyBjYWxsZWQsIHRoZSBpbmxpbmUgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiB0aGlzIEFycmF5IGluIGEgc2VxdWVudGlhbCBmb3JtYXQgbGlrZSBbZWxlbWVudCwgY3NzVGV4dCwgZ3NDYWNoZSwgbWVkaWFdLiBUaGlzIGtlZXBzIGl0IHZlcnkgbWVtb3J5LWVmZmljaWVudCBhbmQgZmFzdCB0byBpdGVyYXRlIHRocm91Z2guXG5fcmV2ZXJ0UmVjb3JkZWQgPSBmdW5jdGlvbiBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfc2F2ZWRTdHlsZXMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICBpZiAoIW1lZGlhIHx8IF9zYXZlZFN0eWxlc1tpICsgM10gPT09IG1lZGlhKSB7XG4gICAgICBfc2F2ZWRTdHlsZXNbaV0uc3R5bGUuY3NzVGV4dCA9IF9zYXZlZFN0eWxlc1tpICsgMV07XG4gICAgICBfc2F2ZWRTdHlsZXNbaSArIDJdLnVuY2FjaGUgPSAxO1xuICAgIH1cbiAgfVxufSxcbiAgICBfcmV2ZXJ0QWxsID0gZnVuY3Rpb24gX3JldmVydEFsbChraWxsLCBtZWRpYSkge1xuICB2YXIgdHJpZ2dlcjtcblxuICBmb3IgKF9pID0gMDsgX2kgPCBfdHJpZ2dlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdHJpZ2dlciA9IF90cmlnZ2Vyc1tfaV07XG5cbiAgICBpZiAoIW1lZGlhIHx8IHRyaWdnZXIubWVkaWEgPT09IG1lZGlhKSB7XG4gICAgICBpZiAoa2lsbCkge1xuICAgICAgICB0cmlnZ2VyLmtpbGwoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmlnZ2VyLnNjcm9sbC5yZWMgfHwgKHRyaWdnZXIuc2Nyb2xsLnJlYyA9IHRyaWdnZXIuc2Nyb2xsKCkpOyAvLyByZWNvcmQgdGhlIHNjcm9sbCBwb3NpdGlvbnMgc28gdGhhdCBpbiBlYWNoIHJlZnJlc2goKSB3ZSBjYW4gZW5zdXJlIHRoYXQgaXQgZG9lc24ndCBzaGlmdC4gUmVtZW1iZXIsIHBpbm5pbmcgY2FuIG1ha2UgdGhpbmdzIGNoYW5nZSBhcm91bmQsIGVzcGVjaWFsbHkgaWYgdGhlIHNhbWUgZWxlbWVudCBpcyBwaW5uZWQgbXVsdGlwbGUgdGltZXMuIElmIG9uZSB3YXMgYWxyZWFkeSByZWNvcmRlZCwgZG9uJ3QgcmUtcmVjb3JkIGJlY2F1c2UgdW5waW5uaW5nIG1heSBoYXZlIG9jY3VycmVkIGFuZCBtYWRlIGl0IHNob3J0ZXIuXG5cbiAgICAgICAgdHJpZ2dlci5yZXZlcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpO1xuXG4gIG1lZGlhIHx8IF9kaXNwYXRjaChcInJldmVydFwiKTtcbn0sXG4gICAgX3JlZnJlc2hBbGwgPSBmdW5jdGlvbiBfcmVmcmVzaEFsbChmb3JjZSwgc2tpcFJldmVydCkge1xuICBpZiAoX2xhc3RTY3JvbGxUaW1lICYmICFmb3JjZSkge1xuICAgIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInNjcm9sbEVuZFwiLCBfc29mdFJlZnJlc2gpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlZnJlc2hJbml0cyA9IF9kaXNwYXRjaChcInJlZnJlc2hJbml0XCIpO1xuXG4gIF9zb3J0ICYmIFNjcm9sbFRyaWdnZXIuc29ydCgpO1xuICBza2lwUmV2ZXJ0IHx8IF9yZXZlcnRBbGwoKTtcblxuICBmb3IgKF9pID0gMDsgX2kgPCBfdHJpZ2dlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgX3RyaWdnZXJzW19pXS5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoSW5pdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQucmVuZGVyICYmIHJlc3VsdC5yZW5kZXIoLTEpO1xuICB9KTsgLy8gaWYgdGhlIG9uUmVmcmVzaEluaXQoKSByZXR1cm5zIGFuIGFuaW1hdGlvbiAodHlwaWNhbGx5IGEgZ3NhcC5zZXQoKSksIHJldmVydCBpdC4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIHB1dCB0aGluZ3MgaW4gYSBjZXJ0YWluIHNwb3QgYmVmb3JlIHJlZnJlc2hpbmcgZm9yIG1lYXN1cmVtZW50IHB1cnBvc2VzLCBhbmQgdGhlbiBwdXQgdGhpbmdzIGJhY2suXG5cbiAgX2kgPSBfdHJpZ2dlcnMubGVuZ3RoO1xuXG4gIHdoaWxlIChfaS0tKSB7XG4gICAgX3RyaWdnZXJzW19pXS5zY3JvbGwucmVjID0gMDtcbiAgfVxuXG4gIF9kaXNwYXRjaChcInJlZnJlc2hcIik7XG59LFxuICAgIF9sYXN0U2Nyb2xsID0gMCxcbiAgICBfZGlyZWN0aW9uID0gMSxcbiAgICBfdXBkYXRlQWxsID0gZnVuY3Rpb24gX3VwZGF0ZUFsbCgpIHtcbiAgdmFyIGwgPSBfdHJpZ2dlcnMubGVuZ3RoLFxuICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICByZWNvcmRWZWxvY2l0eSA9IHRpbWUgLSBfdGltZTEgPj0gNTAsXG4gICAgICBzY3JvbGwgPSBsICYmIF90cmlnZ2Vyc1swXS5zY3JvbGwoKTtcblxuICBfZGlyZWN0aW9uID0gX2xhc3RTY3JvbGwgPiBzY3JvbGwgPyAtMSA6IDE7XG4gIF9sYXN0U2Nyb2xsID0gc2Nyb2xsO1xuXG4gIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgIGlmIChfbGFzdFNjcm9sbFRpbWUgJiYgIV9wb2ludGVySXNEb3duICYmIHRpbWUgLSBfbGFzdFNjcm9sbFRpbWUgPiAyMDApIHtcbiAgICAgIF9sYXN0U2Nyb2xsVGltZSA9IDA7XG5cbiAgICAgIF9kaXNwYXRjaChcInNjcm9sbEVuZFwiKTtcbiAgICB9XG5cbiAgICBfdGltZTIgPSBfdGltZTE7XG4gICAgX3RpbWUxID0gdGltZTtcbiAgfVxuXG4gIGlmIChfZGlyZWN0aW9uIDwgMCkge1xuICAgIF9pID0gbDtcblxuICAgIHdoaWxlIChfaS0tKSB7XG4gICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICB9XG5cbiAgICBfZGlyZWN0aW9uID0gMTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKF9pID0gMDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICB9XG4gIH1cblxuICBfcmVxdWVzdCA9IDA7XG59LFxuICAgIF9wcm9wTmFtZXNUb0NvcHkgPSBbX2xlZnQsIF90b3AsIF9ib3R0b20sIF9yaWdodCwgX21hcmdpbiArIF9Cb3R0b20sIF9tYXJnaW4gKyBfUmlnaHQsIF9tYXJnaW4gKyBfVG9wLCBfbWFyZ2luICsgX0xlZnQsIFwiZGlzcGxheVwiLCBcImZsZXhTaHJpbmtcIiwgXCJmbG9hdFwiXSxcbiAgICBfc3RhdGVQcm9wcyA9IF9wcm9wTmFtZXNUb0NvcHkuY29uY2F0KFtfd2lkdGgsIF9oZWlnaHQsIFwiYm94U2l6aW5nXCIsIFwibWF4XCIgKyBfV2lkdGgsIFwibWF4XCIgKyBfSGVpZ2h0LCBcInBvc2l0aW9uXCIsIF9tYXJnaW4sIF9wYWRkaW5nLCBfcGFkZGluZyArIF9Ub3AsIF9wYWRkaW5nICsgX1JpZ2h0LCBfcGFkZGluZyArIF9Cb3R0b20sIF9wYWRkaW5nICsgX0xlZnRdKSxcbiAgICBfc3dhcFBpbk91dCA9IGZ1bmN0aW9uIF9zd2FwUGluT3V0KHBpbiwgc3BhY2VyLCBzdGF0ZSkge1xuICBfc2V0U3RhdGUoc3RhdGUpO1xuXG4gIGlmIChwaW4ucGFyZW50Tm9kZSA9PT0gc3BhY2VyKSB7XG4gICAgdmFyIHBhcmVudCA9IHNwYWNlci5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShwaW4sIHNwYWNlcik7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoc3BhY2VyKTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3N3YXBQaW5JbiA9IGZ1bmN0aW9uIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzLCBzcGFjZXJTdGF0ZSkge1xuICBpZiAocGluLnBhcmVudE5vZGUgIT09IHNwYWNlcikge1xuICAgIHZhciBpID0gX3Byb3BOYW1lc1RvQ29weS5sZW5ndGgsXG4gICAgICAgIHNwYWNlclN0eWxlID0gc3BhY2VyLnN0eWxlLFxuICAgICAgICBwaW5TdHlsZSA9IHBpbi5zdHlsZSxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHAgPSBfcHJvcE5hbWVzVG9Db3B5W2ldO1xuICAgICAgc3BhY2VyU3R5bGVbcF0gPSBjc1twXTtcbiAgICB9XG5cbiAgICBzcGFjZXJTdHlsZS5wb3NpdGlvbiA9IGNzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG4gICAgY3MuZGlzcGxheSA9PT0gXCJpbmxpbmVcIiAmJiAoc3BhY2VyU3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIHBpblN0eWxlW19ib3R0b21dID0gcGluU3R5bGVbX3JpZ2h0XSA9IFwiYXV0b1wiO1xuICAgIHNwYWNlclN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgc3BhY2VyU3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgc3BhY2VyU3R5bGVbX3dpZHRoXSA9IF9nZXRTaXplKHBpbiwgX2hvcml6b250YWwpICsgX3B4O1xuICAgIHNwYWNlclN0eWxlW19oZWlnaHRdID0gX2dldFNpemUocGluLCBfdmVydGljYWwpICsgX3B4O1xuICAgIHNwYWNlclN0eWxlW19wYWRkaW5nXSA9IHBpblN0eWxlW19tYXJnaW5dID0gcGluU3R5bGVbX3RvcF0gPSBwaW5TdHlsZVtfbGVmdF0gPSBcIjBcIjtcblxuICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG5cbiAgICBwaW5TdHlsZVtfd2lkdGhdID0gY3NbX3dpZHRoXTtcbiAgICBwaW5TdHlsZVtfaGVpZ2h0XSA9IGNzW19oZWlnaHRdO1xuICAgIHBpblN0eWxlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcbiAgICBwaW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhY2VyLCBwaW4pO1xuICAgIHNwYWNlci5hcHBlbmRDaGlsZChwaW4pO1xuICB9XG59LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfc2V0U3RhdGUgPSBmdW5jdGlvbiBfc2V0U3RhdGUoc3RhdGUpIHtcbiAgaWYgKHN0YXRlKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUudC5zdHlsZSxcbiAgICAgICAgbCA9IHN0YXRlLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHAsXG4gICAgICAgIHZhbHVlO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGVbaSArIDFdO1xuICAgICAgcCA9IHN0YXRlW2ldO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgc3R5bGVbcF0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVbcF0pIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocC5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldFN0YXRlID0gZnVuY3Rpb24gX2dldFN0YXRlKGVsZW1lbnQpIHtcbiAgLy8gcmV0dXJucyBhbiBhcnJheSB3aXRoIGFsdGVybmF0aW5nIHZhbHVlcyBsaWtlIFtwcm9wZXJ0eSwgdmFsdWUsIHByb3BlcnR5LCB2YWx1ZV0gYW5kIGEgXCJ0XCIgcHJvcGVydHkgcG9pbnRpbmcgdG8gdGhlIHRhcmdldCAoZWxlbWVudCkuIE1ha2VzIGl0IGZhc3QgYW5kIGNoZWFwLlxuICB2YXIgbCA9IF9zdGF0ZVByb3BzLmxlbmd0aCxcbiAgICAgIHN0eWxlID0gZWxlbWVudC5zdHlsZSxcbiAgICAgIHN0YXRlID0gW10sXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHN0YXRlLnB1c2goX3N0YXRlUHJvcHNbaV0sIHN0eWxlW19zdGF0ZVByb3BzW2ldXSk7XG4gIH1cblxuICBzdGF0ZS50ID0gZWxlbWVudDtcbiAgcmV0dXJuIHN0YXRlO1xufSxcbiAgICBfY29weVN0YXRlID0gZnVuY3Rpb24gX2NvcHlTdGF0ZShzdGF0ZSwgb3ZlcnJpZGUsIG9taXRPZmZzZXRzKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG4gICAgICBpID0gb21pdE9mZnNldHMgPyA4IDogMCxcbiAgICAgIC8vIHNraXAgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIGlmIG9taXRPZmZzZXRzIGlzIHRydWVcbiAgcDtcblxuICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuICAgIHAgPSBzdGF0ZVtpXTtcbiAgICByZXN1bHQucHVzaChwLCBwIGluIG92ZXJyaWRlID8gb3ZlcnJpZGVbcF0gOiBzdGF0ZVtpICsgMV0pO1xuICB9XG5cbiAgcmVzdWx0LnQgPSBzdGF0ZS50O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfd2luT2Zmc2V0cyA9IHtcbiAgbGVmdDogMCxcbiAgdG9wOiAwXG59LFxuICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24odmFsdWUsIHRyaWdnZXIsIHNjcm9sbGVyU2l6ZSwgZGlyZWN0aW9uLCBzY3JvbGwsIG1hcmtlciwgbWFya2VyU2Nyb2xsZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgc2Nyb2xsZXJNYXgpIHtcbiAgX2lzRnVuY3Rpb24odmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlKHNlbGYpKTtcblxuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5zdWJzdHIoMCwgMykgPT09IFwibWF4XCIpIHtcbiAgICB2YWx1ZSA9IHNjcm9sbGVyTWF4ICsgKHZhbHVlLmNoYXJBdCg0KSA9PT0gXCI9XCIgPyBfb2Zmc2V0VG9QeChcIjBcIiArIHZhbHVlLnN1YnN0cigzKSwgc2Nyb2xsZXJTaXplKSA6IDApO1xuICB9XG5cbiAgaWYgKCFfaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgX2lzRnVuY3Rpb24odHJpZ2dlcikgJiYgKHRyaWdnZXIgPSB0cmlnZ2VyKHNlbGYpKTtcblxuICAgIHZhciBlbGVtZW50ID0gX3RvQXJyYXkodHJpZ2dlcilbMF0gfHwgX2JvZHksXG4gICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoZWxlbWVudCkgfHwge30sXG4gICAgICAgIG9mZnNldHMgPSB2YWx1ZS5zcGxpdChcIiBcIiksXG4gICAgICAgIGxvY2FsT2Zmc2V0LFxuICAgICAgICBnbG9iYWxPZmZzZXQsXG4gICAgICAgIGRpc3BsYXk7XG5cbiAgICBpZiAoKCFib3VuZHMgfHwgIWJvdW5kcy5sZWZ0ICYmICFib3VuZHMudG9wKSAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgLy8gaWYgZGlzcGxheSBpcyBcIm5vbmVcIiwgaXQgd29uJ3QgcmVwb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHByb3Blcmx5XG4gICAgICBkaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgICAgIGRpc3BsYXkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IDogZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgfVxuXG4gICAgbG9jYWxPZmZzZXQgPSBfb2Zmc2V0VG9QeChvZmZzZXRzWzBdLCBib3VuZHNbZGlyZWN0aW9uLmRdKTtcbiAgICBnbG9iYWxPZmZzZXQgPSBfb2Zmc2V0VG9QeChvZmZzZXRzWzFdIHx8IFwiMFwiLCBzY3JvbGxlclNpemUpO1xuICAgIHZhbHVlID0gYm91bmRzW2RpcmVjdGlvbi5wXSAtIHNjcm9sbGVyQm91bmRzW2RpcmVjdGlvbi5wXSAtIGJvcmRlcldpZHRoICsgbG9jYWxPZmZzZXQgKyBzY3JvbGwgLSBnbG9iYWxPZmZzZXQ7XG4gICAgbWFya2VyU2Nyb2xsZXIgJiYgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBnbG9iYWxPZmZzZXQsIGRpcmVjdGlvbiwgc2Nyb2xsZXJTaXplIC0gZ2xvYmFsT2Zmc2V0IDwgMjAgfHwgbWFya2VyU2Nyb2xsZXIuX2lzU3RhcnQgJiYgZ2xvYmFsT2Zmc2V0ID4gMjApO1xuICAgIHNjcm9sbGVyU2l6ZSAtPSBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQ7IC8vIGFkanVzdCBmb3IgdGhlIG1hcmtlclxuICB9IGVsc2UgaWYgKG1hcmtlclNjcm9sbGVyKSB7XG4gICAgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gIH1cblxuICBpZiAobWFya2VyKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gdmFsdWUgKyBzY3JvbGxlclNpemUsXG4gICAgICAgIGlzU3RhcnQgPSBtYXJrZXIuX2lzU3RhcnQ7XG4gICAgc2Nyb2xsZXJNYXggPSBcInNjcm9sbFwiICsgZGlyZWN0aW9uLmQyO1xuXG4gICAgX3Bvc2l0aW9uTWFya2VyKG1hcmtlciwgcG9zaXRpb24sIGRpcmVjdGlvbiwgaXNTdGFydCAmJiBwb3NpdGlvbiA+IDIwIHx8ICFpc1N0YXJ0ICYmICh1c2VGaXhlZFBvc2l0aW9uID8gTWF0aC5tYXgoX2JvZHlbc2Nyb2xsZXJNYXhdLCBfZG9jRWxbc2Nyb2xsZXJNYXhdKSA6IG1hcmtlci5wYXJlbnROb2RlW3Njcm9sbGVyTWF4XSkgPD0gcG9zaXRpb24gKyAxKTtcblxuICAgIGlmICh1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICBzY3JvbGxlckJvdW5kcyA9IF9nZXRCb3VuZHMobWFya2VyU2Nyb2xsZXIpO1xuICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiAobWFya2VyLnN0eWxlW2RpcmVjdGlvbi5vcC5wXSA9IHNjcm9sbGVyQm91bmRzW2RpcmVjdGlvbi5vcC5wXSAtIGRpcmVjdGlvbi5vcC5tIC0gbWFya2VyLl9vZmZzZXQgKyBfcHgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbn0sXG4gICAgX3ByZWZpeEV4cCA9IC8oPzp3ZWJraXR8bW96fGxlbmd0aHxjc3NUZXh0KS9pLFxuICAgIF9yZXBhcmVudCA9IGZ1bmN0aW9uIF9yZXBhcmVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XG4gICAgdmFyIHN0eWxlID0gZWxlbWVudC5zdHlsZSxcbiAgICAgICAgcCxcbiAgICAgICAgY3M7XG5cbiAgICBpZiAocGFyZW50ID09PSBfYm9keSkge1xuICAgICAgZWxlbWVudC5fc3RPcmlnID0gc3R5bGUuY3NzVGV4dDsgLy8gcmVjb3JkIG9yaWdpbmFsIGlubGluZSBzdHlsZXMgc28gd2UgY2FuIHJldmVydCB0aGVtIGxhdGVyXG5cbiAgICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICAgIGZvciAocCBpbiBjcykge1xuICAgICAgICAvLyBtdXN0IGNvcHkgYWxsIHJlbGV2YW50IHN0eWxlcyB0byBlbnN1cmUgdGhhdCBub3RoaW5nIGNoYW5nZXMgdmlzdWFsbHkgd2hlbiB3ZSByZXBhcmVudCB0byB0aGUgPGJvZHk+LiBTa2lwIHRoZSB2ZW5kb3IgcHJlZml4ZWQgb25lcy5cbiAgICAgICAgaWYgKCErcCAmJiAhX3ByZWZpeEV4cC50ZXN0KHApICYmIGNzW3BdICYmIHR5cGVvZiBzdHlsZVtwXSA9PT0gXCJzdHJpbmdcIiAmJiBwICE9PSBcIjBcIikge1xuICAgICAgICAgIHN0eWxlW3BdID0gY3NbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuY3NzVGV4dCA9IGVsZW1lbnQuX3N0T3JpZztcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn0sXG4gICAgLy8gcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gdHdlZW4gdGhlIHNjcm9sbCBwb3NpdGlvbiBpbiB0aGUgZGlyZWN0aW9uIHByb3ZpZGVkLCBhbmQgd2hlbiBkb2luZyBzbyBpdCdsbCBhZGQgYSAudHdlZW4gcHJvcGVydHkgdG8gdGhlIEZVTkNUSU9OIGl0c2VsZiwgYW5kIHJlbW92ZSBpdCB3aGVuIHRoZSB0d2VlbiBjb21wbGV0ZXMgb3IgZ2V0cyBraWxsZWQuIFRoaXMgZ2l2ZXMgdXMgYSB3YXkgdG8gaGF2ZSBtdWx0aXBsZSBTY3JvbGxUcmlnZ2VycyB1c2UgYSBjZW50cmFsIGZ1bmN0aW9uIGZvciBhbnkgZ2l2ZW4gc2Nyb2xsZXIgYW5kIHNlZSBpZiB0aGVyZSdzIGEgc2Nyb2xsIHR3ZWVuIHJ1bm5pbmcgKHdoaWNoIHdvdWxkIGFmZmVjdCBpZi9ob3cgdGhpbmdzIGdldCB1cGRhdGVkKVxuX2dldFR3ZWVuQ3JlYXRvciA9IGZ1bmN0aW9uIF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIGRpcmVjdGlvbikge1xuICB2YXIgZ2V0U2Nyb2xsID0gX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICBwcm9wID0gXCJfc2Nyb2xsXCIgKyBkaXJlY3Rpb24ucDIsXG4gICAgICAvLyBhZGQgYSB0d2VlbmFibGUgcHJvcGVydHkgdG8gdGhlIHNjcm9sbGVyIHRoYXQncyBhIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24sIGxpa2UgX3Njcm9sbFRvcCBvciBfc2Nyb2xsTGVmdC4gVGhpcyB3YXksIGlmIHNvbWVvbmUgZG9lcyBnc2FwLmtpbGxUd2VlbnNPZihzY3JvbGxlcikgaXQnbGwga2lsbCB0aGUgc2Nyb2xsIHR3ZWVuLlxuICBsYXN0U2Nyb2xsMSxcbiAgICAgIGxhc3RTY3JvbGwyLFxuICAgICAgZ2V0VHdlZW4gPSBmdW5jdGlvbiBnZXRUd2VlbihzY3JvbGxUbywgdmFycywgaW5pdGlhbFZhbHVlLCBjaGFuZ2UxLCBjaGFuZ2UyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4sXG4gICAgICAgIG9uQ29tcGxldGUgPSB2YXJzLm9uQ29tcGxldGUsXG4gICAgICAgIG1vZGlmaWVycyA9IHt9O1xuICAgIHR3ZWVuICYmIHR3ZWVuLmtpbGwoKTtcbiAgICBsYXN0U2Nyb2xsMSA9IGluaXRpYWxWYWx1ZTtcbiAgICB2YXJzW3Byb3BdID0gc2Nyb2xsVG87XG4gICAgdmFycy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cbiAgICBtb2RpZmllcnNbcHJvcF0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gZ2V0U2Nyb2xsKCk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gbGFzdFNjcm9sbDEgJiYgdmFsdWUgIT09IGxhc3RTY3JvbGwyKSB7XG4gICAgICAgIC8vIGlmIHRoZSB1c2VyIHNjcm9sbHMsIGtpbGwgdGhlIHR3ZWVuLiBpT1MgU2FmYXJpIGludGVybWl0dGVudGx5IG1pc3JlcG9ydHMgdGhlIHNjcm9sbCBwb3NpdGlvbiwgaXQgbWF5IGJlIHRoZSBtb3N0IHJlY2VudGx5LXNldCBvbmUgb3IgdGhlIG9uZSBiZWZvcmUgdGhhdCFcbiAgICAgICAgdHdlZW4ua2lsbCgpO1xuICAgICAgICBnZXRUd2Vlbi50d2VlbiA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGluaXRpYWxWYWx1ZSArIGNoYW5nZTEgKiB0d2Vlbi5yYXRpbyArIGNoYW5nZTIgKiB0d2Vlbi5yYXRpbyAqIHR3ZWVuLnJhdGlvO1xuICAgICAgfVxuXG4gICAgICBsYXN0U2Nyb2xsMiA9IGxhc3RTY3JvbGwxO1xuICAgICAgcmV0dXJuIGxhc3RTY3JvbGwxID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHZhcnMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGdldFR3ZWVuLnR3ZWVuID0gMDtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZS5jYWxsKHR3ZWVuKTtcbiAgICB9O1xuXG4gICAgdHdlZW4gPSBnZXRUd2Vlbi50d2VlbiA9IGdzYXAudG8oc2Nyb2xsZXIsIHZhcnMpO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfTtcblxuICBzY3JvbGxlcltwcm9wXSA9IGdldFNjcm9sbDtcbiAgcmV0dXJuIGdldFR3ZWVuO1xufTtcblxuX2hvcml6b250YWwub3AgPSBfdmVydGljYWw7XG5leHBvcnQgdmFyIFNjcm9sbFRyaWdnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbikge1xuICAgIF9jb3JlSW5pdHRlZCB8fCBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKGdzYXApIHx8IGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXCIpO1xuICAgIHRoaXMuaW5pdCh2YXJzLCBhbmltYXRpb24pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFRyaWdnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzLCBhbmltYXRpb24pIHtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLnZhcnMgJiYgdGhpcy5raWxsKDEpOyAvLyBpbiBjYXNlIGl0J3MgYmVpbmcgaW5pdHRlZCBhZ2FpblxuXG4gICAgaWYgKCFfZW5hYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnJlZnJlc2ggPSB0aGlzLmtpbGwgPSBfcGFzc1Rocm91Z2g7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFycyA9IF9zZXREZWZhdWx0cyhfaXNTdHJpbmcodmFycykgfHwgX2lzTnVtYmVyKHZhcnMpIHx8IHZhcnMubm9kZVR5cGUgPyB7XG4gICAgICB0cmlnZ2VyOiB2YXJzXG4gICAgfSA6IHZhcnMsIF9kZWZhdWx0cyk7XG5cbiAgICB2YXIgZGlyZWN0aW9uID0gdmFycy5ob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4gICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgb25VcGRhdGUgPSBfdmFycy5vblVwZGF0ZSxcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSBfdmFycy50b2dnbGVDbGFzcyxcbiAgICAgICAgaWQgPSBfdmFycy5pZCxcbiAgICAgICAgb25Ub2dnbGUgPSBfdmFycy5vblRvZ2dsZSxcbiAgICAgICAgb25SZWZyZXNoID0gX3ZhcnMub25SZWZyZXNoLFxuICAgICAgICBzY3J1YiA9IF92YXJzLnNjcnViLFxuICAgICAgICB0cmlnZ2VyID0gX3ZhcnMudHJpZ2dlcixcbiAgICAgICAgcGluID0gX3ZhcnMucGluLFxuICAgICAgICBwaW5TcGFjaW5nID0gX3ZhcnMucGluU3BhY2luZyxcbiAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCA9IF92YXJzLmludmFsaWRhdGVPblJlZnJlc2gsXG4gICAgICAgIGFudGljaXBhdGVQaW4gPSBfdmFycy5hbnRpY2lwYXRlUGluLFxuICAgICAgICBvblNjcnViQ29tcGxldGUgPSBfdmFycy5vblNjcnViQ29tcGxldGUsXG4gICAgICAgIG9uU25hcENvbXBsZXRlID0gX3ZhcnMub25TbmFwQ29tcGxldGUsXG4gICAgICAgIG9uY2UgPSBfdmFycy5vbmNlLFxuICAgICAgICBzbmFwID0gX3ZhcnMuc25hcCxcbiAgICAgICAgcGluUmVwYXJlbnQgPSBfdmFycy5waW5SZXBhcmVudCxcbiAgICAgICAgaXNUb2dnbGUgPSAhc2NydWIgJiYgc2NydWIgIT09IDAsXG4gICAgICAgIHNjcm9sbGVyID0gX3RvQXJyYXkodmFycy5zY3JvbGxlciB8fCBfd2luKVswXSxcbiAgICAgICAgc2Nyb2xsZXJDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShzY3JvbGxlciksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydChzY3JvbGxlciksXG4gICAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSBcInBpblR5cGVcIiBpbiB2YXJzID8gdmFycy5waW5UeXBlID09PSBcImZpeGVkXCIgOiBpc1ZpZXdwb3J0IHx8IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwicGluVHlwZVwiKSA9PT0gXCJmaXhlZFwiLFxuICAgICAgICBjYWxsYmFja3MgPSBbdmFycy5vbkVudGVyLCB2YXJzLm9uTGVhdmUsIHZhcnMub25FbnRlckJhY2ssIHZhcnMub25MZWF2ZUJhY2tdLFxuICAgICAgICB0b2dnbGVBY3Rpb25zID0gaXNUb2dnbGUgJiYgdmFycy50b2dnbGVBY3Rpb25zLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgbWFya2VycyA9IFwibWFya2Vyc1wiIGluIHZhcnMgPyB2YXJzLm1hcmtlcnMgOiBfZGVmYXVsdHMubWFya2VycyxcbiAgICAgICAgYm9yZGVyV2lkdGggPSBpc1ZpZXdwb3J0ID8gMCA6IHBhcnNlRmxvYXQoX2dldENvbXB1dGVkU3R5bGUoc2Nyb2xsZXIpW1wiYm9yZGVyXCIgKyBkaXJlY3Rpb24ucDIgKyBfV2lkdGhdKSB8fCAwLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgb25SZWZyZXNoSW5pdCA9IHZhcnMub25SZWZyZXNoSW5pdCAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFycy5vblJlZnJlc2hJbml0KHNlbGYpO1xuICAgIH0sXG4gICAgICAgIGdldFNjcm9sbGVyU2l6ZSA9IF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgZGlyZWN0aW9uKSxcbiAgICAgICAgZ2V0U2Nyb2xsZXJPZmZzZXRzID0gX2dldE9mZnNldHNGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0KSxcbiAgICAgICAgdHdlZW5UbyxcbiAgICAgICAgcGluQ2FjaGUsXG4gICAgICAgIHNuYXBGdW5jLFxuICAgICAgICBpc1JldmVydGVkLFxuICAgICAgICBzY3JvbGwxLFxuICAgICAgICBzY3JvbGwyLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kLFxuICAgICAgICBtYXJrZXJTdGFydCxcbiAgICAgICAgbWFya2VyRW5kLFxuICAgICAgICBtYXJrZXJTdGFydFRyaWdnZXIsXG4gICAgICAgIG1hcmtlckVuZFRyaWdnZXIsXG4gICAgICAgIG1hcmtlclZhcnMsXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSxcbiAgICAgICAgcGluQWN0aXZlU3RhdGUsXG4gICAgICAgIHBpblN0YXRlLFxuICAgICAgICBzcGFjZXIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgcGluR2V0dGVyLFxuICAgICAgICBwaW5TZXR0ZXIsXG4gICAgICAgIHBpblN0YXJ0LFxuICAgICAgICBwaW5DaGFuZ2UsXG4gICAgICAgIHNwYWNpbmdTdGFydCxcbiAgICAgICAgc3BhY2VyU3RhdGUsXG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyLFxuICAgICAgICBtYXJrZXJFbmRTZXR0ZXIsXG4gICAgICAgIGNzLFxuICAgICAgICBzbmFwMSxcbiAgICAgICAgc25hcDIsXG4gICAgICAgIHNjcnViVHdlZW4sXG4gICAgICAgIHNjcnViU21vb3RoLFxuICAgICAgICBzbmFwRHVyQ2xhbXAsXG4gICAgICAgIHNuYXBEZWxheWVkQ2FsbCxcbiAgICAgICAgcHJldlByb2dyZXNzLFxuICAgICAgICBwcmV2U2Nyb2xsLFxuICAgICAgICBwcmV2QW5pbVByb2dyZXNzO1xuXG4gICAgc2VsZi5tZWRpYSA9IF9jcmVhdGluZ01lZGlhO1xuICAgIGFudGljaXBhdGVQaW4gKj0gNDU7XG5cbiAgICBfdHJpZ2dlcnMucHVzaChzZWxmKTtcblxuICAgIHNlbGYuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcbiAgICBzZWxmLnNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pO1xuICAgIHNjcm9sbDEgPSBzZWxmLnNjcm9sbCgpO1xuICAgIHNlbGYudmFycyA9IHZhcnM7XG4gICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IHZhcnMuYW5pbWF0aW9uO1xuICAgIFwicmVmcmVzaFByaW9yaXR5XCIgaW4gdmFycyAmJiAoX3NvcnQgPSAxKTtcbiAgICBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsID0gc2Nyb2xsZXJDYWNoZS50d2VlblNjcm9sbCB8fCB7XG4gICAgICB0b3A6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF92ZXJ0aWNhbCksXG4gICAgICBsZWZ0OiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBfaG9yaXpvbnRhbClcbiAgICB9O1xuICAgIHNlbGYudHdlZW5UbyA9IHR3ZWVuVG8gPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsW2RpcmVjdGlvbi5wXTtcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi52YXJzLmxhenkgPSBmYWxzZTtcbiAgICAgIGFuaW1hdGlvbi5faW5pdHRlZCB8fCBhbmltYXRpb24udmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSAmJiBhbmltYXRpb24ucmVuZGVyKDAsIHRydWUsIHRydWUpO1xuICAgICAgc2VsZi5hbmltYXRpb24gPSBhbmltYXRpb24ucGF1c2UoKTtcbiAgICAgIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyID0gc2VsZjtcbiAgICAgIHNjcnViU21vb3RoID0gX2lzTnVtYmVyKHNjcnViKSAmJiBzY3J1YjtcbiAgICAgIHNjcnViU21vb3RoICYmIChzY3J1YlR3ZWVuID0gZ3NhcC50byhhbmltYXRpb24sIHtcbiAgICAgICAgZWFzZTogXCJwb3dlcjNcIixcbiAgICAgICAgZHVyYXRpb246IHNjcnViU21vb3RoLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgIHJldHVybiBvblNjcnViQ29tcGxldGUgJiYgb25TY3J1YkNvbXBsZXRlKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBzbmFwMSA9IDA7XG4gICAgICBpZCB8fCAoaWQgPSBhbmltYXRpb24udmFycy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKHNuYXApIHtcbiAgICAgIF9pc09iamVjdChzbmFwKSB8fCAoc25hcCA9IHtcbiAgICAgICAgc25hcFRvOiBzbmFwXG4gICAgICB9KTtcbiAgICAgIGdzYXAuc2V0KGlzVmlld3BvcnQgPyBbX2JvZHksIF9kb2NFbF0gOiBzY3JvbGxlciwge1xuICAgICAgICBzY3JvbGxCZWhhdmlvcjogXCJhdXRvXCJcbiAgICAgIH0pOyAvLyBzbW9vdGggc2Nyb2xsaW5nIGRvZXNuJ3Qgd29yayB3aXRoIHNuYXAuXG5cbiAgICAgIHNuYXBGdW5jID0gX2lzRnVuY3Rpb24oc25hcC5zbmFwVG8pID8gc25hcC5zbmFwVG8gOiBzbmFwLnNuYXBUbyA9PT0gXCJsYWJlbHNcIiA/IF9nZXRMYWJlbHMoYW5pbWF0aW9uKSA6IGdzYXAudXRpbHMuc25hcChzbmFwLnNuYXBUbyk7XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBzbmFwLmR1cmF0aW9uIHx8IHtcbiAgICAgICAgbWluOiAwLjEsXG4gICAgICAgIG1heDogMlxuICAgICAgfTtcbiAgICAgIHNuYXBEdXJDbGFtcCA9IF9pc09iamVjdChzbmFwRHVyQ2xhbXApID8gX2NsYW1wKHNuYXBEdXJDbGFtcC5taW4sIHNuYXBEdXJDbGFtcC5tYXgpIDogX2NsYW1wKHNuYXBEdXJDbGFtcCwgc25hcER1ckNsYW1wKTtcbiAgICAgIHNuYXBEZWxheWVkQ2FsbCA9IGdzYXAuZGVsYXllZENhbGwoc25hcC5kZWxheSB8fCBzY3J1YlNtb290aCAvIDIgfHwgMC4xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhzZWxmLmdldFZlbG9jaXR5KCkpIDwgMTAgJiYgIV9wb2ludGVySXNEb3duKSB7XG4gICAgICAgICAgdmFyIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IHNlbGYucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIHZlbG9jaXR5ID0gKHRvdGFsUHJvZ3Jlc3MgLSBzbmFwMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDAsXG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBfYWJzKHZlbG9jaXR5IC8gMikgKiB2ZWxvY2l0eSAvIDAuMTg1LFxuICAgICAgICAgICAgICBuYXR1cmFsRW5kID0gdG90YWxQcm9ncmVzcyArIGNoYW5nZTEsXG4gICAgICAgICAgICAgIGVuZFZhbHVlID0gX2NsYW1wKDAsIDEsIHNuYXBGdW5jKG5hdHVyYWxFbmQsIHNlbGYpKSxcbiAgICAgICAgICAgICAgc2Nyb2xsID0gc2VsZi5zY3JvbGwoKSxcbiAgICAgICAgICAgICAgZW5kU2Nyb2xsID0gTWF0aC5yb3VuZChzdGFydCArIGVuZFZhbHVlICogY2hhbmdlKSxcbiAgICAgICAgICAgICAgdHdlZW4gPSB0d2VlblRvLnR3ZWVuO1xuXG4gICAgICAgICAgaWYgKHNjcm9sbCA8PSBlbmQgJiYgc2Nyb2xsID49IHN0YXJ0ICYmIGVuZFNjcm9sbCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4gJiYgIXR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmRhdGEgPD0gTWF0aC5hYnMoZW5kU2Nyb2xsIC0gc2Nyb2xsKSkge1xuICAgICAgICAgICAgICAvLyB0aGVyZSdzIGFuIG92ZXJsYXBwaW5nIHNuYXAhIFNvIHdlIG11c3QgZmlndXJlIG91dCB3aGljaCBvbmUgaXMgY2xvc2VyIGFuZCBsZXQgdGhhdCB0d2VlbiBsaXZlLlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHR3ZWVuVG8oZW5kU2Nyb2xsLCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzbmFwRHVyQ2xhbXAoX2FicyhNYXRoLm1heChfYWJzKG5hdHVyYWxFbmQgLSB0b3RhbFByb2dyZXNzKSwgX2FicyhlbmRWYWx1ZSAtIHRvdGFsUHJvZ3Jlc3MpKSAqIDAuMTg1IC8gdmVsb2NpdHkgLyAwLjA1IHx8IDApKSxcbiAgICAgICAgICAgICAgZWFzZTogc25hcC5lYXNlIHx8IFwicG93ZXIzXCIsXG4gICAgICAgICAgICAgIGRhdGE6IE1hdGguYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCksXG4gICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgZGlzdGFuY2Ugc28gdGhhdCBpZiBhbm90aGVyIHNuYXAgdHdlZW4gb2NjdXJzIChjb25mbGljdCkgd2UgY2FuIHByaW9yaXRpemUgdGhlIGNsb3Nlc3Qgc25hcC5cbiAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBzbmFwMSA9IHNuYXAyID0gYW5pbWF0aW9uICYmICFpc1RvZ2dsZSA/IGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKCkgOiBzZWxmLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIG9uU25hcENvbXBsZXRlICYmIG9uU25hcENvbXBsZXRlKHNlbGYpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBzY3JvbGwsIGNoYW5nZTEgKiBjaGFuZ2UsIGVuZFNjcm9sbCAtIHNjcm9sbCAtIGNoYW5nZTEgKiBjaGFuZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLmlzQWN0aXZlKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWQgJiYgKF9pZHNbaWRdID0gc2VsZik7XG4gICAgdHJpZ2dlciA9IHNlbGYudHJpZ2dlciA9IF90b0FycmF5KHRyaWdnZXIgfHwgcGluKVswXTtcbiAgICBwaW4gPSBwaW4gPT09IHRydWUgPyB0cmlnZ2VyIDogX3RvQXJyYXkocGluKVswXTtcbiAgICBfaXNTdHJpbmcodG9nZ2xlQ2xhc3MpICYmICh0b2dnbGVDbGFzcyA9IHtcbiAgICAgIHRhcmdldHM6IHRyaWdnZXIsXG4gICAgICBjbGFzc05hbWU6IHRvZ2dsZUNsYXNzXG4gICAgfSk7XG5cbiAgICBpZiAocGluKSB7XG4gICAgICBwaW5TcGFjaW5nID09PSBmYWxzZSB8fCBwaW5TcGFjaW5nID09PSBfbWFyZ2luIHx8IChwaW5TcGFjaW5nID0gIXBpblNwYWNpbmcgJiYgX2dldENvbXB1dGVkU3R5bGUocGluLnBhcmVudE5vZGUpLmRpc3BsYXkgPT09IFwiZmxleFwiID8gZmFsc2UgOiBfcGFkZGluZyk7IC8vIGlmIHRoZSBwYXJlbnQgaXMgZGlzcGxheTogZmxleCwgZG9uJ3QgYXBwbHkgcGluU3BhY2luZyBieSBkZWZhdWx0LlxuXG4gICAgICBzZWxmLnBpbiA9IHBpbjtcbiAgICAgIHZhcnMuZm9yY2UzRCAhPT0gZmFsc2UgJiYgZ3NhcC5zZXQocGluLCB7XG4gICAgICAgIGZvcmNlM0Q6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcGluQ2FjaGUgPSBnc2FwLmNvcmUuZ2V0Q2FjaGUocGluKTtcblxuICAgICAgaWYgKCFwaW5DYWNoZS5zcGFjZXIpIHtcbiAgICAgICAgLy8gcmVjb3JkIHRoZSBzcGFjZXIgYW5kIHBpbk9yaWdpbmFsU3RhdGUgb24gdGhlIGNhY2hlIGluIGNhc2Ugc29tZW9uZSB0cmllcyBwaW5uaW5nIHRoZSBzYW1lIGVsZW1lbnQgd2l0aCBNVUxUSVBMRSBTY3JvbGxUcmlnZ2VycyAtIHdlIGRvbid0IHdhbnQgdG8gaGF2ZSBtdWx0aXBsZSBzcGFjZXJzIG9yIHJlY29yZCB0aGUgXCJvcmlnaW5hbFwiIHBpbiBzdGF0ZSBhZnRlciBpdCBoYXMgYWxyZWFkeSBiZWVuIGFmZmVjdGVkIGJ5IGFub3RoZXIgU2Nyb2xsVHJpZ2dlci5cbiAgICAgICAgcGluQ2FjaGUuc3BhY2VyID0gc3BhY2VyID0gX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaW4tc3BhY2VyXCIgKyAoaWQgPyBcIiBwaW4tc3BhY2VyLVwiICsgaWQgOiBcIlwiKSk7XG4gICAgICAgIHBpbkNhY2hlLnBpblN0YXRlID0gcGluT3JpZ2luYWxTdGF0ZSA9IF9nZXRTdGF0ZShwaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSA9IHBpbkNhY2hlLnBpblN0YXRlO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNwYWNlciA9IHNwYWNlciA9IHBpbkNhY2hlLnNwYWNlcjtcbiAgICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUocGluKTtcbiAgICAgIHNwYWNpbmdTdGFydCA9IGNzW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyXTtcbiAgICAgIHBpbkdldHRlciA9IGdzYXAuZ2V0UHJvcGVydHkocGluKTtcbiAgICAgIHBpblNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIocGluLCBkaXJlY3Rpb24uYSwgX3B4KTsgLy8gcGluLmZpcnN0Q2hpbGQgJiYgIV9tYXhTY3JvbGwocGluLCBkaXJlY3Rpb24pICYmIChwaW4uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiKTsgLy8gcHJvdGVjdHMgZnJvbSBjb2xsYXBzaW5nIG1hcmdpbnMsIGJ1dCBjYW4gaGF2ZSB1bmludGVuZGVkIGNvbnNlcXVlbmNlcyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vMWU0MmM3YTczYmZhNDA5ZDJjZjFlMTg0ZTdhNDI0OGQgc28gaXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YganVzdCB0ZWxsaW5nIHBlb3BsZSB0byBzZXQgdXAgdGhlaXIgQ1NTIHRvIGF2b2lkIHRoZSBjb2xsYXBzaW5nIG1hcmdpbnMgKG92ZXJmbG93OiBoaWRkZW4gfCBhdXRvIGlzIGp1c3Qgb25lIG9wdGlvbi4gQW5vdGhlciBpcyBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQpLlxuXG4gICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcyk7XG5cbiAgICAgIHBpblN0YXRlID0gX2dldFN0YXRlKHBpbik7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlcnMpIHtcbiAgICAgIG1hcmtlclZhcnMgPSBfaXNPYmplY3QobWFya2VycykgPyBfc2V0RGVmYXVsdHMobWFya2VycywgX21hcmtlckRlZmF1bHRzKSA6IF9tYXJrZXJEZWZhdWx0cztcbiAgICAgIG1hcmtlclN0YXJ0VHJpZ2dlciA9IF9jcmVhdGVNYXJrZXIoXCJzY3JvbGxlci1zdGFydFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgMCk7XG4gICAgICBtYXJrZXJFbmRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLWVuZFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgMCwgbWFya2VyU3RhcnRUcmlnZ2VyKTtcbiAgICAgIG9mZnNldCA9IG1hcmtlclN0YXJ0VHJpZ2dlcltcIm9mZnNldFwiICsgZGlyZWN0aW9uLm9wLmQyXTtcbiAgICAgIG1hcmtlclN0YXJ0ID0gX2NyZWF0ZU1hcmtlcihcInN0YXJ0XCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCBvZmZzZXQpO1xuICAgICAgbWFya2VyRW5kID0gX2NyZWF0ZU1hcmtlcihcImVuZFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgb2Zmc2V0KTtcblxuICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIF9tYWtlUG9zaXRpb25hYmxlKHNjcm9sbGVyKTtcblxuICAgICAgICBnc2FwLnNldChbbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXSwge1xuICAgICAgICAgIGZvcmNlM0Q6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbi5hLCBfcHgpO1xuICAgICAgICBtYXJrZXJFbmRTZXR0ZXIgPSBnc2FwLnF1aWNrU2V0dGVyKG1hcmtlckVuZFRyaWdnZXIsIGRpcmVjdGlvbi5hLCBfcHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYucmV2ZXJ0ID0gZnVuY3Rpb24gKHJldmVydCkge1xuICAgICAgdmFyIHIgPSByZXZlcnQgIT09IGZhbHNlIHx8ICFzZWxmLmVuYWJsZWQsXG4gICAgICAgICAgcHJldlJlZnJlc2hpbmcgPSBfcmVmcmVzaGluZztcblxuICAgICAgaWYgKHIgIT09IGlzUmV2ZXJ0ZWQpIHtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICBwcmV2U2Nyb2xsID0gTWF0aC5tYXgoc2VsZi5zY3JvbGwoKSwgc2VsZi5zY3JvbGwucmVjIHx8IDApOyAvLyByZWNvcmQgdGhlIHNjcm9sbCBzbyB3ZSBjYW4gcmV2ZXJ0IGxhdGVyIChyZXBvc2l0aW9uaW5nL3Bpbm5pbmcgdGhpbmdzIGNhbiBhZmZlY3Qgc2Nyb2xsIHBvc2l0aW9uKS4gSW4gdGhlIHN0YXRpYyByZWZyZXNoKCkgbWV0aG9kLCB3ZSBmaXJzdCByZWNvcmQgYWxsIHRoZSBzY3JvbGwgcG9zaXRpb25zIGFzIGEgcmVmZXJlbmNlLlxuXG4gICAgICAgICAgcHJldlByb2dyZXNzID0gc2VsZi5wcm9ncmVzcztcbiAgICAgICAgICBwcmV2QW5pbVByb2dyZXNzID0gYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5wcm9ncmVzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFya2VyU3RhcnQgJiYgW21hcmtlclN0YXJ0LCBtYXJrZXJFbmQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0eWxlLmRpc3BsYXkgPSByID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuICAgICAgICByICYmIChfcmVmcmVzaGluZyA9IDEpO1xuICAgICAgICBzZWxmLnVwZGF0ZShyKTsgLy8gbWFrZSBzdXJlIHRoZSBwaW4gaXMgYmFjayBpbiBpdHMgb3JpZ2luYWwgcG9zaXRpb24gc28gdGhhdCBhbGwgdGhlIG1lYXN1cmVtZW50cyBhcmUgY29ycmVjdC5cblxuICAgICAgICBfcmVmcmVzaGluZyA9IHByZXZSZWZyZXNoaW5nO1xuICAgICAgICBwaW4gJiYgKHIgPyBfc3dhcFBpbk91dChwaW4sIHNwYWNlciwgcGluT3JpZ2luYWxTdGF0ZSkgOiAoIXBpblJlcGFyZW50IHx8ICFzZWxmLmlzQWN0aXZlKSAmJiBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pLCBzcGFjZXJTdGF0ZSkpO1xuICAgICAgICBpc1JldmVydGVkID0gcjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5yZWZyZXNoID0gZnVuY3Rpb24gKHNvZnQpIHtcbiAgICAgIGlmIChfcmVmcmVzaGluZyB8fCAhc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbiAmJiBzb2Z0ICYmIF9sYXN0U2Nyb2xsVGltZSkge1xuICAgICAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9yZWZyZXNoaW5nID0gMTtcbiAgICAgIHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5raWxsKCk7XG4gICAgICBpbnZhbGlkYXRlT25SZWZyZXNoICYmIGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoMCkuaW52YWxpZGF0ZSgpO1xuICAgICAgaXNSZXZlcnRlZCB8fCBzZWxmLnJldmVydCgpO1xuXG4gICAgICB2YXIgc2l6ZSA9IGdldFNjcm9sbGVyU2l6ZSgpLFxuICAgICAgICAgIHNjcm9sbGVyQm91bmRzID0gZ2V0U2Nyb2xsZXJPZmZzZXRzKCksXG4gICAgICAgICAgbWF4ID0gX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKSxcbiAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgIG90aGVyUGluT2Zmc2V0ID0gMCxcbiAgICAgICAgICBwYXJzZWRFbmQgPSB2YXJzLmVuZCxcbiAgICAgICAgICBwYXJzZWRFbmRUcmlnZ2VyID0gdmFycy5lbmRUcmlnZ2VyIHx8IHRyaWdnZXIsXG4gICAgICAgICAgcGFyc2VkU3RhcnQgPSB2YXJzLnN0YXJ0IHx8IChwaW4gfHwgIXRyaWdnZXIgPyBcIjAgMFwiIDogXCIwIDEwMCVcIiksXG4gICAgICAgICAgdHJpZ2dlckluZGV4ID0gdHJpZ2dlciAmJiBNYXRoLm1heCgwLCBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSkgfHwgMCxcbiAgICAgICAgICBpID0gdHJpZ2dlckluZGV4LFxuICAgICAgICAgIGNzLFxuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBzY3JvbGwsXG4gICAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICAgICAgICBvdmVycmlkZSxcbiAgICAgICAgICBjdXJUcmlnZ2VyLFxuICAgICAgICAgIGN1clBpbixcbiAgICAgICAgICBvcHBvc2l0ZVNjcm9sbDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyB1c2VyIG1pZ2h0IHRyeSB0byBwaW4gdGhlIHNhbWUgZWxlbWVudCBtb3JlIHRoYW4gb25jZSwgc28gd2UgbXVzdCBmaW5kIGFueSBwcmlvciB0cmlnZ2VycyB3aXRoIHRoZSBzYW1lIHBpbiwgcmV2ZXJ0IHRoZW0sIGFuZCBkZXRlcm1pbmUgaG93IGxvbmcgdGhleSdyZSBwaW5uaW5nIHNvIHRoYXQgd2UgY2FuIG9mZnNldCB0aGluZ3MgYXBwcm9wcmlhdGVseS4gTWFrZSBzdXJlIHdlIHJldmVydCBmcm9tIGxhc3QgdG8gZmlyc3Qgc28gdGhhdCB0aGluZ3MgXCJyZXdpbmRcIiBwcm9wZXJseS5cbiAgICAgICAgY3VyUGluID0gX3RyaWdnZXJzW2ldLnBpbjtcbiAgICAgICAgY3VyUGluICYmIChjdXJQaW4gPT09IHRyaWdnZXIgfHwgY3VyUGluID09PSBwaW4pICYmIF90cmlnZ2Vyc1tpXS5yZXZlcnQoKTtcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBfcGFyc2VQb3NpdGlvbihwYXJzZWRTdGFydCwgdHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzZWxmLnNjcm9sbCgpLCBtYXJrZXJTdGFydCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIG1heCkgfHwgKHBpbiA/IC0wLjAwMSA6IDApO1xuICAgICAgX2lzRnVuY3Rpb24ocGFyc2VkRW5kKSAmJiAocGFyc2VkRW5kID0gcGFyc2VkRW5kKHNlbGYpKTtcblxuICAgICAgaWYgKF9pc1N0cmluZyhwYXJzZWRFbmQpICYmICFwYXJzZWRFbmQuaW5kZXhPZihcIis9XCIpKSB7XG4gICAgICAgIGlmICh+cGFyc2VkRW5kLmluZGV4T2YoXCIgXCIpKSB7XG4gICAgICAgICAgcGFyc2VkRW5kID0gKF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydC5zcGxpdChcIiBcIilbMF0gOiBcIlwiKSArIHBhcnNlZEVuZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSBfb2Zmc2V0VG9QeChwYXJzZWRFbmQuc3Vic3RyKDIpLCBzaXplKTtcbiAgICAgICAgICBwYXJzZWRFbmQgPSBfaXNTdHJpbmcocGFyc2VkU3RhcnQpID8gcGFyc2VkU3RhcnQgOiBzdGFydCArIG9mZnNldDsgLy8gX3BhcnNlUG9zaXRpb24gd29uJ3QgZmFjdG9yIGluIHRoZSBvZmZzZXQgaWYgdGhlIHN0YXJ0IGlzIGEgbnVtYmVyLCBzbyBkbyBpdCBoZXJlLlxuXG4gICAgICAgICAgcGFyc2VkRW5kVHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW5kID0gTWF0aC5tYXgoc3RhcnQsIF9wYXJzZVBvc2l0aW9uKHBhcnNlZEVuZCB8fCAocGFyc2VkRW5kVHJpZ2dlciA/IFwiMTAwJSAwXCIgOiBtYXgpLCBwYXJzZWRFbmRUcmlnZ2VyLCBzaXplLCBkaXJlY3Rpb24sIHNlbGYuc2Nyb2xsKCkgKyBvZmZzZXQsIG1hcmtlckVuZCwgbWFya2VyRW5kVHJpZ2dlciwgc2VsZiwgc2Nyb2xsZXJCb3VuZHMsIGJvcmRlcldpZHRoLCB1c2VGaXhlZFBvc2l0aW9uLCBtYXgpKSB8fCAtMC4wMDE7XG4gICAgICBjaGFuZ2UgPSBlbmQgLSBzdGFydCB8fCAoc3RhcnQgLT0gMC4wMSkgJiYgMC4wMDE7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgICAgaSA9IHRyaWdnZXJJbmRleDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJQaW4gPSBjdXJUcmlnZ2VyLnBpbjtcblxuICAgICAgICBpZiAoY3VyUGluICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDwgc3RhcnQpIHtcbiAgICAgICAgICBjcyA9IGN1clRyaWdnZXIuZW5kIC0gY3VyVHJpZ2dlci5zdGFydDtcbiAgICAgICAgICBjdXJQaW4gPT09IHRyaWdnZXIgJiYgKG9mZnNldCArPSBjcyk7XG4gICAgICAgICAgY3VyUGluID09PSBwaW4gJiYgKG90aGVyUGluT2Zmc2V0ICs9IGNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGFydCArPSBvZmZzZXQ7XG4gICAgICBlbmQgKz0gb2Zmc2V0O1xuICAgICAgc2VsZi5fcGluUHVzaCA9IG90aGVyUGluT2Zmc2V0O1xuXG4gICAgICBpZiAobWFya2VyU3RhcnQgJiYgb2Zmc2V0KSB7XG4gICAgICAgIC8vIG9mZnNldCB0aGUgbWFya2VycyBpZiBuZWNlc3NhcnlcbiAgICAgICAgY3MgPSB7fTtcbiAgICAgICAgY3NbZGlyZWN0aW9uLmFdID0gXCIrPVwiICsgb2Zmc2V0O1xuICAgICAgICBnc2FwLnNldChbbWFya2VyU3RhcnQsIG1hcmtlckVuZF0sIGNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbikge1xuICAgICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKHBpbik7XG4gICAgICAgIGlzVmVydGljYWwgPSBkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbDtcbiAgICAgICAgc2Nyb2xsID0gc2VsZi5zY3JvbGwoKTsgLy8gcmVjYWxjdWxhdGUgYmVjYXVzZSB0aGUgdHJpZ2dlcnMgY2FuIGFmZmVjdCB0aGUgc2Nyb2xsXG5cbiAgICAgICAgcGluU3RhcnQgPSBwYXJzZUZsb2F0KHBpbkdldHRlcihkaXJlY3Rpb24uYSkpICsgb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgICAgX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgY3MpO1xuXG4gICAgICAgIHBpblN0YXRlID0gX2dldFN0YXRlKHBpbik7IC8vIHRyYW5zZm9ybXMgd2lsbCBpbnRlcmZlcmUgd2l0aCB0aGUgdG9wL2xlZnQvcmlnaHQvYm90dG9tIHBsYWNlbWVudCwgc28gcmVtb3ZlIHRoZW0gdGVtcG9yYXJpbHkuIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGZhY3RvcnMgaW4gdHJhbnNmb3Jtcy5cblxuICAgICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKHBpbiwgdHJ1ZSk7XG4gICAgICAgIG9wcG9zaXRlU2Nyb2xsID0gdXNlRml4ZWRQb3NpdGlvbiAmJiBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgaXNWZXJ0aWNhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsKSgpO1xuXG4gICAgICAgIGlmIChwaW5TcGFjaW5nKSB7XG4gICAgICAgICAgc3BhY2VyU3RhdGUgPSBbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczIsIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0ICsgX3B4XTtcbiAgICAgICAgICBzcGFjZXJTdGF0ZS50ID0gc3BhY2VyO1xuICAgICAgICAgIGkgPSBwaW5TcGFjaW5nID09PSBfcGFkZGluZyA/IF9nZXRTaXplKHBpbiwgZGlyZWN0aW9uKSArIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0IDogMDtcbiAgICAgICAgICBpICYmIHNwYWNlclN0YXRlLnB1c2goZGlyZWN0aW9uLmQsIGkgKyBfcHgpOyAvLyBmb3IgYm94LXNpemluZzogYm9yZGVyLWJveCAobXVzdCBpbmNsdWRlIHBhZGRpbmcpLlxuXG4gICAgICAgICAgX3NldFN0YXRlKHNwYWNlclN0YXRlKTtcblxuICAgICAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgc2VsZi5zY3JvbGwocHJldlNjcm9sbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgIG92ZXJyaWRlID0ge1xuICAgICAgICAgICAgdG9wOiBib3VuZHMudG9wICsgKGlzVmVydGljYWwgPyBzY3JvbGwgLSBzdGFydCA6IG9wcG9zaXRlU2Nyb2xsKSArIF9weCxcbiAgICAgICAgICAgIGxlZnQ6IGJvdW5kcy5sZWZ0ICsgKGlzVmVydGljYWwgPyBvcHBvc2l0ZVNjcm9sbCA6IHNjcm9sbCAtIHN0YXJ0KSArIF9weCxcbiAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBvdmVycmlkZVtfd2lkdGhdID0gb3ZlcnJpZGVbXCJtYXhcIiArIF9XaWR0aF0gPSBNYXRoLmNlaWwoYm91bmRzLndpZHRoKSArIF9weDtcbiAgICAgICAgICBvdmVycmlkZVtfaGVpZ2h0XSA9IG92ZXJyaWRlW1wibWF4XCIgKyBfSGVpZ2h0XSA9IE1hdGguY2VpbChib3VuZHMuaGVpZ2h0KSArIF9weDtcbiAgICAgICAgICBvdmVycmlkZVtfbWFyZ2luXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfVG9wXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfUmlnaHRdID0gb3ZlcnJpZGVbX21hcmdpbiArIF9Cb3R0b21dID0gb3ZlcnJpZGVbX21hcmdpbiArIF9MZWZ0XSA9IFwiMFwiO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9Ub3BdID0gY3NbX3BhZGRpbmcgKyBfVG9wXTtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9SaWdodF0gPSBjc1tfcGFkZGluZyArIF9SaWdodF07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfQm90dG9tXSA9IGNzW19wYWRkaW5nICsgX0JvdHRvbV07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfTGVmdF0gPSBjc1tfcGFkZGluZyArIF9MZWZ0XTtcbiAgICAgICAgICBwaW5BY3RpdmVTdGF0ZSA9IF9jb3B5U3RhdGUocGluT3JpZ2luYWxTdGF0ZSwgb3ZlcnJpZGUsIHBpblJlcGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIG1pZ2h0IGJlIGFmZmVjdGluZyB0aGUgdHJhbnNmb3JtLCBzbyB3ZSBtdXN0IGp1bXAgdG8gdGhlIGVuZCwgY2hlY2sgdGhlIHZhbHVlLCBhbmQgY29tcGVuc2F0ZSBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCB3aGVuIGl0IGJlY29tZXMgdW5waW5uZWQsIHRoZSBwaW5TZXR0ZXIoKSB3aWxsIGdldCBzZXQgdG8gYSB2YWx1ZSB0aGF0IGRvZXNuJ3QgaW5jbHVkZSB3aGF0ZXZlciB0aGUgYW5pbWF0aW9uIGRpZC5cbiAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3MoMSwgdHJ1ZSk7XG4gICAgICAgICAgcGluQ2hhbmdlID0gcGluR2V0dGVyKGRpcmVjdGlvbi5hKSAtIHBpblN0YXJ0ICsgY2hhbmdlICsgb3RoZXJQaW5PZmZzZXQ7XG4gICAgICAgICAgY2hhbmdlICE9PSBwaW5DaGFuZ2UgJiYgcGluQWN0aXZlU3RhdGUuc3BsaWNlKHBpbkFjdGl2ZVN0YXRlLmxlbmd0aCAtIDIsIDIpOyAvLyB0cmFuc2Zvcm0gaXMgdGhlIGxhc3QgcHJvcGVydHkvdmFsdWUgc2V0IGluIHRoZSBzdGF0ZSBBcnJheS4gU2luY2UgdGhlIGFuaW1hdGlvbiBpcyBjb250cm9sbGluZyB0aGF0LCB3ZSBzaG91bGQgb21pdCBpdC5cblxuICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzcygwLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaW5DaGFuZ2UgPSBjaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAmJiBzZWxmLnNjcm9sbCgpKSB7XG4gICAgICAgIC8vIGl0IG1heSBiZSBJTlNJREUgYSBwaW5uZWQgZWxlbWVudCwgc28gd2FsayB1cCB0aGUgdHJlZSBhbmQgbG9vayBmb3IgYW55IGVsZW1lbnRzIHdpdGggX3Bpbk9mZnNldCB0byBjb21wZW5zYXRlIGJlY2F1c2UgYW55dGhpbmcgd2l0aCBwaW5TcGFjaW5nIHRoYXQncyBhbHJlYWR5IHNjcm9sbGVkIHdvdWxkIHRocm93IG9mZiB0aGUgbWVhc3VyZW1lbnRzIGluIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGJvdW5kcyA9IHRyaWdnZXIucGFyZW50Tm9kZTtcblxuICAgICAgICB3aGlsZSAoYm91bmRzICYmIGJvdW5kcyAhPT0gX2JvZHkpIHtcbiAgICAgICAgICBpZiAoYm91bmRzLl9waW5PZmZzZXQpIHtcbiAgICAgICAgICAgIHN0YXJ0IC09IGJvdW5kcy5fcGluT2Zmc2V0O1xuICAgICAgICAgICAgZW5kIC09IGJvdW5kcy5fcGluT2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvdW5kcyA9IGJvdW5kcy5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmlnZ2VySW5kZXg7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgcmV2ZXJ0IGZyb20gZmlyc3QgdG8gbGFzdCB0byBtYWtlIHN1cmUgdGhpbmdzIHJlYWNoIHRoZWlyIGVuZCBzdGF0ZSBwcm9wZXJseVxuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldLnBpbjtcbiAgICAgICAgY3VyVHJpZ2dlciAmJiAoY3VyVHJpZ2dlciA9PT0gdHJpZ2dlciB8fCBjdXJUcmlnZ2VyID09PSBwaW4pICYmIF90cmlnZ2Vyc1tpXS5yZXZlcnQoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICBzZWxmLmVuZCA9IGVuZDtcbiAgICAgIHNjcm9sbDEgPSBzY3JvbGwyID0gc2VsZi5zY3JvbGwoKTsgLy8gcmVzZXQgdmVsb2NpdHlcblxuICAgICAgc2Nyb2xsMSA8IHByZXZTY3JvbGwgJiYgc2VsZi5zY3JvbGwocHJldlNjcm9sbCk7XG4gICAgICBzZWxmLnJldmVydChmYWxzZSk7XG4gICAgICBfcmVmcmVzaGluZyA9IDA7XG4gICAgICBwcmV2QW5pbVByb2dyZXNzICYmIGlzVG9nZ2xlICYmIGFuaW1hdGlvbi5wcm9ncmVzcyhwcmV2QW5pbVByb2dyZXNzLCB0cnVlKTtcblxuICAgICAgaWYgKHByZXZQcm9ncmVzcyAhPT0gc2VsZi5wcm9ncmVzcykge1xuICAgICAgICAvLyBlbnN1cmVzIHRoYXQgdGhlIGRpcmVjdGlvbiBpcyBzZXQgcHJvcGVybHkgKHdoZW4gcmVmcmVzaGluZywgcHJvZ3Jlc3MgaXMgc2V0IGJhY2sgdG8gMCBpbml0aWFsbHksIHRoZW4gYmFjayBhZ2FpbiB0byB3aGVyZXZlciBpdCBuZWVkcyB0byBiZSkgYW5kIHRoYXQgY2FsbGJhY2tzIGFyZSB0cmlnZ2VyZWQuXG4gICAgICAgIHNjcnViVHdlZW4gJiYgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MocHJldlByb2dyZXNzLCB0cnVlKTsgLy8gdG8gYXZvaWQgaXNzdWVzIHdoZXJlIGFuaW1hdGlvbiBjYWxsYmFja3MgbGlrZSBvblN0YXJ0IGFyZW4ndCB0cmlnZ2VyZWQuXG5cbiAgICAgICAgc2VsZi5wcm9ncmVzcyA9IHByZXZQcm9ncmVzcztcbiAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgcGluICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5fcGluT2Zmc2V0ID0gTWF0aC5yb3VuZChzZWxmLnByb2dyZXNzICogcGluQ2hhbmdlKSk7XG4gICAgICBvblJlZnJlc2ggJiYgb25SZWZyZXNoKHNlbGYpO1xuICAgIH07XG5cbiAgICBzZWxmLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChzZWxmLnNjcm9sbCgpIC0gc2Nyb2xsMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDA7XG4gICAgfTtcblxuICAgIHNlbGYudXBkYXRlID0gZnVuY3Rpb24gKHJlc2V0LCByZWNvcmRWZWxvY2l0eSkge1xuICAgICAgdmFyIHNjcm9sbCA9IHNlbGYuc2Nyb2xsKCksXG4gICAgICAgICAgcCA9IHJlc2V0ID8gMCA6IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG4gICAgICAgICAgY2xpcHBlZCA9IHAgPCAwID8gMCA6IHAgPiAxID8gMSA6IHAgfHwgMCxcbiAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzLFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgIHdhc0FjdGl2ZSxcbiAgICAgICAgICB0b2dnbGVTdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgc3RhdGVDaGFuZ2VkLFxuICAgICAgICAgIHRvZ2dsZWQ7XG5cbiAgICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgICAgICBzY3JvbGwyID0gc2Nyb2xsMTtcbiAgICAgICAgc2Nyb2xsMSA9IHNjcm9sbDtcblxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgIHNuYXAyID0gc25hcDE7XG4gICAgICAgICAgc25hcDEgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IGNsaXBwZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gYW50aWNpcGF0ZSB0aGUgcGlubmluZyBhIGZldyB0aWNrcyBhaGVhZCBvZiB0aW1lIGJhc2VkIG9uIHZlbG9jaXR5IHRvIGF2b2lkIGEgdmlzdWFsIGdsaXRjaCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBtb3N0IGJyb3dzZXJzIGRvIHNjcm9sbGluZyBvbiBhIHNlcGFyYXRlIHRocmVhZCAobm90IHN5bmNlZCB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZSkuXG5cblxuICAgICAgYW50aWNpcGF0ZVBpbiAmJiAhY2xpcHBlZCAmJiBwaW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCAmJiBfbGFzdFNjcm9sbFRpbWUgJiYgc3RhcnQgPCBzY3JvbGwgKyAoc2Nyb2xsIC0gc2Nyb2xsMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiBhbnRpY2lwYXRlUGluICYmIChjbGlwcGVkID0gMC4wMDAxKTtcblxuICAgICAgaWYgKGNsaXBwZWQgIT09IHByZXZQcm9ncmVzcyAmJiBzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgaXNBY3RpdmUgPSBzZWxmLmlzQWN0aXZlID0gISFjbGlwcGVkICYmIGNsaXBwZWQgPCAxO1xuICAgICAgICB3YXNBY3RpdmUgPSAhIXByZXZQcm9ncmVzcyAmJiBwcmV2UHJvZ3Jlc3MgPCAxO1xuICAgICAgICB0b2dnbGVkID0gaXNBY3RpdmUgIT09IHdhc0FjdGl2ZTtcbiAgICAgICAgc3RhdGVDaGFuZ2VkID0gdG9nZ2xlZCB8fCAhIWNsaXBwZWQgIT09ICEhcHJldlByb2dyZXNzOyAvLyBjb3VsZCBnbyBmcm9tIHN0YXJ0IGFsbCB0aGUgd2F5IHRvIGVuZCwgdGh1cyBpdCBkaWRuJ3QgdG9nZ2xlIGJ1dCBpdCBkaWQgY2hhbmdlIHN0YXRlIGluIGEgc2Vuc2UgKG1heSBuZWVkIHRvIGZpcmUgYSBjYWxsYmFjaylcblxuICAgICAgICBzZWxmLmRpcmVjdGlvbiA9IGNsaXBwZWQgPiBwcmV2UHJvZ3Jlc3MgPyAxIDogLTE7XG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBjbGlwcGVkO1xuXG4gICAgICAgIGlmICghaXNUb2dnbGUpIHtcbiAgICAgICAgICBpZiAoc2NydWJUd2VlbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwKSB7XG4gICAgICAgICAgICBzY3J1YlR3ZWVuLnZhcnMudG90YWxQcm9ncmVzcyA9IGNsaXBwZWQ7XG4gICAgICAgICAgICBzY3J1YlR3ZWVuLmludmFsaWRhdGUoKS5yZXN0YXJ0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKGNsaXBwZWQsICEhX3JlZnJlc2hpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgICByZXNldCAmJiBwaW5TcGFjaW5nICYmIChzcGFjZXIuc3R5bGVbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdID0gc3BhY2luZ1N0YXJ0KTtcblxuICAgICAgICAgIGlmICghdXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgcGluU2V0dGVyKHBpblN0YXJ0ICsgcGluQ2hhbmdlICogY2xpcHBlZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICFyZXNldCAmJiBjbGlwcGVkID4gcHJldlByb2dyZXNzICYmIGVuZCArIDEgPiBzY3JvbGwgJiYgc2Nyb2xsICsgMSA+PSBfbWF4U2Nyb2xsKHNjcm9sbGVyLCBkaXJlY3Rpb24pOyAvLyBpZiBpdCdzIGF0IHRoZSBWRVJZIGVuZCBvZiB0aGUgcGFnZSwgZG9uJ3Qgc3dpdGNoIGF3YXkgZnJvbSBwb3NpdGlvbjogZml4ZWQgYmVjYXVzZSBpdCdzIHBvaW50bGVzcyBhbmQgaXQgY291bGQgY2F1c2UgYSBicmllZiBmbGFzaCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgYmFjayB1cCAod2hlbiBpdCBnZXRzIHBpbm5lZCBhZ2FpbilcblxuICAgICAgICAgICAgaWYgKHBpblJlcGFyZW50KSB7XG4gICAgICAgICAgICAgIGlmICghcmVzZXQgJiYgKGlzQWN0aXZlIHx8IGFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gc2Nyb2xsIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBwaW4uc3R5bGUudG9wID0gYm91bmRzLnRvcCArIChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9vZmZzZXQgOiAwKSArIF9weDtcbiAgICAgICAgICAgICAgICBwaW4uc3R5bGUubGVmdCA9IGJvdW5kcy5sZWZ0ICsgKGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsID8gMCA6IF9vZmZzZXQpICsgX3B4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX3JlcGFyZW50KHBpbiwgIXJlc2V0ICYmIChpc0FjdGl2ZSB8fCBhY3Rpb24pID8gX2JvZHkgOiBzcGFjZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc2V0U3RhdGUoaXNBY3RpdmUgfHwgYWN0aW9uID8gcGluQWN0aXZlU3RhdGUgOiBwaW5TdGF0ZSk7XG5cbiAgICAgICAgICAgIHBpbkNoYW5nZSAhPT0gY2hhbmdlICYmIGNsaXBwZWQgPCAxICYmIGlzQWN0aXZlIHx8IHBpblNldHRlcihwaW5TdGFydCArIChjbGlwcGVkID09PSAxICYmICFhY3Rpb24gPyBwaW5DaGFuZ2UgOiAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc25hcCAmJiAhdHdlZW5Uby50d2VlbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyAmJiAodG9nZ2xlZCB8fCBvbmNlICYmIGNsaXBwZWQgJiYgKGNsaXBwZWQgPCAxIHx8ICFfbGltaXRDYWxsYmFja3MpKSAmJiBfdG9BcnJheSh0b2dnbGVDbGFzcy50YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3RbaXNBY3RpdmUgfHwgb25jZSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSh0b2dnbGVDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICB9KTsgLy8gY2xhc3NlcyBjb3VsZCBhZmZlY3QgcG9zaXRpb25pbmcsIHNvIGRvIGl0IGV2ZW4gaWYgcmVzZXQgb3IgcmVmcmVzaGluZyBpcyB0cnVlLlxuXG4gICAgICAgIG9uVXBkYXRlICYmICFpc1RvZ2dsZSAmJiAhcmVzZXQgJiYgb25VcGRhdGUoc2VsZik7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgJiYgIXByZXZQcm9ncmVzcyA/IDAgOiBjbGlwcGVkID09PSAxID8gMSA6IHByZXZQcm9ncmVzcyA9PT0gMSA/IDIgOiAzOyAvLyAwID0gZW50ZXIsIDEgPSBsZWF2ZSwgMiA9IGVudGVyQmFjaywgMyA9IGxlYXZlQmFjayAod2UgcHJpb3JpdGl6ZSB0aGUgRklSU1QgZW5jb3VudGVyLCB0aHVzIGlmIHlvdSBzY3JvbGwgcmVhbGx5IGZhc3QgcGFzdCB0aGUgb25FbnRlciBhbmQgb25MZWF2ZSBpbiBvbmUgdGljaywgaXQnZCBwcmlvcml0aXplIG9uRW50ZXIuXG5cbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICF0b2dnbGVkICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSAhPT0gXCJub25lXCIgJiYgdG9nZ2xlQWN0aW9uc1t0b2dnbGVTdGF0ZSArIDFdIHx8IHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGVdOyAvLyBpZiBpdCBkaWRuJ3QgdG9nZ2xlLCB0aGF0IG1lYW5zIGl0IHNob3QgcmlnaHQgcGFzdCBhbmQgc2luY2Ugd2UgcHJpb3JpdGl6ZSB0aGUgXCJlbnRlclwiIGFjdGlvbiwgd2Ugc2hvdWxkIHN3aXRjaCB0byB0aGUgXCJsZWF2ZVwiIGluIHRoaXMgY2FzZSAoYnV0IG9ubHkgaWYgb25lIGlzIGRlZmluZWQpXG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb24gJiYgKGFjdGlvbiA9PT0gXCJjb21wbGV0ZVwiIHx8IGFjdGlvbiA9PT0gXCJyZXNldFwiIHx8IGFjdGlvbiBpbiBhbmltYXRpb24pKSB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpLnRvdGFsUHJvZ3Jlc3MoMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlc2V0XCIpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucmVzdGFydCh0cnVlKS5wYXVzZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblthY3Rpb25dKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb25VcGRhdGUgJiYgb25VcGRhdGUoc2VsZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRvZ2dsZWQgfHwgIV9saW1pdENhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gb24gc3RhcnR1cCwgdGhlIHBhZ2UgY291bGQgYmUgc2Nyb2xsZWQgYW5kIHdlIGRvbid0IHdhbnQgdG8gZmlyZSBjYWxsYmFja3MgdGhhdCBkaWRuJ3QgdG9nZ2xlLiBGb3IgZXhhbXBsZSBvbkVudGVyIHNob3VsZG4ndCBmaXJlIGlmIHRoZSBTY3JvbGxUcmlnZ2VyIGlzbid0IGFjdHVhbGx5IGVudGVyZWQuXG4gICAgICAgICAgICBvblRvZ2dsZSAmJiB0b2dnbGVkICYmIG9uVG9nZ2xlKHNlbGYpO1xuICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdKHNlbGYpO1xuICAgICAgICAgICAgb25jZSAmJiAoY2xpcHBlZCA9PT0gMSA/IHNlbGYua2lsbChmYWxzZSwgMSkgOiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdID0gMCk7IC8vIGEgY2FsbGJhY2sgc2hvdWxkbid0IGJlIGNhbGxlZCBhZ2FpbiBpZiBvbmNlIGlzIHRydWUuXG5cbiAgICAgICAgICAgIGlmICghdG9nZ2xlZCkge1xuICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRvIGdvIGNvbXBsZXRlbHkgcGFzdCwgbGlrZSBmcm9tIGJlZm9yZSB0aGUgc3RhcnQgdG8gYWZ0ZXIgdGhlIGVuZCAob3IgdmljZS12ZXJzYSkgaW4gd2hpY2ggY2FzZSBCT1RIIGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWQgaW4gdGhhdCBvcmRlclxuICAgICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgPT09IDEgPyAxIDogMztcbiAgICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdKHNlbGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc1RvZ2dsZSAmJiBvblVwZGF0ZSAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICBvblVwZGF0ZShzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyB1cGRhdGUgYWJzb2x1dGVseS1wb3NpdGlvbmVkIG1hcmtlcnMgKG9ubHkgaWYgdGhlIHNjcm9sbGVyIGlzbid0IHRoZSB2aWV3cG9ydClcblxuXG4gICAgICBpZiAobWFya2VyRW5kU2V0dGVyKSB7XG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyKHNjcm9sbCArIChtYXJrZXJTdGFydFRyaWdnZXIuX2lzRmxpcHBlZCA/IDEgOiAwKSk7XG4gICAgICAgIG1hcmtlckVuZFNldHRlcihzY3JvbGwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIHNlbGYuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihzY3JvbGxlciwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTtcblxuICAgICAgICBvblJlZnJlc2hJbml0ICYmIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInJlZnJlc2hJbml0XCIsIG9uUmVmcmVzaEluaXQpO1xuICAgICAgICAhYW5pbWF0aW9uIHx8ICFhbmltYXRpb24uYWRkID8gc2VsZi5yZWZyZXNoKCkgOiBnc2FwLmRlbGF5ZWRDYWxsKDAuMDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnQgfHwgZW5kIHx8IHNlbGYucmVmcmVzaCgpO1xuICAgICAgICB9KSAmJiAoY2hhbmdlID0gMC4wMSkgJiYgKHN0YXJ0ID0gZW5kID0gMCk7IC8vIGlmIHRoZSBhbmltYXRpb24gaXMgYSB0aW1lbGluZSwgaXQgbWF5IG5vdCBoYXZlIGJlZW4gcG9wdWxhdGVkIHlldCwgc28gaXQgd291bGRuJ3QgcmVuZGVyIGF0IHRoZSBwcm9wZXIgcGxhY2Ugb24gdGhlIGZpcnN0IHJlZnJlc2goKSwgdGh1cyB3ZSBzaG91bGQgc2NoZWR1bGUgb25lIGZvciB0aGUgbmV4dCB0aWNrLlxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmRpc2FibGUgPSBmdW5jdGlvbiAocmVzZXQsIGFsbG93QW5pbWF0aW9uKSB7XG4gICAgICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIHJlc2V0ICE9PSBmYWxzZSAmJiBzZWxmLnJldmVydCgpO1xuICAgICAgICBzZWxmLmVuYWJsZWQgPSBzZWxmLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGFsbG93QW5pbWF0aW9uIHx8IHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5wYXVzZSgpO1xuICAgICAgICBwcmV2U2Nyb2xsID0gMDtcbiAgICAgICAgcGluQ2FjaGUgJiYgKHBpbkNhY2hlLnVuY2FjaGUgPSAxKTtcbiAgICAgICAgb25SZWZyZXNoSW5pdCAmJiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoSW5pdFwiLCBvblJlZnJlc2hJbml0KTtcblxuICAgICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICAgICAgdHdlZW5Uby50d2VlbiAmJiB0d2VlblRvLnR3ZWVuLmtpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWaWV3cG9ydCkge1xuICAgICAgICAgIHZhciBpID0gX3RyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGlmIChfdHJpZ2dlcnNbaV0uc2Nyb2xsZXIgPT09IHNjcm9sbGVyICYmIF90cmlnZ2Vyc1tpXSAhPT0gc2VsZikge1xuICAgICAgICAgICAgICByZXR1cm47IC8vZG9uJ3QgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgaWYgdGhlcmUgYXJlIHN0aWxsIG90aGVyIHRyaWdnZXJzIHJlZmVyZW5jaW5nIGl0LlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcihzY3JvbGxlciwgXCJyZXNpemVcIiwgX29uUmVzaXplKTtcblxuICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcihzY3JvbGxlciwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmtpbGwgPSBmdW5jdGlvbiAocmV2ZXJ0LCBhbGxvd0FuaW1hdGlvbikge1xuICAgICAgc2VsZi5kaXNhYmxlKHJldmVydCwgYWxsb3dBbmltYXRpb24pO1xuICAgICAgaWQgJiYgZGVsZXRlIF9pZHNbaWRdO1xuXG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBfdHJpZ2dlcnMuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpID09PSBfaSAmJiBfZGlyZWN0aW9uID4gMCAmJiBfaS0tOyAvLyBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgcmVmcmVzaCgpIG9yIHVwZGF0ZSgpLCBzcGxpY2luZyB3b3VsZCBjYXVzZSBza2lwcyBpbiB0aGUgaW5kZXgsIHNvIGFkanVzdC4uLlxuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyID0gbnVsbDtcbiAgICAgICAgcmV2ZXJ0ICYmIGFuaW1hdGlvbi5yZW5kZXIoLTEpO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBhbmltYXRpb24ua2lsbCgpO1xuICAgICAgfVxuXG4gICAgICBtYXJrZXJTdGFydCAmJiBbbWFya2VyU3RhcnQsIG1hcmtlckVuZCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobSk7XG4gICAgICB9KTtcbiAgICAgIHBpbkNhY2hlICYmIChwaW5DYWNoZS51bmNhY2hlID0gMSk7XG4gICAgfTtcblxuICAgIHNlbGYuZW5hYmxlKCk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvcmUpIHtcbiAgICBpZiAoIV9jb3JlSW5pdHRlZCkge1xuICAgICAgZ3NhcCA9IGNvcmUgfHwgX2dldEdTQVAoKTtcblxuICAgICAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgX3dpbiA9IHdpbmRvdztcbiAgICAgICAgX2RvYyA9IGRvY3VtZW50O1xuICAgICAgICBfZG9jRWwgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgX2JvZHkgPSBfZG9jLmJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnc2FwKSB7XG4gICAgICAgIF90b0FycmF5ID0gZ3NhcC51dGlscy50b0FycmF5O1xuICAgICAgICBfY2xhbXAgPSBnc2FwLnV0aWxzLmNsYW1wO1xuICAgICAgICBnc2FwLmNvcmUuZ2xvYmFscyhcIlNjcm9sbFRyaWdnZXJcIiwgU2Nyb2xsVHJpZ2dlcik7IC8vIG11c3QgcmVnaXN0ZXIgdGhlIGdsb2JhbCBtYW51YWxseSBiZWNhdXNlIGluIEludGVybmV0IEV4cGxvcmVyLCBmdW5jdGlvbnMgKGNsYXNzZXMpIGRvbid0IGhhdmUgYSBcIm5hbWVcIiBwcm9wZXJ0eS5cblxuICAgICAgICBpZiAoX2JvZHkpIHtcbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIDE2KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgX2FkZExpc3RlbmVyKF93aW4sIFwibW91c2V3aGVlbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgICAgICAgX3Jvb3QgPSBbX3dpbiwgX2RvYywgX2RvY0VsLCBfYm9keV07XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIoX2RvYywgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTsgLy8gc29tZSBicm93c2VycyAobGlrZSBDaHJvbWUpLCB0aGUgd2luZG93IHN0b3BzIGRpc3BhdGNoaW5nIHNjcm9sbCBldmVudHMgb24gdGhlIHdpbmRvdyBpZiB5b3Ugc2Nyb2xsIHJlYWxseSBmYXN0LCBidXQgaXQncyBjb25zaXN0ZW50IG9uIHRoZSBkb2N1bWVudCFcblxuXG4gICAgICAgICAgdmFyIGJvZHlTdHlsZSA9IF9ib2R5LnN0eWxlLFxuICAgICAgICAgICAgICBib3JkZXIgPSBib2R5U3R5bGUuYm9yZGVyVG9wLFxuICAgICAgICAgICAgICBib3VuZHM7XG4gICAgICAgICAgYm9keVN0eWxlLmJvcmRlclRvcCA9IFwiMXB4IHNvbGlkICMwMDBcIjsgLy8gd29ya3MgYXJvdW5kIGFuIGlzc3VlIHdoZXJlIGEgbWFyZ2luIG9mIGEgY2hpbGQgZWxlbWVudCBjb3VsZCB0aHJvdyBvZmYgdGhlIGJvdW5kcyBvZiB0aGUgX2JvZHksIG1ha2luZyBpdCBzZWVtIGxpa2UgdGhlcmUncyBhIG1hcmdpbiB3aGVuIHRoZXJlIGFjdHVhbGx5IGlzbid0LiBUaGUgYm9yZGVyIGVuc3VyZXMgdGhhdCB0aGUgYm91bmRzIGFyZSBhY2N1cmF0ZS5cblxuICAgICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoX2JvZHkpO1xuICAgICAgICAgIF92ZXJ0aWNhbC5tID0gTWF0aC5yb3VuZChib3VuZHMudG9wICsgX3ZlcnRpY2FsLnNjKCkpIHx8IDA7IC8vIGFjY29tbW9kYXRlIHRoZSBvZmZzZXQgb2YgdGhlIDxib2R5PiBjYXVzZWQgYnkgbWFyZ2lucyBhbmQvb3IgcGFkZGluZ1xuXG4gICAgICAgICAgX2hvcml6b250YWwubSA9IE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBfaG9yaXpvbnRhbC5zYygpKSB8fCAwO1xuICAgICAgICAgIGJvcmRlciA/IGJvZHlTdHlsZS5ib3JkZXJUb3AgPSBib3JkZXIgOiBib2R5U3R5bGUucmVtb3ZlUHJvcGVydHkoXCJib3JkZXItdG9wXCIpO1xuICAgICAgICAgIF9zeW5jSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChfc3luYywgMjAwKTtcbiAgICAgICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuNSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdGFydHVwID0gMDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF9hZGRMaXN0ZW5lcihfZG9jLCBcInRvdWNoY2FuY2VsXCIsIF9wYXNzVGhyb3VnaCk7IC8vIHNvbWUgb2xkZXIgQW5kcm9pZCBkZXZpY2VzIGludGVybWl0dGVudGx5IHN0b3AgZGlzcGF0Y2hpbmcgXCJ0b3VjaG1vdmVcIiBldmVudHMgaWYgd2UgZG9uJ3QgbGlzdGVuIGZvciBcInRvdWNoY2FuY2VsXCIgb24gdGhlIGRvY3VtZW50LlxuXG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpOyAvL3dvcmtzIGFyb3VuZCBTYWZhcmkgYnVnOiBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIxNDUwLWRyYWdnYWJsZS1pbi1pZnJhbWUtb24tbW9iaWxlLWlzLWJ1Z2d5L1xuXG5cbiAgICAgICAgICBfbXVsdGlMaXN0ZW5lcihfYWRkTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3BvaW50ZXJJc0Rvd24gPSAwO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgX3RyYW5zZm9ybVByb3AgPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgICAgX3N0YXRlUHJvcHMucHVzaChfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgICAgICBfY29yZUluaXR0ZWQgPSBfZ2V0VGltZSgpO1xuICAgICAgICAgIF9yZXNpemVEZWxheSA9IGdzYXAuZGVsYXllZENhbGwoMC4yLCBfcmVmcmVzaEFsbCkucGF1c2UoKTtcbiAgICAgICAgICBfYXV0b1JlZnJlc2ggPSBbX2RvYywgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3ID0gX3dpbi5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgIGggPSBfd2luLmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoX2RvYy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgX3ByZXZXaWR0aCA9IHc7XG4gICAgICAgICAgICAgIF9wcmV2SGVpZ2h0ID0gaDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3ByZXZXaWR0aCAhPT0gdyB8fCBfcHJldkhlaWdodCAhPT0gaCkge1xuICAgICAgICAgICAgICBfb25SZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfZG9jLCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgX3JlZnJlc2hBbGwsIF93aW4sIFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhc3RTY3JvbGxUaW1lIHx8IF9yZWZyZXNoQWxsKCk7XG4gICAgICAgICAgfSwgX3dpbiwgXCJyZXNpemVcIiwgX29uUmVzaXplXTtcblxuICAgICAgICAgIF9pdGVyYXRlQXV0b1JlZnJlc2goX2FkZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfY29yZUluaXR0ZWQ7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5kZWZhdWx0cyA9IGZ1bmN0aW9uIGRlZmF1bHRzKGNvbmZpZykge1xuICAgIGZvciAodmFyIHAgaW4gY29uZmlnKSB7XG4gICAgICBfZGVmYXVsdHNbcF0gPSBjb25maWdbcF07XG4gICAgfVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIua2lsbCA9IGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgX2VuYWJsZWQgPSAwO1xuXG4gICAgX3RyaWdnZXJzLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyLmtpbGwoMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jb25maWcgPSBmdW5jdGlvbiBjb25maWcodmFycykge1xuICAgIFwibGltaXRDYWxsYmFja3NcIiBpbiB2YXJzICYmIChfbGltaXRDYWxsYmFja3MgPSAhIXZhcnMubGltaXRDYWxsYmFja3MpO1xuICAgIHZhciBtcyA9IHZhcnMuc3luY0ludGVydmFsO1xuICAgIG1zICYmIGNsZWFySW50ZXJ2YWwoX3N5bmNJbnRlcnZhbCkgfHwgKF9zeW5jSW50ZXJ2YWwgPSBtcykgJiYgc2V0SW50ZXJ2YWwoX3N5bmMsIG1zKTtcbiAgICBcImF1dG9SZWZyZXNoRXZlbnRzXCIgaW4gdmFycyAmJiAoX2l0ZXJhdGVBdXRvUmVmcmVzaChfcmVtb3ZlTGlzdGVuZXIpIHx8IF9pdGVyYXRlQXV0b1JlZnJlc2goX2FkZExpc3RlbmVyLCB2YXJzLmF1dG9SZWZyZXNoRXZlbnRzIHx8IFwibm9uZVwiKSk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5zY3JvbGxlclByb3h5ID0gZnVuY3Rpb24gc2Nyb2xsZXJQcm94eSh0YXJnZXQsIHZhcnMpIHtcbiAgICB2YXIgdCA9IF90b0FycmF5KHRhcmdldClbMF07XG5cbiAgICBfaXNWaWV3cG9ydCh0KSA/IF9wcm94aWVzLnVuc2hpZnQoX3dpbiwgdmFycywgX2JvZHksIHZhcnMsIF9kb2NFbCwgdmFycykgOiBfcHJveGllcy51bnNoaWZ0KHQsIHZhcnMpO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uIG1hdGNoTWVkaWEodmFycykge1xuICAgIHZhciBtcSwgcCwgaSwgZnVuYywgcmVzdWx0O1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGkgPSBfbWVkaWEuaW5kZXhPZihwKTtcbiAgICAgIGZ1bmMgPSB2YXJzW3BdO1xuICAgICAgX2NyZWF0aW5nTWVkaWEgPSBwO1xuXG4gICAgICBpZiAocCA9PT0gXCJhbGxcIikge1xuICAgICAgICBmdW5jKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtcSA9IF93aW4ubWF0Y2hNZWRpYShwKTtcblxuICAgICAgICBpZiAobXEpIHtcbiAgICAgICAgICBtcS5tYXRjaGVzICYmIChyZXN1bHQgPSBmdW5jKCkpO1xuXG4gICAgICAgICAgaWYgKH5pKSB7XG4gICAgICAgICAgICBfbWVkaWFbaSArIDFdID0gX2NvbWJpbmVGdW5jKF9tZWRpYVtpICsgMV0sIGZ1bmMpO1xuICAgICAgICAgICAgX21lZGlhW2kgKyAyXSA9IF9jb21iaW5lRnVuYyhfbWVkaWFbaSArIDJdLCByZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpID0gX21lZGlhLmxlbmd0aDtcblxuICAgICAgICAgICAgX21lZGlhLnB1c2gocCwgZnVuYywgcmVzdWx0KTtcblxuICAgICAgICAgICAgbXEuYWRkTGlzdGVuZXIgPyBtcS5hZGRMaXN0ZW5lcihfb25NZWRpYUNoYW5nZSkgOiBtcS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIF9vbk1lZGlhQ2hhbmdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2NyZWF0aW5nTWVkaWEgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBfbWVkaWE7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jbGVhck1hdGNoTWVkaWEgPSBmdW5jdGlvbiBjbGVhck1hdGNoTWVkaWEocXVlcnkpIHtcbiAgICBxdWVyeSB8fCAoX21lZGlhLmxlbmd0aCA9IDApO1xuICAgIHF1ZXJ5ID0gX21lZGlhLmluZGV4T2YocXVlcnkpO1xuICAgIHF1ZXJ5ID49IDAgJiYgX21lZGlhLnNwbGljZShxdWVyeSwgMyk7XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbFRyaWdnZXI7XG59KCk7XG5TY3JvbGxUcmlnZ2VyLnZlcnNpb24gPSBcIjMuNS4wXCI7XG5cblNjcm9sbFRyaWdnZXIuc2F2ZVN0eWxlcyA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XG4gIHJldHVybiB0YXJnZXRzID8gX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdmFyIGkgPSBfc2F2ZWRTdHlsZXMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgaSA+PSAwICYmIF9zYXZlZFN0eWxlcy5zcGxpY2UoaSwgNCk7XG5cbiAgICBfc2F2ZWRTdHlsZXMucHVzaCh0YXJnZXQsIHRhcmdldC5zdHlsZS5jc3NUZXh0LCBnc2FwLmNvcmUuZ2V0Q2FjaGUodGFyZ2V0KSwgX2NyZWF0aW5nTWVkaWEpO1xuICB9KSA6IF9zYXZlZFN0eWxlcztcbn07XG5cblNjcm9sbFRyaWdnZXIucmV2ZXJ0ID0gZnVuY3Rpb24gKHNvZnQsIG1lZGlhKSB7XG4gIHJldHVybiBfcmV2ZXJ0QWxsKCFzb2Z0LCBtZWRpYSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YXJzLCBhbmltYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbik7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJlZnJlc2ggPSBmdW5jdGlvbiAoc2FmZSkge1xuICByZXR1cm4gc2FmZSA/IF9vblJlc2l6ZSgpIDogX3JlZnJlc2hBbGwodHJ1ZSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnVwZGF0ZSA9IF91cGRhdGVBbGw7XG5cblNjcm9sbFRyaWdnZXIubWF4U2Nyb2xsID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcbiAgcmV0dXJuIF9tYXhTY3JvbGwoZWxlbWVudCwgaG9yaXpvbnRhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIChlbGVtZW50LCBob3Jpem9udGFsKSB7XG4gIHJldHVybiBfZ2V0U2Nyb2xsRnVuYyhfdG9BcnJheShlbGVtZW50KVswXSwgaG9yaXpvbnRhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuZ2V0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gX2lkc1tpZF07XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF90cmlnZ2Vycy5zbGljZSgwKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuaXNTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIV9sYXN0U2Nyb2xsVGltZTtcbn07XG5cblNjcm9sbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgYSA9IF9saXN0ZW5lcnNbdHlwZV0gfHwgKF9saXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG4gIH5hLmluZGV4T2YoY2FsbGJhY2spIHx8IGEucHVzaChjYWxsYmFjayk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdLFxuICAgICAgaSA9IGEgJiYgYS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgaSA+PSAwICYmIGEuc3BsaWNlKGksIDEpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5iYXRjaCA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIHZhcnNDb3B5ID0ge30sXG4gICAgICBpbnRlcnZhbCA9IHZhcnMuaW50ZXJ2YWwgfHwgMC4wMTYsXG4gICAgICBiYXRjaE1heCA9IHZhcnMuYmF0Y2hNYXggfHwgMWU5LFxuICAgICAgcHJveHlDYWxsYmFjayA9IGZ1bmN0aW9uIHByb3h5Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgdHJpZ2dlcnMgPSBbXSxcbiAgICAgICAgZGVsYXkgPSBnc2FwLmRlbGF5ZWRDYWxsKGludGVydmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50cywgdHJpZ2dlcnMpO1xuICAgICAgZWxlbWVudHMgPSBbXTtcbiAgICAgIHRyaWdnZXJzID0gW107XG4gICAgfSkucGF1c2UoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYpIHtcbiAgICAgIGVsZW1lbnRzLmxlbmd0aCB8fCBkZWxheS5yZXN0YXJ0KHRydWUpO1xuICAgICAgZWxlbWVudHMucHVzaChzZWxmLnRyaWdnZXIpO1xuICAgICAgdHJpZ2dlcnMucHVzaChzZWxmKTtcbiAgICAgIGJhdGNoTWF4IDw9IGVsZW1lbnRzLmxlbmd0aCAmJiBkZWxheS5wcm9ncmVzcygxKTtcbiAgICB9O1xuICB9LFxuICAgICAgcDtcblxuICBmb3IgKHAgaW4gdmFycykge1xuICAgIHZhcnNDb3B5W3BdID0gcC5zdWJzdHIoMCwgMikgPT09IFwib25cIiAmJiBfaXNGdW5jdGlvbih2YXJzW3BdKSAmJiBwICE9PSBcIm9uUmVmcmVzaEluaXRcIiA/IHByb3h5Q2FsbGJhY2socCwgdmFyc1twXSkgOiB2YXJzW3BdO1xuICB9XG5cbiAgaWYgKF9pc0Z1bmN0aW9uKGJhdGNoTWF4KSkge1xuICAgIGJhdGNoTWF4ID0gYmF0Y2hNYXgoKTtcblxuICAgIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInJlZnJlc2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGJhdGNoTWF4ID0gdmFycy5iYXRjaE1heCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gICAgZm9yIChwIGluIHZhcnNDb3B5KSB7XG4gICAgICBjb25maWdbcF0gPSB2YXJzQ29weVtwXTtcbiAgICB9XG5cbiAgICBjb25maWcudHJpZ2dlciA9IHRhcmdldDtcbiAgICByZXN1bHQucHVzaChTY3JvbGxUcmlnZ2VyLmNyZWF0ZShjb25maWcpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblNjcm9sbFRyaWdnZXIuc29ydCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHJldHVybiBfdHJpZ2dlcnMuc29ydChmdW5jIHx8IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIChhLnZhcnMucmVmcmVzaFByaW9yaXR5IHx8IDApICogLTFlNiArIGEuc3RhcnQgLSAoYi5zdGFydCArIChiLnZhcnMucmVmcmVzaFByaW9yaXR5IHx8IDApICogLTFlNik7XG4gIH0pO1xufTtcblxuX2dldEdTQVAoKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZXhwb3J0IHsgU2Nyb2xsVHJpZ2dlciBhcyBkZWZhdWx0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3NhcC9TY3JvbGxUcmlnZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2NrcyBGcm9udGVuZCBKU1xuICpcbiAqIEFsbCBibG9ja3MgZnJvbnRlbmQgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0IFwiLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL2Zyb250ZW5kLmpzXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vKipcbiAqIEJsb2NrIEZyb250ZW5kXG4gKi9cblxuZnVuY3Rpb24gcmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKSB7XG5cdGlmIChZVCAmJiBZVC5QbGF5ZXIpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRsZXQgcGxheWVyID0gbmV3IFlULlBsYXllcihwbGF5ZXJJRCwge1xuXHRcdFx0cGxheWVyVmFyczoge1xuXHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0Y29udHJvbHM6IDAsXG5cdFx0XHRcdGRpc2FibGVrYjogMCxcblx0XHRcdFx0YXV0b2hpZGU6IDEsXG5cdFx0XHRcdHdtb2RlOiBcIm9wYXF1ZVwiLFxuXHRcdFx0XHRoZDogMSxcblx0XHRcdFx0ZW5hYmxlanNhcGk6IDEsXG5cdFx0XHRcdGxvb3A6IDEsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdGl2X2xvYWRfcG9saWN5OiAzLFxuXHRcdFx0XHRyZWw6IDAsXG5cdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiAxLFxuXHRcdFx0XHRwbGF5bGlzdDogdmlkZW9JRFxuXHRcdFx0fSxcblx0XHRcdHZpZGVvSWQ6IHZpZGVvSUQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0ZXZlbnQudGFyZ2V0Lm11dGUoKTtcblx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXG5cdC8vIHRoaXMgLmM5LXZpZGVvIGVsZW1lbnQgLT4gLmM5LWVtYmVkLWNvbnRhaW5lciAtPiAuYzktdmlkZW8tY29udGFpbmVyXG5cdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcblx0ZXZlbnQudGFyZ2V0LmYucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjOS12aWRlb1wiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbWJlZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcGxheWVySUQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cdFx0bGV0IGlkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcInZpZGVvLWlkXCIpO1xuXHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHR9XG5cblx0Ly8gaWYgdmlkZW8gY3VzdG9tIGVsZW1lbnRzIGFyZSBwcmVzZW50XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5cdCQoXCIuYzktdmlkZW8tY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgY2hlY2sgPSAkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykub24oXCJjYW5wbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzIiwiLyoqXG4gKiBBbmltYXRpb25zIEZyb250ZW5kXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tQ29uZmlnIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdC8vIHNpbXBsZSB0aW1lbGluZSBzZXR1cHNcblx0Y29uc3QgZ3NhcCA9IHdpbmRvdy5nc2FwO1xuXHRjb25zdCBTY3JvbGxUcmlnZ2VyID0gd2luZG93LlNjcm9sbFRyaWdnZXI7XG5cdC8vIHJlZ2lzdGVyIHBsdWdpblxuXHRnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5cdGNvbnN0IGFuaW1hdGVUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWM5LWFuaW1hdGVdXCIpO1xuXHQvLyBjb25zb2xlLmxvZyhhbmltYXRlVGFyZ2V0cyk7XG5cblx0Ly9zZXR1cCBnc2FwXG5cdGZvciAobGV0IGVsZW1lbnQgb2YgYW5pbWF0ZVRhcmdldHMpIHtcblx0XHRjb25zdCBhbmltYXRlVmFsID0gZWxlbWVudC5kYXRhc2V0LmM5QW5pbWF0ZTtcblx0XHRjb25zdCBhbmltYXRlRGVsYXkgPSBlbGVtZW50LmRhdGFzZXQuYzlBbmltYXRlRGVsYXk7XG5cdFx0Y29uc3QgYW5pbWF0ZVNwZWVkID0gZWxlbWVudC5kYXRhc2V0LmM5QW5pbWF0ZVNwZWVkO1xuXHRcdGxldCBhbmltYXRlU2NydWIgPSBlbGVtZW50LmRhdGFzZXQuYzlBbmltYXRlU2NydWI7XG5cdFx0Ly8gY29uc29sZS5sb2coYW5pbWF0ZVZhbCwgYW5pbWF0ZURlbGF5LCBhbmltYXRlU3BlZWQpO1xuXHRcdGNvbnN0IGN1c3RvbUNvbmZpZyA9IGNyZWF0ZUN1c3RvbUNvbmZpZyhcblx0XHRcdGFuaW1hdGVWYWwsXG5cdFx0XHRhbmltYXRlRGVsYXksXG5cdFx0XHRhbmltYXRlU3BlZWRcblx0XHQpO1xuXHRcdC8vIHN0cmluZyB0byBib29sZWFuXG5cdFx0YW5pbWF0ZVNjcnViID0gXCJ0cnVlXCIgPT09IGFuaW1hdGVTY3J1Yjtcblx0XHRnc2FwLmZyb21UbyhlbGVtZW50LCBjdXN0b21Db25maWdbMF0sIHtcblx0XHRcdC4uLmN1c3RvbUNvbmZpZ1sxXSxcblx0XHRcdHNjcm9sbFRyaWdnZXI6IHtcblx0XHRcdFx0dHJpZ2dlcjogZWxlbWVudCxcblx0XHRcdFx0c2NydWI6IGFuaW1hdGVTY3J1YlxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FuaW1hdGlvbnMtcGFuZWwvZnJvbnRlbmQuanMiLCIvKiFcbiAqIENTU1BsdWdpbiAzLjUuMFxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMDgtMjAyMCwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IGdzYXAsIF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBnZXRVbml0LCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfY2hlY2tQbHVnaW4sIF9yZXBsYWNlUmFuZG9tLCBfcGx1Z2lucywgR1NDYWNoZSwgUHJvcFR3ZWVuLCBfY29uZmlnLCBfdGlja2VyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtIC8vZm9yIHRoZSBjb21tZW50ZWQtb3V0IGNsYXNzTmFtZSBmZWF0dXJlLlxufSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcblxudmFyIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWxlbWVudCxcbiAgICBfcGx1Z2luSW5pdHRlZCxcbiAgICBfdGVtcERpdixcbiAgICBfdGVtcERpdlN0eWxlcixcbiAgICBfcmVjZW50U2V0dGVyUGx1Z2luLFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3BzID0ge30sXG4gICAgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuICAgIF9ERUcyUkFEID0gTWF0aC5QSSAvIDE4MCxcbiAgICBfYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9ob3Jpem9udGFsRXhwID0gLyg/OmxlZnR8cmlnaHR8d2lkdGh8bWFyZ2lufHBhZGRpbmd8eCkvaSxcbiAgICBfY29tcGxleEV4cCA9IC9bXFxzLFxcKF1cXFMvLFxuICAgIF9wcm9wZXJ0eUFsaWFzZXMgPSB7XG4gIGF1dG9BbHBoYTogXCJvcGFjaXR5LHZpc2liaWxpdHlcIixcbiAgc2NhbGU6IFwic2NhbGVYLHNjYWxlWVwiLFxuICBhbHBoYTogXCJvcGFjaXR5XCJcbn0sXG4gICAgX3JlbmRlckNTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BXaXRoRW5kID0gZnVuY3Rpb24gX3JlbmRlclByb3BXaXRoRW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPT09IDEgPyBkYXRhLmUgOiBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyhyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICAvL2lmIHVuaXRzIGNoYW5nZSwgd2UgbmVlZCBhIHdheSB0byByZW5kZXIgdGhlIG9yaWdpbmFsIHVuaXQvdmFsdWUgd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgKHJhdGlvOjApXG5fcmVuZGVyUm91bmRlZENTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyUm91bmRlZENTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YS5zICsgZGF0YS5jICogcmF0aW87XG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCB+fih2YWx1ZSArICh2YWx1ZSA8IDAgPyAtLjUgOiAuNSkpICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZShyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvICE9PSAxID8gZGF0YS5iIDogZGF0YS5lLCBkYXRhKTtcbn0sXG4gICAgX3NldHRlckNTU1N0eWxlID0gZnVuY3Rpb24gX3NldHRlckNTU1N0eWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJDU1NQcm9wID0gZnVuY3Rpb24gX3NldHRlckNTU1Byb3AodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGUgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcC5zY2FsZVggPSB0YXJnZXQuX2dzYXAuc2NhbGVZID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlLnNjYWxlWCA9IGNhY2hlLnNjYWxlWSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJ0cmFuc2Zvcm1cIixcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIixcbiAgICBfc3VwcG9ydHMzRCxcbiAgICBfY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUsIG5zKSB7XG4gIHZhciBlID0gX2RvYy5jcmVhdGVFbGVtZW50TlMgPyBfZG9jLmNyZWF0ZUVsZW1lbnROUygobnMgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBzZXJ2ZXJzIHN3YXAgaW4gaHR0cHMgZm9yIGh0dHAgaW4gdGhlIG5hbWVzcGFjZSB3aGljaCBjYW4gYnJlYWsgdGhpbmdzLCBtYWtpbmcgXCJzdHlsZVwiIGluYWNjZXNzaWJsZS5cblxuICByZXR1cm4gZS5zdHlsZSA/IGUgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBlbnZpcm9ubWVudHMgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBlbGVtZW50J3Mgc3R5bGUgd2hlbiBjcmVhdGVkIHdpdGggYSBuYW1lc3BhY2UgaW4gd2hpY2ggY2FzZSB3ZSBkZWZhdWx0IHRvIHRoZSBzdGFuZGFyZCBjcmVhdGVFbGVtZW50KCkgdG8gd29yayBhcm91bmQgdGhlIGlzc3VlLiBBbHNvIG5vdGUgdGhhdCB3aGVuIEdTQVAgaXMgZW1iZWRkZWQgZGlyZWN0bHkgaW5zaWRlIGFuIFNWRyBmaWxlLCBjcmVhdGVFbGVtZW50KCkgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBzdHlsZSBvYmplY3QgaW4gRmlyZWZveCAoc2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjAyMTUtcHJvYmxlbS11c2luZy10d2Vlbm1heC1pbi1zdGFuZGFsb25lLXNlbGYtY29udGFpbmluZy1zdmctZmlsZS1lcnItY2Fubm90LXNldC1wcm9wZXJ0eS1jc3N0ZXh0LW9mLXVuZGVmaW5lZC8pLlxufSxcbiAgICBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHNraXBQcmVmaXhGYWxsYmFjaykge1xuICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gIHJldHVybiBjc1twcm9wZXJ0eV0gfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCAhc2tpcFByZWZpeEZhbGxiYWNrICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSkgfHwgcHJvcGVydHksIDEpIHx8IFwiXCI7IC8vY3NzIHZhcmlhYmxlcyBtYXkgbm90IG5lZWQgY2FwcyBzd2FwcGVkIG91dCBmb3IgZGFzaGVzIGFuZCBsb3dlcmNhc2UuXG59LFxuICAgIF9wcmVmaXhlcyA9IFwiTyxNb3osbXMsTXMsV2Via2l0XCIuc3BsaXQoXCIsXCIpLFxuICAgIF9jaGVja1Byb3BQcmVmaXggPSBmdW5jdGlvbiBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5LCBlbGVtZW50LCBwcmVmZXJQcmVmaXgpIHtcbiAgdmFyIGUgPSBlbGVtZW50IHx8IF90ZW1wRGl2LFxuICAgICAgcyA9IGUuc3R5bGUsXG4gICAgICBpID0gNTtcblxuICBpZiAocHJvcGVydHkgaW4gcyAmJiAhcHJlZmVyUHJlZml4KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cigxKTtcblxuICB3aGlsZSAoaS0tICYmICEoX3ByZWZpeGVzW2ldICsgcHJvcGVydHkgaW4gcykpIHt9XG5cbiAgcmV0dXJuIGkgPCAwID8gbnVsbCA6IChpID09PSAzID8gXCJtc1wiIDogaSA+PSAwID8gX3ByZWZpeGVzW2ldIDogXCJcIikgKyBwcm9wZXJ0eTtcbn0sXG4gICAgX2luaXRDb3JlID0gZnVuY3Rpb24gX2luaXRDb3JlKCkge1xuICBpZiAoX3dpbmRvd0V4aXN0cygpICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgIF93aW4gPSB3aW5kb3c7XG4gICAgX2RvYyA9IF93aW4uZG9jdW1lbnQ7XG4gICAgX2RvY0VsZW1lbnQgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfdGVtcERpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpIHx8IHtcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gICAgX3RlbXBEaXZTdHlsZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBfdHJhbnNmb3JtUHJvcCA9IF9jaGVja1Byb3BQcmVmaXgoX3RyYW5zZm9ybVByb3ApO1xuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiO1xuICAgIF90ZW1wRGl2LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci13aWR0aDowO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowXCI7IC8vbWFrZSBzdXJlIHRvIG92ZXJyaWRlIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IG1heSBjb250YW1pbmF0ZSBtZWFzdXJlbWVudHMsIGluIGNhc2UgdGhlIHVzZXIgaGFzIG92ZXJyZWFjaGluZyBzdHlsZSBzaGVldHMuXG5cbiAgICBfc3VwcG9ydHMzRCA9ICEhX2NoZWNrUHJvcFByZWZpeChcInBlcnNwZWN0aXZlXCIpO1xuICAgIF9wbHVnaW5Jbml0dGVkID0gMTtcbiAgfVxufSxcbiAgICBfZ2V0QkJveEhhY2sgPSBmdW5jdGlvbiBfZ2V0QkJveEhhY2soc3dhcElmUG9zc2libGUpIHtcbiAgLy93b3JrcyBhcm91bmQgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgdGhhdCBkb24ndCBjb3JyZWN0bHkgcmVwb3J0IGdldEJCb3goKSBvbiBTVkcgZWxlbWVudHMgaW5zaWRlIGEgPGRlZnM+IGVsZW1lbnQgYW5kL29yIDxtYXNrPi4gV2UgdHJ5IGNyZWF0aW5nIGFuIFNWRywgYWRkaW5nIGl0IHRvIHRoZSBkb2N1bWVudEVsZW1lbnQgYW5kIHRvc3MgdGhlIGVsZW1lbnQgaW4gdGhlcmUgc28gdGhhdCBpdCdzIGRlZmluaXRlbHkgcGFydCBvZiB0aGUgcmVuZGVyaW5nIHRyZWUsIHRoZW4gZ3JhYiB0aGUgYmJveCBhbmQgaWYgaXQgd29ya3MsIHdlIGFjdHVhbGx5IHN3YXAgb3V0IHRoZSBvcmlnaW5hbCBnZXRCQm94KCkgbWV0aG9kIGZvciBvdXIgb3duIHRoYXQgZG9lcyB0aGVzZSBleHRyYSBzdGVwcyB3aGVuZXZlciBnZXRCQm94IGlzIG5lZWRlZC4gVGhpcyBoZWxwcyBlbnN1cmUgdGhhdCBwZXJmb3JtYW5jZSBpcyBvcHRpbWFsIChvbmx5IGRvIGFsbCB0aGVzZSBleHRyYSBzdGVwcyB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5Li4ubW9zdCBlbGVtZW50cyBkb24ndCBuZWVkIGl0KS5cbiAgdmFyIHN2ZyA9IF9jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHRoaXMub3duZXJTVkdFbGVtZW50ICYmIHRoaXMub3duZXJTVkdFbGVtZW50LmdldEF0dHJpYnV0ZShcInhtbG5zXCIpIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiksXG4gICAgICBvbGRQYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUsXG4gICAgICBvbGRTaWJsaW5nID0gdGhpcy5uZXh0U2libGluZyxcbiAgICAgIG9sZENTUyA9IHRoaXMuc3R5bGUuY3NzVGV4dCxcbiAgICAgIGJib3g7XG5cbiAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICBzdmcuYXBwZW5kQ2hpbGQodGhpcyk7XG4gIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBpZiAoc3dhcElmUG9zc2libGUpIHtcbiAgICB0cnkge1xuICAgICAgYmJveCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgdGhpcy5fZ3NhcEJCb3ggPSB0aGlzLmdldEJCb3g7IC8vc3RvcmUgdGhlIG9yaWdpbmFsXG5cbiAgICAgIHRoaXMuZ2V0QkJveCA9IF9nZXRCQm94SGFjaztcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9IGVsc2UgaWYgKHRoaXMuX2dzYXBCQm94KSB7XG4gICAgYmJveCA9IHRoaXMuX2dzYXBCQm94KCk7XG4gIH1cblxuICBpZiAob2xkUGFyZW50KSB7XG4gICAgaWYgKG9sZFNpYmxpbmcpIHtcbiAgICAgIG9sZFBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgb2xkU2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZChzdmcpO1xuXG4gIHRoaXMuc3R5bGUuY3NzVGV4dCA9IG9sZENTUztcbiAgcmV0dXJuIGJib3g7XG59LFxuICAgIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3MgPSBmdW5jdGlvbiBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgYXR0cmlidXRlc0FycmF5KSB7XG4gIHZhciBpID0gYXR0cmlidXRlc0FycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldEJCb3ggPSBmdW5jdGlvbiBfZ2V0QkJveCh0YXJnZXQpIHtcbiAgdmFyIGJvdW5kcztcblxuICB0cnkge1xuICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCQm94KCk7IC8vRmlyZWZveCB0aHJvd3MgZXJyb3JzIGlmIHlvdSB0cnkgY2FsbGluZyBnZXRCQm94KCkgb24gYW4gU1ZHIGVsZW1lbnQgdGhhdCdzIG5vdCByZW5kZXJlZCAobGlrZSBpbiBhIDxzeW1ib2w+IG9yIDxkZWZzPikuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYxMjExOFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSk7XG4gIH1cblxuICBib3VuZHMgJiYgKGJvdW5kcy53aWR0aCB8fCBib3VuZHMuaGVpZ2h0KSB8fCB0YXJnZXQuZ2V0QkJveCA9PT0gX2dldEJCb3hIYWNrIHx8IChib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpKTsgLy9zb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIG1pc3JlcG9ydCB0aGUgYm91bmRzIGlmIHRoZSBlbGVtZW50IGhhcyB6ZXJvIHdpZHRoIGFuZCBoZWlnaHQgKGl0IGp1c3QgYXNzdW1lcyBpdCdzIGF0IHg6MCwgeTowKSwgdGh1cyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGdyYWIgdGhlIHBvc2l0aW9uIGluIHRoYXQgY2FzZS5cblxuICByZXR1cm4gYm91bmRzICYmICFib3VuZHMud2lkdGggJiYgIWJvdW5kcy54ICYmICFib3VuZHMueSA/IHtcbiAgICB4OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInhcIiwgXCJjeFwiLCBcIngxXCJdKSB8fCAwLFxuICAgIHk6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieVwiLCBcImN5XCIsIFwieTFcIl0pIHx8IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH0gOiBib3VuZHM7XG59LFxuICAgIF9pc1NWRyA9IGZ1bmN0aW9uIF9pc1NWRyhlKSB7XG4gIHJldHVybiAhIShlLmdldENUTSAmJiAoIWUucGFyZW50Tm9kZSB8fCBlLm93bmVyU1ZHRWxlbWVudCkgJiYgX2dldEJCb3goZSkpO1xufSxcbiAgICAvL3JlcG9ydHMgaWYgdGhlIGVsZW1lbnQgaXMgYW4gU1ZHIG9uIHdoaWNoIGdldEJCb3goKSBhY3R1YWxseSB3b3Jrc1xuX3JlbW92ZVByb3BlcnR5ID0gZnVuY3Rpb24gX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgaWYgKHByb3BlcnR5KSB7XG4gICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlO1xuXG4gICAgaWYgKHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcyAmJiBwcm9wZXJ0eSAhPT0gX3RyYW5zZm9ybU9yaWdpblByb3ApIHtcbiAgICAgIHByb3BlcnR5ID0gX3RyYW5zZm9ybVByb3A7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkuc3Vic3RyKDAsIDIpID09PSBcIm1zXCIgfHwgcHJvcGVydHkuc3Vic3RyKDAsIDYpID09PSBcIndlYmtpdFwiKSB7XG4gICAgICAgIC8vTWljcm9zb2Z0IGFuZCBzb21lIFdlYmtpdCBicm93c2VycyBkb24ndCBjb25mb3JtIHRvIHRoZSBzdGFuZGFyZCBvZiBjYXBpdGFsaXppbmcgdGhlIGZpcnN0IHByZWZpeCBjaGFyYWN0ZXIsIHNvIHdlIGFkanVzdCBzbyB0aGF0IHdoZW4gd2UgcHJlZml4IHRoZSBjYXBzIHdpdGggYSBkYXNoLCBpdCdzIGNvcnJlY3QgKG90aGVyd2lzZSBpdCdkIGJlIFwibXMtdHJhbnNmb3JtXCIgaW5zdGVhZCBvZiBcIi1tcy10cmFuc2Zvcm1cIiBmb3IgSUU5LCBmb3IgZXhhbXBsZSlcbiAgICAgICAgcHJvcGVydHkgPSBcIi1cIiArIHByb3BlcnR5O1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9ub3RlOiBvbGQgdmVyc2lvbnMgb2YgSUUgdXNlIFwicmVtb3ZlQXR0cmlidXRlKClcIiBpbnN0ZWFkIG9mIFwicmVtb3ZlUHJvcGVydHkoKVwiXG4gICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICAgIH1cbiAgfVxufSxcbiAgICBfYWRkTm9uVHdlZW5pbmdQVCA9IGZ1bmN0aW9uIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgYmVnaW5uaW5nLCBlbmQsIG9ubHlTZXRBdEVuZCkge1xuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIG9ubHlTZXRBdEVuZCA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUpO1xuICBwbHVnaW4uX3B0ID0gcHQ7XG4gIHB0LmIgPSBiZWdpbm5pbmc7XG4gIHB0LmUgPSBlbmQ7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9ub25Db252ZXJ0aWJsZVVuaXRzID0ge1xuICBkZWc6IDEsXG4gIHJhZDogMSxcbiAgdHVybjogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICh0b1BlcmNlbnQgJiYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gfHwgfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSkpIHtcbiAgICAvL3RyYW5zZm9ybXMgYW5kIGJvcmRlclJhZGl1cyBhcmUgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaXRzZWxmIVxuICAgIHJldHVybiBfcm91bmQoY3VyVmFsdWUgLyAoaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldKSAqIGFtb3VudCk7XG4gIH1cblxuICBzdHlsZVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gPSBhbW91bnQgKyAodG9QaXhlbHMgPyBjdXJVbml0IDogdW5pdCk7XG4gIHBhcmVudCA9IH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikgfHwgdW5pdCA9PT0gXCJlbVwiICYmIHRhcmdldC5hcHBlbmRDaGlsZCAmJiAhaXNSb290U1ZHID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gIH1cblxuICBpZiAoIXBhcmVudCB8fCBwYXJlbnQgPT09IF9kb2MgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgIHBhcmVudCA9IF9kb2MuYm9keTtcbiAgfVxuXG4gIGNhY2hlID0gcGFyZW50Ll9nc2FwO1xuXG4gIGlmIChjYWNoZSAmJiB0b1BlcmNlbnQgJiYgY2FjaGUud2lkdGggJiYgaG9yaXpvbnRhbCAmJiBjYWNoZS50aW1lID09PSBfdGlja2VyLnRpbWUpIHtcbiAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICB9IGVsc2Uge1xuICAgICh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmIChzdHlsZS5wb3NpdGlvbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJwb3NpdGlvblwiKSk7XG4gICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7IC8vIGxpa2UgZm9yIGJvcmRlclJhZGl1cywgaWYgaXQncyBhICUgd2UgbXVzdCBoYXZlIGl0IHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgaXRzZWxmIGJ1dCB0aGF0IG1heSBub3QgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgb3IgcG9zaXRpb246IGFic29sdXRlIGluIHdoaWNoIGNhc2UgaXQnZCBnbyB1cCB0aGUgY2hhaW4gdW50aWwgaXQgZmluZHMgaXRzIG9mZnNldFBhcmVudCAoYmFkKS4gcG9zaXRpb246IHN0YXRpYyBwcm90ZWN0cyBhZ2FpbnN0IHRoYXQuXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHB4ID0gX3RlbXBEaXZbbWVhc3VyZVByb3BlcnR5XTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgaWYgKGhvcml6b250YWwgJiYgdG9QZXJjZW50KSB7XG4gICAgICBjYWNoZSA9IF9nZXRDYWNoZShwYXJlbnQpO1xuICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgIGNhY2hlLndpZHRoID0gcGFyZW50W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9yb3VuZCh0b1BpeGVscyA/IHB4ICogY3VyVmFsdWUgLyBhbW91bnQgOiBweCAmJiBjdXJWYWx1ZSA/IGFtb3VudCAvIHB4ICogY3VyVmFsdWUgOiAwKTtcbn0sXG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICB2YXIgdmFsdWU7XG4gIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgcHJvcGVydHkgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcblxuICAgIGlmICh+cHJvcGVydHkuaW5kZXhPZihcIixcIikpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgdmFsdWUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKTtcbiAgICB2YWx1ZSA9IHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybU9yaWdpblwiID8gdmFsdWVbcHJvcGVydHldIDogX2ZpcnN0VHdvT25seShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSkgKyBcIiBcIiArIHZhbHVlLnpPcmlnaW4gKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0YXJnZXQuc3R5bGVbcHJvcGVydHldO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJhdXRvXCIgfHwgdW5jYWNoZSB8fCB+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcImNhbGMoXCIpKSB7XG4gICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApOyAvLyBub3RlOiBzb21lIGJyb3dzZXJzLCBsaWtlIEZpcmVmb3gsIGRvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5ISBJbnN0ZWFkLCBpdCBvbmx5IHJlcG9ydHMgZXZlcnkgY29ybmVyIGxpa2UgIGJvcmRlclRvcExlZnRSYWRpdXNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pdCAmJiAhfih2YWx1ZSArIFwiXCIpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSBcIm5vbmVcIikge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgbGlrZSBTYWZhcmkgYWN0dWFsbHkgUFJFRkVSIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBhbmQgbWlzLXJlcG9ydCB0aGUgdW5wcmVmaXhlZCB2YWx1ZSBsaWtlIGNsaXBQYXRoIChCVUcpLiBJbiBvdGhlciB3b3JkcywgZXZlbiB0aG91Z2ggY2xpcFBhdGggZXhpc3RzIGluIHRoZSBzdHlsZSAoXCJjbGlwUGF0aFwiIGluIHRhcmdldC5zdHlsZSkgYW5kIGl0J3Mgc2V0IGluIHRoZSBDU1MgcHJvcGVybHkgKGFsb25nIHdpdGggLXdlYmtpdC1jbGlwLXBhdGgpLCBTYWZhcmkgcmVwb3J0cyBjbGlwUGF0aCBhcyBcIm5vbmVcIiB3aGVyZWFzIFdlYmtpdENsaXBQYXRoIHJlcG9ydHMgYWNjdXJhdGVseSBsaWtlIFwiZWxsaXBzZSgxMDAlIDAlIGF0IDUwJSAwJSlcIiwgc28gaW4gdGhpcyBjYXNlIHdlIG11c3QgU1dJVENIIHRvIHVzaW5nIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8xODMxMC1jbGlwcGF0aC1kb2VzbnQtd29yay1vbi1pb3MvXG4gICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICBpZiAocyAmJiBzICE9PSBzdGFydCkge1xuICAgICAgcHJvcCA9IHA7XG4gICAgICBzdGFydCA9IHM7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcImJvcmRlckNvbG9yXCIpIHtcbiAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpOyAvLyBGaXJlZm94IGJ1ZzogYWx3YXlzIHJlcG9ydHMgXCJib3JkZXJDb2xvclwiIGFzIFwiXCIsIHNvIHdlIG11c3QgZmFsbCBiYWNrIHRvIGJvcmRlclRvcENvbG9yLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNDU4My1ob3ctdG8tcmV0dXJuLWNvbG9ycy10aGF0LWktaGFkLWFmdGVyLXJldmVyc2UvXG4gICAgfVxuICB9XG5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LnN0eWxlLCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZyksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGEsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydFZhbHVlcyxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgY29sb3IsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIGVuZFVuaXQsXG4gICAgICBzdGFydFVuaXQsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIGVuZFZhbHVlcztcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuIElmIGNvbG9ycyBhcmUgZm91bmQsIGl0IHJldHVybnMgdHJ1ZSBhbmQgdGhlbiB3ZSBtdXN0IG1hdGNoIHdoZXJlIHRoZSBjb2xvciBzaG93cyB1cCBvcmRlci13aXNlIGJlY2F1c2UgZm9yIHRoaW5ncyBsaWtlIGJveFNoYWRvdywgc29tZXRpbWVzIHRoZSBicm93c2VyIHByb3ZpZGVzIHRoZSBjb21wdXRlZCB2YWx1ZXMgd2l0aCB0aGUgY29sb3IgRklSU1QsIGJ1dCB0aGUgdXNlciBwcm92aWRlcyBpdCB3aXRoIHRoZSBjb2xvciBMQVNULCBzbyBmbGlwIHRoZW0gaWYgbmVjZXNzYXJ5LiBTYW1lIGZvciBkcm9wLXNoYWRvdygpLlxuXG5cbiAgc3RhcnQgPSBhWzBdO1xuICBlbmQgPSBhWzFdO1xuICBzdGFydFZhbHVlcyA9IHN0YXJ0Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gIGVuZFZhbHVlcyA9IGVuZC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuXG4gIGlmIChlbmRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKHJlc3VsdCA9IF9udW1XaXRoVW5pdEV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZFZhbHVlID0gcmVzdWx0WzBdO1xuICAgICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIiB8fCBjaHVuay5zdWJzdHIoLTUpID09PSBcImhzbGEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVmFsdWUgIT09IChzdGFydFZhbHVlID0gc3RhcnRWYWx1ZXNbbWF0Y2hJbmRleCsrXSB8fCBcIlwiKSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcbiAgICAgICAgc3RhcnRVbml0ID0gc3RhcnRWYWx1ZS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgcmVsYXRpdmUgPSBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICAgIGVuZFVuaXQgPSBlbmRWYWx1ZS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGluZGV4ID0gX251bVdpdGhVbml0RXhwLmxhc3RJbmRleCAtIGVuZFVuaXQubGVuZ3RoO1xuXG4gICAgICAgIGlmICghZW5kVW5pdCkge1xuICAgICAgICAgIC8vaWYgc29tZXRoaW5nIGxpa2UgXCJwZXJzcGVjdGl2ZTozMDBcIiBpcyBwYXNzZWQgaW4gYW5kIHdlIG11c3QgYWRkIGEgdW5pdCB0byB0aGUgZW5kXG4gICAgICAgICAgZW5kVW5pdCA9IGVuZFVuaXQgfHwgX2NvbmZpZy51bml0c1twcm9wXSB8fCBzdGFydFVuaXQ7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZCArPSBlbmRVbml0O1xuICAgICAgICAgICAgcHQuZSArPSBlbmRVbml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgfHwgMDtcbiAgICAgICAgfSAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cblxuICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICBjOiByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpKSB7XG4gICAgcHQuZSA9IDA7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cbiAgfVxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDM2OC1wb3NzaWJsZS1nc2FwLWJ1Zy1zd2l0Y2hpbmctY2xhc3NuYW1lcy1pbi1jaHJvbWUvLlxuICBcdFx0c3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG4gIFx0fVxuICBcdF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHRydWUpOyAvL3RvIGNsZWFyIHRoZSBjYWNoaW5nIG9mIHRyYW5zZm9ybXNcbiAgXHRkYXRhLmNzcyA9IG5ldyBnc2FwLnBsdWdpbnMuY3NzKCk7XG4gIFx0ZGF0YS5jc3MuaW5pdCh0YXJnZXQsIGNoYW5naW5nVmFycywgdHdlZW4pO1xuICBcdHBsdWdpbi5fcHJvcHMucHVzaCguLi5kYXRhLmNzcy5fcHJvcHMpO1xuICBcdHJldHVybiAxO1xuICB9XG4gICovXG5cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFJBTlNGT1JNU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzID0ge30sXG4gICAgX2lzTnVsbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9pc051bGxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG59LFxuICAgIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCkge1xuICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgcmV0dXJuIF9pc051bGxUcmFuc2Zvcm0obWF0cml4U3RyaW5nKSA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4U3RyaW5nLnN1YnN0cig3KS5tYXRjaChfbnVtRXhwKS5tYXAoX3JvdW5kKTtcbn0sXG4gICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgcGFyZW50LFxuICAgICAgbmV4dFNpYmxpbmcsXG4gICAgICB0ZW1wLFxuICAgICAgYWRkZWRUb0RPTTtcblxuICBpZiAoY2FjaGUuc3ZnICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpIHtcbiAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4OyAvL2Vuc3VyZXMgdGhhdCBldmVuIGNvbXBsZXggdmFsdWVzIGxpa2UgXCJ0cmFuc2xhdGUoNTAsNjApIHJvdGF0ZSgxMzUsMCwwKVwiIGFyZSBwYXJzZWQgYmVjYXVzZSBpdCBtYXNoZXMgaXQgaW50byBhIG1hdHJpeC5cblxuICAgIG1hdHJpeCA9IFt0ZW1wLmEsIHRlbXAuYiwgdGVtcC5jLCB0ZW1wLmQsIHRlbXAuZSwgdGVtcC5mXTtcbiAgICByZXR1cm4gbWF0cml4LmpvaW4oXCIsXCIpID09PSBcIjEsMCwwLDEsMCwwXCIgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeDtcbiAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgIC8vbm90ZTogaWYgb2Zmc2V0UGFyZW50IGlzIG51bGwsIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXNuJ3QgaW4gdGhlIG5vcm1hbCBkb2N1bWVudCBmbG93LCBsaWtlIGlmIGl0IGhhcyBkaXNwbGF5Om5vbmUgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIGRpc3BsYXk6bm9uZSkuIEZpcmVmb3ggcmV0dXJucyBudWxsIGZvciBnZXRDb21wdXRlZFN0eWxlKCkgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYW4gaWZyYW1lIHRoYXQgaGFzIGRpc3BsYXk6bm9uZS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgLy9icm93c2VycyBkb24ndCByZXBvcnQgdHJhbnNmb3JtcyBhY2N1cmF0ZWx5IHVubGVzcyB0aGUgZWxlbWVudCBpcyBpbiB0aGUgRE9NIGFuZCBoYXMgYSBkaXNwbGF5IHZhbHVlIHRoYXQncyBub3QgXCJub25lXCIuIEZpcmVmb3ggYW5kIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgcGFydGlhbCBidWcgd2hlcmUgdGhleSdsbCByZXBvcnQgdHJhbnNmb3JtcyBldmVuIGlmIGRpc3BsYXk6bm9uZSBCVVQgbm90IGFueSBwZXJjZW50YWdlLWJhc2VkIHZhbHVlcyBsaWtlIHRyYW5zbGF0ZSgtNTAlLCA4cHgpIHdpbGwgYmUgcmVwb3J0ZWQgYXMgaWYgaXQncyB0cmFuc2xhdGUoMCwgOHB4KS5cbiAgICB0ZW1wID0gc3R5bGUuZGlzcGxheTtcbiAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1XG4gICAgICBhZGRlZFRvRE9NID0gMTsgLy9mbGFnXG5cbiAgICAgIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRTaWJsaW5nO1xuXG4gICAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZCh0YXJnZXQpOyAvL3dlIG11c3QgYWRkIGl0IHRvIHRoZSBET00gaW4gb3JkZXIgdG8gZ2V0IHZhbHVlcyBwcm9wZXJseVxuXG4gICAgfVxuXG4gICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpO1xuICAgIHRlbXAgPyBzdHlsZS5kaXNwbGF5ID0gdGVtcCA6IF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIFwiZGlzcGxheVwiKTtcblxuICAgIGlmIChhZGRlZFRvRE9NKSB7XG4gICAgICBuZXh0U2libGluZyA/IHBhcmVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LCBuZXh0U2libGluZykgOiBwYXJlbnQgPyBwYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KSA6IF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcmNlMkQgJiYgbWF0cml4Lmxlbmd0aCA+IDYgPyBbbWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzVdLCBtYXRyaXhbMTJdLCBtYXRyaXhbMTNdXSA6IG1hdHJpeDtcbn0sXG4gICAgX2FwcGx5U1ZHT3JpZ2luID0gZnVuY3Rpb24gX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgb3JpZ2luLCBvcmlnaW5Jc0Fic29sdXRlLCBzbW9vdGgsIG1hdHJpeEFycmF5LCBwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICBtYXRyaXggPSBtYXRyaXhBcnJheSB8fCBfZ2V0TWF0cml4KHRhcmdldCwgdHJ1ZSksXG4gICAgICB4T3JpZ2luT2xkID0gY2FjaGUueE9yaWdpbiB8fCAwLFxuICAgICAgeU9yaWdpbk9sZCA9IGNhY2hlLnlPcmlnaW4gfHwgMCxcbiAgICAgIHhPZmZzZXRPbGQgPSBjYWNoZS54T2Zmc2V0IHx8IDAsXG4gICAgICB5T2Zmc2V0T2xkID0gY2FjaGUueU9mZnNldCB8fCAwLFxuICAgICAgYSA9IG1hdHJpeFswXSxcbiAgICAgIGIgPSBtYXRyaXhbMV0sXG4gICAgICBjID0gbWF0cml4WzJdLFxuICAgICAgZCA9IG1hdHJpeFszXSxcbiAgICAgIHR4ID0gbWF0cml4WzRdLFxuICAgICAgdHkgPSBtYXRyaXhbNV0sXG4gICAgICBvcmlnaW5TcGxpdCA9IG9yaWdpbi5zcGxpdChcIiBcIiksXG4gICAgICB4T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFswXSkgfHwgMCxcbiAgICAgIHlPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzFdKSB8fCAwLFxuICAgICAgYm91bmRzLFxuICAgICAgZGV0ZXJtaW5hbnQsXG4gICAgICB4LFxuICAgICAgeTtcblxuICBpZiAoIW9yaWdpbklzQWJzb2x1dGUpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveCh0YXJnZXQpO1xuICAgIHhPcmlnaW4gPSBib3VuZHMueCArICh+b3JpZ2luU3BsaXRbMF0uaW5kZXhPZihcIiVcIikgPyB4T3JpZ2luIC8gMTAwICogYm91bmRzLndpZHRoIDogeE9yaWdpbik7XG4gICAgeU9yaWdpbiA9IGJvdW5kcy55ICsgKH4ob3JpZ2luU3BsaXRbMV0gfHwgb3JpZ2luU3BsaXRbMF0pLmluZGV4T2YoXCIlXCIpID8geU9yaWdpbiAvIDEwMCAqIGJvdW5kcy5oZWlnaHQgOiB5T3JpZ2luKTtcbiAgfSBlbHNlIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4ICYmIChkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGMpKSB7XG4gICAgLy9pZiBpdCdzIHplcm8gKGxpa2UgaWYgc2NhbGVYIGFuZCBzY2FsZVkgYXJlIHplcm8pLCBza2lwIGl0IHRvIGF2b2lkIGVycm9ycyB3aXRoIGRpdmlkaW5nIGJ5IHplcm8uXG4gICAgeCA9IHhPcmlnaW4gKiAoZCAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoLWMgLyBkZXRlcm1pbmFudCkgKyAoYyAqIHR5IC0gZCAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHkgPSB4T3JpZ2luICogKC1iIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqIChhIC8gZGV0ZXJtaW5hbnQpIC0gKGEgKiB0eSAtIGIgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB4T3JpZ2luID0geDtcbiAgICB5T3JpZ2luID0geTtcbiAgfVxuXG4gIGlmIChzbW9vdGggfHwgc21vb3RoICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGgpIHtcbiAgICB0eCA9IHhPcmlnaW4gLSB4T3JpZ2luT2xkO1xuICAgIHR5ID0geU9yaWdpbiAtIHlPcmlnaW5PbGQ7XG4gICAgY2FjaGUueE9mZnNldCA9IHhPZmZzZXRPbGQgKyAodHggKiBhICsgdHkgKiBjKSAtIHR4O1xuICAgIGNhY2hlLnlPZmZzZXQgPSB5T2Zmc2V0T2xkICsgKHR4ICogYiArIHR5ICogZCkgLSB0eTtcbiAgfSBlbHNlIHtcbiAgICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gIH1cblxuICBjYWNoZS54T3JpZ2luID0geE9yaWdpbjtcbiAgY2FjaGUueU9yaWdpbiA9IHlPcmlnaW47XG4gIGNhY2hlLnNtb290aCA9ICEhc21vb3RoO1xuICBjYWNoZS5vcmlnaW4gPSBvcmlnaW47XG4gIGNhY2hlLm9yaWdpbklzQWJzb2x1dGUgPSAhIW9yaWdpbklzQWJzb2x1dGU7XG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBcIjBweCAwcHhcIjsgLy9vdGhlcndpc2UsIGlmIHNvbWVvbmUgc2V0cyAgYW4gb3JpZ2luIHZpYSBDU1MsIGl0IHdpbGwgbGlrZWx5IGludGVyZmVyZSB3aXRoIHRoZSBTVkcgdHJhbnNmb3JtIGF0dHJpYnV0ZSBvbmVzIChiZWNhdXNlIHJlbWVtYmVyLCB3ZSdyZSBiYWtpbmcgdGhlIG9yaWdpbiBpbnRvIHRoZSBtYXRyaXgoKSB2YWx1ZSkuXG5cbiAgaWYgKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPcmlnaW5cIiwgeE9yaWdpbk9sZCwgeE9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9yaWdpblwiLCB5T3JpZ2luT2xkLCB5T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T2Zmc2V0XCIsIHhPZmZzZXRPbGQsIGNhY2hlLnhPZmZzZXQpO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPZmZzZXRcIiwgeU9mZnNldE9sZCwgY2FjaGUueU9mZnNldCk7XG4gIH1cblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHhPcmlnaW4gKyBcIiBcIiArIHlPcmlnaW4pO1xufSxcbiAgICBfcGFyc2VUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBuZXcgR1NDYWNoZSh0YXJnZXQpO1xuXG4gIGlmIChcInhcIiBpbiBjYWNoZSAmJiAhdW5jYWNoZSAmJiAhY2FjaGUudW5jYWNoZSkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGludmVydGVkU2NhbGVYID0gY2FjaGUuc2NhbGVYIDwgMCxcbiAgICAgIHB4ID0gXCJweFwiLFxuICAgICAgZGVnID0gXCJkZWdcIixcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcbiAgbWF0cml4ID0gX2dldE1hdHJpeCh0YXJnZXQsIGNhY2hlLnN2Zyk7XG5cbiAgaWYgKGNhY2hlLnN2Zykge1xuICAgIHQxID0gIWNhY2hlLnVuY2FjaGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKTtcblxuICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIHQxIHx8IG9yaWdpbiwgISF0MSB8fCBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlLCBjYWNoZS5zbW9vdGggIT09IGZhbHNlLCBtYXRyaXgpO1xuICB9XG5cbiAgeE9yaWdpbiA9IGNhY2hlLnhPcmlnaW4gfHwgMDtcbiAgeU9yaWdpbiA9IGNhY2hlLnlPcmlnaW4gfHwgMDtcblxuICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgIGEgPSBtYXRyaXhbMF07IC8vYTExXG5cbiAgICBiID0gbWF0cml4WzFdOyAvL2EyMVxuXG4gICAgYyA9IG1hdHJpeFsyXTsgLy9hMzFcblxuICAgIGQgPSBtYXRyaXhbM107IC8vYTQxXG5cbiAgICB4ID0gYTEyID0gbWF0cml4WzRdO1xuICAgIHkgPSBhMjIgPSBtYXRyaXhbNV07IC8vMkQgbWF0cml4XG5cbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgICAgc2NhbGVZID0gTWF0aC5zcXJ0KGQgKiBkICsgYyAqIGMpO1xuICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7IC8vbm90ZTogaWYgc2NhbGVYIGlzIDAsIHdlIGNhbm5vdCBhY2N1cmF0ZWx5IG1lYXN1cmUgcm90YXRpb24uIFNhbWUgZm9yIHNrZXdYIHdpdGggYSBzY2FsZVkgb2YgMC4gVGhlcmVmb3JlLCB3ZSBkZWZhdWx0IHRvIHRoZSBwcmV2aW91c2x5IHJlY29yZGVkIHZhbHVlIChvciB6ZXJvIGlmIHRoYXQgZG9lc24ndCBleGlzdCkuXG5cbiAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICBza2V3WCAmJiAoc2NhbGVZICo9IE1hdGguY29zKHNrZXdYICogX0RFRzJSQUQpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIGNhY2hlLnggPSAoKGNhY2hlLnhQZXJjZW50ID0geCAmJiBNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApID8gMCA6IHgpICsgcHg7XG4gIGNhY2hlLnkgPSAoKGNhY2hlLnlQZXJjZW50ID0geSAmJiBNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSA/IDAgOiB5KSArIHB4O1xuICBjYWNoZS56ID0geiArIHB4O1xuICBjYWNoZS5zY2FsZVggPSBfcm91bmQoc2NhbGVYKTtcbiAgY2FjaGUuc2NhbGVZID0gX3JvdW5kKHNjYWxlWSk7XG4gIGNhY2hlLnJvdGF0aW9uID0gX3JvdW5kKHJvdGF0aW9uKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25YID0gX3JvdW5kKHJvdGF0aW9uWCkgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IF9yb3VuZChyb3RhdGlvblkpICsgZGVnO1xuICBjYWNoZS5za2V3WCA9IHNrZXdYICsgZGVnO1xuICBjYWNoZS5za2V3WSA9IHNrZXdZICsgZGVnO1xuICBjYWNoZS50cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlICsgcHg7XG5cbiAgaWYgKGNhY2hlLnpPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpbi5zcGxpdChcIiBcIilbMl0pIHx8IDApIHtcbiAgICBzdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBfZmlyc3RUd29Pbmx5KG9yaWdpbik7XG4gIH1cblxuICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gIGNhY2hlLmZvcmNlM0QgPSBfY29uZmlnLmZvcmNlM0Q7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybSA9IGNhY2hlLnN2ZyA/IF9yZW5kZXJTVkdUcmFuc2Zvcm1zIDogX3N1cHBvcnRzM0QgPyBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA6IF9yZW5kZXJOb24zRFRyYW5zZm9ybXM7XG4gIGNhY2hlLnVuY2FjaGUgPSAwO1xuICByZXR1cm4gY2FjaGU7XG59LFxuICAgIF9maXJzdFR3b09ubHkgPSBmdW5jdGlvbiBfZmlyc3RUd29Pbmx5KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgPSB2YWx1ZS5zcGxpdChcIiBcIikpWzBdICsgXCIgXCIgKyB2YWx1ZVsxXTtcbn0sXG4gICAgLy9mb3IgaGFuZGxpbmcgdHJhbnNmb3JtT3JpZ2luIHZhbHVlcywgc3RyaXBwaW5nIG91dCB0aGUgM3JkIGRpbWVuc2lvblxuX2FkZFB4VHJhbnNsYXRlID0gZnVuY3Rpb24gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgc3RhcnQsIHZhbHVlKSB7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChzdGFydCk7XG4gIHJldHVybiBfcm91bmQocGFyc2VGbG9hdChzdGFydCkgKyBwYXJzZUZsb2F0KF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHZhbHVlICsgXCJweFwiLCB1bml0KSkpICsgdW5pdDtcbn0sXG4gICAgX3JlbmRlck5vbjNEVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIGNhY2hlLnogPSBcIjBweFwiO1xuICBjYWNoZS5yb3RhdGlvblkgPSBjYWNoZS5yb3RhdGlvblggPSBcIjBkZWdcIjtcbiAgY2FjaGUuZm9yY2UzRCA9IDA7XG5cbiAgX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3plcm9EZWcgPSBcIjBkZWdcIixcbiAgICBfemVyb1B4ID0gXCIwcHhcIixcbiAgICBfZW5kUGFyZW50aGVzaXMgPSBcIikgXCIsXG4gICAgX3JlbmRlckNTU1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnksXG4gICAgICB6ID0gX3JlZi56LFxuICAgICAgcm90YXRpb24gPSBfcmVmLnJvdGF0aW9uLFxuICAgICAgcm90YXRpb25ZID0gX3JlZi5yb3RhdGlvblksXG4gICAgICByb3RhdGlvblggPSBfcmVmLnJvdGF0aW9uWCxcbiAgICAgIHNrZXdYID0gX3JlZi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZi5zY2FsZVksXG4gICAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IF9yZWYudHJhbnNmb3JtUGVyc3BlY3RpdmUsXG4gICAgICBmb3JjZTNEID0gX3JlZi5mb3JjZTNELFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICB6T3JpZ2luID0gX3JlZi56T3JpZ2luLFxuICAgICAgdHJhbnNmb3JtcyA9IFwiXCIsXG4gICAgICB1c2UzRCA9IGZvcmNlM0QgPT09IFwiYXV0b1wiICYmIHJhdGlvICYmIHJhdGlvICE9PSAxIHx8IGZvcmNlM0QgPT09IHRydWU7IC8vIFNhZmFyaSBoYXMgYSBidWcgdGhhdCBjYXVzZXMgaXQgbm90IHRvIHJlbmRlciAzRCB0cmFuc2Zvcm0tb3JpZ2luIHZhbHVlcyBwcm9wZXJseSwgc28gd2UgZm9yY2UgdGhlIHogb3JpZ2luIHRvIDAsIHJlY29yZCBpdCBpbiB0aGUgY2FjaGUsIGFuZCB0aGVuIGRvIHRoZSBtYXRoIGhlcmUgdG8gb2Zmc2V0IHRoZSB0cmFuc2xhdGUgdmFsdWVzIGFjY29yZGluZ2x5IChiYXNpY2FsbHkgZG8gdGhlIDNEIHRyYW5zZm9ybS1vcmlnaW4gcGFydCBtYW51YWxseSlcblxuXG4gIGlmICh6T3JpZ2luICYmIChyb3RhdGlvblggIT09IF96ZXJvRGVnIHx8IHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpKSB7XG4gICAgdmFyIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblkpICogX0RFRzJSQUQsXG4gICAgICAgIGExMyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgYTMzID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICBjb3M7XG5cbiAgICBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25YKSAqIF9ERUcyUkFEO1xuICAgIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB4ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeCwgYTEzICogY29zICogLXpPcmlnaW4pO1xuICAgIHkgPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB5LCAtTWF0aC5zaW4oYW5nbGUpICogLXpPcmlnaW4pO1xuICAgIHogPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB6LCBhMzMgKiBjb3MgKiAtek9yaWdpbiArIHpPcmlnaW4pO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybVBlcnNwZWN0aXZlICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInBlcnNwZWN0aXZlKFwiICsgdHJhbnNmb3JtUGVyc3BlY3RpdmUgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwidHJhbnNsYXRlKFwiICsgeFBlcmNlbnQgKyBcIiUsIFwiICsgeVBlcmNlbnQgKyBcIiUpIFwiO1xuICB9XG5cbiAgaWYgKHVzZTNEIHx8IHggIT09IF96ZXJvUHggfHwgeSAhPT0gX3plcm9QeCB8fCB6ICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSB6ICE9PSBfemVyb1B4IHx8IHVzZTNEID8gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIFwiICsgeiArIFwiKSBcIiA6IFwidHJhbnNsYXRlKFwiICsgeCArIFwiLCBcIiArIHkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb24gIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZShcIiArIHJvdGF0aW9uICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWShcIiArIHJvdGF0aW9uWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblggIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVgoXCIgKyByb3RhdGlvblggKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2tld1ggIT09IF96ZXJvRGVnIHx8IHNrZXdZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJza2V3KFwiICsgc2tld1ggKyBcIiwgXCIgKyBza2V3WSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNjYWxlKFwiICsgc2NhbGVYICsgXCIsIFwiICsgc2NhbGVZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXMgfHwgXCJ0cmFuc2xhdGUoMCwgMClcIjtcbn0sXG4gICAgX3JlbmRlclNWR1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyU1ZHVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYyID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZjIueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYyLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueSxcbiAgICAgIHJvdGF0aW9uID0gX3JlZjIucm90YXRpb24sXG4gICAgICBza2V3WCA9IF9yZWYyLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmMi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgIHhPcmlnaW4gPSBfcmVmMi54T3JpZ2luLFxuICAgICAgeU9yaWdpbiA9IF9yZWYyLnlPcmlnaW4sXG4gICAgICB4T2Zmc2V0ID0gX3JlZjIueE9mZnNldCxcbiAgICAgIHlPZmZzZXQgPSBfcmVmMi55T2Zmc2V0LFxuICAgICAgZm9yY2VDU1MgPSBfcmVmMi5mb3JjZUNTUyxcbiAgICAgIHR4ID0gcGFyc2VGbG9hdCh4KSxcbiAgICAgIHR5ID0gcGFyc2VGbG9hdCh5KSxcbiAgICAgIGExMSxcbiAgICAgIGEyMSxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHRlbXA7XG5cbiAgcm90YXRpb24gPSBwYXJzZUZsb2F0KHJvdGF0aW9uKTtcbiAgc2tld1ggPSBwYXJzZUZsb2F0KHNrZXdYKTtcbiAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcblxuICBpZiAoc2tld1kpIHtcbiAgICAvL2ZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSBjb21iaW5lIGFsbCBza2V3aW5nIGludG8gdGhlIHNrZXdYIGFuZCByb3RhdGlvbiB2YWx1ZXMuIFJlbWVtYmVyLCBhIHNrZXdZIG9mIDEwIGRlZ3JlZXMgbG9va3MgdGhlIHNhbWUgYXMgYSByb3RhdGlvbiBvZiAxMCBkZWdyZWVzIHBsdXMgYSBza2V3WCBvZiAxMCBkZWdyZWVzLlxuICAgIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG4gICAgc2tld1ggKz0gc2tld1k7XG4gICAgcm90YXRpb24gKz0gc2tld1k7XG4gIH1cblxuICBpZiAocm90YXRpb24gfHwgc2tld1gpIHtcbiAgICByb3RhdGlvbiAqPSBfREVHMlJBRDtcbiAgICBza2V3WCAqPSBfREVHMlJBRDtcbiAgICBhMTEgPSBNYXRoLmNvcyhyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTIxID0gTWF0aC5zaW4ocm90YXRpb24pICogc2NhbGVYO1xuICAgIGExMiA9IE1hdGguc2luKHJvdGF0aW9uIC0gc2tld1gpICogLXNjYWxlWTtcbiAgICBhMjIgPSBNYXRoLmNvcyhyb3RhdGlvbiAtIHNrZXdYKSAqIHNjYWxlWTtcblxuICAgIGlmIChza2V3WCkge1xuICAgICAgc2tld1kgKj0gX0RFRzJSQUQ7XG4gICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1ggLSBza2V3WSk7XG4gICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICBhMTIgKj0gdGVtcDtcbiAgICAgIGEyMiAqPSB0ZW1wO1xuXG4gICAgICBpZiAoc2tld1kpIHtcbiAgICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdZKTtcbiAgICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgICBhMTEgKj0gdGVtcDtcbiAgICAgICAgYTIxICo9IHRlbXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYTExID0gX3JvdW5kKGExMSk7XG4gICAgYTIxID0gX3JvdW5kKGEyMSk7XG4gICAgYTEyID0gX3JvdW5kKGExMik7XG4gICAgYTIyID0gX3JvdW5kKGEyMik7XG4gIH0gZWxzZSB7XG4gICAgYTExID0gc2NhbGVYO1xuICAgIGEyMiA9IHNjYWxlWTtcbiAgICBhMjEgPSBhMTIgPSAwO1xuICB9XG5cbiAgaWYgKHR4ICYmICF+KHggKyBcIlwiKS5pbmRleE9mKFwicHhcIikgfHwgdHkgJiYgIX4oeSArIFwiXCIpLmluZGV4T2YoXCJweFwiKSkge1xuICAgIHR4ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgeCwgXCJweFwiKTtcbiAgICB0eSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ5XCIsIHksIFwicHhcIik7XG4gIH1cblxuICBpZiAoeE9yaWdpbiB8fCB5T3JpZ2luIHx8IHhPZmZzZXQgfHwgeU9mZnNldCkge1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeE9yaWdpbiAtICh4T3JpZ2luICogYTExICsgeU9yaWdpbiAqIGExMikgKyB4T2Zmc2V0KTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlPcmlnaW4gLSAoeE9yaWdpbiAqIGEyMSArIHlPcmlnaW4gKiBhMjIpICsgeU9mZnNldCk7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICAvL1RoZSBTVkcgc3BlYyBkb2Vzbid0IHN1cHBvcnQgcGVyY2VudGFnZS1iYXNlZCB0cmFuc2xhdGlvbiBpbiB0aGUgXCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGUsIHNvIHdlIG1lcmdlIGl0IGludG8gdGhlIHRyYW5zbGF0aW9uIHRvIHNpbXVsYXRlIGl0LlxuICAgIHRlbXAgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeFBlcmNlbnQgLyAxMDAgKiB0ZW1wLndpZHRoKTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlQZXJjZW50IC8gMTAwICogdGVtcC5oZWlnaHQpO1xuICB9XG5cbiAgdGVtcCA9IFwibWF0cml4KFwiICsgYTExICsgXCIsXCIgKyBhMjEgKyBcIixcIiArIGExMiArIFwiLFwiICsgYTIyICsgXCIsXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0ZW1wKTtcblxuICBpZiAoZm9yY2VDU1MpIHtcbiAgICAvL3NvbWUgYnJvd3NlcnMgcHJpb3JpdGl6ZSBDU1MgdHJhbnNmb3JtcyBvdmVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlLiBXaGVuIHdlIHNlbnNlIHRoYXQgdGhlIHVzZXIgaGFzIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQsIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gdGhpcyB3YXkgKG90aGVyd2lzZSBzb21lIGJyb3dzZXIgc2ltcGx5IHdvbid0IHJlbmRlciB0aGUgIHRyYW5zZm9ybSBhdHRyaWJ1dGUgY2hhbmdlcyEpXG4gICAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRlbXA7XG4gIH1cbn0sXG4gICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUm90YXRpb25hbFByb3BUd2VlbihwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpIHtcbiAgdmFyIGNhcCA9IDM2MCxcbiAgICAgIGlzU3RyaW5nID0gX2lzU3RyaW5nKGVuZFZhbHVlKSxcbiAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpICogKGlzU3RyaW5nICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFkXCIpID8gX1JBRDJERUcgOiAxKSxcbiAgICAgIGNoYW5nZSA9IHJlbGF0aXZlID8gZW5kTnVtICogcmVsYXRpdmUgOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgIGZpbmFsVmFsdWUgPSBzdGFydE51bSArIGNoYW5nZSArIFwiZGVnXCIsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBwdDtcblxuICBpZiAoaXNTdHJpbmcpIHtcbiAgICBkaXJlY3Rpb24gPSBlbmRWYWx1ZS5zcGxpdChcIl9cIilbMV07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInNob3J0XCIpIHtcbiAgICAgIGNoYW5nZSAlPSBjYXA7XG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IGNoYW5nZSAlIChjYXAgLyAyKSkge1xuICAgICAgICBjaGFuZ2UgKz0gY2hhbmdlIDwgMCA/IGNhcCA6IC1jYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJjd1wiICYmIGNoYW5nZSA8IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgKyBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiY2N3XCIgJiYgY2hhbmdlID4gMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSAtIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9XG4gIH1cblxuICBwbHVnaW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBjaGFuZ2UsIF9yZW5kZXJQcm9wV2l0aEVuZCk7XG4gIHB0LmUgPSBmaW5hbFZhbHVlO1xuICBwdC51ID0gXCJkZWdcIjtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3R5bGUgPSBfdGVtcERpdlN0eWxlci5zdHlsZSxcbiAgICAgIHN0YXJ0Q2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIGVuZENhY2hlLFxuICAgICAgcCxcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgZW5kTnVtLFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVW5pdDtcbiAgc3R5bGUuY3NzVGV4dCA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5jc3NUZXh0ICsgXCI7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztcIjsgLy8lLWJhc2VkIHRyYW5zbGF0aW9ucyB3aWxsIGZhaWwgdW5sZXNzIHdlIHNldCB0aGUgd2lkdGgvaGVpZ2h0IHRvIG1hdGNoIHRoZSBvcmlnaW5hbCB0YXJnZXQgKGFuZCBwYWRkaW5nL2JvcmRlcnMgY2FuIGFmZmVjdCBpdClcblxuICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuXG4gIF9kb2MuYm9keS5hcHBlbmRDaGlsZChfdGVtcERpdlN0eWxlcik7XG5cbiAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0oX3RlbXBEaXZTdHlsZXIsIDEpO1xuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBzdGFydENhY2hlLCBwLCBzdGFydE51bSwgZW5kTnVtIC0gc3RhcnROdW0sIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgIHBsdWdpbi5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxuXG4gIF9kb2MuYm9keS5yZW1vdmVDaGlsZChfdGVtcERpdlN0eWxlcik7XG59OyAvLyBoYW5kbGUgc3BsaXR0aW5nIGFwYXJ0IHBhZGRpbmcsIG1hcmdpbiwgYm9yZGVyV2lkdGgsIGFuZCBib3JkZXJSYWRpdXMgaW50byB0aGVpciA0IGNvbXBvbmVudHMuIEZpcmVmb3gsIGZvciBleGFtcGxlLCB3b24ndCByZXBvcnQgYm9yZGVyUmFkaXVzIGNvcnJlY3RseSAtIGl0IHdpbGwgb25seSBkbyBib3JkZXJUb3BMZWZ0UmFkaXVzIGFuZCB0aGUgb3RoZXIgY29ybmVycy4gV2UgYWxzbyB3YW50IHRvIGhhbmRsZSBwYWRkaW5nVG9wLCBtYXJnaW5MZWZ0LCBib3JkZXJSaWdodFdpZHRoLCBldGMuXG5cblxuX2ZvckVhY2hOYW1lKFwicGFkZGluZyxtYXJnaW4sV2lkdGgsUmFkaXVzXCIsIGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICB2YXIgdCA9IFwiVG9wXCIsXG4gICAgICByID0gXCJSaWdodFwiLFxuICAgICAgYiA9IFwiQm90dG9tXCIsXG4gICAgICBsID0gXCJMZWZ0XCIsXG4gICAgICBwcm9wcyA9IChpbmRleCA8IDMgPyBbdCwgciwgYiwgbF0gOiBbdCArIGwsIHQgKyByLCBiICsgciwgYiArIGxdKS5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gaW5kZXggPCAyID8gbmFtZSArIHNpZGUgOiBcImJvcmRlclwiICsgc2lkZSArIG5hbWU7XG4gIH0pO1xuXG4gIF9zcGVjaWFsUHJvcHNbaW5kZXggPiAxID8gXCJib3JkZXJcIiArIG5hbWUgOiBuYW1lXSA9IGZ1bmN0aW9uIChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIHZhciBhLCB2YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSB7XG4gICAgICAvLyBnZXR0ZXIsIHBhc3NlZCB0YXJnZXQsIHByb3BlcnR5LCBhbmQgdW5pdCAoZnJvbSBfZ2V0KCkpXG4gICAgICBhID0gcHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KHBsdWdpbiwgcHJvcCwgcHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgICB2YXJzID0gYS5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB2YXJzLnNwbGl0KGFbMF0pLmxlbmd0aCA9PT0gNSA/IGFbMF0gOiB2YXJzO1xuICAgIH1cblxuICAgIGEgPSAoZW5kVmFsdWUgKyBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgdmFycyA9IHt9O1xuICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3AsIGkpIHtcbiAgICAgIHJldHVybiB2YXJzW3Byb3BdID0gYVtpXSA9IGFbaV0gfHwgYVsoaSAtIDEpIC8gMiB8IDBdO1xuICAgIH0pO1xuICAgIHBsdWdpbi5pbml0KHRhcmdldCwgdmFycywgdHdlZW4pO1xuICB9O1xufSk7XG5cbmV4cG9ydCB2YXIgQ1NTUGx1Z2luID0ge1xuICBuYW1lOiBcImNzc1wiLFxuICByZWdpc3RlcjogX2luaXRDb3JlLFxuICB0YXJnZXRUZXN0OiBmdW5jdGlvbiB0YXJnZXRUZXN0KHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuc3R5bGUgJiYgdGFyZ2V0Lm5vZGVUeXBlO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5fcHJvcHMsXG4gICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgZW5kTnVtLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc3BlY2lhbFByb3AsXG4gICAgICAgIHAsXG4gICAgICAgIHN0YXJ0VW5pdCxcbiAgICAgICAgZW5kVW5pdCxcbiAgICAgICAgcmVsYXRpdmUsXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCxcbiAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLFxuICAgICAgICBjYWNoZSxcbiAgICAgICAgc21vb3RoLFxuICAgICAgICBoYXNQcmlvcml0eTtcbiAgICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBpZiAocCA9PT0gXCJhdXRvUm91bmRcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZW5kVmFsdWUgPSB2YXJzW3BdO1xuXG4gICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgX2NoZWNrUGx1Z2luKHAsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSkge1xuICAgICAgICAvL3BsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgaWYgKHNwZWNpYWxQcm9wKHRoaXMsIHRhcmdldCwgcCwgZW5kVmFsdWUsIHR3ZWVuKSkge1xuICAgICAgICAgIGhhc1ByaW9yaXR5ID0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHRoaXMuYWRkKHN0eWxlLCBcInNldFByb3BlcnR5XCIsIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5nZXRQcm9wZXJ0eVZhbHVlKHApICsgXCJcIiwgZW5kVmFsdWUgKyBcIlwiLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKTtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICByZWxhdGl2ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcblxuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlLnN1YnN0cigyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuXG4gICAgICAgIGlmIChwIGluIF9wcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICAgICAgICBpZiAocCA9PT0gXCJhdXRvQWxwaGFcIikge1xuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2Ugd2hlcmUgd2UgY29udHJvbCB0aGUgdmlzaWJpbGl0eSBhbG9uZyB3aXRoIG9wYWNpdHkuIFdlIHN0aWxsIGFsbG93IHRoZSBvcGFjaXR5IHZhbHVlIHRvIHBhc3MgdGhyb3VnaCBhbmQgZ2V0IHR3ZWVuZWQuXG4gICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEgJiYgX2dldCh0YXJnZXQsIFwidmlzaWJpbGl0eVwiKSA9PT0gXCJoaWRkZW5cIiAmJiBlbmROdW0pIHtcbiAgICAgICAgICAgICAgLy9pZiB2aXNpYmlsaXR5IGlzIGluaXRpYWxseSBzZXQgdG8gXCJoaWRkZW5cIiwgd2Ugc2hvdWxkIGludGVycHJldCB0aGF0IGFzIGludGVudCB0byBtYWtlIG9wYWNpdHkgMCAoYSBjb252ZW5pZW5jZSlcbiAgICAgICAgICAgICAgc3RhcnROdW0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwICE9PSBcInNjYWxlXCIgJiYgcCAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICB+cC5pbmRleE9mKFwiLFwiKSAmJiAocCA9IHAuc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgPSBwIGluIF90cmFuc2Zvcm1Qcm9wczsgLy8tLS0gVFJBTlNGT1JNLVJFTEFURUQgLS0tXG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgIGlmICghdHJhbnNmb3JtUHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0KTsgLy8gaWYsIGZvciBleGFtcGxlLCBnc2FwLnNldCguLi4ge3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoNTB2dylcIn0pLCB0aGUgX2dldCgpIGNhbGwgZG9lc24ndCBwYXJzZSB0aGUgdHJhbnNmb3JtLCB0aHVzIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB3b24ndCBiZSBzZXQgeWV0IHNvIGZvcmNlIHRoZSBwYXJzaW5nIG9mIHRoZSB0cmFuc2Zvcm0gaGVyZS5cblxuICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbiA9IHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgc3R5bGUsIF90cmFuc2Zvcm1Qcm9wLCAwLCAxLCBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0sIGNhY2hlLCAwLCAtMSk7IC8vdGhlIGZpcnN0IHRpbWUgdGhyb3VnaCwgY3JlYXRlIHRoZSByZW5kZXJpbmcgUHJvcFR3ZWVuIHNvIHRoYXQgaXQgcnVucyBMQVNUIChpbiB0aGUgbGlua2VkIGxpc3QsIHdlIGtlZXAgYWRkaW5nIHRvIHRoZSBiZWdpbm5pbmcpXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2Vlbi5kZXAgPSAxOyAvL2ZsYWcgaXQgYXMgZGVwZW5kZW50IHNvIHRoYXQgaWYgdGhpbmdzIGdldCBraWxsZWQvb3ZlcndyaXR0ZW4gYW5kIHRoaXMgaXMgdGhlIG9ubHkgUHJvcFR3ZWVuIGxlZnQsIHdlIGNhbiBzYWZlbHkga2lsbCB0aGUgd2hvbGUgdHdlZW4uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKTtcbiAgICAgICAgICAgIHByb3BzLnB1c2goXCJzY2FsZVlcIiwgcCk7XG4gICAgICAgICAgICBwICs9IFwiWFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSAoZW5kVmFsdWUgKyBcIlwiKS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuXG4gICAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCkge1xuICAgICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSwgZW5kVW5pdCA9PT0gXCJweFwiICYmIHZhcnMuYXV0b1JvdW5kICE9PSBmYWxzZSAmJiAhaXNUcmFuc2Zvcm1SZWxhdGVkID8gX3JlbmRlclJvdW5kZWRDU1NQcm9wIDogX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgIHRoaXMuX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgICAvL3doZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nLCB3ZSBuZWVkIHRvIHJldmVydCBpdCB0byB0aGUgT0xEL09SSUdJTkFMIHZhbHVlICh3aXRoIHRob3NlIHVuaXRzKS4gV2UgcmVjb3JkIHRoYXQgYXMgYSBcImJcIiAoYmVnaW5uaW5nKSBwcm9wZXJ0eSBhbmQgcG9pbnQgdG8gYSByZW5kZXIgbWV0aG9kIHRoYXQgaGFuZGxlcyB0aGF0LiAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHQuYiA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL21heWJlIGl0J3Mgbm90IGEgc3R5bGUgLSBpdCBjb3VsZCBiZSBhIHByb3BlcnR5IGFkZGVkIGRpcmVjdGx5IHRvIGFuIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSdsbCB0cnkgdG8gYW5pbWF0ZSB0aGF0LlxuICAgICAgICAgICAgdGhpcy5hZGQodGFyZ2V0LCBwLCB0YXJnZXRbcF0sIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXNzaW5nUGx1Z2luKHAsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbCh0aGlzLCB0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0aGlzKTtcbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcblxuKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdHJhbnNmb3JtUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwiZGVnXCI7XG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX3Byb3BlcnR5QWxpYXNlc1thbGxbMTNdXSA9IHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uO1xuXG4gIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgIF9wcm9wZXJ0eUFsaWFzZXNbc3BsaXRbMV1dID0gYWxsW3NwbGl0WzBdXTtcbiAgfSk7XG59KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbl9mb3JFYWNoTmFtZShcIngseSx6LHRvcCxyaWdodCxib3R0b20sbGVmdCx3aWR0aCxoZWlnaHQsZm9udFNpemUscGFkZGluZyxtYXJnaW4scGVyc3BlY3RpdmVcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbik7XG5leHBvcnQgeyBDU1NQbHVnaW4gYXMgZGVmYXVsdCwgX2dldEJCb3gsIF9jcmVhdGVFbGVtZW50LCBfY2hlY2tQcm9wUHJlZml4IGFzIGNoZWNrUHJlZml4IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3NhcC9DU1NQbHVnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIl0sInNvdXJjZVJvb3QiOiIifQ==