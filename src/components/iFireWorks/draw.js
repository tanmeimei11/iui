class Fireworks {
  constructor (option) {
    this.container = option.container
    this._dpr = option.dpr
    this.angle = option.angle || 0
    this.skew = option.skew || 0
    this.vx = 1// 下降的速度
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.containerWidth = this.container.clientWidth
    this.containerHeight = this.container.clientHeight
    this.particleNum = 60
    this.particles = []
    this.colors = ['#ed6d5f', '#8aa5bc', '#f5c940', '#4fb8a4']
    this.isImage = true
    this.imgUrl = 'http://inimg02.jiuyan.info/in/2017/03/13/3A152FF0-3129-CF8B-F1A7-C71F03849A2B.png'
    this.imgObj = null
    this.animation = ''
  }
  initCanvas () {
    this.canvas.width = this.containerWidth
    this.canvas.height = this.containerHeight
    this.canvas.style.width = this.containerWidth + 'px'
    this.canvas.style.height = this.containerHeight + 'px'
    this.container.append(this.canvas)
  }
  initFloatAnimation () {
    for (var i = 0; i < this.particleNum; i++) {
      var particleObj = {} // eslint disable line
      particleObj.x = Math.random() * this.containerWidth
      particleObj.y = Math.random() * -this.containerHeight
      particleObj.vx = Math.random() * 0.6 - 0.3
      particleObj.vy = (Math.random() * 1 + 0.4)
      particleObj.dw = (Math.random() * 5 + 2) * this._dpr
      particleObj.dh = (Math.random() * 5 + 3) * this._dpr
      particleObj.angle = Math.random() * this.angle
      particleObj.skew = Math.random() * this.skew
      particleObj.color = this.colors[Math.floor(Math.random() * this.colors.length)]

      this.particles[i] = particleObj
    }
  }
  drawFloatRect (ctx, dx, dy, dw, dh, skew, color, angle, scale) {
    ctx.save()
    ctx.translate(dx + dw / 2, dy + dh / 2)
    ctx.scale(scale, scale)
    ctx.rotate(Math.PI / 180 * angle)
    ctx.transform(1, Math.tan(Math.PI / 180 * skew), 0, 1, 0, 0)
    ctx.fillStyle = color
    ctx.fillRect(-1 * dw / 2, -1 * dh / 2, dw, dh)
    ctx.restore()
  }
  drawFloatImage (ctx, img, dx, dy, dw, dh, angle, scale) {
    ctx.save()
    ctx.translate(dx + dw / 2, dy + dh / 2)
    ctx.scale(scale, scale)
    ctx.rotate(Math.PI / 180 * angle)
    // ctx.fillRect(-1 * dw / 2, -1 * dh / 2, dw, dh)
    ctx.drawImage(img, dx, dy, dw, dh)
    ctx.restore()
  }
  imgLoad (imgUrl, callback) {
    var img = new Image()
    img.onload = () => {
      (typeof callback === 'function') && callback(img)
    }
    img.src = imgUrl
  }
  reDraw (url) {
    if (!url) {
      return 
    }
    this.imgUrl = url
    this.imgObj = null
    this.ctx.clearRect(0, 0, this.containerWidth, this.containerHeight)
    cancelAnimationFrame(this.animation)
    // 重置每个dobj的高度
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].y = Math.random() * -this.containerHeight
    }
    this.beforeRender()
  }
  render (ctx) {
    this.ctx.clearRect(0, 0, this.containerWidth, this.containerHeight)
    var particleObj
    for (var i = 0; i < this.particles.length; i++) {
      particleObj = this.particles[i]

      if (particleObj.x < 0 || particleObj.x > this.containerWidth || particleObj.y > this.containerHeight) {
        particleObj.x = Math.random() * this.containerWidth
        particleObj.y = Math.random() * -200
      }
      particleObj.x += particleObj.vx
      particleObj.y += particleObj.vy
      // particleObj.angle += 0;
      if (this.isImage) {
        this.drawFloatImage(this.ctx, this.imgObj, particleObj.x, particleObj.y, particleObj.dw, particleObj.dh, particleObj.skew, particleObj.color, particleObj.angle, 1)
      } else {
        this.drawFloatRect(this.ctx, particleObj.x, particleObj.y, particleObj.dw, particleObj.dh, particleObj.skew, particleObj.color, particleObj.angle, 1)
      }
    }
    this.animation = requestAnimationFrame(this.render.bind(this))
  }
  beforeRender () {
    if (this.isImage && !this.imgObj) {
      this.imgLoad(this.imgUrl, (res) => {
        this.imgObj = res
        this.render(this.ctx)
      })
      return
    }
    this.render(this.ctx)
  }
  ready () {
    this.initCanvas()
    this.initFloatAnimation()
    this.beforeRender()
  }
}

var fireworks = null

module.exports = {
  init: function ($ele) {
    var lastTime = 0
    var vendors = ['webkit', 'moz']
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime()
        var timeToCall = Math.max(0, 16 - (currTime - lastTime))
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall)
        }, timeToCall)
        lastTime = currTime + timeToCall
        return id
      }
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id)
      }
    }
    fireworks = new Fireworks({
      container: $ele,
      dpr: 2
    })
    fireworks.ready()
  },
  reDraw: function (url) {
    fireworks.reDraw(url)
  }
}
