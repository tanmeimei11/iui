import iAvatar from './src/index.vue'

iAvatar.install = function (Vue) {
  Vue.component(iAvatar.name, iAvatar)
}

export default iAvatar
