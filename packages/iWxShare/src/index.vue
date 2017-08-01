<template>
  <div v-if="!isInApp" class="i-wx-share" v-iTrack="`wx-share_close`" @click="$emit('close')"></div>
</template>
<script>
  import common from 'i-ui/src/utils/common.js'
  import awake from 'i-ui/src/utils/jsBridge.js'
  export default {
    name: 'iWxShare',
    data () {
      return {
        isInApp: common.isInApp
      }
    },
    created () {
      if (this.isInApp) {
        awake('in://in?tovc=102&h5=1&callback=cb_test&type=all')
        this.$emit('close')
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
