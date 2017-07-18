## 错误展示
<div class="i-error-panel-phone">
   <iError :errMsg="`找不到你想要的页面`" @click="error">
     反馈给🥜
   </iError>
</div>
<script>
  import iError from 'i-ui/lib/iError'
  export default {
    components: {
      iError
    },
    created() {
      document.getElementsByTagName('html')[0].setAttribute("style", "font-size: 37.5px;")
    },
    methods: {
      error () {
        console.log(1)
      }
    }
  }

</script>
<style lang="scss">
  .i-error-panel-phone {
    position: relative;
    width: 375px;
    height: 400px;
    border: 1PX dashed #000;
    box-sizing: content-box;
    .i-error { 
      position: absolute;
    }
  }
</style>

 ### props 
|属性 | 说明 | 类型 | 默认值 | 
|--- | --- | --- | --- | 
|errMsg | 错误提示 | String | 找不到你想要的页面

### slot
| 说明 | 类型 | 默认值 | 
|--- | --- | --- | 
| 错误提示字符串 | String | 反馈给小in君

### events 
|事件 | 说明 | 参数 |
|--- | --- | --- | 
|click | 按钮点击 | 

## 代码 
```html
<div class="i-error-panel-phone">
   <iError :errMsg="`找不到你想要的页面`" @click="error">
     反馈给🥜
   </iError>
</div>
<script>
  import iError from 'i-ui/lib/iError'
  export default {
    components: {
      iError
    },
    created() {
      document.getElementsByTagName('html')[0].setAttribute("style", "font-size: 37.5px;")
    },
    methods: {
      error () {
        console.log(1)
      }
    }
  }

</script>
```` 

