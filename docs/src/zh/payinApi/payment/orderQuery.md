# 查询订单

## 功能简述

- 查询支付系统支付订单状态

## 查询订单 API

### 请求 URL

- `/orders/{ORDER_ID}`
  - `{ORDER_ID}`：您的支付 ID

### 请求 Method

- `order.detail`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

### 响应参数

响应参数如下：

- **Response Body**


| **参数**          | **类型** | **描述**                                                                                                                                                          | **示例**                                        |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| amount            | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                                                                                                                | 3.23                                            |
| tip               | number   | 订单小费                                                                                                                                                          | "10.02"                                         |
| taxAmount         | number   | 税费                                                                                                                                                              | "10"                                            |
| refundAmount      | number   | 发生退款的总金额                                                                                                                                                  | 0.99                                            |
| id                | string   | SGate 支付订单 ID，系统自动生成，全局唯一                                                                                                                         | "M000001T2022101023455774363043"                |
| clientId          | string   | 创建订单通过的 Client 的 ID                                                                                                                                       | "CLT0000001"                                    |
| merchantId        | string   | 订单所属商户 ID                                                                                                                                                   | "M000001"                                       |
| payLinkId         | string   | 支付链接 ID                                                                                                                                                       | "L549641839"                                    |
| products          | string   | 当前订单所购买的产品信息                                                                                                                                          |                                                 |
| customer          | string   | 客户、付款人、买家信息                                                                                                                                            |                                                 |
| logistics         | string   | 境内物流信息                                                                                                                                                      |                                                 |
| overseasLogistics | string   | 境外物流信息                                                                                                                                                      |                                                 |
| deliveryStatus    | string   | 投递状态： <br> pending：未发货 <br> shipping：海外已发货 <br> domesticInStock：境内待发货 <br> contacting：联系中 <br> delivering：投递中 <br> delivered：已签收 | "pending"                                       |
| afterSaleStatus   | string   | 售后状态： <br> none：无 <br> applying：申请售后 <br> returning：退货中 <br> returned：退货完成                                                                   | "none"                                          |
| status            | string   | 订单状态： <br> pending：商家创建订单 <br> paid：用户已支付 <br> closed：订单关闭, 超时的订单会自动关闭 <br> expired：订单过期                                    | "pending"                                       |
| ticket            | string   | 订单支付操作票据，引导付款人进行付款时，URL 必须包含此参数                                                                                                        | "Q6XU......Aw89"                                |
| name              | string   | 订单描述信息，商户创建订单时提交的参数                                                                                                                            | "购买面值 100 的游戏充值卡"                     |
| merchantOrderId   | string   | 商户支付订单 ID                                                                                                                                                   | "2022102218233400123"                           |
| notificationURL   | string   | 订单支付成功通知地址                                                                                                                                              |                                                 |
| needTax           | boolean  | 是否需要缴纳税费                                                                                                                                                  | false                                           |
| exchangeRate      | string   | 汇率                                                                                                                                                              | "15"                                            |
| currency          | string   | 货币类型货币种类，三位大写字母                                                                                                                                    | "SAR", "AED", "BHD", "EGP", "KWD", "OMR", "QAR" |
| paidAt            | string   | 支付时间                                                                                                                                                          |                                                 |
| closedAt          | string   | 订单关闭时间                                                                                                                                                      |                                                 |
| expiredAt         | string   | 订单过期时间，过期后订单不可以继续支付，建议设置为 30 分钟后，默认为 30 分钟                                                                                      | "2022-10-23T12:00:21.000Z"                      |
| message           | string   | 系统信息                                                                                                                                                          |                                                 |
| payerInfo         | string   | 付款人信息                                                                                                                                                        |                                                 |
| payLink           | string   | 付款链接信息                                                                                                                                                      |                                                 |
| refundStatus      | string   | 退款状态： <br> none：无退款 <br> fail：退款失败 <br> processing：退款处理中 <br> partial：部分退款 <br> full：全部退款                                           | "none"                                          |
| refundTimes       | number   | 发生退款的次数                                                                                                                                                    | 0                                               |
| invoiceId         | string   | 发票 ID                                                                                                                                                           |                                                 |
| createdAt         | string   | 订单创建时间                                                                                                                                                      | "2022-10-22T12:00:21.000Z"                      |
| updatedAt         | string   | 更新时间                                                                                                                                                          | "2022-12-31T12:53:17.000Z"                      |

**响应参数示例**

```json
{
  "amount": 12.02, // 订单金额
  "tip": 0.02, // 订单小费
  "taxAmount": 0, // 税费
  "refundAmount": 0, // 退款金额
  "id": "M448726T2022123112531745487632", // 支付订单ID
  "clientId": "CLT9208307", // ClientID
  "merchantId": "M448726", // 商户ID
  "payLinkId": "L298791901", // 支付链接ID
  "products": "[{\"name\":\"Slip On Classic Beige\",\"type\":\"unknown\",\"quantity\":1,\"price\":\"12.02\",\"sku\":\"xxxx-xxxx-xx\",\"productId\":\"160603886211111111111\",\"amount\":\"12.02\",\"avatar\":\"https://xxx\",\"location\":\"SA\"}]", // 当前订单所购买的产品信息
  "customer": "{\"nickname\":\"customerName\",\"email\":\"info@gmail.com\",\"mobile\":\"900000000\",\"address\":\"Tabuk,Umluj,Al Balad,1022 9th Avenue\"}", // 客户、付款人、买家信息
  "logistics": "{\"trackingURL\":\"https://xxx\",\"trackingNumber\":\"TEST123345234\"}", // 境内物流信息
  "overseasLogistics": "{\"trackingURL\":\"https://xxx\",\"trackingNumber\":\"TEST12678567\"}", // 境外物流信息
  "deliveryStatus": "pending", // 投递状态
  "afterSaleStatus": "none", // 缴纳状态
  "status": "pending", // 订单状态
  "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc", // 票据凭证，用于验证订单ID
  "name": "Order test for desc", // 订单描述
  "merchantOrderId": "TEST1672491207", // 商户端订单ID
  "notificationURL": null, // 回调地址
  "needTax": false, // 是否需要缴纳税费
  "exchangeRate": null, // 汇率
  "currency": "SAR", // 支付币种
  "paidAt": "None", // 支付时间
  "closedAt": null, // 订单关闭时间
  "expiredAt": "2023-01-15T20:53:27.000Z", // 过期时间
  "message": null,
  "payerInfo": "{\"name\":\"alfa\",\"phone\":\"19884636245\",\"address\":\"alfa\",\"email\":\"alfall@qq.com\"}", // 付款人信息
  "payLink": "{\"amount\":10,\"tipOptions\":[1,2,3],\"id\":\"L296776508\",\"name\":null,\"clientId\":\"CLT7740145\",\"amountType\":\"fixed\",\"currency\":\"SAR\",\"needContact\":true,\"includeAddress\":true,\"needTip\":true,\"tipRequired\":false,\"tipType\":\"percent\",\"creatorId\":\"U643029\",\"createdAt\":\"2023-03-01T14:14:00.000Z\",\"updatedAt\":\"2023-03-01T14:14:00.000Z\"}", // 支付链接信息
  "refundStatus": "none", // 退款状态
  "refundTimes": 0, // 发生退款的次数
  "invoiceId": null, // 发票ID
  "createdAt": "2022-12-31T12:53:17.000Z", // 生成时间
  "updatedAt": "2022-12-31T12:53:17.000Z" // 过期时间
}
```