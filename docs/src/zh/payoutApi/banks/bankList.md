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

- **Request Body**

| **参数** | **必填** | **类型** | **默认值** | **描述**                                                                                        |
| -------- | -------- | -------- | ---------- | ----------------------------------------------------------------------------------------------- |
| country  | 否       | string   | SAU        | 银行所属国家：<br> `ALL`: 全部银行 <br> `SAU`: 沙特阿拉伯 <br> `KWT`: 科威特 <br> `ARE`: 阿联酋 |


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
            "bankname": "Saudi National Bank(SNB)"
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
            "bankcode": "11846",
            "bankname": "Saudi Awwal Bank(SAB)"
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
    "requestId": "FE6C4AB918BBA32CEABA121DD97E1D2F"
}
```