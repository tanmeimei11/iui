<template>
  <article>
    <iRollBar class="roll-bar" tag="ul" :rollIng="roll" showBar >
      <li v-for="item in items">{{item}}</li>
    </iRollBar>
  </article>
</template>
<script>
  export default {
    name: 'i-roll-bar',
    data () {
      return {
        items: []
      }
    },
    created () {
      for (var idx = 0; idx <= 35; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll (cb) {
        console.log(Date.now())
        for (var idx = 0; idx <= 10; idx++) {
          this.items.push(idx)
        }
        cb()
      }
    }
  }

</script>
<style lang="scss">
  // .roll-bar{
  //    width: 400px;
  //    height: 200px;
  // }
  code {
    margin-top: 20px;
  }

</style>
