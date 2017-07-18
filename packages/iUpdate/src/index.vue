<template>
  <div class="model" v-if="show" @click.self="close">
    <div class="c-model-wrap">
      <div class="s-close" @click="close"></div>
      <div class="s-logo"></div>
      <div class="s-title">{{modelInfo.title}}</div>
      <div class="text-wrap">
        <div class="s-text" v-for="(item , index) in modelInfo.textList" :key="index">{{item}}</div>
      </div>
      <div class="btn-wrap">
        <div class="s-btn" v-for="(item , index) in modelInfo.btns" :key="index" :class="`${item.color? item.color : '' }`" @click="btnClick(item.url)">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import common from 'i-ui/src/utils/common.js'
  import awake from 'i-ui/src/utils/jsBridge'
  export default {
    name: 'i-update',
    props: ['modelInfo', 'show', 'close'],
    methods: {
      btnClick (href) {
        var _href = href.trim()
        if (!_href) {
          return false
        }
        // 添加的是协议
        if (/^in:/.test(_href)) {
          common.isInApp ? awake(_href) : common.openInApp(_href)
        } else {
          location.href = location.protocol + _href.replace(/^http:|https:/, '')
        }
      }
    },
    created () {}
  }

</script>
<style lang="scss">
  .model {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .35);
    overflow: hidden;
    .c-model-wrap {
      background-color: #fff;
      width: 72%;
      border-radius: 6px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding-top: 10%;
    }
    .s-close {
      position: absolute;
      right: 9px;
      top: 9px;
      width: 6%;
      padding-top: 6%;
      background: url('//inimg01.jiuyan.info/in/2017/07/17/2BD6CA98-CFB2-5E76-5F05-FDAE45D9D7DE.jpg') no-repeat center/contain;
    }
    .s-logo {
      margin: 0 auto 3%;
      width: 22%;
      padding-top: 22%;
      background: url('//inimg07.jiuyan.info/in/2017/07/10/5895ADC1-E56D-CE2B-60EA-FDD584936235.jpg') no-repeat center/contain;
    }
    .s-title {
      text-align: center;
      font-size: 16px
    }
    .text-wrap {
      margin: 0 5.5%;
      font-size: 12px;
    }
    .s-text {
      position: relative;
      border-bottom: 1px dotted #E0E0E0;
      padding: 5% 0 5% 8%;
      color: #B0B0B0;
    }
    .s-text:last-child {
      position: relative;
      border-bottom: none;
    }
    .s-text:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 2.5%;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      transform: translate(0, -50%);
    }
    .s-text:nth-child(1):before {
      background-color: #36D4B0;
    }
    .s-text:nth-child(2):before {
      background-color: #FA91C9;
    }
    .s-text:nth-child(3):before {
      background-color: #FFB67C;
    }
    .btn-wrap {
      display: flex;
      border-top: 1px solid #e0e0e0;
      div {
        flex: 1;
        text-align: center;
        height: 50px;
        color: #E0E0E0;
        position: relative;
        line-height: 50px;
      }
      div:after {
        content: "";
        position: absolute;
        right: 0;
        top: 15px;
        height: 20px;
        width: 1px;
        background-color: #E0E0E0;
      }
      div:last-child:after {
        display: none;
      }
      .red {
        color: #ff4038;
      }
    }
  }

</style>
