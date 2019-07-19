## 项目配置
> 配置分为开发环境与正式环境，键入命令是会自动切换环境配置

> 命令：

>   dev 开发环境配置

>   build 正式环境配置

## 目录结构
| 目录          | 描述                                                                                                              |
|:--------------|:------------------------------------------------------------------------------------------------------------------|
| -url          | 接口请求路径，因为项目使用了webpack打包。基础配置使用ADM/CMD语法，接口配置使用ES6语法。所以这里单独使用一个url    |
| config-dev.js | 开发环境配置                                                                                                      |
| config-prod.js| 正式环境配置                                                                                                      |
| index.js      | 自动选择配置中间件                                                                                                |


### 配置说明
> 
***
| 属性          | 描述                      |
|:--------------|:--------------------------|
| port          | 端口号                    |
| routerBase    | 默认资源路径              |
| authBase      | 鉴权请求路径              |
| requestBase   | 接口请求路径              |
| cookieMaxAge  | session生命周期           |
| appid         | 微信开放平台 id           |