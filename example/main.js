require('./style/rubik.min.css')
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Rubik from 'i-rubik'
Vue.use(Rubik)

// import iui from '../src/index.js'
// Vue.use(iui)
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
})
