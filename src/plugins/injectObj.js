/**
 * 注入方法
 * @param {Vue} Vue
 */
import toast from '../utils/toast'
import common from '../utils/common'
import share from '../utils/share'
import awake from '../utils/jsBridge'
import {
  trackParam
} from '../utils/track'

export default (Vue, opt) => {
  Object.defineProperties(Vue.prototype, {
    ...opt,
    $toast: {
      get () {
        return toast
      }
    },
    $track: {
      get () {
        return trackParam
      }
    },
    $awake: {
      get () {
        return awake
      }
    },
    $awakeIn: {
      get () {
        return (protocol) => {
          common.isInApp ? awake(protocol) : common.openInApp(protocol)
        }
      }
    },
    $share: {
      get () {
        return share.config
      },
      set (cfg) {
        share.config = cfg
      }
    },
    $common: {
      get () {
        return common
      }
    }
  })
}
