webpackHotUpdate("static/development/pages/BoardPage/board.js",{

/***/ "./components/organisms/Comment/index.jsx":
/*!************************************************!*\
  !*** ./components/organisms/Comment/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/organisms/Comment/style.js\");\n/* harmony import */ var _SingleComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleComment */ \"./components/organisms/SingleComment/index.jsx\");\n/* harmony import */ var _molecules_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/Box */ \"./components/molecules/Box/index.jsx\");\n/* harmony import */ var _atoms_Span__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Span */ \"./components/atoms/Span/index.jsx\");\n/* harmony import */ var _atoms_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/TextArea */ \"./components/atoms/TextArea/index.jsx\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/Button */ \"./components/atoms/Button/index.jsx\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useInput */ \"./hooks/useInput.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/organisms/Comment/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var commentLists = _ref.commentLists;\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"\"),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      contents = _useInput2[0],\n      onChangeContents = _useInput2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, commentLists && commentLists.map(function (comment) {\n    return !comment.responseTo && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 47\n      }\n    });\n  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"CommentContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sort: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxSort\"].CENTER_SPACE_BETWEEN,\n    mar: [0, 0, 1, 0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    weight: _atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"SpanWeight\"].L,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, \"\\uD638\\uD638\\uD638\\uC7BC\\uB204\\uCFE4\"), __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    color: _atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"SpanColor\"].GRAY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, contents.length, \"/1000\")), __jsx(_SingleComment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    direction: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxDirection\"].ROW,\n    sort: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxSort\"].BOTTOM_SPACE_BETWEEN,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_TextArea__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"input-comment\",\n    value: contents,\n    onChange: onChangeContents,\n    height: \"60px\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    width: \"50px\",\n    height: \"34px\",\n    fontSize: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonFontSize\"].S,\n    fontColor: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonColor\"].MAIN,\n    backgroundColor: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonColor\"].LIGHT_MAIN,\n    shadow: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"\\uB4F1\\uB85D\"))));\n};\n\n_s(Comment, \"RPVgrwfHuuINNrsX188siYXOB4Y=\", false, function () {\n  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = Comment;\nComment.propTypes = {\n  commentLists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Db21tZW50L2luZGV4LmpzeD81ZjUyIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJjb21tZW50TGlzdHMiLCJ1c2VJbnB1dCIsImNvbnRlbnRzIiwib25DaGFuZ2VDb250ZW50cyIsIm1hcCIsImNvbW1lbnQiLCJyZXNwb25zZVRvIiwiQm94U29ydCIsIkNFTlRFUl9TUEFDRV9CRVRXRUVOIiwiU3BhbldlaWdodCIsIkwiLCJTcGFuQ29sb3IiLCJHUkFZIiwibGVuZ3RoIiwiQm94RGlyZWN0aW9uIiwiUk9XIiwiQk9UVE9NX1NQQUNFX0JFVFdFRU4iLCJCdXR0b25Gb250U2l6ZSIsIlMiLCJCdXR0b25Db2xvciIsIk1BSU4iLCJMSUdIVF9NQUlOIiwicHJvcFR5cGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDQ0MsK0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQTtBQUFBLE1BQzdCQyxRQUQ2QjtBQUFBLE1BQ25CQyxnQkFEbUI7O0FBR3BDLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxZQUFZLElBQ1hBLFlBQVksQ0FBQ0ksR0FBYixDQUNFLFVBQUNDLE9BQUQ7QUFBQSxXQUFhLENBQUNBLE9BQU8sQ0FBQ0MsVUFBVCxJQUF1QixNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBDO0FBQUEsR0FERixDQUZKLEVBTUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFLLFFBQUksRUFBRUMsc0RBQU8sQ0FBQ0Msb0JBQW5CO0FBQXlDLE9BQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxVQUFNLEVBQUVDLHNEQUFVLENBQUNDLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFQyxxREFBUyxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCVixRQUFRLENBQUNXLE1BQXZDLFVBRkYsQ0FERixFQUtFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxzREFBRDtBQUFLLGFBQVMsRUFBRUMsMkRBQVksQ0FBQ0MsR0FBN0I7QUFBa0MsUUFBSSxFQUFFUixzREFBTyxDQUFDUyxvQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxNQUFFLEVBQUMsZUFETDtBQUVFLFNBQUssRUFBRWQsUUFGVDtBQUdFLFlBQVEsRUFBRUMsZ0JBSFo7QUFJRSxVQUFNLEVBQUMsTUFKVDtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLFlBQVEsRUFBRWMsNERBQWMsQ0FBQ0MsQ0FIM0I7QUFJRSxhQUFTLEVBQUVDLHlEQUFXLENBQUNDLElBSnpCO0FBS0UsbUJBQWUsRUFBRUQseURBQVcsQ0FBQ0UsVUFML0I7QUFNRSxVQUFNLEVBQUUsSUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLENBTkYsQ0FORixDQURGO0FBbUNELENBdENEOztHQUFNdEIsTztVQUNpQ0UsdUQ7OztLQURqQ0YsTztBQXdDTkEsT0FBTyxDQUFDdUIsU0FBUixHQUFvQjtBQUNsQnRCLGNBQVksRUFBRXNCLGlEQUFTLENBQUNDO0FBRE4sQ0FBcEI7QUFJZXhCLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ29tbWVudC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IFNpbmdsZUNvbW1lbnQgZnJvbSBcIi4uL1NpbmdsZUNvbW1lbnRcIjtcbmltcG9ydCBCb3gsIHsgQm94U29ydCwgQm94RGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Cb3hcIjtcbmltcG9ydCBTcGFuLCB7IFNwYW5XZWlnaHQsIFNwYW5Db2xvciB9IGZyb20gXCIuLi8uLi9hdG9tcy9TcGFuXCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uLy4uL2F0b21zL1RleHRBcmVhXCI7XG5pbXBvcnQgQnV0dG9uLCB7IEJ1dHRvbkNvbG9yLCBCdXR0b25Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9hdG9tcy9CdXR0b25cIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnRMaXN0cyB9KSA9PiB7XG4gIGNvbnN0IFtjb250ZW50cywgb25DaGFuZ2VDb250ZW50c10gPSB1c2VJbnB1dChcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtjb21tZW50TGlzdHMgJiZcbiAgICAgICAgY29tbWVudExpc3RzLm1hcChcbiAgICAgICAgICAoY29tbWVudCkgPT4gIWNvbW1lbnQucmVzcG9uc2VUbyAmJiA8UmVhY3QuRnJhZ21lbnQ+PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cblxuICAgICAgPFN0eWxlZC5Db21tZW50Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHNvcnQ9e0JveFNvcnQuQ0VOVEVSX1NQQUNFX0JFVFdFRU59IG1hcj17WzAsIDAsIDEsIDBdfT5cbiAgICAgICAgICA8U3BhbiB3ZWlnaHQ9e1NwYW5XZWlnaHQuTH0+7Zi47Zi47Zi47J6864iE7L+kPC9TcGFuPlxuICAgICAgICAgIDxTcGFuIGNvbG9yPXtTcGFuQ29sb3IuR1JBWX0+e2NvbnRlbnRzLmxlbmd0aH0vMTAwMDwvU3Bhbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxTaW5nbGVDb21tZW50IC8+XG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPXtCb3hEaXJlY3Rpb24uUk9XfSBzb3J0PXtCb3hTb3J0LkJPVFRPTV9TUEFDRV9CRVRXRUVOfT5cbiAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgIGlkPVwiaW5wdXQtY29tbWVudFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50c31cbiAgICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIzNHB4XCJcbiAgICAgICAgICAgIGZvbnRTaXplPXtCdXR0b25Gb250U2l6ZS5TfVxuICAgICAgICAgICAgZm9udENvbG9yPXtCdXR0b25Db2xvci5NQUlOfVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtCdXR0b25Db2xvci5MSUdIVF9NQUlOfVxuICAgICAgICAgICAgc2hhZG93PXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOuTseuhnVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU3R5bGVkLkNvbW1lbnRDb250YWluZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkNvbW1lbnQucHJvcFR5cGVzID0ge1xuICBjb21tZW50TGlzdHM6IHByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/Comment/index.jsx\n");

/***/ }),

/***/ "./components/organisms/SingleComment/index.jsx":
/*!******************************************************!*\
  !*** ./components/organisms/SingleComment/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _molecules_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/Profile */ \"./components/molecules/Profile/index.jsx\");\n/* harmony import */ var _molecules_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/Box */ \"./components/molecules/Box/index.jsx\");\n/* harmony import */ var _atoms_Span__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Span */ \"./components/atoms/Span/index.jsx\");\n/* harmony import */ var _atoms_P__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/P */ \"./components/atoms/P/index.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/organisms/SingleComment/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar SingleComment = function SingleComment(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  return __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(_molecules_Profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    width: \"36px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sort: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxSort\"].TOP_SPACE_BETWEEN,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"\\uD638\\uD638\\uD638\\uC7BC\\uB204\\uCFE4\"), __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"16\\uBD84\\uC804\")), __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"\\uB2F5\\uAE00 \\uC4F0\\uAE30\"))));\n};\n\n_c = SingleComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleComment);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleComment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9TaW5nbGVDb21tZW50L2luZGV4LmpzeD8xZjUwIl0sIm5hbWVzIjpbIlNpbmdsZUNvbW1lbnQiLCJCb3hTb3J0IiwiVE9QX1NQQUNFX0JFVFdFRU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFRO0FBQUE7O0FBQzVCLFNBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFTLFNBQUssRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBSyxRQUFJLEVBQUVDLHNEQUFPLENBQUNDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBREYsRUFLRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FMRixDQUZGLENBREY7QUFjRCxDQWZEOztLQUFNRixhO0FBaUJTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvb3JnYW5pc21zL1NpbmdsZUNvbW1lbnQvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL1Byb2ZpbGVcIjtcbmltcG9ydCBCb3gsIHsgQm94U29ydCwgQm94RGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Cb3hcIjtcbmltcG9ydCBTcGFuIGZyb20gXCIuLi8uLi9hdG9tcy9TcGFuXCI7XG5pbXBvcnQgUCBmcm9tIFwiLi4vLi4vYXRvbXMvUFwiO1xuXG5jb25zdCBTaW5nbGVDb21tZW50ID0gKHt9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxQcm9maWxlIHdpZHRoPVwiMzZweFwiIC8+XG4gICAgICA8Qm94IHNvcnQ9e0JveFNvcnQuVE9QX1NQQUNFX0JFVFdFRU59PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxTcGFuPu2YuO2YuO2YuOyevOuIhOy/pDwvU3Bhbj5cbiAgICAgICAgICA8U3Bhbj4xNuu2hOyghDwvU3Bhbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFNwYW4+64u16riAIOyTsOq4sDwvU3Bhbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/SingleComment/index.jsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectDestructuringEmpty; });\nfunction _objectDestructuringEmpty(obj) {\n  if (obj == null) throw new TypeError(\"Cannot destructure undefined\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5LmpzPzg0NjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5KG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\n");

/***/ })

})