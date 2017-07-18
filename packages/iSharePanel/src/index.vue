<template>
  <div class="i-share-panel" :class="{'show':show}" @click="$emit('close')">
    <div class="i-share-panel-line">
      <a href="javascript:;" @click.stop="$emit('invoke',type)" :data-type="type" :key="type" v-for="(type, idx) in types"></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'iSharePanel',
    props: {
      types: {
        require: false,
        type: Array,
        default: () => ['wechat', 'wechattimeline', 'qq', 'qzone', 'weibo']
      },
      show: {
        require: false,
        type: Boolean
      }
    }
  }

</script>
<style lang="scss">
  .i-share-panel {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 10rem;
    height: 0;
    overflow: hidden;
    &.show {
      height: 100%;
      .i-share-panel-line {
        transform: translate(0, 0);
      }
    }
    .i-share-panel-line {
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      font-size: 0;
      width: 100%;
      background-color: #fff;
      padding: .4rem 0;
      border-radius: .13333rem .13333rem 0 0;
      transform: translate(0, 100%);
      transition: transform .5s;
      a {
        padding: 1.2rem .3rem .3rem;
        width: 1.2rem;
        display: inline-block;
        background-size: 1.2rem;
        background-repeat: no-repeat;
        background-position: center top;
        cursor: pointer;
        text-align: center;
        box-sizing: content-box;
        text-decoration: none;
        &:after {
          content: "";
          white-space: nowrap;
          color: rgb(38, 37, 43);
          font-size: .32rem;
          font-family: HY-QiHei40;
        }
        &[data-type="qq"] {
          background-image: url("./assets/qq.png");
          &:after {
            content: "QQ好友";
          }
        }
        &[data-type="qzone"] {
          background-image: url("./assets/qqzone.png");
          &:after {
            content: "QQ空间";
          }
        }
        &[data-type="wechat"] {
          background-image: url("./assets/wx.png");
          &:after {
            content: "微信";
          }
        }
        &[data-type="wechattimeline"] {
          background-image: url("./assets/pyq.png");
          &:after {
            content: "朋友圈";
          }
        }
        &[data-type="weibo"] {
          background-image: url("./assets/wb.png");
          &:after {
            content: "微博";
          }
        }
      }
    }
  }

</style>
