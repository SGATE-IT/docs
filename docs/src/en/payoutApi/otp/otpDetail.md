# Query OTP Task

## Function Description

Query the OTP sending task status.

## Query OTP Task API

### Request URL

- `/otp/otpDetail`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameters** | **Required** | **Type** | **Default Value** | **Description**                |
| -------------- | ------------ | -------- | ----------------- | ------------------------------ |
| mobile         | Y            | number   | -                 | Send verification phone number |
| sessionid      | Y            | string   | -                 | OTP sending voucher            |

### Response Parameters

The response parameters are as following：

- **Response Body**

::: tip
The message gateway synchronizes the message channel sending status once every minute.
:::

| **Parameters** | **Type** | **Description**                                                                                                                                                                                                                                                |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mobile         | string   | Send mobile phone number                                                                                                                                                                                                                                       |
| sessionid      | string   | OTP sending credentials                                                                                                                                                                                                                                        |
| status         | string   | Message gateway sending status: <br>`unknown`: Unknown <br>`create`: Task created <br>`pending`: Waiting to be pushed to the channel <br>`sending`: Pushing the channel <br>`success`: Pushing the channel successfully <br>`fail`: Pushing the channel failed |
| reportstatus   | string   | Message channel sending status: <br>`unknown`: Unknown <br>`pending`: Message sending <br>`success`: Message sending successfully <br>`fail`: Message sending failed                                                                                           |
| created_at     | number   | Creation time                                                                                                                                                                                                                                                  |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "mobile": "966580310251",
        "sessionid": "800558b1fb8327742f17d63a3202093e",
        "status": "fail",
        "reportstatus": "unknown",
        "created_at": 1717560142
    },
    "sensitiveFields": {},
    "requestId": "62C10FE5F4C06032E9D3ACF70E75B27B"
}
```