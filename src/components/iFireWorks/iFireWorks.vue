<template>
<div>
    <div class="container" id="container">
      <canvas id="canvas"></canvas>
    </div>
</div>
</template>
<script>
import draw from './draw.js'
export default {
  name: 'iFireWorks',
  created () {
    console.log('111')
    draw.init()
  }
}
</script> 
<style>
  .container{
      width: 100%;
      height: 300px;
  }
</style> 
