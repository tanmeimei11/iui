import Bus from './bus'

export default function () {
  const click = e => Bus.pub('body:click', e)
  if (typeof window.orientation !== 'undefined') {
    document.body.addEventListener('touchstart', click, false)
  } else {
    document.body.addEventListener('click', click, false)
  }
}
