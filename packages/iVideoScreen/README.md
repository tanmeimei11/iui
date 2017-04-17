<template>
  <article>
    <i-button type="primary" @click.stop="play">click me</i-button>
    <iVideSreen></iVideSreen>  
  </article>
</template>
<script>
  import Vue from 'vue'
  import iVideSreen from 'i-ui/lib/iVideoScreen'
  export default {
    name: 'i-video-screen',
    components: {
      iVideSreen
    },
    created () {
      this.$eventHub.$on('iVideoScreen:end', ()=>{
        console.log('end')
      })
    },
    methods: {
      play () {
        let url = 'http://vooha01.jiuyan.info/bc/2017/04/08/893C7DEC-758D-BFC7-C393-B3BF4C2460D4-1MVZAnQ.mp4'
        this.$eventHub.$emit('iVideoScreen:playVideo', url)
      }
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |src  | 视频地址  | String | 无 | 

``` html
<iVideoScreen></iVideoScreen>  
<script>
  import iVideSreen from 'i-ui/lib/iVideoScreen'
  import Vue from 'vue'
  export default {
    components: {
      iVideSreen
    },
    created () {
      this.$eventHub.$on('iVideoScreen:end', ()=>{
        console.log('end')
      })
    },
    methods: {
      play () {
        let url = 'http://vooha01.jiuyan.info/bc/2017/04/08/893C7DEC-758D-BFC7-C393-B3BF4C2460D4-1MVZAnQ.mp4'
        let $eventHub = this.$eventHub || this.$root.$eventHub || (this.$root.$eventHub = new Vue())
        $eventHub.$emit('iVideoScreen:playVideo', url)
      }
    }
</script>
```
