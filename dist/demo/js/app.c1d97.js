webpackJsonp([0,2],[,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var o=n(11),i=r(o),a=n(13),u=r(a),c=n(14),s=r(c),l=n(15),d=r(l),f=n(12),v=r(f);t.routes=[{name:"home",path:"/",component:i.default},{name:"about",path:"/about",component:i.default},{name:"changeLog",path:"/changeLog",component:v.default},{name:"iAudio",path:"/iAudio",component:u.default,type:"components",icon:"add_alert",txt:"音乐自动播放"},{name:"iAvatar",path:"/iAvatar",component:s.default,type:"components",icon:"account_box",txt:"头像"},{name:"iTrack",path:"/iTrack",component:d.default,type:"directives",icon:"leak_add",txt:"埋点"}]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),l=r(s),d=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.setMaxListeners(500),e}return a(t,e),c(t,[{key:"sub",value:function(e,t){var n=this,r="undefined"==typeof e?"undefined":u(e);return"object"!==r&&"array"!==r?this.on(e,t):void e.forEach(function(e){return n.on.apply(n,e)})}},{key:"unsub",value:function(e,t){var n=this,r="undefined"==typeof e?"undefined":u(e);return"object"!==r&&"array"!==r?this.removeListener(e,t):void e.forEach(function(e){return n.removeListener.apply(n,e)})}},{key:"pub",value:function(){this.emit.apply(this,arguments)}}]),t}(l.default);t.default=new d},,function(e,t,n){n(34);var r=n(0)(n(49),n(26),null,null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(36),u=r(a),c=n(2);i.default.use(u.default);var s=new u.default({routes:c.routes});s.beforeEach(function(e,t,n){var r=document.body.scrollTop;if(r>0)var o=setInterval(function(){scrollTo(0,r),r-=100,r<=0&&(scrollTo(0,0),clearInterval(o))},20);n()}),t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=r(o),a=n(45),u=r(a),c=n(46),s=r(c),l=n(47),d=r(l),f=n(40),v=r(f),p=n(43),_=r(p);console.log(v.default);var m=function(e){Object.keys(_.default).forEach(function(t){e.directive(t,_.default[t])}),Object.keys(v.default).forEach(function(t){e.component(t,v.default[t])}),e.prototype.$iui={bridge:i.default,load:s.default,init:u.default,toast:d.default}};t.default=m},,function(e,t,n){n(31);var r=n(0)(n(50),n(22),null,null);e.exports=r.exports},function(e,t,n){n(32);var r=n(0)(n(51),n(23),"data-v-6a43a577",null);e.exports=r.exports},function(e,t,n){var r=n(0)(null,n(25),null,null);e.exports=r.exports},function(e,t,n){n(33);var r=n(0)(n(52),n(24),null,null);e.exports=r.exports},function(e,t,n){n(28);var r=n(0)(n(53),n(19),null,null);e.exports=r.exports},function(e,t,n){n(30);var r=n(0)(n(54),n(21),null,null);e.exports=r.exports},function(e,t,n){n(29);var r=n(0)(n(55),n(20),null,null);e.exports=r.exports},function(e,t,n){n(27);var r=n(0)(n(56),n(18),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"i-avatar",style:{"background-image":"url("+e.avatar+")"}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("iAvatar",{attrs:{src:"//inimg01.jiuyan.info/in/2015/12/06/50E0D236-8186-87D4-278E-184399C6B81D-1ndoVWb.jpg"}}),e._v(" "),n("code",[e._v('\n    <iAvatar src="//inimg01.jiuyan.info/in/2015/12/06/50E0D236-8186-87D4-278E-184399C6B81D-1ndoVWb.jpg"></iAvatar>\n  ')])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"i-audio",class:{on:e.isOn,off:!e.isOn},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.toggle(t)}}},[n("audio",{ref:"audio",attrs:{autoplay:e.autoplay,loop:e.loop,preload:e.preload,src:e.src}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("r-btn",{directives:[{name:"wave",rawName:"v-wave.light",modifiers:{light:!0}},{name:"iTrack",rawName:"v-iTrack",value:e.trackMessage,expression:"trackMessage"}],staticClass:"blue white-text",attrs:{large:""}},[e._v("click me")]),e._v(" "),n("code",[e._v('\n    <div v-iTrack="'+e._s(e.trackMessage)+'"></div>\n  ')])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",[n("router-link",{class:("about"==e.actived||"home"==e.actived)&&e.activeClass,attrs:{to:{path:"/about"}}},[n("r-icon",[e._v("face")]),e._v(" "),n("span",[e._v("关于")])],1)],1),e._v(" "),n("li",[n("router-link",{class:"changeLog"==e.actived&&e.activeClass,attrs:{to:{path:"/changeLog"}}},[n("r-icon",[e._v("face")]),e._v(" "),n("span",[e._v("更新日志")])],1)],1),e._v(" "),n("li",[n("div",[e._v("组件")]),e._v(" "),n("ul",e._l(e.components,function(t){return n("li",[n("router-link",{class:e.actived==t.name&&e.activeClass,attrs:{to:{path:"/"+t.name}}},[n("r-icon",[e._v(e._s(t.icon))]),e._v(" "),n("span",[e._v(e._s(t.txt))])],1)],1)}))]),e._v(" "),n("li",[n("div",[e._v("指令")]),e._v(" "),n("ul",e._l(e.directives,function(t){return n("li",[n("router-link",{class:e.actived==t.name&&e.activeClass,attrs:{to:{path:"/"+t.name}}},[n("r-icon",[e._v(e._s(t.icon))]),e._v(" "),n("span",[e._v(e._s(t.txt))])],1)],1)}))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",[n("a",{attrs:{href:"https://www.npmjs.com/package/i-ui",target:"_blank"}},[n("img",{attrs:{src:"//img.shields.io/npm/v/i-ui.svg",alt:"npm"}})]),e._v(" "),n("a",{attrs:{href:"LICENSE"}},[n("img",{attrs:{src:"//img.shields.io/badge/license-MIT-brightgreen.svg",alt:"Software License"}})]),e._v(" "),n("a",{attrs:{href:"http://badge.fury.io/js/i-ui"}},[n("img",{attrs:{src:"//badge.fury.io/js/i-ui.png",alt:"Software License"}})]),e._v(" "),n("br"),e._v(" "),n("a",{attrs:{href:"http://badge.fury.io/js/i-ui"}},[n("img",{attrs:{src:"//nodei.co/npm-dl/i-ui.png?months=1",alt:"NPM Download"}})])]),e._v(" "),n("h6",[e._v(" npm 安装 ")]),e._v(" "),n("code",[e._v("\n    $ npm install i-ui@version --save\n  ")]),e._v(" "),n("h6",[e._v(" 全局使用 ")]),e._v(" "),n("code",[e._v("\n    import Vue from 'vue'\n    import iui from 'i-ui'\n    Vue.use(iui)\n\n    export default {\n      name: 'app',\n      mounted(){\n        this.$iui.init()\n      }\n    }\n  ")]),e._v(" "),n("h6",[e._v(" 单组件使用 ")]),e._v(" "),n("code",[e._v("\n     import iAudio from 'i-ui/src/components/iAudio'\n     components: {\n       iAudio,\n       swiper,\n       swiperSlide\n     }\n  ")]),e._v(" "),n("h6",[e._v(" 如何更新组件库 ")]),e._v(" "),n("code",[e._v("\n    1. git clone git@githost.in66.cc:maifei/iui.git\n    2. Create your feature branch (git checkout -b my-new-feature)\n    3. Commit your changes (git commit -am 'Added some feature')\n    4. Push to the branch (git push origin my-new-feature)\n    5. wait merging\n  ")]),e._v(" "),n("h6",[e._v(" 运行组件库, 打包npm包 ")]),e._v(" "),n("code",[e._v("\n      运行开发组件库: npm run dev\n      打包npm: npm run build\n      打包线上demo: npm run build:demo\n      发布组件：npm run release\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("iAudio",{attrs:{autoplay:"",loop:"",src:"//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"}}),e._v(" "),n("code",[e._v('\n    <iAudio autoplay loop src="//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"></iAudio>\n  ')])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("section",{staticClass:"card-item default"},[n("r-card",{staticClass:"green accent-3"},[n("r-card-text",[n("p",[e._v(" version: 0.0.5 ")]),e._v(" "),n("p",[e._v(" improve directive iTrack, support query params")])])],1)],1),e._v(" "),n("section",{staticClass:"card-item default"},[n("r-card",{staticClass:"green accent-3"},[n("r-card-text",[n("p",[e._v(" version: 0.0.3 ")]),e._v(" "),n("p",[e._v("1. add directive iTrack ")]),e._v(" "),n("p",[e._v("2. add util common.js ")]),e._v(" "),n("p",[e._v("3. add util track.js ")])])],1)],1),e._v(" "),n("section",{staticClass:"card-item default"},[n("r-card",{staticClass:"green accent-3"},[n("r-card-text",[n("p",[e._v(" version: 0.0.2")]),e._v(" "),n("span",[e._v(" add componet iAudio ")])])],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("r-row",{staticClass:"wrapper-container"},[n("r-col",{staticClass:"wrapper-navigate",attrs:{xs2:""}},[n("Navigator")],1),e._v(" "),n("r-col",{attrs:{xs10:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"wrapper-content"})],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(16),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){for(var e={},t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){Object.keys(t).forEach(function(n){e[""+n]=t[n]})}),e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),a=r(i),u=n(39),c=r(u);t.default=o({iAudio:a.default,iAvatar:c.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TRACK_URL="//stats1.jiuyan.info/itugo_deleven.html"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(48),a=r(i),u=function(e,t,n){e.onclick=function(e){var n=[],r=t.value.trim();if(!r.length)return!0;var i=r.split("?"),u=o(i,2),c=u[0],s=u[1];s&&s.length&&(n=s.split("&")),(0,a.default)(c,n)}},c=function(e,t,n){e.removeAttribute("onclick")};t.default={bind:u,updated:u,componentUpdated:u,unbind:c}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(42),i=r(o);t.default={iTrack:i.default}},function(e,t,n){"use strict";function r(e,t,n,r){if(0===e.trim().length)return{};var o=e.split(t),i={};return o.forEach(function(e){var t=e.trim(),o=t.indexOf("=");o===-1?i[n(t)]="":i[n(t.substr(0,o))]=r(t.substr(o+1))}),i}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<=t.length;r++){var o=t[r],i=this.query[o]||this.cookie[o];if(i&&i.trim().length>0)return i}}Object.defineProperty(t,"__esModule",{value:!0});var i={get weixin(){return void 0===this._isWeixin&&(this._isWeixin=/MicroMessenger/gi.test(this.ua)),this._isWeixin},get weibo(){return void 0===this._isWeibo&&(this._isWeibo=/Weibo/gi.test(this.ua)),this._isWeibo},get query(){return r(location.search.substr(1),"&",function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},decodeURIComponent)},get ua(){return window.navigator.userAgent.toLowerCase()},get version(){return o.bind(this)("_v","_version")},get source(){return o.bind(this)("_s","_source")},get token(){return o.bind(this)("_token","tg_auth")},get cookie(){return r(document.cookie,";",function(e){return e},unescape)},set cookie(e){var t=e.name,n=e.value,o=e.expiredays,i=new Date,a="in66.com";i.setDate(i.getDate()+o);var u=null==o?"":";expires="+i.toGMTString();return document.cookie=t+"="+escape(n)+";domain="+a+";path=/;"+u,r.bind(this)(document.cookie,";",function(e){return e},decodeURIComponent)},get InApp(){return!this.weixin&&!this.weibo&&null!=this.token&&this.token.length>0&&/^(ios|android)$/i.test(this.source)&&/^[\d\\.]+$/.test(this.version)},initIn:function(){if(this.InApp){var e=30,t=this.query._token,n=this.query._s||this.cookie._source,r=this.query._v||this.cookie._version;t&&(this.cookie={name:"tg_auth",value:t,expiredays:e})&&(this.cookie={name:"_token",value:t,expiredays:e}),n&&(this.cookie={name:"_s",value:n,expiredays:e}),r&&(this.cookie={name:"_v",value:r,expiredays:e})}}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=function(e){return i.default.pub("body:click",e)};"undefined"!=typeof window.orientation?document.body.addEventListener("touchstart",e,!1):document.body.addEventListener("click",e,!1)};var o=n(3),i=r(o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"complete"===document.readyState?setTimeout(e,0):void document.addEventListener("DOMContentLoaded",e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"toast",value:function e(t){var e=document.createElement("div");return e.classList.add("toast"),e.classList.add("toast-"+t),document.body.appendChild(e),e}},{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,r=arguments[3],o=document.querySelector(".toast-"+t);o||(o=this.toast(t));var i=document.createElement("div");i.classList.add("toast-content"),i.innerHTML=e,o.appendChild(i),setTimeout(function(){return i.classList.add("toast-content-active")},10),setTimeout(function(){i.classList.add("toast-content-hide"),setTimeout(function(){i.remove(),r&&r()},300)},n)}}]),e}();t.default=new i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new Image;t.push("action="+e),n.src=""+location.protocol+u.TRACK_URL+"?"+t.concat(["_host="+location.host,"_token="+a.default.token,"_s="+a.default.source,"_v="+a.default.version,"_="+ +new Date]).join("&")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(44),a=r(i),u=n(41)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=r(o);t.default={name:"app",data:function(){return{loaded:!1,loadClass:"load"}},components:{Navigator:i.default},mounted:function(){var e=this;this.$rubik.init(),setTimeout(function(){e.loaded=!0},150)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default={name:"navigator",data:function(){var e={activeClass:"active",components:[],directives:[]};return r.routes.forEach(function(t){t.type&&e[""+t.type].push({name:t.name,icon:t.icon,txt:t.txt})}),e},computed:{actived:function(){return this.$route.name}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"about"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"i-audio"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"i-avatar"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"i-audio",data:function(){return{trackMessage:"example*test*track?a=b&c=d"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"iAudio",data:function(){return{isOn:!1}},props:{loop:Boolean,preload:Boolean,autoplay:Boolean,src:{type:String,required:!0}},mounted:function(){var e=this.$refs.audio;e.autoplay&&this.audioAutoPlay()},methods:{play:function(){this.isOn=!0,this.$refs.audio.play(),document.removeEventListener("touchstart",this.play,!1)},pause:function(){this.isOn=!1,this.$refs.audio.pause()},toggle:function(){this.isOn?this.pause():this.play()},audioAutoPlay:function(){var e=this;this.play(),document.addEventListener("WeixinJSBridgeReady",function(){e.play()},!1),document.addEventListener("YixinJSBridgeReady",function(){e.play()},!1),document.addEventListener("touchstart",this.play,!1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"iAvatar",props:{src:{type:String,required:!0}},computed:{avatar:function(){var e=document.createElement("a");return e.href=this.src,e.protocol=location.protocol,e.href}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(5),u=r(a),c=n(7),s=r(c),l=n(4),d=r(l),f=n(8),v=r(f);n(6),i.default.use(d.default),i.default.use(v.default),new i.default({el:"#app",router:s.default,render:function(e){return e(u.default)}})}],[57]);
//# sourceMappingURL=app.c1d97.js.map