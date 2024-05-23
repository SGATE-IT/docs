# Merchant Query

## Function Description

- Query merchant information

## Merchant Query API

### Request URL

- `/merchants/{MERCHANT_ID}`
  - `{MERCHANT_ID}`：Your merchant ID

### Request Method

- `merchant.detail`

### HTTP Verb

- GET

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**                        | **Type** | **Description**                                                                          | **Example**                |
| ------------------------------------ | -------- | ---------------------------------------------------------------------------------------- | -------------------------- |
| invoicePrefix                        | string   | Invoice prefix                                                                           | "Sand00"                   |
| id                                   | string   | Merchant ID                                                                              | "M448726"                  |
| name                                 | string   | Merchant name                                                                            | "GCCPayMerchant"           |
| status                               | string   | Merchant status: enableddisabled                                                         | "enabled"                  |
| ownerId                              | string   | Login user name                                                                          | "U771297"                  |
| name_en                              | string   | username                                                                                 | "Sandbox"                  |
| CR_file                              | string   | Certificate file address                                                                 |                            |
| CR_number                            | string   | Business license number                                                                  |                            |
| CR_vatNumber                         | string   | VAT number                                                                               |                            |
| CR_expiredAt                         | string   | Certificate expiration time                                                              | "2023-04-21T00:00:00.000Z" |
| address                              | string   | Company business address                                                                 |                            |
| telephone                            | string   | Contact number                                                                           | "900000000"                |
| scope                                | string   | business scope                                                                           |                            |
| legalPerson                          | string   | legal person                                                                             | "Sandbox"                  |
| mcc                                  | string   | MCC                                                                                      | "123333"                   |
| agencyId                             | string   | Agency ID                                                                                | "A936252"                  |
| currencies                           | string   | Currencies that merchants can use                                                        | "SAR,KWD,BHD,AED,OMR,QAR"  |
| addressFile                          | string   | Merchant business address information file URL                                           |                            |
| vatFile                              | string   | Merchant tax file URL                                                                    |                            |
| nationalId                           | string   | Merchant business license file URL                                                       |                            |
| logoFile                             | string   | Merchant LOGO URL                                                                        |                            |
| website                              | string   | Merchant website address                                                                 | `https://xxx`              |
| email                                | string   | Merchant email                                                                           | `info@gmail.com`           |
| city                                 | string   | The city where the merchant is located                                                   |                            |
| district                             | string   | The district where the merchant is located                                               |                            |
| street                               | string   | The street where the merchant is located                                                 |                            |
| zipcode                              | string   | zip code                                                                                 |                            |
| feeRate                              | number   | fee rate                                                                                 |                            |
| statementStatus                      | string   | Reconciliation method: <br> hand: manual reconciliation <br> daily: daily reconciliation | "daily"                    |
| bankCardWhiteList                    | string   | Card number whitelist                                                                    |                            |
| createdAt                            | string   | Generation time                                                                          | "2022-11-08T23:20:19.000Z" |
| updatedAt                            | string   | Update time                                                                              | "2022-12-07T23:26:49.000Z" |
| owner                                | object   | owner information                                                                        |                            |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.id     | string   | Owner ID                                                                                 |                            |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.name   | string   | Owner name                                                                               |                            |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.mobile | string   | Mobile phone number                                                                      |                            |

**Response Parameter Example**

```json
{
  "invoicePrefix": "Sand00", // Invoice prefix
  "id": "M226746", // Merchant ID
  "name": "Sandbox_For_GCCMall_QCloud", // Merchant name
  "status": "enabled", // Merchant status enabled / disabled
  "ownerId": "U592801", // Login user name
  "name_en": "Sandbox For GCCMall QCloud", // User name
  "CR_file": null, // ID file address
  "CR_number": "111222", // Business license number
  "CR_vatNumber": "111222", // VAT number
  "CR_expiredAt": "2023-04-21T00:00:00.000Z", // Certificate expiration time
  "address": null, // Business address of the company
  "telephone": "111222333", // Contact number
  "scope": null, // business scope
  "legalPerson": "test", // legal person
  "mcc": "1111", // MCC
  "agencyId": "A936252", //Agency ID
  "currencys": "SAR,KWD,BHD,AED,OMR,QAR", // Currencies that merchants can use
  "addressFile": null, // Merchant business address information file URL
  "vatFile": "2023-03-20/82/8217650e21bb2b8624af1cd83525fdcf.png", // Merchant tax file URL
  "nationalId": null, // Merchant business license file URL
  "logoFile": "2023-04-21/9b/9bcccd988b4e5873895c034b81092df3.png", // Merchant LOGO URL
  "website": null, // Merchant website address
  "email": null, // Merchant email
  "city": null, // The city where the merchant is located
  "district": null, // The area where the merchant is located
  "street": null, // The street where the merchant is located
  "zipcode": null, // zip code
  "feeRate": 7, // Handling fee rate
  "statementStatus": "daily", // Reconciliation method
  "bankCardWhiteList": "[{\"cardNumber\":\"439226011111111\",\"nameOnCard\":\"test\",\"expiryMonth\":\"07\",\"expiryYear\":\ "2021\"},{\"cardNumber\":\"5123450000000008\",\"nameOnCard\":\"MasterCard SandBox\",\"expiryMonth\":\"01\",\"expiryYear\": \"2039\"}]", // Card number whitelist
  "createdAt": "2023-01-03T09:34:59.000Z", // Generation time
  "updatedAt": "2023-07-26T02:52:42.000Z", // Update time
  "owner": {
    "id": "U592801", // Owner ID
    "name": "Sandbox For GCCMall QCloud", // Owner's name
    "mobile": "900000000" // Mobile phone number
  }
}
```