<template>
    <div class="component i-video-screen" :class="{on: isOn, off: !isOn}" ref="videoWrap">
        <video ref="video" controls="controls" :src="src" x5-video-player-fullscreen="true" x5-video-player-type="h5"></video>
    </div>      
</template>
<script>
  import Vue from 'vue'
  Vue.use(Vue => {
    Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
  })
  export default {
    name: 'iVideoScreen',
    props: {
      url: {
        type: String
      }
    },
    data () {
      return {
        src: '',
        isOn: false
      }  
    },
    computed: {
      isIos: () => (/iphone|ipod|ipad/gi.test(window.navigator.userAgent.toLowerCase()))
    },
    created () {
      this.$eventHub.$on('iVideoScreen:playVideo', this.play)
    },
    mounted () {
      window.onresize = () => {
        if (this.isIos) return
        if (this.$refs.video.paused && this.isOn) {
          this.off()
        }
      }
      this.$refs.video.addEventListener('webkitendfullscreen', () => {
        this.off()
      }, false)
      this.$refs.video.onended = () => {
        this.off()
      }
      this.$refs.videoWrap.addEventListener('click', event => {
        if (this.src === '') return
        if (event.target === this.$refs.video) {
          this.togglePlay()
        } else {
          this.off()
        }
      })
    },
    methods: {
      off () {
        this.src = ''
        this.isOn = false
        this.$eventHub.$emit('iVideoScreen:end')
      },
      togglePlay () {
        if (this.$refs.video.paused) {
          this.$refs.video.play()
        } else {
          this.$refs.video.pause()
        }
      },
      play (videoUrl) {
        this.src = videoUrl 
        this.isOn = true
        this.$nextTick(() => {
          this.$refs.video.play()
          this.$refs.video.autoplay = true
        })
      }
    }
  }
</script>
<style lang="scss">
  @mixin size($size){
    $w:nth($size,1);
    $h:$w;
    @if (length($size)==2){
      $h:nth($size,2);
    }
    width: $w;
    height: $h;
  }
  @mixin pos($name, $position) {
    position: $name;
    top: nth($position,1);
    right: nth($position,2);
    bottom: nth($position,3);
    left: nth($position,4);
  }
  .component {
    position: relative;     
  }
  .i-video-screen {
    display: none;
    z-index: 99;
    @include size(100%);
    @include pos(fixed, 0 null null 0);
    background: rgba(0, 0, 0, .9);
    &.on {
      display: block;
    }
    video {
      width: 100%;
      @include pos(absolute, 0 null null 0);
      top: 50%;
      transform: translate(0, -50%);
    }
  }
</style>
