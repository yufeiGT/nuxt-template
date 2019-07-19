# API
```
与后端通讯的接口
```

## 目录结构

| 目录            | 描述                |
|:----------------|:--------------------|
| -authorize      | 用户权限登录        |
| index.js        | 基础api             |

## index.js 接口描述
> async 为 Async/Await 异步函数

### verifyCode
> 获取图像验证码
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| timestamp         | Number            | 时间戳                |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### findNavListByLocationTop (async)
> 获取顶部导航列表
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |
