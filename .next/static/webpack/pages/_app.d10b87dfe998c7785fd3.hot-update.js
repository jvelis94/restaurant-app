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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderContextProvider\": function() { return /* binding */ OrderContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jvelis/code/jvelis94/restaurant-app/store/order-context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import { PrismaClient } from '@prisma/client'\n// const prisma = new PrismaClient()\n\nvar OrderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext({\n  currentOrder: {},\n  orderItems: [],\n  addToCart: function addToCart(item) {},\n  incrementQuantity: function incrementQuantity(item) {},\n  decrementQuantity: function decrementQuantity(item) {},\n  removeCartItem: function removeCartItem(item) {}\n}); // const defaultOrder = {\n//     status: \"open\",\n//     subtotal: 0,\n//     tax: 0,\n//     tip: 0,\n//     total: 0,\n//     orderItems: [],\n//     user: 1\n// }\n\nvar OrderContextProvider = function OrderContextProvider(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      currentOrder = _useState[0],\n      setCurrentOrder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      orderItems = _useState2[0],\n      setOrderItems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      updateCart = _useState3[0],\n      setUpdateCart = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch('/api/cart').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCurrentOrder(data);\n      setOrderItems(data.orderItems.map(function (orderItem) {\n        var orderObject = {\n          product: orderItem.product,\n          price: orderItem.product.price,\n          quantity: orderItem.quantity,\n          order: currentOrder\n        };\n        return orderObject;\n      }));\n    });\n    setUpdateCart(false);\n  }, [updateCart]);\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(item) {\n      var orderItem, body;\n      return _Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"adding \".concat(item, \" to cart\"));\n              orderItem = {\n                product: item,\n                quantity: 1,\n                price: item.price,\n                order: currentOrder\n              };\n              setOrderItems(function (prevState) {\n                return [].concat((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [orderItem]);\n              });\n              _context.prev = 3;\n              body = orderItem;\n              _context.next = 7;\n              return fetch(\"/api/cart\", {\n                method: \"POST\",\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 7:\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function addToCart(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var incrementQuantity = function incrementQuantity(item) {\n    var orderItem = orderItems.find(function (order) {\n      return order['product']['id'] === item.product.id;\n    });\n    console.log(orderItem); // orderItem['quantity'] += 1\n    // let updateIndex = orderItems.indexOf(item)\n    // setOrderItems(prevState => {\n    //     prevState[updateIndex] = orderItem\n    //     return [...prevState]\n    // })\n  };\n\n  var decrementQuantity = function decrementQuantity(item) {\n    var updateIndex = orderItems.indexOf(item);\n    var orderItem = orderItems.find(function (order) {\n      return order['name'] === item.name;\n    });\n\n    if (orderItem['quantity'] === 1) {\n      removeCartItem(item);\n    } else {\n      orderItem['quantity'] -= 1;\n      setOrderItems(function (prevState) {\n        prevState[updateIndex] = orderItem;\n        return (0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);\n      });\n    }\n  };\n\n  var removeCartItem = function removeCartItem(item) {\n    var newOrderArray = orderItems.filter(function (el) {\n      return el !== item;\n    });\n    setOrderItems((0,_Users_jvelis_code_jvelis94_restaurant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newOrderArray));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderContext.Provider, {\n    value: {\n      currentOrder: currentOrder,\n      orderItems: orderItems,\n      addToCart: addToCart,\n      incrementQuantity: incrementQuantity,\n      decrementQuantity: decrementQuantity,\n      removeCartItem: removeCartItem\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OrderContextProvider, \"KI8N/Z7FCh2TTf0ge4m3IE25EgU=\");\n\n_c = OrderContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUFBLGFBQWEsQ0FBQyxVQUFBaUIsU0FBUyxFQUFJO0FBQ3ZCQSxRQUFBQSxTQUFTLENBQUNTLFdBQUQsQ0FBVCxHQUF5QmpCLFNBQXpCO0FBQ0EsNEpBQVdRLFNBQVg7QUFDSCxPQUhZLENBQWI7QUFJSDtBQUNKLEdBYkQ7O0FBZUEsTUFBTXJCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsSUFBRCxFQUFVO0FBQzdCLFFBQUlvQyxhQUFhLEdBQUd0QyxVQUFVLENBQUN1QyxNQUFYLENBQWtCLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLEtBQUt0QyxJQUFYO0FBQUEsS0FBcEIsQ0FBcEI7QUFDQU8sSUFBQUEsYUFBYSxDQUFDLDZJQUFJNkIsYUFBTCxFQUFiO0FBQ0gsR0FIRDs7QUFNQSxzQkFDSSw4REFBQyxZQUFELENBQWMsUUFBZDtBQUNJLFNBQUssRUFBRTtBQUNIdkMsTUFBQUEsWUFBWSxFQUFFQSxZQURYO0FBRUhDLE1BQUFBLFVBQVUsRUFBRUEsVUFGVDtBQUdIQyxNQUFBQSxTQUFTLEVBQUVBLFNBSFI7QUFJSEUsTUFBQUEsaUJBQWlCLEVBQUVBLGlCQUpoQjtBQUtIQyxNQUFBQSxpQkFBaUIsRUFBRUEsaUJBTGhCO0FBTUhDLE1BQUFBLGNBQWMsRUFBRUE7QUFOYixLQURYO0FBQUEsY0FVS0UsS0FBSyxDQUFDa0M7QUFWWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQTlGTTs7R0FBTW5DOztLQUFBQTtBQWdHYiwrREFBZVQsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9vcmRlci1jb250ZXh0LmpzPzAyMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBPcmRlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICBjdXJyZW50T3JkZXI6IHt9LFxuICAgIG9yZGVySXRlbXM6IFtdLFxuICAgIGFkZFRvQ2FydDogKGl0ZW0pID0+IHt9LFxuICAgIGluY3JlbWVudFF1YW50aXR5OiAoaXRlbSkgPT4ge30sXG4gICAgZGVjcmVtZW50UXVhbnRpdHk6IChpdGVtKSA9PiB7fSxcbiAgICByZW1vdmVDYXJ0SXRlbTogKGl0ZW0pID0+IHt9XG59KTtcblxuLy8gY29uc3QgZGVmYXVsdE9yZGVyID0ge1xuLy8gICAgIHN0YXR1czogXCJvcGVuXCIsXG4vLyAgICAgc3VidG90YWw6IDAsXG4vLyAgICAgdGF4OiAwLFxuLy8gICAgIHRpcDogMCxcbi8vICAgICB0b3RhbDogMCxcbi8vICAgICBvcmRlckl0ZW1zOiBbXSxcbi8vICAgICB1c2VyOiAxXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBPcmRlckNvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50T3JkZXIsIHNldEN1cnJlbnRPcmRlcl0gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbb3JkZXJJdGVtcywgc2V0T3JkZXJJdGVtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdXBkYXRlQ2FydCwgc2V0VXBkYXRlQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL2NhcnQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudE9yZGVyKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0T3JkZXJJdGVtcyhkYXRhLm9yZGVySXRlbXMubWFwKG9yZGVySXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlck9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IG9yZGVySXRlbS5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG9yZGVySXRlbS5wcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IG9yZGVySXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBjdXJyZW50T3JkZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXJPYmplY3RcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHNldFVwZGF0ZUNhcnQoZmFsc2UpXG4gICAgICAgIFxuICAgIH0sIFt1cGRhdGVDYXJ0XSlcblxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgJHtpdGVtfSB0byBjYXJ0YClcbiAgICAgICAgY29uc3Qgb3JkZXJJdGVtID0ge1xuICAgICAgICAgICAgcHJvZHVjdDogaXRlbSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBvcmRlcjogY3VycmVudE9yZGVyXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldE9yZGVySXRlbXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSwgb3JkZXJJdGVtXSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IG9yZGVySXRlbVxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnRcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW5jcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgb3JkZXJJdGVtID0gb3JkZXJJdGVtcy5maW5kKG9yZGVyID0+IG9yZGVyWydwcm9kdWN0J11bJ2lkJ10gPT09IGl0ZW0ucHJvZHVjdC5pZClcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXJJdGVtKVxuICAgICAgICAvLyBvcmRlckl0ZW1bJ3F1YW50aXR5J10gKz0gMVxuICAgICAgICAvLyBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgLy8gc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAvLyAgICAgcHJldlN0YXRlW3VwZGF0ZUluZGV4XSA9IG9yZGVySXRlbVxuICAgICAgICAvLyAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGVdXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlSW5kZXggPSBvcmRlckl0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgbGV0IG9yZGVySXRlbSA9IG9yZGVySXRlbXMuZmluZChvcmRlciA9PiBvcmRlclsnbmFtZSddID09PSBpdGVtLm5hbWUpXG4gICAgICAgIGlmIChvcmRlckl0ZW1bJ3F1YW50aXR5J10gPT09IDEpIHtcbiAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmRlckl0ZW1bJ3F1YW50aXR5J10gLT0gMVxuICAgICAgICAgICAgc2V0T3JkZXJJdGVtcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVt1cGRhdGVJbmRleF0gPSBvcmRlckl0ZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgbmV3T3JkZXJBcnJheSA9IG9yZGVySXRlbXMuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKVxuICAgICAgICBzZXRPcmRlckl0ZW1zKFsuLi5uZXdPcmRlckFycmF5XSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY3VycmVudE9yZGVyOiBjdXJyZW50T3JkZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRRdWFudGl0eTogaW5jcmVtZW50UXVhbnRpdHksXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50UXVhbnRpdHk6IGRlY3JlbWVudFF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNhcnRJdGVtOiByZW1vdmVDYXJ0SXRlbSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50T3JkZXIiLCJvcmRlckl0ZW1zIiwiYWRkVG9DYXJ0IiwiaXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJyZW1vdmVDYXJ0SXRlbSIsIk9yZGVyQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzZXRDdXJyZW50T3JkZXIiLCJzZXRPcmRlckl0ZW1zIiwidXBkYXRlQ2FydCIsInNldFVwZGF0ZUNhcnQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFwIiwib3JkZXJJdGVtIiwib3JkZXJPYmplY3QiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSIsImJvZHkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZmluZCIsImlkIiwidXBkYXRlSW5kZXgiLCJpbmRleE9mIiwibmFtZSIsIm5ld09yZGVyQXJyYXkiLCJmaWx0ZXIiLCJlbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/order-context.js\n");

/***/ })

});