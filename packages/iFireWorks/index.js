import iFireWorks from './src/index.vue'

iFireWorks.install = function (Vue) {
  Vue.component(iFireWorks.name, iFireWorks)
}

export default iFireWorks
