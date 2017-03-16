<template>
  <div id="app" class="wrapper-container">
    <Row type="flex">
      <i-col :span="4">
        <Menu theme="light" class="wrapper-navigate" :active-name="activeName" width="auto" @on-select="select">
          <Menu-group v-for="navs of navConfig" :title="navs.name">
            <Menu-item v-for="nav of navs.children" :name="nav.path"><Icon :type="nav.icon"></Icon>{{ nav.name }}</Menu-item>
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
  import navConfig from './nav.config'
  import routes from './routes'

  export default {
    name: 'app',
    data () {
      return {
        activeName: '/install',
        navConfig
      }
    },
    created () {
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
