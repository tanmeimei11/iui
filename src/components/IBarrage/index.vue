<template>
  <canvas class="i-barrage"></canvas>
</template>
<script>
  export default {
    data () {
      return {
        laneObj: undefined
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      },
      lane: {
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
    destroyed () {
      // this.list.map(item => {
      //   item.offsetX = undefined
      //   item.offsetY = undefined
      // })
    },
    methods: {
      _clearCtx () {
        this.ctx.clearRect(0, 0, this.$el.width, this.$el.height)
      },
      // 随机泳道
      _random () {
        this.laneObj.sort(() => Math.random() - 0.5)
        let idx = Math.floor(Math.random() * Math.pow(10, 2)) * (Date.now()) % this.laneObj.length
        return this.laneObj.splice(idx, 1)[0]
      },
      // 初始化
      _init (item) {
        if (item.time <= 0) return
        if (this.laneObj === undefined) {
          this.laneObj = this.lane.map((v, idx) => idx)
        } else if (this.laneObj.length === 0) {
          return
        }
        // 当销毁后判断泳道是否已经有人
        if (item.laneIdx !== undefined) {
          var idx = this.laneObj.indexOf(item.laneIdx)
          if (~idx) {
            this.laneObj.splice(idx, 1)
          }
        }
        if (item.offsetX === undefined) {
          item.offsetX = parseInt(Math.random() * (10 + 1))
        }
        if (item.offsetY === undefined) {
          item.laneIdx = this._random()
          item.offsetY = this.lane[item.laneIdx]
        }
        if (item.x == null) {
          item.x = this.$el.width + item.offsetX
        }
      },
      // 画字
      _drawfont (item) {
        if (item.time <= 0 || item.offsetY === undefined) return
        this.ctx.save()
        this.ctx.textBaseline = 'middle'
        this.ctx.textAlign = this.direction
        this.ctx.fillStyle = item.color
        this.ctx.font = `${item.fontSize} ETrump-QiHei55`
        this.ctx.translate(item.x, 0)
        this.ctx.fillText(item.txt, 0, item.offsetY)
        this.ctx.restore()
      },
      // 改变坐标
      _changePos (item, idx) {
        if (item.offsetY === undefined) return
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
        if (item.time === 0) {
          this.laneObj.push(item.laneIdx)
          item.offsetY = undefined
          this.$emit('done', item, idx)
        }
        // 开始移动
        item.x = item.x - item.speed
      },
      _requestAnimationFrame (callback) {
        if (this._isDestroyed) return
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
          this.list.map(this._init)
          this.list.map(this._changePos)
          this.list.map(this._drawfont)
        }
        this._requestAnimationFrame(this.storyBorad)
      }
    }
  }
</script>
