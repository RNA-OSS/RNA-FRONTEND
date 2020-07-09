webpackHotUpdate("static/development/pages/BoardPage/board.js",{

/***/ "./components/organisms/Comment/index.jsx":
/*!************************************************!*\
  !*** ./components/organisms/Comment/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/organisms/Comment/style.js\");\n/* harmony import */ var _SingleComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleComment */ \"./components/organisms/SingleComment/index.jsx\");\n/* harmony import */ var _molecules_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/Box */ \"./components/molecules/Box/index.jsx\");\n/* harmony import */ var _atoms_Span__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Span */ \"./components/atoms/Span/index.jsx\");\n/* harmony import */ var _atoms_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/TextArea */ \"./components/atoms/TextArea/index.jsx\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/Button */ \"./components/atoms/Button/index.jsx\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useInput */ \"./hooks/useInput.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jojaegwon/Desktop/RNA Project/front/components/organisms/Comment/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var commentLists = _ref.commentLists;\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"\"),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      contents = _useInput2[0],\n      onChangeContents = _useInput2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, commentLists && commentLists.map(function (comment) {\n    return !comment.responseTo && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 47\n      }\n    });\n  }), __jsx(_SingleComment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"CommentContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sort: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxSort\"].CENTER_SPACE_BETWEEN,\n    mar: [0, 0, 1, 0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    weight: _atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"SpanWeight\"].L,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"\\uD638\\uD638\\uD638\\uC7BC\\uB204\\uCFE4\"), __jsx(_atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    color: _atoms_Span__WEBPACK_IMPORTED_MODULE_6__[\"SpanColor\"].GRAY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, contents.length, \"/1000\")), __jsx(_molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    direction: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxDirection\"].ROW,\n    sort: _molecules_Box__WEBPACK_IMPORTED_MODULE_5__[\"BoxSort\"].BOTTOM_SPACE_BETWEEN,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_TextArea__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"input-comment\",\n    value: contents,\n    onChange: onChangeContents,\n    height: \"60px\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    width: \"50px\",\n    height: \"34px\",\n    fontSize: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonFontSize\"].S,\n    fontColor: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonColor\"].MAIN,\n    backgroundColor: _atoms_Button__WEBPACK_IMPORTED_MODULE_8__[\"ButtonColor\"].LIGHT_MAIN,\n    shadow: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"\\uB4F1\\uB85D\"))));\n};\n\n_s(Comment, \"RPVgrwfHuuINNrsX188siYXOB4Y=\", false, function () {\n  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = Comment;\nComment.propTypes = {\n  commentLists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Db21tZW50L2luZGV4LmpzeD81ZjUyIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJjb21tZW50TGlzdHMiLCJ1c2VJbnB1dCIsImNvbnRlbnRzIiwib25DaGFuZ2VDb250ZW50cyIsIm1hcCIsImNvbW1lbnQiLCJyZXNwb25zZVRvIiwiQm94U29ydCIsIkNFTlRFUl9TUEFDRV9CRVRXRUVOIiwiU3BhbldlaWdodCIsIkwiLCJTcGFuQ29sb3IiLCJHUkFZIiwibGVuZ3RoIiwiQm94RGlyZWN0aW9uIiwiUk9XIiwiQk9UVE9NX1NQQUNFX0JFVFdFRU4iLCJCdXR0b25Gb250U2l6ZSIsIlMiLCJCdXR0b25Db2xvciIsIk1BSU4iLCJMSUdIVF9NQUlOIiwicHJvcFR5cGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDQ0MsK0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQTtBQUFBLE1BQzdCQyxRQUQ2QjtBQUFBLE1BQ25CQyxnQkFEbUI7O0FBR3BDLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxZQUFZLElBQ1hBLFlBQVksQ0FBQ0ksR0FBYixDQUNFLFVBQUNDLE9BQUQ7QUFBQSxXQUFhLENBQUNBLE9BQU8sQ0FBQ0MsVUFBVCxJQUF1QixNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBDO0FBQUEsR0FERixDQUZKLEVBS0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUssUUFBSSxFQUFFQyxzREFBTyxDQUFDQyxvQkFBbkI7QUFBeUMsT0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFVBQU0sRUFBRUMsc0RBQVUsQ0FBQ0MsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERixFQUVFLE1BQUMsbURBQUQ7QUFBTSxTQUFLLEVBQUVDLHFEQUFTLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEJWLFFBQVEsQ0FBQ1csTUFBdkMsVUFGRixDQURGLEVBS0UsTUFBQyxzREFBRDtBQUFLLGFBQVMsRUFBRUMsMkRBQVksQ0FBQ0MsR0FBN0I7QUFBa0MsUUFBSSxFQUFFUixzREFBTyxDQUFDUyxvQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFDRSxNQUFFLEVBQUMsZUFETDtBQUVFLFNBQUssRUFBRWQsUUFGVDtBQUdFLFlBQVEsRUFBRUMsZ0JBSFo7QUFJRSxVQUFNLEVBQUMsTUFKVDtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLFlBQVEsRUFBRWMsNERBQWMsQ0FBQ0MsQ0FIM0I7QUFJRSxhQUFTLEVBQUVDLHlEQUFXLENBQUNDLElBSnpCO0FBS0UsbUJBQWUsRUFBRUQseURBQVcsQ0FBQ0UsVUFML0I7QUFNRSxVQUFNLEVBQUUsSUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLENBTEYsQ0FQRixDQURGO0FBbUNELENBdENEOztHQUFNdEIsTztVQUNpQ0UsdUQ7OztLQURqQ0YsTztBQXdDTkEsT0FBTyxDQUFDdUIsU0FBUixHQUFvQjtBQUNsQnRCLGNBQVksRUFBRXNCLGlEQUFTLENBQUNDO0FBRE4sQ0FBcEI7QUFJZXhCLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ29tbWVudC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IFNpbmdsZUNvbW1lbnQgZnJvbSBcIi4uL1NpbmdsZUNvbW1lbnRcIjtcbmltcG9ydCBCb3gsIHsgQm94U29ydCwgQm94RGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9Cb3hcIjtcbmltcG9ydCBTcGFuLCB7IFNwYW5XZWlnaHQsIFNwYW5Db2xvciB9IGZyb20gXCIuLi8uLi9hdG9tcy9TcGFuXCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uLy4uL2F0b21zL1RleHRBcmVhXCI7XG5pbXBvcnQgQnV0dG9uLCB7IEJ1dHRvbkNvbG9yLCBCdXR0b25Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9hdG9tcy9CdXR0b25cIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnRMaXN0cyB9KSA9PiB7XG4gIGNvbnN0IFtjb250ZW50cywgb25DaGFuZ2VDb250ZW50c10gPSB1c2VJbnB1dChcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtjb21tZW50TGlzdHMgJiZcbiAgICAgICAgY29tbWVudExpc3RzLm1hcChcbiAgICAgICAgICAoY29tbWVudCkgPT4gIWNvbW1lbnQucmVzcG9uc2VUbyAmJiA8UmVhY3QuRnJhZ21lbnQ+PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDxTaW5nbGVDb21tZW50IC8+XG5cbiAgICAgIDxTdHlsZWQuQ29tbWVudENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzb3J0PXtCb3hTb3J0LkNFTlRFUl9TUEFDRV9CRVRXRUVOfSBtYXI9e1swLCAwLCAxLCAwXX0+XG4gICAgICAgICAgPFNwYW4gd2VpZ2h0PXtTcGFuV2VpZ2h0Lkx9Pu2YuO2YuO2YuOyevOuIhOy/pDwvU3Bhbj5cbiAgICAgICAgICA8U3BhbiBjb2xvcj17U3BhbkNvbG9yLkdSQVl9Pntjb250ZW50cy5sZW5ndGh9LzEwMDA8L1NwYW4+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGRpcmVjdGlvbj17Qm94RGlyZWN0aW9uLlJPV30gc29ydD17Qm94U29ydC5CT1RUT01fU1BBQ0VfQkVUV0VFTn0+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBpZD1cImlucHV0LWNvbW1lbnRcIlxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudHN9XG4gICAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzRweFwiXG4gICAgICAgICAgICBmb250U2l6ZT17QnV0dG9uRm9udFNpemUuU31cbiAgICAgICAgICAgIGZvbnRDb2xvcj17QnV0dG9uQ29sb3IuTUFJTn1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17QnV0dG9uQ29sb3IuTElHSFRfTUFJTn1cbiAgICAgICAgICAgIHNoYWRvdz17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDrk7HroZ1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1N0eWxlZC5Db21tZW50Q29udGFpbmVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5Db21tZW50LnByb3BUeXBlcyA9IHtcbiAgY29tbWVudExpc3RzOiBwcm9wVHlwZXMuYXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/Comment/index.jsx\n");

/***/ })

})