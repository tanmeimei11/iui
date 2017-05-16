<template>
  <article>
    <i-button type="primary" v-iTrack="trackMessage">click me</i-button>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead> <th>属性</th> <th>说明</th> <th>类型</th> <th>example</th> </thead>
      <tbody>
        <tr> <td>value</td> <td>埋点名称＋查询参数</td> <td>String</td><td>example*test*track 或 example*test*track?a=b&c=d</td> </tr>
      </tbody>
    </table>
    <h3>global 参数</h3>
    <table class="bordered responsive-table">
      <thead> <th>属性</th> <th>说明</th> <th>类型</th> <th>example</th> </thead>
      <tbody>
        <tr> <td>_track</td> <td>所有埋点都会追加参数</td> <td>Array</td><td>window._track  = ['c=c']</td> </tr>
        <tr> <td>_trackPrefix</td> <td>所有埋点都会添加的前缀</td> <td>String</td><td>window._trackPrefix  = 'begin'</td> </tr>
        <tr> <td>_trackSuffix</td> <td>所有埋点都会添加的后缀</td> <td>String</td><td>window._trackSuffix  = 'end'</td> </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  window._trackPrefix  = 'begin_'
  window._trackSuffix  = '_end'
  window._track  = ['c=c']
  import iTrack from 'i-ui/lib/iTrack'
  export default {
    directives: {
      iTrack
    },
    name: 'i-track',
    data () {
      return {
        trackMessage: 'example*test*track?a=b&c=d'
      }
    },
    created () {
      setTimeout(()=>{
        this.trackMessage = `example*test*track?a=b&c=d&date=${Date.now()}`
      })
    }
  }
</script>

```html
<i-button type="primary" v-iTrack="trackMessage">click me</i-button>
<script>
  import iTrack from 'i-ui/lib/iTrack'
  export default {
    directives: {
      iTrack
    },
    name: 'i-track',
    data () {
      return {
        trackMessage: 'example*test*track?a=b&c=d'
      }
    }
  }
</script>
```
