<template>
  <article>
    <h1>
      <a href="https://www.npmjs.com/package/i-ui" target="_blank">
        <img src="//img.shields.io/npm/v/i-ui.svg" alt="npm">
      </a>
      <a href="LICENSE">
        <img src="//img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
      </a>
      <a href="http://badge.fury.io/js/i-ui">
        <img src="//badge.fury.io/js/i-ui.png" alt="Software License" />
      </a>
      <br />
      <a href="http://badge.fury.io/js/i-ui">
        <img src="//nodei.co/npm-dl/i-ui.png?months=1" alt="NPM Download" />
      </a>
    </h1>
    <h6> npm 安装 </h6>
    <code>
      $ npm install i-ui@version --save
    </code>
    <h6> 全局使用 </h6>
    <code>
      import Vue from 'vue'
      import iui from 'i-ui'
      Vue.use(iui)

      export default {
        name: 'app',
        mounted(){
          this.$iui.init()
        }
      }
    </code>
    <h6> 单组件使用 </h6>
    <code>
       import { iAudio } from 'i-ui/src/components/iAudio'
       components: {
         iAudio,
         swiper,
         swiperSlide
       }
    </code>

    <h6> 如何更新组件库 </h6>

    <code>
      1. git clone git@githost.in66.cc:maifei/iui.git
      2. Create your feature branch (git checkout -b my-new-feature)
      3. Commit your changes (git commit -am 'Added some feature')
      4. Push to the branch (git push origin my-new-feature)
      5. wait merging
    </code>

    <h6> 运行组件库, 打包npm包 </h6>
      <code>
        运行开发组件库: npm run dev
        打包npm: npm run build
        打包线上demo: npm run build:demo
        发布组件：npm run release
      </code>
    </code>

  </article>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped lang="stylus">
  .demo {
    font-size 1.2rem
  }
  .github {
    a {
      display inline-block
      height 25px
      line-height 25px
      vertical-align middle
      font-size 1.2rem
      &:hover {
        text-decoration underline
      }
    }
    img {
      width 60px
    }
  }
  a {
    font-size 1.15rem
  }
</style>
