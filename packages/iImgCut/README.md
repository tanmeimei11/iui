## 图片裁剪
<template>
  <iImgCut ref="result" class="info" :src="src" :fillStyle="fillStyle" :width="400" :height="400"></iImgCut>
  <iImgCut ref="result1" class="info1" :src="src" :fillStyle="fillStyle">
     <div class="mask"></div>
  </iImgCut>
  <img v-if="resource" class="done" :src="resource" />
  <img v-if="resource1" class="done" :src="resource1" />
<br />
<i-button type="primary">选择图片 
   <iImgUpload @done="addImg" />
</i-button>
<i-button type="primary" @click="showResult">查看结果</i-button>
</template>
<style lang="scss">
  .info {
    transform: translate(0,-100px);
    width: 300px;
    height: 300px;
    display:inline-block;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
  .info1 {
    margin: 100px 0;
    width: 300px;
    height: 100px;
    display:inline-block;
    position: relative;
    canvas {
      transform: translate(0,-100px);
      width: 300px;
      height: 300px;
      pointer-events: none;
    }
    .mask {
      transform: translate(0,-100px);
      position: absolute;
      left: 0;
      top: 0;
      width: 300px;
      height: 300px;
      border: 100px solid rgba(0,0,0,.4);
      border-left: none;
      border-right: none;
      box-sizing: border-box;
      pointer-events: none;
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
        fillStyle: '#fff',
        src: '',
        resource: undefined,
        resource1: undefined
      }
    },
    methods: {
      addImg (file) {
        this.src = file.toDataURL('image/png')
      },
      showResult() {
        this.resource = this.$refs.result.toDataURL('image/png')
        this.resource1 = this.$refs.result1.toDataURL('image/png')
      }
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |src  | 资源地址  | [ Image,Canvas,Base64,Url ] | 无 |
 |width  | 宽度  | Number | 取样式的宽（用于导出的时候的宽度）  |
 |height  | 高度  | Number | 取样式的高（用于导出的时候的高度）  |
 |minScale  | 最小的缩放  | Number | 1  |
 |maxScale  | 最大的缩放  | Number | 4  |
 |fillStyle  | 填充的颜色  | hex | #fff  |

## 代码
```html
<iImgCut ref="result" class="info" :src="src" :v="fillStyle" ></iImgCut>
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
