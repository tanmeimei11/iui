
<script>
  export default {
    name: 'iRollBar',
    props: {
      tag: {
        require: true,
        type: String,
        default: 'div'
      },
      // debounce: {
      //   type: Number,
      //   default: 1000
      // },
      hasMore: {
        require: true,
        type: Boolean,
        default: true
      },
      rollIng: {
        require: true,
        type: Function,
        default: () => {}
      },
      showBar: {
        type: String
      }
    },
    mounted () {
      this.lock = undefined
      window.lib = window.lib || { }
      window.lib.flexible = window.lib.flexible || {dpr: 1}
      window.lib.flexible.dpr = window.lib.flexible.dpr || 1
      this.$el.__scrollHandle = this.scrollHandler
      window.addEventListener('scroll', this.$el.__scrollHandle, false)
      this.scrollHandler()
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.$el.__scrollHandle)
    },
    watch: {
      hasMore: function (val) {
        if (!val) {
          window.removeEventListener('scroll', this.$el.__scrollHandle)
        }
      }
    },
    methods: {
      scrollHandler (event) {
        if (!this.hasMore) return
        if (this.$el === undefined) return
        if (this.lock !== undefined) return
        let elOffset = this.$el.getBoundingClientRect()
        let screeH = window.screen.height * window.lib.flexible.dpr
        let elBottomOffset = elOffset.top + elOffset.height
        if (elBottomOffset < (screeH + 50)) {
          this.lock = 1
          this.rollIng(() => {
            this.lock = undefined
            this.scrollHandler()
          })
        }
      }
    },
    render (h) {
      const data = {
        class: `i-roll-bar ${(this.showBar === undefined) ? 'hiddenBar' : ''}`
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
