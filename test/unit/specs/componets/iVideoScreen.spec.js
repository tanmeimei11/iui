import Vue from 'vue/dist/vue.js'
import iVideoScreen from 'i-ui/lib/iVideoScreen'

let template = require('i-ui/lib/iVideoScreen/README.md')
Vue.use(Vue => {
  Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
})
let vm = new Vue({
  components: {
    iVideoScreen
  },
  data: {},
  render: h => h(template)
}).$mount()

describe('iVideoScreen', () => {
  it('iVideoScreen组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.i-video-screen video').length).to.equal(1)
  })
})
