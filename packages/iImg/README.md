## 图片预览
<template>
 
点击图片预览<div class="img" v-iImg="`https://inimg05.jiuyan.info/in/2017/07/05/7E690CC2-251E-EEA3-FC4E-616D6352C361-1agKNdQV.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!`"></div>
</template>
<style lang="scss">
	.img{
		width:200px;
		height: 200px;
	}
</style>
<script>
  import iImg from './index'

  export default {
    components: {},
    directives:{
      'iImg': iImg
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

## 代码
```html
<div  v-iImg="imgUrl"></div>
<script>
  import iImg from 'i-ui/packages/iImg'
  export default {
    directives: {
      'iImg':iImg
    },
    data() {
      return {
        imgUrl:'https://inimg05.jiuyan.info/in/2017/07/05/7E690CC2-251E-EEA3-FC4E-616D6352C361-1agKNdQV.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!'
      }
    }
  }
</script>
```
