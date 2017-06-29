<template>
  <article>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="1" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="2" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="3" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="4" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="5" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="6" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="7" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="8" @clickImage="clickImageBox"></images-box></div>
    <div class="images-box-wrapper"><images-box :images="imgs" @clickImage="clickImageBox"></images-box></div>
  </article>
</template>
<script>
  require('../../lib/theme-default/imagesBox.css')
  import imagesBox from '../../lib/imagesBox'
  export default {
    name: 'images-box-example',
    data () {
      let exampleUrl = 'http://inimg05.jiuyan.info/in/2017/04/11/AD70A4B2-A492-1E08-FEDC-E5B117D313B2-1rzMYEZj.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!' 
      return {
        imgs: [
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl }
        ]
      }
    },
    components: {
      imagesBox
    },
    methods: {
      clickImageBox (idx) {
        console.log(`image-${idx} clicked!`)
      } 
    }
  }
</script>
<style>
.images-box-wrapper {
  margin-bottom: 15px;
  width: 200px; 
  height: 200px; 
  overflow: hidden;
}
</style>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |images  | 图片对象数组  | Array | [] | 
 |imageLength  | 显示数量  | Number | images.length | 
 |@clickImage  | 点击单个图片  | Method | 无 | 

``` html
<div class="images-box-wrapper"><images-box :images="imgs" :imagesLength="1" @clickImage="clickImageBox"></images-box></div>
<script>
  import imagesBox from 'i-ui/lib/imagesBox'
  export default {
    components: {
      imagesBox
    },
    data () {
      let exampleUrl = 'http://inimg05.jiuyan.info/in/2017/04/11/AD70A4B2-A492-1E08-FEDC-E5B117D313B2-1rzMYEZj.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!' 
      return {
        imgs: [
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl },
          { url: exampleUrl }
        ]
      }
    },
    methods: {
      clickImageBox (idx) {
        console.log(`image-${idx} clicked!`)
      }
    }
</script>
```
