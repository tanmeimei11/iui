
/* Automatic generated by './scripts/build-entry.js' */

import iAudio from '../packages/iAudio'
import iAvatar from '../packages/iAvatar'
import IBarrage from '../packages/IBarrage'
import iImgUpload from '../packages/iImgUpload'
import iImgCut from '../packages/iImgCut'
import iRollBar from '../packages/iRollBar'
import iSharePanel from '../packages/iSharePanel'
import iVideoScreen from '../packages/iVideoScreen'
import iCanvasVideo from '../packages/iCanvasVideo'
import iFireWorks from '../packages/iFireWorks'
import iTrack from '../packages/iTrack'
import iOpen from '../packages/iOpen'
import iBgImg from '../packages/iBgImg'

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Vue.component(iAudio.name, iAudio)
  Vue.component(iAvatar.name, iAvatar)
  Vue.component(IBarrage.name, IBarrage)
  Vue.component(iImgUpload.name, iImgUpload)
  Vue.component(iImgCut.name, iImgCut)
  Vue.component(iRollBar.name, iRollBar)
  Vue.component(iSharePanel.name, iSharePanel)
  Vue.component(iVideoScreen.name, iVideoScreen)
  Vue.component(iCanvasVideo.name, iCanvasVideo)
  Vue.component(iFireWorks.name, iFireWorks)
  Vue.directive(iTrack.name, iTrack)
  Vue.directive(iOpen.name, iOpen)
  Vue.directive(iBgImg.name, iBgImg)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.23',
  install,
  iAudio,
  iAvatar,
  IBarrage,
  iImgUpload,
  iImgCut,
  iRollBar,
  iSharePanel,
  iVideoScreen,
  iCanvasVideo,
  iFireWorks,
  iTrack,
  iOpen,
  iBgImg
}
