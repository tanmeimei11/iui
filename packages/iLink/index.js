import iLink from './src/iLink'

iLink.install = function (Vue) {
  Vue.directive(iLink.name, iLink)
}

export default iLink
