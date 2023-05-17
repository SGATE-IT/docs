# Query Payment Order

**Summery**

- Query the order status in the payment system.

**HTTP request type：GET**

**URL：**`/orders/%ORDER_ID%`

- %ORDER_ID%：The order ID which you want to query

**Response**

【Query payment order】response as follows:

- **Response Body**

| **Parameters**  | **Type** | **Describe**                                                 | **Example**                                                  |
| --------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id              | string   | The payment order ID                                         | "M000001T2022101023455774363043"                             |
| clientId        | string   | The client ID which created the payment                      | "CLT0000001"                                                 |
| merchantId      | string   | The merchant ID to which the payment belong                  | "M000001"                                                    |
| status          | string   | Payment order status                                         | "pending"                                                    |
| ticket          | string   | This is the payment order operation evidence, the URL must contain this parameter when guiding the payer to pay | "Q6XUD1tntwB0QASXzrZesapHEXBXEUMkiOs5KqLpySxwYtUfr8TkNNNmMyrFAw89" |
| name            | string   | Payment order describe                                       | "Buy a game recharge card with a face value 100"             |
| channelOrderId  | string   | Channel ID                                                   |                                                              |
| merchantOrderId | string   | The merchant payment order ID                                | "2022102218233400123"                                        |
| notificationURL | string   | Address for successful order payment notification            |                                                              |
| amount          | number   | The order amount. Up to 2 decimal                            | 3.23                                                         |
| currency        | string   | The currency type. 3 capital letters                         | "SAR",  "AED", "BHD",  "EGP", "KWD", "OMR", "QAR"            |
| expiredAt       | string   | The order expires. After the expiration, the order can not be paid.It is recommended to set it to 30 min later, and the default time is 15 days. | "2022-10-23T12:00:21.000Z"                                   |
| refundTimes     | number   | Times of refunds                                             | 0                                                            |
| refundAmount    | number   | Total refund amout                                           | 0.99                                                         |
| message         | string   | The system message                                           |                                                              |
| createdAt       | string   | Payment order creates time                                   | "2022-10-22T12:00:21.000Z"                                   |
| updatedAt       | string   | Update date                                                  | "2022-12-31T12:53:17.000Z"                                   |
| paidAt          | string   | Payment date                                                 |                                                              |
| payLinkId       | string   | Pay link ID                                                  | "L549641839"                                                 |
| tip             | number   | The tip in order                                             | "10.02"                                                      |
| payerInfo       | string   | Payer information                                            | Please refer to the response demo for details                |
| payLink         | string   | Pay link information                                         | Please refer to the response demo for details                |

- **Response demo**

```json
{
    "amount": 12.02,        ### Order amount
    "tip": 0.02,            ### Order tips
    "refundAmount": 0,        ### Refund amount
    "id": "M448726T2022123112531745487632",        ### Payment order ID
    "clientId": "CLT9208307",        ### ClientID
    "merchantId": "M448726",        ### Merchant ID
    "payLinkId": "L298791901",        ### payID 
    "status": "pending",        ### Order status
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",        ### Bill voucher, used to verify order ID
    "name": "Order test for desc",        ### Order description
    "merchantOrderId": "TEST1672491207",        ### Order ID in merchant
    "channelOrderId": null,               ### Channel ID     
    "notificationURL": " ",        ### Callback address
    "currency": "SAR",        ### Payment currency
    "paidAt": "None",        ### Payment date
    "expiredAt": "2023-01-15T20:53:27.000Z",        ### Expired date
    "message": null,
    "payerInfo": "{\"name\":\"alfa\",\"phone\":\"19884636245\",\"address\":\"alfa\",\"email\":\"alfall@qq.com\"}",        ### Payer information
    "payLink": "{\"amount\":10,\"tipOptions\":[1,2,3],\"id\":\"L296776508\",\"name\":null,\"clientId\":\"CLT7740145\",\"amountType\":\"fixed\",\"currency\":\"SAR\",\"needContact\":true,\"includeAddress\":true,\"needTip\":true,\"tipRequired\":false,\"tipType\":\"percent\",\"creatorId\":\"U643029\",\"createdAt\":\"2023-03-01T14:14:00.000Z\",\"updatedAt\":\"2023-03-01T14:14:00.000Z\"}",        ### Payment link information
    "refundTimes": "None",        ### Refund date
    "createdAt": "2022-12-31T12:53:17.000Z",        ### Create date
    "updatedAt": "2022-12-31T12:53:17.000Z"                ### Update date
}
```