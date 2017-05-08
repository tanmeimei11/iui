import {
  BgimgError
} from 'i-ui/src/utils/errors.js'

// inject common
window.lib = window.lib || {}
window.lib.flexible = window.lib.flexible || {
  dpr: 1
}
window.lib.flexible.dpr = window.lib.flexible.dpr || 1

const fixProtocol = (url) => {
  // to fix url address protocol
  let anchor = document.createElement('a')
  anchor.href = url
  anchor.protocol = location.protocol
  return anchor.href
}

const bindLazyLoad = (el) => {
  el.lazyload = (event) => {
    let elOffset = el.getBoundingClientRect()
    let screeH = window.screen.height * window.lib.flexible.dpr
    let elBottomOffset = elOffset.top
    if (elBottomOffset < screeH && typeof (el.lazyloaded) === 'function') {
      el.lazyloaded()
      window.removeEventListener('scroll', el.lazyload)
    }
  }
  window.addEventListener('scroll', el.lazyload)
}

const directive = (el, binding, _v) => {
  if (binding.modifiers.cover && binding.modifiers.contain) throw new BgimgError()
  if (binding.modifiers.lazyload) {
    if (!el.lazyload) bindLazyLoad(el)
    if (typeof (el.lazyloaded) === 'boolean') {
      el.style.backgroundImage = `url("${fixProtocol(binding.value)}")`
    } else {
      el.lazyloaded = () => {
        el.style.backgroundImage = `url("${fixProtocol(binding.value)}")`
        el.lazyloaded = true
      }
    }
  } else {
    el.style.backgroundImage = `url("${fixProtocol(binding.value)}")`
  }
  if (binding.modifiers.contain) {
    el.style.backgroundSize = 'contain'
  } else if (binding.modifiers.cover) {
    el.style.backgroundSize = 'cover'
  }
}

const inserted = (el, binding, _v) => {
  if (binding.modifiers.lazyload) {
    el.lazyload()
  }
}

const unbind = (el, binding, _v) => {
  window.removeEventListener('scroll', el.lazyload)
  el.style.backgroundImage = ''
  el.style.backgroundSize = ''
}

export default {
  name: 'iBgImg',
  bind: directive,
  inserted: inserted,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
