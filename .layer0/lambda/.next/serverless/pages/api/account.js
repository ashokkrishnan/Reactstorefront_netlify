module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Cbd9");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/0p4":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "09eZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VEtt");
/* harmony import */ var react_storefront_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  res.json(await Object(react_storefront_connector__WEBPACK_IMPORTED_MODULE_0__["account"])(req, res));
});

/***/ }),

/***/ "7WL4":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "Cbd9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fkL1");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Skye");
var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("Skye", 1);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CpcB");
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__);

        
      const { processEnv } = __webpack_require__("fXeI")
      processEnv([])
    
        
        const { setConfig } = __webpack_require__("mOvS")
      
        
        const runtimeConfig = {"publicRuntimeConfig":{},"serverRuntimeConfig":{"reactStorefront":{"connector":"react-storefront/mock-connector"}}}
        setConfig(runtimeConfig)
      
        
        

        

        const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)
          ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites
          : []

        if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)) {
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.beforeFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.afterFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.fallback)
        }

        const apiHandler = Object(next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__["getApiHandler"])({
          pageModule: __webpack_require__("09eZ"),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/account",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"cd672e897f89f0ce179ead3634a2286b",previewModeSigningKey:"b4eab7c1d7bb25cf2d49ccb7de97c0317ecbaf1928a480b2da3b40076204b759",previewModeEncryptionKey:"8f4d41607131c770e3bbd293d08208cd09c499f8beebd48b8838fc3e1208c0cf"}
        })
        /* harmony default export */ __webpack_exports__["default"] = (apiHandler);
      

/***/ }),

/***/ "FMKJ":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "KEll":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "NkYg":
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "PJv+":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "PJv+";

/***/ }),

/***/ "Skye":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":3,\"pages404\":true,\"basePath\":\"\",\"redirects\":[{\"source\":\"/:path+/\",\"destination\":\"/:path+\",\"internal\":true,\"statusCode\":308,\"regex\":\"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$\"}],\"headers\":[],\"dynamicRoutes\":[{\"page\":\"/api/p/[productId]\",\"regex\":\"^/api/p/([^/]+?)(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/api/p/(?<productId>[^/]+?)(?:/)?$\"},{\"page\":\"/api/p/[productId]/suggestions\",\"regex\":\"^/api/p/([^/]+?)/suggestions(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/api/p/(?<productId>[^/]+?)/suggestions(?:/)?$\"},{\"page\":\"/api/s/[...categorySlug]\",\"regex\":\"^/api/s/(.+?)(?:/)?$\",\"routeKeys\":{\"categorySlug\":\"categorySlug\"},\"namedRegex\":\"^/api/s/(?<categorySlug>.+?)(?:/)?$\"},{\"page\":\"/p/[productId]\",\"regex\":\"^/p/([^/]+?)(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/p/(?<productId>[^/]+?)(?:/)?$\"},{\"page\":\"/s/[...categorySlug]\",\"regex\":\"^/s/(.+?)(?:/)?$\",\"routeKeys\":{\"categorySlug\":\"categorySlug\"},\"namedRegex\":\"^/s/(?<categorySlug>.+?)(?:/)?$\"}],\"dataRoutes\":[],\"rewrites\":[]}");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "msIP":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tlh6":
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ })

/******/ , ...require("../../webpack-runtime-commons.js").modules })