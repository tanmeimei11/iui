<script>
  export default {
    name: 'iRollBar',
    props: {
      tag: {
        require: true,
        type: String,
        default: 'div'
      },
      debounce: {
        type: Number,
        default: 100
      },
      hasMore: {
        require: true,
        type: Boolean,
        default: true
      },
      showBar: {
        type: String
      }
    },
    mounted () {
      this.lock = undefined
      window.lib = window.lib || {}
      window.lib.flexible = window.lib.flexible || {
        dpr: 1
      }
      window.lib.flexible.dpr = window.lib.flexible.dpr || 1
      this.$el.__scrollHandle = this.scrollHandler
      window.addEventListener('scroll', this.$el.__scrollHandle)
      // document.addEventListener('touchmove', this.$el.__scrollHandle)
      this.scrollHandler()
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.$el.__scrollHandle)
      // document.removeEventListener('touchmove', this.$el.__scrollHandle)
    },
    methods: {
      scrollHandler (event) {
        if (!this.hasMore) return
        if (this.$el === undefined) return
        if (this.lock !== undefined) return
        let elOffset = this.$el.getBoundingClientRect()
        let screeH = (window.screen.height + 1000) * window.lib.flexible.dpr
        let elBottomOffset = elOffset.top + elOffset.height
        if (elBottomOffset < screeH) {
          this.$emit('scroll')
          this.lock = setTimeout(() => {
            this.lock = undefined
            this.scrollHandler()
          }, this.debounce)
        }
      }
    },
    render (createElement) {
      return createElement(this.tag, {
        class: `i-roll-bar ${(this.showBar === undefined) ? 'hiddenBar' : ''}`
      }, this.$slots.default)
    }
  }

</script>
<style lang="scss">
  .i-roll-bar {
    // -webkit-overflow-scrolling: touch;
    // overflow: auto;
    &.hiddenBar::-webkit-scrollbar {
      display: none;
    }
  }

</style>
