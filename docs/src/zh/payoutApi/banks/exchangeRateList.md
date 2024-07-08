# 查询汇率

## 功能简述

- 当前 payout 币种对 SAR 币种的汇率:

## 查询银行列表 API

### 请求 URL

- `/payee/exchangeRate`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

### 响应参数

响应参数如下：

- **Response Body**

| **参数名** | **类型** | **描述**                                |
| ---------- | -------- | --------------------------------------- |
| scur       | string   | 当前币种                                |
| tcur       | string   | 目标币种                                |
| ratenm     | string   | 汇率兑换名称，格式为：当前币种/目标币种 |
| rate       | float    | 汇率                                    |
| updated_at | number   | 更新时间                                |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "scur": "KWD",
            "tcur": "SAR",
            "ratenm": "KWD/SAR",
            "rate": 12.11,
            "updated_at": 1675214960
        },
        {
            "scur": "AED",
            "tcur": "SAR",
            "ratenm": "AED/SAR",
            "rate": 1.02,
            "updated_at": 1675214960
        }
    ],
    "sensitiveFields": {},
    "requestId": "140EF15206E742C556A0B9E36878D19F"
}
```