import Vue from 'vue/dist/vue.js'
import iImgCut from 'i-ui/lib/iImgCut/src/index.vue'

const Ctor = Vue.extend({
  components: {
    iImgCut
  },
  props: ['fillStyle', 'src'],
  template: ' <iImgCut class="info" :src="src" :fillStyle="fillStyle"></iImgCut>'
})
const vm = new Ctor({
  propsData: {
    fillStyle: '#000',
    src: 'http://inimg02.jiuyan.info/in/2017/03/24/5F838417-1DDA-CE2A-14A6-7A0D0247301C-1wGMzYZ.jpg'
  }
}).$mount()
describe('iImgCut', () => {
  it('iImgCut组件是否正常显示', () => {
    expect(vm.$children[0]).to.not.equal(undefined)
  })
})
 
