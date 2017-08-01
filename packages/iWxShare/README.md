## 右上角分享组件

<div class="i-share-panel-phone">
  <i-button type="primary" @click.native="show = true">share</i-button>
  <iWxShare v-if="show" @close="show=false"></iWxShare>
</div>
<script>
  import iWxShare from 'i-ui/lib/iWxShare'
  export default {
    data () {
      return {
        show: false
      }
    },
    components: {
      iWxShare
    },
    created () {
      document.getElementsByTagName('html')[0].setAttribute("style","font-size: 37.5px;")
    }
  }

</script>
<style lang="scss">
    .i-wx-share { 
      position: absolute !important;
    }
</style>


 ## events
 
 |事件名 | 说明 | 参数 | 默认值 |
 |---  | --- | ---  | --- |
 |close  | 关闭事件  | 无 |  |

## code
```html
<template>
  <i-button type="primary" @click.native="show = true">share</i-button>
  <iWxShare v-if="show" @close="show=false"></iWxShare>
</template>
<script>
  import iSharePanel from 'i-ui/lib/iSharePanel'
  export default {
    data () {
      return {
        show: false
      }
    },
    components: {
      iSharePanel
    },
    methods: {
      share () {
        this.show = true
      }
    }
  }

</script>
```