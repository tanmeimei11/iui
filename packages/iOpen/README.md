<template>
  <article>
    <i-button type="primary" v-iOpen="appUri">click me</i-button>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead> <th>属性</th> <th>说明</th> <th>类型</th> <th>example</th> </thead>
      <tbody>
        <tr> 
        <td>value</td> 
        <td>在app里打开的链接</td> 
        <td>String</td>
        <td>http://h5.in66.com/inpromo/2017/pr-beingmate/index.html</td> 
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  import iOpen from 'i-ui/lib/iOpen'
  export default {
    directives: { iOpen },
    name: 'i-open',
    data () {
      return {
        appUri: `http://h5.in66.com/inpromo/2017/pr-beingmate/index.html`
      }
    }
  }
</script>
``` html
<i-button type="primary" v-iOpen="appUri" >click me</i-button>
<script>
  import iOpen from 'i-ui/lib/iOpen'
  export default {
    directives: { iOpen },
    name: 'i-open',
    data () {
      return {
        appUri: `http://h5.in66.com/inpromo/2017/pr-beingmate/index.html`
      }
    }
  }
</script>

如果iosMessage与androidMessage不一样，请使用
<i-button type="primary" v-iOpen>click me</i-button>
<script>
  window.appUrlObj = {
    'iosMessage': 'http://www.baidu.com', 
    'androidMessage':  'http://www.qq.com'
  };
</script>

如果不是in://webview，请使用
<i-button type="primary" v-iOpen >click me</i-button>
<script>
  window.appUrlObj = {
    'iosMessage':'in://webview?url='+encodeURIComponent(location.origin + '/inpromo/2017/pr-maybelline/index.html'), 
    'androidMessage':'in://webview?url='+encodeURIComponent(location.origin  + '/inpromo/2017/pr-maybelline/index.html')
  };
</script>

```

