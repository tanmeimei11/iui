<template>
  <article>
    <iAvatar src="//inimg01.jiuyan.info/in/2015/12/06/50E0D236-8186-87D4-278E-184399C6B81D-1ndoVWb.jpg"></iAvatar>

    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>src</td>
          <td>头像地址</td>
          <td>String</td>
          <td>无</td>
        </tr>
      </tbody>
    </table>
    <code>
      &lt;iAvatar src="//inimg01.jiuyan.info/in/2015/12/06/50E0D236-8186-87D4-278E-184399C6B81D-1ndoVWb.jpg"&gt;&lt;/iAvatar&gt;
    </code>
  </article>
</template>
<script>
export default {
  name: 'i-avatar'
}
</script>
<style lang="stylus">
  code,h3 {
    margin-top: 20px;
  }
</style>

