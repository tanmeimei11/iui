<template>
<i-button type="primary" @click="showClick">click me</i-button>
<div class="update-wrap">
  <i-update :modelInfo="modelInfo" :show="show" :close="close"></i-update>
</div>
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
          btns: [
              {
              text: '下次再说',
              url: ''
            },
            {
              color: 'red',
              text: '立即更新',
              url: '//www.in66.com'
            }
          ]
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
<style lang="scss">
.update-wrap{
  margin:20px;
  width:375px;
  height:550px;
  border:1px dotted #ddd;
  position:relative;
  .model{
    position:absolute;
  }
}

</style>

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
          btns: [// 按钮组 最多两个
             {
              text: '下次再说',
              url: ''
            },
            {
              color: 'red',
              text: '立即更新',
              url: '//www.in66.com'
            }
          ]
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
