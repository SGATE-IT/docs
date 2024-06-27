# 查询单个代付工单

## 功能简述

- 查询单个代付工单


## 查询单个代付工单 API

### 请求 URL

- `/payee/payCustomTicket/detail`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
代付工单 ID 和商户订单 ID 传其中一个，如果都不传接口会响应参数缺失错误。
:::

| **参数** | **必填** | **类型** | **默认值** | **描述**                      |
| -------- | -------- | -------- | ---------- | ----------------------------- |
| ticketid | 否       | string   | -          | 代付工单 ID，长度限制 64 字符 |
| payeeuid | 否       | string   | -          | 商户订单 ID，长度限制 64 字符 |

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

| **参数名**    | **类型** | **描述**                                             |
| ------------- | -------- | ---------------------------------------------------- |
| ticketid      | string   | 代付工单 ID                                          |
| key           | string   | 代付工单 Key，每个代付工单唯一                       |
| customid      | string   | 系统客户 ID                                          |
| mercustomid   | string   | 商户客户 ID                                          |
| payeeuid      | string   | 商户订单 ID                                          |
| trantype      | string   | [交易类型](/zh/payoutApi/appendix/tranType)          |
| currency      | string   | [货币代码](/zh/payoutApi/appendix/currency)          |
| paymentmethod | string   | [付款方式](/zh/payoutApi/appendix/paymentMethod)     |
| amount        | float    | 打款金额                                             |
| realamount    | float    | 实际到账金额                                         |
| fee           | float    | 手续费                                               |
| status        | number   | [代付工单状态](/zh/payoutApi/appendix/paymentStatus) |
| statusdesc    | string   | 状态说明                                             |
| confirmtime   | number   | 打款完成时间                                         |
| custominfo    | object   | 代付工单创建时客户数据快照，数据结构同客户数据       |
| created_at    | number   | 创建时间                                             |
| updated_at    | number   | 更新时间                                             |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "ticketid": "17877",
        "key": "M4TAW2S20240129052424",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "PPP1231s234sss23",
        "trantype": "standard",
        "currency": "SAR",
        "paymentmethod": "STCPay",
        "amount": 18.75,
        "realamount": 17.81,
        "fee": 0.94,
        "feeconfigid": 1,
        "status": 0,
        "statusdesc": "2024-01-29 05:24:24",
        "confirmtime": 0,
        "custominfo": {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "useraa",
            "name_a": "userbb",
            "identity": "ZEITHUotd2N8RI49iCLxq8ETZ37QHiIKGUJ0RZ5OCIoQzdUz0DqbcRMRxmVkpsruScSg3U/6Pp7PCUjJ43Bj1l1j55hk6uRg3/yfTXEbX32BZhwCD0bzokHOOu5+JWD6YcsIxxdGBMIngEPeY4V2hAoC6DIgq4eR1puyZp8taYOyU1XEbgVV4TSZ12ORPD4uS55Htvxn69MzWjRKqtPzvwV6MVlAUy14G9rH/OnNLIySDl7anE382y7+6acCTgorbTzTdz8YP/O4q/Hp+gbVh7nBXn0uwPj26NyHLBCuRXkbL+id5xFXkxfBrHBRoq4QhgRA69Y/FkKQgOjeUwrfWQ==",
            "identitypic": "WjY9aDbqNEmhKwwhCIPVVXMyV95oXARpe9zZSlmSwlNNxSYD//fUwjtrl1HtUqfOBVY3vP2UgxyfB9p293jolKlPkjcr2Xbkce4CJQWeUelAgpDIoLqGTYY4tTiTo0MJGikHp7X9qKr4wbEDAn8ix0akyROWTG3gLyUROK5AFSz/5fQrQgRsh+fffkFvew4xCuEAJv8LpkxzSEJQthnnS28BnDpSgUA2iML/HboXuiY7G1avO+U8ETwQn0LaZPMK/QuVQ2V87JkmZKSyPdYrIgPqzVRCyPg6iooLIZkaiIJ1Q5gAb1HQGtCxpahYjnFCHO+5d/jj9WcfpeGobqYFjw==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "E3NXOnyWzUb3oFVZ6ATT5mxOwxbyYzavxyc2hXMlohmqfo5qXPpnmmVucyknUa8tFg6A870IF74NLggCS7gBRvmHYl54QY/Q6CKrWKt3c4GsNtVyb2pOolRklOzXjS4O+Y/uaTffc+vOKV6tlG+E+Km9PmznpSkxWCE+rPsqnDZylaQBjuulxh3b5TGhMtnRsJhIhjkqMq9J0e6fY0yryeFAz4sQw94xd/usQ5dFYTZJLPU2ukPcbCa+DRB/OQLe5nLHacuIFyajbN24rq+5UyRId6N3qEpHzfl+f8qIv5nTit0kkwh1RESrqbHvtDx0dB+EHQu17Kq0E/gRpzwsnA==",
            "ibanaccount": "1234567892",
            "stcaccount": "CW5tgmBTFG+qoONAqIG/XCKFBC2pQTbMLOvP5W4Ym3+wrZcSxhJ2B26Xncaqdfvw0A5Ny8xklN3Y8tOgfSeeVvFQSjwR9Ba7TpuCQl7kvSTUGkXdLyMJd4zksmdM0MI9fl3iRX0IPoZ8Seoy0faguDseXstMb3pTWBepRlIKsM/w5DH8f7jyZp3HeQrcUQ41VqS7yAlxXjwSmMpAbmfNe0S0vs6eBg0WduEeICCgCwf2TnIDkk0KXITzXh6cKv+fAgVZB/a0xYTfu1aLHrpP2rGcniOKRsJCSXpmdoNiUsfIYZd4YzjEf7hEPviXBlf+5cn53vlWamHgiywm5WD1ZQ==",
            "status": 1,
            "statusdesc": "fggfhhf",
            "demand_perfection": [],
            "created_at": 1686798774,
            "updated_at": 1706258310
        },
        "created_at": 1706495064,
        "updated_at": 1719198062
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
    "requestId": "2D22866A748BF5098936CA3ED891B205"
}
```