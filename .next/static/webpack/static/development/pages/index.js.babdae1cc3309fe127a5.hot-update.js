webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/rest-api/helpers.js":
/*!*********************************!*\
  !*** ./lib/rest-api/helpers.js ***!
  \*********************************/
/*! exports provided: apiUrl, callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");




var apiUrl = "https://dishonored-api-oyugjjmnll.now.sh/";
function callApi(_x) {
  return _callApi.apply(this, arguments);
}

function _callApi() {
  _callApi = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var _ref,
        body,
        _ref$method,
        method,
        _ref$headers,
        headers,
        stringifiedBody,
        response,
        responseIsJSON,
        _args = arguments;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, body = _ref.body, _ref$method = _ref.method, method = _ref$method === void 0 ? "get" : _ref$method, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers;

            if (body) {
              stringifiedBody = typeof body === "string" ? body : _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(body);
            }

            console.log(api + url);
            _context.prev = 3;
            _context.next = 6;
            return fetch(apiUrl + url, {
              // there was apiUrl + url
              method: method,
              headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                Accept: "application/json",
                "Content-Type": "application/json"
              }, headers),
              body: stringifiedBody,
              credentials: "same-origin"
            });

          case 6:
            response = _context.sent;
            responseIsJSON = response.headers.get("content-type").indexOf("application/json") !== -1;

            if (!responseIsJSON) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", response.json());

          case 10:
            return _context.abrupt("return", response.text());

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);

          case 16:
            return _context.abrupt("return", null);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 13]]);
  }));
  return _callApi.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=index.js.babdae1cc3309fe127a5.hot-update.js.map