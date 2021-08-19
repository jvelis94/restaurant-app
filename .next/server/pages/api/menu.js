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
exports.id = "pages/api/menu";
exports.ids = ["pages/api/menu"];
exports.modules = {

/***/ "./pages/api/menu.js":
/*!***************************!*\
  !*** ./pages/api/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const userEmail = req.body.email;\n\n    if (!userEmail || !userEmail.includes('@')) {\n      res.status(422).json({\n        message: 'Invalid email address.'\n      });\n      return;\n    }\n\n    let client;\n\n    try {\n      client = await connectDatabase();\n    } catch (error) {\n      res.status(500).json({\n        message: 'Connecting to the database failed!'\n      });\n      return;\n    }\n\n    try {\n      await insertDocument(client, 'newsletter', {\n        email: userEmail\n      });\n      client.close();\n    } catch (error) {\n      res.status(500).json({\n        message: 'Inserting data failed!'\n      });\n      return;\n    }\n\n    res.status(201).json({\n      message: 'Signed up!'\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmOztBQUdBLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM1QixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QixVQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUEzQjs7QUFFQSxRQUFJLENBQUNGLFNBQUQsSUFBYyxDQUFDQSxTQUFTLENBQUNHLFFBQVYsQ0FBbUIsR0FBbkIsQ0FBbkIsRUFBNEM7QUFDMUNMLE1BQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxRQUFJQyxNQUFKOztBQUVBLFFBQUk7QUFDRkEsTUFBQUEsTUFBTSxHQUFHLE1BQU1DLGVBQWUsRUFBOUI7QUFDRCxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RYLE1BQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsWUFBTUksY0FBYyxDQUFDSCxNQUFELEVBQVMsWUFBVCxFQUF1QjtBQUFFTCxRQUFBQSxLQUFLLEVBQUVGO0FBQVQsT0FBdkIsQ0FBcEI7QUFDQU8sTUFBQUEsTUFBTSxDQUFDSSxLQUFQO0FBQ0QsS0FIRCxDQUdFLE9BQU9GLEtBQVAsRUFBYztBQUNkWCxNQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0Q7O0FBRURSLElBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDTjs7QUFFRCxpRUFBZVYsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vcGFnZXMvYXBpL21lbnUuanM/ZmUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc3QgdXNlckVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgXG4gICAgICAgIGlmICghdXNlckVtYWlsIHx8ICF1c2VyRW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgYWRkcmVzcy4nIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgY2xpZW50O1xuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Nvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlIGZhaWxlZCEnIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGluc2VydERvY3VtZW50KGNsaWVudCwgJ25ld3NsZXR0ZXInLCB7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG4gICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW5zZXJ0aW5nIGRhdGEgZmFpbGVkIScgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1NpZ25lZCB1cCEnIH0pO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyRW1haWwiLCJib2R5IiwiZW1haWwiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwiZXJyb3IiLCJpbnNlcnREb2N1bWVudCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/menu.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/menu.js"));
module.exports = __webpack_exports__;

})();