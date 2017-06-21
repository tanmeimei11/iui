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
    this.$toast = toastCall
  }
}

/**
 * 唤醒协议
 */
export const awake = {
  created: function () {
    this.$awake = awakeCall
  }
}

/**
 * 埋点
 */
export const track = {
  created: function () {
    this.$track = trackParam
  }
}

/**
 * common 内置 
 */
export const common = {
  created: function () {
    this.$common = icommon
  }
}

/**
 * 配置分享
 */
export const share = {
  created: function () {
    this.$share = shareConfig.config
  }
}
