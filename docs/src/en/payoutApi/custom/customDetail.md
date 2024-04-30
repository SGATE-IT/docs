# Query Customer Detail

## Function Description

- Query customer detail

## Query Customer Detail API

### Request URL

- `/payee/custom/detail`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip 
If one of the merchant customer ID and system customer ID is not transmitted, the interface will respond to parameter missing errors.
:::

| **parameter** | **Required** | **Type** | **Default Value** | **Description**      |
| ------------- | ------------ | -------- | ----------------- | -------------------- |
| mercustomid   | N            | string   | -                 | Merchant Customer ID |
| customid      | N            | string   | -                 | System Customer ID   |

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter**     | **Type** | **Description**                                                                                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| customid          | string   | System Customer ID                                                                                                                                   |
| mercustomid       | string   | Merchant Customer ID                                                                                                                                 |
| name_e            | string   | Customer English Name                                                                                                                                |
| name_a            | string   | Customer Arabic Name                                                                                                                                 |
| identity          | string   | ID number (sensitive information, encrypted with [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))            |
| identitypic       | string   | ID card photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))   |
| signpic           | string   | Signature photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)) |
| bankname          | string   | Bank Name                                                                                                                                            |
| bankcode          | string   | Bank CODE                                                                                                                                            |
| cardno            | string   | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| ibanaccount       | string   | IBAN                                                                                                                                                 |
| stcaccount        | string   | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))      |
| status            | number   | [Customer Status](/en/payoutApi/appendix/customStatus)                                                                                               |
| statusdesc        | string   | Customer status description                                                                                                                          |
| demand_perfection | array    | What information does the user currently need to improve                                                                                             |
| created_at        | number   | Creation time                                                                                                                                        |
| updated_at        | number   | Update time                                                                                                                                          |

**Response Parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "usera",
        "name_a": "usera",
        "identity": "noGsqF+6wpnfchtRtiIjkuzL3t6YPFv3rqK1KobZf5cVnLRCZ7HjxoqMHoD9b+YHasd1izzd58GPJAl5DswpI8f4PxauKBv9ba45us0PlUZAUurpc0/8FmZrx/xuDTz+rtfGBUckUBiwz0iZXdbJ46PYAPdB9Hlz27Nn7eYU9UXBiluuISBKt/1Q1aJ4nKfhjvONntmDXOUyP719hD8BIyjD3aYYK96OxwIrPCbT4nDMbA/qQdhboOVPQTdom774OWUjlVv32bU7Ck1jzmERvsMptCkveb/Qjr4b/9Z6ZKDIx0VtPPzHDtffNwRohfpEv9RiKzG4RM52Mfr3jV78Eg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "jH8+rl4v3EqKOZWgyacTtNhGGdP+DvyRpeVhDuXhvEam4pcI2vuPEUMtAaYD6LOpZ85z8sHZd344dDzTLmNuIOMs9GnvdrV0RA2kCqwHHIkgRshci1CHE/S4Ds+MBNdCcs+eeVYGHMa/PH2dZRIsYpdkGw17ldUxF8TL2gcRyNZvF/VWz3ZduuKUwFZ3eYeqLmMoAwQcslPZNcAPW28vXhiPw4DSyPc9jp1wRJWVLLVaTXYrSnx5847I0WscR++O052XSuSUPLlKsjhNVXKPW/3QPkAHifvIRxwgEb2tv9y7Clxp8GrD1K+vpojs3yhSpaUiPiVb6MEgXZq2In0rBA==",
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
    "requestId": "13AB5E3E15526172EF73CB2939D08535"
}
```