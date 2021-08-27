module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Analytics.js":
/*!*********************************!*\
  !*** ./components/Analytics.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront-analytics */ "react-storefront-analytics");
/* harmony import */ var react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\Analytics.js";



const Analytics = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__["AnalyticsProvider"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleTagManager"], {
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
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalytics"], {
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
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_analytics__WEBPACK_IMPORTED_MODULE_2__["FirebasePerformanceMonitoring"]
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
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Analytics);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_amp_AmpAppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront-amp/AmpAppBar */ "react-storefront-amp/AmpAppBar");
/* harmony import */ var react_storefront_amp_AmpAppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_AmpAppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/CartButton */ "react-storefront/CartButton");
/* harmony import */ var react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/Search */ "./components/search/Search.js");
/* harmony import */ var _components_assets_react_storefront_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/assets/react-storefront-logo.svg */ "./components/assets/react-storefront-logo.svg");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_amp_menu_AmpMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront-amp/menu/AmpMenu */ "react-storefront-amp/menu/AmpMenu");
/* harmony import */ var react_storefront_amp_menu_AmpMenu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_menu_AmpMenu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-storefront/menu/MenuButton */ "react-storefront/menu/MenuButton");
/* harmony import */ var react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-storefront/session/SessionContext */ "react-storefront/session/SessionContext");
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_storefront_hooks_useCartTotal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-storefront/hooks/useCartTotal */ "react-storefront/hooks/useCartTotal");
/* harmony import */ var react_storefront_hooks_useCartTotal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_storefront_hooks_useCartTotal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-storefront/LazyHydrate */ "react-storefront/LazyHydrate");
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\Header.js";













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
  const classes = useStyles();
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hydrateMenu,
    1: setHydrateMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleMenuClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => setMenuOpen(false), []);
  const handleMenuButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setMenuOpen(menuOpen => !menuOpen);
    setHydrateMenu(true);
  }, []);
  const {
    session
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11___default.a);
  const cartTotal = react_storefront_hooks_useCartTotal__WEBPACK_IMPORTED_MODULE_12___default()();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_AmpAppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            "aria-label": "logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_assets_react_storefront_logo_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
              style: {
                width: 120,
                height: 48
              },
              className: classes.logo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
          quantity: cartTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
          open: menuOpen,
          onClick: handleMenuButtonClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_13___default.a, {
      id: "menu",
      hydrated: hydrateMenu,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_menu_AmpMenu__WEBPACK_IMPORTED_MODULE_8___default.a, {
        anchor: "right",
        root: menu,
        open: menuOpen,
        onClose: handleMenuClose // renderItem={item => <div>{item.text} (custom)</div>}
        // renderItemContent={item => <div>{item.text} (custom content)</div>}
        // renderBack={item => <div>{item.text} back</div>}
        ,
        renderHeader: item => {
          if (!item.root) return null;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            as: "/account",
            href: "/account",
            onClick: () => setMenuOpen(false),
            className: classes.accountLink,
            children: "My Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this);
        } // renderFooter={item => <div>{item.text} footer</div>}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/nav/NavTab */ "react-storefront/nav/NavTab");
/* harmony import */ var react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/nav/NavTabs */ "react-storefront/nav/NavTabs");
/* harmony import */ var react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\NavBar.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
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
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    square: true,
    elevation: 2,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: tabs && tabs.map(tab => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: tab.href,
          as: tab.as,
          label: tab.text,
          prefetch: "visible",
          children: tab.items && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              padding: 20
            },
            children: tab.items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: item.href,
              as: item.as,
              className: classes.link,
              children: item.text
            }, item.as, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 23
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 19
          }, this)
        }, tab.as, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

NavBar.defaultProps = {
  tabs: []
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(NavBar));

/***/ }),

/***/ "./components/assets/react-storefront-logo.svg":
/*!*****************************************************!*\
  !*** ./components/assets/react-storefront-logo.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgReactStorefrontLogo = function SvgReactStorefrontLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "95 0 673.4 238.9"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M254.3 108.5l-4.9 28.1H223L237.2 56h38.1c11.6 0 19.8 1.4 24.8 4.1 5 2.8 7.4 7.2 7.4 13.2 0 1.6-.2 3.5-.6 5.6-.9 4.9-2.8 9-5.7 12.5-2.9 3.5-6.7 5.9-11.4 7.2 3.9 1.5 6.6 3.1 8.3 4.7 1.6 1.6 2.5 4.5 2.5 8.6 0 2.2-.3 4.9-.9 8.1-.2 1-.3 2-.4 2.8-.8 4.6-1.2 7.5-1.2 8.6 0 1.8.7 2.7 2 2.7l-.4 2.5h-26.8v-.8c-.1-.6-.1-1.1-.1-1.5 0-3 .4-6.9 1.2-11.9.5-2.6.8-4.7.8-6.3 0-2.8-.9-4.8-2.7-6-1.8-1.2-5-1.7-9.7-1.7h-8.1zm3.1-17.7h10.4c4.3 0 7.5-.6 9.8-1.8 2.3-1.2 3.6-3.1 4.1-5.8 0-.2 0-.5.1-.9s.1-.7.1-.8c0-2.2-.8-3.9-2.5-5s-4-1.7-6.9-1.7h-12.3l-2.8 16zM311.7 136.6L326 56h65.7l-3.4 18.8H349l-2 11.5h33.2l-3.2 18.8h-33.2l-2.2 12.6h40.9l-3.4 18.8h-67.4zM385.3 136.6L428.4 56h26.9l14.7 80.6h-26.3l-1.2-10.6h-26.3l-4.9 10.6h-26zm52-56.3L424 109.2h16.7l-3.4-28.9zM538.1 86.8V85.1c0-3.7-1-6.5-3.1-8.5s-5.1-3-9-3c-4.7 0-8.7 2-12 6-3.3 4-5.7 9.8-7 17.5-.5 3.2-.8 6-.8 8.4 0 4.2 1 7.5 2.9 9.9 1.9 2.4 5.3 3.6 10 3.6 4 0 7.4-1.2 10-3.7 2.6-2.5 4.6-5.8 5.9-10h25.4c-3 10.4-8.5 18.5-16.4 24.5-7.9 5.9-17.3 8.9-27.9 8.9-11.5 0-20.4-2.9-26.7-8.7-6.3-5.8-9.5-13.8-9.5-24 0-3.1.3-6.4.9-9.9 1.1-6.4 3.2-12.2 6.1-17.5 2.9-5.2 6.6-9.7 10.9-13.4 4.3-3.7 9.1-6.6 14.3-8.5 5.2-1.9 10.6-2.9 16.2-2.9 11.5 0 20.2 2.6 26.1 7.7 5.9 5.1 8.8 12.4 8.8 21.8 0 .3 0 .9-.1 1.7v1.8h-25zM575.9 56h73.9l-3.7 21.2h-23.7l-10.5 59.4h-26.4L596 77.2h-23.7l3.6-21.2z"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M244.6 167.6c0-1.2-.4-2-1.3-2.6-.8-.5-1.8-.7-3.1-.7-2.6 0-4.1.7-4.3 2.2v.2l-.1.2c0 .9.5 1.5 1.6 2s2.8 1 5.1 1.6c2 .5 3.6 1 4.8 1.4 1.2.4 2.5 1 3.7 1.7 1.2.7 2.2 1.6 2.9 2.8.7 1.1 1.1 2.5 1.1 4.1 0 .6-.1 1.3-.2 2-.7 4.3-2.9 7.5-6.5 9.7-3.6 2.2-8.1 3.3-13.4 3.3-2.3 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.4-4.6-2.4-1.3-1-2.2-2.2-2.9-3.5-.7-1.3-1-2.8-1-4.4 0-.5 0-.9.1-1.5h11.9c0 1.3.5 2.3 1.5 3 .9.6 2 .9 3.4.9 1.6 0 2.9-.2 3.9-.7 1-.5 1.6-1.2 1.7-2 0-.1 0-.1.1-.2v-.2c0-.9-.5-1.5-1.6-2s-2.7-1-5-1.6c-2-.5-3.6-.9-4.8-1.3-1.3-.4-2.5-1-3.7-1.7-1.2-.7-2.2-1.7-2.9-2.8-.7-1.2-1.1-2.6-1.1-4.3 0-.7.1-1.4.2-2.2.7-3.9 2.7-6.9 6.1-9 3.4-2.1 7.5-3.1 12.4-3.1 2.5 0 4.6.3 6.4.9 1.8.6 3.3 1.4 4.4 2.5 1.1 1.1 1.9 2.3 2.5 3.8.5 1.5.8 3.1.8 4.9h-12zM262.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9H261l1.7-9.9zM328.5 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8 1.4-2.4 3.1-4.5 5.2-6.2 2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.8-.1 5.3.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3.9 1.3 2.4 2 4.5 2 2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.3-.1-2.5.2-3.5.8zM354 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.4 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8H354zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M430.8 194.4l6.7-37.8h29.4l-1.6 8.8h-17l-1.2 6.9h13.6l-1.5 8.8h-13.6l-2.4 13.3h-12.4zM479.9 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.3 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8h-3.7zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5zM539 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8s3.1-4.5 5.2-6.2c2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.9-.1 5.4.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3s2.4 2 4.5 2c2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.2-.1-2.4.2-3.5.8zM578.4 177.3l1.1-8.6 2.1-12h11.9l-6.7 37.8h-11.6l-9.9-20.6-1 8.6-2.1 12h-11.9l6.7-37.8h11.6l9.8 20.6zM598.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9h-11.1l1.6-9.9z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#0C80C3",
    d: "M382.5 193.7h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#5FB146",
    d: "M420.5 171h-33.1l-1.8 8.6h33.1l1.8-8.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#F69120",
    d: "M388.5 165.5h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgReactStorefrontLogo);

/***/ }),

/***/ "./components/reportError.js":
/*!***********************************!*\
  !*** ./components/reportError.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reportError; });
function reportError({
  error
}) {
  console.log('[reportError]', error);
}

/***/ }),

/***/ "./components/rum.js":
/*!***************************!*\
  !*** ./components/rum.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layer0_rum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layer0/rum */ "@layer0/rum");
/* harmony import */ var _layer0_rum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layer0_rum__WEBPACK_IMPORTED_MODULE_0__);


if (false) {}

/***/ }),

/***/ "./components/search/Search.js":
/*!*************************************!*\
  !*** ./components/search/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchDesktop */ "./components/search/SearchDesktop.js");
/* harmony import */ var _SearchMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchMobile */ "./components/search/SearchMobile.js");
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/Spacer */ "react-storefront/Spacer");
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\search\\Search.js";






function Search() {
  const amp = Object(next_amp__WEBPACK_IMPORTED_MODULE_5__["useAmp"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), !amp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchDesktop__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/search/SearchDesktop.js":
/*!********************************************!*\
  !*** ./components/search/SearchDesktop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/search/SearchForm */ "react-storefront/search/SearchForm");
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/search/SearchField */ "react-storefront/search/SearchField");
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/search/SearchSuggestions */ "react-storefront/search/SearchSuggestions");
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-storefront/search/SearchProvider */ "react-storefront/search/SearchProvider");
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/search/SearchPopover */ "react-storefront/search/SearchPopover");
/* harmony import */ var react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "@material-ui/styles/makeStyles");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront/LazyHydrate */ "react-storefront/LazyHydrate");
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\search\\SearchDesktop.js";








const useStyles = _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()(theme => ({
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
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const activeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: popoverOpen,
    1: setPopoverOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!activeRef.current) {
      activeRef.current = true;
    }
  }, [popoverOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_8___default.a, {
      id: "search-desktop",
      on: "touch",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3___default.a, {
          ref: inputRef,
          onChange: value => setQuery(value),
          value: query,
          onFocus: () => setPopoverOpen(true),
          submitButtonVariant: "none",
          showClearButton: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5___default.a, {
          query: query,
          active: activeRef.current,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6___default.a, {
            open: popoverOpen,
            setQuery: setQuery,
            anchor: inputRef,
            onClose: () => setPopoverOpen(false),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(SearchDesktop));

/***/ }),

/***/ "./components/search/SearchMobile.js":
/*!*******************************************!*\
  !*** ./components/search/SearchMobile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/search/SearchHeader */ "react-storefront/search/SearchHeader");
/* harmony import */ var react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/search/SearchForm */ "react-storefront/search/SearchForm");
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_amp_search_AmpSearchField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront-amp/search/AmpSearchField */ "react-storefront-amp/search/AmpSearchField");
/* harmony import */ var react_storefront_amp_search_AmpSearchField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_search_AmpSearchField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_storefront_amp_search_AmpSearchDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-storefront-amp/search/AmpSearchDrawer */ "react-storefront-amp/search/AmpSearchDrawer");
/* harmony import */ var react_storefront_amp_search_AmpSearchDrawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_search_AmpSearchDrawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_amp_search_AmpSearchButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront-amp/search/AmpSearchButton */ "react-storefront-amp/search/AmpSearchButton");
/* harmony import */ var react_storefront_amp_search_AmpSearchButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_search_AmpSearchButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_amp_search_AmpSearchSuggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-storefront-amp/search/AmpSearchSuggestions */ "react-storefront-amp/search/AmpSearchSuggestions");
/* harmony import */ var react_storefront_amp_search_AmpSearchSuggestions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_search_AmpSearchSuggestions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront/search/SearchProvider */ "react-storefront/search/SearchProvider");
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-storefront/LazyHydrate */ "react-storefront/LazyHydrate");
/* harmony import */ var react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "@material-ui/styles/makeStyles");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\components\\search\\SearchMobile.js";










const useStyles = _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10___default()(theme => ({
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: hydrated,
    1: setHydrated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  const classes = useStyles();
  const hydrate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setHydrated(true);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_search_AmpSearchButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.button,
      onClick: toggleDrawer,
      onTouchStart: hydrate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_LazyHydrate__WEBPACK_IMPORTED_MODULE_9___default.a, {
      id: "search-mobile",
      hydrated: hydrated,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_search_AmpSearchDrawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
        open: drawerOpen,
        onClose: closeDrawer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_search_AmpSearchField__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onChange: value => setQuery(value),
              value: query
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8___default.a, {
            query: query,
            active: drawerOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_search_AmpSearchSuggestions__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(SearchMobile));

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-storefront/theme/createTheme */ "react-storefront/theme/createTheme");
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

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
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {}
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/typeface-roboto/index.css":
/*!************************************************!*\
  !*** ./node_modules/typeface-roboto/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_PWA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/PWA */ "react-storefront/PWA");
/* harmony import */ var react_storefront_PWA__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_PWA__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_reportError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/reportError */ "./components/reportError.js");
/* harmony import */ var react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-storefront/hooks/useJssStyles */ "react-storefront/hooks/useJssStyles");
/* harmony import */ var react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_storefront_amp_installAmpOverrides__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-storefront-amp/installAmpOverrides */ "react-storefront-amp/installAmpOverrides");
/* harmony import */ var react_storefront_amp_installAmpOverrides__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_installAmpOverrides__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Analytics */ "./components/Analytics.js");
/* harmony import */ var react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-storefront/session/SessionProvider */ "react-storefront/session/SessionProvider");
/* harmony import */ var react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_storefront_amp_AmpProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-storefront-amp/AmpProvider */ "react-storefront-amp/AmpProvider");
/* harmony import */ var react_storefront_amp_AmpProvider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_storefront_amp_AmpProvider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-storefront/hooks/useAppStore */ "react-storefront/hooks/useAppStore");
/* harmony import */ var react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_rum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/rum */ "./components/rum.js");

var _jsxFileName = "C:\\Users\\Ashok\\Documents\\GitHub\\Reactstorefront_netlify\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















react_storefront_amp_installAmpOverrides__WEBPACK_IMPORTED_MODULE_10___default()();

const styles = theme => ({
  main: {
    paddingTop: 3
  }
});

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(styles);
function MyApp({
  Component,
  pageProps
}) {
  react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_9___default()();
  const classes = useStyles();
  const [appData] = react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_14___default()(pageProps || {}); // Setting global clientDidNavigate which is used by RSF LazyHydrate

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_16___default.a.events.on('routeChangeStart', url => {
      window.clientDidNavigate = true;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_PWA__WEBPACK_IMPORTED_MODULE_6___default.a, {
    errorReporter: _components_reportError__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_amp_AmpProvider__WEBPACK_IMPORTED_MODULE_13___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_12___default.a, {
        url: "/api/session",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
          theme: _components_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Analytics__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
              menu: appData && appData.menu
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
              tabs: appData && appData.tabs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
              className: classes.main,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@layer0/rum":
/*!******************************!*\
  !*** external "@layer0/rum" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@layer0/rum");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/styles/makeStyles":
/*!*************************************************!*\
  !*** external "@material-ui/styles/makeStyles" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles/makeStyles");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-storefront-amp/AmpAppBar":
/*!*************************************************!*\
  !*** external "react-storefront-amp/AmpAppBar" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/AmpAppBar");

/***/ }),

/***/ "react-storefront-amp/AmpProvider":
/*!***************************************************!*\
  !*** external "react-storefront-amp/AmpProvider" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/AmpProvider");

/***/ }),

/***/ "react-storefront-amp/installAmpOverrides":
/*!***********************************************************!*\
  !*** external "react-storefront-amp/installAmpOverrides" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/installAmpOverrides");

/***/ }),

/***/ "react-storefront-amp/menu/AmpMenu":
/*!****************************************************!*\
  !*** external "react-storefront-amp/menu/AmpMenu" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/menu/AmpMenu");

/***/ }),

/***/ "react-storefront-amp/search/AmpSearchButton":
/*!**************************************************************!*\
  !*** external "react-storefront-amp/search/AmpSearchButton" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/search/AmpSearchButton");

/***/ }),

/***/ "react-storefront-amp/search/AmpSearchDrawer":
/*!**************************************************************!*\
  !*** external "react-storefront-amp/search/AmpSearchDrawer" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/search/AmpSearchDrawer");

/***/ }),

/***/ "react-storefront-amp/search/AmpSearchField":
/*!*************************************************************!*\
  !*** external "react-storefront-amp/search/AmpSearchField" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/search/AmpSearchField");

/***/ }),

/***/ "react-storefront-amp/search/AmpSearchSuggestions":
/*!*******************************************************************!*\
  !*** external "react-storefront-amp/search/AmpSearchSuggestions" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-amp/search/AmpSearchSuggestions");

/***/ }),

/***/ "react-storefront-analytics":
/*!*********************************************!*\
  !*** external "react-storefront-analytics" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront-analytics");

/***/ }),

/***/ "react-storefront/CartButton":
/*!**********************************************!*\
  !*** external "react-storefront/CartButton" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/CartButton");

/***/ }),

/***/ "react-storefront/LazyHydrate":
/*!***********************************************!*\
  !*** external "react-storefront/LazyHydrate" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/LazyHydrate");

/***/ }),

/***/ "react-storefront/PWA":
/*!***************************************!*\
  !*** external "react-storefront/PWA" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/PWA");

/***/ }),

/***/ "react-storefront/Spacer":
/*!******************************************!*\
  !*** external "react-storefront/Spacer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Spacer");

/***/ }),

/***/ "react-storefront/hooks/useAppStore":
/*!*****************************************************!*\
  !*** external "react-storefront/hooks/useAppStore" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/hooks/useAppStore");

/***/ }),

/***/ "react-storefront/hooks/useCartTotal":
/*!******************************************************!*\
  !*** external "react-storefront/hooks/useCartTotal" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/hooks/useCartTotal");

/***/ }),

/***/ "react-storefront/hooks/useJssStyles":
/*!******************************************************!*\
  !*** external "react-storefront/hooks/useJssStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/hooks/useJssStyles");

/***/ }),

/***/ "react-storefront/link/Link":
/*!*********************************************!*\
  !*** external "react-storefront/link/Link" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/link/Link");

/***/ }),

/***/ "react-storefront/menu/MenuButton":
/*!***************************************************!*\
  !*** external "react-storefront/menu/MenuButton" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/menu/MenuButton");

/***/ }),

/***/ "react-storefront/nav/NavTab":
/*!**********************************************!*\
  !*** external "react-storefront/nav/NavTab" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/nav/NavTab");

/***/ }),

/***/ "react-storefront/nav/NavTabs":
/*!***********************************************!*\
  !*** external "react-storefront/nav/NavTabs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/nav/NavTabs");

/***/ }),

/***/ "react-storefront/search/SearchField":
/*!******************************************************!*\
  !*** external "react-storefront/search/SearchField" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchField");

/***/ }),

/***/ "react-storefront/search/SearchForm":
/*!*****************************************************!*\
  !*** external "react-storefront/search/SearchForm" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchForm");

/***/ }),

/***/ "react-storefront/search/SearchHeader":
/*!*******************************************************!*\
  !*** external "react-storefront/search/SearchHeader" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchHeader");

/***/ }),

/***/ "react-storefront/search/SearchPopover":
/*!********************************************************!*\
  !*** external "react-storefront/search/SearchPopover" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchPopover");

/***/ }),

/***/ "react-storefront/search/SearchProvider":
/*!*********************************************************!*\
  !*** external "react-storefront/search/SearchProvider" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchProvider");

/***/ }),

/***/ "react-storefront/search/SearchSuggestions":
/*!************************************************************!*\
  !*** external "react-storefront/search/SearchSuggestions" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchSuggestions");

/***/ }),

/***/ "react-storefront/session/SessionContext":
/*!**********************************************************!*\
  !*** external "react-storefront/session/SessionContext" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/session/SessionContext");

/***/ }),

/***/ "react-storefront/session/SessionProvider":
/*!***********************************************************!*\
  !*** external "react-storefront/session/SessionProvider" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/session/SessionProvider");

/***/ }),

/***/ "react-storefront/theme/createTheme":
/*!*****************************************************!*\
  !*** external "react-storefront/theme/createTheme" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/theme/createTheme");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hc3NldHMvcmVhY3Qtc3RvcmVmcm9udC1sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9ydEVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcnVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hEZXNrdG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaE1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxheWVyMC9ydW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlcy9tYWtlU3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9hbXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvQW1wQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvQW1wUHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250LWFtcC9pbnN0YWxsQW1wT3ZlcnJpZGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvbWVudS9BbXBNZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvc2VhcmNoL0FtcFNlYXJjaEJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQtYW1wL3NlYXJjaC9BbXBTZWFyY2hEcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250LWFtcC9zZWFyY2gvQW1wU2VhcmNoRmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250LWFtcC9zZWFyY2gvQW1wU2VhcmNoU3VnZ2VzdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250LWFuYWx5dGljc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvQ2FydEJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvTGF6eUh5ZHJhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L1BXQVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvU3BhY2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9ob29rcy91c2VBcHBTdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvaG9va3MvdXNlQ2FydFRvdGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9ob29rcy91c2VKc3NTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L2xpbmsvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvbWVudS9NZW51QnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFBvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hQcm92aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFN1Z2dlc3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Db250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Qcm92aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvdGhlbWUvY3JlYXRlVGhlbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBbmFseXRpY3MiLCJjaGlsZHJlbiIsInBhZ2V2aWV3IiwiZXZlbnRDb250ZXh0IiwiZXZlbnRQYXJhbXMiLCJldmVudCIsInBhdGgiLCJ0aXRsZSIsInByb2R1Y3RDbGlja2VkIiwiZWNvbW1lcmNlIiwiY2xpY2siLCJwcm9kdWN0cyIsImlkIiwicHJvZHVjdCIsInBvc2l0aW9uIiwiaGl0VHlwZSIsInBhZ2UiLCJwYXRobmFtZSIsImV2ZW50Q2F0ZWdvcnkiLCJldmVudEFjdGlvbiIsImV2ZW50TGFiZWwiLCJ0b1N0cmluZyIsImV2ZW50VmFsdWUiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwibGVmdCIsInRvcCIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1hcmdpbkxlZnQiLCJ0b29sYmFyIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYWNjb3VudExpbmsiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0RGVjb3JhdGlvbiIsIkhlYWRlciIsIm1lbnUiLCJjbGFzc2VzIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInVzZVN0YXRlIiwiaHlkcmF0ZU1lbnUiLCJzZXRIeWRyYXRlTWVudSIsImhhbmRsZU1lbnVDbG9zZSIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTWVudUJ1dHRvbkNsaWNrIiwic2Vzc2lvbiIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImNhcnRUb3RhbCIsInVzZUNhcnRUb3RhbCIsIndpZHRoIiwiaGVpZ2h0IiwiaXRlbSIsInJvb3QiLCJsaW5rIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIk5hdkJhciIsInRhYnMiLCJtYXAiLCJ0YWIiLCJocmVmIiwiYXMiLCJ0ZXh0IiwiaXRlbXMiLCJkZWZhdWx0UHJvcHMiLCJtZW1vIiwicmVwb3J0RXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2giLCJhbXAiLCJ1c2VBbXAiLCJ1cCIsIlNlYXJjaERlc2t0b3AiLCJpbnB1dFJlZiIsInVzZVJlZiIsImFjdGl2ZVJlZiIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJwb3BvdmVyT3BlbiIsInNldFBvcG92ZXJPcGVuIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInZhbHVlIiwiYnV0dG9uIiwiU2VhcmNoTW9iaWxlIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJoeWRyYXRlZCIsInNldEh5ZHJhdGVkIiwidG9nZ2xlRHJhd2VyIiwiY2xvc2VEcmF3ZXIiLCJoeWRyYXRlIiwiY3JlYXRlVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJvdmVycmlkZXMiLCJpbnN0YWxsQW1wT3ZlcnJpZGVzIiwic3R5bGVzIiwicGFkZGluZ1RvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlSnNzU3R5bGVzIiwiYXBwRGF0YSIsInVzZUFwcFN0b3JlIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJ1cmwiLCJ3aW5kb3ciLCJjbGllbnREaWROYXZpZ2F0ZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztR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Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBBbmFseXRpY3NQcm92aWRlcixcbiAgR29vZ2xlQW5hbHl0aWNzLFxuICBHb29nbGVUYWdNYW5hZ2VyLFxuICBGaXJlYmFzZVBlcmZvcm1hbmNlTW9uaXRvcmluZyxcbn0gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC1hbmFseXRpY3MnXG5cbmNvbnN0IEFuYWx5dGljcyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEFuYWx5dGljc1Byb3ZpZGVyPlxuICAgIDxHb29nbGVUYWdNYW5hZ2VyIGFwaUtleT1cInRlc3RcIj5cbiAgICAgIHt7XG4gICAgICAgIHBhZ2V2aWV3OiAoeyBldmVudENvbnRleHQsIGV2ZW50UGFyYW1zIH0pID0+ICh7XG4gICAgICAgICAgZXZlbnQ6ICdwYWdldmlldycsXG4gICAgICAgICAgcGF0aDogZXZlbnRQYXJhbXMsXG4gICAgICAgICAgdGl0bGU6IGV2ZW50Q29udGV4dC50aXRsZSxcbiAgICAgICAgfSksXG4gICAgICAgIHByb2R1Y3RDbGlja2VkOiAoeyBldmVudFBhcmFtcyB9KSA9PiAoe1xuICAgICAgICAgIGV2ZW50OiAncHJvZHVjdENsaWNrJyxcbiAgICAgICAgICBlY29tbWVyY2U6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50UGFyYW1zLnByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZXZlbnRQYXJhbXMucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9fVxuICAgIDwvR29vZ2xlVGFnTWFuYWdlcj5cbiAgICA8R29vZ2xlQW5hbHl0aWNzIHRyYWNraW5nSWQ9XCJVQS0xNTMyMjM5NzEtMVwiPlxuICAgICAge3tcbiAgICAgICAgcGFnZXZpZXc6ICh7IGV2ZW50Q29udGV4dCB9KSA9PiAoe1xuICAgICAgICAgIGhpdFR5cGU6ICdwYWdldmlldycsXG4gICAgICAgICAgcGFnZTogZXZlbnRDb250ZXh0LnBhdGhuYW1lLFxuICAgICAgICAgIHRpdGxlOiBldmVudENvbnRleHQudGl0bGUsXG4gICAgICAgIH0pLFxuICAgICAgICBwcm9kdWN0Q2xpY2tlZDogKHsgZXZlbnRQYXJhbXMgfSkgPT4gKHtcbiAgICAgICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICdpbnRlcmFjdGlvbicsXG4gICAgICAgICAgZXZlbnRBY3Rpb246ICdjbGljaycsXG4gICAgICAgICAgZXZlbnRMYWJlbDogZXZlbnRQYXJhbXMucHJvZHVjdC5pZC50b1N0cmluZygpLFxuICAgICAgICAgIGV2ZW50VmFsdWU6IDEsXG4gICAgICAgIH0pLFxuICAgICAgfX1cbiAgICA8L0dvb2dsZUFuYWx5dGljcz5cbiAgICA8RmlyZWJhc2VQZXJmb3JtYW5jZU1vbml0b3JpbmdcbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlIHRoaXMgb2JqZWN0IHRvIG1hdGNoIHlvdXIgRmlyZWJhc2UgY29uZmlnLiAgWW91IGNhbiBnZXQgdGhpcyBmcm9tIHRoZSBGaXJlYmFzZSBjb25zb2xlIGF0XG4gICAgICAgKiBTZXR0aW5ncyA9PiBHZW5lcmFsID0+IFlvdXIgQXBwcyA9PiBGaXJlYmFzZSBTREsgU25pcHBldCA9PiBDb25maWcuXG4gICAgICAgKi9cbiAgICAgIGNvbmZpZz17e1xuICAgICAgICBhcGlLZXk6ICdBSXphU3lDOWVuNDZ4ZlVsamJYcUdhcDdjQXVpZ21JSEhXaW9VYjgnLFxuICAgICAgICBhdXRoRG9tYWluOiAncmVhY3Qtc3RvcmVmcm9udC1zdGFydGVyLWFwcC5maXJlYmFzZWFwcC5jb20nLFxuICAgICAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vcmVhY3Qtc3RvcmVmcm9udC1zdGFydGVyLWFwcC5maXJlYmFzZWlvLmNvbScsXG4gICAgICAgIHByb2plY3RJZDogJ3JlYWN0LXN0b3JlZnJvbnQtc3RhcnRlci1hcHAnLFxuICAgICAgICBzdG9yYWdlQnVja2V0OiAncmVhY3Qtc3RvcmVmcm9udC1zdGFydGVyLWFwcC5hcHBzcG90LmNvbScsXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnOTM4NDE1NTcyNDY4JyxcbiAgICAgICAgYXBwSWQ6ICcxOjkzODQxNTU3MjQ2ODp3ZWI6NzAwY2NmOTNiMTk1ZTc4ZTdiZTVhMScsXG4gICAgICAgIG1lYXN1cmVtZW50SWQ6ICdHLUNKM0JFUlIwUVknLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GaXJlYmFzZVBlcmZvcm1hbmNlTW9uaXRvcmluZz5cbiAgPC9BbmFseXRpY3NQcm92aWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQW5hbHl0aWNzXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IEFwcEJhciBmcm9tICdyZWFjdC1zdG9yZWZyb250LWFtcC9BbXBBcHBCYXInXG5pbXBvcnQgQ2FydEJ1dHRvbiBmcm9tICdyZWFjdC1zdG9yZWZyb250L0NhcnRCdXR0b24nXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoL1NlYXJjaCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvYXNzZXRzL3JlYWN0LXN0b3JlZnJvbnQtbG9nby5zdmcnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNZW51IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQtYW1wL21lbnUvQW1wTWVudSdcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbWVudS9NZW51QnV0dG9uJ1xuaW1wb3J0IExpbmsgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9saW5rL0xpbmsnXG5pbXBvcnQgU2Vzc2lvbkNvbnRleHQgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Db250ZXh0J1xuaW1wb3J0IHVzZUNhcnRUb3RhbCBmcm9tICdyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUNhcnRUb3RhbCdcbmltcG9ydCBMYXp5SHlkcmF0ZSBmcm9tICdyZWFjdC1zdG9yZWZyb250L0xhenlIeWRyYXRlJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7fSxcbiAgbG9nbzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDEwLFxuICAgIHRvcDogMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiA2LFxuICAgICAgbWFyZ2luTGVmdDogLTYwLFxuICAgIH0sXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBwYWRkaW5nOiA1LFxuICAgIH0sXG4gIH0sXG4gIGFjY291bnRMaW5rOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgbWVudSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaHlkcmF0ZU1lbnUsIHNldEh5ZHJhdGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRNZW51T3BlbihmYWxzZSksIFtdKVxuICBjb25zdCBoYW5kbGVNZW51QnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4obWVudU9wZW4gPT4gIW1lbnVPcGVuKVxuICAgIHNldEh5ZHJhdGVNZW51KHRydWUpXG4gIH0sIFtdKVxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpXG4gIGNvbnN0IGNhcnRUb3RhbCA9IHVzZUNhcnRUb3RhbCgpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFwcEJhcj5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxMb2dvIHN0eWxlPXt7IHdpZHRoOiAxMjAsIGhlaWdodDogNDggfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICA8Q2FydEJ1dHRvbiBxdWFudGl0eT17Y2FydFRvdGFsfSAvPlxuICAgICAgICAgIDxNZW51QnV0dG9uIG9wZW49e21lbnVPcGVufSBvbkNsaWNrPXtoYW5kbGVNZW51QnV0dG9uQ2xpY2t9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8TGF6eUh5ZHJhdGUgaWQ9XCJtZW51XCIgaHlkcmF0ZWQ9e2h5ZHJhdGVNZW51fT5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgcm9vdD17bWVudX1cbiAgICAgICAgICBvcGVuPXttZW51T3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XG4gICAgICAgICAgLy8gcmVuZGVySXRlbT17aXRlbSA9PiA8ZGl2PntpdGVtLnRleHR9IChjdXN0b20pPC9kaXY+fVxuICAgICAgICAgIC8vIHJlbmRlckl0ZW1Db250ZW50PXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gKGN1c3RvbSBjb250ZW50KTwvZGl2Pn1cbiAgICAgICAgICAvLyByZW5kZXJCYWNrPXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gYmFjazwvZGl2Pn1cbiAgICAgICAgICByZW5kZXJIZWFkZXI9e2l0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLnJvb3QpIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFzPVwiL2FjY291bnRcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvdW50TGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE15IEFjY291bnRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgICAgLy8gcmVuZGVyRm9vdGVyPXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gZm9vdGVyPC9kaXY+fVxuICAgICAgICAvPlxuICAgICAgPC9MYXp5SHlkcmF0ZT5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZUYWIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFiJ1xuaW1wb3J0IE5hdlRhYnMgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFicydcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZnVuY3Rpb24gTmF2QmFyKHsgdGFicyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIHNxdWFyZSBlbGV2YXRpb249ezJ9PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZUYWJzPlxuICAgICAgICAgIHt0YWJzICYmXG4gICAgICAgICAgICB0YWJzLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgICA8TmF2VGFiIGtleT17dGFiLmFzfSBocmVmPXt0YWIuaHJlZn0gYXM9e3RhYi5hc30gbGFiZWw9e3RhYi50ZXh0fSBwcmVmZXRjaD1cInZpc2libGVcIj5cbiAgICAgICAgICAgICAgICB7dGFiLml0ZW1zICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0YWIuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0ga2V5PXtpdGVtLmFzfSBhcz17aXRlbS5hc30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9OYXZUYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9OYXZUYWJzPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xuICB0YWJzOiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhOYXZCYXIpXG4iLCJ2YXIgX3BhdGgsIF9nO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBTdmdSZWFjdFN0b3JlZnJvbnRMb2dvID0gZnVuY3Rpb24gU3ZnUmVhY3RTdG9yZWZyb250TG9nbyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHZpZXdCb3g6IFwiOTUgMCA2NzMuNCAyMzguOVwiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNTQuMyAxMDguNWwtNC45IDI4LjFIMjIzTDIzNy4yIDU2aDM4LjFjMTEuNiAwIDE5LjggMS40IDI0LjggNC4xIDUgMi44IDcuNCA3LjIgNy40IDEzLjIgMCAxLjYtLjIgMy41LS42IDUuNi0uOSA0LjktMi44IDktNS43IDEyLjUtMi45IDMuNS02LjcgNS45LTExLjQgNy4yIDMuOSAxLjUgNi42IDMuMSA4LjMgNC43IDEuNiAxLjYgMi41IDQuNSAyLjUgOC42IDAgMi4yLS4zIDQuOS0uOSA4LjEtLjIgMS0uMyAyLS40IDIuOC0uOCA0LjYtMS4yIDcuNS0xLjIgOC42IDAgMS44LjcgMi43IDIgMi43bC0uNCAyLjVoLTI2Ljh2LS44Yy0uMS0uNi0uMS0xLjEtLjEtMS41IDAtMyAuNC02LjkgMS4yLTExLjkuNS0yLjYuOC00LjcuOC02LjMgMC0yLjgtLjktNC44LTIuNy02LTEuOC0xLjItNS0xLjctOS43LTEuN2gtOC4xem0zLjEtMTcuN2gxMC40YzQuMyAwIDcuNS0uNiA5LjgtMS44IDIuMy0xLjIgMy42LTMuMSA0LjEtNS44IDAtLjIgMC0uNS4xLS45cy4xLS43LjEtLjhjMC0yLjItLjgtMy45LTIuNS01cy00LTEuNy02LjktMS43aC0xMi4zbC0yLjggMTZ6TTMxMS43IDEzNi42TDMyNiA1Nmg2NS43bC0zLjQgMTguOEgzNDlsLTIgMTEuNWgzMy4ybC0zLjIgMTguOGgtMzMuMmwtMi4yIDEyLjZoNDAuOWwtMy40IDE4LjhoLTY3LjR6TTM4NS4zIDEzNi42TDQyOC40IDU2aDI2LjlsMTQuNyA4MC42aC0yNi4zbC0xLjItMTAuNmgtMjYuM2wtNC45IDEwLjZoLTI2em01Mi01Ni4zTDQyNCAxMDkuMmgxNi43bC0zLjQtMjguOXpNNTM4LjEgODYuOFY4NS4xYzAtMy43LTEtNi41LTMuMS04LjVzLTUuMS0zLTktM2MtNC43IDAtOC43IDItMTIgNi0zLjMgNC01LjcgOS44LTcgMTcuNS0uNSAzLjItLjggNi0uOCA4LjQgMCA0LjIgMSA3LjUgMi45IDkuOSAxLjkgMi40IDUuMyAzLjYgMTAgMy42IDQgMCA3LjQtMS4yIDEwLTMuNyAyLjYtMi41IDQuNi01LjggNS45LTEwaDI1LjRjLTMgMTAuNC04LjUgMTguNS0xNi40IDI0LjUtNy45IDUuOS0xNy4zIDguOS0yNy45IDguOS0xMS41IDAtMjAuNC0yLjktMjYuNy04LjctNi4zLTUuOC05LjUtMTMuOC05LjUtMjQgMC0zLjEuMy02LjQuOS05LjkgMS4xLTYuNCAzLjItMTIuMiA2LjEtMTcuNSAyLjktNS4yIDYuNi05LjcgMTAuOS0xMy40IDQuMy0zLjcgOS4xLTYuNiAxNC4zLTguNSA1LjItMS45IDEwLjYtMi45IDE2LjItMi45IDExLjUgMCAyMC4yIDIuNiAyNi4xIDcuNyA1LjkgNS4xIDguOCAxMi40IDguOCAyMS44IDAgLjMgMCAuOS0uMSAxLjd2MS44aC0yNXpNNTc1LjkgNTZoNzMuOWwtMy43IDIxLjJoLTIzLjdsLTEwLjUgNTkuNGgtMjYuNEw1OTYgNzcuMmgtMjMuN2wzLjYtMjEuMnpcIlxuICB9KSksIF9nIHx8IChfZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTI0NC42IDE2Ny42YzAtMS4yLS40LTItMS4zLTIuNi0uOC0uNS0xLjgtLjctMy4xLS43LTIuNiAwLTQuMS43LTQuMyAyLjJ2LjJsLS4xLjJjMCAuOS41IDEuNSAxLjYgMnMyLjggMSA1LjEgMS42YzIgLjUgMy42IDEgNC44IDEuNCAxLjIuNCAyLjUgMSAzLjcgMS43IDEuMi43IDIuMiAxLjYgMi45IDIuOC43IDEuMSAxLjEgMi41IDEuMSA0LjEgMCAuNi0uMSAxLjMtLjIgMi0uNyA0LjMtMi45IDcuNS02LjUgOS43LTMuNiAyLjItOC4xIDMuMy0xMy40IDMuMy0yLjMgMC00LjMtLjMtNi4xLS45LTEuOC0uNi0zLjQtMS40LTQuNi0yLjQtMS4zLTEtMi4yLTIuMi0yLjktMy41LS43LTEuMy0xLTIuOC0xLTQuNCAwLS41IDAtLjkuMS0xLjVoMTEuOWMwIDEuMy41IDIuMyAxLjUgMyAuOS42IDIgLjkgMy40LjkgMS42IDAgMi45LS4yIDMuOS0uNyAxLS41IDEuNi0xLjIgMS43LTIgMC0uMSAwLS4xLjEtLjJ2LS4yYzAtLjktLjUtMS41LTEuNi0ycy0yLjctMS01LTEuNmMtMi0uNS0zLjYtLjktNC44LTEuMy0xLjMtLjQtMi41LTEtMy43LTEuNy0xLjItLjctMi4yLTEuNy0yLjktMi44LS43LTEuMi0xLjEtMi42LTEuMS00LjMgMC0uNy4xLTEuNC4yLTIuMi43LTMuOSAyLjctNi45IDYuMS05IDMuNC0yLjEgNy41LTMuMSAxMi40LTMuMSAyLjUgMCA0LjYuMyA2LjQuOSAxLjguNiAzLjMgMS40IDQuNCAyLjUgMS4xIDEuMSAxLjkgMi4zIDIuNSAzLjguNSAxLjUuOCAzLjEuOCA0LjloLTEyek0yNjIuNyAxNTYuNmgzNC43bC0xLjcgOS45aC0xMS4xbC00LjkgMjcuOWgtMTIuNGw0LjktMjcuOUgyNjFsMS43LTkuOXpNMzI4LjUgMTU2LjljMi4xLjggMy45IDIgNS4zIDMuNHMyLjQgMy4xIDMgNWMuNyAxLjkgMSAzLjkgMSA2LjEgMCAxLjMtLjEgMi42LS40IDQtLjYgMy4xLTEuNiA1LjktMyA4LjUtMS40IDIuNS0zLjIgNC42LTUuMyA2LjQtMi4xIDEuNy00LjQgMy03IDMuOS0yLjYuOS01LjMgMS4zLTguMSAxLjMtNS4yIDAtOS4zLTEuMy0xMi4zLTRzLTQuNC02LjUtNC40LTExLjRjMC0xLjUuMi0zLjEuNS00LjguNS0yLjkgMS40LTUuNiAyLjgtOCAxLjQtMi40IDMuMS00LjUgNS4yLTYuMiAyLjEtMS43IDQuNC0zLjEgNy00IDIuNi0uOSA1LjMtMS40IDguMi0xLjQgMi44LS4xIDUuMy4zIDcuNSAxLjJ6bS0xMi44IDguOWMtMS4xLjYtMiAxLjQtMi43IDIuNC0uNyAxLTEuMyAyLjEtMS44IDMuMy0uNSAxLjItLjggMi41LTEuMSAzLjgtLjIgMS4zLS4zIDIuNS0uMyAzLjYgMCAyLjIuNCAzLjkgMS4zIDUuMy45IDEuMyAyLjQgMiA0LjUgMiAyLjYgMCA0LjYtMSA2LjEtMi45IDEuNS0yIDIuNi00LjYgMy4yLTcuOS4yLTEuMS4zLTIuMS4zLTMuMSAwLTIuMi0uNS0zLjktMS40LTUuMy0xLTEuNC0yLjUtMi00LjYtMi0xLjMtLjEtMi41LjItMy41Ljh6TTM1NCAxODEuM2wtMi4zIDEzLjJoLTEyLjRsNi43LTM3LjhoMTcuOWM1LjQgMCA5LjMuNiAxMS42IDEuOSAyLjMgMS4zIDMuNSAzLjQgMy41IDYuMiAwIC44LS4xIDEuNi0uMyAyLjYtLjQgMi4zLTEuMyA0LjItMi43IDUuOS0xLjQgMS42LTMuMSAyLjgtNS4zIDMuNCAxLjguNyAzLjEgMS40IDMuOSAyLjIuOC44IDEuMiAyLjEgMS4yIDQgMCAxLjEtLjEgMi4zLS40IDMuOC0uMS41LS4xLjktLjIgMS4zLS40IDIuMi0uNiAzLjUtLjYgNCAwIC44LjMgMS4zLjkgMS4zbC0uMiAxLjJoLTEyLjZ2LS40YzAtLjMtLjEtLjUtLjEtLjcgMC0xLjQuMi0zLjMuNi01LjYuMi0xLjIuNC0yLjIuNC0yLjkgMC0xLjMtLjQtMi4zLTEuMy0yLjgtLjgtLjUtMi40LS44LTQuNi0uOEgzNTR6bTEuNS04LjNoNC45YzIgMCAzLjUtLjMgNC42LS44IDEuMS0uNiAxLjctMS41IDEuOS0yLjcgMC0uMSAwLS4yLjEtLjQgMC0uMi4xLS4zLjEtLjQgMC0xLjEtLjQtMS44LTEuMi0yLjQtLjgtLjUtMS45LS44LTMuMi0uOGgtNS44bC0xLjQgNy41elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MzAuOCAxOTQuNGw2LjctMzcuOGgyOS40bC0xLjYgOC44aC0xN2wtMS4yIDYuOWgxMy42bC0xLjUgOC44aC0xMy42bC0yLjQgMTMuM2gtMTIuNHpNNDc5LjkgMTgxLjNsLTIuMyAxMy4yaC0xMi40bDYuNy0zNy44aDE3LjljNS40IDAgOS4zLjYgMTEuNiAxLjkgMi4zIDEuMyAzLjUgMy40IDMuNSA2LjIgMCAuOC0uMSAxLjYtLjMgMi42LS40IDIuMy0xLjMgNC4yLTIuNyA1LjktMS4zIDEuNi0zLjEgMi44LTUuMyAzLjQgMS44LjcgMy4xIDEuNCAzLjkgMi4yLjguOCAxLjIgMi4xIDEuMiA0IDAgMS4xLS4xIDIuMy0uNCAzLjgtLjEuNS0uMS45LS4yIDEuMy0uNCAyLjItLjYgMy41LS42IDQgMCAuOC4zIDEuMy45IDEuM2wtLjIgMS4yaC0xMi42di0uNGMwLS4zLS4xLS41LS4xLS43IDAtMS40LjItMy4zLjYtNS42LjItMS4yLjQtMi4yLjQtMi45IDAtMS4zLS40LTIuMy0xLjMtMi44LS44LS41LTIuNC0uOC00LjYtLjhoLTMuN3ptMS41LTguM2g0LjljMiAwIDMuNS0uMyA0LjYtLjggMS4xLS42IDEuNy0xLjUgMS45LTIuNyAwLS4xIDAtLjIuMS0uNCAwLS4yLjEtLjMuMS0uNCAwLTEuMS0uNC0xLjgtMS4yLTIuNC0uOC0uNS0xLjktLjgtMy4yLS44aC01LjhsLTEuNCA3LjV6TTUzOSAxNTYuOWMyLjEuOCAzLjkgMiA1LjMgMy40czIuNCAzLjEgMyA1Yy43IDEuOSAxIDMuOSAxIDYuMSAwIDEuMy0uMSAyLjYtLjQgNC0uNiAzLjEtMS42IDUuOS0zIDguNS0xLjQgMi41LTMuMiA0LjYtNS4zIDYuNC0yLjEgMS43LTQuNCAzLTcgMy45LTIuNi45LTUuMyAxLjMtOC4xIDEuMy01LjIgMC05LjMtMS4zLTEyLjMtNHMtNC40LTYuNS00LjQtMTEuNGMwLTEuNS4yLTMuMS41LTQuOC41LTIuOSAxLjQtNS42IDIuOC04czMuMS00LjUgNS4yLTYuMmMyLjEtMS43IDQuNC0zLjEgNy00IDIuNi0uOSA1LjMtMS40IDguMi0xLjQgMi45LS4xIDUuNC4zIDcuNSAxLjJ6bS0xMi44IDguOWMtMS4xLjYtMiAxLjQtMi43IDIuNC0uNyAxLTEuMyAyLjEtMS44IDMuMy0uNSAxLjItLjggMi41LTEuMSAzLjgtLjIgMS4zLS4zIDIuNS0uMyAzLjYgMCAyLjIuNCAzLjkgMS4zIDUuM3MyLjQgMiA0LjUgMmMyLjYgMCA0LjYtMSA2LjEtMi45IDEuNS0yIDIuNi00LjYgMy4yLTcuOS4yLTEuMS4zLTIuMS4zLTMuMSAwLTIuMi0uNS0zLjktMS40LTUuMy0xLTEuNC0yLjUtMi00LjYtMi0xLjItLjEtMi40LjItMy41Ljh6TTU3OC40IDE3Ny4zbDEuMS04LjYgMi4xLTEyaDExLjlsLTYuNyAzNy44aC0xMS42bC05LjktMjAuNi0xIDguNi0yLjEgMTJoLTExLjlsNi43LTM3LjhoMTEuNmw5LjggMjAuNnpNNTk4LjcgMTU2LjZoMzQuN2wtMS43IDkuOWgtMTEuMWwtNC45IDI3LjloLTEyLjRsNC45LTI3LjloLTExLjFsMS42LTkuOXpcIlxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwiIzBDODBDM1wiLFxuICAgIGQ6IFwiTTM4Mi41IDE5My43aDM1LjFsMS44LTguNmgtMzUuMWwtMS44IDguNnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIiM1RkIxNDZcIixcbiAgICBkOiBcIk00MjAuNSAxNzFoLTMzLjFsLTEuOCA4LjZoMzMuMWwxLjgtOC42elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwiI0Y2OTEyMFwiLFxuICAgIGQ6IFwiTTM4OC41IDE2NS41aDM1LjFsMS44LTguNmgtMzUuMWwtMS44IDguNnpcIlxuICB9KSkpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdSZWFjdFN0b3JlZnJvbnRMb2dvOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcG9ydEVycm9yKHsgZXJyb3IgfSkge1xuICBjb25zb2xlLmxvZygnW3JlcG9ydEVycm9yXScsIGVycm9yKVxufVxuIiwiaW1wb3J0IHsgTWV0cmljcyB9IGZyb20gJ0BsYXllcjAvcnVtJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbmV3IE1ldHJpY3MoKS5jb2xsZWN0KClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2hEZXNrdG9wIGZyb20gJy4vU2VhcmNoRGVza3RvcCdcbmltcG9ydCBTZWFyY2hNb2JpbGUgZnJvbSAnLi9TZWFyY2hNb2JpbGUnXG5pbXBvcnQgU3BhY2VyIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvU3BhY2VyJ1xuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbmZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgYW1wID0gdXNlQW1wKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoTW9iaWxlIC8+XG4gICAgICA8U3BhY2VyIC8+XG4gICAgICB7IWFtcCAmJiA8U2VhcmNoRGVza3RvcCAvPn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEZvcm0nXG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRmllbGQnXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoU3VnZ2VzdGlvbnMnXG5pbXBvcnQgU2VhcmNoUHJvdmlkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUHJvdmlkZXInXG5pbXBvcnQgU2VhcmNoUG9wb3ZlciBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hQb3BvdmVyJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnXG5pbXBvcnQgTGF6eUh5ZHJhdGUgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9MYXp5SHlkcmF0ZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmZ1bmN0aW9uIFNlYXJjaERlc2t0b3AoKSB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGFjdGl2ZVJlZiA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3BvcG92ZXJPcGVuLCBzZXRQb3BvdmVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWFjdGl2ZVJlZi5jdXJyZW50KSB7XG4gICAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWVcbiAgICB9XG4gIH0sIFtwb3BvdmVyT3Blbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxMYXp5SHlkcmF0ZSBpZD1cInNlYXJjaC1kZXNrdG9wXCIgb249XCJ0b3VjaFwiPlxuICAgICAgICA8U2VhcmNoRm9ybT5cbiAgICAgICAgICA8U2VhcmNoRmllbGRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0UXVlcnkodmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0UG9wb3Zlck9wZW4odHJ1ZSl9XG4gICAgICAgICAgICBzdWJtaXRCdXR0b25WYXJpYW50PVwibm9uZVwiXG4gICAgICAgICAgICBzaG93Q2xlYXJCdXR0b249e2ZhbHNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlYXJjaFByb3ZpZGVyIHF1ZXJ5PXtxdWVyeX0gYWN0aXZlPXthY3RpdmVSZWYuY3VycmVudH0+XG4gICAgICAgICAgICA8U2VhcmNoUG9wb3ZlclxuICAgICAgICAgICAgICBvcGVuPXtwb3BvdmVyT3Blbn1cbiAgICAgICAgICAgICAgc2V0UXVlcnk9e3NldFF1ZXJ5fVxuICAgICAgICAgICAgICBhbmNob3I9e2lucHV0UmVmfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRQb3BvdmVyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZWFyY2hTdWdnZXN0aW9ucyAvPlxuICAgICAgICAgICAgPC9TZWFyY2hQb3BvdmVyPlxuICAgICAgICAgIDwvU2VhcmNoUHJvdmlkZXI+XG4gICAgICAgIDwvU2VhcmNoRm9ybT5cbiAgICAgIDwvTGF6eUh5ZHJhdGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWFyY2hEZXNrdG9wKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaEhlYWRlciBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hIZWFkZXInXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGb3JtJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQtYW1wL3NlYXJjaC9BbXBTZWFyY2hGaWVsZCdcbmltcG9ydCBTZWFyY2hEcmF3ZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC1hbXAvc2VhcmNoL0FtcFNlYXJjaERyYXdlcidcbmltcG9ydCBTZWFyY2hCdXR0b24gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC1hbXAvc2VhcmNoL0FtcFNlYXJjaEJ1dHRvbidcbmltcG9ydCBTZWFyY2hTdWdnZXN0aW9ucyBmcm9tICdyZWFjdC1zdG9yZWZyb250LWFtcC9zZWFyY2gvQW1wU2VhcmNoU3VnZ2VzdGlvbnMnXG5pbXBvcnQgU2VhcmNoUHJvdmlkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUHJvdmlkZXInXG5pbXBvcnQgTGF6eUh5ZHJhdGUgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9MYXp5SHlkcmF0ZSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGJ1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgYnV0dG9uOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZnVuY3Rpb24gU2VhcmNoTW9iaWxlKCkge1xuICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2h5ZHJhdGVkLCBzZXRIeWRyYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4gc2V0RHJhd2VyT3BlbighZHJhd2VyT3BlbilcbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSAoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKVxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgaHlkcmF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIeWRyYXRlZCh0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gb25Ub3VjaFN0YXJ0PXtoeWRyYXRlfSAvPlxuICAgICAgPExhenlIeWRyYXRlIGlkPVwic2VhcmNoLW1vYmlsZVwiIGh5ZHJhdGVkPXtoeWRyYXRlZH0+XG4gICAgICAgIDxTZWFyY2hEcmF3ZXIgb3Blbj17ZHJhd2VyT3Blbn0gb25DbG9zZT17Y2xvc2VEcmF3ZXJ9PlxuICAgICAgICAgIDxTZWFyY2hGb3JtPlxuICAgICAgICAgICAgPFNlYXJjaEhlYWRlcj5cbiAgICAgICAgICAgICAgPFNlYXJjaEZpZWxkIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRRdWVyeSh2YWx1ZSl9IHZhbHVlPXtxdWVyeX0gLz5cbiAgICAgICAgICAgIDwvU2VhcmNoSGVhZGVyPlxuICAgICAgICAgICAgPFNlYXJjaFByb3ZpZGVyIHF1ZXJ5PXtxdWVyeX0gYWN0aXZlPXtkcmF3ZXJPcGVufT5cbiAgICAgICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zIC8+XG4gICAgICAgICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgICAgICAgIDwvU2VhcmNoRm9ybT5cbiAgICAgICAgPC9TZWFyY2hEcmF3ZXI+XG4gICAgICA8L0xhenlIeWRyYXRlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VhcmNoTW9iaWxlKVxuIiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvdGhlbWUvY3JlYXRlVGhlbWUnXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzU1NmNkNicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMTk4NTdiJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxuICBvdmVycmlkZXM6IHt9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IENzc0Jhc2VsaW5lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IFBXQSBmcm9tICdyZWFjdC1zdG9yZWZyb250L1BXQSdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5pbXBvcnQgcmVwb3J0RXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9yZXBvcnRFcnJvcidcbmltcG9ydCB1c2VKc3NTdHlsZXMgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9ob29rcy91c2VKc3NTdHlsZXMnXG5pbXBvcnQgaW5zdGFsbEFtcE92ZXJyaWRlcyBmcm9tICdyZWFjdC1zdG9yZWZyb250LWFtcC9pbnN0YWxsQW1wT3ZlcnJpZGVzJ1xuaW1wb3J0IEFuYWx5dGljcyBmcm9tICcuLi9jb21wb25lbnRzL0FuYWx5dGljcydcbmltcG9ydCBTZXNzaW9uUHJvdmlkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Qcm92aWRlcidcbmltcG9ydCBBbXBQcm92aWRlciBmcm9tICdyZWFjdC1zdG9yZWZyb250LWFtcC9BbXBQcm92aWRlcidcbmltcG9ydCB1c2VBcHBTdG9yZSBmcm9tICdyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUFwcFN0b3JlJ1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3J1bSdcblxuaW5zdGFsbEFtcE92ZXJyaWRlcygpXG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIG1haW46IHtcbiAgICBwYWRkaW5nVG9wOiAzLFxuICB9LFxufSlcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VKc3NTdHlsZXMoKVxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2FwcERhdGFdID0gdXNlQXBwU3RvcmUocGFnZVByb3BzIHx8IHt9KVxuXG4gIC8vIFNldHRpbmcgZ2xvYmFsIGNsaWVudERpZE5hdmlnYXRlIHdoaWNoIGlzIHVzZWQgYnkgUlNGIExhenlIeWRyYXRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHVybCA9PiB7XG4gICAgICB3aW5kb3cuY2xpZW50RGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UFdBIGVycm9yUmVwb3J0ZXI9e3JlcG9ydEVycm9yfT5cbiAgICAgIDxBbXBQcm92aWRlcj5cbiAgICAgICAgPFNlc3Npb25Qcm92aWRlciB1cmw9XCIvYXBpL3Nlc3Npb25cIj5cbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPEFuYWx5dGljcz5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxIZWFkZXIgbWVudT17YXBwRGF0YSAmJiBhcHBEYXRhLm1lbnV9IC8+XG4gICAgICAgICAgICAgIDxOYXZCYXIgdGFicz17YXBwRGF0YSAmJiBhcHBEYXRhLnRhYnN9IC8+XG4gICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvQW5hbHl0aWNzPlxuICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgICA8L0FtcFByb3ZpZGVyPlxuICAgIDwvUFdBPlxuICApXG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICBsZXQgcGFnZVByb3BzID0ge31cblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsYXllcjAvcnVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2FtcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250LWFtcC9BbXBBcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvQW1wUHJvdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvaW5zdGFsbEFtcE92ZXJyaWRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250LWFtcC9tZW51L0FtcE1lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC1hbXAvc2VhcmNoL0FtcFNlYXJjaEJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250LWFtcC9zZWFyY2gvQW1wU2VhcmNoRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQtYW1wL3NlYXJjaC9BbXBTZWFyY2hGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250LWFtcC9zZWFyY2gvQW1wU2VhcmNoU3VnZ2VzdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC1hbmFseXRpY3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9DYXJ0QnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvTGF6eUh5ZHJhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9QV0FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9TcGFjZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9ob29rcy91c2VBcHBTdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUNhcnRUb3RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUpzc1N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L2xpbmsvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L21lbnUvTWVudUJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L25hdi9OYXZUYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hQb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFN1Z2dlc3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uQ29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3Nlc3Npb24vU2Vzc2lvblByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvdGhlbWUvY3JlYXRlVGhlbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=