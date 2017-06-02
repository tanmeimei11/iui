function removeToastDom () {
  let oldDom = document.getElementsByClassName('hint-box')[0]
  oldDom && document.body.removeChild(oldDom)
}

export default function toast (msg, millisecond = 3000) {
  removeToastDom()
  let hitEle = document.createElement('div')
  hitEle.setAttribute('class', 'hint-box')
  hitEle.innerHTML = msg
  document.body.appendChild(hitEle)
  setTimeout(removeToastDom, millisecond)
}
