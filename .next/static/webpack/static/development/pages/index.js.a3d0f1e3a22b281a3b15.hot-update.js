webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Box/index.jsx":
/*!********************************************!*\
  !*** ./components/molecules/Box/index.jsx ***!
  \********************************************/
/*! exports provided: BoxDirection, BoxSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxDirection\", function() { return BoxDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxSort\", function() { return BoxSort; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/molecules/Box/style.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ \"./utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/molecules/Box/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar BoxDirection = {\n  ROW: \"row\",\n  COL: \"column\"\n};\nvar BoxSort = {\n  TOP_LEFT: 11,\n  TOP_CENTER: 12,\n  TOP_RIGHT: 13,\n  TOP_SPACE_BETWEEN: 14,\n  TOP_SPACE_AROUND: 15,\n  CENTER_LEFT: 21,\n  CENTER_CENTER: 22,\n  CENTER_RIGHT: 23,\n  CENTER_SPACE_BETWEEN: 24,\n  CENTER_SPACE_AROUND: 25,\n  BOTTOM_LEFT: 31,\n  BOTTOM_CENTER: 32,\n  BOTTOM_RIGHT: 33,\n  BOTTOM_SPACE_BETWEEN: 34,\n  BOTTOM_SPACE_AROUND: 35,\n  SPACE_BETWEEN_LEFT: 41,\n  SPACE_BETWEEN_CENTER: 42,\n  SPACE_BETWEEN_RIGHT: 43,\n  SPACE_AROUND_LEFT: 51,\n  SPACE_AROUND_CENTER: 52,\n  SPACE_AROUND_RIGHT: 53\n};\n\nvar CalculateSort = function CalculateSort(sort) {\n  var horizontalNumber = sort % 10;\n  var verticalNumber = Math.floor(sort / 10);\n  var horizontal = \"center\";\n  var vertical = \"center\";\n  if (horizontalNumber === 1) horizontal = \"flex-start\";else if (horizontalNumber === 3) horizontal = \"flex-end\";else if (horizontalNumber === 4) horizontal = \"space-between\";else if (horizontalNumber === 5) horizontal = \"space-around\";\n  if (verticalNumber === 1) vertical = \"flex-start\";else if (verticalNumber === 3) vertical = \"flex-end\";else if (verticalNumber === 4) vertical = \"space-between\";else if (verticalNumber === 5) vertical = \"space-around\";\n  return [horizontal, vertical];\n};\n\n_c = CalculateSort;\n\nvar Box = function Box(_ref) {\n  var children = _ref.children,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? BoxDirection.ROW : _ref$direction,\n      _ref$sort = _ref.sort,\n      sort = _ref$sort === void 0 ? BoxSort.CENTER_CENTER : _ref$sort,\n      _ref$mar = _ref.mar,\n      mar = _ref$mar === void 0 ? [0] : _ref$mar,\n      _ref$pad = _ref.pad,\n      pad = _ref$pad === void 0 ? [0] : _ref$pad,\n      _ref$flexAttr = _ref.flexAttr,\n      flexAttr = _ref$flexAttr === void 0 ? [\"auto\"] : _ref$flexAttr,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? \"100%\" : _ref$width,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? \"auto\" : _ref$height;\n\n  var _CalculateSort = CalculateSort(sort),\n      _CalculateSort2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CalculateSort, 2),\n      horizontal = _CalculateSort2[0],\n      vertical = _CalculateSort2[1];\n\n  var justifyContent = direction === BoxDirection.ROW ? horizontal : vertical;\n  var alignItems = direction === BoxDirection.ROW ? vertical : horizontal;\n  var flex = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateFlexAttribute\"])(flexAttr);\n  var margin = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateBox\"])(mar);\n  var padding = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"CalculateBox\"])(pad);\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    direction: direction,\n    justify: justifyContent,\n    align: alignItems,\n    margin: margin,\n    padding: padding,\n    width: width,\n    height: height,\n    flex: flex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, console.log(justifyContent + \" \" + alignItems), children);\n};\n\n_c2 = Box;\nBox.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CalculateSort\");\n$RefreshReg$(_c2, \"Box\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9Cb3gvaW5kZXguanN4Pzk4M2UiXSwibmFtZXMiOlsiQm94RGlyZWN0aW9uIiwiUk9XIiwiQ09MIiwiQm94U29ydCIsIlRPUF9MRUZUIiwiVE9QX0NFTlRFUiIsIlRPUF9SSUdIVCIsIlRPUF9TUEFDRV9CRVRXRUVOIiwiVE9QX1NQQUNFX0FST1VORCIsIkNFTlRFUl9MRUZUIiwiQ0VOVEVSX0NFTlRFUiIsIkNFTlRFUl9SSUdIVCIsIkNFTlRFUl9TUEFDRV9CRVRXRUVOIiwiQ0VOVEVSX1NQQUNFX0FST1VORCIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX0NFTlRFUiIsIkJPVFRPTV9SSUdIVCIsIkJPVFRPTV9TUEFDRV9CRVRXRUVOIiwiQk9UVE9NX1NQQUNFX0FST1VORCIsIlNQQUNFX0JFVFdFRU5fTEVGVCIsIlNQQUNFX0JFVFdFRU5fQ0VOVEVSIiwiU1BBQ0VfQkVUV0VFTl9SSUdIVCIsIlNQQUNFX0FST1VORF9MRUZUIiwiU1BBQ0VfQVJPVU5EX0NFTlRFUiIsIlNQQUNFX0FST1VORF9SSUdIVCIsIkNhbGN1bGF0ZVNvcnQiLCJzb3J0IiwiaG9yaXpvbnRhbE51bWJlciIsInZlcnRpY2FsTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiQm94IiwiY2hpbGRyZW4iLCJkaXJlY3Rpb24iLCJtYXIiLCJwYWQiLCJmbGV4QXR0ciIsIndpZHRoIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleCIsIkNhbGN1bGF0ZUZsZXhBdHRyaWJ1dGUiLCJtYXJnaW4iLCJDYWxjdWxhdGVCb3giLCJwYWRkaW5nIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLEtB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QUdOLFNBQVMsS0FBS25DLFlBQVksQ0FBQ0MsR0FBM0IsR0FBaUM4QixVQUFqQyxHQUE4Q0MsUUFBckU7QUFDQSxNQUFNVSxVQUFVLEdBQUdQLFNBQVMsS0FBS25DLFlBQVksQ0FBQ0MsR0FBM0IsR0FBaUMrQixRQUFqQyxHQUE0Q0QsVUFBL0Q7QUFDQSxNQUFNWSxJQUFJLEdBQUdDLHFFQUFzQixDQUFDTixRQUFELENBQW5DO0FBQ0EsTUFBTU8sTUFBTSxHQUFHQywyREFBWSxDQUFDVixHQUFELENBQTNCO0FBQ0EsTUFBTVcsT0FBTyxHQUFHRCwyREFBWSxDQUFDVCxHQUFELENBQTVCO0FBRUEsU0FDRSxNQUFDLDBDQUFEO0FBQ0UsYUFBUyxFQUFFRixTQURiO0FBRUUsV0FBTyxFQUFFTSxjQUZYO0FBR0UsU0FBSyxFQUFFQyxVQUhUO0FBSUUsVUFBTSxFQUFFRyxNQUpWO0FBS0UsV0FBTyxFQUFFRSxPQUxYO0FBTUUsU0FBSyxFQUFFUixLQU5UO0FBT0UsVUFBTSxFQUFFQyxNQVBWO0FBUUUsUUFBSSxFQUFFRyxJQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR0ssT0FBTyxDQUFDQyxHQUFSLENBQVlSLGNBQWMsR0FBRyxHQUFqQixHQUF1QkMsVUFBbkMsQ0FWSCxFQVdHUixRQVhILENBREY7QUFlRCxDQWpDRDs7TUFBTUQsRztBQW1DTkEsR0FBRyxDQUFDaUIsU0FBSixHQUFnQjtBQUNkaEIsVUFBUSxFQUFFZ0IsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURYLENBQWhCO0FBSWVuQixrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL0JveC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHsgQ2FsY3VsYXRlQm94LCBDYWxjdWxhdGVGbGV4QXR0cmlidXRlIH0gZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJveERpcmVjdGlvbiA9IHtcbiAgUk9XOiBcInJvd1wiLFxuICBDT0w6IFwiY29sdW1uXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQm94U29ydCA9IHtcbiAgVE9QX0xFRlQ6IDExLFxuICBUT1BfQ0VOVEVSOiAxMixcbiAgVE9QX1JJR0hUOiAxMyxcbiAgVE9QX1NQQUNFX0JFVFdFRU46IDE0LFxuICBUT1BfU1BBQ0VfQVJPVU5EOiAxNSxcbiAgQ0VOVEVSX0xFRlQ6IDIxLFxuICBDRU5URVJfQ0VOVEVSOiAyMixcbiAgQ0VOVEVSX1JJR0hUOiAyMyxcbiAgQ0VOVEVSX1NQQUNFX0JFVFdFRU46IDI0LFxuICBDRU5URVJfU1BBQ0VfQVJPVU5EOiAyNSxcbiAgQk9UVE9NX0xFRlQ6IDMxLFxuICBCT1RUT01fQ0VOVEVSOiAzMixcbiAgQk9UVE9NX1JJR0hUOiAzMyxcbiAgQk9UVE9NX1NQQUNFX0JFVFdFRU46IDM0LFxuICBCT1RUT01fU1BBQ0VfQVJPVU5EOiAzNSxcbiAgU1BBQ0VfQkVUV0VFTl9MRUZUOiA0MSxcbiAgU1BBQ0VfQkVUV0VFTl9DRU5URVI6IDQyLFxuICBTUEFDRV9CRVRXRUVOX1JJR0hUOiA0MyxcbiAgU1BBQ0VfQVJPVU5EX0xFRlQ6IDUxLFxuICBTUEFDRV9BUk9VTkRfQ0VOVEVSOiA1MixcbiAgU1BBQ0VfQVJPVU5EX1JJR0hUOiA1Myxcbn07XG5cbmNvbnN0IENhbGN1bGF0ZVNvcnQgPSAoc29ydCkgPT4ge1xuICBjb25zdCBob3Jpem9udGFsTnVtYmVyID0gc29ydCAlIDEwO1xuICBjb25zdCB2ZXJ0aWNhbE51bWJlciA9IE1hdGguZmxvb3Ioc29ydCAvIDEwKTtcblxuICBsZXQgaG9yaXpvbnRhbCA9IFwiY2VudGVyXCI7XG4gIGxldCB2ZXJ0aWNhbCA9IFwiY2VudGVyXCI7XG5cbiAgaWYgKGhvcml6b250YWxOdW1iZXIgPT09IDEpIGhvcml6b250YWwgPSBcImZsZXgtc3RhcnRcIjtcbiAgZWxzZSBpZiAoaG9yaXpvbnRhbE51bWJlciA9PT0gMykgaG9yaXpvbnRhbCA9IFwiZmxleC1lbmRcIjtcbiAgZWxzZSBpZiAoaG9yaXpvbnRhbE51bWJlciA9PT0gNCkgaG9yaXpvbnRhbCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICBlbHNlIGlmIChob3Jpem9udGFsTnVtYmVyID09PSA1KSBob3Jpem9udGFsID0gXCJzcGFjZS1hcm91bmRcIjtcblxuICBpZiAodmVydGljYWxOdW1iZXIgPT09IDEpIHZlcnRpY2FsID0gXCJmbGV4LXN0YXJ0XCI7XG4gIGVsc2UgaWYgKHZlcnRpY2FsTnVtYmVyID09PSAzKSB2ZXJ0aWNhbCA9IFwiZmxleC1lbmRcIjtcbiAgZWxzZSBpZiAodmVydGljYWxOdW1iZXIgPT09IDQpIHZlcnRpY2FsID0gXCJzcGFjZS1iZXR3ZWVuXCI7XG4gIGVsc2UgaWYgKHZlcnRpY2FsTnVtYmVyID09PSA1KSB2ZXJ0aWNhbCA9IFwic3BhY2UtYXJvdW5kXCI7XG5cbiAgcmV0dXJuIFtob3Jpem9udGFsLCB2ZXJ0aWNhbF07XG59O1xuXG5jb25zdCBCb3ggPSAoe1xuICBjaGlsZHJlbixcbiAgZGlyZWN0aW9uID0gQm94RGlyZWN0aW9uLlJPVyxcbiAgc29ydCA9IEJveFNvcnQuQ0VOVEVSX0NFTlRFUixcbiAgbWFyID0gWzBdLFxuICBwYWQgPSBbMF0sXG4gIGZsZXhBdHRyID0gW1wiYXV0b1wiXSxcbiAgd2lkdGggPSBcIjEwMCVcIixcbiAgaGVpZ2h0ID0gXCJhdXRvXCIsXG59KSA9PiB7XG4gIGNvbnN0IFtob3Jpem9udGFsLCB2ZXJ0aWNhbF0gPSBDYWxjdWxhdGVTb3J0KHNvcnQpO1xuXG4gIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gZGlyZWN0aW9uID09PSBCb3hEaXJlY3Rpb24uUk9XID8gaG9yaXpvbnRhbCA6IHZlcnRpY2FsO1xuICBjb25zdCBhbGlnbkl0ZW1zID0gZGlyZWN0aW9uID09PSBCb3hEaXJlY3Rpb24uUk9XID8gdmVydGljYWwgOiBob3Jpem9udGFsO1xuICBjb25zdCBmbGV4ID0gQ2FsY3VsYXRlRmxleEF0dHJpYnV0ZShmbGV4QXR0cik7XG4gIGNvbnN0IG1hcmdpbiA9IENhbGN1bGF0ZUJveChtYXIpO1xuICBjb25zdCBwYWRkaW5nID0gQ2FsY3VsYXRlQm94KHBhZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkJveFxuICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICBqdXN0aWZ5PXtqdXN0aWZ5Q29udGVudH1cbiAgICAgIGFsaWduPXthbGlnbkl0ZW1zfVxuICAgICAgbWFyZ2luPXttYXJnaW59XG4gICAgICBwYWRkaW5nPXtwYWRkaW5nfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBmbGV4PXtmbGV4fVxuICAgID5cbiAgICAgIHtjb25zb2xlLmxvZyhqdXN0aWZ5Q29udGVudCArIFwiIFwiICsgYWxpZ25JdGVtcyl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWQuQm94PlxuICApO1xufTtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IHByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Box/index.jsx\n");

/***/ })

})