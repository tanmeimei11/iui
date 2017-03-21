import iOpen from './src/iOpen'

iOpen.install = function (Vue) {
  Vue.directive(iOpen.name, iOpen)
}

export default iOpen
