import install from './md/install.md'
import quickstart from './md/quickstart.md'
import customPackage from './md/custom-package.md'

// 组件
import iAudio from 'i-ui/lib/iAudio/README.md'
import iAvatar from 'i-ui/lib/iAvatar/README.md'
import IBarrage from 'i-ui/lib/IBarrage/README.md'
import iImgUpload from 'i-ui/lib/iImgUpload/README.md'
import iRollBar from 'i-ui/lib/iRollBar/README.md'
import iSharePanel from 'i-ui/lib/iSharePanel/README.md'

// 指令
import iTrack from 'i-ui/lib/iTrack/README.md'

// https://www.iviewui.com/components/icon

const routes = [
  {path: '/', redirect: '/install'},
  {name: 'install', path: '/install', component: install },
  {name: 'customPackage', path: '/customPackage', component: customPackage },
  {name: 'quickstart', path: '/quickstart', component: quickstart },

  {name: 'iAudio', path: '/iAudio', component: iAudio, type: 'components', icon: 'music-note', txt: '音乐播放'},
  {name: 'iAvatar', path: '/iAvatar', component: iAvatar, type: 'components', icon: 'social-reddit', txt: '头像'},
  {name: 'IBarrage', path: '/IBarrage', component: IBarrage, type: 'components', icon: 'android-textsms', txt: '弹幕'},
  {name: 'iImgUpload', path: '/iImgUpload', component: iImgUpload, type: 'components', icon: 'image', txt: '图片选择'},
  {name: 'iRollBar', path: '/iRollBar', component: iRollBar, type: 'components', icon: 'android-more-vertical', txt: '滚动加载'},
  {name: 'iSharePanel', path: '/iSharePanel', component: iSharePanel, type: 'components', icon: 'android-share-alt', txt: '分享面板'},

  {name: 'iTrack', path: '/iTrack', component: iTrack, type: 'directives', icon: 'social-rss', txt: '埋点'}
]

export default routes
