## 加载
<template>
  <div >
    <iLoading :loading="loading"></iLoading>
  </div>
</template>
<script>
  import iLoading from 'i-ui/lib/iLoading'
  export default {
    data (){
      return {
        loading: true
      }
    },
    components: {
      iLoading,
    },
    mounted() {
      document.documentElement.style.fontSize = '75px'
    },
    beforeDestroy() {
      document.documentElement.style.fontSize = ''
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |loading  | 是否动画  | Boolean | true  |
 |color  | 颜色  | String | red  |
 |fixed  | 页面居中  | Boolean | false  |

 ## 代码
```html
<iLoading :loading="loading"></iLoading>
<script>
  import iLoading from 'i-ui/lib/iLoading'
  export default {
    data (){
      return {
        loading: true
      }
    },
    components: {
      iLoading,
    },
  }
</script>
````