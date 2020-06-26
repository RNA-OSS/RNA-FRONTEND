webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Box/index.jsx":
/*!********************************************!*\
  !*** ./components/molecules/Box/index.jsx ***!
  \********************************************/
/*! exports provided: BoxDirection, BoxSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxDirection\", function() { return BoxDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxSort\", function() { return BoxSort; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/molecules/Box/style.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ \"./utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/molecules/Box/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar BoxDirection = {\n  ROW: \"row\",\n  COL: \"column\"\n};\nvar BoxSort = {\n  TOP_LEFT: 11,\n  TOP_CENTER: 12,\n  TOP_RIGHT: 13,\n  TOP_SPACE_BETWEEN: 14,\n  TOP_SPACE_AROUND: 15,\n  CENTER_LEFT: 21,\n  CENTER_CENTER: 22,\n  CENTER_RIGHT: 23,\n  CENTER_SPACE_BETWEEN: 24,\n  CENTER_SPACE_AROUND: 25,\n  BOTTOM_LEFT: 31,\n  BOTTOM_CENTER: 32,\n  BOTTOM_RIGHT: 33,\n  BOTTOM_SPACE_BETWEEN: 34,\n  BOTTOM_SPACE_AROUND: 35,\n  SPACE_BETWEEN_LEFT: 41,\n  SPACE_BETWEEN_CENTER: 42,\n  SPACE_BETWEEN_RIGHT: 43,\n  SPACE_AROUND_LEFT: 51,\n  SPACE_AROUND_CENTER: 52,\n  SPACE_AROUND_RIGHT: 53\n};\n\nvar CalculateSort = function CalculateSort(sort) {\n  var horizontalNumber = sort % 10;\n  var verticalNumber = Math.floor(sort / 10);\n  var horizontal = \"center\";\n  var vertical = \"center\";\n  if (horizontalNumber === 1) horizontal = \"flex-start\";else if (horizontalNumber === 3) horizontal = \"flex-end\";else if (horizontalNumber === 4) horizontal = \"space-between\";else if (horizontalNumber === 5) horizontal = \"space-around\";\n  if (verticalNumber === 1) vertical = \"flex-start\";else if (verticalNumber === 3) vertical = \"flex-end\";else if (verticalNumber === 4) vertical = \"space-between\";else if (verticalNumber === 5) vertical = \"space-around\";\n  return [horizontal, vertical];\n};\n\n_c = CalculateSort;\n\nvar Box = function Box(_ref) {\n  var children = _ref.children,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? BoxDirection.row : _ref$direction,\n      _ref$sort = _ref.sort,\n      sort = _ref$sort === void 0 ? BoxSort.CENTER_CENTER : _ref$sort,\n      _ref$mar = _ref.mar,\n      mar = _ref$mar === void 0 ? [0] : _ref$mar,\n      _ref$pad = _ref.pad,\n      pad = _ref$pad === void 0 ? [0] : _ref$pad,\n      _ref$flexAttr = _ref.flexAttr,\n      flexAttr = _ref$flexAttr === void 0 ? [\"auto\"] : _ref$flexAttr,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? \"100%\" : _ref$width,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? \"auto\" : _ref$height;\n\n  var _CalculateSort = CalculateSort(sort),\n      _CalculateSort2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CalculateSort, 2),\n      horizontal = _CalculateSort2[0],\n      vertical = _CalculateSort2[1];\n\n  var justifyContent = direction === BoxDirection.ROW ? horizontal : vertical;\n  var alignItems = direction === BoxDirection.ROW ? vertical : horizontal;\n  var flex = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateFlexAttribute\"])(flexAttr);\n  var margin = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateBox\"])(mar);\n  var padding = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateBox\"])(pad);\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    direction: direction,\n    justify: justifyContent,\n    align: alignItems,\n    margin: margin,\n    padding: padding,\n    width: width,\n    height: height,\n    flex: flex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c2 = Box;\nBox.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CalculateSort\");\n$RefreshReg$(_c2, \"Box\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9Cb3gvaW5kZXguanN4Pzk4M2UiXSwibmFtZXMiOlsiQm94RGlyZWN0aW9uIiwiUk9XIiwiQ09MIiwiQm94U29ydCIsIlRPUF9MRUZUIiwiVE9QX0NFTlRFUiIsIlRPUF9SSUdIVCIsIlRPUF9TUEFDRV9CRVRXRUVOIiwiVE9QX1NQQUNFX0FST1VORCIsIkNFTlRFUl9MRUZUIiwiQ0VOVEVSX0NFTlRFUiIsIkNFTlRFUl9SSUdIVCIsIkNFTlRFUl9TUEFDRV9CRVRXRUVOIiwiQ0VOVEVSX1NQQUNFX0FST1VORCIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX0NFTlRFUiIsIkJPVFRPTV9SSUdIVCIsIkJPVFRPTV9TUEFDRV9CRVRXRUVOIiwiQk9UVE9NX1NQQUNFX0FST1VORCIsIlNQQUNFX0JFVFdFRU5fTEVGVCIsIlNQQUNFX0JFVFdFRU5fQ0VOVEVSIiwiU1BBQ0VfQkVUV0VFTl9SSUdIVCIsIlNQQUNFX0FST1VORF9MRUZUIiwiU1BBQ0VfQVJPVU5EX0NFTlRFUiIsIlNQQUNFX0FST1VORF9SSUdIVCIsIkNhbGN1bGF0ZVNvcnQiLCJzb3J0IiwiaG9yaXpvbnRhbE51bWJlciIsInZlcnRpY2FsTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiQm94IiwiY2hpbGRyZW4iLCJkaXJlY3Rpb24iLCJyb3ciLCJtYXIiLCJwYWQiLCJmbGV4QXR0ciIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleCIsIkNhbGN1bGF0ZUZsZXhBdHRyaWJ1dGUiLCJtYXJnaW4iLCJDYWxjdWxhdGVCb3giLCJwYWRkaW5nIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsS0FBRyxFQUFFLEtB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S0FBS25DLFlBQVksQ0FBQ0MsR0FBM0IsR0FBaUM4QixVQUFqQyxHQUE4Q0MsUUFBckU7QUFDQSxNQUFNVyxVQUFVLEdBQUdSLFNBQVMsS0FBS25DLFlBQVksQ0FBQ0MsR0FBM0IsR0FBaUMrQixRQUFqQyxHQUE0Q0QsVUFBL0Q7QUFDQSxNQUFNYSxJQUFJLEdBQUdDLHFFQUFzQixDQUFDTixRQUFELENBQW5DO0FBQ0EsTUFBTU8sTUFBTSxHQUFHQywyREFBWSxDQUFDVixHQUFELENBQTNCO0FBQ0EsTUFBTVcsT0FBTyxHQUFHRCwyREFBWSxDQUFDVCxHQUFELENBQTVCO0FBRUEsU0FDRSxNQUFDLDBDQUFEO0FBQ0UsYUFBUyxFQUFFSCxTQURiO0FBRUUsV0FBTyxFQUFFTyxjQUZYO0FBR0UsU0FBSyxFQUFFQyxVQUhUO0FBSUUsVUFBTSxFQUFFRyxNQUpWO0FBS0UsV0FBTyxFQUFFRSxPQUxYO0FBTUUsU0FBSyxFQUFFUixLQU5UO0FBT0UsVUFBTSxFQUFFQyxNQVBWO0FBUUUsUUFBSSxFQUFFRyxJQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR1YsUUFWSCxDQURGO0FBY0QsQ0FoQ0Q7O01BQU1ELEc7QUFrQ05BLEdBQUcsQ0FBQ2dCLFNBQUosR0FBZ0I7QUFDZGYsVUFBUSxFQUFFZSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFgsQ0FBaEI7QUFJZWxCLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvQm94L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgeyBDYWxjdWxhdGVCb3gsIENhbGN1bGF0ZUZsZXhBdHRyaWJ1dGUgfSBmcm9tIFwiLi8uLi8uLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgQm94RGlyZWN0aW9uID0ge1xuICBST1c6IFwicm93XCIsXG4gIENPTDogXCJjb2x1bW5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBCb3hTb3J0ID0ge1xuICBUT1BfTEVGVDogMTEsXG4gIFRPUF9DRU5URVI6IDEyLFxuICBUT1BfUklHSFQ6IDEzLFxuICBUT1BfU1BBQ0VfQkVUV0VFTjogMTQsXG4gIFRPUF9TUEFDRV9BUk9VTkQ6IDE1LFxuICBDRU5URVJfTEVGVDogMjEsXG4gIENFTlRFUl9DRU5URVI6IDIyLFxuICBDRU5URVJfUklHSFQ6IDIzLFxuICBDRU5URVJfU1BBQ0VfQkVUV0VFTjogMjQsXG4gIENFTlRFUl9TUEFDRV9BUk9VTkQ6IDI1LFxuICBCT1RUT01fTEVGVDogMzEsXG4gIEJPVFRPTV9DRU5URVI6IDMyLFxuICBCT1RUT01fUklHSFQ6IDMzLFxuICBCT1RUT01fU1BBQ0VfQkVUV0VFTjogMzQsXG4gIEJPVFRPTV9TUEFDRV9BUk9VTkQ6IDM1LFxuICBTUEFDRV9CRVRXRUVOX0xFRlQ6IDQxLFxuICBTUEFDRV9CRVRXRUVOX0NFTlRFUjogNDIsXG4gIFNQQUNFX0JFVFdFRU5fUklHSFQ6IDQzLFxuICBTUEFDRV9BUk9VTkRfTEVGVDogNTEsXG4gIFNQQUNFX0FST1VORF9DRU5URVI6IDUyLFxuICBTUEFDRV9BUk9VTkRfUklHSFQ6IDUzLFxufTtcblxuY29uc3QgQ2FsY3VsYXRlU29ydCA9IChzb3J0KSA9PiB7XG4gIGNvbnN0IGhvcml6b250YWxOdW1iZXIgPSBzb3J0ICUgMTA7XG4gIGNvbnN0IHZlcnRpY2FsTnVtYmVyID0gTWF0aC5mbG9vcihzb3J0IC8gMTApO1xuXG4gIGxldCBob3Jpem9udGFsID0gXCJjZW50ZXJcIjtcbiAgbGV0IHZlcnRpY2FsID0gXCJjZW50ZXJcIjtcblxuICBpZiAoaG9yaXpvbnRhbE51bWJlciA9PT0gMSkgaG9yaXpvbnRhbCA9IFwiZmxleC1zdGFydFwiO1xuICBlbHNlIGlmIChob3Jpem9udGFsTnVtYmVyID09PSAzKSBob3Jpem9udGFsID0gXCJmbGV4LWVuZFwiO1xuICBlbHNlIGlmIChob3Jpem9udGFsTnVtYmVyID09PSA0KSBob3Jpem9udGFsID0gXCJzcGFjZS1iZXR3ZWVuXCI7XG4gIGVsc2UgaWYgKGhvcml6b250YWxOdW1iZXIgPT09IDUpIGhvcml6b250YWwgPSBcInNwYWNlLWFyb3VuZFwiO1xuXG4gIGlmICh2ZXJ0aWNhbE51bWJlciA9PT0gMSkgdmVydGljYWwgPSBcImZsZXgtc3RhcnRcIjtcbiAgZWxzZSBpZiAodmVydGljYWxOdW1iZXIgPT09IDMpIHZlcnRpY2FsID0gXCJmbGV4LWVuZFwiO1xuICBlbHNlIGlmICh2ZXJ0aWNhbE51bWJlciA9PT0gNCkgdmVydGljYWwgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgZWxzZSBpZiAodmVydGljYWxOdW1iZXIgPT09IDUpIHZlcnRpY2FsID0gXCJzcGFjZS1hcm91bmRcIjtcblxuICByZXR1cm4gW2hvcml6b250YWwsIHZlcnRpY2FsXTtcbn07XG5cbmNvbnN0IEJveCA9ICh7XG4gIGNoaWxkcmVuLFxuICBkaXJlY3Rpb24gPSBCb3hEaXJlY3Rpb24ucm93LFxuICBzb3J0ID0gQm94U29ydC5DRU5URVJfQ0VOVEVSLFxuICBtYXIgPSBbMF0sXG4gIHBhZCA9IFswXSxcbiAgZmxleEF0dHIgPSBbXCJhdXRvXCJdLFxuICB3aWR0aCA9IFwiMTAwJVwiLFxuICBoZWlnaHQgPSBcImF1dG9cIixcbn0pID0+IHtcbiAgY29uc3QgW2hvcml6b250YWwsIHZlcnRpY2FsXSA9IENhbGN1bGF0ZVNvcnQoc29ydCk7XG5cbiAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBkaXJlY3Rpb24gPT09IEJveERpcmVjdGlvbi5ST1cgPyBob3Jpem9udGFsIDogdmVydGljYWw7XG4gIGNvbnN0IGFsaWduSXRlbXMgPSBkaXJlY3Rpb24gPT09IEJveERpcmVjdGlvbi5ST1cgPyB2ZXJ0aWNhbCA6IGhvcml6b250YWw7XG4gIGNvbnN0IGZsZXggPSBDYWxjdWxhdGVGbGV4QXR0cmlidXRlKGZsZXhBdHRyKTtcbiAgY29uc3QgbWFyZ2luID0gQ2FsY3VsYXRlQm94KG1hcik7XG4gIGNvbnN0IHBhZGRpbmcgPSBDYWxjdWxhdGVCb3gocGFkKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQm94XG4gICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbiAgICAgIGp1c3RpZnk9e2p1c3RpZnlDb250ZW50fVxuICAgICAgYWxpZ249e2FsaWduSXRlbXN9XG4gICAgICBtYXJnaW49e21hcmdpbn1cbiAgICAgIHBhZGRpbmc9e3BhZGRpbmd9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGZsZXg9e2ZsZXh9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkLkJveD5cbiAgKTtcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBwcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/Box/index.jsx\n");

/***/ })

})