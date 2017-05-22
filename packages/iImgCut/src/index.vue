<template>
  <div @touchstart.prevent="_touchstart" @touchmove.prevent="_touchmove" @touchend="_touchend">
    <canvas ref="canvas"></canvas>
    <slot></slot>
  </div>
</template>
<script>
  import {
    _toFloatX,
    _fixedDrawSize,
    _fixedEdgePic,
    _fixedCenterPic
  } from './fixPos.js'
  import { setSize } from 'i-ui/src/utils/canvasExt.js'
  export default {
    name: 'iImgCut',
    props: {
      src: [HTMLElement, String],
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      minScale: {
        type: Number,
        default: 1
      },
      maxScale: {
        type: Number,
        default: 4
      },
      fillStyle: {
        type: String,
        default: '#fff'
      }
    },
    computed: {
      resource: function () {
        if (this.src) {
          if (this.src instanceof HTMLElement) {
            return this.src
          } else if (typeof (this.src) === 'string') {
            let img = new Image()
            if (!/^data:image/.test(this.src)) {
              img.crossOrigin = ''
            }
            img.src = this.src
            return img
          }
        }
        return undefined
      },
      canvas: function () {
        return this.$refs.canvas
      },
      ctx: function () {
        return this.canvas.getContext('2d')
      }
    },
    watch: {
      src: function () {
        this._changeImg()
      }
    },
    mounted () {
      // set canvas size
      setSize(this.canvas)
      let rect = this.canvas.getBoundingClientRect()
      // set offset
      let parentStyle = window.getComputedStyle(this.canvas.parentElement)
      let parentRect = this.canvas.parentElement.getBoundingClientRect()
      this.offset = {
        top: parentRect.top - rect.top,
        left: parentRect.left - rect.left,
        width: parseFloat(parentStyle.width),
        height: parseFloat(parentStyle.height)
      }
      this.offset.top = this.offset.top <= 0 ? 0 : this.offset.top
      this.offset.left = this.offset.left <= 0 ? 0 : this.offset.left
      this._changeImg()
    },
    data () {
      return {
        resPos: {
          sx: 0,
          sy: 0,
          sw: 0,
          sh: 0
        },
        drawPos: {
          dx: 0,
          dy: 0,
          dw: 0,
          dh: 0
        },
        imageRatio: undefined,
        containerRatio: undefined,
        scale: 1
      }
    },
    methods: {
      _drawImage () {
        let ctx = this.ctx
        let img = this.resource
        if (!ctx) return
        ctx.save()
        ctx.fillStyle = this.fillStyle
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.translate(this.drawPos.dx + this.drawPos.dw / 2, this.drawPos.dy + this.drawPos.dh / 2)
        ctx.scale(this.scale, this.scale)
        ctx.drawImage(img, this.resPos.sx, this.resPos.sy, this.resPos.sw, this.resPos.sh, -1 * this.drawPos.dw / 2, -1 *
          this.drawPos.dh / 2, this.drawPos.dw, this.drawPos.dh)
        ctx.restore()
      },
      _changeImg () {
        if (!this.resource) return
        if (~['IMG', 'IMAGE'].indexOf(this.resource.tagName)) {
          this.resource.onload = () => {
            this._loadImg()
          }
          if (this.resource.complete) {
            this._loadImg()
          }
        } else if (this.resource.tagName === 'CANVAS') {
          this._loadImg()
        }
      },
      _loadImg () {
        _fixedDrawSize.apply(this)
        this._drawImage()
      },
      _touchstart (event) {
        var touches = event.touches || event.originalEvent.touches
        if (!touches.length || !this.resource) return
        if (touches.length === 1) {
          this.isMoveMode = true
          this.startX = touches[0].pageX
          this.startY = touches[0].pageY
        } else {
          this.isMoveMode = false
          var touch0 = touches[0]
          var touch1 = touches[1]
          var disx = (touch1.pageX - touch0.pageX) * (touch1.pageX - touch0.pageX)
          var disy = (touch1.pageY - touch0.pageY) * (touch1.pageY - touch0.pageY)
          this.satrtDis = Math.sqrt(disx + disy)
          this.startX = this.targetX
          this.startY = this.targetY
          this.startAngle = Math.atan2(touch1.pageY - touch0.pageY, touch1.pageX - touch0.pageX)
        }
        this.fuckNum = 0
      },
      _touchmove (event) {
        var touches = event.touches || event.originalEvent.touches
        if (!touches.length || !this.resource) return
        this.fuckNum++
        if (this.fuckNum % 1 !== 0) return
        if (this.isMoveMode) {
          let nowX = Math.floor(touches[0].pageX)
          let nowY = Math.floor(touches[0].pageY)
          this.drawPos.dx += nowX - this.startX
          this.drawPos.dy += nowY - this.startY
          this._drawImage()
          this.startX = nowX
          this.startY = nowY
        } else if (touches.length === 2) {
          var touch0 = touches[0]
          var touch1 = touches[1]
          var disx = (touch1.pageX - touch0.pageX) * (touch1.pageX - touch0.pageX)
          var disy = (touch1.pageY - touch0.pageY) * (touch1.pageY - touch0.pageY)
          let nowDis = Math.sqrt(disx + disy)
          this.scale += Math.floor(nowDis - this.satrtDis) * 0.0005
          this.scale = _toFloatX(this.scale)
          if (this.scale < 1) {
            this.scale = Math.max(this.scale, this.minScale)
            _fixedCenterPic.apply(this)
          } else {
            this.scale = Math.min(this.scale, this.maxScale)
            _fixedEdgePic.apply(this)
          }
          this._drawImage()
        }
      },
      _touchend (event) {
        if (!this.resource) return
        if (this.scale < 1) {
          _fixedCenterPic.apply(this)
        } else {
          _fixedEdgePic.apply(this)
        }
        this._drawImage()
      },
      toDataURL (type, encoderOptions) {
        let rcanvas = document.createElement('canvas')
        let rctx = rcanvas.getContext('2d')
        rcanvas.width = this.offset.width
        rcanvas.height = this.offset.height
        rctx.translate(-this.offset.left, -this.offset.top)
        rctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0,
          this.canvas.width, this.canvas.height)
        return rcanvas.toDataURL(type, encoderOptions)
      }
    }
  }

</script>
