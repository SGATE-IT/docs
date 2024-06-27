# Create Customer

## Function Description

- Create a customer under the merchant

### Customer Status Description

The initial state of creating a customer is **information to be improved**, and after the merchant completes the customer information, it changes to **pending audit**. After the pending audit state, the system auditor can perform operations such as **successful audit**, **failed audit**, and **prohibit** on the data.

## Create customer API

### Request URL

- `/payee/custom/create`

### Request Method

- POST

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip
If the customer account information is a bank account `bankcode`、 `cardno`、 `ibanacount` it is mandatory. If the customer account is an STCPay account `stcacount` is mandatory
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                                                                                            |
| ------------- | ------------ | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name_e        | Y            | string   | -                 | Customer english name, length limit 64 characters                                                                                                                                                                          |
| name_a        | Y            | string   | -                 | Customer arabic name, length limit 64 characters                                                                                                                                                                           |
| mercustomid   | Y            | string   | -                 | Merchant customer ID, requires the merchant to provide a unique ID, length limit 128 characters                                                                                                                            |
| identity      | Y            | string   | -                 | ID number (sensitive information, encrypted with the [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), length limit 64 characters                                                              |
| bankcode      | N            | string   | -                 | [Bank code](/en/payoutApi/banks/bankList)                                                                                                                                                                                  |
| cardno        | N            | string   | -                 | Bank account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), must be a number, length limit 13 to 19 characters                                      |
| ibanaccount   | N            | string   | -                 | IBAN, letters and numbers, length limit 34 characters                                                                                                                                                                      |
| stcaccount    | N            | string   | -                 | STCPay account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), supported formats:<br> 5xxxxxxxx <br> 9665xxxxxxxx <br> +9665xxxxxxxx <br> 05xxxxxxxx |

**Request Parameter Example**

```json
{
    "name_e":"usera",
    "name_a":"usera",
    "mercustomid":"u001",
    "identity":"z9LnjQJuvqDnaWsrLgrO1GxT2z7fww/sxNxWjrMTinFgT5dNrn1CbpRMy99qc1GnyqzlwBytZf6oa4fOQO5kHQwR4DVMRpmii81MqgAuWBQJktCG5mAgd5yzUO2kLZyHDfy5J7Y2pMyqmFzvMPiD1tIxPezgcExXEKxcPKs1tvOr+7zgTbNtnvfm1VW+BzIVmJYmaXBW4ZhEdJqz+dxdSyZIdUdbV1oc46xiuIxZOn3hxYMy0XnGjNJNT9TSW299pSSDBpVbCoWg9u4okMI222adQyikyfz+TlSsVNTHnnB8C+rf+Kjc6ZPszCdu+KTjiYOTkRlJIUbHe0bM02pOjg==",
    "bankcode":"1174c",
    "cardno":"Zh4EkxILOkTNwk4PcEerZjpmmTu6IorKDC1jpm4l3hMuEI4zWJ2pyafiTDNaIoN6VOh8ivWxJBeOD2N6uXiPwJ6qyreVMhDsYa8nHK58l2JM6BC1teG0Q61ZPknXloB6aaDgDSQetbdomggAH+cu7masFnLU+YmI1umP/p7DhePYjT69Yq3vJ2wBEUp0dVIaINB0c4uB/bapmWb3zmBcSW1To2RopXlNIggjk1qdLUtxXmaYdzkyRJbevpBHARaA/BwIm3e1/ZwO+WUETBmhci96ciPBuf/NzyhUp9UHPgNoajdAwwdN5FUEA9E1KE6uwHdWMAICy/pWzsaOjoQpOQ==",
    "ibanaccount":"1234567892"
}
```

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter**     | **Type** | **Description**                                                                                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| customid          | string   | System customer ID                                                                                                                                   |
| mercustomid       | string   | Merchant customer ID                                                                                                                                 |
| name_e            | string   | Customer english name                                                                                                                                |
| name_a            | string   | Customer arabic name                                                                                                                                 |
| identity          | string   | ID number (sensitive information, encrypted with [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))            |
| identitypic       | string   | ID card photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))   |
| signpic           | string   | Signature photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)) |
| bankname          | string   | [Bank name](/en/payoutApi/banks/bankList)                                                                                                            |
| bankcode          | string   | [Bank code](/en/payoutApi/banks/bankList)                                                                                                            |
| cardno            | string   | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| ibanaccount       | string   | IBAN                                                                                                                                                 |
| stcaccount        | string   | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))      |
| status            | number   | [Customer status](/en/payoutApi/appendix/customStatus)                                                                                               |
| statusdesc        | string   | Customer status description                                                                                                                          |
| demand_perfection | array    | What information does the user currently need to improve                                                                                             |
| created_at        | number   | Creation time                                                                                                                                        |
| updated_at        | number   | Update time                                                                                                                                          |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "usera",
        "name_a": "usera",
        "identity": "s0YhJVboAqQj8kLCkTqCttAwpP39nR5VaaTy8pWFwSQDjSYei7YqZAbcoeckAD40bgliH9sSXre9PafDDpHfdkKX22X0lvJzIcpL8PGSpWQT2XloHjKxExRhiq/AgzEnwV9kq66b2hqi56O2djjzYOXOz/BpYKqvqWG7ak47OLV2hDR6r0hzhZsdvvvCeo21lMafUGd6hmf6TElqDntIfgFNTGSbxkV3kKlXnNX0hdHPmGtnfqbIuxo+yAHeJdffxA/6iHzSsW92t/bvtB9hV5ON+v4s/VpVZCRYmj0AIs9bQ+Ed+hNXtlmLuyaxfRdYVG6nl1MhVGJG0QioO4sNag==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "W0jEosfhj/TfHAjjxyIaCWHZVfdwL/2rsXj4xoXzuPWZN2nKLYmlogABKjuNF9930fmyCyt3cGZD4MRgwjf8/ZZKb0HqQLAtw+rfc/2PRViXkdq4vr3iTGyH4W7MW4n0yw6rREZUf+9/R96zyqA5iky0A0kz2suAiKBQjsQGZ1PBCGYPxmzDnpolk76Bhvpm2YNgQnvRCLUQIOCIdq4Aj9rmV0MzfhilTZ3MhIe4WqW7eubFwq0+3CF484uSVemkdRYPVZ17umbCDTRENdzkTKUIZwxTxRTMfHyUr5Sx75RyBpJDzoReluIKnX9tzQ/jb+/V4Eiv39FD4l5/Zp8trA==",
        "ibanaccount": "1234567892",
        "stcaccount": "",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809574
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "91A8340E7AEE8EC99D06EB46DF92A19F"
}
```