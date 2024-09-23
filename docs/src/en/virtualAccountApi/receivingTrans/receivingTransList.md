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
| pageno        | N            | number   | 1                 | Page number, supports up to 1000 pages                                  |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items |
| starttime     | N            | number   | -                 | Transaction start time, second level timestamp                          |
| endtime       | N            | number   | -                 | Transaction end time, second level timestamp                            |
| account       | N            | string   | -                 | Receiving account, length limit 34 characters                           |
| uuid          | N            | string   | -                 | SGate transaction serial number, length limit 36 characters             |

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**                 | **Type** | **Description**                               |
| ----------------------------- | -------- | --------------------------------------------- |
| uuid                          | string   | SGate transaction serial number               |
| transactiontime               | string   | transaction time YYYY-mm-dd HH:ii:ss          |
| account                       | string   | IBAN of the payee account                     |
| amount                        | float    | Amount                                        |
| currency                      | string   | Currency                                      |
| exchangeinfo                  | object   | Transaction information                       |
| exchangeinfo.custname         | string   | Name of payer                                 |
| exchangeinfo.custacc          | string   | IBAN of the payer account                     |
| exchangeinfo.bankbic          | string   | Bank identification code of the payer account |
| exchangeinfo.channelreference | string   | Payee bank serial number                      |
| exchangeinfo.paymentremarks   | string   | Remarks of the payee bank                     |

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
        "custname": "Muhammad Ali",
        "custacc": "SA9080000000000000000002",
        "bankbic": "RJHISARI",
        "channelreference": "2024042500060801002869000004",
        "paymentremarks": "B2B/FRACCT/SA9080000000000000000002/Muhammad Ali/B2B"
      }
    }
  ],
  "sensitiveFields": {},
  "requestId": "4833DD916F788D654AABC9B5BDDECD49"
}
```
