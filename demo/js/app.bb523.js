webpackJsonp([1,2],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iAudio_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iAudio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__iAudio_vue__);


/* harmony default export */ __webpack_exports__["a"] = {
  iAudio: __WEBPACK_IMPORTED_MODULE_0__iAudio_vue___default.a
};

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iAudio__ = __webpack_require__(116);



function init() {
  var com = {};

  for (var _len = arguments.length, components = Array(_len), _key = 0; _key < _len; _key++) {
    components[_key] = arguments[_key];
  }

  components.forEach(function (c) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(c).forEach(function (key) {
      com['' + key] = c[key];
    });
  });

  return com;
}

/* harmony default export */ __webpack_exports__["a"] = init(__WEBPACK_IMPORTED_MODULE_1__iAudio__["a" /* default */]);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bridge__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = function () {
  var click = function click(e) {
    return __WEBPACK_IMPORTED_MODULE_0__bridge__["a" /* default */].pub('body:click', e);
  };

  if (typeof window.orientation !== 'undefined') {
    document.body.addEventListener('touchstart', click, false);
  } else {
    document.body.addEventListener('click', click, false);
  }
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (cb) {
  if (document.readyState === 'complete') {
    return setTimeout(cb, 0);
  }

  document.addEventListener('DOMContentLoaded', cb);
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Toast = function () {
  function Toast() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Toast);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Toast, [{
    key: 'toast',
    value: function toast(position) {
      var toast = document.createElement('div');

      toast.classList.add('toast');
      toast.classList.add('toast-' + position);

      document.body.appendChild(toast);

      return toast;
    }
  }, {
    key: 'fire',
    value: function fire(msg) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bottom';
      var countdown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      var fn = arguments[3];

      var toast = document.querySelector('.toast-' + position);

      if (!toast) {
        toast = this.toast(position);
      }

      var content = document.createElement('div');
      content.classList.add('toast-content');
      content.innerHTML = msg;

      toast.appendChild(content);
      setTimeout(function () {
        return content.classList.add('toast-content-active');
      }, 10);

      setTimeout(function () {
        content.classList.add('toast-content-hide');

        setTimeout(function () {
          content.remove();
          fn && fn();
        }, 300);
      }, countdown);
    }
  }]);

  return Toast;
}();

/* harmony default export */ __webpack_exports__["a"] = new Toast();

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigator_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navigator_vue__);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app',
  data: function data() {
    return {
      loaded: false,
      loadClass: 'load'
    };
  },

  components: {
    Navigator: __WEBPACK_IMPORTED_MODULE_0__components_Navigator_vue___default.a
  },
  mounted: function mounted() {
    var _this = this;

    this.$rubik.init();
    setTimeout(function () {
      _this.loaded = true;
    }, 150);
  }
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'navigator',
  data: function data() {
    return {
      activeClass: 'active',
      components: [{
        name: 'iAudio',
        icon: 'add_alert',
        txt: '音乐自动播放'
      }]
    };
  },

  computed: {
    active: function active() {
      return this.$route.name;
    }
  }
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'about'
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'i-audio',
  data: function data() {
    return {};
  }
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


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
    src: { type: String, required: true }
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_i_rubik__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_i_rubik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_i_rubik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_index_js__ = __webpack_require__(52);
__webpack_require__(51)




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_i_rubik___default.a)


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__src_index_js__["a" /* default */])
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
})


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_events__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_events__);








var Bridge = function (_EventEmitter) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Bridge, _EventEmitter);

  function Bridge() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Bridge);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Bridge.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Bridge)).call(this));

    _this.setMaxListeners(500);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Bridge, [{
    key: 'sub',
    value: function sub(event, cb) {
      var _this2 = this;

      var type = typeof event === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(event);

      if (type !== 'object' && type !== 'array') {
        return this.on(event, cb);
      }

      event.forEach(function (i) {
        return _this2.on.apply(_this2, i);
      });
    }
  }, {
    key: 'unsub',
    value: function unsub(event, cb) {
      var _this3 = this;

      var type = typeof event === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(event);

      if (type !== 'object' && type !== 'array') {
        return this.removeListener(event, cb);
      }

      event.forEach(function (i) {
        return _this3.removeListener.apply(_this3, i);
      });
    }
  }, {
    key: 'pub',
    value: function pub() {
      this.emit.apply(this, arguments);
    }
  }]);

  return Bridge;
}(__WEBPACK_IMPORTED_MODULE_6_events___default.a);

/* harmony default export */ __webpack_exports__["a"] = new Bridge();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_About_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_About_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_About_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_iAudio_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_iAudio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_iAudio_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a)

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  routes:[
    { name: 'home', path: '/', component: __WEBPACK_IMPORTED_MODULE_2__views_About_vue___default.a},
    { name: 'about', path: '/about', component: __WEBPACK_IMPORTED_MODULE_2__views_About_vue___default.a},
    { name: 'iAudio', path: '/iAudio', component: __WEBPACK_IMPORTED_MODULE_3__views_iAudio_vue___default.a}
  ]
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if(top > 0){
    const timer = setInterval(()=>{
      scrollTo(0, top)
      top -= 100
      if(top <= 0){
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

/* harmony default export */ __webpack_exports__["a"] = router;


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(67)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_bridge__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_init__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_load__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_toast__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__(118);

__webpack_require__(68);






var iUi = function iUi(Vue) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_6__directives__["a" /* default */]).forEach(function (key) {
    Vue.directive(key, __WEBPACK_IMPORTED_MODULE_6__directives__["a" /* default */][key]);
  });

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_5__components__["a" /* default */]).forEach(function (key) {
    Vue.component(key, __WEBPACK_IMPORTED_MODULE_5__components__["a" /* default */][key]);
  });

  Vue.prototype.$iUi = {
    bridge: __WEBPACK_IMPORTED_MODULE_1__util_bridge__["a" /* default */],

    load: __WEBPACK_IMPORTED_MODULE_3__util_load__["a" /* default */],

    init: __WEBPACK_IMPORTED_MODULE_2__util_init__["a" /* default */],

    toast: __WEBPACK_IMPORTED_MODULE_4__util_toast__["a" /* default */]
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(iUi);
}

/* harmony default export */ __webpack_exports__["a"] = iUi;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(64)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  "data-v-6a43a577",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(66)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 58:
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

/***/ 59:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', [_c('ul', [_c('li', [_c('router-link', {
    class: _vm.active == 'about' || 'home' && _vm.activeClass,
    attrs: {
      "to": {
        path: '/about'
      }
    }
  }, [_c('r-icon', [_vm._v("face")]), _vm._v(" "), _c('span', [_vm._v("关于")])], 1)], 1), _vm._v(" "), _c('li', [_c('div', [_vm._v("组件")]), _vm._v(" "), _c('ul', _vm._l((_vm.components), function(item) {
    return _c('li', [_c('router-link', {
      class: _vm.active == item.name && _vm.activeClass,
      attrs: {
        "to": {
          path: '/' + item.name
        }
      }
    }, [_c('r-icon', [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.txt))])], 1)], 1)
  }))])])])
},staticRenderFns: []}

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', [_c('h1', [_vm._v("关于 iUi")])])
}]}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', [_c('iAudio', {
    attrs: {
      "autoplay": "",
      "loop": "",
      "src": "//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"
    }
  }), _vm._v(" "), _c('code', [_vm._v("\n    <iAudio autoplay loop src=\"//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3\"></iAudio>\n  ")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper",
    attrs: {
      "id": "app"
    }
  }, [_c('r-row', {
    staticClass: "wrapper-container"
  }, [_c('r-col', {
    staticClass: "wrapper-navigate",
    attrs: {
      "xs2": ""
    }
  }, [_c('Navigator')], 1), _vm._v(" "), _c('r-col', {
    attrs: {
      "xs10": ""
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    staticClass: "wrapper-content"
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[127]);
//# sourceMappingURL=app.bb523.js.map