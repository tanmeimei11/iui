import iAudio from './iAudio'

function init (...components) {
  const com = {}
  components.forEach(c => {
    Object.keys(c).forEach(key => {
      com[`${key}`] = c[key]
    })
  })

  return com
}
export default init(
  iAudio
)
