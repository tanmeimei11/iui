import IBarrage from './src/index.vue'

IBarrage.install = function (Vue) {
  Vue.component(IBarrage.name, IBarrage)
}

export default IBarrage
