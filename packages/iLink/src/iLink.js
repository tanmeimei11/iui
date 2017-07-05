import awake from 'i-ui/src/utils/jsBridge'
import common from 'i-ui/src/utils/common'
import { tag } from 'i-ui/src/protocols/TagProtocol'
import './base.scss'

const LINK_HANDLE_KEY = `__iUI_LINK_HANDLE__`

const directive = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${LINK_HANDLE_KEY}`])
  el[`${LINK_HANDLE_KEY}`] = () => {
    if (binding.modifiers.protocol) {
      awake(tag(binding.value).protocol)
    } else if (binding.modifiers.href) {
      location.href = tag(binding.value).link 
    } else {
      if (common.isInApp) {
        awake(tag(binding.value).protocol)
      } else {
        location.href = tag(binding.value).link 
      } 
    }

  }
  el.addEventListener('touchstart', el[`${LINK_HANDLE_KEY}`])
}

const unbind = (el, binding, _v) => {
  el.removeEventListener('touchstart', el[`${LINK_HANDLE_KEY}`])
}

export default {
  name: 'iLink',
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}
