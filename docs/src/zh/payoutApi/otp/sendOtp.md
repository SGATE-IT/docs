# 发送 OTP 验证码

::: warning 注意
该功能需要提前在后台配置开通。
:::

## 功能简述

支持为沙特手机号码发送一条包含 OTP 验证码的短信，用以验证该手机号的合法性。

### 验证码规则

- 验证码：随机 6 位数字，会出现以 0 开头的数字。
- 验证码有效期：5 分钟。
- 验证码频率：同一手机号，一分钟内只能发送 1 次。

### 测试号码

联调测试可以使用测试号码进行测试，测试号码不会真实发送短信，其他号码系统会尝试进行短信发送。

测试号码的验证码和返回的 `sessionid` 保持不变。

| **手机号码** | **验证码** | **sessionid**                    |
| ------------ | ---------- | -------------------------------- |
| 512345678    | 123456     | 10290d703f8254593ff93533f00af153 |

### 验证码模版

OTP 类型：

- stcpay

```
{CODE} is OTP to varify your STCPAY account , please input within {ECPIRY} minutes. - {APP_NAME}
```

| **变量**     | **类型** | **说明**           |
| ------------ | -------- | ------------------ |
| `{CODE}`     | string   | 验证码             |
| `{ECPIRY}`   | number   | 过期时间，单位：分 |
| `{APP_NAME}` | string   | 产品名称           |

## 发送 OTP 验证码 API

### 请求 URL

- `/otp/sendOtp`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数** | **必填** | **类型** | **默认值** | **描述**           |
| -------- | -------- | -------- | ---------- | ------------------ |
| mobile   | 是       | number   | -          | 发送验证的手机号码 |
| appname  | 是       | string   | -          | 产品名称           |

### 响应参数

响应参数如下：

- **Response Body**

| **参数名** | **类型** | **描述**     |
| ---------- | -------- | ------------ |
| mobile     | string   | 发送手机号码 |
| appname    | string   | 产品名称     |
| sessionid  | string   | OTP 发送凭证 |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "mobile": "512345678",
        "appname": "TestApp",
        "sessionid": "10290d703f8254593ff93533f00af153"
    },
    "sensitiveFields": {},
    "requestId": "758EFC622B2D51B4C37353D4C8BEA374"
}
```