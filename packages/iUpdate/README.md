<template>
<i-button type="primary" @click="showClick">click me</i-button>
<i-update :modelInfo="modelInfo" :show="show" :close="close"></i-update>
 
</template>
<script>
  import iUpdate from 'i-ui/lib/iUpdate'
  export default {
     components:{
      iUpdate
    },
    data() {
      return {
        show: false,
        modelInfo: {
          title: '版本更新',
          textList: ['版本过低，去升级吧～'],
          btns: {
            right: {
              color: 'red',
              text: '立即更新',
              url: '//www.in66.com'
            }
          }
        }
      }
    },
    methods:{
      close(){
          this.show = false
      },  
      showClick(){
        this.show = true
      }
    }
  }

</script>

```html
代码：
<template>
  <i-update :modelInfo="modelInfo" :show="show" :close="close"></i-update>
</template>
<script>
  import iUpdate from 'i-ui/lib/iUpdate'
  export default {
     components:{
      iUpdate
    },
    data() {
      return {
        show: false,
        modelInfo: {
          title: '版本更新', // 主标题
          textList: ['版本过低，去升级吧～'], // 次标题 数组 可填多个
          btns: {// 按钮组 最多两个
            right: {
              color: 'red',
              text: '立即更新',
              url: '//www.in66.com'
            }
          }
        }
      }
    },
    methods:{
      close(){
          this.show = false
      },  
      showClick(){
        this.show = true
      }
    }
  }
```
