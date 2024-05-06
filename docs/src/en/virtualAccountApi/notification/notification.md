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
    "event":"RECEIVING_TRANS_NOTIFICATION",
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

The callback request will add the system specified request [header](/en/virtualAccountApi/apiRule/header) information, and the callback data will be signed using the **system private key**. The [signature rules](/en/virtualAccountApi/apiRule/sign) are consistent with the way the request interface is used.

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

* `api_key`：Merchant API KEY
* `timestamp`：The second level timestamp at the time the request was initiated.
* `nonce_str`：Randomly generate a string.
* `url`：Remove notification address URL information from HOST.
* `method`：`POST`
* `body`：Callback data JSON.

## Event: Virtual Account Receipt Notification

**Event Identifier**: `RECEIVING_TRANS_NOTIFICATION`

This event will be triggered after the virtual account transfer is received.

The response data is the payment transaction. The data structure is consistent with the **Query Receiving Trans List** interface, example:

```json
{
    "event": "RECEIVING_TRANS_NOTIFICATION",
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