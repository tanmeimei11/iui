// 指令
import iTrack from 'i-ui/lib/iTrack/README.md'
import iOpen from 'i-ui/lib/iOpen/README.md'
import iBgImg from 'i-ui/lib/iBgImg/README.md'

export default [ 
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
    name: 'iBgImg',
    path: '/iBgImg',
    component: iBgImg,
    type: 'directives',
    icon: 'image',
    txt: '背景图'
  }
]
