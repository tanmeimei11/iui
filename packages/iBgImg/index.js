import iBgImg from './src/iBgImg.js'
import './src/base.scss'
iBgImg.install = function (Vue) {
  Vue.directive(iBgImg.name, iBgImg)
}

export default iBgImg
