/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["absmartly"] = factory();
	else
		root["absmartly"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../javascript-client/node_modules/isomorphic-unfetch/browser.js":
/*!***********************************************************************!*\
  !*** ../javascript-client/node_modules/isomorphic-unfetch/browser.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = self.fetch || (self.fetch = __webpack_require__(/*! unfetch */ \"../javascript-client/node_modules/unfetch/dist/unfetch.module.js\").default || __webpack_require__(/*! unfetch */ \"../javascript-client/node_modules/unfetch/dist/unfetch.module.js\"));\n\n\n//# sourceURL=webpack://absmartly/../javascript-client/node_modules/isomorphic-unfetch/browser.js?");

/***/ }),

/***/ "../javascript-client/node_modules/unfetch/dist/unfetch.module.js":
/*!************************************************************************!*\
  !*** ../javascript-client/node_modules/unfetch/dist/unfetch.module.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||\"get\",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+\",\"+t:t}),t(a())},s.onerror=r,s.withCredentials=\"include\"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})}\n//# sourceMappingURL=unfetch.module.js.map\n\n\n//# sourceURL=webpack://absmartly/../javascript-client/node_modules/unfetch/dist/unfetch.module.js?");

/***/ }),

/***/ "../javascript-client/lib/client.js":
/*!******************************************!*\
  !*** ../javascript-client/lib/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ \"../javascript-client/node_modules/isomorphic-unfetch/browser.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n} // eslint-disable-line no-shadow\n\n\nvar Client = /*#__PURE__*/function () {\n  function Client(options) {\n    _classCallCheck(this, Client);\n\n    this.options = Object.assign({\n      endpoint: undefined,\n      apiKey: undefined,\n      environment: undefined,\n      agent: \"javascript-client\",\n      application: {\n        name: \"default\",\n        version: 0\n      },\n      retries: 5,\n      timeout: 500\n    }, options);\n\n    for (var _i = 0, _arr = [\"apiKey\", \"endpoint\", \"environment\"]; _i < _arr.length; _i++) {\n      var key = _arr[_i];\n\n      if (key in this.options && this.options[key] !== undefined) {\n        var value = this.options[key];\n\n        if (typeof value !== \"string\" || value.length === 0) {\n          throw new Error(\"Invalid '\".concat(key, \"' in options argument\"));\n        }\n      } else {\n        throw new Error(\"Missing '\".concat(key, \"' in options argument\"));\n      }\n    }\n\n    this.delay = Math.max(10, options.timeout / (1 << options.retries));\n  }\n\n  _createClass(Client, [{\n    key: \"createContext\",\n    value: function createContext(params) {\n      var body = {\n        agent: this.options.agent,\n        environment: this.options.environment,\n        application: params.application || this.options.application,\n        units: params.units\n      };\n      return this.post(\"/context\", body);\n    }\n  }, {\n    key: \"publish\",\n    value: function publish(params) {\n      var body = {\n        agent: this.options.agent,\n        environment: this.options.environment,\n        guid: params.guid,\n        application: params.application || this.options.application,\n        units: params.units\n      };\n\n      if (Array.isArray(params.goals) && params.goals.length > 0) {\n        body.goals = params.goals;\n      }\n\n      if (Array.isArray(params.exposures) && params.exposures.length > 0) {\n        body.exposures = params.exposures;\n      }\n\n      if (Array.isArray(params.attributes) && params.attributes.length > 0) {\n        body.attributes = params.attributes;\n      }\n\n      return this.put(\"/context\", body);\n    }\n  }, {\n    key: \"request\",\n    value: function request(method, path, body) {\n      var _this = this;\n\n      var url = \"\".concat(this.options.endpoint).concat(path);\n\n      var tryOnce = function tryOnce() {\n        return (0, _isomorphicUnfetch.default)(url, {\n          method: method,\n          headers: {\n            \"Content-Type\": \"application/json\",\n            \"X-API-Key\": _this.options.apiKey\n          },\n          body: JSON.stringify(body, null, 0)\n        }).then(function (response) {\n          if (!response.ok) {\n            var bail = response.status >= 400 && response.status < 500;\n            return response.text().then(function (text) {\n              var error = new Error(text !== null && text.length > 0 ? text : response.statusText);\n              error._bail = bail;\n              return Promise.reject(error);\n            });\n          }\n\n          return response.json();\n        });\n      };\n\n      var wait = function wait(ms) {\n        return new Promise(function (resolve) {\n          setTimeout(resolve, ms);\n        });\n      };\n\n      var tryWith = function tryWith(retries, timeout) {\n        var tries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n        var waited = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n        return tryOnce().catch(function (reason) {\n          if (reason._bail || tries >= retries || waited >= timeout) {\n            return Promise.reject(reason);\n          }\n\n          var delay = (1 << tries) * _this.delay + 0.5 * Math.random() * _this.delay;\n\n          if (waited + delay > timeout) {\n            delay = timeout - waited;\n          }\n\n          return wait(delay).then(function () {\n            return tryWith(retries, timeout, tries + 1, waited + delay);\n          });\n        });\n      };\n\n      return tryWith(this.options.retries, this.options.timeout);\n    }\n  }, {\n    key: \"post\",\n    value: function post(path, body) {\n      return this.request(\"POST\", path, body);\n    }\n  }, {\n    key: \"put\",\n    value: function put(path, body) {\n      return this.request(\"PUT\", path, body);\n    }\n  }]);\n\n  return Client;\n}();\n\nexports.default = Client;\n\n//# sourceURL=webpack://absmartly/../javascript-client/lib/client.js?");

/***/ }),

/***/ "../javascript-client/lib/index.js":
/*!*****************************************!*\
  !*** ../javascript-client/lib/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"Client\", ({\n  enumerable: true,\n  get: function get() {\n    return _client.default;\n  }\n}));\n\nvar _client = _interopRequireDefault(__webpack_require__(/*! ./client */ \"../javascript-client/lib/client.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\n//# sourceURL=webpack://absmartly/../javascript-client/lib/index.js?");

/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _sdk = _interopRequireDefault(__webpack_require__(/*! ./sdk */ \"./src/sdk.js\"));\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  SDK: _sdk.default,\n  mergeConfig: _config.mergeConfig\n};\nexports.default = _default;\n\n//# sourceURL=webpack://absmartly/./src/browser.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.mergeConfig = mergeConfig;\n\nvar _default = _interopRequireDefault(__webpack_require__(/*! rfdc/default */ \"./node_modules/rfdc/default.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction mergeConfig(context, previousConfig) {\n  var merged = (0, _default.default)(previousConfig);\n  var experiments = context.experiments();\n\n  var isObject = function isObject(x) {\n    return x instanceof Object && x.constructor === Object;\n  };\n\n  var _iterator = _createForOfIteratorHelper(experiments),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var experimentName = _step.value;\n      var experimentConfig = context.experimentConfig(experimentName);\n\n      var _iterator2 = _createForOfIteratorHelper(experimentConfig),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var configKey = _step2.value;\n          var target = merged;\n          var key = configKey.key;\n\n          if (key.indexOf(\".\") !== -1) {\n            var frags = key.split(\".\");\n            key = frags.pop();\n\n            for (var index in frags) {\n              var frag = frags[index];\n\n              if (frag in target) {\n                if (isObject(target[frag])) {\n                  target = target[frag];\n                } else {\n                  console.warn(\"Config key '\".concat(configKey.key, \"' for experiment '\").concat(experimentName, \"' is overriding non-object value at '\").concat(frags.slice(0, index + 1).join(\".\"), \"' with an object.\"));\n                  target = target[frag] = {};\n                }\n              } else {\n                target = target[frag] = {};\n              }\n            }\n          }\n\n          if (key in target && \"_\".concat(key, \"_setter\") in Object.getOwnPropertyDescriptor(target, key)) {\n            console.error(\"Config key '\".concat(configKey.key, \"' already set by experiment \").concat(target[\"_\".concat(key, \"_setter\")]));\n          } else {\n            (function () {\n              Object.defineProperty(target, \"_\".concat(key, \"_setter\"), {\n                value: experimentName,\n                writable: false\n              });\n              var value = void 0;\n\n              switch (configKey.format || \"string\") {\n                case \"string\":\n                  value = configKey.value;\n                  break;\n\n                case \"json\":\n                  try {\n                    value = JSON.parse(configKey.value);\n                  } catch (e) {\n                    console.warn(\"Error parsing JSON in Config key '\".concat(configKey.key, \"' for experiment '\").concat(experimentName, \"': \").concat(e));\n                  }\n\n                  break;\n\n                default:\n                  console.warn(\"Unsupported format '\".concat(configKey.format, \"' in Config key '\").concat(configKey.key, \"' for experiment '\").concat(experimentName, \"'.\"));\n                  value = configKey.value;\n                  break;\n              }\n\n              if (key in target) {\n                if (isObject(target[key]) && !isObject(value)) {\n                  console.warn(\"Config key '\".concat(configKey.key, \"' for experiment '\").concat(experimentName, \"' is overriding object with non-object value.\"));\n                } else if (!isObject(target[key]) && isObject(value)) {\n                  console.warn(\"Config key '\".concat(configKey.key, \"' for experiment '\").concat(experimentName, \"' is overriding non-object value with object.\"));\n                }\n              }\n\n              Object.defineProperty(target, key, {\n                get: function get() {\n                  context.treatment(experimentName);\n                  return value;\n                }\n              });\n            })();\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return merged;\n}\n\n//# sourceURL=webpack://absmartly/./src/config.js?");

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Context = /*#__PURE__*/function () {\n  function Context(sdk, client, promise) {\n    var _this = this;\n\n    _classCallCheck(this, Context);\n\n    this.sdk = sdk;\n    this.client = client;\n    this.pendingCount = 0;\n    this.failed = false;\n\n    var initialize = function initialize(data) {\n      _this._data = data;\n      _this.assignments = Object.assign.apply(Object, [{}].concat(_toConsumableArray((data.assignments || []).map(function (experiment, index) {\n        return _defineProperty({}, experiment.name, index);\n      }))));\n      _this.exposed = {};\n      _this.pendingExposures = [];\n      _this.pendingGoals = [];\n      _this.currentAttributes = [];\n    };\n\n    if (promise instanceof Promise) {\n      this.promise = promise.then(function (data) {\n        initialize(data);\n        delete _this.promise;\n      }).catch(function (error) {\n        console.error(\"ABSmartly Context: \".concat(error));\n        initialize({});\n        _this.failed = true;\n        delete _this.promise;\n      });\n    } else {\n      initialize(promise);\n    }\n  }\n\n  _createClass(Context, [{\n    key: \"isReady\",\n    value: function isReady() {\n      return this.promise === undefined;\n    }\n  }, {\n    key: \"isFailed\",\n    value: function isFailed() {\n      return this.failed;\n    }\n  }, {\n    key: \"ready\",\n    value: function ready() {\n      var _this2 = this;\n\n      if (this.isReady()) {\n        return Promise.resolve(true);\n      }\n\n      return new Promise(function (resolve) {\n        _this2.promise.then(function () {\n          return resolve(true);\n        }).catch(function (e) {\n          return resolve(e);\n        });\n      });\n    }\n  }, {\n    key: \"pending\",\n    value: function pending() {\n      return this.pendingCount;\n    }\n  }, {\n    key: \"data\",\n    value: function data() {\n      this._checkReady();\n\n      return this._data;\n    }\n  }, {\n    key: \"publish\",\n    value: function publish() {\n      var _this3 = this;\n\n      this._checkReady();\n\n      return new Promise(function (resolve, reject) {\n        _this3._flush(function (error) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve();\n          }\n        });\n      });\n    }\n  }, {\n    key: \"attribute\",\n    value: function attribute(attrName, value) {\n      this.currentAttributes.push({\n        name: attrName,\n        value: value.toString(),\n        setAt: Date.now()\n      });\n    }\n  }, {\n    key: \"attributes\",\n    value: function attributes(attrs) {\n      var now = Date.now();\n\n      for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            attrName = _Object$entries$_i[0],\n            value = _Object$entries$_i[1];\n\n        this.currentAttributes.push({\n          name: attrName,\n          value: value.toString(),\n          setAt: now\n        });\n      }\n    }\n  }, {\n    key: \"treatment\",\n    value: function treatment(experimentName, callback) {\n      return this._treatment(experimentName, callback);\n    }\n  }, {\n    key: \"track\",\n    value: function track(goalName, values, callback) {\n      return this._track(goalName, values, callback);\n    }\n  }, {\n    key: \"experiments\",\n    value: function experiments() {\n      this._checkReady();\n\n      return Object.keys(this.assignments);\n    }\n  }, {\n    key: \"experimentConfig\",\n    value: function experimentConfig(experimentName) {\n      this._checkReady();\n\n      if (experimentName in this.assignments) {\n        return this._data.assignments[this.assignments[experimentName]].config || [];\n      }\n\n      return [];\n    }\n  }, {\n    key: \"_checkReady\",\n    value: function _checkReady() {\n      if (!this.isReady()) {\n        throw new Error(\"ABSmartly Context is not yet ready.\");\n      }\n    }\n  }, {\n    key: \"_treatment\",\n    value: function _treatment(experimentName) {\n      this._checkReady();\n\n      var assigned = (experimentName in this.assignments);\n      var variant = assigned ? this._data.assignments[this.assignments[experimentName]].variant : 0;\n      var exposed = (experimentName in this.exposed);\n\n      if (!exposed) {\n        this.pendingExposures.push({\n          name: experimentName,\n          variant: variant,\n          exposedAt: Date.now(),\n          assigned: assigned\n        });\n        this.pendingCount++;\n        this.exposed[experimentName] = true;\n      }\n\n      return variant;\n    }\n  }, {\n    key: \"_track\",\n    value: function _track(goalName) {\n      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      this._checkReady();\n\n      if (values !== null && values !== undefined) {\n        if (!Array.isArray(values)) {\n          values = [values];\n        } else if (values.length > 2) {\n          throw new Error(\"Goal values array length must be <= 2.\");\n        }\n\n        if (values.some(function (x) {\n          return !Number.isInteger(x);\n        })) {\n          throw new Error(\"Goal values must be integers\");\n        }\n      }\n\n      this.pendingGoals.push({\n        name: goalName,\n        values: values,\n        achievedAt: Date.now()\n      });\n      this.pendingCount++;\n    }\n  }, {\n    key: \"_flush\",\n    value: function _flush(callback) {\n      if (this.pendingCount === 0) {\n        if (typeof callback === \"function\") {\n          callback();\n        }\n      } else {\n        if (!this.failed) {\n          var request = {\n            guid: this._data.guid,\n            units: this._data.units,\n            application: this._data.application\n          };\n\n          if (this.pendingGoals.length > 0) {\n            request.goals = this.pendingGoals.map(function (x) {\n              return {\n                name: x.name,\n                achievedAt: x.achievedAt,\n                values: x.values\n              };\n            });\n          }\n\n          if (this.pendingExposures.length > 0) {\n            request.exposures = this.pendingExposures.map(function (x) {\n              return {\n                name: x.name,\n                exposedAt: x.exposedAt,\n                variant: x.variant,\n                assigned: x.assigned\n              };\n            });\n          }\n\n          if (this.currentAttributes.length > 0) {\n            request.attributes = this.currentAttributes.map(function (x) {\n              return {\n                name: x.name,\n                value: x.value,\n                setAt: x.setAt\n              };\n            });\n          }\n\n          this.client.publish(request).then(function () {\n            if (typeof callback === \"function\") {\n              callback();\n            }\n          }).catch(function (e) {\n            if (typeof callback === \"function\") {\n              callback(e);\n            }\n          });\n        } else {\n          if (typeof callback === \"function\") {\n            callback();\n          }\n        }\n\n        this.pendingCount = 0;\n        this.pendingExposures = [];\n        this.pendingGoals = [];\n      }\n    }\n  }]);\n\n  return Context;\n}();\n\nexports.default = Context;\n\n//# sourceURL=webpack://absmartly/./src/context.js?");

/***/ }),

/***/ "./src/sdk.js":
/*!********************!*\
  !*** ./src/sdk.js ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _javascriptClient = __webpack_require__(/*! @absmartly/javascript-client */ \"../javascript-client/lib/index.js\");\n\nvar _context = _interopRequireDefault(__webpack_require__(/*! ./context */ \"./src/context.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SDK = /*#__PURE__*/function () {\n  function SDK(options) {\n    _classCallCheck(this, SDK);\n\n    options = Object.assign({\n      agent: \"javascript-sdk\"\n    }, options);\n    this.client = new _javascriptClient.Client(options);\n  }\n\n  _createClass(SDK, [{\n    key: \"createContext\",\n    value: function createContext(params) {\n      var transformed = Object.assign({}, params, {\n        units: Object.keys(params.units).map(function (type) {\n          return {\n            type: type,\n            uid: params.units[type]\n          };\n        })\n      });\n      var data = this.client.createContext(transformed);\n      return new _context.default(this, this.client, data);\n    }\n  }, {\n    key: \"createContextWith\",\n    value: function createContextWith(data) {\n      return new _context.default(this, this.client, data);\n    }\n  }]);\n\n  return SDK;\n}();\n\nexports.default = SDK;\n\n//# sourceURL=webpack://absmartly/./src/sdk.js?");

/***/ }),

/***/ "./node_modules/rfdc/default.js":
/*!**************************************!*\
  !*** ./node_modules/rfdc/default.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./index.js */ \"./node_modules/rfdc/index.js\")()\n\n\n//# sourceURL=webpack://absmartly/./node_modules/rfdc/default.js?");

/***/ }),

/***/ "./node_modules/rfdc/index.js":
/*!************************************!*\
  !*** ./node_modules/rfdc/index.js ***!
  \************************************/
/***/ (function(module) {

"use strict";
eval("\nmodule.exports = rfdc\n\nfunction copyBuffer (cur) {\n  if (cur instanceof Buffer) {\n    return Buffer.from(cur)\n  }\n\n  return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)\n}\n\nfunction rfdc (opts) {\n  opts = opts || {}\n\n  if (opts.circles) return rfdcCircles(opts)\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        a2[k] = fn(cur)\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = clone(cur)\n      }\n    }\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = cloneProto(cur)\n      }\n    }\n    return o2\n  }\n}\n\nfunction rfdcCircles (opts) {\n  var refs = []\n  var refsNew = []\n\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        var index = refs.indexOf(cur)\n        if (index !== -1) {\n          a2[k] = refsNew[index]\n        } else {\n          a2[k] = fn(cur)\n        }\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = clone(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = cloneProto(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n}\n\n\n//# sourceURL=webpack://absmartly/./node_modules/rfdc/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/browser.js");
/******/ })()
.default;
});