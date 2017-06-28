import Vue from 'vue/dist/vue.js'
import iLoading from 'i-ui/lib/iLoading'

const Ctor = Vue.extend(iLoading)
const vm = new Ctor().$mount()
const panelEl = vm.$el
describe('iLoading', () => {
  it('iLoading组件是否正常显示', () => {
    expect(panelEl.querySelectorAll('.i-loading-svg').length).to.equal(1)
  })
}) 
