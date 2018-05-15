webpackHotUpdate(4,{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return domain; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var clientID = process.env.CLIENTID || 'TPGKaUs8BZvBxS2LlqmDTHi7TDULpAaM'; //Auth0 Client ID

var domain = process.env.DOMAIN || 'worldlab.auth0.com'; //Auth0 Domain


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clientID, "clientID", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\settings.js");
  reactHotLoader.register(domain, "domain", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\settings.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./static/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export saveToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTokenForServer; });
/* unused harmony export verifyToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__("./node_modules/jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("./settings.js");


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






function getJWK() {
  return _getJWK.apply(this, arguments);
}

function _getJWK() {
  _getJWK = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
    var res, jwk;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("https://".concat(__WEBPACK_IMPORTED_MODULE_4__settings__["b" /* domain */], "/.well-known/jwks.json"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jwk = _context.sent;
            return _context.abrupt("return", jwk);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getJWK.apply(this, arguments);
}

function saveToken(jwtToken, accessToken) {
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('user', __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(jwtToken));
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('jwtToken', jwtToken);
}

;

function deleteToken() {
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.remove('user');
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.remove('jwtToken');
}

;

function verifyToken(_x) {
  return _verifyToken.apply(this, arguments);
}

function _verifyToken() {
  _verifyToken = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(token) {
    var decodedToken, jwk, cert;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 18;
              break;
            }

            decodedToken = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(token, {
              complete: true
            });
            _context2.next = 4;
            return getJWK();

          case 4:
            jwk = _context2.sent;
            cert = jwk.keys[0].x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

            if (!(jwk.keys[0].kid === decodedToken.header.kid)) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 9;
            __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.verify(token, cert);
            return _context2.abrupt("return", true);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);
            console.error(_context2.t0);
            return _context2.abrupt("return", false);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[9, 14]]);
  }));
  return _verifyToken.apply(this, arguments);
}

function getTokenForBrowser() {
  return _getTokenForBrowser.apply(this, arguments);
}

function _getTokenForBrowser() {
  _getTokenForBrowser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
    var token, validToken;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.getJSON('jwtToken');
            _context3.next = 3;
            return verifyToken(token);

          case 3:
            validToken = _context3.sent;

            if (!validToken) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.getJSON('user'));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getTokenForBrowser.apply(this, arguments);
}

function getTokenForServer(_x2) {
  return _getTokenForServer.apply(this, arguments);
}

function _getTokenForServer() {
  _getTokenForServer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(req) {
    var jwtFromCookie, token, validToken;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.headers.cookie) {
              _context4.next = 13;
              break;
            }

            jwtFromCookie = req.headers.cookie.split(';').find(function (c) {
              return c.trim().startsWith('jwtToken=');
            });

            if (jwtFromCookie) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", undefined);

          case 4:
            token = jwtFromCookie.split('=')[1];
            _context4.next = 7;
            return verifyToken(token);

          case 7:
            validToken = _context4.sent;

            if (!validToken) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(token));

          case 12:
            return _context4.abrupt("return", undefined);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getTokenForServer.apply(this, arguments);
}


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getJWK, "getJWK", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  reactHotLoader.register(saveToken, "saveToken", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  reactHotLoader.register(deleteToken, "deleteToken", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  reactHotLoader.register(verifyToken, "verifyToken", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  reactHotLoader.register(getTokenForBrowser, "getTokenForBrowser", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  reactHotLoader.register(getTokenForServer, "getTokenForServer", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/template.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_auth__ = __webpack_require__("./static/auth.js");

var _jsxFileName = "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\template.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default = function _default(Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Template, _React$Component);

      function Template() {
        _classCallCheck(this, Template);

        return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
      }

      _createClass(Template, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          })));
        }
      }, {
        key: "__reactstandin__regenerateByEval",
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
            var req, loggedInUser, pageProperties;
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;

                    if (!process.browser) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_3__static_auth__["b" /* getTokenForBrowser */])();

                  case 4:
                    _context.t0 = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_3__static_auth__["c" /* getTokenForServer */])(req);

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    loggedInUser = _context.t0;
                    _context.next = 13;
                    return Page.getInitialProps;

                  case 13:
                    _context.t1 = _context.sent;

                    if (!_context.t1) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 17;
                    return Page.getInitialProps(req);

                  case 17:
                    _context.t1 = _context.sent;

                  case 18:
                    pageProperties = _context.t1;
                    return _context.abrupt("return", _objectSpread({}, pageProperties, {
                      loggedInUser: loggedInUser,
                      isLoggedIn: !!loggedInUser
                    }));

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return Template;
    }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\template.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=4.e86241f83a0dc8948fea.hot-update.js.map