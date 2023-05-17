# Query Merchant Information

**Summery**

- Query the merchant information

**HTTP request type：GET**

**URL：** `https://sandbox.gcc-pay.com/api_v1/merchants/{%MERCHANT_ID%}`

- %MERCHANT_ID%：Merchant ID

**Response**

【Query Merchant Information】 response as follows：

- **Response Body**

| **Parameters** | **Type**   | **Describe**                                              | **Example**                   |
| -------------- | ---------- | --------------------------------------------------------- | ----------------------------- |
| id             | string     | GCCPAY payment order ID                                   | "M448726"                     |
| name           | string     | Merchant name                                             | "GCCPayMerchant"              |
| status         | string     | Merchant status：enableddisabled                          | "enabled"                     |
| ownerId        | string     | Login account                                             | "U771297"                     |
| name_en        | string     | User name                                                 |                               |
| CR_file        | string     | CR file address                                           |                               |
| CR_number      | string     | CR number                                                 |                               |
| CR_vatNumber   | string     | VAT No                                                    |                               |
| CR_expiredAt   | string     | CR expired date                                           |                               |
| address        | string     | Merchant  adresss                                         |                               |
| telephone      | string     | Merchant telephone                                        |                               |
| scope          | string     | Mercahnt business scope                                   |                               |
| legalPerson    | string     | Merchant legal person                                     |                               |
| mcc            | string     | MCC                                                       | "123333"                      |
| agencyId       | string     | Agency ID                                                 | "A936252"                     |
| currencys      | string     | Currency which merchants can use                          | "SAR,KWD,AED,BHD,EGP,OMR,QAR" |
| createdAt      | string     | Merchant settlement date                                  | "2022-11-08T23:20:19.000Z"    |
| updatedAt      | string     | Merchant information update date                          | "2022-12-07T23:26:49.000Z"    |
| owner          | jsonObject | Merchant owner information including: ID, name and mobile |                               |
| addressFile    | string     | Merchant business address information file URL            |                               |
| vatFile        | string     | Merchant vat information file URL                         |                               |
| nationalId     | string     | Merchant CR file URL                                      |                               |

- **Response demo**

```json
{
    "id": "M448726",        ### Merchant ID
    "name": "GCCPayMerchant",        ### Merchant name
    "status": "enabled",        ### Merchant status enabled / disabled
    "ownerId": "U771297",        ### Login account
    "name_en": "null",        ### Merchant name
    "CR_file": None,        ### CR file address
    "CR_number": "null",        ### CR number
    "CR_vatNumber": "null",        ### VAT Number
    "CR_expiredAt": None,        ### CR expired date
    "address": "null",        ### Merchant address
    "telephone": "null",        ### Merchant telephone
    "scope": None,        ### Merchant business scope
    "legalPerson": "null",        ### Merchant legal person
    "mcc": "123333",        ### MCC
    "agencyId": "A936252",        ### Agency ID
    "currencys": "SAR,KWD,AED,BHD,EGP,OMR,QAR",        ### Currency which merchants can use
    "addressFile": null,        ### Merchant business address information file URL
    "vatFile": null,            ### Merchant vat information file URL
    "nationalId": null,        ### Merchant CR file URL
    "createdAt": "2022-11-08T23:20:19.000Z",        ### Merchant settlement date
    "updatedAt": "2022-12-07T23:26:49.000Z",        ### Merchant information update date
    "owner":                ### Merchant owner infomation
    {
        "id": "U771297",        ### login ID
        "name": "GCCPayMerchant",        ### login name
        "mobile": "17610908585"        ### login telephone
    }
```