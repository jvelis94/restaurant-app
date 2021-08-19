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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n});\nvar defaultOrder = {\n  status: \"open\",\n  subtotal: 0,\n  tax: 0,\n  tip: 0,\n  total: 0,\n  orderItems: [],\n  user: 1\n};\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultOrder),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      updateCart = _useState3[0],\n      setUpdateCart = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n      setOrderItems(data.orderItems.map(function (orderItem) {\n        var orderObject = {\n          product: orderItem.product,\n          price: orderItem.product.price,\n          quantity: orderItem.quantity\n        };\n        return orderObject;\n      }));\n    });\n    updateCart(false);\n  }, [updateCart]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"adding \".concat(item, \" to cart\"));\n              orderItem = {\n                product: item,\n                quantity: 1,\n                order: currentOrder\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 3;\n              body = orderItem;\n              _context.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = function incrementQuantity(item) {\n    console.log(orderItems);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n    orderItem['quantity'] += 1;\n    var updateIndex = orderItems.indexOf(item);\n    setOrderItems(function (prevState) {\n      prevState[updateIndex] = orderItem;\n      return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n    });\n  };\n\n  var decrementQuantity = function decrementQuantity(item) {\n    var updateIndex = orderItems.indexOf(item);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n\n    if (orderItem['quantity'] === 1) {\n      removeCartItem(item);\n    } else {\n      orderItem['quantity'] -= 1;\n      setOrderItems(function (prevState) {\n        prevState[updateIndex] = orderItem;\n        return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n      });\n    }\n  };\n\n  var removeCartItem = function removeCartItem(item) {\n    var newOrderArray = orderItems.filter(function (el) {\n      return el !== item;\n    });\n    setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"o+OT4NgJsXKIebt7WnOrblj/Axk=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlSCxDQTVGTTs7R0FBTWxDOztLQUFBQTtBQThGYiwrREFBZWhCLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvb3JkZXItY29udGV4dC5qcz8wMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgT3JkZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgY3VycmVudE9yZGVyOiB7fSxcbiAgICBvcmRlckl0ZW1zOiBbXSxcbiAgICBhZGRUb0NhcnQ6IChpdGVtKSA9PiB7fSxcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKGl0ZW0pID0+IHt9LFxuICAgIGRlY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgcmVtb3ZlQ2FydEl0ZW06IChpdGVtKSA9PiB7fVxufSk7XG5cbmNvbnN0IGRlZmF1bHRPcmRlciA9IHtcbiAgICBzdGF0dXM6IFwib3BlblwiLFxuICAgIHN1YnRvdGFsOiAwLFxuICAgIHRheDogMCxcbiAgICB0aXA6IDAsXG4gICAgdG90YWw6IDAsXG4gICAgb3JkZXJJdGVtczogW10sXG4gICAgdXNlcjogMVxufVxuXG5leHBvcnQgY29uc3QgT3JkZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbY3VycmVudE9yZGVyLCBzZXRDdXJyZW50T3JkZXJdID0gdXNlU3RhdGUoZGVmYXVsdE9yZGVyKVxuICAgIGNvbnN0IFtvcmRlckl0ZW1zLCBzZXRPcmRlckl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFt1cGRhdGVDYXJ0LCBzZXRVcGRhdGVDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJy9hcGkvY2FydCcpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50T3JkZXIoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRPcmRlckl0ZW1zKGRhdGEub3JkZXJJdGVtcy5tYXAob3JkZXJJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVyT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogb3JkZXJJdGVtLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJJdGVtLnByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogb3JkZXJJdGVtLnF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyT2JqZWN0XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB1cGRhdGVDYXJ0KGZhbHNlKVxuICAgICAgICBcbiAgICB9LCBbdXBkYXRlQ2FydF0pXG5cbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nICR7aXRlbX0gdG8gY2FydGApXG4gICAgICAgIGNvbnN0IG9yZGVySXRlbSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0sXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIG9yZGVyOiBjdXJyZW50T3JkZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0T3JkZXJJdGVtcygocHJldlN0YXRlKSA9PiBbLi4ucHJldlN0YXRlLCBvcmRlckl0ZW1dKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gb3JkZXJJdGVtXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvY2FydFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVySXRlbXMpXG4gICAgICAgIGxldCBvcmRlckl0ZW0gPSBvcmRlckl0ZW1zLmZpbmQob3JkZXIgPT4gb3JkZXJbJ25hbWUnXSA9PT0gaXRlbS5uYW1lKVxuICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gKz0gMVxuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcHJldlN0YXRlW3VwZGF0ZUluZGV4XSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGVdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgbGV0IG9yZGVySXRlbSA9IG9yZGVySXRlbXMuZmluZChvcmRlciA9PiBvcmRlclsnbmFtZSddID09PSBpdGVtLm5hbWUpXG4gICAgICAgIGlmIChvcmRlckl0ZW1bJ3F1YW50aXR5J10gPT09IDEpIHtcbiAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gLT0gMVxuICAgICAgICAgICAgc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVt1cGRhdGVJbmRleF0gPSBvcmRlckl0ZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgbmV3T3JkZXJBcnJheSA9IG9yZGVySXRlbXMuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKVxuICAgICAgICBzZXRPcmRlckl0ZW1zKFsuLi5uZXdPcmRlckFycmF5XSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY3VycmVudE9yZGVyOiBjdXJyZW50T3JkZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRRdWFudGl0eTogaW5jcmVtZW50UXVhbnRpdHksXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50UXVhbnRpdHk6IGRlY3JlbWVudFF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtOiByZW1vdmVDYXJ0SXRlbSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50T3JkZXIiLCJvcmRlckl0ZW1zIiwiYWRkVG9DYXJ0IiwiaXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJyZW1vdmVDYXJ0SXRlbSIsImRlZmF1bHRPcmRlciIsInN0YXR1cyIsInN1YnRvdGFsIiwidGF4IiwidGlwIiwidG90YWwiLCJ1c2VyIiwiT3JkZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInNldEN1cnJlbnRPcmRlciIsInNldE9yZGVySXRlbXMiLCJ1cGRhdGVDYXJ0Iiwic2V0VXBkYXRlQ2FydCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYXAiLCJvcmRlckl0ZW0iLCJvcmRlck9iamVjdCIsInByb2R1Y3QiLCJwcmljZSIsInF1YW50aXR5IiwiY29uc29sZSIsImxvZyIsIm9yZGVyIiwicHJldlN0YXRlIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJmaW5kIiwibmFtZSIsInVwZGF0ZUluZGV4IiwiaW5kZXhPZiIsIm5ld09yZGVyQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});