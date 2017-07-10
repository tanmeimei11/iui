import iUpdate from './src/index.vue'

iUpdate.install = function (Vue) {
  Vue.component(iUpdate.name, iUpdate)
}

export default iUpdate
