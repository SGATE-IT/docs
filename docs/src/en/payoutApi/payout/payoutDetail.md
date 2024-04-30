# Query Single Payment Order

## Function Description

- Query a single payment work order

## Query Single Payment Order API

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

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**   |
| ------------- | ------------ | -------- | ----------------- | ----------------- |
| ticketid      | N            | string   | -                 | Payment order ID  |
| payeeuid      | N            | string   | -                 | Merchant order ID |

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
| ticketid      | string   | Payment Order ID                                                                                    |
| customid      | string   | System Customer ID                                                                                  |
| mercustomid   | string   | Merchant Customer ID                                                                                |
| payeeuid      | string   | Merchant Order ID                                                                                   |
| trantype      | string   | [Transaction type](/en/payoutApi/appendix/tranType)                                                 |
| currency      | string   | [Currency code](/en/payoutApi/appendix/currency)                                                    |
| paymentmethod | string   | [payment method](/en/payoutApi/appendix/paymentMethod)                                              |
| amount        | float    | Payment amount                                                                                      |
| realamount    | float    | Actual amount received                                                                              |
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
        "ticketid": "15b2b",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "TEST1234567aa12sd1",
        "trantype": "standard",
        "currency": "SAR",
        "paymentmethod": "bankTransfer",
        "amount": 2002,
        "realamount": 2002,
        "fee": 127.79,
        "status": 0,
        "statusdesc": "",
        "confirmtime": 0,
        "custominfo": {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "updTest2",
            "name_a": "usera",
            "identity": "Rm1XLBip1jqmtVP64nPy+j9Nsi2FPQbmwH3OeIxXwm0xxilOJ5CgmHv9mRhG2rCzOj0xJh20ZxFEYNobECjZsU5wTzSkjSFEpmxWxENbPcwDBDtUXQY2U0Pv1zqPwaltSOjzo7/0UzKOJIVTExO27Hp3vm/OcE2Hj4R1mdFo1QibR/H/J7OslnVWR24J6coEYu452aojDZm0rKEgegDhTPgMwHxz8MUM6+ynY+wGaKb32Ad8r14NgvlW3aslCquMuS68IiXl3vbiQ4Pr6uMYkJ8qyllNU2W4cdWCZdqbCYRMXUcAYuUZ4zoqPTMDN659VAUMBJB9zHYfuo6RZcSmUg==",
            "identitypic": "I3ZJ/OhjmWj0mPRaKzKLTk38UA3z3MZOsq/2uSJtuM1IY9z9OFqXqgGSvk+NwR0GfayfO0kTdetesFW5a3f6C11xL21LJsAe1zrb6RqqXjlCa8/phgV77eyY5C/AJ8X0a5J5Q5WJodmh2A0AmeEAEbeySt0HsOqMO6bYYplcZV29abLfYa+45814aQXiVLAPNG63O+sMvT2WUyR3GlUoZ7NZK7JpBd0CnG/CXuZHRDbLoY8r1pej18hHDG0RNVkxqI+H7+glFjrIh/4QbmLmP46M5Sjs0k4NB/zRqhUDlFmQsIg1JWYmsLQTmQYBK7vwOGC7hT5riRTF2wKmHRuNRg==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "mQWxh+ypJe+DSn9o5/bdumuCsc+IMvj+5z32xr2anPs6sgqxQu4Zgt2yXs7Ye8Ptr9UFmbPnt5onxkhYQ6iPArmV3kqkJwOA8MiAuDiYwn3+eoiF2EdWCx0otF6YkC7tA0ESO98DL7I1BpDJNCdaDOrrppZS7syb0qtBosvBC/YvRIRrspMsGXzL/vAMI7GvT4wj7RyIiqEE48dSCXT9YLvx7OiQf33fQbrv36zoeYolOSoQLRTe+oTpcum9ACccTI1aS6/A2qOlPEQ5EkPrmxDljmWPUBotdwrmRmy1p0DJK7SwgeofPxGsrGo1Lcw7S7ShqdWUHScgaWIIH7miBQ==",
            "ibanaccount": "1234567892",
            "stcaccount": "iXyvq7ArPI1bofHHTtjHQ4dz9cYtE1wicUIbIl1b9aw82BqAXcOKVeDu9tniFRfTPKhtXVKMpEPmReHyw7tx8fAjxrLOSIJEdCvNIB7hSrC6HlDThTD/JZ3bqMO6sxdalj5zF7QY/IUbrRRm/ALW/xam/73IYz3CHxQXRz3nOUsG07yOZuid2l7fzqmflMQCijiNoXMRcZjqb1uMO3xOFeZc8SiFAfHTcombR3NmgJFmMTMNEs5SH/CUbzYHKDgrkq8vs6x10LJP9ox3FlC8C1W3B5p5FPWYvUaS6+PkLdOECvjwIu/bS3K0hrxv/hQjCfWMTfySkPsB0V78Wu7rtA==",
            "status": 1,
            "statusdesc": "2023-06-15 06:14:45",
            "demand_perfection": [],
            "created_at": 1686809574,
            "updated_at": 1686812615
        },
        "created_at": 1686813277,
        "updated_at": 1686813277
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
    "requestId": "8A926C296BE22E04324A0419F544FD7E"
}
```