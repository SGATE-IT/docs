# Query Bank List

## Function Description

- Query the list of supported banks

## Query Bank List API

### Request URL

- `/payee/banks`

### Request Method

- GET

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View request/response headers](/en/payoutApi/apiRule/header)

### Response Parameters

The response parameters are as follows：

- **Response Body**

| **Parameter** | **Type** | **Description** |
| ------------------ | -------- | --------------- |
| bankcode           | string   | Bank CODE       |
| bankname           | string   | Bank name       |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "bankcode": "114db",
            "bankname": "The National Commercial Bank"
        },
        {
            "bankcode": "11558",
            "bankname": "The Saudi British Bank"
        },
        {
            "bankcode": "115d5",
            "bankname": "Saudi Investment Bank"
        },
        {
            "bankcode": "11652",
            "bankname": "Alinma Bank"
        },
        {
            "bankcode": "116cf",
            "bankname": "Banque Saudi Fransi"
        },
        {
            "bankcode": "1174c",
            "bankname": "Riyad Bank"
        },
        {
            "bankcode": "117c9",
            "bankname": "Samba Financial Group (Samba)"
        },
        {
            "bankcode": "11846",
            "bankname": "Alawwal bank"
        },
        {
            "bankcode": "118c3",
            "bankname": "Al Rajhi Bank"
        },
        {
            "bankcode": "11940",
            "bankname": "Arab National Bank"
        },
        {
            "bankcode": "119bd",
            "bankname": "Bank AlBilad"
        },
        {
            "bankcode": "11a3a",
            "bankname": "Bank AlJazira"
        },
        {
            "bankcode": "11ab7",
            "bankname": "Gulf International Bank Saudi Aribia (GIB-SA)"
        }
    ],
    "sensitiveFields": {},
    "requestId": "C66318F367852434B45337CD9F833E27"
}
```