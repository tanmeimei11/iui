
<script>
  export default {
    name: 'i-roll-bar',
    props: {
      hiddenBar: {
        type: String,
        default: 'true'
      },
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      debugger
      const data = {
        // class: `i-roll-bar ${Boolean(this.hiddenBar) ? 'hiddenBar' : ''}`
      }
      return h(this.tag, data, this.$slots.default)
    }
  }
</script>
<style lang="scss">
  .i-roll-bar{
     -webkit-overflow-scrolling: touch;
     overflow: auto;
     &.hiddenBar::-webkit-scrollbar {
       display: none;
     }
  }
</style>
