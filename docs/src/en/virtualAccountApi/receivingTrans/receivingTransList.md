# Query Receiving Trans List

## Function Description

- Query receiving trans list

## Query Receiving Trans List API

### Request URL

- `/virtualAccount/receivingTrans/list`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/virtualAccountApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                         |
| ------------- | ------------ | -------- | ----------------- | ----------------------------------------------------------------------- |
| pageno        | N            | number   | 1                 | Page number                                                             |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items |
| starttime     | N            | number   | -                 | Transaction start time, second level timestamp                          |
| endtime       | N            | number   | -                 | Transaction end time, second level timestamp                            |
| account       | N            | string   | -                 | Receiving account, length 24 digits                                     |

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**                 | **Type** | **Description**                      |
| ----------------------------- | -------- | ------------------------------------ |
| uuid                          | string   | Trans ID                           |
| transactiontime               | string   | transaction time YYYY-mm-dd HH:ii:ss |
| account                       | string   | Receiving account                    |
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
            "account": "SA9080000000000000000001",
            "amount": 50,
            "currency": "SAR",
            "exchangeinfo": {
                "custname": "Trust Gate",
                "custacc": "SA9080000000000000000002",
                "bankbic": "RJHISARI",
                "channelreference": "2024042500060801002869000004",
                "paymentremarks": "B2B/FRACCT/SA9080000000000000000002/Trust Gate/B2B"
            }
        }
    ],
    "sensitiveFields": {},
    "requestId": "4833DD916F788D654AABC9B5BDDECD49"
}
```