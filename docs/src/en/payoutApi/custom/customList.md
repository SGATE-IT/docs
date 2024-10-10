# Query Customer List

## Function Description

- Query customer list

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

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                                                                                                                                                                    |
| ------------- | ------------ | -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageno        | N            | number   | 1                 | Page number, supports up to 1000 pages                                                                                                                                                                                             |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items                                                                                                                                                            |
| starttime     | N            | number   | -                 | Customer creation start time, second level timestamp                                                                                                                                                                               |
| endtime       | N            | number   | -                 | Customer creation end time, second level timestamp                                                                                                                                                                                 |
| mercustomids  | N            | string   | -                 | Merchant customer ID, multiple IDs separated by commas in english, length limit 512 characters, examples: u001, u002                                                                                                               |
| customids     | N            | string   | -                 | System customer ID, multiple IDs separated by english commas, length limit 512 characters, example: 1187, 2f131                                                                                                                    |
| identity      | N            | string   | -                 | ID number (sensitive information, need [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption, length limit 64 characters                                                                          |
| cardno        | N            | string   | -                 | Bank account (sensitive information, requires [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption processing), must be a number, length limit 13 to 19 characters                               |
| bankcode      | N            | string   | -                 | [Bank code](/en/payoutApi/banks/bankList)                                                                                                                                                                                          |
| ibanaccount   | N            | string   | -                 | IBAN, letters and numbers, length limit 34 characters                                                                                                                                                                              |
| name_e        | N            | string   | -                 | Customer english name, supports fuzzy queries, length limit 64 characters                                                                                                                                                          |
| status        | N            | number   | -                 | [Customer status](/en/payoutApi/appendix/customStatus)                                                                                                                                                                             |
| stcaccount    | N            | string   | -                 | STCPay (sensitive information, requires [system public key](/en/payoutApi/apiRule/certificateKey#system-public-key) encryption processing）, supported formats:<br> 5xxxxxxxx <br> 9665xxxxxxxx <br> +9665xxxxxxxx <br> 05xxxxxxxx |

### Response Parameter

The response parameters are as follows：

- **Response Body**

| **Parameter**     | **Type** | **Description**                                                                                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| customid          | string   | System customer ID                                                                                                                                   |
| mercustomid       | string   | Merchant customer ID                                                                                                                                 |
| name_e            | string   | Customer english name                                                                                                                                |
| name_a            | string   | Customer arabic name                                                                                                                                 |
| address           | string   | Address information bound to the customer bank card                                                                                                  |
| identity          | string   | ID number (sensitive information, encrypted with [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))            |
| identitypic       | string   | ID card photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))   |
| signpic           | string   | Signature photo URL (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key)) |
| bankname          | string   | [Bank name](/en/payoutApi/banks/bankList)                                                                                                            |
| bankcode          | string   | [Bank code](/en/payoutApi/banks/bankList)                                                                                                            |
| cardno            | string   | Bank account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))        |
| ibanaccount       | string   | IBAN                                                                                                                                                 |
| swiftcode         | string   | Swift code corresponding to the customer bank account                                                                                                |
| stcaccount        | string   | STCPay account (sensitive information, encrypted using [merchant public key](/en/payoutApi/apiRule/certificateKey#merchant-public-private-key))      |
| status            | number   | [Customer status](/en/payoutApi/appendix/customStatus)                                                                                               |
| statusdesc        | string   | Customer status description                                                                                                                          |
| autoapproval      | number   | Whether to enable automatic approval: <br> `0`: Disable <br> `1`: Enable                                                                             |
| otpappname        | string   | Product name for sending OTP verification                                                                                                            |
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
            "address": "Saudi Arabia",
            "identity": "hg3TiMx12VsW+m0a60FpIbU6k+ppfrWz5VAzpzRr8wOasTELnFuQqRO5bGLn/SUK8FhpfLqI+Mf9GqMFuKk7Ogh6izh2UkTbg5/kO8unT2pNsI1vqSuAKJP2QeMzKBORWAn878fLvNf10Y7drMimwP+FU3ChMVREaPMoosOIWdsDh13mFce6IfDQUBXqcHDeUZAdRZMvIyUBAAhp60d4J83BXuvZeQkrxKMnD34AhO0/gABRqiSWAWgNGv6UgBkiH0siLlevyKt674HZSRaMGh4tv5KXx/qWVTUGI7JGes5vh6iO1gy+5G6bd8amfUQ+J2W3UysyZGcNLrtBq5VfpQ==",
            "identitypic": "",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "OAz0pmLB/wKtKvyNHte+Bsq4D3FlKt5snflmh15PnyIV3nyuoLs10Xm5Eg2erq5jgeeRdrQsBqAF5FeUfthS4NaAtgVVTlOpe5vFLtt3RL6BQ1i829Fx7rSCjdoYXpBDdBG7D85D4OnNgJpSxXvAJMK8qZDZv4XPxwAgcH5b+VCu138kpOaBjDuzl9dVOgoX69xIBWrd+kkD7btGytKD4H+jvU+NK+/Lfo0I61gzc/xYe5VEwFxlH4Cr/TeMhH1opwM6F2V+Mi45JL58DprZx7N0TtPaUOyhioZn6MdbNlJoI1bLARjMJIyt6sB1ZsglLChDRLFDhkLonWrlYxZWhA==",
            "ibanaccount": "1234567892",
            "swiftcode": "ABNACNSHXXX",
            "stcaccount": "",
            "status": 4,
            "statusdesc": "2023-06-15 06:12:54",
            "autoapproval": 1,
            "otpappname": "test",
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