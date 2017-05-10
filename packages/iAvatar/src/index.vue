<template>
  <div class="i-avatar" :style="{'background-image': `url(${avatar})`}" @click="avatarClick"></div>
</template>
<script>
  import comm from 'i-ui/src/utils/common.js'
  import awake from 'i-ui/src/utils/jsBridge.js'
  export default {
    name: 'iAvatar',
    props: {
      src: {
        type: String,
        required: true
      },
      uid: {
        type: String,
        required: true
      }
    },
    computed: {
      avatar () {
        // to fix url address protocol
        let anchor = document.createElement('a')
        anchor.href = this.src
        anchor.protocol = location.protocol
        return anchor.href
      }
    },
    methods: {
      avatarClick () {
        if (comm.isInApp) {
          awake(`in://diary/other?userid=${this.uid}`)
        } else {
          location.href = `${location.protocol}//h5.in66.com/inpromo/inweb/in-share/in.html?uid=${this.uid}`
        }
      }
    }
  }

</script>
<style lang="scss">
  .i-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
