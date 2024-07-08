# Query Exchange Rate

## Function Description

- Current exchange rate of payout currency to SAR currency

## Query Exchange Rate API

### Request URL

- `/payee/exchangeRate`

### Request Method

- GET

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View request/response headers_](/zh/payoutApi/apiRule/header)

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description**                                              |
| ------------- | -------- | ------------------------------------------------------------ |
| scur          | string   | Current currency                                             |
| tcur          | string   | Target currency                                              |
| ratenm        | string   | Exchange rate name, format: current currency/target currency |
| rate          | float    | Exchange rate                                                |
| updated_at    | number   | Update time                                                  |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "scur": "KWD",
            "tcur": "SAR",
            "ratenm": "KWD/SAR",
            "rate": 12.11,
            "updated_at": 1675214960
        },
        {
            "scur": "AED",
            "tcur": "SAR",
            "ratenm": "AED/SAR",
            "rate": 1.02,
            "updated_at": 1675214960
        }
    ],
    "sensitiveFields": {},
    "requestId": "140EF15206E742C556A0B9E36878D19F"
}
```