### 通过GCCPAY提供的收银台链接创建订单

**功能简述**

- 通过支付系统创建支付订单后，使用GCCPAY提供的收银台界面进行收款

**时序图**

![img](../_media/create-order.svg)

**请求方式：POST**

**URL：**`/merchants/%YOUR_MERCHANT_ID%/orders`

- %YOUR_MERCHANT_ID%：您的商户ID
  - 例如您的商户 ID 是 M00001，则URL为：https://sandbox.gcc-pay.com/api_v1/merchants/M00001/orders

**Request**

【创建支付订单】 的请求参数如下：

- **Header**

  -  *查看公共请求参数。*

- **Request Body**

    |                 | **类型** | **必填** | **描述**                                                     | **样例**                                            |
    | --------------- | -------- | -------- | ------------------------------------------------------------ | --------------------------------------------------- |
    | merchantOrderId | string   | 是       | 商户支付订单ID，不能重复，确保唯一                           | "2022102218233400123"                               |
    | amount          | string   | 是       | 订单金额，浮点数字符串，小数点后最多两位                     | "1.35", "99.10", "127"                              |
    | currency        | string   | 是       | 货币种类，三位大写字母                                       | "SAR",  "AED", "BHD",  "EGP",   "KWD", "OMR", "QAR" |
    | name            | string   | 是       | 订单描述信息，便于后期查看和对账                             | "购买面值100的游戏充值卡"                           |
    | notificationURL | string   | 否       | 订单支付成功通知地址                                         |                                                     |
    | expiredAt       | string   | 否       | 订单过期时间，过期后订单不可以继续支付，建议设置为 30 分钟后，默认为 15 天后 | "2022-10-23T12:00:21.000Z"                          |

- **代码样例**

```json
{
    "merchantOrderId": "TEST1672491207",
    "amount": 12.02,
    "currency": "SAR",
    "name": "Order test for desc",
    "notificationURL": "",
    "expiredAt": "2023-01-15T20:53:27.000Z"
}
```

**Response**

【创建支付订单】 的响应参数如下：

- **Response Body**

| **参数**        | **类型** | **描述**                                                     | **样例**                                                     |
| --------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id              | string   | 支付订单号                                                   | "M448726T2022123112531745487632"                             |
| clientId        | string   | 客户端ID                                                     | "CLT9208307"                                                 |
| merchantId      | string   | 商户ID                                                       | "M448726"                                                    |
| status          | string   | 订单状态pending：GCCPAY支付系统已创建支付订单，但渠道方暂未创建订单doing：GCCPAY支付系统和渠道订单均已创建完成，但是用户未支付paid：用户已支付成功closed：订单关闭error：订单出现错误locked：锁单expired：订单过期 | "pending"                                                    |
| ticket          | string   | 票据凭证，用于验证订单ID                                     | "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc" |
| name            | string   | 订单描述                                                     |                                                              |
| merchantOrderId | string   | 商户端订单ID                                                 | "TEST1672491207"                                             |
| notificationURL | string   | 回调地址                                                     |                                                              |
| amount          | float    | 支付金额                                                     | "12.02"                                                      |
| tip             | number   | 支付小费                                                     |                                                              |
| currency        | string   | 支付币种                                                     | "SAR"                                                        |
| expiredAt       | string   | 订单过期时间                                                 | "2023-01-15T20:53:27.000Z"                                   |
| createAt        | string   | 订单生成时间                                                 | "2022-12-31T12:53:17.454Z"                                   |
| refundAmount    | float    | 退款金额                                                     | "0"                                                          |

- **代码样例**

```json
{
    "id": "M448726T2022123112531745487632",                ### 支付订单ID,orderId
    "clientId": "CLT9208307",        ### ClientID
    "merchantId": "M448726",        ### 商户ID
    "status": "pending",        ### 订单状态
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",        ### 票据凭证，用于验证订单ID
    "name": "Order test for desc",        ### 订单描述
    "merchantOrderId": "TEST1672491207",                ### 商户端订单ID
    "notificationURL": "",        ### 回调地址
    "amount": 12.02,        ### 支付金额
    "currency": "SAR",        ### 支付币种
    "tip": 0,        ### 支付小费
    "expiredAt": "2023-01-15T20:53:27.000Z",        ### 订单过期时间
    "createdAt": "2022-12-31T12:53:17.454Z",        ### 订单生成时间
    "refundAmount": 0         ### 退款金额
}
```

**付款链接规则**

- 标准收银台付款链接URL：`https://sandbox.gcc-pay.com/``?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}`
- 指定具体支付方式收银台链接URL：
  - 卡支付：`https://sandbox.gcc-pay.com/``mastercard/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - STCPAY支付：`https://sandbox.gcc-pay.com/``stcpay/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - APPLE PAY支付： `https://sandbox.gcc-pay.com/``applePay/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - 指定非SAR币种支付：`https://sandbox.gcc-pay.com/``tap/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
- 参数说明：
  - orderId：创建订单后返回的订单ID
  - orderTicket：创建订单后的返回的TICKET
  - returnURL： 支付完成后返回的页面地址，RETURN_URL需要进行URLencode
  - language：收银台页面默认语言，可选EN（英语），AR（阿拉伯语）
  - lockPayMethod：可选项，如果该参数的值为yes，则在收银台界面只展示指定的支付方式