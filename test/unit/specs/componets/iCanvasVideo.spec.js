import Vue from 'vue/dist/vue.js'
import iCanvasVideo from 'i-ui/lib/iCanvasVideo'
console.log(iCanvasVideo)

const Ctor = Vue.extend(iCanvasVideo)
const vm = new Ctor().$mount()
const panelEl = vm.$el
console.log(panelEl)

describe('iCanvasVideo', () => {
  it('iCanvasVideo组件是否正常显示', () => {
    expect(panelEl.querySelectorAll('canvas').length).to.equal(1)
  })
})
