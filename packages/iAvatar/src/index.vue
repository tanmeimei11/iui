<template>
  <div class="i-avatar" :style="{'background-image': `url(${avatar})`}" @click="uid&&avatarClick($event)">
    <em :class="icon" v-if="icon.length"></em>
  </div>
</template>
<script>
  import comm from 'i-ui/src/utils/common.js'
  import awake from 'i-ui/src/utils/jsBridge.js'
  export default {
    name: 'iAvatar',
    props: {
      icon: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        required: true
      },
      uid: {
        type: String,
        default: '',
        required: false
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
      avatarClick (event) {
        event.stopPropagation()
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
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    em {
      position: absolute;
      right: -10%;
      bottom: -10%;
      display: block;
      width: 50%;
      height: 50%;
      background-size: contain;
    }
    .tizhu {
      background-image: url('//inimg01.jiuyan.info/in/2017/04/10/8886DCD5-30B0-96F1-26D5-65C676E7913A.png');
    }
    .talent {
      background-image: url('//inimg02.jiuyan.info/in/2017/04/10/7AD28DF3-779E-9AD2-90BA-A447A6AC13EE.png');
    }
    .renzheng {
      background-image: url('//inimg02.jiuyan.info/in/2017/04/10/B7161129-B4DF-152F-D5AA-7EE4C4AB40D9.png');
    }
  }

</style>
