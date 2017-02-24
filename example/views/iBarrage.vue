<template>
  <article>
    <iBarrage :list="[{
          txt: '~我卡咔咔',
          fontSize: '11px',
          color: '#000',
          offsetX: 0,
          offsetY: 16,
          speed: 1,
          time: 1
        }, {
          txt: '你踩踩~',
          fontSize: '11px',
          color: '#000',
          offsetX: 32,
          offsetY: 30,
          speed: 1,
          time: 2
        }, {
          txt: '我是弹幕~',
          fontSize: '11px',
          color: '#000',
          offsetX: 80,
          offsetY: 100,
          speed: 2,
          time: Infinity
        }]"></iBarrage>
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
          <td>direction 【暂未支持】</td>
          <td>方向</td>
          <td>String</td>
          <td>left</td>
        </tr>
        <tr>
          <td>list</td>
          <td>弹幕数据</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
      </tbody>
    </table>
    <code>
      &lt;iBarrage :list="[{<br>          txt: '~我卡咔咔',<br>          fontSize: '11px',<br>          color: '#000',<br>          offsetX: 0,<br>          offsetY: 16,<br>          speed: 1,<br>          time: 1<br>        }, {<br>          txt: '你踩踩~',<br>          fontSize: '11px',<br>          color: '#000',<br>          offsetX: 32,<br>          offsetY: 30,<br>          speed: 1,<br>          time: 2<br>        }, {<br>          txt: '我是弹幕~',<br>          fontSize: '11px',<br>          color: '#000',<br>          offsetX: 80,<br>          offsetY: 100,<br>          speed: 2,<br>          time: Infinity<br>        }]"&gt;&lt;/iBarrage&gt;
    </code>
  </article>
</template>
<script>
  export default {
    name: 'i-barrage'
  }

</script>
<style lang="scss">
  code {
    margin-top: 20px;
  }

  .i-barrage {
    width: 300px;
    height: 300px;
  }

</style>
