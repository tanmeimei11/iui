<template>
  <div class="i-audio" :class="[{on: isOn, off: !isOn},{rotate:isRotate}]" :rotate="rotate" @click.stop.prevent="toggle" >
    <audio  :autoplay="autoplay" :loop="loop" :preload="preload" :src="src" ref="audio" />
  </div>
</template>

<script>
  export default {
    name: 'iAudio',
    data () {
      return {
        isOn: false,
        isRotate: false
      }
    },
    props: {
      rotate: Boolean,
      loop: Boolean,
      preload: Boolean,
      autoplay: Boolean,
      src: {
        type: String,
        required: true
      }
    },
    mounted () {
      let audio = this.$refs.audio
      if (audio.autoplay) {
        this.audioAutoPlay()
      }
    },
    created () {
      if(this.rotate){
        this.isRotate = true
      }
    },
    beforeDestroy () {
      document.removeEventListener('touchstart', this.play, false)
    },
    methods: {
      play () {
        this.isOn = true
        this.$refs.audio.play()
        this.$emit('play')
        document.removeEventListener('touchstart', this.play, false)
        // console.log(audio.paused)
      },
      pause () {
        this.isOn = false
        this.$refs.audio.pause()
        this.$emit('pause')
      },
      toggle () {
        if (this.isOn) {
          this.pause()
        } else {
          this.play()
        }
        console.log(this.rotate)
      },
      audioAutoPlay () {
        this.play()

        document.addEventListener('WeixinJSBridgeReady', () => {
          this.play()
        }, false)

        document.addEventListener('YixinJSBridgeReady', () => {
          this.play()
        }, false)

        document.addEventListener('touchstart', this.play, false)
      }
    }
  }

</script>

<style lang="scss">
  .i-audio {
    width: 40px;
    height: 40px;
    background: url(./assets/music2.jpg) no-repeat;
    background-size: contain;
    &.on {
      background: url(./assets/music1.jpg) no-repeat;
      background-size: contain;
      // -webkit-animation: musicAnimation 2s infinite linear;
      // animation: musicAnimation 2s infinite linear;
    }
    &.off{
      -webkit-animation: off 2s infinite linear;
      animation: off 2s infinite linear;
    }
  }
  .rotate{
      -webkit-animation: musicAnimation 2s infinite linear;
      animation: musicAnimation 2s infinite linear;
    }
  // .i-audio.notrotate{
  //       -webkit-animation: off 2s infinite linear;
  //       animation: off 2s infinite linear;
  //   }

  @-webkit-keyframes musicAnimation {
    0% {
      -webkit-transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes musicAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
