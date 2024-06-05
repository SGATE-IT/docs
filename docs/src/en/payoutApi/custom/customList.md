# Query Customer List

## Function Description

- Query Customer List

## Query Customer List API

### Request URL

- `/payee/custom/list`

### Request Method

- GET

### Request Parameter

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                  |
| ------------- | ------------ | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| pageno        | N            | number   | 1                 | Page number                                                                                                                                      |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items                                                                          |
| starttime     | N            | number   | -                 | Customer creation start time, second level timestamp                                                                                             |
| endtime       | N            | number   | -                 | Customer creation end time, second level timestamp                                                                                               |
| mercustomids  | N            | string   | -                 | Merchant customer ID, multiple IDs separated by commas in English, examples: u001, u002                                                          |
| customids     | N            | string   | -                 | System customer ID, multiple IDs separated by English commas, example: 1187, 2f131                                                               |
| identity      | N            | string   | -                 | ID number (sensitive information, need [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption                    |
| cardno        | N            | string   | -                 | Bank account (sensitive information, requires [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption processing) |
| bankcode      | N            | string   | -                 | [Bank CODE](/en/payoutApi/banks/bankList)                                                                                                        |
| ibanaccount   | N            | string   | -                 | IBAN                                                                                                                                             |
| name_e        | N            | string   | -                 | Customer English name, supports fuzzy queries                                                                                                    |
| status        | N            | number   | -                 | [Customer status](/en/payoutApi/appendix/customStatus)                                                                                           |
| stcaccount    | N            | string   | -                 | STCPay (sensitive information, requires [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption processing）      |

### Response Parameter

The response parameters are as follows：

- **Response Body**

| **Parameter**     | **Type** | **Description**                                                                                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| customid          | string   | System Customer ID                                                                                                                                   |
| mercustomid       | string   | Merchant Customer ID                                                                                                                                 |
| name_e            | string   | Customer English Name                                                                                                                                |
| name_a            | string   | Customer Arabic Name                                                                                                                                 |
| identity          | string   | ID number (sensitive information, encrypted with [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))            |
| identitypic       | string   | ID card photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))   |
| signpic           | string   | Signature photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)) |
| bankname          | string   | [Bank Name](/en/payoutApi/banks/bankList)                                                                                                            |
| bankcode          | string   | [Bank CODE](/en/payoutApi/banks/bankList)                                                                                                            |
| cardno            | string   | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| ibanaccount       | string   | IBAN                                                                                                                                                 |
| stcaccount        | string   | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))      |
| status            | number   | [Customer Status](/en/payoutApi/appendix/customStatus)                                                                                               |
| statusdesc        | string   | Customer status description                                                                                                                          |
| demand_perfection | array    | What information does the user currently need to improve                                                                                             |
| created_at        | number   | Creation time                                                                                                                                        |
| updated_at        | number   | Update time                                                                                                                                          |

**Response Parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "usera",
            "name_a": "usera",
            "identity": "hg3TiMx12VsW+m0a60FpIbU6k+ppfrWz5VAzpzRr8wOasTELnFuQqRO5bGLn/SUK8FhpfLqI+Mf9GqMFuKk7Ogh6izh2UkTbg5/kO8unT2pNsI1vqSuAKJP2QeMzKBORWAn878fLvNf10Y7drMimwP+FU3ChMVREaPMoosOIWdsDh13mFce6IfDQUBXqcHDeUZAdRZMvIyUBAAhp60d4J83BXuvZeQkrxKMnD34AhO0/gABRqiSWAWgNGv6UgBkiH0siLlevyKt674HZSRaMGh4tv5KXx/qWVTUGI7JGes5vh6iO1gy+5G6bd8amfUQ+J2W3UysyZGcNLrtBq5VfpQ==",
            "identitypic": "",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "OAz0pmLB/wKtKvyNHte+Bsq4D3FlKt5snflmh15PnyIV3nyuoLs10Xm5Eg2erq5jgeeRdrQsBqAF5FeUfthS4NaAtgVVTlOpe5vFLtt3RL6BQ1i829Fx7rSCjdoYXpBDdBG7D85D4OnNgJpSxXvAJMK8qZDZv4XPxwAgcH5b+VCu138kpOaBjDuzl9dVOgoX69xIBWrd+kkD7btGytKD4H+jvU+NK+/Lfo0I61gzc/xYe5VEwFxlH4Cr/TeMhH1opwM6F2V+Mi45JL58DprZx7N0TtPaUOyhioZn6MdbNlJoI1bLARjMJIyt6sB1ZsglLChDRLFDhkLonWrlYxZWhA==",
            "ibanaccount": "1234567892",
            "stcaccount": "",
            "status": 4,
            "statusdesc": "2023-06-15 06:12:54",
            "demand_perfection": [
                "identitypic"
            ],
            "created_at": 1686809574,
            "updated_at": 1686809574
        }
    ],
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "5B7C31E52D37FF42627F18A20BD9AFB2"
}
```