module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _SelectPage = __webpack_require__(66);

	var _SelectPage2 = _interopRequireDefault(_SelectPage);

	var _GuidePage = __webpack_require__(76);

	var _GuidePage2 = _interopRequireDefault(_GuidePage);

	var _iosNew = __webpack_require__(82);

	var _iosNew2 = _interopRequireDefault(_iosNew);

	var _iosExisting = __webpack_require__(83);

	var _iosExisting2 = _interopRequireDefault(_iosExisting);

	var _androidNew = __webpack_require__(84);

	var _androidNew2 = _interopRequireDefault(_androidNew);

	var _androidExisting = __webpack_require__(85);

	var _androidExisting2 = _interopRequireDefault(_androidExisting);

	var _jsNew = __webpack_require__(86);

	var _jsNew2 = _interopRequireDefault(_jsNew);

	var _jsExisting = __webpack_require__(87);

	var _jsExisting2 = _interopRequireDefault(_jsExisting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = {
	  ios: {
	    new: _iosNew2.default,
	    existing: _iosExisting2.default
	  },
	  android: {
	    new: _androidNew2.default,
	    existing: _androidExisting2.default
	  },
	  js: {
	    new: _jsNew2.default,
	    existing: _jsExisting2.default
	  }
	};

	var GetStarted = function (_React$Component) {
	  _inherits(GetStarted, _React$Component);

	  function GetStarted(props) {
	    _classCallCheck(this, GetStarted);

	    var _this = _possibleConstructorReturn(this, (GetStarted.__proto__ || Object.getPrototypeOf(GetStarted)).call(this, props));

	    var sdk = props.sdk,
	        hideSDKTabs = props.hideSDKTabs;
	    var project = props.project;

	    if (!sdk && project) {
	      throw Error('[skygear-getstarted] Error: SDK not specified');
	    }
	    if (sdk && !Page[sdk]) {
	      throw Error('[skygear-getstarted] No such SDK: ' + sdk);
	    }
	    if (project && !Page[sdk][project]) {
	      throw Error('[skygear-getstarted] No such project: ' + project);
	    }
	    if (sdk && !project) {
	      project = 'new';
	    }
	    _this.state = { sdk: sdk, project: project, hideSDKTabs: hideSDKTabs };
	    return _this;
	  }

	  _createClass(GetStarted, [{
	    key: 'render',
	    value: function render() {
	      var self = this;
	      var className = this.props.className;
	      var _state = this.state,
	          sdk = _state.sdk,
	          project = _state.project,
	          hideSDKTabs = _state.hideSDKTabs;

	      var fontCSS = '@import url("//fonts.googleapis.com/css?family=Lato:400,700");';
	      var guideContent = Page[sdk] && Page[sdk][project];
	      var Template = guideContent ? _GuidePage2.default : _SelectPage2.default;
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement(
	          _radium.StyleRoot,
	          null,
	          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: fontCSS } }),
	          _react2.default.createElement(Template, {
	            sdk: sdk,
	            project: project,
	            hideSDKTabs: hideSDKTabs,
	            guideContent: guideContent,
	            setSDK: function setSDK(targetSDK) {
	              return self.setState({ sdk: targetSDK });
	            },
	            setProject: function setProject(targetProject) {
	              return self.setState({ project: targetProject });
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return GetStarted;
	}(_react2.default.Component);

	exports.default = GetStarted;


	GetStarted.propTypes = {
	  sdk: _react2.default.PropTypes.string,
	  project: _react2.default.PropTypes.string,
	  hideSDKTabs: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enhancer = __webpack_require__(4);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _plugins = __webpack_require__(50);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _style = __webpack_require__(62);

	var _style2 = _interopRequireDefault(_style);

	var _styleRoot = __webpack_require__(63);

	var _styleRoot2 = _interopRequireDefault(_styleRoot);

	var _getState = __webpack_require__(46);

	var _getState2 = _interopRequireDefault(_getState);

	var _keyframes = __webpack_require__(65);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	var _resolveStyles = __webpack_require__(6);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function Radium(ComposedComponent) {
	  return (0, _enhancer2.default)(ComposedComponent);
	}

	Radium.Plugins = _plugins2.default;
	Radium.Style = _style2.default;
	Radium.StyleRoot = _styleRoot2.default;
	Radium.getState = _getState2.default;
	Radium.keyframes = _keyframes2.default;

	if (process.env.NODE_ENV !== 'production') {
	  Radium.TestMode = {
	    clearState: _resolveStyles.__clearStateForTests,
	    disable: _resolveStyles.__setTestMode.bind(null, false),
	    enable: _resolveStyles.__setTestMode.bind(null, true)
	  };
	}

	exports.default = Radium;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

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
	function defaultClearTimeout() {
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
	})();
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = enhanceWithRadium;

	var _react = __webpack_require__(1);

	var _styleKeeper = __webpack_require__(5);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _resolveStyles = __webpack_require__(6);

	var _resolveStyles2 = _interopRequireDefault(_resolveStyles);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

	function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	}

	function isStateless(component) {
	  return !component.render && !(component.prototype && component.prototype.render);
	}

	function enhanceWithRadium(configOrComposedComponent) {
	  var _class, _temp;

	  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function v(configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  var component = configOrComposedComponent;
	  var ComposedComponent = component;

	  // Handle stateless components
	  if (isStateless(ComposedComponent)) {
	    ComposedComponent = function (_Component) {
	      _inherits(ComposedComponent, _Component);

	      function ComposedComponent() {
	        _classCallCheck(this, ComposedComponent);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      ComposedComponent.prototype.render = function render() {
	        return component(this.props, this.context);
	      };

	      return ComposedComponent;
	    }(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }

	  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);

	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));

	      _this2.state = _this2.state || {};
	      _this2.state._radiumStyleState = {};
	      _this2._radiumIsMounted = true;
	      return _this2;
	    }

	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }

	      this._radiumIsMounted = false;

	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }

	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };

	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }

	      var newContext = _extends({}, superChildContext);

	      if (this.props.radiumConfig) {
	        newContext._radiumConfig = this.props.radiumConfig;
	      }

	      return newContext;
	    };

	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }

	      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
	    };

	    return RadiumEnhancer;
	  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated.
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

	  copyProperties(component, RadiumEnhancer);

	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }

	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }

	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  return RadiumEnhancer;
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var StyleKeeper = function () {
	  function StyleKeeper(userAgent) {
	    _classCallCheck(this, StyleKeeper);

	    this._userAgent = userAgent;
	    this._listeners = [];
	    this._cssSet = {};
	  }

	  StyleKeeper.prototype.subscribe = function subscribe(listener) {
	    var _this = this;

	    if (this._listeners.indexOf(listener) === -1) {
	      this._listeners.push(listener);
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        var listenerIndex = _this._listeners.indexOf(listener);
	        if (listenerIndex > -1) {
	          _this._listeners.splice(listenerIndex, 1);
	        }
	      }
	    };
	  };

	  StyleKeeper.prototype.addCSS = function addCSS(css) {
	    var _this2 = this;

	    if (!this._cssSet[css]) {
	      this._cssSet[css] = true;
	      this._emitChange();
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        delete _this2._cssSet[css];
	        _this2._emitChange();
	      }
	    };
	  };

	  StyleKeeper.prototype.getCSS = function getCSS() {
	    return Object.keys(this._cssSet).join('\n');
	  };

	  StyleKeeper.prototype._emitChange = function _emitChange() {
	    this._listeners.forEach(function (listener) {
	      return listener();
	    });
	  };

	  return StyleKeeper;
	}();

	exports.default = StyleKeeper;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _appendImportantToEachValue = __webpack_require__(7);

	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);

	var _cssRuleSetToString = __webpack_require__(10);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _getState = __webpack_require__(46);

	var _getState2 = _interopRequireDefault(_getState);

	var _getStateKey = __webpack_require__(47);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var _hash = __webpack_require__(48);

	var _hash2 = _interopRequireDefault(_hash);

	var _mergeStyles = __webpack_require__(49);

	var _plugins = __webpack_require__(50);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _exenv = __webpack_require__(60);

	var _exenv2 = _interopRequireDefault(_exenv);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var DEFAULT_CONFIG = {
	  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.visited, _plugins2.default.removeNestedStyles, _plugins2.default.prefix, _plugins2.default.checkProps]
	};

	// Gross
	var globalState = {};

	// Declare early for recursive helpers.
	var resolveStyles = null;

	var _shouldResolveStyles = function _shouldResolveStyles(component) {
	  return component.type && !component.type._isRadiumEnhanced;
	};

	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;

	  if (!children) {
	    return children;
	  }

	  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }

	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2.default.isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap, true);
	      }
	      return result;
	    };
	  }

	  if (_react2.default.Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2.default.Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
	  }

	  return _react2.default.Children.map(children, function (child) {
	    if (_react2.default.isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap, true);
	    }

	    return child;
	  });
	};

	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;

	  var newProps = props;

	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }

	    var propValue = props[prop];
	    if (_react2.default.isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
	    }
	  });

	  return newProps;
	};

	var _buildGetKey = function _buildGetKey(_ref3) {
	  var componentName = _ref3.componentName;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var renderedElement = _ref3.renderedElement;

	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = (0, _getStateKey2.default)(originalKey);

	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }

	    alreadyGotKey = true;

	    if (existingKeyMap[key]) {
	      var elementName = void 0;
	      if (typeof renderedElement.type === 'string') {
	        elementName = renderedElement.type;
	      } else if (renderedElement.type.constructor) {
	        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
	      }

	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
	    }

	    existingKeyMap[key] = true;

	    return key;
	  };

	  return getKey;
	};

	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }

	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	var _runPlugins = function _runPlugins(_ref4) {
	  var component = _ref4.component;
	  var config = _ref4.config;
	  var existingKeyMap = _ref4.existingKeyMap;
	  var props = _ref4.props;
	  var renderedElement = _ref4.renderedElement;

	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }

	  var newProps = props;

	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

	  var componentName = component.constructor.displayName || component.constructor.name;
	  var getKey = _buildGetKey({ renderedElement: renderedElement, existingKeyMap: existingKeyMap, componentName: componentName });
	  var getComponentField = function getComponentField(key) {
	    return component[key];
	  };
	  var getGlobalState = function getGlobalState(key) {
	    return globalState[key];
	  };
	  var componentGetState = function componentGetState(stateKey, elementKey) {
	    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
	  };
	  var setState = function setState(stateKey, value, elementKey) {
	    return _setStyleState(component, elementKey || getKey(), stateKey, value);
	  };

	  var addCSS = function addCSS(css) {
	    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
	    if (!styleKeeper) {
	      if (__isTestModeEnabled) {
	        return {
	          remove: function remove() {}
	        };
	      }

	      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
	    }

	    return styleKeeper.addCSS(css);
	  };

	  var newStyle = props.style;

	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2.default,
	      addCSS: addCSS,
	      appendImportantToEachValue: _appendImportantToEachValue2.default,
	      componentName: componentName,
	      config: config,
	      cssRuleSetToString: _cssRuleSetToString2.default,
	      getComponentField: getComponentField,
	      getGlobalState: getGlobalState,
	      getState: componentGetState,
	      hash: _hash2.default,
	      mergeStyles: _mergeStyles.mergeStyles,
	      props: newProps,
	      setState: setState,
	      isNestedStyle: _mergeStyles.isNestedStyle,
	      style: newStyle
	    }) || {};

	    newStyle = result.style || newStyle;

	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });

	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });

	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }

	  return newProps;
	};

	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { 'data-radium': true });
	  }

	  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
	renderedElement) {
	  var config = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_CONFIG : arguments[2];
	  var existingKeyMap = arguments[3];
	  var shouldCheckBeforeResolve = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props['data-radium'] ||

	  // Bail if this element is a radium enhanced element, because if it is,
	  // then it will take care of resolving its own styles.
	  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
	    return renderedElement;
	  }

	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });

	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });

	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });

	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }

	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};

	// Only for use by tests
	var __isTestModeEnabled = false;
	if (process.env.NODE_ENV !== 'production') {
	  resolveStyles.__clearStateForTests = function () {
	    globalState = {};
	  };
	  resolveStyles.__setTestMode = function (isEnabled) {
	    __isTestModeEnabled = isEnabled;
	  };
	}

	exports.default = resolveStyles;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;

	var _appendPxIfNeeded = __webpack_require__(8);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _mapObject = __webpack_require__(9);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendPxIfNeeded;

	// Copied from https://github.com/facebook/react/blob/
	// 102cd291899f9942a76c40a0e78920a6fe544dc1/
	// src/renderers/dom/shared/CSSProperty.js
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	function appendPxIfNeeded(propertyName, value) {
	  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
	  return needsPxSuffix ? value + 'px' : value;
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapObject;
	function mapObject(object, mapper) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[key] = mapper(object[key], key);
	    return result;
	  }, {});
	}
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cssRuleSetToString;

	var _appendPxIfNeeded = __webpack_require__(8);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _camelCasePropsToDashCase = __webpack_require__(11);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _mapObject = __webpack_require__(9);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	var _prefixer = __webpack_require__(12);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function createMarkupForStyles(style) {
	  return Object.keys(style).map(function (property) {
	    return property + ': ' + style[property] + ';';
	  }).join('\n');
	}

	function cssRuleSetToString(selector, rules, userAgent) {
	  if (!rules) {
	    return '';
	  }

	  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
	    return (0, _appendPxIfNeeded2.default)(key, value);
	  });
	  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
	  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
	  var serializedRules = createMarkupForStyles(cssPrefixedRules);

	  return selector + '{' + serializedRules + '}';
	}
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _camelCaseRegex = /([a-z])?([A-Z])/g;

	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};

	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);

	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }

	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};

	exports.default = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	}; /**
	    * Based on https://github.com/jsstyles/css-vendor, but without having to
	    * convert between different cases all the time.
	    *
	    * 
	    */

	exports.getPrefixedKeyframes = getPrefixedKeyframes;
	exports.getPrefixedStyle = getPrefixedStyle;

	var _inlineStylePrefixer = __webpack_require__(13);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
	      value = value.toString();
	    }

	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}

	var _hasWarnedAboutUserAgent = false;
	var _lastUserAgent = void 0;
	var _cachedPrefixer = void 0;

	function getPrefixer(userAgent) {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      _hasWarnedAboutUserAgent = true;
	    }
	  }

	  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
	    if (actualUserAgent === 'all') {
	      _cachedPrefixer = {
	        prefix: _inlineStylePrefixer2.default.prefixAll,
	        prefixedKeyframes: 'keyframes'
	      };
	    } else {
	      _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
	    }
	    _lastUserAgent = actualUserAgent;
	  }
	  return _cachedPrefixer;
	}

	function getPrefixedKeyframes(userAgent) {
	  return getPrefixer(userAgent).prefixedKeyframes;
	}

	// Returns a new style object with vendor prefixes added to property names
	// and values.
	function getPrefixedStyle(style, userAgent) {
	  var styleWithFallbacks = transformValues(style);
	  var prefixer = getPrefixer(userAgent);
	  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
	  return prefixedStyle;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	var _inlineStylePrefixAll = __webpack_require__(14);

	var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

	var _utilsGetBrowserInformation = __webpack_require__(29);

	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);

	var _utilsGetPrefixedKeyframes = __webpack_require__(32);

	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);

	var _utilsCapitalizeString = __webpack_require__(33);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(34);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _prefixProps = __webpack_require__(35);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _pluginsCalc = __webpack_require__(36);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(38);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(39);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(40);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(41);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(42);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(44);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(45);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];

	var Prefixer = function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }

	    var data = this._browserInfo.browser && _prefixProps2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */

	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _inlineStylePrefixAll2['default'])(styles);
	      }

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      styles = (0, _utilsAssign2['default'])({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }

	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });

	      return styles;
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _inlineStylePrefixAll2['default'])(styles);
	    }
	  }]);

	  return Prefixer;
	}();

	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = prefixAll;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _prefixProps = __webpack_require__(15);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _utilsCapitalizeString = __webpack_require__(16);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(17);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _pluginsCalc = __webpack_require__(18);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(22);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(23);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(24);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(25);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(26);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(27);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(28);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'], _pluginsFlex2['default']];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */

	function prefixAll(styles) {
	  return Object.keys(styles).reduce(function (prefixedStyles, property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      prefixedStyles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
	        var properties = _prefixProps2['default'][prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          prefixedStyles[prefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	        }
	      });

	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return (0, _utilsAssign2['default'])(prefixedStyles, plugin(property, value));
	      });
	    }

	    return prefixedStyles;
	  }, styles);
	}

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "borderImage": true, "borderImageOutset": true, "borderImageRepeat": true, "borderImageSlice": true, "borderImageSource": true, "borderImageWidth": true, "tabSize": true, "objectFit": true, "objectPosition": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return Object.keys(extend).reduce(function (out, key) {
	    base[key] = extend[key];
	    return out;
	  }, {});
	};

	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsJoinPrefixedRules = __webpack_require__(19);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(21);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	function calc(property, value) {
	  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _camelToDashCase = __webpack_require__(20);

	var _camelToDashCase2 = _interopRequireDefault(_camelToDashCase);

	// returns a style object with a single concated prefixed value string

	exports['default'] = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return function () {
	    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  }();
	};

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsJoinPrefixedRules = __webpack_require__(19);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsCamelToDashCase = __webpack_require__(20);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsJoinPrefixedRules = __webpack_require__(19);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsJoinPrefixedRules = __webpack_require__(19);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(21);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && value.match(values) !== null) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(20);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(16);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsIsPrefixedValue = __webpack_require__(21);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var _prefixProps = __webpack_require__(15);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(',').filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _utilsIsPrefixedValue2['default'])(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2['default']).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2['default'][prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _utilsCamelToDashCase2['default'])(prop);

	        if (val.indexOf(dashCaseProperty) > -1) {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(20);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _bowser = __webpack_require__(30);

	var _bowser2 = _interopRequireDefault(_bowser);

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};

	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }

	  var info = _bowser2['default']._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (root, name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (true) __webpack_require__(31)(name, definition);else root[name] = definition();
	}(undefined, 'bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true;

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return match && match.length > 1 && match[1] || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return match && match.length > 1 && match[2] || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
	        likeAndroid = /like android/i.test(ua),
	        android = !likeAndroid && /android/i.test(ua),
	        nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
	        nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
	        chromeos = /CrOS/.test(ua),
	        silk = /silk/i.test(ua),
	        sailfish = /sailfish/i.test(ua),
	        tizen = /tizen/i.test(ua),
	        webos = /(web|hpw)os/i.test(ua),
	        windowsphone = /windows phone/i.test(ua),
	        samsungBrowser = /SamsungBrowser/i.test(ua),
	        windows = !windowsphone && /windows/i.test(ua),
	        mac = !iosdevice && !silk && /macintosh/i.test(ua),
	        linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
	        edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
	        versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
	        tablet = /tablet/i.test(ua),
	        mobile = !tablet && /[^-]mobi/i.test(ua),
	        xbox = /xbox/i.test(ua),
	        result;

	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera',
	        opera: t,
	        version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera',
	        opera: t,
	        version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android',
	        samsungBrowser: t,
	        version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast',
	        coast: t,
	        version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser',
	        yandexbrowser: t,
	        version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      };
	    } else if (/ucbrowser/i.test(ua)) {
	      result = {
	        name: 'UC Browser',
	        ucbrowser: t,
	        version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon',
	        maxthon: t,
	        version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany',
	        epiphany: t,
	        version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin',
	        puffin: t,
	        version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      };
	    } else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir',
	        sleipnir: t,
	        version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon',
	        kMeleon: t,
	        version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      };
	    } else if (windowsphone) {
	      result = {
	        name: 'Windows Phone',
	        windowsphone: t
	      };
	      if (edgeVersion) {
	        result.msedge = t;
	        result.version = edgeVersion;
	      } else {
	        result.msie = t;
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
	      }
	    } else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer',
	        msie: t,
	        version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      };
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome',
	        chromeos: t,
	        chromeBook: t,
	        chrome: t,
	        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge',
	        msedge: t,
	        version: edgeVersion
	      };
	    } else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi',
	        vivaldi: t,
	        version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (sailfish) {
	      result = {
	        name: 'Sailfish',
	        sailfish: t,
	        version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey',
	        seamonkey: t,
	        version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox',
	        firefox: t,
	        version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      };
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t;
	      }
	    } else if (silk) {
	      result = {
	        name: 'Amazon Silk',
	        silk: t,
	        version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS',
	        phantom: t,
	        version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS',
	        slimer: t,
	        version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      };
	    } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry',
	        blackberry: t,
	        version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      };
	    } else if (webos) {
	      result = {
	        name: 'WebOS',
	        webos: t,
	        version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t);
	    } else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada',
	        bada: t,
	        version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    } else if (tizen) {
	      result = {
	        name: 'Tizen',
	        tizen: t,
	        version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla',
	        qupzilla: t,
	        version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      };
	    } else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium',
	        chromium: t,
	        version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      };
	    } else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome',
	        chrome: t,
	        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      };
	    } else if (android) {
	      result = {
	        name: 'Android',
	        version: versionIdentifier
	      };
	    } else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari',
	        safari: t
	      };
	      if (versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (iosdevice) {
	      result = {
	        name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      };
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot',
	        googlebot: t,
	        version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      };
	    } else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	      };
	    }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink";
	        result.blink = t;
	      } else {
	        result.name = result.name || "Webkit";
	        result.webkit = t;
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier;
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko";
	      result.gecko = t;
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
	      result.android = t;
	    } else if (!result.windowsphone && !result.msedge && iosdevice) {
	      result[iosdevice] = t;
	      result.ios = t;
	    } else if (mac) {
	      result.mac = t;
	    } else if (xbox) {
	      result.xbox = t;
	    } else if (windows) {
	      result.windows = t;
	    } else if (linux) {
	      result.linux = t;
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || nexusTablet || iosdevice == 'ipad' || android && (osMajorVersion == 3 || osMajorVersion >= 4 && !mobile) || result.silk) {
	      result.tablet = t;
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || nexusMobile || result.blackberry || result.webos || result.bada) {
	      result.mobile = t;
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge || result.msie && result.version >= 10 || result.yandexbrowser && result.version >= 15 || result.vivaldi && result.version >= 1.0 || result.chrome && result.version >= 20 || result.samsungBrowser && result.version >= 4 || result.firefox && result.version >= 20.0 || result.safari && result.version >= 6 || result.opera && result.version >= 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 || result.blackberry && result.version >= 10.1 || result.chromium && result.version >= 20) {
	      result.a = t;
	    } else if (result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20.0 || result.safari && result.version < 6 || result.opera && result.version < 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 || result.chromium && result.version < 20) {
	      result.c = t;
	    } else result.x = t;

	    return result;
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem === 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  };

	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }

	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [],
	        i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }

	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);

	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");

	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });

	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      } else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      } else {
	        return -1;
	      }
	    }
	  }

	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;

	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void 0;
	    }

	    if (strictMode === void 0) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }

	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }

	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }

	    return strictMode; // not found
	  }

	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }

	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser;
	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
16,
/* 34 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};

	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 52, "userSelect": 52, "fontKerning": 32, "textEmphasisPosition": 52, "textEmphasis": 52, "textEmphasisStyle": 52, "textEmphasisColor": 52, "boxDecorationBreak": 52, "clipPath": 52, "maskImage": 52, "maskMode": 52, "maskRepeat": 52, "maskPosition": 52, "maskClip": 52, "maskOrigin": 52, "maskSize": 52, "maskComposite": 52, "mask": 52, "maskBorderSource": 52, "maskBorderMode": 52, "maskBorderSlice": 52, "maskBorderWidth": 52, "maskBorderOutset": 52, "maskBorderRepeat": 52, "maskBorder": 52, "maskType": 52, "textDecorationStyle": 52, "textDecorationSkip": 52, "textDecorationLine": 52, "textDecorationColor": 52, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 52, "breakBefore": 52, "breakInside": 52, "columnCount": 52, "columnFill": 52, "columnGap": 52, "columnRule": 52, "columnRuleColor": 52, "columnRuleStyle": 52, "columnRuleWidth": 52, "columns": 52, "columnSpan": 52, "columnWidth": 52 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 9.1, "userSelect": 9.1, "backdropFilter": 9.1, "fontKerning": 9.1, "scrollSnapType": 9.1, "scrollSnapPointsX": 9.1, "scrollSnapPointsY": 9.1, "scrollSnapDestination": 9.1, "scrollSnapCoordinate": 9.1, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 9.1, "clipPath": 9.1, "maskImage": 9.1, "maskMode": 9.1, "maskRepeat": 9.1, "maskPosition": 9.1, "maskClip": 9.1, "maskOrigin": 9.1, "maskSize": 9.1, "maskComposite": 9.1, "mask": 9.1, "maskBorderSource": 9.1, "maskBorderMode": 9.1, "maskBorderSlice": 9.1, "maskBorderWidth": 9.1, "maskBorderOutset": 9.1, "maskBorderRepeat": 9.1, "maskBorder": 9.1, "maskType": 9.1, "textDecorationStyle": 9.1, "textDecorationSkip": 9.1, "textDecorationLine": 9.1, "textDecorationColor": 9.1, "shapeImageThreshold": 9.1, "shapeImageMargin": 9.1, "shapeImageOutside": 9.1, "filter": 9, "hyphens": 9.1, "flowInto": 9.1, "flowFrom": 9.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 9.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 47, "userSelect": 47, "boxSizing": 28, "textAlignLast": 47, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 47, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 37, "userSelect": 37, "fontKerning": 19, "textEmphasisPosition": 37, "textEmphasis": 37, "textEmphasisStyle": 37, "textEmphasisColor": 37, "boxDecorationBreak": 37, "clipPath": 37, "maskImage": 37, "maskMode": 37, "maskRepeat": 37, "maskPosition": 37, "maskClip": 37, "maskOrigin": 37, "maskSize": 37, "maskComposite": 37, "mask": 37, "maskBorderSource": 37, "maskBorderMode": 37, "maskBorderSlice": 37, "maskBorderWidth": 37, "maskBorderOutset": 37, "maskBorderRepeat": 37, "maskBorder": 37, "maskType": 37, "filter": 37, "fontFeatureSettings": 37, "breakAfter": 37, "breakBefore": 37, "breakInside": 37, "columnCount": 37, "columnFill": 37, "columnGap": 37, "columnRule": 37, "columnRuleColor": 37, "columnRuleStyle": 37, "columnRuleWidth": 37, "columns": 37, "columnSpan": 37, "columnWidth": 37 }, "ie": { "gridTemplateRows": 11, "breakInside": 11, "transformOriginY": 9, "gridRowStart": 11, "gridColumn": 11, "regionFragment": 11, "breakBefore": 11, "userSelect": 11, "gridColumnEnd": 11, "gridRowEnd": 11, "gridTemplateColumns": 11, "gridColumnStart": 11, "gridArea": 11, "flexDirection": 10, "gridRowGap": 11, "gridTemplateAreas": 11, "gridAutoRows": 11, "gridRow": 11, "scrollSnapDestination": 11, "scrollSnapPointsY": 11, "touchAction": 10, "gridGap": 11, "gridColumnGap": 11, "wrapFlow": 11, "scrollSnapPointsX": 11, "flowFrom": 11, "transform": 9, "breakAfter": 11, "wrapMargin": 11, "scrollSnapCoordinate": 11, "flexWrap": 10, "scrollSnapType": 11, "flex": 10, "wrapThrough": 11, "gridAutoColumns": 11, "flexFlow": 10, "gridTemplate": 11, "hyphens": 11, "grid": 11, "transformOriginX": 9, "flowInto": 11, "transformOrigin": 9, "gridAutoFlow": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 47, "userSelect": 47, "fontKerning": 4.4, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_chr": { "appearance": 47, "userSelect": 47, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "textDecorationStyle": 47, "textDecorationSkip": 47, "textDecorationLine": 47, "textDecorationColor": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": { "borderImage": 5, "borderImageOutset": 5, "borderImageRepeat": 5, "borderImageSlice": 5, "borderImageSource": 5, "borderImageWidth": 5, "tabSize": 5, "objectFit": 5, "objectPosition": 5 } };
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	function calc(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, value.replace(/calc\(/g, css + 'calc(') + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 37 */
20,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'flex': true,
	  'inline-flex': true
	};

	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(33);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsUnprefixProperty = __webpack_require__(43);

	var _utilsUnprefixProperty2 = _interopRequireDefault(_utilsUnprefixProperty);

	var properties = { transition: true, transitionProperty: true };

	function transition(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var requiresPrefix = _ref2.requiresPrefix;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _utilsUnprefixProperty2['default'])(property);
	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _utilsCamelToDashCase2['default'])(prop);
	      });

	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            multipleValues[index] = val.replace(property, css + property) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });

	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object') return _ret.v;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};

	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	var properties = Object.keys(alternativeProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxIE(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var _utilsCamelToDashCase = __webpack_require__(37);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];

	var properties = Object.keys(alternativeProps).concat(otherProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxOld(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getStateKey = __webpack_require__(47);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);

	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};

	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var getStateKey = function getStateKey(elementKey) {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};

	exports.default = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hash;

	// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text) {
	  if (!text) {
	    return '';
	  }

	  var hashValue = 5381;
	  var index = text.length - 1;

	  while (index) {
	    hashValue = hashValue * 33 ^ text.charCodeAt(index);
	    index -= 1;
	  }

	  return (hashValue >>> 0).toString(16);
	}
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	function isNestedStyle(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return value && value.constructor === Object && value.toString === Object.prototype.toString;
	}

	// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	      return;
	    }

	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }

	    Object.keys(style).forEach(function (key) {
	      // Simple case, nothing nested
	      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
	        result[key] = style[key];
	        return;
	      }

	      // If nested media, don't merge the nested styles, append a space to the
	      // end (benign when converted to CSS). This way we don't end up merging
	      // media queries that appear later in the chain with those that appear
	      // earlier.
	      if (key.indexOf('@media') === 0) {
	        var newKey = key;
	        while (true) {
	          // eslint-disable-line no-constant-condition
	          newKey += ' ';
	          if (!result[newKey]) {
	            result[newKey] = style[key];
	            return;
	          }
	        }
	      }

	      // Merge all other nested styles recursively
	      result[key] = mergeStyles([result[key], style[key]]);
	    });
	  });

	  return result;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkPropsPlugin = __webpack_require__(51);

	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

	var _keyframesPlugin = __webpack_require__(52);

	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);

	var _mergeStyleArrayPlugin = __webpack_require__(53);

	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

	var _prefixPlugin = __webpack_require__(54);

	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

	var _removeNestedStylesPlugin = __webpack_require__(55);

	var _removeNestedStylesPlugin2 = _interopRequireDefault(_removeNestedStylesPlugin);

	var _resolveInteractionStylesPlugin = __webpack_require__(56);

	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

	var _resolveMediaQueriesPlugin = __webpack_require__(58);

	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

	var _visitedPlugin = __webpack_require__(59);

	var _visitedPlugin2 = _interopRequireDefault(_visitedPlugin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  checkProps: _checkPropsPlugin2.default,
	  keyframes: _keyframesPlugin2.default,
	  mergeStyleArray: _mergeStyleArrayPlugin2.default,
	  prefix: _prefixPlugin2.default,
	  removeNestedStyles: _removeNestedStylesPlugin2.default,
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
	  resolveMediaQueries: _resolveMediaQueriesPlugin2.default,
	  visited: _visitedPlugin2.default
	};
	/* eslint-disable block-scoped-const */

	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _checkProps = function checkProps() {};

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };

	    _checkProps = function checkProps(config) {
	      var componentName = config.componentName;
	      var style = config.style;

	      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
	        return;
	      }

	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });

	      styleKeys.forEach(function (k) {
	        return _checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}

	exports.default = _checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	function keyframesPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var addCSS = _ref.addCSS;
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === 'animationName' && value && value.__radiumKeyframes) {
	      var keyframesValue = value;

	      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent);

	      var animationName = _keyframesValue$__pro.animationName;
	      var css = _keyframesValue$__pro.css;

	      addCSS(css);
	      value = animationName;
	    }

	    newStyleInProgress[key] = value;
	    return newStyleInProgress;
	  }, {});
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	  // eslint-disable-line no-shadow
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};

	exports.default = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixPlugin;

	var _prefixer = __webpack_require__(12);

	function prefixPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNestedStyles;
	function removeNestedStyles(_ref) {
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  // eslint-disable-line no-shadow
	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (!isNestedStyle(value)) {
	      newStyleInProgress[key] = value;
	    }
	    return newStyleInProgress;
	  }, {});

	  return {
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mouseUpListener = __webpack_require__(57);

	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};

	var resolveInteractionStyles = function resolveInteractionStyles(config) {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;

	  var newComponentFields = {};
	  var newProps = {};

	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };

	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }

	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };

	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };

	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }

	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };

	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }

	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });

	  var newStyle = mergeStyles([style].concat(interactionStyles));

	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};

	exports.default = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}

	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	exports.default = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = resolveMediaQueries;

	var _windowMatchMedia = void 0;
	function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	}

	function _filterObject(obj, predicate) {
	  return Object.keys(obj).filter(function (key) {
	    return predicate(obj[key], key);
	  }).reduce(function (result, key) {
	    result[key] = obj[key];
	    return result;
	  }, {});
	}

	function _removeMediaQueries(style) {
	  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = style[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	}

	function _topLevelRulesToCSS(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  var userAgent = _ref.userAgent;

	  var className = '';
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
	      return !isNestedStyle(value);
	    }));

	    if (!Object.keys(topLevelRules).length) {
	      return;
	    }

	    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

	    // CSS classes cannot start with a number
	    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
	    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

	    addCSS(css);

	    className += (className ? ' ' : '') + mediaQueryClassName;
	  });
	  return className;
	}

	function _subscribeToMediaQuery(_ref2) {
	  var listener = _ref2.listener;
	  var listenersByQuery = _ref2.listenersByQuery;
	  var matchMedia = _ref2.matchMedia;
	  var mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery;
	  var query = _ref2.query;

	  query = query.replace('@media ', '');

	  var mql = mediaQueryListsByQuery[query];
	  if (!mql && matchMedia) {
	    mediaQueryListsByQuery[query] = mql = matchMedia(query);
	  }

	  if (!listenersByQuery || !listenersByQuery[query]) {
	    mql.addListener(listener);

	    listenersByQuery[query] = {
	      remove: function remove() {
	        mql.removeListener(listener);
	      }
	    };
	  }
	  return mql;
	}

	function resolveMediaQueries(_ref3) {
	  var ExecutionEnvironment = _ref3.ExecutionEnvironment;
	  var addCSS = _ref3.addCSS;
	  var appendImportantToEachValue = _ref3.appendImportantToEachValue;
	  var config = _ref3.config;
	  var cssRuleSetToString = _ref3.cssRuleSetToString;
	  var getComponentField = _ref3.getComponentField;
	  var getGlobalState = _ref3.getGlobalState;
	  var hash = _ref3.hash;
	  var isNestedStyle = _ref3.isNestedStyle;
	  var mergeStyles = _ref3.mergeStyles;
	  var props = _ref3.props;
	  var setState = _ref3.setState;
	  var style = _ref3.style;
	  // eslint-disable-line no-shadow
	  var newStyle = _removeMediaQueries(style);
	  var mediaQueryClassNames = _topLevelRulesToCSS({
	    addCSS: addCSS,
	    appendImportantToEachValue: appendImportantToEachValue,
	    cssRuleSetToString: cssRuleSetToString,
	    hash: hash,
	    isNestedStyle: isNestedStyle,
	    style: style,
	    userAgent: config.userAgent
	  });

	  var newProps = mediaQueryClassNames ? {
	    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
	  } : null;

	  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

	  if (!matchMedia) {
	    return {
	      props: newProps,
	      style: newStyle
	    };
	  }

	  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
	  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var nestedRules = _filterObject(style[query], isNestedStyle);

	    if (!Object.keys(nestedRules).length) {
	      return;
	    }

	    var mql = _subscribeToMediaQuery({
	      listener: function listener() {
	        return setState(query, mql.matches, '_all');
	      },
	      listenersByQuery: listenersByQuery,
	      matchMedia: matchMedia,
	      mediaQueryListsByQuery: mediaQueryListsByQuery,
	      query: query
	    });

	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, nestedRules]);
	    }
	  });

	  return {
	    componentFields: {
	      _radiumMediaQueryListenersByQuery: listenersByQuery
	    },
	    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
	    props: newProps,
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = visited;
	function visited(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var config = _ref.config;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var props = _ref.props;
	  var style = _ref.style;
	  // eslint-disable-line no-shadow
	  var className = props.className;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === ':visited') {
	      value = appendImportantToEachValue(value);
	      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
	      var visitedClassName = 'rad-' + hash(ruleCSS);
	      var css = '.' + visitedClassName + ':visited' + ruleCSS;

	      addCSS(css);
	      className = (className ? className + ' ' : '') + visitedClassName;
	    } else {
	      newStyleInProgress[key] = value;
	    }

	    return newStyleInProgress;
	  }, {});

	  return {
	    props: className === props.className ? null : { className: className },
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if ("function" === 'function' && _typeof(__webpack_require__(61)) === 'object' && __webpack_require__(61)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	})();

/***/ },
/* 61 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _cssRuleSetToString = __webpack_require__(10);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Style = _react2.default.createClass({
	  displayName: 'Style',

	  propTypes: {
	    radiumConfig: _react.PropTypes.object,
	    rules: _react.PropTypes.object,
	    scopeSelector: _react.PropTypes.string
	  },

	  contextTypes: {
	    _radiumConfig: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      scopeSelector: ''
	    };
	  },
	  _buildStyles: function _buildStyles(styles) {
	    var _this = this;

	    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

	    var scopeSelector = this.props.scopeSelector;

	    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
	      if (_typeof(styles[selector]) !== 'object') {
	        accumulator[selector] = styles[selector];
	      }

	      return accumulator;
	    }, {});
	    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

	    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else if (_typeof(styles[selector]) === 'object') {
	        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
	          return scopeSelector + ' ' + part.trim();
	        }).join(',') : selector;

	        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
	      }

	      return accumulator;
	    }, '');
	  },
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery) {
	    var _this2 = this;

	    var mediaQueryString = '';

	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });

	    return mediaQueryString;
	  },
	  render: function render() {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});

	exports.default = Style;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _enhancer = __webpack_require__(4);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _styleKeeper = __webpack_require__(5);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _styleSheet = __webpack_require__(64);

	var _styleSheet2 = _interopRequireDefault(_styleSheet);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _getStyleKeeper(instance) {
	  if (!instance._radiumStyleKeeper) {
	    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
	    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
	  }

	  return instance._radiumStyleKeeper;
	}

	var StyleRoot = function (_Component) {
	  _inherits(StyleRoot, _Component);

	  function StyleRoot() {
	    _classCallCheck(this, StyleRoot);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _getStyleKeeper(_this);
	    return _this;
	  }

	  StyleRoot.prototype.getChildContext = function getChildContext() {
	    return { _radiumStyleKeeper: _getStyleKeeper(this) };
	  };

	  StyleRoot.prototype.render = function render() {
	    /* eslint-disable no-unused-vars */
	    // Pass down all props except config to the rendered div.
	    var _props = this.props;
	    var radiumConfig = _props.radiumConfig;

	    var otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
	    /* eslint-enable no-unused-vars */

	    return _react2.default.createElement('div', otherProps, this.props.children, _react2.default.createElement(_styleSheet2.default, null));
	  };

	  return StyleRoot;
	}(_react.Component);

	StyleRoot.contextTypes = {
	  _radiumConfig: _react.PropTypes.object,
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot.childContextTypes = {
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot = (0, _enhancer2.default)(StyleRoot);

	exports.default = StyleRoot;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styleKeeper = __webpack_require__(5);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var StyleSheet = (_temp = _class = function (_Component) {
	  _inherits(StyleSheet, _Component);

	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _this.state = _this._getCSSState();

	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }

	  StyleSheet.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
	    this._onChange();
	  };

	  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	  };

	  StyleSheet.prototype._getCSSState = function _getCSSState() {
	    return { css: this.context._radiumStyleKeeper.getCSS() };
	  };

	  StyleSheet.prototype._onChange = function _onChange() {
	    var _this2 = this;

	    setTimeout(function () {
	      _this2._isMounted && _this2.setState(_this2._getCSSState());
	    }, 0);
	  };

	  StyleSheet.prototype.render = function render() {
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
	  };

	  return StyleSheet;
	}(_react.Component), _class.contextTypes = {
	  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
	}, _temp);
	exports.default = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;

	var _cssRuleSetToString = __webpack_require__(10);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _hash = __webpack_require__(48);

	var _hash2 = _interopRequireDefault(_hash);

	var _prefixer = __webpack_require__(12);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function keyframes(keyframeRules, name) {
	  return {
	    __radiumKeyframes: true,
	    __process: function __process(userAgent) {
	      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
	      var rules = Object.keys(keyframeRules).map(function (percentage) {
	        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
	      }).join('\n');
	      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
	      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
	      return { css: css, animationName: animationName };
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = SelectPage;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _style = __webpack_require__(67);

	var _style2 = _interopRequireDefault(_style);

	var _iconIos = __webpack_require__(68);

	var _iconIos2 = _interopRequireDefault(_iconIos);

	var _iconAndroid = __webpack_require__(69);

	var _iconAndroid2 = _interopRequireDefault(_iconAndroid);

	var _iconWeb = __webpack_require__(70);

	var _iconWeb2 = _interopRequireDefault(_iconWeb);

	var _iconNew = __webpack_require__(71);

	var _iconNew2 = _interopRequireDefault(_iconNew);

	var _iconApp = __webpack_require__(72);

	var _iconApp2 = _interopRequireDefault(_iconApp);

	var _iconTick = __webpack_require__(73);

	var _iconTick2 = _interopRequireDefault(_iconTick);

	var _SelectPlatform = __webpack_require__(74);

	var _SelectPlatform2 = _interopRequireDefault(_SelectPlatform);

	var _PlatformOption = __webpack_require__(75);

	var _PlatformOption2 = _interopRequireDefault(_PlatformOption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Icon = {
	  ios: _iconIos2.default,
	  android: _iconAndroid2.default,
	  js: _iconWeb2.default,
	  new: _iconNew2.default,
	  app: _iconApp2.default,
	  tick: _iconTick2.default
	};

	var RadiumSelectPlatform = (0, _radium2.default)(_SelectPlatform2.default);
	var RadiumPlatformOption = (0, _radium2.default)(_PlatformOption2.default);

	function SelectPage(_ref) {
	  var sdk = _ref.sdk,
	      setSDK = _ref.setSDK,
	      setProject = _ref.setProject;

	  var platformProps = { Style: _style2.default, Icon: Icon, sdk: sdk, setSDK: setSDK, setProject: setProject };
	  return _react2.default.createElement(
	    RadiumSelectPlatform,
	    { Style: _style2.default },
	    _react2.default.createElement(RadiumPlatformOption, _extends({}, platformProps, {
	      targetSDK: 'ios',
	      title: 'iOS',
	      desc: 'Build an app for iPhone, iPad and Apple Watch'
	    })),
	    _react2.default.createElement(RadiumPlatformOption, _extends({}, platformProps, {
	      targetSDK: 'android',
	      title: 'Android',
	      desc: 'Build an app for Android devices'
	    })),
	    _react2.default.createElement(RadiumPlatformOption, _extends({}, platformProps, {
	      targetSDK: 'js',
	      title: 'Web',
	      desc: 'Develop cross platfrom browser-based app'
	    }))
	  );
	}

	SelectPage.propTypes = {
	  sdk: _react2.default.PropTypes.string,
	  setSDK: _react2.default.PropTypes.func.isRequired,
	  setProject: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  selectPage: { fontFamily: "'Lato', sans-serif", padding: '24px' },
	  Hide: { display: 'none' },
	  header: {
	    tagline: { color: '#4a4a4a', fontSize: '13px', margin: '0px' },
	    title: { fontSize: '31px', margin: '17px 0px 13px' },
	    subtitle: { fontSize: '16px', margin: '0px 0px 19px' }
	  },
	  platform: {
	    link: {
	      textDecoration: 'none'
	    },
	    item: {
	      cursor: 'pointer',
	      border: '1px solid #979797',
	      color: '#979797',
	      fill: '#979797',
	      borderRadius: '6px',
	      marginTop: '16px',
	      overflow: 'auto',
	      position: 'relative'
	    },
	    Active: {
	      cursor: 'auto',
	      border: '1px solid #007bd4',
	      color: '#007bd4',
	      fill: '#007bd4'
	    },
	    tick: { position: 'absolute', right: '18px', top: '24px' },
	    icon: { position: 'absolute', top: '10px', left: '31px', width: '40px' },
	    title: { fontSize: '16px', margin: '16px 51px 0px 101px' },
	    desc: { fontSize: '12px', margin: '0px 51px 18px 101px' }
	  },
	  project: {
	    row: {
	      margin: '0px 0px 20px 101px',
	      '@media (max-width: 544px)': {
	        margin: '0px 0px 20px 8px'
	      }
	    },
	    column: {
	      display: 'inline-block',
	      width: '50%',
	      '@media (max-width: 768px)': {
	        width: '100%',
	        marginBottom: '8px'
	      }
	    },
	    item: {
	      color: '#fff',
	      fill: '#fff',
	      background: '#007bd4',
	      width: '98%',
	      display: 'inline-block',
	      borderRadius: '6px',
	      position: 'relative',
	      cursor: 'pointer'
	    },
	    icon: { position: 'absolute', top: '12px', left: '17px', width: '35px' },
	    title: { fontSize: '16px', margin: '11px 0px 0px 66px' },
	    desc: { fontSize: '12px', margin: '0px 5px 14px 66px' }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg viewBox=\"0 0 35 44\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-ios</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-1\" transform=\"translate(-322.000000, -238.000000)\">\n            <g id=\"icon-ios\" transform=\"translate(322.000000, 238.000000)\">\n                <path d=\"M25.9414293,11.111893 C22.4033859,10.8432884 19.3979511,13.1072419 17.724038,13.1072419 C16.0120815,13.1072419 13.425125,11.1886372 10.6479511,11.2270093 C6.99577717,11.2653814 3.64795109,13.3758465 1.78382065,16.6758465 C-1.9824837,23.3142186 0.832733696,33.1374744 4.52295109,38.5095674 C6.31099457,41.1188698 8.47947283,44.111893 11.2946902,43.9967767 C13.9957772,43.8816605 15.0609946,42.2316605 18.3327337,42.2316605 C21.6044728,42.2316605 22.5555598,43.9967767 25.4088207,43.9584047 C28.3381685,43.9200326 30.2022989,41.2723581 31.9903424,38.6246837 C34.0446902,35.5932884 34.9196902,32.6386372 34.9577337,32.4851488 C34.8816467,32.4467767 29.251212,30.2595674 29.2131685,23.7363116 C29.175125,18.2491023 33.6642554,15.6398 33.8544728,15.4863116 C31.2675163,11.6107302 27.3109946,11.1886372 25.9414293,11.111893\" id=\"Fill-1\"></path>\n                <path d=\"M23.5208375,7.46098571 C24.9833375,5.57527143 25.9958375,2.98241429 25.7333375,0.389557143 C23.5958375,0.468128571 21.0083375,1.88241429 19.5083375,3.76812857 C18.1583375,5.41812857 16.9208375,8.08955714 17.2583375,10.6431286 C19.6208375,10.8002714 22.0583375,9.3467 23.5208375,7.46098571\" id=\"Fill-4\"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg viewBox=\"0 0 42 51\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-android</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-1\" transform=\"translate(-319.000000, -325.000000)\">\n            <g id=\"icon-android\" transform=\"translate(319.000000, 325.000000)\">\n                <path d=\"M39,18 L39,18 C37.3431,18 36,19.3733996 36,21.0676784 L36,31.9323216 C36,33.6266004 37.3431,35 39,35 C40.6569,35 42,33.6266004 42,31.9323216 L42,21.0676784 C42,19.3733996 40.6569,18 39,18\" id=\"Fill-1\"></path>\n                <path d=\"M3,18 L3,18 C1.3431,18 0,19.3733996 0,21.0676784 L0,31.9323216 C0,33.6266004 1.3431,35 3,35 C4.6569,35 6,33.6266004 6,31.9323216 L6,21.0676784 C6,19.3733996 4.6569,18 3,18\" id=\"Fill-3\"></path>\n                <path d=\"M7,17 L7,37.3399558 C7,39.1637969 8.46126374,40.6423841 10.2637363,40.6423841 L11.8956044,40.6423841 L11.8956044,47.397351 C11.8956044,49.387064 13.4896429,51 15.456044,51 C17.4224451,51 19.0164835,49.387064 19.0164835,47.397351 L19.0164835,40.6423841 L21.9835165,40.6423841 L21.9835165,47.397351 C21.9835165,49.387064 23.5775549,51 25.543956,51 C27.5103571,51 29.1043956,49.387064 29.1043956,47.397351 L29.1043956,40.6423841 L30.7362637,40.6423841 C32.5387363,40.6423841 34,39.1637969 34,37.3399558 L34,17 L7,17 Z\" id=\"Fill-5\"></path>\n                <path d=\"M26.7471767,11.0232855 C26.0766464,11.0232855 25.5329932,10.4807161 25.5329932,9.8115224 C25.5329932,9.14218029 26.0766464,8.59975934 26.7471767,8.59975934 C27.4177069,8.59975934 27.9613601,9.14218029 27.9613601,9.8115224 C27.9613601,10.4807161 27.4177069,11.0232855 26.7471767,11.0232855 M14.2528233,11.0232855 C13.5822931,11.0232855 13.0386399,10.4807161 13.0386399,9.8115224 C13.0386399,9.14218029 13.5822931,8.59975934 14.2528233,8.59975934 C14.9233536,8.59975934 15.4670068,9.14218029 15.4670068,9.8115224 C15.4670068,10.4807161 14.9233536,11.0232855 14.2528233,11.0232855 M27.6064609,5.28407395 L29.7453752,1.43279612 C30.0041868,0.966824752 29.8355131,0.379573168 29.3684622,0.12112903 C28.9015601,-0.137166662 28.3129869,0.0311708755 28.0541753,0.497290687 L25.8612675,4.44550363 C24.2170701,3.79145143 22.4046452,3.42835301 20.5,3.42835301 C18.5953548,3.42835301 16.7829299,3.79145143 15.1387325,4.44550363 L12.9458247,0.497290687 C12.6870131,0.0311708755 12.0984399,-0.137166662 11.6315378,0.12112903 C11.1644869,0.379573168 10.9958132,0.966824752 11.2546248,1.43279612 L13.3935391,5.28407395 C9.79531407,7.33307133 7.31741607,10.8911687 7,15 L34,15 C33.6825839,10.8911687 31.2046859,7.33307133 27.6064609,5.28407395\" id=\"Fill-7\"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg viewBox=\"0 0 44 44\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-web</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-1\" transform=\"translate(-318.000000, -415.000000)\">\n            <g id=\"icon-web\" transform=\"translate(318.000000, 415.000000)\">\n                <path d=\"M31.0630294,39.6495 C31.3502157,39.3528235 31.6310392,39.0416961 31.9048529,38.7156863 L32.6827255,38.7156863 C32.1591471,39.0515098 31.6185294,39.3630686 31.0630294,39.6495 L31.0630294,39.6495 Z M11.7636373,38.7156863 C11.9270196,38.9102353 12.0929902,39.0992843 12.2611176,39.2833725 C11.9411471,39.1023039 11.6260294,38.9136863 11.3173824,38.7156863 L11.7636373,38.7156863 Z M4.34834314,31.0588235 L7.63637255,31.0588235 C8.27803922,33.0456176 9.13366667,34.898902 10.1879412,36.5588235 L8.53244118,36.5588235 C6.83757843,34.9899216 5.41566667,33.1302745 4.34834314,31.0588235 L4.34834314,31.0588235 Z M8.08068627,7.87254902 L9.92059804,7.87254902 C9.02183333,9.36391176 8.27771569,11.0010784 7.69989216,12.7436078 L4.45273529,12.7436078 C5.40951961,10.9372353 6.63666667,9.29543137 8.08068627,7.87254902 L8.08068627,7.87254902 Z M39.5472647,12.7436078 L35.968598,12.7436078 C35.3907745,11.0010784 34.6466569,9.36391176 33.7478922,7.87254902 L35.9194216,7.87254902 C37.3633333,9.29543137 38.5905882,10.9372353 39.5472647,12.7436078 L39.5472647,12.7436078 Z M26.3651667,36.5588235 C26.7273039,34.9110882 27.0212843,33.0562941 27.2410686,31.0588235 L33.7564118,31.0588235 C33.0217843,33.1344804 32.0434314,34.9955294 30.8766765,36.5588235 L26.3651667,36.5588235 Z M25.8167843,38.7156863 L28.9426176,38.7156863 C27.7133137,39.8465294 26.3514706,40.6940686 24.8992549,41.1938137 C25.2283922,40.5038333 25.5336961,39.6775392 25.8167843,38.7156863 L25.8167843,38.7156863 Z M17.8517059,38.7156863 C18.1347941,39.6775392 18.440098,40.5038333 18.7692353,41.1938137 C17.3170196,40.6940686 15.9551765,39.8465294 14.7259804,38.7156863 L17.8517059,38.7156863 Z M16.4274216,31.0588235 C16.6473137,33.0562941 16.9412941,34.9110882 17.3033235,36.5588235 L12.7918137,36.5588235 C11.6251667,34.9955294 10.6467059,33.1344804 9.91207843,31.0588235 L16.4274216,31.0588235 Z M8.42815686,23.0784314 L15.9631569,23.0784314 C15.986451,25.0849608 16.0748824,27.0409118 16.223598,28.9019608 L9.25790196,28.9019608 C8.79072549,27.0732647 8.50332353,25.1166667 8.42815686,23.0784314 L8.42815686,23.0784314 Z M2.18651961,23.0784314 L6.26935294,23.0784314 C6.33794118,25.0823725 6.59827451,27.0376765 7.03633333,28.9019608 L3.39576471,28.9019608 C2.71473529,27.0721863 2.29619608,25.1158039 2.18651961,23.0784314 L2.18651961,23.0784314 Z M6.26935294,20.9215686 L2.18651961,20.9215686 C2.30007843,18.8107549 2.74579412,16.7868627 3.47103922,14.9004706 L7.08389216,14.9004706 C6.6172549,16.8241765 6.34042157,18.8466667 6.26935294,20.9215686 L6.26935294,20.9215686 Z M16.2392353,14.9004706 C16.0809216,16.820402 15.9872059,18.8441863 15.9631569,20.9215686 L8.42815686,20.9215686 C8.50612745,18.8097843 8.81164706,16.7856765 9.30912745,14.9004706 L16.2392353,14.9004706 Z M17.2112255,7.87254902 C16.9027941,9.35463725 16.6476373,10.993098 16.4497451,12.7436078 L9.98314706,12.7436078 C10.6416373,10.9336765 11.4868039,9.29154902 12.4807941,7.87254902 L17.2112255,7.87254902 Z M11.4123922,5.71568627 L10.6749608,5.71568627 C11.1866765,5.35872549 11.7157549,5.02527451 12.2610098,4.71673529 C11.9709118,5.03433333 11.6879314,5.36746078 11.4123922,5.71568627 L11.4123922,5.71568627 Z M32.2562059,5.71568627 C31.8725,5.23093137 31.474451,4.77561765 31.0631373,4.35060784 C31.8492059,4.75588235 32.6042157,5.21292157 33.3251471,5.71568627 L32.2562059,5.71568627 Z M27.2187451,12.7436078 C27.0208529,10.993098 26.7656961,9.35463725 26.4572647,7.87254902 L31.1876961,7.87254902 C32.1816863,9.29154902 33.0268529,10.9336765 33.6853431,12.7436078 L27.2187451,12.7436078 Z M35.2404412,20.9215686 L27.7054412,20.9215686 C27.6812843,18.8441863 27.5876765,16.820402 27.4292549,14.9004706 L34.3594706,14.9004706 C34.8568431,16.7856765 35.1624706,18.8097843 35.2404412,20.9215686 L35.2404412,20.9215686 Z M37.3991373,23.0784314 L41.8135882,23.0784314 C41.7039118,25.1158039 41.2853725,27.0721863 40.6043431,28.9019608 L36.6321569,28.9019608 C37.0703235,27.0376765 37.330549,25.0823725 37.3991373,23.0784314 L37.3991373,23.0784314 Z M27.7054412,23.0784314 L35.2404412,23.0784314 C35.1651667,25.1166667 34.8777647,27.0732647 34.4106961,28.9019608 L27.445,28.9019608 C27.5937157,27.0409118 27.6821471,25.0849608 27.7054412,23.0784314 L27.7054412,23.0784314 Z M25.2652745,14.9004706 C25.4274706,16.8126373 25.5236667,18.8372843 25.5483627,20.9215686 L18.1201275,20.9215686 C18.1448235,18.8372843 18.2410196,16.8126373 18.4032157,14.9004706 L25.2652745,14.9004706 Z M24.251549,7.87254902 C24.5748627,9.33716667 24.842098,10.9773529 25.0487255,12.7436078 L18.6198725,12.7436078 C18.8263922,10.9773529 19.0936275,9.33716667 19.4169412,7.87254902 L24.251549,7.87254902 Z M17.728549,5.71568627 L14.276598,5.71568627 C15.62,4.36753922 17.1376765,3.36772549 18.7692353,2.80618627 C18.3918922,3.59732353 18.0457157,4.56694118 17.728549,5.71568627 L17.728549,5.71568627 Z M23.6920588,5.71568627 L19.9765392,5.71568627 C20.825049,2.94756863 21.645951,2.28746078 21.8342451,2.28746078 C22.0225392,2.28746078 22.8434412,2.94756863 23.6920588,5.71568627 L23.6920588,5.71568627 Z M25.9399412,5.71568627 C25.6228824,4.56694118 25.276598,3.59732353 24.8992549,2.80618627 C26.5308137,3.36772549 28.048598,4.36753922 29.392,5.71568627 L25.9399412,5.71568627 Z M18.3863922,28.9019608 C18.2342255,27.0483529 18.1439608,25.091 18.1201275,23.0784314 L25.5483627,23.0784314 C25.5245294,25.091 25.4343725,27.0483529 25.282098,28.9019608 L18.3863922,28.9019608 Z M21.8342451,41.7125392 C21.6561961,41.7125392 20.9122941,41.1210196 20.1143627,38.7156863 L23.5542353,38.7156863 C22.7561961,41.1210196 22.0122941,41.7125392 21.8342451,41.7125392 L21.8342451,41.7125392 Z M24.1531961,36.5588235 L19.515402,36.5588235 C19.5074216,36.5251765 19.499549,36.4930392 19.4916765,36.4589608 C19.1222059,34.8585686 18.8220784,33.0354804 18.5972255,31.0588235 L25.0713725,31.0588235 C24.8464118,33.0354804 24.5462843,34.8585686 24.1769216,36.4589608 C24.169049,36.4930392 24.1610686,36.5251765 24.1531961,36.5588235 L24.1531961,36.5588235 Z M41.8135882,20.9215686 L37.3991373,20.9215686 C37.3280686,18.8466667 37.0513431,16.8241765 36.584598,14.9004706 L40.5290686,14.9004706 C41.2543137,16.7868627 41.6999216,18.8107549 41.8135882,20.9215686 L41.8135882,20.9215686 Z M35.4675588,36.5588235 L33.4806569,36.5588235 C34.5348235,34.898902 35.3905588,33.0456176 36.0321176,31.0588235 L39.6516569,31.0588235 C38.5843333,33.1302745 37.1624216,34.9899216 35.4675588,36.5588235 L35.4675588,36.5588235 Z M44,22 C44,9.86926471 34.130951,0 22,0 C9.86915686,0 0,9.86926471 0,22 C0,28.6578039 2.97312745,34.6337157 7.66085294,38.6713627 L7.66085294,38.7156863 L7.71337255,38.7156863 C11.5600294,42.0082451 16.551549,44 22,44 C27.4485588,44 32.4399706,42.0082451 36.2867353,38.7156863 L36.3391471,38.7156863 L36.3391471,38.6713627 C41.0268725,34.6337157 44,28.6578039 44,22 L44,22 Z\" id=\"Fill-1\"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg viewBox=\"0 0 36 39\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-new</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-2\" transform=\"translate(-408.000000, -309.000000)\">\n            <g id=\"icon-new\" transform=\"translate(408.000000, 309.000000)\">\n                <path d=\"M16.32,1.68017459 C16.32,0.751985444 17.0697929,0 18,0 C18.9275178,0 19.68,0.755151627 19.68,1.68017459 L19.68,9.56982541 C19.68,10.4980146 18.9302071,11.25 18,11.25 C17.0724822,11.25 16.32,10.4948484 16.32,9.56982541 L16.32,1.68017459 Z\" id=\"Rectangle\"></path>\n                <path d=\"M16.32,29.4301746 C16.32,28.5019854 17.0697929,27.75 18,27.75 C18.9275178,27.75 19.68,28.5051516 19.68,29.4301746 L19.68,37.3198254 C19.68,38.2480146 18.9302071,39 18,39 C17.0724822,39 16.32,38.2448484 16.32,37.3198254 L16.32,29.4301746 Z\" id=\"Rectangle\"></path>\n                <path d=\"M32.5924215,9.13516461 C33.3962569,8.67107004 34.4223918,8.94441703 34.8874954,9.75 C35.3512543,10.5532539 35.0735149,11.5824985 34.2724215,12.04501 L27.4397835,15.9898354 C26.6359481,16.45393 25.6098131,16.180583 25.1447096,15.375 C24.6809507,14.5717461 24.9586901,13.5425015 25.7597835,13.07999 L32.5924215,9.13516461 Z\" id=\"Rectangle\"></path>\n                <path d=\"M8.56021655,23.0101646 C9.36405192,22.54607 10.3901869,22.819417 10.8552904,23.625 C11.3190493,24.4282539 11.0413099,25.4574985 10.2402165,25.92001 L3.4075785,29.8648354 C2.60374312,30.32893 1.57760817,30.055583 1.11250463,29.25 C0.648745745,28.4467461 0.926485119,27.4175015 1.7275785,26.95499 L8.56021655,23.0101646 Z\" id=\"Rectangle\"></path>\n                <path d=\"M34.2724215,26.95499 C35.0762569,27.4190846 35.3525989,28.444417 34.8874954,29.25 C34.4237365,30.0532539 33.3935149,30.3273469 32.5924215,29.8648354 L25.7597835,25.92001 C24.9559481,25.4559154 24.679606,24.430583 25.1447096,23.625 C25.6084685,22.8217461 26.6386901,22.5476531 27.4397835,23.0101646 L34.2724215,26.95499 Z\" id=\"Rectangle\"></path>\n                <path d=\"M10.2402165,13.07999 C11.0440519,13.5440846 11.320394,14.569417 10.8552904,15.375 C10.3915315,16.1782539 9.36130993,16.4523469 8.56021655,15.9898354 L1.7275785,12.04501 C0.923743124,11.5809154 0.647401084,10.555583 1.11250463,9.75 C1.57626351,8.94674606 2.60648512,8.67265314 3.4075785,9.13516461 L10.2402165,13.07999 Z\" id=\"Rectangle\"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg viewBox=\"0 0 37 43\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-app</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-2\" transform=\"translate(-709.000000, -307.000000)\">\n            <g id=\"icon-app\" transform=\"translate(709.000000, 307.000000)\">\n                <path d=\"M34.9395671,12.6166763 L34.438438,11.75 L34.438438,31.25 L34.9395671,30.3833237 L18.0011291,40.1333237 L18.9988709,40.1333237 L2.06043286,30.3833237 L2.56156196,31.25 L2.56156196,11.75 L2.06043286,12.6166763 L18.9988709,2.8666763 L18.0011291,2.8666763 L34.9395671,12.6166763 Z M18.5,0.846166678 L18.0011291,1.1333237 L1.06269105,10.8833237 L0.561561955,11.1717806 L0.561561955,11.75 L0.561561955,31.25 L0.561561955,31.8282194 L1.06269105,32.1166763 L18.0011291,41.8666763 L18.5,42.1538333 L18.9988709,41.8666763 L35.937309,32.1166763 L36.438438,31.8282194 L36.438438,31.25 L36.438438,11.75 L36.438438,11.1717806 L35.937309,10.8833237 L18.9988709,1.1333237 L18.5,0.846166678 Z\" id=\"Polygon\"></path>\n                <polygon id=\"Path-4\" points=\"18.1562867 22.6624835 18.663617 22.961087 19.1709006 22.6624042 36.3317845 12.5582718 35.3170359 10.8348203 18.1561521 20.9389527 19.170766 20.9388734 2.60769152 11.1902097 1.59321227 12.9138199\"></polygon>\n                <polygon id=\"Path-5\" points=\"17.8431373 39.9365638 19.8431373 39.9365638 19.8431373 22.0017989 17.8431373 22.0017989\"></polygon>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"22px\" height=\"20px\" viewBox=\"0 0 22 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n    <title>icon-tick</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Dev-portal-1.0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Get-Started---Step-2\" transform=\"translate(-955.000000, -250.000000)\" fill=\"#007BD4\">\n            <polygon id=\"icon-tick\" points=\"962.997036 268.833477 963.81741 269.590298 964.479899 268.692022 976.897856 251.854355 975.288259 250.667259 962.870301 267.504926 964.353164 267.363471 957.05538 260.631035 955.699253 262.101041\"></polygon>\n        </g>\n    </g>\n</svg>"

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	module.exports= function (locals) {  var Style = "Style" in locals ? locals.Style : jade_globals_Style;
	  var children = "children" in locals ? locals.children : jade_globals_children;
	  return function() {
	    var tags = [];
	    tags.push(React.DOM.main.apply(React.DOM, [ {
	      style: [ Style.selectPage ]
	    } ].concat(function() {
	      return [ React.DOM.header.apply(React.DOM, [ {} ].concat(function() {
	        return [ React.DOM.h4.apply(React.DOM, [ {
	          style: [ Style.header.tagline ]
	        } ].concat(function() {
	          return [ "GET STARTED NOW!" ];
	        }.call(this))), React.DOM.p.apply(React.DOM, [ {
	          style: [ Style.header.title ]
	        } ].concat(function() {
	          return [ "Which platform are you getting to start with?" ];
	        }.call(this))), React.DOM.p.apply(React.DOM, [ {
	          style: [ Style.header.subtitle ]
	        } ].concat(function() {
	          return [ "Choose your platform for developing your app with Skygear." ];
	        }.call(this))) ];
	      }.call(this))), function() {
	        var tags = [];
	        var $$obj = children;
	        if ("number" == typeof $$obj.length) for (var $index = 0, $$l = $$obj.length; $$l > $index; $index++) {
	          var child = $$obj[$index];
	          tags.push(child);
	        } else {
	          var $$l = 0;
	          for (var $index in $$obj) {
	            $$l++;
	            var child = $$obj[$index];
	            tags.push(child);
	          }
	        }
	        return tags;
	      }.call(this) ];
	    }.call(this))));
	    if (1 === tags.length) return tags.pop();
	    tags.unshift({});
	    return React.DOM.div.apply(React.DOM, tags);
	  }.call(this);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	module.exports= function (locals) {  var sdk = "sdk" in locals ? locals.sdk : jade_globals_sdk;
	  var targetSDK = "targetSDK" in locals ? locals.targetSDK : jade_globals_targetSDK;
	  var Style = "Style" in locals ? locals.Style : jade_globals_Style;
	  var Icon = "Icon" in locals ? locals.Icon : jade_globals_Icon;
	  var title = "title" in locals ? locals.title : jade_globals_title;
	  var desc = "desc" in locals ? locals.desc : jade_globals_desc;
	  return function() {
	    var tags = [];
	    React.createElement;
	    const showWhenActive = sdk !== targetSDK ? Style.Hide : {};
	    const highlightWhenActive = sdk === targetSDK ? Style.platform.Active : {};
	    tags.push(React.DOM.a.apply(React.DOM, [ {
	      style: [ Style.platform.link ],
	      href: "https://docs.skygear.io/guides/installation/" + targetSDK,
	      target: "_blank"
	    } ].concat(function() {
	      return [ React.DOM.section.apply(React.DOM, [ {
	        style: [ Style.platform.item, highlightWhenActive ]
	      } ].concat(function() {
	        return [ React.DOM.span.apply(React.DOM, [ {
	          style: [ Style.platform.icon ],
	          dangerouslySetInnerHTML: {
	            __html: Icon[targetSDK]
	          }
	        } ]), React.DOM.h3.apply(React.DOM, [ {
	          style: [ Style.platform.title ]
	        } ].concat(function() {
	          return [ title ];
	        }.call(this))), React.DOM.p.apply(React.DOM, [ {
	          style: [ Style.platform.desc ]
	        } ].concat(function() {
	          return [ desc ];
	        }.call(this))), React.DOM.div.apply(React.DOM, [ {
	          style: [ Style.project.row, showWhenActive ]
	        } ]) ];
	      }.call(this))) ];
	    }.call(this))));
	    if (1 === tags.length) return tags.pop();
	    tags.unshift({});
	    return React.DOM.div.apply(React.DOM, tags);
	  }.call(this);
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _exenv = __webpack_require__(60);

	var _Markdown = __webpack_require__(77);

	var _Markdown2 = _interopRequireDefault(_Markdown);

	var _prismGhcolors = __webpack_require__(79);

	var _prismGhcolors2 = _interopRequireDefault(_prismGhcolors);

	var _style = __webpack_require__(80);

	var _style2 = _interopRequireDefault(_style);

	var _iconIos = __webpack_require__(68);

	var _iconIos2 = _interopRequireDefault(_iconIos);

	var _iconAndroid = __webpack_require__(69);

	var _iconAndroid2 = _interopRequireDefault(_iconAndroid);

	var _iconWeb = __webpack_require__(70);

	var _iconWeb2 = _interopRequireDefault(_iconWeb);

	var _iconNew = __webpack_require__(71);

	var _iconNew2 = _interopRequireDefault(_iconNew);

	var _iconApp = __webpack_require__(72);

	var _iconApp2 = _interopRequireDefault(_iconApp);

	var _TabItem = __webpack_require__(81);

	var _TabItem2 = _interopRequireDefault(_TabItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Icon = {
	  ios: _iconIos2.default,
	  android: _iconAndroid2.default,
	  js: _iconWeb2.default,
	  new: _iconNew2.default,
	  existing: _iconApp2.default
	};

	var RadiumTabItem = (0, _radium2.default)(_TabItem2.default);

	function GuidePage(_ref) {
	  var sdk = _ref.sdk,
	      project = _ref.project,
	      hideSDKTabs = _ref.hideSDKTabs,
	      guideContent = _ref.guideContent,
	      setSDK = _ref.setSDK,
	      setProject = _ref.setProject;

	  var docLinkShoudShow = _exenv.canUseDOM && window.location.hostname !== 'localhost' && window.location.hostname !== 'docs.skygear.io' && window.location.hostname !== 'docs-staging.skygear.io';

	  var heading = void 0;
	  var sdkTabs = void 0;
	  if (!hideSDKTabs) {
	    heading = _react2.default.createElement(
	      'h4',
	      { style: [_style2.default.tagline] },
	      'GET STARTED'
	    );
	    sdkTabs = _react2.default.createElement(
	      'nav',
	      { style: [_style2.default.platform.row] },
	      _react2.default.createElement(
	        'div',
	        { style: [_style2.default.platform.item] },
	        _react2.default.createElement(RadiumTabItem, {
	          Style: _style2.default,
	          Icon: Icon,
	          current: sdk,
	          update: setSDK,
	          target: 'ios',
	          name: 'iOS'
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: [_style2.default.platform.item] },
	        _react2.default.createElement(RadiumTabItem, {
	          Style: _style2.default,
	          Icon: Icon,
	          current: sdk,
	          update: setSDK,
	          target: 'android',
	          name: 'Android'
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: [_style2.default.platform.item] },
	        _react2.default.createElement(RadiumTabItem, {
	          Style: _style2.default,
	          Icon: Icon,
	          current: sdk,
	          update: setSDK,
	          target: 'js',
	          name: 'Web'
	        })
	      )
	    );
	  }

	  var docLink = void 0;
	  if (docLinkShoudShow) {
	    docLink = _react2.default.createElement(
	      'a',
	      {
	        style: [_style2.default.project.docLink],
	        href: 'https://docs.skygear.io/' + sdk + '/guide',
	        target: '_blank'
	      },
	      'Read our Doc'
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: _style2.default.guidePage },
	    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _Markdown2.default } }),
	    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _prismGhcolors2.default } }),
	    _react2.default.createElement(
	      'header',
	      null,
	      heading,
	      sdkTabs,
	      _react2.default.createElement(
	        'nav',
	        {
	          style: [_style2.default.project.row, docLinkShoudShow && _style2.default.project.rowIncludeDocLink]
	        },
	        _react2.default.createElement(
	          'div',
	          { style: [_style2.default.project.item] },
	          _react2.default.createElement(RadiumTabItem, {
	            Style: _style2.default,
	            Icon: Icon,
	            current: project,
	            update: setProject,
	            target: 'new',
	            name: 'New App from Template'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: [_style2.default.project.item] },
	          _react2.default.createElement(RadiumTabItem, {
	            Style: _style2.default,
	            Icon: Icon,
	            current: project,
	            update: setProject,
	            target: 'existing',
	            name: 'Start from Scratch'
	          })
	        ),
	        docLink
	      )
	    ),
	    _react2.default.createElement('article', {
	      style: _style2.default.content,
	      className: 'Markdown',
	      dangerouslySetInnerHTML: { __html: guideContent }
	    })
	  );
	}

	GuidePage.propTypes = {
	  sdk: _react2.default.PropTypes.string.isRequired,
	  project: _react2.default.PropTypes.string.isRequired,
	  guideContent: _react2.default.PropTypes.string.isRequired,
	  setSDK: _react2.default.PropTypes.func.isRequired,
	  setProject: _react2.default.PropTypes.func.isRequired,
	  hideSDKTabs: _react2.default.PropTypes.bool
	};

	exports.default = (0, _radium2.default)(GuidePage);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.Markdown {\n  color: #4A4A4A;\n  font-family: \"Lato\"; }\n  .Markdown h1, .Markdown h2, .Markdown h3, .Markdown h4, .Markdown h5 {\n    color: #000000;\n    margin-top: 0;\n    margin-bottom: 1.25rem; }\n  .Markdown h2 {\n    font-weight: 600;\n    font-size: 1.8rem; }\n  .Markdown p, .Markdown ol, .Markdown ul, .Markdown pre, .Markdown table {\n    margin-top: 0;\n    margin-bottom: 1.5rem; }\n  .Markdown ol, .Markdown ul {\n    padding-left: 20px;\n    list-style-position: outside; }\n  .Markdown code {\n    box-sizing: border-box;\n    padding: .25rem .375rem 0 .375rem;\n    max-width: 100%;\n    max-height: 100%;\n    background-color: #EFEFEF;\n    color: #000000;\n    font-size: .875rem;\n    font-family: \"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace; }\n  .Markdown pre > code {\n    display: inline-block;\n    padding: .75rem .625rem;\n    overflow: auto;\n    width: 100%; }\n  .Markdown img {\n    max-width: 100%; }\n  .Markdown th, .Markdown td {\n    padding: 15px;\n    text-align: left; }\n  .Markdown tbody > tr:nth-child(odd) {\n    background-color: #f2f2f2; }\n  .Markdown p, .Markdown li {\n    line-height: 2rem; }\n  .Markdown li {\n    margin-top: 0;\n    margin-bottom: 0.5rem; }\n    .Markdown li ol, .Markdown li ul {\n      margin-top: 0.5rem;\n      margin-bottom: 0; }\n\n/*# sourceMappingURL=Markdown.css.map */\n", ""]);

	// exports


/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n    color: #393A34;\n    font-family: \"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}", ""]);

	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  guidePage: {
	    fontFamily: "'Lato', sans-serif",
	    minWidth: '295px'
	  },
	  Hide: { display: 'none' },
	  content: { padding: '24px', overflowX: 'hidden' },
	  tagline: {
	    margin: '20px 0px',
	    textAlign: 'center',
	    fontSize: '13px',
	    color: '#4A4A4A'
	  },
	  platform: {
	    row: { width: '100%', borderBottom: '1px solid #CCCCCC' },
	    item: {
	      width: '33%',
	      textAlign: 'center',
	      display: 'inline-block'
	    }
	  },
	  project: {
	    row: {
	      width: '100%',
	      padding: '0 24px',
	      boxSizing: 'border-box',
	      position: 'relative'
	    },
	    rowIncludeDocLink: {
	      '@media (max-width: 544px)': {
	        marginBottom: 78
	      }
	    },
	    item: { display: 'inline-block' },
	    docLink: {
	      position: 'absolute',
	      top: '19px',
	      right: '41px',
	      padding: '14px 42px',
	      color: '#FFF',
	      background: '#007BD4',
	      borderRadius: '5px',
	      fontSize: '16px',
	      textDecoration: 'none',
	      textAlign: 'center',
	      '@media (max-width: 544px)': {
	        top: '78px',
	        left: '41px'
	      }
	    }
	  },
	  tab: {
	    item: {
	      display: 'inline-block',
	      position: 'relative',
	      cursor: 'pointer',
	      color: '#4A4A4A',
	      fill: '#1A1A1A',
	      fontSize: '18px',
	      textAlign: 'left',
	      margin: '9px 12px 0px 0px',
	      '@media (max-width: 544px)': {
	        margin: '9px 6px 0px 0px',
	        fontSize: '16px'
	      }
	    },
	    Active: { borderBottom: '5px solid #007BD4', cursor: 'auto' },
	    icon: {
	      position: 'absolute',
	      top: '8px',
	      left: '7px',
	      overflow: 'auto',
	      width: '21px'
	    },
	    name: { margin: '9px 9px 16px 33px' }
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	module.exports= function (locals) {  var current = "current" in locals ? locals.current : jade_globals_current;
	  var target = "target" in locals ? locals.target : jade_globals_target;
	  var Style = "Style" in locals ? locals.Style : jade_globals_Style;
	  var update = "update" in locals ? locals.update : jade_globals_update;
	  var Icon = "Icon" in locals ? locals.Icon : jade_globals_Icon;
	  var name = "name" in locals ? locals.name : jade_globals_name;
	  return function() {
	    var tags = [];
	    const highlightWhenActive = current === target ? Style.tab.Active : {};
	    tags.push(React.DOM.div.apply(React.DOM, [ {
	      style: [ Style.tab.item, highlightWhenActive ],
	      onClick: update.bind(null, target)
	    } ].concat(function() {
	      return [ React.DOM.span.apply(React.DOM, [ {
	        style: [ Style.tab.icon ],
	        dangerouslySetInnerHTML: {
	          __html: Icon[target]
	        }
	      } ]), React.DOM.p.apply(React.DOM, [ {
	        style: [ Style.tab.name ]
	      } ].concat(function() {
	        return [ name ];
	      }.call(this))) ];
	    }.call(this))));
	    if (1 === tags.length) return tags.pop();
	    tags.unshift({});
	    return React.DOM.div.apply(React.DOM, tags);
	  }.call(this);
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<p>If you want to create a new iOS app that uses Skygear, you can follow this\nguide to scaffold a new one with the Skygear iOS SDK installed. After creating\nthe scaffolding app, you will have an iOS app configured with your Skygear\nserver endpoint and API key, with basic authentication functions for a user\nto sign up, log in and log out, implemented using the iOS SDK.</p>\n<h2 id=\"prerequisite\">Prerequisite</h2>\n<h3 id=\"xcode\">Xcode</h3>\n<p><a href=\"https://developer.apple.com/xcode/\">Xcode</a> is an IDE for developing iOS apps.\nYou can download the\n<a href=\"https://itunes.apple.com/en/app/xcode/id497799835?mt=12\">latest version of Xcode</a>\nfrom the Mac App Store.</p>\n<h3 id=\"cocoapods\">CocoaPods</h3>\n<p><a href=\"https://cocoapods.org/\">CocoaPods</a> manages the library dependencies for your\nXcode projects.</p>\n<p>You can install CocoaPods by opening the terminal and run the command below.\nIt may take a few minutes to complete.</p>\n<pre><code class=\"language-bash\"><span class=\"token function\">sudo</span> gem <span class=\"token function\">install</span> cocoapods</code></pre><h2 id=\"creating-a-new-ios-app-project\">Creating a new iOS app project</h2>\n<ol>\n<li>Before creating the iOS app project, you need to make sure the Specs Repo is up-to-date:<pre><code class=\"language-bash\">pod repo update</code></pre></li>\n<li>You can then create the scaffolding project by <code>pod lib create</code> using the\nSkygear scaffolding template. You should change <code>YourProjectName</code> to your\npreferred one in the command below:<pre><code class=\"language-bash\">pod lib create --silent --template-url<span class=\"token operator\">=</span>https://github.com/SkygearIO/skygear-Scaffolding-iOS.git <span class=\"token string\">\"YourProjectName\"</span></code></pre></li>\n<li><p>You will be prompted with a few questions for setting up the project:</p>\n<ul>\n<li><h4 id=\"skygear-server-endpoint-and-api-key\">Skygear server endpoint and API key</h4>\n<p>You can obtain the Skygear endpoint and API key from the\n<a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>.</p>\n<pre><code class=\"language-bash\">What is your skygear endpoint (You can find it in portal)?\nExample: https://myapp.skygeario.com\n&gt; <span class=\"token keyword\">https://myapp.skygeario.com</span><br/>\nWhat is your skygear API key (You can find it in portal)?\nExample: dc0903fa85924776baa77df813901efc\n&gt; <span class=\"token keyword\">&lt;your-api-key&gt;</span></code></pre>\n</li>\n<li><h4 id=\"programming-language\">Programming language</h4>\n<p>You can choose between using Swift or Objective-C.</p>\n<pre><code class=\"language-bash\">What language do you want to use?? [ Swift / ObjC ]\n&gt; <span class=\"token keyword\">ObjC</span></code></pre>\n</li>\n<li><h4 id=\"class-prefix-only-applicable-for-using-objective-c-\">Class prefix (only applicable for using Objective-C)</h4>\n<p>You need to specify a 3-letter\n<a href=\"https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Conventions/Conventions.html\">class prefix</a>\nfor your code if you are using Objective-C.</p>\n<pre><code class=\"language-bash\">What is your class prefix?\n&gt; <span class=\"token keyword\">YPN</span></code></pre>\n\n\n</li>\n</ul>\n</li>\n</ol>\n<h2 id=\"we-re-done-woo-hoo-\">We&#39;re done, Woo-hoo!</h2>\n<p>Congratulations, you have your first Skygear iOS project set up! The iOS SDK\nhas been installed; and the container <code>SKYContainer</code> has been configured with\nyour server endpoint and API key. You can run the app using the emulator, which\nshould show the following screen:</p>\n<p><a href=\"https://docs.skygear.io/assets/ios/ios-app-preview.png\"><img src=\"https://docs.skygear.io/assets/ios/ios-app-preview.png\" alt=\"Screenshot: iOS SDK scaffolding app\"></a></p>\n";

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<p>To add the Skygear iOS SDK to your existing project, you need to:</p>\n<ol>\n<li>install the SDK through CocoaPods</li>\n<li>configure the Skygear server endpoint and API key for the SDK</li>\n</ol>\n<h2 id=\"prerequisite\">Prerequisite</h2>\n<p>The installation requires\n<a href=\"https://developer.apple.com/xcode/\">Xcode</a> and\n<a href=\"https://cocoapods.org/\">CocoaPods</a>. You can visit their websites to download\nthe latest versions.</p>\n<h2 id=\"step-1-installing-the-sdk-skykit-using-cocoapods\">Step 1: Installing the SDK (SKYKit) using CocoaPods</h2>\n<h3 id=\"creating-the-podfile\">Creating the Podfile</h3>\n<p>If you have already created the <a href=\"https://guides.cocoapods.org/using/the-podfile.html\">Podfile</a>\nbefore, you can skip this section and move ahead to add SKYKit to the <code>Podfile</code>\nas explained in the next section.</p>\n<p>To create the <code>Podfile</code>, you need to open the Terminal and navigate to the\ndirectory that contains your iOS project using the cd command:\n<code>cd ~/Path/To/Your/App</code>.\nYou can also set the path by dragging the folder icon to Terminal.</p>\n<p>And then you can create the <code>Podfile</code> using:</p>\n<pre><code class=\"language-bash\">pod init</code></pre><h3 id=\"adding-skykit-to-the-podfile\">Adding SKYKit to the Podfile</h3>\n<p>You can issue the following command in the Terminal to open the <code>Podfile</code> in Xcode.</p>\n<pre><code>open -a Xcode Podfile\n</code></pre><p>Note: You should avoid using TextEdit to edit the Podfile because it may mess up the format and confuse CocoaPods.</p>\n<p>You need to add the line <code>pod &#39;SKYKit&#39;</code> to the file as in the example below. You need to replace <code>YourProjectName</code> with your actual project name.</p>\n<pre><code>use_frameworks!\nplatform :ios, &#39;8.0&#39;\n\ntarget &#39;YourProjectName&#39; do\n    pod &#39;SKYKit&#39;\nend\n</code></pre><p>CocoaPods 0.36 or higher introduces the <code>use_frameworks!</code> instruction, so the\n<a href=\"https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html\">Objective-C bridging header</a>\nis no longer necessary if you&#39;re using Swift in your project.</p>\n<h3 id=\"installing-skykit\">Installing SKYKit</h3>\n<p>After adding SKYKit to the <code>Podfile</code>, you can install the Skygear Android SDK\nby:</p>\n<pre><code class=\"language-bash\">pod <span class=\"token function\">install</span></code></pre><p>When the installation is complete, you can use the Xcode workspace\n<code>YourProjectName.xcworkspace</code> to start developing with the SDK.</p>\n<p>If you are using Swift, you can import the SDK in each file to use it.</p>\n<h2 id=\"step-2-configuring-skygear-server-endpoint-and-api-key\">Step 2: Configuring Skygear server endpoint and API key</h2>\n<p>Before you make any API calls using the JS SDK, you must configure your skygear\ncontainer, <code>SKYContainer</code>, with your Skygear server endpoint and API key you get\nfrom the <a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>.</p>\n<p>The configuration is done in the file <code>AppDelegate.m</code>:</p>\n<ul>\n<li><p>Import the SDK as <code>SKYKit</code></p>\n<pre><code class=\"language-obj-c\">import <span class=\"token operator\">&lt;</span>SKYKit<span class=\"token operator\">/</span>SKYKit<span class=\"token punctuation\">.</span>h<span class=\"token operator\">></span></code></pre></li>\n<li><p>Add these lines in the <code>application:didFinishLaunchingWithOptions:</code> method.\nFill in your server endpoint and API key correspondingly.</p>\n<pre><code class=\"language-obj-c\">SKYContainer <span class=\"token operator\">*</span>container <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>SKYContainer defaultContainer<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">[</span>container configAddress<span class=\"token punctuation\">:</span><span class=\"token string\">@\"https://your-endpoint.skygeario.com/\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">//Your server endpoint</span>\n<span class=\"token punctuation\">[</span>container configureWithAPIKey<span class=\"token punctuation\">:</span><span class=\"token string\">@\"SKYGEAR_API_KEY\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">//Your Skygear API Key</span></code></pre></li>\n</ul>\n";

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<p>If you want to create a new Android app that uses Skygear, you can follow this\nguide to scaffold a new one with the Skygear Android SDK installed. After\ncreating the scaffolding app, you will have an Android app configured with your\nSkygear server endpoint and API key, with basic authentication functions for a\nuser to sign up, log in and log out, implemented using the Android SDK.</p>\n<p>To create the new Android app with the Android SDK, you need to:</p>\n<ol>\n<li>download the scaffolding Android Studio project</li>\n<li>configure the Skygear server endpoint and API key for the SDK</li>\n</ol>\n<h2 id=\"prerequisite\">Prerequisite</h2>\n<h3 id=\"android-studio\">Android Studio</h3>\n<p>You will need\n<a href=\"https://developer.android.com/studio/index.html\">Android Studio</a>\nto open the Skygear scaffolding Android Studio project.</p>\n<p>After downloading Android Studio, you can launch it to complete the setup,\nwhich includes downloading Android SDK components that are required for\ndevelopment. You can find the detailed instructions from its\n<a href=\"https://developer.android.com/studio/install.html\">documentation</a>.</p>\n<h2 id=\"step-1-downloading-the-scaffolding-android-studio-project\">Step 1: Downloading the scaffolding Android Studio project</h2>\n<p>You can download the scaffolding project from GitHub:\n<a href=\"https://github.com/SkygearIO/skygear-Scaffolding-Android\">SkygearIO/skygear-Scaffolding-Android</a>.\nYou will want to rename the folder to your desired project name.\nAfter you have done so, open it in Android Studio by selecting\n<strong>Open an existing Android Studio project</strong>.</p>\n<h2 id=\"step-2-configuring-the-skygear-server-endpoint-and-the-api-key\">Step 2: Configuring the Skygear server endpoint and the API key</h2>\n<p>To enable the Android SDK to communicate with your Skygear server, you need to\nconfigure the server endpoint and the API key.\nThe scaffolding project comes with a Gradle wrapper task <code>updateAppSettings</code>\nwhich can set the configurations for you. To run the task:</p>\n<ul>\n<li>Open the Terminal inside Android Studio</li>\n<li><p>Run the following command:</p>\n<pre><code>./gradlew updateAppSettings\n</code></pre><p>You will be prompted for entering the Skygear server endpoint and the API key,\nwhich can be obtained from the\n<a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>.</p>\n<pre><code class=\"language-bash\">What is your skygear endpoint (You can find it in portal)?\nExample: https://myapp.skygeario.com/\n&gt; <span class=\"token keyword\">https://&lt;your-app-name&gt;.skygeario.com/</span><br/>\nWhat is your skygear API key (You can find it in portal)?\nExample: dc0903fa85924776baa77df813901efc\n&gt; <span class=\"token keyword\">&lt;your-api-key&gt;</span></code></pre>\n\n</li>\n</ul>\n<p>The configurations are stored in the file <code>MyApplication.java</code>, so\nyou can also choose to manually modify the settings there.</p>\n<h3 id=\"we-re-done-woo-hoo-\">We&#39;re done, Woo-hoo!</h3>\n<p>Congratulations, you have your first Skygear Android project set up! The\nAndroid SDK has been installed and is configured with your server endpoint and\nAPI key. You can now launch your App on the emulator, which should look like the\nfollowing:</p>\n<p><a href=\"https://docs.skygear.io/assets/android/android-app-preview.png\"><img src=\"https://docs.skygear.io/assets/android/android-app-preview.png\" alt=\"Screenshot: android scaffolding app preview\"></a></p>\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<p>To add the Skygear Android SDK to your existing project, you need to:</p>\n<ol>\n<li>install the SDK by adding Skygear as a dependency</li>\n<li>configure the Skygear server endpoint and API key for the SDK</li>\n<li>update the app manifest</li>\n</ol>\n<h2 id=\"step-1-installing-sdk\">Step 1: Installing SDK</h2>\n<ul>\n<li><p>First, you need to make sure the JCenter Maven repository is included in the\nfile <code>build.gradle</code> of your project (NOT the <code>build.gradle</code> of the module).</p>\n<pre><code class=\"language-gradle\">allprojects <span class=\"token punctuation\">{</span>\n    repositories <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">jcenter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre></li>\n<li><p>Next, you need to add Skygear as a dependency by including\n<code>io.skygear:skygear+</code> in the dependency list in the file <code>build.gradle</code>\nof your module (NOT the <code>build.gradle</code> of the project).</p>\n</li>\n</ul>\n<pre><code class=\"language-gradle\">dependencies <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// other dependencies</span>\n    compile <span class=\"token string\">'io.skygear:skygear:+'</span>\n<span class=\"token punctuation\">}</span></code></pre><ul>\n<li>You will be hinted for a project sync since you have updated the gradle file.\nAfter syncing, the Android SDK has been installed successfully.</li>\n</ul>\n<h2 id=\"step-2-configuring-the-skygear-server-endpoint-and-the-api-key\">Step 2: Configuring the Skygear server endpoint and the API key</h2>\n<p>To enable the Android SDK to communicate with your Skygear server, you need to\nconfigure the server endpoint and the API key, which you can obtain from the\n<a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>.</p>\n<p>There are two methods you can configure your SDK.</p>\n<h3 id=\"method-1-a-custom-application-that-extends-skygearapplication-\">Method 1: A custom application that extends <code>SkygearApplication</code></h3>\n<p>By making your application extend <code>SkygearApplication</code>, you can simply\noverride the two methods <code>getSkygearEndpoint</code> and <code>getApiKey</code>. The\n<code>SkygearApplication</code> will then configure the SDK for you.</p>\n<p>Assuming your custom application is defined in the file <code>MyApplication.java</code>:</p>\n<pre><code class=\"language-java\"><span class=\"token keyword\">import</span> io<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>SkygearApplication<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">public</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">MyApplication</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">SkygearApplication</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token annotation punctuation\">@Override</span>\n    <span class=\"token keyword\">public</span> String <span class=\"token function\">getSkygearEndpoint</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token string\">\"https://&lt;your-app-name>.skygeario.com/\"</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token annotation punctuation\">@Override</span>\n    <span class=\"token keyword\">public</span> String <span class=\"token function\">getApiKey</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token string\">\"&lt;your-api-key>\"</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre><h3 id=\"method-2-building-the-config-when-the-application-starts\">Method 2: Building the config when the application starts</h3>\n<p>If you have your own custom application class, you can configure the container\nwith your Skygear server endpoint and the API key in <code>onCreate</code> of the\n<code>Application</code>. An example is shown below:</p>\n<pre><code class=\"language-java\"><span class=\"token keyword\">import</span> io<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>Container<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> io<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>skygear<span class=\"token punctuation\">.</span>Configuration<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">public</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">MyApplication</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Application</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token annotation punctuation\">@Override</span>\n    <span class=\"token keyword\">public</span> <span class=\"token keyword\">void</span> <span class=\"token function\">onCreate</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">super</span><span class=\"token punctuation\">.</span><span class=\"token function\">onCreate</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        Configuration config <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Configuration<span class=\"token punctuation\">.</span>Builder</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                <span class=\"token punctuation\">.</span><span class=\"token function\">endPoint</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"https://&lt;your-app-name>.skygeario.com/\"</span><span class=\"token punctuation\">)</span>\n                <span class=\"token punctuation\">.</span><span class=\"token function\">apiKey</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"&lt;your-api-key>\"</span><span class=\"token punctuation\">)</span>\n                <span class=\"token punctuation\">.</span><span class=\"token function\">build</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        Container<span class=\"token punctuation\">.</span><span class=\"token function\">defaultContainer</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">configure</span><span class=\"token punctuation\">(</span>config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre><h2 id=\"step-3-updating-the-app-manifest\">Step 3: Updating the App Manifest</h2>\n<p>For the Android SDK to work, you also need to make sure these two things are\nset in the <code>AndroidManifest.xml</code>:</p>\n<ol>\n<li>You need to include the <code>android.permission.INTERNET</code> permission.\nThis is for allowing the SDK to communicate with the Skygear server.</li>\n<li>You need to specify the class used as the <code>Application</code> subclass through the\n<code>android:name</code> attribute of the <code>application</code> tag. <em>Note: you may not\nneed to do this if you have an existing application defined.</em></li>\n</ol>\n<p>The updated <code>AndroidManifest.xml</code> should contain the following:</p>\n<pre><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>uses-permission</span> <span class=\"token attr-name\"><span class=\"token namespace\">android:</span>name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>android.permission.INTERNET<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>application</span>\n    <span class=\"token attr-name\"><span class=\"token namespace\">android:</span>name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.MyApplication<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>application</span><span class=\"token punctuation\">></span></span></code></pre>";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<p>If you want to create a new web app that uses Skygear, you can use the Skygear\ngenerator to scaffold a new one with\n<a href=\"https://facebook.github.io/react/\">React.js</a>, <a href=\"https://babeljs.io/\">Babel 6</a>,\n<a href=\"https://webpack.github.io/\">webpack</a> and Skygear. After creating the\nscaffolding app, you will have a web app configured with your Skygear server\nendpoint and API key, with basic authentication functions for a user to sign up,\nlog in and log out, implemented using the JS SDK.</p>\n<h2 id=\"prerequisite\">Prerequisite</h2>\n<p>You will need <a href=\"https://nodejs.org\">Node.js</a> for running the scaffolding\ngenerator. Our supported versions are <code>node6+</code> and <code>npm3+</code>.</p>\n<p>You can install it by the following:</p>\n<pre><code class=\"language-bash\"><span class=\"token comment\" spellcheck=\"true\"># for MacOS</span>\nbrew <span class=\"token function\">install</span> node\n\n<span class=\"token comment\" spellcheck=\"true\"># for Debian/Ubuntu</span>\ncurl -sL https://deb.nodesource.com/setup_6.x <span class=\"token operator\">|</span> <span class=\"token function\">sudo</span> -E <span class=\"token function\">bash</span> -\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y nodejs</code></pre><p>If you are using a different operating system, please visit\n<a href=\"https://nodejs.org/en/download\">Node.js downloads</a> for instructions.\nIf the bash shell is not available on your machine (such as Windows),\nwe recommend using <a href=\"https://git-scm.com/downloads\">GitBash</a>.</p>\n<h2 id=\"installing-and-running-the-scaffolding-generator\">Installing and running the scaffolding generator</h2>\n<p>After Node.js is installed, you can proceed with installing and running the\n<a href=\"https://github.com/SkygearIO/generator-skygear\">yeoman Skygear scaffolding generator</a>.</p>\n<pre><code class=\"language-bash\"><span class=\"token comment\" spellcheck=\"true\"># install yeoman and skygear generator globally</span>\n<span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g yo\n<span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g generator-skygear\n\n<span class=\"token comment\" spellcheck=\"true\"># create your project folder</span>\n<span class=\"token function\">mkdir</span> new-skygear-project\n<span class=\"token function\">cd</span> new-skygear-project\n\n<span class=\"token comment\" spellcheck=\"true\"># generate your project</span>\nyo skygear</code></pre><p>The generator will ask you a few questions to help you configure your app and\nSkygear automatically.</p>\n<h3 id=\"1-skygear-server-endpoint-and-api-key\">1. Skygear server endpoint and API key</h3>\n<p>You can obtain the Skygear endpoint and API key from the\n<a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>. Make sure you include\nthe trailing slash in your endpoint.</p>\n<pre><code class=\"language-bash\">? What is your skygear endpoint? (You can find it in portal) <span class=\"token keyword\">https://&lt;your-app-name&gt;.skygeario.com/</span>\n? What is your skygear API key (You can find it in portal) <span class=\"token keyword\">&lt;your-api-key&gt;</span></code></pre>\n\n<h3 id=\"2-app-configuration\">2. App configuration</h3>\n<p>These are the configurations for setting up the React.js and webpack\nenvironment.</p>\n<pre><code class=\"language-bash\">? Please choose your application name <span class=\"token keyword\">&lt;your-app-name&gt;</span>\n? Which style language do you want to use? <span class=\"token keyword\">css/sass/scss/less/stylus</span>\n? Enable postcss? <span class=\"token keyword\">yes/no</span></code></pre>\n\n<h3 id=\"3-overwriting-files-for-skygear-configuration\">3. Overwriting files for Skygear configuration</h3>\n<p>The Skygear scaffolding generator needs to rewrite several files to configure\nSkygear for you. You need to confirm the overwriting operations to proceed.</p>\n<pre><code class=\"language-bash\">? Overwrite src/components/Main.js? <span class=\"token keyword\">y</span>\n? Overwrite src/config/base.js? <span class=\"token keyword\">y</span>\n? Overwrite src/index.js? <span class=\"token keyword\">y</span>\n? Overwrite cfg/base.js? <span class=\"token keyword\">y</span></code></pre>\n\n\n<h2 id=\"we-re-done-woo-hoo-\">We&#39;re done, Woo-hoo!</h2>\n<p>To launch your web app, run</p>\n<pre><code class=\"language-bash\"><span class=\"token function\">npm</span> start</code></pre><p>Congratulations, you have your first skygear web project set up!\nReact.js, Babel 6 and Webpack have been set up for you; the Skygear container\nhas also been configured with your server endpoint and API key.\nYou should see the following in your browser by following the link at shell.</p>\n<p><a href=\"https://docs.skygear.io/assets/js/js-app-preview.png\"><img src=\"https://docs.skygear.io/assets/js/js-app-preview.png\" alt=\"Screenshot: js scaffolding app preview\"></a></p>\n";

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<p>To add the Skygear JS SDK to your existing project, you need to:</p>\n<ol>\n<li>install (and import) the SDK</li>\n<li>configure the Skygear server endpoint and API key for the SDK</li>\n</ol>\n<h2 id=\"step-1-installing-the-sdk\">Step 1: Installing the SDK</h2>\n<p>The JS SDK can be easily integrated with your existing project using several\nways: as HTML5 project, Node.js project, webpack project or React Native\nproject.</p>\n<h3 id=\"html5-project\">HTML5 project</h3>\n<p>The Skygear JS SDK can be included as a minified external script through CDN,\nlike the following:</p>\n<pre><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//code.skygear.io/js/polyfill/latest/polyfill.min.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script language-javascript\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//code.skygear.io/js/skygear/latest/skygear.min.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script language-javascript\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script language-javascript\">\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>skygear<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// the skygear container</span>\n</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre><p>In this way, you will have the Skygear container object as <code>skygear</code> in the\nglobal scope.</p>\n<p>The polyfill, which should be placed before the <code>skygear.min.js</code>, is used to\nimplant HTML5 functionality in browsers that don&#39;t natively support them.</p>\n<h3 id=\"node-js-project\">Node.js project</h3>\n<p>Skygear JS SDK can be directly used in Node.js environment. Simply install it\nvia <a href=\"https://www.npmjs.com\">npm</a> and use it in your project.</p>\n<pre><code class=\"language-bash\"><span class=\"token function\">npm</span> <span class=\"token function\">install</span> skygear --save</code></pre><pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> skygear <span class=\"token keyword\">from</span> <span class=\"token string\">'skygear'</span><span class=\"token punctuation\">;</span></code></pre><p>If you are using Node.js v0.x, you need to include\n<a href=\"https://babeljs.io/docs/usage/polyfill/\">Babel Polyfill</a> before importing the\nSkygear SDK.</p>\n<pre><code class=\"language-bash\"><span class=\"token function\">npm</span> <span class=\"token function\">install</span> babel-polyfill --save-dev</code></pre><pre><code class=\"language-javascript\"><span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'babel-polyfill'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> skygear <span class=\"token keyword\">from</span> <span class=\"token string\">'skygear'</span><span class=\"token punctuation\">;</span></code></pre><h3 id=\"webpack-project\">Webpack project</h3>\n<p>If you are using <a href=\"https://webpack.github.io/\">webpack</a> to bundle your modules,\nyou need to configure it correctly to make Skygear work in the web environment.</p>\n<p>In your webpack configuration file (by default <code>webpack.config.js</code>), add the\nfollowing lines in the externals, like the followings:</p>\n<pre><code class=\"language-javascript\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">/* your own configurations */</span>\n  externals<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'react-native'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\" spellcheck=\"true\">// don't include react-native</span>\n    <span class=\"token string\">'websocket'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'undefined'</span>      <span class=\"token comment\" spellcheck=\"true\">// don't include node.js websocket</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre><h3 id=\"react-native-project\">React Native project</h3>\n<p>The SDK works well with\n<a href=\"https://facebook.github.io/react-native/\">React Native</a>.\nWith an existing React Native project, simply do</p>\n<pre><code class=\"language-bash\"><span class=\"token function\">npm</span> <span class=\"token function\">install</span> --save skygear</code></pre><p>and then you can import the SDK in your <code>index.ios.js</code> and <code>index.android.js</code>\nby:</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> skygear <span class=\"token keyword\">from</span> <span class=\"token string\">'skygear'</span></code></pre><p><a name=\"set-up-app\"></a></p>\n<h2 id=\"step-2-configuring-the-skygear-server-endpoint-and-api-key\">Step 2: Configuring the Skygear server endpoint and API key</h2>\n<p>Before you make any API calls using the JS SDK, you must configure your skygear\ncontainer, <code>skygear</code>, with your Skygear server endpoint and API key you get from\nthe <a href=\"https://portal.skygear.io/app/info\">Skygear Portal</a>.</p>\n<pre><code class=\"language-javascript\">skygear<span class=\"token punctuation\">.</span><span class=\"token function\">config</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'endPoint'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'https://&lt;your-app-name>.skygeario.com/'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// trailing slash is required</span>\n  <span class=\"token string\">'apiKey'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'&lt;your-api-key>'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'skygear container is now ready for making API calls.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>";

/***/ }
/******/ ])));