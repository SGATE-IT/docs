# Create Rapid Payment Order

## Function Description

- Merchants can bypass the process of customer creation and review and directly submit basic information to initiate a payment order.

## Create Rapid Payment Order API

### Request URL

- `/payee/payCustomTicket/rapid`

### Request Method

- POST

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip TIP
mercustomid is the merchant customer ID. The system will automatically perform the following processing based on mercustomid:
1. When there is a customer associated with mercustomid under the merchant, the customer information will be updated based on the submitted customer information, and a payment work order will be created for the customer.
2. When there is no associated customer with mercustomid under the merchant, a new customer will be created. After the customer is created, it will be in the approved status, and a payment work order will be created for the new customer.
3. When creating a rapid payment ticket in the sandbox environment and using a [test account](/en/payoutApi/appendix/testAccount), the customer is also in the approved status, but the payment result follows the "Automatic Payment Result" in the document and triggers a [callback notification](/en/payoutApi/notification/notification).
4. STCPay payment only supports SAR currency.
:::

* **Must** pass parameters:

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                          |
| ------------- | ------------ | -------- | ----------------- | ---------------------------------------------------------------------------------------- |
| mercustomid   | Y            | string   | -                 | Merchant customer ID, length limit 128 characters                                        |
| payeeuid      | Y            | string   | -                 | Merchant order ID, which must be globally unique and has a length limit of 64 characters |
| amount        | Y            | float    | -                 | Payment amount, accurate to two decimal places                                           |
| currency      | Y            | string   | -                 | [Currency code](/en/payoutApi/appendix/currency)                                         |
| paymentmethod | Y            | string   | -                 | [Payment method](/en/payoutApi/appendix/paymentMethod)                                   |

* When using **bankTransfer** payment method, additional parameters need to be passed:

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                                                                   |
| ------------- | ------------ | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name_e        | Y            | string   | -                 | Customer english name, length limit 64 characters                                                                                                                                                 |
| name_a        | Y            | string   | -                 | Customer arabic name, length limit 64 characters. if the customer does not have an arabic name, you can fill in the customer english name                                                         |
| bankcode      | Y            | string   | -                 | [Bank code](/en/payoutApi/banks/bankList)                                                                                                                                                         |
| cardno        | N            | string   | -                 | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)), must be a number, length limit 13 to 19 characters |
| ibanaccount   | Y            | string   | -                 | IBAN, letters and numbers, length limit 34 characters                                                                                                                                             |

* When using **STCPay** payment method, additional parameters need to be passed:

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                                                                                                        |
| ------------- | ------------ | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stcaccount    | Y            | string   | -                 | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)), supported formats:<br> 5xxxxxxxx <br> 9665xxxxxxxx <br> +9665xxxxxxxx <br> 05xxxxxxxx |

**Request Parameter Example**

```json
{
    "mercustomid":"u0043",
    "payeeuid":"payeeuid1",
    "amount":33.33,
    "currency":"SAR",
    "paymentmethod":"STCPay",
    "stcaccount":"j+7ehQuYum6eK+1CgMAyVnbJLZl5bU3I1q/Egyh2BNkqLyingkjeFuX+an2mkqZ2IaK1038zNhz7lvnix+R4C7gGM/hWSwZ2/OReoO4CTKfB8KH+XyYNEKgkd+5BIE/w35ssJNgCHy7BlqZz9sm2hboz6DOZAcY/Sv7eya328yChDllr8MlUY87x+yTN+EEjiUajvFA3RB7Lx/+DcQgkx58fmlrq4JhwlqnjKJllSimnqwK9DB6nKsNQAHONLzGndl4nAaL441EGyP0tVU+roSd0uJU1hpc+Gq9HKLr1N3rt1Y7QEd9+wHwZ3EBf0dUdIq94gC1ZuZ0VU+pBRim40Q=="
}
```

### Response Parameters

The response parameters are as follows:

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
            "identity": "",
            "identitypic": "",
            "signpic": "",
            "bankname": "The Saudi British Bank",
            "bankcode": "11558",
            "cardno": "",
            "ibanaccount": "1234567892",
            "stcaccount": "HsMxmSUUqbD+uZEdEocdAqg+BBGknsOs/KeIaqqkUwYaKlv20g3J/YVhDYD+enecBLOP8tzpRPQU+E7bsw1FccP/jzb/rVUpgUPUqcflJMnxUiUacZrHWgq4U/0QclUrWfCrl+78av236LlobEgN7jgNDzuBpiApJhQrb1j3bzqFDmTapOHR3DNDyCOBkhkgkGjlFWz9p2duv4TgDNfmy3RbbV9dfpEI8PcteGTmqsBXKf0794SPvLAj+m4RO5iYwE6l8JoYlFXqEl+8Ruppt+ZH9Zv6whVgp5Qtl5tlalV9o0+t3Z4qg6jJcaVDmp0hMO4rCw07YV04FHCCUtth+g==",
            "status": 1,
            "statusdesc": "Customers create through quick payment",
            "demand_perfection": [
                "identitypic"
            ],
            "created_at": 1707395488,
            "updated_at": 1719401899
        },
        "created_at": 1719401899,
        "updated_at": 1719401899
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
    "requestId": "FD82B523FCEA90F65E06B15EAA7C2290"
}
```