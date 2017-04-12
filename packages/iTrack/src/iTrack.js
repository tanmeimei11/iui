import { trackParam } from 'i-ui/src/utils/track.js'
import './base.scss'
// let bindingValue = {}
let clickCallback = function (e) {
  (this.handle || (() => {}))()
}
const directive = (el, binding, _v) => {
  el.handle = () => {
    let search = binding.value.trim()
    trackParam(search)
  }
  el.addEventListener('click', clickCallback.bind(el))
}

const updated = (el, binding, _v) => { 
  el.handle = () => {
    let search = binding.value.trim()
    trackParam(search)
  }
}

const unbind = (el, binding, _v) => {
  el.handle = () => {}
  el.removeEventListener('onclick', clickCallback.bind(el))
}

export default {
  name: 'iTrack',
  bind: directive,
  updated: updated,
  componentUpdated: updated,
  unbind: unbind
}
