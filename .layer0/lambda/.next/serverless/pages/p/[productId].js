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
/******/ 	return __webpack_require__(__webpack_require__.s = "xikN");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/0p4":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "1MVt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Stb7");
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dl/7");

 // Create a theme instance.

const theme = react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0___default()({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {}
});
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("nKUr");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/theme.js
var theme = __webpack_require__("1MVt");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/AmpAppBar.js
var AmpAppBar = __webpack_require__("eJzH");
var AmpAppBar_default = /*#__PURE__*/__webpack_require__.n(AmpAppBar);

// EXTERNAL MODULE: ./node_modules/react-storefront/CartButton.js
var CartButton = __webpack_require__("TTgD");
var CartButton_default = /*#__PURE__*/__webpack_require__.n(CartButton);

// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchForm.js
var SearchForm = __webpack_require__("TLos");
var SearchForm_default = /*#__PURE__*/__webpack_require__.n(SearchForm);

// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchField.js
var SearchField = __webpack_require__("JSuu");
var SearchField_default = /*#__PURE__*/__webpack_require__.n(SearchField);

// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchSuggestions.js
var SearchSuggestions = __webpack_require__("PiqC");
var SearchSuggestions_default = /*#__PURE__*/__webpack_require__.n(SearchSuggestions);

// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchProvider.js
var SearchProvider = __webpack_require__("Ai92");
var SearchProvider_default = /*#__PURE__*/__webpack_require__.n(SearchProvider);

// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchPopover.js
var SearchPopover = __webpack_require__("9hQS");
var SearchPopover_default = /*#__PURE__*/__webpack_require__.n(SearchPopover);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles_makeStyles = __webpack_require__("RD7I");

// EXTERNAL MODULE: ./node_modules/react-storefront/LazyHydrate.js
var LazyHydrate = __webpack_require__("L8cT");
var LazyHydrate_default = /*#__PURE__*/__webpack_require__.n(LazyHydrate);

// CONCATENATED MODULE: ./components/search/SearchDesktop.js










const useStyles = Object(makeStyles_makeStyles["a" /* default */])(theme => ({
  root: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      display: 'block'
    }
  }
}));

function SearchDesktop() {
  const inputRef = Object(react["useRef"])(null);
  const activeRef = Object(react["useRef"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react["useState"])('');
  const {
    0: popoverOpen,
    1: setPopoverOpen
  } = Object(react["useState"])(false);
  const classes = useStyles();
  Object(react["useEffect"])(() => {
    if (!activeRef.current) {
      activeRef.current = true;
    }
  }, [popoverOpen]);
  return /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
      id: "search-desktop",
      on: "touch",
      children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(SearchForm_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(SearchField_default.a, {
          ref: inputRef,
          onChange: value => setQuery(value),
          value: query,
          onFocus: () => setPopoverOpen(true),
          submitButtonVariant: "none",
          showClearButton: false
        }), /*#__PURE__*/Object(jsx_runtime["jsx"])(SearchProvider_default.a, {
          query: query,
          active: activeRef.current,
          children: /*#__PURE__*/Object(jsx_runtime["jsx"])(SearchPopover_default.a, {
            open: popoverOpen,
            setQuery: setQuery,
            anchor: inputRef,
            onClose: () => setPopoverOpen(false),
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(SearchSuggestions_default.a, {})
          })
        })]
      })
    })
  });
}

/* harmony default export */ var search_SearchDesktop = (/*#__PURE__*/Object(react["memo"])(SearchDesktop));
// EXTERNAL MODULE: ./node_modules/react-storefront/search/SearchHeader.js
var SearchHeader = __webpack_require__("DqN7");
var SearchHeader_default = /*#__PURE__*/__webpack_require__.n(SearchHeader);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/search/AmpSearchField.js
var AmpSearchField = __webpack_require__("8z2V");
var AmpSearchField_default = /*#__PURE__*/__webpack_require__.n(AmpSearchField);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/search/AmpSearchDrawer.js
var AmpSearchDrawer = __webpack_require__("k6AV");
var AmpSearchDrawer_default = /*#__PURE__*/__webpack_require__.n(AmpSearchDrawer);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/search/AmpSearchButton.js
var AmpSearchButton = __webpack_require__("zhRk");
var AmpSearchButton_default = /*#__PURE__*/__webpack_require__.n(AmpSearchButton);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/search/AmpSearchSuggestions.js
var AmpSearchSuggestions = __webpack_require__("a6+o");
var AmpSearchSuggestions_default = /*#__PURE__*/__webpack_require__.n(AmpSearchSuggestions);

// CONCATENATED MODULE: ./components/search/SearchMobile.js













const SearchMobile_useStyles = Object(makeStyles_makeStyles["a" /* default */])(theme => ({
  button: {
    display: 'none'
  },
  [theme.breakpoints.down('xs')]: {
    button: {
      display: 'block'
    }
  }
}));

function SearchMobile() {
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = Object(react["useState"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react["useState"])('');
  const {
    0: hydrated,
    1: setHydrated
  } = Object(react["useState"])(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  const classes = SearchMobile_useStyles();
  const hydrate = Object(react["useCallback"])(() => {
    setHydrated(true);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(AmpSearchButton_default.a, {
      className: classes.button,
      onClick: toggleDrawer,
      onTouchStart: hydrate
    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
      id: "search-mobile",
      hydrated: hydrated,
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpSearchDrawer_default.a, {
        open: drawerOpen,
        onClose: closeDrawer,
        children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(SearchForm_default.a, {
          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(SearchHeader_default.a, {
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpSearchField_default.a, {
              onChange: value => setQuery(value),
              value: query
            })
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(SearchProvider_default.a, {
            query: query,
            active: drawerOpen,
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpSearchSuggestions_default.a, {})
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var search_SearchMobile = (/*#__PURE__*/Object(react["memo"])(SearchMobile));
// EXTERNAL MODULE: ./node_modules/react-storefront/Spacer.js
var Spacer = __webpack_require__("JPf+");
var Spacer_default = /*#__PURE__*/__webpack_require__.n(Spacer);

// EXTERNAL MODULE: ./node_modules/next/amp.js
var next_amp = __webpack_require__("JjeS");

// CONCATENATED MODULE: ./components/search/Search.js









function Search() {
  const amp = Object(next_amp["useAmp"])();
  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(search_SearchMobile, {}), /*#__PURE__*/Object(jsx_runtime["jsx"])(Spacer_default.a, {}), !amp && /*#__PURE__*/Object(jsx_runtime["jsx"])(search_SearchDesktop, {})]
  });
}

/* harmony default export */ var search_Search = (Search);
// CONCATENATED MODULE: ./components/assets/react-storefront-logo.svg
var _path, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var react_storefront_logo_SvgReactStorefrontLogo = function SvgReactStorefrontLogo(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", _extends({
    viewBox: "95 0 673.4 238.9"
  }, props), _path || (_path = /*#__PURE__*/react_default.a.createElement("path", {
    d: "M254.3 108.5l-4.9 28.1H223L237.2 56h38.1c11.6 0 19.8 1.4 24.8 4.1 5 2.8 7.4 7.2 7.4 13.2 0 1.6-.2 3.5-.6 5.6-.9 4.9-2.8 9-5.7 12.5-2.9 3.5-6.7 5.9-11.4 7.2 3.9 1.5 6.6 3.1 8.3 4.7 1.6 1.6 2.5 4.5 2.5 8.6 0 2.2-.3 4.9-.9 8.1-.2 1-.3 2-.4 2.8-.8 4.6-1.2 7.5-1.2 8.6 0 1.8.7 2.7 2 2.7l-.4 2.5h-26.8v-.8c-.1-.6-.1-1.1-.1-1.5 0-3 .4-6.9 1.2-11.9.5-2.6.8-4.7.8-6.3 0-2.8-.9-4.8-2.7-6-1.8-1.2-5-1.7-9.7-1.7h-8.1zm3.1-17.7h10.4c4.3 0 7.5-.6 9.8-1.8 2.3-1.2 3.6-3.1 4.1-5.8 0-.2 0-.5.1-.9s.1-.7.1-.8c0-2.2-.8-3.9-2.5-5s-4-1.7-6.9-1.7h-12.3l-2.8 16zM311.7 136.6L326 56h65.7l-3.4 18.8H349l-2 11.5h33.2l-3.2 18.8h-33.2l-2.2 12.6h40.9l-3.4 18.8h-67.4zM385.3 136.6L428.4 56h26.9l14.7 80.6h-26.3l-1.2-10.6h-26.3l-4.9 10.6h-26zm52-56.3L424 109.2h16.7l-3.4-28.9zM538.1 86.8V85.1c0-3.7-1-6.5-3.1-8.5s-5.1-3-9-3c-4.7 0-8.7 2-12 6-3.3 4-5.7 9.8-7 17.5-.5 3.2-.8 6-.8 8.4 0 4.2 1 7.5 2.9 9.9 1.9 2.4 5.3 3.6 10 3.6 4 0 7.4-1.2 10-3.7 2.6-2.5 4.6-5.8 5.9-10h25.4c-3 10.4-8.5 18.5-16.4 24.5-7.9 5.9-17.3 8.9-27.9 8.9-11.5 0-20.4-2.9-26.7-8.7-6.3-5.8-9.5-13.8-9.5-24 0-3.1.3-6.4.9-9.9 1.1-6.4 3.2-12.2 6.1-17.5 2.9-5.2 6.6-9.7 10.9-13.4 4.3-3.7 9.1-6.6 14.3-8.5 5.2-1.9 10.6-2.9 16.2-2.9 11.5 0 20.2 2.6 26.1 7.7 5.9 5.1 8.8 12.4 8.8 21.8 0 .3 0 .9-.1 1.7v1.8h-25zM575.9 56h73.9l-3.7 21.2h-23.7l-10.5 59.4h-26.4L596 77.2h-23.7l3.6-21.2z"
  })), _g || (_g = /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M244.6 167.6c0-1.2-.4-2-1.3-2.6-.8-.5-1.8-.7-3.1-.7-2.6 0-4.1.7-4.3 2.2v.2l-.1.2c0 .9.5 1.5 1.6 2s2.8 1 5.1 1.6c2 .5 3.6 1 4.8 1.4 1.2.4 2.5 1 3.7 1.7 1.2.7 2.2 1.6 2.9 2.8.7 1.1 1.1 2.5 1.1 4.1 0 .6-.1 1.3-.2 2-.7 4.3-2.9 7.5-6.5 9.7-3.6 2.2-8.1 3.3-13.4 3.3-2.3 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.4-4.6-2.4-1.3-1-2.2-2.2-2.9-3.5-.7-1.3-1-2.8-1-4.4 0-.5 0-.9.1-1.5h11.9c0 1.3.5 2.3 1.5 3 .9.6 2 .9 3.4.9 1.6 0 2.9-.2 3.9-.7 1-.5 1.6-1.2 1.7-2 0-.1 0-.1.1-.2v-.2c0-.9-.5-1.5-1.6-2s-2.7-1-5-1.6c-2-.5-3.6-.9-4.8-1.3-1.3-.4-2.5-1-3.7-1.7-1.2-.7-2.2-1.7-2.9-2.8-.7-1.2-1.1-2.6-1.1-4.3 0-.7.1-1.4.2-2.2.7-3.9 2.7-6.9 6.1-9 3.4-2.1 7.5-3.1 12.4-3.1 2.5 0 4.6.3 6.4.9 1.8.6 3.3 1.4 4.4 2.5 1.1 1.1 1.9 2.3 2.5 3.8.5 1.5.8 3.1.8 4.9h-12zM262.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9H261l1.7-9.9zM328.5 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8 1.4-2.4 3.1-4.5 5.2-6.2 2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.8-.1 5.3.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3.9 1.3 2.4 2 4.5 2 2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.3-.1-2.5.2-3.5.8zM354 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.4 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8H354zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5z"
  }), /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M430.8 194.4l6.7-37.8h29.4l-1.6 8.8h-17l-1.2 6.9h13.6l-1.5 8.8h-13.6l-2.4 13.3h-12.4zM479.9 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.3 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8h-3.7zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5zM539 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8s3.1-4.5 5.2-6.2c2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.9-.1 5.4.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3s2.4 2 4.5 2c2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.2-.1-2.4.2-3.5.8zM578.4 177.3l1.1-8.6 2.1-12h11.9l-6.7 37.8h-11.6l-9.9-20.6-1 8.6-2.1 12h-11.9l6.7-37.8h11.6l9.8 20.6zM598.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9h-11.1l1.6-9.9z"
  })), /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("path", {
    fill: "#0C80C3",
    d: "M382.5 193.7h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "#5FB146",
    d: "M420.5 171h-33.1l-1.8 8.6h33.1l1.8-8.6z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "#F69120",
    d: "M388.5 165.5h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  })))));
};

/* harmony default export */ var react_storefront_logo = (react_storefront_logo_SvgReactStorefrontLogo);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__("Ji2X");

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/menu/AmpMenu.js
var AmpMenu = __webpack_require__("Pxnf");
var AmpMenu_default = /*#__PURE__*/__webpack_require__.n(AmpMenu);

// EXTERNAL MODULE: ./node_modules/react-storefront/menu/MenuButton.js
var MenuButton = __webpack_require__("NsjM");
var MenuButton_default = /*#__PURE__*/__webpack_require__.n(MenuButton);

// EXTERNAL MODULE: ./node_modules/react-storefront/link/Link.js
var Link = __webpack_require__("2Ff8");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);

// EXTERNAL MODULE: ./node_modules/react-storefront/session/SessionContext.js
var SessionContext = __webpack_require__("4Mu4");
var SessionContext_default = /*#__PURE__*/__webpack_require__.n(SessionContext);

// EXTERNAL MODULE: ./node_modules/react-storefront/hooks/useCartTotal.js
var useCartTotal = __webpack_require__("T4TN");
var useCartTotal_default = /*#__PURE__*/__webpack_require__.n(useCartTotal);

// CONCATENATED MODULE: ./components/Header.js
















const Header_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  title: {},
  logo: {
    position: 'absolute',
    left: 10,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      top: 6,
      marginLeft: -60
    }
  },
  toolbar: {
    padding: 0,
    margin: 0
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: 5
    }
  },
  accountLink: {
    display: 'block',
    color: '#000',
    textTransform: 'uppercase',
    textDecoration: 'none'
  }
}));
function Header({
  menu
}) {
  const classes = Header_useStyles();
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react["useState"])(false);
  const {
    0: hydrateMenu,
    1: setHydrateMenu
  } = Object(react["useState"])(false);
  const handleMenuClose = Object(react["useCallback"])(() => setMenuOpen(false), []);
  const handleMenuButtonClick = Object(react["useCallback"])(() => {
    setMenuOpen(menuOpen => !menuOpen);
    setHydrateMenu(true);
  }, []);
  const {
    session
  } = Object(react["useContext"])(SessionContext_default.a);
  const cartTotal = useCartTotal_default()();
  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(AmpAppBar_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(Container["a" /* default */], {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime["jsx"])("a", {
            "aria-label": "logo",
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(react_storefront_logo, {
              style: {
                width: 120,
                height: 48
              },
              className: classes.logo
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime["jsx"])(search_Search, {}), /*#__PURE__*/Object(jsx_runtime["jsx"])(CartButton_default.a, {
          quantity: cartTotal
        }), /*#__PURE__*/Object(jsx_runtime["jsx"])(MenuButton_default.a, {
          open: menuOpen,
          onClick: handleMenuButtonClick
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
      id: "menu",
      hydrated: hydrateMenu,
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpMenu_default.a, {
        anchor: "right",
        root: menu,
        open: menuOpen,
        onClose: handleMenuClose // renderItem={item => <div>{item.text} (custom)</div>}
        // renderItemContent={item => <div>{item.text} (custom content)</div>}
        // renderBack={item => <div>{item.text} back</div>}
        ,
        renderHeader: item => {
          if (!item.root) return null;
          return /*#__PURE__*/Object(jsx_runtime["jsx"])(Link_default.a, {
            as: "/account",
            href: "/account",
            onClick: () => setMenuOpen(false),
            className: classes.accountLink,
            children: "My Account"
          });
        } // renderFooter={item => <div>{item.text} footer</div>}

      })
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__("5CWz");

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/index.js
var styles = __webpack_require__("7rLD");

// EXTERNAL MODULE: ./node_modules/react-storefront/PWA.js
var PWA = __webpack_require__("V5D+");
var PWA_default = /*#__PURE__*/__webpack_require__.n(PWA);

// EXTERNAL MODULE: ./node_modules/react-storefront/nav/NavTab.js
var NavTab = __webpack_require__("KMZS");
var NavTab_default = /*#__PURE__*/__webpack_require__.n(NavTab);

// EXTERNAL MODULE: ./node_modules/react-storefront/nav/NavTabs.js
var NavTabs = __webpack_require__("GNsT");
var NavTabs_default = /*#__PURE__*/__webpack_require__.n(NavTabs);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// CONCATENATED MODULE: ./components/NavBar.js








const NavBar_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  link: {
    display: 'block',
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0
    }
  }
}));

function NavBar({
  tabs
}) {
  const classes = NavBar_useStyles();
  return /*#__PURE__*/Object(jsx_runtime["jsx"])(Paper["a" /* default */], {
    square: true,
    elevation: 2,
    children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Container["a" /* default */], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(NavTabs_default.a, {
        children: tabs && tabs.map(tab => /*#__PURE__*/Object(jsx_runtime["jsx"])(NavTab_default.a, {
          href: tab.href,
          as: tab.as,
          label: tab.text,
          prefetch: "visible",
          children: tab.items && /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
            style: {
              padding: 20
            },
            children: tab.items.map(item => /*#__PURE__*/Object(jsx_runtime["jsx"])(Link_default.a, {
              href: item.href,
              as: item.as,
              className: classes.link,
              children: item.text
            }, item.as))
          })
        }, tab.as))
      })
    })
  });
}

NavBar.defaultProps = {
  tabs: []
};
/* harmony default export */ var components_NavBar = (/*#__PURE__*/Object(react["memo"])(NavBar));
// CONCATENATED MODULE: ./components/reportError.js
function reportError({
  error
}) {
  console.log('[reportError]', error);
}
// EXTERNAL MODULE: ./node_modules/react-storefront/hooks/useJssStyles.js
var useJssStyles = __webpack_require__("LhAc");
var useJssStyles_default = /*#__PURE__*/__webpack_require__.n(useJssStyles);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/installAmpOverrides.js
var installAmpOverrides = __webpack_require__("rTmq");
var installAmpOverrides_default = /*#__PURE__*/__webpack_require__.n(installAmpOverrides);

// EXTERNAL MODULE: ./node_modules/react-storefront-analytics/index.js
var react_storefront_analytics = __webpack_require__("zq2c");

// CONCATENATED MODULE: ./components/Analytics.js





const Analytics = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime["jsxs"])(react_storefront_analytics["AnalyticsProvider"], {
  children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(react_storefront_analytics["GoogleTagManager"], {
    apiKey: "test",
    children: {
      pageview: ({
        eventContext,
        eventParams
      }) => ({
        event: 'pageview',
        path: eventParams,
        title: eventContext.title
      }),
      productClicked: ({
        eventParams
      }) => ({
        event: 'productClick',
        ecommerce: {
          click: {
            products: [{
              id: eventParams.product.id,
              position: eventParams.position
            }]
          }
        }
      })
    }
  }), /*#__PURE__*/Object(jsx_runtime["jsx"])(react_storefront_analytics["GoogleAnalytics"], {
    trackingId: "UA-153223971-1",
    children: {
      pageview: ({
        eventContext
      }) => ({
        hitType: 'pageview',
        page: eventContext.pathname,
        title: eventContext.title
      }),
      productClicked: ({
        eventParams
      }) => ({
        hitType: 'event',
        eventCategory: 'interaction',
        eventAction: 'click',
        eventLabel: eventParams.product.id.toString(),
        eventValue: 1
      })
    }
  }), /*#__PURE__*/Object(jsx_runtime["jsx"])(react_storefront_analytics["FirebasePerformanceMonitoring"]
  /**
   * Update this object to match your Firebase config.  You can get this from the Firebase console at
   * Settings => General => Your Apps => Firebase SDK Snippet => Config.
   */
  , {
    config: {
      apiKey: 'AIzaSyC9en46xfUljbXqGap7cAuigmIHHWioUb8',
      authDomain: 'react-storefront-starter-app.firebaseapp.com',
      databaseURL: 'https://react-storefront-starter-app.firebaseio.com',
      projectId: 'react-storefront-starter-app',
      storageBucket: 'react-storefront-starter-app.appspot.com',
      messagingSenderId: '938415572468',
      appId: '1:938415572468:web:700ccf93b195e78e7be5a1',
      measurementId: 'G-CJ3BERR0QY'
    },
    children: children
  })]
});

/* harmony default export */ var components_Analytics = (Analytics);
// EXTERNAL MODULE: ./node_modules/react-storefront/session/SessionProvider.js
var SessionProvider = __webpack_require__("lRCV");
var SessionProvider_default = /*#__PURE__*/__webpack_require__.n(SessionProvider);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/AmpProvider.js
var AmpProvider = __webpack_require__("pPA8");
var AmpProvider_default = /*#__PURE__*/__webpack_require__.n(AmpProvider);

// EXTERNAL MODULE: ./node_modules/react-storefront/hooks/useAppStore.js
var useAppStore = __webpack_require__("gQr4");
var useAppStore_default = /*#__PURE__*/__webpack_require__.n(useAppStore);

// EXTERNAL MODULE: ./node_modules/typeface-roboto/index.css
var typeface_roboto = __webpack_require__("1LhQ");

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__("20a2");
var router_default = /*#__PURE__*/__webpack_require__.n(router);

// EXTERNAL MODULE: ./node_modules/@layer0/rum/index.js
var rum = __webpack_require__("roUz");

// CONCATENATED MODULE: ./components/rum.js


if (false) {}
// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















installAmpOverrides_default()();

const _app_styles = theme => ({
  main: {
    paddingTop: 3
  }
});

const _app_useStyles = Object(makeStyles["a" /* default */])(_app_styles);
function MyApp({
  Component,
  pageProps
}) {
  useJssStyles_default()();
  const classes = _app_useStyles();
  const [appData] = useAppStore_default()(pageProps || {}); // Setting global clientDidNavigate which is used by RSF LazyHydrate

  Object(react["useEffect"])(() => {
    router_default.a.events.on('routeChangeStart', url => {
      window.clientDidNavigate = true;
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime["jsx"])(PWA_default.a, {
    errorReporter: reportError,
    children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpProvider_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(SessionProvider_default.a, {
        url: "/api/session",
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(styles["ThemeProvider"], {
          theme: theme["a" /* default */],
          children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(components_Analytics, {
            children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(CssBaseline["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime["jsx"])(Header, {
              menu: appData && appData.menu
            }), /*#__PURE__*/Object(jsx_runtime["jsx"])(components_NavBar, {
              tabs: appData && appData.tabs
            }), /*#__PURE__*/Object(jsx_runtime["jsx"])("main", {
              className: classes.main,
              children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Component, _objectSpread({}, pageProps))
            })]
          })
        })
      })
    })
  });
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/***/ }),

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nKUr");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7rLD");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1MVt");
/* harmony import */ var react_storefront_amp_renderAmp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6rVH");
/* harmony import */ var react_storefront_amp_renderAmp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_renderAmp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_utils_minifyStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HEia");
/* harmony import */ var react_storefront_utils_minifyStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_utils_minifyStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("L8cT");
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "theme-color",
          content: _components_theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].palette.primary.main
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
          rel: "preconnect",
          href: "https://opt.moovweb.net",
          crossOrigin: "true"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_7__["LazyStyles"], {})]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {
          mode: "defer"
        })]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  const isAmp = ctx.req.url.includes('amp=1'); // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.

  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;
  ctx.res.setHeader('service-worker-allowed', '/');

  ctx.renderPage = async () => {
    const document = originalRenderPage({
      enhanceApp: App => props => sheets.collect( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(App, _objectSpread({}, props)))
    });
    return isAmp ? await react_storefront_amp_renderAmp__WEBPACK_IMPORTED_MODULE_5___default()(document, sheets, ctx.req.url) : document;
  };

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);

  function getStyles() {
    if (isAmp) {
      const index = initialProps.head.findIndex(item => item.key === 'amp-custom');
      const css = initialProps.head[index].props['amp-custom']; // Remove unneeded style tag

      initialProps.head.splice(index, 1);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [initialProps.styles, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {
          dangerouslySetInnerHTML: {
            __html: css
          }
        })]
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [initialProps.styles, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("style", {
          dangerouslySetInnerHTML: {
            __html: react_storefront_utils_minifyStyles__WEBPACK_IMPORTED_MODULE_6___default()(sheets.toString())
          }
        })]
      });
    }
  }

  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: getStyles()
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "67Bq":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "7WL4":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "9RVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nKUr");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Ff8");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/sRG");
/* harmony import */ var react_storefront_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ofer");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("R/WZ");
/* harmony import */ var react_storefront_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CmuH");
/* harmony import */ var react_storefront_Rating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Rating__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_ForwardThumbnail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YYuU");
/* harmony import */ var react_storefront_ForwardThumbnail__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_ForwardThumbnail__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_amp_AmpImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6wVE");
/* harmony import */ var react_storefront_amp_AmpImage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_AmpImage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_storefront_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zq2c");
/* harmony import */ var react_storefront_analytics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4k7N");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storefront_amp_option_AmpProductOptionSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("qLru");
/* harmony import */ var react_storefront_amp_option_AmpProductOptionSelector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_option_AmpProductOptionSelector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_storefront_amp_bind_DataBindingProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ET/Q");
/* harmony import */ var react_storefront_amp_bind_DataBindingProvider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_bind_DataBindingProvider__WEBPACK_IMPORTED_MODULE_12__);














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0`
  },
  thumbnail: {
    marginBottom: theme.spacing(1)
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  price: {
    marginTop: '5px'
  },
  reviews: {
    marginTop: '5px'
  },
  reviewCount: {
    marginLeft: '2px'
  },
  info: {
    margin: '0'
  }
}));

function ProductItem({
  product,
  index,
  classes,
  className,
  colorSelector
}) {
  classes = useStyles({
    classes
  });
  const {
    0: store,
    1: updateStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(product);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_amp_bind_DataBindingProvider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: `p${product.id}`,
    store: store,
    updateStore: updateStore,
    root: null,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      id: `item-${index}`,
      className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(className, classes.root),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_storefront_Box__WEBPACK_IMPORTED_MODULE_3__["Vbox"], {
        alignItems: "stretch",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_ForwardThumbnail__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_9__["Track"], {
            event: {
              onClick: 'productClicked'
            },
            product: product,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              as: product.url,
              href: "/p/[productId]",
              className: classes.link,
              prefetch: "visible",
              pageData: {
                product,
                color: store.color
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_amp_AmpImage__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  className: classes.thumbnail,
                  bind: {
                    src: ['color.media.thumbnail.src', 'thumbnail.src'],
                    alt: ['color.media.thumbnail.alt', 'thumbnail.alt']
                  },
                  optimize: {
                    width: 200
                  },
                  lazy: index >= 4 && index < 20 ? 'ssr' : false,
                  aspectRatio: 1
                })
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: classes.info,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            variant: "subtitle1",
            className: classes.name,
            children: product.name
          }), colorSelector && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_amp_option_AmpProductOptionSelector__WEBPACK_IMPORTED_MODULE_11___default.a, {
            bind: {
              value: 'color',
              options: 'colors'
            },
            optionProps: {
              size: 'small',
              showLabel: false
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_storefront_Rating__WEBPACK_IMPORTED_MODULE_6___default.a, {
            product: product,
            className: classes.rating
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            className: classes.price,
            children: product.price
          })]
        })]
      })
    })
  });
}

ProductItem.defaultProps = {
  colorSelector: true
};
/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(ProductItem));

/***/ }),

/***/ "FMKJ":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "GXzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* binding */ config; });

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("nKUr");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__("4k7N");
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__("g4pe");
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ./node_modules/react-storefront/hooks/useLazyState.js
var useLazyState = __webpack_require__("f+pc");
var useLazyState_default = /*#__PURE__*/__webpack_require__.n(useLazyState);

// EXTERNAL MODULE: ./node_modules/react-storefront/Breadcrumbs.js
var Breadcrumbs = __webpack_require__("J/SM");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs);

// EXTERNAL MODULE: ./node_modules/react-storefront/CmsSlot.js
var CmsSlot = __webpack_require__("DZVj");
var CmsSlot_default = /*#__PURE__*/__webpack_require__.n(CmsSlot);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/carousel/AmpMediaCarousel.js
var AmpMediaCarousel = __webpack_require__("uNK/");
var AmpMediaCarousel_default = /*#__PURE__*/__webpack_require__.n(AmpMediaCarousel);

// EXTERNAL MODULE: ./node_modules/react-storefront/PWAContext.js
var PWAContext = __webpack_require__("q2de");
var PWAContext_default = /*#__PURE__*/__webpack_require__.n(PWAContext);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__("Ji2X");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__("1NhI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__("SpDg");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/react-storefront/Row.js
var Row = __webpack_require__("u1Gv");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);

// EXTERNAL MODULE: ./node_modules/react-storefront/Box.js
var Box = __webpack_require__("/sRG");

// EXTERNAL MODULE: ./node_modules/react-storefront/Label.js
var Label = __webpack_require__("82e0");
var Label_default = /*#__PURE__*/__webpack_require__.n(Label);

// EXTERNAL MODULE: ./node_modules/react-storefront/Rating.js
var Rating = __webpack_require__("CmuH");
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__("mwIZ");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__("E+oP");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/HiddenInput.js
var HiddenInput = __webpack_require__("JruL");
var HiddenInput_default = /*#__PURE__*/__webpack_require__.n(HiddenInput);

// EXTERNAL MODULE: ./node_modules/react-storefront/session/SessionContext.js
var SessionContext = __webpack_require__("4Mu4");
var SessionContext_default = /*#__PURE__*/__webpack_require__.n(SessionContext);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__("kfFl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__("+JwS");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__("EQI2");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__("yv+Y");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__("PsDL");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__("ZPUd");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/react-storefront/Image.js
var Image = __webpack_require__("ri+k");
var Image_default = /*#__PURE__*/__webpack_require__.n(Image);

// EXTERNAL MODULE: ./node_modules/react-storefront/link/Link.js
var Link = __webpack_require__("2Ff8");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);

// CONCATENATED MODULE: ./components/product/AddToCartConfirmation.js















const useStyles = Object(makeStyles["a" /* default */])(theme => ({
  root: {},
  image: {
    height: 150,
    width: 150,
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100
    }
  },
  price: {
    fontWeight: theme.typography.fontWeightBold
  },
  name: {
    fontWeight: theme.typography.fontWeightBold
  },
  info: {
    flex: 1,
    marginLeft: theme.spacing(2)
  },
  viewCart: {
    width: '100%'
  },
  actions: {
    flexDirection: 'column',
    margin: theme.spacing(1, 2, 0, 2)
  },
  continue: {
    margin: theme.spacing(2, 0, 1, 0)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  }
}));
function AddToCartConfirmation({
  open,
  setOpen,
  price,
  color,
  size,
  quantity,
  product
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(Dialog["a" /* default */], {
    open: open,
    onClose: () => setOpen(false),
    fullWidth: true,
    maxWidth: "xs",
    children: [/*#__PURE__*/Object(jsx_runtime["jsxs"])(DialogTitle["a" /* default */], {
      disableTypography: true,
      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
        component: "h2",
        variant: "h6",
        children: "Item added to cart"
      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(IconButton["a" /* default */], {
        "aria-label": "close",
        className: classes.closeButton,
        onClick: () => setOpen(false),
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Close_default.a, {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(DialogContent["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
        align: "flex-start",
        children: [/*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
          className: classes.image,
          children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Image_default.a, {
            fill: true,
            src: get_default()(color, 'media.thumbnail.src') || get_default()(product, 'thumbnail.src'),
            alt: get_default()(color, 'media.thumbnail.alt') || get_default()(product, 'thumbnail.alt')
          })
        }), /*#__PURE__*/Object(jsx_runtime["jsxs"])("div", {
          className: classes.info,
          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
            className: classes.name,
            children: product.name
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
            children: color.text ? `Color: ${color.text}` : ''
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
            children: size.text ? `Size: ${size.text}` : ''
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
            children: quantity ? `Qty: ${quantity}` : ''
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
            className: classes.price,
            children: price
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(DialogActions["a" /* default */], {
      disableSpacing: true,
      className: classes.actions,
      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Link_default.a, {
        href: "/cart",
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */], {
          className: classes.viewCart,
          variant: "contained",
          size: "large",
          color: "primary",
          children: "View Cart"
        })
      }), /*#__PURE__*/Object(jsx_runtime["jsx"])("a", {
        className: classes.continue,
        onClick: () => setOpen(false),
        children: "Continue Shopping"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/makeStyles.js
var styles_makeStyles = __webpack_require__("e45s");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(styles_makeStyles);

// EXTERNAL MODULE: ./node_modules/react-storefront/fetch.js
var fetch = __webpack_require__("E0sJ");
var fetch_default = /*#__PURE__*/__webpack_require__.n(fetch);

// EXTERNAL MODULE: ./components/product/ProductItem.js
var ProductItem = __webpack_require__("9RVD");

// EXTERNAL MODULE: ./node_modules/react-storefront/LoadMask.js
var LoadMask = __webpack_require__("mh7t");
var LoadMask_default = /*#__PURE__*/__webpack_require__.n(LoadMask);

// CONCATENATED MODULE: ./components/product/SuggestedProducts.js



/**
 * This component is an example of how we can fetch user-specific data for a product.
 * In general, it's a best practice to separate cacheable elements that are shown to all
 * users from areas of the page which contained information that should only be displayed
 * to a single user, such as recently viewed products and recommendations.  This separation
 * allows us to deliver most of the content from the CDN's cache and gives us the fastest
 * possible page load time.
 */






const styles = theme => ({
  products: {
    minHeight: 250,
    position: 'relative',
    margin: theme.spacing(0, -2),
    overflowX: 'auto',
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    }
  },
  wrap: {
    padding: theme.spacing(0, 0, 0, 2),
    display: 'flex',
    flexDirection: 'row',
    width: 'max-content'
  },
  product: {
    margin: theme.spacing(0, 2, 0, 0),
    minWidth: 150
  }
});
const SuggestedProducts_useStyles = makeStyles_default()(styles, {
  name: 'RSFSuggestedProducts'
});
function SuggestedProducts({
  product
}) {
  const classes = SuggestedProducts_useStyles();
  const {
    0: suggestedProducts,
    1: setSuggestedProducts
  } = Object(react["useState"])(null); // Fetch suggested products when the product page is mounted

  Object(react["useEffect"])(() => {
    fetch_default()(`/api/p/${encodeURIComponent(product.id)}/suggestions`).then(res => res.json()).then(result => setSuggestedProducts(result));
  }, []);
  return /*#__PURE__*/Object(jsx_runtime["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
      variant: "h6",
      component: "h3",
      children: "Suggested Products"
    }), /*#__PURE__*/Object(jsx_runtime["jsxs"])("div", {
      className: classes.products,
      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(LoadMask_default.a, {
        show: !suggestedProducts
      }), /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
        className: classes.wrap,
        children: suggestedProducts && suggestedProducts.map((product, i) => /*#__PURE__*/Object(jsx_runtime["jsx"])(ProductItem["a" /* default */], {
          product: product,
          index: i,
          colorSelector: false,
          className: classes.product
        }, i))
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/react-storefront/Lazy.js
var Lazy = __webpack_require__("Wga8");
var Lazy_default = /*#__PURE__*/__webpack_require__.n(Lazy);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/AmpTabPanel.js
var AmpTabPanel = __webpack_require__("XT6E");
var AmpTabPanel_default = /*#__PURE__*/__webpack_require__.n(AmpTabPanel);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/Text.js
var Text = __webpack_require__("62fY");
var Text_default = /*#__PURE__*/__webpack_require__.n(Text);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/bind/DataBindingProvider.js
var DataBindingProvider = __webpack_require__("ET/Q");
var DataBindingProvider_default = /*#__PURE__*/__webpack_require__.n(DataBindingProvider);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/AmpQuantitySelector.js
var AmpQuantitySelector = __webpack_require__("yKRD");
var AmpQuantitySelector_default = /*#__PURE__*/__webpack_require__.n(AmpQuantitySelector);

// EXTERNAL MODULE: ./node_modules/react-storefront-amp/option/AmpProductOptionSelector.js
var AmpProductOptionSelector = __webpack_require__("qLru");
var AmpProductOptionSelector_default = /*#__PURE__*/__webpack_require__.n(AmpProductOptionSelector);

// EXTERNAL MODULE: ./node_modules/react-storefront-analytics/index.js
var react_storefront_analytics = __webpack_require__("zq2c");

// EXTERNAL MODULE: ./node_modules/next/amp.js
var amp = __webpack_require__("JjeS");

// EXTERNAL MODULE: ./node_modules/react-storefront/props/fetchFromAPI.js
var fetchFromAPI = __webpack_require__("AjD0");
var fetchFromAPI_default = /*#__PURE__*/__webpack_require__.n(fetchFromAPI);

// EXTERNAL MODULE: ./node_modules/react-storefront/props/createLazyProps.js
var createLazyProps = __webpack_require__("Jsjj");
var createLazyProps_default = /*#__PURE__*/__webpack_require__.n(createLazyProps);

// EXTERNAL MODULE: ./node_modules/react-storefront/api/getAPIURL.js
var getAPIURL = __webpack_require__("TTdx");
var getAPIURL_default = /*#__PURE__*/__webpack_require__.n(getAPIURL);

// EXTERNAL MODULE: ./node_modules/react-storefront/LazyHydrate.js
var LazyHydrate = __webpack_require__("L8cT");
var LazyHydrate_default = /*#__PURE__*/__webpack_require__.n(LazyHydrate);

// CONCATENATED MODULE: ./pages/p/[productId].js









































const _productId_styles = theme => ({
  carousel: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -2),
      width: '100vw'
    }
  },
  lightboxCarousel: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100%'
    }
  },
  confirmation: {
    padding: '2px 0'
  },
  dockedSnack: {
    [theme.breakpoints.down('xs')]: {
      left: '0',
      bottom: '0',
      right: '0'
    }
  },
  docked: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      padding: `${theme.spacing(2)}px`,
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 10,
      borderRadius: '0'
    }
  },
  noShadow: {
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none'
    }
  }
});

const _productId_useStyles = Object(makeStyles["a" /* default */])(_productId_styles);
const Product = /*#__PURE__*/react_default.a.memo(lazyProps => {
  const theme = Object(useTheme["a" /* default */])();
  const {
    0: confirmationOpen,
    1: setConfirmationOpen
  } = Object(react["useState"])(false);
  const {
    0: addToCartInProgress,
    1: setAddToCartInProgress
  } = Object(react["useState"])(false);
  const {
    0: errorBoxMessage,
    1: setErrorBoxMessage
  } = Object(react["useState"])(null);
  const [state, updateState] = useLazyState_default()(lazyProps, {
    pageData: {
      quantity: 1,
      carousel: {
        index: 0
      }
    }
  });
  const classes = _productId_useStyles();
  const product = get_default()(state, 'pageData.product') || {};
  const color = get_default()(state, 'pageData.color') || {};
  const size = get_default()(state, 'pageData.size') || {};
  const hasColors = !isEmpty_default()(product.colors);
  const hasSizes = !isEmpty_default()(product.sizes);
  const quantity = get_default()(state, 'pageData.quantity');
  const {
    actions
  } = Object(react["useContext"])(SessionContext_default.a);
  const {
    loading
  } = state; // This is provided when <ForwardThumbnail> is wrapped around product links

  const {
    thumbnail
  } = Object(react["useContext"])(PWAContext_default.a); // Adds an item to the cart

  const handleSubmit = async event => {
    event.preventDefault(); // prevent the page location from changing

    setAddToCartInProgress(true); // disable the add to cart button until the request is finished

    setErrorBoxMessage(null);

    try {
      if (!color.id && product.hasColors) {
        setErrorBoxMessage('Please select color');
        return;
      }

      if (!size.id && product.hasSizes) {
        setErrorBoxMessage('Please select size');
        return;
      } // send the data to the server


      try {
        await actions.addToCart({
          product,
          quantity,
          color: color.id,
          size: size.id
        });
      } catch (error) {
        setErrorBoxMessage(error.message);
      } // open the confirmation dialog


      setConfirmationOpen(true);
    } finally {
      // re-enable the add to cart button
      setAddToCartInProgress(false);
    }
  };

  const header = /*#__PURE__*/Object(jsx_runtime["jsxs"])(Row_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
      variant: "h6",
      component: "h1",
      gutterBottom: true,
      children: product ? /*#__PURE__*/Object(jsx_runtime["jsx"])(Text_default.a, {
        bind: "product.name"
      }) : /*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
        style: {
          height: '1em'
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
        style: {
          marginRight: theme.spacing(2)
        },
        children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Text_default.a, {
          bind: "product.priceText"
        })
      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Rating_default.a, {
        value: product.rating,
        reviewCount: 10
      })]
    })]
  });

  return /*#__PURE__*/Object(jsx_runtime["jsxs"])(DataBindingProvider_default.a // If data is not already available in the model during SSR,
  // you can instruct the DataBindingProvider to fetch new state
  // when the `remote` URL changes.
  //
  // If no data will need to be fetched and is available in the page state
  // this property is not needed and should be removed
  , {
    remote: getAPIURL_default()('/p/{product.id}?color={color.id}&size={size.id}'),
    store: state,
    updateStore: updateState,
    root: "pageData",
    children: [Object(amp["useAmp"])() && /*#__PURE__*/Object(jsx_runtime["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime["jsx"])("script", {
        async: true,
        "custom-element": "amp-form",
        src: "https://cdn.ampproject.org/v0/amp-form-0.1.js"
      })
    }), !loading && /*#__PURE__*/Object(jsx_runtime["jsx"])(react_storefront_analytics["TrackPageView"], {}), /*#__PURE__*/Object(jsx_runtime["jsx"])(Breadcrumbs_default.a, {
      items: !loading && state.pageData.breadcrumbs
    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Container["a" /* default */], {
      maxWidth: "lg",
      style: {
        paddingTop: theme.spacing(2)
      },
      children: /*#__PURE__*/Object(jsx_runtime["jsxs"])("form", {
        encType: "application/x-www-form-urlencoded",
        onSubmit: handleSubmit,
        method: "post",
        "action-xhr": "/api/cart/add",
        children: [/*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */], {
          container: true,
          spacing: 4,
          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(HiddenInput_default.a, {
            name: "id",
            bind: "product.id"
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(HiddenInput_default.a, {
            name: "sku",
            bind: "product.sku"
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(HiddenInput_default.a, {
            name: "isConfigurableProduct",
            bind: "product.isConfigurableProduct"
          }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */], {
            item: true,
            xs: 12,
            sm: 6,
            md: 5,
            children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Hidden["a" /* default */], {
              implementation: "css",
              smUp: true,
              children: header
            }), /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
              id: "carousel",
              on: "touch",
              children: /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpMediaCarousel_default.a, {
                className: classes.carousel,
                lightboxClassName: classes.lightboxCarousel,
                thumbnail: thumbnail.current,
                height: "100%",
                bind: {
                  media: ['color.media', 'product.media']
                }
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */], {
            item: true,
            xs: 12,
            sm: 6,
            md: 7,
            children: /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
              id: "options",
              children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */], {
                container: true,
                spacing: 4,
                children: [/*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */], {
                  item: true,
                  xs: 12,
                  children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Hidden["a" /* default */], {
                    implementation: "css",
                    xsDown: true,
                    children: /*#__PURE__*/Object(jsx_runtime["jsx"])("div", {
                      style: {
                        paddingBottom: theme.spacing(1)
                      },
                      children: header
                    })
                  }), product ? /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
                    children: [errorBoxMessage && /*#__PURE__*/Object(jsx_runtime["jsx"])(Box["Hbox"], {
                      style: {
                        marginBottom: 10
                      },
                      children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */], {
                        color: "error",
                        children: errorBoxMessage
                      })
                    }), hasColors && /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
                      children: [/*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
                        style: {
                          marginBottom: 10
                        },
                        children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Label_default.a, {
                          children: "COLOR: "
                        }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Typography["a" /* default */], {
                          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(HiddenInput_default.a, {
                            name: "color",
                            bind: "color.id"
                          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Text_default.a, {
                            bind: "color.text"
                          })]
                        })]
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpProductOptionSelector_default.a, {
                        optionProps: {
                          showLabel: false
                        },
                        strikeThroughDisabled: true,
                        bind: {
                          value: 'color',
                          options: 'product.colors'
                        }
                      })]
                    })]
                  }) : /*#__PURE__*/Object(jsx_runtime["jsxs"])("div", {
                    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                      style: {
                        height: 14,
                        marginBottom: theme.spacing(2)
                      }
                    }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
                      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      })]
                    })]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */], {
                  item: true,
                  xs: 12,
                  children: product ? /*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"], {
                    children: hasSizes && /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
                      children: [/*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
                        style: {
                          marginBottom: 10
                        },
                        children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Label_default.a, {
                          children: "SIZE: "
                        }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Typography["a" /* default */], {
                          children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(HiddenInput_default.a, {
                            name: "size",
                            bind: "size.id"
                          }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Text_default.a, {
                            bind: "size.text"
                          })]
                        })]
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpProductOptionSelector_default.a, {
                        strikeThroughDisabled: true,
                        bind: {
                          value: 'size',
                          options: 'product.sizes'
                        }
                      })]
                    })
                  }) : /*#__PURE__*/Object(jsx_runtime["jsxs"])("div", {
                    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                      style: {
                        height: 14,
                        marginBottom: theme.spacing(2)
                      }
                    }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
                      children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Skeleton["a" /* default */], {
                        style: {
                          height: 48,
                          width: 48,
                          marginRight: 10
                        }
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(Box["Hbox"], {
                    children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Label_default.a, {
                      children: "QTY:"
                    }), /*#__PURE__*/Object(jsx_runtime["jsx"])(AmpQuantitySelector_default.a, {
                      bind: "quantity"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */], {
                  item: true,
                  xs: 12,
                  children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */], {
                    type: "submit",
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    "data-th": "add-to-cart",
                    className: clsx_default()(classes.docked, classes.noShadow),
                    disabled: addToCartInProgress,
                    children: "Add to Cart"
                  }, "button"), /*#__PURE__*/Object(jsx_runtime["jsx"])(AddToCartConfirmation, {
                    open: confirmationOpen,
                    setOpen: setConfirmationOpen,
                    product: product,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.priceText
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime["jsx"])(LazyHydrate_default.a, {
          id: "info",
          on: "fui",
          children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/Object(jsx_runtime["jsxs"])(AmpTabPanel_default.a, {
                children: [/*#__PURE__*/Object(jsx_runtime["jsx"])(CmsSlot_default.a, {
                  label: "Description",
                  children: product.description
                }), /*#__PURE__*/Object(jsx_runtime["jsx"])(CmsSlot_default.a, {
                  label: "Specs",
                  children: product.specs
                })]
              })
            }), !Object(amp["useAmp"])() && /*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/Object(jsx_runtime["jsx"])(Lazy_default.a, {
                style: {
                  minHeight: 285
                },
                children: /*#__PURE__*/Object(jsx_runtime["jsx"])(SuggestedProducts, {
                  product: product
                })
              })
            })]
          })
        })]
      })
    })]
  });
});
Product.getInitialProps = createLazyProps_default()(fetchFromAPI_default.a);
const config = {
  amp: 'hybrid'
};
/* harmony default export */ var _productId_ = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "ImCc":
/***/ (function(module, exports) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ "KEll":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "LZ9C":
/***/ (function(module) {

module.exports = JSON.parse("{\"polyfillFiles\":[\"static/chunks/polyfills-feb8a7604fa7fce626b2.js\"],\"devFiles\":[],\"ampDevFiles\":[],\"lowPriorityFiles\":[\"static/tscCuprpJuiJb_gjEH561/_buildManifest.js\",\"static/tscCuprpJuiJb_gjEH561/_ssgManifest.js\"],\"pages\":{\"/\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/index-c88f7188989e6c1f031e.js\"],\"/_app\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/css/5019cb1bac26f9ea4cf0.css\",\"static/chunks/pages/_app-564f0d0fcb0b6097f850.js\"],\"/_error\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/_error-4abbc485619c77dcd89b.js\"],\"/account\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/account-74ba03314093e759c277.js\"],\"/appShell\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/appShell-db621992461c36f5223d.js\"],\"/cart\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/cart-08d4499449e9729d072c.js\"],\"/checkout\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/checkout-72377978c7508785a20c.js\"],\"/p/[productId]\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/p/[productId]-9a871620452b26fc91e4.js\"],\"/s/[...categorySlug]\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/s/[...categorySlug]-c96b9af7aef065c6c5a9.js\"],\"/search\":[\"static/chunks/webpack-50bee04d1dc61f8adf5b.js\",\"static/chunks/80e70402.9c6f52b6e8bd8b389191.js\",\"static/chunks/main-12034fac6342e1d34954.js\",\"static/chunks/pages/search-4fc744c1589272659187.js\"]},\"ampFirstPages\":[]}");

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

/***/ "Qs2e":
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "Qs3B":
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "Skye":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":3,\"pages404\":true,\"basePath\":\"\",\"redirects\":[{\"source\":\"/:path+/\",\"destination\":\"/:path+\",\"internal\":true,\"statusCode\":308,\"regex\":\"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$\"}],\"headers\":[],\"dynamicRoutes\":[{\"page\":\"/api/p/[productId]\",\"regex\":\"^/api/p/([^/]+?)(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/api/p/(?<productId>[^/]+?)(?:/)?$\"},{\"page\":\"/api/p/[productId]/suggestions\",\"regex\":\"^/api/p/([^/]+?)/suggestions(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/api/p/(?<productId>[^/]+?)/suggestions(?:/)?$\"},{\"page\":\"/api/s/[...categorySlug]\",\"regex\":\"^/api/s/(.+?)(?:/)?$\",\"routeKeys\":{\"categorySlug\":\"categorySlug\"},\"namedRegex\":\"^/api/s/(?<categorySlug>.+?)(?:/)?$\"},{\"page\":\"/p/[productId]\",\"regex\":\"^/p/([^/]+?)(?:/)?$\",\"routeKeys\":{\"productId\":\"productId\"},\"namedRegex\":\"^/p/(?<productId>[^/]+?)(?:/)?$\"},{\"page\":\"/s/[...categorySlug]\",\"regex\":\"^/s/(.+?)(?:/)?$\",\"routeKeys\":{\"categorySlug\":\"categorySlug\"},\"namedRegex\":\"^/s/(?<categorySlug>.+?)(?:/)?$\"}],\"dataRoutes\":[],\"rewrites\":[]}");

/***/ }),

/***/ "UNVE":
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "WADY":
/***/ (function(module, exports) {

module.exports = require("critters");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "jle/":
/***/ (function(module, exports) {

module.exports = require("os");

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

/***/ }),

/***/ "xikN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticParams", function() { return unstable_getStaticParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticProps", function() { return unstable_getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticPaths", function() { return unstable_getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getServerProps", function() { return unstable_getServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_app", function() { return _app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReqToHTML", function() { return renderReqToHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fkL1");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Skye");
var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("Skye", 1);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LZ9C");
var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("LZ9C", 1);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("67Bq");
var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("67Bq", 1);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7ZOo");
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__);

      
      
      
      

      
      const { processEnv } = __webpack_require__("fXeI")
      processEnv([])
    
      
        const { setConfig } = __webpack_require__("mOvS")
      
      
        const runtimeConfig = {"publicRuntimeConfig":{},"serverRuntimeConfig":{"reactStorefront":{"connector":"react-storefront/mock-connector"}}}
        setConfig(runtimeConfig)
      
      

      const documentModule = __webpack_require__("5w0S")

      const appMod = __webpack_require__("1TCz")
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__("GXzl")

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__.rewrites.fallback)
      }

      const { renderReqToHTML, render } = Object(next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__["getPageHandler"])({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__("/a9y"),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/p/[productId]",
        buildId: "tscCuprpJuiJb_gjEH561",
        escapedBuildId: "tscCuprpJuiJb_gjEH561",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"cd672e897f89f0ce179ead3634a2286b",previewModeSigningKey:"b4eab7c1d7bb25cf2d49ccb7de97c0317ecbaf1928a480b2da3b40076204b759",previewModeEncryptionKey:"8f4d41607131c770e3bbd293d08208cd09c499f8beebd48b8838fc3e1208c0cf"}
      })
      
    

/***/ })

/******/ , ...require("../../webpack-runtime-commons.js").modules })