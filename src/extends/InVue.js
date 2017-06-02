import Vue from 'vue'
import icommon from '../utils/common'
import share from '../utils/share'
import { trackParam } from '../utils/track'

const initPage = (options) => {
  icommon.initIn()
  if (options.share) {
    share.config = options.share
  }
  if (options.track) {
    trackParam(options.track) 
  }
  if (options.plugins && options.plugins.forEach) {
    options.plugins.forEach(plugin => Vue.use(plugin))
  }
}

export default class InVue extends Vue {
  constructor (options) {
    initPage(options)
    super(options)
  }
}

