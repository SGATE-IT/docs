# 查询单个客户

## 功能简述

- 查询单个客户

## 查询单个客户 API

### 请求 URL

- `/payee/custom/detail`

### 请求方式

- GET

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

响应参数如下：

- **Response Body**

| **参数名**        | **类型** | **描述**                                                                                             |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| customid          | string   | 系统客户 ID                                                                                          |
| mercustomid       | string   | 商户客户 ID                                                                                          |
| name_e            | string   | 客户英文名称                                                                                         |
| name_a            | string   | 客户阿拉伯文名称                                                                                     |
| identity          | string   | 身份证号（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）       |
| identitypic       | string   | 身份证照片 URL（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理） |
| signpic           | string   | 签名照片 URL（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）   |
| bankname          | string   | [银行名称](/zh/payoutApi/banks/bankList)                                                             |
| bankcode          | string   | [银行 CODE](/zh/payoutApi/banks/bankList)                                                            |
| cardno            | string   | 银行账户（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）       |
| ibanaccount       | string   | IBAN                                                                                                 |
| stcaccount        | string   | STCPay 账户（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）    |
| status            | number   | [客户状态](/zh/payoutApi/appendix/customStatus)                                                      |
| statusdesc        | string   | 客户状态说明                                                                                         |
| demand_perfection | array    | 用户当前待完善哪些资料                                                                               |
| created_at        | number   | 创建时间                                                                                             |
| updated_at        | number   | 更新时间                                                                                             |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "usera",
        "name_a": "usera",
        "identity": "noGsqF+6wpnfchtRtiIjkuzL3t6YPFv3rqK1KobZf5cVnLRCZ7HjxoqMHoD9b+YHasd1izzd58GPJAl5DswpI8f4PxauKBv9ba45us0PlUZAUurpc0/8FmZrx/xuDTz+rtfGBUckUBiwz0iZXdbJ46PYAPdB9Hlz27Nn7eYU9UXBiluuISBKt/1Q1aJ4nKfhjvONntmDXOUyP719hD8BIyjD3aYYK96OxwIrPCbT4nDMbA/qQdhboOVPQTdom774OWUjlVv32bU7Ck1jzmERvsMptCkveb/Qjr4b/9Z6ZKDIx0VtPPzHDtffNwRohfpEv9RiKzG4RM52Mfr3jV78Eg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "jH8+rl4v3EqKOZWgyacTtNhGGdP+DvyRpeVhDuXhvEam4pcI2vuPEUMtAaYD6LOpZ85z8sHZd344dDzTLmNuIOMs9GnvdrV0RA2kCqwHHIkgRshci1CHE/S4Ds+MBNdCcs+eeVYGHMa/PH2dZRIsYpdkGw17ldUxF8TL2gcRyNZvF/VWz3ZduuKUwFZ3eYeqLmMoAwQcslPZNcAPW28vXhiPw4DSyPc9jp1wRJWVLLVaTXYrSnx5847I0WscR++O052XSuSUPLlKsjhNVXKPW/3QPkAHifvIRxwgEb2tv9y7Clxp8GrD1K+vpojs3yhSpaUiPiVb6MEgXZq2In0rBA==",
        "ibanaccount": "1234567892",
        "stcaccount": "",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809574
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "13AB5E3E15526172EF73CB2939D08535"
}
```