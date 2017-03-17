import Vue from 'vue/dist/vue.js'
import iAudio from '../../../packages/iAudio'

let vm = new Vue({
    template: `
        <section>
          <iAudio autoplay loop src="//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"></iAudio>
        </section> 
    `,
    components: { iAudio  },
    data: {}
}).$mount()

describe('iAudio', () => {
    it('iAudio组件是否正常显示', () => {
        console.log('===========')
        console.log(vm.$el)
        expect(vm.$el.querySelectorAll('.i-audio audio').length).to.equal(1)
    })
})
