import { trackParam } from 'i-ui/src/utils/track.js'
import './base.scss'
// 设置默认基本参数

const TRACK_HANDLE_KEY = `__iUI_TRACK_HANDLE__`
const directive = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
  el[`${TRACK_HANDLE_KEY}`] = () => {
    let search = binding.value.trim()
    trackParam(search)
  }
  el.addEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
}

export default {
  name: 'iTrack',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
