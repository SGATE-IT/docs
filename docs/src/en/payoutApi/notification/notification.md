# Callback Notification

In specific scenarios, events will be triggered for callback notifications. The callback address is the callback address submitted by the merchant to the system. If the merchant does not configure a callback address, no notification will be given.

::: danger 
The total number of notifications for a single event is 5. When the HTTP status code for the callback address response is not 200, it will wait for 5 seconds and then retry the notification. After 5 retries, the notification will not be sent again.
:::

## Notification Method

The system uses a `POST` request method to request the merchant's callback address.

The callback data is reported in ` Raw JSON ` format in the` body`.

### Callback Data Format

```json
{
    "event":"CUSTOM_STATUS_CHANGE",
    "data":{
        // Different events have different response data
    },
    "time":1686832475
}
```

| **Parameter** | **Type** | **Description**                        |
| ------------- | -------- | -------------------------------------- |
| event         | string   | Event identifier                       |
| data          | array    | Event data, based on changes in events |
| time          | number   | Event time, second level timestamp     |

### Callback Data Signature

The callback request will add the system specified request [header](/en/payoutApi/apiRule/header) information, and the callback data will be signed using the **system private key**. The [signature rules](/en/payoutApi/apiRule/sign) are consistent with the way the request interface is used.

Request header data example：

```json
{
    "V-Timestamp":1686831994,
    "V-Signature":"jkECqHHhr0DxyM7mp\/I\/7n56OwoMvp4aPTvODQNfVScqOORG2UIQrMcr6F4MnjM+Zh++UFHLERXAKQSuozi4fAnqxA9iC0c9QUqYqluUQ4LVV0Ql6fgoqvRhU3i4EZrrXa7neaQW06hqbDGOt2VPX\/\/MxHJbickvTZooOkoqdekyc22XXFQpoEOm5NQFoZP\/HflAZSTSIiOdx4YGhGs65NGy8gMkdnUFJhtrzjKVefVMX9GchN\/l3Oq35vNnbjTC6Ce9NDbiu3aKfOswjX\/u8l0\/hcbsxpAZabbo+\/ZNwXMftL6a7gxnysO0P9pypJatNViTY4z1Vt2hUEOgjpJyjw==",
    "V-Nonce-Str":"i7yCJYTbSaBj32th",
    "V-Api-Version":1,
    "V-Api-Key":"xxxxxxxxxxxxxxxxxxx"
}
```

Signature construction data description：

* `api_key`：Merchant’s API KEY
* `timestamp`：The second level timestamp at the time the request was initiated.
* `nonce_str`：Randomly generate a string.
* `url`：Remove notification address URL information from HOST.
* `method`：`POST`
* `body`：Callback data JSON.

## Event: Customer Status Change

**Event Identifier**: `CUSTOM_STATUS_CHANGE`

After creating a customer, this event is triggered when the customer's subsequent status changes.

The response data is customer information after changing status.

The response data is the customer information after the changed status. The customer data structure is consistent with the **Query Customer Details** interface, example:

```json
{
    "event":"CUSTOM_STATUS_CHANGE",
    "data":{
        "customid":"124f8",
        "mercustomid":"",
        "name_e":"updTest2",
        "name_a":"test1a",
        "identity":"iE86CxKwnRt4B1+msYXD90MYMplDXJ1VnsEEc8X/A46PJciuLctA4kE7YrIuOJLzHC4e4SFYVtJ45fBkGsTs4UdhUu9ridfWIAyQ556zi6dIOPPjNMkCe2mNWK/Cpah5/2w2ZtDg0zqbx4mEJrowVg77RbzlFBcXYN+jQIhla9i7WtGTf4U4Kb15CwMFiOUu4IMxVuMkycubWOLh05/eMY/0Kwd49L8PvWJBJM9xVQvq+elK0u8EteQDi5UDnakGyjx5P/9m+UzzkpcahsE0HD73k7TLowf2B3rQDzFXnT5CuKtqmNwh1oNXae8jPOUxYc1TMfHStplL1YbHCyhnig==",
        "identitypic":"o7v9h/NA4F1fCVEuZyJ3oNw6O8+vsGtEsjKDthAE1JtBy9TKzucO+L29waWHTeRkE4nRUvN6OJiCAkf+h+KJWJ2PI+YROoZjQvIRioBIoFxnIpMIbQyNbUgxFJlSrUK1cnGuxu7+juIkNYzxwfIsRzkvc9g7pp7xkmj04AQZ8KyMukV0HOGFlRxNex5+k36zmq/aAuOsOGr7PByRCRE76RiFrs6K1X/rQFjqSm9rI4d+QlpgLEDNv55i/5rqH++yglubHnYRuqCjka9N9+dOOh9kEpA9MepKrLuyodBvE3QDzT1kAMaLX+sdAh7F8vH/675hkZ1NNhx3OlkXk79hxw==",
        "signpic":"",
        "bankname":"Riyad Bank",
        "bankcode":"1174c",
        "cardno":"JmR+tT1mwXOiQTCTD2XFXzQixvudMGwNu0kmqgFAKC+Kqm9lsWCDNYeSKKRXfPHN9xXGUCM7TsoW7OyoueCG48ZvwC9WET8AGfY3EF2Ls+JsTei3xR5Bzm5Wi+Mb4fAQCMHxb03WNS3d1TNK9tcNRZ/bQ6uCf8Wq8PQw48xpe0zFpEbDJM5HUe3ycI9jntos5Id7jq4j4Y3yCrmroJ9xXRXvJfUW2qJKrx7HNs3PXxqJysowEqkggviXASIdNLluU695gX9sAMB4LwdpExxwVQVcXTxsPu+nltKkZT10Hdr61XG7i54efQkRXkfyEalE+mhoLwFSF/MqotjDtEn0Tw==",
        "ibanaccount":"SDF234354456",
        "stcaccount":"AueZQEoMOmEBgTCbUYv2Hwxoy1smLpq1c5mBeSL0lAhW1oxPGyNTk7+g4BYKL/cqIyupymoAMkk/oq6ewhoaAGz9qfmF/TXpAmYzxgUGkIXjx1/hXElvKRHYAwzzMm7pBa41k27BC0K1bgnFoMjaGjekEsjJ/rvEVLHXlOujxsy0PWZiefS6Fu69N5A8V2AU+9nVkuqpnXEt8pozEIYG+u9YEFaCV/N2v2qlKq5qCeJ/PbZSfeKhvzqOxTX7A4YBDKnswl2Wv4hYU05Sl4kQnWwuIN5pbB9q5vccdXIeViip3VnZoHbau8OvT3geBHPDwGsw87fkF8fQqexg7PryBg==",
        "status":0,
        "statusdesc":"2023-06-15 12:34:35",
        "demand_perfection":[

        ],
        "created_at":1681295160,
        "updated_at":1686832475
    },
    "time":1686832475
}
```

## Event: Change In Status Of Payment Order

**Event Identifier**: `SALARY_STATUS_CHANGE`

After creating a payment order, this event is triggered when the subsequent status of the payment order changes.

The response data is the payment order information after the status changes.

The response data is the payment order information after the status change. The data structure is consistent with the **Query Payment Order Detail** interface, example:

```json
{
    "event":"SALARY_STATUS_CHANGE",
    "data":{
        "ticketid":"12381",
        "customid":"119bd",
        "mercustomid":"dbn001",
        "payeeuid":"PPP123127",
        "currency":"SAR",
        "paymentmethod":"STCPay",
        "amount":1600,
        "realamount":1520,
        "fee":80,
        "status":2,
        "statusdesc":"2023-06-20 04:04:31",
        "confirmtime":0,
        "custominfo":{
            "customid":"119bd",
            "mercustomid":"dbn001",
            "name_e":"dbn001eupd1",
            "name_a":"dbn001a",
            "identity":"iZHmTnEt8LgXPTzsAB2CNWK79LOFtUMBi4BGfy+avx9aaEuEH2E7M/SpY+NvhqJiEjFgPliYsDBteLS/xoqmO6VscaXN4R0kgiZrewepg2byrq6a3L0dfpJ33RfrSym7bFqzDt4rv2o7S48ZWFHH4ensrA0jn0EEP7dFVTvLAHLqmwU75ZX9BxDI0x8CKL5Vgr7lW+zkLs/t3j3gH10/A+1l9seDxF//7CsxvZ3S4yJyXD/mYajLRV10ur9crNyxwDkXjc6l+1cb4pAXvOiGNP6LNgAz18W7qcnLAvp0YdjIjkmEbI0aLzwvNHb3kYgCrt8t0D5lx8yPWUxP3/Qc4w==",
            "identitypic":"Sjt+0Afwyq8SUDilSCJKHuzBAjtiLEUWUXObec/sNmtib4yRf0gB/p3x1qwArCS1w4PjNmaLK1eep2/z0de7P1TzopO1IJ+VSJFUn/WBgZGdLJj5J+MZZJG9w3B/1Vk/L0q0OqF0tuQhhDNeL33lHMeoSV5JCzaXcaHfYGgEeyGA4NVjwYKQqjPFrctQIcmdXEdM0gnMGyudaW4gaEcTfFbaZm6lJW924+dqhiXGaCU4pHmiW+nSpiDKvG0rJwkiWeDP7QNCnoYgeDJStqP+nYBi73alWDWq6O0KRCWag79XLdK88XXXwaUb7glJTVhIIvbwWL8IuV9eqYpAATYUng==",
            "signpic":"",
            "bankname":"Riyad Bank",
            "bankcode":"1174c",
            "cardno":"BSTmd+lmtJOK3Y3IV9lZIOgnZ+zObv9T03eKvvhFAHObUHUovDwhcmxLWaT7tFId0D24crPblm9iACIePrgVOjABTZty5Jgjwa2cuQSrS0to3MO6RLB+2bNwyblrT/Cid0Y+RQjAfcL9tJsfI6QdzOeToejltk+rpZ+L0DQqq2vLUoC8pZcNYxaillur2V+6SyeubcgP0OseRJx+2w72SqTMkhmlO0CUXjqR7hMohUdyRJXo5g4jv2DRwon5eIt4NAL1P4DFbWjw5eiUi+4EiRcBRQVr85OJj7LnQ+9Nn3I1o8O8YTXiDa2W6yQn5+9aB+EJ1FxDjF+ZR0z9h8KvkQ==",
            "ibanaccount":"123456789",
            "stcaccount":"KjPJhusxCMXytxNc8FlorfIysY85RaZl1C1HV/qPrVsnASVXDyupZDZqIvSv9MH4a4c0iyWBXlnFSUN+GvTKsOagQKoXxWKx84oPcnuVEZMrk+h+8bC4etzZ+D+5SgbyUOFAWZUgI6hNw4AxM4KgQEm3xp7ytPPkQGHm619e1zHETECbjEkaehND5wNT6AZ61iC7sHIKH7hVrmQSbWMDuUCR3BLo7p01A7lAgRfiQZMfDyqSuBlwybhXJzdFSlfzTay58xGCSd0GLuz8WQYfSaDJLXVluTYguk4ftdcdBwMRlDfBX6rsIdoLw+1Udh6WPDXKr89pCPCW8FHPrhT4Vg==",
            "status":1,
            "statusdesc":"ok",
            "demand_perfection":[

            ],
            "created_at":1687170362,
            "updated_at":1687171990
        },
        "created_at":1687233871,
        "updated_at":1687233906
    },
    "time":1687233906
}
```

## Event: Offline Transfer Notification

**Event Identifier**: `OFFLINE_TRANSFER_NOTIFICATION`

After offline payment, this event will be triggered after the bank accepts it.

The response data is offline payment data. The data structure is consistent with the **Query Offline Transfer List** interface, example:

```json
{
    "event": "OFFLINE_TRANSFER_NOTIFICATION",
    "data": {
        "uuid": "0FE4B054-A1FE-11ED-9A3D-F23C925C00BC",
        "transactiontime": "2023-01-29 01:56:13",
        "account": "SA9080000000000000000000",
        "amount": 50,
        "currency": "OMR",
        "exchangeinfo": {
            "custname": "Trust Gate",
            "custacc": "SA9080000000000000000000",
            "bankbic": "RJHISARI",
            "channelreference": "2024042500060801002869000004",
            "paymentremarks": "B2B/FRACCT/SA9080000000000000000000/Trust Gate/B2B"
        }
    },
    "time": 1714448388
}
```