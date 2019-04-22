webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/rest-api/auth.js":
/*!******************************!*\
  !*** ./lib/rest-api/auth.js ***!
  \******************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./lib/rest-api/helpers.js");

function login(_ref) {
  var username = _ref.username,
      password = _ref.password;
  conosle.log("jestem ttutaj");
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["callApi"])("/auth/login", {
    method: "post",
    body: {
      username: username,
      password: password
    }
  });
}

/***/ }),

/***/ "./lib/rest-api/index.js":
/*!*******************************!*\
  !*** ./lib/rest-api/index.js ***!
  \*******************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./lib/rest-api/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["login"]; });



/***/ })

})
//# sourceMappingURL=index.js.995cec5ed842ec803ad6.hot-update.js.map