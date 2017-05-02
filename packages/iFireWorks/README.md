<template>
  <div>
    <div class="fire-work-wrap">
      <i-fire-works :option="option"></i-fire-works>
    </div>
    <Input v-model="option.imgUrl" placeholder="请输入飘落图片的地址 主意是png哦"></Input>
    <Button class="star" @click="changeStar">star</Button>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
      </thead>
      <tbody>
        <tr>
          <td>option</td>
          <td>设置的一些属性</td>
          <td>Object</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import iFireWorks from 'i-ui/lib/iFireWorks'
  export default {
    components: {
      iFireWorks
    },
    data () {
      return {
        option:{
           imgUrl:''
        }
      }
    },
    methods:{
      changeStar () {
        this.option.imgUrl = 'http://inimg07.jiuyan.info/in/2017/04/28/4B9D22E4-0543-EC2A-542A-047710941303.png'
      }
    }
  }

</script>
<style>
  .fire-work-wrap {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
   .ivu-input-wrapper {
    width: 400px;
    margin-top: 30px;
  }
  .star{
    margin-top:10px;
    margin-bottom: 10px!important;
  }
</style>

``` html
 <i-fire-works :option="option"></i-fire-works>
<script>
  data () {
    return {
      option: {
        imgUrl:'//inimg07.jiuyan.info/in/2017/04/28/4B9D22E4-0543-EC2A-542A-047710941303.png',
        angle: 0,
        scale: 1,
        skew: 30,
        vy: 0.1, // 下降的速度
        vx: 1, // 平移的速度
        dw: 40, // 宽度
        dh: 40, // 高度
        particleNum: 60 // 总数
      }
    }
  }
</script>


```
