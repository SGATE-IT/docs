# 回调通知

特定场景下会触发事件，进行回调通知。回调地址为商户提交到系统的回调地址，如果商户没有配置回调地址则不会进行通知。

::: danger 注意
单次事件通知总次数为 5 次，当请求回调地址响应的 HTTP 状态码不为 `200` 时，会等待 5 秒，然后重试通知，重试 5 次后不再发送通知。
:::

## 通知方式

系统使用 `POST` 请求方式请求商户的回调地址。

回调数据在 `body` 中以 `Raw JSON` 形式上报。

### 回调数据格式

```json
{
    "event":"RECEIVING_TRANS_NOTIFICATION",
    "data":{
        // 事件不同响应数据不同
    },
    "time":1686832475
}
```

| **参数名** | **类型** | **描述**               |
| ---------- | -------- | ---------------------- |
| event      | string   | 事件标识               |
| data       | array    | 事件数据，根据事件变化 |
| time       | number   | 事件时间，秒级时间戳   |

### 回调数据签名

回调请求会增加系统规定的[请求头](/zh/virtualAccountApi/apiRule/header)信息，回调数据会使用**系统私钥**进行签名，[签名规则](/zh/virtualAccountApi/apiRule/sign)同请求接口的方式一致。

请求头数据示例：

```json
{
    "V-Timestamp":1686831994,
    "V-Signature":"jkECqHHhr0DxyM7mp\/I\/7n56OwoMvp4aPTvODQNfVScqOORG2UIQrMcr6F4MnjM+Zh++UFHLERXAKQSuozi4fAnqxA9iC0c9QUqYqluUQ4LVV0Ql6fgoqvRhU3i4EZrrXa7neaQW06hqbDGOt2VPX\/\/MxHJbickvTZooOkoqdekyc22XXFQpoEOm5NQFoZP\/HflAZSTSIiOdx4YGhGs65NGy8gMkdnUFJhtrzjKVefVMX9GchN\/l3Oq35vNnbjTC6Ce9NDbiu3aKfOswjX\/u8l0\/hcbsxpAZabbo+\/ZNwXMftL6a7gxnysO0P9pypJatNViTY4z1Vt2hUEOgjpJyjw==",
    "V-Nonce-Str":"i7yCJYTbSaBj32th",
    "V-Api-Version":1,
    "V-Api-Key":"xxxxxxxxxxxxxxxxxxx"
}
```

签名构建数据说明：

* `api_key`：商户的 API KEY。
* `timestamp`：发起请求时的秒级时间戳。
* `nonce_str`：随机生成字符串。
* `url`：去除 HOST 的通知地址 URL 信息。
* `method`：`POST`。
* `body`：回调数据 JSON。

## 事件：虚拟账户到账通知

**事件标识**: `RECEIVING_TRANS_NOTIFICATION`

虚拟账户转账收款到账后会触发此事件。

响应数据为收款交易。数据结构与**查询转账收款交易**接口保持一致，示例：

```json
{
    "event": "RECEIVING_TRANS_NOTIFICATION",
    "data": {
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
    },
    "time": 1714448388
}
```