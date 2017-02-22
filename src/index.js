import Bus from './util/bus'
import Init from './util/init'
import Load from './util/load'
import Toast from './util/toast'
import Components from './components'
import Directives from './directives'
let iui = function (Vue) {
  Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key])
  })
  
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$iui = {
    bus: Bus,

    load: Load,

    init: Init,

    toast: Toast
  }
}

export default iui

