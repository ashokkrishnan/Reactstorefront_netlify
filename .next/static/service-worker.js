/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
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
/******/
/******/ 		        var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 		        var cleanup = hasRefresh
/******/ 		          ? self.$RefreshInterceptModuleExecution$(moduleId)
/******/ 		          : function() {};
/******/ 		        try {
/******/ 		        
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        } finally {
/******/ 		          cleanup();
/******/ 		        }
/******/ 		        
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
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sw/service-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@layer0/core/constants.js":
/*!************************************************!*\
  !*** ./node_modules/@layer0/core/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Layer0 configuration file name.
 */
exports.LAYER0_CONFIG_FILE = 'layer0.config.js';
/**
 * Indicate asset files that need to be uploaded under a different
 * bucket key.
 * It contains values like
 * {
 *   '/posts' => '/posts/index.html'
 * }
 */
exports.LAYER0_ASSET_ALIASES_FILE = 'asset-aliases.json';
/**
 * Environment variables used by Layer0.
 */
exports.LAYER0_ENV_VARIABLES = {
    /**
     * Layer0 configuration environment variable key.
     */
    config: 'LAYER0_CONFIG',
    /**
     * Indicates whether code is running locally or in the cloud.
     * @private
     */
    deploymentType: 'LAYER0_DEPLOYMENT_TYPE',
    /**
     * Allows Layer0 development team to easily override Layer0 version
     * during development process.
     * @private
     */
    versionOverride: 'LAYER0_VERSION_OVERRIDE',
};
/**
 * Indicates that code is running in AWS.
 * @private
 */
exports.LAYER0_DEPLOYMENT_TYPE_AWS = 'AWS';
/**
 * Prefix of all Layer0 headers.
 */
exports.LAYER0_HEADERS_PREFIX = 'x-0-';
/**
 * Maximum number of user headers allowed by Layer0 platform.
 *
 * We limit the request and response headers allowed to 70. This is due to a limitation that edge has
 * which at the moment supports up to 96 headers. Edge provider itself needs to use some of those headers
 * with the remainder used by our edge code.
 *
 * NOTE: This constant must be equal ot the constant of the same name defined in Layer0 buffer proxy.
 * NOTE: If this constant is updated then the constant of the same name has to be updated in @layer0/build-lambda module.
 */
exports.LAYER0_MAX_USER_HEADERS_ALLOWED = 70;
/**
 * Status code returned when there are too many request or response headers.
 *
 * Must be equal to HeaderOverflowError status code as defined in build lambda and Layer0 buffer proxy.
 */
exports.LAYER0_TOO_MANY_HEADERS_STATUS_CODE = 542;
/**
 * The status code returned when the layer0_prefetch query param is present and a response could not be found in the cache.
 */
exports.LAYER0_UNCACHED_PREFETCH_STATUS = 412;
/**
 * CDN-as-code configuration actions
 */
exports.ACTIONS = {
    setHeader: 'set-header',
    updateHeader: 'update-header',
    removeHeader: 'remove-header',
    syntheticRes: 'synthetic-response',
    updatePath: 'update-path',
    proxy: 'proxy',
    addCookie: 'add-cookie',
    updateCookie: 'update-cookie',
    removeCookie: 'remove-cookie',
};
/**
 * The backend for cloud functions
 */
exports.BACKENDS = {
    js: '__js__',
    static: '__static__',
    permanentStatic: '__permanent_static__',
    imageOptimizer: '__image_optimizer__',
};
/**
 * The hostname used for the internal service running the user's application.
 */
exports.JS_BACKEND_HOSTNAME = '127.0.0.1';
exports.HTTP_METHODS = {
    head: 'head',
    get: 'get',
    post: 'post',
    delete: 'delete',
    put: 'put',
    patch: 'patch',
    options: 'options',
};
/**
 * Common HTTP headers.
 */
exports.HTTP_HEADERS = {
    authorization: 'authorization',
    acceptEncoding: 'accept-encoding',
    cacheControl: 'cache-control',
    contentEncoding: 'content-encoding',
    contentLength: 'content-length',
    contentType: 'content-type',
    cookie: 'cookie',
    host: 'host',
    location: 'location',
    serverTiming: 'server-timing',
    setCookie: 'set-cookie',
    userAgent: 'user-agent',
    vary: 'vary',
    xForwardedFor: 'x-forwarded-for',
    xRequestId: 'x-request-id',
    xSwCacheControl: 'x-sw-cache-control',
    x0Browser: 'x-0-browser',
    x0CacheControl: 'x-0-cache-control',
    x0CachingStatus: 'x-0-caching-status',
    x0ClientIp: 'x-0-client-ip',
    x0Components: 'x-0-components',
    x0Destination: 'x-0-destination',
    x0Device: 'x-0-device',
    x0DeviceIsBot: 'x-0-device-is-bot',
    x0GeoCity: 'x-0-geo-city',
    x0GeoCountryCode: 'x-0-geo-country-code',
    x0GeoLatitude: 'x-0-geo-latitude',
    x0GeoLongitude: 'x-0-geo-longitude',
    x0GeoPostalCode: 'x-0-geo-postal-code',
    x0MatchedRoutes: 'x-0-matched-routes',
    x0Protocol: 'x-0-protocol',
    x0Route: 'x-0-route',
    x0Status: 'x-0-status',
    x0SurrogateKey: 'x-0-surrogate-key',
    x0T: 'x-0-t',
    x0UserT: 'x-0-user-t',
    x0Vendor: 'x-0-vendor',
    x0Version: 'x-0-version',
};
/**
 * Values for x-0-caching-status
 */
exports.CACHING_STATUS = {
    ok: 'ok',
    private: 'private',
    method: 'method',
    bodyTooBig: 'body-too-big',
    code: 'code',
    setCookie: 'set-cookie',
    noMaxAge: 'no-max-age',
};
exports.CACHEABLE_METHODS = new Set(['get', 'head']);
/**
 * When present, this query parameter will cause Layer0 to return a 412 status
 * if a response could not be found in the cache.
 */
exports.THROTTLED_QUERY_PARAM = 'layer0_prefetch';
/**
 * Same value as above but DEPRECATED.
 */
exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM;
/**
 Labels the request so that devtools will display as prefetched
 */
exports.DEVTOOLS_PREFETCH_QUERY_PARAM = 'layer0_dt_pf';
/**
 * The name of the query parameter used to detect HEAD requests.
 */
exports.HEAD_QUERY_PARAM = 'layer0_head';
/**
 * The name of the query parameter used for the body of POST requests, which is used for the cache key
 */
exports.POST_BODY_QUERY_PARAM = 'pref_layer0_body';
/**
 * The name of the query parameter used for the method of requests, which is used for the cache key
 */
exports.METHOD_QUERY_PARAM = 'pref_layer0_method';
/**
 * Route Group name, which is used in router for fallback routes
 */
exports.ROUTES_FALLBACK = 'fallback';
/**
 * Route Group name, which is used in router for error page routes
 */
exports.ROUTES_CATCH_GROUP = 'catch';
/**
 * The path for the built-in image optimizer.
 */
exports.LAYER0_IMAGE_OPTIMIZER_PATH = '/__layer0_image_optimizer';


/***/ }),

/***/ "./node_modules/@layer0/core/node_modules/cookie/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@layer0/core/node_modules/cookie/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/@layer0/core/router/CustomCacheKey.js":
/*!************************************************************!*\
  !*** ./node_modules/@layer0/core/router/CustomCacheKey.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Groups_1 = __importDefault(__webpack_require__(/*! ./Groups */ "./node_modules/@layer0/core/router/Groups.js"));
const cookie_1 = __webpack_require__(/*! cookie */ "./node_modules/@layer0/core/node_modules/cookie/index.js");
exports.CUSTOM_CACHE_KEY_ACTIONS = {
    blacklistAll: 'blacklist-all-query-parameters',
    blacklistSome: 'blacklist-some-query-parameters',
    whitelistSome: 'whitelist-some-query-parameters',
    addValue: 'add-value',
    removeMethod: 'remove-method',
    removeBody: 'remove-body',
};
/**
 * Allows you to split or normalize the cache space for a given route. Common use cases include:
 *
 * - serving multiple variants of the same URL based on a currency and/or language cookie.
 * - caching different responses based on device type
 * - ignoring all but a specific set of query parameters when looking up a response from the cache.
 *
 * **Example**
 *
 * ```js
 *  import { Router, CustomCacheKey } from '@layer0/core/router'
 *
 *  new Router()
 *    .match('/some-path', ({ cache }) => {
 *      cache({
 *        key: new CustomCacheKey()
 *          .excludeAllQueryParametersExcept('color', 'size')
 *          .addCookie('currency')
 *          .addCookie('location', cookie => {
 *            cookie.group('na').byPattern('us|ca')
 *            cookie.group('eur').byPattern('de|fr|ee')
 *          }),
 *        edge: {
 *          maxAgeSeconds: 60 * 60
 *        }
 *      })
 *    })
 * ```
 */
class CustomCacheKey {
    constructor() {
        this.config = [];
        this.actions = [];
    }
    /**
     * Creates a copy of the cache key.
     */
    clone() {
        const newKey = new CustomCacheKey();
        newKey.actions = this.actions;
        newKey.config = this.config;
        return newKey;
    }
    /**
     * Excludes the entire query string from the cache key.
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    excludeAllQueryParameters() {
        this.config.push({ action: exports.CUSTOM_CACHE_KEY_ACTIONS.blacklistAll });
        this.actions.push((key, srcRequest) => {
            key.query = {};
        });
        return this;
    }
    /**
     * Excludes the provided query parameters from the cache key.  All other parameters
     * will still be part of the cache key. We also refer to this as "blacklisting" query parameters.
     * @param names The names of the query parameters to blacklist
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    excludeQueryParameters(...names) {
        this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.blacklistSome,
            names,
        });
        this.actions.push((key, srcRequest) => {
            for (let name of names) {
                delete key.query[name];
            }
        });
        return this;
    }
    /**
     * Excludes all query parameters except those provided from the cache key.  We also refer to
     * this as "whitelisting" query parameters.  We recommend using this method over `excludeQueryParameters`
     * as it's difficult to know all of the query parameters your application might receive and unexpected
     * query parameters can lead to significantly lower cache hit rates.
     * @param names The names of the query parameters to whitelist
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    excludeAllQueryParametersExcept(...names) {
        this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.whitelistSome,
            names,
        });
        this.actions.push((key, srcRequest) => {
            const toKeep = new Set(names);
            for (let name in key.query) {
                if (!toKeep.has(name)) {
                    delete key.query[name];
                }
            }
        });
        return this;
    }
    /**
     * Adds a request header to the cache key.
     * This will have no effect on service worker cache.
     * @param name The name of the request header
     * @param createGroups A function that accepts a `Groups` instance and calls `groups.group(name)` to group multiple values into a single cache key component
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addHeader(name, createGroups) {
        this.actions.push((key, srcRequest) => {
            let values = srcRequest.headers[name];
            if (!Array.isArray(values)) {
                values = [values];
            }
            if (createGroups) {
                key.headers[name] = this.createGroupedValue(createGroups, values);
            }
            else {
                key.headers[name] = values;
            }
        });
        return this.addValue(`\${req:${name}}`, createGroups);
    }
    /**
     * Removes the HTTP method from the cache key.
     * @return A self-reference, suitable for chaining.
     */
    removeMethod() {
        this.actions.push((key, srcRequest) => {
            key.method = undefined;
        });
        this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.removeMethod,
        });
        return this;
    }
    /**
     * Removes the HTTP body from the cache key.
     * @return A self-reference, suitable for chaining.
     */
    removeBody() {
        this.actions.push((key, srcRequest) => {
            key.body = undefined;
        });
        this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.removeBody,
        });
        return this;
    }
    /**
     * Creates a key value for a header or cookie based on the specified group creator
     * @param createGroups the GroupCreator
     * @param srcValues The values of the header or cookie in the request
     */
    createGroupedValue(createGroups, srcValues) {
        const groups = new Groups_1.default();
        const result = [];
        createGroups(groups);
        const matchingGroup = this.findMatchingGroup(groups, srcValues);
        if (matchingGroup) {
            result.push(matchingGroup);
        }
        else {
            // if the value doesn't match any group, use the value itself
            result.push(...srcValues);
        }
        return result;
    }
    findMatchingGroup(groups, srcValues) {
        var _a;
        for (let group of groups.groups) {
            for (let value of srcValues) {
                /* istanbul ignore next */
                if ((_a = group.pattern) === null || _a === void 0 ? void 0 : _a.test(value)) {
                    return group.name;
                }
            }
        }
    }
    /**
     * Specifies that requests should be cached on a per-device basis.
     * This will have no effect on service worker cache.
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addDevice() {
        return this.addHeader('x-0-device');
    }
    /**
     * Specifies that requests should be cached on a per-vendor basis.
     * This will have no effect on service worker cache.
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addVendor() {
        return this.addHeader('x-0-vendor');
    }
    /**
     * Specifies that requests should be cached differently for bots.
     * This will have no effect on service worker cache.
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addIsBot() {
        return this.addHeader('x-0-device-is-bot');
    }
    /**
     * Specifies that requests should be cached on a per-browser basis.
     * This will have no effect on service worker cache.
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addBrowser() {
        return this.addHeader('x-0-browser');
    }
    /**
     * Adds a cookie to the cache key.
     * This will have no effect on service worker cache.
     * @param name The name of the cookie
     * @param createGroups An function that accepts a `Groups` instance and calls `groups.group(name)` to group multiple values into a single cache key component
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addCookie(name, createGroups) {
        this.actions.push((key, srcRequest) => {
            let cookieHeader = srcRequest.headers.cookie || '';
            if (Array.isArray(cookieHeader)) {
                // Based on https://tools.ietf.org/html/rfc6265#section-5.4 we should only get a single cookie header
                // If we get more than one, we, just join them into a single parseable cookie value in case
                // the origin decides to read them all
                cookieHeader = cookieHeader.join(';');
            }
            const cookie = cookie_1.parse(cookieHeader);
            const value = cookie[name];
            if (createGroups) {
                key.cookies[name] = this.createGroupedValue(createGroups, [value]);
            }
            else {
                key.cookies[name] = value;
            }
        });
        return this.addValue(`\${req:cookie:${name}}`, createGroups);
    }
    /**
     * @private
     * @return {CustomCacheKey} A self-reference, suitable for chaining.
     */
    addValue(value, createGroups) {
        const action = {
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.addValue,
            value,
        };
        if (createGroups != null) {
            const groups = new Groups_1.default();
            createGroups(groups);
            action.groups = groups.toJSON();
        }
        this.config.push(action);
        return this;
    }
    getActions() {
        return this.actions;
    }
    toJSON() {
        return this.config;
    }
}
exports.default = CustomCacheKey;


/***/ }),

/***/ "./node_modules/@layer0/core/router/GroupConfig.js":
/*!*********************************************************!*\
  !*** ./node_modules/@layer0/core/router/GroupConfig.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GroupConfig {
    constructor(name) {
        this.name = name;
    }
    byPattern(pattern) {
        this.pattern = pattern;
    }
    toJSON() {
        if (!this.pattern) {
            throw new Error('byPattern is required for group ' + this.name);
        }
        return {
            groupedValue: this.name,
            matchRegex: this.pattern.source,
        };
    }
}
exports.default = GroupConfig;


/***/ }),

/***/ "./node_modules/@layer0/core/router/Groups.js":
/*!****************************************************!*\
  !*** ./node_modules/@layer0/core/router/Groups.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GroupConfig_1 = __importDefault(__webpack_require__(/*! ./GroupConfig */ "./node_modules/@layer0/core/router/GroupConfig.js"));
class Groups {
    constructor() {
        this.groups = [];
        this.name = null;
    }
    group(name) {
        const group = new GroupConfig_1.default(name);
        this.groups.push(group);
        return group;
    }
    toJSON() {
        return this.groups.map(p => p.toJSON());
    }
}
exports.default = Groups;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@layer0/prefetch/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The name of the prefetch cache.
 *
 * Defaults to `prefetch`.
 */
exports.CACHE_NAME = process.env.LAYER0_PREFETCH_CACHE_NAME || 'prefetch';
/**
 * The header that lists the urls that were fetched from backends during server side rendering
 */
exports.BACKEND_REQUESTS_RESPONSE_HEADER_NAME = 'x-0-upstream-requests';
/**
 * The value of the prefetch header. Defaults to `1`.
 */
exports.PREFETCH_HEADER_VALUE = process.env.LAYER0_PREFETCH_HEADER_VALUE || '1';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/ChangeMethodPlugin.js":
/*!****************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/ChangeMethodPlugin.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! @layer0/core/constants */ "./node_modules/@layer0/core/constants.js");
/**
 * Workbox only allows GET requests to be cached out-of-the-box, so this plugin
 * allows for changing the method of a request so that it can be cached.
 */
class ChangeMethodPlugin {
    constructor(urls) {
        this.urls = urls;
    }
    urlMatches(url) {
        return this.urls.some(testUrl => testUrl.test(url));
    }
    /**
     * Workbox requires cache keys to be GET method, so this forces the method when it is determined
     * that the cache key will be used.
     * If the request has a body, the body will be added to the URL for the cache key
     * using the POST_BODY_QUERY_PARAM.
     */
    async cacheKeyWillBeUsed({ request }) {
        const url = new URL(request.url);
        if (this.urlMatches(url.pathname)) {
            let body = await request.clone().text();
            const bodyParam = url.searchParams.get(constants_1.POST_BODY_QUERY_PARAM);
            if (!bodyParam && body) {
                url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, encodeURIComponent(body));
            }
        }
        return url.toString();
    }
    /**
     *
     */
    async requestWillFetch({ request }) {
        const url = new URL(request.url);
        if (this.urlMatches(url.pathname) && request.method.toUpperCase() !== 'GET') {
            // if the request is not a GET, then it's ok to modify the request and bump
            // the priority since this means it is the real (non-prefetch) request (a
            // prefetch request will not come in as anything but a GET)
            const headers = new Headers(request.headers);
            let body = await request.clone().text();
            url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, body);
            return new Request(url.toString(), {
                method: 'get',
                headers,
                redirect: request.redirect,
            });
        }
        return request;
    }
}
exports.default = ChangeMethodPlugin;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/CustomCacheKeyPlugin.js":
/*!******************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/CustomCacheKeyPlugin.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CustomCacheKey_1 = __webpack_require__(/*! @layer0/core/router/CustomCacheKey */ "./node_modules/@layer0/core/router/CustomCacheKey.js");
const constants_1 = __webpack_require__(/*! @layer0/core/constants */ "./node_modules/@layer0/core/constants.js");
class CustomCacheKeyPlugin {
    constructor(urls, config) {
        this.route = urls;
        this.config = config;
    }
    urlMatches(url) {
        return this.route.test(url);
    }
    async cacheKeyWillBeUsed({ request }) {
        const url = new URL(request.url);
        if (this.urlMatches(url.pathname)) {
            const url = new URL(request.url);
            this.config.forEach(conf => this.handleKeyConfig(url, conf));
            return url.toString();
        }
        return request;
    }
    handleKeyConfig(url, config) {
        const deleteKeys = [];
        switch (config.action) {
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.blacklistAll:
                url.searchParams.forEach((value, key) => {
                    deleteKeys.push(key);
                });
                break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.blacklistSome:
                url.searchParams.forEach((value, key) => {
                    if (config.names && config.names.includes(key)) {
                        deleteKeys.push(key);
                    }
                });
                break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.whitelistSome:
                url.searchParams.forEach((value, key) => {
                    if (config.names && !config.names.includes(key)) {
                        deleteKeys.push(key);
                    }
                });
                break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.removeBody:
                url.searchParams.delete(constants_1.POST_BODY_QUERY_PARAM);
                break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.removeMethod:
                url.searchParams.delete(constants_1.METHOD_QUERY_PARAM);
                break;
        }
        deleteKeys.forEach(key => url.searchParams.delete(key));
    }
}
exports.default = CustomCacheKeyPlugin;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/DevtoolsPlugin.js":
/*!************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/DevtoolsPlugin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PrefetchPlugin_1 = __webpack_require__(/*! ./PrefetchPlugin */ "./node_modules/@layer0/prefetch/sw/PrefetchPlugin.js");
/**
 * Time after which we clear a given request metadata from memory.
 * This must be above usual http timeouts to be sure the request is completed.
 */
const CURRENT_REQUEST_MAP_CLEANUP_DELAY = 120000;
class DevtoolsPlugin {
    constructor({ onResponse, routeConfig, isEnabledFn, }) {
        this.currentRequests = {};
        this.onResponse = onResponse;
        this.routeConfig = routeConfig;
        this.isEnabledFn = isEnabledFn;
    }
    /**
     * Stores information about a request to be used by subsequent plugin steps
     *
     * IMPORTANT We do **not** use a custom header to store the metadata: a custom header leads
     * to CORS pre-flight requests when using cache on a different origin, and those would likely
     * reject our header.
     * (more info https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests)
     *
     * Unfortunately, there does not seem to be another way to (or if there is, feel free to fix this):
     * - store information on the request instance that we be passed along to subsequent steps
     * - identify a request uniquely with some sort of internal id
     *
     * For now, the solution is to use the normalized cache key to identify each request "uniquely",
     * although that would lead to inconsistent results if a same request happens multiple time concurrently.
     * It also adds overhead, especially for POST graphql query which serializes the body.
     *
     * After CURRENT_REQUEST_MAP_CLEANUP_DELAY, the metadata is cleared to avoid a memory leak.
     * We don't clear explicitly from cachedResponseWillBeUsed/fetchDidSucceed, as it very complex (impossible?) to do it right:
     * - we would need a counter on the current requests to be sure to not clear the metadata from concurrent equivalent request
     * - incrementing/decrementing because we don't know in advance through which
     *   plugin functions the request will go through, which is the first and which
     *   is the last. We could make assumptions but that would lead to fragility.
     */
    async saveRequestMetadata(request, metadata) {
        var _a, _b;
        const normalizedUrl = await PrefetchPlugin_1.normalizeRequestUrlForCache(request);
        if ((_a = this.currentRequests[normalizedUrl]) === null || _a === void 0 ? void 0 : _a.cleanupTimeout) {
            clearTimeout(this.currentRequests[normalizedUrl].cleanupTimeout);
        }
        this.currentRequests[normalizedUrl] = {
            metadata: {
                ...(_b = this.currentRequests[normalizedUrl]) === null || _b === void 0 ? void 0 : _b.metadata,
                ...metadata,
            },
            cleanupTimeout: setTimeout(() => {
                delete this.currentRequests[normalizedUrl];
            }, CURRENT_REQUEST_MAP_CLEANUP_DELAY),
        };
    }
    async getRequestMetadata(request) {
        var _a;
        const normalizedUrl = await PrefetchPlugin_1.normalizeRequestUrlForCache(request);
        return ((_a = this.currentRequests[normalizedUrl]) === null || _a === void 0 ? void 0 : _a.metadata) || {};
    }
    /**
     * Notes:
     * - It seems that we cannot add arbitrary attributes to the request object
     *   so the best we can do is to store request info in a memory hash-map
     */
    async requestWillFetch({ request }) {
        if (!this.isEnabledFn()) {
            return request;
        }
        await this.saveRequestMetadata(request, { requestStart: Date.now() });
        return request;
    }
    /**
     * Called when an object is read from or written to the cache.
     *
     * Notes:
     * - It seems that we cannot add arbitrary attributes to the request object
     *   so the best we can do is to store request info in a memory hash-map
     *
     * - In case of cache 'read', we keep track of prefetch request so that we can identify them later
     *   in `cachedResponseWillBeUsed`, which is called for both hit or miss.
     *   Why here and not on response? Because in `cachedResponseWillBeUsed` we only get the cache-normalized request
     *   where layer0_dt_pf query string got removed
     */
    async cacheKeyWillBeUsed({ request, mode }) {
        if (!this.isEnabledFn()) {
            return request;
        }
        if (mode === 'read') {
            await this.saveRequestMetadata(request, {
                isPrefetch: PrefetchPlugin_1.isPrefetchRequest(request),
            });
        }
        return request;
    }
    async cachedResponseWillBeUsed({ request, cachedResponse: response, }) {
        if (!this.isEnabledFn()) {
            return response;
        }
        // In case of cache miss
        if (!response)
            return response;
        const { isPrefetch } = await this.getRequestMetadata(request);
        // TTFB is hard-coded to 0 for cached response
        this.onResponse({
            browserCache: 'hit',
            ttfb: 0,
            prefetch: isPrefetch,
            request,
            response,
            routeConfig: this.routeConfig,
        });
        return response;
    }
    async fetchDidSucceed({ request, response }) {
        if (!this.isEnabledFn()) {
            return response;
        }
        const { requestStart } = await this.getRequestMetadata(request);
        const ttfb = requestStart && Date.now() - requestStart;
        this.onResponse({
            browserCache: 'miss',
            ttfb,
            prefetch: PrefetchPlugin_1.isPrefetchRequest(request),
            request,
            response,
            routeConfig: this.routeConfig,
        });
        return response;
    }
}
exports.default = DevtoolsPlugin;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/PrefetchPlugin.js":
/*!************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/PrefetchPlugin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! @layer0/core/constants */ "./node_modules/@layer0/core/constants.js");
const constants_2 = __webpack_require__(/*! ../constants */ "./node_modules/@layer0/prefetch/constants.js");
const log_1 = __importDefault(__webpack_require__(/*! ./log */ "./node_modules/@layer0/prefetch/sw/log.js"));
const prefetch_1 = __webpack_require__(/*! ./prefetch */ "./node_modules/@layer0/prefetch/sw/prefetch.js");
const origin = new URL(self.origin);
function isPrefetchRequest(request) {
    return new URL(request.url).searchParams.has(constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM);
}
exports.isPrefetchRequest = isPrefetchRequest;
async function normalizeRequestUrlForCache(request, { cacheHost } = {}) {
    request = request.clone();
    const url = new URL(request.url);
    // When reading/writing cacheHost URLs convert them back to origin
    if (cacheHost && url.hostname == cacheHost.hostname) {
        url.host = origin.host;
        url.protocol = origin.protocol;
    }
    const method = request.method.toLowerCase();
    // For non-GET requests, we need to add the request body to the cache key by appending in to the URL query string
    if (method !== 'get') {
        let body = await request.text();
        const bodyParam = url.searchParams.get(constants_1.POST_BODY_QUERY_PARAM);
        if (!bodyParam && body) {
            url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, encodeURIComponent(body));
        }
        // add method to the cache key so that we can cache requests to the same path with different methods
        url.searchParams.set(constants_1.METHOD_QUERY_PARAM, request.method.toLowerCase());
    }
    // remove layer0_prefetch and layer0_dt_pf query params so that prefetches and real requests
    // return from the same cache space
    url.searchParams.delete(constants_1.THROTTLED_QUERY_PARAM);
    url.searchParams.delete(constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM);
    // Decode query parameters both when writing to cache and when reading
    // from cache. This ensures the cache is used no matter whether the URL
    // is encoded in either step.
    decodeQueryParams(url);
    return url.toString();
}
exports.normalizeRequestUrlForCache = normalizeRequestUrlForCache;
class PrefetchPlugin {
    constructor({ incrementRead, incrementWrite, cacheHost, prefetchUpstreamRequests, }) {
        this.incrementRead = incrementRead;
        this.incrementWrite = incrementWrite;
        this.cacheHost = cacheHost;
        this.prefetchUpstreamRequests = prefetchUpstreamRequests;
    }
    async requestWillFetch({ request }) {
        // We need to send a clone of the request so that we can read the request body and use
        // it in the cache key in the write phase of the cacheKeyWillBeUsed method.
        return request.clone();
    }
    /**
     * Called when an object is read from or written to the cache.  Here we
     * compute cache stats and ensure that ?layer0_prefetch is removed from the cache key so
     * that future requests for prefetched resources will match.
     */
    async cacheKeyWillBeUsed({ request, mode }) {
        if (!isPrefetchRequest(request)) {
            if (mode === 'read') {
                this.incrementRead();
            }
            else {
                this.incrementWrite();
            }
        }
        return normalizeRequestUrlForCache(request, { cacheHost: this.cacheHost });
    }
    /**
     * Called when a response is about to be written to the cache.
     */
    async cacheWillUpdate({ response, request }) {
        // If prefetchUpstreamRequests is set, we only prefetch the html pages in SPA mode
        // (e.g Angular) to get the upstream requests response header.  We don't actually want
        // to serve the html from the cache, so this returns null:
        if (this.prefetchUpstreamRequests) {
            const backendRequests = response.headers.get(constants_2.BACKEND_REQUESTS_RESPONSE_HEADER_NAME);
            if (backendRequests) {
                const urlsToPrefetch = backendRequests.split(';');
                urlsToPrefetch.forEach(url => {
                    if (url)
                        prefetch_1.prefetch(url);
                });
            }
            return null;
        }
        // Service workers do not handle redirects well. If a redirected response is put in the cache,
        // you'll see this error: "a ServiceWorker passed a redirected Response to FetchEvent.respondWith()
        // while RedirectMode is not ‘follow"
        // Returning null here prevents the response from being cached
        if (response.redirected) {
            log_1.default(`${response.url} was not added to the cache because it was a redirect.`);
            return null;
        }
        else {
            log_1.default(`${response.url} was added to the cache with key ${request.url}.`);
            return response;
        }
    }
}
exports.default = PrefetchPlugin;
/**
 * Mutates the searchParams object, ensuring that each value is decoded.
 * @param {URL} url The URL whose params should be decoded
 */
function decodeQueryParams(url) {
    const maybeDecode = (val) => {
        try {
            return decodeURIComponent(val);
        }
        catch (e) {
            // it will fail if the string has a % in it that isn't a URL-decoded entity,
            // so that means the string is already decoded so we can just return the value:
            return val;
        }
    };
    url.searchParams.forEach((param, key) => {
        url.searchParams.set(maybeDecode(key), maybeDecode(param));
    });
}


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/Prefetcher.js":
/*!********************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/Prefetcher.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workbox_routing_1 = __webpack_require__(/*! workbox-routing */ "./node_modules/workbox-routing/index.mjs");
const workbox_strategies_1 = __webpack_require__(/*! workbox-strategies */ "./node_modules/workbox-strategies/index.mjs");
const workbox_expiration_1 = __webpack_require__(/*! workbox-expiration */ "./node_modules/workbox-expiration/index.mjs");
const workbox_cacheable_response_1 = __webpack_require__(/*! workbox-cacheable-response */ "./node_modules/workbox-cacheable-response/index.mjs");
const constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@layer0/prefetch/constants.js");
const log_1 = __importDefault(__webpack_require__(/*! ./log */ "./node_modules/@layer0/prefetch/sw/log.js"));
const PrefetchPlugin_1 = __importDefault(__webpack_require__(/*! ./PrefetchPlugin */ "./node_modules/@layer0/prefetch/sw/PrefetchPlugin.js"));
const DevtoolsPlugin_1 = __importDefault(__webpack_require__(/*! ./DevtoolsPlugin */ "./node_modules/@layer0/prefetch/sw/DevtoolsPlugin.js"));
const messageBrowser_1 = __importDefault(__webpack_require__(/*! ./messageBrowser */ "./node_modules/@layer0/prefetch/sw/messageBrowser.js"));
const CustomCacheKeyPlugin_1 = __importDefault(__webpack_require__(/*! ./CustomCacheKeyPlugin */ "./node_modules/@layer0/prefetch/sw/CustomCacheKeyPlugin.js"));
const ChangeMethodPlugin_1 = __importDefault(__webpack_require__(/*! ./ChangeMethodPlugin */ "./node_modules/@layer0/prefetch/sw/ChangeMethodPlugin.js"));
class Stats {
    constructor() {
        this.hits = 0;
        this.misses = 0;
    }
}
exports.Stats = Stats;
const BUFFER_DELAY_MS = 10000;
/**
 * Handles prefetching and caching in the the service worker.  Responses
 * are cached based on the `browser.serviceWorkerSeconds` cache setting in your routes.
 *
 * **Example routes.js**
 *
 * ```js
 *  import { Router } from '@layer0/core/router'
 *
 *  module.exports = new Router()
 *    .match('/some/path', ({ cache }) => {
 *      cache({
 *        edge: {
 *          maxAgeSeconds: 60 * 60 * 24 // one day
 *        },
 *        browser: {
 *          serviceWorkerSeconds: 60 * 60 // one hour
 *        }
 *      })
 *    })
 * ```
 *
 * **Example Service Worker**
 *
 * ```js
 *  import { skipWaiting, clientsClaim } from 'workbox-core'
 *  import { Prefetcher } from '@layer0/prefetch/sw'
 *  import { precacheAndRoute } from 'workbox-precaching'
 *
 *  skipWaiting()
 *  clientsClaim()
 *  precacheAndRoute([{'revision':'369feb203105e26765203fe7327580e2','url':'_next/static/chunks/0.js'},{'revision':'5f16e1089707f330f720da7bc38c30fe','url':'_next/static/chunks/amp.js'},{'revision':'8f74124f6025d03764af6f5a6de5037b','url':'_next/static/chunks/pages/_error.js'},{'revision':'602d26a89ee14d0af8c72c73b3e73971','url':'_next/static/chunks/polyfills.js'},{'revision':'780ff9d5332e4e8d3fb79cb436af38b0','url':'_next/static/chunks/react-refresh.js'},{'revision':'337281007b0546c7adde6a192fae7bea','url':'_next/static/chunks/webpack.js'},{'revision':'5375642c734078229da6718c2dbd730e','url':'_next/static/development/_buildManifest.js'},{'revision':'abee47769bf307639ace4945f9cfd4ff','url':'_next/static/development/_ssgManifest.js'},{'revision':'5cb7edfceb233100075dc9a1e12e8da3','url':'_next/static/media/roboto-latin-100.a45108d3b34af91f9113d827a183296d.woff'},{'revision':'7370c3679472e9560965ff48a4399d0b','url':'_next/static/media/roboto-latin-100.c2aa4ab115bf9c6057cb59709d0e152b.woff2'},{'revision':'f9e8e590b4e0f1ff83469bb2a55b8488','url':'_next/static/media/roboto-latin-100italic.451d4e559d6f57cdf6a1c54a3e32e11d.woff'},{'revision':'f8b1df51ba843179fa1cc9b53d58127a','url':'_next/static/media/roboto-latin-100italic.7f839a8652da29745ce4260846c3f88e.woff2'},{'revision':'ef7c6637c68f269a882e73bcb57a7f6a','url':'_next/static/media/roboto-latin-300.37a7069dc30fc663c8781220e5669d25.woff2'},{'revision':'b00849e00f4c2331cddd8ffb44a6720b','url':'_next/static/media/roboto-latin-300.865f928cbabcc9f8f2b50fb47a20bc63.woff'},{'revision':'4df32891a5f2f98a363314f595482e08','url':'_next/static/media/roboto-latin-300italic.bd5b7a13f2c52b531a2a787bf6eb4a13.woff'},{'revision':'14286f3ba79c6627433572dfa925202e','url':'_next/static/media/roboto-latin-300italic.c64e7e354c88e613c77cab8ac2ebc3ae.woff2'},{'revision':'479970ffb74f2117317f9d24d9e317fe','url':'_next/static/media/roboto-latin-400.176f8f5bd5f02b3abfcf894955d7e919.woff2'},{'revision':'60fa3c0614b8fb2f394fa29944c21540','url':'_next/static/media/roboto-latin-400.49ae34d4cc6b98c00c69ab4c41de3e0c.woff'},{'revision':'fe65b8335ee19dd944289f9ed3178c78','url':'_next/static/media/roboto-latin-400italic.b1d9d9904bfca8802a631c45590b9efa.woff'},{'revision':'51521a2a8da71e50d871ac6fd2187e87','url':'_next/static/media/roboto-latin-400italic.d022bc70dc1bf7b3425da9cdaa9841b6.woff2'},{'revision':'87284894879f5b1c229cb49c8ff6decc','url':'_next/static/media/roboto-latin-500.cea99d3e3e13a3a599a015c29f1046d0.woff'},{'revision':'020c97dc8e0463259c2f9df929bb0c69','url':'_next/static/media/roboto-latin-500.f5b74d7ffcdf85b9dd60130fa0b2c087.woff2'},{'revision':'db4a2a231f52e497c0191e8966b0ee58','url':'_next/static/media/roboto-latin-500italic.0d8bb5b3ee5f5dac9e446d48480d28a9.woff2'},{'revision':'288ad9c6e8b43cf02443a1f499bdf67e','url':'_next/static/media/roboto-latin-500italic.18d00f739ff1e1c52db1a1c0d9e98129.woff'},{'revision':'adcde98f1d584de52060ad7b16373da3','url':'_next/static/media/roboto-latin-700.2267169ee7270a22a963b2b2bfb7ab0c.woff'},{'revision':'2735a3a69b509faf3577afd25bdf552e','url':'_next/static/media/roboto-latin-700.c18ee39fb002ad58b6dc595476f88fef.woff2'},{'revision':'da0e717829e033a69dec97f1e155ae42','url':'_next/static/media/roboto-latin-700italic.7d8125ff7f707231fd89d9d7109deadf.woff2'},{'revision':'81f57861ed4ac74741f5671e1dff2fd9','url':'_next/static/media/roboto-latin-700italic.9360531f9bb817f917f01a6d394515f3.woff'},{'revision':'9b3766ef4a402ad3fdeef7501a456512','url':'_next/static/media/roboto-latin-900.870c8c1486f76054301a22c35403eae1.woff2'},{'revision':'bb1e4dc6333675d11ada2e857e7f95d7','url':'_next/static/media/roboto-latin-900.bac8362e7a6ea60b6983ecf09a411a5e.woff'},{'revision':'28f9151055c950874d2c6803a39b425b','url':'_next/static/media/roboto-latin-900italic.c20d916c1a1b094c1cec7de61e470633.woff'},{'revision':'ebf6d1640ccddb99fb49f73c052c55a8','url':'_next/static/media/roboto-latin-900italic.cb5ad999740e9d8a8bd1b03b379293a9.woff2'},{'revision':'1f1e7a8fe5b8d533f3fb00dc76e75b87','url':'_next/static/webpack/0f78df29636d36efcba0.hot-update.json'}] || [])
 *
 *  new Prefetcher().route()
 * ```
 */
class Prefetcher {
    constructor(config = { plugins: [] }) {
        // For performance reasons, Devtools plugins are disabled until the first
        // 'layer0-devtools-syn' message is received (ie: a Devtools client is enabled).
        // But once enabled, they will remain active until the Service Worker is reinstalled
        this.devtoolsEnabled = false;
        /**
         * bufferedDevtoolMessages keeps track of the request received in the last BUFFER_DELAY_MS.
         */
        this.bufferedDevtoolMessages = [];
        this.config = config;
        let manifestURL = '__layer0__/cache-manifest.js';
        this.cacheOrigins = [self.origin];
        if (config.cacheHost) {
            this.cacheHost = new URL(`https://${config.cacheHost}`);
            this.cacheOrigins.push(this.cacheHost.origin);
            manifestURL = this.cacheHost.toString() + manifestURL;
        }
        importScripts(manifestURL);
        this.cacheableResponsePlugin = new workbox_cacheable_response_1.CacheableResponsePlugin({
            statuses: [200, 301, 302],
        });
        this.stats = new Stats();
        this.initStats();
        this.initDevtoolsHandshakeListener();
    }
    getRouteConfigsFromManifest() {
        // @ts-ignore
        const manifest = self.__LAYER0_CACHE_MANIFEST__;
        return manifest.map(({ criteriaPath, route, cacheOptions, method, returnsResponse }) => {
            var _a, _b, _c;
            const maxAgeSeconds = (_a = cacheOptions.browser) === null || _a === void 0 ? void 0 : _a.serviceWorkerSeconds;
            const edgeMaxAgeSeconds = (_b = cacheOptions.edge) === null || _b === void 0 ? void 0 : _b.maxAgeSeconds;
            return {
                criteriaPath,
                pattern: route,
                method,
                maxAgeSeconds,
                edgeMaxAgeSeconds,
                returnsResponse,
                isPartialPathRoute: true,
                key: cacheOptions.key,
                convertToGet: (_c = cacheOptions.browser) === null || _c === void 0 ? void 0 : _c.convertToGet,
                prefetchUpstreamRequests: cacheOptions.prefetchUpstreamRequests,
            };
        });
    }
    registerDevtoolsRoutes() {
        for (const routeConfig of this.getRouteConfigsFromManifest()) {
            // Add listener for all routes that are not cached in the browser as those already have a route handler
            if (!routeConfig.maxAgeSeconds && !routeConfig.returnsResponse) {
                this.createDevtoolsRoute(routeConfig);
            }
        }
        // Also add a fallback route in case the cache manifest does not specify any
        this.createDevtoolsRoute();
    }
    /**
     * Adds a fetch event listener that serves content from the browser cache when available.  When
     * a request is not in the cache, it will be fetched from the network and added to the
     * cache if the route has `browser.serviceWorkerSeconds` defined in its `cache` setting.
     */
    route() {
        for (const routeConfig of this.getRouteConfigsFromManifest()) {
            if (
            // Only listen for browser cached routes:
            (routeConfig.maxAgeSeconds && routeConfig.maxAgeSeconds > 0) ||
                // or for routes that return an x-0-upstream-requests header:
                routeConfig.prefetchUpstreamRequests) {
                this.createRoute(routeConfig);
            }
            else if (routeConfig.returnsResponse) {
                // register routes that return responses to force a network call and prevent
                // a later route from matching and caching non-cacheable routes:
                workbox_routing_1.registerRoute(this.shouldIntercept(new RegExp(routeConfig.pattern, 'i'), routeConfig.isPartialPathRoute), new workbox_strategies_1.NetworkOnly({
                    plugins: [this.createDevtoolsPlugin(routeConfig)],
                }));
            }
        }
        return this;
    }
    cache(pattern, maxAgeSeconds = 60 * 60 * 24) {
        this.createRoute({ pattern: pattern.source, maxAgeSeconds, isPartialPathRoute: false });
        return this;
    }
    /**
     * Starts listening for messages from the browser
     */
    initStats() {
        self.addEventListener('message', (e) => {
            if (e.data.action === 'get-stats') {
                messageBrowser_1.default({
                    type: 'stats',
                    stats: this.stats,
                });
            }
        });
    }
    /**
     * Here we implement a handshake protocol between the devtool window client and the service worker:
     * 1. Devtools sends the 'layer0-devtools-syn' event and starts listening for 'layer0-devtools-ack' event
     * 2. Service worker receives the 'layer0-devtools-syn' event and sends the 'layer0-devtools-ack' event
     *    along with the buffered messages that were received over the last BUFFER_DELAY_MS.
     *    This is because the window widget takes time to download, load and to start listening from
     *    Service worker message, while the latter is already receiving http requests.
     * 3. Devtools receives the 'layer0-devtools-ack' event, looks for its current page html request,
     *    which corresponds to that tab very first request, and loads requests past that one.
     * 4. Devtools starts listening for live 'layer0-devtools-request' events
     *
     * Notes:
     * - there is no 1-1 channel between window client and Service Worker, so all opened tab
     *   will see the 'layer0-devtools-ack' event. Only the ones in handshake phase will handle it.
     */
    initDevtoolsHandshakeListener() {
        self.addEventListener('message', async (e) => {
            if (e.data.action === 'layer0-devtools-install') {
                if (!this.devtoolsEnabled) {
                    this.registerDevtoolsRoutes();
                    this.devtoolsEnabled = true;
                    // Devtools plugin just got initialized so we missed
                    // a few queries. We send a message so that the browser
                    // refreshes its page.
                    this.sendToAllClients({
                        type: 'layer0-devtools-ack-installed',
                    });
                }
            }
            if (e.data.action === 'layer0-devtools-syn') {
                if (this.devtoolsEnabled) {
                    const ackMessage = {
                        type: 'layer0-devtools-ack',
                        bufferedDevtoolMessages: this.bufferedDevtoolMessages,
                    };
                    this.sendToAllClients(ackMessage);
                }
            }
            if (e.data.action === 'layer0-devtools-clear-cache') {
                caches.keys().then(cacheNames => cacheNames.forEach(name => caches.delete(name)));
            }
        });
    }
    /**
     * Send a postMessage event to all window client.
     * Notes:
     * - When used in multi-tabs, each Devtools will show data from all tabs.
     *   That's a bit buggy but it's the best we can do as it's very hard to establish 1-1 channels
     *   on ServiceWorker/Client interface, for example the message event from the window does not
     *   contain the clientId
     */
    async sendToAllClients(data) {
        messageBrowser_1.default(data, { broadcast: true });
    }
    /**
     * Adds a message to this.bufferedDevtoolMessages and manages the buffer so that
     * we don't keep messages more than BUFFER_DELAY_MS.
     *
     * In case of inactivity we clear the whole buffer after BUFFER_DELAY_MS, so technically
     * a message can stay up to 2 x BUFFER_DELAY_MS in the buffer (a bit less than BUFFER_DELAY_MS old
     * when the latest message arrives and cleared BUFFER_DELAY_MS later)
     * @param message
     */
    addDevtoolsRequestMessageToBuffer(message) {
        this.bufferedDevtoolMessages.push(message);
        this.trimDevtoolsRequestMessageBuffer();
        if (this.clearDevtoolsRequestMessageTimeout) {
            clearTimeout(this.clearDevtoolsRequestMessageTimeout);
        }
        // If no additional request for BUFFER_DELAY_MS, we clear the buffer after that
        this.clearDevtoolsRequestMessageTimeout = setTimeout(() => {
            this.bufferedDevtoolMessages = [];
        }, BUFFER_DELAY_MS);
    }
    /**
     * Remove message that are too old to stay in devtools message buffer
     */
    trimDevtoolsRequestMessageBuffer() {
        let sliceIndex = 0;
        const sliceMinimumTimestamp = Date.now() - BUFFER_DELAY_MS;
        while (this.bufferedDevtoolMessages[sliceIndex] &&
            this.bufferedDevtoolMessages[sliceIndex].timestamp < sliceMinimumTimestamp) {
            sliceIndex++;
        }
        this.bufferedDevtoolMessages = this.bufferedDevtoolMessages.slice(sliceIndex);
    }
    /**
     * If there's a cacheHost configured check whether the pattern to test
     * against is a partial pathname pattern. If so, check that the origin is
     * also correct: service worker's own origin or cacheHost origin
     * @param pattern A route pattern
     * @param isPartialPathRoute Set to true if the supplied pattern only matches the path, false if it matches the whole URL.
     * @param options.skipAssets Set to true to ignore request that are not 'document' or 'empty' (ie: audio, font, image, ...)
     * @return true if the request should be handled by the service worker.
     */
    shouldIntercept(pattern, isPartialPathRoute, { skipAssets = false } = {}) {
        return ({ url, request }) => {
            if (skipAssets && !['document', 'empty'].includes(request.destination))
                return false;
            if (isPartialPathRoute) {
                return this.cacheOrigins.includes(url.origin) && pattern.test(url.pathname);
            }
            else {
                return pattern.test(url.toString());
            }
        };
    }
    /**
     * Creates a DevtoolsPlugin object to be added to a caching strategy instance
     * @param routeConfig The route config for the given route
     * @private
     */
    createDevtoolsPlugin(routeConfig) {
        return new DevtoolsPlugin_1.default({
            onResponse: this.onResponse.bind(this),
            isEnabledFn: () => this.devtoolsEnabled,
            routeConfig,
        });
    }
    /**
     * Creates a Workbox route which only purpose is to forward requests/response
     * data to the Devtools
     * @param routeConfig The route pattern and caching options specified within the route definition
     *                    If undefined, it catches all GET queries except static assets
     */
    createDevtoolsRoute(routeConfig) {
        let method, routeMatcher;
        if (routeConfig) {
            const { pattern, isPartialPathRoute } = routeConfig;
            const patternRegexp = new RegExp(pattern, 'i');
            routeMatcher = this.shouldIntercept(patternRegexp, isPartialPathRoute, { skipAssets: true });
            method = (routeConfig.method || 'get').toUpperCase();
        }
        else {
            routeMatcher = this.shouldIntercept(/^.*$/, true, { skipAssets: true });
            method = 'GET';
        }
        workbox_routing_1.registerRoute(routeMatcher, new workbox_strategies_1.NetworkOnly({
            plugins: [this.createDevtoolsPlugin(routeConfig)],
        }), 
        // @ts-ignore
        method);
    }
    /**
     * Creates a workbox route.
     * @param routeConfig The route pattern and caching options specified within the route definition
     */
    createRoute(routeConfig) {
        const { pattern, method: optMethod, maxAgeSeconds, isPartialPathRoute, key, convertToGet, } = routeConfig;
        const method = (optMethod || 'get').toLowerCase();
        log_1.default(`[route] ${method} ${pattern}, maxAgeSeconds: ${maxAgeSeconds}`);
        const patternRegexp = new RegExp(pattern, 'i');
        // all routes must have a GET route registered, so Workbox can properly look
        // it up when running workbox-routing/Router#findMatchingRoute:
        if (method !== 'get') {
            this.createRoute({ ...routeConfig, method: 'get' });
        }
        const prefetchPlugin = new PrefetchPlugin_1.default({
            incrementRead: this.incrementRead.bind(this),
            incrementWrite: this.incrementWrite.bind(this),
            cacheHost: this.cacheHost,
            prefetchUpstreamRequests: routeConfig.prefetchUpstreamRequests,
        });
        const plugins = [
            this.cacheableResponsePlugin,
            new workbox_expiration_1.ExpirationPlugin({
                maxAgeSeconds,
            }),
            // DevtoolPlugin needs to be injected before PrefetchPlugin as this later
            // changes request url to normalise the cache key
            this.createDevtoolsPlugin(routeConfig),
            prefetchPlugin,
            ...(this.config.plugins || []),
        ];
        if (key) {
            plugins.push(new CustomCacheKeyPlugin_1.default(patternRegexp, key));
        }
        if (convertToGet) {
            // ChangeMethodPlugin must come before PrefetchPlugin so body is retained:
            plugins.splice(plugins.indexOf(prefetchPlugin), 0, new ChangeMethodPlugin_1.default([patternRegexp]));
        }
        workbox_routing_1.registerRoute(this.shouldIntercept(patternRegexp, isPartialPathRoute), new workbox_strategies_1.CacheFirst({
            cacheName: constants_1.CACHE_NAME,
            matchOptions: {
                ignoreVary: true,
            },
            plugins,
        }), 
        // @ts-ignore
        method.toUpperCase() // HTTPMethods map directly from @layer0/core lowercase => @workbox uppercase
        );
    }
    /**
     * A Read is considered a Hit until a Write happens meaning it was a miss
     * This is based on the fragile assumption that a cache read *always* triggers a write
     * in case of cache miss, which is not true if the backend does not respond for example.
     *
     * This could be fixed by checking the presence of `response` in `cachedResponseWillBeUsed``
     * but that leads to other issues as we cannot discard Prefetch requests at that
     * stage.
     * We could implement the same Hack-ish solution as in DevtoolsPlugin to work around that,
     * but those simple stats are probably going away anyway.
     */
    incrementRead() {
        this.stats.hits++;
    }
    incrementWrite() {
        this.stats.misses++;
        this.stats.hits--;
    }
    async onResponse({ request, response, ttfb, prefetch, browserCache, routeConfig, }) {
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        const devToolMessage = {
            type: 'layer0-devtools-request',
            timestamp: Date.now(),
            request: {
                method: request.method,
                url: request.url,
                prefetch,
            },
            response: {
                ttfb,
                status: response.status,
                headers,
            },
            browserCache,
            routeConfig,
        };
        this.sendToAllClients(devToolMessage);
        this.addDevtoolsRequestMessageToBuffer(devToolMessage);
    }
}
exports.default = Prefetcher;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prefetcher_1 = __webpack_require__(/*! ./Prefetcher */ "./node_modules/@layer0/prefetch/sw/Prefetcher.js");
exports.Prefetcher = Prefetcher_1.default;
var prefetch_1 = __webpack_require__(/*! ./prefetch */ "./node_modules/@layer0/prefetch/sw/prefetch.js");
exports.prefetch = prefetch_1.prefetch;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/log.js":
/*!*************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/log.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
function log(...message) {
    if (true) {
        console.log('%c@layer0/prefetch', 'background: #43a047; color: #ffffff; font-weight:bold; padding: 3px 5px; border-radius: 5px', ...message);
    }
}
exports.default = log;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/messageBrowser.js":
/*!************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/messageBrowser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sends a message to the last focused browser window.
 * @param message
 */
function messageBrowser(message, { broadcast = false } = {}) {
    // @ts-ignore
    return self.clients.matchAll({ type: 'window' }).then((clients) => {
        let targetClients = clients;
        if (!broadcast && clients.length) {
            // clients array is ordered by last focused
            targetClients = [clients[0]];
        }
        targetClients.forEach(client => client.postMessage(message));
    });
}
exports.default = messageBrowser;


/***/ }),

/***/ "./node_modules/@layer0/prefetch/sw/prefetch.js":
/*!******************************************************!*\
  !*** ./node_modules/@layer0/prefetch/sw/prefetch.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageBrowser_1 = __importDefault(__webpack_require__(/*! ./messageBrowser */ "./node_modules/@layer0/prefetch/sw/messageBrowser.js"));
/**
 * Prefetches an asset.
 * @param url The asset URL
 * @param as The value for the link element's `as` attribute.
 *  See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link.
 *  Use "fetch" for html pages as Safari doesn't support "document".
 */
function prefetch(url, as = 'fetch', options = { cors: 'anonymous' }) {
    return messageBrowser_1.default({ action: 'prefetch', url, as, options });
}
exports.prefetch = prefetch;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/workbox-cacheable-response/CacheableResponse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/CacheableResponse.js ***!
  \**********************************************************************/
/*! exports provided: CacheableResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return CacheableResponse; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * This class allows you to set up rules determining what
 * status codes and/or headers need to be present in order for a
 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * to be considered cacheable.
 *
 * @memberof module:workbox-cacheable-response
 */
class CacheableResponse {
    /**
     * To construct a new CacheableResponse instance you must provide at least
     * one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config = {}) {
        if (true) {
            if (!(config.statuses || config.headers)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('statuses-or-headers-required', {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                });
            }
            if (config.statuses) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(config.statuses, {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                    paramName: 'config.statuses',
                });
            }
            if (config.headers) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.headers, 'object', {
                    moduleName: 'workbox-cacheable-response',
                    className: 'CacheableResponse',
                    funcName: 'constructor',
                    paramName: 'config.headers',
                });
            }
        }
        this._statuses = config.statuses;
        this._headers = config.headers;
    }
    /**
     * Checks a response to see whether it's cacheable or not, based on this
     * object's configuration.
     *
     * @param {Response} response The response whose cacheability is being
     * checked.
     * @return {boolean} `true` if the `Response` is cacheable, and `false`
     * otherwise.
     */
    isResponseCacheable(response) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(response, Response, {
                moduleName: 'workbox-cacheable-response',
                className: 'CacheableResponse',
                funcName: 'isResponseCacheable',
                paramName: 'response',
            });
        }
        let cacheable = true;
        if (this._statuses) {
            cacheable = this._statuses.includes(response.status);
        }
        if (this._headers && cacheable) {
            cacheable = Object.keys(this._headers).some((headerName) => {
                return response.headers.get(headerName) === this._headers[headerName];
            });
        }
        if (true) {
            if (!cacheable) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`The request for ` +
                    `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(response.url)}' returned a response that does ` +
                    `not meet the criteria for being cached.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View cacheability criteria here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Cacheable statuses: ` +
                    JSON.stringify(this._statuses));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Cacheable headers: ` +
                    JSON.stringify(this._headers, null, 2));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                const logFriendlyHeaders = {};
                response.headers.forEach((value, key) => {
                    logFriendlyHeaders[key] = value;
                });
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View response status and headers here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Response status: ` + response.status);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Response headers: ` +
                    JSON.stringify(logFriendlyHeaders, null, 2));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View full response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(response.headers);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
            }
        }
        return cacheable;
    }
}



/***/ }),

/***/ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js ***!
  \****************************************************************************/
/*! exports provided: CacheableResponsePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return CacheableResponsePlugin; });
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheableResponse.js */ "./node_modules/workbox-cacheable-response/CacheableResponse.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
 * easier to add in cacheability checks to requests made via Workbox's built-in
 * strategies.
 *
 * @memberof module:workbox-cacheable-response
 */
class CacheableResponsePlugin {
    /**
     * To construct a new CacheableResponsePlugin instance you must provide at
     * least one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config) {
        /**
         * @param {Object} options
         * @param {Response} options.response
         * @return {Response|null}
         * @private
         */
        this.cacheWillUpdate = async ({ response }) => {
            if (this._cacheableResponse.isResponseCacheable(response)) {
                return response;
            }
            return null;
        };
        this._cacheableResponse = new _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"](config);
    }
}



/***/ }),

/***/ "./node_modules/workbox-cacheable-response/_version.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/_version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:cacheable-response:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-cacheable-response/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/index.js ***!
  \**********************************************************/
/*! exports provided: CacheableResponse, CacheableResponsePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheableResponse.js */ "./node_modules/workbox-cacheable-response/CacheableResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return _CacheableResponse_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"]; });

/* harmony import */ var _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheableResponsePlugin.js */ "./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return _CacheableResponsePlugin_js__WEBPACK_IMPORTED_MODULE_1__["CacheableResponsePlugin"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-cacheable-response/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-cacheable-response
 */



/***/ }),

/***/ "./node_modules/workbox-cacheable-response/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-cacheable-response/index.mjs ***!
  \***********************************************************/
/*! exports provided: CacheableResponse, CacheableResponsePlugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-cacheable-response/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheableResponsePlugin"]; });



/***/ }),

/***/ "./node_modules/workbox-core/_private.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_private.js ***!
  \***********************************************/
/*! exports provided: assert, cacheNames, cacheWrapper, canConstructReadableStream, canConstructResponseFromBodyStream, dontWaitFor, DBWrapper, Deferred, deleteDatabase, executeQuotaErrorCallbacks, fetchWrapper, getFriendlyURL, logger, resultingClientExists, timeout, WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"]; });

/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"]; });

/* harmony import */ var _private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return _private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"]; });

/* harmony import */ var _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_private/canConstructReadableStream.js */ "./node_modules/workbox-core/_private/canConstructReadableStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canConstructReadableStream", function() { return _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__["canConstructReadableStream"]; });

/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__["canConstructResponseFromBodyStream"]; });

/* harmony import */ var _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dontWaitFor", function() { return _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__["dontWaitFor"]; });

/* harmony import */ var _private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_private/DBWrapper.js */ "./node_modules/workbox-core/_private/DBWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DBWrapper", function() { return _private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_6__["DBWrapper"]; });

/* harmony import */ var _private_Deferred_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return _private_Deferred_js__WEBPACK_IMPORTED_MODULE_7__["Deferred"]; });

/* harmony import */ var _private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_private/deleteDatabase.js */ "./node_modules/workbox-core/_private/deleteDatabase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDatabase", function() { return _private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_8__["deleteDatabase"]; });

/* harmony import */ var _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_9__["executeQuotaErrorCallbacks"]; });

/* harmony import */ var _private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return _private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_10__["fetchWrapper"]; });

/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_11__["getFriendlyURL"]; });

/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _private_logger_js__WEBPACK_IMPORTED_MODULE_12__["logger"]; });

/* harmony import */ var _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_private/resultingClientExists.js */ "./node_modules/workbox-core/_private/resultingClientExists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resultingClientExists", function() { return _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_13__["resultingClientExists"]; });

/* harmony import */ var _private_timeout_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _private_timeout_js__WEBPACK_IMPORTED_MODULE_14__["timeout"]; });

/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_15__["WorkboxError"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_16__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.




















/***/ }),

/***/ "./node_modules/workbox-core/_private/DBWrapper.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/DBWrapper.js ***!
  \*********************************************************/
/*! exports provided: DBWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrapper", function() { return DBWrapper; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */
class DBWrapper {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {!Function} [callbacks.onupgradeneeded]
     * @param {!Function} [callbacks.onversionchange] Defaults to
     *     DBWrapper.prototype._onversionchange when not specified.
     * @private
     */
    constructor(name, version, { onupgradeneeded, onversionchange, } = {}) {
        this._db = null;
        this._name = name;
        this._version = version;
        this._onupgradeneeded = onupgradeneeded;
        this._onversionchange = onversionchange || (() => this.close());
    }
    /**
     * Returns the IDBDatabase instance (not normally needed).
     * @return {IDBDatabase|undefined}
     *
     * @private
     */
    get db() {
        return this._db;
    }
    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     * @private
     */
    async open() {
        if (this._db)
            return;
        this._db = await new Promise((resolve, reject) => {
            // This flag is flipped to true if the timeout callback runs prior
            // to the request failing or succeeding. Note: we use a timeout instead
            // of an onblocked handler since there are cases where onblocked will
            // never never run. A timeout better handles all possible scenarios:
            // https://github.com/w3c/IndexedDB/issues/223
            let openRequestTimedOut = false;
            setTimeout(() => {
                openRequestTimedOut = true;
                reject(new Error('The open request was blocked and timed out'));
            }, this.OPEN_TIMEOUT);
            const openRequest = indexedDB.open(this._name, this._version);
            openRequest.onerror = () => reject(openRequest.error);
            openRequest.onupgradeneeded = (evt) => {
                if (openRequestTimedOut) {
                    openRequest.transaction.abort();
                    openRequest.result.close();
                }
                else if (typeof this._onupgradeneeded === 'function') {
                    this._onupgradeneeded(evt);
                }
            };
            openRequest.onsuccess = () => {
                const db = openRequest.result;
                if (openRequestTimedOut) {
                    db.close();
                }
                else {
                    db.onversionchange = this._onversionchange.bind(this);
                    resolve(db);
                }
            };
        });
        return this;
    }
    /**
     * Polyfills the native `getKey()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @return {Array}
     * @private
     */
    async getKey(storeName, query) {
        return (await this.getAllKeys(storeName, query, 1))[0];
    }
    /**
     * Polyfills the native `getAll()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAll(storeName, query, count) {
        return await this.getAllMatching(storeName, { query, count });
    }
    /**
     * Polyfills the native `getAllKeys()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAllKeys(storeName, query, count) {
        const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
        return entries.map((entry) => entry.key);
    }
    /**
     * Supports flexible lookup in an object store by specifying an index,
     * query, direction, and count. This method returns an array of objects
     * with the signature .
     *
     * @param {string} storeName
     * @param {Object} [opts]
     * @param {string} [opts.index] The index to use (if specified).
     * @param {*} [opts.query]
     * @param {IDBCursorDirection} [opts.direction]
     * @param {number} [opts.count] The max number of results to return.
     * @param {boolean} [opts.includeKeys] When true, the structure of the
     *     returned objects is changed from an array of values to an array of
     *     objects in the form {key, primaryKey, value}.
     * @return {Array}
     * @private
     */
    async getAllMatching(storeName, { index, query = null, // IE/Edge errors if query === `undefined`.
    direction = 'next', count, includeKeys = false, } = {}) {
        return await this.transaction([storeName], 'readonly', (txn, done) => {
            const store = txn.objectStore(storeName);
            const target = index ? store.index(index) : store;
            const results = [];
            const request = target.openCursor(query, direction);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    results.push(includeKeys ? cursor : cursor.value);
                    if (count && results.length >= count) {
                        done(results);
                    }
                    else {
                        cursor.continue();
                    }
                }
                else {
                    done(results);
                }
            };
        });
    }
    /**
     * Accepts a list of stores, a transaction type, and a callback and
     * performs a transaction. A promise is returned that resolves to whatever
     * value the callback chooses. The callback holds all the transaction logic
     * and is invoked with two arguments:
     *   1. The IDBTransaction object
     *   2. A `done` function, that's used to resolve the promise when
     *      when the transaction is done, if passed a value, the promise is
     *      resolved to that value.
     *
     * @param {Array<string>} storeNames An array of object store names
     *     involved in the transaction.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {!Function} callback
     * @return {*} The result of the transaction ran by the callback.
     * @private
     */
    async transaction(storeNames, type, callback) {
        await this.open();
        return await new Promise((resolve, reject) => {
            const txn = this._db.transaction(storeNames, type);
            txn.onabort = () => reject(txn.error);
            txn.oncomplete = () => resolve();
            callback(txn, (value) => resolve(value));
        });
    }
    /**
     * Delegates async to a native IDBObjectStore method.
     *
     * @param {string} method The method name.
     * @param {string} storeName The object store name.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {...*} args The list of args to pass to the native method.
     * @return {*} The result of the transaction.
     * @private
     */
    async _call(method, storeName, type, ...args) {
        const callback = (txn, done) => {
            const objStore = txn.objectStore(storeName);
            // TODO(philipwalton): Fix this underlying TS2684 error.
            // @ts-ignore
            const request = objStore[method].apply(objStore, args);
            request.onsuccess = () => done(request.result);
        };
        return await this.transaction([storeName], type, callback);
    }
    /**
     * Closes the connection opened by `DBWrapper.open()`. Generally this method
     * doesn't need to be called since:
     *   1. It's usually better to keep a connection open since opening
     *      a new connection is somewhat slow.
     *   2. Connections are automatically closed when the reference is
     *      garbage collected.
     * The primary use case for needing to close a connection is when another
     * reference (typically in another tab) needs to upgrade it and would be
     * blocked by the current, open connection.
     *
     * @private
     */
    close() {
        if (this._db) {
            this._db.close();
            this._db = null;
        }
    }
}
// Exposed on the prototype to let users modify the default timeout on a
// per-instance or global basis.
DBWrapper.prototype.OPEN_TIMEOUT = 2000;
// Wrap native IDBObjectStore methods according to their mode.
const methodsToWrap = {
    readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
    readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
        if (method in IDBObjectStore.prototype) {
            // Don't use arrow functions here since we're outside of the class.
            DBWrapper.prototype[method] =
                async function (storeName, ...args) {
                    return await this._call(method, storeName, mode, ...args);
                };
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/*! exports provided: Deferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/*! exports provided: cacheNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheWrapper.js ***!
  \************************************************************/
/*! exports provided: cacheWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return cacheWrapper; });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({ request, mode, plugins = [], }) => {
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (true) {
            _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(effectiveRequest, Request, {
                moduleName: 'Plugin',
                funcName: "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */,
                isReturnValueProblem: true,
            });
        }
    }
    return effectiveRequest;
};
/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({ request, response, event, plugins = [], }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const plugin of plugins) {
        if ("cacheWillUpdate" /* CACHE_WILL_UPDATE */ in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate" /* CACHE_WILL_UPDATE */];
            responseToCache = await pluginMethod.call(plugin, {
                request,
                response: responseToCache,
                event,
            });
            if (true) {
                if (responseToCache) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(responseToCache, Response, {
                        moduleName: 'Plugin',
                        funcName: "cacheWillUpdate" /* CACHE_WILL_UPDATE */,
                        isReturnValueProblem: true,
                    });
                }
            }
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (true) {
            if (responseToCache) {
                if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The response for '${request.url}' is an opaque ` +
                            `response. The caching strategy that you're using will not ` +
                            `cache opaque responses by default.`);
                    }
                    else {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`The response for '${request.url}' returned ` +
                            `a status code of '${response.status}' and won't be cached as a ` +
                            `result.`);
                    }
                }
            }
        }
        responseToCache = responseToCache && responseToCache.status === 200 ?
            responseToCache : undefined;
    }
    return responseToCache ? responseToCache : null;
};
/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that prompted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [], }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'read'
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
        if (cachedResponse) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Found a cached response in '${cacheName}'.`);
        }
        else {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No cached response found in '${cacheName}'.`);
        }
    }
    for (const plugin of plugins) {
        if ("cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */ in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */];
            cachedResponse = await pluginMethod.call(plugin, {
                cacheName,
                event,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
            });
            if (true) {
                if (cachedResponse) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(cachedResponse, Response, {
                        moduleName: 'Plugin',
                        funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                        isReturnValueProblem: true,
                    });
                }
            }
        }
    }
    return cachedResponse;
};
/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions, }) => {
    if (true) {
        if (request.method && request.method !== 'GET') {
            throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('attempt-to-cache-non-get-request', {
                url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url),
                method: request.method,
            });
        }
    }
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot cache non-existent response for ` +
                `'${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}'.`);
        }
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('cache-put-with-no-response', {
            url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url),
        });
    }
    const responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Response '${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}' will ` +
                `not be cached.`, responseToCache);
        }
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    const oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Updating the '${cacheName}' cache with a new Response for ` +
            `${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}.`);
    }
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await Object(_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["executeQuotaErrorCallbacks"])();
        }
        throw error;
    }
    for (const plugin of updatePlugins) {
        await plugin["cacheDidUpdate" /* CACHE_DID_UPDATE */].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest,
        });
    }
};
const cacheWrapper = {
    put: putWrapper,
    match: matchWrapper,
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructReadableStream.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructReadableStream.js ***!
  \**************************************************************************/
/*! exports provided: canConstructReadableStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructReadableStream", function() { return canConstructReadableStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */
function canConstructReadableStream() {
    if (supportStatus === undefined) {
        // See https://github.com/GoogleChrome/workbox/issues/1473
        try {
            new ReadableStream({ start() { } });
            supportStatus = true;
        }
        catch (error) {
            supportStatus = false;
        }
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/*! exports provided: canConstructResponseFromBodyStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return canConstructResponseFromBodyStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/deleteDatabase.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/deleteDatabase.js ***!
  \**************************************************************/
/*! exports provided: deleteDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDatabase", function() { return deleteDatabase; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Deletes the database.
 * Note: this is exported separately from the DBWrapper module because most
 * usages of IndexedDB in workbox dont need deleting, and this way it can be
 * reused in tests to delete databases without creating DBWrapper instances.
 *
 * @param {string} name The database name.
 * @private
 */
const deleteDatabase = async (name) => {
    await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(name);
        request.onerror = () => {
            reject(request.error);
        };
        request.onblocked = () => {
            reject(new Error('Delete blocked'));
        };
        request.onsuccess = () => {
            resolve();
        };
    });
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/*! exports provided: dontWaitFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dontWaitFor", function() { return dontWaitFor; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    promise.then(() => { });
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/*! exports provided: executeQuotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/fetchWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/fetchWrapper.js ***!
  \************************************************************/
/*! exports provided: fetchWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {ExtendableEvent} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({ request, fetchOptions, event, plugins = [], }) => {
    if (typeof request === 'string') {
        request = new Request(request);
    }
    // We *should* be able to call `await event.preloadResponse` even if it's
    // undefined, but for some reason, doing so leads to errors in our Node unit
    // tests. To work around that, explicitly check preloadResponse's value first.
    if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
            if (true) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`Using a preloaded navigation response for ` +
                    `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}'`);
            }
            return possiblePreloadResponse;
        }
    }
    if (true) {
        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
            paramName: 'request',
            expectedClass: Request,
            moduleName: 'workbox-core',
            className: 'fetchWrapper',
            funcName: 'wrappedFetch',
        });
    }
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = failedFetchPlugins.length > 0 ?
        request.clone() : null;
    try {
        for (const plugin of plugins) {
            if ("requestWillFetch" /* REQUEST_WILL_FETCH */ in plugin) {
                const pluginMethod = plugin["requestWillFetch" /* REQUEST_WILL_FETCH */];
                const requestClone = request.clone();
                request = await pluginMethod.call(plugin, {
                    request: requestClone,
                    event,
                });
                if (true) {
                    if (request) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
                            moduleName: 'Plugin',
                            funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('plugin-error-request-will-fetch', {
            thrownError: err,
        });
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (Most likely from a `fetch` event) to be different
    // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
    const pluginFilteredRequest = request.clone();
    try {
        let fetchResponse;
        // See https://github.com/GoogleChrome/workbox/issues/1796
        if (request.mode === 'navigate') {
            fetchResponse = await fetch(request);
        }
        else {
            fetchResponse = await fetch(request, fetchOptions);
        }
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' returned a response with ` +
                `status '${fetchResponse.status}'.`);
        }
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (true) {
                    if (fetchResponse) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(fetchResponse, Response, {
                            moduleName: 'Plugin',
                            funcName: "fetchDidSucceed" /* FETCH_DID_SUCCEED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' threw an error.`, error);
        }
        for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail" /* FETCH_DID_FAIL */].call(plugin, {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone(),
            });
        }
        throw error;
    }
};
const fetchWrapper = {
    fetch: wrappedFetch,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/*! exports provided: getFriendlyURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_private/resultingClientExists.js":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/resultingClientExists.js ***!
  \*********************************************************************/
/*! exports provided: resultingClientExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultingClientExists", function() { return resultingClientExists; });
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await Object(_timeout_js__WEBPACK_IMPORTED_MODULE_0__["timeout"])(100);
    }
    return resultingWindow;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/cacheNames.js":
/*!*************************************************!*\
  !*** ./node_modules/workbox-core/cacheNames.js ***!
  \*************************************************/
/*! exports provided: cacheNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */
const cacheNames = {
    get googleAnalytics() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getGoogleAnalyticsName();
    },
    get precache() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
    },
    get prefix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrefix();
    },
    get runtime() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getRuntimeName();
    },
    get suffix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getSuffix();
    },
};



/***/ }),

/***/ "./node_modules/workbox-core/clientsClaim.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/clientsClaim.js ***!
  \***************************************************/
/*! exports provided: clientsClaim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientsClaim", function() { return clientsClaim; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */
function clientsClaim() {
    self.addEventListener('activate', () => self.clients.claim());
}



/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/*! exports provided: copyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return copyResponse; });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = Object(_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__["canConstructResponseFromBodyStream"])() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/index.js ***!
  \********************************************/
/*! exports provided: _private, cacheNames, clientsClaim, copyResponse, registerQuotaErrorCallback, setCacheNameDetails, skipWaiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__["registerQuotaErrorCallback"]; });

/* harmony import */ var _private_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private.js */ "./node_modules/workbox-core/_private.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "_private", function() { return _private_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cacheNames.js */ "./node_modules/workbox-core/cacheNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__["cacheNames"]; });

/* harmony import */ var _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__["copyResponse"]; });

/* harmony import */ var _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientsClaim.js */ "./node_modules/workbox-core/clientsClaim.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientsClaim", function() { return _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__["clientsClaim"]; });

/* harmony import */ var _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCacheNameDetails.js */ "./node_modules/workbox-core/setCacheNameDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCacheNameDetails", function() { return _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__["setCacheNameDetails"]; });

/* harmony import */ var _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipWaiting.js */ "./node_modules/workbox-core/skipWaiting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWaiting", function() { return _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__["skipWaiting"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types.js */ "./node_modules/workbox-core/types.js");
/* empty/unused harmony star reexport *//*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */




/***/ }),

/***/ "./node_modules/workbox-core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/workbox-core/index.mjs ***!
  \*********************************************/
/*! exports provided: _private, cacheNames, clientsClaim, copyResponse, registerQuotaErrorCallback, setCacheNameDetails, skipWaiting */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_private", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["_private"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientsClaim", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["clientsClaim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["copyResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["registerQuotaErrorCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCacheNameDetails", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["setCacheNameDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWaiting", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["skipWaiting"]; });



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed with an HTTP ` +
            `status of ${status}.`;
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/*! exports provided: quotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.js ***!
  \*****************************************************************/
/*! exports provided: registerQuotaErrorCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerQuotaErrorCallback", function() { return registerQuotaErrorCallback; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */
function registerQuotaErrorCallback(callback) {
    if (true) {
        _private_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"].isType(callback, 'function', {
            moduleName: 'workbox-core',
            funcName: 'register',
            paramName: 'callback',
        });
    }
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__["quotaErrorCallbacks"].add(callback);
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Registered a callback to respond to quota errors.', callback);
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/setCacheNameDetails.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/setCacheNameDetails.js ***!
  \**********************************************************/
/*! exports provided: setCacheNameDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCacheNameDetails", function() { return setCacheNameDetails; });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */
function setCacheNameDetails(details) {
    if (true) {
        Object.keys(details).forEach((key) => {
            _private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(details[key], 'string', {
                moduleName: 'workbox-core',
                funcName: 'setCacheNameDetails',
                paramName: `details.${key}`,
            });
        });
        if ('precache' in details && details['precache'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
                cacheNameId: 'precache',
                value: details['precache'],
            });
        }
        if ('runtime' in details && details['runtime'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
                cacheNameId: 'runtime',
                value: details['runtime'],
            });
        }
        if ('googleAnalytics' in details && details['googleAnalytics'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('invalid-cache-name', {
                cacheNameId: 'googleAnalytics',
                value: details['googleAnalytics'],
            });
        }
    }
    _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].updateDetails(details);
}



/***/ }),

/***/ "./node_modules/workbox-core/skipWaiting.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-core/skipWaiting.js ***!
  \**************************************************/
/*! exports provided: skipWaiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWaiting", function() { return skipWaiting; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Force a service worker to activate immediately, instead of
 * [waiting](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting)
 * for existing clients to close.
 *
 * @memberof module:workbox-core
 */
function skipWaiting() {
    // We need to explicitly call `self.skipWaiting()` here because we're
    // shadowing `skipWaiting` with this local function.
    self.addEventListener('install', () => self.skipWaiting());
}



/***/ }),

/***/ "./node_modules/workbox-core/types.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/types.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/***/ }),

/***/ "./node_modules/workbox-core/utils/pluginUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/utils/pluginUtils.js ***!
  \********************************************************/
/*! exports provided: pluginUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUtils", function() { return pluginUtils; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const pluginUtils = {
    filter: (plugins, callbackName) => {
        return plugins.filter((plugin) => callbackName in plugin);
    },
};


/***/ }),

/***/ "./node_modules/workbox-expiration/CacheExpiration.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-expiration/CacheExpiration.js ***!
  \************************************************************/
/*! exports provided: CacheExpiration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return CacheExpiration; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/CacheTimestampsModel.js */ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */
class CacheExpiration {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     */
    constructor(cacheName, config = {}) {
        this._isRunning = false;
        this._rerunRequested = false;
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cacheName, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'constructor',
                paramName: 'cacheName',
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
                // TODO: Assert is positive
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
                // TODO: Assert is positive
            }
        }
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheName = cacheName;
        this._timestampModel = new _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__["CacheTimestampsModel"](cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
        if (this._isRunning) {
            this._rerunRequested = true;
            return;
        }
        this._isRunning = true;
        const minTimestamp = this._maxAgeSeconds ?
            Date.now() - (this._maxAgeSeconds * 1000) : 0;
        const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
        // Delete URLs from the cache
        const cache = await self.caches.open(this._cacheName);
        for (const url of urlsExpired) {
            await cache.delete(url);
        }
        if (true) {
            if (urlsExpired.length > 0) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Expired ${urlsExpired.length} ` +
                    `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` +
                    `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` +
                    `'${this._cacheName}' cache.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Expired the following ${urlsExpired.length === 1 ?
                    'URL' : 'URLs'}:`);
                urlsExpired.forEach((url) => workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`    ${url}`));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Cache expiration ran and found no entries to remove.`);
            }
        }
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            Object(workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__["dontWaitFor"])(this.expireEntries());
        }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(url, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'updateTimestamp',
                paramName: 'url',
            });
        }
        await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
        if (!this._maxAgeSeconds) {
            if (true) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"](`expired-test-without-max-age`, {
                    methodName: 'isURLExpired',
                    paramName: 'maxAgeSeconds',
                });
            }
            return false;
        }
        else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
            return (timestamp < expireOlderThan);
        }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
        // Make sure we don't attempt another rerun if we're called in the middle of
        // a cache expiration.
        this._rerunRequested = false;
        await this._timestampModel.expireEntries(Infinity); // Expires all.
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/ExpirationPlugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-expiration/ExpirationPlugin.js ***!
  \*************************************************************/
/*! exports provided: ExpirationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return ExpirationPlugin; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in the Workbox APIs to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the used Cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */
class ExpirationPlugin {
    /**
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when a `Response` is about to be returned
         * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
         * the handler. It allows the `Response` to be inspected for freshness and
         * prevents it from being used if the `Response`'s `Date` header value is
         * older than the configured `maxAgeSeconds`.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache the response is in.
         * @param {Response} options.cachedResponse The `Response` object that's been
         *     read from a cache and whose freshness should be checked.
         * @return {Response} Either the `cachedResponse`, if it's
         *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
         *
         * @private
         */
        this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
                return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            // Expire entries to ensure that even if the expiration date has
            // expired, it'll only be used once.
            const cacheExpiration = this._getCacheExpiration(cacheName);
            Object(workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__["dontWaitFor"])(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (true) {
                        // The event may not be a fetch event; only log the URL if it is.
                        if ('request' in event) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                                `updating cache entry for ` +
                                `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(event.request.url)}'.`);
                        }
                    }
                }
            }
            return isFresh ? cachedResponse : null;
        };
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when an entry is added to a cache.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache that was updated.
         * @param {string} options.request The Request for the cached entry.
         *
         * @private
         */
        this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (true) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(cacheName, 'string', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'cacheName',
                });
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'request',
                });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (true) {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            Object(workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__["registerQuotaErrorCallback"])(() => this.deleteCacheAndMetadata());
        }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
        if (cacheName === workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName()) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__["CacheExpiration"](cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
            // We aren't expiring by age, so return true, it's fresh
            return true;
        }
        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
            // Unable to parse date, so assume it's fresh.
            return true;
        }
        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        const now = Date.now();
        return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
            return null;
        }
        const dateHeader = cachedResponse.headers.get('date');
        const parsedDate = new Date(dateHeader);
        const headerTime = parsedDate.getTime();
        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
            return null;
        }
        return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
        // Do this one at a time instead of all at once via `Promise.all()` to
        // reduce the chance of inconsistency if a promise rejects.
        for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
        }
        // Reset this._cacheExpirations to its initial state.
        this._cacheExpirations = new Map();
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-expiration/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:expiration:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-expiration/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-expiration/index.js ***!
  \**************************************************/
/*! exports provided: CacheExpiration, ExpirationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__["CacheExpiration"]; });

/* harmony import */ var _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__["ExpirationPlugin"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */



/***/ }),

/***/ "./node_modules/workbox-expiration/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-expiration/index.mjs ***!
  \***************************************************/
/*! exports provided: CacheExpiration, ExpirationPlugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-expiration/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheExpiration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["ExpirationPlugin"]; });



/***/ }),

/***/ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-expiration/models/CacheTimestampsModel.js ***!
  \************************************************************************/
/*! exports provided: CacheTimestampsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheTimestampsModel", function() { return CacheTimestampsModel; });
/* harmony import */ var workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/DBWrapper.js */ "./node_modules/workbox-core/_private/DBWrapper.js");
/* harmony import */ var workbox_core_private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/deleteDatabase.js */ "./node_modules/workbox-core/_private/deleteDatabase.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const DB_NAME = 'workbox-expiration';
const OBJECT_STORE_NAME = 'cache-entries';
const normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = '';
    return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._cacheName = cacheName;
        this._db = new workbox_core_private_DBWrapper_js__WEBPACK_IMPORTED_MODULE_0__["DBWrapper"](DB_NAME, 1, {
            onupgradeneeded: (event) => this._handleUpgrade(event),
        });
    }
    /**
     * Should perform an upgrade of indexedDB.
     *
     * @param {Event} event
     *
     * @private
     */
    _handleUpgrade(event) {
        const db = event.target.result;
        // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
        // have to use the `id` keyPath here and create our own values (a
        // concatenation of `url + cacheName`) instead of simply using
        // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
        const objStore = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
        // TODO(philipwalton): once we don't have to support EdgeHTML, we can
        // create a single index with the keyPath `['cacheName', 'timestamp']`
        // instead of doing both these indexes.
        objStore.createIndex('cacheName', 'cacheName', { unique: false });
        objStore.createIndex('timestamp', 'timestamp', { unique: false });
        // Previous versions of `workbox-expiration` used `this._cacheName`
        // as the IDBDatabase name.
        Object(workbox_core_private_deleteDatabase_js__WEBPACK_IMPORTED_MODULE_1__["deleteDatabase"])(this._cacheName);
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
        url = normalizeURL(url);
        const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url),
        };
        await this._db.put(OBJECT_STORE_NAME, entry);
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number}
     *
     * @private
     */
    async getTimestamp(url) {
        const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
        return entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
        const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, 'readwrite', (txn, done) => {
            const store = txn.objectStore(OBJECT_STORE_NAME);
            const request = store.index('timestamp').openCursor(null, 'prev');
            const entriesToDelete = [];
            let entriesNotDeletedCount = 0;
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const result = cursor.value;
                    // TODO(philipwalton): once we can use a multi-key index, we
                    // won't have to check `cacheName` here.
                    if (result.cacheName === this._cacheName) {
                        // Delete an entry if it's older than the max age or
                        // if we already have the max number allowed.
                        if ((minTimestamp && result.timestamp < minTimestamp) ||
                            (maxCount && entriesNotDeletedCount >= maxCount)) {
                            // TODO(philipwalton): we should be able to delete the
                            // entry right here, but doing so causes an iteration
                            // bug in Safari stable (fixed in TP). Instead we can
                            // store the keys of the entries to delete, and then
                            // delete the separate transactions.
                            // https://github.com/GoogleChrome/workbox/issues/1978
                            // cursor.delete();
                            // We only need to return the URL, not the whole entry.
                            entriesToDelete.push(cursor.value);
                        }
                        else {
                            entriesNotDeletedCount++;
                        }
                    }
                    cursor.continue();
                }
                else {
                    done(entriesToDelete);
                }
            };
        });
        // TODO(philipwalton): once the Safari bug in the following issue is fixed,
        // we should be able to remove this loop and do the entry deletion in the
        // cursor loop above:
        // https://github.com/GoogleChrome/workbox/issues/1978
        const urlsDeleted = [];
        for (const entry of entriesToDelete) {
            await this._db.delete(OBJECT_STORE_NAME, entry.id);
            urlsDeleted.push(entry.url);
        }
        return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        return this._cacheName + '|' + normalizeURL(url);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/*! exports provided: PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName);
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = Object(_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__["createCacheKey"])(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * @param {Object} options
     * @param {Event} [options.event] The install event (if needed).
     * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
     * and caching during install.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    async install({ event, plugins } = {}) {
        if (true) {
            if (plugins) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(plugins, {
                    moduleName: 'workbox-precaching',
                    className: 'PrecacheController',
                    funcName: 'install',
                    paramName: 'plugins',
                });
            }
        }
        const toBePrecached = [];
        const alreadyPrecached = [];
        const cache = await self.caches.open(this._cacheName);
        const alreadyCachedRequests = await cache.keys();
        const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
            if (existingCacheKeys.has(cacheKey)) {
                alreadyPrecached.push(url);
            }
            else {
                toBePrecached.push({ cacheKey, url });
            }
        }
        const precacheRequests = toBePrecached.map(({ cacheKey, url }) => {
            const integrity = this._cacheKeysToIntegrities.get(cacheKey);
            const cacheMode = this._urlsToCacheModes.get(url);
            return this._addURLToCache({
                cacheKey,
                cacheMode,
                event,
                integrity,
                plugins,
                url,
            });
        });
        await Promise.all(precacheRequests);
        const updatedURLs = toBePrecached.map((item) => item.url);
        if (true) {
            Object(_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__["printInstallDetails"])(updatedURLs, alreadyPrecached);
        }
        return {
            updatedURLs,
            notUpdatedURLs: alreadyPrecached,
        };
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    async activate() {
        const cache = await self.caches.open(this._cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
            if (!expectedCacheKeys.has(request.url)) {
                await cache.delete(request);
                deletedURLs.push(request.url);
            }
        }
        if (true) {
            Object(_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__["printCleanupDetails"])(deletedURLs);
        }
        return { deletedURLs };
    }
    /**
     * Requests the entry and saves it to the cache if the response is valid.
     * By default, any response with a status code of less than 400 (including
     * opaque responses) is considered valid.
     *
     * If you need to use custom criteria to determine what's valid and what
     * isn't, then pass in an item in `options.plugins` that implements the
     * `cacheWillUpdate()` lifecycle event.
     *
     * @private
     * @param {Object} options
     * @param {string} options.cacheKey The string to use a cache key.
     * @param {string} options.url The URL to fetch and cache.
     * @param {string} [options.cacheMode] The cache mode for the network request.
     * @param {Event} [options.event] The install event (if passed).
     * @param {Array<Object>} [options.plugins] An array of plugins to apply to
     * fetch and caching.
     * @param {string} [options.integrity] The value to use for the `integrity`
     * field when making the request.
     */
    async _addURLToCache({ cacheKey, url, cacheMode, event, plugins, integrity }) {
        const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: 'same-origin',
        });
        let response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            event,
            plugins,
            request,
        });
        // Allow developers to override the default logic about what is and isn't
        // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
        // a `CacheableResponsePlugin` instance.
        let cacheWillUpdatePlugin;
        for (const plugin of (plugins || [])) {
            if ('cacheWillUpdate' in plugin) {
                cacheWillUpdatePlugin = plugin;
            }
        }
        const isValidResponse = cacheWillUpdatePlugin ?
            // Use a callback if provided. It returns a truthy value if valid.
            // NOTE: invoke the method on the plugin instance so the `this` context
            // is correct.
            await cacheWillUpdatePlugin.cacheWillUpdate({ event, request, response }) :
            // Otherwise, default to considering any response status under 400 valid.
            // This includes, by default, considering opaque responses valid.
            response.status < 400;
        // Consider this a failure, leading to the `install` handler failing, if
        // we get back an invalid response.
        if (!isValidResponse) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await Object(workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__["copyResponse"])(response);
        }
        await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            event,
            plugins,
            response,
            // `request` already uses `url`. We may be able to reuse it.
            request: cacheKey === url ? request : new Request(cacheKey),
            cacheName: this._cacheName,
            matchOptions: {
                ignoreSearch: true,
            },
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this._cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that can be used within a
     * {@link module:workbox-routing.Route} that will find a response for the
     * incoming request against the precache.
     *
     * If for an unexpected reason there is a cache miss for the request,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandler(fallbackToNetwork = true) {
        return async ({ request }) => {
            try {
                const response = await this.matchPrecache(request);
                if (response) {
                    return response;
                }
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].debug(`Unable to respond with precached response. ` +
                            `Falling back to network.`, error);
                    }
                    return fetch(request);
                }
                throw error;
            }
        };
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * If for an unexpected reason there is a cache miss when looking up `url`,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url, fallbackToNetwork = true) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/*! exports provided: addPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(newPlugins) {
    _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__["precachePlugins"].add(newPlugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/*! exports provided: addRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var _utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addFetchListener.js */ "./node_modules/workbox-precaching/utils/addFetchListener.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let listenerAdded = false;
/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    if (!listenerAdded) {
        Object(_utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__["addFetchListener"])(options);
        listenerAdded = true;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/*! exports provided: cleanupOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
        event.waitUntil(Object(_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandler.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandler.js ***!
  \**********************************************************/
/*! exports provided: createHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return createHandler; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandler} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandler} on that instance,
 * instead of using this function.
 *
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandler(fallbackToNetwork = true) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandler(fallbackToNetwork);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/*! exports provided: createHandlerBoundToURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return createHandlerBoundToURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_js__WEBPACK_IMPORTED_MODULE_1__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"]; });

/* harmony import */ var _createHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandler.js */ "./node_modules/workbox-precaching/createHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _createHandler_js__WEBPACK_IMPORTED_MODULE_3__["createHandler"]; });

/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__["createHandlerBoundToURL"]; });

/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__["getCacheKeyForURL"]; });

/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__["matchPrecache"]; });

/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_js__WEBPACK_IMPORTED_MODULE_7__["precache"]; });

/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__["PrecacheController"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to determine when performed.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cleanupOutdatedCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandlerBoundToURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getCacheKeyForURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["matchPrecache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]; });



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/*! exports provided: matchPrecache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return matchPrecache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/*! exports provided: precache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    const plugins = _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error(`Service worker installation failed. It will ` +
                `be retried automatically during the next navigation.`);
        }
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    event.waitUntil(precacheController.activate());
};
/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    precacheController.addToCacheList(entries);
    if (entries.length > 0) {
        // NOTE: these listeners will only be added once (even if the `precache()`
        // method is called multiple times) because event listeners are implemented
        // as a set, where each listener must be unique.
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('install', installListener);
        self.addEventListener('activate', activateListener);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/*! exports provided: precacheAndRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    Object(_precache_js__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
    Object(_addRoute_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/addFetchListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/addFetchListener.js ***!
  \*******************************************************************/
/*! exports provided: addFetchListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFetchListener", function() { return addFetchListener; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 */
const addFetchListener = ({ ignoreURLParametersMatching = [/^utm_/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = Object(_getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__["getCacheKeyForURL"])(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Precaching did not find a match for ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
            }
            return;
        }
        let responsePromise = self.caches.open(cacheName).then((cache) => {
            return cache.match(precachedURL);
        }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(`The precached response for ` +
                    `${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(precachedURL)} in ${cacheName} was not found. ` +
                    `Falling back to the network instead.`);
            }
            return fetch(precachedURL);
        });
        if (true) {
            responsePromise = responsePromise.then((response) => {
                // Workbox is going to handle the route.
                // print the routing details to the console.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Precaching is responding to: ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Serving the precached url: ${precachedURL}`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View request details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(event.request);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                return response;
            });
        }
        event.respondWith(responsePromise);
    }));
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/*! exports provided: createCacheKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/*! exports provided: deleteOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/*! exports provided: generateURLVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching, directoryIndex, cleanURLs, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getCacheKeyForURL.js ***!
  \********************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
    const precacheController = Object(_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of Object(_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__["generateURLVariations"])(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/*! exports provided: getOrCreatePrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/precachePlugins.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/precachePlugins.js ***!
  \******************************************************************/
/*! exports provided: precachePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precachePlugins", function() { return precachePlugins; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        plugins.push(...newPlugins);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/*! exports provided: printCleanupDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/*! exports provided: printInstallDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/*! exports provided: removeIgnoredSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/NavigationRoute.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/NavigationRoute.js ***!
  \*********************************************************/
/*! exports provided: NavigationRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return NavigationRoute; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class NavigationRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * If both `denylist` and `allowlist` are provided, the `denylist` will
     * take precedence and the request will not match this route.
     *
     * The regular expressions in `allowlist` and `denylist`
     * are matched against the concatenated
     * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
     * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
     * portions of the requested URL.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {Object} options
     * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
     * the route will not handle the request (even if a allowlist RegExp matches).
     * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
     * match the URL's pathname and search parameter, the route will handle the
     * request (assuming the denylist doesn't match).
     */
    constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(allowlist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.allowlist',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArrayOfClass(denylist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.denylist',
            });
        }
        super((options) => this._match(options), handler);
        this._allowlist = allowlist;
        this._denylist = denylist;
    }
    /**
     * Routes match handler.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request
     * @return {boolean}
     *
     * @private
     */
    _match({ url, request }) {
        if (request && request.mode !== 'navigate') {
            return false;
        }
        const pathnameAndSearch = url.pathname + url.search;
        for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route ${pathnameAndSearch} is not ` +
                        `being used, since the URL matches this denylist pattern: ` +
                        `${regExp}`);
                }
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The navigation route ${pathnameAndSearch} ` +
                    `is being used.`);
            }
            return true;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The navigation route ${pathnameAndSearch} is not ` +
                `being used, since the URL being navigated to doesn't ` +
                `match the allowlist.`);
        }
        return false;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/*! exports provided: RegExpRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return RegExpRoute; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The regular expression '${regExp}' only partially matched ` +
                        `against the cross-origin URL '${url}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["defaultMethod"]) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validMethods"], { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__["normalizeHandler"])(handler);
        this.match = match;
        this.method = method;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            if (event.data && event.data.type === 'CACHE_URLS') {
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle (this is usually
     *     from a fetch event, but it does not have to be).
     * @param {FetchEvent} [options.event] The event that triggered the request,
     *     if applicable.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const { params, route } = this.findMatchingRoute({ url, request, event });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        if (!handler && this._defaultHandler) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler.`);
            }
            handler = this._defaultHandler;
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`No route found for: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Router is responding to: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        if (responsePromise instanceof Promise && this._catchHandler) {
            responsePromise = responsePromise.catch((err) => {
                if (true) {
                    // Still include URL here as it will be async from the console group
                    // and may not make sense without the URL
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupCollapsed(`Error thrown when responding to: ` +
                        ` ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(url)}. Falling back to Catch Handler.`);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Error thrown by:`, route);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(err);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].groupEnd();
                }
                return this._catchHandler.handle({ url, request, event });
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request The request to match.
     * @param {Event} [options.event] The corresponding event (unless N/A).
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(url, URL, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'findMatchingRoute',
                paramName: 'options.url',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'findMatchingRoute',
                paramName: 'options.request',
            });
        }
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            const matchResult = route.match({ url, request, event });
            if (matchResult) {
                // See https://github.com/GoogleChrome/workbox/issues/2079
                params = matchResult;
                if (Array.isArray(matchResult) && matchResult.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object &&
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setDefaultHandler(handler) {
        this._defaultHandler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__["WorkboxError"]('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:routing:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/index.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/index.js ***!
  \***********************************************/
/*! exports provided: NavigationRoute, RegExpRoute, registerRoute, Route, Router, setCatchHandler, setDefaultHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationRoute.js */ "./node_modules/workbox-routing/NavigationRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__["NavigationRoute"]; });

/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__["RegExpRoute"]; });

/* harmony import */ var _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__["registerRoute"]; });

/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route_js__WEBPACK_IMPORTED_MODULE_3__["Route"]; });

/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router_js__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony import */ var _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCatchHandler.js */ "./node_modules/workbox-routing/setCatchHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__["setCatchHandler"]; });

/* harmony import */ var _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setDefaultHandler.js */ "./node_modules/workbox-routing/setDefaultHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__["setDefaultHandler"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */



/***/ }),

/***/ "./node_modules/workbox-routing/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/index.mjs ***!
  \************************************************/
/*! exports provided: NavigationRoute, RegExpRoute, registerRoute, Route, Router, setCatchHandler, setDefaultHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-routing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NavigationRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["RegExpRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["registerRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["setCatchHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["setDefaultHandler"]; });



/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/*! exports provided: registerRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return registerRoute; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http') ?
                captureUrl.pathname : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if ((new RegExp(`${wildcards}`)).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if ((url.pathname === captureUrl.pathname) &&
                    (url.origin !== captureUrl.origin)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__["RegExpRoute"](capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"]) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__["getOrCreateDefaultRouter"])();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/setCatchHandler.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/setCatchHandler.js ***!
  \*********************************************************/
/*! exports provided: setCatchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return setCatchHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setCatchHandler(handler) {
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
    defaultRouter.setCatchHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/setDefaultHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-routing/setDefaultHandler.js ***!
  \***********************************************************/
/*! exports provided: setDefaultHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return setDefaultHandler; });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setDefaultHandler(handler) {
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreateDefaultRouter"])();
    defaultRouter.setDefaultHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/*! exports provided: defaultMethod, validMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMethod", function() { return defaultMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMethods", function() { return validMethods; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/*! exports provided: getOrCreateDefaultRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateDefaultRouter", function() { return getOrCreateDefaultRouter; });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/*! exports provided: normalizeHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHandler", function() { return normalizeHandler; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/CacheFirst.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheFirst.js ***!
  \*******************************************************/
/*! exports provided: CacheFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return CacheFirst; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class CacheFirst {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'CacheFirst',
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        let response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (!response) {
            if (true) {
                logs.push(`No response found in the '${this._cacheName}' cache. ` +
                    `Will respond with a network request.`);
            }
            try {
                response = await this._getFromNetwork(request, event);
            }
            catch (err) {
                error = err;
            }
            if (true) {
                if (response) {
                    logs.push(`Got response from network.`);
                }
                else {
                    logs.push(`Unable to get a response from the network.`);
                }
            }
        }
        else {
            if (true) {
                logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('CacheFirst', request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
    /**
     * Handles the network and cache part of CacheFirst.
     *
     * @param {Request} request
     * @param {Event} [event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getFromNetwork(request, event) {
        const response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        // Keep the service worker while we put the request to the cache
        const responseClone = response.clone();
        const cachePutPromise = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            cacheName: this._cacheName,
            request,
            response: responseClone,
            event,
            plugins: this._plugins,
        });
        if (event) {
            try {
                event.waitUntil(cachePutPromise);
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                        `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                }
            }
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/CacheOnly.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheOnly.js ***!
  \******************************************************/
/*! exports provided: CacheOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return CacheOnly; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class CacheOnly {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'CacheOnly',
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        const response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__["messages"].strategyStart('CacheOnly', request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Found a cached response in the '${this._cacheName}'` +
                    ` cache.`);
                _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__["messages"].printFinalResponse(response);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`No response found in the '${this._cacheName}' cache.`);
            }
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('no-response', { url: request.url });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.js ***!
  \*********************************************************/
/*! exports provided: NetworkFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return NetworkFirst; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_9__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class NetworkFirst {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} options.networkTimeoutSeconds If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (true) {
            if (this._networkTimeoutSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(this._networkTimeoutSeconds, 'number', {
                    moduleName: 'workbox-strategies',
                    className: 'NetworkFirst',
                    funcName: 'constructor',
                    paramName: 'networkTimeoutSeconds',
                });
            }
        }
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'NetworkFirst',
                funcName: 'handle',
                paramName: 'makeRequest',
            });
        }
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, event, logs });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, event, logs });
        promises.push(networkPromise);
        // Promise.race() will resolve as soon as the first promise resolves.
        let response = await Promise.race(promises);
        // If Promise.race() resolved with null, it might be due to a network
        // timeout + a cache miss. If that were to happen, we'd rather wait until
        // the networkPromise resolves instead of returning null.
        // Note that it's fine to await an already-resolved promise, so we don't
        // have to check to see if it's still "in flight".
        if (!response) {
            response = await networkPromise;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('NetworkFirst', request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, event }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (true) {
                    logs.push(`Timing out the network response at ` +
                        `${this._networkTimeoutSeconds} seconds.`);
                }
                resolve(await this._respondFromCache({ request, event }));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, event }) {
        let error;
        let response;
        try {
            response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
                request,
                event,
                fetchOptions: this._fetchOptions,
                plugins: this._plugins,
            });
        }
        catch (err) {
            error = err;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (true) {
            if (response) {
                logs.push(`Got response from network.`);
            }
            else {
                logs.push(`Unable to get a response from the network. Will respond ` +
                    `with a cached response.`);
            }
        }
        if (error || !response) {
            response = await this._respondFromCache({ request, event });
            if (true) {
                if (response) {
                    logs.push(`Found a cached response in the '${this._cacheName}'` +
                        ` cache.`);
                }
                else {
                    logs.push(`No response found in the '${this._cacheName}' cache.`);
                }
            }
        }
        else {
            // Keep the service worker alive while we put the request in the cache
            const responseClone = response.clone();
            const cachePut = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
                cacheName: this._cacheName,
                request,
                response: responseClone,
                event,
                plugins: this._plugins,
            });
            if (event) {
                try {
                    // The event has been responded to so we can keep the SW alive to
                    // respond to the request
                    event.waitUntil(cachePut);
                }
                catch (err) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                            `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                    }
                }
            }
        }
        return response;
    }
    /**
     * Used if the network timeouts or fails to make the request.
     *
     * @param {Object} options
     * @param {Request} request The request to match in the cache
     * @param {Event} [options.event]
     * @return {Promise<Object>}
     *
     * @private
     */
    _respondFromCache({ event, request }) {
        return workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.js ***!
  \********************************************************/
/*! exports provided: NetworkOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return NetworkOnly; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class NetworkOnly {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     */
    constructor(options = {}) {
        this._plugins = options.plugins || [];
        this._fetchOptions = options.fetchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request The request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'NetworkOnly',
                funcName: 'handle',
                paramName: 'request',
            });
        }
        let error;
        let response;
        try {
            response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__["fetchWrapper"].fetch({
                request,
                event,
                fetchOptions: this._fetchOptions,
                plugins: this._plugins,
            });
        }
        catch (err) {
            error = err;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__["messages"].strategyStart('NetworkOnly', request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Got response from network.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Unable to get a response from the network.`);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/StaleWhileRevalidate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-strategies/StaleWhileRevalidate.js ***!
  \*****************************************************************/
/*! exports provided: StaleWhileRevalidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return StaleWhileRevalidate; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_9__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @memberof module:workbox-strategies
 */
class StaleWhileRevalidate {
    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"], ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_8__["cacheOkAndOpaquePlugin"]];
        }
        this._fetchOptions = options.fetchOptions;
        this._matchOptions = options.matchOptions;
    }
    /**
     * This method will perform a request strategy and follows an API that
     * will work with the
     * [Workbox Router]{@link module:workbox-routing.Router}.
     *
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {Event} [options.event] The event that triggered the request.
     * @return {Promise<Response>}
     */
    async handle({ event, request }) {
        const logs = [];
        if (typeof request === 'string') {
            request = new Request(request);
        }
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: 'StaleWhileRevalidate',
                funcName: 'handle',
                paramName: 'request',
            });
        }
        const fetchAndCachePromise = this._getFromNetwork({ request, event });
        let response = await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (response) {
            if (true) {
                logs.push(`Found a cached response in the '${this._cacheName}'` +
                    ` cache. Will update with the network response in the background.`);
            }
            if (event) {
                try {
                    event.waitUntil(fetchAndCachePromise);
                }
                catch (error) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                            `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                    }
                }
            }
        }
        else {
            if (true) {
                logs.push(`No response found in the '${this._cacheName}' cache. ` +
                    `Will wait for the network response.`);
            }
            try {
                response = await fetchAndCachePromise;
            }
            catch (err) {
                error = err;
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].strategyStart('StaleWhileRevalidate', request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_7__["messages"].printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__["WorkboxError"]('no-response', { url: request.url, error });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Event} [options.event]
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getFromNetwork({ request, event }) {
        const response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        const cachePutPromise = workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            cacheName: this._cacheName,
            request,
            response: response.clone(),
            event,
            plugins: this._plugins,
        });
        if (event) {
            try {
                event.waitUntil(cachePutPromise);
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Unable to ensure service worker stays alive when ` +
                        `updating cache for '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'.`);
                }
            }
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:strategies:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-strategies/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-strategies/index.js ***!
  \**************************************************/
/*! exports provided: CacheFirst, CacheOnly, NetworkFirst, NetworkOnly, StaleWhileRevalidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__["CacheFirst"]; });

/* harmony import */ var _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheOnly.js */ "./node_modules/workbox-strategies/CacheOnly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__["CacheOnly"]; });

/* harmony import */ var _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__["NetworkFirst"]; });

/* harmony import */ var _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkOnly.js */ "./node_modules/workbox-strategies/NetworkOnly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__["NetworkOnly"]; });

/* harmony import */ var _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__["StaleWhileRevalidate"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */



/***/ }),

/***/ "./node_modules/workbox-strategies/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-strategies/index.mjs ***!
  \***************************************************/
/*! exports provided: CacheFirst, CacheOnly, NetworkFirst, NetworkOnly, StaleWhileRevalidate */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-strategies/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["CacheOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["StaleWhileRevalidate"]; });



/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js ***!
  \***************************************************************************/
/*! exports provided: cacheOkAndOpaquePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheOkAndOpaquePlugin", function() { return cacheOkAndOpaquePlugin; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.js ***!
  \***********************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`View the final response here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(response || '[No response returned]');
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
        }
    },
};


/***/ }),

/***/ "./sw/service-worker.js":
/*!******************************!*\
  !*** ./sw/service-worker.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var workbox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core */ "./node_modules/workbox-core/index.mjs");
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/* harmony import */ var _layer0_prefetch_sw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layer0/prefetch/sw */ "./node_modules/@layer0/prefetch/sw/index.js");
/* harmony import */ var _layer0_prefetch_sw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layer0_prefetch_sw__WEBPACK_IMPORTED_MODULE_2__);



Object(workbox_core__WEBPACK_IMPORTED_MODULE_0__["skipWaiting"])();
Object(workbox_core__WEBPACK_IMPORTED_MODULE_0__["clientsClaim"])();
Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_1__["precacheAndRoute"])(self.__WB_MANIFEST || []);
new _layer0_prefetch_sw__WEBPACK_IMPORTED_MODULE_2__["Prefetcher"]().route();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9jb3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BsYXllcjAvY29yZS9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9jb3JlL3JvdXRlci9DdXN0b21DYWNoZUtleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BsYXllcjAvY29yZS9yb3V0ZXIvR3JvdXBDb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbGF5ZXIwL2NvcmUvcm91dGVyL0dyb3Vwcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BsYXllcjAvcHJlZmV0Y2gvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9wcmVmZXRjaC9zdy9DaGFuZ2VNZXRob2RQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbGF5ZXIwL3ByZWZldGNoL3N3L0N1c3RvbUNhY2hlS2V5UGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9wcmVmZXRjaC9zdy9EZXZ0b29sc1BsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BsYXllcjAvcHJlZmV0Y2gvc3cvUHJlZmV0Y2hQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbGF5ZXIwL3ByZWZldGNoL3N3L1ByZWZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbGF5ZXIwL3ByZWZldGNoL3N3L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9wcmVmZXRjaC9zdy9sb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbGF5ZXIwL3ByZWZldGNoL3N3L21lc3NhZ2VCcm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGxheWVyMC9wcmVmZXRjaC9zdy9wcmVmZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvQ2FjaGVhYmxlUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9DYWNoZWFibGVSZXNwb25zZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvREJXcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL0RlZmVycmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kZWxldGVEYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9mZXRjaFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL3Jlc3VsdGluZ0NsaWVudEV4aXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NhY2hlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY2xpZW50c0NsYWltLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3NldENhY2hlTmFtZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvc2tpcFdhaXRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvdXRpbHMvcGx1Z2luVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vQ2FjaGVFeHBpcmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL0V4cGlyYXRpb25QbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvY3JlYXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jcmVhdGVIYW5kbGVyQm91bmRUb1VSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9nZXRDYWNoZUtleUZvclVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvbWF0Y2hQcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZUFuZFJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2FkZEZldGNoTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvY3JlYXRlQ2FjaGVLZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZGVsZXRlT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dldENhY2hlS2V5Rm9yVVJMLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByZWNhY2hlUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludENsZWFudXBEZXRhaWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50SW5zdGFsbERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9OYXZpZ2F0aW9uUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUmVnRXhwUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3NldENhdGNoSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9zZXREZWZhdWx0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVGaXJzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9DYWNoZU9ubHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvTmV0d29ya0ZpcnN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtPbmx5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0YWxlV2hpbGVSZXZhbGlkYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvdXRpbHMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N3L3NlcnZpY2Utd29ya2VyLmpzIl0sIm5hbWVzIjpbInNraXBXYWl0aW5nIiwiY2xpZW50c0NsYWltIiwicHJlY2FjaGVBbmRSb3V0ZSIsInNlbGYiLCJfX1dCX01BTklGRVNUIiwiUHJlZmV0Y2hlciIsInJvdXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQSxZQUFZO1FBQ1o7UUFDQTs7UUFFQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQzlHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QztBQUNGO0FBQ007QUFDRjtBQUNrQjtBQUMxQztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUY7Ozs7Ozs7Ozs7Ozs7QUNuQm5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUNqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNnQjtBQUNqRDtBQUNqQjtBQUNQLHVEQUF1RCxhQUFhLGtCQUFrQiw2RkFBYyxjQUFjO0FBQ2xIO0FBQ0E7QUFDQSxZQUFZLHFFQUFNO0FBQ2xCLFlBQVkscUVBQU07QUFDbEIsWUFBWSxxRUFBTTtBQUNsQjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLGdFQUFXO0FBQ1hDLGlFQUFZO0FBQ1pDLDJFQUFnQixDQUFDQyxJQUFJLENBQUNDLGFBQUwsSUFBc0IsRUFBdkIsQ0FBaEI7QUFFQSxJQUFJQyw4REFBSixHQUFpQkMsS0FBakIiLCJmaWxlIjoic3RhdGljL3NlcnZpY2Utd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gbm9vcCBmbnMgdG8gcHJldmVudCBydW50aW1lIGVycm9ycyBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbiBcdGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICgpIHt9O1xuIFx0XHRzZWxmLiRSZWZyZXNoU2lnJCA9IGZ1bmN0aW9uICgpIHtcbiBcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHR5cGUpIHtcbiBcdFx0XHRcdHJldHVybiB0eXBlO1xuIFx0XHRcdH07XG4gXHRcdH07XG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG5cbiBcdFx0ICAgICAgICB2YXIgaGFzUmVmcmVzaCA9IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmICEhc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQ7XG4gXHRcdCAgICAgICAgdmFyIGNsZWFudXAgPSBoYXNSZWZyZXNoXG4gXHRcdCAgICAgICAgICA/IHNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kKG1vZHVsZUlkKVxuIFx0XHQgICAgICAgICAgOiBmdW5jdGlvbigpIHt9O1xuIFx0XHQgICAgICAgIHRyeSB7XG4gXHRcdCAgICAgICAgXG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0ICAgICAgICB9IGZpbmFsbHkge1xuIFx0XHQgICAgICAgICAgY2xlYW51cCgpO1xuIFx0XHQgICAgICAgIH1cbiBcdFx0ICAgICAgICBcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3N3L3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIExheWVyMCBjb25maWd1cmF0aW9uIGZpbGUgbmFtZS5cbiAqL1xuZXhwb3J0cy5MQVlFUjBfQ09ORklHX0ZJTEUgPSAnbGF5ZXIwLmNvbmZpZy5qcyc7XG4vKipcbiAqIEluZGljYXRlIGFzc2V0IGZpbGVzIHRoYXQgbmVlZCB0byBiZSB1cGxvYWRlZCB1bmRlciBhIGRpZmZlcmVudFxuICogYnVja2V0IGtleS5cbiAqIEl0IGNvbnRhaW5zIHZhbHVlcyBsaWtlXG4gKiB7XG4gKiAgICcvcG9zdHMnID0+ICcvcG9zdHMvaW5kZXguaHRtbCdcbiAqIH1cbiAqL1xuZXhwb3J0cy5MQVlFUjBfQVNTRVRfQUxJQVNFU19GSUxFID0gJ2Fzc2V0LWFsaWFzZXMuanNvbic7XG4vKipcbiAqIEVudmlyb25tZW50IHZhcmlhYmxlcyB1c2VkIGJ5IExheWVyMC5cbiAqL1xuZXhwb3J0cy5MQVlFUjBfRU5WX1ZBUklBQkxFUyA9IHtcbiAgICAvKipcbiAgICAgKiBMYXllcjAgY29uZmlndXJhdGlvbiBlbnZpcm9ubWVudCB2YXJpYWJsZSBrZXkuXG4gICAgICovXG4gICAgY29uZmlnOiAnTEFZRVIwX0NPTkZJRycsXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgY29kZSBpcyBydW5uaW5nIGxvY2FsbHkgb3IgaW4gdGhlIGNsb3VkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVwbG95bWVudFR5cGU6ICdMQVlFUjBfREVQTE9ZTUVOVF9UWVBFJyxcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgTGF5ZXIwIGRldmVsb3BtZW50IHRlYW0gdG8gZWFzaWx5IG92ZXJyaWRlIExheWVyMCB2ZXJzaW9uXG4gICAgICogZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB2ZXJzaW9uT3ZlcnJpZGU6ICdMQVlFUjBfVkVSU0lPTl9PVkVSUklERScsXG59O1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBjb2RlIGlzIHJ1bm5pbmcgaW4gQVdTLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5MQVlFUjBfREVQTE9ZTUVOVF9UWVBFX0FXUyA9ICdBV1MnO1xuLyoqXG4gKiBQcmVmaXggb2YgYWxsIExheWVyMCBoZWFkZXJzLlxuICovXG5leHBvcnRzLkxBWUVSMF9IRUFERVJTX1BSRUZJWCA9ICd4LTAtJztcbi8qKlxuICogTWF4aW11bSBudW1iZXIgb2YgdXNlciBoZWFkZXJzIGFsbG93ZWQgYnkgTGF5ZXIwIHBsYXRmb3JtLlxuICpcbiAqIFdlIGxpbWl0IHRoZSByZXF1ZXN0IGFuZCByZXNwb25zZSBoZWFkZXJzIGFsbG93ZWQgdG8gNzAuIFRoaXMgaXMgZHVlIHRvIGEgbGltaXRhdGlvbiB0aGF0IGVkZ2UgaGFzXG4gKiB3aGljaCBhdCB0aGUgbW9tZW50IHN1cHBvcnRzIHVwIHRvIDk2IGhlYWRlcnMuIEVkZ2UgcHJvdmlkZXIgaXRzZWxmIG5lZWRzIHRvIHVzZSBzb21lIG9mIHRob3NlIGhlYWRlcnNcbiAqIHdpdGggdGhlIHJlbWFpbmRlciB1c2VkIGJ5IG91ciBlZGdlIGNvZGUuXG4gKlxuICogTk9URTogVGhpcyBjb25zdGFudCBtdXN0IGJlIGVxdWFsIG90IHRoZSBjb25zdGFudCBvZiB0aGUgc2FtZSBuYW1lIGRlZmluZWQgaW4gTGF5ZXIwIGJ1ZmZlciBwcm94eS5cbiAqIE5PVEU6IElmIHRoaXMgY29uc3RhbnQgaXMgdXBkYXRlZCB0aGVuIHRoZSBjb25zdGFudCBvZiB0aGUgc2FtZSBuYW1lIGhhcyB0byBiZSB1cGRhdGVkIGluIEBsYXllcjAvYnVpbGQtbGFtYmRhIG1vZHVsZS5cbiAqL1xuZXhwb3J0cy5MQVlFUjBfTUFYX1VTRVJfSEVBREVSU19BTExPV0VEID0gNzA7XG4vKipcbiAqIFN0YXR1cyBjb2RlIHJldHVybmVkIHdoZW4gdGhlcmUgYXJlIHRvbyBtYW55IHJlcXVlc3Qgb3IgcmVzcG9uc2UgaGVhZGVycy5cbiAqXG4gKiBNdXN0IGJlIGVxdWFsIHRvIEhlYWRlck92ZXJmbG93RXJyb3Igc3RhdHVzIGNvZGUgYXMgZGVmaW5lZCBpbiBidWlsZCBsYW1iZGEgYW5kIExheWVyMCBidWZmZXIgcHJveHkuXG4gKi9cbmV4cG9ydHMuTEFZRVIwX1RPT19NQU5ZX0hFQURFUlNfU1RBVFVTX0NPREUgPSA1NDI7XG4vKipcbiAqIFRoZSBzdGF0dXMgY29kZSByZXR1cm5lZCB3aGVuIHRoZSBsYXllcjBfcHJlZmV0Y2ggcXVlcnkgcGFyYW0gaXMgcHJlc2VudCBhbmQgYSByZXNwb25zZSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIGNhY2hlLlxuICovXG5leHBvcnRzLkxBWUVSMF9VTkNBQ0hFRF9QUkVGRVRDSF9TVEFUVVMgPSA0MTI7XG4vKipcbiAqIENETi1hcy1jb2RlIGNvbmZpZ3VyYXRpb24gYWN0aW9uc1xuICovXG5leHBvcnRzLkFDVElPTlMgPSB7XG4gICAgc2V0SGVhZGVyOiAnc2V0LWhlYWRlcicsXG4gICAgdXBkYXRlSGVhZGVyOiAndXBkYXRlLWhlYWRlcicsXG4gICAgcmVtb3ZlSGVhZGVyOiAncmVtb3ZlLWhlYWRlcicsXG4gICAgc3ludGhldGljUmVzOiAnc3ludGhldGljLXJlc3BvbnNlJyxcbiAgICB1cGRhdGVQYXRoOiAndXBkYXRlLXBhdGgnLFxuICAgIHByb3h5OiAncHJveHknLFxuICAgIGFkZENvb2tpZTogJ2FkZC1jb29raWUnLFxuICAgIHVwZGF0ZUNvb2tpZTogJ3VwZGF0ZS1jb29raWUnLFxuICAgIHJlbW92ZUNvb2tpZTogJ3JlbW92ZS1jb29raWUnLFxufTtcbi8qKlxuICogVGhlIGJhY2tlbmQgZm9yIGNsb3VkIGZ1bmN0aW9uc1xuICovXG5leHBvcnRzLkJBQ0tFTkRTID0ge1xuICAgIGpzOiAnX19qc19fJyxcbiAgICBzdGF0aWM6ICdfX3N0YXRpY19fJyxcbiAgICBwZXJtYW5lbnRTdGF0aWM6ICdfX3Blcm1hbmVudF9zdGF0aWNfXycsXG4gICAgaW1hZ2VPcHRpbWl6ZXI6ICdfX2ltYWdlX29wdGltaXplcl9fJyxcbn07XG4vKipcbiAqIFRoZSBob3N0bmFtZSB1c2VkIGZvciB0aGUgaW50ZXJuYWwgc2VydmljZSBydW5uaW5nIHRoZSB1c2VyJ3MgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydHMuSlNfQkFDS0VORF9IT1NUTkFNRSA9ICcxMjcuMC4wLjEnO1xuZXhwb3J0cy5IVFRQX01FVEhPRFMgPSB7XG4gICAgaGVhZDogJ2hlYWQnLFxuICAgIGdldDogJ2dldCcsXG4gICAgcG9zdDogJ3Bvc3QnLFxuICAgIGRlbGV0ZTogJ2RlbGV0ZScsXG4gICAgcHV0OiAncHV0JyxcbiAgICBwYXRjaDogJ3BhdGNoJyxcbiAgICBvcHRpb25zOiAnb3B0aW9ucycsXG59O1xuLyoqXG4gKiBDb21tb24gSFRUUCBoZWFkZXJzLlxuICovXG5leHBvcnRzLkhUVFBfSEVBREVSUyA9IHtcbiAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbicsXG4gICAgYWNjZXB0RW5jb2Rpbmc6ICdhY2NlcHQtZW5jb2RpbmcnLFxuICAgIGNhY2hlQ29udHJvbDogJ2NhY2hlLWNvbnRyb2wnLFxuICAgIGNvbnRlbnRFbmNvZGluZzogJ2NvbnRlbnQtZW5jb2RpbmcnLFxuICAgIGNvbnRlbnRMZW5ndGg6ICdjb250ZW50LWxlbmd0aCcsXG4gICAgY29udGVudFR5cGU6ICdjb250ZW50LXR5cGUnLFxuICAgIGNvb2tpZTogJ2Nvb2tpZScsXG4gICAgaG9zdDogJ2hvc3QnLFxuICAgIGxvY2F0aW9uOiAnbG9jYXRpb24nLFxuICAgIHNlcnZlclRpbWluZzogJ3NlcnZlci10aW1pbmcnLFxuICAgIHNldENvb2tpZTogJ3NldC1jb29raWUnLFxuICAgIHVzZXJBZ2VudDogJ3VzZXItYWdlbnQnLFxuICAgIHZhcnk6ICd2YXJ5JyxcbiAgICB4Rm9yd2FyZGVkRm9yOiAneC1mb3J3YXJkZWQtZm9yJyxcbiAgICB4UmVxdWVzdElkOiAneC1yZXF1ZXN0LWlkJyxcbiAgICB4U3dDYWNoZUNvbnRyb2w6ICd4LXN3LWNhY2hlLWNvbnRyb2wnLFxuICAgIHgwQnJvd3NlcjogJ3gtMC1icm93c2VyJyxcbiAgICB4MENhY2hlQ29udHJvbDogJ3gtMC1jYWNoZS1jb250cm9sJyxcbiAgICB4MENhY2hpbmdTdGF0dXM6ICd4LTAtY2FjaGluZy1zdGF0dXMnLFxuICAgIHgwQ2xpZW50SXA6ICd4LTAtY2xpZW50LWlwJyxcbiAgICB4MENvbXBvbmVudHM6ICd4LTAtY29tcG9uZW50cycsXG4gICAgeDBEZXN0aW5hdGlvbjogJ3gtMC1kZXN0aW5hdGlvbicsXG4gICAgeDBEZXZpY2U6ICd4LTAtZGV2aWNlJyxcbiAgICB4MERldmljZUlzQm90OiAneC0wLWRldmljZS1pcy1ib3QnLFxuICAgIHgwR2VvQ2l0eTogJ3gtMC1nZW8tY2l0eScsXG4gICAgeDBHZW9Db3VudHJ5Q29kZTogJ3gtMC1nZW8tY291bnRyeS1jb2RlJyxcbiAgICB4MEdlb0xhdGl0dWRlOiAneC0wLWdlby1sYXRpdHVkZScsXG4gICAgeDBHZW9Mb25naXR1ZGU6ICd4LTAtZ2VvLWxvbmdpdHVkZScsXG4gICAgeDBHZW9Qb3N0YWxDb2RlOiAneC0wLWdlby1wb3N0YWwtY29kZScsXG4gICAgeDBNYXRjaGVkUm91dGVzOiAneC0wLW1hdGNoZWQtcm91dGVzJyxcbiAgICB4MFByb3RvY29sOiAneC0wLXByb3RvY29sJyxcbiAgICB4MFJvdXRlOiAneC0wLXJvdXRlJyxcbiAgICB4MFN0YXR1czogJ3gtMC1zdGF0dXMnLFxuICAgIHgwU3Vycm9nYXRlS2V5OiAneC0wLXN1cnJvZ2F0ZS1rZXknLFxuICAgIHgwVDogJ3gtMC10JyxcbiAgICB4MFVzZXJUOiAneC0wLXVzZXItdCcsXG4gICAgeDBWZW5kb3I6ICd4LTAtdmVuZG9yJyxcbiAgICB4MFZlcnNpb246ICd4LTAtdmVyc2lvbicsXG59O1xuLyoqXG4gKiBWYWx1ZXMgZm9yIHgtMC1jYWNoaW5nLXN0YXR1c1xuICovXG5leHBvcnRzLkNBQ0hJTkdfU1RBVFVTID0ge1xuICAgIG9rOiAnb2snLFxuICAgIHByaXZhdGU6ICdwcml2YXRlJyxcbiAgICBtZXRob2Q6ICdtZXRob2QnLFxuICAgIGJvZHlUb29CaWc6ICdib2R5LXRvby1iaWcnLFxuICAgIGNvZGU6ICdjb2RlJyxcbiAgICBzZXRDb29raWU6ICdzZXQtY29va2llJyxcbiAgICBub01heEFnZTogJ25vLW1heC1hZ2UnLFxufTtcbmV4cG9ydHMuQ0FDSEVBQkxFX01FVEhPRFMgPSBuZXcgU2V0KFsnZ2V0JywgJ2hlYWQnXSk7XG4vKipcbiAqIFdoZW4gcHJlc2VudCwgdGhpcyBxdWVyeSBwYXJhbWV0ZXIgd2lsbCBjYXVzZSBMYXllcjAgdG8gcmV0dXJuIGEgNDEyIHN0YXR1c1xuICogaWYgYSByZXNwb25zZSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIGNhY2hlLlxuICovXG5leHBvcnRzLlRIUk9UVExFRF9RVUVSWV9QQVJBTSA9ICdsYXllcjBfcHJlZmV0Y2gnO1xuLyoqXG4gKiBTYW1lIHZhbHVlIGFzIGFib3ZlIGJ1dCBERVBSRUNBVEVELlxuICovXG5leHBvcnRzLlBSRUZFVENIX1FVRVJZX1BBUkFNID0gZXhwb3J0cy5USFJPVFRMRURfUVVFUllfUEFSQU07XG4vKipcbiBMYWJlbHMgdGhlIHJlcXVlc3Qgc28gdGhhdCBkZXZ0b29scyB3aWxsIGRpc3BsYXkgYXMgcHJlZmV0Y2hlZFxuICovXG5leHBvcnRzLkRFVlRPT0xTX1BSRUZFVENIX1FVRVJZX1BBUkFNID0gJ2xheWVyMF9kdF9wZic7XG4vKipcbiAqIFRoZSBuYW1lIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXIgdXNlZCB0byBkZXRlY3QgSEVBRCByZXF1ZXN0cy5cbiAqL1xuZXhwb3J0cy5IRUFEX1FVRVJZX1BBUkFNID0gJ2xheWVyMF9oZWFkJztcbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlciB1c2VkIGZvciB0aGUgYm9keSBvZiBQT1NUIHJlcXVlc3RzLCB3aGljaCBpcyB1c2VkIGZvciB0aGUgY2FjaGUga2V5XG4gKi9cbmV4cG9ydHMuUE9TVF9CT0RZX1FVRVJZX1BBUkFNID0gJ3ByZWZfbGF5ZXIwX2JvZHknO1xuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgcXVlcnkgcGFyYW1ldGVyIHVzZWQgZm9yIHRoZSBtZXRob2Qgb2YgcmVxdWVzdHMsIHdoaWNoIGlzIHVzZWQgZm9yIHRoZSBjYWNoZSBrZXlcbiAqL1xuZXhwb3J0cy5NRVRIT0RfUVVFUllfUEFSQU0gPSAncHJlZl9sYXllcjBfbWV0aG9kJztcbi8qKlxuICogUm91dGUgR3JvdXAgbmFtZSwgd2hpY2ggaXMgdXNlZCBpbiByb3V0ZXIgZm9yIGZhbGxiYWNrIHJvdXRlc1xuICovXG5leHBvcnRzLlJPVVRFU19GQUxMQkFDSyA9ICdmYWxsYmFjayc7XG4vKipcbiAqIFJvdXRlIEdyb3VwIG5hbWUsIHdoaWNoIGlzIHVzZWQgaW4gcm91dGVyIGZvciBlcnJvciBwYWdlIHJvdXRlc1xuICovXG5leHBvcnRzLlJPVVRFU19DQVRDSF9HUk9VUCA9ICdjYXRjaCc7XG4vKipcbiAqIFRoZSBwYXRoIGZvciB0aGUgYnVpbHQtaW4gaW1hZ2Ugb3B0aW1pemVyLlxuICovXG5leHBvcnRzLkxBWUVSMF9JTUFHRV9PUFRJTUlaRVJfUEFUSCA9ICcvX19sYXllcjBfaW1hZ2Vfb3B0aW1pemVyJztcbiIsIi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIHBhaXJTcGxpdFJlZ0V4cCA9IC87ICovO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQocGFpclNwbGl0UmVnRXhwKTtcbiAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcblxuICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFfaWR4KS50cmltKClcbiAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG5cbiAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuXG4gICAgaWYgKGlzTmFOKG1heEFnZSkgfHwgIWlzRmluaXRlKG1heEFnZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZCcpXG4gICAgfVxuXG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHcm91cHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Hcm91cHNcIikpO1xuY29uc3QgY29va2llXzEgPSByZXF1aXJlKFwiY29va2llXCIpO1xuZXhwb3J0cy5DVVNUT01fQ0FDSEVfS0VZX0FDVElPTlMgPSB7XG4gICAgYmxhY2tsaXN0QWxsOiAnYmxhY2tsaXN0LWFsbC1xdWVyeS1wYXJhbWV0ZXJzJyxcbiAgICBibGFja2xpc3RTb21lOiAnYmxhY2tsaXN0LXNvbWUtcXVlcnktcGFyYW1ldGVycycsXG4gICAgd2hpdGVsaXN0U29tZTogJ3doaXRlbGlzdC1zb21lLXF1ZXJ5LXBhcmFtZXRlcnMnLFxuICAgIGFkZFZhbHVlOiAnYWRkLXZhbHVlJyxcbiAgICByZW1vdmVNZXRob2Q6ICdyZW1vdmUtbWV0aG9kJyxcbiAgICByZW1vdmVCb2R5OiAncmVtb3ZlLWJvZHknLFxufTtcbi8qKlxuICogQWxsb3dzIHlvdSB0byBzcGxpdCBvciBub3JtYWxpemUgdGhlIGNhY2hlIHNwYWNlIGZvciBhIGdpdmVuIHJvdXRlLiBDb21tb24gdXNlIGNhc2VzIGluY2x1ZGU6XG4gKlxuICogLSBzZXJ2aW5nIG11bHRpcGxlIHZhcmlhbnRzIG9mIHRoZSBzYW1lIFVSTCBiYXNlZCBvbiBhIGN1cnJlbmN5IGFuZC9vciBsYW5ndWFnZSBjb29raWUuXG4gKiAtIGNhY2hpbmcgZGlmZmVyZW50IHJlc3BvbnNlcyBiYXNlZCBvbiBkZXZpY2UgdHlwZVxuICogLSBpZ25vcmluZyBhbGwgYnV0IGEgc3BlY2lmaWMgc2V0IG9mIHF1ZXJ5IHBhcmFtZXRlcnMgd2hlbiBsb29raW5nIHVwIGEgcmVzcG9uc2UgZnJvbSB0aGUgY2FjaGUuXG4gKlxuICogKipFeGFtcGxlKipcbiAqXG4gKiBgYGBqc1xuICogIGltcG9ydCB7IFJvdXRlciwgQ3VzdG9tQ2FjaGVLZXkgfSBmcm9tICdAbGF5ZXIwL2NvcmUvcm91dGVyJ1xuICpcbiAqICBuZXcgUm91dGVyKClcbiAqICAgIC5tYXRjaCgnL3NvbWUtcGF0aCcsICh7IGNhY2hlIH0pID0+IHtcbiAqICAgICAgY2FjaGUoe1xuICogICAgICAgIGtleTogbmV3IEN1c3RvbUNhY2hlS2V5KClcbiAqICAgICAgICAgIC5leGNsdWRlQWxsUXVlcnlQYXJhbWV0ZXJzRXhjZXB0KCdjb2xvcicsICdzaXplJylcbiAqICAgICAgICAgIC5hZGRDb29raWUoJ2N1cnJlbmN5JylcbiAqICAgICAgICAgIC5hZGRDb29raWUoJ2xvY2F0aW9uJywgY29va2llID0+IHtcbiAqICAgICAgICAgICAgY29va2llLmdyb3VwKCduYScpLmJ5UGF0dGVybigndXN8Y2EnKVxuICogICAgICAgICAgICBjb29raWUuZ3JvdXAoJ2V1cicpLmJ5UGF0dGVybignZGV8ZnJ8ZWUnKVxuICogICAgICAgICAgfSksXG4gKiAgICAgICAgZWRnZToge1xuICogICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MFxuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqICAgIH0pXG4gKiBgYGBcbiAqL1xuY2xhc3MgQ3VzdG9tQ2FjaGVLZXkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGNhY2hlIGtleS5cbiAgICAgKi9cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5ID0gbmV3IEN1c3RvbUNhY2hlS2V5KCk7XG4gICAgICAgIG5ld0tleS5hY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBuZXdLZXkuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4Y2x1ZGVzIHRoZSBlbnRpcmUgcXVlcnkgc3RyaW5nIGZyb20gdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcmV0dXJuIHtDdXN0b21DYWNoZUtleX0gQSBzZWxmLXJlZmVyZW5jZSwgc3VpdGFibGUgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGV4Y2x1ZGVBbGxRdWVyeVBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnB1c2goeyBhY3Rpb246IGV4cG9ydHMuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLmJsYWNrbGlzdEFsbCB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goKGtleSwgc3JjUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAga2V5LnF1ZXJ5ID0ge307XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhjbHVkZXMgdGhlIHByb3ZpZGVkIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSB0aGUgY2FjaGUga2V5LiAgQWxsIG90aGVyIHBhcmFtZXRlcnNcbiAgICAgKiB3aWxsIHN0aWxsIGJlIHBhcnQgb2YgdGhlIGNhY2hlIGtleS4gV2UgYWxzbyByZWZlciB0byB0aGlzIGFzIFwiYmxhY2tsaXN0aW5nXCIgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0gbmFtZXMgVGhlIG5hbWVzIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJsYWNrbGlzdFxuICAgICAqIEByZXR1cm4ge0N1c3RvbUNhY2hlS2V5fSBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgZXhjbHVkZVF1ZXJ5UGFyYW1ldGVycyguLi5uYW1lcykge1xuICAgICAgICB0aGlzLmNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogZXhwb3J0cy5DVVNUT01fQ0FDSEVfS0VZX0FDVElPTlMuYmxhY2tsaXN0U29tZSxcbiAgICAgICAgICAgIG5hbWVzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goKGtleSwgc3JjUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXkucXVlcnlbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhjbHVkZXMgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgZXhjZXB0IHRob3NlIHByb3ZpZGVkIGZyb20gdGhlIGNhY2hlIGtleS4gIFdlIGFsc28gcmVmZXIgdG9cbiAgICAgKiB0aGlzIGFzIFwid2hpdGVsaXN0aW5nXCIgcXVlcnkgcGFyYW1ldGVycy4gIFdlIHJlY29tbWVuZCB1c2luZyB0aGlzIG1ldGhvZCBvdmVyIGBleGNsdWRlUXVlcnlQYXJhbWV0ZXJzYFxuICAgICAqIGFzIGl0J3MgZGlmZmljdWx0IHRvIGtub3cgYWxsIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHlvdXIgYXBwbGljYXRpb24gbWlnaHQgcmVjZWl2ZSBhbmQgdW5leHBlY3RlZFxuICAgICAqIHF1ZXJ5IHBhcmFtZXRlcnMgY2FuIGxlYWQgdG8gc2lnbmlmaWNhbnRseSBsb3dlciBjYWNoZSBoaXQgcmF0ZXMuXG4gICAgICogQHBhcmFtIG5hbWVzIFRoZSBuYW1lcyBvZiB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byB3aGl0ZWxpc3RcbiAgICAgKiBAcmV0dXJuIHtDdXN0b21DYWNoZUtleX0gQSBzZWxmLXJlZmVyZW5jZSwgc3VpdGFibGUgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGV4Y2x1ZGVBbGxRdWVyeVBhcmFtZXRlcnNFeGNlcHQoLi4ubmFtZXMpIHtcbiAgICAgICAgdGhpcy5jb25maWcucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGV4cG9ydHMuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLndoaXRlbGlzdFNvbWUsXG4gICAgICAgICAgICBuYW1lcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKChrZXksIHNyY1JlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcCA9IG5ldyBTZXQobmFtZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBrZXkucXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvS2VlcC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleS5xdWVyeVtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJlcXVlc3QgaGVhZGVyIHRvIHRoZSBjYWNoZSBrZXkuXG4gICAgICogVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHNlcnZpY2Ugd29ya2VyIGNhY2hlLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0IGhlYWRlclxuICAgICAqIEBwYXJhbSBjcmVhdGVHcm91cHMgQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBgR3JvdXBzYCBpbnN0YW5jZSBhbmQgY2FsbHMgYGdyb3Vwcy5ncm91cChuYW1lKWAgdG8gZ3JvdXAgbXVsdGlwbGUgdmFsdWVzIGludG8gYSBzaW5nbGUgY2FjaGUga2V5IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0N1c3RvbUNhY2hlS2V5fSBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkSGVhZGVyKG5hbWUsIGNyZWF0ZUdyb3Vwcykge1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaCgoa2V5LCBzcmNSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gc3JjUmVxdWVzdC5oZWFkZXJzW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjcmVhdGVHcm91cHMpIHtcbiAgICAgICAgICAgICAgICBrZXkuaGVhZGVyc1tuYW1lXSA9IHRoaXMuY3JlYXRlR3JvdXBlZFZhbHVlKGNyZWF0ZUdyb3VwcywgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleS5oZWFkZXJzW25hbWVdID0gdmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVmFsdWUoYFxcJHtyZXE6JHtuYW1lfX1gLCBjcmVhdGVHcm91cHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBIVFRQIG1ldGhvZCBmcm9tIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHJldHVybiBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcmVtb3ZlTWV0aG9kKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaCgoa2V5LCBzcmNSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBrZXkubWV0aG9kID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGV4cG9ydHMuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLnJlbW92ZU1ldGhvZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBIVFRQIGJvZHkgZnJvbSB0aGUgY2FjaGUga2V5LlxuICAgICAqIEByZXR1cm4gQSBzZWxmLXJlZmVyZW5jZSwgc3VpdGFibGUgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHJlbW92ZUJvZHkoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKChrZXksIHNyY1JlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIGtleS5ib2R5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGV4cG9ydHMuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLnJlbW92ZUJvZHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGtleSB2YWx1ZSBmb3IgYSBoZWFkZXIgb3IgY29va2llIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgZ3JvdXAgY3JlYXRvclxuICAgICAqIEBwYXJhbSBjcmVhdGVHcm91cHMgdGhlIEdyb3VwQ3JlYXRvclxuICAgICAqIEBwYXJhbSBzcmNWYWx1ZXMgVGhlIHZhbHVlcyBvZiB0aGUgaGVhZGVyIG9yIGNvb2tpZSBpbiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGNyZWF0ZUdyb3VwZWRWYWx1ZShjcmVhdGVHcm91cHMsIHNyY1ZhbHVlcykge1xuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgR3JvdXBzXzEuZGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY3JlYXRlR3JvdXBzKGdyb3Vwcyk7XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nR3JvdXAgPSB0aGlzLmZpbmRNYXRjaGluZ0dyb3VwKGdyb3Vwcywgc3JjVmFsdWVzKTtcbiAgICAgICAgaWYgKG1hdGNoaW5nR3JvdXApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hdGNoaW5nR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGRvZXNuJ3QgbWF0Y2ggYW55IGdyb3VwLCB1c2UgdGhlIHZhbHVlIGl0c2VsZlxuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uc3JjVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmaW5kTWF0Y2hpbmdHcm91cChncm91cHMsIHNyY1ZhbHVlcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGZvciAobGV0IGdyb3VwIG9mIGdyb3Vwcy5ncm91cHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHNyY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IGdyb3VwLnBhdHRlcm4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXAubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoYXQgcmVxdWVzdHMgc2hvdWxkIGJlIGNhY2hlZCBvbiBhIHBlci1kZXZpY2UgYmFzaXMuXG4gICAgICogVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHNlcnZpY2Ugd29ya2VyIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge0N1c3RvbUNhY2hlS2V5fSBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkRGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRIZWFkZXIoJ3gtMC1kZXZpY2UnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoYXQgcmVxdWVzdHMgc2hvdWxkIGJlIGNhY2hlZCBvbiBhIHBlci12ZW5kb3IgYmFzaXMuXG4gICAgICogVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHNlcnZpY2Ugd29ya2VyIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge0N1c3RvbUNhY2hlS2V5fSBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkVmVuZG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRIZWFkZXIoJ3gtMC12ZW5kb3InKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoYXQgcmVxdWVzdHMgc2hvdWxkIGJlIGNhY2hlZCBkaWZmZXJlbnRseSBmb3IgYm90cy5cbiAgICAgKiBUaGlzIHdpbGwgaGF2ZSBubyBlZmZlY3Qgb24gc2VydmljZSB3b3JrZXIgY2FjaGUuXG4gICAgICogQHJldHVybiB7Q3VzdG9tQ2FjaGVLZXl9IEEgc2VsZi1yZWZlcmVuY2UsIHN1aXRhYmxlIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRJc0JvdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSGVhZGVyKCd4LTAtZGV2aWNlLWlzLWJvdCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhhdCByZXF1ZXN0cyBzaG91bGQgYmUgY2FjaGVkIG9uIGEgcGVyLWJyb3dzZXIgYmFzaXMuXG4gICAgICogVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHNlcnZpY2Ugd29ya2VyIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge0N1c3RvbUNhY2hlS2V5fSBBIHNlbGYtcmVmZXJlbmNlLCBzdWl0YWJsZSBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkQnJvd3NlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSGVhZGVyKCd4LTAtYnJvd3NlcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29va2llIHRvIHRoZSBjYWNoZSBrZXkuXG4gICAgICogVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHNlcnZpY2Ugd29ya2VyIGNhY2hlLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBAcGFyYW0gY3JlYXRlR3JvdXBzIEFuIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIGBHcm91cHNgIGluc3RhbmNlIGFuZCBjYWxscyBgZ3JvdXBzLmdyb3VwKG5hbWUpYCB0byBncm91cCBtdWx0aXBsZSB2YWx1ZXMgaW50byBhIHNpbmdsZSBjYWNoZSBrZXkgY29tcG9uZW50XG4gICAgICogQHJldHVybiB7Q3VzdG9tQ2FjaGVLZXl9IEEgc2VsZi1yZWZlcmVuY2UsIHN1aXRhYmxlIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRDb29raWUobmFtZSwgY3JlYXRlR3JvdXBzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKChrZXksIHNyY1JlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb29raWVIZWFkZXIgPSBzcmNSZXF1ZXN0LmhlYWRlcnMuY29va2llIHx8ICcnO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29va2llSGVhZGVyKSkge1xuICAgICAgICAgICAgICAgIC8vIEJhc2VkIG9uIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2MjY1I3NlY3Rpb24tNS40IHdlIHNob3VsZCBvbmx5IGdldCBhIHNpbmdsZSBjb29raWUgaGVhZGVyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZ2V0IG1vcmUgdGhhbiBvbmUsIHdlLCBqdXN0IGpvaW4gdGhlbSBpbnRvIGEgc2luZ2xlIHBhcnNlYWJsZSBjb29raWUgdmFsdWUgaW4gY2FzZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gZGVjaWRlcyB0byByZWFkIHRoZW0gYWxsXG4gICAgICAgICAgICAgICAgY29va2llSGVhZGVyID0gY29va2llSGVhZGVyLmpvaW4oJzsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZV8xLnBhcnNlKGNvb2tpZUhlYWRlcik7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvb2tpZVtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjcmVhdGVHcm91cHMpIHtcbiAgICAgICAgICAgICAgICBrZXkuY29va2llc1tuYW1lXSA9IHRoaXMuY3JlYXRlR3JvdXBlZFZhbHVlKGNyZWF0ZUdyb3VwcywgW3ZhbHVlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkuY29va2llc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVmFsdWUoYFxcJHtyZXE6Y29va2llOiR7bmFtZX19YCwgY3JlYXRlR3JvdXBzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtDdXN0b21DYWNoZUtleX0gQSBzZWxmLXJlZmVyZW5jZSwgc3VpdGFibGUgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZFZhbHVlKHZhbHVlLCBjcmVhdGVHcm91cHMpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBleHBvcnRzLkNVU1RPTV9DQUNIRV9LRVlfQUNUSU9OUy5hZGRWYWx1ZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoY3JlYXRlR3JvdXBzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBHcm91cHNfMS5kZWZhdWx0KCk7XG4gICAgICAgICAgICBjcmVhdGVHcm91cHMoZ3JvdXBzKTtcbiAgICAgICAgICAgIGFjdGlvbi5ncm91cHMgPSBncm91cHMudG9KU09OKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWcucHVzaChhY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3VzdG9tQ2FjaGVLZXk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEdyb3VwQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGJ5UGF0dGVybihwYXR0ZXJuKSB7XG4gICAgICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYnlQYXR0ZXJuIGlzIHJlcXVpcmVkIGZvciBncm91cCAnICsgdGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBlZFZhbHVlOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBtYXRjaFJlZ2V4OiB0aGlzLnBhdHRlcm4uc291cmNlLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdyb3VwQ29uZmlnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHcm91cENvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dyb3VwQ29uZmlnXCIpKTtcbmNsYXNzIEdyb3VwcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMubmFtZSA9IG51bGw7XG4gICAgfVxuICAgIGdyb3VwKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXBDb25maWdfMS5kZWZhdWx0KG5hbWUpO1xuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5tYXAocCA9PiBwLnRvSlNPTigpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBHcm91cHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIHByZWZldGNoIGNhY2hlLlxuICpcbiAqIERlZmF1bHRzIHRvIGBwcmVmZXRjaGAuXG4gKi9cbmV4cG9ydHMuQ0FDSEVfTkFNRSA9IHByb2Nlc3MuZW52LkxBWUVSMF9QUkVGRVRDSF9DQUNIRV9OQU1FIHx8ICdwcmVmZXRjaCc7XG4vKipcbiAqIFRoZSBoZWFkZXIgdGhhdCBsaXN0cyB0aGUgdXJscyB0aGF0IHdlcmUgZmV0Y2hlZCBmcm9tIGJhY2tlbmRzIGR1cmluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAqL1xuZXhwb3J0cy5CQUNLRU5EX1JFUVVFU1RTX1JFU1BPTlNFX0hFQURFUl9OQU1FID0gJ3gtMC11cHN0cmVhbS1yZXF1ZXN0cyc7XG4vKipcbiAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJlZmV0Y2ggaGVhZGVyLiBEZWZhdWx0cyB0byBgMWAuXG4gKi9cbmV4cG9ydHMuUFJFRkVUQ0hfSEVBREVSX1ZBTFVFID0gcHJvY2Vzcy5lbnYuTEFZRVIwX1BSRUZFVENIX0hFQURFUl9WQUxVRSB8fCAnMSc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIkBsYXllcjAvY29yZS9jb25zdGFudHNcIik7XG4vKipcbiAqIFdvcmtib3ggb25seSBhbGxvd3MgR0VUIHJlcXVlc3RzIHRvIGJlIGNhY2hlZCBvdXQtb2YtdGhlLWJveCwgc28gdGhpcyBwbHVnaW5cbiAqIGFsbG93cyBmb3IgY2hhbmdpbmcgdGhlIG1ldGhvZCBvZiBhIHJlcXVlc3Qgc28gdGhhdCBpdCBjYW4gYmUgY2FjaGVkLlxuICovXG5jbGFzcyBDaGFuZ2VNZXRob2RQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHVybHMpIHtcbiAgICAgICAgdGhpcy51cmxzID0gdXJscztcbiAgICB9XG4gICAgdXJsTWF0Y2hlcyh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJscy5zb21lKHRlc3RVcmwgPT4gdGVzdFVybC50ZXN0KHVybCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXb3JrYm94IHJlcXVpcmVzIGNhY2hlIGtleXMgdG8gYmUgR0VUIG1ldGhvZCwgc28gdGhpcyBmb3JjZXMgdGhlIG1ldGhvZCB3aGVuIGl0IGlzIGRldGVybWluZWRcbiAgICAgKiB0aGF0IHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB1c2VkLlxuICAgICAqIElmIHRoZSByZXF1ZXN0IGhhcyBhIGJvZHksIHRoZSBib2R5IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFVSTCBmb3IgdGhlIGNhY2hlIGtleVxuICAgICAqIHVzaW5nIHRoZSBQT1NUX0JPRFlfUVVFUllfUEFSQU0uXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVLZXlXaWxsQmVVc2VkKHsgcmVxdWVzdCB9KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBpZiAodGhpcy51cmxNYXRjaGVzKHVybC5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBib2R5ID0gYXdhaXQgcmVxdWVzdC5jbG9uZSgpLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHlQYXJhbSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KGNvbnN0YW50c18xLlBPU1RfQk9EWV9RVUVSWV9QQVJBTSk7XG4gICAgICAgICAgICBpZiAoIWJvZHlQYXJhbSAmJiBib2R5KSB7XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoY29uc3RhbnRzXzEuUE9TVF9CT0RZX1FVRVJZX1BBUkFNLCBlbmNvZGVVUklDb21wb25lbnQoYm9keSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0V2lsbEZldGNoKHsgcmVxdWVzdCB9KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBpZiAodGhpcy51cmxNYXRjaGVzKHVybC5wYXRobmFtZSkgJiYgcmVxdWVzdC5tZXRob2QudG9VcHBlckNhc2UoKSAhPT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIG5vdCBhIEdFVCwgdGhlbiBpdCdzIG9rIHRvIG1vZGlmeSB0aGUgcmVxdWVzdCBhbmQgYnVtcFxuICAgICAgICAgICAgLy8gdGhlIHByaW9yaXR5IHNpbmNlIHRoaXMgbWVhbnMgaXQgaXMgdGhlIHJlYWwgKG5vbi1wcmVmZXRjaCkgcmVxdWVzdCAoYVxuICAgICAgICAgICAgLy8gcHJlZmV0Y2ggcmVxdWVzdCB3aWxsIG5vdCBjb21lIGluIGFzIGFueXRoaW5nIGJ1dCBhIEdFVClcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmNsb25lKCkudGV4dCgpO1xuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoY29uc3RhbnRzXzEuUE9TVF9CT0RZX1FVRVJZX1BBUkFNLCBib2R5KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVxdWVzdCh1cmwudG9TdHJpbmcoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogcmVxdWVzdC5yZWRpcmVjdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENoYW5nZU1ldGhvZFBsdWdpbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3VzdG9tQ2FjaGVLZXlfMSA9IHJlcXVpcmUoXCJAbGF5ZXIwL2NvcmUvcm91dGVyL0N1c3RvbUNhY2hlS2V5XCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiQGxheWVyMC9jb3JlL2NvbnN0YW50c1wiKTtcbmNsYXNzIEN1c3RvbUNhY2hlS2V5UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmxzLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHVybHM7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICB1cmxNYXRjaGVzKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS50ZXN0KHVybCk7XG4gICAgfVxuICAgIGFzeW5jIGNhY2hlS2V5V2lsbEJlVXNlZCh7IHJlcXVlc3QgfSkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgaWYgKHRoaXMudXJsTWF0Y2hlcyh1cmwucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZvckVhY2goY29uZiA9PiB0aGlzLmhhbmRsZUtleUNvbmZpZyh1cmwsIGNvbmYpKTtcbiAgICAgICAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG4gICAgaGFuZGxlS2V5Q29uZmlnKHVybCwgY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUtleXMgPSBbXTtcbiAgICAgICAgc3dpdGNoIChjb25maWcuYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIEN1c3RvbUNhY2hlS2V5XzEuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLmJsYWNrbGlzdEFsbDpcbiAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEN1c3RvbUNhY2hlS2V5XzEuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLmJsYWNrbGlzdFNvbWU6XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubmFtZXMgJiYgY29uZmlnLm5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEN1c3RvbUNhY2hlS2V5XzEuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLndoaXRlbGlzdFNvbWU6XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubmFtZXMgJiYgIWNvbmZpZy5uYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDdXN0b21DYWNoZUtleV8xLkNVU1RPTV9DQUNIRV9LRVlfQUNUSU9OUy5yZW1vdmVCb2R5OlxuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKGNvbnN0YW50c18xLlBPU1RfQk9EWV9RVUVSWV9QQVJBTSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEN1c3RvbUNhY2hlS2V5XzEuQ1VTVE9NX0NBQ0hFX0tFWV9BQ1RJT05TLnJlbW92ZU1ldGhvZDpcbiAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShjb25zdGFudHNfMS5NRVRIT0RfUVVFUllfUEFSQU0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUtleXMuZm9yRWFjaChrZXkgPT4gdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoa2V5KSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3VzdG9tQ2FjaGVLZXlQbHVnaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByZWZldGNoUGx1Z2luXzEgPSByZXF1aXJlKFwiLi9QcmVmZXRjaFBsdWdpblwiKTtcbi8qKlxuICogVGltZSBhZnRlciB3aGljaCB3ZSBjbGVhciBhIGdpdmVuIHJlcXVlc3QgbWV0YWRhdGEgZnJvbSBtZW1vcnkuXG4gKiBUaGlzIG11c3QgYmUgYWJvdmUgdXN1YWwgaHR0cCB0aW1lb3V0cyB0byBiZSBzdXJlIHRoZSByZXF1ZXN0IGlzIGNvbXBsZXRlZC5cbiAqL1xuY29uc3QgQ1VSUkVOVF9SRVFVRVNUX01BUF9DTEVBTlVQX0RFTEFZID0gMTIwMDAwO1xuY2xhc3MgRGV2dG9vbHNQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHsgb25SZXNwb25zZSwgcm91dGVDb25maWcsIGlzRW5hYmxlZEZuLCB9KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzID0ge307XG4gICAgICAgIHRoaXMub25SZXNwb25zZSA9IG9uUmVzcG9uc2U7XG4gICAgICAgIHRoaXMucm91dGVDb25maWcgPSByb3V0ZUNvbmZpZztcbiAgICAgICAgdGhpcy5pc0VuYWJsZWRGbiA9IGlzRW5hYmxlZEZuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgYSByZXF1ZXN0IHRvIGJlIHVzZWQgYnkgc3Vic2VxdWVudCBwbHVnaW4gc3RlcHNcbiAgICAgKlxuICAgICAqIElNUE9SVEFOVCBXZSBkbyAqKm5vdCoqIHVzZSBhIGN1c3RvbSBoZWFkZXIgdG8gc3RvcmUgdGhlIG1ldGFkYXRhOiBhIGN1c3RvbSBoZWFkZXIgbGVhZHNcbiAgICAgKiB0byBDT1JTIHByZS1mbGlnaHQgcmVxdWVzdHMgd2hlbiB1c2luZyBjYWNoZSBvbiBhIGRpZmZlcmVudCBvcmlnaW4sIGFuZCB0aG9zZSB3b3VsZCBsaWtlbHlcbiAgICAgKiByZWplY3Qgb3VyIGhlYWRlci5cbiAgICAgKiAobW9yZSBpbmZvIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQ09SUyNQcmVmbGlnaHRlZF9yZXF1ZXN0cylcbiAgICAgKlxuICAgICAqIFVuZm9ydHVuYXRlbHksIHRoZXJlIGRvZXMgbm90IHNlZW0gdG8gYmUgYW5vdGhlciB3YXkgdG8gKG9yIGlmIHRoZXJlIGlzLCBmZWVsIGZyZWUgdG8gZml4IHRoaXMpOlxuICAgICAqIC0gc3RvcmUgaW5mb3JtYXRpb24gb24gdGhlIHJlcXVlc3QgaW5zdGFuY2UgdGhhdCB3ZSBiZSBwYXNzZWQgYWxvbmcgdG8gc3Vic2VxdWVudCBzdGVwc1xuICAgICAqIC0gaWRlbnRpZnkgYSByZXF1ZXN0IHVuaXF1ZWx5IHdpdGggc29tZSBzb3J0IG9mIGludGVybmFsIGlkXG4gICAgICpcbiAgICAgKiBGb3Igbm93LCB0aGUgc29sdXRpb24gaXMgdG8gdXNlIHRoZSBub3JtYWxpemVkIGNhY2hlIGtleSB0byBpZGVudGlmeSBlYWNoIHJlcXVlc3QgXCJ1bmlxdWVseVwiLFxuICAgICAqIGFsdGhvdWdoIHRoYXQgd291bGQgbGVhZCB0byBpbmNvbnNpc3RlbnQgcmVzdWx0cyBpZiBhIHNhbWUgcmVxdWVzdCBoYXBwZW5zIG11bHRpcGxlIHRpbWUgY29uY3VycmVudGx5LlxuICAgICAqIEl0IGFsc28gYWRkcyBvdmVyaGVhZCwgZXNwZWNpYWxseSBmb3IgUE9TVCBncmFwaHFsIHF1ZXJ5IHdoaWNoIHNlcmlhbGl6ZXMgdGhlIGJvZHkuXG4gICAgICpcbiAgICAgKiBBZnRlciBDVVJSRU5UX1JFUVVFU1RfTUFQX0NMRUFOVVBfREVMQVksIHRoZSBtZXRhZGF0YSBpcyBjbGVhcmVkIHRvIGF2b2lkIGEgbWVtb3J5IGxlYWsuXG4gICAgICogV2UgZG9uJ3QgY2xlYXIgZXhwbGljaXRseSBmcm9tIGNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZC9mZXRjaERpZFN1Y2NlZWQsIGFzIGl0IHZlcnkgY29tcGxleCAoaW1wb3NzaWJsZT8pIHRvIGRvIGl0IHJpZ2h0OlxuICAgICAqIC0gd2Ugd291bGQgbmVlZCBhIGNvdW50ZXIgb24gdGhlIGN1cnJlbnQgcmVxdWVzdHMgdG8gYmUgc3VyZSB0byBub3QgY2xlYXIgdGhlIG1ldGFkYXRhIGZyb20gY29uY3VycmVudCBlcXVpdmFsZW50IHJlcXVlc3RcbiAgICAgKiAtIGluY3JlbWVudGluZy9kZWNyZW1lbnRpbmcgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGluIGFkdmFuY2UgdGhyb3VnaCB3aGljaFxuICAgICAqICAgcGx1Z2luIGZ1bmN0aW9ucyB0aGUgcmVxdWVzdCB3aWxsIGdvIHRocm91Z2gsIHdoaWNoIGlzIHRoZSBmaXJzdCBhbmQgd2hpY2hcbiAgICAgKiAgIGlzIHRoZSBsYXN0LiBXZSBjb3VsZCBtYWtlIGFzc3VtcHRpb25zIGJ1dCB0aGF0IHdvdWxkIGxlYWQgdG8gZnJhZ2lsaXR5LlxuICAgICAqL1xuICAgIGFzeW5jIHNhdmVSZXF1ZXN0TWV0YWRhdGEocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9IGF3YWl0IFByZWZldGNoUGx1Z2luXzEubm9ybWFsaXplUmVxdWVzdFVybEZvckNhY2hlKHJlcXVlc3QpO1xuICAgICAgICBpZiAoKF9hID0gdGhpcy5jdXJyZW50UmVxdWVzdHNbbm9ybWFsaXplZFVybF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGVhbnVwVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFJlcXVlc3RzW25vcm1hbGl6ZWRVcmxdLmNsZWFudXBUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRSZXF1ZXN0c1tub3JtYWxpemVkVXJsXSA9IHtcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgLi4uKF9iID0gdGhpcy5jdXJyZW50UmVxdWVzdHNbbm9ybWFsaXplZFVybF0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAuLi5tZXRhZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhbnVwVGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFJlcXVlc3RzW25vcm1hbGl6ZWRVcmxdO1xuICAgICAgICAgICAgfSwgQ1VSUkVOVF9SRVFVRVNUX01BUF9DTEVBTlVQX0RFTEFZKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0UmVxdWVzdE1ldGFkYXRhKHJlcXVlc3QpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gYXdhaXQgUHJlZmV0Y2hQbHVnaW5fMS5ub3JtYWxpemVSZXF1ZXN0VXJsRm9yQ2FjaGUocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiAoKF9hID0gdGhpcy5jdXJyZW50UmVxdWVzdHNbbm9ybWFsaXplZFVybF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXRhZGF0YSkgfHwge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGVzOlxuICAgICAqIC0gSXQgc2VlbXMgdGhhdCB3ZSBjYW5ub3QgYWRkIGFyYml0cmFyeSBhdHRyaWJ1dGVzIHRvIHRoZSByZXF1ZXN0IG9iamVjdFxuICAgICAqICAgc28gdGhlIGJlc3Qgd2UgY2FuIGRvIGlzIHRvIHN0b3JlIHJlcXVlc3QgaW5mbyBpbiBhIG1lbW9yeSBoYXNoLW1hcFxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3RXaWxsRmV0Y2goeyByZXF1ZXN0IH0pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZEZuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVJlcXVlc3RNZXRhZGF0YShyZXF1ZXN0LCB7IHJlcXVlc3RTdGFydDogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIG9iamVjdCBpcyByZWFkIGZyb20gb3Igd3JpdHRlbiB0byB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBOb3RlczpcbiAgICAgKiAtIEl0IHNlZW1zIHRoYXQgd2UgY2Fubm90IGFkZCBhcmJpdHJhcnkgYXR0cmlidXRlcyB0byB0aGUgcmVxdWVzdCBvYmplY3RcbiAgICAgKiAgIHNvIHRoZSBiZXN0IHdlIGNhbiBkbyBpcyB0byBzdG9yZSByZXF1ZXN0IGluZm8gaW4gYSBtZW1vcnkgaGFzaC1tYXBcbiAgICAgKlxuICAgICAqIC0gSW4gY2FzZSBvZiBjYWNoZSAncmVhZCcsIHdlIGtlZXAgdHJhY2sgb2YgcHJlZmV0Y2ggcmVxdWVzdCBzbyB0aGF0IHdlIGNhbiBpZGVudGlmeSB0aGVtIGxhdGVyXG4gICAgICogICBpbiBgY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkYCwgd2hpY2ggaXMgY2FsbGVkIGZvciBib3RoIGhpdCBvciBtaXNzLlxuICAgICAqICAgV2h5IGhlcmUgYW5kIG5vdCBvbiByZXNwb25zZT8gQmVjYXVzZSBpbiBgY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkYCB3ZSBvbmx5IGdldCB0aGUgY2FjaGUtbm9ybWFsaXplZCByZXF1ZXN0XG4gICAgICogICB3aGVyZSBsYXllcjBfZHRfcGYgcXVlcnkgc3RyaW5nIGdvdCByZW1vdmVkXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVLZXlXaWxsQmVVc2VkKHsgcmVxdWVzdCwgbW9kZSB9KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWRGbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVSZXF1ZXN0TWV0YWRhdGEocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGlzUHJlZmV0Y2g6IFByZWZldGNoUGx1Z2luXzEuaXNQcmVmZXRjaFJlcXVlc3QocmVxdWVzdCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG4gICAgYXN5bmMgY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkKHsgcmVxdWVzdCwgY2FjaGVkUmVzcG9uc2U6IHJlc3BvbnNlLCB9KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWRGbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gY2FzZSBvZiBjYWNoZSBtaXNzXG4gICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHsgaXNQcmVmZXRjaCB9ID0gYXdhaXQgdGhpcy5nZXRSZXF1ZXN0TWV0YWRhdGEocmVxdWVzdCk7XG4gICAgICAgIC8vIFRURkIgaXMgaGFyZC1jb2RlZCB0byAwIGZvciBjYWNoZWQgcmVzcG9uc2VcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlKHtcbiAgICAgICAgICAgIGJyb3dzZXJDYWNoZTogJ2hpdCcsXG4gICAgICAgICAgICB0dGZiOiAwLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IGlzUHJlZmV0Y2gsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICByb3V0ZUNvbmZpZzogdGhpcy5yb3V0ZUNvbmZpZyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hEaWRTdWNjZWVkKHsgcmVxdWVzdCwgcmVzcG9uc2UgfSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkRm4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcmVxdWVzdFN0YXJ0IH0gPSBhd2FpdCB0aGlzLmdldFJlcXVlc3RNZXRhZGF0YShyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgdHRmYiA9IHJlcXVlc3RTdGFydCAmJiBEYXRlLm5vdygpIC0gcmVxdWVzdFN0YXJ0O1xuICAgICAgICB0aGlzLm9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgYnJvd3NlckNhY2hlOiAnbWlzcycsXG4gICAgICAgICAgICB0dGZiLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IFByZWZldGNoUGx1Z2luXzEuaXNQcmVmZXRjaFJlcXVlc3QocmVxdWVzdCksXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICByb3V0ZUNvbmZpZzogdGhpcy5yb3V0ZUNvbmZpZyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEZXZ0b29sc1BsdWdpbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiQGxheWVyMC9jb3JlL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNvbnN0YW50c18yID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IGxvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvZ1wiKSk7XG5jb25zdCBwcmVmZXRjaF8xID0gcmVxdWlyZShcIi4vcHJlZmV0Y2hcIik7XG5jb25zdCBvcmlnaW4gPSBuZXcgVVJMKHNlbGYub3JpZ2luKTtcbmZ1bmN0aW9uIGlzUHJlZmV0Y2hSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFVSTChyZXF1ZXN0LnVybCkuc2VhcmNoUGFyYW1zLmhhcyhjb25zdGFudHNfMS5ERVZUT09MU19QUkVGRVRDSF9RVUVSWV9QQVJBTSk7XG59XG5leHBvcnRzLmlzUHJlZmV0Y2hSZXF1ZXN0ID0gaXNQcmVmZXRjaFJlcXVlc3Q7XG5hc3luYyBmdW5jdGlvbiBub3JtYWxpemVSZXF1ZXN0VXJsRm9yQ2FjaGUocmVxdWVzdCwgeyBjYWNoZUhvc3QgfSA9IHt9KSB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAvLyBXaGVuIHJlYWRpbmcvd3JpdGluZyBjYWNoZUhvc3QgVVJMcyBjb252ZXJ0IHRoZW0gYmFjayB0byBvcmlnaW5cbiAgICBpZiAoY2FjaGVIb3N0ICYmIHVybC5ob3N0bmFtZSA9PSBjYWNoZUhvc3QuaG9zdG5hbWUpIHtcbiAgICAgICAgdXJsLmhvc3QgPSBvcmlnaW4uaG9zdDtcbiAgICAgICAgdXJsLnByb3RvY29sID0gb3JpZ2luLnByb3RvY29sO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIEZvciBub24tR0VUIHJlcXVlc3RzLCB3ZSBuZWVkIHRvIGFkZCB0aGUgcmVxdWVzdCBib2R5IHRvIHRoZSBjYWNoZSBrZXkgYnkgYXBwZW5kaW5nIGluIHRvIHRoZSBVUkwgcXVlcnkgc3RyaW5nXG4gICAgaWYgKG1ldGhvZCAhPT0gJ2dldCcpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcbiAgICAgICAgY29uc3QgYm9keVBhcmFtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoY29uc3RhbnRzXzEuUE9TVF9CT0RZX1FVRVJZX1BBUkFNKTtcbiAgICAgICAgaWYgKCFib2R5UGFyYW0gJiYgYm9keSkge1xuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoY29uc3RhbnRzXzEuUE9TVF9CT0RZX1FVRVJZX1BBUkFNLCBlbmNvZGVVUklDb21wb25lbnQoYm9keSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBtZXRob2QgdG8gdGhlIGNhY2hlIGtleSBzbyB0aGF0IHdlIGNhbiBjYWNoZSByZXF1ZXN0cyB0byB0aGUgc2FtZSBwYXRoIHdpdGggZGlmZmVyZW50IG1ldGhvZHNcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoY29uc3RhbnRzXzEuTUVUSE9EX1FVRVJZX1BBUkFNLCByZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGxheWVyMF9wcmVmZXRjaCBhbmQgbGF5ZXIwX2R0X3BmIHF1ZXJ5IHBhcmFtcyBzbyB0aGF0IHByZWZldGNoZXMgYW5kIHJlYWwgcmVxdWVzdHNcbiAgICAvLyByZXR1cm4gZnJvbSB0aGUgc2FtZSBjYWNoZSBzcGFjZVxuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKGNvbnN0YW50c18xLlRIUk9UVExFRF9RVUVSWV9QQVJBTSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoY29uc3RhbnRzXzEuREVWVE9PTFNfUFJFRkVUQ0hfUVVFUllfUEFSQU0pO1xuICAgIC8vIERlY29kZSBxdWVyeSBwYXJhbWV0ZXJzIGJvdGggd2hlbiB3cml0aW5nIHRvIGNhY2hlIGFuZCB3aGVuIHJlYWRpbmdcbiAgICAvLyBmcm9tIGNhY2hlLiBUaGlzIGVuc3VyZXMgdGhlIGNhY2hlIGlzIHVzZWQgbm8gbWF0dGVyIHdoZXRoZXIgdGhlIFVSTFxuICAgIC8vIGlzIGVuY29kZWQgaW4gZWl0aGVyIHN0ZXAuXG4gICAgZGVjb2RlUXVlcnlQYXJhbXModXJsKTtcbiAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVJlcXVlc3RVcmxGb3JDYWNoZSA9IG5vcm1hbGl6ZVJlcXVlc3RVcmxGb3JDYWNoZTtcbmNsYXNzIFByZWZldGNoUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGluY3JlbWVudFJlYWQsIGluY3JlbWVudFdyaXRlLCBjYWNoZUhvc3QsIHByZWZldGNoVXBzdHJlYW1SZXF1ZXN0cywgfSkge1xuICAgICAgICB0aGlzLmluY3JlbWVudFJlYWQgPSBpbmNyZW1lbnRSZWFkO1xuICAgICAgICB0aGlzLmluY3JlbWVudFdyaXRlID0gaW5jcmVtZW50V3JpdGU7XG4gICAgICAgIHRoaXMuY2FjaGVIb3N0ID0gY2FjaGVIb3N0O1xuICAgICAgICB0aGlzLnByZWZldGNoVXBzdHJlYW1SZXF1ZXN0cyA9IHByZWZldGNoVXBzdHJlYW1SZXF1ZXN0cztcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdFdpbGxGZXRjaCh7IHJlcXVlc3QgfSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHNlbmQgYSBjbG9uZSBvZiB0aGUgcmVxdWVzdCBzbyB0aGF0IHdlIGNhbiByZWFkIHRoZSByZXF1ZXN0IGJvZHkgYW5kIHVzZVxuICAgICAgICAvLyBpdCBpbiB0aGUgY2FjaGUga2V5IGluIHRoZSB3cml0ZSBwaGFzZSBvZiB0aGUgY2FjaGVLZXlXaWxsQmVVc2VkIG1ldGhvZC5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYW4gb2JqZWN0IGlzIHJlYWQgZnJvbSBvciB3cml0dGVuIHRvIHRoZSBjYWNoZS4gIEhlcmUgd2VcbiAgICAgKiBjb21wdXRlIGNhY2hlIHN0YXRzIGFuZCBlbnN1cmUgdGhhdCA/bGF5ZXIwX3ByZWZldGNoIGlzIHJlbW92ZWQgZnJvbSB0aGUgY2FjaGUga2V5IHNvXG4gICAgICogdGhhdCBmdXR1cmUgcmVxdWVzdHMgZm9yIHByZWZldGNoZWQgcmVzb3VyY2VzIHdpbGwgbWF0Y2guXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVLZXlXaWxsQmVVc2VkKHsgcmVxdWVzdCwgbW9kZSB9KSB7XG4gICAgICAgIGlmICghaXNQcmVmZXRjaFJlcXVlc3QocmVxdWVzdCkpIHtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFJlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50V3JpdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9ybWFsaXplUmVxdWVzdFVybEZvckNhY2hlKHJlcXVlc3QsIHsgY2FjaGVIb3N0OiB0aGlzLmNhY2hlSG9zdCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSByZXNwb25zZSBpcyBhYm91dCB0byBiZSB3cml0dGVuIHRvIHRoZSBjYWNoZS5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSwgcmVxdWVzdCB9KSB7XG4gICAgICAgIC8vIElmIHByZWZldGNoVXBzdHJlYW1SZXF1ZXN0cyBpcyBzZXQsIHdlIG9ubHkgcHJlZmV0Y2ggdGhlIGh0bWwgcGFnZXMgaW4gU1BBIG1vZGVcbiAgICAgICAgLy8gKGUuZyBBbmd1bGFyKSB0byBnZXQgdGhlIHVwc3RyZWFtIHJlcXVlc3RzIHJlc3BvbnNlIGhlYWRlci4gIFdlIGRvbid0IGFjdHVhbGx5IHdhbnRcbiAgICAgICAgLy8gdG8gc2VydmUgdGhlIGh0bWwgZnJvbSB0aGUgY2FjaGUsIHNvIHRoaXMgcmV0dXJucyBudWxsOlxuICAgICAgICBpZiAodGhpcy5wcmVmZXRjaFVwc3RyZWFtUmVxdWVzdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRSZXF1ZXN0cyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KGNvbnN0YW50c18yLkJBQ0tFTkRfUkVRVUVTVFNfUkVTUE9OU0VfSEVBREVSX05BTUUpO1xuICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybHNUb1ByZWZldGNoID0gYmFja2VuZFJlcXVlc3RzLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgICAgICAgdXJsc1RvUHJlZmV0Y2guZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2hfMS5wcmVmZXRjaCh1cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXJzIGRvIG5vdCBoYW5kbGUgcmVkaXJlY3RzIHdlbGwuIElmIGEgcmVkaXJlY3RlZCByZXNwb25zZSBpcyBwdXQgaW4gdGhlIGNhY2hlLFxuICAgICAgICAvLyB5b3UnbGwgc2VlIHRoaXMgZXJyb3I6IFwiYSBTZXJ2aWNlV29ya2VyIHBhc3NlZCBhIHJlZGlyZWN0ZWQgUmVzcG9uc2UgdG8gRmV0Y2hFdmVudC5yZXNwb25kV2l0aCgpXG4gICAgICAgIC8vIHdoaWxlIFJlZGlyZWN0TW9kZSBpcyBub3Qg4oCYZm9sbG93XCJcbiAgICAgICAgLy8gUmV0dXJuaW5nIG51bGwgaGVyZSBwcmV2ZW50cyB0aGUgcmVzcG9uc2UgZnJvbSBiZWluZyBjYWNoZWRcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQpIHtcbiAgICAgICAgICAgIGxvZ18xLmRlZmF1bHQoYCR7cmVzcG9uc2UudXJsfSB3YXMgbm90IGFkZGVkIHRvIHRoZSBjYWNoZSBiZWNhdXNlIGl0IHdhcyBhIHJlZGlyZWN0LmApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dfMS5kZWZhdWx0KGAke3Jlc3BvbnNlLnVybH0gd2FzIGFkZGVkIHRvIHRoZSBjYWNoZSB3aXRoIGtleSAke3JlcXVlc3QudXJsfS5gKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByZWZldGNoUGx1Z2luO1xuLyoqXG4gKiBNdXRhdGVzIHRoZSBzZWFyY2hQYXJhbXMgb2JqZWN0LCBlbnN1cmluZyB0aGF0IGVhY2ggdmFsdWUgaXMgZGVjb2RlZC5cbiAqIEBwYXJhbSB7VVJMfSB1cmwgVGhlIFVSTCB3aG9zZSBwYXJhbXMgc2hvdWxkIGJlIGRlY29kZWRcbiAqL1xuZnVuY3Rpb24gZGVjb2RlUXVlcnlQYXJhbXModXJsKSB7XG4gICAgY29uc3QgbWF5YmVEZWNvZGUgPSAodmFsKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGl0IHdpbGwgZmFpbCBpZiB0aGUgc3RyaW5nIGhhcyBhICUgaW4gaXQgdGhhdCBpc24ndCBhIFVSTC1kZWNvZGVkIGVudGl0eSxcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgbWVhbnMgdGhlIHN0cmluZyBpcyBhbHJlYWR5IGRlY29kZWQgc28gd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZTpcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVybC5zZWFyY2hQYXJhbXMuZm9yRWFjaCgocGFyYW0sIGtleSkgPT4ge1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChtYXliZURlY29kZShrZXkpLCBtYXliZURlY29kZShwYXJhbSkpO1xuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB3b3JrYm94X3JvdXRpbmdfMSA9IHJlcXVpcmUoXCJ3b3JrYm94LXJvdXRpbmdcIik7XG5jb25zdCB3b3JrYm94X3N0cmF0ZWdpZXNfMSA9IHJlcXVpcmUoXCJ3b3JrYm94LXN0cmF0ZWdpZXNcIik7XG5jb25zdCB3b3JrYm94X2V4cGlyYXRpb25fMSA9IHJlcXVpcmUoXCJ3b3JrYm94LWV4cGlyYXRpb25cIik7XG5jb25zdCB3b3JrYm94X2NhY2hlYWJsZV9yZXNwb25zZV8xID0gcmVxdWlyZShcIndvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbG9nXCIpKTtcbmNvbnN0IFByZWZldGNoUGx1Z2luXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJlZmV0Y2hQbHVnaW5cIikpO1xuY29uc3QgRGV2dG9vbHNQbHVnaW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EZXZ0b29sc1BsdWdpblwiKSk7XG5jb25zdCBtZXNzYWdlQnJvd3Nlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21lc3NhZ2VCcm93c2VyXCIpKTtcbmNvbnN0IEN1c3RvbUNhY2hlS2V5UGx1Z2luXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3VzdG9tQ2FjaGVLZXlQbHVnaW5cIikpO1xuY29uc3QgQ2hhbmdlTWV0aG9kUGx1Z2luXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2hhbmdlTWV0aG9kUGx1Z2luXCIpKTtcbmNsYXNzIFN0YXRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5taXNzZXMgPSAwO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RhdHMgPSBTdGF0cztcbmNvbnN0IEJVRkZFUl9ERUxBWV9NUyA9IDEwMDAwO1xuLyoqXG4gKiBIYW5kbGVzIHByZWZldGNoaW5nIGFuZCBjYWNoaW5nIGluIHRoZSB0aGUgc2VydmljZSB3b3JrZXIuICBSZXNwb25zZXNcbiAqIGFyZSBjYWNoZWQgYmFzZWQgb24gdGhlIGBicm93c2VyLnNlcnZpY2VXb3JrZXJTZWNvbmRzYCBjYWNoZSBzZXR0aW5nIGluIHlvdXIgcm91dGVzLlxuICpcbiAqICoqRXhhbXBsZSByb3V0ZXMuanMqKlxuICpcbiAqIGBgYGpzXG4gKiAgaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGxheWVyMC9jb3JlL3JvdXRlcidcbiAqXG4gKiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgUm91dGVyKClcbiAqICAgIC5tYXRjaCgnL3NvbWUvcGF0aCcsICh7IGNhY2hlIH0pID0+IHtcbiAqICAgICAgY2FjaGUoe1xuICogICAgICAgIGVkZ2U6IHtcbiAqICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAvLyBvbmUgZGF5XG4gKiAgICAgICAgfSxcbiAqICAgICAgICBicm93c2VyOiB7XG4gKiAgICAgICAgICBzZXJ2aWNlV29ya2VyU2Vjb25kczogNjAgKiA2MCAvLyBvbmUgaG91clxuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqICAgIH0pXG4gKiBgYGBcbiAqXG4gKiAqKkV4YW1wbGUgU2VydmljZSBXb3JrZXIqKlxuICpcbiAqIGBgYGpzXG4gKiAgaW1wb3J0IHsgc2tpcFdhaXRpbmcsIGNsaWVudHNDbGFpbSB9IGZyb20gJ3dvcmtib3gtY29yZSdcbiAqICBpbXBvcnQgeyBQcmVmZXRjaGVyIH0gZnJvbSAnQGxheWVyMC9wcmVmZXRjaC9zdydcbiAqICBpbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSAnd29ya2JveC1wcmVjYWNoaW5nJ1xuICpcbiAqICBza2lwV2FpdGluZygpXG4gKiAgY2xpZW50c0NsYWltKClcbiAqICBwcmVjYWNoZUFuZFJvdXRlKHNlbGYuX19XQl9NQU5JRkVTVCB8fCBbXSlcbiAqXG4gKiAgbmV3IFByZWZldGNoZXIoKS5yb3V0ZSgpXG4gKiBgYGBcbiAqL1xuY2xhc3MgUHJlZmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0geyBwbHVnaW5zOiBbXSB9KSB7XG4gICAgICAgIC8vIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBEZXZ0b29scyBwbHVnaW5zIGFyZSBkaXNhYmxlZCB1bnRpbCB0aGUgZmlyc3RcbiAgICAgICAgLy8gJ2xheWVyMC1kZXZ0b29scy1zeW4nIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgKGllOiBhIERldnRvb2xzIGNsaWVudCBpcyBlbmFibGVkKS5cbiAgICAgICAgLy8gQnV0IG9uY2UgZW5hYmxlZCwgdGhleSB3aWxsIHJlbWFpbiBhY3RpdmUgdW50aWwgdGhlIFNlcnZpY2UgV29ya2VyIGlzIHJlaW5zdGFsbGVkXG4gICAgICAgIHRoaXMuZGV2dG9vbHNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBidWZmZXJlZERldnRvb2xNZXNzYWdlcyBrZWVwcyB0cmFjayBvZiB0aGUgcmVxdWVzdCByZWNlaXZlZCBpbiB0aGUgbGFzdCBCVUZGRVJfREVMQVlfTVMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1ZmZlcmVkRGV2dG9vbE1lc3NhZ2VzID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICBsZXQgbWFuaWZlc3RVUkwgPSAnX19sYXllcjBfXy9jYWNoZS1tYW5pZmVzdC5qcyc7XG4gICAgICAgIHRoaXMuY2FjaGVPcmlnaW5zID0gW3NlbGYub3JpZ2luXTtcbiAgICAgICAgaWYgKGNvbmZpZy5jYWNoZUhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVIb3N0ID0gbmV3IFVSTChgaHR0cHM6Ly8ke2NvbmZpZy5jYWNoZUhvc3R9YCk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlT3JpZ2lucy5wdXNoKHRoaXMuY2FjaGVIb3N0Lm9yaWdpbik7XG4gICAgICAgICAgICBtYW5pZmVzdFVSTCA9IHRoaXMuY2FjaGVIb3N0LnRvU3RyaW5nKCkgKyBtYW5pZmVzdFVSTDtcbiAgICAgICAgfVxuICAgICAgICBpbXBvcnRTY3JpcHRzKG1hbmlmZXN0VVJMKTtcbiAgICAgICAgdGhpcy5jYWNoZWFibGVSZXNwb25zZVBsdWdpbiA9IG5ldyB3b3JrYm94X2NhY2hlYWJsZV9yZXNwb25zZV8xLkNhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgICAgIHN0YXR1c2VzOiBbMjAwLCAzMDEsIDMwMl0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRzKCk7XG4gICAgICAgIHRoaXMuaW5pdERldnRvb2xzSGFuZHNoYWtlTGlzdGVuZXIoKTtcbiAgICB9XG4gICAgZ2V0Um91dGVDb25maWdzRnJvbU1hbmlmZXN0KCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gc2VsZi5fX0xBWUVSMF9DQUNIRV9NQU5JRkVTVF9fO1xuICAgICAgICByZXR1cm4gbWFuaWZlc3QubWFwKCh7IGNyaXRlcmlhUGF0aCwgcm91dGUsIGNhY2hlT3B0aW9ucywgbWV0aG9kLCByZXR1cm5zUmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBjb25zdCBtYXhBZ2VTZWNvbmRzID0gKF9hID0gY2FjaGVPcHRpb25zLmJyb3dzZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXJ2aWNlV29ya2VyU2Vjb25kcztcbiAgICAgICAgICAgIGNvbnN0IGVkZ2VNYXhBZ2VTZWNvbmRzID0gKF9iID0gY2FjaGVPcHRpb25zLmVkZ2UpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tYXhBZ2VTZWNvbmRzO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjcml0ZXJpYVBhdGgsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcm91dGUsXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHMsXG4gICAgICAgICAgICAgICAgZWRnZU1heEFnZVNlY29uZHMsXG4gICAgICAgICAgICAgICAgcmV0dXJuc1Jlc3BvbnNlLFxuICAgICAgICAgICAgICAgIGlzUGFydGlhbFBhdGhSb3V0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXk6IGNhY2hlT3B0aW9ucy5rZXksXG4gICAgICAgICAgICAgICAgY29udmVydFRvR2V0OiAoX2MgPSBjYWNoZU9wdGlvbnMuYnJvd3NlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnZlcnRUb0dldCxcbiAgICAgICAgICAgICAgICBwcmVmZXRjaFVwc3RyZWFtUmVxdWVzdHM6IGNhY2hlT3B0aW9ucy5wcmVmZXRjaFVwc3RyZWFtUmVxdWVzdHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJEZXZ0b29sc1JvdXRlcygpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZUNvbmZpZyBvZiB0aGlzLmdldFJvdXRlQ29uZmlnc0Zyb21NYW5pZmVzdCgpKSB7XG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXIgZm9yIGFsbCByb3V0ZXMgdGhhdCBhcmUgbm90IGNhY2hlZCBpbiB0aGUgYnJvd3NlciBhcyB0aG9zZSBhbHJlYWR5IGhhdmUgYSByb3V0ZSBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoIXJvdXRlQ29uZmlnLm1heEFnZVNlY29uZHMgJiYgIXJvdXRlQ29uZmlnLnJldHVybnNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGV2dG9vbHNSb3V0ZShyb3V0ZUNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxzbyBhZGQgYSBmYWxsYmFjayByb3V0ZSBpbiBjYXNlIHRoZSBjYWNoZSBtYW5pZmVzdCBkb2VzIG5vdCBzcGVjaWZ5IGFueVxuICAgICAgICB0aGlzLmNyZWF0ZURldnRvb2xzUm91dGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRoYXQgc2VydmVzIGNvbnRlbnQgZnJvbSB0aGUgYnJvd3NlciBjYWNoZSB3aGVuIGF2YWlsYWJsZS4gIFdoZW5cbiAgICAgKiBhIHJlcXVlc3QgaXMgbm90IGluIHRoZSBjYWNoZSwgaXQgd2lsbCBiZSBmZXRjaGVkIGZyb20gdGhlIG5ldHdvcmsgYW5kIGFkZGVkIHRvIHRoZVxuICAgICAqIGNhY2hlIGlmIHRoZSByb3V0ZSBoYXMgYGJyb3dzZXIuc2VydmljZVdvcmtlclNlY29uZHNgIGRlZmluZWQgaW4gaXRzIGBjYWNoZWAgc2V0dGluZy5cbiAgICAgKi9cbiAgICByb3V0ZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZUNvbmZpZyBvZiB0aGlzLmdldFJvdXRlQ29uZmlnc0Zyb21NYW5pZmVzdCgpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBPbmx5IGxpc3RlbiBmb3IgYnJvd3NlciBjYWNoZWQgcm91dGVzOlxuICAgICAgICAgICAgKHJvdXRlQ29uZmlnLm1heEFnZVNlY29uZHMgJiYgcm91dGVDb25maWcubWF4QWdlU2Vjb25kcyA+IDApIHx8XG4gICAgICAgICAgICAgICAgLy8gb3IgZm9yIHJvdXRlcyB0aGF0IHJldHVybiBhbiB4LTAtdXBzdHJlYW0tcmVxdWVzdHMgaGVhZGVyOlxuICAgICAgICAgICAgICAgIHJvdXRlQ29uZmlnLnByZWZldGNoVXBzdHJlYW1SZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm91dGUocm91dGVDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocm91dGVDb25maWcucmV0dXJuc1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVnaXN0ZXIgcm91dGVzIHRoYXQgcmV0dXJuIHJlc3BvbnNlcyB0byBmb3JjZSBhIG5ldHdvcmsgY2FsbCBhbmQgcHJldmVudFxuICAgICAgICAgICAgICAgIC8vIGEgbGF0ZXIgcm91dGUgZnJvbSBtYXRjaGluZyBhbmQgY2FjaGluZyBub24tY2FjaGVhYmxlIHJvdXRlczpcbiAgICAgICAgICAgICAgICB3b3JrYm94X3JvdXRpbmdfMS5yZWdpc3RlclJvdXRlKHRoaXMuc2hvdWxkSW50ZXJjZXB0KG5ldyBSZWdFeHAocm91dGVDb25maWcucGF0dGVybiwgJ2knKSwgcm91dGVDb25maWcuaXNQYXJ0aWFsUGF0aFJvdXRlKSwgbmV3IHdvcmtib3hfc3RyYXRlZ2llc18xLk5ldHdvcmtPbmx5KHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogW3RoaXMuY3JlYXRlRGV2dG9vbHNQbHVnaW4ocm91dGVDb25maWcpXSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlKHBhdHRlcm4sIG1heEFnZVNlY29uZHMgPSA2MCAqIDYwICogMjQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVSb3V0ZSh7IHBhdHRlcm46IHBhdHRlcm4uc291cmNlLCBtYXhBZ2VTZWNvbmRzLCBpc1BhcnRpYWxQYXRoUm91dGU6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIGxpc3RlbmluZyBmb3IgbWVzc2FnZXMgZnJvbSB0aGUgYnJvd3NlclxuICAgICAqL1xuICAgIGluaXRTdGF0cygpIHtcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEuYWN0aW9uID09PSAnZ2V0LXN0YXRzJykge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VCcm93c2VyXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdGF0cycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzOiB0aGlzLnN0YXRzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGVyZSB3ZSBpbXBsZW1lbnQgYSBoYW5kc2hha2UgcHJvdG9jb2wgYmV0d2VlbiB0aGUgZGV2dG9vbCB3aW5kb3cgY2xpZW50IGFuZCB0aGUgc2VydmljZSB3b3JrZXI6XG4gICAgICogMS4gRGV2dG9vbHMgc2VuZHMgdGhlICdsYXllcjAtZGV2dG9vbHMtc3luJyBldmVudCBhbmQgc3RhcnRzIGxpc3RlbmluZyBmb3IgJ2xheWVyMC1kZXZ0b29scy1hY2snIGV2ZW50XG4gICAgICogMi4gU2VydmljZSB3b3JrZXIgcmVjZWl2ZXMgdGhlICdsYXllcjAtZGV2dG9vbHMtc3luJyBldmVudCBhbmQgc2VuZHMgdGhlICdsYXllcjAtZGV2dG9vbHMtYWNrJyBldmVudFxuICAgICAqICAgIGFsb25nIHdpdGggdGhlIGJ1ZmZlcmVkIG1lc3NhZ2VzIHRoYXQgd2VyZSByZWNlaXZlZCBvdmVyIHRoZSBsYXN0IEJVRkZFUl9ERUxBWV9NUy5cbiAgICAgKiAgICBUaGlzIGlzIGJlY2F1c2UgdGhlIHdpbmRvdyB3aWRnZXQgdGFrZXMgdGltZSB0byBkb3dubG9hZCwgbG9hZCBhbmQgdG8gc3RhcnQgbGlzdGVuaW5nIGZyb21cbiAgICAgKiAgICBTZXJ2aWNlIHdvcmtlciBtZXNzYWdlLCB3aGlsZSB0aGUgbGF0dGVyIGlzIGFscmVhZHkgcmVjZWl2aW5nIGh0dHAgcmVxdWVzdHMuXG4gICAgICogMy4gRGV2dG9vbHMgcmVjZWl2ZXMgdGhlICdsYXllcjAtZGV2dG9vbHMtYWNrJyBldmVudCwgbG9va3MgZm9yIGl0cyBjdXJyZW50IHBhZ2UgaHRtbCByZXF1ZXN0LFxuICAgICAqICAgIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoYXQgdGFiIHZlcnkgZmlyc3QgcmVxdWVzdCwgYW5kIGxvYWRzIHJlcXVlc3RzIHBhc3QgdGhhdCBvbmUuXG4gICAgICogNC4gRGV2dG9vbHMgc3RhcnRzIGxpc3RlbmluZyBmb3IgbGl2ZSAnbGF5ZXIwLWRldnRvb2xzLXJlcXVlc3QnIGV2ZW50c1xuICAgICAqXG4gICAgICogTm90ZXM6XG4gICAgICogLSB0aGVyZSBpcyBubyAxLTEgY2hhbm5lbCBiZXR3ZWVuIHdpbmRvdyBjbGllbnQgYW5kIFNlcnZpY2UgV29ya2VyLCBzbyBhbGwgb3BlbmVkIHRhYlxuICAgICAqICAgd2lsbCBzZWUgdGhlICdsYXllcjAtZGV2dG9vbHMtYWNrJyBldmVudC4gT25seSB0aGUgb25lcyBpbiBoYW5kc2hha2UgcGhhc2Ugd2lsbCBoYW5kbGUgaXQuXG4gICAgICovXG4gICAgaW5pdERldnRvb2xzSGFuZHNoYWtlTGlzdGVuZXIoKSB7XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhLmFjdGlvbiA9PT0gJ2xheWVyMC1kZXZ0b29scy1pbnN0YWxsJykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRldnRvb2xzUm91dGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2dG9vbHNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGV2dG9vbHMgcGx1Z2luIGp1c3QgZ290IGluaXRpYWxpemVkIHNvIHdlIG1pc3NlZFxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZldyBxdWVyaWVzLiBXZSBzZW5kIGEgbWVzc2FnZSBzbyB0aGF0IHRoZSBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2hlcyBpdHMgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kVG9BbGxDbGllbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsYXllcjAtZGV2dG9vbHMtYWNrLWluc3RhbGxlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmRhdGEuYWN0aW9uID09PSAnbGF5ZXIwLWRldnRvb2xzLXN5bicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNrTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsYXllcjAtZGV2dG9vbHMtYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcmVkRGV2dG9vbE1lc3NhZ2VzOiB0aGlzLmJ1ZmZlcmVkRGV2dG9vbE1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRUb0FsbENsaWVudHMoYWNrTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuZGF0YS5hY3Rpb24gPT09ICdsYXllcjAtZGV2dG9vbHMtY2xlYXItY2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVzLmtleXMoKS50aGVuKGNhY2hlTmFtZXMgPT4gY2FjaGVOYW1lcy5mb3JFYWNoKG5hbWUgPT4gY2FjaGVzLmRlbGV0ZShuYW1lKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBhIHBvc3RNZXNzYWdlIGV2ZW50IHRvIGFsbCB3aW5kb3cgY2xpZW50LlxuICAgICAqIE5vdGVzOlxuICAgICAqIC0gV2hlbiB1c2VkIGluIG11bHRpLXRhYnMsIGVhY2ggRGV2dG9vbHMgd2lsbCBzaG93IGRhdGEgZnJvbSBhbGwgdGFicy5cbiAgICAgKiAgIFRoYXQncyBhIGJpdCBidWdneSBidXQgaXQncyB0aGUgYmVzdCB3ZSBjYW4gZG8gYXMgaXQncyB2ZXJ5IGhhcmQgdG8gZXN0YWJsaXNoIDEtMSBjaGFubmVsc1xuICAgICAqICAgb24gU2VydmljZVdvcmtlci9DbGllbnQgaW50ZXJmYWNlLCBmb3IgZXhhbXBsZSB0aGUgbWVzc2FnZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgZG9lcyBub3RcbiAgICAgKiAgIGNvbnRhaW4gdGhlIGNsaWVudElkXG4gICAgICovXG4gICAgYXN5bmMgc2VuZFRvQWxsQ2xpZW50cyhkYXRhKSB7XG4gICAgICAgIG1lc3NhZ2VCcm93c2VyXzEuZGVmYXVsdChkYXRhLCB7IGJyb2FkY2FzdDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG1lc3NhZ2UgdG8gdGhpcy5idWZmZXJlZERldnRvb2xNZXNzYWdlcyBhbmQgbWFuYWdlcyB0aGUgYnVmZmVyIHNvIHRoYXRcbiAgICAgKiB3ZSBkb24ndCBrZWVwIG1lc3NhZ2VzIG1vcmUgdGhhbiBCVUZGRVJfREVMQVlfTVMuXG4gICAgICpcbiAgICAgKiBJbiBjYXNlIG9mIGluYWN0aXZpdHkgd2UgY2xlYXIgdGhlIHdob2xlIGJ1ZmZlciBhZnRlciBCVUZGRVJfREVMQVlfTVMsIHNvIHRlY2huaWNhbGx5XG4gICAgICogYSBtZXNzYWdlIGNhbiBzdGF5IHVwIHRvIDIgeCBCVUZGRVJfREVMQVlfTVMgaW4gdGhlIGJ1ZmZlciAoYSBiaXQgbGVzcyB0aGFuIEJVRkZFUl9ERUxBWV9NUyBvbGRcbiAgICAgKiB3aGVuIHRoZSBsYXRlc3QgbWVzc2FnZSBhcnJpdmVzIGFuZCBjbGVhcmVkIEJVRkZFUl9ERUxBWV9NUyBsYXRlcilcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqL1xuICAgIGFkZERldnRvb2xzUmVxdWVzdE1lc3NhZ2VUb0J1ZmZlcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyZWREZXZ0b29sTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50cmltRGV2dG9vbHNSZXF1ZXN0TWVzc2FnZUJ1ZmZlcigpO1xuICAgICAgICBpZiAodGhpcy5jbGVhckRldnRvb2xzUmVxdWVzdE1lc3NhZ2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGVhckRldnRvb2xzUmVxdWVzdE1lc3NhZ2VUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBhZGRpdGlvbmFsIHJlcXVlc3QgZm9yIEJVRkZFUl9ERUxBWV9NUywgd2UgY2xlYXIgdGhlIGJ1ZmZlciBhZnRlciB0aGF0XG4gICAgICAgIHRoaXMuY2xlYXJEZXZ0b29sc1JlcXVlc3RNZXNzYWdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJlZERldnRvb2xNZXNzYWdlcyA9IFtdO1xuICAgICAgICB9LCBCVUZGRVJfREVMQVlfTVMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbWVzc2FnZSB0aGF0IGFyZSB0b28gb2xkIHRvIHN0YXkgaW4gZGV2dG9vbHMgbWVzc2FnZSBidWZmZXJcbiAgICAgKi9cbiAgICB0cmltRGV2dG9vbHNSZXF1ZXN0TWVzc2FnZUJ1ZmZlcigpIHtcbiAgICAgICAgbGV0IHNsaWNlSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBzbGljZU1pbmltdW1UaW1lc3RhbXAgPSBEYXRlLm5vdygpIC0gQlVGRkVSX0RFTEFZX01TO1xuICAgICAgICB3aGlsZSAodGhpcy5idWZmZXJlZERldnRvb2xNZXNzYWdlc1tzbGljZUluZGV4XSAmJlxuICAgICAgICAgICAgdGhpcy5idWZmZXJlZERldnRvb2xNZXNzYWdlc1tzbGljZUluZGV4XS50aW1lc3RhbXAgPCBzbGljZU1pbmltdW1UaW1lc3RhbXApIHtcbiAgICAgICAgICAgIHNsaWNlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1ZmZlcmVkRGV2dG9vbE1lc3NhZ2VzID0gdGhpcy5idWZmZXJlZERldnRvb2xNZXNzYWdlcy5zbGljZShzbGljZUluZGV4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhlcmUncyBhIGNhY2hlSG9zdCBjb25maWd1cmVkIGNoZWNrIHdoZXRoZXIgdGhlIHBhdHRlcm4gdG8gdGVzdFxuICAgICAqIGFnYWluc3QgaXMgYSBwYXJ0aWFsIHBhdGhuYW1lIHBhdHRlcm4uIElmIHNvLCBjaGVjayB0aGF0IHRoZSBvcmlnaW4gaXNcbiAgICAgKiBhbHNvIGNvcnJlY3Q6IHNlcnZpY2Ugd29ya2VyJ3Mgb3duIG9yaWdpbiBvciBjYWNoZUhvc3Qgb3JpZ2luXG4gICAgICogQHBhcmFtIHBhdHRlcm4gQSByb3V0ZSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIGlzUGFydGlhbFBhdGhSb3V0ZSBTZXQgdG8gdHJ1ZSBpZiB0aGUgc3VwcGxpZWQgcGF0dGVybiBvbmx5IG1hdGNoZXMgdGhlIHBhdGgsIGZhbHNlIGlmIGl0IG1hdGNoZXMgdGhlIHdob2xlIFVSTC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5za2lwQXNzZXRzIFNldCB0byB0cnVlIHRvIGlnbm9yZSByZXF1ZXN0IHRoYXQgYXJlIG5vdCAnZG9jdW1lbnQnIG9yICdlbXB0eScgKGllOiBhdWRpbywgZm9udCwgaW1hZ2UsIC4uLilcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIHNlcnZpY2Ugd29ya2VyLlxuICAgICAqL1xuICAgIHNob3VsZEludGVyY2VwdChwYXR0ZXJuLCBpc1BhcnRpYWxQYXRoUm91dGUsIHsgc2tpcEFzc2V0cyA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gKHsgdXJsLCByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChza2lwQXNzZXRzICYmICFbJ2RvY3VtZW50JywgJ2VtcHR5J10uaW5jbHVkZXMocmVxdWVzdC5kZXN0aW5hdGlvbikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKGlzUGFydGlhbFBhdGhSb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlT3JpZ2lucy5pbmNsdWRlcyh1cmwub3JpZ2luKSAmJiBwYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodXJsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRGV2dG9vbHNQbHVnaW4gb2JqZWN0IHRvIGJlIGFkZGVkIHRvIGEgY2FjaGluZyBzdHJhdGVneSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSByb3V0ZUNvbmZpZyBUaGUgcm91dGUgY29uZmlnIGZvciB0aGUgZ2l2ZW4gcm91dGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNyZWF0ZURldnRvb2xzUGx1Z2luKHJvdXRlQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGV2dG9vbHNQbHVnaW5fMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIG9uUmVzcG9uc2U6IHRoaXMub25SZXNwb25zZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNFbmFibGVkRm46ICgpID0+IHRoaXMuZGV2dG9vbHNFbmFibGVkLFxuICAgICAgICAgICAgcm91dGVDb25maWcsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgV29ya2JveCByb3V0ZSB3aGljaCBvbmx5IHB1cnBvc2UgaXMgdG8gZm9yd2FyZCByZXF1ZXN0cy9yZXNwb25zZVxuICAgICAqIGRhdGEgdG8gdGhlIERldnRvb2xzXG4gICAgICogQHBhcmFtIHJvdXRlQ29uZmlnIFRoZSByb3V0ZSBwYXR0ZXJuIGFuZCBjYWNoaW5nIG9wdGlvbnMgc3BlY2lmaWVkIHdpdGhpbiB0aGUgcm91dGUgZGVmaW5pdGlvblxuICAgICAqICAgICAgICAgICAgICAgICAgICBJZiB1bmRlZmluZWQsIGl0IGNhdGNoZXMgYWxsIEdFVCBxdWVyaWVzIGV4Y2VwdCBzdGF0aWMgYXNzZXRzXG4gICAgICovXG4gICAgY3JlYXRlRGV2dG9vbHNSb3V0ZShyb3V0ZUNvbmZpZykge1xuICAgICAgICBsZXQgbWV0aG9kLCByb3V0ZU1hdGNoZXI7XG4gICAgICAgIGlmIChyb3V0ZUNvbmZpZykge1xuICAgICAgICAgICAgY29uc3QgeyBwYXR0ZXJuLCBpc1BhcnRpYWxQYXRoUm91dGUgfSA9IHJvdXRlQ29uZmlnO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVyblJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKTtcbiAgICAgICAgICAgIHJvdXRlTWF0Y2hlciA9IHRoaXMuc2hvdWxkSW50ZXJjZXB0KHBhdHRlcm5SZWdleHAsIGlzUGFydGlhbFBhdGhSb3V0ZSwgeyBza2lwQXNzZXRzOiB0cnVlIH0pO1xuICAgICAgICAgICAgbWV0aG9kID0gKHJvdXRlQ29uZmlnLm1ldGhvZCB8fCAnZ2V0JykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlTWF0Y2hlciA9IHRoaXMuc2hvdWxkSW50ZXJjZXB0KC9eLiokLywgdHJ1ZSwgeyBza2lwQXNzZXRzOiB0cnVlIH0pO1xuICAgICAgICAgICAgbWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2JveF9yb3V0aW5nXzEucmVnaXN0ZXJSb3V0ZShyb3V0ZU1hdGNoZXIsIG5ldyB3b3JrYm94X3N0cmF0ZWdpZXNfMS5OZXR3b3JrT25seSh7XG4gICAgICAgICAgICBwbHVnaW5zOiBbdGhpcy5jcmVhdGVEZXZ0b29sc1BsdWdpbihyb3V0ZUNvbmZpZyldLFxuICAgICAgICB9KSwgXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbWV0aG9kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdvcmtib3ggcm91dGUuXG4gICAgICogQHBhcmFtIHJvdXRlQ29uZmlnIFRoZSByb3V0ZSBwYXR0ZXJuIGFuZCBjYWNoaW5nIG9wdGlvbnMgc3BlY2lmaWVkIHdpdGhpbiB0aGUgcm91dGUgZGVmaW5pdGlvblxuICAgICAqL1xuICAgIGNyZWF0ZVJvdXRlKHJvdXRlQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0dGVybiwgbWV0aG9kOiBvcHRNZXRob2QsIG1heEFnZVNlY29uZHMsIGlzUGFydGlhbFBhdGhSb3V0ZSwga2V5LCBjb252ZXJ0VG9HZXQsIH0gPSByb3V0ZUNvbmZpZztcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKG9wdE1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbG9nXzEuZGVmYXVsdChgW3JvdXRlXSAke21ldGhvZH0gJHtwYXR0ZXJufSwgbWF4QWdlU2Vjb25kczogJHttYXhBZ2VTZWNvbmRzfWApO1xuICAgICAgICBjb25zdCBwYXR0ZXJuUmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnaScpO1xuICAgICAgICAvLyBhbGwgcm91dGVzIG11c3QgaGF2ZSBhIEdFVCByb3V0ZSByZWdpc3RlcmVkLCBzbyBXb3JrYm94IGNhbiBwcm9wZXJseSBsb29rXG4gICAgICAgIC8vIGl0IHVwIHdoZW4gcnVubmluZyB3b3JrYm94LXJvdXRpbmcvUm91dGVyI2ZpbmRNYXRjaGluZ1JvdXRlOlxuICAgICAgICBpZiAobWV0aG9kICE9PSAnZ2V0Jykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3V0ZSh7IC4uLnJvdXRlQ29uZmlnLCBtZXRob2Q6ICdnZXQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZWZldGNoUGx1Z2luID0gbmV3IFByZWZldGNoUGx1Z2luXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBpbmNyZW1lbnRSZWFkOiB0aGlzLmluY3JlbWVudFJlYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGluY3JlbWVudFdyaXRlOiB0aGlzLmluY3JlbWVudFdyaXRlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjYWNoZUhvc3Q6IHRoaXMuY2FjaGVIb3N0LFxuICAgICAgICAgICAgcHJlZmV0Y2hVcHN0cmVhbVJlcXVlc3RzOiByb3V0ZUNvbmZpZy5wcmVmZXRjaFVwc3RyZWFtUmVxdWVzdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgdGhpcy5jYWNoZWFibGVSZXNwb25zZVBsdWdpbixcbiAgICAgICAgICAgIG5ldyB3b3JrYm94X2V4cGlyYXRpb25fMS5FeHBpcmF0aW9uUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBEZXZ0b29sUGx1Z2luIG5lZWRzIHRvIGJlIGluamVjdGVkIGJlZm9yZSBQcmVmZXRjaFBsdWdpbiBhcyB0aGlzIGxhdGVyXG4gICAgICAgICAgICAvLyBjaGFuZ2VzIHJlcXVlc3QgdXJsIHRvIG5vcm1hbGlzZSB0aGUgY2FjaGUga2V5XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURldnRvb2xzUGx1Z2luKHJvdXRlQ29uZmlnKSxcbiAgICAgICAgICAgIHByZWZldGNoUGx1Z2luLFxuICAgICAgICAgICAgLi4uKHRoaXMuY29uZmlnLnBsdWdpbnMgfHwgW10pLFxuICAgICAgICBdO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBwbHVnaW5zLnB1c2gobmV3IEN1c3RvbUNhY2hlS2V5UGx1Z2luXzEuZGVmYXVsdChwYXR0ZXJuUmVnZXhwLCBrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udmVydFRvR2V0KSB7XG4gICAgICAgICAgICAvLyBDaGFuZ2VNZXRob2RQbHVnaW4gbXVzdCBjb21lIGJlZm9yZSBQcmVmZXRjaFBsdWdpbiBzbyBib2R5IGlzIHJldGFpbmVkOlxuICAgICAgICAgICAgcGx1Z2lucy5zcGxpY2UocGx1Z2lucy5pbmRleE9mKHByZWZldGNoUGx1Z2luKSwgMCwgbmV3IENoYW5nZU1ldGhvZFBsdWdpbl8xLmRlZmF1bHQoW3BhdHRlcm5SZWdleHBdKSk7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2JveF9yb3V0aW5nXzEucmVnaXN0ZXJSb3V0ZSh0aGlzLnNob3VsZEludGVyY2VwdChwYXR0ZXJuUmVnZXhwLCBpc1BhcnRpYWxQYXRoUm91dGUpLCBuZXcgd29ya2JveF9zdHJhdGVnaWVzXzEuQ2FjaGVGaXJzdCh7XG4gICAgICAgICAgICBjYWNoZU5hbWU6IGNvbnN0YW50c18xLkNBQ0hFX05BTUUsXG4gICAgICAgICAgICBtYXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpZ25vcmVWYXJ5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgIH0pLCBcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBtZXRob2QudG9VcHBlckNhc2UoKSAvLyBIVFRQTWV0aG9kcyBtYXAgZGlyZWN0bHkgZnJvbSBAbGF5ZXIwL2NvcmUgbG93ZXJjYXNlID0+IEB3b3JrYm94IHVwcGVyY2FzZVxuICAgICAgICApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIFJlYWQgaXMgY29uc2lkZXJlZCBhIEhpdCB1bnRpbCBhIFdyaXRlIGhhcHBlbnMgbWVhbmluZyBpdCB3YXMgYSBtaXNzXG4gICAgICogVGhpcyBpcyBiYXNlZCBvbiB0aGUgZnJhZ2lsZSBhc3N1bXB0aW9uIHRoYXQgYSBjYWNoZSByZWFkICphbHdheXMqIHRyaWdnZXJzIGEgd3JpdGVcbiAgICAgKiBpbiBjYXNlIG9mIGNhY2hlIG1pc3MsIHdoaWNoIGlzIG5vdCB0cnVlIGlmIHRoZSBiYWNrZW5kIGRvZXMgbm90IHJlc3BvbmQgZm9yIGV4YW1wbGUuXG4gICAgICpcbiAgICAgKiBUaGlzIGNvdWxkIGJlIGZpeGVkIGJ5IGNoZWNraW5nIHRoZSBwcmVzZW5jZSBvZiBgcmVzcG9uc2VgIGluIGBjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWRgYFxuICAgICAqIGJ1dCB0aGF0IGxlYWRzIHRvIG90aGVyIGlzc3VlcyBhcyB3ZSBjYW5ub3QgZGlzY2FyZCBQcmVmZXRjaCByZXF1ZXN0cyBhdCB0aGF0XG4gICAgICogc3RhZ2UuXG4gICAgICogV2UgY291bGQgaW1wbGVtZW50IHRoZSBzYW1lIEhhY2staXNoIHNvbHV0aW9uIGFzIGluIERldnRvb2xzUGx1Z2luIHRvIHdvcmsgYXJvdW5kIHRoYXQsXG4gICAgICogYnV0IHRob3NlIHNpbXBsZSBzdGF0cyBhcmUgcHJvYmFibHkgZ29pbmcgYXdheSBhbnl3YXkuXG4gICAgICovXG4gICAgaW5jcmVtZW50UmVhZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0cy5oaXRzKys7XG4gICAgfVxuICAgIGluY3JlbWVudFdyaXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRzLm1pc3NlcysrO1xuICAgICAgICB0aGlzLnN0YXRzLmhpdHMtLTtcbiAgICB9XG4gICAgYXN5bmMgb25SZXNwb25zZSh7IHJlcXVlc3QsIHJlc3BvbnNlLCB0dGZiLCBwcmVmZXRjaCwgYnJvd3NlckNhY2hlLCByb3V0ZUNvbmZpZywgfSkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZXZUb29sTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdsYXllcjAtZGV2dG9vbHMtcmVxdWVzdCcsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgICAgIHByZWZldGNoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgdHRmYixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyb3dzZXJDYWNoZSxcbiAgICAgICAgICAgIHJvdXRlQ29uZmlnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmRUb0FsbENsaWVudHMoZGV2VG9vbE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmFkZERldnRvb2xzUmVxdWVzdE1lc3NhZ2VUb0J1ZmZlcihkZXZUb29sTWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJlZmV0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFByZWZldGNoZXJfMSA9IHJlcXVpcmUoXCIuL1ByZWZldGNoZXJcIik7XG5leHBvcnRzLlByZWZldGNoZXIgPSBQcmVmZXRjaGVyXzEuZGVmYXVsdDtcbnZhciBwcmVmZXRjaF8xID0gcmVxdWlyZShcIi4vcHJlZmV0Y2hcIik7XG5leHBvcnRzLnByZWZldGNoID0gcHJlZmV0Y2hfMS5wcmVmZXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGxvZyguLi5tZXNzYWdlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjQGxheWVyMC9wcmVmZXRjaCcsICdiYWNrZ3JvdW5kOiAjNDNhMDQ3OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6Ym9sZDsgcGFkZGluZzogM3B4IDVweDsgYm9yZGVyLXJhZGl1czogNXB4JywgLi4ubWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gbG9nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgbGFzdCBmb2N1c2VkIGJyb3dzZXIgd2luZG93LlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gbWVzc2FnZUJyb3dzZXIobWVzc2FnZSwgeyBicm9hZGNhc3QgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnIH0pLnRoZW4oKGNsaWVudHMpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldENsaWVudHMgPSBjbGllbnRzO1xuICAgICAgICBpZiAoIWJyb2FkY2FzdCAmJiBjbGllbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY2xpZW50cyBhcnJheSBpcyBvcmRlcmVkIGJ5IGxhc3QgZm9jdXNlZFxuICAgICAgICAgICAgdGFyZ2V0Q2xpZW50cyA9IFtjbGllbnRzWzBdXTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRDbGllbnRzLmZvckVhY2goY2xpZW50ID0+IGNsaWVudC5wb3N0TWVzc2FnZShtZXNzYWdlKSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtZXNzYWdlQnJvd3NlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWVzc2FnZUJyb3dzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXNzYWdlQnJvd3NlclwiKSk7XG4vKipcbiAqIFByZWZldGNoZXMgYW4gYXNzZXQuXG4gKiBAcGFyYW0gdXJsIFRoZSBhc3NldCBVUkxcbiAqIEBwYXJhbSBhcyBUaGUgdmFsdWUgZm9yIHRoZSBsaW5rIGVsZW1lbnQncyBgYXNgIGF0dHJpYnV0ZS5cbiAqICBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2xpbmsuXG4gKiAgVXNlIFwiZmV0Y2hcIiBmb3IgaHRtbCBwYWdlcyBhcyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IFwiZG9jdW1lbnRcIi5cbiAqL1xuZnVuY3Rpb24gcHJlZmV0Y2godXJsLCBhcyA9ICdmZXRjaCcsIG9wdGlvbnMgPSB7IGNvcnM6ICdhbm9ueW1vdXMnIH0pIHtcbiAgICByZXR1cm4gbWVzc2FnZUJyb3dzZXJfMS5kZWZhdWx0KHsgYWN0aW9uOiAncHJlZmV0Y2gnLCB1cmwsIGFzLCBvcHRpb25zIH0pO1xufVxuZXhwb3J0cy5wcmVmZXRjaCA9IHByZWZldGNoO1xuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc2V0IHVwIHJ1bGVzIGRldGVybWluaW5nIHdoYXRcbiAqIHN0YXR1cyBjb2RlcyBhbmQvb3IgaGVhZGVycyBuZWVkIHRvIGJlIHByZXNlbnQgaW4gb3JkZXIgZm9yIGFcbiAqIFtgUmVzcG9uc2VgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UpXG4gKiB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UgaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCEoY29uZmlnLnN0YXR1c2VzIHx8IGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnN0YXR1c2VzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXkoY29uZmlnLnN0YXR1c2VzLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5zdGF0dXNlcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5oZWFkZXJzLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuaGVhZGVycycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdHVzZXMgPSBjb25maWcuc3RhdHVzZXM7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgcmVzcG9uc2UgdG8gc2VlIHdoZXRoZXIgaXQncyBjYWNoZWFibGUgb3Igbm90LCBiYXNlZCBvbiB0aGlzXG4gICAgICogb2JqZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIFRoZSByZXNwb25zZSB3aG9zZSBjYWNoZWFiaWxpdHkgaXMgYmVpbmdcbiAgICAgKiBjaGVja2VkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBjYWNoZWFibGUsIGFuZCBgZmFsc2VgXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlc3BvbnNlLCBSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaXNSZXNwb25zZUNhY2hlYWJsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVzcG9uc2UnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhY2hlYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0dXNlcykge1xuICAgICAgICAgICAgY2FjaGVhYmxlID0gdGhpcy5fc3RhdHVzZXMuaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGVhZGVycyAmJiBjYWNoZWFibGUpIHtcbiAgICAgICAgICAgIGNhY2hlYWJsZSA9IE9iamVjdC5rZXlzKHRoaXMuX2hlYWRlcnMpLnNvbWUoKGhlYWRlck5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyTmFtZSkgPT09IHRoaXMuX2hlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFRoZSByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlc3BvbnNlLnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHRoYXQgZG9lcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYG5vdCBtZWV0IHRoZSBjcml0ZXJpYSBmb3IgYmVpbmcgY2FjaGVkLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBjYWNoZWFiaWxpdHkgY3JpdGVyaWEgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBDYWNoZWFibGUgc3RhdHVzZXM6IGAgK1xuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0dXNlcykpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYENhY2hlYWJsZSBoZWFkZXJzOiBgICtcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5faGVhZGVycywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0ZyaWVuZGx5SGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dGcmllbmRseUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBzdGF0dXMgYW5kIGhlYWRlcnMgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBSZXNwb25zZSBzdGF0dXM6IGAgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFJlc3BvbnNlIGhlYWRlcnM6IGAgK1xuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShsb2dGcmllbmRseUhlYWRlcnMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgZnVsbCByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVhYmxlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZSB9IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2UuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIGBjYWNoZVdpbGxVcGRhdGVgIGxpZmVjeWNsZSBjYWxsYmFjay4gVGhpcyBtYWtlcyBpdFxuICogZWFzaWVyIHRvIGFkZCBpbiBjYWNoZWFiaWxpdHkgY2hlY2tzIHRvIHJlcXVlc3RzIG1hZGUgdmlhIFdvcmtib3gncyBidWlsdC1pblxuICogc3RyYXRlZ2llcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdFxuICAgICAqIGxlYXN0IG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgICAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVXaWxsVXBkYXRlID0gYXN5bmMgKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlLmlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlID0gbmV3IENhY2hlYWJsZVJlc3BvbnNlKGNvbmZpZyk7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNhY2hlYWJsZS1yZXNwb25zZTo1LjEuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlIH0gZnJvbSAnLi9DYWNoZWFibGVSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVxuICovXG5leHBvcnQgeyBDYWNoZWFibGVSZXNwb25zZSwgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4sIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG4vLyBXZSBlaXRoZXIgZXhwb3NlIGRlZmF1bHRzIG9yIHdlIGV4cG9zZSBldmVyeSBuYW1lZCBleHBvcnQuXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGNhY2hlV3JhcHBlciB9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVXcmFwcGVyLmpzJztcbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBEQldyYXBwZXIgfSBmcm9tICcuL19wcml2YXRlL0RCV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZGVsZXRlRGF0YWJhc2UgfSBmcm9tICcuL19wcml2YXRlL2RlbGV0ZURhdGFiYXNlLmpzJztcbmltcG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgeyBmZXRjaFdyYXBwZXIgfSBmcm9tICcuL19wcml2YXRlL2ZldGNoV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJy4vX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcmVzdWx0aW5nQ2xpZW50RXhpc3RzIH0gZnJvbSAnLi9fcHJpdmF0ZS9yZXN1bHRpbmdDbGllbnRFeGlzdHMuanMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJy4vX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgYXNzZXJ0LCBjYWNoZU5hbWVzLCBjYWNoZVdyYXBwZXIsIGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtLCBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLCBkb250V2FpdEZvciwgREJXcmFwcGVyLCBEZWZlcnJlZCwgZGVsZXRlRGF0YWJhc2UsIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLCBmZXRjaFdyYXBwZXIsIGdldEZyaWVuZGx5VVJMLCBsb2dnZXIsIHJlc3VsdGluZ0NsaWVudEV4aXN0cywgdGltZW91dCwgV29ya2JveEVycm9yLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgY2xhc3MgdGhhdCB3cmFwcyBjb21tb24gSW5kZXhlZERCIGZ1bmN0aW9uYWxpdHkgaW4gYSBwcm9taXNlLWJhc2VkIEFQSS5cbiAqIEl0IGV4cG9zZXMgYWxsIHRoZSB1bmRlcmx5aW5nIHBvd2VyIGFuZCBmdW5jdGlvbmFsaXR5IG9mIEluZGV4ZWREQiwgYnV0XG4gKiB3cmFwcyB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZlYXR1cmVzIGluIGEgd2F5IHRoYXQncyBtdWNoIHNpbXBsZXIgdG8gdXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBEQldyYXBwZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZlcnNpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdD19IFtjYWxsYmFja11cbiAgICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gW2NhbGxiYWNrcy5vbnVwZ3JhZGVuZWVkZWRdXG4gICAgICogQHBhcmFtIHshRnVuY3Rpb259IFtjYWxsYmFja3Mub252ZXJzaW9uY2hhbmdlXSBEZWZhdWx0cyB0b1xuICAgICAqICAgICBEQldyYXBwZXIucHJvdG90eXBlLl9vbnZlcnNpb25jaGFuZ2Ugd2hlbiBub3Qgc3BlY2lmaWVkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmVyc2lvbiwgeyBvbnVwZ3JhZGVuZWVkZWQsIG9udmVyc2lvbmNoYW5nZSwgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2RiID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLl9vbnVwZ3JhZGVuZWVkZWQgPSBvbnVwZ3JhZGVuZWVkZWQ7XG4gICAgICAgIHRoaXMuX29udmVyc2lvbmNoYW5nZSA9IG9udmVyc2lvbmNoYW5nZSB8fCAoKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgSURCRGF0YWJhc2UgaW5zdGFuY2UgKG5vdCBub3JtYWxseSBuZWVkZWQpLlxuICAgICAqIEByZXR1cm4ge0lEQkRhdGFiYXNlfHVuZGVmaW5lZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZ2V0IGRiKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW5zIGEgY29ubmVjdGVkIHRvIGFuIElEQkRhdGFiYXNlLCBpbnZva2VzIGFueSBvbnVwZ3JhZGVkbmVlZGVkXG4gICAgICogY2FsbGJhY2ssIGFuZCBhZGRlZCBhbiBvbnZlcnNpb25jaGFuZ2UgY2FsbGJhY2sgdG8gdGhlIGRhdGFiYXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SURCRGF0YWJhc2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5fZGIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX2RiID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyBmbGFnIGlzIGZsaXBwZWQgdG8gdHJ1ZSBpZiB0aGUgdGltZW91dCBjYWxsYmFjayBydW5zIHByaW9yXG4gICAgICAgICAgICAvLyB0byB0aGUgcmVxdWVzdCBmYWlsaW5nIG9yIHN1Y2NlZWRpbmcuIE5vdGU6IHdlIHVzZSBhIHRpbWVvdXQgaW5zdGVhZFxuICAgICAgICAgICAgLy8gb2YgYW4gb25ibG9ja2VkIGhhbmRsZXIgc2luY2UgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIG9uYmxvY2tlZCB3aWxsXG4gICAgICAgICAgICAvLyBuZXZlciBuZXZlciBydW4uIEEgdGltZW91dCBiZXR0ZXIgaGFuZGxlcyBhbGwgcG9zc2libGUgc2NlbmFyaW9zOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbmRleGVkREIvaXNzdWVzLzIyM1xuICAgICAgICAgICAgbGV0IG9wZW5SZXF1ZXN0VGltZWRPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5SZXF1ZXN0VGltZWRPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZSBvcGVuIHJlcXVlc3Qgd2FzIGJsb2NrZWQgYW5kIHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgIH0sIHRoaXMuT1BFTl9USU1FT1VUKTtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpcy5fbmFtZSwgdGhpcy5fdmVyc2lvbik7XG4gICAgICAgICAgICBvcGVuUmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG9wZW5SZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3BlblJlcXVlc3RUaW1lZE91dCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuUmVxdWVzdC50cmFuc2FjdGlvbi5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuUmVxdWVzdC5yZXN1bHQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuX29udXBncmFkZW5lZWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbnVwZ3JhZGVuZWVkZWQoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChvcGVuUmVxdWVzdFRpbWVkT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYi5vbnZlcnNpb25jaGFuZ2UgPSB0aGlzLl9vbnZlcnNpb25jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQb2x5ZmlsbHMgdGhlIG5hdGl2ZSBgZ2V0S2V5KClgIG1ldGhvZC4gTm90ZSwgdGhpcyBpcyBvdmVycmlkZGVuIGF0XG4gICAgICogcnVudGltZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgbmF0aXZlIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVcbiAgICAgKiBAcGFyYW0geyp9IHF1ZXJ5XG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRLZXkoc3RvcmVOYW1lLCBxdWVyeSkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0QWxsS2V5cyhzdG9yZU5hbWUsIHF1ZXJ5LCAxKSlbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBvbHlmaWxscyB0aGUgbmF0aXZlIGBnZXRBbGwoKWAgbWV0aG9kLiBOb3RlLCB0aGlzIGlzIG92ZXJyaWRkZW4gYXRcbiAgICAgKiBydW50aW1lIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBuYXRpdmUgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gcXVlcnlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIGdldEFsbChzdG9yZU5hbWUsIHF1ZXJ5LCBjb3VudCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBbGxNYXRjaGluZyhzdG9yZU5hbWUsIHsgcXVlcnksIGNvdW50IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQb2x5ZmlsbHMgdGhlIG5hdGl2ZSBgZ2V0QWxsS2V5cygpYCBtZXRob2QuIE5vdGUsIHRoaXMgaXMgb3ZlcnJpZGRlbiBhdFxuICAgICAqIHJ1bnRpbWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIG5hdGl2ZSBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lXG4gICAgICogQHBhcmFtIHsqfSBxdWVyeVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsS2V5cyhzdG9yZU5hbWUsIHF1ZXJ5LCBjb3VudCkge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpcy5nZXRBbGxNYXRjaGluZyhzdG9yZU5hbWUsIHsgcXVlcnksIGNvdW50LCBpbmNsdWRlS2V5czogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKChlbnRyeSkgPT4gZW50cnkua2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VwcG9ydHMgZmxleGlibGUgbG9va3VwIGluIGFuIG9iamVjdCBzdG9yZSBieSBzcGVjaWZ5aW5nIGFuIGluZGV4LFxuICAgICAqIHF1ZXJ5LCBkaXJlY3Rpb24sIGFuZCBjb3VudC4gVGhpcyBtZXRob2QgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICogd2l0aCB0aGUgc2lnbmF0dXJlIC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmluZGV4XSBUaGUgaW5kZXggdG8gdXNlIChpZiBzcGVjaWZpZWQpLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdHMucXVlcnldXG4gICAgICogQHBhcmFtIHtJREJDdXJzb3JEaXJlY3Rpb259IFtvcHRzLmRpcmVjdGlvbl1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdHMuY291bnRdIFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUtleXNdIFdoZW4gdHJ1ZSwgdGhlIHN0cnVjdHVyZSBvZiB0aGVcbiAgICAgKiAgICAgcmV0dXJuZWQgb2JqZWN0cyBpcyBjaGFuZ2VkIGZyb20gYW4gYXJyYXkgb2YgdmFsdWVzIHRvIGFuIGFycmF5IG9mXG4gICAgICogICAgIG9iamVjdHMgaW4gdGhlIGZvcm0ge2tleSwgcHJpbWFyeUtleSwgdmFsdWV9LlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsTWF0Y2hpbmcoc3RvcmVOYW1lLCB7IGluZGV4LCBxdWVyeSA9IG51bGwsIC8vIElFL0VkZ2UgZXJyb3JzIGlmIHF1ZXJ5ID09PSBgdW5kZWZpbmVkYC5cbiAgICBkaXJlY3Rpb24gPSAnbmV4dCcsIGNvdW50LCBpbmNsdWRlS2V5cyA9IGZhbHNlLCB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudHJhbnNhY3Rpb24oW3N0b3JlTmFtZV0sICdyZWFkb25seScsICh0eG4sIGRvbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHhuLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmRleCA/IHN0b3JlLmluZGV4KGluZGV4KSA6IHN0b3JlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRhcmdldC5vcGVuQ3Vyc29yKHF1ZXJ5LCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gcmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goaW5jbHVkZUtleXMgPyBjdXJzb3IgOiBjdXJzb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgJiYgcmVzdWx0cy5sZW5ndGggPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZShyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXB0cyBhIGxpc3Qgb2Ygc3RvcmVzLCBhIHRyYW5zYWN0aW9uIHR5cGUsIGFuZCBhIGNhbGxiYWNrIGFuZFxuICAgICAqIHBlcmZvcm1zIGEgdHJhbnNhY3Rpb24uIEEgcHJvbWlzZSBpcyByZXR1cm5lZCB0aGF0IHJlc29sdmVzIHRvIHdoYXRldmVyXG4gICAgICogdmFsdWUgdGhlIGNhbGxiYWNrIGNob29zZXMuIFRoZSBjYWxsYmFjayBob2xkcyBhbGwgdGhlIHRyYW5zYWN0aW9uIGxvZ2ljXG4gICAgICogYW5kIGlzIGludm9rZWQgd2l0aCB0d28gYXJndW1lbnRzOlxuICAgICAqICAgMS4gVGhlIElEQlRyYW5zYWN0aW9uIG9iamVjdFxuICAgICAqICAgMi4gQSBgZG9uZWAgZnVuY3Rpb24sIHRoYXQncyB1c2VkIHRvIHJlc29sdmUgdGhlIHByb21pc2Ugd2hlblxuICAgICAqICAgICAgd2hlbiB0aGUgdHJhbnNhY3Rpb24gaXMgZG9uZSwgaWYgcGFzc2VkIGEgdmFsdWUsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICAgICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzdG9yZU5hbWVzIEFuIGFycmF5IG9mIG9iamVjdCBzdG9yZSBuYW1lc1xuICAgICAqICAgICBpbnZvbHZlZCBpbiB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgQ2FuIGJlIGByZWFkb25seWAgb3IgYHJlYWR3cml0ZWAuXG4gICAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHJlc3VsdCBvZiB0aGUgdHJhbnNhY3Rpb24gcmFuIGJ5IHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIHRyYW5zYWN0aW9uKHN0b3JlTmFtZXMsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbigpO1xuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHhuID0gdGhpcy5fZGIudHJhbnNhY3Rpb24oc3RvcmVOYW1lcywgdHlwZSk7XG4gICAgICAgICAgICB0eG4ub25hYm9ydCA9ICgpID0+IHJlamVjdCh0eG4uZXJyb3IpO1xuICAgICAgICAgICAgdHhuLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICBjYWxsYmFjayh0eG4sICh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZWdhdGVzIGFzeW5jIHRvIGEgbmF0aXZlIElEQk9iamVjdFN0b3JlIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIG1ldGhvZCBuYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWUgVGhlIG9iamVjdCBzdG9yZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIENhbiBiZSBgcmVhZG9ubHlgIG9yIGByZWFkd3JpdGVgLlxuICAgICAqIEBwYXJhbSB7Li4uKn0gYXJncyBUaGUgbGlzdCBvZiBhcmdzIHRvIHBhc3MgdG8gdGhlIG5hdGl2ZSBtZXRob2QuXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHJlc3VsdCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfY2FsbChtZXRob2QsIHN0b3JlTmFtZSwgdHlwZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICh0eG4sIGRvbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ialN0b3JlID0gdHhuLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IEZpeCB0aGlzIHVuZGVybHlpbmcgVFMyNjg0IGVycm9yLlxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9ialN0b3JlW21ldGhvZF0uYXBwbHkob2JqU3RvcmUsIGFyZ3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiBkb25lKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudHJhbnNhY3Rpb24oW3N0b3JlTmFtZV0sIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uIG9wZW5lZCBieSBgREJXcmFwcGVyLm9wZW4oKWAuIEdlbmVyYWxseSB0aGlzIG1ldGhvZFxuICAgICAqIGRvZXNuJ3QgbmVlZCB0byBiZSBjYWxsZWQgc2luY2U6XG4gICAgICogICAxLiBJdCdzIHVzdWFsbHkgYmV0dGVyIHRvIGtlZXAgYSBjb25uZWN0aW9uIG9wZW4gc2luY2Ugb3BlbmluZ1xuICAgICAqICAgICAgYSBuZXcgY29ubmVjdGlvbiBpcyBzb21ld2hhdCBzbG93LlxuICAgICAqICAgMi4gQ29ubmVjdGlvbnMgYXJlIGF1dG9tYXRpY2FsbHkgY2xvc2VkIHdoZW4gdGhlIHJlZmVyZW5jZSBpc1xuICAgICAqICAgICAgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICogVGhlIHByaW1hcnkgdXNlIGNhc2UgZm9yIG5lZWRpbmcgdG8gY2xvc2UgYSBjb25uZWN0aW9uIGlzIHdoZW4gYW5vdGhlclxuICAgICAqIHJlZmVyZW5jZSAodHlwaWNhbGx5IGluIGFub3RoZXIgdGFiKSBuZWVkcyB0byB1cGdyYWRlIGl0IGFuZCB3b3VsZCBiZVxuICAgICAqIGJsb2NrZWQgYnkgdGhlIGN1cnJlbnQsIG9wZW4gY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYikge1xuICAgICAgICAgICAgdGhpcy5fZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2RiID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIEV4cG9zZWQgb24gdGhlIHByb3RvdHlwZSB0byBsZXQgdXNlcnMgbW9kaWZ5IHRoZSBkZWZhdWx0IHRpbWVvdXQgb24gYVxuLy8gcGVyLWluc3RhbmNlIG9yIGdsb2JhbCBiYXNpcy5cbkRCV3JhcHBlci5wcm90b3R5cGUuT1BFTl9USU1FT1VUID0gMjAwMDtcbi8vIFdyYXAgbmF0aXZlIElEQk9iamVjdFN0b3JlIG1ldGhvZHMgYWNjb3JkaW5nIHRvIHRoZWlyIG1vZGUuXG5jb25zdCBtZXRob2RzVG9XcmFwID0ge1xuICAgIHJlYWRvbmx5OiBbJ2dldCcsICdjb3VudCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnXSxcbiAgICByZWFkd3JpdGU6IFsnYWRkJywgJ3B1dCcsICdjbGVhcicsICdkZWxldGUnXSxcbn07XG5mb3IgKGNvbnN0IFttb2RlLCBtZXRob2RzXSBvZiBPYmplY3QuZW50cmllcyhtZXRob2RzVG9XcmFwKSkge1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiBJREJPYmplY3RTdG9yZS5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHVzZSBhcnJvdyBmdW5jdGlvbnMgaGVyZSBzaW5jZSB3ZSdyZSBvdXRzaWRlIG9mIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIERCV3JhcHBlci5wcm90b3R5cGVbbWV0aG9kXSA9XG4gICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKHN0b3JlTmFtZSwgLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fY2FsbChtZXRob2QsIHN0b3JlTmFtZSwgbW9kZSwgLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgRGVmZXJyZWQgY2xhc3MgY29tcG9zZXMgUHJvbWlzZXMgaW4gYSB3YXkgdGhhdCBhbGxvd3MgZm9yIHRoZW0gdG8gYmVcbiAqIHJlc29sdmVkIG9yIHJlamVjdGVkIGZyb20gb3V0c2lkZSB0aGUgY29uc3RydWN0b3IuIEluIG1vc3QgY2FzZXMgcHJvbWlzZXNcbiAqIHNob3VsZCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgRGVmZXJyZWRzIGNhbiBiZSBuZWNlc3Nhcnkgd2hlbiB0aGUgbG9naWMgdG9cbiAqIHJlc29sdmUgYSBwcm9taXNlIG11c3QgYmUgc2VwYXJhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVmZXJyZWQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGVmZXJyZWQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG1lc3NhZ2VHZW5lcmF0b3IgfSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBkZXRhaWxzIEFueSByZWxldmFudCBhcmd1bWVudHNcbiAgICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgfVxufVxuZXhwb3J0IHsgV29ya2JveEVycm9yIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaGFzTWV0aG9kID0gKG9iamVjdCwgZXhwZWN0ZWRNZXRob2QsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdFtleHBlY3RlZE1ldGhvZF07XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRNZXRob2QnXSA9IGV4cGVjdGVkTWV0aG9kO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzVHlwZSA9IChvYmplY3QsIGV4cGVjdGVkVHlwZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzSW5zdGFuY2UgPSAob2JqZWN0LCBleHBlY3RlZENsYXNzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRDbGFzcyddID0gZXhwZWN0ZWRDbGFzcztcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzT25lT2YgPSAodmFsdWUsIHZhbGlkVmFsdWVzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPVxuICAgICAgICAgICAgYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeSh2YWxpZFZhbHVlcyl9LmA7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtdmFsdWUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNBcnJheU9mQ2xhc3MgPSAodmFsdWUsIGV4cGVjdGVkQ2xhc3MsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIGRldGFpbHMpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBudWxsIDoge1xuICAgIGhhc01ldGhvZCxcbiAgICBpc0FycmF5LFxuICAgIGlzSW5zdGFuY2UsXG4gICAgaXNPbmVPZixcbiAgICBpc1R5cGUsXG4gICAgaXNBcnJheU9mQ2xhc3MsXG59O1xuZXhwb3J0IHsgZmluYWxBc3NlcnRFeHBvcnRzIGFzIGFzc2VydCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBfY2FjaGVOYW1lRGV0YWlscyA9IHtcbiAgICBnb29nbGVBbmFseXRpY3M6ICdnb29nbGVBbmFseXRpY3MnLFxuICAgIHByZWNhY2hlOiAncHJlY2FjaGUtdjInLFxuICAgIHByZWZpeDogJ3dvcmtib3gnLFxuICAgIHJ1bnRpbWU6ICdydW50aW1lJyxcbiAgICBzdWZmaXg6IHR5cGVvZiByZWdpc3RyYXRpb24gIT09ICd1bmRlZmluZWQnID8gcmVnaXN0cmF0aW9uLnNjb3BlIDogJycsXG59O1xuY29uc3QgX2NyZWF0ZUNhY2hlTmFtZSA9IChjYWNoZU5hbWUpID0+IHtcbiAgICByZXR1cm4gW19jYWNoZU5hbWVEZXRhaWxzLnByZWZpeCwgY2FjaGVOYW1lLCBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXhdXG4gICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAuam9pbignLScpO1xufTtcbmNvbnN0IGVhY2hDYWNoZU5hbWVEZXRhaWwgPSAoZm4pID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhfY2FjaGVOYW1lRGV0YWlscykpIHtcbiAgICAgICAgZm4oa2V5KTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gICAgdXBkYXRlRGV0YWlsczogKGRldGFpbHMpID0+IHtcbiAgICAgICAgZWFjaENhY2hlTmFtZURldGFpbCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBfY2FjaGVOYW1lRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldEdvb2dsZUFuYWx5dGljc05hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMuZ29vZ2xlQW5hbHl0aWNzKTtcbiAgICB9LFxuICAgIGdldFByZWNhY2hlTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5wcmVjYWNoZSk7XG4gICAgfSxcbiAgICBnZXRQcmVmaXg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnByZWZpeDtcbiAgICB9LFxuICAgIGdldFJ1bnRpbWVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnJ1bnRpbWUpO1xuICAgIH0sXG4gICAgZ2V0U3VmZml4OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXg7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4vZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICcuL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyLmpzJztcbmltcG9ydCB7IHBsdWdpblV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvcGx1Z2luVXRpbHMuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIENoZWNrcyB0aGUgbGlzdCBvZiBwbHVnaW5zIGZvciB0aGUgY2FjaGVLZXlXaWxsQmVVc2VkIGNhbGxiYWNrLCBhbmRcbiAqIGV4ZWN1dGVzIGFueSBvZiB0aG9zZSBjYWxsYmFja3MgZm91bmQgaW4gc2VxdWVuY2UuIFRoZSBmaW5hbCBgUmVxdWVzdGAgb2JqZWN0XG4gKiByZXR1cm5lZCBieSB0aGUgbGFzdCBwbHVnaW4gaXMgdHJlYXRlZCBhcyB0aGUgY2FjaGUga2V5IGZvciBjYWNoZSByZWFkc1xuICogYW5kL29yIHdyaXRlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1vZGVcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV1cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVxdWVzdD59XG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IF9nZXRFZmZlY3RpdmVSZXF1ZXN0ID0gYXN5bmMgKHsgcmVxdWVzdCwgbW9kZSwgcGx1Z2lucyA9IFtdLCB9KSA9PiB7XG4gICAgY29uc3QgY2FjaGVLZXlXaWxsQmVVc2VkUGx1Z2lucyA9IHBsdWdpblV0aWxzLmZpbHRlcihwbHVnaW5zLCBcImNhY2hlS2V5V2lsbEJlVXNlZFwiIC8qIENBQ0hFX0tFWV9XSUxMX0JFX1VTRUQgKi8pO1xuICAgIGxldCBlZmZlY3RpdmVSZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBjYWNoZUtleVdpbGxCZVVzZWRQbHVnaW5zKSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCBwbHVnaW5bXCJjYWNoZUtleVdpbGxCZVVzZWRcIiAvKiBDQUNIRV9LRVlfV0lMTF9CRV9VU0VEICovXS5jYWxsKHBsdWdpbiwgeyBtb2RlLCByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0IH0pO1xuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdGl2ZVJlcXVlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZWZmZWN0aXZlUmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKGVmZmVjdGl2ZVJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogXCJjYWNoZUtleVdpbGxCZVVzZWRcIiAvKiBDQUNIRV9LRVlfV0lMTF9CRV9VU0VEICovLFxuICAgICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVmZmVjdGl2ZVJlcXVlc3Q7XG59O1xuLyoqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zPVtdXVxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IF9pc1Jlc3BvbnNlU2FmZVRvQ2FjaGUgPSBhc3luYyAoeyByZXF1ZXN0LCByZXNwb25zZSwgZXZlbnQsIHBsdWdpbnMgPSBbXSwgfSkgPT4ge1xuICAgIGxldCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZTtcbiAgICBsZXQgcGx1Z2luc1VzZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgIGlmIChcImNhY2hlV2lsbFVwZGF0ZVwiIC8qIENBQ0hFX1dJTExfVVBEQVRFICovIGluIHBsdWdpbikge1xuICAgICAgICAgICAgcGx1Z2luc1VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luTWV0aG9kID0gcGx1Z2luW1wiY2FjaGVXaWxsVXBkYXRlXCIgLyogQ0FDSEVfV0lMTF9VUERBVEUgKi9dO1xuICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gYXdhaXQgcGx1Z2luTWV0aG9kLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVzcG9uc2VUb0NhY2hlLCBSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogXCJjYWNoZVdpbGxVcGRhdGVcIiAvKiBDQUNIRV9XSUxMX1VQREFURSAqLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHJlc3BvbnNlIGZvciAnJHtyZXF1ZXN0LnVybH0nIGlzIGFuIG9wYXF1ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcmVzcG9uc2UuIFRoZSBjYWNoaW5nIHN0cmF0ZWd5IHRoYXQgeW91J3JlIHVzaW5nIHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjYWNoZSBvcGFxdWUgcmVzcG9uc2VzIGJ5IGRlZmF1bHQuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSByZXNwb25zZSBmb3IgJyR7cmVxdWVzdC51cmx9JyByZXR1cm5lZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYSBzdGF0dXMgY29kZSBvZiAnJHtyZXNwb25zZS5zdGF0dXN9JyBhbmQgd29uJ3QgYmUgY2FjaGVkIGFzIGEgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJlc3VsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyA9PT0gMjAwID9cbiAgICAgICAgICAgIHJlc3BvbnNlVG9DYWNoZSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlVG9DYWNoZSA/IHJlc3BvbnNlVG9DYWNoZSA6IG51bGw7XG59O1xuLyoqXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBhcm91bmQgY2FjaGUubWF0Y2goKS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgUmVxdWVzdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBsb29rIHVwXG4gKiAgICAgY2FjaGUgZW50cmllcy5cbiAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgZXZlbnQgdGhhdCBwcm9tcHRlZCB0aGUgYWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gT3B0aW9ucyBwYXNzZWQgdG8gY2FjaGUubWF0Y2goKS5cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV0gQXJyYXkgb2YgcGx1Z2lucy5cbiAqIEByZXR1cm4ge1Jlc3BvbnNlfSBBIGNhY2hlZCByZXNwb25zZSBpZiBhdmFpbGFibGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IG1hdGNoV3JhcHBlciA9IGFzeW5jICh7IGNhY2hlTmFtZSwgcmVxdWVzdCwgZXZlbnQsIG1hdGNoT3B0aW9ucywgcGx1Z2lucyA9IFtdLCB9KSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG4gICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IF9nZXRFZmZlY3RpdmVSZXF1ZXN0KHtcbiAgICAgICAgcGx1Z2lucywgcmVxdWVzdCwgbW9kZTogJ3JlYWQnXG4gICAgfSk7XG4gICAgbGV0IGNhY2hlZFJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbWF0Y2hPcHRpb25zKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5vIGNhY2hlZCByZXNwb25zZSBmb3VuZCBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgIGlmIChcImNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZFwiIC8qIENBQ0hFRF9SRVNQT05TRV9XSUxMX0JFX1VTRUQgKi8gaW4gcGx1Z2luKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW5NZXRob2QgPSBwbHVnaW5bXCJjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWRcIiAvKiBDQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VEICovXTtcbiAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlID0gYXdhaXQgcGx1Z2luTWV0aG9kLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIG1hdGNoT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShjYWNoZWRSZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IFwiY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkXCIgLyogQ0FDSEVEX1JFU1BPTlNFX1dJTExfQkVfVVNFRCAqLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xufTtcbi8qKlxuICogV3JhcHBlciBhcm91bmQgY2FjaGUucHV0KCkuXG4gKlxuICogV2lsbCBjYWxsIGBjYWNoZURpZFVwZGF0ZWAgb24gcGx1Z2lucyBpZiB0aGUgY2FjaGUgd2FzIHVwZGF0ZWQsIHVzaW5nXG4gKiBgbWF0Y2hPcHRpb25zYCB3aGVuIGRldGVybWluaW5nIHdoYXQgdGhlIG9sZCBlbnRyeSBpcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnM9W11dXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXVxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCBwdXRXcmFwcGVyID0gYXN5bmMgKHsgY2FjaGVOYW1lLCByZXF1ZXN0LCByZXNwb25zZSwgZXZlbnQsIHBsdWdpbnMgPSBbXSwgbWF0Y2hPcHRpb25zLCB9KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QubWV0aG9kICYmIHJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCksXG4gICAgICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCBfZ2V0RWZmZWN0aXZlUmVxdWVzdCh7XG4gICAgICAgIHBsdWdpbnMsIHJlcXVlc3QsIG1vZGU6ICd3cml0ZSdcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2VUb0NhY2hlID0gYXdhaXQgX2lzUmVzcG9uc2VTYWZlVG9DYWNoZSh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBwbHVnaW5zLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXNwb25zZSAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9JyB3aWxsIGAgK1xuICAgICAgICAgICAgICAgIGBub3QgYmUgY2FjaGVkLmAsIHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcbiAgICBjb25zdCB1cGRhdGVQbHVnaW5zID0gcGx1Z2luVXRpbHMuZmlsdGVyKHBsdWdpbnMsIFwiY2FjaGVEaWRVcGRhdGVcIiAvKiBDQUNIRV9ESURfVVBEQVRFICovKTtcbiAgICBjb25zdCBvbGRSZXNwb25zZSA9IHVwZGF0ZVBsdWdpbnMubGVuZ3RoID4gMCA/XG4gICAgICAgIGF3YWl0IG1hdGNoV3JhcHBlcih7IGNhY2hlTmFtZSwgbWF0Y2hPcHRpb25zLCByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0IH0pIDpcbiAgICAgICAgbnVsbDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoYFVwZGF0aW5nIHRoZSAnJHtjYWNoZU5hbWV9JyBjYWNoZSB3aXRoIGEgbmV3IFJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCByZXNwb25zZVRvQ2FjaGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24jZXhjZXB0aW9uLVF1b3RhRXhjZWVkZWRFcnJvclxuICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHVwZGF0ZVBsdWdpbnMpIHtcbiAgICAgICAgYXdhaXQgcGx1Z2luW1wiY2FjaGVEaWRVcGRhdGVcIiAvKiBDQUNIRV9ESURfVVBEQVRFICovXS5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBvbGRSZXNwb25zZSxcbiAgICAgICAgICAgIG5ld1Jlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGNhY2hlV3JhcHBlciA9IHtcbiAgICBwdXQ6IHB1dFdyYXBwZXIsXG4gICAgbWF0Y2g6IG1hdGNoV3JhcHBlcixcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBzdXBwb3J0U3RhdHVzO1xuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0c1xuICogY29uc3RydWN0aW5nIGEgW2BSZWFkYWJsZVN0cmVhbWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZWFkYWJsZVN0cmVhbS9SZWFkYWJsZVN0cmVhbSlcbiAqIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAsIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgY2FuIHN1Y2Nlc3NmdWxseVxuICogICAgIGNvbnN0cnVjdCBhIGBSZWFkYWJsZVN0cmVhbWAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtKCkge1xuICAgIGlmIChzdXBwb3J0U3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTQ3M1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IFJlYWRhYmxlU3RyZWFtKHsgc3RhcnQoKSB7IH0gfSk7XG4gICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydFN0YXR1cztcbn1cbmV4cG9ydCB7IGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBzdXBwb3J0U3RhdHVzO1xuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0c1xuICogY29uc3RydWN0aW5nIGEgbmV3IGBSZXNwb25zZWAgZnJvbSBhIGByZXNwb25zZS5ib2R5YCBzdHJlYW0uXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgLCBpZiB0aGUgY3VycmVudCBicm93c2VyIGNhbiBzdWNjZXNzZnVsbHlcbiAqICAgICBjb25zdHJ1Y3QgYSBgUmVzcG9uc2VgIGZyb20gYSBgcmVzcG9uc2UuYm9keWAgc3RyZWFtLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtKCkge1xuICAgIGlmIChzdXBwb3J0U3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdGVzdFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKCcnKTtcbiAgICAgICAgaWYgKCdib2R5JyBpbiB0ZXN0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IFJlc3BvbnNlKHRlc3RSZXNwb25zZS5ib2R5KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0U3RhdHVzO1xufVxuZXhwb3J0IHsgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIERlbGV0ZXMgdGhlIGRhdGFiYXNlLlxuICogTm90ZTogdGhpcyBpcyBleHBvcnRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIERCV3JhcHBlciBtb2R1bGUgYmVjYXVzZSBtb3N0XG4gKiB1c2FnZXMgb2YgSW5kZXhlZERCIGluIHdvcmtib3ggZG9udCBuZWVkIGRlbGV0aW5nLCBhbmQgdGhpcyB3YXkgaXQgY2FuIGJlXG4gKiByZXVzZWQgaW4gdGVzdHMgdG8gZGVsZXRlIGRhdGFiYXNlcyB3aXRob3V0IGNyZWF0aW5nIERCV3JhcHBlciBpbnN0YW5jZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGRhdGFiYXNlIG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YWJhc2UgPSBhc3luYyAobmFtZSkgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uYmxvY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0RlbGV0ZSBibG9ja2VkJykpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcHJldmVudHMgYSBwcm9taXNlIGZyb20gYmVpbmcgZmxhZ2dlZCBhcyB1bnVzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBkb250V2FpdEZvcihwcm9taXNlKSB7XG4gICAgLy8gRWZmZWN0aXZlIG5vLW9wLlxuICAgIHByb21pc2UudGhlbigoKSA9PiB7IH0pO1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogUnVucyBhbGwgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucywgb25lIGF0IGEgdGltZSBzZXF1ZW50aWFsbHksIGluIHRoZSBvcmRlclxuICogaW4gd2hpY2ggdGhleSB3ZXJlIHJlZ2lzdGVyZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coYEFib3V0IHRvIHJ1biAke3F1b3RhRXJyb3JDYWxsYmFja3Muc2l6ZX0gYCArXG4gICAgICAgICAgICBgY2FsbGJhY2tzIHRvIGNsZWFuIHVwIGNhY2hlcy5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBxdW90YUVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGNhbGxiYWNrLCAnaXMgY29tcGxldGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcnVubmluZyBjYWxsYmFja3MuJyk7XG4gICAgfVxufVxuZXhwb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyLmpzJztcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vYXNzZXJ0LmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnLi4vX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgcGx1Z2luVXRpbHMgfSBmcm9tICcuLi91dGlscy9wbHVnaW5VdGlscy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogV3JhcHBlciBhcm91bmQgdGhlIGZldGNoIEFQSS5cbiAqXG4gKiBXaWxsIGNhbGwgcmVxdWVzdFdpbGxGZXRjaCBvbiBhdmFpbGFibGUgcGx1Z2lucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXVxuICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IFtvcHRpb25zLmV2ZW50XVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zPVtdXVxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IHdyYXBwZWRGZXRjaCA9IGFzeW5jICh7IHJlcXVlc3QsIGZldGNoT3B0aW9ucywgZXZlbnQsIHBsdWdpbnMgPSBbXSwgfSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgIH1cbiAgICAvLyBXZSAqc2hvdWxkKiBiZSBhYmxlIHRvIGNhbGwgYGF3YWl0IGV2ZW50LnByZWxvYWRSZXNwb25zZWAgZXZlbiBpZiBpdCdzXG4gICAgLy8gdW5kZWZpbmVkLCBidXQgZm9yIHNvbWUgcmVhc29uLCBkb2luZyBzbyBsZWFkcyB0byBlcnJvcnMgaW4gb3VyIE5vZGUgdW5pdFxuICAgIC8vIHRlc3RzLiBUbyB3b3JrIGFyb3VuZCB0aGF0LCBleHBsaWNpdGx5IGNoZWNrIHByZWxvYWRSZXNwb25zZSdzIHZhbHVlIGZpcnN0LlxuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEZldGNoRXZlbnQgJiYgZXZlbnQucHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICBpZiAocG9zc2libGVQcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgZXhwZWN0ZWRDbGFzczogUmVxdWVzdCxcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZmV0Y2hXcmFwcGVyJyxcbiAgICAgICAgICAgIGZ1bmNOYW1lOiAnd3JhcHBlZEZldGNoJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGZhaWxlZEZldGNoUGx1Z2lucyA9IHBsdWdpblV0aWxzLmZpbHRlcihwbHVnaW5zLCBcImZldGNoRGlkRmFpbFwiIC8qIEZFVENIX0RJRF9GQUlMICovKTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhIGZldGNoRGlkRmFpbCBwbHVnaW4sIHdlIG5lZWQgdG8gc2F2ZSBhIGNsb25lIG9mIHRoZVxuICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGZhaWxlZEZldGNoUGx1Z2lucy5sZW5ndGggPiAwID9cbiAgICAgICAgcmVxdWVzdC5jbG9uZSgpIDogbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgICAgICBpZiAoXCJyZXF1ZXN0V2lsbEZldGNoXCIgLyogUkVRVUVTVF9XSUxMX0ZFVENIICovIGluIHBsdWdpbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbk1ldGhvZCA9IHBsdWdpbltcInJlcXVlc3RXaWxsRmV0Y2hcIiAvKiBSRVFVRVNUX1dJTExfRkVUQ0ggKi9dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDbG9uZSA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0ID0gYXdhaXQgcGx1Z2luTWV0aG9kLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RDbG9uZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogXCJjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWRcIiAvKiBDQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VEICovLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgICAgICAgdGhyb3duRXJyb3I6IGVycixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgLy8gdGhlIG9yaWdpbmFsIHJlcXVlc3QgKE1vc3QgbGlrZWx5IGZyb20gYSBgZmV0Y2hgIGV2ZW50KSB0byBiZSBkaWZmZXJlbnRcbiAgICAvLyB0byB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICBjb25zdCBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGZldGNoUmVzcG9uc2U7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTZcbiAgICAgICAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJykge1xuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB3aXRoIGAgK1xuICAgICAgICAgICAgICAgIGBzdGF0dXMgJyR7ZmV0Y2hSZXNwb25zZS5zdGF0dXN9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgICAgICBpZiAoXCJmZXRjaERpZFN1Y2NlZWRcIiAvKiBGRVRDSF9ESURfU1VDQ0VFRCAqLyBpbiBwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgcGx1Z2luW1wiZmV0Y2hEaWRTdWNjZWVkXCIgLyogRkVUQ0hfRElEX1NVQ0NFRUQgKi9dXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZmV0Y2hSZXNwb25zZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmV0Y2hSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UoZmV0Y2hSZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogXCJmZXRjaERpZFN1Y2NlZWRcIiAvKiBGRVRDSF9ESURfU1VDQ0VFRCAqLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JldHVyblZhbHVlUHJvYmxlbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgdGhyZXcgYW4gZXJyb3IuYCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIGZhaWxlZEZldGNoUGx1Z2lucykge1xuICAgICAgICAgICAgYXdhaXQgcGx1Z2luW1wiZmV0Y2hEaWRGYWlsXCIgLyogRkVUQ0hfRElEX0ZBSUwgKi9dLmNhbGwocGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0OiBvcmlnaW5hbFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn07XG5jb25zdCBmZXRjaFdyYXBwZXIgPSB7XG4gICAgZmV0Y2g6IHdyYXBwZWRGZXRjaCxcbn07XG5leHBvcnQgeyBmZXRjaFdyYXBwZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgZ2V0RnJpZW5kbHlVUkwgPSAodXJsKSA9PiB7XG4gICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChTdHJpbmcodXJsKSwgbG9jYXRpb24uaHJlZik7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjMyM1xuICAgIC8vIFdlIHdhbnQgdG8gaW5jbHVkZSBldmVyeXRoaW5nLCBleGNlcHQgZm9yIHRoZSBvcmlnaW4gaWYgaXQncyBzYW1lLW9yaWdpbi5cbiAgICByZXR1cm4gdXJsT2JqLmhyZWYucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtsb2NhdGlvbi5vcmlnaW59YCksICcnKTtcbn07XG5leHBvcnQgeyBnZXRGcmllbmRseVVSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgbG9nZ2VyID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBudWxsIDogKCgpID0+IHtcbiAgICAvLyBEb24ndCBvdmVyd3JpdGUgdGhpcyB2YWx1ZSBpZiBpdCdzIGFscmVhZHkgc2V0LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMjg0I2lzc3VlY29tbWVudC01NjA0NzA5MjNcbiAgICBpZiAoISgnX19XQl9ESVNBQkxFX0RFVl9MT0dTJyBpbiBzZWxmKSkge1xuICAgICAgICBzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUyA9IGZhbHNlO1xuICAgIH1cbiAgICBsZXQgaW5Hcm91cCA9IGZhbHNlO1xuICAgIGNvbnN0IG1ldGhvZFRvQ29sb3JNYXAgPSB7XG4gICAgICAgIGRlYnVnOiBgIzdmOGM4ZGAsXG4gICAgICAgIGxvZzogYCMyZWNjNzFgLFxuICAgICAgICB3YXJuOiBgI2YzOWMxMmAsXG4gICAgICAgIGVycm9yOiBgI2MwMzkyYmAsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBgIzM0OThkYmAsXG4gICAgICAgIGdyb3VwRW5kOiBudWxsLFxuICAgIH07XG4gICAgY29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHByaW50IGFsbCBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCkgYXJndW1lbnRzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4Mjc1NFxuICAgICAgICAgICAgaWYgKC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgIGBiYWNrZ3JvdW5kOiAke21ldGhvZFRvQ29sb3JNYXBbbWV0aG9kXX1gLFxuICAgICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDAuNWVtYCxcbiAgICAgICAgICAgIGBjb2xvcjogd2hpdGVgLFxuICAgICAgICAgICAgYGZvbnQtd2VpZ2h0OiBib2xkYCxcbiAgICAgICAgICAgIGBwYWRkaW5nOiAycHggMC41ZW1gLFxuICAgICAgICBdO1xuICAgICAgICAvLyBXaGVuIGluIGEgZ3JvdXAsIHRoZSB3b3JrYm94IHByZWZpeCBpcyBub3QgZGlzcGxheWVkLlxuICAgICAgICBjb25zdCBsb2dQcmVmaXggPSBpbkdyb3VwID8gW10gOiBbJyVjd29ya2JveCcsIHN0eWxlcy5qb2luKCc7JyldO1xuICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgaW5Hcm91cCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwRW5kJykge1xuICAgICAgICAgICAgaW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhcGkgPSB7fTtcbiAgICBjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBrZXk7XG4gICAgICAgIGFwaVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59KSgpKTtcbmV4cG9ydCB7IGxvZ2dlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICcuL3RpbWVvdXQuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBNQVhfUkVUUllfVElNRSA9IDIwMDA7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSB3aW5kb3cgY2xpZW50IG1hdGNoaW5nIHRoZSBwYXNzZWRcbiAqIGByZXN1bHRpbmdDbGllbnRJZGAuIEZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgYHJlc3VsdGluZ0NsaWVudElkYFxuICogb3IgaWYgd2FpdGluZyBmb3IgdGhlIHJlc3VsdGluZyBjbGllbnQgdG8gYXBwZXIgdGFrZXMgdG9vIGxvbmcsIHJlc29sdmUgdG9cbiAqIGB1bmRlZmluZWRgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzdWx0aW5nQ2xpZW50SWRdXG4gKiBAcmV0dXJuIHtQcm9taXNlPENsaWVudHx1bmRlZmluZWQ+fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3VsdGluZ0NsaWVudEV4aXN0cyhyZXN1bHRpbmdDbGllbnRJZCkge1xuICAgIGlmICghcmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3RpbmdXaW5kb3dzID0gYXdhaXQgc2VsZi5jbGllbnRzLm1hdGNoQWxsKHsgdHlwZTogJ3dpbmRvdycgfSk7XG4gICAgY29uc3QgZXhpc3RpbmdXaW5kb3dJZHMgPSBuZXcgU2V0KGV4aXN0aW5nV2luZG93cy5tYXAoKHcpID0+IHcuaWQpKTtcbiAgICBsZXQgcmVzdWx0aW5nV2luZG93O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIE9ubHkgd2FpdCB1cCB0byBgTUFYX1JFVFJZX1RJTUVgIHRvIGZpbmQgYSBtYXRjaGluZyBjbGllbnQuXG4gICAgd2hpbGUgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lIDwgTUFYX1JFVFJZX1RJTUUpIHtcbiAgICAgICAgZXhpc3RpbmdXaW5kb3dzID0gYXdhaXQgc2VsZi5jbGllbnRzLm1hdGNoQWxsKHsgdHlwZTogJ3dpbmRvdycgfSk7XG4gICAgICAgIHJlc3VsdGluZ1dpbmRvdyA9IGV4aXN0aW5nV2luZG93cy5maW5kKCh3KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgYHJlc3VsdGluZ0NsaWVudElkYCwgd2UgY2FuIG1hdGNoIG9uIHRoYXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHcuaWQgPT09IHJlc3VsdGluZ0NsaWVudElkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG1hdGNoIG9uIGZpbmRpbmcgYSB3aW5kb3cgbm90IGluIGBleGlzdGluZ1dpbmRvd0lkc2AuXG4gICAgICAgICAgICAgICAgcmV0dXJuICFleGlzdGluZ1dpbmRvd0lkcy5oYXMody5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0aW5nV2luZG93KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBTbGVlcCBmb3IgMTAwbXMgYW5kIHJldHJ5LlxuICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRpbmdXaW5kb3c7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6Y29yZTo1LjEuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgYXMgX2NhY2hlTmFtZXMgfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IGNhY2hlIG5hbWVzIGFuZCBwcmVmaXgvc3VmZml4IHVzZWQgYnkgV29ya2JveC5cbiAqXG4gKiBgY2FjaGVOYW1lcy5wcmVjYWNoZWAgaXMgdXNlZCBmb3IgcHJlY2FjaGVkIGFzc2V0cyxcbiAqIGBjYWNoZU5hbWVzLmdvb2dsZUFuYWx5dGljc2AgaXMgdXNlZCBieSBgd29ya2JveC1nb29nbGUtYW5hbHl0aWNzYCB0b1xuICogc3RvcmUgYGFuYWx5dGljcy5qc2AsIGFuZCBgY2FjaGVOYW1lcy5ydW50aW1lYCBpcyB1c2VkIGZvciBldmVyeXRoaW5nIGVsc2UuXG4gKlxuICogYGNhY2hlTmFtZXMucHJlZml4YCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBqdXN0IHRoZSBjdXJyZW50IHByZWZpeCB2YWx1ZS5cbiAqIGBjYWNoZU5hbWVzLnN1ZmZpeGAgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUganVzdCB0aGUgY3VycmVudCBzdWZmaXggdmFsdWUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBgcHJlY2FjaGVgLCBgcnVudGltZWAsIGBwcmVmaXhgLCBhbmRcbiAqICAgICBgZ29vZ2xlQW5hbHl0aWNzYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gICAgZ2V0IGdvb2dsZUFuYWx5dGljcygpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldEdvb2dsZUFuYWx5dGljc05hbWUoKTtcbiAgICB9LFxuICAgIGdldCBwcmVjYWNoZSgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWZpeCgpO1xuICAgIH0sXG4gICAgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHN1ZmZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFN1ZmZpeCgpO1xuICAgIH0sXG59O1xuZXhwb3J0IHsgY2FjaGVOYW1lcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQ2xhaW0gYW55IGN1cnJlbnRseSBhdmFpbGFibGUgY2xpZW50cyBvbmNlIHRoZSBzZXJ2aWNlIHdvcmtlclxuICogYmVjb21lcyBhY3RpdmUuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBza2lwV2FpdGluZygpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5mdW5jdGlvbiBjbGllbnRzQ2xhaW0oKSB7XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsICgpID0+IHNlbGYuY2xpZW50cy5jbGFpbSgpKTtcbn1cbmV4cG9ydCB7IGNsaWVudHNDbGFpbSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSB9IGZyb20gJy4vX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbGxvd3MgZGV2ZWxvcGVycyB0byBjb3B5IGEgcmVzcG9uc2UgYW5kIG1vZGlmeSBpdHMgYGhlYWRlcnNgLCBgc3RhdHVzYCxcbiAqIG9yIGBzdGF0dXNUZXh0YCB2YWx1ZXMgKHRoZSB2YWx1ZXMgc2V0dGFibGUgdmlhIGFcbiAqIFtgUmVzcG9uc2VJbml0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlL1Jlc3BvbnNlI1N5bnRheH1cbiAqIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IpLlxuICogVG8gbW9kaWZ5IHRoZXNlIHZhbHVlcywgcGFzcyBhIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoYXRcbiAqIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSByZXNwb25zZSBwcm9wZXJ0aWVzXG4gKiBge2hlYWRlcnMsIHN0YXR1cywgc3RhdHVzVGV4dH1gLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gd2lsbFxuICogYmUgdXNlZCBhcyB0aGUgYFJlc3BvbnNlSW5pdGAgZm9yIHRoZSBuZXcgYFJlc3BvbnNlYC4gVG8gY2hhbmdlIHRoZSB2YWx1ZXNcbiAqIGVpdGhlciBtb2RpZnkgdGhlIHBhc3NlZCBwYXJhbWV0ZXIocykgYW5kIHJldHVybiBpdCwgb3IgcmV0dXJuIGEgdG90YWxseVxuICogbmV3IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvcHlSZXNwb25zZShyZXNwb25zZSwgbW9kaWZpZXIpIHtcbiAgICBjb25zdCBjbG9uZWRSZXNwb25zZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggYFJlc3BvbnNlSW5pdGAgb2JqZWN0IGJ5IGNsb25pbmcgdGhlIGhlYWRlcnMuXG4gICAgY29uc3QgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjbG9uZWRSZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiBjbG9uZWRSZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IGNsb25lZFJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgfTtcbiAgICAvLyBBcHBseSBhbnkgdXNlciBtb2RpZmljYXRpb25zLlxuICAgIGNvbnN0IG1vZGlmaWVkUmVzcG9uc2VJbml0ID0gbW9kaWZpZXIgPyBtb2RpZmllcihyZXNwb25zZUluaXQpIDogcmVzcG9uc2VJbml0O1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHJlc3BvbnNlIGZyb20gdGhlIGJvZHkgc3RyZWFtIGFuZCBgUmVzcG9uc2VJbml0YFxuICAgIC8vIG1vZGlmaWNhdGlvbnMuIE5vdGU6IG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sXG4gICAgLy8gc28gZmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIGVudGlyZSBib2R5IGludG8gbWVtb3J5IGFzIGEgYmxvYi5cbiAgICBjb25zdCBib2R5ID0gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpID9cbiAgICAgICAgY2xvbmVkUmVzcG9uc2UuYm9keSA6IGF3YWl0IGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG1vZGlmaWVkUmVzcG9uc2VJbml0KTtcbn1cbmV4cG9ydCB7IGNvcHlSZXNwb25zZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sgfSBmcm9tICcuL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCAqIGFzIF9wcml2YXRlIGZyb20gJy4vX3ByaXZhdGUuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBjb3B5UmVzcG9uc2UgfSBmcm9tICcuL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjbGllbnRzQ2xhaW0gfSBmcm9tICcuL2NsaWVudHNDbGFpbS5qcyc7XG5pbXBvcnQgeyBzZXRDYWNoZU5hbWVEZXRhaWxzIH0gZnJvbSAnLi9zZXRDYWNoZU5hbWVEZXRhaWxzLmpzJztcbmltcG9ydCB7IHNraXBXYWl0aW5nIH0gZnJvbSAnLi9za2lwV2FpdGluZy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbGwgb2YgdGhlIFdvcmtib3ggc2VydmljZSB3b3JrZXIgbGlicmFyaWVzIHVzZSB3b3JrYm94LWNvcmUgZm9yIHNoYXJlZFxuICogY29kZSBhcyB3ZWxsIGFzIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHNoYXJlZCAobGlrZSBjYWNoZVxuICogbmFtZXMpLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1jb3JlXG4gKi9cbmV4cG9ydCB7IF9wcml2YXRlLCBjYWNoZU5hbWVzLCBjbGllbnRzQ2xhaW0sIGNvcHlSZXNwb25zZSwgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2ssIHNldENhY2hlTmFtZURldGFpbHMsIHNraXBXYWl0aW5nLCB9O1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy5qcyc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG1zZyA9IGNvZGU7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG59O1xuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZSwgZGV0YWlscyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSA/XG4gICAgZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICdpbnZhbGlkLXZhbHVlJzogKHsgcGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgICAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYDtcbiAgICB9LFxuICAgICdub3QtYW4tYXJyYXknOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIW1vZHVsZU5hbWUgfHwgIWNsYXNzTmFtZSB8fCAhZnVuY05hbWUgfHwgIXBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdub3QtYW4tYXJyYXknIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC10eXBlJzogKHsgZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ31gICtcbiAgICAgICAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmA7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LWNsYXNzJzogKHsgZXhwZWN0ZWRDbGFzcywgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBpc1JldHVyblZhbHVlUHJvYmxlbSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRDbGFzcyB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZXR1cm5WYWx1ZVByb2JsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZSA/IChjbGFzc05hbWUgKyAnLicpIDogJyd9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgICAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzLm5hbWV9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ30ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzcy5uYW1lfS5gO1xuICAgIH0sXG4gICAgJ21pc3NpbmctYS1tZXRob2QnOiAoeyBleHBlY3RlZE1ldGhvZCwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZE1ldGhvZCB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWVcbiAgICAgICAgICAgIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdtaXNzaW5nLWEtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZSc6ICh7IGVudHJ5IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBBbiB1bmV4cGVjdGVkIGVudHJ5IHdhcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgVGhlIGVudHJ5IGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KGVudHJ5KX0nIGlzbid0IHN1cHBvcnRlZC4gWW91IG11c3Qgc3VwcGx5IGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYHN0cmluZ3Mgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJzLCBvYmplY3RzIHdpdGggYSB1cmwgcHJvcGVydHkgb3IgYCArXG4gICAgICAgICAgICBgUmVxdWVzdCBvYmplY3RzLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7IGZpcnN0RW50cnksIHNlY29uZEVudHJ5IH0pID0+IHtcbiAgICAgICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAnYWRkLXRvLWNhY2hlLWxpc3QtZHVwbGljYXRlLWVudHJpZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke2ZpcnN0RW50cnkuX2VudHJ5SWR9IGJ1dCBkaWZmZXJlbnQgcmV2aXNpb24gZGV0YWlscy4gV29ya2JveCBpcyBgICtcbiAgICAgICAgICAgIGB1bmFibGUgdG8gY2FjaGUgYW5kIHZlcnNpb24gdGhlIGFzc2V0IGNvcnJlY3RseS4gUGxlYXNlIHJlbW92ZSBvbmUgYCArXG4gICAgICAgICAgICBgb2YgdGhlIGVudHJpZXMuYDtcbiAgICB9LFxuICAgICdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJzogKHsgdGhyb3duRXJyb3IgfSkgPT4ge1xuICAgICAgICBpZiAoIXRocm93bkVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgICAgICAgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yLm1lc3NhZ2V9Jy5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtY2FjaGUtbmFtZSc6ICh7IGNhY2hlTmFtZUlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICghY2FjaGVOYW1lSWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSAnY2FjaGVOYW1lSWQnIGZvciBlcnJvciAnaW52YWxpZC1jYWNoZS1uYW1lJ2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhIG5hbWUgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGZvciBgICtcbiAgICAgICAgICAgIGBzZXRDYWNoZURldGFpbHMoeyR7Y2FjaGVOYW1lSWR9OiAnLi4uJ30pLiBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0nYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoeyBtZXRob2QgfSkgPT4ge1xuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCAgcHJldmlvdXNseSBgICtcbiAgICAgICAgICAgIGByZWdpc3RlcmVkIGZvciB0aGUgbWV0aG9kIHR5cGUgJyR7bWV0aG9kfScuYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQuYDtcbiAgICB9LFxuICAgICdxdWV1ZS1yZXBsYXktZmFpbGVkJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgUmVwbGF5aW5nIHRoZSBiYWNrZ3JvdW5kIHN5bmMgcXVldWUgJyR7bmFtZX0nIGZhaWxlZC5gO1xuICAgIH0sXG4gICAgJ2R1cGxpY2F0ZS1xdWV1ZS1uYW1lJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICAgICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gO1xuICAgIH0sXG4gICAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoeyBtZXRob2ROYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSAnJHttZXRob2ROYW1lfSgpJyBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBpcyB1c2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5gO1xuICAgIH0sXG4gICAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmA7XG4gICAgfSxcbiAgICAnbm90LWFycmF5LW9mLWNsYXNzJzogKHsgdmFsdWUsIGV4cGVjdGVkQ2xhc3MsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYDtcbiAgICB9LFxuICAgICdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5tYXhFbnRyaWVzIG9yIGNvbmZpZy5tYXhBZ2VTZWNvbmRzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gO1xuICAgIH0sXG4gICAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5zdGF0dXNlcyBvciBjb25maWcuaGVhZGVyc2AgK1xuICAgICAgICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YDtcbiAgICB9LFxuICAgICdpbnZhbGlkLXN0cmluZyc6ICh7IG1vZHVsZU5hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgICAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICAgICAgICBgbW9yZSBpbmZvLmA7XG4gICAgfSxcbiAgICAnY2hhbm5lbC1uYW1lLXJlcXVpcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICAgICAgICAgIGBCcm9hZGNhc3RDYWNoZVVwZGF0ZSBpbnN0YW5jZS5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byByZXNwb25zZXNBcmVTYW1lKCkgYXBwZWFyIHRvIGJlIGAgK1xuICAgICAgICAgICAgYGludmFsaWQuIFBsZWFzZSBlbnN1cmUgdmFsaWQgUmVzcG9uc2VzIGFyZSB1c2VkLmA7XG4gICAgfSxcbiAgICAnZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICAgICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gO1xuICAgIH0sXG4gICAgJ3VuaXQtbXVzdC1iZS1ieXRlcyc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3VuaXQtbXVzdC1iZS1ieXRlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgICAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYE11bHRpcGxlIHJhbmdlcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBhICBzaW5nbGUgc3RhcnQgYCArXG4gICAgICAgICAgICBgdmFsdWUsIGFuZCBvcHRpb25hbCBlbmQgdmFsdWUuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICduby1yYW5nZS1oZWFkZXInOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgTm8gUmFuZ2UgaGVhZGVyIHdhcyBmb3VuZCBpbiB0aGUgUmVxdWVzdCBwcm92aWRlZC5gO1xuICAgIH0sXG4gICAgJ3JhbmdlLW5vdC1zYXRpc2ZpYWJsZSc6ICh7IHNpemUsIHN0YXJ0LCBlbmQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICAgICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYDtcbiAgICB9LFxuICAgICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7IHVybCwgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBVbmFibGUgdG8gY2FjaGUgJyR7dXJsfScgYmVjYXVzZSBpdCBpcyBhICcke21ldGhvZH0nIHJlcXVlc3QgYW5kIGAgK1xuICAgICAgICAgICAgYG9ubHkgJ0dFVCcgcmVxdWVzdHMgY2FuIGJlIGNhY2hlZC5gO1xuICAgIH0sXG4gICAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICAgICAgICBgZGVmaW5lZC5gO1xuICAgIH0sXG4gICAgJ25vLXJlc3BvbnNlJzogKHsgdXJsLCBlcnJvciB9KSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFRoZSBzdHJhdGVneSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZSBmb3IgJyR7dXJsfScuYDtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgVGhlIHVuZGVybHlpbmcgZXJyb3IgaXMgJHtlcnJvcn0uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7IHVybCwgc3RhdHVzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWQgd2l0aCBhbiBIVFRQIGAgK1xuICAgICAgICAgICAgYHN0YXR1cyBvZiAke3N0YXR1c30uYDtcbiAgICB9LFxuICAgICdub24tcHJlY2FjaGVkLXVybCc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgICAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYDtcbiAgICB9LFxuICAgICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHsgY2FjaGVOYW1lLCB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQuaXNUeXBlKGNhbGxiYWNrLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FsbGJhY2snLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcXVvdGFFcnJvckNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ1JlZ2lzdGVyZWQgYSBjYWxsYmFjayB0byByZXNwb25kIHRvIHF1b3RhIGVycm9ycy4nLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZXhwb3J0IHsgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogTW9kaWZpZXMgdGhlIGRlZmF1bHQgY2FjaGUgbmFtZXMgdXNlZCBieSB0aGUgV29ya2JveCBwYWNrYWdlcy5cbiAqIENhY2hlIG5hbWVzIGFyZSBnZW5lcmF0ZWQgYXMgYDxwcmVmaXg+LTxDYWNoZSBOYW1lPi08c3VmZml4PmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5wcmVmaXhdIFRoZSBzdHJpbmcgdG8gYWRkIHRvIHRoZSBiZWdpbm5pbmcgb2ZcbiAqICAgICB0aGUgcHJlY2FjaGUgYW5kIHJ1bnRpbWUgY2FjaGUgbmFtZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMuc3VmZml4XSBUaGUgc3RyaW5nIHRvIGFkZCB0byB0aGUgZW5kIG9mXG4gKiAgICAgdGhlIHByZWNhY2hlIGFuZCBydW50aW1lIGNhY2hlIG5hbWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnByZWNhY2hlXSBUaGUgY2FjaGUgbmFtZSB0byB1c2UgZm9yIHByZWNhY2hlXG4gKiAgICAgY2FjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5ydW50aW1lXSBUaGUgY2FjaGUgbmFtZSB0byB1c2UgZm9yIHJ1bnRpbWUgY2FjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5nb29nbGVBbmFseXRpY3NdIFRoZSBjYWNoZSBuYW1lIHRvIHVzZSBmb3JcbiAqICAgICBgd29ya2JveC1nb29nbGUtYW5hbHl0aWNzYCBjYWNoaW5nLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlTmFtZURldGFpbHMoZGV0YWlscykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRldGFpbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShkZXRhaWxzW2tleV0sICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdzZXRDYWNoZU5hbWVEZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6IGBkZXRhaWxzLiR7a2V5fWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgncHJlY2FjaGUnIGluIGRldGFpbHMgJiYgZGV0YWlsc1sncHJlY2FjaGUnXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWVJZDogJ3ByZWNhY2hlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1sncHJlY2FjaGUnXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgncnVudGltZScgaW4gZGV0YWlscyAmJiBkZXRhaWxzWydydW50aW1lJ10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLWNhY2hlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lSWQ6ICdydW50aW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1sncnVudGltZSddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdnb29nbGVBbmFseXRpY3MnIGluIGRldGFpbHMgJiYgZGV0YWlsc1snZ29vZ2xlQW5hbHl0aWNzJ10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLWNhY2hlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lSWQ6ICdnb29nbGVBbmFseXRpY3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkZXRhaWxzWydnb29nbGVBbmFseXRpY3MnXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlTmFtZXMudXBkYXRlRGV0YWlscyhkZXRhaWxzKTtcbn1cbmV4cG9ydCB7IHNldENhY2hlTmFtZURldGFpbHMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEZvcmNlIGEgc2VydmljZSB3b3JrZXIgdG8gYWN0aXZhdGUgaW1tZWRpYXRlbHksIGluc3RlYWQgb2ZcbiAqIFt3YWl0aW5nXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3ByaW1lcnMvc2VydmljZS13b3JrZXJzL2xpZmVjeWNsZSN3YWl0aW5nKVxuICogZm9yIGV4aXN0aW5nIGNsaWVudHMgdG8gY2xvc2UuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuZnVuY3Rpb24gc2tpcFdhaXRpbmcoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBleHBsaWNpdGx5IGNhbGwgYHNlbGYuc2tpcFdhaXRpbmcoKWAgaGVyZSBiZWNhdXNlIHdlJ3JlXG4gICAgLy8gc2hhZG93aW5nIGBza2lwV2FpdGluZ2Agd2l0aCB0aGlzIGxvY2FsIGZ1bmN0aW9uLlxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsICgpID0+IHNlbGYuc2tpcFdhaXRpbmcoKSk7XG59XG5leHBvcnQgeyBza2lwV2FpdGluZyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IHBsdWdpblV0aWxzID0ge1xuICAgIGZpbHRlcjogKHBsdWdpbnMsIGNhbGxiYWNrTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gY2FsbGJhY2tOYW1lIGluIHBsdWdpbik7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9IGZyb20gJy4vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBgQ2FjaGVFeHBpcmF0aW9uYCBjbGFzcyBhbGxvd3MgeW91IGRlZmluZSBhbiBleHBpcmF0aW9uIGFuZCAvIG9yXG4gKiBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIHJlc3BvbnNlcyBzdG9yZWQgaW4gYVxuICogW2BDYWNoZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIGFwcGx5IHJlc3RyaWN0aW9ucyB0by5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQXNzZXJ0IGlzIHBvc2l0aXZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBc3NlcnQgaXMgcG9zaXRpdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXhFbnRyaWVzID0gY29uZmlnLm1heEVudHJpZXM7XG4gICAgICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgICAgICB0aGlzLl90aW1lc3RhbXBNb2RlbCA9IG5ldyBDYWNoZVRpbWVzdGFtcHNNb2RlbChjYWNoZU5hbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBpcmVzIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBjYWNoZSBhbmQgZ2l2ZW4gY3JpdGVyaWEuXG4gICAgICovXG4gICAgYXN5bmMgZXhwaXJlRW50cmllcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1pblRpbWVzdGFtcCA9IHRoaXMuX21heEFnZVNlY29uZHMgP1xuICAgICAgICAgICAgRGF0ZS5ub3coKSAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCkgOiAwO1xuICAgICAgICBjb25zdCB1cmxzRXhwaXJlZCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMobWluVGltZXN0YW1wLCB0aGlzLl9tYXhFbnRyaWVzKTtcbiAgICAgICAgLy8gRGVsZXRlIFVSTHMgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHNFeHBpcmVkKSB7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZS5kZWxldGUodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHVybHNFeHBpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEV4cGlyZWQgJHt1cmxzRXhwaXJlZC5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnZW50cnknIDogJ2VudHJpZXMnfSBhbmQgcmVtb3ZlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2l0JyA6ICd0aGVtJ30gZnJvbSB0aGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHt0aGlzLl9jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBFeHBpcmVkIHRoZSBmb2xsb3dpbmcgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgP1xuICAgICAgICAgICAgICAgICAgICAnVVJMJyA6ICdVUkxzJ306YCk7XG4gICAgICAgICAgICAgICAgdXJsc0V4cGlyZWQuZm9yRWFjaCgodXJsKSA9PiBsb2dnZXIubG9nKGAgICAgJHt1cmx9YCkpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoZSBleHBpcmF0aW9uIHJhbiBhbmQgZm91bmQgbm8gZW50cmllcyB0byByZW1vdmUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9yZXJ1blJlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvbnRXYWl0Rm9yKHRoaXMuZXhwaXJlRW50cmllcygpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHRpbWVzdGFtcCBmb3IgdGhlIGdpdmVuIFVSTC4gVGhpcyBlbnN1cmVzIHRoZSB3aGVuXG4gICAgICogcmVtb3ZpbmcgZW50cmllcyBiYXNlZCBvbiBtYXhpbXVtIGVudHJpZXMsIG1vc3QgcmVjZW50bHkgdXNlZFxuICAgICAqIGlzIGFjY3VyYXRlIG9yIHdoZW4gZXhwaXJpbmcsIHRoZSB0aW1lc3RhbXAgaXMgdXAtdG8tZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUaW1lc3RhbXAodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHVybCwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAndXBkYXRlVGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICd1cmwnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuc2V0VGltZXN0YW1wKHVybCwgRGF0ZS5ub3coKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbiBiZSB1c2VkIHRvIGNoZWNrIGlmIGEgVVJMIGhhcyBleHBpcmVkIG9yIG5vdCBiZWZvcmUgaXQncyB1c2VkLlxuICAgICAqXG4gICAgICogVGhpcyByZXF1aXJlcyBhIGxvb2sgdXAgZnJvbSBJbmRleGVkREIsIHNvIGNhbiBiZSBzbG93LlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBtZXRob2Qgd2lsbCBub3QgcmVtb3ZlIHRoZSBjYWNoZWQgZW50cnksIGNhbGxcbiAgICAgKiBgZXhwaXJlRW50cmllcygpYCB0byByZW1vdmUgaW5kZXhlZERCIGFuZCBDYWNoZSBlbnRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgYXN5bmMgaXNVUkxFeHBpcmVkKHVybCkge1xuICAgICAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcihgZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kTmFtZTogJ2lzVVJMRXhwaXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ21heEFnZVNlY29uZHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZ2V0VGltZXN0YW1wKHVybCk7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVPbGRlclRoYW4gPSBEYXRlLm5vdygpIC0gKHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiAodGltZXN0YW1wIDwgZXhwaXJlT2xkZXJUaGFuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBJbmRleGVkREIgb2JqZWN0IHN0b3JlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBjYWNoZSBleHBpcmF0aW9uXG4gICAgICogbWV0YWRhdGEuXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgYXR0ZW1wdCBhbm90aGVyIHJlcnVuIGlmIHdlJ3JlIGNhbGxlZCBpbiB0aGUgbWlkZGxlIG9mXG4gICAgICAgIC8vIGEgY2FjaGUgZXhwaXJhdGlvbi5cbiAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhJbmZpbml0eSk7IC8vIEV4cGlyZXMgYWxsLlxuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgZG9udFdhaXRGb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayB9IGZyb20gJ3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkIGluIHRoZSBXb3JrYm94IEFQSXMgdG8gcmVndWxhcmx5IGVuZm9yY2UgYVxuICogbGltaXQgb24gdGhlIGFnZSBhbmQgLyBvciB0aGUgbnVtYmVyIG9mIGNhY2hlZCByZXF1ZXN0cy5cbiAqXG4gKiBXaGVuZXZlciBhIGNhY2hlZCByZXF1ZXN0IGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgdXNlZCBDYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVxdWVzdHMuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4QWdlU2Vjb25kc2AsIHJlcXVlc3RzIG1heSBiZSB1c2VkICpvbmNlKiBhZnRlciBleHBpcmluZ1xuICogYmVjYXVzZSB0aGUgZXhwaXJhdGlvbiBjbGVhbiB1cCB3aWxsIG5vdCBoYXZlIG9jY3VycmVkIHVudGlsICphZnRlciogdGhlXG4gKiBjYWNoZWQgcmVxdWVzdCBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVxdWVzdCBoYXMgYSBcIkRhdGVcIiBoZWFkZXIsIHRoZW5cbiAqIGEgbGlnaHQgd2VpZ2h0IGV4cGlyYXRpb24gY2hlY2sgaXMgcGVyZm9ybWVkIGFuZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZVxuICogdXNlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhFbnRyaWVzYCwgdGhlIGVudHJ5IGxlYXN0LXJlY2VudGx5IHJlcXVlc3RlZCB3aWxsIGJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGNhY2hlIGZpcnN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1leHBpcmF0aW9uXG4gKi9cbmNsYXNzIEV4cGlyYXRpb25QbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnB1cmdlT25RdW90YUVycm9yXSBXaGV0aGVyIHRvIG9wdCB0aGlzIGNhY2hlIGluIHRvXG4gICAgICogYXV0b21hdGljIGRlbGV0aW9uIGlmIHRoZSBhdmFpbGFibGUgc3RvcmFnZSBxdW90YSBoYXMgYmVlbiBleGNlZWRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICAgICAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhIGBSZXNwb25zZWAgaXMgYWJvdXQgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgICogZnJvbSBhIFtDYWNoZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKSB0b1xuICAgICAgICAgKiB0aGUgaGFuZGxlci4gSXQgYWxsb3dzIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGluc3BlY3RlZCBmb3IgZnJlc2huZXNzIGFuZFxuICAgICAgICAgKiBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHVzZWQgaWYgdGhlIGBSZXNwb25zZWAncyBgRGF0ZWAgaGVhZGVyIHZhbHVlIGlzXG4gICAgICAgICAqIG9sZGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgYG1heEFnZVNlY29uZHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhlIHJlc3BvbnNlIGlzIGluLlxuICAgICAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLmNhY2hlZFJlc3BvbnNlIFRoZSBgUmVzcG9uc2VgIG9iamVjdCB0aGF0J3MgYmVlblxuICAgICAgICAgKiAgICAgcmVhZCBmcm9tIGEgY2FjaGUgYW5kIHdob3NlIGZyZXNobmVzcyBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICAgICAgICogQHJldHVybiB7UmVzcG9uc2V9IEVpdGhlciB0aGUgYGNhY2hlZFJlc3BvbnNlYCwgaWYgaXQnc1xuICAgICAgICAgKiAgICAgZnJlc2gsIG9yIGBudWxsYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBvbGRlciB0aGFuIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHJlcXVlc3QsIGNhY2hlTmFtZSwgY2FjaGVkUmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNGcmVzaCA9IHRoaXMuX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gRXhwaXJlIGVudHJpZXMgdG8gZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgZXhwaXJhdGlvbiBkYXRlIGhhc1xuICAgICAgICAgICAgLy8gZXhwaXJlZCwgaXQnbGwgb25seSBiZSB1c2VkIG9uY2UuXG4gICAgICAgICAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGRvbnRXYWl0Rm9yKGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBtZXRhZGF0YSBmb3IgdGhlIHJlcXVlc3QgVVJMIHRvIHRoZSBjdXJyZW50IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIC8vIGJ1dCBkb24ndCBgYXdhaXRgIGl0IGFzIHdlIGRvbid0IHdhbnQgdG8gYmxvY2sgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCBtYXkgbm90IGJlIGEgZmV0Y2ggZXZlbnQ7IG9ubHkgbG9nIHRoZSBVUkwgaWYgaXQgaXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3JlcXVlc3QnIGluIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGV2ZW50LnJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzRnJlc2ggPyBjYWNoZWRSZXNwb25zZSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgICAgICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGFuIGVudHJ5IGlzIGFkZGVkIHRvIGEgY2FjaGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGF0IHdhcyB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IFRoZSBSZXF1ZXN0IGZvciB0aGUgY2FjaGVkIGVudHJ5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZURpZFVwZGF0ZSA9IGFzeW5jICh7IGNhY2hlTmFtZSwgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjb25maWcubWF4RW50cmllcyB8fCBjb25maWcubWF4QWdlU2Vjb25kcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEVudHJpZXMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4QWdlU2Vjb25kcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9tYXhBZ2VTZWNvbmRzID0gY29uZmlnLm1heEFnZVNlY29uZHM7XG4gICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChjb25maWcucHVyZ2VPblF1b3RhRXJyb3IpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKCgpID0+IHRoaXMuZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHNpbXBsZSBoZWxwZXIgbWV0aG9kIHRvIHJldHVybiBhIENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSBmb3IgYSBnaXZlblxuICAgICAqIGNhY2hlIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAgICogQHJldHVybiB7Q2FjaGVFeHBpcmF0aW9ufVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSkge1xuICAgICAgICBpZiAoY2FjaGVOYW1lID09PSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5nZXQoY2FjaGVOYW1lKTtcbiAgICAgICAgaWYgKCFjYWNoZUV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGNhY2hlRXhwaXJhdGlvbiA9IG5ldyBDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lLCB0aGlzLl9jb25maWcpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5zZXQoY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZUV4cGlyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmVuJ3QgZXhwaXJpbmcgYnkgYWdlLCBzbyByZXR1cm4gdHJ1ZSwgaXQncyBmcmVzaFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlICdkYXRlJyBoZWFkZXIgd2lsbCBzdWZmaWNlIGEgcXVpY2sgZXhwaXJhdGlvbiBjaGVjay5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3N3LXRvb2xib3gvaXNzdWVzLzE2NCBmb3JcbiAgICAgICAgLy8gZGlzY3Vzc2lvbi5cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlclRpbWVzdGFtcCA9IHRoaXMuX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpO1xuICAgICAgICBpZiAoZGF0ZUhlYWRlclRpbWVzdGFtcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVW5hYmxlIHRvIHBhcnNlIGRhdGUsIHNvIGFzc3VtZSBpdCdzIGZyZXNoLlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIGhlYWRlclRpbWUsIHRoZW4gb3VyIHJlc3BvbnNlIGlzIGZyZXNoIGlmZiB0aGVcbiAgICAgICAgLy8gaGVhZGVyVGltZSBwbHVzIG1heEFnZVNlY29uZHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBkYXRlSGVhZGVyVGltZXN0YW1wID49IG5vdyAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgZXh0cmFjdCB0aGUgZGF0YSBoZWFkZXIgYW5kIHBhcnNlIGl0IGludG8gYSB1c2VmdWxcbiAgICAgKiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAgICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5oYXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IGNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlSGVhZGVyKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGltZSA9IHBhcnNlZERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgICAgICAvLyB3aWxsIHJldHVybiBOYU4uXG4gICAgICAgIGlmIChpc05hTihoZWFkZXJUaW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlclRpbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIHRoYXQgcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIERlbGV0ZXMgKmFsbCogdGhlIHVuZGVybHlpbmcgQ2FjaGUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBsdWdpblxuICAgICAqIGluc3RhbmNlLCBieSBjYWxsaW5nIGNhY2hlcy5kZWxldGUoKSBvbiB5b3VyIGJlaGFsZi5cbiAgICAgKiAtIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGZyb20gSW5kZXhlZERCIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBleHBpcmF0aW9uXG4gICAgICogZGV0YWlscyBmb3IgZWFjaCBDYWNoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFdoZW4gdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiwgY2FsbGluZyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJhYmxlIHRvIGNhbGxpbmdcbiAgICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBkaXJlY3RseSwgc2luY2UgdGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBJbmRleGVkREJcbiAgICAgKiBtZXRhZGF0YSBpcyBhbHNvIGNsZWFubHkgcmVtb3ZlZCBhbmQgb3BlbiBJbmRleGVkREIgaW5zdGFuY2VzIGFyZSBkZWxldGVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGlmIHlvdSdyZSAqbm90KiB1c2luZyBjYWNoZSBleHBpcmF0aW9uIGZvciBhIGdpdmVuIGNhY2hlLCBjYWxsaW5nXG4gICAgICogYGNhY2hlcy5kZWxldGUoKWAgYW5kIHBhc3NpbmcgaW4gdGhlIGNhY2hlJ3MgbmFtZSBzaG91bGQgYmUgc3VmZmljaWVudC5cbiAgICAgKiBUaGVyZSBpcyBubyBXb3JrYm94LXNwZWNpZmljIG1ldGhvZCBuZWVkZWQgZm9yIGNsZWFudXAgaW4gdGhhdCBjYXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSB7XG4gICAgICAgIC8vIERvIHRoaXMgb25lIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlIHZpYSBgUHJvbWlzZS5hbGwoKWAgdG9cbiAgICAgICAgLy8gcmVkdWNlIHRoZSBjaGFuY2Ugb2YgaW5jb25zaXN0ZW5jeSBpZiBhIHByb21pc2UgcmVqZWN0cy5cbiAgICAgICAgZm9yIChjb25zdCBbY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb25dIG9mIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6ZXhwaXJhdGlvbjo1LjEuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICcuL0V4cGlyYXRpb25QbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuZXhwb3J0IHsgQ2FjaGVFeHBpcmF0aW9uLCBFeHBpcmF0aW9uUGx1Z2luLCB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbmRleC5qcyc7IiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgREJXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL0RCV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBkZWxldGVEYXRhYmFzZSB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kZWxldGVEYXRhYmFzZS5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IERCX05BTUUgPSAnd29ya2JveC1leHBpcmF0aW9uJztcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2NhY2hlLWVudHJpZXMnO1xuY29uc3Qgbm9ybWFsaXplVVJMID0gKHVuTm9ybWFsaXplZFVybCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodW5Ob3JtYWxpemVkVXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICB1cmwuaGFzaCA9ICcnO1xuICAgIHJldHVybiB1cmwuaHJlZjtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBtb2RlbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSkge1xuICAgICAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gICAgICAgIHRoaXMuX2RiID0gbmV3IERCV3JhcHBlcihEQl9OQU1FLCAxLCB7XG4gICAgICAgICAgICBvbnVwZ3JhZGVuZWVkZWQ6IChldmVudCkgPT4gdGhpcy5faGFuZGxlVXBncmFkZShldmVudCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgcGVyZm9ybSBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVVcGdyYWRlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBFZGdlSFRNTCBkb2Vzbid0IHN1cHBvcnQgYXJyYXlzIGFzIGEga2V5UGF0aCwgc28gd2VcbiAgICAgICAgLy8gaGF2ZSB0byB1c2UgdGhlIGBpZGAga2V5UGF0aCBoZXJlIGFuZCBjcmVhdGUgb3VyIG93biB2YWx1ZXMgKGFcbiAgICAgICAgLy8gY29uY2F0ZW5hdGlvbiBvZiBgdXJsICsgY2FjaGVOYW1lYCkgaW5zdGVhZCBvZiBzaW1wbHkgdXNpbmdcbiAgICAgICAgLy8gYGtleVBhdGg6IFsndXJsJywgJ2NhY2hlTmFtZSddYCwgd2hpY2ggaXMgc3VwcG9ydGVkIGluIG90aGVyIGJyb3dzZXJzLlxuICAgICAgICBjb25zdCBvYmpTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBkb24ndCBoYXZlIHRvIHN1cHBvcnQgRWRnZUhUTUwsIHdlIGNhblxuICAgICAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgICAgIC8vIGluc3RlYWQgb2YgZG9pbmcgYm90aCB0aGVzZSBpbmRleGVzLlxuICAgICAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgnY2FjaGVOYW1lJywgJ2NhY2hlTmFtZScsIHsgdW5pcXVlOiBmYWxzZSB9KTtcbiAgICAgICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXAnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICAgIC8vIFByZXZpb3VzIHZlcnNpb25zIG9mIGB3b3JrYm94LWV4cGlyYXRpb25gIHVzZWQgYHRoaXMuX2NhY2hlTmFtZWBcbiAgICAgICAgLy8gYXMgdGhlIElEQkRhdGFiYXNlIG5hbWUuXG4gICAgICAgIGRlbGV0ZURhdGFiYXNlKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIHNldFRpbWVzdGFtcCh1cmwsIHRpbWVzdGFtcCkge1xuICAgICAgICB1cmwgPSBub3JtYWxpemVVUkwodXJsKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAgICAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICAgICAgICAgIGlkOiB0aGlzLl9nZXRJZCh1cmwpLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB0aGlzLl9kYi5wdXQoT0JKRUNUX1NUT1JFX05BTUUsIGVudHJ5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGltZXN0YW1wIHN0b3JlZCBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRUaW1lc3RhbXAodXJsKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdGhpcy5fZGIuZ2V0KE9CSkVDVF9TVE9SRV9OQU1FLCB0aGlzLl9nZXRJZCh1cmwpKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnRpbWVzdGFtcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIG9iamVjdCBzdG9yZSAoZnJvbSBuZXdlc3QgdG9cbiAgICAgKiBvbGRlc3QpIGFuZCByZW1vdmVzIGVudHJpZXMgb25jZSBlaXRoZXIgYG1heENvdW50YCBpcyByZWFjaGVkIG9yIHRoZVxuICAgICAqIGVudHJ5J3MgdGltZXN0YW1wIGlzIGxlc3MgdGhhbiBgbWluVGltZXN0YW1wYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5UaW1lc3RhbXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Q291bnRcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBleHBpcmVFbnRyaWVzKG1pblRpbWVzdGFtcCwgbWF4Q291bnQpIHtcbiAgICAgICAgY29uc3QgZW50cmllc1RvRGVsZXRlID0gYXdhaXQgdGhpcy5fZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnLCAodHhuLCBkb25lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHR4bi5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUuaW5kZXgoJ3RpbWVzdGFtcCcpLm9wZW5DdXJzb3IobnVsbCwgJ3ByZXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXNUb0RlbGV0ZSA9IFtdO1xuICAgICAgICAgICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gcmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBjYW4gdXNlIGEgbXVsdGkta2V5IGluZGV4LCB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyB3b24ndCBoYXZlIHRvIGNoZWNrIGBjYWNoZU5hbWVgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY2FjaGVOYW1lID09PSB0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBhbiBlbnRyeSBpZiBpdCdzIG9sZGVyIHRoYW4gdGhlIG1heCBhZ2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGUgbWF4IG51bWJlciBhbGxvd2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtaW5UaW1lc3RhbXAgJiYgcmVzdWx0LnRpbWVzdGFtcCA8IG1pblRpbWVzdGFtcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4Q291bnQgJiYgZW50cmllc05vdERlbGV0ZWRDb3VudCA+PSBtYXhDb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1ZyBpbiBTYWZhcmkgc3RhYmxlIChmaXhlZCBpbiBUUCkuIEluc3RlYWQgd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGtleXMgb2YgdGhlIGVudHJpZXMgdG8gZGVsZXRlLCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnNvci5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gcmV0dXJuIHRoZSBVUkwsIG5vdCB0aGUgd2hvbGUgZW50cnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllc1RvRGVsZXRlLnB1c2goY3Vyc29yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXNOb3REZWxldGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoZW50cmllc1RvRGVsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlbW92ZSB0aGlzIGxvb3AgYW5kIGRvIHRoZSBlbnRyeSBkZWxldGlvbiBpbiB0aGVcbiAgICAgICAgLy8gY3Vyc29yIGxvb3AgYWJvdmU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICBjb25zdCB1cmxzRGVsZXRlZCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb0RlbGV0ZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZGIuZGVsZXRlKE9CSkVDVF9TVE9SRV9OQU1FLCBlbnRyeS5pZCk7XG4gICAgICAgICAgICB1cmxzRGVsZXRlZC5wdXNoKGVudHJ5LnVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybHNEZWxldGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIFVSTCBhbmQgcmV0dXJucyBhbiBJRCB0aGF0IHdpbGwgYmUgdW5pcXVlIGluIHRoZSBvYmplY3Qgc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0SWQodXJsKSB7XG4gICAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZU5hbWUgKyAnfCcgKyBub3JtYWxpemVVUkwodXJsKTtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBmZXRjaFdyYXBwZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBjb3B5UmVzcG9uc2UgfSBmcm9tICd3b3JrYm94LWNvcmUvY29weVJlc3BvbnNlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhY2hlS2V5IH0gZnJvbSAnLi91dGlscy9jcmVhdGVDYWNoZUtleS5qcyc7XG5pbXBvcnQgeyBwcmludENsZWFudXBEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludENsZWFudXBEZXRhaWxzLmpzJztcbmltcG9ydCB7IHByaW50SW5zdGFsbERldGFpbHMgfSBmcm9tICcuL3V0aWxzL3ByaW50SW5zdGFsbERldGFpbHMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUGVyZm9ybXMgZWZmaWNpZW50IHByZWNhY2hpbmcgb2YgYXNzZXRzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IFByZWNhY2hlQ29udHJvbGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY2FjaGVOYW1lXSBBbiBvcHRpb25hbCBuYW1lIGZvciB0aGUgY2FjaGUsIHRvIG92ZXJyaWRlXG4gICAgICogdGhlIGRlZmF1bHQgcHJlY2FjaGUgbmFtZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWNoZU5hbWUpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoY2FjaGVOYW1lKTtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1xuICAgICAqIEFycmF5PG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLlByZWNhY2hlRW50cnl8c3RyaW5nPlxuICAgICAqIH0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICAgICAqL1xuICAgIGFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5KGVudHJpZXMsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQcmVjYWNoZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnYWRkVG9DYWNoZUxpc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2VudHJpZXMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsc1RvV2FybkFib3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjI1OVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbnRyeSAmJiBlbnRyeS5yZXZpc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY2FjaGVLZXksIHVybCB9ID0gY3JlYXRlQ2FjaGVLZXkoZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkucmV2aXNpb24pID9cbiAgICAgICAgICAgICAgICAncmVsb2FkJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGlmICh0aGlzLl91cmxzVG9DYWNoZUtleXMuaGFzKHVybCkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybCkgIT09IGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeTogdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRFbnRyeTogY2FjaGVLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSAnc3RyaW5nJyAmJiBlbnRyeS5pbnRlZ3JpdHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5oYXMoY2FjaGVLZXkpICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KSAhPT0gZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5zZXQoY2FjaGVLZXksIGVudHJ5LmludGVncml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuc2V0KHVybCwgY2FjaGVLZXkpO1xuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2Rlcy5zZXQodXJsLCBjYWNoZU1vZGUpO1xuICAgICAgICAgICAgaWYgKHVybHNUb1dhcm5BYm91dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgV29ya2JveCBpcyBwcmVjYWNoaW5nIFVSTHMgd2l0aG91dCByZXZpc2lvbiBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluZm86ICR7dXJsc1RvV2FybkFib3V0LmpvaW4oJywgJyl9XFxuVGhpcyBpcyBnZW5lcmFsbHkgTk9UIHNhZmUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgTGVhcm4gbW9yZSBhdCBodHRwczovL2JpdC5seS93Yi1wcmVjYWNoZWA7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGNvbnNvbGUgZGlyZWN0bHkgdG8gZGlzcGxheSB0aGlzIHdhcm5pbmcgd2l0aG91dCBibG9hdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBidW5kbGUgc2l6ZXMgYnkgcHVsbGluZyBpbiBhbGwgb2YgdGhlIGxvZ2dlciBjb2RlYmFzZSBpbiBwcm9kLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVjYWNoZXMgbmV3IGFuZCB1cGRhdGVkIGFzc2V0cy4gQ2FsbCB0aGlzIG1ldGhvZCBmcm9tIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgICAqIGluc3RhbGwgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgaW5zdGFsbCBldmVudCAoaWYgbmVlZGVkKS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFBsdWdpbnMgdG8gYmUgdXNlZCBmb3IgZmV0Y2hpbmdcbiAgICAgKiBhbmQgY2FjaGluZyBkdXJpbmcgaW5zdGFsbC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuSW5zdGFsbFJlc3VsdD59XG4gICAgICovXG4gICAgYXN5bmMgaW5zdGFsbCh7IGV2ZW50LCBwbHVnaW5zIH0gPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHBsdWdpbnMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNBcnJheShwbHVnaW5zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXByZWNhY2hpbmcnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQcmVjYWNoZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2luc3RhbGwnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdwbHVnaW5zJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b0JlUHJlY2FjaGVkID0gW107XG4gICAgICAgIGNvbnN0IGFscmVhZHlQcmVjYWNoZWQgPSBbXTtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgICAgIGNvbnN0IGFscmVhZHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDYWNoZUtleXMgPSBuZXcgU2V0KGFscmVhZHlDYWNoZWRSZXF1ZXN0cy5tYXAoKHJlcXVlc3QpID0+IHJlcXVlc3QudXJsKSk7XG4gICAgICAgIGZvciAoY29uc3QgW3VybCwgY2FjaGVLZXldIG9mIHRoaXMuX3VybHNUb0NhY2hlS2V5cykge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ2FjaGVLZXlzLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgICAgICAgICBhbHJlYWR5UHJlY2FjaGVkLnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvQmVQcmVjYWNoZWQucHVzaCh7IGNhY2hlS2V5LCB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlY2FjaGVSZXF1ZXN0cyA9IHRvQmVQcmVjYWNoZWQubWFwKCh7IGNhY2hlS2V5LCB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5ID0gdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gdGhpcy5fdXJsc1RvQ2FjaGVNb2Rlcy5nZXQodXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRVUkxUb0NhY2hlKHtcbiAgICAgICAgICAgICAgICBjYWNoZUtleSxcbiAgICAgICAgICAgICAgICBjYWNoZU1vZGUsXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5LFxuICAgICAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcmVjYWNoZVJlcXVlc3RzKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFVSTHMgPSB0b0JlUHJlY2FjaGVkLm1hcCgoaXRlbSkgPT4gaXRlbS51cmwpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcHJpbnRJbnN0YWxsRGV0YWlscyh1cGRhdGVkVVJMcywgYWxyZWFkeVByZWNhY2hlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVwZGF0ZWRVUkxzLFxuICAgICAgICAgICAgbm90VXBkYXRlZFVSTHM6IGFscmVhZHlQcmVjYWNoZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYXNzZXRzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50IGluIHRoZSBjdXJyZW50IHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAqIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXIgYWN0aXZhdGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuQ2xlYW51cFJlc3VsdD59XG4gICAgICovXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRDYWNoZUtleXMgPSBuZXcgU2V0KHRoaXMuX3VybHNUb0NhY2hlS2V5cy52YWx1ZXMoKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRVUkxzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cykge1xuICAgICAgICAgICAgaWYgKCFleHBlY3RlZENhY2hlS2V5cy5oYXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZWRVUkxzLnB1c2gocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBwcmludENsZWFudXBEZXRhaWxzKGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkZWxldGVkVVJMcyB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyB0aGUgZW50cnkgYW5kIHNhdmVzIGl0IHRvIHRoZSBjYWNoZSBpZiB0aGUgcmVzcG9uc2UgaXMgdmFsaWQuXG4gICAgICogQnkgZGVmYXVsdCwgYW55IHJlc3BvbnNlIHdpdGggYSBzdGF0dXMgY29kZSBvZiBsZXNzIHRoYW4gNDAwIChpbmNsdWRpbmdcbiAgICAgKiBvcGFxdWUgcmVzcG9uc2VzKSBpcyBjb25zaWRlcmVkIHZhbGlkLlxuICAgICAqXG4gICAgICogSWYgeW91IG5lZWQgdG8gdXNlIGN1c3RvbSBjcml0ZXJpYSB0byBkZXRlcm1pbmUgd2hhdCdzIHZhbGlkIGFuZCB3aGF0XG4gICAgICogaXNuJ3QsIHRoZW4gcGFzcyBpbiBhbiBpdGVtIGluIGBvcHRpb25zLnBsdWdpbnNgIHRoYXQgaW1wbGVtZW50cyB0aGVcbiAgICAgKiBgY2FjaGVXaWxsVXBkYXRlKClgIGxpZmVjeWNsZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZUtleSBUaGUgc3RyaW5nIHRvIHVzZSBhIGNhY2hlIGtleS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgVGhlIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTW9kZV0gVGhlIGNhY2hlIG1vZGUgZm9yIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBpbnN0YWxsIGV2ZW50IChpZiBwYXNzZWQpLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gQW4gYXJyYXkgb2YgcGx1Z2lucyB0byBhcHBseSB0b1xuICAgICAqIGZldGNoIGFuZCBjYWNoaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pbnRlZ3JpdHldIFRoZSB2YWx1ZSB0byB1c2UgZm9yIHRoZSBgaW50ZWdyaXR5YFxuICAgICAqIGZpZWxkIHdoZW4gbWFraW5nIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIGFzeW5jIF9hZGRVUkxUb0NhY2hlKHsgY2FjaGVLZXksIHVybCwgY2FjaGVNb2RlLCBldmVudCwgcGx1Z2lucywgaW50ZWdyaXR5IH0pIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgaW50ZWdyaXR5LFxuICAgICAgICAgICAgY2FjaGU6IGNhY2hlTW9kZSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBbGxvdyBkZXZlbG9wZXJzIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvZ2ljIGFib3V0IHdoYXQgaXMgYW5kIGlzbid0XG4gICAgICAgIC8vIHZhbGlkIGJ5IHBhc3NpbmcgaW4gYSBwbHVnaW4gaW1wbGVtZW50aW5nIGNhY2hlV2lsbFVwZGF0ZSgpLCBlLmcuXG4gICAgICAgIC8vIGEgYENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luYCBpbnN0YW5jZS5cbiAgICAgICAgbGV0IGNhY2hlV2lsbFVwZGF0ZVBsdWdpbjtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgKHBsdWdpbnMgfHwgW10pKSB7XG4gICAgICAgICAgICBpZiAoJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVXaWxsVXBkYXRlUGx1Z2luID0gcGx1Z2luO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVmFsaWRSZXNwb25zZSA9IGNhY2hlV2lsbFVwZGF0ZVBsdWdpbiA/XG4gICAgICAgICAgICAvLyBVc2UgYSBjYWxsYmFjayBpZiBwcm92aWRlZC4gSXQgcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBpZiB2YWxpZC5cbiAgICAgICAgICAgIC8vIE5PVEU6IGludm9rZSB0aGUgbWV0aG9kIG9uIHRoZSBwbHVnaW4gaW5zdGFuY2Ugc28gdGhlIGB0aGlzYCBjb250ZXh0XG4gICAgICAgICAgICAvLyBpcyBjb3JyZWN0LlxuICAgICAgICAgICAgYXdhaXQgY2FjaGVXaWxsVXBkYXRlUGx1Z2luLmNhY2hlV2lsbFVwZGF0ZSh7IGV2ZW50LCByZXF1ZXN0LCByZXNwb25zZSB9KSA6XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGRlZmF1bHQgdG8gY29uc2lkZXJpbmcgYW55IHJlc3BvbnNlIHN0YXR1cyB1bmRlciA0MDAgdmFsaWQuXG4gICAgICAgICAgICAvLyBUaGlzIGluY2x1ZGVzLCBieSBkZWZhdWx0LCBjb25zaWRlcmluZyBvcGFxdWUgcmVzcG9uc2VzIHZhbGlkLlxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzIDwgNDAwO1xuICAgICAgICAvLyBDb25zaWRlciB0aGlzIGEgZmFpbHVyZSwgbGVhZGluZyB0byB0aGUgYGluc3RhbGxgIGhhbmRsZXIgZmFpbGluZywgaWZcbiAgICAgICAgLy8gd2UgZ2V0IGJhY2sgYW4gaW52YWxpZCByZXNwb25zZS5cbiAgICAgICAgaWYgKCFpc1ZhbGlkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2JhZC1wcmVjYWNoaW5nLXJlc3BvbnNlJywge1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlZGlyZWN0ZWQgcmVzcG9uc2VzIGNhbm5vdCBiZSB1c2VkIHRvIHNhdGlzZnkgYSBuYXZpZ2F0aW9uIHJlcXVlc3QsIHNvXG4gICAgICAgIC8vIGFueSByZWRpcmVjdGVkIHJlc3BvbnNlIG11c3QgYmUgXCJjb3BpZWRcIiByYXRoZXIgdGhhbiBjbG9uZWQsIHNvIHRoZSBuZXdcbiAgICAgICAgLy8gcmVzcG9uc2UgZG9lc24ndCBjb250YWluIHRoZSBgcmVkaXJlY3RlZGAgZmxhZy4gU2VlOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02NjkzNjMmZGVzYz0yI2MxXG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNvcHlSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgY2FjaGVXcmFwcGVyLnB1dCh7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIC8vIGByZXF1ZXN0YCBhbHJlYWR5IHVzZXMgYHVybGAuIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIGl0LlxuICAgICAgICAgICAgcmVxdWVzdDogY2FjaGVLZXkgPT09IHVybCA/IHJlcXVlc3QgOiBuZXcgUmVxdWVzdChjYWNoZUtleSksXG4gICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgICAgICAgIG1hdGNoT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGlnbm9yZVNlYXJjaDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWFwcGluZyBvZiBhIHByZWNhY2hlZCBVUkwgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCB0YWtpbmdcbiAgICAgKiBpbnRvIGFjY291bnQgdGhlIHJldmlzaW9uIGluZm9ybWF0aW9uIGZvciB0aGUgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nPn0gQSBVUkwgdG8gY2FjaGUga2V5IG1hcHBpbmcuXG4gICAgICovXG4gICAgZ2V0VVJMc1RvQ2FjaGVLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIFVSTHMgdGhhdCBoYXZlIGJlZW4gcHJlY2FjaGVkIGJ5IHRoZSBjdXJyZW50XG4gICAgICogc2VydmljZSB3b3JrZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBUaGUgcHJlY2FjaGVkIFVSTHMuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVkVVJMcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl91cmxzVG9DYWNoZUtleXMua2V5cygpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FjaGUga2V5IHVzZWQgZm9yIHN0b3JpbmcgYSBnaXZlbiBVUkwuIElmIHRoYXQgVVJMIGlzXG4gICAgICogdW52ZXJzaW9uZWQsIGxpa2UgYC9pbmRleC5odG1sJywgdGhlbiB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlIG9yaWdpbmFsXG4gICAgICogVVJMIHdpdGggYSBzZWFyY2ggcGFyYW1ldGVyIGFwcGVuZGVkIHRvIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBIFVSTCB3aG9zZSBjYWNoZSBrZXkgeW91IHdhbnQgdG8gbG9vayB1cC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2ZXJzaW9uZWQgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBjYWNoZSBrZXlcbiAgICAgKiBmb3IgdGhlIG9yaWdpbmFsIFVSTCwgb3IgdW5kZWZpbmVkIGlmIHRoYXQgVVJMIGlzbid0IHByZWNhY2hlZC5cbiAgICAgKi9cbiAgICBnZXRDYWNoZUtleUZvclVSTCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmxPYmplY3QuaHJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgYWN0cyBhcyBhIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIFtgY2FjaGUubWF0Y2goKWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9tYXRjaClcbiAgICAgKiB3aXRoIHRoZSBmb2xsb3dpbmcgZGlmZmVyZW5jZXM6XG4gICAgICpcbiAgICAgKiAtIEl0IGtub3dzIHdoYXQgdGhlIG5hbWUgb2YgdGhlIHByZWNhY2hlIGlzLCBhbmQgb25seSBjaGVja3MgaW4gdGhhdCBjYWNoZS5cbiAgICAgKiAtIEl0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhbiBcIm9yaWdpbmFsXCIgVVJMIHdpdGhvdXQgdmVyc2lvbmluZyBwYXJhbWV0ZXJzLFxuICAgICAqIGFuZCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9vayB1cCB0aGUgY29ycmVjdCBjYWNoZSBrZXkgZm9yIHRoZSBjdXJyZW50bHlcbiAgICAgKiBhY3RpdmUgcmV2aXNpb24gb2YgdGhhdCBVUkwuXG4gICAgICpcbiAgICAgKiBFLmcuLCBgbWF0Y2hQcmVjYWNoZSgnaW5kZXguaHRtbCcpYCB3aWxsIGZpbmQgdGhlIGNvcnJlY3QgcHJlY2FjaGVkXG4gICAgICogcmVzcG9uc2UgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIHNlcnZpY2Ugd29ya2VyLCBldmVuIGlmIHRoZSBhY3R1YWwgY2FjaGVcbiAgICAgKiBrZXkgaXMgYCcvaW5kZXguaHRtbD9fX1dCX1JFVklTSU9OX189MTIzNGFiY2QnYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlcXVlc3R9IHJlcXVlc3QgVGhlIGtleSAod2l0aG91dCByZXZpc2lvbmluZyBwYXJhbWV0ZXJzKVxuICAgICAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKi9cbiAgICBhc3luYyBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxdWVzdCBpbnN0YW5jZW9mIFJlcXVlc3QgPyByZXF1ZXN0LnVybCA6IHJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xuICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB3aXRoaW4gYVxuICAgICAqIHtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSB0aGF0IHdpbGwgZmluZCBhIHJlc3BvbnNlIGZvciB0aGVcbiAgICAgKiBpbmNvbWluZyByZXF1ZXN0IGFnYWluc3QgdGhlIHByZWNhY2hlLlxuICAgICAqXG4gICAgICogSWYgZm9yIGFuIHVuZXhwZWN0ZWQgcmVhc29uIHRoZXJlIGlzIGEgY2FjaGUgbWlzcyBmb3IgdGhlIHJlcXVlc3QsXG4gICAgICogdGhpcyB3aWxsIGZhbGwgYmFjayB0byByZXRyaWV2aW5nIHRoZSBgUmVzcG9uc2VgIHZpYSBgZmV0Y2goKWAgd2hlblxuICAgICAqIGBmYWxsYmFja1RvTmV0d29ya2AgaXMgYHRydWVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAgICAgKiByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXIoZmFsbGJhY2tUb05ldHdvcmsgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1hdGNoUHJlY2FjaGUocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3Qgbm9ybWFsbHkgaGFwcGVuLCBidXQgdGhlcmUgYXJlIGVkZ2UgY2FzZXM6XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDQxXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1wcmVjYWNoZS1lbnRyeScsIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdCBpbnN0YW5jZW9mIFJlcXVlc3QgPyByZXF1ZXN0LnVybCA6IHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2tUb05ldHdvcmspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVW5hYmxlIHRvIHJlc3BvbmQgd2l0aCBwcmVjYWNoZWQgcmVzcG9uc2UuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBGYWxsaW5nIGJhY2sgdG8gbmV0d29yay5gLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbG9va3MgdXAgYHVybGAgaW4gdGhlIHByZWNhY2hlICh0YWtpbmcgaW50b1xuICAgICAqIGFjY291bnQgcmV2aXNpb24gaW5mb3JtYXRpb24pLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBgUmVzcG9uc2VgLlxuICAgICAqXG4gICAgICogSWYgZm9yIGFuIHVuZXhwZWN0ZWQgcmVhc29uIHRoZXJlIGlzIGEgY2FjaGUgbWlzcyB3aGVuIGxvb2tpbmcgdXAgYHVybGAsXG4gICAgICogdGhpcyB3aWxsIGZhbGwgYmFjayB0byByZXRyaWV2aW5nIHRoZSBgUmVzcG9uc2VgIHZpYSBgZmV0Y2goKWAgd2hlblxuICAgICAqIGBmYWxsYmFja1RvTmV0d29ya2AgaXMgYHRydWVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICAgICAqIGBSZXNwb25zZWAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAgICAgKiByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCwgZmFsbGJhY2tUb05ldHdvcmsgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xuICAgICAgICBpZiAoIWNhY2hlS2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub24tcHJlY2FjaGVkLXVybCcsIHsgdXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmNyZWF0ZUhhbmRsZXIoZmFsbGJhY2tUb05ldHdvcmspO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGhhbmRsZXIoeyByZXF1ZXN0IH0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6cHJlY2FjaGluZzo1LjEuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHByZWNhY2hlUGx1Z2lucyB9IGZyb20gJy4vdXRpbHMvcHJlY2FjaGVQbHVnaW5zLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgcGx1Z2lucyB0byBwcmVjYWNoaW5nLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbmV3UGx1Z2luc1xuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGFkZFBsdWdpbnMobmV3UGx1Z2lucykge1xuICAgIHByZWNhY2hlUGx1Z2lucy5hZGQobmV3UGx1Z2lucyk7XG59XG5leHBvcnQgeyBhZGRQbHVnaW5zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYWRkRmV0Y2hMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMvYWRkRmV0Y2hMaXN0ZW5lci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xubGV0IGxpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbi8qKlxuICogQWRkIGEgYGZldGNoYCBsaXN0ZW5lciB0byB0aGUgc2VydmljZSB3b3JrZXIgdGhhdCB3aWxsXG4gKiByZXNwb25kIHRvXG4gKiBbbmV0d29yayByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSS9Vc2luZ19TZXJ2aWNlX1dvcmtlcnMjQ3VzdG9tX3Jlc3BvbnNlc190b19yZXF1ZXN0c31cbiAqIHdpdGggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBSZXF1ZXN0cyBmb3IgYXNzZXRzIHRoYXQgYXJlbid0IHByZWNhY2hlZCwgdGhlIGBGZXRjaEV2ZW50YCB3aWxsIG5vdCBiZVxuICogcmVzcG9uZGVkIHRvLCBhbGxvd2luZyB0aGUgZXZlbnQgdG8gZmFsbCB0aHJvdWdoIHRvIG90aGVyIGBmZXRjaGAgZXZlbnRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlyZWN0b3J5SW5kZXg9aW5kZXguaHRtbF0gVGhlIGBkaXJlY3RvcnlJbmRleGAgd2lsbFxuICogY2hlY2sgY2FjaGUgZW50cmllcyBmb3IgYSBVUkxzIGVuZGluZyB3aXRoICcvJyB0byBzZWUgaWYgdGhlcmUgaXMgYSBoaXQgd2hlblxuICogYXBwZW5kaW5nIHRoZSBgZGlyZWN0b3J5SW5kZXhgIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5pZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmc9Wy9edXRtXy9dXSBBblxuICogYXJyYXkgb2YgcmVnZXgncyB0byByZW1vdmUgc2VhcmNoIHBhcmFtcyB3aGVuIGxvb2tpbmcgZm9yIGEgY2FjaGUgbWF0Y2guXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNsZWFuVVJMcz10cnVlXSBUaGUgYGNsZWFuVVJMc2Agb3B0aW9uIHdpbGxcbiAqIGNoZWNrIHRoZSBjYWNoZSBmb3IgdGhlIFVSTCB3aXRoIGEgYC5odG1sYCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBlbmQuXG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXByZWNhY2hpbmd+dXJsTWFuaXB1bGF0aW9ufSBbb3B0aW9ucy51cmxNYW5pcHVsYXRpb25dXG4gKiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgdGFrZSBhIFVSTCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mXG4gKiBhbHRlcm5hdGl2ZSBVUkxzIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZm9yIHByZWNhY2hlIG1hdGNoZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUm91dGUob3B0aW9ucykge1xuICAgIGlmICghbGlzdGVuZXJBZGRlZCkge1xuICAgICAgICBhZGRGZXRjaExpc3RlbmVyKG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgeyBhZGRSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZGVsZXRlT3V0ZGF0ZWRDYWNoZXMgfSBmcm9tICcuL3V0aWxzL2RlbGV0ZU91dGRhdGVkQ2FjaGVzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgYW4gYGFjdGl2YXRlYCBldmVudCBsaXN0ZW5lciB3aGljaCB3aWxsIGNsZWFuIHVwIGluY29tcGF0aWJsZVxuICogcHJlY2FjaGVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IG9sZGVyIHZlcnNpb25zIG9mIFdvcmtib3guXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gY2xlYW51cE91dGRhdGVkQ2FjaGVzKCkge1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuICAgICAgICBldmVudC53YWl0VW50aWwoZGVsZXRlT3V0ZGF0ZWRDYWNoZXMoY2FjaGVOYW1lKS50aGVuKChjYWNoZXNEZWxldGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZXNEZWxldGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVGhlIGZvbGxvd2luZyBvdXQtb2YtZGF0ZSBwcmVjYWNoZXMgd2VyZSBjbGVhbmVkIHVwIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGF1dG9tYXRpY2FsbHk6YCwgY2FjaGVzRGVsZXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfSkpO1xufVxuZXhwb3J0IHsgY2xlYW51cE91dGRhdGVkQ2FjaGVzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY2FsbHNcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjY3JlYXRlSGFuZGxlcn0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbCB0aGVcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjY3JlYXRlSGFuZGxlcn0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmYWxsYmFja1RvTmV0d29yaz10cnVlXSBXaGV0aGVyIHRvIGF0dGVtcHQgdG8gZ2V0IHRoZVxuICogcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yayBpZiB0aGVyZSdzIGEgcHJlY2FjaGUgbWlzcy5cbiAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIoZmFsbGJhY2tUb05ldHdvcmsgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmNyZWF0ZUhhbmRsZXIoZmFsbGJhY2tUb05ldHdvcmspO1xufVxuZXhwb3J0IHsgY3JlYXRlSGFuZGxlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsIHRoZVxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBwcmVjYWNoZWQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlXG4gKiBgUmVzcG9uc2VgLlxuICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAqIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCh1cmwpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIuY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGFrZXMgaW4gYSBVUkwsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIFVSTCB0aGF0IGNvdWxkIGJlIHVzZWQgdG9cbiAqIGxvb2t1cCB0aGUgZW50cnkgaW4gdGhlIHByZWNhY2hlLlxuICpcbiAqIElmIGEgcmVsYXRpdmUgVVJMIGlzIHByb3ZpZGVkLCB0aGUgbG9jYXRpb24gb2YgdGhlIHNlcnZpY2Ugd29ya2VyIGZpbGUgd2lsbFxuICogYmUgdXNlZCBhcyB0aGUgYmFzZS5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aG91dCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogc2FtZSBhcyB0aGUgb3JpZ2luYWwgVVJMLlxuICpcbiAqIEZvciBwcmVjYWNoZWQgZW50cmllcyB3aXRoIHJldmlzaW9uIGluZm9ybWF0aW9uLCB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlXG4gKiBvcmlnaW5hbCBVUkwgd2l0aCB0aGUgYWRkaXRpb24gb2YgYSBxdWVyeSBwYXJhbWV0ZXIgdXNlZCBmb3Iga2VlcGluZyB0cmFjayBvZlxuICogdGhlIHJldmlzaW9uIGluZm8uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHdob3NlIGNhY2hlIGtleSB0byBsb29rIHVwLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY2FjaGUga2V5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhhdCBVUkwuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG59XG5leHBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYWRkUGx1Z2lucyB9IGZyb20gJy4vYWRkUGx1Z2lucy5qcyc7XG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgY2xlYW51cE91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnLi9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJy4vY3JlYXRlSGFuZGxlci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCB9IGZyb20gJy4vY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwuanMnO1xuaW1wb3J0IHsgZ2V0Q2FjaGVLZXlGb3JVUkwgfSBmcm9tICcuL2dldENhY2hlS2V5Rm9yVVJMLmpzJztcbmltcG9ydCB7IG1hdGNoUHJlY2FjaGUgfSBmcm9tICcuL21hdGNoUHJlY2FjaGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfSBmcm9tICcuL3ByZWNhY2hlQW5kUm91dGUuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi9QcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogTW9zdCBjb25zdW1lcnMgb2YgdGhpcyBtb2R1bGUgd2lsbCB3YW50IHRvIHVzZSB0aGVcbiAqIFtwcmVjYWNoZUFuZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZX1cbiAqIG1ldGhvZCB0byBhZGQgYXNzZXRzIHRvIHRoZSBDYWNoZSBhbmQgcmVzcG9uZCB0byBuZXR3b3JrIHJlcXVlc3RzIHdpdGggdGhlc2VcbiAqIGNhY2hlZCBhc3NldHMuXG4gKlxuICogSWYgeW91IHJlcXVpcmUgZmluZXIgZ3JhaW5lZCBjb250cm9sLCB5b3UgY2FuIHVzZSB0aGVcbiAqIFtQcmVjYWNoZUNvbnRyb2xsZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogdG8gZGV0ZXJtaW5lIHdoZW4gcGVyZm9ybWVkLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCB7IGFkZFBsdWdpbnMsIGFkZFJvdXRlLCBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMsIGNyZWF0ZUhhbmRsZXIsIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLCBnZXRDYWNoZUtleUZvclVSTCwgbWF0Y2hQcmVjYWNoZSwgcHJlY2FjaGUsIHByZWNhY2hlQW5kUm91dGUsIFByZWNhY2hlQ29udHJvbGxlciwgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNtYXRjaFByZWNhY2hlfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8UmVxdWVzdH0gcmVxdWVzdCBUaGUga2V5ICh3aXRob3V0IHJldmlzaW9uaW5nIHBhcmFtZXRlcnMpXG4gKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIubWF0Y2hQcmVjYWNoZShyZXF1ZXN0KTtcbn1cbmV4cG9ydCB7IG1hdGNoUHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHByZWNhY2hlUGx1Z2lucyB9IGZyb20gJy4vdXRpbHMvcHJlY2FjaGVQbHVnaW5zLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBpbnN0YWxsTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBwcmVjYWNoZVBsdWdpbnMuZ2V0KCk7XG4gICAgZXZlbnQud2FpdFVudGlsKHByZWNhY2hlQ29udHJvbGxlci5pbnN0YWxsKHsgZXZlbnQsIHBsdWdpbnMgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBTZXJ2aWNlIHdvcmtlciBpbnN0YWxsYXRpb24gZmFpbGVkLiBJdCB3aWxsIGAgK1xuICAgICAgICAgICAgICAgIGBiZSByZXRyaWVkIGF1dG9tYXRpY2FsbHkgZHVyaW5nIHRoZSBuZXh0IG5hdmlnYXRpb24uYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmUtdGhyb3cgdGhlIGVycm9yIHRvIGVuc3VyZSBpbnN0YWxsYXRpb24gZmFpbHMuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH0pKTtcbn07XG5jb25zdCBhY3RpdmF0ZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBldmVudC53YWl0VW50aWwocHJlY2FjaGVDb250cm9sbGVyLmFjdGl2YXRlKCkpO1xufTtcbi8qKlxuICogQWRkcyBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMgYW5kXG4gKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICogW1wicHJlY2FjaGUgY2FjaGVcIl17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfSB3aGVuIHRoZSBzZXJ2aWNlXG4gKiB3b3JrZXIgaW5zdGFsbHMuXG4gKlxuICogVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQbGVhc2Ugbm90ZTogVGhpcyBtZXRob2QgKip3aWxsIG5vdCoqIHNlcnZlIGFueSBvZiB0aGUgY2FjaGVkIGZpbGVzIGZvciB5b3UuXG4gKiBJdCBvbmx5IHByZWNhY2hlcyBmaWxlcy4gVG8gcmVzcG9uZCB0byBhIG5ldHdvcmsgcmVxdWVzdCB5b3UgY2FsbFxuICogW2FkZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9LlxuICpcbiAqIElmIHlvdSBoYXZlIGEgc2luZ2xlIGFycmF5IG9mIGZpbGVzIHRvIHByZWNhY2hlLCB5b3UgY2FuIGp1c3QgY2FsbFxuICogW3ByZWNhY2hlQW5kUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBwcmVjYWNoZShlbnRyaWVzKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBwcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBOT1RFOiB0aGVzZSBsaXN0ZW5lcnMgd2lsbCBvbmx5IGJlIGFkZGVkIG9uY2UgKGV2ZW4gaWYgdGhlIGBwcmVjYWNoZSgpYFxuICAgICAgICAvLyBtZXRob2QgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzKSBiZWNhdXNlIGV2ZW50IGxpc3RlbmVycyBhcmUgaW1wbGVtZW50ZWRcbiAgICAgICAgLy8gYXMgYSBzZXQsIHdoZXJlIGVhY2ggbGlzdGVuZXIgbXVzdCBiZSB1bmlxdWUuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgaW5zdGFsbExpc3RlbmVyKTtcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGFjdGl2YXRlTGlzdGVuZXIpO1xuICAgIH1cbn1cbmV4cG9ydCB7IHByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGVudHJpZXMgdG8gdGhlIHByZWNhY2hlIGxpc3QgYW5kIGFkZCBhIHJvdXRlIHRvXG4gKiByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgd2lsbCBjYWxsXG4gKiBbcHJlY2FjaGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZX0gYW5kXG4gKiBbYWRkUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0gaW4gYSBzaW5nbGUgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBlbnRyaWVzIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZVxuICogW2FkZFJvdXRlKCkgb3B0aW9uc117QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gcHJlY2FjaGVBbmRSb3V0ZShlbnRyaWVzLCBvcHRpb25zKSB7XG4gICAgcHJlY2FjaGUoZW50cmllcyk7XG4gICAgYWRkUm91dGUob3B0aW9ucyk7XG59XG5leHBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9IGZyb20gJy4vZ2V0Q2FjaGVLZXlGb3JVUkwuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgYSBgZmV0Y2hgIGxpc3RlbmVyIHRvIHRoZSBzZXJ2aWNlIHdvcmtlciB0aGF0IHdpbGxcbiAqIHJlc3BvbmQgdG9cbiAqIFtuZXR3b3JrIHJlcXVlc3RzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2VycyNDdXN0b21fcmVzcG9uc2VzX3RvX3JlcXVlc3RzfVxuICogd2l0aCBwcmVjYWNoZWQgYXNzZXRzLlxuICpcbiAqIFJlcXVlc3RzIGZvciBhc3NldHMgdGhhdCBhcmVuJ3QgcHJlY2FjaGVkLCB0aGUgYEZldGNoRXZlbnRgIHdpbGwgbm90IGJlXG4gKiByZXNwb25kZWQgdG8sIGFsbG93aW5nIHRoZSBldmVudCB0byBmYWxsIHRocm91Z2ggdG8gb3RoZXIgYGZldGNoYCBldmVudFxuICogbGlzdGVuZXJzLlxuICpcbiAqIE5PVEU6IHdoZW4gY2FsbGVkIG1vcmUgdGhhbiBvbmNlIHRoaXMgbWV0aG9kIHdpbGwgcmVwbGFjZSB0aGUgcHJldmlvdXNseSBzZXRcbiAqIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gQ2FsbGluZyBpdCBtb3JlIHRoYW4gb25jZSBpcyBub3QgcmVjb21tZW5kZWQgb3V0c2lkZVxuICogb2YgdGVzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3RvcnlJbmRleD1pbmRleC5odG1sXSBUaGUgYGRpcmVjdG9yeUluZGV4YCB3aWxsXG4gKiBjaGVjayBjYWNoZSBlbnRyaWVzIGZvciBhIFVSTHMgZW5kaW5nIHdpdGggJy8nIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGhpdCB3aGVuXG4gKiBhcHBlbmRpbmcgdGhlIGBkaXJlY3RvcnlJbmRleGAgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZz1bL151dG1fL11dIEFuXG4gKiBhcnJheSBvZiByZWdleCdzIHRvIHJlbW92ZSBzZWFyY2ggcGFyYW1zIHdoZW4gbG9va2luZyBmb3IgYSBjYWNoZSBtYXRjaC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2xlYW5VUkxzPXRydWVdIFRoZSBgY2xlYW5VUkxzYCBvcHRpb24gd2lsbFxuICogY2hlY2sgdGhlIGNhY2hlIGZvciB0aGUgVVJMIHdpdGggYSBgLmh0bWxgIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGVuZC5cbiAqIEBwYXJhbSB7d29ya2JveC5wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICogVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHRha2UgYSBVUkwgYW5kIHJldHVybiBhbiBhcnJheSBvZlxuICogYWx0ZXJuYXRpdmUgVVJMcyB0aGF0IHNob3VsZCBiZSBjaGVja2VkIGZvciBwcmVjYWNoZSBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYWRkRmV0Y2hMaXN0ZW5lciA9ICh7IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFsvXnV0bV8vXSwgZGlyZWN0b3J5SW5kZXggPSAnaW5kZXguaHRtbCcsIGNsZWFuVVJMcyA9IHRydWUsIHVybE1hbmlwdWxhdGlvbiwgfSA9IHt9KSA9PiB7XG4gICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsICgoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJlY2FjaGVkVVJMID0gZ2V0Q2FjaGVLZXlGb3JVUkwoZXZlbnQucmVxdWVzdC51cmwsIHtcbiAgICAgICAgICAgIGNsZWFuVVJMcyxcbiAgICAgICAgICAgIGRpcmVjdG9yeUluZGV4LFxuICAgICAgICAgICAgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nLFxuICAgICAgICAgICAgdXJsTWFuaXB1bGF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFwcmVjYWNoZWRVUkwpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVjYWNoaW5nIGRpZCBub3QgZmluZCBhIG1hdGNoIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RnJpZW5kbHlVUkwoZXZlbnQucmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlID0gc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpLnRoZW4oKGNhY2hlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2gocHJlY2FjaGVkVVJMKTtcbiAgICAgICAgfSkudGhlbigoY2FjaGVkUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byB0aGUgbmV0d29yayBpZiB3ZSBkb24ndCBoYXZlIGEgY2FjaGVkIHJlc3BvbnNlXG4gICAgICAgICAgICAvLyAocGVyaGFwcyBkdWUgdG8gbWFudWFsIGNhY2hlIGNsZWFudXApLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHByZWNhY2hlZFVSTCl9IGluICR7Y2FjaGVOYW1lfSB3YXMgbm90IGZvdW5kLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYEZhbGxpbmcgYmFjayB0byB0aGUgbmV0d29yayBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHByZWNhY2hlZFVSTCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBQcmVjYWNoaW5nIGlzIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICBnZXRGcmllbmRseVVSTChldmVudC5yZXF1ZXN0LnVybCkpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFNlcnZpbmcgdGhlIHByZWNhY2hlZCB1cmw6ICR7cHJlY2FjaGVkVVJMfWApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXF1ZXN0IGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICB9KSk7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIE5hbWUgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdXNlZCB0byBzdG9yZSByZXZpc2lvbiBpbmZvLlxuY29uc3QgUkVWSVNJT05fU0VBUkNIX1BBUkFNID0gJ19fV0JfUkVWSVNJT05fXyc7XG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlbnRyeVxuICogQHJldHVybiB7c3RyaW5nfSBBIFVSTCB3aXRoIHZlcnNpb25pbmcgaW5mby5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlS2V5KGVudHJ5KSB7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnLCB7IGVudHJ5IH0pO1xuICAgIH1cbiAgICAvLyBJZiBhIHByZWNhY2hlIG1hbmlmZXN0IGVudHJ5IGlzIGEgc3RyaW5nLCBpdCdzIGFzc3VtZWQgdG8gYmUgYSB2ZXJzaW9uZWRcbiAgICAvLyBVUkwsIGxpa2UgJy9hcHAuYWJjZDEyMzQuanMnLiBSZXR1cm4gYXMtaXMuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTChlbnRyeSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHJldmlzaW9uLCB1cmwgfSA9IGVudHJ5O1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3MganVzdCBhIFVSTCBhbmQgbm8gcmV2aXNpb24sIHRoZW4gaXQncyBhbHNvIGFzc3VtZWQgdG8gYmUgYVxuICAgIC8vIHZlcnNpb25lZCBVUkwuXG4gICAgaWYgKCFyZXZpc2lvbikge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNvbnN0cnVjdCBhIHByb3Blcmx5IHZlcnNpb25lZCBVUkwgdXNpbmcgdGhlIGN1c3RvbSBXb3JrYm94XG4gICAgLy8gc2VhcmNoIHBhcmFtZXRlciBhbG9uZyB3aXRoIHRoZSByZXZpc2lvbiBpbmZvLlxuICAgIGNvbnN0IGNhY2hlS2V5VVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNvbnN0IG9yaWdpbmFsVVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNhY2hlS2V5VVJMLnNlYXJjaFBhcmFtcy5zZXQoUkVWSVNJT05fU0VBUkNIX1BBUkFNLCByZXZpc2lvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FjaGVLZXk6IGNhY2hlS2V5VVJMLmhyZWYsXG4gICAgICAgIHVybDogb3JpZ2luYWxVUkwuaHJlZixcbiAgICB9O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBTVUJTVFJJTkdfVE9fRklORCA9ICctcHJlY2FjaGUtJztcbi8qKlxuICogQ2xlYW5zIHVwIGluY29tcGF0aWJsZSBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2ZcbiAqIFdvcmtib3gsIGJ5IGEgc2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCB1bmRlciB0aGUgY3VycmVudCBzY29wZS5cbiAqXG4gKiBUaGlzIGlzIG1lYW50IHRvIGJlIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBgYWN0aXZhdGVgIGV2ZW50LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHNhZmUgdG8gdXNlIGFzIGxvbmcgYXMgeW91IGRvbid0IGluY2x1ZGUgYHN1YnN0cmluZ1RvRmluZGBcbiAqIChkZWZhdWx0aW5nIHRvIGAtcHJlY2FjaGUtYCkgaW4geW91ciBub24tcHJlY2FjaGUgY2FjaGUgbmFtZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRQcmVjYWNoZU5hbWUgVGhlIGNhY2hlIG5hbWUgY3VycmVudGx5IGluIHVzZSBmb3JcbiAqIHByZWNhY2hpbmcuIFRoaXMgY2FjaGUgd29uJ3QgYmUgZGVsZXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3Vic3RyaW5nVG9GaW5kPSctcHJlY2FjaGUtJ10gQ2FjaGUgbmFtZXMgd2hpY2ggaW5jbHVkZSB0aGlzXG4gKiBzdWJzdHJpbmcgd2lsbCBiZSBkZWxldGVkIChleGNsdWRpbmcgYGN1cnJlbnRQcmVjYWNoZU5hbWVgKS5cbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IEEgbGlzdCBvZiBhbGwgdGhlIGNhY2hlIG5hbWVzIHRoYXQgd2VyZSBkZWxldGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jb25zdCBkZWxldGVPdXRkYXRlZENhY2hlcyA9IGFzeW5jIChjdXJyZW50UHJlY2FjaGVOYW1lLCBzdWJzdHJpbmdUb0ZpbmQgPSBTVUJTVFJJTkdfVE9fRklORCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlTmFtZXMgPSBhd2FpdCBzZWxmLmNhY2hlcy5rZXlzKCk7XG4gICAgY29uc3QgY2FjaGVOYW1lc1RvRGVsZXRlID0gY2FjaGVOYW1lcy5maWx0ZXIoKGNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FjaGVOYW1lLmluY2x1ZGVzKHN1YnN0cmluZ1RvRmluZCkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZS5pbmNsdWRlcyhzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZSAhPT0gY3VycmVudFByZWNhY2hlTmFtZTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjYWNoZU5hbWVzVG9EZWxldGUubWFwKChjYWNoZU5hbWUpID0+IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpKSk7XG4gICAgcmV0dXJuIGNhY2hlTmFtZXNUb0RlbGV0ZTtcbn07XG5leHBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgeWllbGRzIHBvc3NpYmxlIHZhcmlhdGlvbnMgb24gdGhlIG9yaWdpbmFsIFVSTCB0b1xuICogY2hlY2ssIG9uZSBhdCBhIHRpbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnModXJsLCB7IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZywgZGlyZWN0b3J5SW5kZXgsIGNsZWFuVVJMcywgdXJsTWFuaXB1bGF0aW9uLCB9ID0ge30pIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgdXJsT2JqZWN0Lmhhc2ggPSAnJztcbiAgICB5aWVsZCB1cmxPYmplY3QuaHJlZjtcbiAgICBjb25zdCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcyA9IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXModXJsT2JqZWN0LCBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcpO1xuICAgIHlpZWxkIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWY7XG4gICAgaWYgKGRpcmVjdG9yeUluZGV4ICYmIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLnBhdGhuYW1lLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5VVJMID0gbmV3IFVSTCh1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmKTtcbiAgICAgICAgZGlyZWN0b3J5VVJMLnBhdGhuYW1lICs9IGRpcmVjdG9yeUluZGV4O1xuICAgICAgICB5aWVsZCBkaXJlY3RvcnlVUkwuaHJlZjtcbiAgICB9XG4gICAgaWYgKGNsZWFuVVJMcykge1xuICAgICAgICBjb25zdCBjbGVhblVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGNsZWFuVVJMLnBhdGhuYW1lICs9ICcuaHRtbCc7XG4gICAgICAgIHlpZWxkIGNsZWFuVVJMLmhyZWY7XG4gICAgfVxuICAgIGlmICh1cmxNYW5pcHVsYXRpb24pIHtcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFVSTHMgPSB1cmxNYW5pcHVsYXRpb24oeyB1cmw6IHVybE9iamVjdCB9KTtcbiAgICAgICAgZm9yIChjb25zdCB1cmxUb0F0dGVtcHQgb2YgYWRkaXRpb25hbFVSTHMpIHtcbiAgICAgICAgICAgIHlpZWxkIHVybFRvQXR0ZW1wdC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVVJMVmFyaWF0aW9ucyB9IGZyb20gJy4vZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGFrZSB0aGUgcmVxdWVzdCBVUkwgYW5kIG1hbmlwdWxhdGUgaXQgYmFzZWQgb24gdGhlXG4gKiBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ30gUmV0dXJucyB0aGUgVVJMIGluIHRoZSBjYWNoZSB0aGF0IG1hdGNoZXMgdGhlIHJlcXVlc3QsXG4gKiBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVLZXlGb3JVUkwgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBjb25zdCB1cmxzVG9DYWNoZUtleXMgPSBwcmVjYWNoZUNvbnRyb2xsZXIuZ2V0VVJMc1RvQ2FjaGVLZXlzKCk7XG4gICAgZm9yIChjb25zdCBwb3NzaWJsZVVSTCBvZiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnModXJsLCBvcHRpb25zKSkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZUNhY2hlS2V5ID0gdXJsc1RvQ2FjaGVLZXlzLmdldChwb3NzaWJsZVVSTCk7XG4gICAgICAgIGlmIChwb3NzaWJsZUNhY2hlS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zc2libGVDYWNoZUtleTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9QcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgcHJlY2FjaGVDb250cm9sbGVyO1xuLyoqXG4gKiBAcmV0dXJuIHtQcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFwcmVjYWNoZUNvbnRyb2xsZXIpIHtcbiAgICAgICAgcHJlY2FjaGVDb250cm9sbGVyID0gbmV3IFByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIH1cbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgcGx1Z2lucyA9IFtdO1xuZXhwb3J0IGNvbnN0IHByZWNhY2hlUGx1Z2lucyA9IHtcbiAgICAvKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGx1Z2lucztcbiAgICB9LFxuICAgIC8qXG4gICAgICogQHBhcmFtIHtBcnJheX0gbmV3UGx1Z2luc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWRkKG5ld1BsdWdpbnMpIHtcbiAgICAgICAgcGx1Z2lucy5wdXNoKC4uLm5ld1BsdWdpbnMpO1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsb2dHcm91cCA9IChncm91cFRpdGxlLCBkZWxldGVkVVJMcykgPT4ge1xuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiBkZWxldGVkVVJMcykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcykge1xuICAgIGNvbnN0IGRlbGV0aW9uQ291bnQgPSBkZWxldGVkVVJMcy5sZW5ndGg7XG4gICAgaWYgKGRlbGV0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRHVyaW5nIHByZWNhY2hpbmcgY2xlYW51cCwgYCArXG4gICAgICAgICAgICBgJHtkZWxldGlvbkNvdW50fSBjYWNoZWQgYCArXG4gICAgICAgICAgICBgcmVxdWVzdCR7ZGVsZXRpb25Db3VudCA9PT0gMSA/ICcgd2FzJyA6ICdzIHdlcmUnfSBkZWxldGVkLmApO1xuICAgICAgICBsb2dHcm91cCgnRGVsZXRlZCBDYWNoZSBSZXF1ZXN0cycsIGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9uZXN0ZWRHcm91cChncm91cFRpdGxlLCB1cmxzKSB7XG4gICAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzVG9QcmVjYWNoZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzQWxyZWFkeVByZWNhY2hlZFxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJbnN0YWxsRGV0YWlscyh1cmxzVG9QcmVjYWNoZSwgdXJsc0FscmVhZHlQcmVjYWNoZWQpIHtcbiAgICBjb25zdCBwcmVjYWNoZWRDb3VudCA9IHVybHNUb1ByZWNhY2hlLmxlbmd0aDtcbiAgICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkQ291bnQgPSB1cmxzQWxyZWFkeVByZWNhY2hlZC5sZW5ndGg7XG4gICAgaWYgKHByZWNhY2hlZENvdW50IHx8IGFscmVhZHlQcmVjYWNoZWRDb3VudCkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBQcmVjYWNoaW5nICR7cHJlY2FjaGVkQ291bnR9IGZpbGUke3ByZWNhY2hlZENvdW50ID09PSAxID8gJycgOiAncyd9LmA7XG4gICAgICAgIGlmIChhbHJlYWR5UHJlY2FjaGVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgJHthbHJlYWR5UHJlY2FjaGVkQ291bnR9IGAgK1xuICAgICAgICAgICAgICAgIGBmaWxlJHthbHJlYWR5UHJlY2FjaGVkQ291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZSd9IGFscmVhZHkgY2FjaGVkLmA7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2UpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgbmV3bHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc1RvUHJlY2FjaGUpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgcHJldmlvdXNseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzQWxyZWFkeVByZWNhY2hlZCk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZW1vdmVzIGFueSBVUkwgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge1VSTH0gdXJsT2JqZWN0IFRoZSBvcmlnaW5hbCBVUkwuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyBSZWdFeHBzIHRvIHRlc3QgYWdhaW5zdFxuICogZWFjaCBzZWFyY2ggcGFyYW1ldGVyIG5hbWUuIE1hdGNoZXMgbWVhbiB0aGF0IHRoZSBzZWFyY2ggcGFyYW1ldGVyIHNob3VsZCBiZVxuICogaWdub3JlZC5cbiAqIEByZXR1cm4ge1VSTH0gVGhlIFVSTCB3aXRoIGFueSBpZ25vcmVkIHNlYXJjaCBwYXJhbWV0ZXJzIHJlbW92ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gW10pIHtcbiAgICAvLyBDb252ZXJ0IHRoZSBpdGVyYWJsZSBpbnRvIGFuIGFycmF5IGF0IHRoZSBzdGFydCBvZiB0aGUgbG9vcCB0byBtYWtlIHN1cmVcbiAgICAvLyBkZWxldGlvbiBkb2Vzbid0IG1lc3MgdXAgaXRlcmF0aW9uLlxuICAgIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIFsuLi51cmxPYmplY3Quc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcbiAgICAgICAgaWYgKGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZy5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhcmFtTmFtZSkpKSB7XG4gICAgICAgICAgICB1cmxPYmplY3Quc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxPYmplY3Q7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE5hdmlnYXRpb25Sb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhXG4gKiBbUm91dGVde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IHRoYXQgbWF0Y2hlcyBmb3IgYnJvd3NlclxuICogW25hdmlnYXRpb24gcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcHJpbWVycy9zZXJ2aWNlLXdvcmtlcnMvaGlnaC1wZXJmb3JtYW5jZS1sb2FkaW5nI2ZpcnN0X3doYXRfYXJlX25hdmlnYXRpb25fcmVxdWVzdHN9LlxuICpcbiAqIEl0IHdpbGwgb25seSBtYXRjaCBpbmNvbWluZyBSZXF1ZXN0cyB3aG9zZVxuICogW2Btb2RlYF17QGxpbmsgaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtcmVxdWVzdC1tb2RlfVxuICogaXMgc2V0IHRvIGBuYXZpZ2F0ZWAuXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IG9ubHkgYXBwbHkgdGhpcyByb3V0ZSB0byBhIHN1YnNldCBvZiBuYXZpZ2F0aW9uIHJlcXVlc3RzXG4gKiBieSB1c2luZyBvbmUgb3IgYm90aCBvZiB0aGUgYGRlbnlsaXN0YCBhbmQgYGFsbG93bGlzdGAgcGFyYW1ldGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBOYXZpZ2F0aW9uUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogSWYgYm90aCBgZGVueWxpc3RgIGFuZCBgYWxsb3dsaXN0YCBhcmUgcHJvdmlkZWQsIHRoZSBgZGVueWxpc3RgIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2UgYW5kIHRoZSByZXF1ZXN0IHdpbGwgbm90IG1hdGNoIHRoaXMgcm91dGUuXG4gICAgICpcbiAgICAgKiBUaGUgcmVndWxhciBleHByZXNzaW9ucyBpbiBgYWxsb3dsaXN0YCBhbmQgYGRlbnlsaXN0YFxuICAgICAqIGFyZSBtYXRjaGVkIGFnYWluc3QgdGhlIGNvbmNhdGVuYXRlZFxuICAgICAqIFtgcGF0aG5hbWVgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEh5cGVybGlua0VsZW1lbnRVdGlscy9wYXRobmFtZX1cbiAgICAgKiBhbmQgW2BzZWFyY2hgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEh5cGVybGlua0VsZW1lbnRVdGlscy9zZWFyY2h9XG4gICAgICogcG9ydGlvbnMgb2YgdGhlIHJlcXVlc3RlZCBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5kZW55bGlzdF0gSWYgYW55IG9mIHRoZXNlIHBhdHRlcm5zIG1hdGNoLFxuICAgICAqIHRoZSByb3V0ZSB3aWxsIG5vdCBoYW5kbGUgdGhlIHJlcXVlc3QgKGV2ZW4gaWYgYSBhbGxvd2xpc3QgUmVnRXhwIG1hdGNoZXMpLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuYWxsb3dsaXN0PVsvLi9dXSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnNcbiAgICAgKiBtYXRjaCB0aGUgVVJMJ3MgcGF0aG5hbWUgYW5kIHNlYXJjaCBwYXJhbWV0ZXIsIHRoZSByb3V0ZSB3aWxsIGhhbmRsZSB0aGVcbiAgICAgKiByZXF1ZXN0IChhc3N1bWluZyB0aGUgZGVueWxpc3QgZG9lc24ndCBtYXRjaCkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgeyBhbGxvd2xpc3QgPSBbLy4vXSwgZGVueWxpc3QgPSBbXSB9ID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhhbGxvd2xpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5hbGxvd2xpc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNBcnJheU9mQ2xhc3MoZGVueWxpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5kZW55bGlzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigob3B0aW9ucykgPT4gdGhpcy5fbWF0Y2gob3B0aW9ucyksIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9hbGxvd2xpc3QgPSBhbGxvd2xpc3Q7XG4gICAgICAgIHRoaXMuX2RlbnlsaXN0ID0gZGVueWxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdXRlcyBtYXRjaCBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYXRjaCh7IHVybCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QubW9kZSAhPT0gJ25hdmlnYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lQW5kU2VhcmNoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgZm9yIChjb25zdCByZWdFeHAgb2YgdGhpcy5fZGVueWxpc3QpIHtcbiAgICAgICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBpcyBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYmVpbmcgdXNlZCwgc2luY2UgdGhlIFVSTCBtYXRjaGVzIHRoaXMgZGVueWxpc3QgcGF0dGVybjogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtyZWdFeHB9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYWxsb3dsaXN0LnNvbWUoKHJlZ0V4cCkgPT4gcmVnRXhwLnRlc3QocGF0aG5hbWVBbmRTZWFyY2gpKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSBuYXZpZ2F0aW9uIHJvdXRlICR7cGF0aG5hbWVBbmRTZWFyY2h9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaXMgYmVpbmcgdXNlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBpcyBub3QgYCArXG4gICAgICAgICAgICAgICAgYGJlaW5nIHVzZWQsIHNpbmNlIHRoZSBVUkwgYmVpbmcgbmF2aWdhdGVkIHRvIGRvZXNuJ3QgYCArXG4gICAgICAgICAgICAgICAgYG1hdGNoIHRoZSBhbGxvd2xpc3QuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IE5hdmlnYXRpb25Sb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZWdFeHBSb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZFxuICogW1JvdXRlXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfS5cbiAqXG4gKiBGb3Igc2FtZS1vcmlnaW4gcmVxdWVzdHMgdGhlIFJlZ0V4cCBvbmx5IG5lZWRzIHRvIG1hdGNoIHBhcnQgb2YgdGhlIFVSTC4gRm9yXG4gKiByZXF1ZXN0cyBhZ2FpbnN0IHRoaXJkLXBhcnR5IHNlcnZlcnMsIHlvdSBtdXN0IGRlZmluZSBhIFJlZ0V4cCB0aGF0IG1hdGNoZXNcbiAqIHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICpcbiAqIFtTZWUgdGhlIG1vZHVsZSBkb2NzIGZvciBpbmZvLl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvbW9kdWxlcy93b3JrYm94LXJvdXRpbmd9XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXJvdXRpbmdcbiAqIEBleHRlbmRzIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGVcbiAqL1xuY2xhc3MgUmVnRXhwUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250YWluc1xuICAgICAqIFtjYXB0dXJlIGdyb3Vwc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUmVnRXhwI2dyb3VwaW5nLWJhY2stcmVmZXJlbmNlc30sXG4gICAgICogdGhlIGNhcHR1cmVkIHZhbHVlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBbaGFuZGxlcidzXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gYHBhcmFtc2BcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwfSByZWdFeHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0IFVSTHMuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVnRXhwLCBoYW5kbGVyLCBtZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlZ0V4cCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUmVnRXhwUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSAoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gbWF0Y2guXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICAgICAgICBpZiAoKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgJiYgKHJlc3VsdC5pbmRleCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSByZWd1bGFyIGV4cHJlc3Npb24gJyR7cmVnRXhwfScgb25seSBwYXJ0aWFsbHkgbWF0Y2hlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhZ2FpbnN0IHRoZSBjcm9zcy1vcmlnaW4gVVJMICcke3VybH0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJlZ0V4cFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kcyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUhhbmRsZXIgfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IG1hdGNoXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgcm91dGUgbWF0Y2hlcyBhIGdpdmVuXG4gICAgICogYGZldGNoYCBldmVudCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWF0Y2gnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHsgcGFyYW1OYW1lOiAnbWV0aG9kJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgICAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVIYW5kbGVyIH0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIEZldGNoRXZlbnQgdGhyb3VnaCBvbmUgb3IgbW9yZVxuICogW1JvdXRlc117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcmVzcG9uZGluZyAgd2l0aCBhIFJlcXVlc3QgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgUm91dGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIEFycmF5PG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGU+Pn0gcm91dGVzIEEgYE1hcGAgb2YgSFRUUFxuICAgICAqIG1ldGhvZCBuYW1lICgnR0VUJywgZXRjLikgdG8gYW4gYXJyYXkgb2YgYWxsIHRoZSBjb3JyZXNwb25kaW5nIGBSb3V0ZWBcbiAgICAgKiBpbnN0YW5jZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZC5cbiAgICAgKi9cbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm91dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZmV0Y2ggZXZlbnQgbGlzdGVuZXIgdG8gcmVzcG9uZCB0byBldmVudHMgd2hlbiBhIHJvdXRlIG1hdGNoZXNcbiAgICAgKiB0aGUgZXZlbnQncyByZXF1ZXN0LlxuICAgICAqL1xuICAgIGFkZEZldGNoTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsICgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gZXZlbnQ7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBldmVudC5yZXNwb25kV2l0aChyZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBVUkxzIHRvIGNhY2hlIGZyb20gdGhlIHdpbmRvdy5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjYWNoZSByZXNvdXJjZXMgbG9hZGVkIG9uIHRoZSBwYWdlIHByaW9yIHRvIHdoZW4gdGhlXG4gICAgICogc2VydmljZSB3b3JrZXIgc3RhcnRlZCBjb250cm9sbGluZyBpdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2UgZGF0YSBzZW50IGZyb20gdGhlIHdpbmRvdyBzaG91bGQgYmUgYXMgZm9sbG93cy5cbiAgICAgKiBXaGVyZSB0aGUgYHVybHNUb0NhY2hlYCBhcnJheSBtYXkgY29uc2lzdCBvZiBVUkwgc3RyaW5ncyBvciBhbiBhcnJheSBvZlxuICAgICAqIFVSTCBzdHJpbmcgKyBgcmVxdWVzdEluaXRgIG9iamVjdCAodGhlIHNhbWUgYXMgeW91J2QgcGFzcyB0byBgZmV0Y2goKWApLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICoge1xuICAgICAqICAgdHlwZTogJ0NBQ0hFX1VSTFMnLFxuICAgICAqICAgcGF5bG9hZDoge1xuICAgICAqICAgICB1cmxzVG9DYWNoZTogW1xuICAgICAqICAgICAgICcuL3NjcmlwdDEuanMnLFxuICAgICAqICAgICAgICcuL3NjcmlwdDIuanMnLFxuICAgICAqICAgICAgIFsnLi9zY3JpcHQzLmpzJywge21vZGU6ICduby1jb3JzJ31dLFxuICAgICAqICAgICBdLFxuICAgICAqICAgfSxcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYWRkQ2FjaGVMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hpbmcgVVJMcyBmcm9tIHRoZSB3aW5kb3dgLCBwYXlsb2FkLnVybHNUb0NhY2hlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdFByb21pc2VzID0gUHJvbWlzZS5hbGwocGF5bG9hZC51cmxzVG9DYWNoZS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IFtlbnRyeV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KC4uLmVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogVHlwZVNjcmlwdCBlcnJvcnMgd2l0aG91dCB0aGlzIHR5cGVjYXN0IGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBzb21lIHJlYXNvbiAocHJvYmFibHkgYSBidWcpLiBUaGUgcmVhbCB0eXBlIGhlcmUgc2hvdWxkIHdvcmsgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvZXNuJ3Q6IGBBcnJheTxQcm9taXNlPFJlc3BvbnNlPiB8IHVuZGVmaW5lZD5gLlxuICAgICAgICAgICAgICAgIH0pKTsgLy8gVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbChyZXF1ZXN0UHJvbWlzZXMpO1xuICAgICAgICAgICAgICAgIC8vIElmIGEgTWVzc2FnZUNoYW5uZWwgd2FzIHVzZWQsIHJlcGx5IHRvIHRoZSBtZXNzYWdlIG9uIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBvcnRzICYmIGV2ZW50LnBvcnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RQcm9taXNlcy50aGVuKCgpID0+IGV2ZW50LnBvcnRzWzBdLnBvc3RNZXNzYWdlKHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHJvdXRpbmcgcnVsZXMgdG8gYSBGZXRjaEV2ZW50IG9iamVjdCB0byBnZXQgYSBSZXNwb25zZSBmcm9tIGFuXG4gICAgICogYXBwcm9wcmlhdGUgUm91dGUncyBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBoYW5kbGUgKHRoaXMgaXMgdXN1YWxseVxuICAgICAqICAgICBmcm9tIGEgZmV0Y2ggZXZlbnQsIGJ1dCBpdCBkb2VzIG5vdCBoYXZlIHRvIGJlKS5cbiAgICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QsXG4gICAgICogICAgIGlmIGFwcGxpY2FibGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT58dW5kZWZpbmVkfSBBIHByb21pc2UgaXMgcmV0dXJuZWQgaWYgYVxuICAgICAqICAgICByZWdpc3RlcmVkIHJvdXRlIGNhbiBoYW5kbGUgdGhlIHJlcXVlc3QuIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nXG4gICAgICogICAgIHJvdXRlIGFuZCB0aGVyZSdzIG5vIGBkZWZhdWx0SGFuZGxlcmAsIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIGhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBwYXJhbXMsIHJvdXRlIH0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHsgdXJsLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5oYW5kbGVyO1xuICAgICAgICBjb25zdCBkZWJ1Z01lc3NhZ2VzID0gW107XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIGBGb3VuZCBhIHJvdXRlIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3Q6YCwgcm91dGUsXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLCBwYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBiZWNhdXNlIHRoZXJlIHdhcyBubyBtYXRjaGluZyByb3V0ZSwgdGhlblxuICAgICAgICAvLyBmYWxsIGJhY2sgdG8gZGVmYXVsdEhhbmRsZXIgaWYgdGhhdCdzIGRlZmluZWQuXG4gICAgICAgIGlmICghaGFuZGxlciAmJiB0aGlzLl9kZWZhdWx0SGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goYEZhaWxlZCB0byBmaW5kIGEgbWF0Y2hpbmcgcm91dGUuIEZhbGxpbmcgYCArXG4gICAgICAgICAgICAgICAgICAgIGBiYWNrIHRvIHRoZSBkZWZhdWx0IGhhbmRsZXIuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyID0gdGhpcy5fZGVmYXVsdEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIE5vIGhhbmRsZXIgc28gV29ya2JveCB3aWxsIGRvIG5vdGhpbmcuIElmIGxvZ3MgaXMgc2V0IG9mIGRlYnVnXG4gICAgICAgICAgICAgICAgLy8gaS5lLiB2ZXJib3NlLCB3ZSBzaG91bGQgcHJpbnQgb3V0IHRoaXMgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyByb3V0ZSBmb3VuZCBmb3I6ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGhhbmRsZXIsIG1lYW5pbmcgV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUm91dGVyIGlzIHJlc3BvbmRpbmcgdG86ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKC4uLm1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcmFwIGluIHRyeSBhbmQgY2F0Y2ggaW4gY2FzZSB0aGUgaGFuZGxlIG1ldGhvZCB0aHJvd3MgYSBzeW5jaHJvbm91c1xuICAgICAgICAvLyBlcnJvci4gSXQgc2hvdWxkIHN0aWxsIGNhbGxiYWNrIHRvIHRoZSBjYXRjaCBoYW5kbGVyLlxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9taXNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gaGFuZGxlci5oYW5kbGUoeyB1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB0aGlzLl9jYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0Y2hIYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYSByZXF1ZXN0IGFuZCBVUkwgKGFuZCBvcHRpb25hbGx5IGFuIGV2ZW50KSBhZ2FpbnN0IHRoZSBsaXN0IG9mXG4gICAgICogcmVnaXN0ZXJlZCByb3V0ZXMsIGFuZCBpZiB0aGVyZSdzIGEgbWF0Y2gsIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAgKiByb3V0ZSBhbG9uZyB3aXRoIGFueSBwYXJhbXMgZ2VuZXJhdGVkIGJ5IHRoZSBtYXRjaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtVUkx9IG9wdGlvbnMudXJsXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gbWF0Y2guXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50ICh1bmxlc3MgTi9BKS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGByb3V0ZWAgYW5kIGBwYXJhbXNgIHByb3BlcnRpZXMuXG4gICAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgICAqICAgICBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZmluZE1hdGNoaW5nUm91dGUoeyB1cmwsIHJlcXVlc3QsIGV2ZW50IH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHVybCwgVVJMLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2ZpbmRNYXRjaGluZ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLnVybCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnZmluZE1hdGNoaW5nUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZXMgPSB0aGlzLl9yb3V0ZXMuZ2V0KHJlcXVlc3QubWV0aG9kKSB8fCBbXTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXM7XG4gICAgICAgICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHsgdXJsLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIwNzlcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaFJlc3VsdCkgJiYgbWF0Y2hSZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IG9iamVjdCBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1hdGNoUmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRoZSBib29sZWFuIHZhbHVlIHRydWUgKHJhdGhlciB0aGFuIGp1c3Qgc29tZXRoaW5nIHRydXRoLXkpLFxuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBzZXQgcGFyYW1zLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjEzNCNpc3N1ZWNvbW1lbnQtNTEzOTI0MzUzXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGhhdmUgYSBtYXRjaC5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3V0ZSwgcGFyYW1zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm8gbWF0Y2ggd2FzIGZvdW5kIGFib3ZlLCByZXR1cm4gYW5kIGVtcHR5IG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAgICAgKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqL1xuICAgIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gICAgICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICovXG4gICAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgICAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnB1c2gocm91dGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHVucmVnaXN0ZXIuXG4gICAgICovXG4gICAgdW5yZWdpc3RlclJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiByb3V0ZS5tZXRob2QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZUluZGV4ID0gdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLmluZGV4T2Yocm91dGUpO1xuICAgICAgICBpZiAocm91dGVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuc3BsaWNlKHJvdXRlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpyb3V0aW5nOjUuMS40J10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgTmF2aWdhdGlvblJvdXRlIH0gZnJvbSAnLi9OYXZpZ2F0aW9uUm91dGUuanMnO1xuaW1wb3J0IHsgUmVnRXhwUm91dGUgfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICcuL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vUm91dGVyLmpzJztcbmltcG9ydCB7IHNldENhdGNoSGFuZGxlciB9IGZyb20gJy4vc2V0Q2F0Y2hIYW5kbGVyLmpzJztcbmltcG9ydCB7IHNldERlZmF1bHRIYW5kbGVyIH0gZnJvbSAnLi9zZXREZWZhdWx0SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtcm91dGluZ1xuICovXG5leHBvcnQgeyBOYXZpZ2F0aW9uUm91dGUsIFJlZ0V4cFJvdXRlLCByZWdpc3RlclJvdXRlLCBSb3V0ZSwgUm91dGVyLCBzZXRDYXRjaEhhbmRsZXIsIHNldERlZmF1bHRIYW5kbGVyLCB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbmRleC5qcyc7IiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBSZWdFeHBSb3V0ZSB9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogRWFzaWx5IHJlZ2lzdGVyIGEgUmVnRXhwLCBzdHJpbmcsIG9yIGZ1bmN0aW9uIHdpdGggYSBjYWNoaW5nXG4gKiBzdHJhdGVneSB0byBhIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhIFJvdXRlIGZvciB5b3UgaWYgbmVlZGVkIGFuZFxuICogY2FsbCBbcmVnaXN0ZXJSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlciNyZWdpc3RlclJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd8bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IGNhcHR1cmVcbiAqIElmIHRoZSBjYXB0dXJlIHBhcmFtIGlzIGEgYFJvdXRlYCwgYWxsIG90aGVyIGFyZ3VtZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBbaGFuZGxlcl0gQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS4gVGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHJlcXVpcmVkIGlmIGBjYXB0dXJlYCBpcyBub3QgYSBgUm91dGVgIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gKiBhZ2FpbnN0LlxuICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgKFVzZWZ1bCBmb3JcbiAqIHVucmVnaXN0ZXJpbmcpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgbGV0IHJvdXRlO1xuICAgIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY2FwdHVyZVVybCA9IG5ldyBVUkwoY2FwdHVyZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXN0cmluZycsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBjaGVjayBpZiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkcyBhcmUgaW4gdGhlIHBhdGhuYW1lIG9ubHkuXG4gICAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBsb2cgbWVzc2FnZSBpbiB2NC5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9DaGVjayA9IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpID9cbiAgICAgICAgICAgICAgICBjYXB0dXJlVXJsLnBhdGhuYW1lIDogY2FwdHVyZTtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAjcGFyYW1ldGVyc1xuICAgICAgICAgICAgY29uc3Qgd2lsZGNhcmRzID0gJ1sqOj8rXSc7XG4gICAgICAgICAgICBpZiAoKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApKS5leGVjKHZhbHVlVG9DaGVjaykpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSAnJGNhcHR1cmUnIHBhcmFtZXRlciBjb250YWlucyBhbiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkIGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2hhcmFjdGVyICgke3dpbGRjYXJkc30pLiBTdHJpbmdzIGFyZSBub3cgYWx3YXlzIGludGVycHJldGVkIGFzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hDYWxsYmFjayA9ICh7IHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICgodXJsLnBhdGhuYW1lID09PSBjYXB0dXJlVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAodXJsLm9yaWdpbiAhPT0gY2FwdHVyZVVybC5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgJHtjYXB0dXJlfSBvbmx5IHBhcnRpYWxseSBtYXRjaGVzIHRoZSBjcm9zcy1vcmlnaW4gVVJMIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dXJsfS4gVGhpcyByb3V0ZSB3aWxsIG9ubHkgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmwuaHJlZiA9PT0gY2FwdHVyZVVybC5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBzdHJpbmcgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUm91dGUobWF0Y2hDYWxsYmFjaywgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBgUmVnRXhwYCB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSZWdFeHBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBmdW5jdGlvbiB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUm91dGUpIHtcbiAgICAgICAgcm91dGUgPSBjYXB0dXJlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5zdXBwb3J0ZWQtcm91dGUtdHlwZScsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIucmVnaXN0ZXJSb3V0ZShyb3V0ZSk7XG4gICAgcmV0dXJuIHJvdXRlO1xufVxuZXhwb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcik7XG59XG5leHBvcnQgeyBzZXRDYXRjaEhhbmRsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICogbWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QuXG4gKlxuICogV2l0aG91dCBhIGRlZmF1bHQgaGFuZGxlciwgdW5tYXRjaGVkIHJlcXVlc3RzIHdpbGwgZ28gYWdhaW5zdCB0aGVcbiAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0SGFuZGxlcihoYW5kbGVyKSB7XG4gICAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIuc2V0RGVmYXVsdEhhbmRsZXIoaGFuZGxlcik7XG59XG5leHBvcnQgeyBzZXREZWZhdWx0SGFuZGxlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBkZWZhdWx0IEhUVFAgbWV0aG9kLCAnR0VUJywgdXNlZCB3aGVuIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgbWV0aG9kXG4gKiBjb25maWd1cmVkIGZvciBhIHJvdXRlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZXRob2QgPSAnR0VUJztcbi8qKlxuICogVGhlIGxpc3Qgb2YgdmFsaWQgSFRUUCBtZXRob2RzIGFzc29jaWF0ZWQgd2l0aCByZXF1ZXN0cyB0aGF0IGNvdWxkIGJlIHJvdXRlZC5cbiAqXG4gKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgdmFsaWRNZXRob2RzID0gW1xuICAgICdERUxFVEUnLFxuICAgICdHRVQnLFxuICAgICdIRUFEJyxcbiAgICAnUEFUQ0gnLFxuICAgICdQT1NUJyxcbiAgICAnUFVUJyxcbl07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9Sb3V0ZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgZGVmYXVsdFJvdXRlcjtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuIElmIG9uZVxuICogZG9lcyBhbHJlYWR5IGV4aXN0LCB0aGF0IGluc3RhbmNlIGlzIHJldHVybmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtSb3V0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFkZWZhdWx0Um91dGVyKSB7XG4gICAgICAgIGRlZmF1bHRSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gICAgICAgIC8vIFRoZSBoZWxwZXJzIHRoYXQgdXNlIHRoZSBkZWZhdWx0IFJvdXRlciBhc3N1bWUgdGhlc2UgbGlzdGVuZXJzIGV4aXN0LlxuICAgICAgICBkZWZhdWx0Um91dGVyLmFkZEZldGNoTGlzdGVuZXIoKTtcbiAgICAgICAgZGVmYXVsdFJvdXRlci5hZGRDYWNoZUxpc3RlbmVyKCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Um91dGVyO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKXxPYmplY3R9IGhhbmRsZXIgRWl0aGVyIGEgZnVuY3Rpb24sIG9yIGFuIG9iamVjdCB3aXRoIGFcbiAqICdoYW5kbGUnIG1ldGhvZC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYSBoYW5kbGUgbWV0aG9kLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIYW5kbGVyID0gKGhhbmRsZXIpID0+IHtcbiAgICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2QoaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGhhbmRsZXIsICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBoYW5kbGU6IGhhbmRsZXIgfTtcbiAgICB9XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBmZXRjaFdyYXBwZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3Rde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNjYWNoZS1mYWxsaW5nLWJhY2stdG8tbmV0d29ya31cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQSBjYWNoZSBmaXJzdCBzdHJhdGVneSBpcyB1c2VmdWwgZm9yIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXZpc2lvbmVkLFxuICogc3VjaCBhcyBVUkxzIGxpa2UgYC9zdHlsZXMvZXhhbXBsZS5hOGY1ZjEuY3NzYCwgc2luY2UgdGhleVxuICogY2FuIGJlIGNhY2hlZCBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlRmlyc3Qge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9wdGlvbnMucGx1Z2lucyBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmZldGNoT3B0aW9ucyBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgICAgICB0aGlzLl9mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIGZvbGxvd3MgYW4gQVBJIHRoYXRcbiAgICAgKiB3aWxsIHdvcmsgd2l0aCB0aGVcbiAgICAgKiBbV29ya2JveCBSb3V0ZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGVyfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGUoeyBldmVudCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZVdyYXBwZXIubWF0Y2goe1xuICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBtYXRjaE9wdGlvbnM6IHRoaXMuX21hdGNoT3B0aW9ucyxcbiAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgV2lsbCByZXNwb25kIHdpdGggYSBuZXR3b3JrIHJlcXVlc3QuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0RnJvbU5ldHdvcmsocmVxdWVzdCwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCgnQ2FjaGVGaXJzdCcsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgbmV0d29yayBhbmQgY2FjaGUgcGFydCBvZiBDYWNoZUZpcnN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtFdmVudH0gW2V2ZW50XVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfZ2V0RnJvbU5ldHdvcmsocmVxdWVzdCwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdyYXBwZXIuZmV0Y2goe1xuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiB0aGlzLl9mZXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gS2VlcCB0aGUgc2VydmljZSB3b3JrZXIgd2hpbGUgd2UgcHV0IHRoZSByZXF1ZXN0IHRvIHRoZSBjYWNoZVxuICAgICAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgY2FjaGVQdXRQcm9taXNlID0gY2FjaGVXcmFwcGVyLnB1dCh7XG4gICAgICAgICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VDbG9uZSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcGx1Z2luczogdGhpcy5fcGx1Z2lucyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBldmVudC53YWl0VW50aWwoY2FjaGVQdXRQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBVbmFibGUgdG8gZW5zdXJlIHNlcnZpY2Ugd29ya2VyIHN0YXlzIGFsaXZlIHdoZW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdXBkYXRpbmcgY2FjaGUgZm9yICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVGaXJzdCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtjYWNoZS1vbmx5XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jY2FjaGUtb25seX1cbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBjbGFzcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYW55XG4gKiBbV29ya2JveCBwbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc30uXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBDYWNoZU9ubHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9wdGlvbnMucGx1Z2lucyBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgICAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBvcHRpb25zLm1hdGNoT3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBwZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgZm9sbG93cyBhbiBBUEkgdGhhdFxuICAgICAqIHdpbGwgd29yayB3aXRoIHRoZVxuICAgICAqIFtXb3JrYm94IFJvdXRlcl17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZXJ9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGhhbmRsZSh7IGV2ZW50LCByZXF1ZXN0IH0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVPbmx5JyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGVXcmFwcGVyLm1hdGNoKHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgbWF0Y2hPcHRpb25zOiB0aGlzLl9tYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KCdDYWNoZU9ubHknLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgICAgICAgICAgYCBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlT25seSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBmZXRjaFdyYXBwZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZmV0Y2hXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrIGZpcnN0XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jbmV0d29yay1mYWxsaW5nLWJhY2stdG8tY2FjaGV9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2hhbmRsZS10aGlyZC1wYXJ0eS1yZXF1ZXN0c30uXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXXtAbGluayBodHRwczovL2VuYWJsZS1jb3JzLm9yZy99LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrRmlyc3Qge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9wdGlvbnMucGx1Z2lucyBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmZldGNoT3B0aW9ucyBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBjb21iYXRcbiAgICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgICAqIHNjZW5hcmlvcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgICAgIGlmIChvcHRpb25zLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVXNpbmdDYWNoZVdpbGxVcGRhdGUgPSBvcHRpb25zLnBsdWdpbnMuc29tZSgocGx1Z2luKSA9PiAhIXBsdWdpbi5jYWNoZVdpbGxVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5fcGx1Z2lucyA9IGlzVXNpbmdDYWNoZVdpbGxVcGRhdGUgP1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucGx1Z2lucyA6IFtjYWNoZU9rQW5kT3BhcXVlUGx1Z2luLCAuLi5vcHRpb25zLnBsdWdpbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gcGx1Z2lucyBwYXNzZWQgaW4sIHVzZSB0aGUgZGVmYXVsdCBwbHVnaW4uXG4gICAgICAgICAgICB0aGlzLl9wbHVnaW5zID0gW2NhY2hlT2tBbmRPcGFxdWVQbHVnaW5dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZSh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbmV0d29ya1RpbWVvdXRTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIGZvbGxvd3MgYW4gQVBJIHRoYXRcbiAgICAgKiB3aWxsIHdvcmsgd2l0aCB0aGVcbiAgICAgKiBbV29ya2JveCBSb3V0ZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGVyfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGUoeyBldmVudCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmV0d29ya0ZpcnN0JyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgcHJvbWlzZSB9ID0gdGhpcy5fZ2V0VGltZW91dFByb21pc2UoeyByZXF1ZXN0LCBldmVudCwgbG9ncyB9KTtcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IGlkO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXR3b3JrUHJvbWlzZSA9IHRoaXMuX2dldE5ldHdvcmtQcm9taXNlKHsgdGltZW91dElkLCByZXF1ZXN0LCBldmVudCwgbG9ncyB9KTtcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG4gICAgICAgIC8vIFByb21pc2UucmFjZSgpIHdpbGwgcmVzb2x2ZSBhcyBzb29uIGFzIHRoZSBmaXJzdCBwcm9taXNlIHJlc29sdmVzLlxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgICAvLyBJZiBQcm9taXNlLnJhY2UoKSByZXNvbHZlZCB3aXRoIG51bGwsIGl0IG1pZ2h0IGJlIGR1ZSB0byBhIG5ldHdvcmtcbiAgICAgICAgLy8gdGltZW91dCArIGEgY2FjaGUgbWlzcy4gSWYgdGhhdCB3ZXJlIHRvIGhhcHBlbiwgd2UnZCByYXRoZXIgd2FpdCB1bnRpbFxuICAgICAgICAvLyB0aGUgbmV0d29ya1Byb21pc2UgcmVzb2x2ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgLy8gTm90ZSB0aGF0IGl0J3MgZmluZSB0byBhd2FpdCBhbiBhbHJlYWR5LXJlc29sdmVkIHByb21pc2UsIHNvIHdlIGRvbid0XG4gICAgICAgIC8vIGhhdmUgdG8gY2hlY2sgdG8gc2VlIGlmIGl0J3Mgc3RpbGwgXCJpbiBmbGlnaHRcIi5cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQoJ05ldHdvcmtGaXJzdCcsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIGFycmF5XG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRUaW1lb3V0UHJvbWlzZSh7IHJlcXVlc3QsIGxvZ3MsIGV2ZW50IH0pIHtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25OZXR3b3JrVGltZW91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYFRpbWluZyBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgdGhpcy5fcmVzcG9uZEZyb21DYWNoZSh7IHJlcXVlc3QsIGV2ZW50IH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KG9uTmV0d29ya1RpbWVvdXQsIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb21pc2U6IHRpbWVvdXRQcm9taXNlLFxuICAgICAgICAgICAgaWQ6IHRpbWVvdXRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgQXJyYXkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9nZXROZXR3b3JrUHJvbWlzZSh7IHRpbWVvdXRJZCwgcmVxdWVzdCwgbG9ncywgZXZlbnQgfSkge1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9uczogdGhpcy5fZmV0Y2hPcHRpb25zLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dElkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay4gV2lsbCByZXNwb25kIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX3Jlc3BvbmRGcm9tQ2FjaGUoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuX2NhY2hlTmFtZX0nYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgIGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCB0aGUgc2VydmljZSB3b3JrZXIgYWxpdmUgd2hpbGUgd2UgcHV0IHRoZSByZXF1ZXN0IGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VDbG9uZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBjYWNoZVB1dCA9IGNhY2hlV3JhcHBlci5wdXQoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlQ2xvbmUsXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogdGhpcy5fcGx1Z2lucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IGhhcyBiZWVuIHJlc3BvbmRlZCB0byBzbyB3ZSBjYW4ga2VlcCB0aGUgU1cgYWxpdmUgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uZCB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICBldmVudC53YWl0VW50aWwoY2FjaGVQdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBmb3IgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2VkIGlmIHRoZSBuZXR3b3JrIHRpbWVvdXRzIG9yIGZhaWxzIHRvIG1ha2UgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCB0byBtYXRjaCBpbiB0aGUgY2FjaGVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZXNwb25kRnJvbUNhY2hlKHsgZXZlbnQsIHJlcXVlc3QgfSkge1xuICAgICAgICByZXR1cm4gY2FjaGVXcmFwcGVyLm1hdGNoKHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgbWF0Y2hPcHRpb25zOiB0aGlzLl9tYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBOZXR3b3JrRmlyc3QgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZmV0Y2hXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrLW9ubHlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNuZXR3b3JrLW9ubHl9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHRha2UgYWR2YW50YWdlIG9mIGFueVxuICogW1dvcmtib3ggcGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrT25seSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gb3B0aW9ucy5wbHVnaW5zIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuZmV0Y2hPcHRpb25zIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgICAgIHRoaXMuX2ZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCBmb2xsb3dzIGFuIEFQSSB0aGF0XG4gICAgICogd2lsbCB3b3JrIHdpdGggdGhlXG4gICAgICogW1dvcmtib3ggUm91dGVyXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlcn0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGUoeyBldmVudCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05ldHdvcmtPbmx5JyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwcGVyLmZldGNoKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9uczogdGhpcy5fZmV0Y2hPcHRpb25zLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQoJ05ldHdvcmtPbmx5JywgcmVxdWVzdCkpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmV0d29ya09ubHkgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGNhY2hlV3JhcHBlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZmV0Y2hXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCB7IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9pbnN0YW50LWFuZC1vZmZsaW5lL29mZmxpbmUtY29va2Jvb2svI3N0YWxlLXdoaWxlLXJldmFsaWRhdGV9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFJlc291cmNlcyBhcmUgcmVxdWVzdGVkIGZyb20gYm90aCB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrIGluIHBhcmFsbGVsLlxuICogVGhlIHN0cmF0ZWd5IHdpbGwgcmVzcG9uZCB3aXRoIHRoZSBjYWNoZWQgdmVyc2lvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZVxuICogd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuIFRoZSBjYWNoZSBpcyB1cGRhdGVkIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2VcbiAqIHdpdGggZWFjaCBzdWNjZXNzZnVsIHJlcXVlc3QuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvaGFuZGxlLXRoaXJkLXBhcnR5LXJlcXVlc3RzfS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU117QGxpbmsgaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvfS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RhbGVXaGlsZVJldmFsaWRhdGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9wdGlvbnMucGx1Z2lucyBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmZldGNoT3B0aW9ucyBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm1hdGNoT3B0aW9ucyBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgICAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB7XG4gICAgICAgICAgICBjb25zdCBpc1VzaW5nQ2FjaGVXaWxsVXBkYXRlID0gb3B0aW9ucy5wbHVnaW5zLnNvbWUoKHBsdWdpbikgPT4gISFwbHVnaW4uY2FjaGVXaWxsVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3BsdWdpbnMgPSBpc1VzaW5nQ2FjaGVXaWxsVXBkYXRlID9cbiAgICAgICAgICAgICAgICBvcHRpb25zLnBsdWdpbnMgOiBbY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiwgLi4ub3B0aW9ucy5wbHVnaW5zXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIHBsdWdpbnMgcGFzc2VkIGluLCB1c2UgdGhlIGRlZmF1bHQgcGx1Z2luLlxuICAgICAgICAgICAgdGhpcy5fcGx1Z2lucyA9IFtjYWNoZU9rQW5kT3BhcXVlUGx1Z2luXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIGZvbGxvd3MgYW4gQVBJIHRoYXRcbiAgICAgKiB3aWxsIHdvcmsgd2l0aCB0aGVcbiAgICAgKiBbV29ya2JveCBSb3V0ZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGVyfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFdmVudH0gW29wdGlvbnMuZXZlbnRdIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGUoeyBldmVudCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoQW5kQ2FjaGVQcm9taXNlID0gdGhpcy5fZ2V0RnJvbU5ldHdvcmsoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGVXcmFwcGVyLm1hdGNoKHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgbWF0Y2hPcHRpb25zOiB0aGlzLl9tYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5fY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgICAgICAgICAgYCBjYWNoZS4gV2lsbCB1cGRhdGUgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZSBpbiB0aGUgYmFja2dyb3VuZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbChmZXRjaEFuZENhY2hlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdXBkYXRpbmcgY2FjaGUgZm9yICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLl9jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBXaWxsIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoQW5kQ2FjaGVQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCgnU3RhbGVXaGlsZVJldmFsaWRhdGUnLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2dldEZyb21OZXR3b3JrKHsgcmVxdWVzdCwgZXZlbnQgfSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoV3JhcHBlci5mZXRjaCh7XG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHRoaXMuX2ZldGNoT3B0aW9ucyxcbiAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuX3BsdWdpbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYWNoZVB1dFByb21pc2UgPSBjYWNoZVdyYXBwZXIucHV0KHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZS5jbG9uZSgpLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLl9wbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZVB1dFByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBmb3IgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo1LjEuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRmlyc3QgfSBmcm9tICcuL0NhY2hlRmlyc3QuanMnO1xuaW1wb3J0IHsgQ2FjaGVPbmx5IH0gZnJvbSAnLi9DYWNoZU9ubHkuanMnO1xuaW1wb3J0IHsgTmV0d29ya0ZpcnN0IH0gZnJvbSAnLi9OZXR3b3JrRmlyc3QuanMnO1xuaW1wb3J0IHsgTmV0d29ya09ubHkgfSBmcm9tICcuL05ldHdvcmtPbmx5LmpzJztcbmltcG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnLi9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGVyZSBhcmUgY29tbW9uIGNhY2hpbmcgc3RyYXRlZ2llcyB0aGF0IG1vc3Qgc2VydmljZSB3b3JrZXJzIHdpbGwgbmVlZFxuICogYW5kIHVzZS4gVGhpcyBtb2R1bGUgcHJvdmlkZXMgc2ltcGxlIGltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBzdHJhdGVnaWVzLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmV4cG9ydCB7IENhY2hlRmlyc3QsIENhY2hlT25seSwgTmV0d29ya0ZpcnN0LCBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUsIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB2YWxpZCByZXNwb25zZSAodG8gYWxsb3cgY2FjaGluZykgaWYgdGhlIHN0YXR1cyBpcyAyMDAgKE9LKSBvclxuICAgICAqIDAgKG9wYXF1ZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjYWNoZVdpbGxVcGRhdGU6IGFzeW5jICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lLCByZXF1ZXN0KSA9PiBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIHJlc3BvbmQgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICAgIHByaW50RmluYWxSZXNwb25zZTogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHRoZSBmaW5hbCByZXNwb25zZSBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSB8fCAnW05vIHJlc3BvbnNlIHJldHVybmVkXScpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImltcG9ydCB7IHNraXBXYWl0aW5nLCBjbGllbnRzQ2xhaW0gfSBmcm9tICd3b3JrYm94LWNvcmUnXG5pbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSAnd29ya2JveC1wcmVjYWNoaW5nJ1xuaW1wb3J0IHsgUHJlZmV0Y2hlciB9IGZyb20gJ0BsYXllcjAvcHJlZmV0Y2gvc3cnXG5cbnNraXBXYWl0aW5nKClcbmNsaWVudHNDbGFpbSgpXG5wcmVjYWNoZUFuZFJvdXRlKHNlbGYuX19XQl9NQU5JRkVTVCB8fCBbXSlcblxubmV3IFByZWZldGNoZXIoKS5yb3V0ZSgpXG4iXSwic291cmNlUm9vdCI6IiJ9