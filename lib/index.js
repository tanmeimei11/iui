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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_track_js__ = __webpack_require__(15);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      laneObj: undefined
    };
  },

  props: {
    list: {
      type: Array,
      default: []
    },
    lane: {
      type: Array,
      default: []
    },
    direction: {
      type: String,
      default: 'left'
    },
    runing: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    var rect = this.$el.getBoundingClientRect();
    this.$el.width = rect.width;
    this.$el.height = rect.height;
    this.ctx = this.$el.getContext('2d');
    this.storyBorad();
  },

  methods: {
    _clearCtx: function _clearCtx() {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height);
    },

    // 随机泳道
    _random: function _random() {
      this.laneObj.sort(function () {
        return Math.random() - 0.5;
      });
      var idx = Math.floor(Math.random() * Math.pow(10, 2)) * Date.now() % this.laneObj.length;
      return this.laneObj.splice(idx, 1)[0];
    },

    // 画字
    _drawfont: function _drawfont(item) {
      if (item.time <= 0 || item.offsetY === undefined) return;
      this.ctx.save();
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = this.direction;
      this.ctx.fillStyle = item.color;
      this.ctx.font = item.fontSize + ' ETrump-QiHei55';
      this.ctx.translate(item.x, 0);
      this.ctx.fillText(item.txt, 0, item.offsetY);
      this.ctx.restore();
    },

    // 方向
    __isLeft: function __isLeft() {
      return this.direction === 'left';
    },

    // 初始化
    _init: function _init(item) {
      if (item.time <= 0) return;
      if (this.laneObj === undefined) {
        this.laneObj = this.lane.map(function (v, idx) {
          return idx;
        });
      } else if (this.laneObj.length === 0) {
        return;
      }
      // 当销毁后判断泳道是否已经有人
      if (item.laneIdx !== undefined) {
        var idx = this.laneObj.indexOf(item.laneIdx);
        if (~idx) {
          this.laneObj.splice(idx, 1);
        }
      }
      if (item.offsetX === undefined) {
        item.offsetX = parseInt(Math.random() * (10 + 1));
      }
      if (item.offsetY === undefined) {
        item.laneIdx = this._random();
        item.offsetY = this.lane[item.laneIdx];
      }
    },

    // 改变坐标
    _changePos: function _changePos(item, idx) {
      if (item.offsetY === undefined) return;
      // 是否到头
      this.ctx.save();
      this.ctx.font = item.fontSize + ' ETrump-QiHei55';
      var needW = this.ctx.measureText(item.txt).width;
      this.ctx.restore();
      if (this.__isLeft()) {
        if (item.x == null) {
          item.x = this.$el.width + item.offsetX;
        }
        if (item.x < 0 && Math.abs(item.x) >= needW) {
          // 重新开始
          item.x = this.$el.width;
          item.time -= 1;
        }
        item.x = item.x - item.speed;
      } else {
        if (item.x == null) {
          item.x = 0 - item.offsetX;
        }
        if (item.x > this.$el.width + needW) {
          // 重新开始
          item.x = 0;
          item.time -= 1;
        }
        item.x = item.x + item.speed;
      }
      if (item.time === 0) {
        this.laneObj.push(item.laneIdx);
        item.offsetY = undefined;
        this.$emit('done', item, idx);
      }
    },
    _requestAnimationFrame: function _requestAnimationFrame(callback) {
      if (this._isDestroyed) return;
      if (/android|adr/gi.test(navigator.userAgent)) {
        setTimeout(callback, 1000 / 60);
      } else {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
          setTimeout(callback, 1000 / 60);
        })(callback);
      }
    },
    storyBorad: function storyBorad() {
      if (this.list.length && this.runing) {
        this._clearCtx();
        this.list.map(this._init);
        this.list.map(this._changePos);
        this.list.map(this._drawfont);
      }
      this._requestAnimationFrame(this.storyBorad);
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'iAudio',
  data: function data() {
    return {
      isOn: false
    };
  },

  props: {
    loop: Boolean,
    preload: Boolean,
    autoplay: Boolean,
    src: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    var audio = this.$refs.audio;
    if (audio.autoplay) {
      this.audioAutoPlay();
    }
  },

  methods: {
    play: function play() {
      this.isOn = true;
      this.$refs.audio.play();
      document.removeEventListener('touchstart', this.play, false);
      // console.log(audio.paused)
    },
    pause: function pause() {
      this.isOn = false;
      this.$refs.audio.pause();
    },
    toggle: function toggle() {
      if (this.isOn) {
        this.pause();
      } else {
        this.play();
      }
    },
    audioAutoPlay: function audioAutoPlay() {
      var _this = this;

      this.play();

      document.addEventListener('WeixinJSBridgeReady', function () {
        _this.play();
      }, false);

      document.addEventListener('YixinJSBridgeReady', function () {
        _this.play();
      }, false);

      document.addEventListener('touchstart', this.play, false);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'iAvatar',
  props: {
    src: { type: String, required: true }
  },
  computed: {
    avatar: function avatar() {
      // to fix url address protocol
      var anchor = document.createElement('a');
      anchor.href = this.src;
      anchor.protocol = location.protocol;
      return anchor.href;
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_exif_js__ = __webpack_require__(14);
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'iImgUpload',
  props: {
    maxWidth: {
      type: Number,
      default: Infinity
    },
    size: {
      type: String,
      default: 'cover'
    },
    analyze: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    /* 完成格式验证 */
    doneValidImg: function doneValidImg(file, fileType) {
      var _this = this;

      if (fileType === undefined) {
        event.target.value = '';
        return this.$emit('error', { code: 1 });
      } else if (this.analyze) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_exif_js__["a" /* readOrientation */])(file, fileType, function (orientation) {
          return _this.doneOrientation(file, fileType, orientation);
        });
      } else {
        return this.$emit('done', file);
      }
    },

    /* 完成角度验证 */
    doneOrientation: function doneOrientation(file, fileType, orientation) {
      var _this2 = this;

      var reader = new FileReader();
      reader.onload = function () {
        event.target.value = '';
        var base64 = reader.result.replace(/^.*?,/, '');
        var img = new Image();
        img.onload = function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_exif_js__["b" /* compressImg */])(img, orientation, _this2.maxWidth, function (canvas) {
            return _this2.doneAll(canvas);
          });
        };
        img.src = 'data:' + fileType + ';base64,' + base64;
      };
      reader.readAsDataURL(file);
    },

    /* 完成全部 */
    doneAll: function doneAll(canvas) {
      return this.$emit('done', canvas);
    },
    change: function change(event) {
      var _this3 = this;

      var file = event.target.files[0];
      if (file === undefined) return;
      this.$emit('progress');
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_i_ui_src_utils_exif_js__["c" /* vaildImgType */])(file.slice(0, 2), function (fileType) {
        return _this3.doneValidImg(file, fileType);
      });
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'i-roll-bar',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    // debounce: {
    //   type: Number,
    //   default: 1000
    // },
    rollIng: {
      type: Function,
      default: function _default() {}
    },
    showBar: {
      type: String
    }
  },
  mounted: function mounted() {
    this.lock = undefined;
    window.lib = window.lib || {};
    window.lib.flexible = window.lib.flexible || { dpr: 1 };
    window.lib.flexible.dpr = window.lib.flexible.dpr || 1;
    window.addEventListener('scroll', this.scrollHandler, false);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },

  methods: {
    scrollHandler: function scrollHandler(event) {
      var _this = this;

      if (this.$el === undefined) return;
      if (this.lock !== undefined) return;
      var elH = this.$el.clientHeight;
      var elOffset = this.$el.getBoundingClientRect();
      var screeH = window.screen.height * window.lib.flexible.dpr;
      var elBottomOffset = elOffset.top + elH;
      if (elBottomOffset < screeH + 50) {
        this.lock = 1;
        this.rollIng(function () {
          _this.lock = undefined;
        });
      }
    }
  },
  render: function render(h) {
    var data = {
      class: 'i-roll-bar ' + (this.showBar === undefined ? 'hiddenBar' : '')
    };
    return h(this.tag, data, this.$slots.default);
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRACK_URL; });
/* unused harmony export IN_WXSDK */
var TRACK_URL = '//stats1.jiuyan.info/onepiece/router.html';
var IN_WXSDK = '//www.in66.com/promo/commonapi/getweixinjssdkconfig';

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return readOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vaildImgType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compressImg; });
/**
 * http://blog.csdn.net/libins/article/details/50973498
 * http://blog.csdn.net/han_jiang_xue/article/details/8266207
 * http://www.360doc.com/content/17/0219/18/37253146_630338662.shtml
 * 默认角度
 * 0° =1
 * 顺时针90° =6
 * 逆时针90° =8
 * 180° =3
 */
var defaultOrientation = 1;
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L107
 */
var TiffTags = 0x0112;
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L534
 * @param {*} dataView
 * @param {*} dirStart
 * @param {*} littleEndian
 */
var readTagValue = function readTagValue(dataView, dirStart, littleEndian) {
  // 第一个  图像文件目录Image File Directory(IFD)
  var entries = dataView.getUint16(dirStart, littleEndian);
  var entryOffset;
  var i;
  for (i = 0; i < entries; i++) {
    // Directory Entry(DE)
    entryOffset = dirStart + i * 12 + 2;
    if (TiffTags === dataView.getUint16(entryOffset, littleEndian)) {
      // short, 16 bit int
      return dataView.getUint16(entryOffset + 8, littleEndian);
    }
  }
  return defaultOrientation;
};
/**
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L394
 * https://github.com/exif-js/exif-js/blob/master/exif.js#L651
 * @param {*} arrayBuf  reader.readAsArrayBuffer(file)
 */
var readExif = function readExif(arrayBuf) {
  var dataView = new DataView(arrayBuf);
  var offset = 2;
  var length = dataView.byteLength;
  while (offset < length) {
    // 判断是不是标记 0xFF+标记号(1个字节)+数据大小描述符(2个字节)+数据内容(n个字节)
    if (dataView.getUint8(offset) !== 0xFF) break;
    // Exif 使用APP1(0xFFE1)
    if (dataView.getUint8(offset + 1) === 0xE1) {
      offset = offset + 4;
      // Exif 数据开始于ASCII字符 "Exif" 和2个字节的0x00, 后面才是 Exif的数据
      // E = 0x45  |  x = 0x78 | i =0x69 | f =0x66
      if (dataView.getUint32(offset) !== (0x45000000 | 0x780000 | 0x6900 | 0x66)) {
        return defaultOrientation;
      }
      var littleEndian;
      offset = offset + 6;

      // TIFF格式中前8个字节是 TIFF 头. 其中最开始的前2个字节定义了 TIFF 数据的字节序.
      // 如果这个值是 0x4949="II"的话, 就表示按照 "Intel" 的字节序(Little Endian) 来排列数据.
      // 如果是 0x4d4d="MM",则说明按照 "Motorola" 的字节序(Big Endian)来排列数据

      // 随后的两个字节是一个2字节长度的固定值 0x002A. ,
      // getUint16 第二个参数  如果为 false 或未定义，则应读取一个 big-endian 值，否则应读取一个 little-endian 值。
      // 如果数据使用 Intel 字节序, 则这两个 字节的数据排列为"0x2a,0x00".
      // 如果是 Motorola 的, 则是 "0x00,0x2a"
      if (dataView.getUint16(offset) === 0x4949 && dataView.getUint16(offset + 2, true) === 0x2A00) {
        littleEndian = true;
      } else if (dataView.getUint16(offset) === 0x4D4D && dataView.getUint16(offset + 2) === 0x002A) {
        littleEndian = false;
      } else {
        return defaultOrientation;
      }
      var firstIFDOffset = dataView.getUint32(offset + 4, littleEndian);
      // TIFF头的最后的 4个字节是到第一个IFD 偏移量的值是 '0x00000008'.
      if (firstIFDOffset < 0x00000008) {
        return defaultOrientation;
      }
      return readTagValue(dataView, offset + firstIFDOffset, littleEndian);
    } else {
      offset += 2 + dataView.getUint16(offset + 2);
    }
  }
  return defaultOrientation;
};

/**
 * 获取角度 (仅存在于jpg)
 * @param {File} file 文件对象
 * @param {String} fileType 文件类型
 * @param {function} done 返回角度
 */
var readOrientation = function readOrientation(file, fileType, done) {
  // if (fileType !== 'jpg') return done(1)
  var reader = new FileReader();
  reader.onload = function () {
    return done(readExif(reader.result));
  };
  reader.readAsArrayBuffer(file);
};

/**
 * 验证文件类型
 * @param {File} blob 文件对象
 * @param {function} done 返回格式
 */
var vaildImgType = function vaildImgType(blob, done) {
  var reader = new FileReader();
  reader.onload = function () {
    var buf = new DataView(reader.result);
    done(buf.byteLength > 1 ? {
      'ffd8': 'jpg',
      '8950': 'png',
      '4749': 'gif',
      '424d': 'bmp'
    }['' + buf.getUint16(0).toString(16)] : undefined);
  };
  reader.readAsArrayBuffer(blob);
};

/**
 * 压缩并且摆正图片
 * @param {Img} img
 * @param {Int} orientation
 * @param {Int} maxWidth
 * @param {function} done
 */
var compressImg = function compressImg(img, orientation, maxWidth, done) {
  // 1:0,3:180,6:90,8:270
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var imgRotation = {
    '1': 0,
    '3': Math.PI,
    '6': Math.PI * 0.5,
    '8': Math.PI * 1.5
  }[orientation] || 0;
  var dw;
  var dh;
  var ratio = 1;
  if (~[6, 8].indexOf(orientation)) {
    canvas.width = Math.min(maxWidth, img.naturalHeight);
    ratio = canvas.width / img.naturalHeight;
    canvas.height = img.naturalWidth * ratio;
    dw = canvas.height;
    dh = canvas.width;
  } else {
    canvas.width = Math.min(maxWidth, img.naturalWidth);
    ratio = canvas.width / img.naturalWidth;
    canvas.height = img.naturalHeight * ratio;
    dw = canvas.width;
    dh = canvas.height;
  }
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(imgRotation);
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, -1 * dw / 2, -1 * dh / 2, dw, dh);
  done(canvas);
};

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "i-avatar",
    style: ({
      'background-image': ("url(" + _vm.avatar + ")")
    })
  })
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "i-audio",
    class: {
      on: _vm.isOn, off: !_vm.isOn
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.toggle($event)
      }
    }
  }, [_c('audio', {
    ref: "audio",
    attrs: {
      "autoplay": _vm.autoplay,
      "loop": _vm.loop,
      "preload": _vm.preload,
      "src": _vm.src
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "i-img-upload",
    class: _vm.size,
    attrs: {
      "accept": "image/jpeg,image/jpg,image/png",
      "type": "file"
    },
    on: {
      "change": _vm.change
    }
  })
},staticRenderFns: []}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    staticClass: "i-barrage"
  })
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_iRollBar_vue___default.a;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_iTrack__ = __webpack_require__(1);


__WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */].install = function (Vue) {
  Vue.directive(__WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__src_iTrack__["a" /* default */];

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_iAudio__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packages_iAvatar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packages_IBarrage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packages_iImgUpload__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packages_iRollBar__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packages_iTrack__ = __webpack_require__(29);

/* Automatic generated by './scripts/build-entry.js' */








var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) return;

  Vue.component(__WEBPACK_IMPORTED_MODULE_0__packages_iAudio__["default"].name, __WEBPACK_IMPORTED_MODULE_0__packages_iAudio__["default"]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__packages_iAvatar__["default"].name, __WEBPACK_IMPORTED_MODULE_1__packages_iAvatar__["default"]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__packages_IBarrage__["default"].name, __WEBPACK_IMPORTED_MODULE_2__packages_IBarrage__["default"]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__packages_iImgUpload__["default"].name, __WEBPACK_IMPORTED_MODULE_3__packages_iImgUpload__["default"]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_4__packages_iRollBar__["default"].name, __WEBPACK_IMPORTED_MODULE_4__packages_iRollBar__["default"]);
  Vue.directive(__WEBPACK_IMPORTED_MODULE_5__packages_iTrack__["default"].name, __WEBPACK_IMPORTED_MODULE_5__packages_iTrack__["default"]);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.1.3',
  install: install,
  iAudio: __WEBPACK_IMPORTED_MODULE_0__packages_iAudio__["default"],
  iAvatar: __WEBPACK_IMPORTED_MODULE_1__packages_iAvatar__["default"],
  IBarrage: __WEBPACK_IMPORTED_MODULE_2__packages_IBarrage__["default"],
  iImgUpload: __WEBPACK_IMPORTED_MODULE_3__packages_iImgUpload__["default"],
  iRollBar: __WEBPACK_IMPORTED_MODULE_4__packages_iRollBar__["default"],
  iTrack: __WEBPACK_IMPORTED_MODULE_5__packages_iTrack__["default"]
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
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

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ })
/******/ ]);