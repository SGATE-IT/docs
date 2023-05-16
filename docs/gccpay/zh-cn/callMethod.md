# 调用方法

## 名词解释

| **术语 / 缩略词** | **说明**                                                     |
| ----------------- | ------------------------------------------------------------ |
| 商户              | 即商家，在支付场景中是卖家，支付系统在帮助卖家实现收款业务   |
| 付款人            | 即买家，在支付场景中通过支付页面付款给卖家                   |
| 支付订单          | 卖家通过签名调用支付网关的创建订单接口创建出来的，用于收款   |
| 交易              | 付款人通过支付页面付款给卖家的时候某一次支付行为就是一个交易，同一个支付订单可能会产生多个支付交易，但是只有一个会成功，发起一个新的支付交易时，旧的支付交易自动作废 |
| 登陆账号          | 即用户ID，型如 U012030 (大写字母 U 开头后面6位数字)，妥善保管，登录的时候需要 |
| 登陆密码          | 用户登录密码，8 到 32 位字符串，必须同时包含数字和字母       |
| 两步验证串        | 采用 Google 身份，提升账户安全，用户需要导入到自己手机安装的 Google 身份认证中去，某些数据操作的时候需要验证 |
| client商户客户端  | 包含 `id` `key`和 `secret` 计算签名时用到                    |

## 服务器信息

### 沙箱环境

**服务地址：https://sandbox.gcc-pay.com/api_v1/**

**通信协议：HTTP**

**字符编码：UTF-8**

## 公共参数

**公共请求参数**

HTTP中header：

| **名称**            | **类型** | **是否必填** | **说明**                          |
| ------------------- | -------- | ------------ | --------------------------------- |
| x-auth-signature    | String   | 是           | 签名字符串                        |
| x-auth-key          | String   | 是           | 申请签名授权拿到的 key            |
| x-auth-timestamp    | String   | 是           | 发起请求的时间戳 int32 秒级       |
| x-auth-sign-method  | String   | 是           | 签名计算方式目前统一为 HmacSHA256 |
| x-auth-sign-version | String   | 是           | 签名计算方式版本目前统一为 1      |

## 鉴权机制

1. 构造请求参数的头信息, 签名验证所有信息均在头信息里
2. 签名计算方式
   1. 整理一批键值对,变成 key=value 的格式。value要经过urlencode 处理,
   2. 之后按照字典升序的方式排序这批键值对，之后用 & 符号链接
   3. 之后再利用上面申请到的 secret 利用 sha256 来计算这个拼接后字符串的摘要信息, 输出为 `base64` 编码
   4. 键值对如下
      1. `uri`: 请求的url去掉 root 的部分，例如: /users/100000/orders
      2. `key`: 申请到的key,
      3. `timestamp`: 时间戳, int32 秒级
      4. `signMethod`: "HmacSHA256" 固定
      5. `signVersion`: "1" 固定
      6. `method`:
         1. 生成订单：merchant.addOrder
         2. 查询订单：order.detail
         3. 查询商户信息：merchant.detail

## 响应结果

**成功响应**

当 HTTP 响应状态码为 `2xx` 时，表明调用成功。

**失败响应**

当 HTTP 响应状态码为 `4xx` 或 `5xx` 时，表明调用失败。

**响应报文样例**

```json
{
    "code": "notAllowed", ### 错误代码
    "message": "No access", ### 错误描述
    "data": ### 详细错误信息
    [
        "signature error",
        {
            "uri": "/merchants/M448726",
            "key": "zS83UNCPhVTqBxDHACJ30sImZRKAlzQI",
            "timestamp": 1672991487,
            "signMethod": "HmacSHA256",
            "signVersion": "1",
            "method": "merchant.detail"
        }
    ]
}
```


[footer](../../_common/zh-cn/_footer.md ':include')