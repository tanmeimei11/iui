import track from '../util/track'

const clickCallback = function (e) {
  let items = []
  let search = this.value.trim() 
  console.log(search)
  if (!search.length) return true
  let [seed, query] = search.split('?')
  if (query && query.length) { 
    items = query.split('&')
  }
  track(seed, items)
}

const directive = (el, binding, _v) => {
  el.addEventListener('click', clickCallback.bind(binding)) 
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('onclick', clickCallback.bind(binding))
}

export default {
  bind: directive,
  // updated: directive,
  // componentUpdated: directive,
  unbind: unbind
}
