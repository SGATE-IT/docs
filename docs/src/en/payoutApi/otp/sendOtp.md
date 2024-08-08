# Create OTP Task

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

::: warning
The test number only supports use in the sandbox environment, and all mobile phone numbers that have passed the format verification in the production environment will be sent SMS normally.
:::

Joint debugging testing can be conducted using a test number. The test number will not actually send text messages, and other number systems will attempt to send text messages.

The verification code of the test number and the returned `session ID` remain unchanged.

| **Phone number**                                         | **OTP** | **sessionid**                    |
| -------------------------------------------------------- | ------- | -------------------------------- |
| 512345678<br>0512345678<br>966512345678<br>+966512345678 | 123456  | 10290d703f8254593ff93533f00af153 |
| 500000001<br>0500000001<br>966500000001<br>+966500000001 | 123456  | a3f551d80f05a0e3e9056869fda18485 |
| 500000002<br>0500000002<br>966500000002<br>+966500000002 | 123456  | e8cffbb22c2e09af7004c92b82a4275f |
| 500000003<br>0500000003<br>966500000003<br>+966500000003 | 123456  | 05121e9b019b6ac4bd938322dcaf73ef |
| 500000004<br>0500000004<br>966500000004<br>+966500000004 | 123456  | 9e1aac7c1f6719e12e3384ced6782887 |
| 500000005<br>0500000005<br>966500000005<br>+966500000005 | 123456  | c6cfc53d34b2c93eaaa9d430397dead0 |

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

| **Parameter** | **Required** | **Type** | **Default value** | **Description**                                            |
| ------------- | ------------ | -------- | ----------------- | ---------------------------------------------------------- |
| mobile        | Y            | string   | -                 | Send verification phone number, length limit 13 characters |
| appname       | Y            | string   | -                 | App name, length limit 32 characters                       |

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