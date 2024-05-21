# 查询转账收款交易

## 功能简述

- 查询转账收款交易

## 查询转账收款交易 API

### 请求 URL

- `/virtualAccount/receivingTrans/list`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/virtualAccountApi/apiRule/header)

- **Request Body**

| **参数**  | **必填** | **类型** | **默认值** | **描述**                    |
| --------- | -------- | -------- | ---------- | --------------------------- |
| pageno    | 否       | number   | 1          | 页码                        |
| pagesize  | 否       | number   | 20         | 每页显示条数，最多支持100条 |
| starttime | 否       | number   | -          | 交易开始时间，秒级时间戳    |
| endtime   | 否       | number   | -          | 交易结束时间，秒级时间戳    |
| account   | 否       | string   | -          | 收款账户，长度 24 位        |

### 响应参数

响应参数如下：

- **Response Body**

| **参数名**                    | **类型** | **描述**                     |
| ----------------------------- | -------- | ---------------------------- |
| uuid                          | string   | 交易 ID                      |
| transactiontime               | string   | 交易时间 YYYY-mm-dd HH:ii:ss |
| account                       | string   | 收款账户                     |
| amount                        | float    | 交易金额                     |
| currency                      | string   | 交易货币                     |
| exchangeinfo                  | object   | 交易信息                     |
| exchangeinfo.custname         | string   | 银行侧商户名称               |
| exchangeinfo.custacc          | string   | 银行侧账户                   |
| exchangeinfo.bankbic          | string   | 银行侧识别码                 |
| exchangeinfo.channelreference | string   | 银行侧流水号                 |
| exchangeinfo.paymentremarks   | string   | 银行侧备注                   |


**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "uuid": "0FE4B054-A1FE-11ED-9A3D-F23C925C00BC",
            "transactiontime": "2023-01-29 01:56:13",
            "account": "SA9080000000000000000001",
            "amount": 50,
            "currency": "SAR",
            "exchangeinfo": {
                "custname": "Trust Gate",
                "custacc": "SA9080000000000000000002",
                "bankbic": "RJHISARI",
                "channelreference": "2024042500060801002869000004",
                "paymentremarks": "B2B/FRACCT/SA9080000000000000000002/Trust Gate/B2B"
            }
        }
    ],
    "sensitiveFields": {},
    "requestId": "4833DD916F788D654AABC9B5BDDECD49"
}
```