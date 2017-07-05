## 分享组件
<div class="i-share-panel-phone">
  <i-button type="primary" @click.native="share">share</i-button>
  <iSharePanel :show="show" @invoke="invoke" @close="show=false"></iSharePanel>
</div>
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
    created () {
      document.getElementsByTagName('html')[0].setAttribute("style","font-size: 37.5px;")
    },
    methods: {
      share () {
        this.show = true
      },
      invoke (type) {
        alert(type)
      }
    }
  }

</script>
<style lang="scss">
  .i-share-panel-phone {
    position: relative;
    width: 375px;
    height: 400px;
    border: 1PX dashed #000;
    .i-share-panel { 
      position: absolute;
    }
  }
</style>

## props

 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |show  | 是否显示  | Boolean | false |
 |types  | 分享的渠道  | Array | ['wechat', 'wechattimeline', 'qq', 'weibo'] |

 ## events
 
 |事件名 | 说明 | 参数 | 默认值 |
 |---  | --- | ---  | --- |
 |invoke  | 点击按钮  | 渠道字符串 | 无 |
 |close  | 关闭事件  | 无 |  |

## code
```html
<div class="phone">
  <i-button type="primary" @click.native="share">share</i-button>
  <iSharePanel :show="show" @invoke="invoke" @close="show=false"></iSharePanel>
</div>
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
      },
      invoke (type) {
        alert(type)
      }
    }
  }

</script>
```