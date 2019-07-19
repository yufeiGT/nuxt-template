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

### getCartCount (async)
> 获取购物车数量
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文            |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### sendMsg
> 发送验证码
***
| 参数              | 类型              | 描述                                      |
|:------------------|:------------------|:------------------------------------------|
| params            | Object            | 参数对象                                  |
| params.name       | String            | 图像验证码名称                            |
| params.mobile     | String            | 手机号码                                  |
| params.msgType    | String            | 短信类型 传web_sms_moblie_register        |
| params.timestamp  | Number            | 图形验证码时间戳                          |
| params.vcode      | String            | 图形验证码                                |
| success           | Function          | 成功回调                                  |
| fail              | Function          | 失败回调                                  |

### verifySmsCode
> 验证手机短信是否正确
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| params            | Object            | 参数对象              |
| params.mobile     | String            | 手机号码              |
| parmas.code       | String            | 短信验证码            |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### passwordReset
> 重置密码
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| params            | Object            | 参数对象              |
| params.mobile     | String            | 手机号码              |
| parmas.code       | String            | 短信验证码            |
| params.password   | String            | 新登录密码            |
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

### findNavListByLocationBottom (async)
> 获取底部导航列表
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### getPcIndexData (async)
> 初始化页面数据接口
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### findGoodsClassRecommendGoods (async)
> 查询首页商品分类推荐商品信息
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### findAllNavigationIco (async)
> 首页底部服务模块图标接口
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### selectListByTailNavigationList (async)
> 直接查询全部的导航信息返回给首页调用
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### QRCodeUrl && asyncQRCodeUrl (async)
> 获取右侧边栏微信二维码
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文(async需要) |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### leftBar (async)
> 获取首页左侧边栏列表
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |

### getConfig (async)
> 获取热门词
***
| 参数              | 类型              | 描述                  |
|:------------------|:------------------|:----------------------|
| context           | Object            | Nuxt上下文            |
| success           | Function          | 成功回调              |
| fail              | Function          | 失败回调              |
