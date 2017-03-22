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
Vue.use(Router) 
Vue.use(iView)
const router = new Router({
  routes
})

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
})
