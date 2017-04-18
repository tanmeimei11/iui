import iImgUpload from './src/index.vue'

iImgUpload.install = function (Vue) {
  Vue.component(iImgUpload.name, iImgUpload)
}

export default iImgUpload
