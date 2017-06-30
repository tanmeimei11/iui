<template>
  <div class="i-input" :class="[`i-input-${type}`,icon||type]">
    <template v-if="type === 'select'">
      <div class="i-input-tootips" v-show="value===''">{{placeholder}}</div>
      <select :value="value" :class="{'opactiy0':value===''}" @input="updateValue($event.target.value)"><slot></slot></select>
    </template>
    <template v-else-if="type==='button'">
      <a href="javascript:;" class="i-btn-input" @click="$emit('click')">
        <slot name="title"></slot>
        <div class="i-btn-input-subtitle">
          <slot name="subtitle"></slot>
        </div>
      </a>
    </template>
    <template v-else>
      <input :type="type | inputT" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
      <template v-if="type==='code'">
        <a href="javascript:;" class="btn-code" @click="$emit('rclick')">获取验证码</a>
      </template>
      <template v-if="type==='captcha'">
        <a href="javascript:;" class="btn-captcha" @click="captchaUrl=refreshCaptch(),$emit('refreshCaptch')">
          <img :src="captchaUrl" alt="">
        </a>
      </template>
    </template>
  </div>
</template>
<script>
  import iBgImg from '../../iBgImg'
  export default {
    directives: {
      iBgImg
    },
    data () {
      return {
        captchaUrl: this.refreshCaptch()
      }
    },
    props: {
      value: {
        type: [String, Number]
      },
      type: {
        type: String,
        default: 'text',
        validator (val) {
          return ~['text', 'phone', 'captcha', 'code', 'select', 'button'].indexOf(val)
        }
      },
      icon: {
        type: String
      },
      placeholder: {
        type: String,
        default: '输入手机号进行领取'
      }
    },
    filters: {
      inputT: function (type) {
        return ({
          'phone': 'number'
        })[type] || 'text'
      }
    },
    methods: {
      refreshCaptch () {
        let host = /^qa/.test(location.host) ? 'qa.in66.com' : 'www.in66.com'
        return `${location.protocol}//${host}/promo/sendmsgapi/captcha?${Date.now()}`
      },
      updateValue: function (value) {
        // 通过 input 事件发出数值
        this.$emit('input', value)
      }
    }
  }

</script>
<style lang="scss">
  .i-input {
    position: relative;
    display: inline-block;
    background: #eff0ef;
    width: 7.6rem;
    height: 1.226667rem;
    input,
    select {
      background: #eff0ef;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      line-height: 1.226667rem;
      padding-left: 1.186667rem;
      appearance: none;
      border: none;
      &::-webkit-input-placeholder {
        color: #b2b2b2;
      }
      &.opactiy0 {
        opacity: 0;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        appearance: none;
      }
    }
    &.i-input-select::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: .32rem;
      border: .16rem solid rgba(0, 0, 0, 0);
      border-top: .226667rem solid #b5b9b8;
      border-bottom: none;
    }
    &::before {
      content: "";
      position: absolute;
      left: .466667rem;
      top: 50%;
      transform: translate(0, -50%);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.phone::before {
      width: .346667rem;
      height: .453333rem;
      background-image: url('./assets/icon_phone.png');
    }
    &.captcha::before {
      width: .546667rem;
      height: .44rem;
      background-image: url('./assets/icon_captcha.png');
    }
    &.code::before {
      width: .466667rem;
      height: .453333rem;
      left: .413333rem;
      background-image: url('./assets/icon_code.png');
    }
    &.city::before {
      width: .413333rem;
      height: .533333rem;
      background-image: url('./assets/icon_city.png');
    }
    &.store::before {
      width: .506667rem;
      height: .506667rem;
      left: .426667rem;
      background-image: url('./assets/icon_store.png');
    }
    &.captcha,
    &.code {
      input {
        width: 55%
      }
    }
    .i-input-tootips {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: 1.186667rem;
      color: #b2b2b2;
      font-size: .373333rem;
    }
    .btn-code {
      position: absolute;
      right: 0.24rem;
      top: 50%;
      transform: translate(0, -50%);
      padding: 0 0.373333rem;
      font-size: 0.373333rem;
      line-height: 0.533333rem;
      height: 0.533333rem;
      border-left: 1PX solid #b2b2b2;
      color: #876853;
    }
    .btn-captcha {
      position: absolute;
      height: 0.84rem;
      background: #e8e5e3;
      top: 50%;
      right: 0.12rem;
      transform: translate(0, -50%);
      border-radius: 0.066667rem;
      overflow: hidden;
      img {
        height: 0.84rem;
      }
    }
    &.i-input-button {
      display: block;
      width: 5.866667rem;
      height: 1.48rem;
      background: #876853;
      text-align: center;
      border-radius: 5px;
      padding-top: .2rem;
      box-sizing: border-box;
      font-size: .56rem;
      line-height: .666667rem;
      .i-btn-input {
        width: 100%;
        height: 100%;
        color: #fff;
      }
      .i-btn-input-subtitle {
        text-align: center;
        font-size: .293333rem;
        line-height: .533333rem;
      }
    }
  }

  [data-dpr="2"] .page .opt1 .codewrap .btn-code {
    border-left: 2PX solid #b2b2b2;
  }

  [data-dpr="3"] .page .opt1 .codewrap .btn-code {
    border-left: 3PX solid #b2b2b2;
  }

</style>
