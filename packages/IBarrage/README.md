<template>
  <article>
    <iBarrage :list="list" :lane="[100,10,250,200,225,150,175]" :runing="runing" :direction="direction" @done="doneBarrage"></iBarrage>
    <br />
    <i-button type="primary" @click.native="toggleRun()">toggle Run</i-button>
    <i-button type="primary" @click.native="toggleDirection()">toggle Direction</i-button>
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
      </tbody>
    </table>
    <h3>Event</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>done</td>
          <td>弹幕结束的回掉</td>
          <td>function</td>
          <td>(item, index) => {}</td>
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
  </article>
</template>
<script>
  import iBarrage from 'i-ui/lib/iBarrage'
  export default {
    name: 'i-barrage',
    components: {
      iBarrage
    },
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
        runing: true,
        direction: 'left'
      }
    },
    methods: {
      toggleRun () {
        this.runing = !this.runing
      },
      toggleDirection () {
        this.direction = this.direction === 'left' ? 'right' : 'left'
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

```html
<iBarrage :list="list" :lane="[100,10,250,200,225,150,175]" :runing="runing" :direction="direction" @done="doneBarrage"></iBarrage>
<br />
<i-button type="primary" @click.native="toggleRun()">toggle Run</i-button>
<i-button type="primary" @click.native="toggleDirection()">toggle Direction</i-button>
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
        runing: true,
        direction: 'left'
      }
    },
    methods: {
      toggleRun () {
        this.runing = !this.runing
      },
      toggleDirection () {
        this.direction = this.direction === 'left' ? 'right' : 'left'
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
```
