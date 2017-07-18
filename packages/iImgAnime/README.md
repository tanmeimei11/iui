## 动画帧
<template>
   <div class="page" style="width:450px">
        <iImgAnime :scale="scale" :size="size" :imgs="imgs" @click="click"></iImgAnime>
   </div>
</template>
<script>
  import iImgAnime from 'i-ui/lib/iImgAnime'
  export default {
    components: {
      iImgAnime
    },
    data() {
      return {
        scale: 1,
        size:{
           width:750,
           height:250
        },
        imgs:[
          [ -50, -50, 1212, 334, 3, '//qah5.in66.com/inpromo/2017/in-anniversary/img/car.aace39b.png'],
          [ -250, -120, 401, 3417, 17, '//qah5.in66.com/inpromo/2017/pr-miss2/img/btn-rank.81a4d43.png',true],
        ]
      }
    },
    created() {
      document.getElementsByTagName('html')[0].setAttribute("style", "font-size: 37.5px;")
    },
    mounted () {
      this.update()
      this.$el.__UPDATE__ = () => {
        setTimeout(() => {
          this.update()
        }, 500)
      }
      window.addEventListener('resize', this.$el.__UPDATE__)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.$el.__UPDATE__)
    },
    methods:{
      update () {
        this.scale = document.querySelector('.page').getBoundingClientRect().width / 750
      },
      click(idx){
        console.log(idx)
      }
    }
  }

</script>

 ### props 
|属性 | 说明 | 类型 | 默认值 | 
|--- | --- | --- | --- | 
|scale | 缩放比例 | Number | 1
|size | 容器大小 | Object | {width: 750,height: 250}
|imgs | 图片列表 | Array | [ [left,top,宽,高,帧数,地址,是否垂直] ]

### events 
|事件 | 说明 | 参数 |
|--- | --- | --- | 
|click | 点击索引图片 | 索引 |

## 代码 
```html
<template>
  <iImgAnime :scale="scale" :size="size" :imgs="imgs" @click="click"></iImgAnime>
</template>
<script>
  import iImgAnime from 'i-ui/lib/iImgAnime'
  export default {
    components: {
      iImgAnime
    },
    data() {
      return {
        scale: 1,
        size:{
           width:750,
           height:250
        },
        imgs:[
          [ -50, -50, 1212, 334, 3, '//qah5.in66.com/inpromo/2017/in-anniversary/img/car.aace39b.png'],
          [ -250, -150, 401, 3417, 17, '//qah5.in66.com/inpromo/2017/pr-miss2/img/btn-rank.81a4d43.png',true],
        ]
      }
    },
    mounted () {
      this.update()
      this.$el.__UPDATE__ = () => {
        setTimeout(() => {
          this.update()
        }, 500)
      }
      window.addEventListener('resize', this.$el.__UPDATE__)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.$el.__UPDATE__)
    },
    methods:{
      update () {
        this.scale = document.querySelector('.page').getBoundingClientRect().width / 750
      },
      click(idx){
        console.log(idx)
      }
    }
  }

</script>
```` 

