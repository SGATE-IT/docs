# Submit STCPay Account Verification

::: warning
This function is only effective when the customer turns on automatic approval and the customer's STCPay has not completed verification.
:::

## Function Description

- Submit STCPay account verification

## Submit STCPay Account Verification API

### Request URL

- `/payee/custom/submitStcAccountOtp`

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

| **parameter** | **Required** | **Type** | **Default Value** | **Description**                                   |
| ------------- | ------------ | -------- | ----------------- | ------------------------------------------------- |
| mercustomid   | N            | string   | -                 | Merchant customer ID, length limit 128 characters |
| customid      | N            | string   | -                 | System customer ID, length limit 64 characters    |
| code          | Y            | string   | -                 | OTP，fixed length of 6 characters                 |

### Response Parameters

- **Response Body**

A successful send returns a `code` of `200`, with no other response values.

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "A3A030EE37E5BC84C9625639B3F38B6E"
}
```