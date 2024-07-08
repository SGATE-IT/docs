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
1. If one of the merchant customer ID and system customer ID is not transmitted, the interface will respond to parameter missing errors.
2. The sandbox environment creates a payment ticket for a customer who has filled in a [test account](/en/payoutApi/appendix/testAccount), which will automatically complete the payment process and trigger a [callback notification](/en/payoutApi/notification/notification).
3. STCPay payment only supports SAR currency.
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                          |
| ------------- | ------------ | -------- | ----------------- | ---------------------------------------------------------------------------------------- |
| customid      | N            | string   | -                 | System customer ID, length limit 64 characters                                           |
| mercustomid   | N            | string   | -                 | Merchant customer ID, length limit 128 characters                                        |
| payeeuid      | Y            | string   | -                 | Merchant order ID, which must be globally unique and has a length limit of 64 characters |
| amount        | Y            | float    | -                 | Payment amount, accurate to two decimal places                                           |
| currency      | Y            | string   | -                 | [Currency code](/en/payoutApi/appendix/currency)                                         |
| paymentmethod | Y            | string   | -                 | [Payment method](/en/payoutApi/appendix/paymentMethod)                                   |

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
            "identity": "p/aFchx1MfO1BqrKTkiOs5FsAcynsiNUWjB3UABZYW2DssEt6EL2zU+r1g9tAwydbSAbMunA3zDcMut9vZ/dT8Nha1f+do35KivBBp1pTuI+kfaY8vja1pYmw6oEMUtpZyIWSu7kCg1bGjLX5IWCXZYdB0t3rCyzoAlomokwuZdHBKy/uEQzLsln6QU33MfayNxdGcGIYgpv4VCCiS7MejW9MP3Jh/y0Re/M5lW271xsES38J5RKEKhRUr1wAnp6vCkXZrn7Hd5tnxwUdHGHSGNK9/IV2cKICb3/GlsAq+sxHPDTOfkIhCvrOANKpuFqHUysJoGiFMc87Nc8J4raUQ==",
            "identitypic": "fvL4hLLMcXtVA0NHDmZidAIY5yiwlZZcd26EfHEdZgX8CdbXPO8eWB4cDAyQ8Bz3xBzDqUL4u02Q/kRxVPLIh8dPZ2ooMX6SPdxH5FW2HHlJ7vm2mqz0XgRy+DLC731xRbuUuxms9SuDfxCGDwiCddPFpuvkqRiUdOdmW9kcP064Y5V+KA7M1PgQLSn2h2hfyREN2yos7njZDDwveIfNpGi+hR4AjjQXYmKLlsbjDz/5kNPRbWOrvmL7karJKsja2GRauj5GbHUBnqX05NJhQvSzen4UDDnY9BfBtcDuC9pEyUOyIIRMIB3VkLbUvlWMzuFeYD+u7iE35f2vBkPXqA==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "q7gmtfi1gieWi/d6XHqtTKzAHi6Wxoxm4C9FGDYvmgYK8l7kK2H3IwcWnpO8liyhDAwBG42gebVYcOURTxhnGIhRXptEdegtQk5k0CqrPUghfMbTtUMSlj+ztxaa+HsRDlNfau35LOBoGcpn1tNV0OMar6XnR40KN06fkngItbKQvj8MC605cr/EI7Jit2qzNsUTUvlbQG53XuXV6pq/JIhMSUrO8JNcVzPc5G4VdruO4d7C3BzFqkpg4C5zf2bL+PuiE8WLyCOJFsOoxDtubkSviBYKS8SI2qYTkyZvVeZTICbNJw71OouycTj/FE+/HqaLjN7ue4NjzFwodK6bHw==",
            "ibanaccount": "1234567892",
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