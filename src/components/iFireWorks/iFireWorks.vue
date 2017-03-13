<template>
  <div class="container" id="container">
  </div>
</template>
<script>
import draw from './draw.js'
export default {
  name: 'iFireWorks',
  props: [
    'imgUrl'
  ],
  watch: {
    imgUrl (val, old) {
      draw.reDraw(val)
    }
  },
  mounted () {
    draw.init(this.$el)
  },
  created () {
  }
}
</script> 
<style>
  .container{
      width: 100%;
      height: 300px;
  }
</style> 
