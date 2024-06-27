# Update Customer Information

## Function Description

- Update customer information

### Customer Status Description

At present, the mandatory information that customers need to improve is ID card photos. If the customer has not been **prohibited**, their status will be reset to **pending audit** when they update their information and have set their ID card photo.

::: warning 
1. If the submitted updated data is consistent with the customer's existing data, the customer information remains unchanged and there is no status change
2. The change of customer information does not affect the payment order already created by the customer, and the payment order will continue to be processed according to the customer information at the time of creation.
:::

## Update Customer Profile API

### Request URL

- `/payee/custom/file`

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

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                               |
| ------------- | ------------ | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| mercustomid   | N            | string   | -                 | Merchant customer ID, length limit 128 characters                                                                                             |
| customid      | N            | string   | -                 | System customer ID, length limit 64 characters                                                                                                |
| file          | Y            | file     | -                 | The file size cannot exceed 2048kb, and the file must be of image type as following：<br>`jpeg`<br>`png`<br>`bmp`<br>`gif`<br>`svg`<br>`webp` |
| md5           | Y            | string   | -                 | MD5 value of the file                                                                                                                         |
| type          | Y            | string   | -                 | File type：<br>`identitypic`: ID card photo<br>`signpic`: Signature photo                                                                     |

### Response Parameters

**After successful file processing, the latest customer information is returned.**

The response parameters are as follows：

- **Response Body**

| **Parameter**     | **Type** | **Description**                                                                                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| customid          | string   | System Customer ID                                                                                                                                   |
| mercustomid       | string   | Merchant Customer ID                                                                                                                                 |
| name_e            | string   | Customer English Name                                                                                                                                |
| name_a            | string   | Customer Arabic Name                                                                                                                                 |
| identity          | string   | ID number (sensitive information, encrypted with the [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| identitypic       | string   | ID card photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))   |
| signpic           | string   | Signature photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)) |
| bankname          | string   | [Bank name](/en/payoutApi/banks/bankList)                                                                                                            |
| bankcode          | string   | [Bank code](/en/payoutApi/banks/bankList)                                                                                                            |
| cardno            | string   | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| ibanaccount       | string   | IBAN                                                                                                                                                 |
| stcaccount        | string   | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))      |
| status            | number   | [Customer status](/en/payoutApi/appendix/customStatus)                                                                                               |
| statusdesc        | string   | Customer Status Description                                                                                                                          |
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
        "identity": "NbX4Ex6OsXEujrdo3p3fqKPlI1607Z59xwRIZDwlaHlHtUNLSJCP6Hp9TQVVZt66Pw+7LLENT84l6TiH7owxgY+jUl5qfRs4+ooNb3Hb4tWgXcUBi3f8NDKI3KNL5FdiXXsaqy/l8uWZoiDuRuwfQCZEUJPl3yacVfwgq8IwUO4Gqld9iN6ciyxAT16w/rkafV56gNDaWNrLet8/3HxaCUXmYfs1SpYyUwi3Hn2uI1sDme9MLZtPUo/0Nwbq5MyR5IANq4O6Enw1K3LQ4g9ZmmS7QpY7iFGT/3zKFAsycjD8focAmM9+quITspykDR3p0y9Pvs6PWMXiR5FjhAaRsw==",
        "identitypic": "S6U6BDjYfqgHxJVGfgrRNoK+lMM050wJaxZZJ68k6dnLpyoqETiSbLvjVmmFnfdTnzQRKu3qXAKRe/PJYDq4EgT5G2hS0iS3UtvkHKgjACcDvgPqVIGDpH4ru7UbopZwJNRfrBLlVcV+N+wWMqii/r1t5wTGdx8yupy/3jhZX7hhO8HFl+BvR4JSgdPWNH00zu4sTi/w2P5wEayIzK4ya/Be7w0ULbhFgoczNRrdo9hoIbewH529s74OApked4/U3uaquCjjv6h+m+U/P9efRTsOl+5u/AmYxO4mTI2C+k8SY8lK9JUBI+1wVQm/Sj81UcXAFLN2IjFYo/bbrZuOww==",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "ZVanGfGN1gpvxACjCBvDuToQevSAgZbvmksSioWvej4ATnTjp2ytSmdcIkKA3CtkcoiZXTVp11yazyj4JYpQDC99uO+mE13zIz48Uxs98GM8DY+USO3SPCAEn70YyBZ5jX9GfhWob+1UwUkqjh++WOvQbYZl7JxxMLyTG62T4pXo74XWHZeX5kUTTFOJvX8Lc9h3WmVV8GG6xcU+HZ2dWlUO0EZHTIFm7ymre5w1fXUfR9ljHzb7AVYnTIArLENPPFSNYh7HvzZIMloA0exffgcUT4sZwUD5iTeNXDSAjfLRb/n7HDFAlTvZZpxWt0cKNSruPtvyQ5xiptAA3RmEOw==",
        "ibanaccount": "1234567892",
        "stcaccount": "W1pNqEGNzONfUPfixrH61nJsgh8iFI1pv1e0VFo/rNZO6d34fFPwj/SPMqajWRjOFp8IJjBJZWOMbFALS8nTx93lhIJddtEWkNPf3t+qKSlyehORZhF/5RYzvmAu7ThV/124BOzSs/LsX7u8ZKzhudpVU6GWFZr+0GgwzDZNr/SdVm9S2ec621wSuUVgzu3ahINg/7ko5RuVzkK6eUPZ+R/v8xnRowH6SCjKfuNtHONU/7u0si1gryL8D7cb1NYy2yAx7FxWexRFyDendPZB0TsISMwAqV29RSDxG+AfJDvbsfs3mZia352avZmEpxcxILntqncjOdRnVrjEheq8sQ==",
        "status": 0,
        "statusdesc": "2023-06-15 06:14:45",
        "demand_perfection": [],
        "created_at": 1686809574,
        "updated_at": 1686809685
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "B299710699082B7D5EA8E6C793E74649"
}
```