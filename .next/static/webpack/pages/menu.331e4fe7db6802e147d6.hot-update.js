"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_MenuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/MenuItems */ \"./data/MenuItems.js\");\n/* harmony import */ var _data_MenuItems__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_MenuItems__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MenuItems_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuItems/MenuItem */ \"./components/MenuItems/MenuItem.js\");\n/* harmony import */ var _components_UI_MenuNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/MenuNav */ \"./components/UI/MenuNav.js\");\n/* harmony import */ var _components_UI_MenuSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/MenuSearch */ \"./components/UI/MenuSearch.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart */ \"./pages/cart.js\");\n/* harmony import */ var _store_order_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/order-context */ \"./store/order-context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/pages/menu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Menu = function Menu(props) {\n  _s();\n\n  var menuCategories = [\"Appetizers\", \"Wings\", \"Burgers\", \"Sides\", \"Beers\", \"Cocktails\", \"Salads\", \"Sweets\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Appetizers'),\n      activeCategory = _useState[0],\n      setActiveCategory = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      currentSearchResults = _useState2[0],\n      setCurrentSearchResults = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      openSearchResults = _useState3[0],\n      setOpenSearchResults = _useState3[1];\n\n  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_order_context__WEBPACK_IMPORTED_MODULE_7__.default);\n\n  var changeActiveItem = function changeActiveItem(category) {\n    setActiveCategory(category);\n  };\n\n  var handleMenuSearchInput = function handleMenuSearchInput(searchInput) {\n    if (searchInput.length > 2) {\n      setOpenSearchResults(true);\n      var searchResults = props.data.filter(function (item) {\n        var itemFlattened = item.name.toLowerCase();\n        return itemFlattened.includes(searchInput.toLowerCase());\n      });\n      setCurrentSearchResults(searchResults);\n    } else {\n      setOpenSearchResults(false);\n    }\n  };\n\n  var handleCloseSearchResults = function handleCloseSearchResults() {\n    setOpenSearchResults(false);\n  };\n\n  var searchResultsContainer = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: currentSearchResults.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItems_MenuItem__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: item\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 7\n  }, _this);\n\n  var allResultsFilterable = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_MenuNav__WEBPACK_IMPORTED_MODULE_4__.default, {\n      categories: menuCategories,\n      activeCategory: activeCategory,\n      changeActiveItem: changeActiveItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this), props.data.filter(function (item) {\n      return item.category === activeCategory;\n    }).map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItems_MenuItem__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: item\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 7\n  }, _this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_MenuSearch__WEBPACK_IMPORTED_MODULE_5__.default, {\n        handleMenuSearchInput: handleMenuSearchInput,\n        handleCloseSearchResults: handleCloseSearchResults\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, _this), openSearchResults ? searchResultsContainer : allResultsFilterable]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(Menu, \"BhuJQBX04O+qlhzTCWcNeDzQrGo=\");\n\n_c = Menu;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsV0FERjs7QUFVQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UsOERBQUMsOERBQUQ7QUFBWSw2QkFBcUIsRUFBRVIscUJBQW5DO0FBQTBELGdDQUF3QixFQUFFVztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFSWhCLGlCQUFpQixHQUFHaUIsc0JBQUgsR0FBNEJFLG9CQUZqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRSCxDQXZERDs7R0FBTTFCOztLQUFBQTs7QUErRU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVudS5qcz8yZWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuLi9kYXRhL01lbnVJdGVtcydcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL01lbnVJdGVtcy9NZW51SXRlbSdcbmltcG9ydCBNZW51TmF2IGZyb20gJy4uL2NvbXBvbmVudHMvVUkvTWVudU5hdidcbmltcG9ydCBNZW51U2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvVUkvTWVudVNlYXJjaCdcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydCdcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnLi4vc3RvcmUvb3JkZXItY29udGV4dCdcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG1lbnVDYXRlZ29yaWVzID0gW1wiQXBwZXRpemVyc1wiLCBcIldpbmdzXCIsIFwiQnVyZ2Vyc1wiLCBcIlNpZGVzXCIsIFwiQmVlcnNcIiwgXCJDb2NrdGFpbHNcIiwgXCJTYWxhZHNcIiwgXCJTd2VldHNcIl1cbiAgICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKCdBcHBldGl6ZXJzJyk7XG4gICAgY29uc3QgW2N1cnJlbnRTZWFyY2hSZXN1bHRzLCBzZXRDdXJyZW50U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbb3BlblNlYXJjaFJlc3VsdHMsIHNldE9wZW5TZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dClcblxuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZUl0ZW0gPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KGNhdGVnb3J5KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1lbnVTZWFyY2hJbnB1dCA9IChzZWFyY2hJbnB1dCkgPT4ge1xuICAgICAgaWYgKHNlYXJjaElucHV0Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgc2V0T3BlblNlYXJjaFJlc3VsdHModHJ1ZSlcbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdHMgPSBwcm9wcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICBsZXQgaXRlbUZsYXR0ZW5lZCA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgcmV0dXJuIGl0ZW1GbGF0dGVuZWQuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0Q3VycmVudFNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE9wZW5TZWFyY2hSZXN1bHRzKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTZWFyY2hSZXN1bHRzID0gKCkgPT4ge1xuICAgICAgc2V0T3BlblNlYXJjaFJlc3VsdHMoZmFsc2UpO1xuICAgIH07XG5cbiAgICBcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzQ29udGFpbmVyID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICB7Y3VycmVudFNlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5uYW1lfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgYWxsUmVzdWx0c0ZpbHRlcmFibGUgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWVudU5hdiBjYXRlZ29yaWVzPXttZW51Q2F0ZWdvcmllc30gYWN0aXZlQ2F0ZWdvcnk9e2FjdGl2ZUNhdGVnb3J5fSBjaGFuZ2VBY3RpdmVJdGVtPXtjaGFuZ2VBY3RpdmVJdGVtfS8+XG4gICAgICAgIFxuICAgICAgICB7cHJvcHMuZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09PSBhY3RpdmVDYXRlZ29yeSkubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0ubmFtZX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWVudVNlYXJjaCBoYW5kbGVNZW51U2VhcmNoSW5wdXQ9e2hhbmRsZU1lbnVTZWFyY2hJbnB1dH0gaGFuZGxlQ2xvc2VTZWFyY2hSZXN1bHRzPXtoYW5kbGVDbG9zZVNlYXJjaFJlc3VsdHN9Lz5cbiAgICAgICAgICB7IG9wZW5TZWFyY2hSZXN1bHRzID8gc2VhcmNoUmVzdWx0c0NvbnRhaW5lciA6IGFsbFJlc3VsdHNGaWx0ZXJhYmxlIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoe1xuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICBibHVyYjogdHJ1ZSxcbiAgICAgICAgcHJpY2U6IHRydWUsXG4gICAgICAgIGRldGFpbHM6IHRydWUsXG4gICAgICAgIGxhYmVsOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbXMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YTogbWVudUl0ZW1zLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBNZW51Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWVudUl0ZW1zIiwiTWVudUl0ZW0iLCJNZW51TmF2IiwiTWVudVNlYXJjaCIsIkNhcnQiLCJPcmRlckNvbnRleHQiLCJNZW51IiwicHJvcHMiLCJtZW51Q2F0ZWdvcmllcyIsImFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJjdXJyZW50U2VhcmNoUmVzdWx0cyIsInNldEN1cnJlbnRTZWFyY2hSZXN1bHRzIiwib3BlblNlYXJjaFJlc3VsdHMiLCJzZXRPcGVuU2VhcmNoUmVzdWx0cyIsImN0eCIsImNoYW5nZUFjdGl2ZUl0ZW0iLCJjYXRlZ29yeSIsImhhbmRsZU1lbnVTZWFyY2hJbnB1dCIsInNlYXJjaElucHV0IiwibGVuZ3RoIiwic2VhcmNoUmVzdWx0cyIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiaXRlbUZsYXR0ZW5lZCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlQ2xvc2VTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0c0NvbnRhaW5lciIsIm1hcCIsImFsbFJlc3VsdHNGaWx0ZXJhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/menu.js\n");

/***/ })

});