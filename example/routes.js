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
import iVideoScreen from 'i-ui/lib/iVideoScreen/README.md'
import iCanvasVideo from 'i-ui/lib/iCanvasVideo/README.md'
import iImgCut from 'i-ui/lib/iImgCut/README.md'
import iFireWorks from 'i-ui/lib/iFireWorks/README.md'
import iSticker from 'i-ui/lib/iSticker/README.md'
import iLoading from 'i-ui/lib/iLoading/README.md'
import iImagesBox from 'i-ui/lib/iImagesBox/README.md'
import iInput from 'i-ui/lib/iInput/README.md'
import iImgAnime from 'i-ui/lib/iImgAnime/README.md'
import iUpdate from 'i-ui/lib/iUpdate/README.md'
import iError from 'i-ui/lib/iError/README.md'
import iWxShare from 'i-ui/lib/iWxShare/README.md'

// 指令
import iTrack from 'i-ui/lib/iTrack/README.md'
import iOpen from 'i-ui/lib/iOpen/README.md'
import iLink from 'i-ui/lib/iLink/README.md'
import iBgImg from 'i-ui/lib/iBgImg/README.md'
import iLongTap from 'i-ui/lib/iLongTap/README.md'
import iImg from 'i-ui/lib/iImg/README.md'

// https://www.iviewui.com/components/icon

const routes = [{
  path: '/',
  redirect: '/install'
},
{
  name: 'install',
  path: '/install',
  component: install
},
{
  name: 'customPackage',
  path: '/customPackage',
  component: customPackage
},
{
  name: 'quickstart',
  path: '/quickstart',
  component: quickstart
},
{
  name: 'iAudio',
  path: '/iAudio',
  component: iAudio,
  type: 'components',
  icon: 'music-note',
  txt: '音乐播放'
},
{
  name: 'iAvatar',
  path: '/iAvatar',
  component: iAvatar,
  type: 'components',
  icon: 'social-reddit',
  txt: '头像'
},
{
  name: 'IBarrage',
  path: '/IBarrage',
  component: IBarrage,
  type: 'components',
  icon: 'android-textsms',
  txt: '弹幕'
},
{
  name: 'iImgUpload',
  path: '/iImgUpload',
  component: iImgUpload,
  type: 'components',
  icon: 'image',
  txt: '图片选择'
},
{
  name: 'iRollBar',
  path: '/iRollBar',
  component: iRollBar,
  type: 'components',
  icon: 'android-more-vertical',
  txt: '滚动加载'
},
{
  name: 'iSharePanel',
  path: '/iSharePanel',
  component: iSharePanel,
  type: 'components',
  icon: 'android-share-alt',
  txt: '分享面板'
},
{
  name: 'iVideoScreen',
  path: '/iVideoScreen',
  component: iVideoScreen,
  type: 'components',
  icon: 'ios-film',
  txt: '视频播放'
},
{
  name: 'iCanvasVideo',
  path: '/iCanvasVideo',
  component: iCanvasVideo,
  type: 'components',
  icon: 'android-film',
  txt: '播放动画'
},
{
  name: 'iUpdate',
  path: '/iUpdate',
  component: iUpdate,
  type: 'components',
  icon: 'arrow-up-a',
  txt: '版本升级'
},
{
  name: 'iImgCut',
  path: '/iImgCut',
  component: iImgCut,
  type: 'components',
  icon: 'scissors',
  txt: '图片裁剪'
},
{
  name: 'iFireWorks',
  path: '/iFireWorks',
  component: iFireWorks,
  type: 'components',
  icon: 'ios-snowy',
  txt: '飘雪花'
},
{
  name: 'iSticker',
  path: '/iSticker',
  component: iSticker,
  type: 'components',
  icon: 'ios-rose',
  txt: '贴纸'
},
{
  name: 'iTrack',
  path: '/iTrack',
  component: iTrack,
  type: 'directives',
  icon: 'social-rss',
  txt: '埋点'
},
{
  name: 'iOpen',
  path: '/iOpen',
  component: iOpen,
  type: 'directives',
  icon: 'android-send',
  txt: '打开in'
},

{
  name: 'iLink',
  path: '/iLink',
  component: iLink,
  type: 'directives',
  icon: 'link',
  txt: 'iLink'
},
{
  name: 'iBgImg',
  path: '/iBgImg',
  component: iBgImg,
  type: 'directives',
  icon: 'image',
  txt: '背景图'
},
{
  name: 'iLongTap',
  path: '/iLongTap',
  component: iLongTap,
  type: 'directives',
  icon: 'mouse',
  txt: '长按'
},
{
  name: 'iImg',
  path: '/iImg',
  component: iImg,
  type: 'directives',
  icon: 'android-image',
  txt: '图片预览'
},
{
  name: 'iLoading',
  path: '/iLoading',
  component: iLoading,
  type: 'components',
  icon: 'load-c',
  txt: '加载'
},
{
  name: 'iImagesBox',
  path: '/iImagesBox',
  component: iImagesBox,
  type: 'components',
  icon: 'images',
  txt: '9宫格图片'
},
{
  name: 'iInput',
  path: '/iInput',
  component: iInput,
  type: 'components',
  icon: 'compose',
  txt: '输入框'
},
{
  name: 'iImgAnime',
  path: '/iImgAnime',
  component: iImgAnime,
  type: 'components',
  icon: 'film-marker',
  txt: '动画帧'
},
{
  name: 'iError',
  path: '/iError',
  component: iError,
  type: 'components',
  icon: 'bug',
  txt: '错误展示'
},
{
  name: 'iWxShare',
  path: '/iWxShare',
  component: iWxShare,
  type: 'components',
  icon: 'share',
  txt: 'in外分享'
}
]

export default routes
