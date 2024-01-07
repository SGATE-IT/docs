# Funds Settlement Statement

## File Transfer

### File Generation Time

Generate D-1 day fund bill settlement file at 01:00:00 AM (GMT+3) on D day

### File Acquisition
<br>

#### Server Information

- Sandbox environment server address: `sandbox.sgate.sa`

#### File Acquisition Rules

- Get a list of files:

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/" -v --ssl --list-only
```

- Download Funds Settlement Statement

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/{YYYYMMDD}/GCCFUND_{MERCHANR_ID}_{YYYYMMDD}.xlsx" -v --ssl -o "GCCRECO_{MERCHANR_ID}_{YYYYMMDD}.xlsx"
```

1. `{USER}`: Merchant reconciles FTP account in SGate system
2. `{PASSWORD}`: The merchant reconciles the FTP account password in the SGate system
3. `{MERCHANR_ID}`: Merchant’s merchant number in the SGate system
4. `{YYYYMMDD}`: Transaction date: D-1, format: `yyyy-MM-dd`, example: `2023-08-21`

- System background acquisition

![img](/images/payinApi_zh/fund-statement.png)


## Basic File Information

### File format and encoding method

- The file uses the standard `xlsx` format file
- The file is encoded using `UTF-8`

### File Name

Fund bill settlement file name: `GCCFUND_{MERCHANR_ID}_{YYYYMMDD}`
- `{MERCHANR_ID}`: Merchant’s merchant ID in the SGate system
- `{YYYYMMDD}`: Transaction date: D-1, format: `yyyy-MM-dd`, example: `2023-08-21`

## Document Content

### Document Details Record

The details of the fund bill settlement file are recorded as the transaction information details of all transactions with final status on T-1 of the corresponding merchant.

| Serial number | Field name            | Field description                          | Meaning                                                                               |
| ------------- | --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------- |
| 1             | Merchant_ID           | Merchant ID                                | Merchant’s merchant ID in SGate                                                       |
| 2             | Order_ID              | Order number                               | The order number of the order in SGate                                                |
| 3             | Merchant_Order_ID     | Merchant order number                      | The order number of the order in the merchant                                         |
| 4             | Order_Create_Time     | Order creation time                        | Order creation time, yyyy-MM-dd HH:mm:ss(z). Such as 2023-01-23 13:33:28(GMT+3)       |
| 6             | Order_Complete_Time   | Order completion time                      | Order completion time, yyyy-MM-dd HH:mm:ss(z). Such as 2023-01-23 13:33:28(GMT+3)     |
| 8             | Amount                | Order amount                               | Total order amount, accurate to two decimal places                                    |
| 9             | Currency              | Currency of order amount                   | Currency corresponding to total order amount                                          |
| 10            | Order_Status          | Order Status                               | [Order Status](/en/payinApi/statement/fundStatement#order-status)                     |
| 11            | Trans_Type            | Transaction type                           | [Order transaction type](/en/payinApi/statement/fundStatement#order-transaction-type) |
| 12            | Payment_Type          | Payment type                               | The type of user payment order, such as DEBIT                                         |
| 13            | Payment_Method        | Payment method                             | The way the user pays for the order, such as MADA                                     |
| 14            | Fee_Amount            | Handling fee amount                        | The handling fee amount corresponding to the order, accurate to two decimal places    |
| 15            | Fee_Currency          | Handling fee currency                      | Order corresponding handling fee currency                                             |
| 16            | Settle_Amount         | Amount to be settled                       | Amount to be settled corresponding to the order, accurate to two decimal places       |
| 17            | Settle_Currency       | Currency of the amount to be settled       | Currency of the amount to be settled corresponding to the order                       |
| 18            | Refund_Amount         | Refund amount                              | Total refund amount of the order                                                      |
| 19            | Refund_Currency       | Refund currency                            | Currency to apply for refund                                                          |
| 20            | Refund_Time           | Refund time                                | Refund completion time                                                                |
| 21            | Ori_Order_ID          | Original transaction order number          | SGate Original transaction order number                                               |
| 22            | Ori_Merchant_Order_ID | Original transaction merchant order number | Original transaction merchant order number                                            |

### Transaction Summary Data

- Total Amount: the total amount of the order
- Total Fee: Total amount of handling fees
- Total Settle Amount: The total amount to be settled

## Sppendix

### Order Status

| Order Status | Meaning                |
| ------------ | ---------------------- |
| S            | Transaction successful |

### Order Transaction Type

| Transaction Type | Meaning                |
| ---------------- | ---------------------- |
| P                | Payment Transaction    |
| R                | Refund Transaction     |
| C                | Chargeback Transaction |