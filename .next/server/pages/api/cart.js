"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cart";
exports.ids = ["pages/api/cart"];
exports.modules = {

/***/ "./pages/api/cart.js":
/*!***************************!*\
  !*** ./pages/api/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    console.log('running post request');\n    const order = req.body.order;\n    const newOrder = await prisma.order.upsert({\n      where: {\n        id: 1\n      },\n      update: {\n        orderItems: {\n          create: {\n            quantity: 1,\n            product: {\n              connect: {\n                id: req.body.product.id\n              }\n            }\n          }\n        }\n      },\n      create: {\n        status: order.status,\n        subtotal: order.subtotal,\n        tax: order.tax,\n        tip: order.tip,\n        total: order.total,\n        orderItems: {\n          create: {\n            quantity: 1,\n            product: {\n              connect: {\n                id: req.body.product.id\n              }\n            }\n          }\n        },\n        user: {\n          connect: {\n            id: 1\n          }\n        }\n      }\n    });\n    res.json(newOrder);\n  }\n\n  if (req.method === \"GET\") {\n    console.log('running get request');\n    const user = \"7189643418\";\n    const order = await prisma.order.findFirst({\n      where: {\n        status: \"open\",\n        user: {\n          phoneNumber: user\n        }\n      },\n      include: {\n        orderItems: {\n          include: {\n            product: true\n          }\n        }\n      },\n      orderBy: {\n        id: \"asc\"\n      }\n    });\n    res.json(order);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgcG9zdCByZXF1ZXN0JylcbiAgICAgICAgY29uc3Qgb3JkZXIgPSByZXEuYm9keS5vcmRlcjtcbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXIudXBzZXJ0KHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogMSB9LFxuICAgICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgICAgb3JkZXJJdGVtczoge1xuICAgICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICBjb25uZWN0OiB7IGlkOiByZXEuYm9keS5wcm9kdWN0LmlkIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3RhdHVzOiBvcmRlci5zdGF0dXMsXG4gICAgICAgICAgICBzdWJ0b3RhbDogb3JkZXIuc3VidG90YWwsXG4gICAgICAgICAgICB0YXg6IG9yZGVyLnRheCxcbiAgICAgICAgICAgIHRpcDogb3JkZXIudGlwLFxuICAgICAgICAgICAgdG90YWw6IG9yZGVyLnRvdGFsLFxuICAgICAgICAgICAgb3JkZXJJdGVtczoge1xuICAgICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICBjb25uZWN0OiB7IGlkOiByZXEuYm9keS5wcm9kdWN0LmlkIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIGNvbm5lY3Q6IHsgaWQ6IDF9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLmpzb24obmV3T3JkZXIpICAgIFxuICAgIH1cblxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICBjb25zb2xlLmxvZygncnVubmluZyBnZXQgcmVxdWVzdCcpXG4gICAgICBjb25zdCB1c2VyID0gXCI3MTg5NjQzNDE4XCJcbiAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgcHJpc21hLm9yZGVyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIixcbiAgICAgICAgICB1c2VyOiB7IHBob25lTnVtYmVyOiB1c2VyIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIG9yZGVySXRlbXM6IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgcHJvZHVjdDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIGlkOiBcImFzY1wiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXMuanNvbihvcmRlcilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJvcmRlciIsImJvZHkiLCJuZXdPcmRlciIsInVwc2VydCIsIndoZXJlIiwiaWQiLCJ1cGRhdGUiLCJvcmRlckl0ZW1zIiwiY3JlYXRlIiwicXVhbnRpdHkiLCJwcm9kdWN0IiwiY29ubmVjdCIsInN0YXR1cyIsInN1YnRvdGFsIiwidGF4IiwidGlwIiwidG90YWwiLCJ1c2VyIiwianNvbiIsImZpbmRGaXJzdCIsInBob25lTnVtYmVyIiwiaW5jbHVkZSIsIm9yZGVyQnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/cart.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/cart.js"));
module.exports = __webpack_exports__;

})();