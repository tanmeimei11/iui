import iTrack from './src/iTrack'

iTrack.install = function (Vue) {
  Vue.directive(iTrack.name, iTrack)
}

export default iTrack
