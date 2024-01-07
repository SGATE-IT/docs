# Reconciliation Statement

## File Transfer

### File Generation Time

Generate D-1 day reconciliation file at 01:00:00 AM (GMT+3) on D day

### File Acquisition
<br>

#### Server Information

- Sandbox environment server address: `sandbox.sgate.sa`

#### File Acquisition Rules

- Get a list of files:

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/" -v --ssl --list-only
```

- Download reconciliation file

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/{YYYYMMDD}/GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}.csv" -v --ssl -o "GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}.csv"
```

1. `{USER}`: Merchant reconciles FTP account in SGate system
2. `{PASSWORD}`: The merchant reconciles the FTP account password in the SGate system
3. `{MERCHANR_ID}`: Merchant’s merchant number in the SGate system
4. `{YYYYMMDD}`: Transaction date: D-1, format: `yyyy-MM-dd`, example: `2023-08-21`
5. `{SESSION_ID}`: Reconciliation session number, the value is 01-09. If there is no reconciliation for multiple sessions, the default value is 01

## Basic File Information

### File Format And Encoding Method

- The file uses the standard `CSV` format, using half-width commas `,` as delimiters. Empty columns will also indicate their existence. Each line ends with a newline character `\n`
- The file is encoded using `UTF-8`

### File Name

Reconciliation file name: `GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}`
- `{MERCHANR_ID}`: Merchant’s merchant ID in the SGate system
- `{YYYYMMDD}`: Transaction date: D-1, format: `yyyy-MM-dd`, example: `2023-08-21`
- `{SESSION_ID}`: Reconciliation session number, the value is 01-09. If there is no reconciliation for multiple sessions, the default value is 01

### Type Of Data

| Serial number | Type        | Meaning                                                     |
| ------------- | ----------- | ----------------------------------------------------------- |
| 1             | T (Text)    | Text field, can use letters and Chinese, etc., can be empty |
| 2             | N (Numeric) | Numeric field, cannot be empty                              |

## Document Content

### Document Details Record

The details of the reconciliation file are recorded as the transaction information details of all transactions in the final state on T-1 of the corresponding merchant.

| Serial number | Field name          | Field description                     | Type | Meaning                                                                                  |
| ------------- | ------------------- | ------------------------------------- | ---- | ---------------------------------------------------------------------------------------- |
| 1             | Merchant_ID         | Merchant ID                           | T    | Merchant’s merchant ID in SGate                                                          |
| 2             | Order_ID            | Order number                          | T    | The order number of the order in SGate                                                   |
| 3             | Merchant_Order_ID   | Merchant order number                 | T    | The order number of the order in the merchant                                            |
| 4             | Order_Create_Time   | Order creation time                   | T    | Order creation time: yyyy-MM-dd HH:mm:ss(z)<br>For example: 2023-01-23 13:33:28(GMT+3)   |
| 6             | Order_Complete_Time | Order completion time                 | T    | Order completion time: yyyy-MM-dd HH:mm:ss(z)<br>For example: 2023-01-23 13:33:28(GMT+3) |
| 8             | Amount              | Order amount                          | N    | Total order amount                                                                       |
| 9             | Currency            | Currency of order amount              | T    | Currency corresponding to total order amount                                             |
| 10            | Trans_Type          | Transaction type                      | T    | [Order transaction type](/en/payinApi/statement/statement#order-transaction-type)        |
| 11            | Order_Status        | Order status                          | T    | [Order status](/en/payinApi/statement/statement#order-status)                            |
| 12            | Ori_Order_ID        | Original transaction order number     | T    | The order number of the original transaction of this order in SGate                      |
| 13            | Ori_Order_Amount    | Original transaction payment amount   | N    | The amount of the original transaction for this order                                    |
| 14            | Ori_Order_Currency  | Original transaction payment currency | T    | Original transaction currency of this order                                              |

## Appendix

### Order Status

| Order Status | Meaning                |
| ------------ | ---------------------- |
| S            | Transaction successful |
| F            | Transaction failed     |
| P            | Transaction processing |

### Order Transaction Type

| Transaction type | Meaning                |
| ---------------- | ---------------------- |
| P                | Payment Transaction    |
| R                | Refund Transaction     |
| C                | Chargeback Transaction |