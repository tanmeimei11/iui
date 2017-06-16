import iLongTap from './src/iLongTap'

iLongTap.install = function (Vue) {
  Vue.directive(iLongTap.name, iLongTap)
}

export default iLongTap
