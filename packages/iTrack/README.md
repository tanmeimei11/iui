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
  </article>
</template>

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
