<template>
<div>
    <iFireWorks :imgUrl="imageUrl"></iFireworks>
    <r-input label="image url" v-model="imageUrl" name="input1-name"></r-input>
    <r-btn class="blue white-text" large v-wave.light >toggle Run</r-btn>
</div>
</template>
<script>
export default {
  name: 'i-fire-works',
  data () {
    return {
      imageUrl: ''
    }
  },
  watch: {
    imageUrl (val, old) {
      console.log(val, old)
    }
  },
  method: {

  },
  created () {
  }
}
</script>
<style></style>
