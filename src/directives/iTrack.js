import track from '../util/track'
const directive = (el, binding, v) => {
  el.onclick = (e) => {
    track(binding.value)
  }
}
const unbind = (el, binding, config) => {
  el.removeAttribute('onclick')
}

export default {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
