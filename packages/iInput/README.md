## 输入框
<template>
  <iInput type="phone" v-model="phone" icon="phone"></iInput>
  <iInput type="captcha" v-model="captcha" placeholder="输入右侧验证码"></iInput>
  <iInput type="code" v-model="code" placeholder="输入手机验证码" @rclick="btnClick"></iInput>
  <iInput type="select" icon="city" v-model="city" placeholder="选择您所在的城市">
    <option value="">请选择</option>
    <option value="0">北京</option>
    <option value="1">上海</option>
    <option value="2">杭州</option>
    <option value="3">广州</option>
    <option value="4">深圳</option>
    <option value="5">武汉</option>
    <option value="6">成都</option>
  </iInput>
  <iInput type="select" icon="store" v-model="store" placeholder="选择您前往的店铺">
    <option value="">请选择</option>
  </iInput>
  <iInput type="button" @click="btnClick">
     <span slot="title">点此核销</span>
     <span slot="subtitle">--  专柜人员操作 误点失效 --</span>
  </iInput>
</template>
<script>
  import iInput from 'i-ui/lib/iInput'
  export default {
    data() {
      return {
        phone: '',
        captcha: '',
        code: '',
        city: '',
        store: '',
        captchaUrl: ''
      }
    },
    components: {
      iInput,
    },
    methods: {
      btnClick() {
        alert(1)
      }
    },
    mounted() {
      document.documentElement.style.fontSize = '37.5px'
    },
    beforeDestroy() {
      document.documentElement.style.fontSize = ''
    }
  }
</script>
<style>
  .i-input {
    margin: 0 15px 15px 0;
  }
</style>

### props
 |属性 | 说明 | 类型(默认值) | 参数 |
 |---  | --- | ---  | --- |
 |type  | 输入框类型  | String(text) | ['phone','captcha','code','select','button']  |
 |icon  | icon类型  | String | ['phone','captcha','city','code','store']  |
 |placeholder  | 占位符  | String(输入手机号进行领取)|   |

 ### events
 |事件 | 说明 | 
 |---  | --- | 
 |rclick  | 点击获取验证码  | 
 |click  | 点击按钮  | 
 |refreshCaptch  | 刷新验证码  | 

 ## 代码
```html
  <iInput type="phone" v-model="phone" icon="phone"></iInput>
  <iInput type="captcha" v-model="captcha" placeholder="输入右侧验证码"></iInput>
  <iInput type="code" v-model="code" placeholder="输入手机验证码" @rclick="btnClick"></iInput>
  <iInput type="select" icon="city" v-model="city" placeholder="选择您所在的城市">
    <option value="">请选择</option>
    <option value="0">北京</option>
    <option value="1">上海</option>
    <option value="2">杭州</option>
    <option value="3">广州</option>
    <option value="4">深圳</option>
    <option value="5">武汉</option>
    <option value="6">成都</option>
  </iInput>
  <iInput type="select" icon="store" v-model="store" placeholder="选择您前往的店铺">
    <option value="">请选择</option>
  </iInput>
  <iInput type="button" @click="btnClick">
     <span slot="title">点此核销</span>
     <span slot="subtitle">--  专柜人员操作 误点失效 --</span>
  </iInput>
  <script>
  import iInput from 'i-ui/lib/iInput'
  export default {
    data() {
      return {
        phone: '',
        captcha: '',
        code: '',
        city: '',
        store: '',
        captchaUrl: ''
      }
    },
    components: {
      iInput,
    },
    methods: {
      btnClick() {
        alert(1)
      }
    }
  }
</script>
````