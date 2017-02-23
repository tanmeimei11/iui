<template>
  <article>
    <iAudio autoplay loop src="//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"></iAudio>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr> <td>src</td> <td>音乐地址</td> <td>String</td> <td>无</td></tr>
        <tr> <td>autoplay</td><td>同audio属性</td><td>String</td> <td>无</td></tr>
        <tr> <td>loop</td><td>同audio属性</td><td>String</td> <td>无</td></tr>
        <tr> <td>preload</td><td>同audio属性</td><td>String</td> <td>无</td></tr>
      </tbody>
    </table>
    <code>
      &lt;iAudio autoplay loop src="//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"&gt;&lt;/iAudio&gt;
    </code>
  </article>
</template>
<script>
export default {
  name: 'i-audio'
}
</script>
<style lang="stylus"> 
  code {
    margin-top: 20px;
  }
</style>

