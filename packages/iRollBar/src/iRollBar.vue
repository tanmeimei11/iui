
<script>
  export default {
    name: 'i-roll-bar',
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      // debounce: {
      //   type: Number,
      //   default: 1000
      // },
      rollIng: {
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
      window.addEventListener('scroll', this.scrollHandler, false)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    methods: {
      scrollHandler (event) {
        if (this.$el === undefined) return
        if (this.lock !== undefined) return
        let elH = this.$el.clientHeight
        let elOffset = this.$el.getBoundingClientRect()
        let screeH = window.screen.height * window.lib.flexible.dpr
        let elBottomOffset = elOffset.top + elH
        if (elBottomOffset < (screeH + 50)) {
          this.lock = 1
          this.rollIng(() => {
            this.lock = undefined
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
