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
          <td>() => {}</td>
        </tr>
      </tbody>
    </table>
    <code>
      &lt;iRollBar class="roll-bar" tag="ul" :rollIng="roll" showBar &gt;
        &lt;li v-for="item in items"&gt;{{item}}&lt;/li&gt;
      &lt;/iRollBar&gt;
    </code>
    <iRollBar class="roll-bar" tag="ul" :rollIng="roll" showBar >
      <li v-for="item in items">{{item}}</li>
    </iRollBar>
  </article>
</template>
<script>
  export default {
    name: 'i-roll-bar',
    data () {
      return {
        items: []
      }
    },
    created () {
      for (var idx = 0; idx <= 35; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll (cb) {
        console.log(Date.now())
        for (var idx = 0; idx <= 10; idx++) {
          this.items.push(idx)
        }
        cb()
      }
    }
  }

</script>
<style lang="scss">
  // .roll-bar{
  //    width: 400px;
  //    height: 200px;
  // }
  code {
    margin-top: 20px;
  }

</style>
