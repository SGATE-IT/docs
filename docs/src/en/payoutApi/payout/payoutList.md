# Query List of Payment Orders

## Function Description

- Query list of payment orders

## Query List of Payment Orders API

### Request URL

- `/payee/payCustomTicket/list`

### Request Method

- GET

- ### Request Parameters

The request parameters are as follows：

- **Header**

  - [_View request/response headers_](/en/payoutApi/apiRule/header)

- **Request Body**

| **Parameter** | **Required** | **Type** | **Default Value** | **Description**                                                                     |
| ------------- | ------------ | -------- | ----------------- | ----------------------------------------------------------------------------------- |
| pageno        | N            | number   | 1                 | Page number, supports up to 1000 pages                                              |
| pagesize      | N            | number   | 20                | Display the number of items per page, supporting a maximum of 100 items             |
| starttime     | N            | number   | -                 | Pament order creation start time, second level timestamp                            |
| endtime       | N            | number   | -                 | Payment order creation end time, second level timestamp                             |
| customids     | N            | string   | -                 | System customer IDs, multiple IDs separated by English commas, example: 1187, 2f131 |
| payeeuid      | N            | string   | -                 | Merchant order ID, length limit 64 characters                                       |
| ticketid      | N            | string   | -                 | Payment order ID, length limit 64 characters                                        |
| status        | N            | number   | -                 | [Payment order status](/en/payoutApi/appendix/paymentStatus)                        |

### Response Parameters

The response parameters are as follows：：

- **Response Body**

| **Parameter** | **Type** | **Description**                                                                                     |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| ticketid      | string   | Payment order ID                                                                                    |
| key           | string   | Payment order key, unique for each payment order                                                    |
| customid      | string   | System customer ID                                                                                  |
| mercustomid   | string   | Merchant customer ID                                                                                |
| payeeuid      | string   | Merchant order ID                                                                                   |
| trantype      | string   | [Transaction type](/en/payoutApi/appendix/tranType)                                                 |
| currency      | string   | [Currency code](/en/payoutApi/appendix/currency)                                                    |
| paymentmethod | string   | [payment method](/en/payoutApi/appendix/paymentMethod)                                              |
| amount        | float    | Payment amount                                                                                      |
| realamount    | float    | Actual amount received                                                                              |
| fee           | float    | Handling fee                                                                                        |
| status        | number   | [Payment order status](/en/payoutApi/appendix/paymentStatus)                                        |
| statusdesc    | string   | Status description                                                                                  |
| confirmtime   | number   | Payment completion time                                                                             |
| custominfo    | object   | Customer data snapshot when creating a payment order, with the same data structure as customer data |
| created_at    | number   | Creation time                                                                                       |
| updated_at    | number   | Update time                                                                                         |

**Response parameter Example**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "ticketid": "15b2b",
            "key": "M4TQCZW20230615071437",
            "customid": "12ad4",
            "mercustomid": "u004",
            "payeeuid": "TEST1234567aa12sd1",
            "trantype": "standard",
            "currency": "SAR",
            "paymentmethod": "bankTransfer",
            "amount": 2002,
            "realamount": 2002,
            "fee": 127.79,
            "feeconfigid": 0,
            "status": 0,
            "statusdesc": "",
            "confirmtime": 0,
            "custominfo": {
                "customid": "12ad4",
                "mercustomid": "u004",
                "name_e": "updTest2",
                "name_a": "usera",
                "identity": "RFUkm6s2HSMzFlOkMooW/S6GIyE6ne7N2ocB21CZ4MG+XCvaaJnj0NfM3cRz31iZBFWJZVXLPSHpuPCBpTb1XEdkUAoiVslejvmCEAJW3VoOM+3uUPD9ucDWxu00usxDGVLLsz3rJ+zpjGfITjWi1EWLLA62JskzvyjGFyL7sS+DjPO0aXUVU3vwNBHKrXqxzvc8W4nplJCFsDfIZrcJLRdYR5Pmwc1m6EjILHFm3G77tWKeIM+MLHl0WzeVUivdYqg+RWDCQ+dSHNS6w44eLp4JOs/WhI/loXZnR8GuxZftwsxoSors0IN6AydPZtLpraMSM5z3rivLN3CcwbQRWA==",
                "identitypic": "iHnF276boBgErF3g7lTGiQku9BSDpHGKMUfzWz4scsWaj7mNl3o//g3t4ytqQ22FFLJKdAatyA/nhc5q20J/T63OfNqAsqkZaxQ8Seh+CDnK9o9T6z6lM1G1QG/2Zh6VW0iB/awMf5iZQg/vwmsSPM5enZye19sxzLVHy0bqB0rnYC3faG277XODWuyyBaWv8w726l3YBYvoh+/Li8x3pxXyXOEVySCYTZicQ3MNyU5fMQyKuI8tB+bokaixTdnnSmUmaXo0pgsJ5YwX3AzNdlw4bnuN6f7SzzNshKK4H1eUIpkwnEEx+MBVEE21728LQrml8gmzFwY8BTZLfVayfQ==",
                "signpic": "",
                "bankname": "Riyad Bank",
                "bankcode": "1174c",
                "cardno": "MWQt3VEF+FnD/7WlWS50b6/86HRho1W72jwiYFRV35xu4QvPgmybhixAha3wX2QsiclczmJsjSgHJVD6MtQWNl9hc2lt52/fNkT8U1if0xMf3oMw9PR6wen9NpQUvca3r8YqZzsk29kU087dzyc4zVHajiCra8GwVIhO9Z8D1NOFmbU/yqydnba4hATZK8eDOkQZYTzCBD2ynx0JcgoHjvN3kiVelFEEhzf75ucloVJUSPeCizMi8v40u+Gu57w1GpKYs0uDOKrk6JV4R2e72frcFuA79Lsw1WW/bEg++9R6cWWzoLgD7aaG+4EYGmr6Wdf0R1QqcgHtHJS7NFuQCg==",
                "ibanaccount": "1234567892",
                "stcaccount": "q/ZSA9dKLdaRiw58dJqKbsSc4ngdaiZQOOHVTs2iICVMQEZifuIIRd0wDO1+X8clsKBzpVnua6TdfopvjJ5sM+Xp46yrsYsAjdnBZUfhRsEsd4cVO+UX+YSRrxI0MhyL0cYE+i5u6VpGb5ArN8deK2lWsinEUR9uel70gOqjSnJ3xyMyXzDeo3x9n4Dgi6hjtMbNG/+sFZSDWhMbMgZOXujHukJf1aaFVeHQxrH94/qHFma0wPShiI5QnhyFOm4NwtsmMYzL45neOkuDwluEApZ29LgfvLJygoBRSRad8AvAjcMiuxOqxK0QbRt0AeN6SMXzZl7CrF3xUTsDUzw4QQ==",
                "status": 1,
                "statusdesc": "2023-06-15 06:14:45",
                "demand_perfection": [],
                "created_at": 1686798774,
                "updated_at": 1686801815
            },
            "created_at": 1686802477,
            "updated_at": 1694791614
        }
    ],
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "stcaccount",
            "cardno"
        ]
    },
    "requestId": "63AC8117DD8BAB88D02D6472FAD9310C"
}
```