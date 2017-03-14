<template>
  <div class="i-avatar" :style="{'background-image': `url(${avatar})`}"></div>
</template>
<script>
  export default {
    name: 'iAvatar',
    props: {
      src: {type: String, required: true}
    },
    computed: {
      avatar () {
        // to fix url address protocol
        let anchor = document.createElement('a')
        anchor.href = this.src
        anchor.protocol = location.protocol
        return anchor.href
      }
    }
  }

</script>
<style lang="scss">
  .i-avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
