<template>
  <article>
    <iBarrage :list="list" :lane="[100,10,250,200,225,150,175]" @done="doneBarrage"></iBarrage>
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
        <tr>
          <td>lane</td>
          <td>弹幕漂流的Y坐标</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>done</td>
          <td>弹幕结束的回掉</td>
          <td>function</td>
          <td>[]</td>
        </tr>
      </tbody>
    </table>
    <code>
      &lt;iBarrage :list="[{<br>          txt: '~我卡咔咔',<br>          fontSize: '11px',<br>          color: '#000',<br>          speed: 1,<br>          time: 1<br>        }, {<br>          txt: '你踩踩~',<br>          fontSize: '11px',<br>          color: '#000',<br>          speed: 1,<br>          time: 2<br>        }, {<br>          txt: '我是弹幕~',<br>          fontSize: '11px',<br>          color: '#000',<br>          speed: 2,<br>          time: Infinity<br>        }]" :lane="[100,10,250]" @done="doneBarrage"&gt;&lt;/iBarrage&gt;·
    </code>
  </article>
</template>
<script>
  export default {
    name: 'i-barrage',
    data () {
      return {
        list: [{
          txt: '~我卡咔咔',
          fontSize: '11px',
          color: '#000',
          speed: 1,
          time: 1
        }, {
          txt: '你踩踩~',
          fontSize: '11px',
          color: '#000',
          speed: 1,
          time: 2
        }, {
          txt: '我是弹幕~',
          fontSize: '11px',
          color: '#000',
          speed: 2,
          time: Infinity
        }]
      }
    },
    methods: {
      randomTxt () {
        return eval(`'\\u${(Math.round(Math.random() * 20901) + 19968).toString(16)}'`)  //eslint-disable-line
      },
      doneBarrage (item, idx) {
        console.log('done')
        this.list.splice(idx, 1)
        this.list.push({
          txt: `${this.randomTxt()}${this.randomTxt()}${this.randomTxt()}${this.randomTxt()}`,
          fontSize: '11px',
          color: '#000',
          speed: (Math.random() + 1),
          time: 1
        })
      }
    }
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
