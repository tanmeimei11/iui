import Vue from 'vue/dist/vue.js'
import iAudio from 'i-ui/lib/iAudio'

let template = require('i-ui/lib/iAudio/README.md')
let vm = new Vue({
  components: {
    iAudio
  },
  data: {},
  render: h => h(template)
}).$mount()

describe('iAudio', () => {
  it('iAudio组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.i-audio audio').length).to.equal(1)
  })
})
