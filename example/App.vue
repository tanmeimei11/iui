<template>
  <div id="app" class="wrapper-container">
    <Row type="flex">
      <i-col :span="4">
        <Menu theme="light" class="wrapper-navigate" :active-name="activeName" width="auto" @on-select="select">
          <Menu-group title="开发指南">
            <Menu-item name="/install">安装</Menu-item>
            <Menu-item name="/quickstart">快速上手</Menu-item>
            <Menu-item name="/customPackage">自定义开发</Menu-item>
          </Menu-group>
          <Menu-group title="组件">
            <Menu-item :key="idx" :name="component.path" v-for="(component, idx) in components">
              <Icon :type="component.icon"></Icon>{{component.txt}}
            </Menu-item>
          </Menu-group>
          <Menu-group title="指令">
            <Menu-item :key="idx" :name="directive.path" v-for="(directive, idx) in directives">
              <Icon :type="directive.icon"></Icon>{{directive.txt}}
            </Menu-item>
          </Menu-group>
        </Menu>
      </i-col>
      <i-col :span="20">
        <transition name="fade" mode="out-in">
          <router-view class="wrapper-content markdown-body"></router-view>
        </transition>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import routes from './routes'
  import inPromo from 'i-ui/src/mixins/inPromo.js'
  export default {
    mixins: [inPromo],
    name: 'app',
    data () {
      let _data = {
        activeName: '/install',
        components: [],
        directives: []
      }
      routes.forEach(router => {
        if (router.type) {
          _data[`${router.type}`].push({
            path: router.path,
            icon: router.icon,
            txt: router.txt
          })
        }
      })
      return _data
    },
    created () {
      this.$share.shareTitle = 'c'
      this.$share.shareDesc = 'a'
      this.activeName = this.$route.path
    },
    methods: {
      select (key) {
        this.$router.push(key)
      }
    }
  }

</script>
<style lang="scss">
  body {
    background: #eee !important;
    padding: 1px;
  }

  .wrapper-container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
  }

  .wrapper-navigate {
    height: 100%;
  }

  .wrapper-content {
    padding: 20px 25px;
    position: relative;
  }

</style>
