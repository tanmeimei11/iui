/**
 * Icon by https://www.iviewui.com/components/icon
 */
import navConfig from './nav.config'

let routes = []
let docs = ['/install', '/quickstart', '/custom-package']

navConfig.forEach(navs => {
  if (!navs.children) return;
  navs.children.forEach(nav => {
    routes.push({
      path: nav.path,
      component: docs.indexOf(nav.path) >= 0 ?
        require(`./md${nav.path}.md`) :
        require(`../packages${nav.path}/README.md`)
    })
  })
})

routes.push({
  path: '/',
  redirect: '/install'
})

export default routes
