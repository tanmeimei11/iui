<template>
<div>
  <canvas class="result" ref="result"></canvas>
  <br />
  <r-btn class="blue white-text" large v-wave.light>
    上传文件
    <iImgUpload @error="error" @progress="progress" @done="showResult"  />
  </r-btn>
</div>
</template>
<script>
export default {
  name: 'i-img-upload',
  mounted () {
    this.$refs.result.width =
    this.$refs.result.height = 300
    this.ctx = this.$refs.result.getContext('2d')
  },
  methods: {
    error () {

    },
    progress () {

    },
    showResult (img) {
      var height = 300
      var width = 300
      var rh = img.naturalHeight || img.height
      var rw = img.naturalWidth || img.width
      var ratio = 1
      this.ctx.save()
      if (height == null) {
        height = width * rh / rw
        ratio = width / rw
      } else if (width == null) {
        width = height * rw / rh
        ratio = height / rh
      } else {
        ratio = Math.max(height / rh, width / rw)
      }
      // 画图片
      this.ctx.translate(width / 2, height / 2)
      this.ctx.scale(ratio, ratio)
      this.ctx.drawImage(img, 0, 0, rw, rh, -rw / 2, -rh / 2, rw, rh)
      this.ctx.restore()
    }
  }
}
</script>
<style lang="scss">
  canvas.result{
    width: 300px;
    height: 300px;
  }
</style>

