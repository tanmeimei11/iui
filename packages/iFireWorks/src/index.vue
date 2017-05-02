<template>
  <div class="container" id="container">
  </div>
</template>
<script>
  import draw from './draw.js'
  export default {
    name: 'iFireWorks',
    props: [
      'option'
    ],
    watch: {
      'option.imgUrl': function () {
        draw.reDraw({
          imgUrl: this.option.imgUrl,
          angle: this.option.angle || 0,
          scale: this.option.scale || 1,
          skew: this.option.skew || 30,
          vy: this.option.vy || 0.1, // 下降的速度
          vx: this.option.vx || 1, // 平移的速度
          dw: this.option.dw || 40, // 宽度
          dh: this.option.dh || 40, // 高度
          particleNum: this.option.particleNum || 60
        })
      }

    },
    mounted () {
      var _option = {
        container: this.$el,
        ...this.option
      }
      draw.init(_option)
    },
    created () {}
  }

</script>
<style>
  .container {
    width: 100%;
    height: 100%;
  }

</style>
