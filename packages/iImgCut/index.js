import iImgCut from './src/index.vue'
import './src/base.scss'
iImgCut.install = function (Vue) {
  Vue.component(iImgCut.name, iImgCut)
}

export default iImgCut
