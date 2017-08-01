<template>
  <div class="i-loading" :class="[{'loading':loading,'fixed':fixed},color]">
    <svg class="i-loading-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" preserveAspectRatio="xMidYMid meet">
      <circle class="line" cx="62" cy="62" r="58" fill="none" stroke-width="8" stroke-linecap="round"></circle>
      <g xmlns="http://www.w3.org/2000/svg" transform="translate(30,90) scale(0.1,-0.1)" stroke="none">
        <circle cx="120" cy="455" r="55" fill="none" stroke-width="60" stroke-linecap="round"></circle>
        <path d="M 34 296 C 10 272 0 253 0 231 C 0 198 23 187 34 216 C 37 225 46 230 53 228 C 61 225 67 190 70 119 L 75 15 L 143 12 L 210 9 L 210 140 L 210 272 L 206.241 289.687 L 195.595 307.081 C 152.595 350.081 80 342 34 296 Z"
        />
        <path d="M 282 305 C 248 277 231 225 250 207 C 258 198 265 199 274 213 C 302 250 309 231 312 123 L 315 15 L 385 15 L 455 15 L 458 118 C 460 200 464 222 476 227 C 502 237 510 210 510 107 L 510 9 L 578 12 L 645 15 L 645 143 L 645.457 229.646 L 643.954 251.904 L 640.135 273.216 L 635.036 289.939 L 621.73 310.73 C 578.514 343.865 514 341 473 306 L 445 282 L 417 306 C 378 339 322 338 282 305 Z"
        />
      </g>
    </svg>
  </div>
</template>
<script>
  export default {
    name: 'i-loading',
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      fixed: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'red'
      }
    }
  }

</script>
<style lang="scss">
  .i-loading {
    display: inline-block;
    font-size: 0; // background: url('./assets/inlogo.png') no-repeat center;
    // background-size: .88rem .72rem;
    &.fixed {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      background: rgba(#000, .7);
      box-sizing: border-box;
      padding-top: 50%;
    }
    .i-loading-svg {
      width: 100%;
      height: 1.65rem;
      circle {
        stroke: #ffffff;
        &.line {
          stroke-dasharray: 225%, 90%;
        }
      }
      g {
        fill: #ffffff;
      }
    }
    &.loading {
      .i-loading-svg .line {
        transform-origin: center;
        animation: __loading-svg 1.5s linear infinite;
      }
      @keyframes __loading-svg {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    &.red {
      // background-image: url('./assets/inlogo_red.png');
      .i-loading-svg {
        circle {
          stroke: #ff4338;
        }
        g {
          fill: #ff4338;
        }
      }
    }
  }

</style>
