import common from 'i-ui/src/utils/common.js'
import './base.scss'
const clickCallback = function (e) {
  if (!common.isInApp) {
    (this.handle || (() => {}))()
  }
}

const directive = (el, binding, _v) => {
  el.handle = () => {
    common.openInApp(binding.value)
  }
  el.addEventListener('click', clickCallback.bind(el))
}

const updated = (el, binding, _v) => { 
  el.handle = () => {
    common.openInApp(binding.value)
  }
}

const unbind = (el, binding, _v) => {
  el.handle = () => {}
  el.removeEventListener('onclick', clickCallback.bind(el))
}

export default {
  name: 'iOpen',
  bind: directive,
  updated: updated,
  componentUpdated: updated,
  unbind: unbind
}
