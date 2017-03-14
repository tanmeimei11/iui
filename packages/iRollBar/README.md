<template>
  <article>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>说明</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>tag</td>
          <td>转换的标签</td>
          <td>String</td>
          <td></td>
          <td>div</td>
        </tr>
        <tr>
          <td>showBar</td>
          <td>显示滚动条</td>
          <td>String</td>
          <td>当不写的时候不显示</td>
          <td>undefind</td>
        </tr>
        <tr>
          <td>rollIng</td>
          <td>滚动事件</td>
          <td>Function</td>
          <td>第一个参数为回掉参数</td>
          <td>(done) => {}</td>
        </tr>
      </tbody>
    </table>
    <iRollBar class="roll-bar" tag="ul" :rollIng="roll" showBar>
       <li v-for="(item,idx) in items" :key="idx">{{item}}</li>
    </iRollBar>
  </article>
</template>
<script>
  import iRollBar from 'i-ui/lib/iRollBar'
  export default {
    components: {
      iRollBar
    },
    name: 'i-roll-bar',
    data() {
      return {
        items: []
      }
    },
    created() {
      for (var idx = 0; idx <= 35; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll(done) {
        console.log(Date.now())
        for (var idx = 0; idx <= 10; idx++) {
          this.items.push(idx)
        }
        done()
      }
    }
  }

</script>

## aaa
```html
<iRollBar class="roll-bar" tag="ul" :rollIng="roll" showBar>
  <li v-for="(item,idx) in items" :key="idx">{{item}}</li>
</iRollBar>
<script>
  import iRollBar from 'i-ui/lib/iRollBar'
  export default {
    components: {
      iRollBar
    },
    name: 'i-roll-bar',
    data() {
      return {
        items: []
      }
    },
    created() {
      for (var idx = 0; idx <= 35; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll(done) {
        console.log(Date.now())
        for (var idx = 0; idx <= 10; idx++) {
          this.items.push(idx)
        }
        done()
      }
    }
  }

</script>
```
