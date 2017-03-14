## 自定义开发

##### 1.  在`packages`下添加新包项目结构为

```text
|- src/  --------------------- 组件源代码
    |- base.scss -------------- 组件的css文件 [如果是vue,则可以不写] 
    |- index.js  -------------- 组件代码
|- index.js   ---------------- 组件的入口文件
|- README.md  ---------------- 组件的说明文档
```

##### 2.  配置`components.json` 或者 `directives.json` 文件，设置当前为指令还是组件
##### 3.  配置路由文件 `example/routes.js`,例如组件名为`component`

```js
import component from 'i-ui/lib/component/README.md'
const routes = [
  ....
  {name: 'XXX', path: '/XXX', component: component, type: 'components', icon: 'image', txt: 'XXX'}
]
```