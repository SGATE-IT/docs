# 创建代付工单

## 功能简述

- 商户为审核通过的客户创建代付工单。

::: danger 注意
只有审核通过的客户才能成功创建代付工单。
:::

## 创建代付工单 API

### 请求 URL

- `/payee/payCustomTicket/create`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
1. 商户客户 ID 和系统客户 ID 传其中一个，如果都不传接口会响应参数缺失错误。
2. 代付 KWD 或 AED 货币，需要客户信息填写 `address` 或者 `swiftcode`。
3. 沙箱环境中为填写了[测试账户](/zh/payoutApi/appendix/testAccount)的客户创建代付工单，会自动完成付款流程，触发[回调通知](/zh/payoutApi/notification/notification)。
4. STCPay 付款只支持 SAR 货币。
:::

| **参数**      | **必填** | **类型** | **默认值** | **描述**                                         |
| ------------- | -------- | -------- | ---------- | ------------------------------------------------ |
| customid      | 否       | string   | -          | 系统客户 ID，长度限制 64 字符                    |
| mercustomid   | 否       | string   | -          | 商户客户 ID，长度限制 128 字符                   |
| payeeuid      | 是       | string   | -          | 商户订单 ID，要求全局唯一，长度限制 64 字符      |
| amount        | 是       | float    | -          | 付款金额，精确到小数点后两位                     |
| currency      | 是       | string   | -          | [货币代码](/zh/payoutApi/appendix/currency)      |
| paymentmethod | 是       | string   | -          | [付款方式](/zh/payoutApi/appendix/paymentMethod) |

**请求参数示例**

```json
{
    "mercustomid":"u004",
    "payeeuid":"TEST1234567aa12sd2",
    "amount":2002,
    "currency":"SAR",
    "paymentmethod":"bankTransfer"
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
        "ticketid": "17d59",
        "key": "M4TBTQU20240626141958",
        "customid": "13033",
        "mercustomid": "u006",
        "payeeuid": "PAY12345678",
        "trantype": "standard",
        "currency": "SAR",
        "paymentmethod": "STCPay",
        "amount": 18.75,
        "realamount": 17.81,
        "fee": 0.94,
        "feeconfigid": 1,
        "status": 0,
        "statusdesc": "2024-06-26 14:19:58",
        "confirmtime": 0,
        "custominfo": {
            "customid": "13033",
            "mercustomid": "u006",
            "name_e": "updTest32",
            "name_a": "dbnuo",
            "address": "Saudi Arabia",
            "identity": "p/aFchx1MfO1BqrKTkiOs5FsAcynsiNUWjB3UABZYW2DssEt6EL2zU+r1g9tAwydbSAbMunA3zDcMut9vZ/dT8Nha1f+do35KivBBp1pTuI+kfaY8vja1pYmw6oEMUtpZyIWSu7kCg1bGjLX5IWCXZYdB0t3rCyzoAlomokwuZdHBKy/uEQzLsln6QU33MfayNxdGcGIYgpv4VCCiS7MejW9MP3Jh/y0Re/M5lW271xsES38J5RKEKhRUr1wAnp6vCkXZrn7Hd5tnxwUdHGHSGNK9/IV2cKICb3/GlsAq+sxHPDTOfkIhCvrOANKpuFqHUysJoGiFMc87Nc8J4raUQ==",
            "identitypic": "fvL4hLLMcXtVA0NHDmZidAIY5yiwlZZcd26EfHEdZgX8CdbXPO8eWB4cDAyQ8Bz3xBzDqUL4u02Q/kRxVPLIh8dPZ2ooMX6SPdxH5FW2HHlJ7vm2mqz0XgRy+DLC731xRbuUuxms9SuDfxCGDwiCddPFpuvkqRiUdOdmW9kcP064Y5V+KA7M1PgQLSn2h2hfyREN2yos7njZDDwveIfNpGi+hR4AjjQXYmKLlsbjDz/5kNPRbWOrvmL7karJKsja2GRauj5GbHUBnqX05NJhQvSzen4UDDnY9BfBtcDuC9pEyUOyIIRMIB3VkLbUvlWMzuFeYD+u7iE35f2vBkPXqA==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "q7gmtfi1gieWi/d6XHqtTKzAHi6Wxoxm4C9FGDYvmgYK8l7kK2H3IwcWnpO8liyhDAwBG42gebVYcOURTxhnGIhRXptEdegtQk5k0CqrPUghfMbTtUMSlj+ztxaa+HsRDlNfau35LOBoGcpn1tNV0OMar6XnR40KN06fkngItbKQvj8MC605cr/EI7Jit2qzNsUTUvlbQG53XuXV6pq/JIhMSUrO8JNcVzPc5G4VdruO4d7C3BzFqkpg4C5zf2bL+PuiE8WLyCOJFsOoxDtubkSviBYKS8SI2qYTkyZvVeZTICbNJw71OouycTj/FE+/HqaLjN7ue4NjzFwodK6bHw==",
            "ibanaccount": "1234567892",
            "swiftcode": "ABNACNSHXXX",
            "stcaccount": "QYLZ+8VpsZc2E5jljmaBSFySy4dvOWI5Q6nne+egdk0CYOc0g3t9guwAXTSKZWjij5Luy4EHrTju9f6VPsh7P33AJf4rHu/E86lr7vHxgwrriLHgdz3tbrCWolP9kW/i0d2uVuUTq2HgGddYNJgOvd5sBcyLDMMnDERJXRNfGKoIR5igUCQWZIzqTZXUGOWdm8tysHT3vnJb+DnWb2GNA0vLvwW36pUi8qxhb4Gbttt3J+Rzz+K/KsiziUmNWU1F1cr7e6qSvOze6TicfIogDt21FRGB/y5qYYOUE+fMd7HKxnY3i3LUu0q6T+ldQ9jlp2am78wS7T0yi0TMeNf3wQ==",
            "status": 1,
            "statusdesc": "Approved",
            "demand_perfection": [],
            "created_at": 1707394806,
            "updated_at": 1719400743
        },
        "created_at": 1719400798,
        "updated_at": 1719400798
    },
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "stcaccount",
            "cardno"
        ]
    },
    "requestId": "8A1D33FFBC9F379C1C6F423FFF7B8A46"
}
```