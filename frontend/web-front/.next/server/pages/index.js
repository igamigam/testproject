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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: tests , 1: setTest  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: \"http://localhost:8080\"\n        });\n        try {\n            const response = await instance.get(\"/api/\");\n            console.log(response?.data);\n            const testdata = response?.data;\n            setTest(testdata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAPIData,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            tests.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.body\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNWO0FBUTVDLGlFQUFnQixJQUFNO0lBQ2xCLE1BQU0sRUFWVixHQVVXRyxLQUFLLEdBVmhCLEdBVWtCQyxPQUFPLE1BQUlILCtDQUFRLENBQVMsRUFBRSxDQUFDO0lBRTdDLE1BQU1JLFVBQVUsR0FBRyxVQUFZO1FBQzNCLElBQUlDLFFBQVE7UUFFWkEsUUFBUSxHQUFHSixtREFBWSxDQUFDO1lBQ3BCTSxPQUFPLEVBQUUsdUJBQXVCO1NBQ25DLENBQUM7UUFFRixJQUFJO1lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsRUFBRUksSUFBSSxDQUFDO1lBQzNCLE1BQU1DLFFBQVEsR0FBR0wsUUFBUSxFQUFFSSxJQUFJO1lBQy9CVCxPQUFPLENBQUNVLFFBQVEsQ0FBQztTQUNwQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDO1NBQ3JCO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0MsS0FBRzs7WUFBQyxhQUVEOzBCQUFBLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUViLFVBQVU7MEJBQUUsT0FBSzs7Ozs7eUJBQVM7WUFDMUNGLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUNaLDhEQUFDSixLQUFHOztzQ0FDQSw4REFBQ0ssSUFBRTtzQ0FBRUQsSUFBSSxDQUFDRSxLQUFLOzs7OztxQ0FBTTtzQ0FDckIsOERBQUNDLEdBQUM7c0NBQUVILElBQUksQ0FBQ0ksSUFBSTs7Ozs7cUNBQUs7O21CQUZaSixJQUFJLENBQUNLLEVBQUU7Ozs7NkJBR1g7WUFDVCxDQUFDOzs7Ozs7aUJBQ0EsQ0FDVDtDQUNKLEVBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcclxuXHJcbnR5cGUgVGVzdCA9IHtcclxuICAgIGlkOiBzdHJpbmdcclxuICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIGJvZHk6IFN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gICAgY29uc3QgW3Rlc3RzLCBzZXRUZXN0XSA9IHVzZVN0YXRlPFRlc3RbXT4oW10pXHJcblxyXG4gICAgY29uc3QgZ2V0QVBJRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcclxuXHJcbiAgICAgICAgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGluc3RhbmNlLmdldCgnL2FwaS8nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdGVzdGRhdGEgPSByZXNwb25zZT8uZGF0YSBhcyBUZXN0W11cclxuICAgICAgICAgICAgc2V0VGVzdCh0ZXN0ZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIGhlbGxvIHdvcmxkXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QVBJRGF0YX0+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Rlc3RzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KSBhcyBGQyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ0ZXN0cyIsInNldFRlc3QiLCJnZXRBUElEYXRhIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInRlc3RkYXRhIiwiZXJyb3IiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImgxIiwidGl0bGUiLCJwIiwiYm9keSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();