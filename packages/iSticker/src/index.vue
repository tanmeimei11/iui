<template>
  <div class="i-sticker" @touchstart.prevent="_touchstart(-1)">
    <slot></slot>
    <template v-for="(sticker,idx) in cacheStickers">
      <div class="sticker" @touchstart.prevent.stop="_touchstart(idx,$event)" @touchmove.prevent.stop :class="{'active':stickerIdx === idx}"
        :style="stickerState[idx]">
        <div class="control-img" v-iBgImg.contain="sticker.src" :style="moveState[idx]" @touchmove.prevent.stop="stickerIdx === idx && _touchmove($event)" @touchend="click(idx,$event)"></div>
        <a href="javascript:;" class="control-del" @touchstart.stop="del(idx,$event)"></a>
        <a href="javascript:;" class="control-reverse" @touchstart.stop="reverse(idx,$event)"></a>
        <a href="javascript:;" class="control-scale" @touchmove.prevent.stop="scaleMove" @touchstart.stop="scale(idx,$event)"></a>
      </div>
    </template>
  </div>
</template>
<script>
  import iBgImg from '../../iBgImg'
  import {
    downloadImage
  } from 'i-ui/src/utils/canvasExt.js'
  import 'i-ui/src/utils/flexible.js'
  export default {
    name: 'iSticker',
    data () {
      return {
        cacheStickers: this.mapSticker(),
        stickerIdx: this.defaultStickerIdx
      }
    },
    props: {
      baseInfo: {
        type: Object,
        default: () => ({
          width: 250,
          height: 250,
          angle: 0,
          reverse: false
        })
      },
      stickers: {
        type: Array
      },
      defaultStickerIdx: {
        type: Number,
        default: -1
      },
      width: {
        require: true,
        type: Number
      },
      height: {
        require: true,
        type: Number
      }
    },
    directives: {
      iBgImg
    },
    watch: {
      stickers: function () {
        this.cacheStickers = this.mapSticker()
        if (this.stickerIdx + 1 > this.cacheStickers.length) {
          this.stickerIdx = -1
        }
      },
      defaultStickerIdx: function () {
        this.stickerIdx = this.defaultStickerIdx
        if (this.stickerIdx + 1 > this.cacheStickers.length) {
          throw new RangeError('Parameter must be between 0 and ' + this.cacheStickers.length - 1) 
        }
      }
    },
    computed: {
      stickerState: function (idx) {
        return this.cacheStickers.map(state => {
          return {
            'left': `${state.left}px`,
            'top': `${state.top}px`,
            'width': `${state.width}px`,
            'height': `${state.height}px`,
            '-webkit-transform': `rotate(${state.angle}deg)`,
            'transform': `rotate(${state.angle}deg)`
          }
        })
      },
      moveState: function (idx) {
        return this.cacheStickers.map(state => {
          return state.reverse ? {
            '-webkit-transform': `rotateY(180deg)`,
            'transform': `rotateY(180deg)`
          } : {}
        })
      }
    },
    methods: {
      mapSticker () {
        return this.stickers.map(sticker => {
          let mixinInfo = {
            ...this.baseInfo,
            ...sticker
          }
          return {
            ...mixinInfo,
            'left': lib.flexible.rem2px(mixinInfo.left / 75),
            'top': lib.flexible.rem2px(mixinInfo.top / 75),
            'width': lib.flexible.rem2px(mixinInfo.width / 75),
            'height': lib.flexible.rem2px(mixinInfo.height / 75),
            'extraX': lib.flexible.rem2px((mixinInfo.left + mixinInfo.width) / 75),
            'extraY': lib.flexible.rem2px((mixinInfo.top + mixinInfo.height) / 75)
          }
        })
      },
      click (idx, event) {
        this.$emit('click', idx)
      },
      del (idx, event) {
        this.cacheStickers.splice(idx, 1)
        this.stickerIdx = -1
        this.moveIng = false
        this.$emit('del', idx)
      },
      reverse (idx, event) {
        this.moveIng = false
        this.cacheStickers[idx].reverse = !this.cacheStickers[idx].reverse
        this.$emit('reverse', idx)
      },
      scale (idx, event) {
        if (!event) return
        this._touchstart(idx, event)
        this.$emit('scale', idx)
      },
      _touchstart (idx, event) {
        this.stickerIdx = idx
        if (!event) return
        var touches = event.touches || event.originalEvent.touches
        if (touches.length === 1) {
          this.startX = Math.floor(touches[0].pageX)
          this.startY = Math.floor(touches[0].pageY)
          let sticker = this.cacheStickers[this.stickerIdx]
          sticker.centerX = sticker.left + sticker.width / 2
          sticker.centerY = sticker.top + sticker.height / 2
        }
      },
      _touchmove (event) {
        var touches = event.touches || event.originalEvent.touches
        if (this.stickerIdx !== -1 && touches.length === 1) {
          let sticker = this.cacheStickers[this.stickerIdx]
          let nowX = Math.floor(touches[0].pageX)
          let nowY = Math.floor(touches[0].pageY)
          sticker.left += nowX - this.startX
          sticker.top += nowY - this.startY
          sticker.extraX += nowX - this.startX
          sticker.extraY += nowY - this.startY
          this.startX = nowX
          this.startY = nowY
        }
      },
      scaleMove () {
        var touches = event.touches || event.originalEvent.touches
        if (this.stickerIdx !== -1 && touches.length === 1) {
          let sticker = this.cacheStickers[this.stickerIdx]
          let nowX = Math.floor(touches[0].pageX)
          let nowY = Math.floor(touches[0].pageY)
          sticker.extraX += nowX - this.startX
          sticker.extraY += nowY - this.startY
          var targetAngle = Math.atan2(sticker.extraX - sticker.centerX, sticker.extraY - sticker.centerY) * 180 / Math.PI - 45
          sticker.angle = 360 - targetAngle
          let radio = sticker.width / sticker.height
          sticker.height = Math.sqrt(2 * Math.pow((sticker.extraX - sticker.centerX), 2) + Math.pow((sticker.extraY - sticker.centerY), 2)) 
          sticker.width = sticker.height * radio
          sticker.left = sticker.centerX - sticker.width / 2
          sticker.top = sticker.centerY - sticker.height / 2
          this.startX = nowX
          this.startY = nowY
        }
      },
      result () {
        return new Promise(resolve => {
          Promise.all([...this.cacheStickers.map(sticker => downloadImage(sticker.src))]).then(([...stickerImgs]) => {
            let canvas = document.createElement('canvas')
            canvas.width = this.width
            canvas.height = this.height
            let ctx = canvas.getContext('2d')
            ctx.scale(
              canvas.width / parseFloat(window.getComputedStyle(this.$el).width),
              canvas.height / parseFloat(window.getComputedStyle(this.$el).height) 
            )
            stickerImgs.forEach((img, idx) => {
              let state = this.cacheStickers[idx]
              let halfW = state.width / 2
              let halfH = state.height / 2
              let left = -halfW
              ctx.save()
              ctx.translate(state.left + halfW, state.top + halfH)
              if (state.angle) {
                ctx.rotate(state.angle * Math.PI / 180)
              }
              if (state.reverse) {
                ctx.translate(halfW, 0)
                ctx.scale(-1, 1)
                left = 0
              }
              ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, left, -halfH, state.width,
                state.height)
              ctx.restore()
            })
            resolve(canvas)
          })
        })
      }
    }
  }
</script>
<style lang="scss">
  .i-sticker {
    position: relative;
    overflow: hidden;
    .sticker {
      position: absolute;
      border: 2PX solid transparent;
      .control-img {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
      }
      a {
        position: absolute;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 0.693333rem;
        height: 0.693333rem;
        display: none;
      }
      $point:-0.346667rem;
      .control-del {
        top: $point;
        left: $point;
        background-image: url('./assets/control_delete.png');
      }
      .control-reverse {
        top: $point;
        right: $point;
        background-image: url('./assets/control_reverse.png');
      }
      .control-scale {
        bottom: $point;
        right: $point;
        background-image: url('./assets/control_scale.png');
      }
      &.active {
        border-color: #fff;
        z-index: 999;
        a {
          display: block;
        }
      }
    }
  }

</style>
