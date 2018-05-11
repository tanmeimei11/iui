<template>
  <div class="i-img-loading">
    <div>{{Math.floor(down * 100/total)}}%</div>
  </div>
</template>
<script>
  export default {
    name: 'iImgLoading',
    data () {
      return {
        down: 0,
        total: this.imgs.length
      }
    },
    props: {
      imgs: {
        type: Array,
        default: [],
        required: true
      }
    },
    mounted () {
      let finishCount = 0 // 已下载的张数
      let interval = 100 
      const changeNum = () => {
        if ((this.down + 1) <= finishCount) {
          this.down = this.down + 1
          this.$emit('progress', this.down, this.total)
        }
        if (this.down === this.total) {
          setTimeout(() => {
            this.$emit('done')
          }, 500)
        } else {
          setTimeout(changeNum, interval)
        }
      }
      this.imgs.forEach(url => this.downloadImage(url).then(img => {
        finishCount = finishCount + 1
        img.setAttribute('style', 'display:none')
        document.body.appendChild(img)
      }))
      changeNum()
    },
    methods: {
      downloadImage (url) {
        return new Promise((resolve, reject) => {
          var img = new Image()
          let anchor = document.createElement('a')
          anchor.href = url
          // cross domain (除了base64 和 当前域名)
          if (/^data:image/.test(url) || location.host === anchor.host) {
          } else {
            img.crossOrigin = ''
          }
          img.onload = () => resolve(img)
          img.onerror = () => reject(img)
          img.src = url.replace(/^https?:/, location.protocol)
        })
      }
    }
  }

</script>
<style lang="scss">
  .i-img-loading {
    font-size: 28px;
 
  }

</style>
