# 查询支付订单

**功能简述**

- 查询支付系统支付订单状态

**请求方式：GET**

**URL：** `/orders/%ORDER_ID%`

- %ORDER_ID%：您的支付ID

**Response**

【查询支付订单】 的响应参数如下：

- **Response Body**

| **参数**        | **类型** | **描述**                                                     | **样例**                                                     |
| --------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id              | string   | GCCPAY 支付订单ID，系统自动生成，全局唯一                    | "M000001T2022101023455774363043"                             |
| clientId        | string   | 创建订单通过的 Client 的 ID                                  | "CLT0000001"                                                 |
| merchantId      | string   | 订单所属商户 ID                                              | "M000001"                                                    |
| status          | string   | 订单状态                                                     | "pending"                                                    |
| ticket          | string   | 订单支付操作票据，引导付款人进行付款时，URL必须包含此参数    | "Q6XUD1tntwB0QASXzrZesapHEXBXEUMkiOs5KqLpySxwYtUfr8TkNNNmMyrFAw89" |
| name            | string   | 订单描述信息，商户创建订单时提交的参数                       | "购买面值100的游戏充值卡"                                    |
| channelOrderId  | string   | 渠道ID                                                       |                                                              |
| merchantOrderId | string   | 商户支付订单 ID                                              | "2022102218233400123"                                        |
| notificationURL | string   | 订单支付成功通知地址                                         |                                                              |
| amount          | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数           | 3.23                                                         |
| currency        | string   | 货币类型货币种类，三位大写字母                               | "SAR",  "AED", "BHD",  "EGP",   "KWD", "OMR", "QAR"          |
| expiredAt       | string   | 订单过期时间，过期后订单不可以继续支付，建议设置为 30 分钟后，默认为 15 天后 | "2022-10-23T12:00:21.000Z"                                   |
| refundTimes     | number   | 发生退款的次数                                               | 0                                                            |
| refundAmount    | number   | 发生退款的总金额                                             | 0.99                                                         |
| message         | string   | 系统信息                                                     |                                                              |
| createdAt       | string   | 订单创建时间                                                 | "2022-10-22T12:00:21.000Z"                                   |
| updatedAt       | string   | 更新时间                                                     | "2022-12-31T12:53:17.000Z"                                   |
| paidAt          | string   | 支付时间                                                     |                                                              |
| payLinkId       | string   | 支付链接ID                                                   | "L549641839"                                                 |
| tip             | number   | 订单小费                                                     | "10.02"                                                      |
| payerInfo       | string   | 付款人信息                                                   | 具体请参照代码样例                                           |
| payLink         | string   | 付款链接信息                                                 | 具体请参照代码样例                                           |

- **代码样例**

```json
{
    "amount": 12.02,        ### 订单金额
    "tip": 0.02,            ### 订单小费
    "refundAmount": 0,        ### 退款金额
    "id": "M448726T2022123112531745487632",        ### 支付订单ID
    "clientId": "CLT9208307",        ### ClientID
    "merchantId": "M448726",        ### 商户ID
    "payLinkId": "L298791901",        ### 支付链接ID 
    "status": "pending",        ### 订单状态
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",        ### 票据凭证，用于验证订单ID
    "name": "Order test for desc",        ### 订单描述
    "merchantOrderId": "TEST1672491207",        ### 商户端订单ID
    "channelOrderId": null,        ### 支付渠道ID 
    "notificationURL": " ",        ### 回调地址
    "currency": "SAR",        ### 支付币种
    "paidAt": "None",        ### 支付时间
    "expiredAt": "2023-01-15T20:53:27.000Z",        ### 过期时间
    "message": null,
    "payerInfo": "{\"name\":\"alfa\",\"phone\":\"19884636245\",\"address\":\"alfa\",\"email\":\"alfall@qq.com\"}",        ### 付款人信息
    "payLink": "{\"amount\":10,\"tipOptions\":[1,2,3],\"id\":\"L296776508\",\"name\":null,\"clientId\":\"CLT7740145\",\"amountType\":\"fixed\",\"currency\":\"SAR\",\"needContact\":true,\"includeAddress\":true,\"needTip\":true,\"tipRequired\":false,\"tipType\":\"percent\",\"creatorId\":\"U643029\",\"createdAt\":\"2023-03-01T14:14:00.000Z\",\"updatedAt\":\"2023-03-01T14:14:00.000Z\"}",        ### 支付链接信息
    "refundTimes": "None",        ### 退款时间
    "createdAt": "2022-12-31T12:53:17.000Z",        ### 生成时间
    "updatedAt": "2022-12-31T12:53:17.000Z"                ### 过期时间
}
```