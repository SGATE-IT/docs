# Update Customers

## Function Description

- Update customers

### Customer Status Description

After updating customer data, if the current customer status is not in a **banned** or **pending** status, it will transition to a **pending** status.

::: warning 
1. If the updated data submitted is consistent with the customer's existing data, the customer information remains unchanged and **no status change** is made.
2. Changes to customer information do not affect the payment orders that have been created for the customer. The payment orders will continue to be processed according to the customer information at the time of creation.
3. There must be at least one bank account and STCPay account in the customer account information. If the user currently only has a STCPay account, the STCPay account cannot be modified to empty.
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
1. Pass either the merchant customer ID or the system customer ID. If neither is passed, the interface will respond with a missing parameter error.
2. In the sandbox environment, you can use the [test account](/en/payoutApi/appendix/testAccount) to simulate the customer's review status.
3. You can contact the system administrator to add the product name for sending OTP verification. Multiple product names are supported, and the default name is the background company name.
4. When the automatic approval function is turned on, if the customer adds or updates `stcaccount`, the `stcaccount` set by the customer will be automatically [created OTP sending task](/en/payoutApi/otp/sendOtp)
5. The modification of `otpappname` needs to match the background configuration, **and the modification will not affect the customer status**.
:::

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                                                                                            |
| ------------- | ------------ | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mercustomid   | N            | string   | -                 | Merchant customer ID, length limit 128 characters                                                                                                                                                                          |
| customid      | N            | string   | -                 | System customer ID, length limit 64 characters                                                                                                                                                                             |
| name_e        | N            | string   | -                 | Customer english name, length limit 64 characters                                                                                                                                                                          |
| name_a        | N            | string   | -                 | Customer arabic name, length limit 64 characters                                                                                                                                                                           |
| identity      | N            | string   | -                 | ID number (sensitive information, encrypted with the [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), length limit 64 characters                                                              |
| bankcode      | N            | string   | -                 | [Bank code](/en/payoutApi/banks/bankList)                                                                                                                                                                                  |
| cardno        | N            | string   | -                 | Bank account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), must be a number, length limit 13 to 19 characters                                      |
| ibanaccount   | N            | string   | -                 | IBAN, letters and numbers, length limit 34 characters                                                                                                                                                                      |
| stcaccount    | N            | string   | -                 | STCPay account (sensitive information, encrypted using [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key)), supported formats:<br> 5xxxxxxxx <br> 9665xxxxxxxx <br> +9665xxxxxxxx <br> 05xxxxxxxx |
| otpappname    | N            | string   | -                 | The product name for sending OTP verification, which needs to match the background configuration. The default name is the background company name, with a length limit of 32 characters                                    |

### Response Parameters

**Return updated customer data information.**。

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
| autoapproval      | number   | Whether to enable automatic approval: <br> `0`: Disable <br> `1`: Enable                                                                             |
| otpappname        | string   | Product name for sending OTP verification                                                                                                            |
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
        "autoapproval": 1,
        "otpappname": "test",
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