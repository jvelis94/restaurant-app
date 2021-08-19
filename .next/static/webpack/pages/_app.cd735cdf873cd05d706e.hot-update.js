"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/order-context.js":
/*!********************************!*\
  !*** ./store/order-context.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  order: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n});\nvar defaultOrder = {\n  status: \"open\",\n  subtotal: 0,\n  tax: 0,\n  tip: 0,\n  total: 0,\n  orderItems: [],\n  user: 1\n};\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultOrder),\n      order = _useState[0],\n      setOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // console.log(orderItems)\n              orderItem = {\n                product: item,\n                quantity: 1,\n                order: order\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 2;\n              body = orderItem;\n              _context.next = 6;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 6:\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 8]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = function incrementQuantity(item) {\n    console.log(orderItems);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n    orderItem['quantity'] += 1;\n    var updateIndex = orderItems.indexOf(item);\n    setOrderItems(function (prevState) {\n      prevState[updateIndex] = orderItem;\n      return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n    });\n  };\n\n  var decrementQuantity = function decrementQuantity(item) {\n    var updateIndex = orderItems.indexOf(item);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n\n    if (orderItem['quantity'] === 1) {\n      removeCartItem(item);\n    } else {\n      orderItem['quantity'] -= 1;\n      setOrderItems(function (prevState) {\n        prevState[updateIndex] = orderItem;\n        return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n      });\n    }\n  };\n\n  var removeCartItem = function removeCartItem(item) {\n    var newOrderArray = orderItems.filter(function (el) {\n      return el !== item;\n    });\n    setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      order: order,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"ioMIcXG4ilY92oGdJlF8rZG+/3w=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRUEsS0FESjtBQUVIQyxNQUFBQSxVQUFVLEVBQUVBLFVBRlQ7QUFHSEMsTUFBQUEsU0FBUyxFQUFFQSxTQUhSO0FBSUhFLE1BQUFBLGlCQUFpQixFQUFFQSxpQkFKaEI7QUFLSEMsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUxoQjtBQU1IQyxNQUFBQSxjQUFjLEVBQUVBO0FBTmIsS0FEWDtBQUFBLGNBVUtTLEtBQUssQ0FBQ3VCO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0F6RU07O0dBQU14Qjs7S0FBQUE7QUEyRWIsK0RBQWVoQixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL29yZGVyLWNvbnRleHQuanM/MDIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT3JkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgb3JkZXI6IHt9LFxuICAgIG9yZGVySXRlbXM6IFtdLFxuICAgIGFkZFRvQ2FydDogKGl0ZW0pID0+IHt9LFxuICAgIGluY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgZGVjcmVtZW50UXVhbnRpdHk6IChpdGVtKSA9PiB7fSxcbiAgICByZW1vdmVDYXJ0SXRlbTogKGl0ZW0pID0+IHt9XG59KTtcblxuY29uc3QgZGVmYXVsdE9yZGVyID0ge1xuICAgIHN0YXR1czogXCJvcGVuXCIsXG4gICAgc3VidG90YWw6IDAsXG4gICAgdGF4OiAwLFxuICAgIHRpcDogMCxcbiAgICB0b3RhbDogMCxcbiAgICBvcmRlckl0ZW1zOiBbXSxcbiAgICB1c2VyOiAxXG59XG5cbmV4cG9ydCBjb25zdCBPcmRlckNvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoZGVmYXVsdE9yZGVyKVxuICAgIGNvbnN0IFtvcmRlckl0ZW1zLCBzZXRPcmRlckl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3JkZXJJdGVtcylcbiAgICAgICAgY29uc3Qgb3JkZXJJdGVtID0ge1xuICAgICAgICAgICAgcHJvZHVjdDogaXRlbSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgb3JkZXI6IG9yZGVyXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldE9yZGVySXRlbXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSwgb3JkZXJJdGVtXSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW5jcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlckl0ZW1zKVxuICAgICAgICBsZXQgb3JkZXJJdGVtID0gb3JkZXJJdGVtcy5maW5kKG9yZGVyID0+IG9yZGVyWyduYW1lJ10gPT09IGl0ZW0ubmFtZSlcbiAgICAgICAgb3JkZXJJdGVtWydxdWFudGl0eSddICs9IDFcbiAgICAgICAgbGV0IHVwZGF0ZUluZGV4ID0gb3JkZXJJdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgICAgIHNldE9yZGVySXRlbXMocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHByZXZTdGF0ZVt1cGRhdGVJbmRleF0gPSBvcmRlckl0ZW1cbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldlN0YXRlXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHVwZGF0ZUluZGV4ID0gb3JkZXJJdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgICAgIGxldCBvcmRlckl0ZW0gPSBvcmRlckl0ZW1zLmZpbmQob3JkZXIgPT4gb3JkZXJbJ25hbWUnXSA9PT0gaXRlbS5uYW1lKVxuICAgICAgICBpZiAob3JkZXJJdGVtWydxdWFudGl0eSddID09PSAxKSB7XG4gICAgICAgICAgICByZW1vdmVDYXJ0SXRlbShpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJJdGVtWydxdWFudGl0eSddIC09IDFcbiAgICAgICAgICAgIHNldE9yZGVySXRlbXMocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVbdXBkYXRlSW5kZXhdID0gb3JkZXJJdGVtXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGVdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbW92ZUNhcnRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IG5ld09yZGVyQXJyYXkgPSBvcmRlckl0ZW1zLmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSlcbiAgICAgICAgc2V0T3JkZXJJdGVtcyhbLi4ubmV3T3JkZXJBcnJheV0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcixcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBvcmRlckl0ZW1zLFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxuICAgICAgICAgICAgICAgIGluY3JlbWVudFF1YW50aXR5OiBpbmNyZW1lbnRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRRdWFudGl0eTogZGVjcmVtZW50UXVhbnRpdHksXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2FydEl0ZW06IHJlbW92ZUNhcnRJdGVtLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJPcmRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwib3JkZXIiLCJvcmRlckl0ZW1zIiwiYWRkVG9DYXJ0IiwiaXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJyZW1vdmVDYXJ0SXRlbSIsImRlZmF1bHRPcmRlciIsInN0YXR1cyIsInN1YnRvdGFsIiwidGF4IiwidGlwIiwidG90YWwiLCJ1c2VyIiwiT3JkZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInNldE9yZGVyIiwic2V0T3JkZXJJdGVtcyIsIm9yZGVySXRlbSIsInByb2R1Y3QiLCJxdWFudGl0eSIsInByZXZTdGF0ZSIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiZmluZCIsIm5hbWUiLCJ1cGRhdGVJbmRleCIsImluZGV4T2YiLCJuZXdPcmRlckFycmF5IiwiZmlsdGVyIiwiZWwiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});