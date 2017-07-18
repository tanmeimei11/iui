<template>
<i-button type="primary" @click="showClick">click me</i-button>
<i-update :modelInfo="modelInfo" :show="show"></i-update>
 
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
          textList: ['fsadf'],
          btns: {
            left: {
              text: '下次再说',
              url: ''
            },
            right: {
              color: 'red',
              text: '立即更新',
              url: ''
            }
          }
        }
      }
    },
    methods:{
      showClick(){
        this.show = true
      }
    }
  }

</script>

```html
参数：
代码：
```
