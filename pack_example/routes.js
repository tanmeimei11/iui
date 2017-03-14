import install from './md/install.md'
import iImgUpload from 'i-ui/lib/iImgUpload/README.md'

const routes = [{
  path: '/',
  redirect: '/install'
}, {
  name: 'install',
  path: '/install',
  component: install
}, {
  name: 'iImgUpload',
  path: '/iImgUpload',
  component: iImgUpload,
  type: 'components',
  icon: 'image',
  txt: '图片选择'
}]
export default routes
