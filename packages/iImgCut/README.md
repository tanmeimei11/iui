## 图片裁剪
<template>
  <iImgCut ref="result" class="info" :src="src" :fillStyle="fillStyle"></iImgCut>
  <img v-if="resource" class="done" :src="resource" />
<br />
<i-button type="primary">选择图片 
   <iImgUpload @done="addImg" />
</i-button>
<i-button type="primary" @click="showResult">查看结果</i-button>
</template>
<style lang="scss">
  .info {
    width: 300px;
    height: 300px;
    display:inline-block;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
  .done {
    border: 1px solid #000;
  }
</style>
<script>
  import iImgCut from 'i-ui/lib/iImgCut'
  import iImgUpload from 'i-ui/lib/iImgUpload'
  export default {
    components: {
      iImgUpload,
      iImgCut
    },
    data() {
      return {
        fillStyle: '#000',
        src: undefined,
        resource: undefined
      }
    },
    methods: {
      addImg (file) {
        this.src = file.toDataURL('image/png')
      },
      showResult() {
        this.resource = this.$refs.result.toDataURL('image/png')
      }
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |src  | 资源地址  | [ Image,Canvas,Base64,Url ] | 无 |
 |fillStyle  | 填充的颜色  | hex | #fff  |

## 代码
```html
<iImgCut ref="result" class="info" :src="src" :v="fillStyle"></iImgCut>
<img v-if="resource" class="done" :src="resource" />
<script>
  import iImgCut from 'i-ui/lib/iImgCut'
  export default {
    components: {
      iImgCut
    },
    data() {
      return {
        fillStyle: '#000',
        src: 'http://inimg02.jiuyan.info/in/2017/03/24/5F838417-1DDA-CE2A-14A6-7A0D0247301C-1wGMzYZ.jpg',
        resource: undefined
      }
    },
    methods: {
      showResult() {
        this.resource = this.$refs.result.toDataURL('image/png')
      }
    }
  }
</script>
```
