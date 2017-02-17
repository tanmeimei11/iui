<template>
    <div class="i-audio" :class="{on: isOn, off: !isOn}" @click.stop.prevent="toggle">
      <audio :autoplay="autoplay" :loop="loop" :preload="preload" :src="src" ref="audio"/>
    </div>
</template>

<script>
  export default {
    name: 'iAudio',
    data () {
      return {
        isOn: false
      } 
    },
    props: { 
      loop: Boolean,
      preload: Boolean,
      autoplay: Boolean,
      src: {type: String, required: true}
    },
    mounted () { 
      let audio = this.$refs.audio
      if (audio.autoplay) {
        this.audioAutoPlay()  
      }
    },
    methods: {
      play () {
        this.isOn = true 
        this.$refs.audio.play()  
        document.removeEventListener('touchstart', this.play, false)  
        // console.log(audio.paused)
      },
      pause () {
        this.isOn = false 
        this.$refs.audio.pause()  
      },
      toggle () {
        if (this.isOn) {
          this.pause()
        } else {
          this.play()
        }
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

<style src="./iAudio.scss" lang="sass"></style>
