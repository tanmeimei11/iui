<template>
<iImgLoading :imgs="imgs" @done="done" @progress="progress"></iImgLoading>
</template>
<script>
  import iImgLoading from 'i-ui/lib/iImgLoading'
  export default {
    name: 'i-img-loading',
    data () {
      return { 
        imgs: [
          'http://inimg01.jiuyan.info/in/2015/06/08/77DD52AF-B9ED-7A6F-8912-DB7313F50D7A.jpg',
          'http://inimg02.jiuyan.info/in/2015/06/08/3C86C234-D785-DFAC-0D1C-6F0EF8F33088.jpg',
          'http://inimg02.jiuyan.info/in/2015/09/02/E8405749-C463-5A60-4321-43381D333C6E.jpg',
          'http://inimg02.jiuyan.info/in/2015/08/13/999D6165-C074-7176-B939-3A26C28C19C9.jpg',
          'http://inimg02.jiuyan.info/in/2015/08/13/999D6165-C074-7176-B939-3A26C28C19C9.jpg',
          'http://inimg01.jiuyan.info/in/2015/06/29/D5D84033-FEF8-5E27-4FB0-928B95DC1CFE.jpg',
          'http://inimg01.jiuyan.info/in/2015/07/20/ECA409BC-6824-D35E-DC42-CEA7A6893639.jpg',
          'http://inimg02.jiuyan.info/in/2015/01/30/B6E0B7FD-D2E7-9A07-5971-34A8721A2DFC.jpg',
          'http://inimg07.jiuyan.info/in/2017/03/13/B0ABE39F-0BD4-D9D8-2312-2DEE4E9F5B4F-1JyqzdYV.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2017/04/10/BC702565-ED93-9769-62BF-9F330CC042A1-1JpNwYpl.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2016/06/02/A7A34DC6-7CDB-261C-CD7C-9B71C4BBEF9A-1MqdJnoY.jpg?imageMogr2/format/jpg/thumbnail/720x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2017/01/26/86FC34BA-0D9C-5BAA-A6A1-0AB5EB0CAB5B-1KBpGyZ.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg02.jiuyan.info/in/2017/01/26/FECFA873-ACC9-8D1D-2392-9291B53055AA-1KBpGyZ.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2017/01/26/7A66CE1A-A4A0-DA49-CFCE-F53BB0BB3D0F-1KBpGyZ.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg05.jiuyan.info/in/2017/01/26/E3C21FB7-7A43-439E-2FFD-2C06B31141BD-1KBpGyZ.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2017/02/11/56CB7771-9EA7-2E06-9B2B-A95A272FCBF7-1PZZQYV.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2017/02/11/30914985-E9C7-DD22-149C-17D186FE3CAD-1PZZQYV.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!',
          'http://inimg01.jiuyan.info/in/2017/02/11/20D16F52-F5CB-E3E4-CA33-9CC58EB48582-1lQaJZR.jpg?imageMogr2/format/jpg/thumbnail/360x%3E/quality/80!'
        ]
      }
    },
    components: {
      iImgLoading
    },
    methods: {
      done() {
        console.log('jiemo')
      },
      progress(down,total) {
        console.log(down,total)
      }
    }
  }
</script>

### props
 |属性 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 |imgs  | 需要预加载的图片数组  | Array | 无  |

### Event
 |事件 | 说明 | 类型 | 默认值 |
 |---  | --- | ---  | --- |
 | progress |  预加载过程 | function | down(已下载的张数) ， total(图片总张数) |
 |done  |  预加载完成 | function |   |

## 代码
```html
<iImgLoading :imgs="imgs" @done="done" @progress="progress"></iImgLoading>
<script>
  import iImgLoading from 'i-ui/lib/iImgLoading'
  export default {
    components: {
      iImgLoading
    },
    data() {
      return {
        imgs: [
          'http://inimg01.jiuyan.info/in/2015/06/08/77DD52AF-B9ED-7A6F-8912-DB7313F50D7A.jpg',
          'http://inimg02.jiuyan.info/in/2015/06/08/3C86C234-D785-DFAC-0D1C-6F0EF8F33088.jpg',
          'http://inimg02.jiuyan.info/in/2015/09/02/E8405749-C463-5A60-4321-43381D333C6E.jpg',
          'http://inimg02.jiuyan.info/in/2015/08/13/999D6165-C074-7176-B939-3A26C28C19C9.jpg',
          'http://inimg02.jiuyan.info/in/2015/08/13/999D6165-C074-7176-B939-3A26C28C19C9.jpg',
          'http://inimg01.jiuyan.info/in/2015/06/29/D5D84033-FEF8-5E27-4FB0-928B95DC1CFE.jpg',
          'http://inimg01.jiuyan.info/in/2015/07/20/ECA409BC-6824-D35E-DC42-CEA7A6893639.jpg',
          'http://inimg02.jiuyan.info/in/2015/01/30/B6E0B7FD-D2E7-9A07-5971-34A8721A2DFC.jpg',
          'http://inimg07.jiuyan.info/in/2017/03/13/B0ABE39F-0BD4-D9D8-2312-2DEE4E9F5B4F-1JyqzdYV.jpg',
          'http://inimg05.jiuyan.info/in/2017/04/10/BC702565-ED93-9769-62BF-9F330CC042A1-1JpNwYpl.jpg',
          'http://inimg05.jiuyan.info/in/2016/06/02/A7A34DC6-7CDB-261C-CD7C-9B71C4BBEF9A-1MqdJnoY.jpg',
          'http://inimg05.jiuyan.info/in/2017/01/26/86FC34BA-0D9C-5BAA-A6A1-0AB5EB0CAB5B-1KBpGyZ.jpg',
          'http://inimg02.jiuyan.info/in/2017/01/26/FECFA873-ACC9-8D1D-2392-9291B53055AA-1KBpGyZ.jpg',
          'http://inimg01.jiuyan.info/in/2017/01/26/7A66CE1A-A4A0-DA49-CFCE-F53BB0BB3D0F-1KBpGyZ.jpg',
          'http://inimg05.jiuyan.info/in/2017/01/26/E3C21FB7-7A43-439E-2FFD-2C06B31141BD-1KBpGyZ.jpg',
          'http://inimg01.jiuyan.info/in/2017/02/11/56CB7771-9EA7-2E06-9B2B-A95A272FCBF7-1PZZQYV.jpg',
          'http://inimg01.jiuyan.info/in/2017/02/11/30914985-E9C7-DD22-149C-17D186FE3CAD-1PZZQYV.jpg',
          'http://inimg01.jiuyan.info/in/2017/02/11/20D16F52-F5CB-E3E4-CA33-9CC58EB48582-1lQaJZR.jpg'
        ]
      }
    },
    methods: {
      done() {
        console.log('jiemo')
      },
      progress(down,total) {
        console.log(down,total)
      }
    }
  }
```

