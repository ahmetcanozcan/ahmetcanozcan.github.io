(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || Object(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ __webpack_exports__["default"] = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/* harmony default export */ __webpack_exports__["default"] = (isDomNode);


/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



}).call(this,require('_process'))

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"performance-now":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/

var rqAnFr = require('raf');
var objectAssign = require('object-assign');

var helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],

  clamp: function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  },
  data: function data(element, name) {
    return helpers.deserialize(element.getAttribute('data-' + name));
  },
  deserialize: function deserialize(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  },
  camelCase: function camelCase(value) {
    return value.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  },
  accelerate: function accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
    helpers.css(element, 'transform-style', 'preserve-3d');
    helpers.css(element, 'backface-visibility', 'hidden');
  },
  transformSupport: function transformSupport(value) {
    var element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null;
    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform';
        jsProperty = helpers.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false;

          if (!document.body) {
            isCreatedBody = true;
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }

          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);

          if (isCreatedBody) {
            body.removeAttribute('style');
            body.parentNode.removeChild(body);
          }
        }
        break;
    }
    return featureSupport;
  },
  css: function css(element, property, value) {
    var jsProperty = helpers.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  }
};

var MAGIC_NUMBER = 30,
    DEFAULTS = {
  relativeInput: false,
  clipRelativeInput: false,
  inputElement: null,
  hoverOnly: false,
  calibrationThreshold: 100,
  calibrationDelay: 500,
  supportDelay: 500,
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 10.0,
  scalarY: 10.0,
  frictionX: 0.1,
  frictionY: 0.1,
  originX: 0.5,
  originY: 0.5,
  pointerEvents: false,
  precision: 1,
  onReady: null,
  selector: null
};

var Parallax = function () {
  function Parallax(element, options) {
    _classCallCheck(this, Parallax);

    this.element = element;

    var data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
      hoverOnly: helpers.data(this.element, 'hover-only'),
      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
      selector: helpers.data(this.element, 'selector')
    };

    for (var key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }

    objectAssign(this, DEFAULTS, data, options);

    if (!this.inputElement) {
      this.inputElement = this.element;
    }

    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depthsX = [];
    this.depthsY = [];
    this.raf = null;

    this.bounds = null;
    this.elementPositionX = 0;
    this.elementPositionY = 0;
    this.elementWidth = 0;
    this.elementHeight = 0;

    this.elementCenterX = 0;
    this.elementCenterY = 0;

    this.elementRangeX = 0;
    this.elementRangeY = 0;

    this.calibrationX = 0;
    this.calibrationY = 0;

    this.inputX = 0;
    this.inputY = 0;

    this.motionX = 0;
    this.motionY = 0;

    this.velocityX = 0;
    this.velocityY = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onMotionTimer = this.onMotionTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.windowWidth = null;
    this.windowHeight = null;
    this.windowCenterX = null;
    this.windowCenterY = null;
    this.windowRadiusX = null;
    this.windowRadiusY = null;
    this.portrait = false;
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
    this.orientationStatus = 0;
    this.motionStatus = 0;

    this.initialise();
  }

  _createClass(Parallax, [{
    key: 'initialise',
    value: function initialise() {
      if (this.transform2DSupport === undefined) {
        this.transform2DSupport = helpers.transformSupport('2D');
        this.transform3DSupport = helpers.transformSupport('3D');
      }

      // Configure Context Styles
      if (this.transform3DSupport) {
        helpers.accelerate(this.element);
      }

      var style = window.getComputedStyle(this.element);
      if (style.getPropertyValue('position') === 'static') {
        this.element.style.position = 'relative';
      }

      // Pointer events
      if (!this.pointerEvents) {
        this.element.style.pointerEvents = 'none';
      }

      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    }
  }, {
    key: 'doReadyCallback',
    value: function doReadyCallback() {
      if (this.onReady) {
        this.onReady();
      }
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      if (this.selector) {
        this.layers = this.element.querySelectorAll(this.selector);
      } else {
        this.layers = this.element.children;
      }

      if (!this.layers.length) {
        console.warn('ParallaxJS: Your scene does not have any layers.');
      }

      this.depthsX = [];
      this.depthsY = [];

      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index];

        if (this.transform3DSupport) {
          helpers.accelerate(layer);
        }

        layer.style.position = index ? 'absolute' : 'relative';
        layer.style.display = 'block';
        layer.style.left = 0;
        layer.style.top = 0;

        var depth = helpers.data(layer, 'depth') || 0;
        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.windowCenterX = this.windowWidth * this.originX;
      this.windowCenterY = this.windowHeight * this.originY;
      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
    }
  }, {
    key: 'updateBounds',
    value: function updateBounds() {
      this.bounds = this.inputElement.getBoundingClientRect();
      this.elementPositionX = this.bounds.left;
      this.elementPositionY = this.bounds.top;
      this.elementWidth = this.bounds.width;
      this.elementHeight = this.bounds.height;
      this.elementCenterX = this.elementWidth * this.originX;
      this.elementCenterY = this.elementHeight * this.originY;
      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
    }
  }, {
    key: 'queueCalibration',
    value: function queueCalibration(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.enabled) {
        return;
      }
      this.enabled = true;

      if (this.orientationSupport) {
        this.portrait = false;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
      } else if (this.motionSupport) {
        this.portrait = false;
        window.addEventListener('devicemotion', this.onDeviceMotion);
        this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
      } else {
        this.calibrationX = 0;
        this.calibrationY = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
        this.doReadyCallback();
      }

      window.addEventListener('resize', this.onWindowResize);
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.enabled) {
        return;
      }
      this.enabled = false;

      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else if (this.motionSupport) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }

      window.removeEventListener('resize', this.onWindowResize);
      rqAnFr.cancel(this.raf);
    }
  }, {
    key: 'calibrate',
    value: function calibrate(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    }
  }, {
    key: 'invert',
    value: function invert(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    }
  }, {
    key: 'friction',
    value: function friction(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    }
  }, {
    key: 'scalar',
    value: function scalar(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    }
  }, {
    key: 'limit',
    value: function limit(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    }
  }, {
    key: 'origin',
    value: function origin(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    }
  }, {
    key: 'setInputElement',
    value: function setInputElement(element) {
      this.inputElement = element;
      this.updateDimensions();
    }
  }, {
    key: 'setPosition',
    value: function setPosition(element, x, y) {
      x = x.toFixed(this.precision) + 'px';
      y = y.toFixed(this.precision) + 'px';
      if (this.transform3DSupport) {
        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
      } else if (this.transform2DSupport) {
        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    }
  }, {
    key: 'onOrientationTimer',
    value: function onOrientationTimer() {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onMotionTimer',
    value: function onMotionTimer() {
      if (this.motionSupport && this.motionStatus === 0) {
        this.disable();
        this.motionSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onCalibrationTimer',
    value: function onCalibrationTimer() {
      this.calibrationFlag = true;
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.updateDimensions();
    }
  }, {
    key: 'onAnimationFrame',
    value: function onAnimationFrame() {
      this.updateBounds();
      var calibratedInputX = this.inputX - this.calibrationX,
          calibratedInputY = this.inputY - this.calibrationY;
      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
      } else {
        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
      }
      this.motionX *= this.elementWidth * (this.scalarX / 100);
      this.motionY *= this.elementHeight * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
      }
      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index],
            depthX = this.depthsX[index],
            depthY = this.depthsY[index],
            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'rotate',
    value: function rotate(beta, gamma) {
      // Extract Rotation
      var x = (beta || 0) / MAGIC_NUMBER,
          //  -90 :: 90
      y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.windowHeight > this.windowWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.calibrationX = x;
        this.calibrationY = y;
      }

      this.inputX = x;
      this.inputY = y;
    }
  }, {
    key: 'onDeviceOrientation',
    value: function onDeviceOrientation(event) {
      var beta = event.beta;
      var gamma = event.gamma;
      if (beta !== null && gamma !== null) {
        this.orientationStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onDeviceMotion',
    value: function onDeviceMotion(event) {
      var beta = event.rotationRate.beta;
      var gamma = event.rotationRate.gamma;
      if (beta !== null && gamma !== null) {
        this.motionStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY;

      // reset input to center if hoverOnly is set and we're not hovering the element
      if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
        this.inputX = 0;
        this.inputY = 0;
        return;
      }

      if (this.relativeInput) {
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.elementPositionX);
          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
          clientY = Math.max(clientY, this.elementPositionY);
          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
        }
        // Calculate input relative to the element.
        if (this.elementRangeX && this.elementRangeY) {
          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
        }
      } else {
        // Calculate input relative to the window.
        if (this.windowRadiusX && this.windowRadiusY) {
          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.disable();

      clearTimeout(this.calibrationTimer);
      clearTimeout(this.detectionTimer);

      this.element.removeAttribute('style');
      for (var index = 0; index < this.layers.length; index++) {
        this.layers[index].removeAttribute('style');
      }

      delete this.element;
      delete this.layers;
    }
  }, {
    key: 'version',
    value: function version() {
      return '3.1.0';
    }
  }]);

  return Parallax;
}();

module.exports = Parallax;

},{"object-assign":1,"raf":4}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwic3JjL3BhcmFsbGF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0Q7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNBLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNEO0FBQ0YsT0FiRCxNQWFPO0FBQ0w7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGFBQWhCLElBQWlDLEtBQUssYUFBcEQ7QUFDQSxlQUFLLE1BQUwsR0FBYyxDQUFDLFVBQVUsS0FBSyxhQUFoQixJQUFpQyxLQUFLLGFBQXBEO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVM7QUFDUixXQUFLLE9BQUw7O0FBRUEsbUJBQWEsS0FBSyxnQkFBbEI7QUFDQSxtQkFBYSxLQUFLLGNBQWxCOztBQUVBLFdBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsT0FBN0I7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBTCxDQUFZLE1BQXhDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsZUFBbkIsQ0FBbUMsT0FBbkM7QUFDRDs7QUFFRCxhQUFPLEtBQUssT0FBWjtBQUNBLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFJSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIl19

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rellax/rellax.js":
/*!***************************************!*\
  !*** ./node_modules/rellax/rellax.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof window !== "undefined" ? window : global, function () {
  var Rellax = function(el, options){
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(callback){ return setTimeout(callback, 1000 / 60); };

    // store the id for later use
    var loopId = null;

    // Test via a getter in the options object to see if the passive property is accessed
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}

    // check what cancelAnimation method to use
    var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;

    // check which transform property to use
    var transformProp = window.transformProp || (function(){
        var testEl = document.createElement('div');
        if (testEl.style.transform === null) {
          var vendors = ['Webkit', 'Moz', 'ms'];
          for (var vendor in vendors) {
            if (testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
              return vendors[vendor] + 'Transform';
            }
          }
        }
        return 'transform';
      })();

    // Default Settings
    self.options = {
      speed: -2,
	    verticalSpeed: null,
	    horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: false,
      wrapper: null,
      relativeToWrapper: false,
      round: true,
      vertical: true,
      horizontal: false,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function() {},
    };

    // User defined options (might have more in the future)
    if (options){
      Object.keys(options).forEach(function(key){
        self.options[key] = options[key];
      });
    }

    function validateCustomBreakpoints () {
      if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
        var isAscending = true;
        var isNumerical = true;
        var lastVal;
        self.options.breakpoints.forEach(function (i) {
          if (typeof i !== 'number') isNumerical = false;
          if (lastVal !== null) {
            if (i < lastVal) isAscending = false;
          }
          lastVal = i;
        });
        if (isAscending && isNumerical) return;
      }
      // revert defaults if set incorrectly
      self.options.breakpoints = [576, 768, 1201];
      console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
    }

    if (options && options.breakpoints) {
      validateCustomBreakpoints();
    }

    // By default, rellax class
    if (!el) {
      el = '.rellax';
    }

    // check if el is a className or a node
    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
      console.warn("Rellax: The elements you're trying to select don't exist.");
      return;
    }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);

        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
          return;
        }
      }
    }

    // set a placeholder for the current breakpoint
    var currentBreakpoint;

    // helper to determine current breakpoint
    var getCurrentBreakpoint = function (w) {
      var bp = self.options.breakpoints;
      if (w < bp[0]) return 'xs';
      if (w >= bp[0] && w < bp[1]) return 'sm';
      if (w >= bp[1] && w < bp[2]) return 'md';
      return 'lg';
    };

    // Get and cache initial position of all elements
    var cacheBlocks = function() {
      for (var i = 0; i < self.elems.length; i++){
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
    };


    // Let's kick this script off
    // Build array for cached element values
    var init = function() {
      for (var i = 0; i < blocks.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      blocks = [];

      screenY = window.innerHeight;
      screenX = window.innerWidth;
      currentBreakpoint = getCurrentBreakpoint(screenX);

      setPosition();

      cacheBlocks();

      animate();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener('resize', init);
        pause = false;
        // Start the loop
        update();
      }
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function(el) {
      var dataPercentage = el.getAttribute( 'data-rellax-percentage' );
      var dataSpeed = el.getAttribute( 'data-rellax-speed' );
      var dataXsSpeed = el.getAttribute( 'data-rellax-xs-speed' );
      var dataMobileSpeed = el.getAttribute( 'data-rellax-mobile-speed' );
      var dataTabletSpeed = el.getAttribute( 'data-rellax-tablet-speed' );
      var dataDesktopSpeed = el.getAttribute( 'data-rellax-desktop-speed' );
      var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
      var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
      var dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
      var dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
      var dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;
      var dataMin = el.getAttribute( 'data-rellax-min' );
      var dataMax = el.getAttribute( 'data-rellax-max' );
      var dataMinX = el.getAttribute('data-rellax-min-x');
      var dataMaxX = el.getAttribute('data-rellax-max-x');
      var dataMinY = el.getAttribute('data-rellax-min-y');
      var dataMaxY = el.getAttribute('data-rellax-max-y');
      var mapBreakpoints;
      var breakpoints = true;

      if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
        breakpoints = false;
      } else {
        mapBreakpoints = {
          'xs': dataXsSpeed,
          'sm': dataMobileSpeed,
          'md': dataTabletSpeed,
          'lg': dataDesktopSpeed
        };
      }

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
      if (self.options.relativeToWrapper) {
        var scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
      }
      var posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
      var posX = self.options.horizontal ? ( dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = (breakpoints && mapBreakpoints[currentBreakpoint] !== null) ? Number(mapBreakpoints[currentBreakpoint]) : (dataSpeed ? dataSpeed : self.options.speed);
      var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
      var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;

      // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
      var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
      var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;

      var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = '';

      // Check if there's an inline styled transform
      var searchResult = /transform\s*:/i.exec(style);
      if (searchResult) {
        // Get the index of the transform
        var index = searchResult.index;

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(';');

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
        }
      }

      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        verticalSpeed: verticalSpeed,
        horizontalSpeed: horizontalSpeed,
        verticalScrollAxis: verticalScrollAxis,
        horizontalScrollAxis: horizontalScrollAxis,
        style: style,
        transform: transform,
        zindex: dataZindex,
        min: dataMin,
        max: dataMax,
        minX: dataMinX,
        maxX: dataMaxX,
        minY: dataMinY,
        maxY: dataMaxY
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function() {
      var oldY = posY;
      var oldX = posX;

      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
      // If option relativeToWrapper is true, use relative wrapper value instead.
      if (self.options.relativeToWrapper) {
        var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        posY = scrollPosY - self.options.wrapper.offsetTop;
      }


      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }

      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
      var result = {};
      var valueX = ((horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX)));
      var valueY = ((verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY)));

      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

      return result;
    };

    // Remove event listeners and loop again
    var deferredUpdate = function() {
      window.removeEventListener('resize', deferredUpdate);
      window.removeEventListener('orientationchange', deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);

      // loop again
      loopId = loop(update);
    };

    // Loop
    var update = function() {
      if (setPosition() && pause === false) {
        animate();

        // loop again
        loopId = loop(update);
      } else {
        loopId = null;

        // Don't animate until we get a position updating event
        window.addEventListener('resize', deferredUpdate);
        window.addEventListener('orientationchange', deferredUpdate);
        (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
        (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
      }
    };

    // Transform3d on parallax element
    var animate = function() {
      var positions;
      for (var i = 0; i < self.elems.length; i++){
        // Determine relevant movement directions
        var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
        var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
        var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
        var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
        var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
        var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;

        var percentageY = ((verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY));
        var percentageX = ((verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX));

        // Subtracting initialize value, so element stays in same spot as HTML
        positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
        var positionY = positions.y - blocks[i].baseY;
        var positionX = positions.x - blocks[i].baseX;

        // The next two "if" blocks go like this:
        // Check if a limit is defined (first "min", then "max");
        // Check if we need to change the Y or the X
        // (Currently working only if just one of the axes is enabled)
        // Then, check if the new position is inside the allowed limit
        // If so, use new position. If not, set position to limit.

        // Check if a min limit is defined
        if (blocks[i].min !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
          }
        }

        // Check if directional min limits are defined
        if (blocks[i].minY != null) {
            positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
        }
        if (blocks[i].minX != null) {
            positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
        }

        // Check if a max limit is defined
        if (blocks[i].max !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
          }
        }

        // Check if directional max limits are defined
        if (blocks[i].maxY != null) {
            positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
        }
        if (blocks[i].maxX != null) {
            positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
        }

        var zindex = blocks[i].zindex;

        // Move that element
        // (Set the new translation and append initial inline transforms.)
        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
        self.elems[i].style[transformProp] = translate;
      }
      self.options.callback(positions);
    };

    self.destroy = function() {
      for (var i = 0; i < self.elems.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener('resize', init);
        pause = true;
      }

      // Clear the animation loop to prevent possible memory leak
      clearLoop(loopId);
      loopId = null;
    };

    // Init
    init();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;

    return self;
  };
  return Rellax;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/*! exports provided: format, identity, inverse, multiply, parse, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, toString, translate, translateX, translateY, translateZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleX", function() { return scaleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleY", function() { return scaleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleZ", function() { return scaleZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewX", function() { return skewX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewY", function() { return skewY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateX", function() { return translateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateY", function() { return translateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateZ", function() { return translateZ; });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.6

	Copyright 2020 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				node.setAttribute('style', element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		element.node.setAttribute('style', element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateY"])(distance));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateX"])(distance));
		}
	}

	if (config.rotate.x) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateX"])(config.rotate.x)); }
	if (config.rotate.y) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateY"])(config.rotate.y)); }
	if (config.rotate.z) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateZ"])(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(0.0002));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["parse"])(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__["multiply"]);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				element.node.setAttribute('style', element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	Object(miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.6";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ __webpack_exports__["default"] = (ScrollReveal);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if (Object(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if (Object(is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (tealight);


/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/buildin/global.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1kb20tbm9kZS1saXN0L2Rpc3QvaXMtZG9tLW5vZGUtbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZG9tLW5vZGUvZGlzdC9pcy1kb20tbm9kZS5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaXJhZi9kaXN0L21pbmlyYWYuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcmFsbGF4LWpzL2Rpc3QvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbGxheC9yZWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWF0cml4L2Rpc3QvcmVtYXRyaXguZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlYWxpZ2h0L2Rpc3QvdGVhbGlnaHQuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7O0FBSUQsQ0FBQzs7QUFFRCxDQUFDLEVBQUUsYUFBYTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOztBQUV0QyxDQUFDLEdBQUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxxSUFBcUk7O0FBRXRJLENBQUMsRUFBRSxvQkFBb0I7QUFDdkI7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLDRCQUE0QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMsRUFBRSwwQkFBMEIsRUFBRSxHQUFHO0FBQ2xDLENBQUM7QUFDRCwyQ0FBMkMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMzL0J6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQTBDO0FBQ2hEO0FBQ0EsSUFBSSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDdkIsR0FBRyxNQUFNLEVBUU47QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbUNBQW1DO0FBQzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFLGlCQUFpQixFQUFFO0FBQ3BGLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHdEQUFDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFbmpCLGtEQUFrRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXhKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixNQUFNO0FBQ3RCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixNQUFNO0FBQ3RCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMxaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJ2ZW5kb3Jzfm1haW4uNzU1ZGVlM2QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyohIEBsaWNlbnNlIGlzLWRvbS1ub2RlLWxpc3QgdjEuMi4xXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcblxuZnVuY3Rpb24gaXNEb21Ob2RlTGlzdCh4KSB7XG5cdHZhciBwcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KTtcblx0dmFyIHJlZ2V4ID0gL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLztcblxuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdy5Ob2RlTGlzdCA9PT0gJ29iamVjdCdcblx0XHQ/IHggaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3Rcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0cmVnZXgudGVzdChwcm90b3R5cGVUb1N0cmluZykgJiZcblx0XHRcdFx0KHgubGVuZ3RoID09PSAwIHx8IGlzRG9tTm9kZSh4WzBdKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlTGlzdDtcbiIsIi8qISBAbGljZW5zZSBpcy1kb20tbm9kZSB2MS4wLjRcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmZ1bmN0aW9uIGlzRG9tTm9kZSh4KSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGUgPT09ICdvYmplY3QnXG5cdFx0PyB4IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHR0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlO1xuIiwiLyohIEBsaWNlbnNlIG1pbmlyYWYgdjEuMC4wXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG52YXIgcG9seWZpbGwgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdGlmIChjdXJyZW50VGltZSAtIGNsb2NrID4gMTYpIHtcblx0XHRcdGNsb2NrID0gY3VycmVudFRpbWU7XG5cdFx0XHRjYWxsYmFjayhjdXJyZW50VGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9seWZpbGwoY2FsbGJhY2spOyB9LCAwKTtcblx0XHR9XG5cdH1cbn0pKCk7XG5cbnZhciBpbmRleCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHBvbHlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLlBhcmFsbGF4ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuXG59LHtcIl9wcm9jZXNzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG5cbn0se1wicGVyZm9ybWFuY2Utbm93XCI6Mn1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiogUGFyYWxsYXguanNcbiogQGF1dGhvciBNYXR0aGV3IFdhZ2VyZmllbGQgLSBAd2FnZXJmaWVsZCwgUmVuw6kgUm90aCAtIG1haWxAcmVuZXJvdGgub3JnXG4qIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyYWxsYXggZWZmZWN0IGJldHdlZW4gYW4gYXJyYXkgb2YgbGF5ZXJzLFxuKiAgICAgICAgICAgICAgZHJpdmluZyB0aGUgbW90aW9uIGZyb20gdGhlIGd5cm9zY29wZSBvdXRwdXQgb2YgYSBzbWFydGRldmljZS5cbiogICAgICAgICAgICAgIElmIG5vIGd5cm9zY29wZSBpcyBhdmFpbGFibGUsIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgdXNlZC5cbiovXG5cbnZhciBycUFuRnIgPSByZXF1aXJlKCdyYWYnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCAnd2Via2l0J10sIFsnLW1vei0nLCAnTW96J10sIFsnLW8tJywgJ08nXSwgWyctbXMtJywgJ21zJ11dLFxuXG4gIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbWluIDwgbWF4ID8gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlIDogdmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gaGVscGVycy5kZXNlcmlhbGl6ZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LFxuICBjYW1lbENhc2U6IGZ1bmN0aW9uIGNhbWVsQ2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICB9LFxuICBhY2NlbGVyYXRlOiBmdW5jdGlvbiBhY2NlbGVyYXRlKGVsZW1lbnQpIHtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMC4wMDAxZGVnKScpO1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAnYmFja2ZhY2UtdmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSxcbiAgdHJhbnNmb3JtU3VwcG9ydDogZnVuY3Rpb24gdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMF0gKyAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICdUcmFuc2Zvcm0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnMkQnOlxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5U3VwcG9ydDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczRCc6XG4gICAgICAgIGlmIChwcm9wZXJ0eVN1cHBvcnQpIHtcbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpLFxuICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgIGRvY3VtZW50T3ZlcmZsb3cgPSBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXG4gICAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSBmYWxzZTtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KTtcbiAgICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eVZhbHVlLmxlbmd0aCA+IDAgJiYgcHJvcGVydHlWYWx1ZSAhPT0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY3VtZW50T3ZlcmZsb3c7XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChpc0NyZWF0ZWRCb2R5KSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlU3VwcG9ydDtcbiAgfSxcbiAgY3NzOiBmdW5jdGlvbiBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldO1xuICAgIGlmICghanNQcm9wZXJ0eSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy5jYW1lbENhc2UoaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJy0nICsgcHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59O1xuXG52YXIgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgREVGQVVMVFMgPSB7XG4gIHJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBjbGlwUmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gIGlucHV0RWxlbWVudDogbnVsbCxcbiAgaG92ZXJPbmx5OiBmYWxzZSxcbiAgY2FsaWJyYXRpb25UaHJlc2hvbGQ6IDEwMCxcbiAgY2FsaWJyYXRpb25EZWxheTogNTAwLFxuICBzdXBwb3J0RGVsYXk6IDUwMCxcbiAgY2FsaWJyYXRlWDogZmFsc2UsXG4gIGNhbGlicmF0ZVk6IHRydWUsXG4gIGludmVydFg6IHRydWUsXG4gIGludmVydFk6IHRydWUsXG4gIGxpbWl0WDogZmFsc2UsXG4gIGxpbWl0WTogZmFsc2UsXG4gIHNjYWxhclg6IDEwLjAsXG4gIHNjYWxhclk6IDEwLjAsXG4gIGZyaWN0aW9uWDogMC4xLFxuICBmcmljdGlvblk6IDAuMSxcbiAgb3JpZ2luWDogMC41LFxuICBvcmlnaW5ZOiAwLjUsXG4gIHBvaW50ZXJFdmVudHM6IGZhbHNlLFxuICBwcmVjaXNpb246IDEsXG4gIG9uUmVhZHk6IG51bGwsXG4gIHNlbGVjdG9yOiBudWxsXG59O1xuXG52YXIgUGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcmFsbGF4KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsYXgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0QXNzaWduKHRoaXMsIERFRkFVTFRTLCBkYXRhLCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IG51bGw7XG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwdGhzWCA9IFtdO1xuICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuICAgIHRoaXMucmFmID0gbnVsbDtcblxuICAgIHRoaXMuYm91bmRzID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwO1xuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IDA7XG4gICAgdGhpcy5lbGVtZW50V2lkdGggPSAwO1xuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gMDtcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gMDtcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gMDtcblxuICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG5cbiAgICB0aGlzLmlucHV0WCA9IDA7XG4gICAgdGhpcy5pbnB1dFkgPSAwO1xuXG4gICAgdGhpcy5tb3Rpb25YID0gMDtcbiAgICB0aGlzLm1vdGlvblkgPSAwO1xuXG4gICAgdGhpcy52ZWxvY2l0eVggPSAwO1xuICAgIHRoaXMudmVsb2NpdHlZID0gMDtcblxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT3JpZW50YXRpb25UaW1lciA9IHRoaXMub25PcmllbnRhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdGlvblRpbWVyID0gdGhpcy5vbk1vdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BbmltYXRpb25GcmFtZSA9IHRoaXMub25BbmltYXRpb25GcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gbnVsbDtcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgdGhpcy5kZXNrdG9wID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxCQjEwfG1vYml8dGFibGV0fG9wZXJhIG1pbml8bmV4dXMgNykvaSk7XG4gICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMDtcbiAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDA7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXJhbGxheCwgW3tcbiAgICBrZXk6ICdpbml0aWFsaXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCcyRCcpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnM0QnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIH1cblxuICAgICAgLy8gUG9pbnRlciBldmVudHNcbiAgICAgIGlmICghdGhpcy5wb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cFxuICAgICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbih0aGlzLmNhbGlicmF0aW9uRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RvUmVhZHlDYWxsYmFjaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICAgIGlmICh0aGlzLm9uUmVhZHkpIHtcbiAgICAgICAgdGhpcy5vblJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlTGF5ZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGF5ZXJzKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XTtcblxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBpbmRleCA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnO1xuICAgICAgICBsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbGF5ZXIuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGxheWVyLnN0eWxlLnRvcCA9IDA7XG5cbiAgICAgICAgdmFyIGRlcHRoID0gaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgnKSB8fCAwO1xuICAgICAgICB0aGlzLmRlcHRoc1gucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC14JykgfHwgZGVwdGgpO1xuICAgICAgICB0aGlzLmRlcHRoc1kucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC15JykgfHwgZGVwdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpbWVuc2lvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaW1lbnNpb25zKCkge1xuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpblk7XG4gICAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlQm91bmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQm91bmRzKCkge1xuICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmlucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuYm91bmRzLmxlZnQ7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSB0aGlzLmJvdW5kcy50b3A7XG4gICAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IHRoaXMuYm91bmRzLndpZHRoO1xuICAgICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IHRoaXMuZWxlbWVudFdpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IHRoaXMuZWxlbWVudEhlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclgsIHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5lbGVtZW50Q2VudGVyWCk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJZLCB0aGlzLmVsZW1lbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdxdWV1ZUNhbGlicmF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVDYWxpYnJhdGlvbihkZWxheSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcik7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uT3JpZW50YXRpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSAwO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxpYnJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxpYnJhdGUoeCwgeSkge1xuICAgICAgdGhpcy5jYWxpYnJhdGVYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVYIDogeDtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW52ZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW52ZXJ0KHgsIHkpIHtcbiAgICAgIHRoaXMuaW52ZXJ0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WCA6IHg7XG4gICAgICB0aGlzLmludmVydFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZyaWN0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJpY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy5mcmljdGlvblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWCA6IHg7XG4gICAgICB0aGlzLmZyaWN0aW9uWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY2FsYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY2FsYXIoeCwgeSkge1xuICAgICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeDtcbiAgICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGltaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW1pdCh4LCB5KSB7XG4gICAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeDtcbiAgICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29yaWdpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbih4LCB5KSB7XG4gICAgICB0aGlzLm9yaWdpblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblggOiB4O1xuICAgICAgdGhpcy5vcmlnaW5ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRJbnB1dEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgICB4ID0geC50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICB5ID0geS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgeCArICcsJyArIHkgKyAnLDApJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4O1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25PcmllbnRhdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0ICYmIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW90aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMubW90aW9uU3VwcG9ydCAmJiB0aGlzLm1vdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2FsaWJyYXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbldpbmRvd1Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25BbmltYXRpb25GcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdmFyIGNhbGlicmF0ZWRJbnB1dFggPSB0aGlzLmlucHV0WCAtIHRoaXMuY2FsaWJyYXRpb25YLFxuICAgICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZO1xuICAgICAgaWYgKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFgpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCB8fCBNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKDApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApO1xuICAgICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApO1xuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblgsIC10aGlzLmxpbWl0WCwgdGhpcy5saW1pdFgpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRZKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpO1xuICAgICAgfVxuICAgICAgdGhpcy52ZWxvY2l0eVggKz0gKHRoaXMubW90aW9uWCAtIHRoaXMudmVsb2NpdHlYKSAqIHRoaXMuZnJpY3Rpb25YO1xuICAgICAgdGhpcy52ZWxvY2l0eVkgKz0gKHRoaXMubW90aW9uWSAtIHRoaXMudmVsb2NpdHlZKSAqIHRoaXMuZnJpY3Rpb25ZO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhZID0gdGhpcy5kZXB0aHNZW2luZGV4XSxcbiAgICAgICAgICAgIHhPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WCAqIChkZXB0aFggKiAodGhpcy5pbnZlcnRYID8gLTEgOiAxKSksXG4gICAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm90YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm90YXRlKGJldGEsIGdhbW1hKSB7XG4gICAgICAvLyBFeHRyYWN0IFJvdGF0aW9uXG4gICAgICB2YXIgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLFxuICAgICAgICAgIC8vICAtOTAgOjogOTBcbiAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVI7IC8vIC0xODAgOjogMTgwXG5cbiAgICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICAgIHZhciBwb3J0cmFpdCA9IHRoaXMud2luZG93SGVpZ2h0ID4gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIGlmICh0aGlzLnBvcnRyYWl0ICE9PSBwb3J0cmFpdCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gcG9ydHJhaXQ7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0geDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSB5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlucHV0WCA9IHg7XG4gICAgICB0aGlzLmlucHV0WSA9IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VPcmllbnRhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlT3JpZW50YXRpb24oZXZlbnQpIHtcbiAgICAgIHZhciBiZXRhID0gZXZlbnQuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU1vdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlTW90aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQucm90YXRpb25SYXRlLmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAvLyByZXNldCBpbnB1dCB0byBjZW50ZXIgaWYgaG92ZXJPbmx5IGlzIHNldCBhbmQgd2UncmUgbm90IGhvdmVyaW5nIHRoZSBlbGVtZW50XG4gICAgICBpZiAodGhpcy5ob3Zlck9ubHkgJiYgKGNsaWVudFggPCB0aGlzLmVsZW1lbnRQb3NpdGlvblggfHwgY2xpZW50WCA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoIHx8IGNsaWVudFkgPCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgfHwgY2xpZW50WSA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAwO1xuICAgICAgICB0aGlzLmlucHV0WSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAvLyBDbGlwIG1vdXNlIGNvb3JkaW5hdGVzIGluc2lkZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgICAgaWYgKHRoaXMuY2xpcFJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKTtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJhbmdlWCAmJiB0aGlzLmVsZW1lbnRSYW5nZVkpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb25YIC0gdGhpcy5lbGVtZW50Q2VudGVyWCkgLyB0aGlzLmVsZW1lbnRSYW5nZVg7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWSAtIHRoaXMuZWxlbWVudENlbnRlclkpIC8gdGhpcy5lbGVtZW50UmFuZ2VZO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIHdpbmRvdy5cbiAgICAgICAgaWYgKHRoaXMud2luZG93UmFkaXVzWCAmJiB0aGlzLndpbmRvd1JhZGl1c1kpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy53aW5kb3dDZW50ZXJYKSAvIHRoaXMud2luZG93UmFkaXVzWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy53aW5kb3dDZW50ZXJZKSAvIHRoaXMud2luZG93UmFkaXVzWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGV0ZWN0aW9uVGltZXIpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5lbGVtZW50O1xuICAgICAgZGVsZXRlIHRoaXMubGF5ZXJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuICczLjEuMCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhcmFsbGF4O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFsbGF4O1xuXG59LHtcIm9iamVjdC1hc3NpZ25cIjoxLFwicmFmXCI6NH1dfSx7fSxbNV0pKDUpXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmIySnFaV04wTFdGemMybG5iaTlwYm1SbGVDNXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdaWEptYjNKdFlXNWpaUzF1YjNjdmJHbGlMM0JsY21admNtMWhibU5sTFc1dmR5NXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmNtRm1MMmx1WkdWNExtcHpJaXdpYzNKakwzQmhjbUZzYkdGNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUXpGR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenRCUTNCRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVONFRFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdRVU40UlVFN096czdPenM3TzBGQlVVRXNTVUZCVFN4VFFVRlRMRkZCUVZFc1MwRkJVaXhEUVVGbU8wRkJRMEVzU1VGQlRTeGxRVUZsTEZGQlFWRXNaVUZCVWl4RFFVRnlRanM3UVVGRlFTeEpRVUZOTEZWQlFWVTdRVUZEWkN4cFFrRkJaU3hGUVVSRU8wRkJSV1FzVjBGQlV5eERRVUZETEVsQlFVUXNSVUZCVHl4RFFVRkRMRlZCUVVRc1JVRkJXU3hSUVVGYUxFTkJRVkFzUlVGQk9FSXNRMEZCUXl4UFFVRkVMRVZCUVZNc1MwRkJWQ3hEUVVFNVFpeEZRVUVyUXl4RFFVRkRMRXRCUVVRc1JVRkJUeXhIUVVGUUxFTkJRUzlETEVWQlFUUkVMRU5CUVVNc1RVRkJSQ3hGUVVGUkxFbEJRVklzUTBGQk5VUXNRMEZHU3pzN1FVRkpaQ3hQUVVwakxHbENRVWxTTEV0QlNsRXNSVUZKUkN4SFFVcERMRVZCU1Vrc1IwRktTaXhGUVVsVE8wRkJRM0pDTEZkQlFVOHNUVUZCVFN4SFFVRk9MRWRCUTBZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJIUkRMRWRCUlVZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJqZERPMEZCUjBRc1IwRlNZVHRCUVZWa0xFMUJWbU1zWjBKQlZWUXNUMEZXVXl4RlFWVkJMRWxCVmtFc1JVRlZUVHRCUVVOc1FpeFhRVUZQTEZGQlFWRXNWMEZCVWl4RFFVRnZRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNWVUZCVVN4SlFVRTNRaXhEUVVGd1FpeERRVUZRTzBGQlEwUXNSMEZhWVR0QlFXTmtMR0ZCWkdNc2RVSkJZMFlzUzBGa1JTeEZRV05MTzBGQlEycENMRkZCUVVrc1ZVRkJWU3hOUVVGa0xFVkJRWE5DTzBGQlEzQkNMR0ZCUVU4c1NVRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR5eEpRVUZKTEZWQlFWVXNUMEZCWkN4RlFVRjFRanRCUVVNMVFpeGhRVUZQTEV0QlFWQTdRVUZEUkN4TFFVWk5MRTFCUlVFc1NVRkJTU3hWUVVGVkxFMUJRV1FzUlVGQmMwSTdRVUZETTBJc1lVRkJUeXhKUVVGUU8wRkJRMFFzUzBGR1RTeE5RVVZCTEVsQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJXQ3hEUVVGT0xFTkJRVVFzU1VGQk5rSXNVMEZCVXl4TFFVRlVMRU5CUVdwRExFVkJRV3RFTzBGQlEzWkVMR0ZCUVU4c1YwRkJWeXhMUVVGWUxFTkJRVkE3UVVGRFJDeExRVVpOTEUxQlJVRTdRVUZEVEN4aFFVRlBMRXRCUVZBN1FVRkRSRHRCUVVOR0xFZEJNVUpoTzBGQk5FSmtMRmRCTlVKakxIRkNRVFJDU2l4TFFUVkNTU3hGUVRSQ1J6dEJRVU5tTEZkQlFVOHNUVUZCVFN4UFFVRk9MRU5CUVdNc1UwRkJaQ3hGUVVGNVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VFFVRlNMRVZCUVhOQ08wRkJRM0JFTEdGQlFVOHNXVUZCV1N4VlFVRlZMRmRCUVZZc1JVRkJXaXhIUVVGelF5eEZRVUUzUXp0QlFVTkVMRXRCUmswc1EwRkJVRHRCUVVkRUxFZEJhRU5oTzBGQmEwTmtMRmxCYkVOakxITkNRV3REU0N4UFFXeERSeXhGUVd0RFRUdEJRVU5zUWl4WlFVRlJMRWRCUVZJc1EwRkJXU3hQUVVGYUxFVkJRWEZDTEZkQlFYSkNMRVZCUVd0RExITkRRVUZzUXp0QlFVTkJMRmxCUVZFc1IwRkJVaXhEUVVGWkxFOUJRVm9zUlVGQmNVSXNhVUpCUVhKQ0xFVkJRWGRETEdGQlFYaERPMEZCUTBFc1dVRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4eFFrRkJja0lzUlVGQk5FTXNVVUZCTlVNN1FVRkRSQ3hIUVhSRFlUdEJRWGREWkN4clFrRjRRMk1zTkVKQmQwTkhMRXRCZUVOSUxFVkJkME5WTzBGQlEzUkNMRkZCUVVrc1ZVRkJWU3hUUVVGVExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaRHRCUVVGQkxGRkJRMGtzYTBKQlFXdENMRXRCUkhSQ08wRkJRVUVzVVVGRlNTeG5Ra0ZCWjBJc1NVRkdjRUk3UVVGQlFTeFJRVWRKTEdsQ1FVRnBRaXhMUVVoeVFqdEJRVUZCTEZGQlNVa3NZMEZCWXl4SlFVcHNRanRCUVVGQkxGRkJTMGtzWVVGQllTeEpRVXhxUWp0QlFVMUJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZWQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSE5DUVVGakxGRkJRVkVzVDBGQlVpeERRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhYUVVGMFF6dEJRVU5CTEhGQ1FVRmhMRkZCUVZFc1QwRkJVaXhEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4WFFVRnlRenRCUVVORUxFOUJTRVFzVFVGSFR6dEJRVU5NTEhOQ1FVRmpMRmRCUVdRN1FVRkRRU3h4UWtGQllTeFhRVUZpTzBGQlEwUTdRVUZEUkN4VlFVRkpMRkZCUVZFc1MwRkJVaXhEUVVGakxGVkJRV1FzVFVGQk9FSXNVMEZCYkVNc1JVRkJOa003UVVGRE0wTXNNRUpCUVd0Q0xFbEJRV3hDTzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBRc1dVRkJUeXhMUVVGUU8wRkJRMFVzVjBGQlN5eEpRVUZNTzBGQlEwVXNlVUpCUVdsQ0xHVkJRV3BDTzBGQlEwRTdRVUZEUml4WFFVRkxMRWxCUVV3N1FVRkRSU3haUVVGSkxHVkJRVW9zUlVGQmNVSTdRVUZEYmtJc1kwRkJTU3hQUVVGUExGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVFVGQmRrSXNRMEZCTlVJN1FVRkJRU3hqUVVOSkxHdENRVUZyUWl4VFFVRlRMR1ZCUkM5Q08wRkJRVUVzWTBGRlNTeHRRa0ZCYlVJc1owSkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGRkJSamRETzBGQlFVRXNZMEZIU1N4blFrRkJaMElzUzBGSWNFSTdPMEZCUzBFc1kwRkJTU3hEUVVGRExGTkJRVk1zU1VGQlpDeEZRVUZ2UWp0QlFVTnNRaXcwUWtGQlowSXNTVUZCYUVJN1FVRkRRU3cwUWtGQlowSXNTMEZCYUVJc1EwRkJjMElzVVVGQmRFSXNSMEZCYVVNc1VVRkJha003UVVGRFFTdzBRa0ZCWjBJc1YwRkJhRUlzUTBGQk5FSXNTVUZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVVUZCV0N4SFFVRnpRaXhSUVVGMFFqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhWUVVGWUxFZEJRWGRDTEVWQlFYaENPMEZCUTBRN08wRkJSVVFzWlVGQlN5eFhRVUZNTEVOQlFXbENMRTlCUVdwQ08wRkJRMEVzYTBKQlFWRXNTMEZCVWl4RFFVRmpMRlZCUVdRc1NVRkJORUlzTUVKQlFUVkNPMEZCUTBFc01FSkJRV2RDTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1owSkJRV3BETEVOQlFXdEVMRmRCUVd4RUxFTkJRV2hDTzBGQlEwRXNNa0pCUVdsQ0xHdENRVUZyUWl4VFFVRnNRaXhKUVVFclFpeGpRVUZqTEUxQlFXUXNSMEZCZFVJc1EwRkJkRVFzU1VGQk1rUXNhMEpCUVd0Q0xFMUJRVGxHTzBGQlEwRXNNRUpCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRkZCUVhSQ0xFZEJRV2xETEdkQ1FVRnFRenRCUVVOQkxHVkJRVXNzVjBGQlRDeERRVUZwUWl4UFFVRnFRanM3UVVGRlFTeGpRVUZMTEdGQlFVd3NSVUZCY1VJN1FVRkRia0lzYVVKQlFVc3NaVUZCVEN4RFFVRnhRaXhQUVVGeVFqdEJRVU5CTEdsQ1FVRkxMRlZCUVV3c1EwRkJaMElzVjBGQmFFSXNRMEZCTkVJc1NVRkJOVUk3UVVGRFJEdEJRVU5HTzBGQlEwUTdRVUV2UWtvN1FVRnBRMEVzVjBGQlR5eGpRVUZRTzBGQlEwUXNSMEU1Um1FN1FVRm5SMlFzUzBGb1IyTXNaVUZuUjFZc1QwRm9SMVVzUlVGblIwUXNVVUZvUjBNc1JVRm5SMU1zUzBGb1IxUXNSVUZuUjJkQ08wRkJRelZDTEZGQlFVa3NZVUZCWVN4UlFVRlJMR0ZCUVZJc1EwRkJjMElzVVVGQmRFSXNRMEZCYWtJN1FVRkRRU3hSUVVGSkxFTkJRVU1zVlVGQlRDeEZRVUZwUWp0QlFVTm1MRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZsQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSFZDUVVGaExGRkJRVkVzVTBGQlVpeERRVUZyUWl4UlFVRlJMRTlCUVZJc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzU1VGQmQwSXNSMEZCZUVJc1IwRkJPRUlzVVVGQmFFUXNRMEZCWWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTUxIVkNRVUZoTEZGQlFXSTdRVUZEUkR0QlFVTkVMRmxCUVVrc1VVRkJVU3hMUVVGU0xFTkJRV01zVlVGQlpDeE5RVUU0UWl4VFFVRnNReXhGUVVFMlF6dEJRVU16UXl4clFrRkJVU3hoUVVGU0xFTkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGVkJRV3hETzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSQ3haUVVGUkxFdEJRVklzUTBGQll5eFZRVUZrTEVsQlFUUkNMRXRCUVRWQ08wRkJRMFE3UVVGb1NHRXNRMEZCYUVJN08wRkJiMGhCTEVsQlFVMHNaVUZCWlN4RlFVRnlRanRCUVVGQkxFbEJRMDBzVjBGQlZ6dEJRVU5VTEdsQ1FVRmxMRXRCUkU0N1FVRkZWQ3h4UWtGQmJVSXNTMEZHVmp0QlFVZFVMR2RDUVVGakxFbEJTRXc3UVVGSlZDeGhRVUZYTEV0QlNrWTdRVUZMVkN4M1FrRkJjMElzUjBGTVlqdEJRVTFVTEc5Q1FVRnJRaXhIUVU1VU8wRkJUMVFzWjBKQlFXTXNSMEZRVER0QlFWRlVMR05CUVZrc1MwRlNTRHRCUVZOVUxHTkJRVmtzU1VGVVNEdEJRVlZVTEZkQlFWTXNTVUZXUVR0QlFWZFVMRmRCUVZNc1NVRllRVHRCUVZsVUxGVkJRVkVzUzBGYVF6dEJRV0ZVTEZWQlFWRXNTMEZpUXp0QlFXTlVMRmRCUVZNc1NVRmtRVHRCUVdWVUxGZEJRVk1zU1VGbVFUdEJRV2RDVkN4aFFVRlhMRWRCYUVKR08wRkJhVUpVTEdGQlFWY3NSMEZxUWtZN1FVRnJRbFFzVjBGQlV5eEhRV3hDUVR0QlFXMUNWQ3hYUVVGVExFZEJia0pCTzBGQmIwSlVMR2xDUVVGbExFdEJjRUpPTzBGQmNVSlVMR0ZCUVZjc1EwRnlRa1k3UVVGelFsUXNWMEZCVXl4SlFYUkNRVHRCUVhWQ1ZDeFpRVUZWTzBGQmRrSkVMRU5CUkdwQ096dEpRVEpDVFN4Uk8wRkJRMG9zYjBKQlFWa3NUMEZCV2l4RlFVRnhRaXhQUVVGeVFpeEZRVUU0UWp0QlFVRkJPenRCUVVVMVFpeFRRVUZMTEU5QlFVd3NSMEZCWlN4UFFVRm1PenRCUVVWQkxGRkJRVTBzVDBGQlR6dEJRVU5ZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGRVJEdEJRVVZZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGR1JEdEJRVWRZTEdWQlFWTXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VlFVRXpRaXhEUVVoRk8wRkJTVmdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CU2tVN1FVRkxXQ3hqUVVGUkxGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzVTBGQk0wSXNRMEZNUnp0QlFVMVlMR05CUVZFc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhUUVVFelFpeERRVTVITzBGQlQxZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJVRVU3UVVGUldDeGxRVUZUTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNWVUZCTTBJc1EwRlNSVHRCUVZOWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRlVRVHRCUVZWWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRldRVHRCUVZkWUxHVkJRVk1zVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFZRVUV6UWl4RFFWaEZPMEZCV1Znc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQldrVTdRVUZoV0N4eFFrRkJaU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xHZENRVUV6UWl4RFFXSktPMEZCWTFnc2FVSkJRVmNzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFhRVUV6UWl4RFFXUkJPMEZCWlZnc2NVSkJRV1VzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeG5Ra0ZCTTBJc1EwRm1TanRCUVdkQ1dDeDVRa0ZCYlVJc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXh4UWtGQk0wSXNRMEZvUWxJN1FVRnBRbGdzYVVKQlFWY3NVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4WlFVRXpRaXhEUVdwQ1FUdEJRV3RDV0N4dlFrRkJZeXhUUVVGVExHRkJRVlFzUTBGQmRVSXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4bFFVRXpRaXhEUVVGMlFpeERRV3hDU0R0QlFXMUNXQ3huUWtGQlZTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNPMEZCYmtKRExFdEJRV0k3TzBGQmMwSkJMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEZWQlFVa3NTMEZCU3l4SFFVRk1MRTFCUVdNc1NVRkJiRUlzUlVGQmQwSTdRVUZEZEVJc1pVRkJUeXhMUVVGTExFZEJRVXdzUTBGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc2FVSkJRV0VzU1VGQllpeEZRVUZ0UWl4UlFVRnVRaXhGUVVFMlFpeEpRVUUzUWl4RlFVRnRReXhQUVVGdVF6czdRVUZGUVN4UlFVRkhMRU5CUVVNc1MwRkJTeXhaUVVGVUxFVkJRWFZDTzBGQlEzSkNMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEU5QlFYcENPMEZCUTBRN08wRkJSVVFzVTBGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGNFFqdEJRVU5CTEZOQlFVc3NaVUZCVEN4SFFVRjFRaXhKUVVGMlFqdEJRVU5CTEZOQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN1FVRkRRU3hUUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNVMEZCU3l4UFFVRk1MRWRCUVdVc1JVRkJaanRCUVVOQkxGTkJRVXNzUjBGQlRDeEhRVUZYTEVsQlFWZzdPMEZCUlVFc1UwRkJTeXhOUVVGTUxFZEJRV01zU1VGQlpEdEJRVU5CTEZOQlFVc3NaMEpCUVV3c1IwRkJkMElzUTBGQmVFSTdRVUZEUVN4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEVOQlFYaENPMEZCUTBFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEVOQlFYQkNPMEZCUTBFc1UwRkJTeXhoUVVGTUxFZEJRWEZDTEVOQlFYSkNPenRCUVVWQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanM3UVVGRlFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3TzBGQlJVRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDTzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDT3p0QlFVVkJMRk5CUVVzc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFTeFRRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRmtPenRCUVVWQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbU96dEJRVVZCTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqdEJRVU5CTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqczdRVUZGUVN4VFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWxCUVdwQ0xFTkJRWE5DTEVsQlFYUkNMRU5CUVc1Q08wRkJRMEVzVTBGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVsQlFUbENMRU5CUVROQ08wRkJRMEVzVTBGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1kwRkJUQ3hEUVVGdlFpeEpRVUZ3UWl4RFFVRjVRaXhKUVVGNlFpeERRVUYwUWp0QlFVTkJMRk5CUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCU3l4clFrRkJUQ3hEUVVGM1FpeEpRVUY0UWl4RFFVRTJRaXhKUVVFM1FpeERRVUV4UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEdGQlFVd3NRMEZCYlVJc1NVRkJia0lzUTBGQmQwSXNTVUZCZUVJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1NVRkJlRUlzUTBGQk5rSXNTVUZCTjBJc1EwRkJNVUk3UVVGRFFTeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFdEJRVXNzWjBKQlFVd3NRMEZCYzBJc1NVRkJkRUlzUTBGQk1rSXNTVUZCTTBJc1EwRkJlRUk3UVVGRFFTeFRRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFYUkNPenRCUVVWQkxGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4SlFVRnVRanRCUVVOQkxGTkJRVXNzV1VGQlRDeEhRVUZ2UWl4SlFVRndRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFVTXNWVUZCVlN4VFFVRldMRU5CUVc5Q0xFdEJRWEJDTEVOQlFUQkNMRFJGUVVFeFFpeERRVUZvUWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeERRVUZETEVOQlFVTXNUMEZCVHl4cFFrRkJWQ3hKUVVFNFFpeERRVUZETEV0QlFVc3NUMEZCZWtRN1FVRkRRU3hUUVVGTExHdENRVUZNTEVkQlFUQkNMRU5CUVVNc1EwRkJReXhQUVVGUExITkNRVUZVTEVsQlFXMURMRU5CUVVNc1MwRkJTeXhQUVVGdVJUdEJRVU5CTEZOQlFVc3NhVUpCUVV3c1IwRkJlVUlzUTBGQmVrSTdRVUZEUVN4VFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhWUVVGTU8wRkJRMFE3T3pzN2FVTkJSVms3UVVGRFdDeFZRVUZKTEV0QlFVc3NhMEpCUVV3c1MwRkJORUlzVTBGQmFFTXNSVUZCTWtNN1FVRkRla01zWVVGQlN5eHJRa0ZCVEN4SFFVRXdRaXhSUVVGUkxHZENRVUZTTEVOQlFYbENMRWxCUVhwQ0xFTkJRVEZDTzBGQlEwRXNZVUZCU3l4clFrRkJUQ3hIUVVFd1FpeFJRVUZSTEdkQ1FVRlNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFURkNPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNaMEpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZMTEU5QlFYaENPMEZCUTBRN08wRkJSVVFzVlVGQlNTeFJRVUZSTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzUzBGQlN5eFBRVUUzUWl4RFFVRmFPMEZCUTBFc1ZVRkJTU3hOUVVGTkxHZENRVUZPTEVOQlFYVkNMRlZCUVhaQ0xFMUJRWFZETEZGQlFUTkRMRVZCUVhGRU8wRkJRMjVFTEdGQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJiVUlzVVVGQmJrSXNSMEZCT0VJc1ZVRkJPVUk3UVVGRFJEczdRVUZGUkR0QlFVTkJMRlZCUVVjc1EwRkJReXhMUVVGTExHRkJRVlFzUlVGQmQwSTdRVUZEZEVJc1lVRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeERRVUZ0UWl4aFFVRnVRaXhIUVVGdFF5eE5RVUZ1UXp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVjBGQlN5eFpRVUZNTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVOQkxGZEJRVXNzVFVGQlREdEJRVU5CTEZkQlFVc3NaMEpCUVV3c1EwRkJjMElzUzBGQlN5eG5Ra0ZCTTBJN1FVRkRSRHM3TzNORFFVVnBRanRCUVVOb1FpeFZRVUZITEV0QlFVc3NUMEZCVWl4RlFVRnBRanRCUVVObUxHRkJRVXNzVDBGQlREdEJRVU5FTzBGQlEwWTdPenR0UTBGRll6dEJRVU5pTEZWQlFVY3NTMEZCU3l4UlFVRlNMRVZCUVd0Q08wRkJRMmhDTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1QwRkJUQ3hEUVVGaExHZENRVUZpTEVOQlFUaENMRXRCUVVzc1VVRkJia01zUTBGQlpEdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1MR0ZCUVVzc1RVRkJUQ3hIUVVGakxFdEJRVXNzVDBGQlRDeERRVUZoTEZGQlFUTkNPMEZCUTBRN08wRkJSVVFzVlVGQlJ5eERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkNMR2RDUVVGUkxFbEJRVklzUTBGQllTeHJSRUZCWWp0QlFVTkVPenRCUVVWRUxGZEJRVXNzVDBGQlRDeEhRVUZsTEVWQlFXWTdRVUZEUVN4WFFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1N4UlFVRlJMRU5CUVdwQ0xFVkJRVzlDTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJlRU1zUlVGQlowUXNUMEZCYUVRc1JVRkJlVVE3UVVGRGRrUXNXVUZCU1N4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQldqczdRVUZGUVN4WlFVRkpMRXRCUVVzc2EwSkJRVlFzUlVGQk5rSTdRVUZETTBJc2EwSkJRVkVzVlVGQlVpeERRVUZ0UWl4TFFVRnVRanRCUVVORU96dEJRVVZFTEdOQlFVMHNTMEZCVGl4RFFVRlpMRkZCUVZvc1IwRkJkVUlzVVVGQlVTeFZRVUZTTEVkQlFYRkNMRlZCUVRWRE8wRkJRMEVzWTBGQlRTeExRVUZPTEVOQlFWa3NUMEZCV2l4SFFVRnpRaXhQUVVGMFFqdEJRVU5CTEdOQlFVMHNTMEZCVGl4RFFVRlpMRWxCUVZvc1IwRkJiVUlzUTBGQmJrSTdRVUZEUVN4alFVRk5MRXRCUVU0c1EwRkJXU3hIUVVGYUxFZEJRV3RDTEVOQlFXeENPenRCUVVWQkxGbEJRVWtzVVVGQlVTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xFOUJRWEJDTEV0QlFXZERMRU5CUVRWRE8wRkJRMEVzWVVGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWl4RFFVRnJRaXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRk5CUVhCQ0xFdEJRV3RETEV0QlFYQkVPMEZCUTBFc1lVRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZyUWl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEZOQlFYQkNMRXRCUVd0RExFdEJRWEJFTzBGQlEwUTdRVUZEUmpzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGZEJRVXdzUjBGQmJVSXNUMEZCVHl4VlFVRXhRanRCUVVOQkxGZEJRVXNzV1VGQlRDeEhRVUZ2UWl4UFFVRlBMRmRCUVROQ08wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEU5QlFUZERPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFOUJRVGxETzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NZVUZCWkN4RlFVRTJRaXhMUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4aFFVRnlSQ3hEUVVGeVFqdEJRVU5CTEZkQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEdGQlFXUXNSVUZCTmtJc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NZVUZCZEVRc1EwRkJja0k3UVVGRFJEczdPMjFEUVVWak8wRkJRMklzVjBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xIRkNRVUZzUWl4RlFVRmtPMEZCUTBFc1YwRkJTeXhuUWtGQlRDeEhRVUYzUWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGd1F6dEJRVU5CTEZkQlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCY0VNN1FVRkRRU3hYUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJhRU03UVVGRFFTeFhRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhOUVVGTUxFTkJRVmtzVFVGQmFrTTdRVUZEUVN4WFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1QwRkJMME03UVVGRFFTeFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NUMEZCYUVRN1FVRkRRU3hYUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhqUVVGa0xFVkJRVGhDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExHTkJRWFpFTEVOQlFYSkNPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1kwRkJaQ3hGUVVFNFFpeExRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhqUVVGNFJDeERRVUZ5UWp0QlFVTkVPenM3Y1VOQlJXZENMRXNzUlVGQlR6dEJRVU4wUWl4dFFrRkJZU3hMUVVGTExHZENRVUZzUWp0QlFVTkJMRmRCUVVzc1owSkJRVXdzUjBGQmQwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRndReXhEUVVGNFFqdEJRVU5FT3pzN05rSkJSVkU3UVVGRFVDeFZRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRanRCUVVOb1FqdEJRVU5FTzBGQlEwUXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJaanM3UVVGRlFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNZVUZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTzBGQlEwRXNaVUZCVHl4blFrRkJVQ3hEUVVGM1FpeHRRa0ZCZUVJc1JVRkJOa01zUzBGQlN5eHRRa0ZCYkVRN1FVRkRRU3hoUVVGTExHTkJRVXdzUjBGQmMwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRkxMRmxCUVhwRExFTkJRWFJDTzBGQlEwUXNUMEZLUkN4TlFVbFBMRWxCUVVrc1MwRkJTeXhoUVVGVUxFVkJRWGRDTzBGQlF6ZENMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMR1ZCUVU4c1owSkJRVkFzUTBGQmQwSXNZMEZCZUVJc1JVRkJkME1zUzBGQlN5eGpRVUUzUXp0QlFVTkJMR0ZCUVVzc1kwRkJUQ3hIUVVGelFpeFhRVUZYTEV0QlFVc3NZVUZCYUVJc1JVRkJLMElzUzBGQlN5eFpRVUZ3UXl4RFFVRjBRanRCUVVORUxFOUJTazBzVFVGSlFUdEJRVU5NTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEdWQlFVOHNaMEpCUVZBc1EwRkJkMElzVjBGQmVFSXNSVUZCY1VNc1MwRkJTeXhYUVVFeFF6dEJRVU5CTEdGQlFVc3NaVUZCVER0QlFVTkVPenRCUVVWRUxHRkJRVThzWjBKQlFWQXNRMEZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCU3l4alFVRjJRenRCUVVOQkxGZEJRVXNzUjBGQlRDeEhRVUZYTEU5QlFVOHNTMEZCU3l4blFrRkJXaXhEUVVGWU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xGVkJRVWtzUTBGQlF5eExRVUZMTEU5QlFWWXNSVUZCYlVJN1FVRkRha0k3UVVGRFJEdEJRVU5FTEZkQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN08wRkJSVUVzVlVGQlNTeExRVUZMTEd0Q1FVRlVMRVZCUVRaQ08wRkJRek5DTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzYlVKQlFUTkNMRVZCUVdkRUxFdEJRVXNzYlVKQlFYSkVPMEZCUTBRc1QwRkdSQ3hOUVVWUExFbEJRVWtzUzBGQlN5eGhRVUZVTEVWQlFYZENPMEZCUXpkQ0xHVkJRVThzYlVKQlFWQXNRMEZCTWtJc1kwRkJNMElzUlVGQk1rTXNTMEZCU3l4alFVRm9SRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzVjBGQk0wSXNSVUZCZDBNc1MwRkJTeXhYUVVFM1F6dEJRVU5FT3p0QlFVVkVMR0ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNVVUZCTTBJc1JVRkJjVU1zUzBGQlN5eGpRVUV4UXp0QlFVTkJMR0ZCUVU4c1RVRkJVQ3hEUVVGakxFdEJRVXNzUjBGQmJrSTdRVUZEUkRzN096aENRVVZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEWkN4WFFVRkxMRlZCUVV3c1IwRkJhMElzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1ZVRkJka0lzUjBGQmIwTXNRMEZCZEVRN1FVRkRRU3hYUVVGTExGVkJRVXdzUjBGQmEwSXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVlVGQmRrSXNSMEZCYjBNc1EwRkJkRVE3UVVGRFJEczdPekpDUVVWTkxFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFdDeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5CTEZkQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEU5QlFYWkNMRWRCUVdsRExFTkJRV2hFTzBGQlEwUTdPenMyUWtGRlVTeERMRVZCUVVjc1F5eEZRVUZITzBGQlEySXNWMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRk5CUVhaQ0xFZEJRVzFETEVOQlFYQkVPMEZCUTBFc1YwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExGTkJRWFpDTEVkQlFXMURMRU5CUVhCRU8wRkJRMFE3T3pzeVFrRkZUU3hETEVWQlFVY3NReXhGUVVGSE8wRkJRMWdzVjBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVDBGQmRrSXNSMEZCYVVNc1EwRkJhRVE3UVVGRFFTeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5FT3pzN01FSkJSVXNzUXl4RlFVRkhMRU1zUlVGQlJ6dEJRVU5XTEZkQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEUxQlFYWkNMRWRCUVdkRExFTkJRVGxETzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NUVUZCZGtJc1IwRkJaME1zUTBGQk9VTTdRVUZEUkRzN096SkNRVVZOTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEV0N4WFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxGTkJRVTRzUjBGQmEwSXNTMEZCU3l4UFFVRjJRaXhIUVVGcFF5eERRVUZvUkR0QlFVTkJMRmRCUVVzc1QwRkJUQ3hIUVVGbExFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRTlCUVhaQ0xFZEJRV2xETEVOQlFXaEVPMEZCUTBRN096dHZRMEZGWlN4UExFVkJRVk03UVVGRGRrSXNWMEZCU3l4WlFVRk1MRWRCUVc5Q0xFOUJRWEJDTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVORU96czdaME5CUlZjc1R5eEZRVUZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEZWtJc1ZVRkJTU3hGUVVGRkxFOUJRVVlzUTBGQlZTeExRVUZMTEZOQlFXWXNTVUZCTkVJc1NVRkJhRU03UVVGRFFTeFZRVUZKTEVWQlFVVXNUMEZCUml4RFFVRlZMRXRCUVVzc1UwRkJaaXhKUVVFMFFpeEpRVUZvUXp0QlFVTkJMRlZCUVVrc1MwRkJTeXhyUWtGQlZDeEZRVUUyUWp0QlFVTXpRaXhuUWtGQlVTeEhRVUZTTEVOQlFWa3NUMEZCV2l4RlFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4cFFrRkJhVUlzUTBGQmFrSXNSMEZCY1VJc1IwRkJja0lzUjBGQk1rSXNRMEZCTTBJc1IwRkJLMElzUzBGQmFrVTdRVUZEUkN4UFFVWkVMRTFCUlU4c1NVRkJTU3hMUVVGTExHdENRVUZVTEVWQlFUWkNPMEZCUTJ4RExHZENRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERMR1ZCUVdVc1EwRkJaaXhIUVVGdFFpeEhRVUZ1UWl4SFFVRjVRaXhEUVVGNlFpeEhRVUUyUWl4SFFVRXZSRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdkQ1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFZEJRWEZDTEVOQlFYSkNPMEZCUTBFc1owSkJRVkVzUzBGQlVpeERRVUZqTEVkQlFXUXNSMEZCYjBJc1EwRkJjRUk3UVVGRFJEdEJRVU5HT3pzN2VVTkJSVzlDTzBGQlEyNUNMRlZCUVVrc1MwRkJTeXhyUWtGQlRDeEpRVUV5UWl4TFFVRkxMR2xDUVVGTUxFdEJRVEpDTEVOQlFURkVMRVZCUVRaRU8wRkJRek5FTEdGQlFVc3NUMEZCVER0QlFVTkJMR0ZCUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCTVVJN1FVRkRRU3hoUVVGTExFMUJRVXc3UVVGRFJDeFBRVXBFTEUxQlNVODdRVUZEVEN4aFFVRkxMR1ZCUVV3N1FVRkRSRHRCUVVOR096czdiME5CUldVN1FVRkRaQ3hWUVVGSkxFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMRmxCUVV3c1MwRkJjMElzUTBGQmFFUXNSVUZCYlVRN1FVRkRha1FzWVVGQlN5eFBRVUZNTzBGQlEwRXNZVUZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRWEpDTzBGQlEwRXNZVUZCU3l4TlFVRk1PMEZCUTBRc1QwRktSQ3hOUVVsUE8wRkJRMHdzWVVGQlN5eGxRVUZNTzBGQlEwUTdRVUZEUmpzN08zbERRVVZ2UWp0QlFVTnVRaXhYUVVGTExHVkJRVXdzUjBGQmRVSXNTVUZCZGtJN1FVRkRSRHM3TzNGRFFVVm5RanRCUVVObUxGZEJRVXNzWjBKQlFVdzdRVUZEUkRzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGbEJRVXc3UVVGRFFTeFZRVUZKTEcxQ1FVRnRRaXhMUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEZsQlFURkRPMEZCUVVFc1ZVRkRTU3h0UWtGQmJVSXNTMEZCU3l4TlFVRk1MRWRCUVdNc1MwRkJTeXhaUVVReFF6dEJRVVZCTEZWQlFVc3NTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia01zU1VGQk5rUXNTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia2NzUlVGQk1FZzdRVUZEZUVnc1lVRkJTeXhuUWtGQlRDeERRVUZ6UWl4RFFVRjBRanRCUVVORU8wRkJRMFFzVlVGQlNTeExRVUZMTEZGQlFWUXNSVUZCYlVJN1FVRkRha0lzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRc1QwRklSQ3hOUVVkUE8wRkJRMHdzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRN1FVRkRSQ3hYUVVGTExFOUJRVXdzU1VGQlowSXNTMEZCU3l4WlFVRk1MRWxCUVhGQ0xFdEJRVXNzVDBGQlRDeEhRVUZsTEVkQlFYQkRMRU5CUVdoQ08wRkJRMEVzVjBGQlN5eFBRVUZNTEVsQlFXZENMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEU5QlFVd3NSMEZCWlN4SFFVRnlReXhEUVVGb1FqdEJRVU5CTEZWQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJTeXhOUVVGb1FpeERRVUZPTEVOQlFVd3NSVUZCY1VNN1FVRkRia01zWVVGQlN5eFBRVUZNTEVkQlFXVXNVVUZCVVN4TFFVRlNMRU5CUVdNc1MwRkJTeXhQUVVGdVFpeEZRVUUwUWl4RFFVRkRMRXRCUVVzc1RVRkJiRU1zUlVGQk1FTXNTMEZCU3l4TlFVRXZReXhEUVVGbU8wRkJRMFE3UVVGRFJDeFZRVUZKTEVOQlFVTXNUVUZCVFN4WFFVRlhMRXRCUVVzc1RVRkJhRUlzUTBGQlRpeERRVUZNTEVWQlFYRkRPMEZCUTI1RExHRkJRVXNzVDBGQlRDeEhRVUZsTEZGQlFWRXNTMEZCVWl4RFFVRmpMRXRCUVVzc1QwRkJia0lzUlVGQk5FSXNRMEZCUXl4TFFVRkxMRTFCUVd4RExFVkJRVEJETEV0QlFVc3NUVUZCTDBNc1EwRkJaanRCUVVORU8wRkJRMFFzVjBGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFRRVUZ5UWl4SlFVRnJReXhMUVVGTExGTkJRWHBFTzBGQlEwRXNWMEZCU3l4VFFVRk1MRWxCUVd0Q0xFTkJRVU1zUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VFFVRnlRaXhKUVVGclF5eExRVUZMTEZOQlFYcEVPMEZCUTBFc1YwRkJTeXhKUVVGSkxGRkJRVkVzUTBGQmFrSXNSVUZCYjBJc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeE5RVUY0UXl4RlFVRm5SQ3hQUVVGb1JDeEZRVUY1UkR0QlFVTjJSQ3haUVVGSkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRmFPMEZCUVVFc1dVRkRTU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZFWWp0QlFVRkJMRmxCUlVrc1UwRkJVeXhMUVVGTExFOUJRVXdzUTBGQllTeExRVUZpTEVOQlJtSTdRVUZCUVN4WlFVZEpMRlZCUVZVc1MwRkJTeXhUUVVGTUxFbEJRV3RDTEZWQlFWVXNTMEZCU3l4UFFVRk1MRWRCUVdVc1EwRkJReXhEUVVGb1FpeEhRVUZ2UWl4RFFVRTVRaXhEUVVGc1FpeERRVWhrTzBGQlFVRXNXVUZKU1N4VlFVRlZMRXRCUVVzc1UwRkJUQ3hKUVVGclFpeFZRVUZWTEV0QlFVc3NUMEZCVEN4SFFVRmxMRU5CUVVNc1EwRkJhRUlzUjBGQmIwSXNRMEZCT1VJc1EwRkJiRUlzUTBGS1pEdEJRVXRCTEdGQlFVc3NWMEZCVEN4RFFVRnBRaXhMUVVGcVFpeEZRVUYzUWl4UFFVRjRRaXhGUVVGcFF5eFBRVUZxUXp0QlFVTkVPMEZCUTBRc1YwRkJTeXhIUVVGTUxFZEJRVmNzVDBGQlR5eExRVUZMTEdkQ1FVRmFMRU5CUVZnN1FVRkRSRHM3T3pKQ1FVVk5MRWtzUlVGQlRTeExMRVZCUVUwN1FVRkRha0k3UVVGRFFTeFZRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVZRc1NVRkJZeXhaUVVGMFFqdEJRVUZCTEZWQlFXOURPMEZCUTJoRExGVkJRVWtzUTBGQlF5eFRRVUZUTEVOQlFWWXNTVUZCWlN4WlFVUjJRaXhEUVVacFFpeERRVWR0UWpzN1FVRkZjRU03UVVGRFFTeFZRVUZKTEZkQlFWY3NTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzVjBGQmVFTTdRVUZEUVN4VlFVRkpMRXRCUVVzc1VVRkJUQ3hMUVVGclFpeFJRVUYwUWl4RlFVRm5RenRCUVVNNVFpeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUk3UVVGRFFTeGhRVUZMTEdWQlFVd3NSMEZCZFVJc1NVRkJka0k3UVVGRFJEczdRVUZGUkN4VlFVRkpMRXRCUVVzc1pVRkJWQ3hGUVVFd1FqdEJRVU40UWl4aFFVRkxMR1ZCUVV3c1IwRkJkVUlzUzBGQmRrSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVORU96czdkME5CUlcxQ0xFc3NSVUZCVHp0QlFVTjZRaXhWUVVGSkxFOUJRVThzVFVGQlRTeEpRVUZxUWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxFdEJRV3hDTzBGQlEwRXNWVUZCU1N4VFFVRlRMRWxCUVZRc1NVRkJhVUlzVlVGQlZTeEpRVUV2UWl4RlFVRnhRenRCUVVOdVF5eGhRVUZMTEdsQ1FVRk1MRWRCUVhsQ0xFTkJRWHBDTzBGQlEwRXNZVUZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhGUVVGclFpeExRVUZzUWp0QlFVTkVPMEZCUTBZN096dHRRMEZGWXl4TExFVkJRVTg3UVVGRGNFSXNWVUZCU1N4UFFVRlBMRTFCUVUwc1dVRkJUaXhEUVVGdFFpeEpRVUU1UWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxGbEJRVTRzUTBGQmJVSXNTMEZCTDBJN1FVRkRRU3hWUVVGSkxGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VlFVRlZMRWxCUVM5Q0xFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1dVRkJUQ3hIUVVGdlFpeERRVUZ3UWp0QlFVTkJMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGQmEwSXNTMEZCYkVJN1FVRkRSRHRCUVVOR096czdaME5CUlZjc1N5eEZRVUZQTzBGQlEycENMRlZCUVVrc1ZVRkJWU3hOUVVGTkxFOUJRWEJDTzBGQlFVRXNWVUZEU1N4VlFVRlZMRTFCUVUwc1QwRkVjRUk3TzBGQlIwRTdRVUZEUVN4VlFVRkhMRXRCUVVzc1UwRkJUQ3hMUVVORExGVkJRVlVzUzBGQlN5eG5Ra0ZCWml4SlFVRnRReXhWUVVGVkxFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhaUVVFelJTeEpRVU5CTEZWQlFWVXNTMEZCU3l4blFrRkJaaXhKUVVGdFF5eFZRVUZWTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eGhRVVl4UlN4RFFVRklMRVZCUlRoR08wRkJRekZHTEdGQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hoUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRTdRVUZEUkRzN1FVRkZTQ3hWUVVGSkxFdEJRVXNzWVVGQlZDeEZRVUYzUWp0QlFVTjBRanRCUVVOQkxGbEJRVWtzUzBGQlN5eHBRa0ZCVkN4RlFVRTBRanRCUVVNeFFpeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVhaQ0xFTkJRVlk3UVVGRFFTeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eFpRVUV2UXl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUYyUWl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1lVRkJMME1zUTBGQlZqdEJRVU5FTzBGQlEwUTdRVUZEUVN4WlFVRkhMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEdGQlFUbENMRVZCUVRaRE8wRkJRek5ETEdWQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVVNc1ZVRkJWU3hMUVVGTExHZENRVUZtTEVkQlFXdERMRXRCUVVzc1kwRkJlRU1zU1VGQk1FUXNTMEZCU3l4aFFVRTNSVHRCUVVOQkxHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR2RDUVVGbUxFZEJRV3RETEV0QlFVc3NZMEZCZUVNc1NVRkJNRVFzUzBGQlN5eGhRVUUzUlR0QlFVTkVPMEZCUTBZc1QwRmlSQ3hOUVdGUE8wRkJRMHc3UVVGRFFTeFpRVUZITEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExHRkJRVGxDTEVWQlFUWkRPMEZCUXpORExHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR0ZCUVdoQ0xFbEJRV2xETEV0QlFVc3NZVUZCY0VRN1FVRkRRU3hsUVVGTExFMUJRVXdzUjBGQll5eERRVUZETEZWQlFWVXNTMEZCU3l4aFFVRm9RaXhKUVVGcFF5eExRVUZMTEdGQlFYQkVPMEZCUTBRN1FVRkRSanRCUVVOR096czdPRUpCUlZNN1FVRkRVaXhYUVVGTExFOUJRVXc3TzBGQlJVRXNiVUpCUVdFc1MwRkJTeXhuUWtGQmJFSTdRVUZEUVN4dFFrRkJZU3hMUVVGTExHTkJRV3hDT3p0QlFVVkJMRmRCUVVzc1QwRkJUQ3hEUVVGaExHVkJRV0lzUTBGQk5rSXNUMEZCTjBJN1FVRkRRU3hYUVVGTExFbEJRVWtzVVVGQlVTeERRVUZxUWl4RlFVRnZRaXhSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEUxQlFYaERMRVZCUVdkRUxFOUJRV2hFTEVWQlFYbEVPMEZCUTNaRUxHRkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NSVUZCYlVJc1pVRkJia0lzUTBGQmJVTXNUMEZCYmtNN1FVRkRSRHM3UVVGRlJDeGhRVUZQTEV0QlFVc3NUMEZCV2p0QlFVTkJMR0ZCUVU4c1MwRkJTeXhOUVVGYU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xHRkJRVThzVDBGQlVEdEJRVU5FT3pzN096czdRVUZKU0N4UFFVRlBMRTlCUVZBc1IwRkJhVUlzVVVGQmFrSWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCbEtIUXNiaXh5S1h0bWRXNWpkR2x2YmlCektHOHNkU2w3YVdZb0lXNWJiMTBwZTJsbUtDRjBXMjlkS1h0MllYSWdZVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJsbUtDRjFKaVpoS1hKbGRIVnliaUJoS0c4c0lUQXBPMmxtS0drcGNtVjBkWEp1SUdrb2J5d2hNQ2s3ZG1GeUlHWTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHZLMXdpSjF3aUtUdDBhSEp2ZHlCbUxtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1puMTJZWElnYkQxdVcyOWRQWHRsZUhCdmNuUnpPbnQ5ZlR0MFcyOWRXekJkTG1OaGJHd29iQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLR1VwZTNaaGNpQnVQWFJiYjExYk1WMWJaVjA3Y21WMGRYSnVJSE1vYmo5dU9tVXBmU3hzTEd3dVpYaHdiM0owY3l4bExIUXNiaXh5S1gxeVpYUjFjbTRnYmx0dlhTNWxlSEJ2Y25SemZYWmhjaUJwUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN1ptOXlLSFpoY2lCdlBUQTdienh5TG14bGJtZDBhRHR2S3lzcGN5aHlXMjlkS1R0eVpYUjFjbTRnYzMwcElpd2lMeXBjYm05aWFtVmpkQzFoYzNOcFoyNWNiaWhqS1NCVGFXNWtjbVVnVTI5eWFIVnpYRzVBYkdsalpXNXpaU0JOU1ZSY2Jpb3ZYRzVjYmlkMWMyVWdjM1J5YVdOMEp6dGNiaThxSUdWemJHbHVkQzFrYVhOaFlteGxJRzV2TFhWdWRYTmxaQzEyWVhKeklDb3ZYRzUyWVhJZ1oyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3p0Y2JuWmhjaUJvWVhOUGQyNVFjbTl3WlhKMGVTQTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNTJZWElnY0hKdmNFbHpSVzUxYldWeVlXSnNaU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVN1hHNWNibVoxYm1OMGFXOXVJSFJ2VDJKcVpXTjBLSFpoYkNrZ2UxeHVYSFJwWmlBb2RtRnNJRDA5UFNCdWRXeHNJSHg4SUhaaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblQySnFaV04wTG1GemMybG5iaUJqWVc1dWIzUWdZbVVnWTJGc2JHVmtJSGRwZEdnZ2JuVnNiQ0J2Y2lCMWJtUmxabWx1WldRbktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQlBZbXBsWTNRb2RtRnNLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjMmh2ZFd4a1ZYTmxUbUYwYVhabEtDa2dlMXh1WEhSMGNua2dlMXh1WEhSY2RHbG1JQ2doVDJKcVpXTjBMbUZ6YzJsbmJpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUVSbGRHVmpkQ0JpZFdkbmVTQndjbTl3WlhKMGVTQmxiblZ0WlhKaGRHbHZiaUJ2Y21SbGNpQnBiaUJ2YkdSbGNpQldPQ0IyWlhKemFXOXVjeTVjYmx4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WW5WbmN5NWphSEp2YldsMWJTNXZjbWN2Y0M5Mk9DOXBjM04xWlhNdlpHVjBZV2xzUDJsa1BUUXhNVGhjYmx4MFhIUjJZWElnZEdWemRERWdQU0J1WlhjZ1UzUnlhVzVuS0NkaFltTW5LVHNnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0Ym1WM0xYZHlZWEJ3WlhKelhHNWNkRngwZEdWemRERmJOVjBnUFNBblpHVW5PMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsT1lXMWxjeWgwWlhOME1TbGJNRjBnUFQwOUlDYzFKeWtnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklHaDBkSEJ6T2k4dlluVm5jeTVqYUhKdmJXbDFiUzV2Y21jdmNDOTJPQzlwYzNOMVpYTXZaR1YwWVdsc1AybGtQVE13TlRaY2JseDBYSFIyWVhJZ2RHVnpkRElnUFNCN2ZUdGNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElERXdPeUJwS3lzcElIdGNibHgwWEhSY2RIUmxjM1F5V3lkZkp5QXJJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvYVNsZElEMGdhVHRjYmx4MFhIUjlYRzVjZEZ4MGRtRnlJRzl5WkdWeU1pQTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVU1aGJXVnpLSFJsYzNReUtTNXRZWEFvWm5WdVkzUnBiMjRnS0c0cElIdGNibHgwWEhSY2RISmxkSFZ5YmlCMFpYTjBNbHR1WFR0Y2JseDBYSFI5S1R0Y2JseDBYSFJwWmlBb2IzSmtaWEl5TG1wdmFXNG9KeWNwSUNFOVBTQW5NREV5TXpRMU5qYzRPU2NwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNibHgwWEhRdkx5Qm9kSFJ3Y3pvdkwySjFaM011WTJoeWIyMXBkVzB1YjNKbkwzQXZkamd2YVhOemRXVnpMMlJsZEdGcGJEOXBaRDB6TURVMlhHNWNkRngwZG1GeUlIUmxjM1F6SUQwZ2UzMDdYRzVjZEZ4MEoyRmlZMlJsWm1kb2FXcHJiRzF1YjNCeGNuTjBKeTV6Y0d4cGRDZ25KeWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYkdWMGRHVnlLU0I3WEc1Y2RGeDBYSFIwWlhOME0xdHNaWFIwWlhKZElEMGdiR1YwZEdWeU8xeHVYSFJjZEgwcE8xeHVYSFJjZEdsbUlDaFBZbXBsWTNRdWEyVjVjeWhQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IwWlhOME15a3BMbXB2YVc0b0p5Y3BJQ0U5UFZ4dVhIUmNkRngwWEhRbllXSmpaR1ZtWjJocGFtdHNiVzV2Y0hGeWMzUW5LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSFJ5ZFdVN1hHNWNkSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVYSFJjZEM4dklGZGxJR1J2YmlkMElHVjRjR1ZqZENCaGJua2diMllnZEdobElHRmliM1psSUhSdklIUm9jbTkzTENCaWRYUWdZbVYwZEdWeUlIUnZJR0psSUhOaFptVXVYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnUHlCUFltcGxZM1F1WVhOemFXZHVJRG9nWm5WdVkzUnBiMjRnS0hSaGNtZGxkQ3dnYzI5MWNtTmxLU0I3WEc1Y2RIWmhjaUJtY205dE8xeHVYSFIyWVhJZ2RHOGdQU0IwYjA5aWFtVmpkQ2gwWVhKblpYUXBPMXh1WEhSMllYSWdjM2x0WW05c2N6dGNibHh1WEhSbWIzSWdLSFpoY2lCeklEMGdNVHNnY3lBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lITXJLeWtnZTF4dVhIUmNkR1p5YjIwZ1BTQlBZbXBsWTNRb1lYSm5kVzFsYm5SelczTmRLVHRjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQm1jbTl0S1NCN1hHNWNkRngwWEhScFppQW9hR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2htY205dExDQnJaWGtwS1NCN1hHNWNkRngwWEhSY2RIUnZXMnRsZVYwZ1BTQm1jbTl0VzJ0bGVWMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR2RsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lrZ2UxeHVYSFJjZEZ4MGMzbHRZbTlzY3lBOUlHZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjeWhtY205dEtUdGNibHgwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM2x0WW05c2N5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwWEhScFppQW9jSEp2Y0VselJXNTFiV1Z5WVdKc1pTNWpZV3hzS0daeWIyMHNJSE41YldKdmJITmJhVjBwS1NCN1hHNWNkRngwWEhSY2RGeDBkRzliYzNsdFltOXNjMXRwWFYwZ1BTQm1jbTl0VzNONWJXSnZiSE5iYVYxZE8xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlIUnZPMXh1ZlR0Y2JpSXNJaTh2SUVkbGJtVnlZWFJsWkNCaWVTQkRiMlptWldWVFkzSnBjSFFnTVM0eE1pNHlYRzRvWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCblpYUk9ZVzV2VTJWamIyNWtjeXdnYUhKMGFXMWxMQ0JzYjJGa1ZHbHRaU3dnYlc5a2RXeGxURzloWkZScGJXVXNJRzV2WkdWTWIyRmtWR2x0WlN3Z2RYQlVhVzFsTzF4dVhHNGdJR2xtSUNnb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJsY21admNtMWhibU5sSUNFOVBTQnVkV3hzS1NBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwTzF4dUlDQWdJSDA3WEc0Z0lIMGdaV3h6WlNCcFppQW9LSFI1Y0dWdlppQndjbTlqWlhOeklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJ5YjJObGMzTWdJVDA5SUc1MWJHd3BJQ1ltSUhCeWIyTmxjM011YUhKMGFXMWxLU0I3WEc0Z0lDQWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9aMlYwVG1GdWIxTmxZMjl1WkhNb0tTQXRJRzV2WkdWTWIyRmtWR2x0WlNrZ0x5QXhaVFk3WEc0Z0lDQWdmVHRjYmlBZ0lDQm9jblJwYldVZ1BTQndjbTlqWlhOekxtaHlkR2x0WlR0Y2JpQWdJQ0JuWlhST1lXNXZVMlZqYjI1a2N5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHaHlPMXh1SUNBZ0lDQWdhSElnUFNCb2NuUnBiV1VvS1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJvY2xzd1hTQXFJREZsT1NBcklHaHlXekZkTzF4dUlDQWdJSDA3WEc0Z0lDQWdiVzlrZFd4bFRHOWhaRlJwYldVZ1BTQm5aWFJPWVc1dlUyVmpiMjVrY3lncE8xeHVJQ0FnSUhWd1ZHbHRaU0E5SUhCeWIyTmxjM011ZFhCMGFXMWxLQ2tnS2lBeFpUazdYRzRnSUNBZ2JtOWtaVXh2WVdSVWFXMWxJRDBnYlc5a2RXeGxURzloWkZScGJXVWdMU0IxY0ZScGJXVTdYRzRnSUgwZ1pXeHpaU0JwWmlBb1JHRjBaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVSaGRHVXVibTkzS0NrZ0xTQnNiMkZrVkdsdFpUdGNiaUFnSUNCOU8xeHVJQ0FnSUd4dllXUlVhVzFsSUQwZ1JHRjBaUzV1YjNjb0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BJQzBnYkc5aFpGUnBiV1U3WEc0Z0lDQWdmVHRjYmlBZ0lDQnNiMkZrVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQjlYRzVjYm4wcExtTmhiR3dvZEdocGN5azdYRzVjYmk4dkl5QnpiM1Z5WTJWTllYQndhVzVuVlZKTVBYQmxjbVp2Y20xaGJtTmxMVzV2ZHk1cWN5NXRZWEJjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENKMllYSWdibTkzSUQwZ2NtVnhkV2x5WlNnbmNHVnlabTl5YldGdVkyVXRibTkzSnlsY2JpQWdMQ0J5YjI5MElEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbmJHOWlZV3dnT2lCM2FXNWtiM2RjYmlBZ0xDQjJaVzVrYjNKeklEMGdXeWR0YjNvbkxDQW5kMlZpYTJsMEoxMWNiaUFnTENCemRXWm1hWGdnUFNBblFXNXBiV0YwYVc5dVJuSmhiV1VuWEc0Z0lDd2djbUZtSUQwZ2NtOXZkRnNuY21WeGRXVnpkQ2NnS3lCemRXWm1hWGhkWEc0Z0lDd2dZMkZtSUQwZ2NtOXZkRnNuWTJGdVkyVnNKeUFySUhOMVptWnBlRjBnZkh3Z2NtOXZkRnNuWTJGdVkyVnNVbVZ4ZFdWemRDY2dLeUJ6ZFdabWFYaGRYRzVjYm1admNpaDJZWElnYVNBOUlEQTdJQ0Z5WVdZZ0ppWWdhU0E4SUhabGJtUnZjbk11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnY21GbUlEMGdjbTl2ZEZ0MlpXNWtiM0p6VzJsZElDc2dKMUpsY1hWbGMzUW5JQ3NnYzNWbVptbDRYVnh1SUNCallXWWdQU0J5YjI5MFczWmxibVJ2Y25OYmFWMGdLeUFuUTJGdVkyVnNKeUFySUhOMVptWnBlRjFjYmlBZ0lDQWdJSHg4SUhKdmIzUmJkbVZ1Wkc5eWMxdHBYU0FySUNkRFlXNWpaV3hTWlhGMVpYTjBKeUFySUhOMVptWnBlRjFjYm4xY2JseHVMeThnVTI5dFpTQjJaWEp6YVc5dWN5QnZaaUJHUmlCb1lYWmxJSEpCUmlCaWRYUWdibTkwSUdOQlJseHVhV1lvSVhKaFppQjhmQ0FoWTJGbUtTQjdYRzRnSUhaaGNpQnNZWE4wSUQwZ01GeHVJQ0FnSUN3Z2FXUWdQU0F3WEc0Z0lDQWdMQ0J4ZFdWMVpTQTlJRnRkWEc0Z0lDQWdMQ0JtY21GdFpVUjFjbUYwYVc5dUlEMGdNVEF3TUNBdklEWXdYRzVjYmlBZ2NtRm1JRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JwWmloeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lIWmhjaUJmYm05M0lEMGdibTkzS0NsY2JpQWdJQ0FnSUNBZ0xDQnVaWGgwSUQwZ1RXRjBhQzV0WVhnb01Dd2dabkpoYldWRWRYSmhkR2x2YmlBdElDaGZibTkzSUMwZ2JHRnpkQ2twWEc0Z0lDQWdJQ0JzWVhOMElEMGdibVY0ZENBcklGOXViM2RjYmlBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqY0NBOUlIRjFaWFZsTG5Oc2FXTmxLREFwWEc0Z0lDQWdJQ0FnSUM4dklFTnNaV0Z5SUhGMVpYVmxJR2hsY21VZ2RHOGdjSEpsZG1WdWRGeHVJQ0FnSUNBZ0lDQXZMeUJqWVd4c1ltRmphM01nWm5KdmJTQmhjSEJsYm1ScGJtY2diR2x6ZEdWdVpYSnpYRzRnSUNBZ0lDQWdJQzh2SUhSdklIUm9aU0JqZFhKeVpXNTBJR1p5WVcxbEozTWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ2NYVmxkV1V1YkdWdVozUm9JRDBnTUZ4dUlDQWdJQ0FnSUNCbWIzSW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1kzQXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaWdoWTNCYmFWMHVZMkZ1WTJWc2JHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbmw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR053VzJsZExtTmhiR3hpWVdOcktHeGhjM1FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUhzZ2RHaHliM2NnWlNCOUxDQXdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlN3Z1RXRjBhQzV5YjNWdVpDaHVaWGgwS1NsY2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdVdWNIVnphQ2g3WEc0Z0lDQWdJQ0JvWVc1a2JHVTZJQ3NyYVdRc1hHNGdJQ0FnSUNCallXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc1hHNGdJQ0FnSUNCallXNWpaV3hzWldRNklHWmhiSE5sWEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z2FXUmNiaUFnZlZ4dVhHNGdJR05oWmlBOUlHWjFibU4wYVc5dUtHaGhibVJzWlNrZ2UxeHVJQ0FnSUdadmNpaDJZWElnYVNBOUlEQTdJR2tnUENCeGRXVjFaUzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWW9jWFZsZFdWYmFWMHVhR0Z1Wkd4bElEMDlQU0JvWVc1a2JHVXBJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVmJhVjB1WTJGdVkyVnNiR1ZrSUQwZ2RISjFaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQzh2SUZkeVlYQWdhVzRnWVNCdVpYY2dablZ1WTNScGIyNGdkRzhnY0hKbGRtVnVkRnh1SUNBdkx5QmdZMkZ1WTJWc1lDQndiM1JsYm5ScFlXeHNlU0JpWldsdVp5QmhjM05wWjI1bFpGeHVJQ0F2THlCMGJ5QjBhR1VnYm1GMGFYWmxJSEpCUmlCbWRXNWpkR2x2Ymx4dUlDQnlaWFIxY200Z2NtRm1MbU5oYkd3b2NtOXZkQ3dnWm00cFhHNTlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NWpZVzVqWld3Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ1kyRm1MbUZ3Y0d4NUtISnZiM1FzSUdGeVozVnRaVzUwY3lsY2JuMWNibTF2WkhWc1pTNWxlSEJ2Y25SekxuQnZiSGxtYVd4c0lEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISnZiM1F1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElEMGdjbUZtWEc0Z0lISnZiM1F1WTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVZ1BTQmpZV1pjYm4xY2JpSXNJaThxS2x4dUtpQlFZWEpoYkd4aGVDNXFjMXh1S2lCQVlYVjBhRzl5SUUxaGRIUm9aWGNnVjJGblpYSm1hV1ZzWkNBdElFQjNZV2RsY21acFpXeGtMQ0JTWlc3RHFTQlNiM1JvSUMwZ2JXRnBiRUJ5Wlc1bGNtOTBhQzV2Y21kY2Jpb2dRR1JsYzJOeWFYQjBhVzl1SUVOeVpXRjBaWE1nWVNCd1lYSmhiR3hoZUNCbFptWmxZM1FnWW1WMGQyVmxiaUJoYmlCaGNuSmhlU0J2WmlCc1lYbGxjbk1zWEc0cUlDQWdJQ0FnSUNBZ0lDQWdJQ0JrY21sMmFXNW5JSFJvWlNCdGIzUnBiMjRnWm5KdmJTQjBhR1VnWjNseWIzTmpiM0JsSUc5MWRIQjFkQ0J2WmlCaElITnRZWEowWkdWMmFXTmxMbHh1S2lBZ0lDQWdJQ0FnSUNBZ0lDQWdTV1lnYm04Z1ozbHliM05qYjNCbElHbHpJR0YyWVdsc1lXSnNaU3dnZEdobElHTjFjbk52Y2lCd2IzTnBkR2x2YmlCcGN5QjFjMlZrTGx4dUtpOWNibHh1WTI5dWMzUWdjbkZCYmtaeUlEMGdjbVZ4ZFdseVpTZ25jbUZtSnlsY2JtTnZibk4wSUc5aWFtVmpkRUZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9KMjlpYW1WamRDMWhjM05wWjI0bktWeHVYRzVqYjI1emRDQm9aV3h3WlhKeklEMGdlMXh1SUNCd2NtOXdaWEowZVVOaFkyaGxPaUI3ZlN4Y2JpQWdkbVZ1Wkc5eWN6b2dXMjUxYkd3c0lGc25MWGRsWW10cGRDMG5MQ2QzWldKcmFYUW5YU3dnV3ljdGJXOTZMU2NzSjAxdmVpZGRMQ0JiSnkxdkxTY3NKMDhuWFN3Z1d5Y3RiWE10Snl3bmJYTW5YVjBzWEc1Y2JpQWdZMnhoYlhBb2RtRnNkV1VzSUcxcGJpd2diV0Y0S1NCN1hHNGdJQ0FnY21WMGRYSnVJRzFwYmlBOElHMWhlRnh1SUNBZ0lDQWdQeUFvZG1Gc2RXVWdQQ0J0YVc0Z1B5QnRhVzRnT2lCMllXeDFaU0ErSUcxaGVDQS9JRzFoZUNBNklIWmhiSFZsS1Z4dUlDQWdJQ0FnT2lBb2RtRnNkV1VnUENCdFlYZ2dQeUJ0WVhnZ09pQjJZV3gxWlNBK0lHMXBiaUEvSUcxcGJpQTZJSFpoYkhWbEtWeHVJQ0I5TEZ4dVhHNGdJR1JoZEdFb1pXeGxiV1Z1ZEN3Z2JtRnRaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm9aV3h3WlhKekxtUmxjMlZ5YVdGc2FYcGxLR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMU2NyYm1GdFpTa3BYRzRnSUgwc1hHNWNiaUFnWkdWelpYSnBZV3hwZW1Vb2RtRnNkV1VwSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1VnUFQwOUlDZDBjblZsSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiSFZsSUQwOVBTQW5abUZzYzJVbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbElEMDlQU0FuYm5Wc2JDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doYVhOT1lVNG9jR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTa3BJQ1ltSUdselJtbHVhWFJsS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpWeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQmpZVzFsYkVOaGMyVW9kbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnZG1Gc2RXVXVjbVZ3YkdGalpTZ3ZMU3NvTGlrL0wyY3NJQ2h0WVhSamFDd2dZMmhoY21GamRHVnlLU0E5UGlCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWTJoaGNtRmpkR1Z5SUQ4Z1kyaGhjbUZqZEdWeUxuUnZWWEJ3WlhKRFlYTmxLQ2tnT2lBbkoxeHVJQ0FnSUgwcFhHNGdJSDBzWEc1Y2JpQWdZV05qWld4bGNtRjBaU2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdhR1ZzY0dWeWN5NWpjM01vWld4bGJXVnVkQ3dnSjNSeVlXNXpabTl5YlNjc0lDZDBjbUZ1YzJ4aGRHVXpaQ2d3TERBc01Da2djbTkwWVhSbEtEQXVNREF3TVdSbFp5a25LVnh1SUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTB0YzNSNWJHVW5MQ0FuY0hKbGMyVnlkbVV0TTJRbktWeHVJQ0FnSUdobGJIQmxjbk11WTNOektHVnNaVzFsYm5Rc0lDZGlZV05yWm1GalpTMTJhWE5wWW1sc2FYUjVKeXdnSjJocFpHUmxiaWNwWEc0Z0lIMHNYRzVjYmlBZ2RISmhibk5tYjNKdFUzVndjRzl5ZENoMllXeDFaU2tnZTF4dUlDQWdJR3hsZENCbGJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5a3NYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVVM1Z3Y0c5eWRDQTlJR1poYkhObExGeHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWWmhiSFZsSUQwZ2JuVnNiQ3hjYmlBZ0lDQWdJQ0FnWm1WaGRIVnlaVk4xY0hCdmNuUWdQU0JtWVd4elpTeGNiaUFnSUNBZ0lDQWdZM056VUhKdmNHVnlkSGtnUFNCdWRXeHNMRnh1SUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2JuVnNiRnh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdhR1ZzY0dWeWN5NTJaVzVrYjNKekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQmpjM05RY205d1pYSjBlU0E5SUdobGJIQmxjbk11ZG1WdVpHOXljMXRwWFZzd1hTQXJJQ2QwY21GdWMyWnZjbTBuWEc0Z0lDQWdJQ0FnSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxuWmxibVJ2Y25OYmFWMWJNVjBnS3lBblZISmhibk5tYjNKdEoxeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kzTnpVSEp2Y0dWeWRIa2dQU0FuZEhKaGJuTm1iM0p0SjF4dUlDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdKM1J5WVc1elptOXliU2RjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNobGJHVnRaVzUwTG5OMGVXeGxXMnB6VUhKdmNHVnlkSGxkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNHVnlkSGxUZFhCd2IzSjBJRDBnZEhKMVpWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnpkMmwwWTJnb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKekpFSnpwY2JpQWdJQ0FnSUNBZ1ptVmhkSFZ5WlZOMWNIQnZjblFnUFNCd2NtOXdaWEowZVZOMWNIQnZjblJjYmlBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lHTmhjMlVnSnpORUp6cGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQmxjblI1VTNWd2NHOXlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHeGxkQ0JpYjJSNUlEMGdaRzlqZFcxbGJuUXVZbTlrZVNCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWIyUjVKeWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SUGRtVnlabXh2ZHlBOUlHUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1emRIbHNaUzV2ZG1WeVpteHZkeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5EY21WaGRHVmtRbTlrZVNBOUlHWmhiSE5sWEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSVdSdlkzVnRaVzUwTG1KdlpIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHpRM0psWVhSbFpFSnZaSGtnUFNCMGNuVmxYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0FuYUdsa1pHVnVKMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHSnZaSGtwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmliMlI1TG5OMGVXeGxMbTkyWlhKbWJHOTNJRDBnSjJocFpHUmxiaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGt1YzNSNWJHVXVZbUZqYTJkeWIzVnVaQ0E5SUNjblhHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1ltOWtlUzVoY0hCbGJtUkRhR2xzWkNobGJHVnRaVzUwS1Z4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQW5kSEpoYm5Oc1lYUmxNMlFvTVhCNExERndlQ3d4Y0hncEoxeHVJQ0FnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVWbUZzZFdVZ1BTQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNobGJHVnRaVzUwS1M1blpYUlFjbTl3WlhKMGVWWmhiSFZsS0dOemMxQnliM0JsY25SNUtWeHVJQ0FnSUNBZ0lDQWdJR1psWVhSMWNtVlRkWEJ3YjNKMElEMGdjSEp2Y0dWeWRIbFdZV3gxWlNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhCeWIzQmxjblI1Vm1Gc2RXVXViR1Z1WjNSb0lENGdNQ0FtSmlCd2NtOXdaWEowZVZaaGJIVmxJQ0U5UFNBbmJtOXVaU2RjYmlBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0JrYjJOMWJXVnVkRTkyWlhKbWJHOTNYRzRnSUNBZ0lDQWdJQ0FnWW05a2VTNXlaVzF2ZG1WRGFHbHNaQ2hsYkdWdFpXNTBLVnh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0JwYzBOeVpXRjBaV1JDYjJSNUlDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ltOWtlUzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KM04wZVd4bEp5bGNiaUFnSUNBZ0lDQWdJQ0FnSUdKdlpIa3VjR0Z5Wlc1MFRtOWtaUzV5WlcxdmRtVkRhR2xzWkNoaWIyUjVLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1ptVmhkSFZ5WlZOMWNIQnZjblJjYmlBZ2ZTeGNibHh1SUNCamMzTW9aV3hsYldWdWRDd2djSEp2Y0dWeWRIa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ2JHVjBJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG5CeWIzQmxjblI1UTJGamFHVmJjSEp2Y0dWeWRIbGRYRzRnSUNBZ2FXWWdLQ0ZxYzFCeWIzQmxjblI1S1NCN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNQ3dnYkNBOUlHaGxiSEJsY25NdWRtVnVaRzl5Y3k1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG1OaGJXVnNRMkZ6WlNob1pXeHdaWEp6TG5abGJtUnZjbk5iYVYxYk1WMGdLeUFuTFNjZ0t5QndjbTl3WlhKMGVTbGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2NISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzV6ZEhsc1pWdHFjMUJ5YjNCbGNuUjVYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYUdWc2NHVnljeTV3Y205d1pYSjBlVU5oWTJobFczQnliM0JsY25SNVhTQTlJR3B6VUhKdmNHVnlkSGxjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQjJZV3gxWlZ4dUlDQjlYRzVjYm4xY2JseHVZMjl1YzNRZ1RVRkhTVU5mVGxWTlFrVlNJRDBnTXpBc1hHNGdJQ0FnSUNCRVJVWkJWVXhVVXlBOUlIdGNiaUFnSUNBZ0lDQWdjbVZzWVhScGRtVkpibkIxZERvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUdOc2FYQlNaV3hoZEdsMlpVbHVjSFYwT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQnVkV3hzTEZ4dUlDQWdJQ0FnSUNCb2IzWmxjazl1YkhrNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJsUm9jbVZ6YUc5c1pEb2dNVEF3TEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJrUmxiR0Y1T2lBMU1EQXNYRzRnSUNBZ0lDQWdJSE4xY0hCdmNuUkVaV3hoZVRvZ05UQXdMRnh1SUNBZ0lDQWdJQ0JqWVd4cFluSmhkR1ZZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWTJGc2FXSnlZWFJsV1RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYVc1MlpYSjBXRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdhVzUyWlhKMFdUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2JHbHRhWFJZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYkdsdGFYUlpPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdjMk5oYkdGeVdEb2dNVEF1TUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR0Z5V1RvZ01UQXVNQ3hjYmlBZ0lDQWdJQ0FnWm5KcFkzUnBiMjVZT2lBd0xqRXNYRzRnSUNBZ0lDQWdJR1p5YVdOMGFXOXVXVG9nTUM0eExGeHVJQ0FnSUNBZ0lDQnZjbWxuYVc1WU9pQXdMalVzWEc0Z0lDQWdJQ0FnSUc5eWFXZHBibGs2SURBdU5TeGNiaUFnSUNBZ0lDQWdjRzlwYm5SbGNrVjJaVzUwY3pvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhCeVpXTnBjMmx2YmpvZ01TeGNiaUFnSUNBZ0lDQWdiMjVTWldGa2VUb2diblZzYkN4Y2JpQWdJQ0FnSUNBZ2MyVnNaV04wYjNJNklHNTFiR3hjYmlBZ0lDQWdJSDFjYmx4dVkyeGhjM01nVUdGeVlXeHNZWGdnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBMQ0J2Y0hScGIyNXpLU0I3WEc1Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RZ1BTQmxiR1Z0Wlc1MFhHNWNiaUFnSUNCamIyNXpkQ0JrWVhSaElEMGdlMXh1SUNBZ0lDQWdZMkZzYVdKeVlYUmxXRG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjJOaGJHbGljbUYwWlMxNEp5a3NYRzRnSUNBZ0lDQmpZV3hwWW5KaGRHVlpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJGc2FXSnlZWFJsTFhrbktTeGNiaUFnSUNBZ0lHbHVkbVZ5ZEZnNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHBiblpsY25RdGVDY3BMRnh1SUNBZ0lDQWdhVzUyWlhKMFdUb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMmx1ZG1WeWRDMTVKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGZzZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTRKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGazZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTVKeWtzWEc0Z0lDQWdJQ0J6WTJGc1lYSllPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYzJOaGJHRnlMWGduS1N4Y2JpQWdJQ0FnSUhOallXeGhjbGs2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelkyRnNZWEl0ZVNjcExGeHVJQ0FnSUNBZ1puSnBZM1JwYjI1WU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5abkpwWTNScGIyNHRlQ2NwTEZ4dUlDQWdJQ0FnWm5KcFkzUnBiMjVaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblpuSnBZM1JwYjI0dGVTY3BMRnh1SUNBZ0lDQWdiM0pwWjJsdVdEb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMjl5YVdkcGJpMTRKeWtzWEc0Z0lDQWdJQ0J2Y21sbmFXNVpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYjNKcFoybHVMWGtuS1N4Y2JpQWdJQ0FnSUhCdmFXNTBaWEpGZG1WdWRITTZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2R3YjJsdWRHVnlMV1YyWlc1MGN5Y3BMRnh1SUNBZ0lDQWdjSEpsWTJsemFXOXVPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY0hKbFkybHphVzl1Snlrc1hHNGdJQ0FnSUNCeVpXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY21Wc1lYUnBkbVV0YVc1d2RYUW5LU3hjYmlBZ0lDQWdJR05zYVhCU1pXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJ4cGNDMXlaV3hoZEdsMlpTMXBibkIxZENjcExGeHVJQ0FnSUNBZ2FHOTJaWEpQYm14NU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5hRzkyWlhJdGIyNXNlU2NwTEZ4dUlDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkcGJuQjFkQzFsYkdWdFpXNTBKeWtwTEZ4dUlDQWdJQ0FnYzJWc1pXTjBiM0k2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelpXeGxZM1J2Y2ljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR1JoZEdFcElIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaFcydGxlVjBnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1pHVnNaWFJsSUdSaGRHRmJhMlY1WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzlpYW1WamRFRnpjMmxuYmloMGFHbHpMQ0JFUlVaQlZVeFVVeXdnWkdGMFlTd2diM0IwYVc5dWN5bGNibHh1SUNBZ0lHbG1LQ0YwYUdsekxtbHVjSFYwUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXBibkIxZEVWc1pXMWxiblFnUFNCMGFHbHpMbVZzWlcxbGJuUmNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZia1pzWVdjZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWdnUFNCYlhWeHVJQ0FnSUhSb2FYTXVaR1Z3ZEdoeldTQTlJRnRkWEc0Z0lDQWdkR2hwY3k1eVlXWWdQU0J1ZFd4c1hHNWNiaUFnSUNCMGFHbHpMbUp2ZFc1a2N5QTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0E5SURCY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXQ0E5SURCY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmtnUFNBd1hHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlEQmNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnTUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ01GeHVYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVlJRDBnTUZ4dUlDQWdJSFJvYVhNdWJXOTBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUQwZ01GeHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFpJRDBnTUZ4dVhHNGdJQ0FnZEdocGN5NXZiazF2ZFhObFRXOTJaU0E5SUhSb2FYTXViMjVOYjNWelpVMXZkbVV1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtSbGRtbGpaVTF2ZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWTmIzUnBiMjR1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNVBjbWxsYm5SaGRHbHZibFJwYldWeUlEMGdkR2hwY3k1dmJrOXlhV1Z1ZEdGMGFXOXVWR2x0WlhJdVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVOYjNScGIyNVVhVzFsY2lBOUlIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtOaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCMGFHbHpMbTl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrRnVhVzFoZEdsdmJrWnlZVzFsSUQwZ2RHaHBjeTV2YmtGdWFXMWhkR2x2YmtaeVlXMWxMbUpwYm1Rb2RHaHBjeWxjYmlBZ0lDQjBhR2x6TG05dVYybHVaRzkzVW1WemFYcGxJRDBnZEdocGN5NXZibGRwYm1SdmQxSmxjMmw2WlM1aWFXNWtLSFJvYVhNcFhHNWNiaUFnSUNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNTR1ZwWjJoMElEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzUTJWdWRHVnlXQ0E5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xrZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTllJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1VtRmthWFZ6V1NBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG5CdmNuUnlZV2wwSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGMydDBiM0FnUFNBaGJtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXRZWFJqYUNndktHbFFhRzl1Wlh4cFVHOWtmR2xRWVdSOFFXNWtjbTlwWkh4Q2JHRmphMEpsY25KNWZFSkNNVEI4Ylc5aWFYeDBZV0pzWlhSOGIzQmxjbUVnYldsdWFYeHVaWGgxY3lBM0tTOXBLVnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVVM1Z3Y0c5eWRDQTlJQ0VoZDJsdVpHOTNMa1JsZG1salpVMXZkR2x2YmtWMlpXNTBJQ1ltSUNGMGFHbHpMbVJsYzJ0MGIzQmNiaUFnSUNCMGFHbHpMbTl5YVdWdWRHRjBhVzl1VTNWd2NHOXlkQ0E5SUNFaGQybHVaRzkzTGtSbGRtbGpaVTl5YVdWdWRHRjBhVzl1UlhabGJuUWdKaVlnSVhSb2FYTXVaR1Z6YTNSdmNGeHVJQ0FnSUhSb2FYTXViM0pwWlc1MFlYUnBiMjVUZEdGMGRYTWdQU0F3WEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F3WEc1Y2JpQWdJQ0IwYUdsekxtbHVhWFJwWVd4cGMyVW9LVnh1SUNCOVhHNWNiaUFnYVc1cGRHbGhiR2x6WlNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUWdQU0JvWld4d1pYSnpMblJ5WVc1elptOXliVk4xY0hCdmNuUW9KekpFSnlsY2JpQWdJQ0FnSUhSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBJRDBnYUdWc2NHVnljeTUwY21GdWMyWnZjbTFUZFhCd2IzSjBLQ2N6UkNjcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EyOXVabWxuZFhKbElFTnZiblJsZUhRZ1UzUjViR1Z6WEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbUZqWTJWc1pYSmhkR1VvZEdocGN5NWxiR1Z0Wlc1MEtWeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnpkSGxzWlNBOUlIZHBibVJ2ZHk1blpYUkRiMjF3ZFhSbFpGTjBlV3hsS0hSb2FYTXVaV3hsYldWdWRDbGNiaUFnSUNCcFppQW9jM1I1YkdVdVoyVjBVSEp2Y0dWeWRIbFdZV3gxWlNnbmNHOXphWFJwYjI0bktTQTlQVDBnSjNOMFlYUnBZeWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZHlaV3hoZEdsMlpTZGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlFiMmx1ZEdWeUlHVjJaVzUwYzF4dUlDQWdJR2xtS0NGMGFHbHpMbkJ2YVc1MFpYSkZkbVZ1ZEhNcElIdGNiaUFnSUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVTJWMGRYQmNiaUFnSUNCMGFHbHpMblZ3WkdGMFpVeGhlV1Z5Y3lncFhHNGdJQ0FnZEdocGN5NTFjR1JoZEdWRWFXMWxibk5wYjI1ektDbGNiaUFnSUNCMGFHbHpMbVZ1WVdKc1pTZ3BYRzRnSUNBZ2RHaHBjeTV4ZFdWMVpVTmhiR2xpY21GMGFXOXVLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUVaV3hoZVNsY2JpQWdmVnh1WEc0Z0lHUnZVbVZoWkhsRFlXeHNZbUZqYXlncElIdGNiaUFnSUNCcFppaDBhR2x6TG05dVVtVmhaSGtwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVTWldGa2VTZ3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbFRHRjVaWEp6S0NrZ2UxeHVJQ0FnSUdsbUtIUm9hWE11YzJWc1pXTjBiM0lwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR0Y1WlhKeklEMGdkR2hwY3k1bGJHVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvZEdocGN5NXpaV3hsWTNSdmNpbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY25NZ1BTQjBhR2x6TG1Wc1pXMWxiblF1WTJocGJHUnlaVzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaWdoZEdocGN5NXNZWGxsY25NdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCamIyNXpiMnhsTG5kaGNtNG9KMUJoY21Gc2JHRjRTbE02SUZsdmRYSWdjMk5sYm1VZ1pHOWxjeUJ1YjNRZ2FHRjJaU0JoYm5rZ2JHRjVaWEp6TGljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NWtaWEIwYUhOWUlEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWtnUFNCYlhWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FXNWtaWGdnUFNBd095QnBibVJsZUNBOElIUm9hWE11YkdGNVpYSnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdiR1YwSUd4aGVXVnlJRDBnZEdocGN5NXNZWGxsY25OYmFXNWtaWGhkWEc1Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5SeVlXNXpabTl5YlRORVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ0lDQm9aV3h3WlhKekxtRmpZMlZzWlhKaGRHVW9iR0Y1WlhJcFhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnYVc1a1pYZ2dQeUFuWVdKemIyeDFkR1VuSURvZ0ozSmxiR0YwYVhabEoxeHVJQ0FnSUNBZ2JHRjVaWEl1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2RpYkc5amF5ZGNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbXhsWm5RZ1BTQXdYRzRnSUNBZ0lDQnNZWGxsY2k1emRIbHNaUzUwYjNBZ1BTQXdYRzVjYmlBZ0lDQWdJR3hsZENCa1pYQjBhQ0E5SUdobGJIQmxjbk11WkdGMFlTaHNZWGxsY2l3Z0oyUmxjSFJvSnlrZ2ZId2dNRnh1SUNBZ0lDQWdkR2hwY3k1a1pYQjBhSE5ZTG5CMWMyZ29hR1ZzY0dWeWN5NWtZWFJoS0d4aGVXVnlMQ0FuWkdWd2RHZ3RlQ2NwSUh4OElHUmxjSFJvS1Z4dUlDQWdJQ0FnZEdocGN5NWtaWEIwYUhOWkxuQjFjMmdvYUdWc2NHVnljeTVrWVhSaEtHeGhlV1Z5TENBblpHVndkR2d0ZVNjcElIeDhJR1JsY0hSb0tWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVScGJXVnVjMmx2Ym5Nb0tTQjdYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFhhV1IwYUNBOUlIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkSVpXbG5hSFFnUFNCM2FXNWtiM2N1YVc1dVpYSklaV2xuYUhSY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdnUFNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUNvZ2RHaHBjeTV2Y21sbmFXNVlYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZERaVzUwWlhKWklEMGdkR2hwY3k1M2FXNWtiM2RJWldsbmFIUWdLaUIwYUdsekxtOXlhV2RwYmxsY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnUFNCTllYUm9MbTFoZUNoMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xnc0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWklEMGdUV0YwYUM1dFlYZ29kR2hwY3k1M2FXNWtiM2REWlc1MFpYSlpMQ0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0F0SUhSb2FYTXVkMmx1Wkc5M1EyVnVkR1Z5V1NsY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxtSnZkVzVrY3lBOUlIUm9hWE11YVc1d2RYUkZiR1Z0Wlc1MExtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2dwWEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUQwZ2RHaHBjeTVpYjNWdVpITXViR1ZtZEZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZCdmMybDBhVzl1V1NBOUlIUm9hWE11WW05MWJtUnpMblJ2Y0Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnZEdocGN5NWliM1Z1WkhNdWQybGtkR2hjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUWdQU0IwYUdsekxtSnZkVzVrY3k1b1pXbG5hSFJjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSllJRDBnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dnS2lCMGFHbHpMbTl5YVdkcGJsaGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWklEMGdkR2hwY3k1bGJHVnRaVzUwU0dWcFoyaDBJQ29nZEdocGN5NXZjbWxuYVc1WlhHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZZSUQwZ1RXRjBhQzV0WVhnb2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdDd2dkR2hwY3k1bGJHVnRaVzUwVjJsa2RHZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXU0E5SUUxaGRHZ3ViV0Y0S0hSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xrc0lIUm9hWE11Wld4bGJXVnVkRWhsYVdkb2RDQXRJSFJvYVhNdVpXeGxiV1Z1ZEVObGJuUmxjbGtwWEc0Z0lIMWNibHh1SUNCeGRXVjFaVU5oYkdsaWNtRjBhVzl1S0dSbGJHRjVLU0I3WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVEWVd4cFluSmhkR2x2YmxScGJXVnlMQ0JrWld4aGVTbGNiaUFnZlZ4dVhHNGdJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWxibUZpYkdWa0tTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ2RISjFaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RrWlhacFkyVnZjbWxsYm5SaGRHbHZiaWNzSUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWxjYmlBZ0lDQWdJSFJvYVhNdVpHVjBaV04wYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5TENCMGFHbHpMbk4xY0hCdmNuUkVaV3hoZVNsY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXViVzkwYVc5dVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjNKMGNtRnBkQ0E5SUdaaGJITmxYRzRnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblpHVjJhV05sYlc5MGFXOXVKeXdnZEdocGN5NXZia1JsZG1salpVMXZkR2x2YmlsY2JpQWdJQ0FnSUhSb2FYTXVaR1YwWldOMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaXdnZEdocGN5NXpkWEJ3YjNKMFJHVnNZWGtwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WUlEMGdNRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJsa2dQU0F3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXMXZkbVVuTENCMGFHbHpMbTl1VFc5MWMyVk5iM1psS1Z4dUlDQWdJQ0FnZEdocGN5NWtiMUpsWVdSNVEyRnNiR0poWTJzb0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0IwYUdsekxtOXVWMmx1Wkc5M1VtVnphWHBsS1Z4dUlDQWdJSFJvYVhNdWNtRm1JRDBnY25GQmJrWnlLSFJvYVhNdWIyNUJibWx0WVhScGIyNUdjbUZ0WlNsY2JpQWdmVnh1WEc0Z0lHUnBjMkZpYkdVb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtVnVZV0pzWldRcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaV1FnUFNCbVlXeHpaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduWkdWMmFXTmxiM0pwWlc1MFlYUnBiMjRuTENCMGFHbHpMbTl1UkdWMmFXTmxUM0pwWlc1MFlYUnBiMjRwWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtMXZkR2x2YmxOMWNIQnZjblFwSUh0Y2JpQWdJQ0FnSUhkcGJtUnZkeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka1pYWnBZMlZ0YjNScGIyNG5MQ0IwYUdsekxtOXVSR1YyYVdObFRXOTBhVzl1S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWdGIzWmxKeXdnZEdocGN5NXZiazF2ZFhObFRXOTJaU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dkR2hwY3k1dmJsZHBibVJ2ZDFKbGMybDZaU2xjYmlBZ0lDQnljVUZ1Um5JdVkyRnVZMlZzS0hSb2FYTXVjbUZtS1Z4dUlDQjlYRzVjYmlBZ1kyRnNhV0p5WVhSbEtIZ3NJSGtwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMFpWZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtTmhiR2xpY21GMFpWZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1allXeHBZbkpoZEdWWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1allXeHBZbkpoZEdWWklEb2dlVnh1SUNCOVhHNWNiaUFnYVc1MlpYSjBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbWx1ZG1WeWRGZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtbHVkbVZ5ZEZnZ09pQjRYRzRnSUNBZ2RHaHBjeTVwYm5abGNuUlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXBiblpsY25SWklEb2dlVnh1SUNCOVhHNWNiaUFnWm5KcFkzUnBiMjRvZUN3Z2VTa2dlMXh1SUNBZ0lIUm9hWE11Wm5KcFkzUnBiMjVZSUQwZ2VDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVtY21samRHbHZibGdnT2lCNFhHNGdJQ0FnZEdocGN5NW1jbWxqZEdsdmJsa2dQU0I1SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtWnlhV04wYVc5dVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUhOallXeGhjaWg0TENCNUtTQjdYRzRnSUNBZ2RHaHBjeTV6WTJGc1lYSllJRDBnZUNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXpZMkZzWVhKWUlEb2dlRnh1SUNBZ0lIUm9hWE11YzJOaGJHRnlXU0E5SUhrZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXVjMk5oYkdGeVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUd4cGJXbDBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbXhwYldsMFdDQTlJSGdnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWJHbHRhWFJZSURvZ2VGeHVJQ0FnSUhSb2FYTXViR2x0YVhSWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1c2FXMXBkRmtnT2lCNVhHNGdJSDFjYmx4dUlDQnZjbWxuYVc0b2VDd2dlU2tnZTF4dUlDQWdJSFJvYVhNdWIzSnBaMmx1V0NBOUlIZ2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YjNKcFoybHVXQ0E2SUhoY2JpQWdJQ0IwYUdsekxtOXlhV2RwYmxrZ1BTQjVJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG05eWFXZHBibGtnT2lCNVhHNGdJSDFjYmx4dUlDQnpaWFJKYm5CMWRFVnNaVzFsYm5Rb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSRmJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZEZ4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnpaWFJRYjNOcGRHbHZiaWhsYkdWdFpXNTBMQ0I0TENCNUtTQjdYRzRnSUNBZ2VDQTlJSGd1ZEc5R2FYaGxaQ2gwYUdsekxuQnlaV05wYzJsdmJpa2dLeUFuY0hnblhHNGdJQ0FnZVNBOUlIa3VkRzlHYVhobFpDaDBhR2x6TG5CeVpXTnBjMmx2YmlrZ0t5QW5jSGduWEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbU56Y3lobGJHVnRaVzUwTENBbmRISmhibk5tYjNKdEp5d2dKM1J5WVc1emJHRjBaVE5rS0NjZ0t5QjRJQ3NnSnl3bklDc2dlU0FySUNjc01Da25LVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RcElIdGNiaUFnSUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTBuTENBbmRISmhibk5zWVhSbEtDY2dLeUI0SUNzZ0p5d25JQ3NnZVNBcklDY3BKeWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVzWldaMElEMGdlRnh1SUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1MGIzQWdQU0I1WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG05eWFXVnVkR0YwYVc5dVUzVndjRzl5ZENBbUppQjBhR2x6TG05eWFXVnVkR0YwYVc5dVUzUmhkSFZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdVb0tWeHVJQ0FnSUNBZ2RHaHBjeTV2Y21sbGJuUmhkR2x2YmxOMWNIQnZjblFnUFNCbVlXeHpaVnh1SUNBZ0lDQWdkR2hwY3k1bGJtRmliR1VvS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1SdlVtVmhaSGxEWVd4c1ltRmpheWdwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1TmIzUnBiMjVVYVcxbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXRiM1JwYjI1VGRYQndiM0owSUNZbUlIUm9hWE11Ylc5MGFXOXVVM1JoZEhWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZFhCd2IzSjBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIUm9hWE11Wlc1aFlteGxLQ2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVrYjFKbFlXUjVRMkZzYkdKaFkyc29LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaWdwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVSbXhoWnlBOUlIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUc5dVYybHVaRzkzVW1WemFYcGxLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnZia0Z1YVcxaGRHbHZia1p5WVcxbEtDa2dlMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxRbTkxYm1SektDbGNiaUFnSUNCc1pYUWdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdDQTlJSFJvYVhNdWFXNXdkWFJZSUMwZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymxnc1hHNGdJQ0FnSUNBZ0lHTmhiR2xpY21GMFpXUkpibkIxZEZrZ1BTQjBhR2x6TG1sdWNIVjBXU0F0SUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVaWEc0Z0lDQWdhV1lnS0NoTllYUm9MbUZpY3loallXeHBZbkpoZEdWa1NXNXdkWFJZS1NBK0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFISmxjMmh2YkdRcElIeDhJQ2hOWVhSb0xtRmljeWhqWVd4cFluSmhkR1ZrU1c1d2RYUlpLU0ErSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYUhKbGMyaHZiR1FwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkYxWlhWbFEyRnNhV0p5WVhScGIyNG9NQ2xjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXlkSEpoYVhRcElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUhSb2FYTXVZMkZzYVdKeVlYUmxXQ0EvSUdOaGJHbGljbUYwWldSSmJuQjFkRmtnT2lCMGFHbHpMbWx1Y0hWMFdWeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDhnWTJGc2FXSnlZWFJsWkVsdWNIVjBXQ0E2SUhSb2FYTXVhVzV3ZFhSWVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlIUm9hWE11WTJGc2FXSnlZWFJsV0NBL0lHTmhiR2xpY21GMFpXUkpibkIxZEZnZ09pQjBhR2x6TG1sdWNIVjBXRnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQ4Z1kyRnNhV0p5WVhSbFpFbHVjSFYwV1NBNklIUm9hWE11YVc1d2RYUlpYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQXFQU0IwYUdsekxtVnNaVzFsYm5SWGFXUjBhQ0FxSUNoMGFHbHpMbk5qWVd4aGNsZ2dMeUF4TURBcFhHNGdJQ0FnZEdocGN5NXRiM1JwYjI1WklDbzlJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0FxSUNoMGFHbHpMbk5qWVd4aGNsa2dMeUF4TURBcFhHNGdJQ0FnYVdZZ0tDRnBjMDVoVGlod1lYSnpaVVpzYjJGMEtIUm9hWE11YkdsdGFYUllLU2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJR2hsYkhCbGNuTXVZMnhoYlhBb2RHaHBjeTV0YjNScGIyNVlMQ0F0ZEdocGN5NXNhVzFwZEZnc0lIUm9hWE11YkdsdGFYUllLVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9JV2x6VG1GT0tIQmhjbk5sUm14dllYUW9kR2hwY3k1c2FXMXBkRmtwS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnYUdWc2NHVnljeTVqYkdGdGNDaDBhR2x6TG0xdmRHbHZibGtzSUMxMGFHbHpMbXhwYldsMFdTd2dkR2hwY3k1c2FXMXBkRmtwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUNzOUlDaDBhR2x6TG0xdmRHbHZibGdnTFNCMGFHbHpMblpsYkc5amFYUjVXQ2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXRnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxaSUNzOUlDaDBhR2x6TG0xdmRHbHZibGtnTFNCMGFHbHpMblpsYkc5amFYUjVXU2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXVnh1SUNBZ0lHWnZjaUFvYkdWMElHbHVaR1Y0SUQwZ01Ec2dhVzVrWlhnZ1BDQjBhR2x6TG14aGVXVnljeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJR3hsZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhKelcybHVaR1Y0WFN4Y2JpQWdJQ0FnSUNBZ0lDQmtaWEIwYUZnZ1BTQjBhR2x6TG1SbGNIUm9jMWhiYVc1a1pYaGRMRnh1SUNBZ0lDQWdJQ0FnSUdSbGNIUm9XU0E5SUhSb2FYTXVaR1Z3ZEdoeldWdHBibVJsZUYwc1hHNGdJQ0FnSUNBZ0lDQWdlRTltWm5ObGRDQTlJSFJvYVhNdWRtVnNiMk5wZEhsWUlDb2dLR1JsY0hSb1dDQXFJQ2gwYUdsekxtbHVkbVZ5ZEZnZ1B5QXRNU0E2SURFcEtTeGNiaUFnSUNBZ0lDQWdJQ0I1VDJabWMyVjBJRDBnZEdocGN5NTJaV3h2WTJsMGVWa2dLaUFvWkdWd2RHaFpJQ29nS0hSb2FYTXVhVzUyWlhKMFdTQS9JQzB4SURvZ01Ta3BYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGQnZjMmwwYVc5dUtHeGhlV1Z5TENCNFQyWm1jMlYwTENCNVQyWm1jMlYwS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5KaFppQTlJSEp4UVc1R2NpaDBhR2x6TG05dVFXNXBiV0YwYVc5dVJuSmhiV1VwWEc0Z0lIMWNibHh1SUNCeWIzUmhkR1VvWW1WMFlTd2daMkZ0YldFcGUxeHVJQ0FnSUM4dklFVjRkSEpoWTNRZ1VtOTBZWFJwYjI1Y2JpQWdJQ0JzWlhRZ2VDQTlJQ2hpWlhSaElIeDhJREFwSUM4Z1RVRkhTVU5mVGxWTlFrVlNMQ0F2THlBZ0xUa3dJRG82SURrd1hHNGdJQ0FnSUNBZ0lIa2dQU0FvWjJGdGJXRWdmSHdnTUNrZ0x5Qk5RVWRKUTE5T1ZVMUNSVklnTHk4Z0xURTRNQ0E2T2lBeE9EQmNibHh1SUNBZ0lDOHZJRVJsZEdWamRDQlBjbWxsYm5SaGRHbHZiaUJEYUdGdVoyVmNiaUFnSUNCc1pYUWdjRzl5ZEhKaGFYUWdQU0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0ErSUhSb2FYTXVkMmx1Wkc5M1YybGtkR2hjYmlBZ0lDQnBaaUFvZEdocGN5NXdiM0owY21GcGRDQWhQVDBnY0c5eWRISmhhWFFwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjRzl5ZEhKaGFYUWdQU0J3YjNKMGNtRnBkRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJrWnNZV2NnUFNCMGNuVmxYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUdiR0ZuS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1Um14aFp5QTlJR1poYkhObFhHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlIaGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WklEMGdlVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnZUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ2VWeHVJQ0I5WEc1Y2JpQWdiMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdVltVjBZVnh1SUNBZ0lHeGxkQ0JuWVcxdFlTQTlJR1YyWlc1MExtZGhiVzFoWEc0Z0lDQWdhV1lnS0dKbGRHRWdJVDA5SUc1MWJHd2dKaVlnWjJGdGJXRWdJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkR0YwZFhNZ1BTQXhYRzRnSUNBZ0lDQjBhR2x6TG5KdmRHRjBaU2hpWlhSaExDQm5ZVzF0WVNsY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdmJrUmxkbWxqWlUxdmRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdWNtOTBZWFJwYjI1U1lYUmxMbUpsZEdGY2JpQWdJQ0JzWlhRZ1oyRnRiV0VnUFNCbGRtVnVkQzV5YjNSaGRHbHZibEpoZEdVdVoyRnRiV0ZjYmlBZ0lDQnBaaUFvWW1WMFlTQWhQVDBnYm5Wc2JDQW1KaUJuWVcxdFlTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F4WEc0Z0lDQWdJQ0IwYUdsekxuSnZkR0YwWlNoaVpYUmhMQ0JuWVcxdFlTbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZiazF2ZFhObFRXOTJaU2hsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JqYkdsbGJuUllJRDBnWlhabGJuUXVZMnhwWlc1MFdDeGNiaUFnSUNBZ0lDQWdZMnhwWlc1MFdTQTlJR1YyWlc1MExtTnNhV1Z1ZEZsY2JseHVJQ0FnSUM4dklISmxjMlYwSUdsdWNIVjBJSFJ2SUdObGJuUmxjaUJwWmlCb2IzWmxjazl1YkhrZ2FYTWdjMlYwSUdGdVpDQjNaU2R5WlNCdWIzUWdhRzkyWlhKcGJtY2dkR2hsSUdWc1pXMWxiblJjYmlBZ0lDQnBaaWgwYUdsekxtaHZkbVZ5VDI1c2VTQW1KbHh1SUNBZ0lDQWdLQ2hqYkdsbGJuUllJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlIeDhJR05zYVdWdWRGZ2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ0t5QjBhR2x6TG1Wc1pXMWxiblJYYVdSMGFDa2dmSHhjYmlBZ0lDQWdJQ2hqYkdsbGJuUlpJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WklIeDhJR05zYVdWdWRGa2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFdDQTlJREJjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEZrZ1BTQXdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNtVnNZWFJwZG1WSmJuQjFkQ2tnZTF4dUlDQWdJQ0FnTHk4Z1EyeHBjQ0J0YjNWelpTQmpiMjl5WkdsdVlYUmxjeUJwYm5OcFpHVWdaV3hsYldWdWRDQmliM1Z1WkhNdVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1amJHbHdVbVZzWVhScGRtVkpibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpiR2xsYm5SWUlEMGdUV0YwYUM1dFlYZ29ZMnhwWlc1MFdDd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZS1Z4dUlDQWdJQ0FnSUNCamJHbGxiblJZSUQwZ1RXRjBhQzV0YVc0b1kyeHBaVzUwV0N3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJQ3NnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dwWEc0Z0lDQWdJQ0FnSUdOc2FXVnVkRmtnUFNCTllYUm9MbTFoZUNoamJHbGxiblJaTENCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa3BYRzRnSUNBZ0lDQWdJR05zYVdWdWRGa2dQU0JOWVhSb0xtMXBiaWhqYkdsbGJuUlpMQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZMeUJEWVd4amRXeGhkR1VnYVc1d2RYUWdjbVZzWVhScGRtVWdkRzhnZEdobElHVnNaVzFsYm5RdVhHNGdJQ0FnSUNCcFppaDBhR2x6TG1Wc1pXMWxiblJTWVc1blpWZ2dKaVlnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZaS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnS0dOc2FXVnVkRmdnTFNCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1NBdklIUm9hWE11Wld4bGJXVnVkRkpoYm1kbFdGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBXU0E5SUNoamJHbGxiblJaSUMwZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJQzBnZEdocGN5NWxiR1Z0Wlc1MFEyVnVkR1Z5V1NrZ0x5QjBhR2x6TG1Wc1pXMWxiblJTWVc1blpWbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnTHk4Z1EyRnNZM1ZzWVhSbElHbHVjSFYwSUhKbGJHRjBhWFpsSUhSdklIUm9aU0IzYVc1a2IzY3VYRzRnSUNBZ0lDQnBaaWgwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnSmlZZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ0tHTnNhV1Z1ZEZnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BJQzhnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5ZWEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdLR05zYVdWdWRGa2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGtwSUM4Z2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWlhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCamJHVmhjbFJwYldWdmRYUW9kR2hwY3k1a1pYUmxZM1JwYjI1VWFXMWxjaWxjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeWxjYmlBZ0lDQm1iM0lnS0d4bGRDQnBibVJsZUNBOUlEQTdJR2x1WkdWNElEd2dkR2hwY3k1c1lYbGxjbk11YkdWdVozUm9PeUJwYm1SbGVDc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5YzF0cGJtUmxlRjB1Y21WdGIzWmxRWFIwY21saWRYUmxLQ2R6ZEhsc1pTY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pHVnNaWFJsSUhSb2FYTXVaV3hsYldWdWRGeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxteGhlV1Z5YzF4dUlDQjlYRzVjYmlBZ2RtVnljMmx2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnSnpNdU1TNHdKMXh1SUNCOVhHNWNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCUVlYSmhiR3hoZUZ4dUlsMTlcbiIsIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWxsYXguanNcbi8vIEJ1dHRlcnkgc21vb3RoIHBhcmFsbGF4IGxpYnJhcnlcbi8vIENvcHlyaWdodCAoYykgMjAxNiBNb2UgQW1heWEgKEBtb2VhbWF5YSlcbi8vIE1JVCBsaWNlbnNlXG4vL1xuLy8gVGhhbmtzIHRvIFBhcmF4aWZ5LmpzIGFuZCBKYWltZSBDYWJsbGVyb1xuLy8gZm9yIHBhcmFsbGF4IGNvbmNlcHRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QuUmVsbGF4ID0gZmFjdG9yeSgpO1xuICB9XG59KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIFJlbGxheCA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zKXtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBzZWxmID0gT2JqZWN0LmNyZWF0ZShSZWxsYXgucHJvdG90eXBlKTtcblxuICAgIHZhciBwb3NZID0gMDtcbiAgICB2YXIgc2NyZWVuWSA9IDA7XG4gICAgdmFyIHBvc1ggPSAwO1xuICAgIHZhciBzY3JlZW5YID0gMDtcbiAgICB2YXIgYmxvY2tzID0gW107XG4gICAgdmFyIHBhdXNlID0gdHJ1ZTtcblxuICAgIC8vIGNoZWNrIHdoYXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIHVzZSwgYW5kIGlmXG4gICAgLy8gaXQncyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIG9uc2Nyb2xsIGV2ZW50XG4gICAgdmFyIGxvb3AgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICBmdW5jdGlvbihjYWxsYmFjayl7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyB9O1xuXG4gICAgLy8gc3RvcmUgdGhlIGlkIGZvciBsYXRlciB1c2VcbiAgICB2YXIgbG9vcElkID0gbnVsbDtcblxuICAgIC8vIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWUgaWYgdGhlIHBhc3NpdmUgcHJvcGVydHkgaXMgYWNjZXNzZWRcbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAvLyBjaGVjayB3aGF0IGNhbmNlbEFuaW1hdGlvbiBtZXRob2QgdG8gdXNlXG4gICAgdmFyIGNsZWFyTG9vcCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgY2xlYXJUaW1lb3V0O1xuXG4gICAgLy8gY2hlY2sgd2hpY2ggdHJhbnNmb3JtIHByb3BlcnR5IHRvIHVzZVxuICAgIHZhciB0cmFuc2Zvcm1Qcm9wID0gd2luZG93LnRyYW5zZm9ybVByb3AgfHwgKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRlc3RFbC5zdHlsZS50cmFuc2Zvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgdmVuZG9ycyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuICAgICAgICAgIGZvciAodmFyIHZlbmRvciBpbiB2ZW5kb3JzKSB7XG4gICAgICAgICAgICBpZiAodGVzdEVsLnN0eWxlWyB2ZW5kb3JzW3ZlbmRvcl0gKyAnVHJhbnNmb3JtJyBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZlbmRvcnNbdmVuZG9yXSArICdUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3RyYW5zZm9ybSc7XG4gICAgICB9KSgpO1xuXG4gICAgLy8gRGVmYXVsdCBTZXR0aW5nc1xuICAgIHNlbGYub3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiAtMixcblx0ICAgIHZlcnRpY2FsU3BlZWQ6IG51bGwsXG5cdCAgICBob3Jpem9udGFsU3BlZWQ6IG51bGwsXG4gICAgICBicmVha3BvaW50czogWzU3NiwgNzY4LCAxMjAxXSxcbiAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICB3cmFwcGVyOiBudWxsLFxuICAgICAgcmVsYXRpdmVUb1dyYXBwZXI6IGZhbHNlLFxuICAgICAgcm91bmQ6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgdmVydGljYWxTY3JvbGxBeGlzOiBcInlcIixcbiAgICAgIGhvcml6b250YWxTY3JvbGxBeGlzOiBcInhcIixcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9LFxuICAgIH07XG5cbiAgICAvLyBVc2VyIGRlZmluZWQgb3B0aW9ucyAobWlnaHQgaGF2ZSBtb3JlIGluIHRoZSBmdXR1cmUpXG4gICAgaWYgKG9wdGlvbnMpe1xuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICBzZWxmLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tQnJlYWtwb2ludHMgKCkge1xuICAgICAgaWYgKHNlbGYub3B0aW9ucy5icmVha3BvaW50cy5sZW5ndGggPT09IDMgJiYgQXJyYXkuaXNBcnJheShzZWxmLm9wdGlvbnMuYnJlYWtwb2ludHMpKSB7XG4gICAgICAgIHZhciBpc0FzY2VuZGluZyA9IHRydWU7XG4gICAgICAgIHZhciBpc051bWVyaWNhbCA9IHRydWU7XG4gICAgICAgIHZhciBsYXN0VmFsO1xuICAgICAgICBzZWxmLm9wdGlvbnMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgaSAhPT0gJ251bWJlcicpIGlzTnVtZXJpY2FsID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGxhc3RWYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpIDwgbGFzdFZhbCkgaXNBc2NlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdFZhbCA9IGk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc2NlbmRpbmcgJiYgaXNOdW1lcmljYWwpIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHJldmVydCBkZWZhdWx0cyBpZiBzZXQgaW5jb3JyZWN0bHlcbiAgICAgIHNlbGYub3B0aW9ucy5icmVha3BvaW50cyA9IFs1NzYsIDc2OCwgMTIwMV07XG4gICAgICBjb25zb2xlLndhcm4oXCJSZWxsYXg6IFlvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2YgMyBudW1iZXJzIGluIGFzY2VuZGluZyBvcmRlciB0byB0aGUgYnJlYWtwb2ludHMgb3B0aW9uLiBEZWZhdWx0cyByZXZlcnRlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmJyZWFrcG9pbnRzKSB7XG4gICAgICB2YWxpZGF0ZUN1c3RvbUJyZWFrcG9pbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVsbGF4IGNsYXNzXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSAnLnJlbGxheCc7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZWwgaXMgYSBjbGFzc05hbWUgb3IgYSBub2RlXG4gICAgdmFyIGVsZW1lbnRzID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpIDogW2VsXTtcblxuICAgIC8vIE5vdyBxdWVyeSBzZWxlY3RvclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxmLmVsZW1zID0gZWxlbWVudHM7XG4gICAgfVxuXG4gICAgLy8gVGhlIGVsZW1lbnRzIGRvbid0IGV4aXN0XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJSZWxsYXg6IFRoZSBlbGVtZW50cyB5b3UncmUgdHJ5aW5nIHRvIHNlbGVjdCBkb24ndCBleGlzdC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSGFzIGEgd3JhcHBlciBhbmQgaXQgZXhpc3RzXG4gICAgaWYgKHNlbGYub3B0aW9ucy53cmFwcGVyKSB7XG4gICAgICBpZiAoIXNlbGYub3B0aW9ucy53cmFwcGVyLm5vZGVUeXBlKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxmLm9wdGlvbnMud3JhcHBlcik7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiUmVsbGF4OiBUaGUgd3JhcHBlciB5b3UncmUgdHJ5aW5nIHRvIHVzZSBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgYSBwbGFjZWhvbGRlciBmb3IgdGhlIGN1cnJlbnQgYnJlYWtwb2ludFxuICAgIHZhciBjdXJyZW50QnJlYWtwb2ludDtcblxuICAgIC8vIGhlbHBlciB0byBkZXRlcm1pbmUgY3VycmVudCBicmVha3BvaW50XG4gICAgdmFyIGdldEN1cnJlbnRCcmVha3BvaW50ID0gZnVuY3Rpb24gKHcpIHtcbiAgICAgIHZhciBicCA9IHNlbGYub3B0aW9ucy5icmVha3BvaW50cztcbiAgICAgIGlmICh3IDwgYnBbMF0pIHJldHVybiAneHMnO1xuICAgICAgaWYgKHcgPj0gYnBbMF0gJiYgdyA8IGJwWzFdKSByZXR1cm4gJ3NtJztcbiAgICAgIGlmICh3ID49IGJwWzFdICYmIHcgPCBicFsyXSkgcmV0dXJuICdtZCc7XG4gICAgICByZXR1cm4gJ2xnJztcbiAgICB9O1xuXG4gICAgLy8gR2V0IGFuZCBjYWNoZSBpbml0aWFsIHBvc2l0aW9uIG9mIGFsbCBlbGVtZW50c1xuICAgIHZhciBjYWNoZUJsb2NrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmVsZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGJsb2NrID0gY3JlYXRlQmxvY2soc2VsZi5lbGVtc1tpXSk7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLyBMZXQncyBraWNrIHRoaXMgc2NyaXB0IG9mZlxuICAgIC8vIEJ1aWxkIGFycmF5IGZvciBjYWNoZWQgZWxlbWVudCB2YWx1ZXNcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBzZWxmLmVsZW1zW2ldLnN0eWxlLmNzc1RleHQgPSBibG9ja3NbaV0uc3R5bGU7XG4gICAgICB9XG5cbiAgICAgIGJsb2NrcyA9IFtdO1xuXG4gICAgICBzY3JlZW5ZID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgc2NyZWVuWCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBnZXRDdXJyZW50QnJlYWtwb2ludChzY3JlZW5YKTtcblxuICAgICAgc2V0UG9zaXRpb24oKTtcblxuICAgICAgY2FjaGVCbG9ja3MoKTtcblxuICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICAvLyBJZiBwYXVzZWQsIHVucGF1c2UgYW5kIHNldCBsaXN0ZW5lciBmb3Igd2luZG93IHJlc2l6aW5nIGV2ZW50c1xuICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbml0KTtcbiAgICAgICAgcGF1c2UgPSBmYWxzZTtcbiAgICAgICAgLy8gU3RhcnQgdGhlIGxvb3BcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2FjaGUgdGhlIHBhcmFsbGF4IGJsb2NrcydcbiAgICAvLyB2YWx1ZXM6IGJhc2UsIHRvcCwgaGVpZ2h0LCBzcGVlZFxuICAgIC8vIGVsOiBpcyBkb20gb2JqZWN0LCByZXR1cm46IGVsIGNhY2hlIHZhbHVlc1xuICAgIHZhciBjcmVhdGVCbG9jayA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgZGF0YVBlcmNlbnRhZ2UgPSBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXJlbGxheC1wZXJjZW50YWdlJyApO1xuICAgICAgdmFyIGRhdGFTcGVlZCA9IGVsLmdldEF0dHJpYnV0ZSggJ2RhdGEtcmVsbGF4LXNwZWVkJyApO1xuICAgICAgdmFyIGRhdGFYc1NwZWVkID0gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWxsYXgteHMtc3BlZWQnICk7XG4gICAgICB2YXIgZGF0YU1vYmlsZVNwZWVkID0gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWxsYXgtbW9iaWxlLXNwZWVkJyApO1xuICAgICAgdmFyIGRhdGFUYWJsZXRTcGVlZCA9IGVsLmdldEF0dHJpYnV0ZSggJ2RhdGEtcmVsbGF4LXRhYmxldC1zcGVlZCcgKTtcbiAgICAgIHZhciBkYXRhRGVza3RvcFNwZWVkID0gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWxsYXgtZGVza3RvcC1zcGVlZCcgKTtcbiAgICAgIHZhciBkYXRhVmVydGljYWxTcGVlZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWxsYXgtdmVydGljYWwtc3BlZWQnKTtcbiAgICAgIHZhciBkYXRhSG9yaXpvbnRhbFNwZWVkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGxheC1ob3Jpem9udGFsLXNwZWVkJyk7XG4gICAgICB2YXIgZGF0YVZlcmljYWxTY3JvbGxBeGlzID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGxheC12ZXJ0aWNhbC1zY3JvbGwtYXhpcycpO1xuICAgICAgdmFyIGRhdGFIb3Jpem9udGFsU2Nyb2xsQXhpcyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWxsYXgtaG9yaXpvbnRhbC1zY3JvbGwtYXhpcycpO1xuICAgICAgdmFyIGRhdGFaaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXJlbGxheC16aW5kZXgnICkgfHwgMDtcbiAgICAgIHZhciBkYXRhTWluID0gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWxsYXgtbWluJyApO1xuICAgICAgdmFyIGRhdGFNYXggPSBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXJlbGxheC1tYXgnICk7XG4gICAgICB2YXIgZGF0YU1pblggPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LW1pbi14Jyk7XG4gICAgICB2YXIgZGF0YU1heFggPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LW1heC14Jyk7XG4gICAgICB2YXIgZGF0YU1pblkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LW1pbi15Jyk7XG4gICAgICB2YXIgZGF0YU1heFkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LW1heC15Jyk7XG4gICAgICB2YXIgbWFwQnJlYWtwb2ludHM7XG4gICAgICB2YXIgYnJlYWtwb2ludHMgPSB0cnVlO1xuXG4gICAgICBpZiAoIWRhdGFYc1NwZWVkICYmICFkYXRhTW9iaWxlU3BlZWQgJiYgIWRhdGFUYWJsZXRTcGVlZCAmJiAhZGF0YURlc2t0b3BTcGVlZCkge1xuICAgICAgICBicmVha3BvaW50cyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFwQnJlYWtwb2ludHMgPSB7XG4gICAgICAgICAgJ3hzJzogZGF0YVhzU3BlZWQsXG4gICAgICAgICAgJ3NtJzogZGF0YU1vYmlsZVNwZWVkLFxuICAgICAgICAgICdtZCc6IGRhdGFUYWJsZXRTcGVlZCxcbiAgICAgICAgICAnbGcnOiBkYXRhRGVza3RvcFNwZWVkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWxpemluZyBhdCBzY3JvbGxZID0gMCAodG9wIG9mIGJyb3dzZXIpLCBzY3JvbGxYID0gMCAobGVmdCBvZiBicm93c2VyKVxuICAgICAgLy8gZW5zdXJlcyBlbGVtZW50cyBhcmUgcG9zaXRpb25lZCBiYXNlZCBvbiBIVE1MIGxheW91dC5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgdGhlIHBlcmNlbnRhZ2UgYXR0cmlidXRlLCB0aGUgcG9zWSBhbmQgcG9zWCBuZWVkcyB0byBiZVxuICAgICAgLy8gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uJ3MgdmFsdWUsIHNvIHRoYXQgdGhlIGVsZW1lbnRzIGFyZSBzdGlsbCBwb3NpdGlvbmVkIGJhc2VkIG9uIEhUTUwgbGF5b3V0XG4gICAgICB2YXIgd3JhcHBlclBvc1kgPSBzZWxmLm9wdGlvbnMud3JhcHBlciA/IHNlbGYub3B0aW9ucy53cmFwcGVyLnNjcm9sbFRvcCA6ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG4gICAgICAvLyBJZiB0aGUgb3B0aW9uIHJlbGF0aXZlVG9XcmFwcGVyIGlzIHRydWUsIHVzZSB0aGUgd3JhcHBlcnMgb2Zmc2V0IHRvIHRvcCwgc3VidHJhY3RlZCBmcm9tIHRoZSBjdXJyZW50IHBhZ2Ugc2Nyb2xsLlxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5yZWxhdGl2ZVRvV3JhcHBlcikge1xuICAgICAgICB2YXIgc2Nyb2xsUG9zWSA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG4gICAgICAgIHdyYXBwZXJQb3NZID0gc2Nyb2xsUG9zWSAtIHNlbGYub3B0aW9ucy53cmFwcGVyLm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICAgIHZhciBwb3NZID0gc2VsZi5vcHRpb25zLnZlcnRpY2FsID8gKCBkYXRhUGVyY2VudGFnZSB8fCBzZWxmLm9wdGlvbnMuY2VudGVyID8gd3JhcHBlclBvc1kgOiAwICkgOiAwO1xuICAgICAgdmFyIHBvc1ggPSBzZWxmLm9wdGlvbnMuaG9yaXpvbnRhbCA/ICggZGF0YVBlcmNlbnRhZ2UgfHwgc2VsZi5vcHRpb25zLmNlbnRlciA/IHNlbGYub3B0aW9ucy53cmFwcGVyID8gc2VsZi5vcHRpb25zLndyYXBwZXIuc2Nyb2xsTGVmdCA6ICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KSA6IDAgKSA6IDA7XG5cbiAgICAgIHZhciBibG9ja1RvcCA9IHBvc1kgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICB2YXIgYmxvY2tIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQgfHwgZWwub2Zmc2V0SGVpZ2h0IHx8IGVsLnNjcm9sbEhlaWdodDtcblxuICAgICAgdmFyIGJsb2NrTGVmdCA9IHBvc1ggKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgdmFyIGJsb2NrV2lkdGggPSBlbC5jbGllbnRXaWR0aCB8fCBlbC5vZmZzZXRXaWR0aCB8fCBlbC5zY3JvbGxXaWR0aDtcblxuICAgICAgLy8gYXBwYXJlbnRseSBwYXJhbGxheCBlcXVhdGlvbiBldmVyeW9uZSB1c2VzXG4gICAgICB2YXIgcGVyY2VudGFnZVkgPSBkYXRhUGVyY2VudGFnZSA/IGRhdGFQZXJjZW50YWdlIDogKHBvc1kgLSBibG9ja1RvcCArIHNjcmVlblkpIC8gKGJsb2NrSGVpZ2h0ICsgc2NyZWVuWSk7XG4gICAgICB2YXIgcGVyY2VudGFnZVggPSBkYXRhUGVyY2VudGFnZSA/IGRhdGFQZXJjZW50YWdlIDogKHBvc1ggLSBibG9ja0xlZnQgKyBzY3JlZW5YKSAvIChibG9ja1dpZHRoICsgc2NyZWVuWCk7XG4gICAgICBpZihzZWxmLm9wdGlvbnMuY2VudGVyKXsgcGVyY2VudGFnZVggPSAwLjU7IHBlcmNlbnRhZ2VZID0gMC41OyB9XG5cbiAgICAgIC8vIE9wdGlvbmFsIGluZGl2aWR1YWwgYmxvY2sgc3BlZWQgYXMgZGF0YSBhdHRyLCBvdGhlcndpc2UgZ2xvYmFsIHNwZWVkXG4gICAgICB2YXIgc3BlZWQgPSAoYnJlYWtwb2ludHMgJiYgbWFwQnJlYWtwb2ludHNbY3VycmVudEJyZWFrcG9pbnRdICE9PSBudWxsKSA/IE51bWJlcihtYXBCcmVha3BvaW50c1tjdXJyZW50QnJlYWtwb2ludF0pIDogKGRhdGFTcGVlZCA/IGRhdGFTcGVlZCA6IHNlbGYub3B0aW9ucy5zcGVlZCk7XG4gICAgICB2YXIgdmVydGljYWxTcGVlZCA9IGRhdGFWZXJ0aWNhbFNwZWVkID8gZGF0YVZlcnRpY2FsU3BlZWQgOiBzZWxmLm9wdGlvbnMudmVydGljYWxTcGVlZDtcbiAgICAgIHZhciBob3Jpem9udGFsU3BlZWQgPSBkYXRhSG9yaXpvbnRhbFNwZWVkID8gZGF0YUhvcml6b250YWxTcGVlZCA6IHNlbGYub3B0aW9ucy5ob3Jpem9udGFsU3BlZWQ7XG5cbiAgICAgIC8vIE9wdGlvbmFsIGluZGl2aWR1YWwgYmxvY2sgbW92ZW1lbnQgYXhpcyBkaXJlY3Rpb24gYXMgZGF0YSBhdHRyLCBvdGhlcndpc2UgZ29iYWwgbW92ZW1lbnQgZGlyZWN0aW9uXG4gICAgICB2YXIgdmVydGljYWxTY3JvbGxBeGlzID0gZGF0YVZlcmljYWxTY3JvbGxBeGlzID8gZGF0YVZlcmljYWxTY3JvbGxBeGlzIDogc2VsZi5vcHRpb25zLnZlcnRpY2FsU2Nyb2xsQXhpcztcbiAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsQXhpcyA9IGRhdGFIb3Jpem9udGFsU2Nyb2xsQXhpcyA/IGRhdGFIb3Jpem9udGFsU2Nyb2xsQXhpcyA6IHNlbGYub3B0aW9ucy5ob3Jpem9udGFsU2Nyb2xsQXhpcztcblxuICAgICAgdmFyIGJhc2VzID0gdXBkYXRlUG9zaXRpb24ocGVyY2VudGFnZVgsIHBlcmNlbnRhZ2VZLCBzcGVlZCwgdmVydGljYWxTcGVlZCwgaG9yaXpvbnRhbFNwZWVkKTtcblxuICAgICAgLy8gfn5TdG9yZSBub24tdHJhbnNsYXRlM2QgdHJhbnNmb3Jtc35+XG4gICAgICAvLyBTdG9yZSBpbmxpbmUgc3R5bGVzIGFuZCBleHRyYWN0IHRyYW5zZm9ybXNcbiAgICAgIHZhciBzdHlsZSA9IGVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gJyc7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYW4gaW5saW5lIHN0eWxlZCB0cmFuc2Zvcm1cbiAgICAgIHZhciBzZWFyY2hSZXN1bHQgPSAvdHJhbnNmb3JtXFxzKjovaS5leGVjKHN0eWxlKTtcbiAgICAgIGlmIChzZWFyY2hSZXN1bHQpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgdHJhbnNmb3JtXG4gICAgICAgIHZhciBpbmRleCA9IHNlYXJjaFJlc3VsdC5pbmRleDtcblxuICAgICAgICAvLyBUcmltIHRoZSBzdHlsZSB0byB0aGUgdHJhbnNmb3JtIHBvaW50IGFuZCBnZXQgdGhlIGZvbGxvd2luZyBzZW1pLWNvbG9uIGluZGV4XG4gICAgICAgIHZhciB0cmltbWVkU3R5bGUgPSBzdHlsZS5zbGljZShpbmRleCk7XG4gICAgICAgIHZhciBkZWxpbWl0ZXIgPSB0cmltbWVkU3R5bGUuaW5kZXhPZignOycpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBcInRyYW5zZm9ybVwiIHN0cmluZyBhbmQgc2F2ZSB0aGUgYXR0cmlidXRlXG4gICAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBcIiBcIiArIHRyaW1tZWRTdHlsZS5zbGljZSgxMSwgZGVsaW1pdGVyKS5yZXBsYWNlKC9cXHMvZywnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhbnNmb3JtID0gXCIgXCIgKyB0cmltbWVkU3R5bGUuc2xpY2UoMTEpLnJlcGxhY2UoL1xccy9nLCcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlWDogYmFzZXMueCxcbiAgICAgICAgYmFzZVk6IGJhc2VzLnksXG4gICAgICAgIHRvcDogYmxvY2tUb3AsXG4gICAgICAgIGxlZnQ6IGJsb2NrTGVmdCxcbiAgICAgICAgaGVpZ2h0OiBibG9ja0hlaWdodCxcbiAgICAgICAgd2lkdGg6IGJsb2NrV2lkdGgsXG4gICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgdmVydGljYWxTcGVlZDogdmVydGljYWxTcGVlZCxcbiAgICAgICAgaG9yaXpvbnRhbFNwZWVkOiBob3Jpem9udGFsU3BlZWQsXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsQXhpczogdmVydGljYWxTY3JvbGxBeGlzLFxuICAgICAgICBob3Jpem9udGFsU2Nyb2xsQXhpczogaG9yaXpvbnRhbFNjcm9sbEF4aXMsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHppbmRleDogZGF0YVppbmRleCxcbiAgICAgICAgbWluOiBkYXRhTWluLFxuICAgICAgICBtYXg6IGRhdGFNYXgsXG4gICAgICAgIG1pblg6IGRhdGFNaW5YLFxuICAgICAgICBtYXhYOiBkYXRhTWF4WCxcbiAgICAgICAgbWluWTogZGF0YU1pblksXG4gICAgICAgIG1heFk6IGRhdGFNYXhZXG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBzZXQgc2Nyb2xsIHBvc2l0aW9uIChwb3NZLCBwb3NYKVxuICAgIC8vIHNpZGUgZWZmZWN0IG1ldGhvZCBpcyBub3QgaWRlYWwsIGJ1dCBva2F5IGZvciBub3dcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgdGhlIHNjcm9sbCBjaGFuZ2VkLCBmYWxzZSBpZiBub3RoaW5nIGhhcHBlbmVkXG4gICAgdmFyIHNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2xkWSA9IHBvc1k7XG4gICAgICB2YXIgb2xkWCA9IHBvc1g7XG5cbiAgICAgIHBvc1kgPSBzZWxmLm9wdGlvbnMud3JhcHBlciA/IHNlbGYub3B0aW9ucy53cmFwcGVyLnNjcm9sbFRvcCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBwb3NYID0gc2VsZi5vcHRpb25zLndyYXBwZXIgPyBzZWxmLm9wdGlvbnMud3JhcHBlci5zY3JvbGxMZWZ0IDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAvLyBJZiBvcHRpb24gcmVsYXRpdmVUb1dyYXBwZXIgaXMgdHJ1ZSwgdXNlIHJlbGF0aXZlIHdyYXBwZXIgdmFsdWUgaW5zdGVhZC5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMucmVsYXRpdmVUb1dyYXBwZXIpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBvc1kgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBwb3NZID0gc2Nyb2xsUG9zWSAtIHNlbGYub3B0aW9ucy53cmFwcGVyLm9mZnNldFRvcDtcbiAgICAgIH1cblxuXG4gICAgICBpZiAob2xkWSAhPSBwb3NZICYmIHNlbGYub3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICAvLyBzY3JvbGwgY2hhbmdlZCwgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbGRYICE9IHBvc1ggJiYgc2VsZi5vcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgLy8gc2Nyb2xsIGNoYW5nZWQsIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgZGlkIG5vdCBjaGFuZ2VcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gQWhoIGEgcHVyZSBmdW5jdGlvbiwgZ2V0cyBuZXcgdHJhbnNmb3JtIHZhbHVlXG4gICAgLy8gYmFzZWQgb24gc2Nyb2xsUG9zaXRpb24gYW5kIHNwZWVkXG4gICAgLy8gQWxsb3cgZm9yIGRlY2ltYWwgcGl4ZWwgdmFsdWVzXG4gICAgdmFyIHVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGVyY2VudGFnZVgsIHBlcmNlbnRhZ2VZLCBzcGVlZCwgdmVydGljYWxTcGVlZCwgaG9yaXpvbnRhbFNwZWVkKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICB2YXIgdmFsdWVYID0gKChob3Jpem9udGFsU3BlZWQgPyBob3Jpem9udGFsU3BlZWQgOiBzcGVlZCkgKiAoMTAwICogKDEgLSBwZXJjZW50YWdlWCkpKTtcbiAgICAgIHZhciB2YWx1ZVkgPSAoKHZlcnRpY2FsU3BlZWQgPyB2ZXJ0aWNhbFNwZWVkIDogc3BlZWQpICogKDEwMCAqICgxIC0gcGVyY2VudGFnZVkpKSk7XG5cbiAgICAgIHJlc3VsdC54ID0gc2VsZi5vcHRpb25zLnJvdW5kID8gTWF0aC5yb3VuZCh2YWx1ZVgpIDogTWF0aC5yb3VuZCh2YWx1ZVggKiAxMDApIC8gMTAwO1xuICAgICAgcmVzdWx0LnkgPSBzZWxmLm9wdGlvbnMucm91bmQgPyBNYXRoLnJvdW5kKHZhbHVlWSkgOiBNYXRoLnJvdW5kKHZhbHVlWSAqIDEwMCkgLyAxMDA7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGxvb3AgYWdhaW5cbiAgICB2YXIgZGVmZXJyZWRVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWZlcnJlZFVwZGF0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBkZWZlcnJlZFVwZGF0ZSk7XG4gICAgICAoc2VsZi5vcHRpb25zLndyYXBwZXIgPyBzZWxmLm9wdGlvbnMud3JhcHBlciA6IHdpbmRvdykucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVmZXJyZWRVcGRhdGUpO1xuICAgICAgKHNlbGYub3B0aW9ucy53cmFwcGVyID8gc2VsZi5vcHRpb25zLndyYXBwZXIgOiBkb2N1bWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZGVmZXJyZWRVcGRhdGUpO1xuXG4gICAgICAvLyBsb29wIGFnYWluXG4gICAgICBsb29wSWQgPSBsb29wKHVwZGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIExvb3BcbiAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2V0UG9zaXRpb24oKSAmJiBwYXVzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICAgIC8vIGxvb3AgYWdhaW5cbiAgICAgICAgbG9vcElkID0gbG9vcCh1cGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9vcElkID0gbnVsbDtcblxuICAgICAgICAvLyBEb24ndCBhbmltYXRlIHVudGlsIHdlIGdldCBhIHBvc2l0aW9uIHVwZGF0aW5nIGV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWZlcnJlZFVwZGF0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGRlZmVycmVkVXBkYXRlKTtcbiAgICAgICAgKHNlbGYub3B0aW9ucy53cmFwcGVyID8gc2VsZi5vcHRpb25zLndyYXBwZXIgOiB3aW5kb3cpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlZmVycmVkVXBkYXRlLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbiAgICAgICAgKHNlbGYub3B0aW9ucy53cmFwcGVyID8gc2VsZi5vcHRpb25zLndyYXBwZXIgOiBkb2N1bWVudCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZGVmZXJyZWRVcGRhdGUsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUcmFuc2Zvcm0zZCBvbiBwYXJhbGxheCBlbGVtZW50XG4gICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbnM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuZWxlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAvLyBEZXRlcm1pbmUgcmVsZXZhbnQgbW92ZW1lbnQgZGlyZWN0aW9uc1xuICAgICAgICB2YXIgdmVydGljYWxTY3JvbGxBeGlzID0gYmxvY2tzW2ldLnZlcnRpY2FsU2Nyb2xsQXhpcy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbEF4aXMgPSBibG9ja3NbaV0uaG9yaXpvbnRhbFNjcm9sbEF4aXMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsU2Nyb2xsWCA9IHZlcnRpY2FsU2Nyb2xsQXhpcy5pbmRleE9mKFwieFwiKSAhPSAtMSA/IHBvc1kgOiAwO1xuICAgICAgICB2YXIgdmVydGljYWxTY3JvbGxZID0gdmVydGljYWxTY3JvbGxBeGlzLmluZGV4T2YoXCJ5XCIpICE9IC0xID8gcG9zWSA6IDA7XG4gICAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsWCA9IGhvcml6b250YWxTY3JvbGxBeGlzLmluZGV4T2YoXCJ4XCIpICE9IC0xID8gcG9zWCA6IDA7XG4gICAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsWSA9IGhvcml6b250YWxTY3JvbGxBeGlzLmluZGV4T2YoXCJ5XCIpICE9IC0xID8gcG9zWCA6IDA7XG5cbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VZID0gKCh2ZXJ0aWNhbFNjcm9sbFkgKyBob3Jpem9udGFsU2Nyb2xsWSAtIGJsb2Nrc1tpXS50b3AgKyBzY3JlZW5ZKSAvIChibG9ja3NbaV0uaGVpZ2h0ICsgc2NyZWVuWSkpO1xuICAgICAgICB2YXIgcGVyY2VudGFnZVggPSAoKHZlcnRpY2FsU2Nyb2xsWCArIGhvcml6b250YWxTY3JvbGxYIC0gYmxvY2tzW2ldLmxlZnQgKyBzY3JlZW5YKSAvIChibG9ja3NbaV0ud2lkdGggKyBzY3JlZW5YKSk7XG5cbiAgICAgICAgLy8gU3VidHJhY3RpbmcgaW5pdGlhbGl6ZSB2YWx1ZSwgc28gZWxlbWVudCBzdGF5cyBpbiBzYW1lIHNwb3QgYXMgSFRNTFxuICAgICAgICBwb3NpdGlvbnMgPSB1cGRhdGVQb3NpdGlvbihwZXJjZW50YWdlWCwgcGVyY2VudGFnZVksIGJsb2Nrc1tpXS5zcGVlZCwgYmxvY2tzW2ldLnZlcnRpY2FsU3BlZWQsIGJsb2Nrc1tpXS5ob3Jpem9udGFsU3BlZWQpO1xuICAgICAgICB2YXIgcG9zaXRpb25ZID0gcG9zaXRpb25zLnkgLSBibG9ja3NbaV0uYmFzZVk7XG4gICAgICAgIHZhciBwb3NpdGlvblggPSBwb3NpdGlvbnMueCAtIGJsb2Nrc1tpXS5iYXNlWDtcblxuICAgICAgICAvLyBUaGUgbmV4dCB0d28gXCJpZlwiIGJsb2NrcyBnbyBsaWtlIHRoaXM6XG4gICAgICAgIC8vIENoZWNrIGlmIGEgbGltaXQgaXMgZGVmaW5lZCAoZmlyc3QgXCJtaW5cIiwgdGhlbiBcIm1heFwiKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBjaGFuZ2UgdGhlIFkgb3IgdGhlIFhcbiAgICAgICAgLy8gKEN1cnJlbnRseSB3b3JraW5nIG9ubHkgaWYganVzdCBvbmUgb2YgdGhlIGF4ZXMgaXMgZW5hYmxlZClcbiAgICAgICAgLy8gVGhlbiwgY2hlY2sgaWYgdGhlIG5ldyBwb3NpdGlvbiBpcyBpbnNpZGUgdGhlIGFsbG93ZWQgbGltaXRcbiAgICAgICAgLy8gSWYgc28sIHVzZSBuZXcgcG9zaXRpb24uIElmIG5vdCwgc2V0IHBvc2l0aW9uIHRvIGxpbWl0LlxuXG4gICAgICAgIC8vIENoZWNrIGlmIGEgbWluIGxpbWl0IGlzIGRlZmluZWRcbiAgICAgICAgaWYgKGJsb2Nrc1tpXS5taW4gIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZlcnRpY2FsICYmICFzZWxmLm9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZIDw9IGJsb2Nrc1tpXS5taW4gPyBibG9ja3NbaV0ubWluIDogcG9zaXRpb25ZO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmhvcml6b250YWwgJiYgIXNlbGYub3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgcG9zaXRpb25YID0gcG9zaXRpb25YIDw9IGJsb2Nrc1tpXS5taW4gPyBibG9ja3NbaV0ubWluIDogcG9zaXRpb25YO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGRpcmVjdGlvbmFsIG1pbiBsaW1pdHMgYXJlIGRlZmluZWRcbiAgICAgICAgaWYgKGJsb2Nrc1tpXS5taW5ZICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uWSA9IHBvc2l0aW9uWSA8PSBibG9ja3NbaV0ubWluWSA/IGJsb2Nrc1tpXS5taW5ZIDogcG9zaXRpb25ZO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibG9ja3NbaV0ubWluWCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvblggPSBwb3NpdGlvblggPD0gYmxvY2tzW2ldLm1pblggPyBibG9ja3NbaV0ubWluWCA6IHBvc2l0aW9uWDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGEgbWF4IGxpbWl0IGlzIGRlZmluZWRcbiAgICAgICAgaWYgKGJsb2Nrc1tpXS5tYXggIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZlcnRpY2FsICYmICFzZWxmLm9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZID49IGJsb2Nrc1tpXS5tYXggPyBibG9ja3NbaV0ubWF4IDogcG9zaXRpb25ZO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmhvcml6b250YWwgJiYgIXNlbGYub3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgcG9zaXRpb25YID0gcG9zaXRpb25YID49IGJsb2Nrc1tpXS5tYXggPyBibG9ja3NbaV0ubWF4IDogcG9zaXRpb25YO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGRpcmVjdGlvbmFsIG1heCBsaW1pdHMgYXJlIGRlZmluZWRcbiAgICAgICAgaWYgKGJsb2Nrc1tpXS5tYXhZICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uWSA9IHBvc2l0aW9uWSA+PSBibG9ja3NbaV0ubWF4WSA/IGJsb2Nrc1tpXS5tYXhZIDogcG9zaXRpb25ZO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibG9ja3NbaV0ubWF4WCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvblggPSBwb3NpdGlvblggPj0gYmxvY2tzW2ldLm1heFggPyBibG9ja3NbaV0ubWF4WCA6IHBvc2l0aW9uWDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB6aW5kZXggPSBibG9ja3NbaV0uemluZGV4O1xuXG4gICAgICAgIC8vIE1vdmUgdGhhdCBlbGVtZW50XG4gICAgICAgIC8vIChTZXQgdGhlIG5ldyB0cmFuc2xhdGlvbiBhbmQgYXBwZW5kIGluaXRpYWwgaW5saW5lIHRyYW5zZm9ybXMuKVxuICAgICAgICB2YXIgdHJhbnNsYXRlID0gJ3RyYW5zbGF0ZTNkKCcgKyAoc2VsZi5vcHRpb25zLmhvcml6b250YWwgPyBwb3NpdGlvblggOiAnMCcpICsgJ3B4LCcgKyAoc2VsZi5vcHRpb25zLnZlcnRpY2FsID8gcG9zaXRpb25ZIDogJzAnKSArICdweCwnICsgemluZGV4ICsgJ3B4KSAnICsgYmxvY2tzW2ldLnRyYW5zZm9ybTtcbiAgICAgICAgc2VsZi5lbGVtc1tpXS5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zbGF0ZTtcbiAgICAgIH1cbiAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFjayhwb3NpdGlvbnMpO1xuICAgIH07XG5cbiAgICBzZWxmLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5lbGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlbGYuZWxlbXNbaV0uc3R5bGUuY3NzVGV4dCA9IGJsb2Nrc1tpXS5zdHlsZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBpZiBub3QgcGF1c2UsIGFuZCBwYXVzZVxuICAgICAgaWYgKCFwYXVzZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5pdCk7XG4gICAgICAgIHBhdXNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGhlIGFuaW1hdGlvbiBsb29wIHRvIHByZXZlbnQgcG9zc2libGUgbWVtb3J5IGxlYWtcbiAgICAgIGNsZWFyTG9vcChsb29wSWQpO1xuICAgICAgbG9vcElkID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSW5pdFxuICAgIGluaXQoKTtcblxuICAgIC8vIEFsbG93IHRvIHJlY2FsY3VsYXRlIHRoZSBpbml0aWFsIHZhbHVlcyB3aGVuZXZlciB3ZSB3YW50XG4gICAgc2VsZi5yZWZyZXNoID0gaW5pdDtcblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuICByZXR1cm4gUmVsbGF4O1xufSkpO1xuIiwiLyohIEBsaWNlbnNlIFJlbWF0cml4IHYwLjMuMFxuXG5cdENvcHlyaWdodCAyMDE4IEp1bGlhbiBMbG95ZC5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5cdGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblx0VEhFIFNPRlRXQVJFLlxuKi9cbi8qKlxuICogQG1vZHVsZSBSZW1hdHJpeFxuICovXG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gbWF0cmljZXMgaW4gdGhlIGJyb3dzZXIgY29tZSBpbiB0d28gZmxhdm9yczpcbiAqXG4gKiAgLSBgbWF0cml4YCB1c2luZyA2IHZhbHVlcyAoc2hvcnQpXG4gKiAgLSBgbWF0cml4M2RgIHVzaW5nIDE2IHZhbHVlcyAobG9uZylcbiAqXG4gKiBUaGlzIHV0aWxpdHkgZm9sbG93cyB0aGlzIFtjb252ZXJzaW9uIGd1aWRlXShodHRwczovL2dvby5nbC9FSmxVUTEpXG4gKiB0byBleHBhbmQgc2hvcnQgZm9ybSBtYXRyaWNlcyB0byB0aGVpciBlcXVpdmFsZW50IGxvbmcgZm9ybS5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gc291cmNlIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KHNvdXJjZSkge1xuXHRpZiAoc291cmNlLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFycmF5LicpXG5cdH1cblx0aWYgKHNvdXJjZS5sZW5ndGggPT09IDE2KSB7XG5cdFx0cmV0dXJuIHNvdXJjZVxuXHR9XG5cdGlmIChzb3VyY2UubGVuZ3RoID09PSA2KSB7XG5cdFx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdFx0bWF0cml4WzBdID0gc291cmNlWzBdO1xuXHRcdG1hdHJpeFsxXSA9IHNvdXJjZVsxXTtcblx0XHRtYXRyaXhbNF0gPSBzb3VyY2VbMl07XG5cdFx0bWF0cml4WzVdID0gc291cmNlWzNdO1xuXHRcdG1hdHJpeFsxMl0gPSBzb3VyY2VbNF07XG5cdFx0bWF0cml4WzEzXSA9IHNvdXJjZVs1XTtcblx0XHRyZXR1cm4gbWF0cml4XG5cdH1cblx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0V4cGVjdGVkIGFycmF5IHdpdGggZWl0aGVyIDYgb3IgMTYgdmFsdWVzLicpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCByZXByZXNlbnRpbmcgbm8gdHJhbnNmb3JtYXRpb24uIFRoZSBwcm9kdWN0IG9mIGFueSBtYXRyaXhcbiAqIG11bHRpcGxpZWQgYnkgdGhlIGlkZW50aXR5IG1hdHJpeCB3aWxsIGJlIHRoZSBvcmlnaW5hbCBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqIDEgPT09IDVgLCB3aGVyZSBgMWAgaXMgdGhlIGlkZW50aXR5LlxuICpcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSgpIHtcblx0dmFyIG1hdHJpeCA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0XHRpICUgNSA9PSAwID8gbWF0cml4LnB1c2goMSkgOiBtYXRyaXgucHVzaCgwKTtcblx0fVxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCBkZXNjcmliaW5nIHRoZSBpbnZlcnNlIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBzb3VyY2VcbiAqIG1hdHJpeC4gVGhlIHByb2R1Y3Qgb2YgYW55IG1hdHJpeCBtdWx0aXBsaWVkIGJ5IGl0cyBpbnZlcnNlIHdpbGwgYmUgdGhlXG4gKiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqICgxLzUpID09PSAxYCwgd2hlcmUgYDEvNWAgaXMgdGhlIGludmVyc2UuXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGludmVyc2Uoc291cmNlKSB7XG5cdHZhciBtID0gZm9ybWF0KHNvdXJjZSk7XG5cblx0dmFyIHMwID0gbVswXSAqIG1bNV0gLSBtWzRdICogbVsxXTtcblx0dmFyIHMxID0gbVswXSAqIG1bNl0gLSBtWzRdICogbVsyXTtcblx0dmFyIHMyID0gbVswXSAqIG1bN10gLSBtWzRdICogbVszXTtcblx0dmFyIHMzID0gbVsxXSAqIG1bNl0gLSBtWzVdICogbVsyXTtcblx0dmFyIHM0ID0gbVsxXSAqIG1bN10gLSBtWzVdICogbVszXTtcblx0dmFyIHM1ID0gbVsyXSAqIG1bN10gLSBtWzZdICogbVszXTtcblxuXHR2YXIgYzUgPSBtWzEwXSAqIG1bMTVdIC0gbVsxNF0gKiBtWzExXTtcblx0dmFyIGM0ID0gbVs5XSAqIG1bMTVdIC0gbVsxM10gKiBtWzExXTtcblx0dmFyIGMzID0gbVs5XSAqIG1bMTRdIC0gbVsxM10gKiBtWzEwXTtcblx0dmFyIGMyID0gbVs4XSAqIG1bMTVdIC0gbVsxMl0gKiBtWzExXTtcblx0dmFyIGMxID0gbVs4XSAqIG1bMTRdIC0gbVsxMl0gKiBtWzEwXTtcblx0dmFyIGMwID0gbVs4XSAqIG1bMTNdIC0gbVsxMl0gKiBtWzldO1xuXG5cdHZhciBkZXRlcm1pbmFudCA9IDEgLyAoczAgKiBjNSAtIHMxICogYzQgKyBzMiAqIGMzICsgczMgKiBjMiAtIHM0ICogYzEgKyBzNSAqIGMwKTtcblxuXHRpZiAoaXNOYU4oZGV0ZXJtaW5hbnQpIHx8IGRldGVybWluYW50ID09PSBJbmZpbml0eSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52ZXJzZSBkZXRlcm1pbmFudCBhdHRlbXB0ZWQgdG8gZGl2aWRlIGJ5IHplcm8uJylcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0KG1bNV0gKiBjNSAtIG1bNl0gKiBjNCArIG1bN10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMV0gKiBjNSArIG1bMl0gKiBjNCAtIG1bM10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQobVsxM10gKiBzNSAtIG1bMTRdICogczQgKyBtWzE1XSAqIHMzKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVs5XSAqIHM1ICsgbVsxMF0gKiBzNCAtIG1bMTFdICogczMpICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjNSArIG1bNl0gKiBjMiAtIG1bN10gKiBjMSkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGM1IC0gbVsyXSAqIGMyICsgbVszXSAqIGMxKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzNSArIG1bMTRdICogczIgLSBtWzE1XSAqIHMxKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczUgLSBtWzEwXSAqIHMyICsgbVsxMV0gKiBzMSkgKiBkZXRlcm1pbmFudCxcblxuXHRcdChtWzRdICogYzQgLSBtWzVdICogYzIgKyBtWzddICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzBdICogYzQgKyBtWzFdICogYzIgLSBtWzNdICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMTJdICogczQgLSBtWzEzXSAqIHMyICsgbVsxNV0gKiBzMCkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bOF0gKiBzNCArIG1bOV0gKiBzMiAtIG1bMTFdICogczApICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjMyArIG1bNV0gKiBjMSAtIG1bNl0gKiBjMCkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGMzIC0gbVsxXSAqIGMxICsgbVsyXSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzMyArIG1bMTNdICogczEgLSBtWzE0XSAqIHMwKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczMgLSBtWzldICogczEgKyBtWzEwXSAqIHMwKSAqIGRldGVybWluYW50XG5cdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBjb21iaW5lZCB0cmFuc2Zvcm1hdGlvbnNcbiAqIG9mIGJvdGggYXJndW1lbnRzLlxuICpcbiAqID4gKipOb3RlOioqIE9yZGVyIGlzIHZlcnkgaW1wb3J0YW50LiBGb3IgZXhhbXBsZSwgcm90YXRpbmcgNDXCsFxuICogYWxvbmcgdGhlIFotYXhpcywgZm9sbG93ZWQgYnkgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcy4uLiBpcyBub3QgdGhlIHNhbWUgYXMgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcywgZm9sbG93ZWQgYnkgcm90YXRpbmcgNDXCsCBhbG9uZyBvbiB0aGUgWi1heGlzLlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBtIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcGFyYW0gIHthcnJheX0geCAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG0sIHgpIHtcblx0dmFyIGZtID0gZm9ybWF0KG0pO1xuXHR2YXIgZnggPSBmb3JtYXQoeCk7XG5cdHZhciBwcm9kdWN0ID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHR2YXIgcm93ID0gW2ZtW2ldLCBmbVtpICsgNF0sIGZtW2kgKyA4XSwgZm1baSArIDEyXV07XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcblx0XHRcdHZhciBrID0gaiAqIDQ7XG5cdFx0XHR2YXIgY29sID0gW2Z4W2tdLCBmeFtrICsgMV0sIGZ4W2sgKyAyXSwgZnhbayArIDNdXTtcblx0XHRcdHZhciByZXN1bHQgPVxuXHRcdFx0XHRyb3dbMF0gKiBjb2xbMF0gKyByb3dbMV0gKiBjb2xbMV0gKyByb3dbMl0gKiBjb2xbMl0gKyByb3dbM10gKiBjb2xbM107XG5cblx0XHRcdHByb2R1Y3RbaSArIGtdID0gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcm9kdWN0XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gcmV0dXJuIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBDU1MgdHJhbnNmb3JtXG4gKiBtYXRyaXggcGFzc2VkIGluLCBidXQgd2lsbCByZXR1cm4gdGhlIGlkZW50aXR5IG1hdHJpeCBhcyBhXG4gKiBmYWxsYmFjay5cbiAqXG4gKiA+ICoqVGlwOioqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY29udmVydCBhIENTUyBtYXRyaXggKHJldHJpZXZlZCBhcyBhXG4gKiBgc3RyaW5nYCBmcm9tIGNvbXB1dGVkIHN0eWxlcykgdG8gaXRzIGVxdWl2YWxlbnQgYXJyYXkgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc291cmNlIC0gYG1hdHJpeGAgb3IgYG1hdHJpeDNkYCBDU1MgVHJhbnNmb3JtIHZhbHVlLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSkge1xuXHRpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL21hdHJpeCgzZCk/XFwoKFteKV0rKVxcKS8pO1xuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dmFyIHJhdyA9IG1hdGNoWzJdLnNwbGl0KCcsICcpLm1hcChwYXJzZUZsb2F0KTtcblx0XHRcdHJldHVybiBmb3JtYXQocmF3KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWRlbnRpdHkoKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWi1heGlzIHJvdGF0aW9uLlxuICpcbiAqID4gKipUaXA6KiogVGhpcyBpcyBqdXN0IGFuIGFsaWFzIGZvciBgUmVtYXRyaXgucm90YXRlWmAgZm9yIHBhcml0eSB3aXRoIENTU1xuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuXHRyZXR1cm4gcm90YXRlWihhbmdsZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGVYKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzVdID0gbWF0cml4WzEwXSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzZdID0gbWF0cml4WzldID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbOV0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkoYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBtYXRyaXhbMTBdID0gTWF0aC5jb3ModGhldGEpO1xuXHRtYXRyaXhbMl0gPSBtYXRyaXhbOF0gPSBNYXRoLnNpbih0aGV0YSk7XG5cdG1hdHJpeFsyXSAqPSAtMTtcblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgcm90YXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcm90YXRlWihhbmdsZSkge1xuXHR2YXIgdGhldGEgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFswXSA9IG1hdHJpeFs1XSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzFdID0gbWF0cml4WzRdID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbNF0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgMkQgc2NhbGluZy4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBpcyB1c2VkIGZvciBib3RoIFggYW5kIFktYXhpcyBzY2FsaW5nLCB1bmxlc3MgYW4gb3B0aW9uYWxcbiAqIHNlY29uZCBhcmd1bWVudCBpcyBwcm92aWRlZCB0byBleHBsaWNpdGx5IGRlZmluZSBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAgICAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEBwYXJhbSAge251bWJlcn0gW3NjYWxhclldIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKHNjYWxhciwgc2NhbGFyWSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBzY2FsYXI7XG5cdG1hdHJpeFs1XSA9IHR5cGVvZiBzY2FsYXJZID09PSAnbnVtYmVyJyA/IHNjYWxhclkgOiBzY2FsYXI7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2NhbGVYKHNjYWxhcikge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzBdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZVkoc2NhbGFyKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbNV0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyBzY2FsaW5nLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gc2NhbGFyIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlWihzY2FsYXIpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxMF0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHNoZWFyLiBUaGUgZmlyc3QgYXJndW1lbnRcbiAqIGRlZmluZXMgWC1heGlzIHNoZWFyaW5nLCBhbmQgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50XG4gKiBkZWZpbmVzIFktYXhpcyBzaGVhcmluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlWCAgIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2FuZ2xlWV0gLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXcoYW5nbGVYLCBhbmdsZVkpIHtcblx0dmFyIHRoZXRhWCA9IE1hdGguUEkgLyAxODAgKiBhbmdsZVg7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFs0XSA9IE1hdGgudGFuKHRoZXRhWCk7XG5cblx0aWYgKGFuZ2xlWSkge1xuXHRcdHZhciB0aGV0YVkgPSBNYXRoLlBJIC8gMTgwICogYW5nbGVZO1xuXHRcdG1hdHJpeFsxXSA9IE1hdGgudGFuKHRoZXRhWSk7XG5cdH1cblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBYLWF4aXMgc2hlYXIuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1goYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbNF0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHNoZWFyLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1koYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMV0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBDU1MgVHJhbnNmb3JtIHByb3BlcnR5IHZhbHVlIGVxdWl2YWxlbnQgdG8gdGhlIHNvdXJjZSBtYXRyaXguXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N0cmluZyhzb3VyY2UpIHtcblx0cmV0dXJuIChcIm1hdHJpeDNkKFwiICsgKGZvcm1hdChzb3VyY2UpLmpvaW4oJywgJykpICsgXCIpXCIpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyAyRCB0cmFuc2xhdGlvbi4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBkZWZpbmVzIFgtYXhpcyB0cmFuc2xhdGlvbiwgYW5kIGFuIG9wdGlvbmFsIHNlY29uZFxuICogYXJndW1lbnQgZGVmaW5lcyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZVggICAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2Rpc3RhbmNlWV0gLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKGRpc3RhbmNlWCwgZGlzdGFuY2VZKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTJdID0gZGlzdGFuY2VYO1xuXG5cdGlmIChkaXN0YW5jZVkpIHtcblx0XHRtYXRyaXhbMTNdID0gZGlzdGFuY2VZO1xuXHR9XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2UgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlWChkaXN0YW5jZSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEyXSA9IGRpc3RhbmNlO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZSAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGVZKGRpc3RhbmNlKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTNdID0gZGlzdGFuY2U7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyB0cmFuc2xhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZVooZGlzdGFuY2UpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxNF0gPSBkaXN0YW5jZTtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG5leHBvcnQgeyBmb3JtYXQsIGlkZW50aXR5LCBpbnZlcnNlLCBtdWx0aXBseSwgcGFyc2UsIHJvdGF0ZSwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHNrZXcsIHNrZXdYLCBza2V3WSwgdG9TdHJpbmcsIHRyYW5zbGF0ZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWiB9O1xuIiwiLyohIEBsaWNlbnNlIFNjcm9sbFJldmVhbCB2NC4wLjZcblxuXHRDb3B5cmlnaHQgMjAyMCBGaXNzc2lvbiBMTEMuXG5cblx0TGljZW5zZWQgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIDMuMCBmb3Jcblx0Y29tcGF0aWJsZSBvcGVuIHNvdXJjZSBwcm9qZWN0cyBhbmQgbm9uLWNvbW1lcmNpYWwgdXNlLlxuXG5cdEZvciBjb21tZXJjaWFsIHNpdGVzLCB0aGVtZXMsIHByb2plY3RzLCBhbmQgYXBwbGljYXRpb25zLFxuXHRrZWVwIHlvdXIgc291cmNlIGNvZGUgcHJpdmF0ZS9wcm9wcmlldGFyeSBieSBwdXJjaGFzaW5nXG5cdGEgY29tbWVyY2lhbCBsaWNlbnNlIGZyb20gaHR0cHM6Ly9zY3JvbGxyZXZlYWxqcy5vcmcvXG4qL1xuaW1wb3J0ICQgZnJvbSAndGVhbGlnaHQnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWCwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHBhcnNlLCBtdWx0aXBseSB9IGZyb20gJ3JlbWF0cml4JztcbmltcG9ydCByYWYgZnJvbSAnbWluaXJhZic7XG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZGVsYXk6IDAsXG5cdGRpc3RhbmNlOiAnMCcsXG5cdGR1cmF0aW9uOiA2MDAsXG5cdGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIDAsIDAsIDEpJyxcblx0aW50ZXJ2YWw6IDAsXG5cdG9wYWNpdHk6IDAsXG5cdG9yaWdpbjogJ2JvdHRvbScsXG5cdHJvdGF0ZToge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH0sXG5cdHNjYWxlOiAxLFxuXHRjbGVhbnVwOiBmYWxzZSxcblx0Y29udGFpbmVyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdGRlc2t0b3A6IHRydWUsXG5cdG1vYmlsZTogdHJ1ZSxcblx0cmVzZXQ6IGZhbHNlLFxuXHR1c2VEZWxheTogJ2Fsd2F5cycsXG5cdHZpZXdGYWN0b3I6IDAuMCxcblx0dmlld09mZnNldDoge1xuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMFxuXHR9LFxuXHRhZnRlclJlc2V0OiBmdW5jdGlvbiBhZnRlclJlc2V0KCkge30sXG5cdGFmdGVyUmV2ZWFsOiBmdW5jdGlvbiBhZnRlclJldmVhbCgpIHt9LFxuXHRiZWZvcmVSZXNldDogZnVuY3Rpb24gYmVmb3JlUmVzZXQoKSB7fSxcblx0YmVmb3JlUmV2ZWFsOiBmdW5jdGlvbiBiZWZvcmVSZXZlYWwoKSB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZSgpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyJyk7XG5cblx0cmV0dXJuIHtcblx0XHRjbGVhbjogZnVuY3Rpb24gY2xlYW4oKSB7fSxcblx0XHRkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge30sXG5cdFx0cmV2ZWFsOiBmdW5jdGlvbiByZXZlYWwoKSB7fSxcblx0XHRzeW5jOiBmdW5jdGlvbiBzeW5jKCkge30sXG5cdFx0Z2V0IG5vb3AoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3InKTtcblxuXHRpZiAoZG9jdW1lbnQuYm9keSkge1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0XHR9KTtcblx0fVxufVxuXG52YXIgbW91bnQgPSB7IHN1Y2Nlc3M6IHN1Y2Nlc3MsIGZhaWx1cmU6IGZhaWx1cmUgfTtcblxuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuXHRyZXR1cm4gKFxuXHRcdHggIT09IG51bGwgJiZcblx0XHR4IGluc3RhbmNlb2YgT2JqZWN0ICYmXG5cdFx0KHguY29uc3RydWN0b3IgPT09IE9iamVjdCB8fFxuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBPYmplY3RdJylcblx0KVxufVxuXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG5cdGlmIChpc09iamVjdChjb2xsZWN0aW9uKSkge1xuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG5cdFx0cmV0dXJuIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjYWxsYmFjayhjb2xsZWN0aW9uW2tleV0sIGtleSwgY29sbGVjdGlvbik7IH0pXG5cdH1cblx0aWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGksIGNvbGxlY3Rpb24pOyB9KVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGVpdGhlciBhbiBhcnJheSBvciBvYmplY3QgbGl0ZXJhbC4nKVxufVxuXG5mdW5jdGlvbiBsb2dnZXIobWVzc2FnZSkge1xuXHR2YXIgZGV0YWlscyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBkZXRhaWxzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmICh0aGlzLmNvbnN0cnVjdG9yLmRlYnVnICYmIGNvbnNvbGUpIHtcblx0XHR2YXIgcmVwb3J0ID0gXCIlY1Njcm9sbFJldmVhbDogXCIgKyBtZXNzYWdlO1xuXHRcdGRldGFpbHMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiAocmVwb3J0ICs9IFwiXFxuIOKAlCBcIiArIGRldGFpbCk7IH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcG9ydCwgJ2NvbG9yOiAjZWE2NTRiOycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0fVxufVxuXG5mdW5jdGlvbiByaW5zZSgpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIHN0cnVjdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG5cdFx0YWN0aXZlOiBbXSxcblx0XHRzdGFsZTogW11cblx0fSk7IH07XG5cblx0dmFyIGVsZW1lbnRJZHMgPSBzdHJ1Y3QoKTtcblx0dmFyIHNlcXVlbmNlSWRzID0gc3RydWN0KCk7XG5cdHZhciBjb250YWluZXJJZHMgPSBzdHJ1Y3QoKTtcblxuXHQvKipcblx0ICogVGFrZSBzdG9jayBvZiBhY3RpdmUgZWxlbWVudCBJRHMuXG5cdCAqL1xuXHR0cnkge1xuXHRcdGVhY2goJCgnW2RhdGEtc3ItaWRdJyksIGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHR2YXIgaWQgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpKTtcblx0XHRcdGVsZW1lbnRJZHMuYWN0aXZlLnB1c2goaWQpO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgZVxuXHR9XG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIGVsZW1lbnRzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50SWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuaWQpID09PSAtMSkge1xuXHRcdFx0ZWxlbWVudElkcy5zdGFsZS5wdXNoKGVsZW1lbnQuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChlbGVtZW50SWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tzdGFsZUlkXTsgfSk7XG5cblx0LyoqXG5cdCAqIFRha2Ugc3RvY2sgb2YgYWN0aXZlIGNvbnRhaW5lciBhbmQgc2VxdWVuY2UgSURzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChjb250YWluZXJJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5jb250YWluZXJJZCkgPT09IC0xKSB7XG5cdFx0XHRjb250YWluZXJJZHMuYWN0aXZlLnB1c2goZWxlbWVudC5jb250YWluZXJJZCk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXF1ZW5jZScpKSB7XG5cdFx0XHRpZiAoc2VxdWVuY2VJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5zZXF1ZW5jZS5pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHNlcXVlbmNlSWRzLmFjdGl2ZS5wdXNoKGVsZW1lbnQuc2VxdWVuY2UuaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgY29udGFpbmVycy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lcklkcy5hY3RpdmUuaW5kZXhPZihjb250YWluZXIuaWQpID09PSAtMSkge1xuXHRcdFx0Y29udGFpbmVySWRzLnN0YWxlLnB1c2goY29udGFpbmVyLmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goY29udGFpbmVySWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkge1xuXHRcdHZhciBzdGFsZSA9IHRoaXMkMS5zdG9yZS5jb250YWluZXJzW3N0YWxlSWRdLm5vZGU7XG5cdFx0c3RhbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHRzdGFsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuY29udGFpbmVyc1tzdGFsZUlkXTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgc2VxdWVuY2VzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLnNlcXVlbmNlcywgZnVuY3Rpb24gKHNlcXVlbmNlKSB7XG5cdFx0aWYgKHNlcXVlbmNlSWRzLmFjdGl2ZS5pbmRleE9mKHNlcXVlbmNlLmlkKSA9PT0gLTEpIHtcblx0XHRcdHNlcXVlbmNlSWRzLnN0YWxlLnB1c2goc2VxdWVuY2UuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChzZXF1ZW5jZUlkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDEuc3RvcmUuc2VxdWVuY2VzW3N0YWxlSWRdOyB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW4odGFyZ2V0KSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHZhciBkaXJ0eTtcblx0dHJ5IHtcblx0XHRlYWNoKCQodGFyZ2V0KSwgZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRcdHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdFx0XHRpZiAoaWQgIT09IG51bGwpIHtcblx0XHRcdFx0ZGlydHkgPSB0cnVlO1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHRoaXMkMS5zdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0XHRcdGlmIChlbGVtZW50LmNhbGxiYWNrVGltZXIpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW1lbnQuY2FsbGJhY2tUaW1lci5jbG9jayk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCk7XG5cdFx0XHRcdG5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0aWYgKGRpcnR5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJpbnNlLmNhbGwodGhpcyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBnZW5lcmF0ZWQgc3R5bGVzIGFuZCBlbGVtZW50IGlkc1xuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCk7XG5cdFx0ZWxlbWVudC5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXHR9KTtcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMuXG5cdCAqL1xuXHRlYWNoKHRoaXMuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHZhciB0YXJnZXQgPVxuXHRcdFx0Y29udGFpbmVyLm5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IHdpbmRvdyA6IGNvbnRhaW5lci5ub2RlO1xuXHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHR9KTtcblxuXHQvKipcblx0ICogQ2xlYXIgYWxsIGRhdGEgZnJvbSB0aGUgc3RvcmVcblx0ICovXG5cdHRoaXMuc3RvcmUgPSB7XG5cdFx0Y29udGFpbmVyczoge30sXG5cdFx0ZWxlbWVudHM6IHt9LFxuXHRcdGhpc3Rvcnk6IFtdLFxuXHRcdHNlcXVlbmNlczoge31cblx0fTtcbn1cblxudmFyIGdldFByZWZpeGVkQ3NzUHJvcCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBwcm9wZXJ0aWVzID0ge307XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuXHRmdW5jdGlvbiBnZXRQcmVmaXhlZENzc1Byb3BlcnR5KG5hbWUsIHNvdXJjZSkge1xuXHRcdGlmICggc291cmNlID09PSB2b2lkIDAgKSBzb3VyY2UgPSBzdHlsZTtcblxuXHRcdGlmIChuYW1lICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHByb3BlcnRpZXNbbmFtZV0pIHtcblx0XHRcdFx0cmV0dXJuIHByb3BlcnRpZXNbbmFtZV1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gKHByb3BlcnRpZXNbbmFtZV0gPSBuYW1lKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbKFwiLXdlYmtpdC1cIiArIG5hbWUpXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIChwcm9wZXJ0aWVzW25hbWVdID0gXCItd2Via2l0LVwiICsgbmFtZSlcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKChcIlVuYWJsZSB0byBmaW5kIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgc3R5bGUgcHJvcGVydHkuXCIpKVxuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZy4nKVxuXHR9XG5cblx0Z2V0UHJlZml4ZWRDc3NQcm9wZXJ0eS5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHByb3BlcnRpZXMgPSB7fSk7IH07XG5cblx0cmV0dXJuIGdldFByZWZpeGVkQ3NzUHJvcGVydHlcbn0pKCk7XG5cbmZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQpIHtcblx0dmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5ub2RlKTtcblx0dmFyIHBvc2l0aW9uID0gY29tcHV0ZWQucG9zaXRpb247XG5cdHZhciBjb25maWcgPSBlbGVtZW50LmNvbmZpZztcblxuXHQvKipcblx0ICogR2VuZXJhdGUgaW5saW5lIHN0eWxlc1xuXHQgKi9cblx0dmFyIGlubGluZSA9IHt9O1xuXHR2YXIgaW5saW5lU3R5bGUgPSBlbGVtZW50Lm5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuXHR2YXIgaW5saW5lTWF0Y2ggPSBpbmxpbmVTdHlsZS5tYXRjaCgvW1xcdy1dK1xccyo6XFxzKlteO10rXFxzKi9naSkgfHwgW107XG5cblx0aW5saW5lLmNvbXB1dGVkID0gaW5saW5lTWF0Y2ggPyBpbmxpbmVNYXRjaC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnIDogJyc7XG5cblx0aW5saW5lLmdlbmVyYXRlZCA9IGlubGluZU1hdGNoLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ubWF0Y2goL3Zpc2liaWxpdHlcXHM/Olxccz92aXNpYmxlL2kpOyB9KVxuXHRcdD8gaW5saW5lLmNvbXB1dGVkXG5cdFx0OiBpbmxpbmVNYXRjaC5jb25jYXQoIFsndmlzaWJpbGl0eTogdmlzaWJsZSddKS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBvcGFjaXR5IHN0eWxlc1xuXHQgKi9cblx0dmFyIGNvbXB1dGVkT3BhY2l0eSA9IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cdHZhciBjb25maWdPcGFjaXR5ID0gIWlzTmFOKHBhcnNlRmxvYXQoY29uZmlnLm9wYWNpdHkpKVxuXHRcdD8gcGFyc2VGbG9hdChjb25maWcub3BhY2l0eSlcblx0XHQ6IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cblx0dmFyIG9wYWNpdHkgPSB7XG5cdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkT3BhY2l0eSAhPT0gY29uZmlnT3BhY2l0eSA/IChcIm9wYWNpdHk6IFwiICsgY29tcHV0ZWRPcGFjaXR5ICsgXCI7XCIpIDogJycsXG5cdFx0Z2VuZXJhdGVkOiBjb21wdXRlZE9wYWNpdHkgIT09IGNvbmZpZ09wYWNpdHkgPyAoXCJvcGFjaXR5OiBcIiArIGNvbmZpZ09wYWNpdHkgKyBcIjtcIikgOiAnJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0cmFuc2Zvcm1hdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2Zvcm1hdGlvbnMgPSBbXTtcblxuXHRpZiAocGFyc2VGbG9hdChjb25maWcuZGlzdGFuY2UpKSB7XG5cdFx0dmFyIGF4aXMgPSBjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnYm90dG9tJyA/ICdZJyA6ICdYJztcblxuXHRcdC8qKlxuXHRcdCAqIExldOKAmXMgbWFrZSBzdXJlIG91ciBvdXIgcGl4ZWwgZGlzdGFuY2VzIGFyZSBuZWdhdGl2ZSBmb3IgdG9wIGFuZCBsZWZ0LlxuXHRcdCAqIGUuZy4geyBvcmlnaW46ICd0b3AnLCBkaXN0YW5jZTogJzI1cHgnIH0gc3RhcnRzIGF0IGB0b3A6IC0yNXB4YCBpbiBDU1MuXG5cdFx0ICovXG5cdFx0dmFyIGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuXHRcdGlmIChjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnbGVmdCcpIHtcblx0XHRcdGRpc3RhbmNlID0gL14tLy50ZXN0KGRpc3RhbmNlKSA/IGRpc3RhbmNlLnN1YnN0cigxKSA6IChcIi1cIiArIGRpc3RhbmNlKTtcblx0XHR9XG5cblx0XHR2YXIgcmVmID0gZGlzdGFuY2UubWF0Y2goLyheLT9cXGQrXFwuP1xcZD8pfChlbSR8cHgkfCUkKS9nKTtcblx0XHR2YXIgdmFsdWUgPSByZWZbMF07XG5cdFx0dmFyIHVuaXQgPSByZWZbMV07XG5cblx0XHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRcdGNhc2UgJ2VtJzpcblx0XHRcdFx0ZGlzdGFuY2UgPSBwYXJzZUludChjb21wdXRlZC5mb250U2l6ZSkgKiB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3B4Jzpcblx0XHRcdFx0ZGlzdGFuY2UgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJyUnOlxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGVyZSB3ZSB1c2UgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgaW5zdGVhZCBvZlxuXHRcdFx0XHQgKiB0aGUgZXhpc3RpbmcgZGF0YSBhdHRhY2hlZCB0byBgZWxlbWVudC5nZW9tZXRyeWBcblx0XHRcdFx0ICogYmVjYXVzZSBvbmx5IHRoZSBmb3JtZXIgaW5jbHVkZXMgYW55IHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0XHQgKiBjdXJyZW50IGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIElmIHRoYXQgYmVoYXZpb3IgZW5kcyB1cCBiZWluZyB1bmludHVpdGl2ZSwgdGhpc1xuXHRcdFx0XHQgKiBsb2dpYyBjb3VsZCBpbnN0ZWFkIHV0aWxpemUgYGVsZW1lbnQuZ2VvbWV0cnkuaGVpZ2h0YFxuXHRcdFx0XHQgKiBhbmQgYGVsZW1lbnQuZ2VvZW1ldHJ5LndpZHRoYCBmb3IgdGhlIGRpc3RhbmNlIGNhbGN1bGF0aW9uXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRkaXN0YW5jZSA9XG5cdFx0XHRcdFx0YXhpcyA9PT0gJ1knXG5cdFx0XHRcdFx0XHQ/IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogdmFsdWUpIC8gMTAwXG5cdFx0XHRcdFx0XHQ6IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiB2YWx1ZSkgLyAxMDA7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5yZWNvZ25pemVkIG9yIG1pc3NpbmcgZGlzdGFuY2UgdW5pdC4nKVxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSAnWScpIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zbGF0ZVkoZGlzdGFuY2UpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNsYXRlWChkaXN0YW5jZSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjb25maWcucm90YXRlLngpIHsgdHJhbnNmb3JtYXRpb25zLnB1c2gocm90YXRlWChjb25maWcucm90YXRlLngpKTsgfVxuXHRpZiAoY29uZmlnLnJvdGF0ZS55KSB7IHRyYW5zZm9ybWF0aW9ucy5wdXNoKHJvdGF0ZVkoY29uZmlnLnJvdGF0ZS55KSk7IH1cblx0aWYgKGNvbmZpZy5yb3RhdGUueikgeyB0cmFuc2Zvcm1hdGlvbnMucHVzaChyb3RhdGVaKGNvbmZpZy5yb3RhdGUueikpOyB9XG5cdGlmIChjb25maWcuc2NhbGUgIT09IDEpIHtcblx0XHRpZiAoY29uZmlnLnNjYWxlID09PSAwKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBDU1MgVHJhbnNmb3JtcyBtYXRyaXggaW50ZXJwb2xhdGlvbiBzcGVjaWZpY2F0aW9uXG5cdFx0XHQgKiBiYXNpY2FsbHkgZGlzYWxsb3dzIHRyYW5zaXRpb25zIG9mIG5vbi1pbnZlcnRpYmxlXG5cdFx0XHQgKiBtYXRyaXhlcywgd2hpY2ggbWVhbnMgYnJvd3NlcnMgd29uJ3QgdHJhbnNpdGlvblxuXHRcdFx0ICogZWxlbWVudHMgd2l0aCB6ZXJvIHNjYWxlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoYXTigJlzIGluY29udmVuaWVudCBmb3IgdGhlIEFQSSBhbmQgZGV2ZWxvcGVyXG5cdFx0XHQgKiBleHBlcmllbmNlLCBzbyB3ZSBzaW1wbHkgbnVkZ2UgdGhlaXIgdmFsdWVcblx0XHRcdCAqIHNsaWdodGx5IGFib3ZlIHplcm87IHRoaXMgYWxsb3dzIGJyb3dzZXJzXG5cdFx0XHQgKiB0byB0cmFuc2l0aW9uIG91ciBlbGVtZW50IGFzIGV4cGVjdGVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIGAwLjAwMDJgIHdhcyB0aGUgc21hbGxlc3QgbnVtYmVyXG5cdFx0XHQgKiB0aGF0IHBlcmZvcm1lZCBhY3Jvc3MgYnJvd3NlcnMuXG5cdFx0XHQgKi9cblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHNjYWxlKDAuMDAwMikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaChzY2FsZShjb25maWcuc2NhbGUpKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgdHJhbnNmb3JtID0ge307XG5cdGlmICh0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG5cdFx0dHJhbnNmb3JtLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2Zvcm0nKTtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2Zvcm0gdmFsdWUgc2hvdWxkIGJlIG9uZSBvZjpcblx0XHQgKiB1bmRlZmluZWQgfHwgJ25vbmUnIHx8ICdtYXRyaXgoKScgfHwgJ21hdHJpeDNkKCknXG5cdFx0ICovXG5cdFx0dHJhbnNmb3JtLmNvbXB1dGVkID0ge1xuXHRcdFx0cmF3OiBjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldLFxuXHRcdFx0bWF0cml4OiBwYXJzZShjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldKVxuXHRcdH07XG5cblx0XHR0cmFuc2Zvcm1hdGlvbnMudW5zaGlmdCh0cmFuc2Zvcm0uY29tcHV0ZWQubWF0cml4KTtcblx0XHR2YXIgcHJvZHVjdCA9IHRyYW5zZm9ybWF0aW9ucy5yZWR1Y2UobXVsdGlwbHkpO1xuXG5cdFx0dHJhbnNmb3JtLmdlbmVyYXRlZCA9IHtcblx0XHRcdGluaXRpYWw6ICgodHJhbnNmb3JtLnByb3BlcnR5KSArIFwiOiBtYXRyaXgzZChcIiArIChwcm9kdWN0LmpvaW4oJywgJykpICsgXCIpO1wiKSxcblx0XHRcdGZpbmFsOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIjogbWF0cml4M2QoXCIgKyAodHJhbnNmb3JtLmNvbXB1dGVkLm1hdHJpeC5qb2luKCcsICcpKSArIFwiKTtcIilcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRyYW5zZm9ybS5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRpbml0aWFsOiAnJyxcblx0XHRcdGZpbmFsOiAnJ1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgdHJhbnNpdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2l0aW9uID0ge307XG5cdGlmIChvcGFjaXR5LmdlbmVyYXRlZCB8fCB0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHR0cmFuc2l0aW9uLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2l0aW9uJyk7XG5cdFx0dHJhbnNpdGlvbi5jb21wdXRlZCA9IGNvbXB1dGVkW3RyYW5zaXRpb24ucHJvcGVydHldO1xuXHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzID0gW107XG5cblx0XHR2YXIgZGVsYXkgPSBjb25maWcuZGVsYXk7XG5cdFx0dmFyIGR1cmF0aW9uID0gY29uZmlnLmR1cmF0aW9uO1xuXHRcdHZhciBlYXNpbmcgPSBjb25maWcuZWFzaW5nO1xuXG5cdFx0aWYgKG9wYWNpdHkuZ2VuZXJhdGVkKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy5wdXNoKHtcblx0XHRcdFx0ZGVsYXllZDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgMHNcIilcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzLnB1c2goe1xuXHRcdFx0XHRkZWxheWVkOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIiBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCIgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIDBzXCIpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2l0aW9uIHByb3BlcnR5IHNob3VsZCBiZSB1bmRlZmluZWQsIG9yIG9uZSBvZjpcblx0XHQgKiAnJyB8fCAnbm9uZSAwcyBlYXNlIDBzJyB8fCAnYWxsIDBzIGVhc2UgMHMnIHx8ICdhbGwgMHMgMHMgY3ViaWMtYmV6aWVyKCknXG5cdFx0ICovXG5cdFx0dmFyIGhhc0N1c3RvbVRyYW5zaXRpb24gPVxuXHRcdFx0dHJhbnNpdGlvbi5jb21wdXRlZCAmJiAhdHJhbnNpdGlvbi5jb21wdXRlZC5tYXRjaCgvYWxsIDBzfG5vbmUgMHMvKTtcblxuXHRcdGlmIChoYXNDdXN0b21UcmFuc2l0aW9uKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy51bnNoaWZ0KHtcblx0XHRcdFx0ZGVsYXllZDogdHJhbnNpdGlvbi5jb21wdXRlZCxcblx0XHRcdFx0aW5zdGFudDogdHJhbnNpdGlvbi5jb21wdXRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbXBvc2VkID0gdHJhbnNpdGlvbi5mcmFnbWVudHMucmVkdWNlKFxuXHRcdFx0ZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCBmcmFnbWVudCwgaSkge1xuXHRcdFx0XHRjb21wb3NpdGlvbi5kZWxheWVkICs9IGkgPT09IDAgPyBmcmFnbWVudC5kZWxheWVkIDogKFwiLCBcIiArIChmcmFnbWVudC5kZWxheWVkKSk7XG5cdFx0XHRcdGNvbXBvc2l0aW9uLmluc3RhbnQgKz0gaSA9PT0gMCA/IGZyYWdtZW50Lmluc3RhbnQgOiAoXCIsIFwiICsgKGZyYWdtZW50Lmluc3RhbnQpKTtcblx0XHRcdFx0cmV0dXJuIGNvbXBvc2l0aW9uXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdFx0aW5zdGFudDogJydcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAoKHRyYW5zaXRpb24ucHJvcGVydHkpICsgXCI6IFwiICsgKGNvbXBvc2VkLmRlbGF5ZWQpICsgXCI7XCIpLFxuXHRcdFx0aW5zdGFudDogKCh0cmFuc2l0aW9uLnByb3BlcnR5KSArIFwiOiBcIiArIChjb21wb3NlZC5pbnN0YW50KSArIFwiO1wiKVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdGluc3RhbnQ6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aW5saW5lOiBpbmxpbmUsXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcblx0XHRwb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNpdGlvblxuXHR9XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoZWxlbWVudCwgZm9yY2UpIHtcblx0aWYgKCBmb3JjZSA9PT0gdm9pZCAwICkgZm9yY2UgPSB7fTtcblxuXHR2YXIgcHJpc3RpbmUgPSBmb3JjZS5wcmlzdGluZSB8fCB0aGlzLnByaXN0aW5lO1xuXHR2YXIgZGVsYXllZCA9XG5cdFx0ZWxlbWVudC5jb25maWcudXNlRGVsYXkgPT09ICdhbHdheXMnIHx8XG5cdFx0KGVsZW1lbnQuY29uZmlnLnVzZURlbGF5ID09PSAnb25sb2FkJyAmJiBwcmlzdGluZSkgfHxcblx0XHQoZWxlbWVudC5jb25maWcudXNlRGVsYXkgPT09ICdvbmNlJyAmJiAhZWxlbWVudC5zZWVuKTtcblxuXHR2YXIgc2hvdWxkUmV2ZWFsID0gZWxlbWVudC52aXNpYmxlICYmICFlbGVtZW50LnJldmVhbGVkO1xuXHR2YXIgc2hvdWxkUmVzZXQgPSAhZWxlbWVudC52aXNpYmxlICYmIGVsZW1lbnQucmV2ZWFsZWQgJiYgZWxlbWVudC5jb25maWcucmVzZXQ7XG5cblx0aWYgKGZvcmNlLnJldmVhbCB8fCBzaG91bGRSZXZlYWwpIHtcblx0XHRyZXR1cm4gdHJpZ2dlclJldmVhbC5jYWxsKHRoaXMsIGVsZW1lbnQsIGRlbGF5ZWQpXG5cdH1cblxuXHRpZiAoZm9yY2UucmVzZXQgfHwgc2hvdWxkUmVzZXQpIHtcblx0XHRyZXR1cm4gdHJpZ2dlclJlc2V0LmNhbGwodGhpcywgZWxlbWVudClcblx0fVxufVxuXG5mdW5jdGlvbiB0cmlnZ2VyUmV2ZWFsKGVsZW1lbnQsIGRlbGF5ZWQpIHtcblx0dmFyIHN0eWxlcyA9IFtcblx0XHRlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuY29tcHV0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5maW5hbFxuXHRdO1xuXHRpZiAoZGVsYXllZCkge1xuXHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zaXRpb24uZ2VuZXJhdGVkLmRlbGF5ZWQpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zaXRpb24uZ2VuZXJhdGVkLmluc3RhbnQpO1xuXHR9XG5cdGVsZW1lbnQucmV2ZWFsZWQgPSBlbGVtZW50LnNlZW4gPSB0cnVlO1xuXHRlbGVtZW50Lm5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQsIGRlbGF5ZWQpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyUmVzZXQoZWxlbWVudCkge1xuXHR2YXIgc3R5bGVzID0gW1xuXHRcdGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMub3BhY2l0eS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zaXRpb24uZ2VuZXJhdGVkLmluc3RhbnRcblx0XTtcblx0ZWxlbWVudC5yZXZlYWxlZCA9IGZhbHNlO1xuXHRlbGVtZW50Lm5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyhlbGVtZW50LCBpc0RlbGF5ZWQpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGR1cmF0aW9uID0gaXNEZWxheWVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbiArIGVsZW1lbnQuY29uZmlnLmRlbGF5XG5cdFx0OiBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbjtcblxuXHR2YXIgYmVmb3JlQ2FsbGJhY2sgPSBlbGVtZW50LnJldmVhbGVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5iZWZvcmVSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmJlZm9yZVJlc2V0O1xuXG5cdHZhciBhZnRlckNhbGxiYWNrID0gZWxlbWVudC5yZXZlYWxlZFxuXHRcdD8gZWxlbWVudC5jb25maWcuYWZ0ZXJSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmFmdGVyUmVzZXQ7XG5cblx0dmFyIGVsYXBzZWQgPSAwO1xuXHRpZiAoZWxlbWVudC5jYWxsYmFja1RpbWVyKSB7XG5cdFx0ZWxhcHNlZCA9IERhdGUubm93KCkgLSBlbGVtZW50LmNhbGxiYWNrVGltZXIuc3RhcnQ7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmNhbGxiYWNrVGltZXIuY2xvY2spO1xuXHR9XG5cblx0YmVmb3JlQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblxuXHRlbGVtZW50LmNhbGxiYWNrVGltZXIgPSB7XG5cdFx0c3RhcnQ6IERhdGUubm93KCksXG5cdFx0Y2xvY2s6IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGFmdGVyQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblx0XHRcdGVsZW1lbnQuY2FsbGJhY2tUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAoZWxlbWVudC5yZXZlYWxlZCAmJiAhZWxlbWVudC5jb25maWcucmVzZXQgJiYgZWxlbWVudC5jb25maWcuY2xlYW51cCkge1xuXHRcdFx0XHRjbGVhbi5jYWxsKHRoaXMkMSwgZWxlbWVudC5ub2RlKTtcblx0XHRcdH1cblx0XHR9LCBkdXJhdGlvbiAtIGVsYXBzZWQpXG5cdH07XG59XG5cbnZhciBuZXh0VW5pcXVlSWQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdWlkID0gMDtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVpZCsrOyB9XG59KSgpO1xuXG5mdW5jdGlvbiBzZXF1ZW5jZShlbGVtZW50LCBwcmlzdGluZSkge1xuXHRpZiAoIHByaXN0aW5lID09PSB2b2lkIDAgKSBwcmlzdGluZSA9IHRoaXMucHJpc3RpbmU7XG5cblx0LyoqXG5cdCAqIFdlIGZpcnN0IGNoZWNrIGlmIHRoZSBlbGVtZW50IHNob3VsZCByZXNldC5cblx0ICovXG5cdGlmICghZWxlbWVudC52aXNpYmxlICYmIGVsZW1lbnQucmV2ZWFsZWQgJiYgZWxlbWVudC5jb25maWcucmVzZXQpIHtcblx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIGVsZW1lbnQsIHsgcmVzZXQ6IHRydWUgfSlcblx0fVxuXG5cdHZhciBzZXEgPSB0aGlzLnN0b3JlLnNlcXVlbmNlc1tlbGVtZW50LnNlcXVlbmNlLmlkXTtcblx0dmFyIGkgPSBlbGVtZW50LnNlcXVlbmNlLmluZGV4O1xuXG5cdGlmIChzZXEpIHtcblx0XHR2YXIgdmlzaWJsZSA9IG5ldyBTZXF1ZW5jZU1vZGVsKHNlcSwgJ3Zpc2libGUnLCB0aGlzLnN0b3JlKTtcblx0XHR2YXIgcmV2ZWFsZWQgPSBuZXcgU2VxdWVuY2VNb2RlbChzZXEsICdyZXZlYWxlZCcsIHRoaXMuc3RvcmUpO1xuXG5cdFx0c2VxLm1vZGVscyA9IHsgdmlzaWJsZTogdmlzaWJsZSwgcmV2ZWFsZWQ6IHJldmVhbGVkIH07XG5cblx0XHQvKipcblx0XHQgKiBJZiB0aGUgc2VxdWVuY2UgaGFzIG5vIHJldmVhbGVkIG1lbWJlcnMsXG5cdFx0ICogdGhlbiB3ZSByZXZlYWwgdGhlIGZpcnN0IHZpc2libGUgZWxlbWVudFxuXHRcdCAqIHdpdGhpbiB0aGF0IHNlcXVlbmNlLlxuXHRcdCAqXG5cdFx0ICogVGhlIHNlcXVlbmNlIHRoZW4gY3VlcyBhIHJlY3Vyc2l2ZSBjYWxsXG5cdFx0ICogaW4gYm90aCBkaXJlY3Rpb25zLlxuXHRcdCAqL1xuXHRcdGlmICghcmV2ZWFsZWQuYm9keS5sZW5ndGgpIHtcblx0XHRcdHZhciBuZXh0SWQgPSBzZXEubWVtYmVyc1t2aXNpYmxlLmJvZHlbMF1dO1xuXHRcdFx0dmFyIG5leHRFbGVtZW50ID0gdGhpcy5zdG9yZS5lbGVtZW50c1tuZXh0SWRdO1xuXG5cdFx0XHRpZiAobmV4dEVsZW1lbnQpIHtcblx0XHRcdFx0Y3VlLmNhbGwodGhpcywgc2VxLCB2aXNpYmxlLmJvZHlbMF0sIC0xLCBwcmlzdGluZSk7XG5cdFx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgdmlzaWJsZS5ib2R5WzBdLCArMSwgcHJpc3RpbmUpO1xuXHRcdFx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIG5leHRFbGVtZW50LCB7IHJldmVhbDogdHJ1ZSwgcHJpc3RpbmU6IHByaXN0aW5lIH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSWYgb3VyIGVsZW1lbnQgaXNu4oCZdCByZXNldHRpbmcsIHdlIGNoZWNrIHRoZVxuXHRcdCAqIGVsZW1lbnQgc2VxdWVuY2UgaW5kZXggYWdhaW5zdCB0aGUgaGVhZCwgYW5kXG5cdFx0ICogdGhlbiB0aGUgZm9vdCBvZiB0aGUgc2VxdWVuY2UuXG5cdFx0ICovXG5cdFx0aWYgKFxuXHRcdFx0IXNlcS5ibG9ja2VkLmhlYWQgJiZcblx0XHRcdGkgPT09IFtdLmNvbmNhdCggcmV2ZWFsZWQuaGVhZCApLnBvcCgpICYmXG5cdFx0XHRpID49IFtdLmNvbmNhdCggdmlzaWJsZS5ib2R5ICkuc2hpZnQoKVxuXHRcdCkge1xuXHRcdFx0Y3VlLmNhbGwodGhpcywgc2VxLCBpLCAtMSwgcHJpc3RpbmUpO1xuXHRcdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBlbGVtZW50LCB7IHJldmVhbDogdHJ1ZSwgcHJpc3RpbmU6IHByaXN0aW5lIH0pXG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0IXNlcS5ibG9ja2VkLmZvb3QgJiZcblx0XHRcdGkgPT09IFtdLmNvbmNhdCggcmV2ZWFsZWQuZm9vdCApLnNoaWZ0KCkgJiZcblx0XHRcdGkgPD0gW10uY29uY2F0KCB2aXNpYmxlLmJvZHkgKS5wb3AoKVxuXHRcdCkge1xuXHRcdFx0Y3VlLmNhbGwodGhpcywgc2VxLCBpLCArMSwgcHJpc3RpbmUpO1xuXHRcdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBlbGVtZW50LCB7IHJldmVhbDogdHJ1ZSwgcHJpc3RpbmU6IHByaXN0aW5lIH0pXG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIFNlcXVlbmNlKGludGVydmFsKSB7XG5cdHZhciBpID0gTWF0aC5hYnMoaW50ZXJ2YWwpO1xuXHRpZiAoIWlzTmFOKGkpKSB7XG5cdFx0dGhpcy5pZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdHRoaXMuaW50ZXJ2YWwgPSBNYXRoLm1heChpLCAxNik7XG5cdFx0dGhpcy5tZW1iZXJzID0gW107XG5cdFx0dGhpcy5tb2RlbHMgPSB7fTtcblx0XHR0aGlzLmJsb2NrZWQgPSB7XG5cdFx0XHRoZWFkOiBmYWxzZSxcblx0XHRcdGZvb3Q6IGZhbHNlXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzZXF1ZW5jZSBpbnRlcnZhbC4nKVxuXHR9XG59XG5cbmZ1bmN0aW9uIFNlcXVlbmNlTW9kZWwoc2VxLCBwcm9wLCBzdG9yZSkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR0aGlzLmhlYWQgPSBbXTtcblx0dGhpcy5ib2R5ID0gW107XG5cdHRoaXMuZm9vdCA9IFtdO1xuXG5cdGVhY2goc2VxLm1lbWJlcnMsIGZ1bmN0aW9uIChpZCwgaW5kZXgpIHtcblx0XHR2YXIgZWxlbWVudCA9IHN0b3JlLmVsZW1lbnRzW2lkXTtcblx0XHRpZiAoZWxlbWVudCAmJiBlbGVtZW50W3Byb3BdKSB7XG5cdFx0XHR0aGlzJDEuYm9keS5wdXNoKGluZGV4KTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmICh0aGlzLmJvZHkubGVuZ3RoKSB7XG5cdFx0ZWFjaChzZXEubWVtYmVycywgZnVuY3Rpb24gKGlkLCBpbmRleCkge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBzdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0XHRpZiAoZWxlbWVudCAmJiAhZWxlbWVudFtwcm9wXSkge1xuXHRcdFx0XHRpZiAoaW5kZXggPCB0aGlzJDEuYm9keVswXSkge1xuXHRcdFx0XHRcdHRoaXMkMS5oZWFkLnB1c2goaW5kZXgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMkMS5mb290LnB1c2goaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VlKHNlcSwgaSwgZGlyZWN0aW9uLCBwcmlzdGluZSkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgYmxvY2tlZCA9IFsnaGVhZCcsIG51bGwsICdmb290J11bMSArIGRpcmVjdGlvbl07XG5cdHZhciBuZXh0SWQgPSBzZXEubWVtYmVyc1tpICsgZGlyZWN0aW9uXTtcblx0dmFyIG5leHRFbGVtZW50ID0gdGhpcy5zdG9yZS5lbGVtZW50c1tuZXh0SWRdO1xuXG5cdHNlcS5ibG9ja2VkW2Jsb2NrZWRdID0gdHJ1ZTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRzZXEuYmxvY2tlZFtibG9ja2VkXSA9IGZhbHNlO1xuXHRcdGlmIChuZXh0RWxlbWVudCkge1xuXHRcdFx0c2VxdWVuY2UuY2FsbCh0aGlzJDEsIG5leHRFbGVtZW50LCBwcmlzdGluZSk7XG5cdFx0fVxuXHR9LCBzZXEuaW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHRyaW5zZS5jYWxsKHRoaXMpO1xuXG5cdGVhY2godGhpcy5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHR2YXIgc3R5bGVzID0gW2VsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWRdO1xuXG5cdFx0aWYgKGVsZW1lbnQudmlzaWJsZSkge1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMub3BhY2l0eS5jb21wdXRlZCk7XG5cdFx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2Zvcm0uZ2VuZXJhdGVkLmZpbmFsKTtcblx0XHRcdGVsZW1lbnQucmV2ZWFsZWQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy5vcGFjaXR5LmdlbmVyYXRlZCk7XG5cdFx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpO1xuXHRcdFx0ZWxlbWVudC5yZXZlYWxlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGVzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyc7IH0pLmpvaW4oJyAnKSk7XG5cdH0pO1xuXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dmFyIHRhcmdldCA9XG5cdFx0XHRjb250YWluZXIubm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogY29udGFpbmVyLm5vZGU7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBNYW51YWxseSBpbnZva2UgZGVsZWdhdGUgb25jZSB0byBjYXB0dXJlXG5cdCAqIGVsZW1lbnQgYW5kIGNvbnRhaW5lciBkaW1lbnNpb25zLCBjb250YWluZXJcblx0ICogc2Nyb2xsIHBvc2l0aW9uLCBhbmQgdHJpZ2dlciBhbnkgdmFsaWQgcmV2ZWFsc1xuXHQgKi9cblx0dGhpcy5kZWxlZ2F0ZSgpO1xuXG5cdC8qKlxuXHQgKiBXaXBlIGFueSBleGlzdGluZyBgc2V0VGltZW91dGAgbm93XG5cdCAqIHRoYXQgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZC5cblx0ICovXG5cdHRoaXMuaW5pdFRpbWVvdXQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZShhZ2VudCkge1xuXHRpZiAoIGFnZW50ID09PSB2b2lkIDAgKSBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0cmV0dXJuIC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KGFnZW50KVxufVxuXG5mdW5jdGlvbiBkZWVwQXNzaWduKHRhcmdldCkge1xuXHR2YXIgc291cmNlcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBzb3VyY2VzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG5cdFx0ZWFjaChzb3VyY2VzLCBmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRlYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuXHRcdFx0XHRpZiAoaXNPYmplY3QoZGF0YSkpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldFtrZXldIHx8ICFpc09iamVjdCh0YXJnZXRba2V5XSkpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtrZXldID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZXBBc3NpZ24odGFyZ2V0W2tleV0sIGRhdGEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRhcmdldFxuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCBsaXRlcmFsLicpXG5cdH1cbn1cblxuZnVuY3Rpb24gcmV2ZWFsKHRhcmdldCwgb3B0aW9ucywgc3luY2luZykge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblx0aWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cdGlmICggc3luY2luZyA9PT0gdm9pZCAwICkgc3luY2luZyA9IGZhbHNlO1xuXG5cdHZhciBjb250YWluZXJCdWZmZXIgPSBbXTtcblx0dmFyIHNlcXVlbmNlJCQxO1xuXHR2YXIgaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsIHx8IGRlZmF1bHRzLmludGVydmFsO1xuXG5cdHRyeSB7XG5cdFx0aWYgKGludGVydmFsKSB7XG5cdFx0XHRzZXF1ZW5jZSQkMSA9IG5ldyBTZXF1ZW5jZShpbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5vZGVzID0gJCh0YXJnZXQpO1xuXHRcdGlmICghbm9kZXMubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmV2ZWFsIHRhcmdldC4nKVxuXHRcdH1cblxuXHRcdHZhciBlbGVtZW50cyA9IG5vZGVzLnJlZHVjZShmdW5jdGlvbiAoZWxlbWVudEJ1ZmZlciwgZWxlbWVudE5vZGUpIHtcblx0XHRcdHZhciBlbGVtZW50ID0ge307XG5cdFx0XHR2YXIgZXhpc3RpbmdJZCA9IGVsZW1lbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXG5cdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRkZWVwQXNzaWduKGVsZW1lbnQsIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tleGlzdGluZ0lkXSk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEluIG9yZGVyIHRvIHByZXZlbnQgcHJldmlvdXNseSBnZW5lcmF0ZWQgc3R5bGVzXG5cdFx0XHRcdCAqIGZyb20gdGhyb3dpbmcgb2ZmIHRoZSBuZXcgc3R5bGVzLCB0aGUgc3R5bGUgdGFnXG5cdFx0XHRcdCAqIGhhcyB0byBiZSByZXZlcnRlZCB0byBpdHMgcHJlLXJldmVhbCBzdGF0ZS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudC5zdHlsZXMuaW5saW5lLmNvbXB1dGVkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuaWQgPSBuZXh0VW5pcXVlSWQoKTtcblx0XHRcdFx0ZWxlbWVudC5ub2RlID0gZWxlbWVudE5vZGU7XG5cdFx0XHRcdGVsZW1lbnQuc2VlbiA9IGZhbHNlO1xuXHRcdFx0XHRlbGVtZW50LnJldmVhbGVkID0gZmFsc2U7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29uZmlnID0gZGVlcEFzc2lnbih7fSwgZWxlbWVudC5jb25maWcgfHwgdGhpcyQxLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRcdGNsZWFuLmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudEJ1ZmZlciAvLyBza2lwIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FibGVkXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJOb2RlID0gJChjb25maWcuY29udGFpbmVyKVswXTtcblx0XHRcdGlmICghY29udGFpbmVyTm9kZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbnRhaW5lck5vZGUuY29udGFpbnMoZWxlbWVudE5vZGUpKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyIC8vIHNraXAgZWxlbWVudHMgZm91bmQgb3V0c2lkZSB0aGUgY29udGFpbmVyXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJJZDtcblx0XHRcdHtcblx0XHRcdFx0Y29udGFpbmVySWQgPSBnZXRDb250YWluZXJJZChcblx0XHRcdFx0XHRjb250YWluZXJOb2RlLFxuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlcixcblx0XHRcdFx0XHR0aGlzJDEuc3RvcmUuY29udGFpbmVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY29udGFpbmVySWQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250YWluZXJJZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlci5wdXNoKHsgaWQ6IGNvbnRhaW5lcklkLCBub2RlOiBjb250YWluZXJOb2RlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0ZWxlbWVudC5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuXHRcdFx0ZWxlbWVudC5zdHlsZXMgPSBzdHlsZShlbGVtZW50KTtcblxuXHRcdFx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2VxdWVuY2UgPSB7XG5cdFx0XHRcdFx0aWQ6IHNlcXVlbmNlJCQxLmlkLFxuXHRcdFx0XHRcdGluZGV4OiBzZXF1ZW5jZSQkMS5tZW1iZXJzLmxlbmd0aFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXF1ZW5jZSQkMS5tZW1iZXJzLnB1c2goZWxlbWVudC5pZCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnRCdWZmZXIucHVzaChlbGVtZW50KTtcblx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyXG5cdFx0fSwgW10pO1xuXG5cdFx0LyoqXG5cdFx0ICogTW9kaWZ5aW5nIHRoZSBET00gdmlhIHNldEF0dHJpYnV0ZSBuZWVkcyB0byBiZSBoYW5kbGVkXG5cdFx0ICogc2VwYXJhdGVseSBmcm9tIHJlYWRpbmcgY29tcHV0ZWQgc3R5bGVzIGluIHRoZSBtYXAgYWJvdmVcblx0XHQgKiBmb3IgdGhlIGJyb3dzZXIgdG8gYmF0Y2ggRE9NIGNoYW5nZXMgKGxpbWl0aW5nIHJlZmxvd3MpXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMkMS5zdG9yZS5lbGVtZW50c1tlbGVtZW50LmlkXSA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50Lm5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNyLWlkJywgZWxlbWVudC5pZCk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ1JldmVhbCBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0LyoqXG5cdCAqIE5vdyB0aGF0IGVsZW1lbnQgc2V0LXVwIGlzIGNvbXBsZXRlLi4uXG5cdCAqIExldOKAmXMgY29tbWl0IGFueSBjb250YWluZXIgYW5kIHNlcXVlbmNlIGRhdGEgd2UgaGF2ZSB0byB0aGUgc3RvcmUuXG5cdCAqL1xuXHRlYWNoKGNvbnRhaW5lckJ1ZmZlciwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHRoaXMkMS5zdG9yZS5jb250YWluZXJzW2NvbnRhaW5lci5pZF0gPSB7XG5cdFx0XHRpZDogY29udGFpbmVyLmlkLFxuXHRcdFx0bm9kZTogY29udGFpbmVyLm5vZGVcblx0XHR9O1xuXHR9KTtcblx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0dGhpcy5zdG9yZS5zZXF1ZW5jZXNbc2VxdWVuY2UkJDEuaWRdID0gc2VxdWVuY2UkJDE7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcmV2ZWFsIHdhc24ndCBpbnZva2VkIGJ5IHN5bmMsIHdlIHdhbnQgdG9cblx0ICogbWFrZSBzdXJlIHRvIGFkZCB0aGlzIGNhbGwgdG8gdGhlIGhpc3RvcnkuXG5cdCAqL1xuXHRpZiAoc3luY2luZyAhPT0gdHJ1ZSkge1xuXHRcdHRoaXMuc3RvcmUuaGlzdG9yeS5wdXNoKHsgdGFyZ2V0OiB0YXJnZXQsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cblx0XHQvKipcblx0XHQgKiBQdXNoIGluaXRpYWxpemF0aW9uIHRvIHRoZSBldmVudCBxdWV1ZSwgZ2l2aW5nXG5cdFx0ICogbXVsdGlwbGUgcmV2ZWFsIGNhbGxzIHRpbWUgdG8gYmUgaW50ZXJwcmV0ZWQuXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XG5cdFx0fVxuXHRcdHRoaXMuaW5pdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChpbml0aWFsaXplLmJpbmQodGhpcyksIDApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcklkKG5vZGUpIHtcblx0dmFyIGNvbGxlY3Rpb25zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHR3aGlsZSAoIGxlbi0tID4gMCApIGNvbGxlY3Rpb25zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdHZhciBpZCA9IG51bGw7XG5cdGVhY2goY29sbGVjdGlvbnMsIGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG5cdFx0ZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwgJiYgY29udGFpbmVyLm5vZGUgPT09IG5vZGUpIHtcblx0XHRcdFx0aWQgPSBjb250YWluZXIuaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRyZXR1cm4gaWRcbn1cblxuLyoqXG4gKiBSZS1ydW5zIHRoZSByZXZlYWwgbWV0aG9kIGZvciBlYWNoIHJlY29yZCBzdG9yZWQgaW4gaGlzdG9yeSxcbiAqIGZvciBjYXB0dXJpbmcgbmV3IGNvbnRlbnQgYXN5bmNocm9ub3VzbHkgbG9hZGVkIGludG8gdGhlIERPTS5cbiAqL1xuZnVuY3Rpb24gc3luYygpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0ZWFjaCh0aGlzLnN0b3JlLmhpc3RvcnksIGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRyZXZlYWwuY2FsbCh0aGlzJDEsIHJlY29yZC50YXJnZXQsIHJlY29yZC5vcHRpb25zLCB0cnVlKTtcblx0fSk7XG5cblx0aW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xufVxuXG52YXIgcG9seWZpbGwgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7IH07XG52YXIgbWF0aFNpZ24gPSBNYXRoLnNpZ24gfHwgcG9seWZpbGw7XG5cbmZ1bmN0aW9uIGdldEdlb21ldHJ5KHRhcmdldCwgaXNDb250YWluZXIpIHtcblx0LyoqXG5cdCAqIFdlIHdhbnQgdG8gaWdub3JlIHBhZGRpbmcgYW5kIHNjcm9sbGJhcnMgZm9yIGNvbnRhaW5lciBlbGVtZW50cy5cblx0ICogTW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL2dvby5nbC92T1pwYnpcblx0ICovXG5cdHZhciBoZWlnaHQgPSBpc0NvbnRhaW5lciA/IHRhcmdldC5ub2RlLmNsaWVudEhlaWdodCA6IHRhcmdldC5ub2RlLm9mZnNldEhlaWdodDtcblx0dmFyIHdpZHRoID0gaXNDb250YWluZXIgPyB0YXJnZXQubm9kZS5jbGllbnRXaWR0aCA6IHRhcmdldC5ub2RlLm9mZnNldFdpZHRoO1xuXG5cdHZhciBvZmZzZXRUb3AgPSAwO1xuXHR2YXIgb2Zmc2V0TGVmdCA9IDA7XG5cdHZhciBub2RlID0gdGFyZ2V0Lm5vZGU7XG5cblx0ZG8ge1xuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRUb3ApKSB7XG5cdFx0XHRvZmZzZXRUb3AgKz0gbm9kZS5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRMZWZ0KSkge1xuXHRcdFx0b2Zmc2V0TGVmdCArPSBub2RlLm9mZnNldExlZnQ7XG5cdFx0fVxuXHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0fSB3aGlsZSAobm9kZSlcblxuXHRyZXR1cm4ge1xuXHRcdGJvdW5kczoge1xuXHRcdFx0dG9wOiBvZmZzZXRUb3AsXG5cdFx0XHRyaWdodDogb2Zmc2V0TGVmdCArIHdpZHRoLFxuXHRcdFx0Ym90dG9tOiBvZmZzZXRUb3AgKyBoZWlnaHQsXG5cdFx0XHRsZWZ0OiBvZmZzZXRMZWZ0XG5cdFx0fSxcblx0XHRoZWlnaHQ6IGhlaWdodCxcblx0XHR3aWR0aDogd2lkdGhcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxlZChjb250YWluZXIpIHtcblx0dmFyIHRvcCwgbGVmdDtcblx0aWYgKGNvbnRhaW5lci5ub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHR0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcblx0fSBlbHNlIHtcblx0XHR0b3AgPSBjb250YWluZXIubm9kZS5zY3JvbGxUb3A7XG5cdFx0bGVmdCA9IGNvbnRhaW5lci5ub2RlLnNjcm9sbExlZnQ7XG5cdH1cblx0cmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfVxufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpIHtcblx0aWYgKCBlbGVtZW50ID09PSB2b2lkIDAgKSBlbGVtZW50ID0ge307XG5cblx0dmFyIGNvbnRhaW5lciA9IHRoaXMuc3RvcmUuY29udGFpbmVyc1tlbGVtZW50LmNvbnRhaW5lcklkXTtcblx0aWYgKCFjb250YWluZXIpIHsgcmV0dXJuIH1cblxuXHR2YXIgdmlld0ZhY3RvciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGVsZW1lbnQuY29uZmlnLnZpZXdGYWN0b3IpKTtcblx0dmFyIHZpZXdPZmZzZXQgPSBlbGVtZW50LmNvbmZpZy52aWV3T2Zmc2V0O1xuXG5cdHZhciBlbGVtZW50Qm91bmRzID0ge1xuXHRcdHRvcDogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMudG9wICsgZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdHJpZ2h0OiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy5yaWdodCAtIGVsZW1lbnQuZ2VvbWV0cnkud2lkdGggKiB2aWV3RmFjdG9yLFxuXHRcdGJvdHRvbTogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMuYm90dG9tIC0gZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdGxlZnQ6IGVsZW1lbnQuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBlbGVtZW50Lmdlb21ldHJ5LndpZHRoICogdmlld0ZhY3RvclxuXHR9O1xuXG5cdHZhciBjb250YWluZXJCb3VuZHMgPSB7XG5cdFx0dG9wOiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLnRvcCArIGNvbnRhaW5lci5zY3JvbGwudG9wICsgdmlld09mZnNldC50b3AsXG5cdFx0cmlnaHQ6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMucmlnaHQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgLSB2aWV3T2Zmc2V0LnJpZ2h0LFxuXHRcdGJvdHRvbTpcblx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMuYm90dG9tICsgY29udGFpbmVyLnNjcm9sbC50b3AgLSB2aWV3T2Zmc2V0LmJvdHRvbSxcblx0XHRsZWZ0OiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgKyB2aWV3T2Zmc2V0LmxlZnRcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdChlbGVtZW50Qm91bmRzLnRvcCA8IGNvbnRhaW5lckJvdW5kcy5ib3R0b20gJiZcblx0XHRcdGVsZW1lbnRCb3VuZHMucmlnaHQgPiBjb250YWluZXJCb3VuZHMubGVmdCAmJlxuXHRcdFx0ZWxlbWVudEJvdW5kcy5ib3R0b20gPiBjb250YWluZXJCb3VuZHMudG9wICYmXG5cdFx0XHRlbGVtZW50Qm91bmRzLmxlZnQgPCBjb250YWluZXJCb3VuZHMucmlnaHQpIHx8XG5cdFx0ZWxlbWVudC5zdHlsZXMucG9zaXRpb24gPT09ICdmaXhlZCdcblx0KVxufVxuXG5mdW5jdGlvbiBkZWxlZ2F0ZShcblx0ZXZlbnQsXG5cdGVsZW1lbnRzXG4pIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdGlmICggZXZlbnQgPT09IHZvaWQgMCApIGV2ZW50ID0geyB0eXBlOiAnaW5pdCcgfTtcblx0aWYgKCBlbGVtZW50cyA9PT0gdm9pZCAwICkgZWxlbWVudHMgPSB0aGlzLnN0b3JlLmVsZW1lbnRzO1xuXG5cdHJhZihmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHN0YWxlID0gZXZlbnQudHlwZSA9PT0gJ2luaXQnIHx8IGV2ZW50LnR5cGUgPT09ICdyZXNpemUnO1xuXG5cdFx0ZWFjaCh0aGlzJDEuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdFx0aWYgKHN0YWxlKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeSA9IGdldEdlb21ldHJ5LmNhbGwodGhpcyQxLCBjb250YWluZXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHNjcm9sbCA9IGdldFNjcm9sbGVkLmNhbGwodGhpcyQxLCBjb250YWluZXIpO1xuXHRcdFx0aWYgKGNvbnRhaW5lci5zY3JvbGwpIHtcblx0XHRcdFx0Y29udGFpbmVyLmRpcmVjdGlvbiA9IHtcblx0XHRcdFx0XHR4OiBtYXRoU2lnbihzY3JvbGwubGVmdCAtIGNvbnRhaW5lci5zY3JvbGwubGVmdCksXG5cdFx0XHRcdFx0eTogbWF0aFNpZ24oc2Nyb2xsLnRvcCAtIGNvbnRhaW5lci5zY3JvbGwudG9wKVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLnNjcm9sbCA9IHNjcm9sbDtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIER1ZSB0byBob3cgdGhlIHNlcXVlbmNlciBpcyBpbXBsZW1lbnRlZCwgaXTigJlzXG5cdFx0ICogaW1wb3J0YW50IHRoYXQgd2UgdXBkYXRlIHRoZSBzdGF0ZSBvZiBhbGxcblx0XHQgKiBlbGVtZW50cywgYmVmb3JlIGFueSBhbmltYXRpb24gbG9naWMgaXNcblx0XHQgKiBldmFsdWF0ZWQgKGluIHRoZSBzZWNvbmQgbG9vcCBiZWxvdykuXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGlmIChzdGFsZSkge1xuXHRcdFx0XHRlbGVtZW50Lmdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC52aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0fSk7XG5cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGVsZW1lbnQuc2VxdWVuY2UpIHtcblx0XHRcdFx0c2VxdWVuY2UuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YW5pbWF0ZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzJDEucHJpc3RpbmUgPSBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtU3VwcG9ydGVkKCkge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdHJldHVybiAndHJhbnNmb3JtJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNmb3JtJyBpbiBzdHlsZVxufVxuXG5mdW5jdGlvbiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblx0cmV0dXJuICd0cmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNpdGlvbicgaW4gc3R5bGVcbn1cblxudmFyIHZlcnNpb24gPSBcIjQuMC42XCI7XG5cbnZhciBib3VuZERlbGVnYXRlO1xudmFyIGJvdW5kRGVzdHJveTtcbnZhciBib3VuZFJldmVhbDtcbnZhciBib3VuZENsZWFuO1xudmFyIGJvdW5kU3luYztcbnZhciBjb25maWc7XG52YXIgZGVidWc7XG52YXIgaW5zdGFuY2U7XG5cbmZ1bmN0aW9uIFNjcm9sbFJldmVhbChvcHRpb25zKSB7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG5cdHZhciBpbnZva2VkV2l0aG91dE5ldyA9XG5cdFx0dHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8XG5cdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBTY3JvbGxSZXZlYWwucHJvdG90eXBlO1xuXG5cdGlmIChpbnZva2VkV2l0aG91dE5ldykge1xuXHRcdHJldHVybiBuZXcgU2Nyb2xsUmV2ZWFsKG9wdGlvbnMpXG5cdH1cblxuXHRpZiAoIVNjcm9sbFJldmVhbC5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgJ0luc3RhbnRpYXRpb24gZmFpbGVkLicsICdUaGlzIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR2YXIgYnVmZmVyO1xuXHR0cnkge1xuXHRcdGJ1ZmZlciA9IGNvbmZpZ1xuXHRcdFx0PyBkZWVwQXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpXG5cdFx0XHQ6IGRlZXBBc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsICdJbnZhbGlkIGNvbmZpZ3VyYXRpb24uJywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR0cnkge1xuXHRcdHZhciBjb250YWluZXIgPSAkKGJ1ZmZlci5jb250YWluZXIpWzBdO1xuXHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRjb25maWcgPSBidWZmZXI7XG5cblx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdGxvZ2dlci5jYWxsKFxuXHRcdFx0dGhpcyxcblx0XHRcdCdUaGlzIGRldmljZSBpcyBkaXNhYmxlZC4nLFxuXHRcdFx0KFwiZGVza3RvcDogXCIgKyAoY29uZmlnLmRlc2t0b3ApKSxcblx0XHRcdChcIm1vYmlsZTogXCIgKyAoY29uZmlnLm1vYmlsZSkpXG5cdFx0KTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRtb3VudC5zdWNjZXNzKCk7XG5cblx0dGhpcy5zdG9yZSA9IHtcblx0XHRjb250YWluZXJzOiB7fSxcblx0XHRlbGVtZW50czoge30sXG5cdFx0aGlzdG9yeTogW10sXG5cdFx0c2VxdWVuY2VzOiB7fVxuXHR9O1xuXG5cdHRoaXMucHJpc3RpbmUgPSB0cnVlO1xuXG5cdGJvdW5kRGVsZWdhdGUgPSBib3VuZERlbGVnYXRlIHx8IGRlbGVnYXRlLmJpbmQodGhpcyk7XG5cdGJvdW5kRGVzdHJveSA9IGJvdW5kRGVzdHJveSB8fCBkZXN0cm95LmJpbmQodGhpcyk7XG5cdGJvdW5kUmV2ZWFsID0gYm91bmRSZXZlYWwgfHwgcmV2ZWFsLmJpbmQodGhpcyk7XG5cdGJvdW5kQ2xlYW4gPSBib3VuZENsZWFuIHx8IGNsZWFuLmJpbmQodGhpcyk7XG5cdGJvdW5kU3luYyA9IGJvdW5kU3luYyB8fCBzeW5jLmJpbmQodGhpcyk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZWxlZ2F0ZScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZERlbGVnYXRlOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2Rlc3Ryb3knLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmREZXN0cm95OyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JldmVhbCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFJldmVhbDsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjbGVhbicsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZENsZWFuOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N5bmMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRTeW5jOyB9IH0pO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdHMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3ZlcnNpb24nLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbjsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdub29wJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9IH0pO1xuXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlIDogKGluc3RhbmNlID0gdGhpcylcbn1cblxuU2Nyb2xsUmV2ZWFsLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNUcmFuc2Zvcm1TdXBwb3J0ZWQoKSAmJiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKTsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjcm9sbFJldmVhbCwgJ2RlYnVnJywge1xuXHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlYnVnIHx8IGZhbHNlOyB9LFxuXHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGRlYnVnID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IGRlYnVnKTsgfVxufSk7XG5cblNjcm9sbFJldmVhbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxSZXZlYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiEgQGxpY2Vuc2UgVGVhbGlnaHQgdjAuMy42XG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcbmltcG9ydCBpc0RvbU5vZGVMaXN0IGZyb20gJ2lzLWRvbS1ub2RlLWxpc3QnO1xuXG5mdW5jdGlvbiB0ZWFsaWdodCh0YXJnZXQsIGNvbnRleHQpIHtcbiAgaWYgKCBjb250ZXh0ID09PSB2b2lkIDAgKSBjb250ZXh0ID0gZG9jdW1lbnQ7XG5cbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7IHJldHVybiB0YXJnZXQuZmlsdGVyKGlzRG9tTm9kZSk7IH1cbiAgaWYgKGlzRG9tTm9kZSh0YXJnZXQpKSB7IHJldHVybiBbdGFyZ2V0XTsgfVxuICBpZiAoaXNEb21Ob2RlTGlzdCh0YXJnZXQpKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpOyB9XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBxdWVyeSA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHF1ZXJ5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFsaWdodDtcbiIsIi8qIVxuICogXG4gKiAgIHR5cGVkLmpzIC0gQSBKYXZhU2NyaXB0IFR5cGluZyBBbmltYXRpb24gTGlicmFyeVxuICogICBBdXRob3I6IE1hdHQgQm9sZHQgPG1lQG1hdHRib2xkdC5jb20+XG4gKiAgIFZlcnNpb246IHYyLjAuMTFcbiAqICAgVXJsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJvbGR0L3R5cGVkLmpzXG4gKiAgIExpY2Vuc2Uocyk6IE1JVFxuICogXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9pbml0aWFsaXplckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaHRtbFBhcnNlckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdC8qKlxuXHQgKiBXZWxjb21lIHRvIFR5cGVkLmpzIVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIEhUTUwgZWxlbWVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgVHlwZWQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFR5cGVkKGVsZW1lbnRJZCwgb3B0aW9ucykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR5cGVkKTtcblx0XG5cdCAgICAvLyBJbml0aWFsaXplIGl0IHVwXG5cdCAgICBfaW5pdGlhbGl6ZXJKcy5pbml0aWFsaXplci5sb2FkKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnRJZCk7XG5cdCAgICAvLyBBbGwgc3lzdGVtcyBnbyFcblx0ICAgIHRoaXMuYmVnaW4oKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRvZ2dsZSBzdGFydCgpIGFuZCBzdG9wKCkgb2YgdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoVHlwZWQsIFt7XG5cdCAgICBrZXk6ICd0b2dnbGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPyB0aGlzLnN0YXJ0KCkgOiB0aGlzLnN0b3AoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0b3AgdHlwaW5nIC8gYmFja3NwYWNpbmcgYW5kIGVuYWJsZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0b3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IHRydWU7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdGFydCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICghdGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSBmYWxzZTtcblx0ICAgICAgaWYgKHRoaXMucGF1c2UudHlwZXdyaXRlKSB7XG5cdCAgICAgICAgdGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRGVzdHJveSB0aGlzIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkZXN0cm95Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlc2V0IFR5cGVkIGFuZCBvcHRpb25hbGx5IHJlc3RhcnRzXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc3RhcnRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3Jlc2V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgdmFyIHJlc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXHRcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KCcnKTtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcblx0ICAgICAgICB0aGlzLmN1cnNvciA9IG51bGw7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zdHJQb3MgPSAwO1xuXHQgICAgICB0aGlzLmFycmF5UG9zID0gMDtcblx0ICAgICAgdGhpcy5jdXJMb29wID0gMDtcblx0ICAgICAgaWYgKHJlc3RhcnQpIHtcblx0ICAgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpO1xuXHQgICAgICAgIHRoaXMuYmVnaW4oKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmVnaW5zIHRoZSB0eXBpbmcgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmVnaW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyk7XG5cdCAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0ICAgICAgdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpO1xuXHQgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICBpZiAodGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cykgdGhpcy5iaW5kRm9jdXNFdmVudHMoKTtcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50LCBpZiB5ZXMgc3RhcnQgYnkgYmFja3NwYWNpbmcgdGhlIGRlZmF1bHQgbWVzc2FnZVxuXHQgICAgICAgIGlmICghX3RoaXMuY3VycmVudEVsQ29udGVudCB8fCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgX3RoaXMudHlwZXdyaXRlKF90aGlzLnN0cmluZ3NbX3RoaXMuc2VxdWVuY2VbX3RoaXMuYXJyYXlQb3NdXSwgX3RoaXMuc3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gU3RhcnQgdHlwaW5nXG5cdCAgICAgICAgICBfdGhpcy5iYWNrc3BhY2UoX3RoaXMuY3VycmVudEVsQ29udGVudCwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5zdGFydERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENhbGxlZCBmb3IgZWFjaCBjaGFyYWN0ZXIgdHlwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0eXBld3JpdGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpKSB7XG5cdCAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCk7XG5cdCAgICAgIHZhciBudW1DaGFycyA9IDE7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNvbnRhaW4gdHlwaW5nIGZ1bmN0aW9uIGluIGEgdGltZW91dCBodW1hbml6ZSdkIGRlbGF5XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIHNraXAgb3ZlciBhbnkgSFRNTCBjaGFyc1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci50eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczIpO1xuXHRcblx0ICAgICAgICB2YXIgcGF1c2VUaW1lID0gMDtcblx0ICAgICAgICB2YXIgc3Vic3RyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpO1xuXHQgICAgICAgIC8vIGNoZWNrIGZvciBhbiBlc2NhcGUgY2hhcmFjdGVyIGJlZm9yZSBhIHBhdXNlIHZhbHVlXG5cdCAgICAgICAgLy8gZm9ybWF0OiBcXF5cXGQrIC4uIGVnOiBeMTAwMCAuLiBzaG91bGQgYmUgYWJsZSB0byBwcmludCB0aGUgXiB0b28gdXNpbmcgXl5cblx0ICAgICAgICAvLyBzaW5nbGUgXiBhcmUgcmVtb3ZlZCBmcm9tIHN0cmluZ1xuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnXicpIHtcblx0ICAgICAgICAgIGlmICgvXlxcXlxcZCsvLnRlc3Qoc3Vic3RyKSkge1xuXHQgICAgICAgICAgICB2YXIgc2tpcCA9IDE7IC8vIHNraXAgYXQgbGVhc3QgMVxuXHQgICAgICAgICAgICBzdWJzdHIgPSAvXFxkKy8uZXhlYyhzdWJzdHIpWzBdO1xuXHQgICAgICAgICAgICBza2lwICs9IHN1YnN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHBhdXNlVGltZSA9IHBhcnNlSW50KHN1YnN0cik7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IHRydWU7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVyIGFuZCBwYXVzZSB2YWx1ZSBzbyB0aGV5J3JlIG5vdCBwcmludGVkXG5cdCAgICAgICAgICAgIGN1clN0cmluZyA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKSArIGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgc2tpcCk7XG5cdCAgICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGNoZWNrIGZvciBza2lwIGNoYXJhY3RlcnMgZm9ybWF0dGVkIGFzXG5cdCAgICAgICAgLy8gXCJ0aGlzIGlzIGEgYHN0cmluZyB0byBwcmludCBOT1dgIC4uLlwiXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdgJykge1xuXHQgICAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgbnVtQ2hhcnMpLmNoYXJBdCgwKSAhPT0gJ2AnKSB7XG5cdCAgICAgICAgICAgIG51bUNoYXJzKys7XG5cdCAgICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyBudW1DaGFycyA+IGN1clN0cmluZy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVycyBhbmQgYXBwZW5kIGFsbCB0aGUgc3RyaW5nIGluIGJldHdlZW5cblx0ICAgICAgICAgIHZhciBzdHJpbmdCZWZvcmVTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ1NraXBwZWQgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKHN0cmluZ0JlZm9yZVNraXAubGVuZ3RoICsgMSwgY3VyU3RyUG9zICsgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ0FmdGVyU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgbnVtQ2hhcnMgKyAxKTtcblx0ICAgICAgICAgIGN1clN0cmluZyA9IHN0cmluZ0JlZm9yZVNraXAgKyBzdHJpbmdTa2lwcGVkICsgc3RyaW5nQWZ0ZXJTa2lwO1xuXHQgICAgICAgICAgbnVtQ2hhcnMtLTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIHRpbWVvdXQgZm9yIGFueSBwYXVzZSBhZnRlciBhIGNoYXJhY3RlclxuXHQgICAgICAgIF90aGlzMi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAvLyBBY2NvdW50cyBmb3IgYmxpbmtpbmcgd2hpbGUgcGF1c2VkXG5cdCAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHRcblx0ICAgICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHNlbnRlbmNlIVxuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA+PSBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5kb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5rZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBlbmQgb2YgY2hhcmFjdGVyIHBhdXNlXG5cdCAgICAgICAgICBpZiAoX3RoaXMyLnRlbXBvcmFyeVBhdXNlKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHBhdXNlVGltZSk7XG5cdFxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENvbnRpbnVlIHRvIHRoZSBuZXh0IHN0cmluZyAmIGJlZ2luIHR5cGluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2tlZXBUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKSB7XG5cdCAgICAgIC8vIGNhbGwgYmVmb3JlIGZ1bmN0aW9ucyBpZiBhcHBsaWNhYmxlXG5cdCAgICAgIGlmIChjdXJTdHJQb3MgPT09IDApIHtcblx0ICAgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gc3RhcnQgdHlwaW5nIGVhY2ggbmV3IGNoYXIgaW50byBleGlzdGluZyBzdHJpbmdcblx0ICAgICAgLy8gY3VyU3RyaW5nOiBhcmcsIHRoaXMuZWwuaHRtbDogb3JpZ2luYWwgdGV4dCBpbnNpZGUgZWxlbWVudFxuXHQgICAgICBjdXJTdHJQb3MgKz0gbnVtQ2hhcnM7XG5cdCAgICAgIHZhciBuZXh0U3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KG5leHRTdHJpbmcpO1xuXHQgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICB0aGlzLnR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBXZSdyZSBkb25lIHR5cGluZyB0aGUgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkb25lVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXHRcblx0ICAgICAgLy8gZmlyZXMgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIC8vIGlzIHRoaXMgdGhlIGZpbmFsIHN0cmluZ1xuXHQgICAgICBpZiAodGhpcy5hcnJheVBvcyA9PT0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDEpIHtcblx0ICAgICAgICAvLyBjYWxsYmFjayB0aGF0IG9jY3VycyBvbiB0aGUgbGFzdCB0eXBlZCBzdHJpbmdcblx0ICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgLy8gcXVpdCBpZiB3ZSB3b250IGxvb3AgYmFja1xuXHQgICAgICAgIGlmICh0aGlzLmxvb3AgPT09IGZhbHNlIHx8IHRoaXMuY3VyTG9vcCA9PT0gdGhpcy5sb29wQ291bnQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXMzLmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgIH0sIHRoaXMuYmFja0RlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZXMgMSBjaGFyYWN0ZXIgYXQgYSB0aW1lXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja3NwYWNlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCkgcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTtcblx0XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7XG5cdFxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIuYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczQpO1xuXHQgICAgICAgIC8vIHJlcGxhY2UgdGV4dCB3aXRoIGJhc2UgdGV4dCArIHR5cGVkIGNoYXJhY3RlcnNcblx0ICAgICAgICB2YXIgY3VyU3RyaW5nQXRQb3NpdGlvbiA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICBfdGhpczQucmVwbGFjZVRleHQoY3VyU3RyaW5nQXRQb3NpdGlvbik7XG5cdFxuXHQgICAgICAgIC8vIGlmIHNtYXJ0QmFjayBpcyBlbmFibGVkXG5cdCAgICAgICAgaWYgKF90aGlzNC5zbWFydEJhY2tzcGFjZSkge1xuXHQgICAgICAgICAgLy8gdGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBjdXJyZW50IHN0cmluZyBpcyBlcXVhbCBvZiB0aGUgc2FtZSBwYXJ0IG9mIHRoZSBuZXcgc3RyaW5nXG5cdCAgICAgICAgICB2YXIgbmV4dFN0cmluZyA9IF90aGlzNC5zdHJpbmdzW190aGlzNC5hcnJheVBvcyArIDFdO1xuXHQgICAgICAgICAgaWYgKG5leHRTdHJpbmcgJiYgY3VyU3RyaW5nQXRQb3NpdGlvbiA9PT0gbmV4dFN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKSkge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IGN1clN0clBvcztcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gMDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGlmIHRoZSBudW1iZXIgKGlkIG9mIGNoYXJhY3RlciBpbiBjdXJyZW50IHN0cmluZykgaXNcblx0ICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHN0b3AgbnVtYmVyLCBrZWVwIGdvaW5nXG5cdCAgICAgICAgaWYgKGN1clN0clBvcyA+IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBzdWJ0cmFjdCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgICAgIF90aGlzNC5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoY3VyU3RyUG9zIDw9IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBpZiB0aGUgc3RvcCBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZCwgaW5jcmVhc2Vcblx0ICAgICAgICAgIC8vIGFycmF5IHBvc2l0aW9uIHRvIG5leHQgc3RyaW5nXG5cdCAgICAgICAgICBfdGhpczQuYXJyYXlQb3MrKztcblx0ICAgICAgICAgIC8vIFdoZW4gbG9vcGluZywgYmVnaW4gYXQgdGhlIGJlZ2lubmluZyBhZnRlciBiYWNrc3BhY2UgY29tcGxldGVcblx0ICAgICAgICAgIGlmIChfdGhpczQuYXJyYXlQb3MgPT09IF90aGlzNC5zdHJpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczQuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgICAgICBfdGhpczQub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5iZWdpbigpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnR5cGV3cml0ZShfdGhpczQuc3RyaW5nc1tfdGhpczQuc2VxdWVuY2VbX3RoaXM0LmFycmF5UG9zXV0sIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEZ1bGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcGxldGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXMubG9vcCkge1xuXHQgICAgICAgIHRoaXMuY3VyTG9vcCsrO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBIYXMgdGhlIHR5cGluZyBiZWVuIHN0b3BwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUeXBpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRQYXVzZVN0YXR1cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGlzVHlwaW5nKSB7XG5cdCAgICAgIHRoaXMucGF1c2UudHlwZXdyaXRlID0gaXNUeXBpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyaW5nID0gY3VyU3RyaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0clBvcyA9IGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFRvZ2dsZSB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQmxpbmtpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0b2dnbGVCbGlua2luZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQmxpbmtpbmcoaXNCbGlua2luZykge1xuXHQgICAgICBpZiAoIXRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIC8vIGlmIGluIHBhdXNlZCBzdGF0ZSwgZG9uJ3QgdG9nZ2xlIGJsaW5raW5nIGEgMm5kIHRpbWVcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvckJsaW5raW5nID09PSBpc0JsaW5raW5nKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yQmxpbmtpbmcgPSBpc0JsaW5raW5nO1xuXHQgICAgICBpZiAoaXNCbGlua2luZykge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNwZWVkIGluIE1TIHRvIHR5cGVcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2h1bWFuaXplcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaHVtYW5pemVyKHNwZWVkKSB7XG5cdCAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzcGVlZCAvIDIpICsgc3BlZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTaHVmZmxlIHRoZSBzZXF1ZW5jZSBvZiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NodWZmbGVTdHJpbmdzSWZOZWVkZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaHVmZmxlKSByZXR1cm47XG5cdCAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEFkZHMgYSBDU1MgY2xhc3MgdG8gZmFkZSBvdXQgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbml0RmFkZU91dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEZhZGVPdXQoKSB7XG5cdCAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5lbC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXM1LmFycmF5UG9zKys7XG5cdCAgICAgICAgX3RoaXM1LnJlcGxhY2VUZXh0KCcnKTtcblx0XG5cdCAgICAgICAgLy8gUmVzZXRzIGN1cnJlbnQgc3RyaW5nIGlmIGVuZCBvZiBsb29wIHJlYWNoZWRcblx0ICAgICAgICBpZiAoX3RoaXM1LnN0cmluZ3MubGVuZ3RoID4gX3RoaXM1LmFycmF5UG9zKSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzW190aGlzNS5zZXF1ZW5jZVtfdGhpczUuYXJyYXlQb3NdXSwgMCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbMF0sIDApO1xuXHQgICAgICAgICAgX3RoaXM1LmFycmF5UG9zID0gMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuZmFkZU91dERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2VzIGN1cnJlbnQgdGV4dCBpbiB0aGUgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBkZXBlbmRpbmcgb24gZWxlbWVudCB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVwbGFjZVRleHQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KHN0cikge1xuXHQgICAgICBpZiAodGhpcy5hdHRyKSB7XG5cdCAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLCBzdHIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHtcblx0ICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gc3RyO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdXNpbmcgaW5wdXQgZWxlbWVudHMsIGJpbmQgZm9jdXMgaW4gb3JkZXIgdG9cblx0ICAgICAqIHN0YXJ0IGFuZCBzdG9wIHRoZSBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiaW5kRm9jdXNFdmVudHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcblx0ICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAoIXRoaXMuaXNJbnB1dCkgcmV0dXJuO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBfdGhpczYuc3RvcCgpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoX3RoaXM2LmVsLnZhbHVlICYmIF90aGlzNi5lbC52YWx1ZS5sZW5ndGggIT09IDApIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgX3RoaXM2LnN0YXJ0KCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT24gaW5pdCwgaW5zZXJ0IHRoZSBjdXJzb3IgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luc2VydEN1cnNvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0Q3Vyc29yKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2hvd0N1cnNvcikgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSA9ICd0eXBlZC1jdXJzb3InO1xuXHQgICAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSB0aGlzLmN1cnNvckNoYXI7XG5cdCAgICAgIHRoaXMuZWwucGFyZW50Tm9kZSAmJiB0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLCB0aGlzLmVsLm5leHRTaWJsaW5nKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBUeXBlZDtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFR5cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfZGVmYXVsdHNKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHNKcyk7XG5cdFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIEluaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBJbml0aWFsaXplcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbml0aWFsaXplcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSW5pdGlhbGl6ZXIsIFt7XG5cdCAgICBrZXk6ICdsb2FkJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIExvYWQgdXAgZGVmYXVsdHMgJiBvcHRpb25zIG9uIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gaW5zdGFuY2Ugb2YgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoc2VsZiwgb3B0aW9ucywgZWxlbWVudElkKSB7XG5cdCAgICAgIC8vIGNob3NlbiBlbGVtZW50IHRvIG1hbmlwdWxhdGUgdGV4dFxuXHQgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJZCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50SWQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuZWwgPSBlbGVtZW50SWQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHNlbGYub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdHNKczJbJ2RlZmF1bHQnXSwgb3B0aW9ucyk7XG5cdFxuXHQgICAgICAvLyBhdHRyaWJ1dGUgdG8gdHlwZSBpbnRvXG5cdCAgICAgIHNlbGYuaXNJbnB1dCA9IHNlbGYuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnO1xuXHQgICAgICBzZWxmLmF0dHIgPSBzZWxmLm9wdGlvbnMuYXR0cjtcblx0ICAgICAgc2VsZi5iaW5kSW5wdXRGb2N1c0V2ZW50cyA9IHNlbGYub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cztcblx0XG5cdCAgICAgIC8vIHNob3cgY3Vyc29yXG5cdCAgICAgIHNlbGYuc2hvd0N1cnNvciA9IHNlbGYuaXNJbnB1dCA/IGZhbHNlIDogc2VsZi5vcHRpb25zLnNob3dDdXJzb3I7XG5cdFxuXHQgICAgICAvLyBjdXN0b20gY3Vyc29yXG5cdCAgICAgIHNlbGYuY3Vyc29yQ2hhciA9IHNlbGYub3B0aW9ucy5jdXJzb3JDaGFyO1xuXHRcblx0ICAgICAgLy8gSXMgdGhlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICBzZWxmLmN1cnNvckJsaW5raW5nID0gdHJ1ZTtcblx0XG5cdCAgICAgIC8vIHRleHQgY29udGVudCBvZiBlbGVtZW50XG5cdCAgICAgIHNlbGYuZWxDb250ZW50ID0gc2VsZi5hdHRyID8gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKSA6IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgICAvLyBodG1sIG9yIHBsYWluIHRleHRcblx0ICAgICAgc2VsZi5jb250ZW50VHlwZSA9IHNlbGYub3B0aW9ucy5jb250ZW50VHlwZTtcblx0XG5cdCAgICAgIC8vIHR5cGluZyBzcGVlZFxuXHQgICAgICBzZWxmLnR5cGVTcGVlZCA9IHNlbGYub3B0aW9ucy50eXBlU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBhZGQgYSBkZWxheSBiZWZvcmUgdHlwaW5nIHN0YXJ0c1xuXHQgICAgICBzZWxmLnN0YXJ0RGVsYXkgPSBzZWxmLm9wdGlvbnMuc3RhcnREZWxheTtcblx0XG5cdCAgICAgIC8vIGJhY2tzcGFjaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYuYmFja1NwZWVkID0gc2VsZi5vcHRpb25zLmJhY2tTcGVlZDtcblx0XG5cdCAgICAgIC8vIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICAgIHNlbGYuc21hcnRCYWNrc3BhY2UgPSBzZWxmLm9wdGlvbnMuc21hcnRCYWNrc3BhY2U7XG5cdFxuXHQgICAgICAvLyBhbW91bnQgb2YgdGltZSB0byB3YWl0IGJlZm9yZSBiYWNrc3BhY2luZ1xuXHQgICAgICBzZWxmLmJhY2tEZWxheSA9IHNlbGYub3B0aW9ucy5iYWNrRGVsYXk7XG5cdFxuXHQgICAgICAvLyBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAgICBzZWxmLmZhZGVPdXQgPSBzZWxmLm9wdGlvbnMuZmFkZU91dDtcblx0ICAgICAgc2VsZi5mYWRlT3V0Q2xhc3MgPSBzZWxmLm9wdGlvbnMuZmFkZU91dENsYXNzO1xuXHQgICAgICBzZWxmLmZhZGVPdXREZWxheSA9IHNlbGYub3B0aW9ucy5mYWRlT3V0RGVsYXk7XG5cdFxuXHQgICAgICAvLyB2YXJpYWJsZSB0byBjaGVjayB3aGV0aGVyIHR5cGluZyBpcyBjdXJyZW50bHkgcGF1c2VkXG5cdCAgICAgIHNlbGYuaXNQYXVzZWQgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIGlucHV0IHN0cmluZ3Mgb2YgdGV4dFxuXHQgICAgICBzZWxmLnN0cmluZ3MgPSBzZWxmLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICByZXR1cm4gcy50cmltKCk7XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgLy8gZGl2IGNvbnRhaW5pbmcgc3RyaW5nc1xuXHQgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChzZWxmLnN0cmluZ3NFbGVtZW50KSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzID0gW107XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgICAgIHZhciBzdHJpbmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHNlbGYuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pO1xuXHQgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIGlmIChzdHJpbmdzTGVuZ3RoKSB7XG5cdCAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3NMZW5ndGg7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICB2YXIgc3RyaW5nRWwgPSBzdHJpbmdzW2ldO1xuXHQgICAgICAgICAgICBzZWxmLnN0cmluZ3MucHVzaChzdHJpbmdFbC5pbm5lckhUTUwudHJpbSgpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNoYXJhY3RlciBudW1iZXIgcG9zaXRpb24gb2YgY3VycmVudCBzdHJpbmdcblx0ICAgICAgc2VsZi5zdHJQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gY3VycmVudCBhcnJheSBwb3NpdGlvblxuXHQgICAgICBzZWxmLmFycmF5UG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGluZGV4IG9mIHN0cmluZyB0byBzdG9wIGJhY2tzcGFjaW5nIG9uXG5cdCAgICAgIHNlbGYuc3RvcE51bSA9IDA7XG5cdFxuXHQgICAgICAvLyBMb29waW5nIGxvZ2ljXG5cdCAgICAgIHNlbGYubG9vcCA9IHNlbGYub3B0aW9ucy5sb29wO1xuXHQgICAgICBzZWxmLmxvb3BDb3VudCA9IHNlbGYub3B0aW9ucy5sb29wQ291bnQ7XG5cdCAgICAgIHNlbGYuY3VyTG9vcCA9IDA7XG5cdFxuXHQgICAgICAvLyBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2h1ZmZsZSA9IHNlbGYub3B0aW9ucy5zaHVmZmxlO1xuXHQgICAgICAvLyB0aGUgb3JkZXIgb2Ygc3RyaW5nc1xuXHQgICAgICBzZWxmLnNlcXVlbmNlID0gW107XG5cdFxuXHQgICAgICBzZWxmLnBhdXNlID0ge1xuXHQgICAgICAgIHN0YXR1czogZmFsc2UsXG5cdCAgICAgICAgdHlwZXdyaXRlOiB0cnVlLFxuXHQgICAgICAgIGN1clN0cmluZzogJycsXG5cdCAgICAgICAgY3VyU3RyUG9zOiAwXG5cdCAgICAgIH07XG5cdFxuXHQgICAgICAvLyBXaGVuIHRoZSB0eXBpbmcgaXMgY29tcGxldGUgKHdoZW4gbm90IGxvb3BlZClcblx0ICAgICAgc2VsZi50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gU2V0IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3RyaW5ncyBhcmUgdHlwZWRcblx0ICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnN0cmluZ3MpIHtcblx0ICAgICAgICBzZWxmLnNlcXVlbmNlW2ldID0gaTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gSWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50XG5cdCAgICAgIHNlbGYuY3VycmVudEVsQ29udGVudCA9IHRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKTtcblx0XG5cdCAgICAgIHNlbGYuYXV0b0luc2VydENzcyA9IHNlbGYub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzO1xuXHRcblx0ICAgICAgdGhpcy5hcHBlbmRBbmltYXRpb25Dc3Moc2VsZik7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q3VycmVudEVsQ29udGVudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKSB7XG5cdCAgICAgIHZhciBlbENvbnRlbnQgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuYXR0cikge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cik7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0lucHV0KSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC52YWx1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmlubmVySFRNTDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnRleHRDb250ZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBlbENvbnRlbnQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYXBwZW5kQW5pbWF0aW9uQ3NzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRBbmltYXRpb25Dc3Moc2VsZikge1xuXHQgICAgICB2YXIgY3NzRGF0YU5hbWUgPSAnZGF0YS10eXBlZC1qcy1jc3MnO1xuXHQgICAgICBpZiAoIXNlbGYuYXV0b0luc2VydENzcykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoIXNlbGYuc2hvd0N1cnNvciAmJiAhc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbJyArIGNzc0RhdGFOYW1lICsgJ10nKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgICAgY3NzLnNldEF0dHJpYnV0ZShjc3NEYXRhTmFtZSwgdHJ1ZSk7XG5cdFxuXHQgICAgICB2YXIgaW5uZXJDc3MgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuc2hvd0N1cnNvcikge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5rLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGNzcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgY3NzLmlubmVySFRNTCA9IGlubmVyQ3NzO1xuXHQgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSW5pdGlhbGl6ZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBJbml0aWFsaXplcjtcblx0dmFyIGluaXRpYWxpemVyID0gbmV3IEluaXRpYWxpemVyKCk7XG5cdGV4cG9ydHMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIERlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBUeXBlZCBkZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0cmluZ3Mgc3RyaW5ncyB0byBiZSB0eXBlZFxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJpbmdzRWxlbWVudCBJRCBvZiBlbGVtZW50IGNvbnRhaW5pbmcgc3RyaW5nIGNoaWxkcmVuXG5cdCAgICovXG5cdCAgc3RyaW5nczogWydUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uJywgJ1lvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz8nLCAnVXNlIHlvdXIgb3duIScsICdIYXZlIGEgZ3JlYXQgZGF5ISddLFxuXHQgIHN0cmluZ3NFbGVtZW50OiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVNwZWVkIHR5cGUgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgdHlwZVNwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnREZWxheSB0aW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHN0YXJ0RGVsYXk6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrU3BlZWQgYmFja3NwYWNpbmcgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja1NwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNtYXJ0QmFja3NwYWNlIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICovXG5cdCAgc21hcnRCYWNrc3BhY2U6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2h1ZmZsZSBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICovXG5cdCAgc2h1ZmZsZTogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrRGVsYXkgdGltZSBiZWZvcmUgYmFja3NwYWNpbmcgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja0RlbGF5OiA3MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dCBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmYWRlT3V0Q2xhc3MgY3NzIGNsYXNzIGZvciBmYWRlIGFuaW1hdGlvblxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dERlbGF5IEZhZGUgb3V0IGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGZhZGVPdXQ6IGZhbHNlLFxuXHQgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0Jyxcblx0ICBmYWRlT3V0RGVsYXk6IDUwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBsb29wIGxvb3Agc3RyaW5nc1xuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb29wQ291bnQgYW1vdW50IG9mIGxvb3BzXG5cdCAgICovXG5cdCAgbG9vcDogZmFsc2UsXG5cdCAgbG9vcENvdW50OiBJbmZpbml0eSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaG93Q3Vyc29yIHNob3cgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnNvckNoYXIgY2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1dG9JbnNlcnRDc3MgaW5zZXJ0IENTUyBmb3IgY3Vyc29yIGFuZCBmYWRlT3V0IGludG8gSFRNTCA8aGVhZD5cblx0ICAgKi9cblx0ICBzaG93Q3Vyc29yOiB0cnVlLFxuXHQgIGN1cnNvckNoYXI6ICd8Jyxcblx0ICBhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0ciBhdHRyaWJ1dGUgZm9yIHR5cGluZ1xuXHQgICAqIEV4OiBpbnB1dCBwbGFjZWhvbGRlciwgdmFsdWUsIG9yIGp1c3QgSFRNTCB0ZXh0XG5cdCAgICovXG5cdCAgYXR0cjogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBiaW5kSW5wdXRGb2N1c0V2ZW50cyBiaW5kIHRvIGZvY3VzIGFuZCBibHVyIGlmIGVsIGlzIHRleHQgaW5wdXRcblx0ICAgKi9cblx0ICBiaW5kSW5wdXRGb2N1c0V2ZW50czogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50VHlwZSAnaHRtbCcgb3IgJ251bGwnIGZvciBwbGFpbnRleHRcblx0ICAgKi9cblx0ICBjb250ZW50VHlwZTogJ2h0bWwnLFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgaXQgYmVnaW5zIHR5cGluZ1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkJlZ2luOiBmdW5jdGlvbiBvbkJlZ2luKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGwgdHlwaW5nIGlzIGNvbXBsZXRlXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBwcmVTdHJpbmdUeXBlZDogZnVuY3Rpb24gcHJlU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0cmluZ1R5cGVkOiBmdW5jdGlvbiBvblN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogRHVyaW5nIGxvb3BpbmcsIGFmdGVyIGxhc3Qgc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGZ1bmN0aW9uIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUGF1c2VkOiBmdW5jdGlvbiBvblR5cGluZ1BhdXNlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdSZXN1bWVkOiBmdW5jdGlvbiBvblR5cGluZ1Jlc3VtZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciByZXNldFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblJlc2V0OiBmdW5jdGlvbiBvblJlc2V0KHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdG9wXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RhcnRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGRlc3Ryb3lcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koc2VsZikge31cblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIFRPRE86IFRoZXNlIG1ldGhvZHMgY2FuIHByb2JhYmx5IGJlIGNvbWJpbmVkIHNvbWVob3dcblx0ICogUGFyc2UgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIEhUTUxQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEhUTUxQYXJzZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFBhcnNlcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSFRNTFBhcnNlciwgW3tcblx0ICAgIGtleTogJ3R5cGVIdG1sQ2hhcnMnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVHlwZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc8JyB8fCBjdXJDaGFyID09PSAnJicpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc8Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJz4nO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnOyc7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyAxID4gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZSBIVE1MIHRhZ3MgYW5kIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja1NwYWNlSHRtbENoYXJzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nIHx8IGN1ckNoYXIgPT09ICc7Jykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPCc7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICcmJztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zIC0gMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA8IDApIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSFRNTFBhcnNlcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhUTUxQYXJzZXI7XG5cdHZhciBodG1sUGFyc2VyID0gbmV3IEhUTUxQYXJzZXIoKTtcblx0ZXhwb3J0cy5odG1sUGFyc2VyID0gaHRtbFBhcnNlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9