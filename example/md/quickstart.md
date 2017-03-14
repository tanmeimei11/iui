## 快速上手

本节将介绍如何在项目中使用 i-ui。

### 使用 Starter Kit

我们提供了通用的[项目模板](http://githost.in66.cc/in-template/vue-paster-tpl)，你可以直接使用。

如果不希望使用我们提供的模板，请继续阅读。

### 配置文件

几个配置文件的典型配置如下：

**.babelrc**
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ]
}
```

<br>

### 引入 i-ui

你可以引入整个 i-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 i-ui。

#### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import iui from 'i-ui'
import 'i-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(iui)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了 i-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "i-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```

接下来，如果你只希望引入部分组件，比如 iAvatar ，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { iAvatar } from 'i-ui'
import App from './App.vue'

Vue.component(iAvatar.name, iAvatar)
/* 或写为
 * Vue.use(iAvatar)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 开始使用

至此，一个基于 Vue 和 i-ui 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：

```bash
# 执行如下命令后访问 localhost:8086
npm run dev
```

编译：

```bash
npm run build
```
各个组件的使用方法请参阅它们各自的文档。
