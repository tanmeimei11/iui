
 var containerWidth, containerHeight

 function initAni () {
   containerWidth = document.getElementById('container').clientWidth
   containerHeight = document.getElementById('container').clientHeight

   initFloatAnimation()
 }

 function initFloatAnimation () {
   var floatCanvas = document.getElementById('canvas')
   var floatContext = floatCanvas.getContext('2d')

   floatCanvas.width = containerWidth
   floatCanvas.height = containerHeight
   floatCanvas.style.width = containerWidth + 'px'
   floatCanvas.style.height = containerHeight + 'px'

   var particleNum = 60
   var particles = []
   var colors = ['#ed6d5f', '#8aa5bc', '#f5c940', '#4fb8a4']

   for (var i = 0; i < particleNum; i++) {
     var particleObj = {} // eslint disable line
     particleObj.x = Math.random() * containerWidth
     particleObj.y = Math.random() * -500
     particleObj.vx = Math.random() * 0.6 - 0.3
     particleObj.vy = (Math.random() * 1 + 0.4) 
     particleObj.dw = (Math.random() * 5 + 2)
     particleObj.dh = (Math.random() * 5 + 3)
     particleObj.angle = Math.random() * 360
     particleObj.skew = Math.random() * 30
     particleObj.color = colors[Math.floor(Math.random() * colors.length)]

     particles[i] = particleObj
   }

   render()

   function render () {
     floatContext.clearRect(0, 0, containerWidth, containerHeight)
     var particleObj
     for (var i = 0; i < particles.length; i++) {
       particleObj = particles[i]

       if (particleObj.x < 0 || particleObj.x > containerWidth || particleObj.y > containerHeight) {
         particleObj.x = Math.random() * containerWidth
         particleObj.y = Math.random() * -200
       }
       particleObj.x += particleObj.vx
       particleObj.y += particleObj.vy
       // particleObj.angle += 0;

       drawFloatRect(floatContext, particleObj.x, particleObj.y, particleObj.dw, particleObj.dh, particleObj.skew, particleObj.color, particleObj.angle, 1)
     }
     requestAnimationFrame(render)
   }
 }

 function drawFloatRect (ctx, dx, dy, dw, dh, skew, color, angle, scale) {
   ctx.save()
   ctx.translate(dx + dw / 2, dy + dh / 2)
   ctx.scale(scale, scale)
   ctx.rotate(Math.PI / 180 * angle)
   ctx.transform(1, Math.tan(Math.PI / 180 * skew), 0, 1, 0, 0)
   ctx.fillStyle = color
   ctx.fillRect(-1 * dw / 2, -1 * dh / 2, dw, dh)
   ctx.restore()
 }
 module.exports = {
   init: function () {
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
     
     window.onload = initAni
   }
 }
