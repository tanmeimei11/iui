<template>
<div>
  <canvas class="result" ref="result"></canvas>
  <br />
  <r-btn class="blue white-text" large v-wave.light>
    图片选择
    <iImgUpload @error="error" @progress="progress" @done="showResult"  />
  </r-btn>

    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>size</td>
          <td>上传控件大小</td>
          <td>String</td>
          <td>cover</td>
        </tr>
        <tr>
          <td>analyze</td>
          <td>是否解析二进制返回canvas，否则返回file对象</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>maxWidth</td>
          <td>图片压缩最大宽度（与analyze属性有关）</td>
          <td>Number</td>
          <td>Infinity</td>
        </tr>
      </tbody>
    </table>
    <h3>Event</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>progress</td>
          <td>图片解析中</td>
          <td>function</td>
          <td>() => {}</td>
        </tr>
        <tr>
          <td>done</td>
          <td>图片解析完成</td>
          <td>function</td>
          <td>(info) => {}</td>
        </tr>
        <tr>
          <td>error</td>
          <td>图片格式验证失败</td>
          <td>function</td>
          <td>() => {}</td>
        </tr>
      </tbody>
    </table>
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
      this.ctx.fillStyle = '#fff'
      this.ctx.fillRect(0, 0, height, width)
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

