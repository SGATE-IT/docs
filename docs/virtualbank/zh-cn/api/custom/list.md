# 查询客户列表

**请求URL**

- `{{host}}/openApi/v1/payee/custom/list`



**请求方式**

- GET



**请求参数**

| 参数名      | 必选 | 类型   | 默认值 | 说明                                                |
| ----------- | ---- | ------ | ------ | --------------------------------------------------- |
| pageNo      | n    | number | 1      | 页码                                                |
| pageSize    | n    | number | 20     | 每页显示条数，最多支持100条                         |
| startTime   | n    | number | -      | 客户创建开始时间，秒级时间戳                        |
| endTime     | n    | number | -      | 客户创建结束时间，秒级时间戳                        |
| customids   | n    | array  | -      | 查询客户ID，多个ID以英文逗号分割，示例：1187, 2f131 |
| identity    | n    | string | -      | 身份证号（敏感信息，需商户私钥加密处理）            |
| account     | n    | string | -      | 账户（敏感信息，需商户私钥加密处理）                |
| bankcode    | n    | string | -      | 银行CODE                                            |
| ibanaccount | n    | string | -      | IBAN                                                |
| name_e      | n    | string | -      | 客户英文名称，支持模糊查询                          |
| status      | n    | number | -      | 客户状态（见附录）                                  |

**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "customid": "124f8",
            "name_e": "test1",
            "name_a": "test1a",
            "identity": "ciPo4T6Oo3oWXI73d3WzpWI5F/WdogSrE9Z44y5pLX2mY4x5TSLUYkdCBitMoyFurf72XWFSzg21dvDnsrdUpMqCAydps1GsxK76Qd1fNEmqRbBJTL+7dD69FSqEdVo8nmF3qYsvbahp55BByLIJdsbKqET2No9Yu3aV679aMUgx6FJsetKbqpxSUElsYTXN8DHHa2DkxGO+1y0KkLijriAbcRqU0yux7gwWveC7PrNFYpsiO0sfvJ4U/qIPsB48ziBgT0+j0iWElKoXcNX+sSEWaPa2LGy5CVN61jMDQ5RfS7mtWLhFM6wZnsB0y2dgtSMUKTbyg7keRrRI2a/q/Q==",
            "identitypic": "0KkKxpJns1qYSBcSkwBWz0UVrEtksZKxvCBhd/V4SocDYKbjrBEne/giXhOCwigHN52m0fQw3Fvr0dnlKH9Yn5CQ/v/8YUL0OPIsqaX0h+Xc20zKTy73NEw3m4yXbZkElNyzgV/5nf55X0vwSc6l+MSS4XRNKcIlRpIez4s9ViLyRGf4wm5TbAE5OXscCs/lucGvphD83chOcxwLbSqdmFI3XZOdCSb8Jx+/AfUbQu0zKQw42xwT8xWaYedKQ505mgIAwtxgyn7sJZgLY5gLEkXz5JTi5YawpBZDG+2t7aPlL0jTGSrPkplwlQpKQB6pVqi+TmWJwM7G9DOSARcqvQ==",
            "signpic": "",
            "bankname": "The National Commercial Bank",
            "bankcode": "114db",
            "account": "UEC0D7bIrZVRSu4R9voRTExTTTv0AO4qXUlc10cy4e4YYEaxdLpYOP+gLzULqlc1ru0Pbvt8aMDtjlmoQwu85310ApwrWLUh9zXIrzGcDKadqLI7KQkCNKR7ZnFlH2x0uZlrVGHzB252A1bWFTZXl3I+slEjXiem1Y5HiVAV78KkxFCn9vp1ZdnbSB8KlyKRp6tg7hN8NQMNriD44JXVcMWsoRhDb9WVEAE1rhjU2yisTSpSMhHlS29IymLjjq0NuGMBBMCHJS2URGgvkF/3Q4Jg//938an/kjxF/Xe74FvNMD++5BhGXHGFP36UrwIrGJYZ6FpJSxt2wyOyBBWZ0A==",
            "ibanaccount": "SDF234354456",
            "status": 1,
            "created_at": 1681295160,
            "updated_at": 1683861465
        },
        {
            "customid": "11846",
            "name_e": "test1",
            "name_a": "test2",
            "identity": "ciPo4T6Oo3oWXI73d3WzpWI5F/WdogSrE9Z44y5pLX2mY4x5TSLUYkdCBitMoyFurf72XWFSzg21dvDnsrdUpMqCAydps1GsxK76Qd1fNEmqRbBJTL+7dD69FSqEdVo8nmF3qYsvbahp55BByLIJdsbKqET2No9Yu3aV679aMUgx6FJsetKbqpxSUElsYTXN8DHHa2DkxGO+1y0KkLijriAbcRqU0yux7gwWveC7PrNFYpsiO0sfvJ4U/qIPsB48ziBgT0+j0iWElKoXcNX+sSEWaPa2LGy5CVN61jMDQ5RfS7mtWLhFM6wZnsB0y2dgtSMUKTbyg7keRrRI2a/q/Q==",
            "identitypic": "opkIKza8+uefWU+5IB1EwbsDOK448VQrkGsQJk6fyCCjDNoVDfNcIGtVAr4CRh95eakuDq0t7L8WHSmNUy0c9COwwoyqLq0Z+bmTmz4jwF5ETysBwocTVlMFIZTTJCDMtpXifxLuE2aH62I1kAWGqjxA8zuhtGo3JXHlYEyU3+V/+ZyIs8gM8M2b5h2gn0lxDa5v0Np/Dv7ivJb10smWwMxYPBQqkJ+CnymwQV+oNc6crozYu21J2/bOUUwiLzA/cnBkejlNOcLpwLFBviFnYNoq9rrcMhCJc58y5Cujcp95BCHb8DCuWpeJYxmSJIEBJ3XawgtqAgyevKIpLczveg==",
            "signpic": "piFqqwi8Oska+bcfrTq9AQVrOLMaEXGMgFBxmy2E40mDM90mLMm0qPHy1ytJpVG0j3r6b83X5Tuo4XOS+OFs3R/jJ8n84QqQQWaxjKWYwg1ll1meYd1ENit/vI5nRnc3L5HzT7FGI4c/eiMzBzknNKCbkOL2GCz1beHMbzPfdxXR6zGfIZ3SQKj6olHBj6VU77FYYD/PjcIuWnwt8kd94CJS/TJB5qHvVG6uaJlFrFZYEDlCAHxFJSgkXVEvzHT6LsSLTJeGgtE6pMddBEZPlOYFxo6RkfRT1X/nrLQ/VwEGhhNDkzap0PuPL+T/10iFkOaJYYe9Wr3yKVqwerxOrQ==",
            "bankname": "The National Commercial Bank",
            "bankcode": "114db",
            "account": "UEC0D7bIrZVRSu4R9voRTExTTTv0AO4qXUlc10cy4e4YYEaxdLpYOP+gLzULqlc1ru0Pbvt8aMDtjlmoQwu85310ApwrWLUh9zXIrzGcDKadqLI7KQkCNKR7ZnFlH2x0uZlrVGHzB252A1bWFTZXl3I+slEjXiem1Y5HiVAV78KkxFCn9vp1ZdnbSB8KlyKRp6tg7hN8NQMNriD44JXVcMWsoRhDb9WVEAE1rhjU2yisTSpSMhHlS29IymLjjq0NuGMBBMCHJS2URGgvkF/3Q4Jg//938an/kjxF/Xe74FvNMD++5BhGXHGFP36UrwIrGJYZ6FpJSxt2wyOyBBWZ0A==",
            "ibanaccount": "SDF234354456",
            "status": 0,
            "created_at": 1679900027,
            "updated_at": 1681194641
        }
    ],
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "account"
    ],
    "requestId": "95415AD201F9C43D2B73DEADA6729361"
}
```



**返回参数说明**

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| customid    | string | 客户ID                                          |
| name_e      | string | 客户英文名称                                    |
| name_a      | string | 客户阿拉伯文名称                                |
| identity    | string | 身份证号（敏感信息，使用系统私钥加密处理）      |
| identitypic | string | 身份证照片URL（敏感信息，使用系统私钥加密处理） |
| signpic     | string | 签名照片URL（敏感信息，使用系统私钥加密处理）   |
| bankname    | string | 银行名称                                        |
| bankcode    | string | 银行CODE                                        |
| account     | string | 账户（敏感信息，使用系统私钥加密处理）          |
| ibanaccount | string | IBAN                                            |
| status      | number | 客户状态（见附录）                              |
| created_at  | number | 创建时间                                        |
| updated_at  | number | 更新时间                                        |

