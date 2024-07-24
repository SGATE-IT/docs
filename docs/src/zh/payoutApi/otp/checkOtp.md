# 验证 OTP 验证码

## 功能简述

验证发送的 OTP 验证码是否有效。

::: tip 提示
验证码在成功验证后会失效；测试号码的验证码在验证后不会失效，可以重复验证。
:::

## 验证 OTP 验证码 API

### 请求 URL

- `/otp/checkOtp`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数**  | **必填** | **类型** | **默认值** | **描述**                             |
| --------- | -------- | -------- | ---------- | ------------------------------------ |
| mobile    | 是       | number   | -          | 发送验证的手机号码，长度限制 13 字符 |
| code      | 是       | string   | -          | 验证码，长度固定 6 字符              |
| sessionid | 是       | string   | -          | OTP 发送凭证，长度固定 32 字符       |

### 响应参数

- **Response Body**

成功验证返回 `code` 为 `200`，无其它响应值。

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "A3A030EE37E5BC84C9625639B3F38B6E"
}
```