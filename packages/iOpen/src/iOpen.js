import common from 'i-ui/src/utils/common.js'
import './base.scss'
const clickCallback = function (e) {
    console.log(this.value)
  if (!common.isInApp) {
    common.openInApp(this.value)
  }
}

const directive = (el, binding, _v) => {
  el.addEventListener('click', clickCallback.bind(binding))
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('onclick', clickCallback.bind(binding))
}

export default {
  name: 'iOpen',
  bind: directive,
  // updated: directive,
  // componentUpdated: directive,
  unbind: unbind
}
