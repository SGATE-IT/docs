# 重新发送 STCPay 账户认证

::: warning 注意
该功能只在客户开启自动审批，并且客户的 STCPay 没有完成验证时生效。
:::

## 功能简述

- 重新发送 STCPay 账户认证

## 重新发送 STCPay 账户认证 API

### 请求 URL

- `/payee/custom/resendStcAccountOtp`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
商户客户 ID 和系统客户 ID 传其中一个，如果都不传接口会响应参数缺失错误。
:::

| **参数**    | **必填** | **类型** | **默认值** | **描述**                       |
| ----------- | -------- | -------- | ---------- | ------------------------------ |
| mercustomid | 否       | string   | -          | 商户客户 ID，长度限制 128 字符 |
| customid    | 否       | string   | -          | 系统客户 ID，长度限制 64 字符  |

### 响应参数

- **Response Body**

成功发送返回 `code` 为 `200`，无其它响应值。

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "A3A030EE37E5BC84C9625639B3F38B6E"
}
```