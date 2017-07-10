

<template>
  <div>
   <i-button type="primary" v-i-update="{v:'3.0.0'}">click me</i-button>
  </div>
</template>
<script>
  export default {
    name: 'i-update',
    data () {
      return {}
    },
    created () {}
  }

</script>
<style lang="scss">


</style>


```html
<i-button type="primary" v-i-update="{v:'3.0.0'}">click me</i-button>
<script>
  import iUpdate from 'i-ui/lib/iUpdate'
  export default {
    directives: {
      iUpdate
    },
    name: 'i-update',
    data() {
      return {}
    }
  }

</script>
```
