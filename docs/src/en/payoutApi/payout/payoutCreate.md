# Create Payment Order

## Function Description

- The merchant creates a payment order for approved customers.

::: danger
Only approved customers can successfully create payment orders.
:::

## Create Payment Order API

### Request URL

- `/payee/payCustomTicket/create`

### Request Method

- POST

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip TIP
If one of the merchant customer ID and system customer ID is not transmitted, the interface will respond to parameter missing errors.
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                 |
| ------------- | ------------ | -------- | ----------------- | ------------------------------------------------------------------------------- |
| customid      | N            | string   | -                 | System Customer ID                                                              |
| mercustomid   | N            | string   | -                 | Merchant Customer ID                                                            |
| payeeuid      | Y            | string   | -                 | Merchant order ID must be globally unique and must not exceed 64 bits in length |
| amount        | Y            | float    | -                 | Payment amount, accurate to two decimal places                                  |
| currency      | Y            | string   | -                 | [Currency code](/en/payoutApi/appendix/currency)                                |
| paymentmethod | Y            | string   | -                 | [Payment method](/en/payoutApi/appendix/paymentMethod)                          |

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

The response parameters are as follows:

- **Response Body**

| **Parameter** | **Type** | **Description**                                                                                     |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| ticketid      | string   | Payment order ID                                                                                    |
| customid      | string   | System customer ID                                                                                  |
| mercustomid   | string   | Merchant customer ID                                                                                |
| payeeuid      | string   | Merchant order ID                                                                                   |
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
        "ticketid": "15ba8",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "TEST1234567aa12sd2",
        "trantype": "standard",
        "currency": "SAR",
        "paymentmethod": "bankTransfer",
        "amount": 2002,
        "realamount": 2002,
        "fee": 127.79,
        "status": 0,
        "statusdesc": "2023-06-15 07:34:25",
        "confirmtime": 0,
        "custominfo": {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "updTest2",
            "name_a": "usera",
            "identity": "koRRcWj15/GjSowB2jfL1aagXcWZ2aRwRX5v/RjZ2robnH7abFUZXKLmyXsQHts0WGJBYhboqszYTqbT+iMOPvJ1flGIW4AAlLG6IoYscihUilKe0ieAYEyeTZE4ywlnS1cJRGsCDanzwLkRTsIl75uE3HSbkk6bAOGTwnASvjXJFe9ypx8Rj6NGuupwI9OfxDtr8NkIl5qKyOT5AzGKjhRZwoMl1gfzqJACef+HSKQNCikqYjKcoxeFQaCcmEwcWujDCHrk6+/SlN2NBpZdNlDmubPM7/JlsqudtKQp4HP+FNubwe9nZO2cPxvArBumGKIdsCv6yTOVqTEios43Tw==",
            "identitypic": "clLxhBvq8ZuCHyYLdhDdqqJA6hZkJeGkbCwsWv2TRTOQ3q+MGw4SpNLmXGNdxy9+/gZh4kGS9zMAAy8eMPW+KqDGNYSFBvT5NEoHnGc11PHCrQ95yp7qFsh/I03+ZQxKIKRpLkmY/hqs9i0QJlNqji0Wx7Ne712Dyh9qflfxkKF1f8Pcey0dHA1j7SwAuBndAcTBpnI/FcKvKt6n0vHQ8c4tKHNhMd9xRzap3Mr+09mAXtjyy1QQbb+e93x+YBoLGqdCoZouHGCTVCuqmQSiIS5TdRRMWKh/SIvVJA7bQ7bWkusgVGZF4NZQ8Jd6OzTgcpuW3ZVREyuNBYpdaZCbkQ==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "FMIWFZJJWR34P8rN9P1WDMj7+J9UNpzLD8B5ZJIV+0VYevwgOdchFMnLM4kJwefyQXiVzP9Xh9jOLupgWrLx6Xs3PzYB6DI0PyKYw0MbbgW0oX64wsfKymRROpjQ3BvsjJfnffbDrB7/td7X52+ju0f5spw99NQ3VS+3A3Q1pcsTtTTdZSLGfd9hranY3hVUvmKr1bZq0KIkqFEl6bQ7AK0J1xVd9qQZCh8iFJNPV50FXcXwV4t2Xtua7AVd6yi6fUFZN1gngz67+/r0CG1ffNF2ykFgqYRUzedRwIHl9kmADsMSXpbUTCL97IG60VdLZ+ICu/yY1h1zU0kin7K6pw==",
            "ibanaccount": "1234567892",
            "stcaccount": "Do1W7v5LOya9dSz0IlLj2HxKsUG5WFDopMOysuY4us/1oHS1DwBrt7RPgjxTX2D1ZiArxBZL2I8MoSDXzkYM7j7+gNiLtrYvyeUcdU6DpRmvKAKzSJ4IUqJ0auf0SgmXupjcD9hcl7XG0qn5dOA59dRiGRy0xzWg++LF4dLUSplqlnVh4j+SlCmuJatCKOVOV70PD3M+cgmAjNW+VivaVFImc9VIzv30CITKEkGoJ37ByUpx3f3mBO6mZB4DoK0UQ6rEGt0ewBTphYePrf7HE0m5mflagAsIk6AXRSORTMF//Yv2UgD+tEcjhuADI8OIhfPzExPRVWDY7S8bz9B5tg==",
            "status": 1,
            "statusdesc": "2023-06-15 06:14:45",
            "demand_perfection": [],
            "created_at": 1686809574,
            "updated_at": 1686812615
        },
        "created_at": 1686814465,
        "updated_at": 1686814465
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
    "requestId": "0D56C58DC6698B9374EE10E13897DCB7"
}
```