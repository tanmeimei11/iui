## 贴纸组件
<div class="phone">
  <iSticker class="stickerImg" ref="sticker" :width="width" :height="height" :stickers="stickers"></iSticker>
</div>
<br/>
<i-button type="primary" @click="showResult">查看结果</i-button>
<br/>
<br/>
<div class="view" v-if="resource"  v-iBgImg.contain="resource"></div>
<script>
  import iBgImg from 'i-ui/lib/iBgImg'
  import iSticker from 'i-ui/lib/iSticker'
  export default {
    data() {
      return {
        resource: '',
        width: 750,
        height: 800,
        stickers: [{
          src: `//inimg01.jiuyan.info/in/2017/06/07/4CE32AA2-C416-DCC7-6B86-27CC17144B27.jpg`,
          left: 400,
          top: 200
        }, {
          src: `//inimg01.jiuyan.info/in/2017/06/07/E2904763-0E64-5536-6A07-E1BD1FA3EC62.jpg`,
          left: 200,
          top: 50
        }, {
          src: `//inimg01.jiuyan.info/in/2017/06/07/9A2E2F22-5468-F790-0F1D-320F4E889FFC.jpg`,
          left: 450,
          top: 500
        }]
      }
    },
    directives: {
      iBgImg
    },
    components: {
      iSticker
    },
    created() {
      document.getElementsByTagName('html')[0].setAttribute("style", "font-size: 37.5px;")
    },
    methods: {
      showResult() {
        this.$refs.sticker.result().then(canvas => {
          if (canvas.toBlob){
          canvas.toBlob(blob => {
            this.resource = URL.createObjectURL(blob)
          }, 'image/png')
          } else {
            this.resource = canvas.toDataURL('image/png')
          }
        })
      }
    }
  }

</script>
<style lang="scss">
  .stickerImg,.view {
    width: 375px;
    height: 400px;
    background: #dedede;
    background-repeat:no-repeat;
  }
</style>


### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |stickers  | 贴纸信息(src、left、top)集合  | Array |  |
 |width  | 用于导出的时候的宽度  | Number |   |
 |height  | 用于导出的时候的高度  | Number |   |

### events
 |事件 | 说明 | 参数 |
 |---  | --- | ---  | 
 |del  | 删除贴纸  | 索引 |  
 |reverse  | 反转元素  | 索引 | 
 |scale  | 缩放元素  | 索引 | 

## 代码
```html
<iSticker class="stickerImg" ref="sticker" :width="width" :height="height" :stickers="stickers"></iSticker>
<div class="view" v-if="resource"  v-iBgImg.contain="resource"></div>
<script>
 import iBgImg from 'i-ui/lib/iBgImg'
 import iSticker from 'i-ui/lib/iSticker'
 export default {
    data() {
      return {
        resource: '',
        width: 375,
        height: 400,
        stickers: [{
          src: `//inimg01.jiuyan.info/in/2017/06/07/4CE32AA2-C416-DCC7-6B86-27CC17144B27.jpg`,
          left: 400,
          top: 200
        }, {
          src: `//inimg01.jiuyan.info/in/2017/06/07/E2904763-0E64-5536-6A07-E1BD1FA3EC62.jpg`,
          left: 200,
          top: 50
        }, {
          src: `//inimg01.jiuyan.info/in/2017/06/07/9A2E2F22-5468-F790-0F1D-320F4E889FFC.jpg`,
          left: 450,
          top: 500
        }]
      }
    },
    directives: {
      iBgImg
    },
    components: {
      iSticker
    },
    methods: {
      showResult() {
        this.$refs.sticker.result().then(res => {
          this.resource = res.toDataURL('image/png')
        })
      }
    }
  }
</script>
```
