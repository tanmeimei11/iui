/**
 * Icon by https://www.iviewui.com/components/icon
 */
import navConfig from './nav.config'

import install from './md/install.md'
import quickstart from './md/quickstart.md'
import customPackage from './md/custom-package.md'

import iAudio from 'i-ui/lib/iAudio/README.md'
import iAvatar from 'i-ui/lib/iAvatar/README.md'
import IBarrage from 'i-ui/lib/IBarrage/README.md'
import iImgUpload from 'i-ui/lib/iImgUpload/README.md'
import iRollBar from 'i-ui/lib/iRollBar/README.md'
import iTrack from 'i-ui/lib/iTrack/README.md'

let map = {
    install,
    quickstart,
    'custom-package': customPackage,
    iAudio,
    iAvatar,
    IBarrage,
    iImgUpload,
    iRollBar,
    iTrack
}

let routes = []

navConfig.forEach(navs => {
  if (!navs.children) return;
  navs.children.forEach(nav => {
    routes.push({
      path: nav.path,
      component: map[nav.path.replace('/', '')]
    })
  })
})

routes.push({
  path: '/',
  redirect: '/install'
})

export default routes
