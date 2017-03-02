<template>
  <article>
    <iBarrage :list="list" :lane="[100,10,250,200,225,150,175]" :runing="runing" @done="doneBarrage"></iBarrage>
    <br />
     <r-btn class="blue white-text" large v-wave.light @click.native="toggleRun()">toggle Run</r-btn>
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
          <td>direction</td>
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
          <td>runing</td>
          <td>是否运行</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>done</td>
          <td>弹幕结束的回掉</td>
          <td>function</td>
          <td>[]</td>
        </tr>
      </tbody>
    </table>
    <h3>list的对象参数</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>例子</th>
      </thead>
      <tbody>
        <tr>
          <td>txt</td>
          <td>文字</td>
          <td>String</td>
          <td>我是弹幕</td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>文字大小</td>
          <td>String</td>
          <td>11px</td>
        </tr>
        <tr>
          <td>color</td>
          <td>颜色</td>
          <td>HEX</td>
          <td>#000</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>速度</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>time</td>
          <td>次数</td>
          <td>Number</td>
          <td>Infinity （表示无穷大）</td>
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
        }],
        runing: true
      }
    },
    methods: {
      toggleRun () {
        this.runing = !this.runing
      },
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
