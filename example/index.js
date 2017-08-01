import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './routes'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// https://highlightjs.org/  import 'highlight.js/styles/[styleName].css'
import 'highlight.js/styles/solarized-light.css'
import './scss/markdown.scss'
import 'core-js/library/es6/promise'

import injectObj from 'i-ui/src/plugins/injectObj'

const router = new Router({
  routes
})

Vue.use(Router)
Vue.use(iView)
Vue.use(injectObj)
new Vue({ // eslint-disable-line
  router,
  track: 'enter',
  share: {
    shareTitle: 'shareTitle', // 分享标题
    shareDesc: 'shareDesc', // 分享描述
    shareLink: location.protocol + `//${location.host}/inpromo/2017/{{ name }}/index.html?_ig=share`,
    shareImg: location.protocol + '//inimg02.jiuyan.info/in/2017/02/27/307746C7-A0AC-4D21-4D92-B480A77ADFA2.jpg',
    shareTrack: 'share'
  },
  render: h => h(App)
}).$mount('#app')
