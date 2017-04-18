import Vue from 'vue/dist/vue.js'
import iBgImg from 'i-ui/lib/iBgImg/src/iBgImg.js'

const Ctor = Vue.extend({
  directives: {
    iBgImg
  },
  data () {
    return {
      coverUrl: 'http://inimg01.jiuyan.info/in/2017/04/14/8C5FF0BE-24B3-4F69-C941-0A781ABBCE95.jpg'
    }
  },
  template: '<div class="sample" v-iBgImg="coverUrl"></div>'
})
const vm = new Ctor().$mount()
const parentEl = vm.$el 
describe('iBgImg', () => {
  it('iBgImg组件是否正常显示', () => {
    expect(parentEl.style.backgroundImage).to.contain(`${vm.coverUrl.replace(/https?:/, location.protocol)}`)
  })
  it('iBgImg组件动态更新数据', (done) => {
    vm.coverUrl = `http://inimg01.jiuyan.info/in/2015/12/06/50E0D236-8186-87D4-278E-184399C6B81D-1ndoVWb.jpg`
    setTimeout(() => {
      expect(parentEl.style.backgroundImage).to.contain(`${vm.coverUrl.replace(/https?:/, location.protocol)}`)
      done()
    })  
  })
  it('iBgImg组件cover属性', () => {
    const CoverCtor = Vue.extend({
      directives: {
        iBgImg
      },
      data () {
        return {
          coverUrl: 'http://inimg01.jiuyan.info/in/2017/04/14/8C5FF0BE-24B3-4F69-C941-0A781ABBCE95.jpg'
        }
      },
      template: '<div class="sample" v-iBgImg.cover="coverUrl"></div>'
    })
    expect(new CoverCtor().$mount().$el.style.backgroundSize).to.equal(`cover`)
  })
  it('iBgImg组件contain属性', () => {
    const ContainCtor = Vue.extend({
      directives: {
        iBgImg
      },
      data () {
        return {
          coverUrl: 'http://inimg01.jiuyan.info/in/2017/04/14/8C5FF0BE-24B3-4F69-C941-0A781ABBCE95.jpg'
        }
      },
      template: '<div class="sample" v-iBgImg.contain="coverUrl"></div>'
    })
    expect(new ContainCtor().$mount().$el.style.backgroundSize).to.equal(`contain`)
  })
})
