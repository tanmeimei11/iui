<template>
  <canvas class="i-barrage"></canvas>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      },
      direction: {
        type: String,
        default: 'left'
      }
    },
    mounted () {
      let rect = this.$el.getBoundingClientRect()
      this.$el.width = rect.width
      this.$el.height = rect.height
      this.ctx = this.$el.getContext('2d')
      this.storyBorad()
    },
    methods: {
      _clearCtx () {
        this.ctx.clearRect(0, 0, this.$el.width, this.$el.height)
      },
      _drawfont (item) {
        if (item.time <= 0) return
        this.ctx.save()
        this.ctx.textBaseline = 'middle'
        this.ctx.textAlign = this.direction
        this.ctx.fillStyle = item.color
        this.ctx.font = `${item.fontSize} ETrump-QiHei55`
        this.ctx.translate(item.x, 0)
        this.ctx.fillText(item.txt, 0, item.offsetY)
        this.ctx.restore()
      },
      _changePos (item) {
        if (item.x == null) {
          // 第一次
          item.x = this.$el.width + item.offsetX
        } else {
          // 是否到头
          this.ctx.save()
          this.ctx.font = `${item.fontSize} ETrump-QiHei55`
          var needW = this.ctx.measureText(item.txt).width
          this.ctx.restore()
          if (item.x < 0 && Math.abs(item.x) >= needW) {
            // 重新开始
            item.x = this.$el.width
            item.time -= 1
          }
        }
        // 开始移动
        item.x = item.x - item.speed
      },
      _requestAnimationFrame (callback) {
        if (/android|adr/gi.test(navigator.userAgent)) {
          setTimeout(callback, 1000 / 60)
        } else {
          (window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            (callback => {
              setTimeout(callback, 1000 / 60)
            }))(callback)
        }
      },
      storyBorad () {
        this._clearCtx()
        if (this.list.length) {
          this.list.map(this._changePos)
          this.list.map(this._drawfont)
        }
        this._requestAnimationFrame(this.storyBorad)
      }
    }
  }
</script>
