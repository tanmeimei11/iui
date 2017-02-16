<template>
  <nav>
    <ul>
      <li>
        <router-link :class="active == 'about' || 'home' && activeClass" :to="{path: '/about'}">
          <r-icon>face</r-icon>
          <span>关于</span>
        </router-link>
      </li>
      <li>
        <router-link :class="active == 'changeLog' && activeClass" :to="{path: '/changeLog'}">
          <r-icon>face</r-icon>
          <span>更新日志</span>
        </router-link>
      </li>
      <li>
        <div>组件</div>
        <ul>
          <li v-for="item in components">
            <router-link :class="active == item.name && activeClass" :to="{path: '/'+item.name}">
              <r-icon>{{item.icon}}</r-icon>
              <span>{{item.txt}}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    
  </nav>
</template>

<script>
export default {
  name: 'navigator',
  data() {
    return {
      activeClass: 'active',
      components: [
        {
          name: 'iAudio',
          icon: 'add_alert',
          txt: '音乐自动播放'
        }      
      ]
    }
  },
  computed: {
    active() {
        console.log(this.$route.name)
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus">
@import '../style/variable.styl'
nav {
  font-size 14px
  padding 15px
  a {
    display flex
    position relative
    padding 10px 0 10px 10px
    color #525558
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    &.v-link-active,
    &:hover,
    &.active {
      color $txt-green
    }
    .material-icons {
      margin-right 5px
      min-width 20px
      font-size 20px
    }
    span {
      line-height 24px
    }
  }
  div {
    font-size 16px
    margin 8px 0
  }
}
@media (max-width: 700px) {
  nav {
    padding 0
  }
  nav a {
    font-size 12px
  }
}
</style>
