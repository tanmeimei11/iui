<template>
  <article>
    <i-button type="primary" v-iLongTap="tap">long tap me</i-button>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead> <th>属性</th> <th>说明</th> <th>类型</th> <th>example</th> </thead>
      <tbody>
        <tr> <td>value</td> <td>长按的事件</td> <td>Function</td><td></td> </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  import iLongTap from 'i-ui/lib/iLongTap'
  export default {
    directives: {
      iLongTap
    },
    name: 'i-long-tap',
    methods:{
      tap(){
        this.$emit('tap')
      }
    }
  }
</script>

```html
<i-button type="primary" v-iLongTap="tap">long tap me</i-button>
<script>
  import iLongTap from 'i-ui/lib/iLongTap'
  export default {
    directives: {
      iLongTap
    },
    name: 'i-long-tap',
    methods:{
      tap(){
        this.$emit('tap')
      }
    }
  }
</script>
```
