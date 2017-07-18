<template>
  <div class="i-error">
    <div class="i-error-logo"></div>
    <div class="i-error-msg" v-if="errMsg">{{errMsg}}</div>
    <a href="javascript:;" class="i-error-btn" @click="$emit('click')">
      <slot>反馈给小in君</slot>
    </a>
  </div>
</template>
<script>
  export default {
    props: {
      errMsg: {
        type: String,
        default: '找不到你想要的页面'
      }
    }
  }

</script>
<style lang="scss">
  .i-error {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    .i-error-logo {
      margin: 2.14rem auto 0;
      width: 3.44rem;
      height: 4rem;
      background: url('./assets/logo.png') no-repeat center/cover;
    }
    .i-error-msg {
      text-align: center;
      font-size: .44rem;
      line-height: 2rem;
      color: #B0B0B0;
      letter-spacing: 0;
    }
    .i-error-btn {
      display: block;
      text-align: center;
      line-height: 1.07rem;
      width: 3.47rem;
      margin: 0.67rem auto 0;
      background: #FFFFFF;
      border: 1PX solid #FF4338;
      border-radius: 1.34rem;
      font-size: .44rem;
      color: #FF4338;
      letter-spacing: 0;
    }
  }

</style>
