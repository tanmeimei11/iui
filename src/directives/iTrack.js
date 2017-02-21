import track from '../util/track'
const directive = (el, binding, v) => {
  el.onclick = (e) => {
    let items = []
    let search = binding.value.trim() 
    if (!search.length) return true
    let [seed, query] = search.split('?')
    if (query.length) { 
      items = query.split('&')
    }
    track(seed, items)
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
