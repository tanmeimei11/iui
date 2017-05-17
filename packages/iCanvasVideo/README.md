<template>
  <article>
    <iCanvasVideo :imgs="imgs" :cover="cover" :interval="interval" :delay="delay" :changeEnd="changeEnd"></iCanvasVideo>  
  </article>
</template>
<script>
  import Vue from 'vue'
  import iCanvasVideo from 'i-ui/lib/iCanvasVideo'
  export default {
    name: 'i-canvas-video',
    components: {
      iCanvasVideo
    },
    data () {
      return {
        imgs: [
          'http://inimg01.jiuyan.info/in/2016/09/24/913100E3-6D1B-6B0D-36FE-2B12F68D7657-1EJWlnD.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2016/09/24/DEB18BB1-8FB5-46A2-DE5A-48E823E9912E-1EJWlnD.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2016/06/01/E2964301-D0AC-21C3-2290-8E6B2D06D507-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2016/06/01/F862F14D-4217-0845-74E8-EF635FC5C713-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg02.jiuyan.info/in/2016/06/01/59765D29-B195-EA0D-3965-A36D15B04CE1-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!'
        ],
         cover: false,
         interval: 1000,
         delay: 0,
      }
    },
    methods:{
      changeEnd (comps) {
        console.log(comps.activeIndex)
      }
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |对象  | 地址 方式 时间间隔  | object | 无 | 

``` html
 <iCanvasVideo :imgs="imgs" :cover="cover" :interval="interval" :changeEnd="changeEnd"></iCanvasVideo>
<script>
  import iCanvasVideo from 'i-ui/lib/iCanvasVideo'
  import Vue from 'vue'
  export default {
    components: {
      iCanvasVideo
    },
    data (){
      return {
        imgs: [
          'http://inimg01.jiuyan.info/in/2016/09/24/913100E3-6D1B-6B0D-36FE-2B12F68D7657-1EJWlnD.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2016/09/24/DEB18BB1-8FB5-46A2-DE5A-48E823E9912E-1EJWlnD.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2016/06/01/E2964301-D0AC-21C3-2290-8E6B2D06D507-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2016/06/01/F862F14D-4217-0845-74E8-EF635FC5C713-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg02.jiuyan.info/in/2016/06/01/59765D29-B195-EA0D-3965-A36D15B04CE1-1QJwvWv.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!'
        ],
         cover: false,
         interval: 1000
      }
    },
    methods:{
      changeEnd (comps) {
        console.log(comps.activeIndex)
      }
    }
  }
</script>
```
