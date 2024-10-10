# Query Payment Order Detail

## Function Description

- Query a single payment work order

## Query Payment Order Detail API

### Request URL

- `/payee/payCustomTicket/detail`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip 
If either the proxy payment work order ID or the merchant order ID is not transmitted to the interface, it will respond with a parameter missing error.
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                               |
| ------------- | ------------ | -------- | ----------------- | --------------------------------------------- |
| ticketid      | N            | string   | -                 | Payment order ID, length limit 64 characters  |
| payeeuid      | N            | string   | -                 | Merchant order ID, length limit 64 characters |

**Request Parameter Example**

```json
{
    "mercustomid":"u004",
    "payeeuid":"TEST1234567aa12sd2",
    "amount":2002,
    "currency":"SAR",
    "paymentmethod":"bankTransfer"
}
```

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description**                                                                                     |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| ticketid      | string   | Payment order ID                                                                                    |
| key           | string   | Payment order key, unique for each payment order                                                    |
| customid      | string   | System customer ID                                                                                  |
| mercustomid   | string   | Merchant customer ID                                                                                |
| payeeuid      | string   | Merchant order ID                                                                                   |
| trantype      | string   | [Transaction type](/en/payoutApi/appendix/tranType)                                                 |
| currency      | string   | Returns the [currency code](/en/payoutApi/appendix/currency) when applying for payout               |
| paymentmethod | string   | [payment method](/en/payoutApi/appendix/paymentMethod)                                              |
| amount        | float    | Total amount paid by the payer                                                                      |
| realamount    | float    | The actual amount received by the payee                                                             |
| fee           | float    | Handling fee                                                                                        |
| status        | number   | [Payment order status](/en/payoutApi/appendix/paymentStatus)                                        |
| statusdesc    | string   | Status description                                                                                  |
| confirmtime   | number   | Payment completion time                                                                             |
| custominfo    | object   | Customer data snapshot when creating a payment order, with the same data structure as customer data |
| created_at    | number   | Creation time                                                                                       |
| updated_at    | number   | Update time                                                                                         |

**Response parameter Example**

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
            "address": "Saudi Arabia",
            "identity": "ZEITHUotd2N8RI49iCLxq8ETZ37QHiIKGUJ0RZ5OCIoQzdUz0DqbcRMRxmVkpsruScSg3U/6Pp7PCUjJ43Bj1l1j55hk6uRg3/yfTXEbX32BZhwCD0bzokHOOu5+JWD6YcsIxxdGBMIngEPeY4V2hAoC6DIgq4eR1puyZp8taYOyU1XEbgVV4TSZ12ORPD4uS55Htvxn69MzWjRKqtPzvwV6MVlAUy14G9rH/OnNLIySDl7anE382y7+6acCTgorbTzTdz8YP/O4q/Hp+gbVh7nBXn0uwPj26NyHLBCuRXkbL+id5xFXkxfBrHBRoq4QhgRA69Y/FkKQgOjeUwrfWQ==",
            "identitypic": "WjY9aDbqNEmhKwwhCIPVVXMyV95oXARpe9zZSlmSwlNNxSYD//fUwjtrl1HtUqfOBVY3vP2UgxyfB9p293jolKlPkjcr2Xbkce4CJQWeUelAgpDIoLqGTYY4tTiTo0MJGikHp7X9qKr4wbEDAn8ix0akyROWTG3gLyUROK5AFSz/5fQrQgRsh+fffkFvew4xCuEAJv8LpkxzSEJQthnnS28BnDpSgUA2iML/HboXuiY7G1avO+U8ETwQn0LaZPMK/QuVQ2V87JkmZKSyPdYrIgPqzVRCyPg6iooLIZkaiIJ1Q5gAb1HQGtCxpahYjnFCHO+5d/jj9WcfpeGobqYFjw==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "E3NXOnyWzUb3oFVZ6ATT5mxOwxbyYzavxyc2hXMlohmqfo5qXPpnmmVucyknUa8tFg6A870IF74NLggCS7gBRvmHYl54QY/Q6CKrWKt3c4GsNtVyb2pOolRklOzXjS4O+Y/uaTffc+vOKV6tlG+E+Km9PmznpSkxWCE+rPsqnDZylaQBjuulxh3b5TGhMtnRsJhIhjkqMq9J0e6fY0yryeFAz4sQw94xd/usQ5dFYTZJLPU2ukPcbCa+DRB/OQLe5nLHacuIFyajbN24rq+5UyRId6N3qEpHzfl+f8qIv5nTit0kkwh1RESrqbHvtDx0dB+EHQu17Kq0E/gRpzwsnA==",
            "ibanaccount": "1234567892",
            "swiftcode": "ABNACNSHXXX",
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