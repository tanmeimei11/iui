import iVideoScreen from './src/index.vue'

iVideoScreen.install = function (Vue) {
  Vue.component(iVideoScreen.name, iVideoScreen)
}

export default iVideoScreen
