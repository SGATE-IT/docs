# 调用方法

## 服务器信息

### 沙箱环境

**服务地址：https://sandbox.sgate.sa/api_v1/**

**通信协议：HTTP**

**字符编码：UTF-8**

## 公共参数

**公共请求参数**

HTTP 中 header：

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

   1. 使用 key=value 的格式处理键值对。value 要经过 urlencode 处理,
   2. 之后按照字典升序的方式排序这批键值对，之后用 & 符号链接
   3. 再利用上面申请到的 secret 利用 sha256 来计算这个拼接后字符串的摘要信息, 输出为 `base64` 编码
   4. 键值对如下:

   | **KEY**     | **类型** | **说明**                                                                                                                                            |
   | ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
   | uri         | String   | 请求的 url 去掉 root 的部分，例如: /users/100000/orders                                                                                             |
   | key         | String   | 申请到的 key                                                                                                                                        |
   | timestamp   | Int32    | 时间戳, int32 秒级                                                                                                                                  |
   | signMethod  | String   | "HmacSHA256" 固定                                                                                                                                   |
   | signVersion | String   | "1" 固定                                                                                                                                            |
   | method      | String   | 接口请求的 Method，示例："merchant.addOrder" |

## 响应结果

**成功响应**

当 HTTP 响应状态码为 `2xx` 时，表明调用成功。

**失败响应**

当 HTTP 响应状态码为 `4xx` 或 `5xx` 时，表明调用失败。

**响应报文样例**

```json
{
  "code": "notAllowed", // 错误代码
  "message": "No access", // 错误描述
  // 详细错误信息
  "data": [
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
