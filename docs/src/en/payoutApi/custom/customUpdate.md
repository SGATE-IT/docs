# Update Customers

## Function Description

- Update customers

### Customer Status Description

After updating customer data, if the current customer status is not in a **prohibit** or **pending** status, it will transition to a **pending audit** status.

::: warning 
1. If the submitted updated data is consistent with the customer's existing data, the customer information remains unchanged and no status changes are made.
2. The change of customer information does not affect the payment order already created by the customer, and the payment order will continue to be processed according to the customer information at the time of creation.
3. At least one bank account and STCPay account must exist in the customer account information. If the user currently only has an STCPay account, the STCPay account cannot be modified to be empty.
:::

## Update Customer API

### Request URL

- `/payee/custom/update`

### Request Method

- POST

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

::: tip 
If one of the merchant customer ID and system customer ID is not transmitted, the interface will respond to parameter missing errors.
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                     |
| ------------- | ------------ | -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| mercustomid   | N            | string   | -                 | Merchant Customer ID                                                                                                                |
| customid      | N            | string   | -                 | System Customer ID                                                                                                                  |
| name_e        | N            | string   | -                 | Customer English Name                                                                                                               |
| name_a        | N            | string   | -                 | Customer Arabic Name                                                                                                                |
| identity      | N            | string   | -                 | ID number (sensitive information, encrypted with the [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key))   |
| bankcode      | N            | string   | -                 | [Bank CODE](/en/payoutApi/banks/bankList)                                                                                           |
| cardno        | N            | string   | -                 | Bank account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key))   |
| ibanaccount   | N            | string   | -                 | IBAN                                                                                                                                |
| stcaccount    | N            | string   | -                 | STCPay account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)) |

### Response Parameters

**Return updated customer data information.**。

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
| bankname          | string   | [Bank Name](/en/payoutApi/banks/bankList)                                                                                                            |
| bankcode          | string   | [Bank CODE](/en/payoutApi/banks/bankList)                                                                                                            |
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
        "name_e": "updTest2",
        "name_a": "usera",
        "identity": "EgWVcEXDN90VwHClP1rl5qlX7yiDtedet7ACDUwHWBty0doC7xUV5eSYizInT0PNdAlcOg6JNVTujxKDgIv3bKvCaePHDmoD2pSZBed7WhrwTlwSdBM2FAPrf/PVAX74DiHyz1KZk7w81Xk4HP7VtMatAZX2ZVAjwbxo5Oj76xkCkm2N8RSoCX0tTXdsNP3zAb0ORZw2aucZUg4PLDKkvnsEI5SyPuhdhntN24/4nR5SmDoYwMyZ3Zlz4zArTL4M3NengD12C5Ewz4jcmwoAx/GmQsssjY6oDbgCeG1CsJlLgG9T4avL/TcA7d5vgAA9yU38WFJBCR8/kFUU3za5yg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "ER3wV/DhGZY3aFKXO0Yb4O/t0FHkNmFs/2ME0vg+fIQ/JgnNWTTdBwE3pL5FktKP31MhpRQP+ioH/oUcxHR/JNC1IjNEU/leRlSput+SafK9paKFAA8dVgunRbWQb7TsRWh4wVBujtnkfkOwDBhkhRaALWvBRau3i4WU7ZlTy3hpxX41lAPpi07Y8XkatVU1B3q51wFFu1mGD3L3UZI0jD6SceQD+HIH8cUutpt7JFSVS1rABgi3Hkh2yplfj1d7i61GNoSzr1SHyjIC5HydSZSVeEB1JXly+W04ccIeWENVDba2Sk4YYVPKmgell7a4NQhsMZr0+QL4ZG196/U1gg==",
        "ibanaccount": "1234567892",
        "stcaccount": "ied6668pUXSRLj3eIWENQSLy3IzheI/lZntPehScFdjsnSeXJtiHVROuT3+e+rAXKFclxCyuD2+n44IHLh/pjgHZEr4Vr9T2qZR1HRnj3uvESaT/yPbRLx1hynUknd2YnGfsM01ZUfUztlmhSArAQ48SPB7py4aIMZin8kOi4ak/z1bY0Yqh1iVK+9Qa07CFfBY80vBgqg0gu4ysil4HLsuC0XahYMNdqAJqY8EJ3bbssae+B52I6QjQ5a+5xll8O5JczIBsJJimGh34OZ1/t7Wtd1WyRRKeXcdIfSccOBaWtdH1cSLDj1xqLg0T7HU/whyZRVOB1fxedd/ceg3quA==",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809659
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "3684DFCB66E8A8D6DC18E6FF8626C93D"
}
```