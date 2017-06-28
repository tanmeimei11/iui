import iLoading from './src/index.vue'
iLoading.install = function (Vue) {
  Vue.component(iLoading.name, iLoading)
}

export default iLoading
