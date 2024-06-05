# 创建客户

## 功能简述

- 创建商户下客户

### 客户状态说明

创建客户的初始状态为**待完善资料**，商户完善客户资料后转变为**待审核**，待审核状态后，系统审核人员可对该数据进行**审核成功**、**审核失败**、**封禁**等操作。

## 创建客户 API

### 请求 URL

- `/payee/custom/create`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
客户账户信息如果是银行账户 bankcode、cardno、ibanaccount 必填。如果客户账户为 STCPay 账户则 stcaccount 必填。
:::

| **参数**    | **必填** | **类型** | **默认值** | **描述**                                                                                       |
| ----------- | -------- | -------- | ---------- | ---------------------------------------------------------------------------------------------- |
| name_e      | 是       | string   | -          | 客户英文名称                                                                                   |
| name_a      | 是       | string   | -          | 客户阿拉伯文名称                                                                               |
| mercustomid | 是       | string   | -          | 商户客户 ID ，要求商户下唯一                                                                   |
| identity    | 是       | string   | -          | 身份证号（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| bankcode    | 否       | string   | -          | [银行 CODE](/zh/payoutApi/banks/bankList)                                                      |
| cardno      | 否       | string   | -          | 银行账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| ibanaccount | 否       | string   | -          | IBAN                                                                                           |
| stcaccount  | 否       | string   | -          | STCPay 账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理） |

**请求参数示例**

```json
{
    "name_e":"usera",
    "name_a":"usera",
    "mercustomid":"u001",
    "identity":"z9LnjQJuvqDnaWsrLgrO1GxT2z7fww/sxNxWjrMTinFgT5dNrn1CbpRMy99qc1GnyqzlwBytZf6oa4fOQO5kHQwR4DVMRpmii81MqgAuWBQJktCG5mAgd5yzUO2kLZyHDfy5J7Y2pMyqmFzvMPiD1tIxPezgcExXEKxcPKs1tvOr+7zgTbNtnvfm1VW+BzIVmJYmaXBW4ZhEdJqz+dxdSyZIdUdbV1oc46xiuIxZOn3hxYMy0XnGjNJNT9TSW299pSSDBpVbCoWg9u4okMI222adQyikyfz+TlSsVNTHnnB8C+rf+Kjc6ZPszCdu+KTjiYOTkRlJIUbHe0bM02pOjg==",
    "bankcode":"1174c",
    "cardno":"Zh4EkxILOkTNwk4PcEerZjpmmTu6IorKDC1jpm4l3hMuEI4zWJ2pyafiTDNaIoN6VOh8ivWxJBeOD2N6uXiPwJ6qyreVMhDsYa8nHK58l2JM6BC1teG0Q61ZPknXloB6aaDgDSQetbdomggAH+cu7masFnLU+YmI1umP/p7DhePYjT69Yq3vJ2wBEUp0dVIaINB0c4uB/bapmWb3zmBcSW1To2RopXlNIggjk1qdLUtxXmaYdzkyRJbevpBHARaA/BwIm3e1/ZwO+WUETBmhci96ciPBuf/NzyhUp9UHPgNoajdAwwdN5FUEA9E1KE6uwHdWMAICy/pWzsaOjoQpOQ==",
    "ibanaccount":"1234567892"
}
```

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
        "identity": "s0YhJVboAqQj8kLCkTqCttAwpP39nR5VaaTy8pWFwSQDjSYei7YqZAbcoeckAD40bgliH9sSXre9PafDDpHfdkKX22X0lvJzIcpL8PGSpWQT2XloHjKxExRhiq/AgzEnwV9kq66b2hqi56O2djjzYOXOz/BpYKqvqWG7ak47OLV2hDR6r0hzhZsdvvvCeo21lMafUGd6hmf6TElqDntIfgFNTGSbxkV3kKlXnNX0hdHPmGtnfqbIuxo+yAHeJdffxA/6iHzSsW92t/bvtB9hV5ON+v4s/VpVZCRYmj0AIs9bQ+Ed+hNXtlmLuyaxfRdYVG6nl1MhVGJG0QioO4sNag==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "W0jEosfhj/TfHAjjxyIaCWHZVfdwL/2rsXj4xoXzuPWZN2nKLYmlogABKjuNF9930fmyCyt3cGZD4MRgwjf8/ZZKb0HqQLAtw+rfc/2PRViXkdq4vr3iTGyH4W7MW4n0yw6rREZUf+9/R96zyqA5iky0A0kz2suAiKBQjsQGZ1PBCGYPxmzDnpolk76Bhvpm2YNgQnvRCLUQIOCIdq4Aj9rmV0MzfhilTZ3MhIe4WqW7eubFwq0+3CF484uSVemkdRYPVZ17umbCDTRENdzkTKUIZwxTxRTMfHyUr5Sx75RyBpJDzoReluIKnX9tzQ/jb+/V4Eiv39FD4l5/Zp8trA==",
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
    "requestId": "91A8340E7AEE8EC99D06EB46DF92A19F"
}
```