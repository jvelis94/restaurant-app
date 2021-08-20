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

/***/ "./store/order-context.js":
/*!********************************!*\
  !*** ./store/order-context.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n});\nvar initialOrderState = {\n  id: null,\n  createdAt: null,\n  updatedAt: null,\n  status: \"open\",\n  subtotal: 0,\n  tax: 0,\n  tip: 0,\n  total: 0,\n  orderItems: [],\n  userId: 1\n};\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialOrderState),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      addedNewOrderItem = _useState2[0],\n      setAddedNewOrderItem = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      total = _useState3[0],\n      setTotal = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n      var totalBillArray = data['orderItems'].map(function (item) {\n        return item.product.price * item.quantity;\n      });\n      setTotal(totalBillArray.reduce(function (a, b) {\n        return a + b;\n      }));\n    });\n    setAddedNewOrderItem(false);\n  }, [addedNewOrderItem]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(product) {\n      var itemInOrderCheck, newOrderItem, response;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(total);\n              console.log(\"adding \".concat(product.name, \" to cart\"));\n              itemInOrderCheck = currentOrder['orderItems'].find(function (orderItem) {\n                return orderItem['product']['id'] === product.id;\n              });\n\n              if (!(currentOrder['orderItems'].length > 0 && itemInOrderCheck)) {\n                _context.next = 7;\n                break;\n              }\n\n              console.log('running if statement inside cart');\n              incrementQuantity(itemInOrderCheck);\n              return _context.abrupt(\"return\");\n\n            case 7:\n              newOrderItem = {\n                orderId: currentOrder.id || \"\",\n                product: product\n              };\n              _context.prev = 8;\n              _context.next = 11;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(newOrderItem)\n              });\n\n            case 11:\n              response = _context.sent;\n              console.log(response);\n              setAddedNewOrderItem(true);\n              _context.next = 19;\n              break;\n\n            case 16:\n              _context.prev = 16;\n              _context.t0 = _context[\"catch\"](8);\n              console.error(_context.t0);\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[8, 16]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(item) {\n      var orderItem, updateIndex, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              orderItem = currentOrder['orderItems'].find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n              orderItem['quantity'] += 1;\n              updateIndex = currentOrder['orderItems'].indexOf(item);\n              _context2.prev = 3;\n              body = orderItem;\n              _context2.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"PATCH\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              setAddedNewOrderItem(true);\n              _context2.next = 13;\n              break;\n\n            case 10:\n              _context2.prev = 10;\n              _context2.t0 = _context2[\"catch\"](3);\n              console.error(_context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[3, 10]]);\n    }));\n\n    return function incrementQuantity(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var decrementQuantity = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(item) {\n      var updateIndex, orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              updateIndex = currentOrder['orderItems'].indexOf(item);\n              orderItem = currentOrder['orderItems'].find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n\n              if (!(orderItem['quantity'] === 1)) {\n                _context3.next = 7;\n                break;\n              }\n\n              removeCartItem(item);\n              return _context3.abrupt(\"return\");\n\n            case 7:\n              orderItem['quantity'] -= 1;\n\n            case 8:\n              _context3.prev = 8;\n              body = orderItem;\n              _context3.next = 12;\n              return fetch(\"/api/cart\", {\n                method: \"PATCH\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 12:\n              setAddedNewOrderItem(true);\n              _context3.next = 18;\n              break;\n\n            case 15:\n              _context3.prev = 15;\n              _context3.t0 = _context3[\"catch\"](8);\n              console.error(_context3.t0);\n\n            case 18:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[8, 15]]);\n    }));\n\n    return function decrementQuantity(_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var removeCartItem = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              orderItem = currentOrder['orderItems'].find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n              _context4.prev = 1;\n              body = orderItem;\n              _context4.next = 5;\n              return fetch(\"/api/cart\", {\n                method: \"DELETE\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 5:\n              setAddedNewOrderItem(true);\n              _context4.next = 11;\n              break;\n\n            case 8:\n              _context4.prev = 8;\n              _context4.t0 = _context4[\"catch\"](1);\n              console.error(_context4.t0);\n\n            case 11:\n              return _context4.abrupt(\"return\");\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[1, 8]]);\n    }));\n\n    return function removeCartItem(_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"FzsJiK69mI9dOOYwWIkgWpMLN88=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFKUyxHQUlGTixTQUpFO0FBQUE7QUFBQSxxQkFLVGxCLEtBQUssQ0FBQyxXQUFELEVBQWM7QUFDckJzQixnQkFBQUEsTUFBTSxFQUFFLFFBRGE7QUFFckJDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEIsaUJBRlk7QUFHckJDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmO0FBSGUsZUFBZCxDQUxJOztBQUFBO0FBVWYxQixjQUFBQSxvQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBVmU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZZmUsY0FBQUEsT0FBTyxDQUFDYyxLQUFSOztBQVplO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZDVDLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBa0JBLHNCQUNJLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQ0ksU0FBSyxFQUFFO0FBQ0hOLE1BQUFBLFlBQVksRUFBRUEsWUFEWDtBQUVIRSxNQUFBQSxTQUFTLEVBQUVBLFNBRlI7QUFHSEUsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUhoQjtBQUlIQyxNQUFBQSxpQkFBaUIsRUFBRUEsaUJBSmhCO0FBS0hDLE1BQUFBLGNBQWMsRUFBRUE7QUFMYixLQURYO0FBQUEsY0FTS1ksS0FBSyxDQUFDb0M7QUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQXJITTs7R0FBTXJDOztLQUFBQTtBQXVIYiwrREFBZW5CLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvb3JkZXItY29udGV4dC5qcz8wMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgT3JkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgY3VycmVudE9yZGVyOiB7fSxcbiAgICBvcmRlckl0ZW1zOiBbXSxcbiAgICBhZGRUb0NhcnQ6IChpdGVtKSA9PiB7fSxcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKGl0ZW0pID0+IHt9LFxuICAgIGRlY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgcmVtb3ZlQ2FydEl0ZW06IChpdGVtKSA9PiB7fVxufSk7XG5cbmNvbnN0IGluaXRpYWxPcmRlclN0YXRlID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGNyZWF0ZWRBdDogbnVsbCxcbiAgICB1cGRhdGVkQXQ6IG51bGwsXG4gICAgc3RhdHVzOiBcIm9wZW5cIixcbiAgICBzdWJ0b3RhbDogMCxcbiAgICB0YXg6IDAsXG4gICAgdGlwOiAwLFxuICAgIHRvdGFsOiAwLFxuICAgIG9yZGVySXRlbXM6IFtdLFxuICAgIHVzZXJJZDogMVxufVxuXG5leHBvcnQgY29uc3QgT3JkZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbY3VycmVudE9yZGVyLCBzZXRDdXJyZW50T3JkZXJdID0gdXNlU3RhdGUoaW5pdGlhbE9yZGVyU3RhdGUpXG4gICAgY29uc3QgW2FkZGVkTmV3T3JkZXJJdGVtLCBzZXRBZGRlZE5ld09yZGVySXRlbV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS9jYXJ0JylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRPcmRlcihkYXRhKVxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEJpbGxBcnJheSA9IGRhdGFbJ29yZGVySXRlbXMnXS5tYXAoaXRlbSA9PiAoaXRlbS5wcm9kdWN0LnByaWNlICogaXRlbS5xdWFudGl0eSkpXG4gICAgICAgICAgICAgICAgc2V0VG90YWwodG90YWxCaWxsQXJyYXkucmVkdWNlKChhLGIpID0+IGErYikpXG4gICAgICAgICAgICB9KVxuICAgICAgICBzZXRBZGRlZE5ld09yZGVySXRlbShmYWxzZSlcbiAgICB9LCBbYWRkZWROZXdPcmRlckl0ZW1dKVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG90YWwpXG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgJHtwcm9kdWN0Lm5hbWV9IHRvIGNhcnRgKVxuICAgICAgICBsZXQgaXRlbUluT3JkZXJDaGVjayA9IGN1cnJlbnRPcmRlclsnb3JkZXJJdGVtcyddLmZpbmQob3JkZXJJdGVtID0+IG9yZGVySXRlbVsncHJvZHVjdCddWydpZCddID09PSBwcm9kdWN0LmlkKVxuICAgICAgICBpZiAoY3VycmVudE9yZGVyWydvcmRlckl0ZW1zJ10ubGVuZ3RoID4gMCAmJiBpdGVtSW5PcmRlckNoZWNrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBpZiBzdGF0ZW1lbnQgaW5zaWRlIGNhcnQnKVxuICAgICAgICAgICAgaW5jcmVtZW50UXVhbnRpdHkoaXRlbUluT3JkZXJDaGVjaylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXJJdGVtID0ge1xuICAgICAgICAgICAgb3JkZXJJZDogY3VycmVudE9yZGVyLmlkIHx8IFwiXCIsXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0LFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T3JkZXJJdGVtKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIHNldEFkZGVkTmV3T3JkZXJJdGVtKHRydWUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IG9yZGVySXRlbSA9IGN1cnJlbnRPcmRlclsnb3JkZXJJdGVtcyddLmZpbmQob3JkZXIgPT4gb3JkZXJbJ3Byb2R1Y3QnXVsnaWQnXSA9PT0gaXRlbS5wcm9kdWN0LmlkKVxuICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gKz0gMVxuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBjdXJyZW50T3JkZXJbJ29yZGVySXRlbXMnXS5pbmRleE9mKGl0ZW0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBvcmRlckl0ZW1cbiAgICAgICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRBZGRlZE5ld09yZGVySXRlbSh0cnVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHVwZGF0ZUluZGV4ID0gY3VycmVudE9yZGVyWydvcmRlckl0ZW1zJ10uaW5kZXhPZihpdGVtKVxuICAgICAgICBsZXQgb3JkZXJJdGVtID0gY3VycmVudE9yZGVyWydvcmRlckl0ZW1zJ10uZmluZChvcmRlciA9PiBvcmRlclsncHJvZHVjdCddWydpZCddID09PSBpdGVtLnByb2R1Y3QuaWQpXG4gICAgICAgIGlmIChvcmRlckl0ZW1bJ3F1YW50aXR5J10gPT09IDEpIHtcbiAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtKGl0ZW0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVySXRlbVsncXVhbnRpdHknXSAtPSAxXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBvcmRlckl0ZW1cbiAgICAgICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRBZGRlZE5ld09yZGVySXRlbSh0cnVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW1vdmVDYXJ0SXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBvcmRlckl0ZW0gPSBjdXJyZW50T3JkZXJbJ29yZGVySXRlbXMnXS5maW5kKG9yZGVyID0+IG9yZGVyWydwcm9kdWN0J11bJ2lkJ10gPT09IGl0ZW0ucHJvZHVjdC5pZClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRBZGRlZE5ld09yZGVySXRlbSh0cnVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY3VycmVudE9yZGVyOiBjdXJyZW50T3JkZXIsXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UXVhbnRpdHk6IGluY3JlbWVudFF1YW50aXR5LFxuICAgICAgICAgICAgICAgIGRlY3JlbWVudFF1YW50aXR5OiBkZWNyZW1lbnRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICByZW1vdmVDYXJ0SXRlbTogcmVtb3ZlQ2FydEl0ZW0sXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbnRleHQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiT3JkZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImN1cnJlbnRPcmRlciIsIm9yZGVySXRlbXMiLCJhZGRUb0NhcnQiLCJpdGVtIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsInJlbW92ZUNhcnRJdGVtIiwiaW5pdGlhbE9yZGVyU3RhdGUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1cyIsInN1YnRvdGFsIiwidGF4IiwidGlwIiwidG90YWwiLCJ1c2VySWQiLCJPcmRlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwic2V0Q3VycmVudE9yZGVyIiwiYWRkZWROZXdPcmRlckl0ZW0iLCJzZXRBZGRlZE5ld09yZGVySXRlbSIsInNldFRvdGFsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRvdGFsQmlsbEFycmF5IiwibWFwIiwicHJvZHVjdCIsInByaWNlIiwicXVhbnRpdHkiLCJyZWR1Y2UiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaXRlbUluT3JkZXJDaGVjayIsImZpbmQiLCJvcmRlckl0ZW0iLCJsZW5ndGgiLCJuZXdPcmRlckl0ZW0iLCJvcmRlcklkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJvcmRlciIsInVwZGF0ZUluZGV4IiwiaW5kZXhPZiIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});