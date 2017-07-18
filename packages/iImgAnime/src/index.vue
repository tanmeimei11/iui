<template>
  <div class="i-img-anime" :style="wrapStyle">
    <div class="iia-item" :key="idx" v-for="(img,idx) in imgs" :style="imgStyle[idx]" @click="$emit('click',idx)"></div>
  </div>
</template>
<script>
  export default {
    props: {
      scale: {
        type: Number,
        default: 1
      },
      size: {
        type: Object,
        default: () => ({
          width: 750,
          height: 250
        })
      },
      imgs: {
        type: Array,
        default: () => []
      }
    },
    beforeCreate () {
      this.styles = document.createElement('style')
      this.styles.setAttribute('type', 'text/css')
    },
    mounted () {
      document.head.appendChild(this.styles)
    },
    beforeDestroy () {
      document.head.removeChild(this.styles)
    },
    computed: {
      wrapStyle: function () {
        return {
          'transform': `scale(${this.scale})`,
          'width': `${this.size.width}px`,
          'height': `${this.size.height}px`
        }
      },
      imgStyle: function () {
        return this.imgs.map((img, idx) => {
          let [left, top, width, height, total, url, vertical] = img
          const every = (vertical ? height : width) / total
          const steps = total - 1
          let css = this.getAnimeCss(idx, every * steps, vertical)
          this.styles.innerHTML = `${this.styles.innerText}\n${css}`
          return {
            left: `${left}px`,
            top: `${top}px`,
            width: `${vertical ? width : every}px`,
            height: `${vertical ? every : height}px`,
            'background-image': `url(${this.fixAnchor(url)})`,
            'animation': `ani-iia-${idx} steps(${steps}) infinite 1s`
          }
        })
      }
    },
    methods: {
      fixAnchor (url) {
        let anchor = document.createElement('a')
        anchor.href = url
        anchor.protocol = location.protocol
        return anchor.href
      },
      getAnimeCss (idx, pos, vertical) {
        let endPos = `-${pos}PX 0`
        if (vertical) {
          endPos = `0 -${pos}PX`
        }
        return `
            @keyframes ani-iia-${idx} {
                0% {background-position: 0 0;}
                100% {background-position: ${endPos};}
            }
            @-webkit-keyframes ani-iia-${idx} {
                0% {background-position: 0 0;}
                100% {background-position: ${endPos};}
            }
          `
      }
    }
  }

</script>
<style lang="scss">
  .i-img-anime {
    position: relative;
    .iia-item {
      position: absolute;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: cover;
    }
  }
</style>
