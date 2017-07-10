<template>
  <div class="model">
    <div class="c-model-wrap">
      <div class="s-close"></div>
      <div class="s-logo"></div>
      <div class="s-title"></div>
      <div class="text-wrap">
        <div class="s-text"></div>
      </div>
      <div class="btn-wrap">
        <div class="btn-left"></div>
        <div class="btn-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-update',
    data() {
      return {
        modelInfo: {
          title: '版本更新',
          textList: ['fsadf', 'frwef', 'adfaf'],
          btn: {
            left: {
              text: '下次再说',
              url: ''
            },
            right: {
              text: '立即更新',
              url: ''
            }
          }
        }
      }
    },
    created() {}
  }

</script>
<style lang="scss">
  .model {
    @include size(100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    background-color: rgba(0, 0, 0, .35);
    .c-model-wrap {
      background-color: #fff;
    }
  }

</style>
