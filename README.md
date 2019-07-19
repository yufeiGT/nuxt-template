# Nuxt项目模板

> 技术栈： [Express](http://www.expressjs.com.cn/) + [Nuxt.js]((https://nuxtjs.org)) + [Element-ui@2.7.2](https://element.eleme.cn/2.7/#/zh-CN) + [Scss](https://www.sass.hk/)

> 由于 SPA (Single Page Application) 对 SEO 不友好

> 所以采用 [Vue.js](https://cn.vuejs.org/) 官方推荐框架 [Nuxt.js](https://nuxtjs.org) 进行 SSR 来支持 SEO

## 启动步骤

``` bash
# 安装依赖模块
$ npm i

# 开发
$ npm run dev

# 编译
$ npm run build

# 启动
$ npm start

```

部署请看 [Nuxt.js相关文档](https://nuxtjs.org).

## 目录结构

| 目录                  |   描述                    |
|:----------------------|:--------------------------|
| -api                  | 接口                      |
| -assets               | 资源                      |
| -components           | 组件                      |
| -config               | 配置                      |
| -layouts              | 布局                      |
| -middleware           | 中间件                    |
| -pages                | 页面视图                  |
| -plugins              | 插件                      |
| -server               | 服务                      |
| -static               | 静态资源                  |
| -store                | Vuex                      |
| -theme                | Element-ui 主题           |
| .gitignore            | Git 忽略提交              |
| element-variables.scss| Element-ui 主题           |
| nuxt.config.js        | Nuxt 配置                 |
| package.json          | NPM 包管理                |
