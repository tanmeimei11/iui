<template>
  <div v-if="!isInApp" class="i-wx-share" v-iTrack="`wx-share_close`" @click="$emit('close')"></div>
</template>
<script>
  import common from 'i-ui/src/utils/common.js'
  import share from 'i-ui/src/utils/share.js'
  import awake from 'i-ui/src/utils/jsBridge.js'
  import iTrack from '../../iTrack'
  export default {
    name: 'iWxShare',
    props: {
      type: {
        type: String,
        default: 'all'
      }
    },
    data () {
      return {
        isInApp: common.isInApp
      }
    },
    directives: {
      iTrack
    },
    created () {
      if (this.isInApp) {
        let key = `shareback${Date.now()}`
        window[`key`] = {
          succ: () => { 
            this.$emit('done', {succ: true})
          },
          cancel: () => {
            this.$emit('done', {cancel: true})
          },
          error: () => {
            this.$emit('done', {error: true})
          }
        }
        awake(`in://in?tovc=102&h5=1&callback=${key}&type=${this.type}`)
        this.$emit('close')
      } else {
        share.config.success = () => { 
          this.$emit('done', {succ: true})
        }
        share.config.cancel = () => {
          this.$emit('done', {cancel: true})
        }
      }
    }
  }

</script>
<style lang="scss">
  .i-wx-share {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('./assets/share.png');
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.60);
    background-position: 4.853333rem 0.133333rem;
    background-size: 4.346667rem 2.36rem;
  }

</style>
