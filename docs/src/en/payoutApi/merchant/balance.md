# Query Merchant Balance

## Function Description

- Query merchant balance

## Query Merchant Balance API

### Request URL

- `/merchant/balance`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description**                                  |
| ------------- | -------- | ------------------------------------------------ |
| currency      | string   | [Currency Code](/en/payoutApi/appendix/currency) |
| balance       | float    | Balance under this curreny                       |

**Response Parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "currency": "SAR",
            "balance": 999999
        }
    ],
    "sensitiveFields": {},
    "requestId": "F846B971722D6420CCC5897D9FDF7FA4"
}
```