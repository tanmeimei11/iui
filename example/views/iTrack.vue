<template>
  <article>
    <r-btn class="blue white-text" large v-wave.light v-iTrack="trackMessage">click me</r-btn>
    <table class="bordered responsive-table">
      <thead> <th>属性</th> <th>说明</th> <th>类型</th> <th>example</th> </thead>
      <tbody>
        <tr> <td>value</td> <td>埋点名称＋查询参数</td> <td>String</td><td>example*test*track 或 example*test*track?a=b&c=d</td> </tr>
      </tbody>
    </table>
    <code>
      &lt;div v-iTrack="{{ trackMessage }}"&gt;&lt;/div&gt;
    </code>
  </article>
</template>
<script>
export default {
  name: 'i-audio',
  data () {
    return {
      trackMessage: 'example*test*track?a=b&c=d'
    }
  }
}
</script>
<style lang="stylus"> 
  code {
    margin-top: 20px;
  }
</style>

