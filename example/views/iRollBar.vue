<template>
  <article>
    <iRollBar class="roll-bar" tag="ul" hidden-bar="false">
       <li v-for="item in items">{{item}}</li>
    </iRollBar>
  </article>
</template>
<script>
export default {
  name: 'i-roll-bar',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
  }
}
</script>
<style lang="scss">
  .roll-bar{
     width: 400px;
     height: 200px;
  }
  code {
    margin-top: 20px;
  }
</style>

