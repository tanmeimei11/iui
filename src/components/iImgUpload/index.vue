<template>
  <input accept="image/jpeg,image/jpg,image/png" type="file" class="i-uplod" @change="change" />
</template>
<script>
  import { readOrientation } from './exif.js'
  export default {
    name: 'iImgUpload',
    // mounted () {
    // },
    methods: {
      /* 验证文件类型 */
      vaildImgType (blob, done) {
        var reader = new FileReader()
        reader.onload = () => {
          var buf = new DataView(reader.result)
          done(buf.byteLength > 1 ? ({
            'ffd8': 'jpg',
            '8950': 'png',
            '4749': 'gif',
            '424d': 'bmp'
          })[`${buf.getUint16().toString(16)}`] : undefined)
        }
        reader.readAsArrayBuffer(blob)
      },
      /* 获取角度 (仅存在于jpg) */
      getOrientation (file, type, done) {
        if (type !== 'jpg') return done(1)
        var reader = new FileReader()
        reader.onload = () => {
          var dataView = new DataView(reader.result)
          var offset = 2
          var length = dataView.byteLength
          var marker
          var orientation = 1
          while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) break
            marker = dataView.getUint8(offset + 1)
            if (marker === 225) {
              orientation = readOrientation(dataView, offset + 4)
              break
            } else {
              offset += 2 + dataView.getUint16(offset + 2)
            }
          }
          done(orientation)
        }
        reader.readAsArrayBuffer(file)
      },
      change (event) {
        let file = event.currentTarget.files[0]
        if (file === undefined) return
        this.vaildImgType(file.slice(0, 2), type => {
          if (type === undefined) {
            return this.$emit('error', {
              code: 1
            })
          }
          this.getOrientation(file, type, orientation => {
            console.log(orientation)
          })
        })
      }
    }
}

</script>
<style lang="scss">
  .i-upload {}

</style>
