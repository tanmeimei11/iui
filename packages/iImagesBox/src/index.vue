<template>
  <div class="images-box">
    <div :key="idx" v-for="(img, idx) in _images" 
      @click="clickImage(idx)" 
      :class="gridClass(idx)" 
      :style="{ background: `url(${img.url}) no-repeat center/cover` }">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'iImagesBox',
    data () {
      return {
      }
    },
    props: {
      imagesLength: {
        type: Number
      },
      images: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      clickImage (idx) {
        this.$emit('clickImage', idx)
      },
      gridClass (imgIndex) {
        let obj = {}
        obj[`imagesLength${this._length}`] = true
        obj[`img${imgIndex + 1}`] = true
        return obj
      }
    },
    created () {
      if (this.imagesLength) {
        if (this.imagesLength > this.images.length) {
          this._images = this.images.slice(0, this.images.length)
        } else {
          this._images = this.images.slice(0, this.imagesLength)
        }
        this._length = this.imagesLength  
      } else {
        this._length = this.images.length  
        this._images = this.images
      }
    },
  }
</script>
<style  lang="scss">
  @mixin pos($name, $position) {
    position: $name;
    top: nth($position, 1);
    right: nth($position, 2);
    bottom: nth($position, 3);
    left: nth($position, 4);
  }
  @mixin size($size) {
    $w: nth($size, 1);
    $h: $w;
    @if (length($size)==2) {
      $h: nth($size, 2);
    }
    width: $w;
    height: $h;
  }
  .images-box {
    position: relative;
    background-color: #fff;
    @include size(100%);
    .imagesLength1 {
      @include size(100%);
    }   
    .imagesLength2 {
      @include size(49.5% 100%);
      &.img1 {
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
    }
    .imagesLength3 {
      @include size(49.5%);
      &.img1 {
        height: 100%;
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
      &.img3 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength4 {
      @include size(49.5%);
      &.img1 {
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
      &.img3 {
        @include pos(absolute, null  null 0 0 );
      }
      &.img4 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength5 {
      @include size(33% 33%);
      &.img1 {
        @include size(66.5% 66.5%);
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
      &.img3 {
        @include pos(absolute, 33.5% 0 null null);
      }
      &.img4 {
        @include size(66.5% 33%);
        @include pos(absolute, null null 0 0);
      }
      &.img5 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength6 {
      @include size(33% 33%);
      &.img1 {
        @include size(66.5% 66.5%);
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
      &.img3 {
        @include pos(absolute, 33.5% 0 null null);
      }
      &.img4 {
        @include pos(absolute, null null 0 0);
      }
      &.img5 {
        @include pos(absolute, null null 0 33.5%);
      }
      &.img6 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength7 {
      @include size(33% 33%);
      &.img1 {
        @include size(33% 66.5%);
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include size(33% 66.5%);
        @include pos(absolute, null 0 null 33.5%);
      }
      &.img3 {
        @include pos(absolute, 0 0 null null);
      }
      &.img4 {
        @include pos(absolute, 33.5% 0 null null);
      }
      &.img5 {
        @include pos(absolute, null null 0 0);
      }
      &.img6 {
        @include pos(absolute, null null 0 33.5%);
      }
      &.img7 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength8 {
      @include size(33% 33%);
      &.img1 {
        @include size(66.5% 33%);
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 0 null null);
      }
      &.img3 {
        @include pos(absolute, 33.5% null 0 null);
      }
      &.img4 {
        @include pos(absolute, 33.5% 0 null 33.5%);
      }
      &.img5 {
        @include pos(absolute, 33.5% 0 null null);
      }
      &.img6 {
        @include pos(absolute, null null 0 0);
      }
      &.img7 {
        @include pos(absolute, null null 0 33.5%);
      }
      &.img8 {
        @include pos(absolute, null 0 0 null);
      }
    }
    .imagesLength9 {
      @include size(33%);
      &.img1 {
        @include pos(absolute, 0 null null 0);
      }
      &.img2 {
        @include pos(absolute, 0 null null 33.5%);
      }
      &.img3 {
        @include pos(absolute, 0 0 null null);
      }
      &.img4 {
        @include pos(absolute, 33.5% null null 0);
      }
      &.img5 {
        @include pos(absolute, 33.5% null null 33.5%);
      }
      &.img6 {
        @include pos(absolute, 33.5% 0 null null);
      }
      &.img7 {
        @include pos(absolute, null null 0 0);
      }
      &.img8 {
        @include pos(absolute, null null 0 33.5%);
      }
      &.img9 {
        @include pos(absolute, null 0 0 null);
      }
    }
  }
</style>
