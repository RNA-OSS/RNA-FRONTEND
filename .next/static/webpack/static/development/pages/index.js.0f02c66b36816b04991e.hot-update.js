webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/Span/index.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/Span/index.jsx ***!
  \*****************************************/
/*! exports provided: SpanType, SpanSize, SpanWeight, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpanType\", function() { return SpanType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpanSize\", function() { return SpanSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpanWeight\", function() { return SpanWeight; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/atoms/Span/style.js\");\n/* harmony import */ var _public_font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/font */ \"./public/font.js\");\n/* harmony import */ var _public_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/color */ \"./public/color.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/atoms/Span/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar SpanType = {\n  normal: _public_color__WEBPACK_IMPORTED_MODULE_4__[\"BLACK\"],\n  primary: _public_color__WEBPACK_IMPORTED_MODULE_4__[\"MAIN_COLOR\"],\n  gray: _public_color__WEBPACK_IMPORTED_MODULE_4__[\"DARK_GRAY\"],\n  warn: _public_color__WEBPACK_IMPORTED_MODULE_4__[\"WARNING\"]\n};\nvar SpanSize = {\n  s: _public_font__WEBPACK_IMPORTED_MODULE_3__[\"TEXT_S\"],\n  m: _public_font__WEBPACK_IMPORTED_MODULE_3__[\"TEXT_M\"],\n  l: _public_font__WEBPACK_IMPORTED_MODULE_3__[\"TEXT_L\"]\n};\nvar SpanWeight = {\n  xs: 100,\n  s: 300,\n  m: 500,\n  l: 700\n};\n\nvar Span = function Span(_ref) {\n  var _ref$children = _ref.children,\n      children = _ref$children === void 0 ? \"\" : _ref$children,\n      _ref$size = _ref.size,\n      size = _ref$size === void 0 ? SpanSize.m : _ref$size,\n      _ref$weight = _ref.weight,\n      weight = _ref$weight === void 0 ? SpanWeight.m : _ref$weight,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? SpanType.normal : _ref$type,\n      _ref$marginBottom = _ref.marginBottom,\n      marginBottom = _ref$marginBottom === void 0 ? \"0px\" : _ref$marginBottom;\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"Span\"], {\n    size: size,\n    weight: weight,\n    type: type,\n    marginBottom: marginBottom,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_c = Span;\nSpan.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  weight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Span);\n\nvar _c;\n\n$RefreshReg$(_c, \"Span\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL1NwYW4vaW5kZXguanN4PzAxMWQiXSwibmFtZXMiOlsiU3BhblR5cGUiLCJub3JtYWwiLCJCTEFDSyIsInByaW1hcnkiLCJNQUlOX0NPTE9SIiwiZ3JheSIsIkRBUktfR1JBWSIsIndhcm4iLCJXQVJOSU5HIiwiU3BhblNpemUiLCJzIiwiVEVYVF9TIiwibSIsIlRFWFRfTSIsImwiLCJURVhUX0wiLCJTcGFuV2VpZ2h0IiwieHMiLCJTcGFuIiwiY2hpbGRyZW4iLCJzaXplIiwid2VpZ2h0IiwidHlwZSIsIm1hcmdpbkJvdHRvbSIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRztBQUN0QkMsUUFBTSxFQUFFQyxtREFEYztBQUV0QkMsU0FBTyxFQUFFQyx3REFGYTtBQUd0QkMsTUFBSSxFQUFFQyx1REFIZ0I7QUFJdEJDLE1BQUksRUFBRUMscURBQU9BO0FBSlMsQ0FBakI7QUFPQSxJQUFNQyxRQUFRLEdBQUc7QUFDdEJDLEdBQUMsRUFBRUMsbURBRG1CO0FBRXRCQyxHQUFDLEVBQUVDLG1EQUZtQjtBQUd0QkMsR0FBQyxFQUFFQyxtREFBTUE7QUFIYSxDQUFqQjtBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsSUFBRSxFQUFFLEdBRG9CO0FBRXhCUCxHQUFDLEVBQUUsR0FGcUI7QUFHeEJFLEdBQUMsRUFBRSxHQUhxQjtBQUl4QkUsR0FBQyxFQUFFO0FBSnFCLENBQW5COztBQU9QLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BTVA7QUFBQSwyQkFMSkMsUUFLSTtBQUFBLE1BTEpBLFFBS0ksOEJBTE8sRUFLUDtBQUFBLHVCQUpKQyxJQUlJO0FBQUEsTUFKSkEsSUFJSSwwQkFKR1gsUUFBUSxDQUFDRyxDQUlaO0FBQUEseUJBSEpTLE1BR0k7QUFBQSxNQUhKQSxNQUdJLDRCQUhLTCxVQUFVLENBQUNKLENBR2hCO0FBQUEsdUJBRkpVLElBRUk7QUFBQSxNQUZKQSxJQUVJLDBCQUZHdEIsUUFBUSxDQUFDQyxNQUVaO0FBQUEsK0JBREpzQixZQUNJO0FBQUEsTUFESkEsWUFDSSxrQ0FEVyxLQUNYO0FBQ0osU0FDRSxNQUFDLDJDQUFEO0FBQ0UsUUFBSSxFQUFFSCxJQURSO0FBRUUsVUFBTSxFQUFFQyxNQUZWO0FBR0UsUUFBSSxFQUFFQyxJQUhSO0FBSUUsZ0JBQVksRUFBRUMsWUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSixRQU5ILENBREY7QUFVRCxDQWpCRDs7S0FBTUQsSTtBQW1CTkEsSUFBSSxDQUFDTSxTQUFMLEdBQWlCO0FBQ2ZMLFVBQVEsRUFBRUssaURBQVMsQ0FBQ0MsTUFETDtBQUVmTCxNQUFJLEVBQUVJLGlEQUFTLENBQUNDLE1BRkQ7QUFHZkosUUFBTSxFQUFFRyxpREFBUyxDQUFDRSxNQUhIO0FBSWZKLE1BQUksRUFBRUUsaURBQVMsQ0FBQ0MsTUFKRDtBQUtmRixjQUFZLEVBQUVDLGlEQUFTLENBQUNDO0FBTFQsQ0FBakI7QUFRZVAsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1NwYW4vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgeyBURVhUX1MsIFRFWFRfTSwgVEVYVF9MIH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9mb250XCI7XG5pbXBvcnQgeyBCTEFDSywgTUFJTl9DT0xPUiwgREFSS19HUkFZLCBXQVJOSU5HIH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9jb2xvclwiO1xuXG5leHBvcnQgY29uc3QgU3BhblR5cGUgPSB7XG4gIG5vcm1hbDogQkxBQ0ssXG4gIHByaW1hcnk6IE1BSU5fQ09MT1IsXG4gIGdyYXk6IERBUktfR1JBWSxcbiAgd2FybjogV0FSTklORyxcbn07XG5cbmV4cG9ydCBjb25zdCBTcGFuU2l6ZSA9IHtcbiAgczogVEVYVF9TLFxuICBtOiBURVhUX00sXG4gIGw6IFRFWFRfTCxcbn07XG5cbmV4cG9ydCBjb25zdCBTcGFuV2VpZ2h0ID0ge1xuICB4czogMTAwLFxuICBzOiAzMDAsXG4gIG06IDUwMCxcbiAgbDogNzAwLFxufTtcblxuY29uc3QgU3BhbiA9ICh7XG4gIGNoaWxkcmVuID0gXCJcIixcbiAgc2l6ZSA9IFNwYW5TaXplLm0sXG4gIHdlaWdodCA9IFNwYW5XZWlnaHQubSxcbiAgdHlwZSA9IFNwYW5UeXBlLm5vcm1hbCxcbiAgbWFyZ2luQm90dG9tID0gXCIwcHhcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLlNwYW5cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICB3ZWlnaHQ9e3dlaWdodH1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBtYXJnaW5Cb3R0b209e21hcmdpbkJvdHRvbX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWQuU3Bhbj5cbiAgKTtcbn07XG5cblNwYW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgd2VpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuICB0eXBlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBtYXJnaW5Cb3R0b206IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGFuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/Span/index.jsx\n");

/***/ }),

/***/ "./components/atoms/Span/style.js":
/*!****************************************!*\
  !*** ./components/atoms/Span/style.js ***!
  \****************************************/
/*! exports provided: Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__Span\",\n  componentId: \"a6rr2o-0\"\n})([\"font-size:\", \";font-weight:\", \";color:\", \";margin-bottom:\", \";\"], function (props) {\n  return props.size;\n}, function (props) {\n  return props.weight;\n}, function (props) {\n  return props.type;\n}, function (props) {\n  return props.marginBottom;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL1NwYW4vc3R5bGUuanM/MzE4YSJdLCJuYW1lcyI6WyJTcGFuIiwic3R5bGVkIiwicCIsInByb3BzIiwic2l6ZSIsIndlaWdodCIsInR5cGUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLHVFQUNGLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsQ0FERSxFQUVBLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLE1BQWpCO0FBQUEsQ0FGQSxFQUdOLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsQ0FITSxFQUlFLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLFlBQWpCO0FBQUEsQ0FKRixDQUFWIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdG9tcy9TcGFuL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2VpZ2h0fTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50eXBlfTtcbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IHByb3BzLm1hcmdpbkJvdHRvbX07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/Span/style.js\n");

/***/ }),

/***/ "./components/organisms/Header/index.jsx":
/*!***********************************************!*\
  !*** ./components/organisms/Header/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/organisms/Header/style.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Image */ \"./components/atoms/Image/index.jsx\");\n/* harmony import */ var _atoms_Span__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Span */ \"./components/atoms/Span/index.jsx\");\n/* harmony import */ var _molecules_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/Container */ \"./components/molecules/Container/index.jsx\");\n/* harmony import */ var _molecules_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/List */ \"./components/molecules/List/index.jsx\");\n/* harmony import */ var _molecules_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/ListItem */ \"./components/molecules/ListItem/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/organisms/Header/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.userReducer;\n  }),\n      me = _useSelector.me;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var onClickLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOGOUT_REQUEST\"]\n    });\n  }, []);\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"HeaderContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_molecules_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"HeaderLeftContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(_atoms_Image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    src: \"Logo.svg\",\n    type: _atoms_Image__WEBPACK_IMPORTED_MODULE_5__[\"Type\"].img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 15\n    }\n  })))), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"HeaderRightContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_molecules_List__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    align: _molecules_List__WEBPACK_IMPORTED_MODULE_8__[\"ListAlignOrder\"].center,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(_molecules_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    margin: \"40px\",\n    align: _molecules_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"ItemAlignOrder\"].center,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"\\uD559\\uAD50\"), __jsx(_molecules_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    align: _molecules_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"ItemAlignOrder\"].center,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"\\uB3D9\\uC544\\uB9AC\")), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"SignNavContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, me != null ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageNavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"MyPageIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 19\n    }\n  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageNavItem\"], {\n    onClick: onClickLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"LogoutIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }))) : __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageNavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/SignPage/sign\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 19\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"LoginIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }))))))));\n};\n\n_s(Header, \"V3KGBjTgTm8z2qRjxzw1rdKKh4s=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXIvaW5kZXguanN4PzNkMmEiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0xvZ291dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR09VVF9SRVFVRVNUIiwiVHlwZSIsImltZyIsIkxpc3RBbGlnbk9yZGVyIiwiY2VudGVyIiwiSXRlbUFsaWduT3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxxQkFDSkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FEUDtBQUFBLE1BQ1hDLEVBRFcsZ0JBQ1hBLEVBRFc7O0FBRW5CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q0gsWUFBUSxDQUFDO0FBQUVJLFVBQUksRUFBRUMsNkRBQWNBO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBRmdDLEVBRTlCLEVBRjhCLENBQWpDO0FBSUEsU0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU8sT0FBRyxFQUFDLFVBQVg7QUFBc0IsUUFBSSxFQUFFQyxpREFBSSxDQUFDQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQU0sU0FBSyxFQUFFQyw4REFBYyxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFVLFVBQU0sRUFBQyxNQUFqQjtBQUF3QixTQUFLLEVBQUVDLGtFQUFjLENBQUNELE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFJRSxNQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFQyxrRUFBYyxDQUFDRCxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLENBREYsRUFVRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsRUFBRSxJQUFJLElBQU4sR0FDQyxtRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxrREFBRDtBQUFvQixXQUFPLEVBQUVHLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREQsR0FVQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBWEosQ0FWRixDQVRGLENBREYsQ0FERjtBQTZDRCxDQXJERDs7R0FBTVAsTTtVQUNXQyx1RCxFQUNFSyx1RDs7O0tBRmJOLE07QUF1RFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9vcmdhbmlzbXMvSGVhZGVyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHsgTE9HT1VUX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IEltYWdlLCB7IFR5cGUgfSBmcm9tIFwiLi4vLi4vYXRvbXMvSW1hZ2VcIjtcbmltcG9ydCBTcGFuIGZyb20gXCIuLi8uLi9hdG9tcy9TcGFuXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvQ29udGFpbmVyXCI7XG5pbXBvcnQgTGlzdCwgeyBMaXN0QWxpZ25PcmRlciB9IGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtLCB7IEl0ZW1BbGlnbk9yZGVyIH0gZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9MaXN0SXRlbVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25DbGlja0xvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR09VVF9SRVFVRVNUIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkhlYWRlckNvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWQuSGVhZGVyTGVmdENvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJMb2dvLnN2Z1wiIHR5cGU9e1R5cGUuaW1nfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdHlsZWQuSGVhZGVyTGVmdENvbnRhaW5lcj5cblxuICAgICAgICA8U3R5bGVkLkhlYWRlclJpZ2h0Q29udGFpbmVyPlxuICAgICAgICAgIDxMaXN0IGFsaWduPXtMaXN0QWxpZ25PcmRlci5jZW50ZXJ9PlxuICAgICAgICAgICAgPExpc3RJdGVtIG1hcmdpbj1cIjQwcHhcIiBhbGlnbj17SXRlbUFsaWduT3JkZXIuY2VudGVyfT5cbiAgICAgICAgICAgICAg7ZWZ6rWQXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduPXtJdGVtQWxpZ25PcmRlci5jZW50ZXJ9PuuPmeyVhOumrDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICB7LyogPFN0eWxlZC5QYWdlTmF2SXRlbT7tlZnqtZA8L1N0eWxlZC5QYWdlTmF2SXRlbT4gKi99XG4gICAgICAgICAgICB7LyogPFN0eWxlZC5QYWdlTmF2SXRlbT7rj5nslYTrpqw8L1N0eWxlZC5QYWdlTmF2SXRlbT4gKi99XG4gICAgICAgICAgPC9MaXN0PlxuXG4gICAgICAgICAgPFN0eWxlZC5TaWduTmF2Q29udGFpbmVyPlxuICAgICAgICAgICAge21lICE9IG51bGwgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZC5QYWdlTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWQuTXlQYWdlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLlBhZ2VOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxTdHlsZWQuUGFnZU5hdkl0ZW0gb25DbGljaz17b25DbGlja0xvZ291dH0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkLkxvZ291dEljb24gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5QYWdlTmF2SXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U3R5bGVkLlBhZ2VOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU2lnblBhZ2Uvc2lnblwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuTG9naW5JY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1N0eWxlZC5QYWdlTmF2SXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TdHlsZWQuU2lnbk5hdkNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWQuSGVhZGVyUmlnaHRDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1N0eWxlZC5IZWFkZXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/Header/index.jsx\n");

/***/ })

})