import {
  default as toastCall
} from '../utils/toast'
import {
  default as awakeCall
} from '../utils/jsBridge'
import {
  default as shareConfig
} from '../utils/share'
import icommon from '../utils/common'
import {
  trackParam
} from '../utils/track'

/**
 * 提示
 */
export const toast = {
  created: function () {
    this.$utils = this.$utils || {}
    this.$utils.toast = toastCall
  }
}

/**
 * 唤醒协议
 */
export const awake = {
  created: function () {
    this.$utils = this.$utils || {}
    this.$utils.awake = awakeCall
  }
}

/**
 * 埋点
 */
export const track = {
  created: function () {
    this.$utils = this.$utils || {}
    this.$utils.track = trackParam
  }
}

/**
 * 判断是否为inapp
 */
export const inApp = {
  created: function () {
    this.$utils = this.$utils || {}
    this.$utils.inApp = icommon.InApp
  }
}

/**
 * 配置分享
 */
export const share = {
  created: function () {
    this.$utils = this.$utils || {}
    this.$utils.share = shareConfig.config
  }
}
