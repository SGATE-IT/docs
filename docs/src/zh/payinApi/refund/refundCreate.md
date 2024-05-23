# 发起退款

## 功能简述

- 发起订单退款

## 流程说明

![img](/images/payinApi_zh/refund.png)

## 发起退款 API

### 请求 URL

- `/orders/{ORDER_ID}/refunds`
  - `{ORDER_ID}`：您的支付 ID

### 请求 Method

- `order.refund`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

- **Request Body**

| **参数**         | **类型** | **必填** | **描述**                                 | **示例**               |
| ---------------- | -------- | -------- | ---------------------------------------- | ---------------------- |
| amount           | string   | 是       | 订单金额，浮点数字符串，小数点后最多两位 | "1.35", "99.10", "127" |
| reason           | string   | 是       | 退款原因                                 | 退运费                 |
| merchantRefundId | string   | 否       | 商户退款单 ID                            | "TEST934759263495634"  |

### 响应参数

响应参数如下：

- **Response Body**

| **参数**            | **类型** | **描述**                                                                   | **样例**                                           |
| ------------------- | -------- | -------------------------------------------------------------------------- | -------------------------------------------------- |
| amount              | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                         | 3.23                                               |
| status              | string   | 退款状态： <br> pending：退款中 <br> success：退款完成 <br> fail：退款失败 | "pending"                                          |
| id                  | string   | 退单 ID，全局唯一                                                          | "M948164T2023072607034709567189_R1"                |
| orderId             | string   | 所属订单 ID                                                                | "M948164T2023072607034709567189"                   |
| paymentMethod       | string   | 支付方式： <br> stcpay <br> mastercard <br> applePay <br> tap              | "mastercard"                                       |
| merchantRefundId    | string   | 商户退款单 ID                                                              | "TEST934759263495634"                              |
| merchantId          | string   | 商户 ID                                                                    | "M948164"                                          |
| originTransactionId | string   | 订单交易 ID                                                                | "M948164T2023072607034709567189_1"                 |
| currency            | string   | 货币类型货币种类，三位大写字母                                             | "SAR"<br>"KWD"<br>"BHD"<br>"AED"<br>"OMR"<br>"QAR" |
| createdAt           | string   | 创建时间                                                                   | "2023-07-26T04:06:33.227Z"                         |
| updatedAt           | string   | 更新时间                                                                   | "2023-07-26T04:06:33.227Z"                         |

**响应参数示例**

```json
{
  "amount": 7, // 订单金额
  "status": "pending", // 退款状态
  "id": "M948164T2023072607034709567189_R1", // 退单 ID
  "orderId": "M948164T2023072607034709567189", // 所属订单 ID
  "paymentMethod": "mastercard", // 支付方式
  "merchantRefundId": "TEST934759263495634", // 商户退款单 ID
  "merchantId": "M948164", // 商户 ID
  "originTransactionId": "M948164T2023072607034709567189_1", // 订单交易 ID
  "currency": "SAR", // 货币类型
  "updatedAt": "2023-07-26T04:06:33.227Z", // 创建时间
  "createdAt": "2023-07-26T04:06:33.227Z" // 更新时间
}
```