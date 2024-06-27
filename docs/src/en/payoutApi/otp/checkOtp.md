# Verify OTP Code

## Function Description

Verify if the OTP code sent is valid.

::: tip
The verification code will become invalid after successful verification; The verification code of the test number will not become invalid after verification and can be repeated for verification.
:::

## Verify OTP Code API

### Request URL

- `/otp/checkOtp`

### Request Method

- POST

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameters** | **Required** | **Type** | **Default Value** | **Description**                                            |
| -------------- | ------------ | -------- | ----------------- | ---------------------------------------------------------- |
| mobile         | Y            | number   | -                 | Send verification phone number, length limit 13 characters |
| code           | Y            | string   | -                 | OTP，fixed length of 6 characters                          |
| sessionid      | Y            | string   | -                 | OTP sending voucher，fixed length of 32 characters         |

### Response Parameters

The response parameters are as following：

- **Response Body**

The successful verification returns a code of `200` with no other response values.

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