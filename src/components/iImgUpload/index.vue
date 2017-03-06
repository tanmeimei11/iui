<template>
  <input class="i-img-upload" :class="size" accept="image/jpeg,image/jpg,image/png" type="file"  @change="change" />
</template>
<script>
  import { getOrientation, vaildImgType } from './exif.js'
  export default {
    name: 'iImgUpload',
    props: {
      maxWidth: {
        type: Number,
        default: Infinity
      },
      size: {
        type: String,
        default: 'cover'
      }
    },
    methods: {
      /* 压缩并且摆正图片 */
      compressImg (img, orientation, done) {
        // 1:0,3:180,6:90,8:270
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        var imgRotation = {
          '1': 0,
          '3': Math.PI,
          '6': Math.PI * 0.5,
          '8': Math.PI * 1.5
        }[orientation] || 0
        var dw
        var dh
        var ratio = 1
        if (~[6, 8].indexOf(orientation)) {
          canvas.width = Math.min(this.maxWidth, img.naturalHeight)
          ratio = canvas.width / img.naturalHeight
          canvas.height = img.naturalWidth * ratio
          dw = canvas.height
          dh = canvas.width
        } else {
          canvas.width = Math.min(this.maxWidth, img.naturalWidth)
          ratio = canvas.width / img.naturalWidth
          canvas.height = img.naturalHeight * ratio
          dw = canvas.width
          dh = canvas.height
        }
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(imgRotation)
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, -1 * dw / 2, -1 * dh / 2, dw, dh)
        done(canvas)
      },
      /* 完成格式验证 */
      doneValidImg (file, fileType) {
        if (fileType === undefined) {
          event.target.value = ''
          return this.$emit('error', { code: 1 })
        }
        getOrientation(file, fileType, orientation => this.doneOrientation(file, fileType, orientation))
      },
      /* 完成角度验证 */
      doneOrientation (file, fileType, orientation) {
        var reader = new FileReader()
        reader.onload = () => {
          event.target.value = ''
          var base64 = reader.result.replace(/^.*?,/, '')
          var img = new Image()
          img.onload = () => this.compressImg(img, orientation, canvas => this.doneAll(canvas))
          img.src = 'data:' + fileType + ';base64,' + base64
        }
        reader.readAsDataURL(file)
      },
      /* 完成全部 */
      doneAll (canvas) {
        return this.$emit('done', canvas)
      },
      change (event) {
        let file = event.target.files[0]
        if (file === undefined) return
        this.$emit('progress')
        vaildImgType(file.slice(0, 2), fileType => this.doneValidImg(file, fileType))
      }
    }
}

</script>
<style lang="scss">
  .i-img-upload {
    &.cover{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
</style>
