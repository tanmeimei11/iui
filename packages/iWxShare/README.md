## 右上角分享组件
不用判断in还是wx只要 显示组件即可

<div class="i-share-panel-phone">
  <i-button type="primary" @click.native="show = true">share</i-button>
  <iWxShare v-if="show" @close="show=false" @done="done"></iWxShare>
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
    },
    methods:{
      done({succ,cancel,error}) {
        alert(succ)
      }
    }
  }

</script>
<style lang="scss">
    .i-wx-share { 
      position: absolute !important;
    }
</style>

 ## props

 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |type  | 分享的渠道名字  | string | all |

 ## events
 
 |事件名 | 说明 | 参数 | 默认值 |
 |---  | --- | ---  | --- |
 |close  | 关闭事件  | 无 |  |
 |done  | 分享回调  | 状态 | （{succ,cancel,error})=>{} |

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
    }
  }

</script>
```