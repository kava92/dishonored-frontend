webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/front-page/index.js":
/*!***********************************!*\
  !*** ./pages/front-page/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrontPage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_rest_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/rest-api */ "./lib/rest-api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./pages/front-page/styles.js");
/* harmony import */ var _ui_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/global */ "./ui/global.js");
/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/form */ "./ui/form.js");









var _jsxFileName = "/Users/pawelkawczynski/Documents/MyProjects/frontend-dishonored/pages/front-page/index.js";






var FrontPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(FrontPage, _React$Component);

  function FrontPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FrontPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FrontPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      email: "",
      password: "",
      applicationForm: "false"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state, email, password, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;

                _this.setState({
                  password: "test",
                  email: "test@gmail.com"
                });

                _context.next = 4;
                return _lib_rest_api__WEBPACK_IMPORTED_MODULE_10__["login"]({
                  email: email,
                  password: password
                });

              case 4:
                data = _context.sent;
                console.log(data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FrontPage, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["Outer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_global__WEBPACK_IMPORTED_MODULE_12__["GlobalStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["ImgContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["Logo"], {
        src: "/static/logo-frontpage.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "email",
        name: "email" //   value={username}
        //   onChange={this.onInputChange}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "password",
        name: "password" //   value={password}
        //   onChange={this.onInputChange}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_form__WEBPACK_IMPORTED_MODULE_13__["LoginButton"], {
        type: "button",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " Login"))));
    }
  }]);

  return FrontPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2eeac3712610bd1679e9.hot-update.js.map