import install from './md/install.md'
import iAudio from 'i-ui/lib/iAudio/README.md'
import iAvatar from 'i-ui/lib/iAvatar/README.md'
import IBarrage from 'i-ui/lib/IBarrage/README.md'
import iImgUpload from 'i-ui/lib/iImgUpload/README.md'
import iRollBar from 'i-ui/lib/iRollBar/README.md'
import iTrack from 'i-ui/lib/iTrack/README.md'

// https://www.iviewui.com/components/icon

const routes = [
  {path: '/', redirect: '/install'},
  {name: 'install', path: '/install', component: install },
  {name: 'iAudio', path: '/iAudio', component: iAudio, type: 'components', icon: 'music-note', txt: '音乐播放'},
  {name: 'iAvatar', path: '/iAvatar', component: iAvatar, type: 'components', icon: 'android-happy', txt: '头像'},
  {name: 'IBarrage', path: '/IBarrage', component: IBarrage, type: 'components', icon: 'android-happy', txt: '弹幕'},
  {name: 'iImgUpload', path: '/iImgUpload', component: iImgUpload, type: 'components', icon: 'image', txt: '图片选择'},
  {name: 'iRollBar', path: '/iRollBar', component: iRollBar, type: 'components', icon: 'image', txt: '滚动加载'},
  {name: 'iTrack', path: '/iTrack', component: iTrack, type: 'directives', icon: 'image', txt: '埋点'}
]
export default routes
