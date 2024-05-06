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