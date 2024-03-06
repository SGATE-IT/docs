# Create OTP Task

::: warning
This feature needs to be configured and activated in the background in advance
:::

## Function Description

Support sending a text message containing an OTP code to Saudi phone numbers to verify their legitimacy.

### Mobile Number Rules

OTP type:

- stcpay

The following mobile number formats are supported: 5xxxxxxxx, 9665xxxxxxxx, +9665xxxxxxxx, 05xxxxxxxx

For the same mobile number, use different formats to send requests. The valid mobile number shall prevail. For example:
  
| **Request mobile number** | **Valid mobile number** |
| ------------------------- | ----------------------- |
| 512345678                 | 512345678               |
| 0512345678                | 512345678               |
| 966512345678              | 512345678               |
| +966512345678             | 512345678               |

### OTP Rules

- Verification code: a random 6-digit number, **numbers starting with 0 will appear**.
- Verification code validity period: 5 minutes.
- Verification code frequency: The same **valid mobile phone number** can only be sent once per minute.

### Test account

Joint debugging testing can be conducted using a test number. The test number will not actually send text messages, and other number systems will attempt to send text messages.

The verification code of the test number and the returned `session ID` remain unchanged.

| **Phone number**                                         | **OTP** | **sessionid**                    |
| -------------------------------------------------------- | ------- | -------------------------------- |
| 512345678<br>0512345678<br>966512345678<br>+966512345678 | 123456  | 10290d703f8254593ff93533f00af153 |

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
| ------------- | ------------ | -------- | ----------------- | ------------------------------ |
| mobile        | Y            | string   | -                 | Send verification phone number |
| appname       | Y            | string   | -                 | App name                       |

### Response parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description**         |
| ------------- | -------- | ----------------------- |
| mobile        | string   | Send mobile number      |
| appname       | string   | product name            |
| sessionid     | string   | OTP sending certificate |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "mobile": "+966512345678",
        "appname": "TestApp",
        "sessionid": "10290d703f8254593ff93533f00af153"
    },
    "sensitiveFields": {},
    "requestId": "758EFC622B2D51B4C37353D4C8BEA374"
}
```