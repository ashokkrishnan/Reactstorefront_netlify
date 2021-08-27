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
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "8VfV");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+JpW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cacheWrapper; });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/7yy");
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CF1o");
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ID1N");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MZ8O");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/ykI");
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YNOD");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Bxln");
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
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__[/* pluginUtils */ "a"].filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (false) {}
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
            if (false) {}
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (false) {}
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
    if (false) {}
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
            if (false) {}
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
    if (false) {}
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (false) {}
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__[/* WorkboxError */ "a"]('cache-put-with-no-response', {
            url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__[/* getFriendlyURL */ "a"])(effectiveRequest.url),
        });
    }
    const responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (false) {}
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__[/* pluginUtils */ "a"].filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    const oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (false) {}
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await Object(_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__[/* executeQuotaErrorCallbacks */ "a"])();
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

/***/ "/7yy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export assert */
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YNOD");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Bxln");
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
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  true ? null : undefined;



/***/ }),

/***/ "/ykI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pluginUtils; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "2KUI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:expiration:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "4E/K":
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "5tLK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:routing:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "6Nk2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
function log(...message) {
    if (false) {}
}
exports.default = log;


/***/ }),

/***/ "6kfY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DBWrapper; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "8VfV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
var registerQuotaErrorCallback = __webpack_require__("L0Y3");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__("/7yy");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheNames.js
var cacheNames = __webpack_require__("b8MC");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheWrapper.js
var cacheWrapper = __webpack_require__("+JpW");

// EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
var _version = __webpack_require__("Bxln");

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructReadableStream.js
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


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let canConstructResponseFromBodyStream_supportStatus;
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
    if (canConstructResponseFromBodyStream_supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                canConstructResponseFromBodyStream_supportStatus = true;
            }
            catch (error) {
                canConstructResponseFromBodyStream_supportStatus = false;
            }
        }
        canConstructResponseFromBodyStream_supportStatus = false;
    }
    return canConstructResponseFromBodyStream_supportStatus;
}


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
var dontWaitFor = __webpack_require__("aaXm");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/DBWrapper.js
var DBWrapper = __webpack_require__("6kfY");

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/Deferred.js
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


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/deleteDatabase.js
var deleteDatabase = __webpack_require__("fkRk");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
var executeQuotaErrorCallbacks = __webpack_require__("CF1o");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/fetchWrapper.js
var fetchWrapper = __webpack_require__("gmtC");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__("ID1N");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__("MZ8O");

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/timeout.js
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

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/resultingClientExists.js
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
        await timeout(100);
    }
    return resultingWindow;
}

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__("YNOD");

// CONCATENATED MODULE: ./node_modules/workbox-core/_private.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.



















// CONCATENATED MODULE: ./node_modules/workbox-core/cacheNames.js
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
const cacheNames_cacheNames = {
    get googleAnalytics() {
        return cacheNames["a" /* cacheNames */].getGoogleAnalyticsName();
    },
    get precache() {
        return cacheNames["a" /* cacheNames */].getPrecacheName();
    },
    get prefix() {
        return cacheNames["a" /* cacheNames */].getPrefix();
    },
    get runtime() {
        return cacheNames["a" /* cacheNames */].getRuntimeName();
    },
    get suffix() {
        return cacheNames["a" /* cacheNames */].getSuffix();
    },
};


// CONCATENATED MODULE: ./node_modules/workbox-core/copyResponse.js
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
    const body = canConstructResponseFromBodyStream() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/clientsClaim.js
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


// CONCATENATED MODULE: ./node_modules/workbox-core/setCacheNameDetails.js
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
    if (false) {}
    cacheNames["a" /* cacheNames */].updateDetails(details);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/skipWaiting.js
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


// CONCATENATED MODULE: ./node_modules/workbox-core/types.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// CONCATENATED MODULE: ./node_modules/workbox-core/index.js
/*
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



// CONCATENATED MODULE: ./node_modules/workbox-core/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-precaching/_version.js
var workbox_precaching_version = __webpack_require__("xwD5");

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/precachePlugins.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const precachePlugins_plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return precachePlugins_plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        precachePlugins_plugins.push(...newPlugins);
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/addPlugins.js
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
    precachePlugins.add(newPlugins);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/createCacheKey.js
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
        throw new WorkboxError["a" /* WorkboxError */]('add-to-cache-list-unexpected-type', { entry });
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
        throw new WorkboxError["a" /* WorkboxError */]('add-to-cache-list-unexpected-type', { entry });
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

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printCleanupDetails.js
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
    logger["a" /* logger */].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        logger["a" /* logger */].log(url);
    }
    logger["a" /* logger */].groupEnd();
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
        logger["a" /* logger */].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        logger["a" /* logger */].groupEnd();
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printInstallDetails.js
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
    logger["a" /* logger */].groupCollapsed(groupTitle);
    for (const url of urls) {
        logger["a" /* logger */].log(url);
    }
    logger["a" /* logger */].groupEnd();
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
        logger["a" /* logger */].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        logger["a" /* logger */].groupEnd();
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheController.js
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
class PrecacheController_PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = cacheNames["a" /* cacheNames */].getPrecacheName(cacheName);
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
        if (false) {}
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = createCacheKey(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new WorkboxError["a" /* WorkboxError */]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new WorkboxError["a" /* WorkboxError */]('add-to-cache-list-conflicting-integrities', {
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
                if (true) {
                    // Use console directly to display this warning without bloating
                    // bundle sizes by pulling in all of the logger codebase in prod.
                    console.warn(warningMessage);
                }
                else {}
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
        if (false) {}
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
        if (false) {}
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
        if (false) {}
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
        let response = await fetchWrapper["a" /* fetchWrapper */].fetch({
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
            throw new WorkboxError["a" /* WorkboxError */]('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await copyResponse(response);
        }
        await cacheWrapper["a" /* cacheWrapper */].put({
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
                throw new WorkboxError["a" /* WorkboxError */]('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (false) {}
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
            throw new WorkboxError["a" /* WorkboxError */]('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let getOrCreatePrecacheController_precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!getOrCreatePrecacheController_precacheController) {
        getOrCreatePrecacheController_precacheController = new PrecacheController_PrecacheController();
    }
    return getOrCreatePrecacheController_precacheController;
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
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

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/generateURLVariations.js
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
    const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
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

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getCacheKeyForURL.js
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
    const precacheController = getOrCreatePrecacheController();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of generateURLVariations(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/addFetchListener.js
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
    const cacheName = cacheNames["a" /* cacheNames */].getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = getCacheKeyForURL(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (false) {}
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
            if (false) {}
            return fetch(precachedURL);
        });
        if (false) {}
        event.respondWith(responsePromise);
    }));
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/addRoute.js
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
        addFetchListener(options);
        listenerAdded = true;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js
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


// CONCATENATED MODULE: ./node_modules/workbox-precaching/cleanupOutdatedCaches.js
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
        const cacheName = cacheNames["a" /* cacheNames */].getPrecacheName();
        event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
            if (false) {}
        }));
    }));
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandler.js
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
    const precacheController = getOrCreatePrecacheController();
    return precacheController.createHandler(fallbackToNetwork);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandlerBoundToURL.js
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
    const precacheController = getOrCreatePrecacheController();
    return precacheController.createHandlerBoundToURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/getCacheKeyForURL.js
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
function getCacheKeyForURL_getCacheKeyForURL(url) {
    const precacheController = getOrCreatePrecacheController();
    return precacheController.getCacheKeyForURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/matchPrecache.js
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
    const precacheController = getOrCreatePrecacheController();
    return precacheController.matchPrecache(request);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = getOrCreatePrecacheController();
    const plugins = precachePlugins.get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (false) {}
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = getOrCreatePrecacheController();
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
    const precacheController = getOrCreatePrecacheController();
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


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precacheAndRoute.js
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
    precache(entries);
    addRoute(options);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.js
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


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.mjs

// EXTERNAL MODULE: ./node_modules/@layer0/prefetch/sw/index.js
var sw = __webpack_require__("Aigc");

// CONCATENATED MODULE: ./sw/service-worker.js



skipWaiting();
clientsClaim();
precacheAndRoute([{'revision':'2ecc87f23c0396a5dfe7c575644f54c1','url':'_next/static/chunks/80e70402.9c6f52b6e8bd8b389191.js'},{'revision':'e69db14f7d65f59a937b5b3dbfb0cd3e','url':'_next/static/chunks/main-12034fac6342e1d34954.js'},{'revision':'6b9ac82b2764fe931828a2d3265750d1','url':'_next/static/chunks/pages/_app-564f0d0fcb0b6097f850.js'},{'revision':'d714ab0842b1372cc84b3ba77738de59','url':'_next/static/chunks/pages/_error-4abbc485619c77dcd89b.js'},{'revision':'1b38a74913b0bc1bb77055ade5b2e237','url':'_next/static/chunks/pages/account-74ba03314093e759c277.js'},{'revision':'9883363a6fe4ebc5669cd6d8686d0363','url':'_next/static/chunks/pages/appShell-db621992461c36f5223d.js'},{'revision':'3bb60dc44547e982af1af13a48b47195','url':'_next/static/chunks/pages/cart-08d4499449e9729d072c.js'},{'revision':'e7e81de76470e2cc4be1be585dbdb3a8','url':'_next/static/chunks/pages/checkout-72377978c7508785a20c.js'},{'revision':'053a2e7e025f40362e2f32e582463bbf','url':'_next/static/chunks/pages/index-c88f7188989e6c1f031e.js'},{'revision':'119e9660ae979780d6d1431e4d963d30','url':'_next/static/chunks/pages/p/%5BproductId%5D-9a871620452b26fc91e4.js'},{'revision':'45ac2cec7537bc3982d619ae975fe38b','url':'_next/static/chunks/pages/s/%5B...categorySlug%5D-c96b9af7aef065c6c5a9.js'},{'revision':'5bf16e62fadc14a02c3e6b75aea96c05','url':'_next/static/chunks/pages/search-4fc744c1589272659187.js'},{'revision':'beef7e19b8b9100e358d30fdf9fd78ff','url':'_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js'},{'revision':'8c19f623e8389f11131a054a7e17ff95','url':'_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js'},{'revision':'60d8ee16ace3b43c8c4ba818bb9c875c','url':'_next/static/css/5019cb1bac26f9ea4cf0.css'},{'revision':'5cb7edfceb233100075dc9a1e12e8da3','url':'_next/static/media/roboto-latin-100.a45108d3b34af91f9113d827a183296d.woff'},{'revision':'7370c3679472e9560965ff48a4399d0b','url':'_next/static/media/roboto-latin-100.c2aa4ab115bf9c6057cb59709d0e152b.woff2'},{'revision':'f9e8e590b4e0f1ff83469bb2a55b8488','url':'_next/static/media/roboto-latin-100italic.451d4e559d6f57cdf6a1c54a3e32e11d.woff'},{'revision':'f8b1df51ba843179fa1cc9b53d58127a','url':'_next/static/media/roboto-latin-100italic.7f839a8652da29745ce4260846c3f88e.woff2'},{'revision':'ef7c6637c68f269a882e73bcb57a7f6a','url':'_next/static/media/roboto-latin-300.37a7069dc30fc663c8781220e5669d25.woff2'},{'revision':'b00849e00f4c2331cddd8ffb44a6720b','url':'_next/static/media/roboto-latin-300.865f928cbabcc9f8f2b50fb47a20bc63.woff'},{'revision':'4df32891a5f2f98a363314f595482e08','url':'_next/static/media/roboto-latin-300italic.bd5b7a13f2c52b531a2a787bf6eb4a13.woff'},{'revision':'14286f3ba79c6627433572dfa925202e','url':'_next/static/media/roboto-latin-300italic.c64e7e354c88e613c77cab8ac2ebc3ae.woff2'},{'revision':'479970ffb74f2117317f9d24d9e317fe','url':'_next/static/media/roboto-latin-400.176f8f5bd5f02b3abfcf894955d7e919.woff2'},{'revision':'60fa3c0614b8fb2f394fa29944c21540','url':'_next/static/media/roboto-latin-400.49ae34d4cc6b98c00c69ab4c41de3e0c.woff'},{'revision':'fe65b8335ee19dd944289f9ed3178c78','url':'_next/static/media/roboto-latin-400italic.b1d9d9904bfca8802a631c45590b9efa.woff'},{'revision':'51521a2a8da71e50d871ac6fd2187e87','url':'_next/static/media/roboto-latin-400italic.d022bc70dc1bf7b3425da9cdaa9841b6.woff2'},{'revision':'87284894879f5b1c229cb49c8ff6decc','url':'_next/static/media/roboto-latin-500.cea99d3e3e13a3a599a015c29f1046d0.woff'},{'revision':'020c97dc8e0463259c2f9df929bb0c69','url':'_next/static/media/roboto-latin-500.f5b74d7ffcdf85b9dd60130fa0b2c087.woff2'},{'revision':'db4a2a231f52e497c0191e8966b0ee58','url':'_next/static/media/roboto-latin-500italic.0d8bb5b3ee5f5dac9e446d48480d28a9.woff2'},{'revision':'288ad9c6e8b43cf02443a1f499bdf67e','url':'_next/static/media/roboto-latin-500italic.18d00f739ff1e1c52db1a1c0d9e98129.woff'},{'revision':'adcde98f1d584de52060ad7b16373da3','url':'_next/static/media/roboto-latin-700.2267169ee7270a22a963b2b2bfb7ab0c.woff'},{'revision':'2735a3a69b509faf3577afd25bdf552e','url':'_next/static/media/roboto-latin-700.c18ee39fb002ad58b6dc595476f88fef.woff2'},{'revision':'da0e717829e033a69dec97f1e155ae42','url':'_next/static/media/roboto-latin-700italic.7d8125ff7f707231fd89d9d7109deadf.woff2'},{'revision':'81f57861ed4ac74741f5671e1dff2fd9','url':'_next/static/media/roboto-latin-700italic.9360531f9bb817f917f01a6d394515f3.woff'},{'revision':'9b3766ef4a402ad3fdeef7501a456512','url':'_next/static/media/roboto-latin-900.870c8c1486f76054301a22c35403eae1.woff2'},{'revision':'bb1e4dc6333675d11ada2e857e7f95d7','url':'_next/static/media/roboto-latin-900.bac8362e7a6ea60b6983ecf09a411a5e.woff'},{'revision':'28f9151055c950874d2c6803a39b425b','url':'_next/static/media/roboto-latin-900italic.c20d916c1a1b094c1cec7de61e470633.woff'},{'revision':'ebf6d1640ccddb99fb49f73c052c55a8','url':'_next/static/media/roboto-latin-900italic.cb5ad999740e9d8a8bd1b03b379293a9.woff2'},{'revision':'7c7c3b063e70975f2d74533cf9b8b8dd','url':'_next/static/tscCuprpJuiJb_gjEH561/_buildManifest.js'},{'revision':'abee47769bf307639ace4945f9cfd4ff','url':'_next/static/tscCuprpJuiJb_gjEH561/_ssgManifest.js'}] || []);
new sw["Prefetcher"]().route();

/***/ }),

/***/ "8oxB":
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

/***/ "8xMa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Groups_1 = __importDefault(__webpack_require__("xo27"));
const cookie_1 = __webpack_require__("qivM");
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

/***/ "Aigc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prefetcher_1 = __webpack_require__("yePr");
exports.Prefetcher = Prefetcher_1.default;
var prefetch_1 = __webpack_require__("Z7jD");
exports.prefetch = prefetch_1.prefetch;


/***/ }),

/***/ "Bxln":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "CF1o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MZ8O");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pEJi");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Bxln");
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
    if (false) {}
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__[/* quotaErrorCallbacks */ "a"]) {
        await callback();
        if (false) {}
    }
    if (false) {}
}



/***/ }),

/***/ "Eovg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PrefetchPlugin_1 = __webpack_require__("IoaG");
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

/***/ "Fzdq":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CacheExpiration", function() { return /* reexport */ CacheExpiration_CacheExpiration; });
__webpack_require__.d(__webpack_exports__, "ExpirationPlugin", function() { return /* reexport */ ExpirationPlugin_ExpirationPlugin; });

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__("/7yy");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
var dontWaitFor = __webpack_require__("aaXm");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__("MZ8O");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__("YNOD");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/DBWrapper.js
var DBWrapper = __webpack_require__("6kfY");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/deleteDatabase.js
var deleteDatabase = __webpack_require__("fkRk");

// EXTERNAL MODULE: ./node_modules/workbox-expiration/_version.js
var _version = __webpack_require__("2KUI");

// CONCATENATED MODULE: ./node_modules/workbox-expiration/models/CacheTimestampsModel.js
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
class CacheTimestampsModel_CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._cacheName = cacheName;
        this._db = new DBWrapper["a" /* DBWrapper */](DB_NAME, 1, {
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
        Object(deleteDatabase["a" /* deleteDatabase */])(this._cacheName);
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


// CONCATENATED MODULE: ./node_modules/workbox-expiration/CacheExpiration.js
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
class CacheExpiration_CacheExpiration {
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
        if (false) {}
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheName = cacheName;
        this._timestampModel = new CacheTimestampsModel_CacheTimestampsModel(cacheName);
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
        if (false) {}
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            Object(dontWaitFor["a" /* dontWaitFor */])(this.expireEntries());
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
        if (false) {}
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
            if (false) {}
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


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheNames.js
var cacheNames = __webpack_require__("b8MC");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__("ID1N");

// EXTERNAL MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
var registerQuotaErrorCallback = __webpack_require__("L0Y3");

// CONCATENATED MODULE: ./node_modules/workbox-expiration/ExpirationPlugin.js
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
class ExpirationPlugin_ExpirationPlugin {
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
            Object(dontWaitFor["a" /* dontWaitFor */])(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (false) {}
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
            if (false) {}
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (false) {}
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            Object(registerQuotaErrorCallback["a" /* registerQuotaErrorCallback */])(() => this.deleteCacheAndMetadata());
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
        if (cacheName === cacheNames["a" /* cacheNames */].getRuntimeName()) {
            throw new WorkboxError["a" /* WorkboxError */]('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new CacheExpiration_CacheExpiration(cacheName, this._config);
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


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.mjs


/***/ }),

/***/ "H9ZL":
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

/***/ "ID1N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "IoaG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("M0lQ");
const constants_2 = __webpack_require__("4E/K");
const log_1 = __importDefault(__webpack_require__("6Nk2"));
const prefetch_1 = __webpack_require__("Z7jD");
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

/***/ "L0Y3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerQuotaErrorCallback; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MZ8O");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/7yy");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pEJi");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bxln");
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
    if (false) {}
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__[/* quotaErrorCallbacks */ "a"].add(callback);
    if (false) {}
}



/***/ }),

/***/ "M0lQ":
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

/***/ "MZ8O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( true ? null : undefined);



/***/ }),

/***/ "Q/qr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("M0lQ");
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

/***/ "SAq0":
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

/***/ "TU2h":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NavigationRoute", function() { return /* reexport */ NavigationRoute_NavigationRoute; });
__webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return /* reexport */ RegExpRoute_RegExpRoute; });
__webpack_require__.d(__webpack_exports__, "registerRoute", function() { return /* reexport */ registerRoute; });
__webpack_require__.d(__webpack_exports__, "Route", function() { return /* reexport */ Route_Route; });
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* reexport */ Router_Router; });
__webpack_require__.d(__webpack_exports__, "setCatchHandler", function() { return /* reexport */ setCatchHandler; });
__webpack_require__.d(__webpack_exports__, "setDefaultHandler", function() { return /* reexport */ setDefaultHandler; });

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__("/7yy");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__("MZ8O");

// EXTERNAL MODULE: ./node_modules/workbox-routing/_version.js
var _version = __webpack_require__("5tLK");

// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/constants.js
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

// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/normalizeHandler.js
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
        if (false) {}
        return handler;
    }
    else {
        if (false) {}
        return { handle: handler };
    }
};

// CONCATENATED MODULE: ./node_modules/workbox-routing/Route.js
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
class Route_Route {
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
    constructor(match, handler, method = defaultMethod) {
        if (false) {}
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = normalizeHandler(handler);
        this.match = match;
        this.method = method;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/NavigationRoute.js
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
class NavigationRoute_NavigationRoute extends Route_Route {
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
        if (false) {}
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
                if (false) {}
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (false) {}
            return true;
        }
        if (false) {}
        return false;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/RegExpRoute.js
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
class RegExpRoute_RegExpRoute extends Route_Route {
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
        if (false) {}
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
                if (false) {}
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


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__("YNOD");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__("ID1N");

// CONCATENATED MODULE: ./node_modules/workbox-routing/Router.js
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
class Router_Router {
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
                if (false) {}
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
        if (false) {}
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (false) {}
            return;
        }
        const { params, route } = this.findMatchingRoute({ url, request, event });
        let handler = route && route.handler;
        const debugMessages = [];
        if (false) {}
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        if (!handler && this._defaultHandler) {
            if (false) {}
            handler = this._defaultHandler;
        }
        if (!handler) {
            if (false) {}
            return;
        }
        if (false) {}
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
                if (false) {}
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
        if (false) {}
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
        this._defaultHandler = normalizeHandler(handler);
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = normalizeHandler(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (false) {}
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
            throw new WorkboxError["a" /* WorkboxError */]('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new WorkboxError["a" /* WorkboxError */]('unregister-route-route-not-registered');
        }
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let getOrCreateDefaultRouter_defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!getOrCreateDefaultRouter_defaultRouter) {
        getOrCreateDefaultRouter_defaultRouter = new Router_Router();
        // The helpers that use the default Router assume these listeners exist.
        getOrCreateDefaultRouter_defaultRouter.addFetchListener();
        getOrCreateDefaultRouter_defaultRouter.addCacheListener();
    }
    return getOrCreateDefaultRouter_defaultRouter;
};

// CONCATENATED MODULE: ./node_modules/workbox-routing/registerRoute.js
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
        if (false) {}
        const matchCallback = ({ url }) => {
            if (false) {}
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new Route_Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new RegExpRoute_RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new Route_Route(capture, handler, method);
    }
    else if (capture instanceof Route_Route) {
        route = capture;
    }
    else {
        throw new WorkboxError["a" /* WorkboxError */]('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.registerRoute(route);
    return route;
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/setCatchHandler.js
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
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.setCatchHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/setDefaultHandler.js
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
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.setDefaultHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.mjs


/***/ }),

/***/ "Uog+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CustomCacheKey_1 = __webpack_require__("8xMa");
const constants_1 = __webpack_require__("M0lQ");
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

/***/ "YNOD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ WorkboxError_WorkboxError; });

// EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
var _version = __webpack_require__("Bxln");

// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messages.js
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

// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messageGenerator.js
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
    const message = messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( true) ?
    fallback : undefined;

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/WorkboxError.js
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
class WorkboxError_WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = messageGenerator(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "Z7jD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageBrowser_1 = __importDefault(__webpack_require__("SAq0"));
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

/***/ "aaXm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dontWaitFor; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "aqiC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:strategies:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "b8MC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "fkRk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteDatabase; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "gmtC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YNOD");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MZ8O");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/7yy");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ID1N");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/ykI");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Bxln");
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
            if (false) {}
            return possiblePreloadResponse;
        }
    }
    if (false) {}
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__[/* pluginUtils */ "a"].filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
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
                if (false) {}
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__[/* WorkboxError */ "a"]('plugin-error-request-will-fetch', {
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
        if (false) {}
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (false) {}
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (false) {}
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

/***/ "jLCR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:cacheable-response:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "lgnU":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CacheFirst", function() { return /* reexport */ CacheFirst_CacheFirst; });
__webpack_require__.d(__webpack_exports__, "CacheOnly", function() { return /* reexport */ CacheOnly_CacheOnly; });
__webpack_require__.d(__webpack_exports__, "NetworkFirst", function() { return /* reexport */ NetworkFirst_NetworkFirst; });
__webpack_require__.d(__webpack_exports__, "NetworkOnly", function() { return /* reexport */ NetworkOnly_NetworkOnly; });
__webpack_require__.d(__webpack_exports__, "StaleWhileRevalidate", function() { return /* reexport */ StaleWhileRevalidate_StaleWhileRevalidate; });

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__("/7yy");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheNames.js
var cacheNames = __webpack_require__("b8MC");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheWrapper.js
var cacheWrapper = __webpack_require__("+JpW");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/fetchWrapper.js
var fetchWrapper = __webpack_require__("gmtC");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__("ID1N");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__("MZ8O");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__("YNOD");

// EXTERNAL MODULE: ./node_modules/workbox-strategies/_version.js
var _version = __webpack_require__("aqiC");

// CONCATENATED MODULE: ./node_modules/workbox-strategies/utils/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${Object(getFriendlyURL["a" /* getFriendlyURL */])(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            logger["a" /* logger */].groupCollapsed(`View the final response here.`);
            logger["a" /* logger */].log(response || '[No response returned]');
            logger["a" /* logger */].groupEnd();
        }
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheFirst.js
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
class CacheFirst_CacheFirst {
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
        this._cacheName = cacheNames["a" /* cacheNames */].getRuntimeName(options.cacheName);
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
        if (false) {}
        let response = await cacheWrapper["a" /* cacheWrapper */].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (!response) {
            if (false) {}
            try {
                response = await this._getFromNetwork(request, event);
            }
            catch (err) {
                error = err;
            }
            if (false) {}
        }
        else {
            if (false) {}
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError["a" /* WorkboxError */]('no-response', { url: request.url, error });
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
        const response = await fetchWrapper["a" /* fetchWrapper */].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        // Keep the service worker while we put the request to the cache
        const responseClone = response.clone();
        const cachePutPromise = cacheWrapper["a" /* cacheWrapper */].put({
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
                if (false) {}
            }
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheOnly.js
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
class CacheOnly_CacheOnly {
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
        this._cacheName = cacheNames["a" /* cacheNames */].getRuntimeName(options.cacheName);
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
        if (false) {}
        const response = await cacheWrapper["a" /* cacheWrapper */].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        if (false) {}
        if (!response) {
            throw new WorkboxError["a" /* WorkboxError */]('no-response', { url: request.url });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
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

// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkFirst.js
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
class NetworkFirst_NetworkFirst {
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
        this._cacheName = cacheNames["a" /* cacheNames */].getRuntimeName(options.cacheName);
        if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [cacheOkAndOpaquePlugin];
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (false) {}
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
        if (false) {}
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
        if (false) {}
        if (!response) {
            throw new WorkboxError["a" /* WorkboxError */]('no-response', { url: request.url });
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
                if (false) {}
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
            response = await fetchWrapper["a" /* fetchWrapper */].fetch({
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
        if (false) {}
        if (error || !response) {
            response = await this._respondFromCache({ request, event });
            if (false) {}
        }
        else {
            // Keep the service worker alive while we put the request in the cache
            const responseClone = response.clone();
            const cachePut = cacheWrapper["a" /* cacheWrapper */].put({
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
                    if (false) {}
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
        return cacheWrapper["a" /* cacheWrapper */].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkOnly.js
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
class NetworkOnly_NetworkOnly {
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
        if (false) {}
        let error;
        let response;
        try {
            response = await fetchWrapper["a" /* fetchWrapper */].fetch({
                request,
                event,
                fetchOptions: this._fetchOptions,
                plugins: this._plugins,
            });
        }
        catch (err) {
            error = err;
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError["a" /* WorkboxError */]('no-response', { url: request.url, error });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/StaleWhileRevalidate.js
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
class StaleWhileRevalidate_StaleWhileRevalidate {
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
        this._cacheName = cacheNames["a" /* cacheNames */].getRuntimeName(options.cacheName);
        this._plugins = options.plugins || [];
        if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ?
                options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
        }
        else {
            // No plugins passed in, use the default plugin.
            this._plugins = [cacheOkAndOpaquePlugin];
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
        if (false) {}
        const fetchAndCachePromise = this._getFromNetwork({ request, event });
        let response = await cacheWrapper["a" /* cacheWrapper */].match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins,
        });
        let error;
        if (response) {
            if (false) {}
            if (event) {
                try {
                    event.waitUntil(fetchAndCachePromise);
                }
                catch (error) {
                    if (false) {}
                }
            }
        }
        else {
            if (false) {}
            try {
                response = await fetchAndCachePromise;
            }
            catch (err) {
                error = err;
            }
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError["a" /* WorkboxError */]('no-response', { url: request.url, error });
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
        const response = await fetchWrapper["a" /* fetchWrapper */].fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins,
        });
        const cachePutPromise = cacheWrapper["a" /* cacheWrapper */].put({
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
                if (false) {}
            }
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.js
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


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.mjs


/***/ }),

/***/ "mClz":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CacheableResponse", function() { return /* reexport */ CacheableResponse; });
__webpack_require__.d(__webpack_exports__, "CacheableResponsePlugin", function() { return /* reexport */ CacheableResponsePlugin_CacheableResponsePlugin; });

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__("/7yy");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__("YNOD");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__("ID1N");

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__("MZ8O");

// EXTERNAL MODULE: ./node_modules/workbox-cacheable-response/_version.js
var _version = __webpack_require__("jLCR");

// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/CacheableResponse.js
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
        if (false) {}
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
        if (false) {}
        let cacheable = true;
        if (this._statuses) {
            cacheable = this._statuses.includes(response.status);
        }
        if (this._headers && cacheable) {
            cacheable = Object.keys(this._headers).some((headerName) => {
                return response.headers.get(headerName) === this._headers[headerName];
            });
        }
        if (false) {}
        return cacheable;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js
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
class CacheableResponsePlugin_CacheableResponsePlugin {
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
        this._cacheableResponse = new CacheableResponse(config);
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-cacheable-response
 */


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/index.mjs


/***/ }),

/***/ "pEJi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bxln");
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

/***/ "qivM":
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

/***/ "xo27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GroupConfig_1 = __importDefault(__webpack_require__("H9ZL"));
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

/***/ "xwD5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "yePr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workbox_routing_1 = __webpack_require__("TU2h");
const workbox_strategies_1 = __webpack_require__("lgnU");
const workbox_expiration_1 = __webpack_require__("Fzdq");
const workbox_cacheable_response_1 = __webpack_require__("mClz");
const constants_1 = __webpack_require__("4E/K");
const log_1 = __importDefault(__webpack_require__("6Nk2"));
const PrefetchPlugin_1 = __importDefault(__webpack_require__("IoaG"));
const DevtoolsPlugin_1 = __importDefault(__webpack_require__("Eovg"));
const messageBrowser_1 = __importDefault(__webpack_require__("SAq0"));
const CustomCacheKeyPlugin_1 = __importDefault(__webpack_require__("Uog+"));
const ChangeMethodPlugin_1 = __importDefault(__webpack_require__("Q/qr"));
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
 *  precacheAndRoute(self.__WB_MANIFEST || [])
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


/***/ })

/******/ });