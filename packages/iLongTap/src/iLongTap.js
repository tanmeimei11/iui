import './base.scss'

const TRACK_HANDLE_KEY = `__iUI_TAP_HANDLE__`
let start = null
const directive = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
  el.removeEventListener('touchend', el[`${TRACK_HANDLE_KEY}`])
  el[`${TRACK_HANDLE_KEY}`] = e => {
    if (binding.modifiers.stop) { e.stopPropagation() }
    if (binding.modifiers.prevent) { e.preventDefault() }
    if (e.type === 'touchstart') {
      start = new Date().getTime()
    } else if (e.type === 'touchend') {
      if (new Date().getTime() - start > 300) {
        binding.value()
      }
    }
  }
  el.addEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
  el.addEventListener('touchend', el[`${TRACK_HANDLE_KEY}`])
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${TRACK_HANDLE_KEY}`])
  el.removeEventListener('touchend', el[`${TRACK_HANDLE_KEY}`])
}

export default {
  name: 'iLongTap',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
