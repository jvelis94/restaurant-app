"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./store/order-context.js":
/*!********************************!*\
  !*** ./store/order-context.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n}); // const defaultOrder = {\n//     status: \"open\",\n//     subtotal: 0,\n//     tax: 0,\n//     tip: 0,\n//     total: 0,\n//     orderItems: [],\n//     user: 1\n// }\n\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      updateCart = _useState3[0],\n      setUpdateCart = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n      setOrderItems(data.orderItems.map(function (orderItem) {\n        var orderObject = {\n          id: orderItem.id,\n          product: orderItem.product,\n          price: orderItem.product.price,\n          quantity: orderItem.quantity,\n          order: currentOrder\n        };\n        return orderObject;\n      }));\n    });\n    setUpdateCart(false);\n  }, [updateCart]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"adding \".concat(item, \" to cart\"));\n              orderItem = {\n                product: item,\n                quantity: 1,\n                price: item.price,\n                order: currentOrder\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 3;\n              body = orderItem;\n              _context.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(item) {\n      var orderItem, updateIndex, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              orderItem = orderItems.find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n              orderItem['quantity'] += 1;\n              updateIndex = orderItems.indexOf(item);\n              setOrderItems(function (prevState) {\n                prevState[updateIndex] = orderItem;\n                return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n              });\n              _context2.prev = 4;\n              body = orderItem;\n              _context2.next = 8;\n              return fetch(\"/api/cart\", {\n                method: \"PATCH\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 8:\n              _context2.next = 13;\n              break;\n\n            case 10:\n              _context2.prev = 10;\n              _context2.t0 = _context2[\"catch\"](4);\n              console.error(_context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[4, 10]]);\n    }));\n\n    return function incrementQuantity(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var decrementQuantity = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(item) {\n      var updateIndex, orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              updateIndex = orderItems.indexOf(item);\n              orderItem = orderItems.find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n\n              if (orderItem['quantity'] === 1) {\n                removeCartItem(item);\n              } else {\n                orderItem['quantity'] -= 1;\n                setOrderItems(function (prevState) {\n                  prevState[updateIndex] = orderItem;\n                  return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n                });\n              }\n\n              _context3.prev = 3;\n              body = orderItem;\n              _context3.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"PATCH\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context3.next = 12;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](3);\n              console.error(_context3.t0);\n\n            case 12:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[3, 9]]);\n    }));\n\n    return function decrementQuantity(_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var removeCartItem = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(item) {\n      var orderItem, newOrderArray, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              orderItem = orderItems.find(function (order) {\n                return order['product']['id'] === item.product.id;\n              });\n              newOrderArray = orderItems.filter(function (el) {\n                return el !== item;\n              });\n              setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n              _context4.prev = 3;\n              body = orderItem;\n              _context4.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"DELETE\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context4.next = 12;\n              break;\n\n            case 9:\n              _context4.prev = 9;\n              _context4.t0 = _context4[\"catch\"](3);\n              console.error(_context4.t0);\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[3, 9]]);\n    }));\n\n    return function removeCartItem(_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"KI8N/Z7FCh2TTf0ge4m3IE25EgU=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUEsS0FBcEI7O0FBbUJBLHNCQUNJLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQ0ksU0FBSyxFQUFFO0FBQ0hOLE1BQUFBLFlBQVksRUFBRUEsWUFEWDtBQUVIQyxNQUFBQSxVQUFVLEVBQUVBLFVBRlQ7QUFHSEMsTUFBQUEsU0FBUyxFQUFFQSxTQUhSO0FBSUhFLE1BQUFBLGlCQUFpQixFQUFFQSxpQkFKaEI7QUFLSEMsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUxoQjtBQU1IQyxNQUFBQSxjQUFjLEVBQUVBO0FBTmIsS0FEWDtBQUFBLGNBVUtFLEtBQUssQ0FBQ2lDO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FoSU07O0dBQU1sQzs7S0FBQUE7QUFrSWIsK0RBQWVULFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvb3JkZXItY29udGV4dC5qcz8wMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgT3JkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgY3VycmVudE9yZGVyOiB7fSxcbiAgICBvcmRlckl0ZW1zOiBbXSxcbiAgICBhZGRUb0NhcnQ6IChpdGVtKSA9PiB7fSxcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKGl0ZW0pID0+IHt9LFxuICAgIGRlY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgcmVtb3ZlQ2FydEl0ZW06IChpdGVtKSA9PiB7fVxufSk7XG5cbi8vIGNvbnN0IGRlZmF1bHRPcmRlciA9IHtcbi8vICAgICBzdGF0dXM6IFwib3BlblwiLFxuLy8gICAgIHN1YnRvdGFsOiAwLFxuLy8gICAgIHRheDogMCxcbi8vICAgICB0aXA6IDAsXG4vLyAgICAgdG90YWw6IDAsXG4vLyAgICAgb3JkZXJJdGVtczogW10sXG4vLyAgICAgdXNlcjogMVxuLy8gfVxuXG5leHBvcnQgY29uc3QgT3JkZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbY3VycmVudE9yZGVyLCBzZXRDdXJyZW50T3JkZXJdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW29yZGVySXRlbXMsIHNldE9yZGVySXRlbXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3VwZGF0ZUNhcnQsIHNldFVwZGF0ZUNhcnRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS9jYXJ0JylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRPcmRlcihkYXRhKVxuICAgICAgICAgICAgICAgIHNldE9yZGVySXRlbXMoZGF0YS5vcmRlckl0ZW1zLm1hcChvcmRlckl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb3JkZXJJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogb3JkZXJJdGVtLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJJdGVtLnByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogb3JkZXJJdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGN1cnJlbnRPcmRlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmRlck9iamVjdFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgc2V0VXBkYXRlQ2FydChmYWxzZSlcbiAgICAgICAgXG4gICAgfSwgW3VwZGF0ZUNhcnRdKVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyAke2l0ZW19IHRvIGNhcnRgKVxuICAgICAgICBjb25zdCBvcmRlckl0ZW0gPSB7XG4gICAgICAgICAgICBwcm9kdWN0OiBpdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9yZGVyOiBjdXJyZW50T3JkZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0T3JkZXJJdGVtcygocHJldlN0YXRlKSA9PiBbLi4ucHJldlN0YXRlLCBvcmRlckl0ZW1dKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gb3JkZXJJdGVtXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvY2FydFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IG9yZGVySXRlbSA9IG9yZGVySXRlbXMuZmluZChvcmRlciA9PiBvcmRlclsncHJvZHVjdCddWydpZCddID09PSBpdGVtLnByb2R1Y3QuaWQpXG4gICAgICAgIG9yZGVySXRlbVsncXVhbnRpdHknXSArPSAxXG4gICAgICAgIGxldCB1cGRhdGVJbmRleCA9IG9yZGVySXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICBzZXRPcmRlckl0ZW1zKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICBwcmV2U3RhdGVbdXBkYXRlSW5kZXhdID0gb3JkZXJJdGVtXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVJbmRleCA9IG9yZGVySXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICBsZXQgb3JkZXJJdGVtID0gb3JkZXJJdGVtcy5maW5kKG9yZGVyID0+IG9yZGVyWydwcm9kdWN0J11bJ2lkJ10gPT09IGl0ZW0ucHJvZHVjdC5pZClcbiAgICAgICAgaWYgKG9yZGVySXRlbVsncXVhbnRpdHknXSA9PT0gMSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2FydEl0ZW0oaXRlbSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVySXRlbVsncXVhbnRpdHknXSAtPSAxXG4gICAgICAgICAgICBzZXRPcmRlckl0ZW1zKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldlN0YXRlW3VwZGF0ZUluZGV4XSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucHJldlN0YXRlXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgb3JkZXJJdGVtID0gb3JkZXJJdGVtcy5maW5kKG9yZGVyID0+IG9yZGVyWydwcm9kdWN0J11bJ2lkJ10gPT09IGl0ZW0ucHJvZHVjdC5pZClcbiAgICAgICAgbGV0IG5ld09yZGVyQXJyYXkgPSBvcmRlckl0ZW1zLmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSlcbiAgICAgICAgc2V0T3JkZXJJdGVtcyhbLi4ubmV3T3JkZXJBcnJheV0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBvcmRlckl0ZW1cbiAgICAgICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPcmRlcjogY3VycmVudE9yZGVyLFxuICAgICAgICAgICAgICAgIG9yZGVySXRlbXM6IG9yZGVySXRlbXMsXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UXVhbnRpdHk6IGluY3JlbWVudFF1YW50aXR5LFxuICAgICAgICAgICAgICAgIGRlY3JlbWVudFF1YW50aXR5OiBkZWNyZW1lbnRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICByZW1vdmVDYXJ0SXRlbTogcmVtb3ZlQ2FydEl0ZW0sXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbnRleHQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJPcmRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY3VycmVudE9yZGVyIiwib3JkZXJJdGVtcyIsImFkZFRvQ2FydCIsIml0ZW0iLCJpbmNyZW1lbnRRdWFudGl0eSIsImRlY3JlbWVudFF1YW50aXR5IiwicmVtb3ZlQ2FydEl0ZW0iLCJPcmRlckNvbnRleHRQcm92aWRlciIsInByb3BzIiwic2V0Q3VycmVudE9yZGVyIiwic2V0T3JkZXJJdGVtcyIsInVwZGF0ZUNhcnQiLCJzZXRVcGRhdGVDYXJ0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm1hcCIsIm9yZGVySXRlbSIsIm9yZGVyT2JqZWN0IiwiaWQiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSIsImJvZHkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZmluZCIsInVwZGF0ZUluZGV4IiwiaW5kZXhPZiIsIm5ld09yZGVyQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});