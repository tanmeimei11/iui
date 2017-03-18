<a href="http://badge.fury.io/js/i-ui">
    <img src="//nodei.co/npm-dl/i-ui.png?months=1" alt="NPM Download" />
</a>
<div>
<a href="https://www.npmjs.com/package/i-ui" target="_blank">
    <img src="//img.shields.io/npm/v/i-ui.svg" alt="npm">
</a>
<a href="http://badge.fury.io/js/i-ui">
    <img src="http://img.shields.io/npm/dm/i-ui.svg?style=flat-square" alt="Software License" />
</a>
<a href="LICENSE">
    <img src="//img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
</a>
</div>

## npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install i-ui -S
```

### CDN
目前可以通过 [unpkg.com/i-ui](https://unpkg.com/i-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/i-ui/lib/theme-default/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/i-ui/lib/index.js"></script>
```

### Hello world
通过 CDN 的方式我们可以很容易地使用 i-ui 写出一个 音乐 页面

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/i-ui/lib/theme-default/index.css">
</head>
<body>
  <div id="app">
     <i-audio autoplay loop src="//h5.in66.com/inpromo/2017/pr-beingmate/img/music.d4ffe2f.mp3"></i-audio>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <!-- 引入组件库 -->
  <script src="https://unpkg.com/i-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</html>
```

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<router-link to="/quickstart">快速上手</router-link>。
