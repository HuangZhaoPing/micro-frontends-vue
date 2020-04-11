# 纯vue实现的微前端

纯vue实现的微前端，代码量非常少，易于理解，可用在基于vue全家桶开发的大型项目中。

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

## 原理 && 实现

纯vue实现的微前端，项目分为主项目和模块项目，主项目负责主体框架，登录，公用模块（组件，utils、mixin……）等，模块项目负责路由、业务等。

* 主项目作为整个项目的入口，定义菜单。
* 模块项目设置成umd模式，提供接口，导出路由对象。
* 点击主项目的菜单，通过映射动态加载（可使用loadjs或systemjs）模块项目的入口，拿到模块项目的路由对象。
* 