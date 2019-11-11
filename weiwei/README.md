# weiwei

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 笔记

1 每次点击到 home 组件都会重新渲染一次，这样浪费性能，我们用 keep-alive 组件把改 page 缓存起来：

```
在 app.vue 里把插槽改造下:
<keep-alive include="home">  // include为对应的组件名(会被缓存)
  <router-view />
</keep-alive>

//这样第一次加载home组件，就会把组件缓存起来，后面切换组件就执行下面两个钩子函数：
activated() {
  console.log("组件被缓存了");
},
deactivated() {
console.log("组件取消缓存了");
}
```

2 代码的格式化和 css 美化工具：

> > cnpm install highlight.js 安装依赖

```
//main.js 代码高亮文件引入
import hljs from 'highlight.js'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/monokai-sublime.css'
//定义全局指令
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
// 组件内使用：
 <div v-highlight> <!-- 使用指令 -->
        <pre>
            <code class="css"><!-- 声明什么类型的代码 -->
                [CSS]
                {
                    width:'100px'
                }
            </code>
            <code class="javascript">
                [javascript]
                var a = 123;
                var b = document.getElementById('tr')
            </code>
            <code class="html">
                [HTML]
                &lt;div&gt;&lt;/div&gt;<!-- html代码需要转义 -->
            </code>
        </pre>
</div>
```
