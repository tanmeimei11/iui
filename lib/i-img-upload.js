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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

/***/ 10:
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

/***/ 14:
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

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
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

/***/ 29:
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

/******/ });