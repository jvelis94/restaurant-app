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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nasync function handler(req, res) {\n  // if (req.method === 'POST') {\n  // console.log(req.body)\n  const order = req.body.order;\n  const newOrder = await prisma.order.upsert({\n    where: {\n      id: 1\n    },\n    update: {},\n    create: {\n      status: order.status,\n      subtotal: order.subtotal,\n      tax: order.tax,\n      tip: order.tip,\n      total: order.total,\n      orderItems: {\n        create: {\n          quantity: 1,\n          product: {\n            connect: {\n              id: req.body.product.id\n            }\n          }\n        }\n      },\n      user: {\n        connect: {\n          id: 1\n        }\n      }\n    }\n  });\n  res.json(newOrder); // }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmOztBQUdBLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM1QjtBQUNFO0FBQ0UsUUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLElBQUosQ0FBU0QsS0FBdkI7QUFHRSxRQUFNRSxRQUFRLEdBQUcsTUFBTU4sTUFBTSxDQUFDSSxLQUFQLENBQWFHLE1BQWIsQ0FBb0I7QUFDekNDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUU7QUFBTixLQURrQztBQUV6Q0MsSUFBQUEsTUFBTSxFQUFFLEVBRmlDO0FBR3pDQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsTUFBTSxFQUFFUixLQUFLLENBQUNRLE1BRFI7QUFFTkMsTUFBQUEsUUFBUSxFQUFFVCxLQUFLLENBQUNTLFFBRlY7QUFHTkMsTUFBQUEsR0FBRyxFQUFFVixLQUFLLENBQUNVLEdBSEw7QUFJTkMsTUFBQUEsR0FBRyxFQUFFWCxLQUFLLENBQUNXLEdBSkw7QUFLTkMsTUFBQUEsS0FBSyxFQUFFWixLQUFLLENBQUNZLEtBTFA7QUFNTkMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZOLFFBQUFBLE1BQU0sRUFBRTtBQUNOTyxVQUFBQSxRQUFRLEVBQUUsQ0FESjtBQUVOQyxVQUFBQSxPQUFPLEVBQUU7QUFDUEMsWUFBQUEsT0FBTyxFQUFFO0FBQUVYLGNBQUFBLEVBQUUsRUFBRVAsR0FBRyxDQUFDRyxJQUFKLENBQVNjLE9BQVQsQ0FBaUJWO0FBQXZCO0FBREY7QUFGSDtBQURFLE9BTk47QUFjTlksTUFBQUEsSUFBSSxFQUFFO0FBQ0pELFFBQUFBLE9BQU8sRUFBRTtBQUFFWCxVQUFBQSxFQUFFLEVBQUU7QUFBTjtBQURMO0FBZEE7QUFIaUMsR0FBcEIsQ0FBdkI7QUFzQkFOLEVBQUFBLEdBQUcsQ0FBQ21CLElBQUosQ0FBU2hCLFFBQVQsRUE1QnNCLENBK0IxQjtBQUNMOztBQUVELGlFQUFlTCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9wYWdlcy9hcGkvY2FydC5qcz9iMjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKSB7XG4gICAgLy8gaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgICAgIGNvbnN0IG9yZGVyID0gcmVxLmJvZHkub3JkZXI7XG5cbiAgICAgICAgXG4gICAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXIudXBzZXJ0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHt9LFxuICAgICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICAgIHN0YXR1czogb3JkZXIuc3RhdHVzLFxuICAgICAgICAgICAgICBzdWJ0b3RhbDogb3JkZXIuc3VidG90YWwsXG4gICAgICAgICAgICAgIHRheDogb3JkZXIudGF4LFxuICAgICAgICAgICAgICB0aXA6IG9yZGVyLnRpcCxcbiAgICAgICAgICAgICAgdG90YWw6IG9yZGVyLnRvdGFsLFxuICAgICAgICAgICAgICBvcmRlckl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogeyBpZDogcmVxLmJvZHkucHJvZHVjdC5pZCB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdDogeyBpZDogMX0gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlcy5qc29uKG5ld09yZGVyKVxuICAgIFxuICAgICAgICBcbiAgICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwib3JkZXIiLCJib2R5IiwibmV3T3JkZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImlkIiwidXBkYXRlIiwiY3JlYXRlIiwic3RhdHVzIiwic3VidG90YWwiLCJ0YXgiLCJ0aXAiLCJ0b3RhbCIsIm9yZGVySXRlbXMiLCJxdWFudGl0eSIsInByb2R1Y3QiLCJjb25uZWN0IiwidXNlciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/cart.js\n");

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