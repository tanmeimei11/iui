import { trackParam } from 'i-ui/src/utils/track.js'
import './base.scss'
// let bindingValue = {}
const directive = (el, binding, _v) => {
  el.removeEventListener('click', el.handle)
  el.handle = () => {
    let search = binding.value.trim()
    trackParam(search)
  }
  el.addEventListener('click', el.handle)
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('onclick', el.handle)
}

export default {
  name: 'iTrack',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
