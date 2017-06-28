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
      window.lib = window.lib || {}
      window.lib.flexible = window.lib.flexible || {
        dpr: 1
      }
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
    render (createElement) {
      const data = {
        class: `i-roll-bar ${(this.showBar === undefined) ? 'hiddenBar' : ''}`
      }
      let child = this.$slots.default
      if (this.hasMore) {
        child.push(createElement('svg', {
          attrs: {
            class: 'loading-svg',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 32 32'
          },
          domProps: {
            innerHTML: `<circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
              <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
                keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>
            <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
              <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
                keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>
            <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
              <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
                keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>`
          }
        }))
      }
      return createElement(this.tag, data, child)
    }
  }

</script>
<style lang="scss">
  .i-roll-bar {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    &.hiddenBar::-webkit-scrollbar {
      display: none;
    }

    svg {
      width: .42rem;
      height: .42rem;
      fill: #f54;
    }
  }

</style>
