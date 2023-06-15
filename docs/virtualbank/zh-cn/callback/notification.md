# 回调通知

特定场景下会触发事件，进行回调通知。回调地址为商户提交到系统的回调地址，如果商户没有配置回调地址则不会进行通知。

!> 单次事件通知总次数为5次，当请求回调地址响应的HTTP状态码不为 `200` 时，会等待5秒，然后重试通知，重试5次后不再发送通知。

## 通知方式

系统使用**POST**请求方式请求商户的回调地址。

回调数据在**body**中以 Raw JSON 形式上报。

**回调数据格式**

```json
{
    "event":"CUSTOM_STATUS_CHANGE",
    "data":{
        // 事件不同响应数据不同
    },
    "time":1686832475
}
```

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| event    | string | 事件标识                                          |
| data    | array | 事件数据，根据事件变化                |
| time    | number | 事件时间，秒级时间戳                |

**回调数据签名**

回调请求会增加系统规定的[请求头](http://docs.sgate.sa/#/docs/virtualbank/zh-cn/apiRule/header)信息，回调数据会使用**系统私钥**进行签名，[签名规则](http://docs.sgate.sa/#/docs/virtualbank/zh-cn/apiRule/sign)同请求接口的方式一致。

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

* api_key：商户的API KEY。
* timestamp：发起请求时的秒级时间戳。
* nonce_str：随机生成字符串。
* url：去除 HOST 的通知地址 URL 信息。
* method：`POST`。
* body：回调数据JSON。

## 事件：客户状态变化

**事件标识**: `CUSTOM_STATUS_CHANGE`

创建客户后，客户后续状态发生变动触发此事件。

响应数据为变化状态后的客户信息。客户数据结构与查询客户详情接口保持一致示例：

```json
{
    "event":"CUSTOM_STATUS_CHANGE",
    "data":{
        "customid":"124f8",
        "mercustomid":"",
        "name_e":"updTest2",
        "name_a":"test1a",
        "identity":"iE86CxKwnRt4B1+msYXD90MYMplDXJ1VnsEEc8X/A46PJciuLctA4kE7YrIuOJLzHC4e4SFYVtJ45fBkGsTs4UdhUu9ridfWIAyQ556zi6dIOPPjNMkCe2mNWK/Cpah5/2w2ZtDg0zqbx4mEJrowVg77RbzlFBcXYN+jQIhla9i7WtGTf4U4Kb15CwMFiOUu4IMxVuMkycubWOLh05/eMY/0Kwd49L8PvWJBJM9xVQvq+elK0u8EteQDi5UDnakGyjx5P/9m+UzzkpcahsE0HD73k7TLowf2B3rQDzFXnT5CuKtqmNwh1oNXae8jPOUxYc1TMfHStplL1YbHCyhnig==",
        "identitypic":"o7v9h/NA4F1fCVEuZyJ3oNw6O8+vsGtEsjKDthAE1JtBy9TKzucO+L29waWHTeRkE4nRUvN6OJiCAkf+h+KJWJ2PI+YROoZjQvIRioBIoFxnIpMIbQyNbUgxFJlSrUK1cnGuxu7+juIkNYzxwfIsRzkvc9g7pp7xkmj04AQZ8KyMukV0HOGFlRxNex5+k36zmq/aAuOsOGr7PByRCRE76RiFrs6K1X/rQFjqSm9rI4d+QlpgLEDNv55i/5rqH++yglubHnYRuqCjka9N9+dOOh9kEpA9MepKrLuyodBvE3QDzT1kAMaLX+sdAh7F8vH/675hkZ1NNhx3OlkXk79hxw==",
        "signpic":"",
        "bankname":"Riyad Bank",
        "bankcode":"1174c",
        "cardno":"JmR+tT1mwXOiQTCTD2XFXzQixvudMGwNu0kmqgFAKC+Kqm9lsWCDNYeSKKRXfPHN9xXGUCM7TsoW7OyoueCG48ZvwC9WET8AGfY3EF2Ls+JsTei3xR5Bzm5Wi+Mb4fAQCMHxb03WNS3d1TNK9tcNRZ/bQ6uCf8Wq8PQw48xpe0zFpEbDJM5HUe3ycI9jntos5Id7jq4j4Y3yCrmroJ9xXRXvJfUW2qJKrx7HNs3PXxqJysowEqkggviXASIdNLluU695gX9sAMB4LwdpExxwVQVcXTxsPu+nltKkZT10Hdr61XG7i54efQkRXkfyEalE+mhoLwFSF/MqotjDtEn0Tw==",
        "ibanaccount":"SDF234354456",
        "stcaccount":"AueZQEoMOmEBgTCbUYv2Hwxoy1smLpq1c5mBeSL0lAhW1oxPGyNTk7+g4BYKL/cqIyupymoAMkk/oq6ewhoaAGz9qfmF/TXpAmYzxgUGkIXjx1/hXElvKRHYAwzzMm7pBa41k27BC0K1bgnFoMjaGjekEsjJ/rvEVLHXlOujxsy0PWZiefS6Fu69N5A8V2AU+9nVkuqpnXEt8pozEIYG+u9YEFaCV/N2v2qlKq5qCeJ/PbZSfeKhvzqOxTX7A4YBDKnswl2Wv4hYU05Sl4kQnWwuIN5pbB9q5vccdXIeViip3VnZoHbau8OvT3geBHPDwGsw87fkF8fQqexg7PryBg==",
        "status":0,
        "statusdesc":"2023-06-15 12:34:35",
        "demand_perfection":[

        ],
        "created_at":1681295160,
        "updated_at":1686832475
    },
    "time":1686832475
}
```