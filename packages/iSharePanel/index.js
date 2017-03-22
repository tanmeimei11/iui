import iSharePanel from './src/index.vue'


iSharePanel.install = function (Vue) {
  Vue.component(iSharePanel.name, iSharePanel)
}

export default iSharePanel
