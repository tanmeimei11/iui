import imagesBox from './src/index.vue'

imagesBox.install = function (Vue) {
  Vue.component(imagesBox.name, imagesBox)
}

export default imagesBox
