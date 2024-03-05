# Create OTP Task

::: warning
This feature needs to be configured and activated in the background in advance
:::

## Function Description

Support sending a text message containing an OTP code to Saudi phone numbers to verify their legitimacy.

### OTP Rules

- Verification code: A random 6-digit number will appear with a number starting with 0.
- Verification code validity period: 5 minutes.
- Verification code frequency: The same phone number can only be sent once per minute.

### Test account

Joint debugging testing can be conducted using a test number. The test number will not actually send text messages, and other number systems will attempt to send text messages.

The verification code of the test number and the returned `session ID` remain unchanged.

| **Phone number** | **OTP** | **sessionid**                    |
| ---------------- | ------- | -------------------------------- |
| 512345678        | 123456  | 10290d703f8254593ff93533f00af153 |

### Message template

OTP Type：

- stcpay

```
{CODE} is OTP to varify your STCPAY account , please input within {ECPIRY} minutes. - {APP_NAME}
```

| **Variable** | **Type** | **Description**             |
| ------------ | -------- | --------------------------- |
| `{CODE}`     | string   | OTP code                    |
| `{ECPIRY}`   | number   | Expiration time, in minutes |
| `{APP_NAME}` | string   | Application name            |

## Create OTP Task API

### Request URL

- `/otp/sendOtp`

### Request Method

- POST

### Request Parameters

request parameters as following：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default value** | **Description**                |
| -------------- | ------------ | -------- | ----------------- | ------------------------------ |
| mobile         | Y            | number   | -                 | Send verification phone number |
| appname        | Y            | string   | -                 | App name                       |
| type           | N            | string   | stcpay            | OTP Type：stcpay               |

### Response parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description**     |
| -------------- | -------- | ------------------- |
| sessionid      | string   | OTP sending voucher |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "sessionid": "10290d703f8254593ff93533f00af153"
    },
    "sensitiveFields": {},
    "requestId": "0EEF349FEE92538582E2D1B14BC1BF45"
}
```