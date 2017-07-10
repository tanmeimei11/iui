<template>
  <input class="i-img-upload" :class="size" accept="image/jpeg,image/jpg,image/png" type="file"  @change="change" />
</template>
<script>
  import { readOrientation, vaildImgType, compressImg } from 'i-ui/src/utils/exif.js'
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
      },
      analyze: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      /* 完成格式验证 */
      doneValidImg (file, fileType) {
        if (fileType === undefined) {
          event.target.value = ''
          return this.$emit('error', { code: 1 })
        } else if (this.analyze) {
          readOrientation(file, fileType, orientation => this.doneOrientation(file, fileType, orientation))
        } else {
          return this.$emit('done', file)
        }
      },
      /* 完成角度验证 */
      doneOrientation (file, fileType, orientation) {
        var reader = new FileReader()
        reader.onload = () => {
          event.target.value = ''
          var base64 = reader.result.replace(/^.*?,/, '')
          var img = new Image()
          img.onload = () => compressImg(img, orientation, this.maxWidth, canvas => this.doneAll(canvas))
          img.src = 'data:image/' + fileType + ';base64,' + base64
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
