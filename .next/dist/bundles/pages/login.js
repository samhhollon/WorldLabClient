module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\components\\Navbar.js";




var Navbar = function Navbar(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav-wrapper teal lighten-2 navPadding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "brand-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "WorldLab"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    id: "nav-mobile",
    className: "right hide-on-med-and-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navSpacing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "navSpacing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: "/public",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Public"))), isLoggedIn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/secret",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Secret"))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Login"))), isLoggedIn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Logout"))) : '')));
};

Navbar.propTypes = {
  isLoggedIn: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_auth0__ = __webpack_require__("./static/auth0.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_template__ = __webpack_require__("./static/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(__WEBPACK_IMPORTED_MODULE_1__static_auth0__["a" /* login */])();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__static_template__["a" /* default */])(Login));

/***/ }),

/***/ "./settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return domain; });
var clientID = process.env.CLIENTID || 'TPGKaUs8BZvBxS2LlqmDTHi7TDULpAaM'; //Auth0 Client ID

var domain = process.env.DOMAIN || 'worldlab.auth0.com'; //Auth0 Domain



/***/ }),

/***/ "./static/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTokenForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return verifyToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("./settings.js");


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



/***/ }),

/***/ "./static/auth0.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auth0_js__ = __webpack_require__("auth0-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("./settings.js");


var clientID = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* clientID */];
var domain = __WEBPACK_IMPORTED_MODULE_1__settings__["b" /* domain */];

function webAuth(clientID, domain) {
  return new __WEBPACK_IMPORTED_MODULE_0_auth0_js___default.a.WebAuth({
    clientID: clientID,
    domain: domain
  });
}

function login() {
  var options = {
    responseType: 'id_token',
    redirectUri: 'http://localhost:3000/redirect',
    scope: 'openid profile email'
  };
  return webAuth(clientID, domain).authorize(options);
}

function parseHash(cb) {
  return webAuth(clientID, domain).parseHash(cb);
}

function logout() {
  return webAuth(clientID, domain).logout();
}



/***/ }),

/***/ "./static/template.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_auth__ = __webpack_require__("./static/auth.js");

var _jsxFileName = "C:\\Users\\Sam\\Google Drive\\WorldLabCode\\static\\template.js";

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




/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
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
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/login.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "auth0-js":
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jsonwebtoken":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map