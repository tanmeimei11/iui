import common from 'i-ui/src/utils/common.js'
import './base.scss'

const directive = (el, binding, _v) => {
  el.removeEventListener('onclick', el.handle)
  el.handle = () => {
    if (!common.isInApp) {
      common.openInApp(binding.value)
    }
  }
  el.addEventListener('click', el.handle)
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('onclick', el.handle)
}

export default {
  name: 'iOpen',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
