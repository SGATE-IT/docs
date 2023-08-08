# 直接支付

**功能简述**

!> 只有使用卡支付方式的支付，才支持使用直接支付！

?> 接口返回里的 redirectURL 就是后续要引导用户浏览器去往的地址，用户验证支付完毕后会自动跳转回到前面请求指定的 returnURL

- 直接支付

**请求方式：POST**

**Method：**`order.startByDirectMastercard`

**URL：** `https://sandbox.sgate.sa/api_v1/orders/{ORDER_ID}/direct/payment/mastercard/transactions`

- `{ORDER_ID}`：您的支付 ID

**Request**

【直接支付】 的请求参数如下：

- **Header**

  - _查看公共参数_

- **Request Body**

| **参数**     | **类型** | **必填** | **描述**                 | **样例**            |
| ------------ | -------- | -------- | ------------------------ | ------------------- |
| cardNumber   | string   | 是       | 支付卡号                 | "51234500000000008" |
| expiryMonth  | string   | 是       | 过期月份                 | "3", "12"           |
| expiryYear   | string   | 是       | 过期年份                 | "26", "28"          |
| nameOnCard   | string   | 是       | 持卡人姓名               | "Bobo"              |
| securityCode | string   | 是       | 安全码                   | "125"               |
| feeId        | string   | 否       | 支付渠道 ID              | "F12341234"         |
| returnURL    | string   | 否       | 后续支付完毕跳回页面地址 | https://xxx         |

**Response**

【直接支付】 的响应参数如下：

- **Response Body**

| **参数**       | **类型** | **描述**                                                                                                                                                                                           | **样例**                                                             |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| id             | string   | SGate 支付交易 ID，系统自动生成，全局唯一                                                                                                                                                          | "M000001T2022101023455774363043_2"                                   |
| feeId          | string   | 支付渠道 ID                                                                                                                                                                                        | "F12341234"                                                          |
| orderId        | string   | 所属订单 ID                                                                                                                                                                                        | "M000001T2022101023455774363043"                                     |
| merchantId     | string   | 订单所属商户 ID                                                                                                                                                                                    | "M000001"                                                            |
| channelOrderId | string   | 渠道 ID                                                                                                                                                                                            | "TEST45723451235437"                                                 |
| amount         | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                                                                                                                                                 | 3.23                                                                 |
| currency       | string   | 货币类型货币种类，三位大写字母                                                                                                                                                                     | "SAR", "AED", "BHD", "EGP", "EUR", "GBP", "KWD", "OMR", "QAR", "USD" |
| paymentMethod  | string   | 支付方式： <br> stcpay <br> mastercard <br> applePay <br> tap                                                                                                                                      | "mastercard"                                                         |
| type           | string   | 支付类型： <br> payment：付款 <br> refund：退款                                                                                                                                                    | "payment"                                                            |
| result         | string   | 支付结果： <br> Approved：完成支付 <br> Declined_Retirable：被拒绝，不允许重试 <br> Declined_NoRetry：被拒绝，允许重试 <br> Not_Yet：还未操作 <br> Aborted：有新的支付交易，之前未完成的交易被取消 | "Not_Yet"                                                            |
| completedAt    | string   | 支付交易完成时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                           |
| createdAt      | string   | 支付交易创建时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                           |
| redirectURL    | string   | 完成支付的后续验证跳转地址                                                                                                                                                                         | https://xxx                                                          |

**相应报文样例**

```json
{
  "id": "M104563T20230804011028111111_1", // 支付ID
  "feeId": "F12341234", // 支付渠道ID
  "orderId": "M104563T202308040110111111", // 所属订单ID
  "merchantId": "M104563", // 订单所属商户ID
  "channelOrderId": "TEST45723451235437",
  "amount": 11.5, // 订单金额
  "currency": "SAR", // 货币类型
  "paymentMethod": "mastercard", // 支付方式
  "type": "payment", // 支付类型
  "result": "Not_Yet", // 支付结果
  "completedAt": null, // 支付交易完成时间
  "createdAt": "2023-08-03T22:15:35.227Z", // 支付交易创建时间
  "redirectURL": "https://gateway.sgate.sa/direct/mastercard?orderId=M104563T20230804011028111111&transactionId=M104563T20230804011028111111_1&ticket=xxxxxxxxxxxxxxxxxxxx"
}
```
