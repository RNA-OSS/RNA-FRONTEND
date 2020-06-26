webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Box/style.js":
/*!*******************************************!*\
  !*** ./components/molecules/Box/style.js ***!
  \*******************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Box\",\n  componentId: \"sc-1f0svh4-0\"\n})([\"display:flex;width:100%;height:auto;box-sizing:border-box;flex-direction:\", \";justify-content:\", \";align-items:\", \";margin:\", \";padding:\", \";flex:\", \";\"], function (props) {\n  return props.direction;\n}, function (props) {\n  return props.justify;\n}, function (props) {\n  return props.align;\n}, function (props) {\n  return props.margin;\n}, function (props) {\n  return props.padding;\n}, function (props) {\n  return props.flex;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9Cb3gvc3R5bGUuanM/OWQyNCJdLCJuYW1lcyI6WyJCb3giLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJhbGlnbiIsIm1hcmdpbiIsInBhZGRpbmciLCJmbGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnS0FLSSxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxTQUFqQjtBQUFBLENBTEosRUFNSyxVQUFDRCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxPQUFqQjtBQUFBLENBTkwsRUFPQyxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRyxLQUFqQjtBQUFBLENBUEQsRUFRSixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxNQUFqQjtBQUFBLENBUkksRUFTSCxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxPQUFqQjtBQUFBLENBVEcsRUFVTixVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTSxJQUFqQjtBQUFBLENBVk0sQ0FBVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL0JveC9zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLmRpcmVjdGlvbn07XG4gIGp1c3RpZnktY29udGVudDogJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnl9O1xuICBhbGlnbi1pdGVtczogJHsocHJvcHMpID0+IHByb3BzLmFsaWdufTtcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMubWFyZ2lufTtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnBhZGRpbmd9O1xuICBmbGV4OiAkeyhwcm9wcykgPT4gcHJvcHMuZmxleH07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/Box/style.js\n");

/***/ })

})