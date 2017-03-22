import Vue from 'vue/dist/vue.js'
import iSharePanel from 'i-ui/lib/iSharePanel'

const Ctor = Vue.extend(iSharePanel)
const vm = new Ctor().$mount()
const panelEl = vm.$el
describe('iSharePanel', () => {
  it('iSharePanel组件是否正常显示', () => {
    expect(panelEl.querySelectorAll('.i-share-panel-line').length).to.equal(1)
  })
  it('iSharePanel组件是否弹出', done => {
    vm.show = true
    setTimeout(() => {
      Array.prototype.slice.apply(panelEl.classList).should.contain('show')
      done()
    })
  })
  it('iSharePanel组件是否点击有效', done => {
    vm.$on('invoke', type => {
      type.should.eq('wechat')
      done()
    })
    panelEl.querySelector('a[data-type="wechat"]').click()
  })
  it('iSharePanel组件正常渲染[types]属性', done => {
    vm.types = ['wechat']
    setTimeout(() => {
      expect(panelEl.querySelectorAll('a[data-type]').length).to.equal(1)
      done()
    })
  })
}) 
