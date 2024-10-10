# 创建快捷代付工单

## 功能简述

- 商户可以绕过客户创建和审核的流程，直接提交基本信息发起代付工单。

## 创建快捷代付工单 API

### 请求 URL

- `/payee/payCustomTicket/rapid`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
mercustomid 为商户客户 ID，系统会自动依据 mercustomid 做以下处理：

1. 当商户下 mercustomid 已存在关联的客户，会根据提交的客户信息，对该客户信息进行更新，同时为该客户创建代付工单。
2. 当商户下 mercustomid 不存在关联的客户，则会新创建一个新的客户，客户创建后直接为审核通过的状态，同时为该新增的客户创建代付工单。
3. 沙箱环境中创建快捷代付工单，当使用[测试账户](/zh/payoutApi/appendix/testAccount)时，客户也都为审核通过的状态，但付款结果遵循文档中“付款自动结果”，并触发[回调通知](/zh/payoutApi/notification/notification)。
4. STCPay 付款只支持 SAR 货币。
5. 代付 KWD 或 AED 货币，需要客户信息填写 `address` 或者 `swiftcode`。
   :::

- **必须**传递的参数：

| **参数**      | **必填** | **类型** | **默认值** | **描述**                                         |
| ------------- | -------- | -------- | ---------- | ------------------------------------------------ |
| mercustomid   | 是       | string   | -          | 商户客户 ID，长度限制 64 字符                    |
| payeeuid      | 是       | string   | -          | 商户订单 ID，要求全局唯一，长度限制 64 字符      |
| amount        | 是       | float    | -          | 付款金额，精确到小数点后两位                     |
| currency      | 是       | string   | -          | [货币代码](/zh/payoutApi/appendix/currency)      |
| paymentmethod | 是       | string   | -          | [付款方式](/zh/payoutApi/appendix/paymentMethod) |

- 使用 **bankTransfer** 付款方式，需要额外传递的参数：

| **参数**    | **必填** | **类型** | **默认值** | **描述**                                                                                                                        |
| ----------- | -------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| name_e      | 是       | string   | -          | 客户英文名称，长度限制 64 字符                                                                                                  |
| name_a      | 是       | string   | -          | 客户阿拉伯文名称，长度限制 64 字符，如果客户无阿拉伯文名称可以填写为客户英文名称                                                |
| bankcode    | 是       | string   | -          | [银行 CODE](/zh/payoutApi/banks/bankList)                                                                                       |
| cardno      | 否       | string   | -          | 银行账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理），要求为数字，长度限制 13 ～ 19 字符 |
| ibanaccount | 是       | string   | -          | IBAN，字母和数字组成，长度限制 34 字符                                                                                          |
| address     | 否       | string   | -          | 客户银行卡绑定的地址信息，长度限制 255 字符                                                                                     |
| swiftcode   | 否       | string   | -          | 客户银行账户对应的 Swift Code，长度限制 32 字符                                                                                 |

- 使用 **STCPay** 付款方式，需要额外传递的参数：

| **参数**   | **必填** | **类型** | **默认值** | **描述**                                                                                                                                                                      |
| ---------- | -------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stcaccount | 是       | string   | -          | STCPay 账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理），支持格式：<br> 5xxxxxxxx <br> 9665xxxxxxxx <br> +9665xxxxxxxx <br> 05xxxxxxxx |

**请求参数示例**

```json
{
  "mercustomid": "u0043",
  "payeeuid": "payeeuid1",
  "amount": 33.33,
  "currency": "SAR",
  "paymentmethod": "STCPay",
  "stcaccount": "j+7ehQuYum6eK+1CgMAyVnbJLZl5bU3I1q/Egyh2BNkqLyingkjeFuX+an2mkqZ2IaK1038zNhz7lvnix+R4C7gGM/hWSwZ2/OReoO4CTKfB8KH+XyYNEKgkd+5BIE/w35ssJNgCHy7BlqZz9sm2hboz6DOZAcY/Sv7eya328yChDllr8MlUY87x+yTN+EEjiUajvFA3RB7Lx/+DcQgkx58fmlrq4JhwlqnjKJllSimnqwK9DB6nKsNQAHONLzGndl4nAaL441EGyP0tVU+roSd0uJU1hpc+Gq9HKLr1N3rt1Y7QEd9+wHwZ3EBf0dUdIq94gC1ZuZ0VU+pBRim40Q=="
}
```

### 响应参数

响应参数如下：

- **Response Body**

| **参数名**    | **类型** | **描述**                                                                  |
| ------------- | -------- | ------------------------------------------------------------------------- |
| ticketid      | string   | 代付工单 ID                                                               |
| key           | string   | 代付工单 Key，每个代付工单唯一                                            |
| customid      | string   | 系统客户 ID                                                               |
| mercustomid   | string   | 商户客户 ID                                                               |
| payeeuid      | string   | 商户订单 ID                                                               |
| trantype      | string   | [交易类型](/zh/payoutApi/appendix/tranType)                               |
| currency      | string   | 返回货币类型为申请 payout 时的[货币代码](/zh/payoutApi/appendix/currency) |
| paymentmethod | string   | [付款方式](/zh/payoutApi/appendix/paymentMethod)                          |
| amount        | float    | 付款人支付总金额                                                          |
| realamount    | float    | 收款人实际到账金额                                                        |
| fee           | float    | 手续费                                                                    |
| status        | number   | [代付工单状态](/zh/payoutApi/appendix/paymentStatus)                      |
| statusdesc    | string   | 状态说明                                                                  |
| confirmtime   | number   | 打款完成时间                                                              |
| custominfo    | object   | 代付工单创建时客户数据快照，数据结构同客户数据                            |
| created_at    | number   | 创建时间                                                                  |
| updated_at    | number   | 更新时间                                                                  |

**响应参数示例**

```json
{
  "code": 200,
  "message": "Request succeeded.",
  "data": {
    "ticketid": "17dd6",
    "key": "M4TKKME20240626143819",
    "customid": "130b0",
    "mercustomid": "u0045",
    "payeeuid": "PAY00000001",
    "trantype": "rapid",
    "currency": "SAR",
    "paymentmethod": "STCPay",
    "amount": 44.33,
    "realamount": 42.11,
    "fee": 2.22,
    "feeconfigid": 1,
    "status": 0,
    "statusdesc": "2024-06-26 14:38:19",
    "confirmtime": 0,
    "custominfo": {
      "customid": "130b0",
      "mercustomid": "u0045",
      "name_e": "useraa121",
      "name_a": "userbb121",
      "address": "Saudi Arabia",
      "identity": "",
      "identitypic": "",
      "signpic": "",
      "bankname": "The Saudi British Bank",
      "bankcode": "11558",
      "cardno": "",
      "ibanaccount": "1234567892",
      "swiftcode": "ABNACNSHXXX",
      "stcaccount": "HsMxmSUUqbD+uZEdEocdAqg+BBGknsOs/KeIaqqkUwYaKlv20g3J/YVhDYD+enecBLOP8tzpRPQU+E7bsw1FccP/jzb/rVUpgUPUqcflJMnxUiUacZrHWgq4U/0QclUrWfCrl+78av236LlobEgN7jgNDzuBpiApJhQrb1j3bzqFDmTapOHR3DNDyCOBkhkgkGjlFWz9p2duv4TgDNfmy3RbbV9dfpEI8PcteGTmqsBXKf0794SPvLAj+m4RO5iYwE6l8JoYlFXqEl+8Ruppt+ZH9Zv6whVgp5Qtl5tlalV9o0+t3Z4qg6jJcaVDmp0hMO4rCw07YV04FHCCUtth+g==",
      "status": 1,
      "statusdesc": "Customers create through quick payment",
      "demand_perfection": ["identitypic"],
      "created_at": 1707395488,
      "updated_at": 1719401899
    },
    "created_at": 1719401899,
    "updated_at": 1719401899
  },
  "sensitiveFields": {
    "custominfo": ["identity", "identitypic", "signpic", "stcaccount", "cardno"]
  },
  "requestId": "FD82B523FCEA90F65E06B15EAA7C2290"
}
```
