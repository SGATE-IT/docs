# 查询退款订单

**功能简述**

- 查询退款订单

**请求方式：GET**

**Method：**`refund.detail`

**URL：** `/refunds/{REFUND_ID}`

- `{REFUND_ID}`：您的退款单 ID

**Request**

【查询退款订单】 的请求参数如下：

- **Header**

  - _查看公共参数_

**Response**

【查询退款订单】的响应参数如下：

- **Response Body**

| **参数**            | **类型** | **描述**                                                                   | **样例**                                        |
| ------------------- | -------- | -------------------------------------------------------------------------- | ----------------------------------------------- |
| amount              | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                         | 3.23                                            |
| id                  | string   | 退单 ID，全局唯一                                                          | "M948164T2023072607034709567189_R1"             |
| merchantId          | string   | 商户 ID                                                                    | "M948164"                                       |
| orderId             | string   | 所属订单 ID                                                                | "M948164T2023072607034709567189"                |
| merchantRefundId    | string   | 商户退款单 ID                                                              | "TEST934759263495634"                           |
| refundTransactionId | string   | 退款操作交易 ID                                                            | "M948164T2023072607034709567189_2"              |
| originTransactionId | string   | 订单交易 ID                                                                | "M948164T2023072607034709567189_1"              |
| paymentMethod       | string   | 支付方式： <br> stcpay <br> mastercard <br> applePay <br> tap              | "mastercard"                                    |
| status              | string   | 退款状态： <br> pending：退款中 <br> success：退款完成 <br> fail：退款失败 | "pending"                                       |
| currency            | string   | 货币类型货币种类，三位大写字母                                             | "SAR", "AED", "BHD", "EGP", "KWD", "OMR", "QAR" |
| reason              | string   | 退款原因                                                                   | 退运费                                          |
| finishedAt          | string   | 退款完成时间                                                               | "2023-07-27T11:38:11.000Z"                      |
| createdAt           | string   | 创建时间                                                               | "2023-07-26T04:06:33.227Z"                      |
| updatedAt           | string   | 更新时间                                                                   | "2023-07-26T04:06:33.227Z"                      |

- **代码样例**

```json
{
  "amount": 7, // 订单金额
  "id": "M948164T2023072607034709567189_R1", // 退单 ID
  "merchantId": "M948164", // 商户 ID
  "orderId": "M948164T2023072607034709567189", // 所属订单 ID
  "merchantRefundId": "TEST456345768345", // 商户退款单 ID
  "refundTransactionId": "M948164T2023072607034709567189_2", // 退款操作交易 ID
  "originTransactionId": "M948164T2023072607034709567189_1", // 订单交易 ID 
  "paymentMethod": "mastercard", // 支付方式
  "status": "success", // 退款状态
  "currency": "SAR", // 货币类型
  "reason": null,  // 退款原因
  "finishedAt": "2023-07-27T11:38:11.000Z", // 退款完成时间
  "createdAt": "2023-07-26T04:06:33.000Z", // 创建时间
  "updatedAt": "2023-07-27T11:38:11.000Z" // 更新时间
}
```
