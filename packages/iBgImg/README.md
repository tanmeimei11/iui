## 设置背景图片
<template>
  <article>
    <div class="sample" v-i-bg-img="coverUrl"></div>
    <div class="sample" v-i-bg-img.lazyload="coverUrl"></div>
    <div class="sample" v-iBg-img.cover="coverUrl"></div>
    <div class="sample" v-iBgImg.contain="coverUrl"></div>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>参数（可选）</th>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>背景图片地址(自动修复http/https,根据当前页面)</td>
          <td>String</td>
          <td>1. cover（设置backgroundSize）<br />2. contain（设置backgroundSize）<br />3. lazyload（实验性功能）</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>
<style lang="scss">
  .sample {
    width: 200px;
    height: 200px;
    display: inline-block;
  }

</style>
<script>
  import iBgImg from 'i-ui/lib/iBgImg'
  export default {
    directives: {
      iBgImg
    },
    name: 'i-bg-img',
    data() {
      return {
        coverUrl: 'https://inimg01.jiuyan.info/in/2017/04/14/8C5FF0BE-24B3-4F69-C941-0A781ABBCE95.jpg'
      }
    }
  }

</script>

```html
<div class="sample" v-i-bg-img="coverUrl"></div>
<div class="sample" v-i-bg-img.lazyload="coverUrl"></div>
<div class="sample" v-iBg-img.cover="coverUrl"></div>
<div class="sample" v-iBgImg.contain="coverUrl"></div>
<script>
  import iBgImg from 'i-ui/lib/iBgImg'
  export default {
    directives: {
      iBgImg
    },
    name: 'i-bg-img',
    data() {
      return {
        coverUrl: 'https://inimg01.jiuyan.info/in/2017/04/14/8C5FF0BE-24B3-4F69-C941-0A781ABBCE95.jpg'
      }
    }
  }

</script>
```
