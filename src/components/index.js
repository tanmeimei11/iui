import Button from './Button'

function init (...components) {
  const com = {}
  components.forEach(c => {
    Object.keys(c).forEach(key => {
      com[`R${key}`] = c[key]
    })
  })

  return com
}

export default init(
  Button
)
