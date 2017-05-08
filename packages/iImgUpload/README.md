## 图片选择
<template>
<canvas class="result" ref="result"></canvas>
<br />
<i-button type="primary">选择图片 
   <iImgUpload @error="error" @progress="progress" @done="showResult" />
</i-button>
</template>

<script>
  import iImgUpload from 'i-ui/lib/iImgUpload'
  export default {
    components: {
      iImgUpload
    },
    mounted () {
      this.$refs.result.width =
      this.$refs.result.height = 300
      this.ctx = this.$refs.result.getContext('2d')
    },
    methods: {
      error() {},
      progress() {},
      showResult(img) {
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

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |analyze  | 处理图片  | Boolean | true  |
 |maxWidth  | 最大的宽度  | Number | Infinity  |

### Event
 |事件 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |progress  | 开始处理图片  | function |   |
 |done  | 上传回调  | function | [canvas\|File]  |
 |error  | 处理出错  | function |   |

## 代码
```html
<canvas class="result" ref="result"></canvas>
<i-button type="primary">选择图片
  <iImgUpload @error="error" @progress="progress" @done="showResult" />
</i-button>
<script>
  import iImgUpload from 'i-ui/lib/iImgUpload/src/index.vue'
  export default {
    components: {
      iImgUpload
    },
    mounted () {
      this.$refs.result.width =
      this.$refs.result.height = 300
      this.ctx = this.$refs.result.getContext('2d')
    },
    methods: {
      error() {},
      progress() {},
      showResult(img) {
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

```
