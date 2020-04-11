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

项目分为主项目和模块项目，主项目负责主体框架，登录，公用模块（组件，utils、mixin……）等，模块项目负责路由、业务等。

* 主项目作为整个项目的入口，定义菜单
* 模块项目设置成umd模式，提供接口，导出路由对象
* 点击主项目菜单，通过解释url路径动态加载（可使用 loadjs 或 systemjs ）模块项目的入口，拿到模块项目的路由对象
* 通过 VueRouter 的 addRoutes 方法将子项目路由添加到路由表中
* 将 vue 全家桶设置为外部依赖（externals），在 html 中通过 script 引入，解决重复引入资源的问题

关键点：

* library 与 libraryTarget，将项目设置成模块
* loadjs 或 systemjs 按需加载模块
* externals 防止重复引入资源

## 参考资料

<https://juejin.im/post/5e5c9bff51882548fe291950>
