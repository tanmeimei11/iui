import * as inConfig from './config.in'
export default function configMixin (Vue, config = {}) {
  Vue.mixin({
    created: function () {
      this.$config = Object.assign({}, inConfig, config)
    }
  })
}
