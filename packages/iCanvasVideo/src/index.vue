<template>
  <div class="component i-canvas-video" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.use(Vue => {
    Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
  })
  export default {
    name: 'iCanvasVideo',
    props: {
      imgs: {
        type: Array,
        default: []
      },
      cover: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 1000
      },
      delay: {
        type: Number,
        default: 0
      },
      changeEnd: {
        type: Function,
        default: function () {}
      }
    },
    data () {
      return {
        imgObjs: [],
        canvas: null,
        ctx: null,
        activeIndex: 0,
        intervalTimer: null,
        delayTimer: null
      }
    },
    methods: {
      preloadImgs () { // 预加载图片
        var imgPromise = []

        function loadImg (url) {
          return new Promise((resolve, reject) => {
            var _img = new Image()
            _img.onload = () => {
              var _obj = {
                w: _img.naturalWidth,
                h: _img.naturalHeight,
                img: _img
              }
              resolve(_obj)
            }
            _img.onerror = () => {
              reject()
            }
            _img.src = url
          })
        }

        for (var i = 0; i < this.imgs.length; i++) {
          imgPromise.push(loadImg(this.imgs[i]))
        }
        return Promise.all(imgPromise).then((res) => {
          return res
        }, () => {
          console.log('图片预加载失败了～～')
        })
      },
      initCanvas () { // 初始化canvas
        this.canvas = this.$refs.canvas
        this.ctx = this.canvas.getContext('2d')
        // debugger
        this.canvas.width = this.$refs.container.clientWidth
        this.canvas.height = this.$refs.container.clientHeight
      },
      drawImg (ctx, imgObj, x, y, w, h) { // 画图
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        var imgRate = imgObj.w / imgObj.h
        var canvasRate = this.canvas.width / this.canvas.height
        var temp1 = {
          h: this.canvas.height,
          w: imgRate * this.canvas.height,
          y: 0,
          x: (this.canvas.width - imgRate * this.canvas.height) / 2
        }
        var temp2 = {
          w: this.canvas.width,
          h: this.canvas.width / imgRate,
          x: 0,
          y: (this.canvas.height - this.canvas.width / imgRate) / 2
        }
        // debugger
        var temp
        if (this.cover) {
          temp = imgRate > canvasRate ? temp1 : temp2
        } else {
          temp = imgRate > canvasRate ? temp2 : temp1
        }
        ctx.drawImage(imgObj.img, 0, 0, imgObj.w, imgObj.h, temp.x, temp.y, temp.w, temp.h)
      },
      timer () {
        clearTimeout(this.delayTimer)
        this.delayTimer = setTimeout(() => {
          clearInterval(this.intervalTimer)
          this.intervalTimer = setInterval(() => {
            this.drawImg(this.ctx, this.imgObjs[this.activeIndex], 0, 0, this.canvas.width, this.canvas.height)
            this.changeEnd(this)
            this.activeIndex++ >= (this.imgObjs.length - 1) && (this.activeIndex = 0)
          }, this.interval)
        }, this.delay)
      }
    },
    beforeDestroy () {
      clearTimeout(this.delayTimer)
      clearInterval(this.intervalTimer)
    },
    mounted () {
      if (!this.imgs.length) {
        return false
      }
      this.initCanvas()
      this.preloadImgs()
        .then((res) => {
          this.imgObjs = res
          this.timer()
        })
    },
    created () {}
  }

</script>
<style lang="scss">
  @mixin size($size) {
    $w: nth($size, 1);
    $h: $w;
    @if (length($size)==2) {
      $h: nth($size, 2);
    }
    width: $w;
    height: $h;
  }

  @mixin pos($name, $position) {
    position: $name;
    top: nth($position, 1);
    right: nth($position, 2);
    bottom: nth($position, 3);
    left: nth($position, 4);
  }

  .component {
    position: relative;
  }

  .i-canvas-video {
    @include size(600px 300px);
    canvas {
      @include size(100%);
    }
  }

</style>
