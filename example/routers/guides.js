import install from '../md/install.md'
import quickstart from '../md/quickstart.md'
import customPackage from '../md/custom-package.md'
export default [{
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
}]
