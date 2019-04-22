webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/rest-api/auth.js":
/*!******************************!*\
  !*** ./lib/rest-api/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function login(_ref) {
  var username = _ref.username,
      password = _ref.password;
  conosle.log("jestem ttutaj");
  return callApi("/auth/login", {
    method: "post",
    body: {
      username: username,
      password: password
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.dd8dba7ce0bbddf935e8.hot-update.js.map