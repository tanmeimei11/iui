<template>
  <article>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="1" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="2" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="3" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="4" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="5" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="6" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="7" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="8" @clickImage="clickImageBox"></iImages-box></div>
    <div class="images-box-wrapper"><iImages-box :images="imgs" @clickImage="clickImageBox"></iImages-box></div>
  </article>
</template>
<script>
  import iImagesBox from 'i-ui/lib/iImagesBox'
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
      iImagesBox
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
<div class="images-box-wrapper"><iImages-box :images="imgs" :imagesLength="1" @clickImage="clickImageBox"></images-box></div>
<script>
  import iImagesBox from 'i-ui/lib/iImagesBox'
  export default {
    components: {
      iImagesBox
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
