# Download Statement

## Function Description

Generate the reconciliation file for Day D at 1:00 AM on Day 1 in the Asia/Riyadh (+03,+0300) time zone:

- File name：`GCCRECO_{MERCHANT_NAME}_{MERCHANT_ID}_{YYYYMMDD}`
  - `MERCHANT_NAME`: Merchant name
  - `MERCHANT_ID`: Merchant ID
  - `YYYYMMDD`：Transaction date（D-1）

## Download Statement API

::: warning 
The HTTP **status code (non code)** for successful file response is `200`. If the file is being processed, the HTTP **status code (non code)** for response is `202`
:::

### Request URL

- `/payee/statement`

### Request Method

- GET

### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                 |
| ------------- | ------------ | -------- | ----------------- | --------------------------------------------------------------- |
| day           | N            | string   | D-1               | Statement date, format: YYYY mm dd, default to the previous day |

### Response Parameters

The HTTP status code is `200` and returns as a file response. The file format is `xlsx`. Please save the file yourself;

When the HTTP status code is `202`, JSON data is returned. When the HTTP status code is `202`, the current request should be abandoned and the download request should be reissued after a certain delay.

## Statement File Header

| Name                  | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| Merchant_ID           | Merchant ID                                                  |
| Merchant_Name         | Merchant name                                                |
| Payment_ID            | Payment ID                                                   |
| Payee_UID             | Merchant payment order number                                |
| Payment_Method        | Payment method                                               |
| Payment_Create_Time   | Payment creation time                                        |
| Payment_Complete_Time | Payment completion time                                      |
| Amount                | Total payment amount                                         |
| Fee                   | Handling fee                                                 |
| Real_Amount           | Actual payment amount                                        |
| Currency              | Currency                                                     |
| Payment_Status        | Payment status                                               |
| Custom_ID             | Customer ID                                                  |
| Custom_Name_E         | Customer English name                                        |
| Custom_Name_A         | Customer Arabic name                                         |
| Custom_Bank_Name      | Customer bank name                                           |
| Custom_Bank_Code      | Customer bank code                                           |
| Custom_Card_No        | Customer's bank card number (card number is desensitized and only displays the first six and last four, with a * in the middle instead) |
| Custom_Iban           | Customer IBAN                                                |
| Custom_STCPay_Account | Customer STCPay account                                      |