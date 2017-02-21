import Bridge from './util/bridge'
import Init from './util/init'
import Load from './util/load'
import Toast from './util/toast'
import Components from './components'
import Directives from './directives'
console.log(Components)
let iui = function (Vue) {
  Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key])
  })
  
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$iui = {
    bridge: Bridge,

    load: Load,

    init: Init,

    toast: Toast
  }
}

export default iui

