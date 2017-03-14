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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 2:
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

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    staticClass: "i-barrage"
  })
},staticRenderFns: []}

/***/ }),

/***/ 24:
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

/***/ 7:
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

/***/ })

/******/ });