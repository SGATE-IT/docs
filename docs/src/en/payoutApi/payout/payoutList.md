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
| pageno        | N            | number   | 1                 | Page number                                                                         |
| pagesize      | N            | number   | 20                | Number of displayed items per page, up to 100 supported                             |
| starttime     | N            | number   | -                 | Pament order creation start time, second level timestamp                            |
| endtime       | N            | number   | -                 | Payment order creation end time, second level timestamp                             |
| customids     | N            | string   | -                 | System customer IDs, multiple IDs separated by English commas, example: 1187, 2f131 |
| payeeuid      | N            | string   | -                 | Merchant Order ID                                                                   |
| ticketid      | N            | string   | -                 | Payment Order ID                                                                    |
| status        | N            | number   | -                 | [Payment order status](/en/payoutApi/appendix/paymentStatus)                        |

### Response Parameters

The response parameters are as follows：：

- **Response Body**

| **Parameter** | **Type** | **Description**                                                                                     |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| ticketid      | string   | Payment Order ID                                                                                    |
| customid      | string   | System Customer ID                                                                                  |
| mercustomid   | string   | Merchant Customer ID                                                                                |
| payeeuid      | string   | Merchant Order ID                                                                                   |
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
            "customid": "12ad4",
            "mercustomid": "u004",
            "payeeuid": "TEST1234567aa12sd1",
            "trantype": "standard",
            "currency": "SAR",
            "paymentmethod": "bankTransfer",
            "amount": 2002,
            "realamount": 2002,
            "fee": 127.79,
            "status": 0,
            "statusdesc": "",
            "confirmtime": 0,
            "custominfo": {
                "customid": "12ad4",
                "mercustomid": "u004",
                "name_e": "updTest2",
                "name_a": "usera",
                "identity": "l+F+gGD3xqwEdqNmsjJqgu7U7oPWMU0qB01npsSOr13N4ykwfv0lj83EInkSDAQzbJSgR5sz4y74p5x/p4Se6eikSPultY9lZN7Tc07YieMv3DWqkLvh1MqLeAyHEBmpBiL4bz3TOD2u/qh3Me8x7fLs7DxCOGzfgvVEd8sfYDXFJfDJIKmobQzkkgDOW8FrdWVNgrQHdPiJz1V1QA431HniTzGR4zsViRgP+vk+dBx2IGNcqeqUhFfyN53gB2SUjNfoAahezL7E7nHpCuCY34SxxURvC+OCTx27BGVtMeHZC/Ylfea0zg+oDckpwdXbh2JS1IFoE9cSBLBIrstyeQ==",
                "identitypic": "F5RS/CjJCroN9BhZLxLRnkAEduJUZD5gUTOz8t4I7h/mGlwHogURQ3whdNA2CN8oIfQidW87D26/GZ97LdHiGJk6+s6vJCOFcduHOQR0IHCs1m1baxhYXzp72XU5wUZrjUyVI/vshcvzZRs/WVgmvpKS9s7BW03uNIZMip8/j4hRvTByDi5xAnOSWca0EvKECOZwF9Lht169ee1PKOgUHvxKZMUVwcMhALMRwg8mziKMlY85liW0C/PFQP65Om+LnZoO5L9EaNPcCfvZ14lb2xaankm7BOjIugqBWEnP2jZHJKpXOhNUgBSr0EYYek2nm+jxiKpDTHKe18ct8Nf1KA==",
                "signpic": "",
                "bankname": "Riyad Bank",
                "bankcode": "1174c",
                "cardno": "Uw7HBXGj4juKizHRvMvpcka7xcn9tycsoIA4JbjAOfDUWDwJOXIy5WXrvDXiueWOvcFYsQl+wBJOHEBhgRjE3GbwzxJ3Zewv4Ne+eer1dwXPwbBD9mNV8ZzvWJ9eR+lNIXbhphbvuccqwyl2MywlPHrj/2jMHMniL4+t2Z4YIWEQLW90leq5kpdV54KwdusnTNPHQgrMI7pe9T3p8W74XfMzjHfKpjaMNaar0TL4GSoYnA2el69m4KB+8vivzilruMEE2iNRpQMxYs8d25LHWgjvzcDrIOocA5C14OYl7TW9Yy7Hz28h/yu7IYW9l+XRt80MZ/lGD8g6rEH33eEhWQ==",
                "ibanaccount": "1234567892",
                "stcaccount": "cibEvUepVqJBH8b1zjZzb2xFttRj64UsxxccxPAW3H7cRyikiuyy6LXx80MmWf3br5ENmSYckeDei1jnwDFVFxNIn1R+OI/Q1BS+TJUNcyvXZPXHcYnic6GHMCWnzxZCZXM1gn6fz9lusO72/oNC75SuA6ycHhZ06EtubY8okhK6x9G4HyiEZzqX6IcHTLZRtLABv5jf1PWzXpinPMn7e3dmEOlDymvmRe5Tj7qkT5zVkZR2A2lnGzGbpaWbqiYYBXflFE1f5w/DG2g9sBYwDAVWq+Jun6jRkiUwZlympgLxsrj01vZ2Eh1+tO8LJByH5h7J0TQgcQIBZlNcFEp4/g==",
                "status": 1,
                "statusdesc": "2023-06-15 06:14:45",
                "demand_perfection": [],
                "created_at": 1686809574,
                "updated_at": 1686812615
            },
            "created_at": 1686813277,
            "updated_at": 1686813277
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
    "requestId": "25D2447741A2E3262AB22BF3600CD0DB"
}
```