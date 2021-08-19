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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n}); // const defaultOrder = {\n//     status: \"open\",\n//     subtotal: 0,\n//     tax: 0,\n//     tip: 0,\n//     total: 0,\n//     orderItems: [],\n//     user: 1\n// }\n\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      updateCart = _useState3[0],\n      setUpdateCart = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n      setOrderItems(data.orderItems.map(function (orderItem) {\n        var orderObject = {\n          product: orderItem.product,\n          price: orderItem.product.price,\n          quantity: orderItem.quantity,\n          order: currentOrder\n        };\n        return orderObject;\n      }));\n    });\n    setUpdateCart(false);\n  }, [updateCart]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"adding \".concat(item, \" to cart\"));\n              orderItem = {\n                product: item,\n                quantity: 1,\n                price: item.price,\n                order: currentOrder\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 3;\n              body = orderItem;\n              _context.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = function incrementQuantity(item) {\n    console.log(orderItems); // let orderItem = orderItems.find(order => order['name'] === item.name)\n    // orderItem['quantity'] += 1\n    // let updateIndex = orderItems.indexOf(item)\n    // setOrderItems(prevState => {\n    //     prevState[updateIndex] = orderItem\n    //     return [...prevState]\n    // })\n  };\n\n  var decrementQuantity = function decrementQuantity(item) {\n    var updateIndex = orderItems.indexOf(item);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n\n    if (orderItem['quantity'] === 1) {\n      removeCartItem(item);\n    } else {\n      orderItem['quantity'] -= 1;\n      setOrderItems(function (prevState) {\n        prevState[updateIndex] = orderItem;\n        return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n      });\n    }\n  };\n\n  var removeCartItem = function removeCartItem(item) {\n    var newOrderArray = orderItems.filter(function (el) {\n      return el !== item;\n    });\n    setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"KI8N/Z7FCh2TTf0ge4m3IE25EgU=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUM3QixRQUFJbUMsYUFBYSxHQUFHckMsVUFBVSxDQUFDc0MsTUFBWCxDQUFrQixVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxLQUFLckMsSUFBWDtBQUFBLEtBQXBCLENBQXBCO0FBQ0FPLElBQUFBLGFBQWEsQ0FBQyw2SUFBSTRCLGFBQUwsRUFBYjtBQUNILEdBSEQ7O0FBTUEsc0JBQ0ksOERBQUMsWUFBRCxDQUFjLFFBQWQ7QUFDSSxTQUFLLEVBQUU7QUFDSHRDLE1BQUFBLFlBQVksRUFBRUEsWUFEWDtBQUVIQyxNQUFBQSxVQUFVLEVBQUVBLFVBRlQ7QUFHSEMsTUFBQUEsU0FBUyxFQUFFQSxTQUhSO0FBSUhFLE1BQUFBLGlCQUFpQixFQUFFQSxpQkFKaEI7QUFLSEMsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUxoQjtBQU1IQyxNQUFBQSxjQUFjLEVBQUVBO0FBTmIsS0FEWDtBQUFBLGNBVUtFLEtBQUssQ0FBQ2lDO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0E5Rk07O0dBQU1sQzs7S0FBQUE7QUFnR2IsK0RBQWVULFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvb3JkZXItY29udGV4dC5qcz8wMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgT3JkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgY3VycmVudE9yZGVyOiB7fSxcbiAgICBvcmRlckl0ZW1zOiBbXSxcbiAgICBhZGRUb0NhcnQ6IChpdGVtKSA9PiB7fSxcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKGl0ZW0pID0+IHt9LFxuICAgIGRlY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgcmVtb3ZlQ2FydEl0ZW06IChpdGVtKSA9PiB7fVxufSk7XG5cbi8vIGNvbnN0IGRlZmF1bHRPcmRlciA9IHtcbi8vICAgICBzdGF0dXM6IFwib3BlblwiLFxuLy8gICAgIHN1YnRvdGFsOiAwLFxuLy8gICAgIHRheDogMCxcbi8vICAgICB0aXA6IDAsXG4vLyAgICAgdG90YWw6IDAsXG4vLyAgICAgb3JkZXJJdGVtczogW10sXG4vLyAgICAgdXNlcjogMVxuLy8gfVxuXG5leHBvcnQgY29uc3QgT3JkZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbY3VycmVudE9yZGVyLCBzZXRDdXJyZW50T3JkZXJdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW29yZGVySXRlbXMsIHNldE9yZGVySXRlbXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3VwZGF0ZUNhcnQsIHNldFVwZGF0ZUNhcnRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS9jYXJ0JylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRPcmRlcihkYXRhKVxuICAgICAgICAgICAgICAgIHNldE9yZGVySXRlbXMoZGF0YS5vcmRlckl0ZW1zLm1hcChvcmRlckl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBvcmRlckl0ZW0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlckl0ZW0ucHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBvcmRlckl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogY3VycmVudE9yZGVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyT2JqZWN0XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICBzZXRVcGRhdGVDYXJ0KGZhbHNlKVxuICAgICAgICBcbiAgICB9LCBbdXBkYXRlQ2FydF0pXG5cbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nICR7aXRlbX0gdG8gY2FydGApXG4gICAgICAgIGNvbnN0IG9yZGVySXRlbSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0sXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3JkZXI6IGN1cnJlbnRPcmRlclxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRPcmRlckl0ZW1zKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsIG9yZGVySXRlbV0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBvcmRlckl0ZW1cbiAgICAgICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0XCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXJJdGVtcylcbiAgICAgICAgLy8gbGV0IG9yZGVySXRlbSA9IG9yZGVySXRlbXMuZmluZChvcmRlciA9PiBvcmRlclsnbmFtZSddID09PSBpdGVtLm5hbWUpXG4gICAgICAgIC8vIG9yZGVySXRlbVsncXVhbnRpdHknXSArPSAxXG4gICAgICAgIC8vIGxldCB1cGRhdGVJbmRleCA9IG9yZGVySXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICAvLyBzZXRPcmRlckl0ZW1zKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIC8vICAgICBwcmV2U3RhdGVbdXBkYXRlSW5kZXhdID0gb3JkZXJJdGVtXG4gICAgICAgIC8vICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVJbmRleCA9IG9yZGVySXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICBsZXQgb3JkZXJJdGVtID0gb3JkZXJJdGVtcy5maW5kKG9yZGVyID0+IG9yZGVyWyduYW1lJ10gPT09IGl0ZW0ubmFtZSlcbiAgICAgICAgaWYgKG9yZGVySXRlbVsncXVhbnRpdHknXSA9PT0gMSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2FydEl0ZW0oaXRlbSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVySXRlbVsncXVhbnRpdHknXSAtPSAxXG4gICAgICAgICAgICBzZXRPcmRlckl0ZW1zKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldlN0YXRlW3VwZGF0ZUluZGV4XSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucHJldlN0YXRlXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW1vdmVDYXJ0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBuZXdPcmRlckFycmF5ID0gb3JkZXJJdGVtcy5maWx0ZXIoZWwgPT4gZWwgIT09IGl0ZW0pXG4gICAgICAgIHNldE9yZGVySXRlbXMoWy4uLm5ld09yZGVyQXJyYXldKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JkZXI6IGN1cnJlbnRPcmRlcixcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBvcmRlckl0ZW1zLFxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxuICAgICAgICAgICAgICAgIGluY3JlbWVudFF1YW50aXR5OiBpbmNyZW1lbnRRdWFudGl0eSxcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRRdWFudGl0eTogZGVjcmVtZW50UXVhbnRpdHksXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2FydEl0ZW06IHJlbW92ZUNhcnRJdGVtLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiT3JkZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImN1cnJlbnRPcmRlciIsIm9yZGVySXRlbXMiLCJhZGRUb0NhcnQiLCJpdGVtIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsInJlbW92ZUNhcnRJdGVtIiwiT3JkZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInNldEN1cnJlbnRPcmRlciIsInNldE9yZGVySXRlbXMiLCJ1cGRhdGVDYXJ0Iiwic2V0VXBkYXRlQ2FydCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYXAiLCJvcmRlckl0ZW0iLCJvcmRlck9iamVjdCIsInByb2R1Y3QiLCJwcmljZSIsInF1YW50aXR5Iiwib3JkZXIiLCJjb25zb2xlIiwibG9nIiwicHJldlN0YXRlIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJ1cGRhdGVJbmRleCIsImluZGV4T2YiLCJmaW5kIiwibmFtZSIsIm5ld09yZGVyQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});