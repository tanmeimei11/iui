module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_track_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_scss__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__base_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var clickCallback = function clickCallback(e) {
  var items = [];
  var search = this.value.trim();
  console.log(search);
  if (!search.length) return true;

  var _search$split = search.split('?'),
      _search$split2 = _slicedToArray(_search$split, 2),
      seed = _search$split2[0],
      query = _search$split2[1];

  if (query && query.length) {
    items = query.split('&');
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_track_js__["a" /* default */])(seed, items);
};

var directive = function directive(el, binding, _v) {
  el.addEventListener('click', clickCallback.bind(binding));
};

var unbind = function unbind(el, binding, _v) {
  el.removeEventListener('onclick', clickCallback.bind(binding));
};

/* harmony default export */ __webpack_exports__["a"] = {
  name: 'iTrack',
  bind: directive,
  // updated: directive,
  // componentUpdated: directive,
  unbind: unbind
};

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRACK_URL; });
/* unused harmony export IN_WXSDK */
var TRACK_URL = '//stats1.jiuyan.info/onepiece/router.html';
var IN_WXSDK = '//www.in66.com/promo/commonapi/getweixinjssdkconfig';

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function __splitData(str, delimiter, decodeKey, decodeValue) {
  if (str.trim().length === 0) return {};
  var items = str.split(delimiter);
  var info = {};
  items.forEach(function (item) {
    var _item = item.trim();
    var _idx = _item.indexOf('=');
    if (_idx === -1) {
      info[decodeKey(_item)] = '';
    } else {
      info[decodeKey(_item.substr(0, _idx))] = decodeValue(_item.substr(_idx + 1));
    }
  });
  return info;
}

function __getValue() {
  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  for (var idx = 0; idx <= keys.length; idx++) {
    var key = keys[idx];
    var val = this.query[key] || this.cookie[key];
    if (val && val.trim().length > 0) {
      return val;
    }
  }
}

var common = {
  get weixin() {
    if (this._isWeixin === undefined) {
      this._isWeixin = /MicroMessenger/gi.test(this.ua);
    }
    return this._isWeixin;
  },

  get weibo() {
    if (this._isWeibo === undefined) {
      this._isWeibo = /Weibo/gi.test(this.ua);
    }
    return this._isWeibo;
  },

  // 查询请求
  get query() {
    return __splitData(location.search.substr(1), '&', function (key) {
      return key.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    }, decodeURIComponent);
  },

  get ua() {
    return window.navigator.userAgent.toLowerCase();
  },
  // 获取版本
  get version() {
    return __getValue.bind(this)('_v', '_version');
  },
  // 获取类型
  get source() {
    return __getValue.bind(this)('_s', '_source');
  },
  // 获取token
  get token() {
    return __getValue.bind(this)('_token', 'tg_auth');
  },

  // 查询cookie
  get cookie() {
    return __splitData(document.cookie, ';', function (key) {
      return key;
    }, unescape);
  },

  // 设置cookie
  set cookie(val) {
    var name = val.name,
        value = val.value,
        expiredays = val.expiredays;

    var exdate = new Date();
    var domian =  true ? 'in66.com' : '';
    exdate.setDate(exdate.getDate() + expiredays);
    var expireStr = expiredays == null ? '' : ';expires=' + exdate.toGMTString();
    document.cookie = name + '=' + escape(value) + ';domain=' + domian + ';path=/;' + expireStr;
    return __splitData.bind(this)(document.cookie, ';', function (key) {
      return key;
    }, decodeURIComponent);
  },
  /**
   * 判断是否为app内
   */
  get InApp() {
    return !this.weixin && !this.weibo && this.token != null && this.token.length > 0 && /^(ios|android)$/i.test(this.source) && /^[\d\\.]+$/.test(this.version);
  },

  initIn: function initIn() {
    if (this.InApp) {
      var expiredays = 30;
      var token = this.query['_token'];
      var source = this.query['_s'] || this.cookie['_source'];
      var version = this.query['_v'] || this.cookie['_version'];
      token && (this.cookie = {
        name: 'tg_auth',
        value: token,
        expiredays: expiredays
      }) && (this.cookie = {
        name: '_token',
        value: token,
        expiredays: expiredays
      });
      source && (this.cookie = {
        name: '_s',
        value: source,
        expiredays: expiredays
      });
      version && (this.cookie = {
        name: '_v',
        value: version,
        expiredays: expiredays
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = common;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iConfig__ = __webpack_require__(12);
/* harmony export (immutable) */ __webpack_exports__["a"] = track;


function track(seed) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var img = new Image();
  query.push('action=' + seed);
  img.src = '' + location.protocol + __WEBPACK_IMPORTED_MODULE_1_iConfig__["a" /* TRACK_URL */] + '?' + query.concat(['_host=' + location.host, '_token=' + __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].token, '_s=' + __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].source, '_v=' + __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].version, '_=' + +new Date()]).join('&');
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_iTrack__ = __webpack_require__(1);


__WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */].install = function (Vue) {
  Vue.directive(__WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */];

/***/ })

/******/ });