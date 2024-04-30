# Query Offline Transfer List

## Function Description

- Query offline transfer list

## Query Offline Transfer List API

### Request URL

- `/offlineTransfer/list`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                         |
| ------------- | ------------ | -------- | ----------------- | ----------------------------------------------------------------------- |
| pageno        | N            | number   | 1                 | Page number                                                             |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items |
| starttime     | N            | number   | -                 | Transaction start time, second level timestamp                          |
| endtime       | N            | number   | -                 | Transaction end time, second level timestamp                            |
| account       | N            | string   | -                 | Offline payment account, length 24 digits                               |

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**                 | **Type** | **Description**                      |
| ----------------------------- | -------- | ------------------------------------ |
| uuid                          | string   | Offline payment ID                   |
| transactiontime               | string   | transaction time YYYY-mm-dd HH:ii:ss |
| account                       | string   | Offline payment account              |
| amount                        | float    | Amount                               |
| currency                      | string   | Currency                             |
| exchangeinfo                  | object   | Transaction information              |
| exchangeinfo.custname         | string   | Bank side merchant name              |
| exchangeinfo.custacc          | string   | Bank side account                    |
| exchangeinfo.bankbic          | string   | Bank side identification code        |
| exchangeinfo.channelreference | string   | Bank serial number                   |
| exchangeinfo.paymentremarks   | string   | Bank side remarks                    |


**Response Parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "uuid": "0FE4B054-A1FE-11ED-9A3D-F23C925C00BC",
            "transactiontime": "2023-01-29 01:56:13",
            "account": "SA9080000000000000000000",
            "amount": 50,
            "currency": "OMR",
            "exchangeinfo": {
                "custname": "Trust Gate",
                "custacc": "SA9080000000000000000000",
                "bankbic": "RJHISARI",
                "channelreference": "2024042500060801002869000004",
                "paymentremarks": "B2B/FRACCT/SA9080000000000000000000/Trust Gate/B2B"
            }
        }
    ],
    "sensitiveFields": {},
    "requestId": "4833DD916F788D654AABC9B5BDDECD49"
}
```