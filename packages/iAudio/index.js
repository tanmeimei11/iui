import iAudio from './src/index.vue'

iAudio.install = function (Vue) {
  Vue.component(iAudio.name, iAudio)
}

export default iAudio
