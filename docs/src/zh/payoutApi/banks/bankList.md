# 查询银行列表

## 功能简述

- 查询支持的银行列表

## 查询银行列表 API

### 请求 URL

- `/payee/banks`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

### 响应参数

响应参数如下：

- **Response Body**

| **参数名** | **类型** | **描述**  |
| ---------- | -------- | --------- |
| bankcode   | string   | 银行 CODE |
| bankname   | string   | 银行名称  |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "bankcode": "114db",
            "bankname": "The National Commercial Bank"
        },
        {
            "bankcode": "11558",
            "bankname": "The Saudi British Bank"
        },
        {
            "bankcode": "115d5",
            "bankname": "Saudi Investment Bank"
        },
        {
            "bankcode": "11652",
            "bankname": "Alinma Bank"
        },
        {
            "bankcode": "116cf",
            "bankname": "Banque Saudi Fransi"
        },
        {
            "bankcode": "1174c",
            "bankname": "Riyad Bank"
        },
        {
            "bankcode": "117c9",
            "bankname": "Samba Financial Group (Samba)"
        },
        {
            "bankcode": "11846",
            "bankname": "Alawwal bank"
        },
        {
            "bankcode": "118c3",
            "bankname": "Al Rajhi Bank"
        },
        {
            "bankcode": "11940",
            "bankname": "Arab National Bank"
        },
        {
            "bankcode": "119bd",
            "bankname": "Bank AlBilad"
        },
        {
            "bankcode": "11a3a",
            "bankname": "Bank AlJazira"
        },
        {
            "bankcode": "11ab7",
            "bankname": "Gulf International Bank Saudi Aribia (GIB-SA)"
        }
    ],
    "sensitiveFields": {},
    "requestId": "C66318F367852434B45337CD9F833E27"
}
```