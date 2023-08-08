### 通过 SGate 的收银台链接创建订单

**功能简述**

- 通过支付系统创建支付订单后，使用 SGate 提供的收银台界面进行收款

**时序图**

![img](../_media/create-order.svg)

**请求方式：POST**

**Method：**`merchant.addOrder`

**URL：**`/merchants/{YOUR_MERCHANT_ID}/orders`

- `{YOUR_MERCHANT_ID}`：您的商户 ID
  - 例如您的商户 ID 是 M00001，则 URL 为：https://sandbox.sgate.sa/api_v1/merchants/M00001/orders

**Request**

【创建支付订单】 的请求参数如下：

- **Header**

  - _查看公共参数_

- **Request Body**

| **参数**                                                | **类型**        | **必填** | **描述**                                                                        | **样例**                                                              |
| ------------------------------------------------------- | --------------- | -------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| merchantOrderId                                         | string          | 是       | 商户支付订单 ID，不能重复，确保唯一                                             | "2022102218233400123"                                                 |
| amount                                                  | string          | 是       | 订单金额，浮点数字符串，小数点后最多两位                                        | "1.35", "99.10", "127"                                                |
| currency                                                | string          | 是       | 货币种类，三位大写字母                                                          | "SAR", "AED", "BHD", "EGP", "EUR", "GBP", "KWD", "OMR", "QAR", "USD", |
| name                                                    | string          | 是       | 订单描述信息，便于后期查看和对账                                                | "购买面值 100 的游戏充值卡"                                           |
| notificationURL                                         | string          | 否       | 订单支付成功通知地址                                                            | https://xxxx                                                          |
| expiredAt                                               | string          | 否       | 订单过期时间，过期后订单不可以继续支付，建议设置为 30 分钟后，默认为 30 分钟    | "2022-10-23T12:00:21.000Z"                                            |
| referenceURL                                            | string          | 否       | 来源 URL                                                                        | https://xxxx                                                          |
| customer                                                | object          | 否       | 客户、付款人、买家信息                                                          |                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.nickname               | string          | 是       | 客户昵称                                                                        | "customerName"                                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.mobile                 | string          | 是       | 客户手机号码                                                                    | "900000000"                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.address                | string          | 是       | 客户物流地址                                                                    | "SA"                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.email                  | string          | 否       | 客户 email                                                                      | "info@gmail.com"                                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.uuid                   | string          | 否       | 客户在商户系统的唯一 ID                                                         | "89f2f444-cf93-435f-bbdd-ebdef591b6b5"                                |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.level                  | string          | 否       | 客户等级                                                                        | "vip"                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.registeredAt           | string          | 否       | 客户在商户系统注册时间                                                          | "2022-10-23T12:00:21.000Z"                                            |
| products                                                | array\<object\> | 否       | 当前订单所购买的产品信息                                                        |                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].name                | string          | 是       | 产品名称                                                                        | "Test"                                                                |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].type                | string          | 是       | 产品类型：<br> digital：虚拟产品 <br> physical：实物产品 <br> unknown：未知产品 | "physical"                                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].quantity            | number          | 是       | 购买数量，支持小数，精确到后两位                                                | 12.88、98                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].estimatedDeliveryAt | string          | 否       | 预计发货时间                                                                    | "2022-10-23T12:00:21.000Z"                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].price               | string          | 是       | 产品单价                                                                        | "38.97"                                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].sku                 | string          | 是       | 单品在商户系统唯一 ID                                                           | "72ea7af0-c374-4fe2-841d-c95bee12108b                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].amount              | string          | 是       | 产品总金额                                                                      | "879.21"、"5699.34"                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].avatar              | string          | 是       | 产品头图访问 URL （1024 个字符之内)                                             | https://xxxx                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].isPreSale           | boolean         | 否       | 是否为预售                                                                      | false                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].location            | string          | 否       | 产品发货地，默认: "Hong Kong"                                                   | "Shanghai"                                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].productId           | string          | 否       | 所属产品在商户系统唯一 ID                                                       | "SA"                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].description         | string          | 否       | 产品描述信息 (4096 个字符之内)                                                  | "Test Desc"                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;products[n].showURL             | string          | 否       | 产品展示页 URL                                                                  | https://xxxx                                                          |

- **代码样例**

```json
{
  "merchantId": "M448726",
  "merchantOrderId": "TEST1672491207",
  "name": "test",
  "amount": "12.02",
  "currency": "SAR",
  "notificationURL": "https://xxx",
  "referenceURL": "https://xxx",
  "customer": {
    "nickname": "customerName",
    "email": "info@gmail.com",
    "mobile": "900000000",
    "address": "Tabuk,Umluj,Al Balad,1022 9th Avenue"
  },
  "products": [
    {
      "name": "Slip On Classic Beige",
      "type": "unknown",
      "quantity": 1,
      "price": "12.02",
      "sku": "xxxx-xxxxx-xx",
      "productId": "16060111111111111111111",
      "amount": "12.02",
      "avatar": "https://xxx"
    }
  ]
}
```

**Response**

【创建支付订单】 的响应参数如下：

- **Response Body**

| **参数**        | **类型** | **描述**                                                                                                                                                                                                                                           | **样例**                                                           |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| id              | string   | 支付订单号                                                                                                                                                                                                                                         | "M448726T2022123112531745487632"                                   |
| clientId        | string   | 客户端 ID                                                                                                                                                                                                                                          | "CLT9208307"                                                       |
| merchantId      | string   | 商户 ID                                                                                                                                                                                                                                            | "M448726"                                                          |
| status          | string   | 订单状态： <br> pending：支付系统已创建支付订单，但渠道方暂未创建订单 <br> doing：支付系统和渠道订单均已创建完成，但是用户未支付 <br> paid：用户已支付成功 <br> closed：订单关闭 <br> error：订单出现错误 <br> locked：锁单 <br> expired：订单过期 | "pending"                                                          |
| ticket          | string   | 票据凭证，用于验证订单 ID                                                                                                                                                                                                                          | "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc" |
| name            | string   | 订单描述                                                                                                                                                                                                                                           |                                                                    |
| merchantOrderId | string   | 商户端订单 ID                                                                                                                                                                                                                                      | "TEST1672491207"                                                   |
| notificationURL | string   | 回调地址                                                                                                                                                                                                                                           |                                                                    |
| amount          | float    | 支付金额                                                                                                                                                                                                                                           | "12.02"                                                            |
| tip             | number   | 支付小费                                                                                                                                                                                                                                           |                                                                    |
| currency        | string   | 支付币种                                                                                                                                                                                                                                           | "SAR"                                                              |
| expiredAt       | string   | 订单过期时间                                                                                                                                                                                                                                       | "2023-01-15T20:53:27.000Z"                                         |
| createAt        | string   | 订单生成时间                                                                                                                                                                                                                                       | "2022-12-31T12:53:17.454Z"                                         |
| refundTimes     | number   | 发生退款的次数                                                                                                                                                                                                                                           | 0                                                                  |
| refundAmount    | float    | 退款金额                                                                                                                                                                                                                                           | "0"                                                                |
| refundStatus    | string   | 退款状态： <br> none：无退款 <br> fail：退款失败 <br> processing：退款处理中 <br> partial：部分退款 <br> full：全部退款                                                                                                                            | "none"                                                             |

- **代码样例**

```json
{
  "id": "M448726T2022123112531745487632", // 支付订单ID,orderId
  "clientId": "CLT9208307", // ClientID
  "merchantId": "M448726", // 商户ID
  "status": "pending", // 订单状态
  "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc", // 票据凭证，用于验证订单ID
  "name": "Order test for desc", // 订单描述
  "merchantOrderId": "TEST1672491207", // 商户端订单ID
  "notificationURL": "", // 回调地址
  "amount": 12.02, // 支付金额
  "currency": "SAR", // 支付币种
  "tip": 0, // 支付小费
  "expiredAt": "2023-01-15T20:53:27.000Z", // 订单过期时间
  "createdAt": "2022-12-31T12:53:17.454Z", // 订单生成时间
  "refundTimes": 0, // 退款次数
  "refundAmount": 0, // 退款金额
  "refundStatus": "none" // 退款状态
}
```

**付款链接规则**

- 标准收银台付款链接URL（根据商户支持的支付方式自动跳转）：

```
https://sandbox.sgate.sa/order/{ORDER_ID}?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}
```

- 指定具体支付方式收银台链接URL：

  - 卡支付：

  ```
  https://sandbox.sgate.sa/order/{ORDER_ID}/mada?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}
  ```

  - STCPay 支付：

  ```
  https://sandbox.sgate.sa/order/{ORDER_ID}/stcpay?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}
  ```

  - ApplePay 支付： 

  ```
  https://sandbox.sgate.sa/order/{ORDER_ID}/applepay?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}
  ```

  - 指定非 SAR 币种支付：

  ```
  https://sandbox.sgate.sa/order/{ORDER_ID}/intl-card?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}
  ```

- 参数说明：
  - `{ORDER_ID}`：创建订单后返回的订单 ID
  - `{ORDER_TICKET}`：创建订单后的返回的 TICKET
  - `{RETURN_URL}`： 支付完成后返回的页面地址，RETURN_URL 需要进行 URLencode
  - `{LANGUAGE}`：收银台页面默认语言，可选 EN（英语），AR（阿拉伯语）
  - `{LOCK_PAY_METHOD}`：可选项，如果该参数的值为 yes，则在收银台界面只展示指定的支付方式
