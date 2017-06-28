```html
<template>
  <article>
    <iRollBar class="roll-bar" tag="ul" :hasMore="hasMore" :rollIng="roll" showBar>
       <li v-for="(item,idx) in items" :key="idx" v-text=“item”></li>
    </iRollBar>
  </article>
</template>
<script>
  import iRollBar from 'i-ui/lib/iRollBar'
  export default {
    components: {
      iRollBar
    },
    name: 'i-roll-bar',
    data() {
      return {
        hasMore: true,
        items: []
      }
    },
    created() {
      for (var idx = 0; idx <= 5; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll(done) {
        if (this.items.length >= 30) {
          this.hasMore = false;
        }
        console.log(1)
         setTimeout(() => {
          for (var idx = 0; idx <= 10; idx++) {
            this.items.push(idx)
          }
          done()
        }, 1000)
      }
    }
  }
</script>

```


<template>
  <article>
    <iRollBar class="roll-bar" tag="ul" :hasMore="hasMore" :rollIng="roll" showBar>
       <li v-for="(_,idx) in items" :key="idx">{{_}}</li>
    </iRollBar>
  </article>
</template>
<script>
  import iRollBar from 'i-ui/lib/iRollBar'
  export default {
    components: {
      iRollBar
    },
    name: 'i-roll-bar',
    data() {
      return {
        hasMore: true,
        items: []
      }
    },
    mounted() {
      document.documentElement.style.fontSize = '75px'
    },
    beforeDestroy() {
      document.documentElement.style.fontSize = ''
    },
    created() {
      for (var idx = 0; idx <= 5; idx++) {
        this.items.push(idx)
      }
    },
    methods: {
      roll(done) {
        if (this.items.length >= 30) {
          this.hasMore = false;
        }
        console.log(1)
         setTimeout(() => {
          for (var idx = 0; idx <= 10; idx++) {
            this.items.push(idx)
          }
          done()
        }, 1000)
      }
    }
  }

</script>
