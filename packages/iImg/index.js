//图片directive
var directive = function(el, url) {
  el.style.backgroundImage = 'url(' + url.value + ')'
  el.style.backgroundPosition = 'center'
  el.style.backgroundSize = 'cover'

  //引入css
  require('./index.css')

  //创建放大后元素
  if (!document.getElementById('img-view')) {
    var parent = document.createElement('div')
    parent.id = 'img-view'
    parent.style.display = 'none'
    var img = document.createElement('img')
    parent.appendChild(img)
    document.body.appendChild(parent)

    //图片放大区点击事件
    parent.onclick = function() {
      this.style.display = 'none'
    }
  }

  //图片点击事件
  el.onclick = function() {
    var sourceUrl = this.style.backgroundImage
    var imgUrl = sourceUrl.replace('url("', '').replace("url(", '').replace('")', '').replace(')', '')
    var eleParent = document.getElementById('img-view')
    var eleImg = eleParent.getElementsByTagName('img')[0]
    eleImg.src = imgUrl
    eleParent.style.display = 'block'
  }
}

module.exports = directive
