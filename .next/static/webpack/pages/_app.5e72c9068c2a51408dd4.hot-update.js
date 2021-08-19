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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n});\nvar defaultOrder = {\n  status: \"open\",\n  subtotal: 0,\n  tax: 0,\n  tip: 0,\n  total: 0,\n  orderItems: [],\n  user: 1\n};\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultOrder),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      updateCart = _useState3[0],\n      setUpdateCart = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n    });\n  }, [updateCart]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"adding \".concat(item, \" to cart\"));\n              orderItem = {\n                product: item,\n                quantity: 1,\n                order: currentOrder\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 3;\n              body = orderItem;\n              _context.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = function incrementQuantity(item) {\n    console.log(orderItems);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n    orderItem['quantity'] += 1;\n    var updateIndex = orderItems.indexOf(item);\n    setOrderItems(function (prevState) {\n      prevState[updateIndex] = orderItem;\n      return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n    });\n  };\n\n  var decrementQuantity = function decrementQuantity(item) {\n    var updateIndex = orderItems.indexOf(item);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n\n    if (orderItem['quantity'] === 1) {\n      removeCartItem(item);\n    } else {\n      orderItem['quantity'] -= 1;\n      setOrderItems(function (prevState) {\n        prevState[updateIndex] = orderItem;\n        return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n      });\n    }\n  };\n\n  var removeCartItem = function removeCartItem(item) {\n    var newOrderArray = orderItems.filter(function (el) {\n      return el !== item;\n    });\n    setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"o+OT4NgJsXKIebt7WnOrblj/Axk=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7QUFDdkJBLFFBQUFBLFNBQVMsQ0FBQ1MsV0FBRCxDQUFULEdBQXlCYixTQUF6QjtBQUNBLDRKQUFXSSxTQUFYO0FBQ0gsT0FIWSxDQUFiO0FBSUg7QUFDSixHQWJEOztBQWVBLE1BQU16QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUM3QixRQUFJdUMsYUFBYSxHQUFHekMsVUFBVSxDQUFDMEMsTUFBWCxDQUFrQixVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxLQUFLekMsSUFBWDtBQUFBLEtBQXBCLENBQXBCO0FBQ0FjLElBQUFBLGFBQWEsQ0FBQyw2SUFBSXlCLGFBQUwsRUFBYjtBQUNILEdBSEQ7O0FBTUEsc0JBQ0ksOERBQUMsWUFBRCxDQUFjLFFBQWQ7QUFDSSxTQUFLLEVBQUU7QUFDSDFDLE1BQUFBLFlBQVksRUFBRUEsWUFEWDtBQUVIQyxNQUFBQSxVQUFVLEVBQUVBLFVBRlQ7QUFHSEMsTUFBQUEsU0FBUyxFQUFFQSxTQUhSO0FBSUhFLE1BQUFBLGlCQUFpQixFQUFFQSxpQkFKaEI7QUFLSEMsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUxoQjtBQU1IQyxNQUFBQSxjQUFjLEVBQUVBO0FBTmIsS0FEWDtBQUFBLGNBVUtTLEtBQUssQ0FBQzhCO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FuRk07O0dBQU0vQjs7S0FBQUE7QUFxRmIsK0RBQWVoQixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL29yZGVyLWNvbnRleHQuanM/MDIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmNvbnN0IE9yZGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIGN1cnJlbnRPcmRlcjoge30sXG4gICAgb3JkZXJJdGVtczogW10sXG4gICAgYWRkVG9DYXJ0OiAoaXRlbSkgPT4ge30sXG4gICAgaW5jcmVtZW50UXVhbnRpdHk6IChpdGVtKSA9PiB7fSxcbiAgICBkZWNyZW1lbnRRdWFudGl0eTogKGl0ZW0pID0+IHt9LFxuICAgIHJlbW92ZUNhcnRJdGVtOiAoaXRlbSkgPT4ge31cbn0pO1xuXG5jb25zdCBkZWZhdWx0T3JkZXIgPSB7XG4gICAgc3RhdHVzOiBcIm9wZW5cIixcbiAgICBzdWJ0b3RhbDogMCxcbiAgICB0YXg6IDAsXG4gICAgdGlwOiAwLFxuICAgIHRvdGFsOiAwLFxuICAgIG9yZGVySXRlbXM6IFtdLFxuICAgIHVzZXI6IDFcbn1cblxuZXhwb3J0IGNvbnN0IE9yZGVyQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRPcmRlciwgc2V0Q3VycmVudE9yZGVyXSA9IHVzZVN0YXRlKGRlZmF1bHRPcmRlcilcbiAgICBjb25zdCBbb3JkZXJJdGVtcywgc2V0T3JkZXJJdGVtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdXBkYXRlQ2FydCwgc2V0VXBkYXRlQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL2NhcnQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudE9yZGVyKGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICB9LCBbdXBkYXRlQ2FydF0pXG5cbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nICR7aXRlbX0gdG8gY2FydGApXG4gICAgICAgIGNvbnN0IG9yZGVySXRlbSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0sXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIG9yZGVyOiBjdXJyZW50T3JkZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0T3JkZXJJdGVtcygocHJldlN0YXRlKSA9PiBbLi4ucHJldlN0YXRlLCBvcmRlckl0ZW1dKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gb3JkZXJJdGVtXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvY2FydFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVySXRlbXMpXG4gICAgICAgIGxldCBvcmRlckl0ZW0gPSBvcmRlckl0ZW1zLmZpbmQob3JkZXIgPT4gb3JkZXJbJ25hbWUnXSA9PT0gaXRlbS5uYW1lKVxuICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gKz0gMVxuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcHJldlN0YXRlW3VwZGF0ZUluZGV4XSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGVdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgbGV0IG9yZGVySXRlbSA9IG9yZGVySXRlbXMuZmluZChvcmRlciA9PiBvcmRlclsnbmFtZSddID09PSBpdGVtLm5hbWUpXG4gICAgICAgIGlmIChvcmRlckl0ZW1bJ3F1YW50aXR5J10gPT09IDEpIHtcbiAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gLT0gMVxuICAgICAgICAgICAgc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVt1cGRhdGVJbmRleF0gPSBvcmRlckl0ZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgbmV3T3JkZXJBcnJheSA9IG9yZGVySXRlbXMuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKVxuICAgICAgICBzZXRPcmRlckl0ZW1zKFsuLi5uZXdPcmRlckFycmF5XSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY3VycmVudE9yZGVyOiBjdXJyZW50T3JkZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRRdWFudGl0eTogaW5jcmVtZW50UXVhbnRpdHksXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50UXVhbnRpdHk6IGRlY3JlbWVudFF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtOiByZW1vdmVDYXJ0SXRlbSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50T3JkZXIiLCJvcmRlckl0ZW1zIiwiYWRkVG9DYXJ0IiwiaXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJyZW1vdmVDYXJ0SXRlbSIsImRlZmF1bHRPcmRlciIsInN0YXR1cyIsInN1YnRvdGFsIiwidGF4IiwidGlwIiwidG90YWwiLCJ1c2VyIiwiT3JkZXJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInNldEN1cnJlbnRPcmRlciIsInNldE9yZGVySXRlbXMiLCJ1cGRhdGVDYXJ0Iiwic2V0VXBkYXRlQ2FydCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3JkZXJJdGVtIiwicHJvZHVjdCIsInF1YW50aXR5Iiwib3JkZXIiLCJwcmV2U3RhdGUiLCJib2R5IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImZpbmQiLCJuYW1lIiwidXBkYXRlSW5kZXgiLCJpbmRleE9mIiwibmV3T3JkZXJBcnJheSIsImZpbHRlciIsImVsIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});