require('./style/rubik.min.css')
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Rubik from 'i-rubik'
Vue.use(Rubik)

import iui from '../src/index.js'
Vue.use(iui)

import configMixin from '../src/config'
configMixin(Vue, {IN_WXSDK: '123', OK: 234})

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
})
