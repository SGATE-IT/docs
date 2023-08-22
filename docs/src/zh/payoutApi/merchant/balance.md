# 查询商户余额

## 功能简述

- 查询商户余额

## 查询商户余额 API

### 请求 URL

- `/merchant/balance`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

### 响应参数

响应参数如下：

- **Response Body**

| **参数名** | **类型** | **描述**                                    |
| ---------- | -------- | ------------------------------------------- |
| currency   | string   | [货币代码](/zh/payoutApi/appendix/currency) |
| balance    | float    | 货币余额                                    |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "currency": "SAR",
            "balance": 999999
        }
    ],
    "sensitiveFields": {},
    "requestId": "F846B971722D6420CCC5897D9FDF7FA4"
}
```