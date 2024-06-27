# Status Code

### Public

| Code | Description      |
| ---- | ---------------- |
| 200  | Success          |
| 1000 | Failed           |
| 1001 | Add failed       |
| 1002 | Query failed     |
| 1003 | Update failed    |
| 1004 | Delete failed    |
| 1005 | Operation failed |

### Data

| Code | Description                 |
| ---- | --------------------------- |
| 1100 | Data exists                 |
| 1101 | Data does not exist         |
| 1102 | Missing parameter           |
| 1103 | Parameter validation failed |

### Secure

| Code | Description                                                           |
| ---- | --------------------------------------------------------------------- |
| 1200 | No APIKEY                                                             |
| 1201 | APIKEY error                                                          |
| 1202 | Merchant key error                                                    |
| 1203 | Parameter decryption failed (sensitive information decryption failed) |
| 1204 | Request expiration                                                    |
| 1205 | IP illegal                                                            |
| 1206 | System encryption error                                               |
| 1207 | ID not available                                                      |
| 1208 | Missing request header                                                |
| 1209 | Request header validation failed                                      |
| 1210 | Invalid API version                                                   |
| 1211 | User Agent verification failed                                        |
| 1212 | Trigger frequency limit                                               |
| 1213 | Signature verification failed                                         |

### Customer

| Code | Description                                                            |
| ---- | ---------------------------------------------------------------------- |
| 1300 | The current status of the customer is not available for this operation |
| 1301 | Request for duplicate business customer ID                             |
| 1302 | Duplicate customer ID under merchant                                   |
| 1303 | Please configure the payment account                                   |
| 1304 | Bank account error                                                     |
| 1305 | Please fill in the customer name                                       |
| 1306 | Please fill in the customer bank                                       |
| 1307 | STCPay account error                                                   |

### Payment

| Code | Description                                             |
| ---- | ------------------------------------------------------- |
| 1400 | Payeeuid duplicate in request                           |
| 1401 | Payeeuid duplicate in global                            |
| 1402 | Insufficient balance                                    |
| 1403 | Unsupported payment method                              |
| 1404 | The payment amount on behalf needs to be greater than 0 |
| 1405 | Merchant balance operation failed                       |

### File

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 1500 | File upload failed                                   |
| 1501 | File MD5 is inconsistent                             |
| 1502 | The reconciliation file is currently being processed |

### OTP

| Status Code | Description                                |
| ----------- | ------------------------------------------ |
| 1600        | Send OTP failed                            |
| 1601        | Message gateway exception                  |
| 1602        | Message gateway failed to push information |
| 1603        | Product name not configured                |
| 1604        | The product name does not exist            |
| 1605        | OTP type is invalid                        |
| 1606        | OTP verification failed                    |
| 1607        | OTP code is invalid or has expired         |
| 1608        | OTP sending number mismatch                |
| 1609        | OTP code error                             |
| 1610        | OTP sending credentials not matched        |
| 1611        | OTP is currently being sent                |
| 1612        | OTP sending number format error            |