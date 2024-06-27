# 查询 OTP 发送任务

## 功能简述

查询 OTP 发送任务状态。

## 查询 OTP 发送任务 API

### 请求 URL

- `/otp/otpDetail`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数**  | **必填** | **类型** | **默认值** | **描述**                             |
| --------- | -------- | -------- | ---------- | ------------------------------------ |
| mobile    | 是       | number   | -          | 发送验证的手机号码，长度限制 13 字符 |
| sessionid | 是       | string   | -          | OTP 发送凭证，长度固定 32 字符       |

### 响应参数

响应参数如下：

- **Response Body**

::: tip 提示
消息网关每分钟同步一次消息渠道发送状态。
:::

| **参数名**   | **类型** | **描述**                                                                                                                                                               |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mobile       | string   | 发送手机号码                                                                                                                                                           |
| sessionid    | string   | OTP 发送凭证                                                                                                                                                           |
| status       | string   | 消息网关发送状态：<br>`unknown`：未知<br>`create`：任务已创建<br>`pending`：等待推送到渠道<br>`sending`：推送渠道中<br>`success`：推送渠道成功<br>`fail`：推送渠道失败 |
| reportstatus | string   | 消息渠道发送状态：<br>`unknown`：未知<br>`pending`：消息发送中<br>`success`：消息发送成功<br>`fail`：消息发送失败                                                      |
| created_at   | number   | 创建时间                                                                                                                                                               |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "mobile": "966580310251",
        "sessionid": "800558b1fb8327742f17d63a3202093e",
        "status": "fail",
        "reportstatus": "unknown",
        "created_at": 1717560142
    },
    "sensitiveFields": {},
    "requestId": "62C10FE5F4C06032E9D3ACF70E75B27B"
}
```