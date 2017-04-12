import { trackParam } from 'i-ui/src/utils/track.js'
import './base.scss'
const clickCallback = function (e) {
  let search = this.value.trim()
  trackParam(search)
}

const directive = (el, binding, _v) => {
  el.addEventListener('click', clickCallback.bind(binding))
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('onclick', clickCallback.bind(binding))
}

export default {
  name: 'iTrack',
  bind: directive,
  // updated: directive,
  // componentUpdated: directive,
  unbind: unbind
}
