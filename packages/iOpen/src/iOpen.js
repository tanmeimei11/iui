import common from 'i-ui/src/utils/common.js'
import './base.scss'

const OPEN_HANDLE_KEY = `__iUI_OPEN_HANDLE__`

const directive = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${OPEN_HANDLE_KEY}`])
  el[`${OPEN_HANDLE_KEY}`] = () => {
    if (!common.isInApp) {
      common.openInApp(binding.value)
    }
  }
  el.addEventListener('touchstart', el[`${OPEN_HANDLE_KEY}`])
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${OPEN_HANDLE_KEY}`])
}

export default {
  name: 'iOpen',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
