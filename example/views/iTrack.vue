<template>
  <article>
    <r-btn class="blue white-text" large v-wave.light v-iTrack="trackMessage">click me</r-btn>
    <code>
      &lt;div v-iTrack="{{ trackMessage }}"&gt;&lt;/div&gt;
    </code>
  </article>
</template>
<script>
import iTrack from '../../src/directives/iTrack'
export default {
  name: 'i-audio',
  data () {
    return {
      trackMessage: 'example*test*track'
    }
  },
  directives: { iTrack }
}
</script>
<style lang="stylus"> 
  code {
    margin-top: 20px;
  }
</style>

