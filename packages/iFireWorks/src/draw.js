class Fireworks {
  constructor (option) {
    this.initOption(option)
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.containerWidth = this.container.clientWidth
    this.containerHeight = this.container.clientHeight
    this.particles = []
    this.colors = ['#ed6d5f', '#8aa5bc', '#f5c940', '#4fb8a4']
    this.imgObj = null
    this.animation = ''
  }
  initOption (option) {
    this.container = option.container || this.container
    if (!option.imgUrl) {
      option = {}
    }
    this._dpr = option.dpr || 1
    this.angle = option.angle || 0
    this.scale = option.scale || 1
    this.skew = option.skew || 30
    this.vy = option.vy || 0.1 // 下降的速度
    this.vx = option.vx || 1 // 平移的速度
    this.dw = option.dw || 8 // 宽度
    this.dh = option.dh || 10 // 高度
    this.particleNum = option.particleNum || 60
    this.imgUrl = option.imgUrl || ''
  }
  initCanvas () {
    this.canvas.width = this.containerWidth
    this.canvas.height = this.containerHeight
    this.canvas.style.width = this.containerWidth + 'px'
    this.canvas.style.height = this.containerHeight + 'px'
    this.container.append(this.canvas)
  }
  initParticleObj () {
    this.particles = []
    for (var i = 0; i < this.particleNum; i++) {
      var particleObj = {} // eslint disable line
      particleObj.x = Math.random() * this.containerWidth
      particleObj.y = Math.random() * -this.containerHeight
      particleObj.dw = Math.random() * this.dw * this._dpr
      particleObj.dh = Math.random() * this.dh * this._dpr
      particleObj.vx = (Math.random() * this.vx - 0.3) * (1 - (particleObj.dw * this._dpr) / this.dw * this._dpr) // 速度喝宽度挂钩
      particleObj.vy = (Math.random() * this.vy + 0.4)
      if (this.imgUrl) {
        particleObj.dh = particleObj.dw
      }
      particleObj.angle = Math.random() * this.angle
      particleObj.skew = Math.random() * this.skew
      particleObj.scale = Math.random() * this.scale
      particleObj.color = this.colors[Math.floor(Math.random() * this.colors.length)]

      this.particles[i] = particleObj
    }
  }
  drawFloatRect (ctx, dx, dy, dw, dh, color, skew, angle, scale) {
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
  reDraw (option) {
    this.imgObj = null
    this.initOption(option)
    this.ctx.clearRect(0, 0, this.containerWidth, this.containerHeight)
    cancelAnimationFrame(this.animation)
    // 重置每个dobj的高度
    this.initParticleObj()
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
      particleObj.angle += 0
      if (this.imgUrl) {
        this.drawFloatImage(this.ctx, this.imgObj, particleObj.x, particleObj.y, particleObj.dw, particleObj.dh, particleObj.angle, particleObj.scale)
      } else {
        this.drawFloatRect(this.ctx, particleObj.x, particleObj.y, particleObj.dw, particleObj.dh, particleObj.color, particleObj.skew, particleObj.angle, 1)
      }
    }
    this.animation = requestAnimationFrame(this.render.bind(this))
  }
  beforeRender () {
    if (this.imgUrl && !this.imgObj) {
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
    this.initParticleObj()
    this.beforeRender()
  }
}

var fireworks = null

module.exports = {
  init: function (option) {
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
    fireworks = new Fireworks(option)
    fireworks.ready()
  },
  reDraw: function (url) {
    fireworks.reDraw(url)
  }
}
