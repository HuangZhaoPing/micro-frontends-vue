# 基于vue全家桶实现的微前端

基于 vue 全家桶实现的微前端，代码量非常少，易于理解，适用于大型项目。

## Example

    git clone https://github.com/HuangZhaoPing/micro-frontends-vue.git

    cd app
    npm install
    npm run dev

    cd module1
    npm install
    npm run dev

    cd module2
    npm install
    npm run dev
    
    open http://localhost:8000

## 原理 && 实现

项目分为主项目（app）和子项目（module），主项目负责主体框架，登录，公用模块（组件，utils、mixin……）等，子项目负责路由、业务等。

* 主项目作为整个项目的入口，定义菜单
* 子项目设置成 umd 模式，提供接口，导出路由对象
* 点击菜单，通过解释 url 路径动态加载（可使用 loadjs 或 systemjs ）子项目的 main.js，拿到路由对象
* 通过 VueRouter 的 addRoutes 方法将子项目的路由添加到路由表中
* 将 vue 全家桶设置为外部依赖（externals），在 html 中通过 script 引入，解决重复引入资源的问题

关键点：

* library 与 libraryTarget，将项目设置成模块
* loadjs 或 systemjs 按需加载模块
* externals 防止重复引入资源

## 引用公共模块

公共模块是指公共组件、utils、mixin 等，编写在主项目中，将主项目设置成 umd 模式，并提供这些公共模块的接口，子项目可以通过接口拿到这些公共模块，前提是要将主项目设置成外部依赖（externals）。

## 缓存

推荐使用协商缓存，需要服务端配合，这样前端静态资源文件就不需要设置 hash。如果没有协商缓存，需要在打包时加上hash，然后将 modules 添加到 lib 中（打包时通过 CopyWebpackPlugin 将其复制到打包目录），并注入到 window 对象中，这样可以通过 window\[moduleName\] 取得映射路径，打包后，需要到 modules.js 中手动修改路径（后期可以通过自动化工具实现自动修改，如 ci/cd），即可解决缓存问题。

## 参考资料

<https://juejin.im/post/5e5c9bff51882548fe291950>
