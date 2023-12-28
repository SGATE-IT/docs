# 直接支付

## 卡支付

### 功能简述

- [创建订单](/zh/payinApi/payment/paymentCashier#创建订单-api)后，通过 API 传递卡信息完成订单支付

::: tip 提示
请求参数 returnURL 为支付完成后返回的商户结果页，返回参数 redirectURL 为 3DS 验证页面
:::

### 流程说明

![img](/images/payinApi_zh/direct-order.svg)

### 卡支付 API
<br>

#### 请求 URL

- `/orders/{ORDER_ID}/direct/payment/mastercard/transactions`
  - `{ORDER_ID}`：您的支付 ID

#### 请求 Method

- `order.startByDirectMastercard`

#### 请求方式

- POST

#### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

- **Request Body**

| **参数**     | **类型** | **必填** | **描述**                 | **示例**            |
| ------------ | -------- | -------- | ------------------------ | ------------------- |
| cardNumber   | string   | 是       | 支付卡号                 | "51234500000000008" |
| expiryMonth  | string   | 是       | 过期月份                 | "3", "12"           |
| expiryYear   | string   | 是       | 过期年份                 | "26", "28"          |
| nameOnCard   | string   | 是       | 持卡人姓名               | "Bobo"              |
| securityCode | string   | 是       | 安全码                   | "125"               |
| feeId        | string   | 否       | 支付渠道 ID              | "F12341234"         |
| returnURL    | string   | 否       | 后续支付完毕跳回页面地址 | `https://xxx`       |

#### 响应参数

响应参数如下：

- **Response Body**

| **参数**       | **类型** | **描述**                                                                                                                                                                                           | **示例**                                                                               |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| id             | string   | SGate 支付交易 ID，系统自动生成，全局唯一                                                                                                                                                          | "M000001T2022101023455774363043_2"                                                     |
| feeId          | string   | 支付渠道 ID                                                                                                                                                                                        | "F12341234"                                                                            |
| orderId        | string   | 所属订单 ID                                                                                                                                                                                        | "M000001T2022101023455774363043"                                                       |
| merchantId     | string   | 订单所属商户 ID                                                                                                                                                                                    | "M000001"                                                                              |
| amount         | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                                                                                                                                                 | 3.23                                                                                   |
| currency       | string   | 货币类型货币种类，三位大写字母                                                                                                                                                                     | "SAR"<br>"AED"<br>"BHD"<br>"EGP"<br>"EUR"<br>"GBP"<br>"KWD"<br>"OMR"<br>"QAR"<br>"USD" |
| paymentMethod  | string   | 支付方式： <br> stcpay <br> mastercard <br> applePay <br> tap                                                                                                                                      | "mastercard"                                                                           |
| type           | string   | 支付类型： <br> payment：付款 <br> refund：退款                                                                                                                                                    | "payment"                                                                              |
| result         | string   | 支付结果： <br> Approved：完成支付 <br> Declined_Retirable：被拒绝，不允许重试 <br> Declined_NoRetry：被拒绝，允许重试 <br> Not_Yet：还未操作 <br> Aborted：有新的支付交易，之前未完成的交易被取消 | "Not_Yet"                                                                              |
| completedAt    | string   | 支付交易完成时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                                             |
| createdAt      | string   | 支付交易创建时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                                             |
| redirectURL    | string   | 完成支付的后续验证跳转地址                                                                                                                                                                         | `https://xxx`                                                                          |

**响应参数示例**

```json
{
  "id": "M104563T20230804011028111111_1", // 支付交易ID
  "feeId": "F12341234", // 支付渠道ID
  "orderId": "M104563T202308040110111111", // 所属订单ID
  "merchantId": "M104563", // 订单所属商户ID
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

## STCPay 支付 <Badge type="tip" text="试运行" />

### 功能简述

- [创建订单](/zh/payinApi/payment/paymentCashier#创建订单-api)后，通过 API 操作验证码完成订单支付

### 发送 STCPay 短信验证码 API
<br>

#### 请求 URL

- `/orders/{ORDER_ID}/payment/stcpay/transactions`
  - `{ORDER_ID}`：您的支付 ID

#### 请求 Method

- `order.startByStcpay`

#### 请求方式

- POST

#### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)
  - 需要另外传递的 Header:

| **名称**      | **类型** | **是否必填** | **说明**                          |
| ------------- | -------- | ------------ | --------------------------------- |
| user-agent    | String   | 是           | 用户在客户端的 UserAgent          |
| x-auth-uuid   | String   | 是           | 为用户生成的唯一识别码，UUID 格式 |
| x-customer-ip | String   | 是           | 用户的真实 IP                     |

- **Request Body**

| **参数** | **类型** | **必填** | **描述**                                        | **示例**          |
| -------- | -------- | -------- | ----------------------------------------------- | ----------------- |
| ticket   | string   | 是       | 票据凭证，创建订单后，响应的订单信息中的 ticket | "QnTkb......mTMc" |
| mobile   | string   | 是       | STCPay 账户                                     | "0548220713"      |

- **请求参数示例**

::: details 点击查看请求参数示例
```json
{
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",
    "mobile": "0548220713"
}
```
:::

#### 响应参数

响应参数如下：

- **Response Body**

| **参数**  | **类型** | **描述**                                                                                                                                                                                           | **示例**                           |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id        | string   | SGate 支付交易 ID，系统自动生成，全局唯一                                                                                                                                                          | "M000001T2022101023455774363043_2" |
| orderId   | string   | 所属订单 ID                                                                                                                                                                                        | "M000001T2022101023455774363043"   |
| amount    | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                                                                                                                                                 | 3.23                               |
| result    | string   | 支付结果： <br> Approved：完成支付 <br> Declined_Retirable：被拒绝，不允许重试 <br> Declined_NoRetry：被拒绝，允许重试 <br> Not_Yet：还未操作 <br> Aborted：有新的支付交易，之前未完成的交易被取消 | "Not_Yet"                          |
| createdAt | string   | 支付交易创建时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"         |
| updatedAt | string   | 支付交易更新时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"         |






**响应参数示例**

```json
{
    "id": "M448726T2022123112531745487632_1", // 支付交易ID
    "orderId": "M448726T2022123112531745487632", // 支付订单ID
    "amount": 1.23, // 支付金额
    "result": "Not_Yet", // 支付结果
    "createdAt": "2023-09-08T07:15:10.000Z", // 支付交易创建时间
    "updatedAt": "2023-09-08T07:15:10.000Z"
}
```

### 完成 STCPay 短信验证 API
<br>

#### 请求 URL

- `/transactions/{TRANSACTION_ID}/stcpay`
  - `{TRANSACTION_ID}`：您的支付交易 ID

#### 请求 Method

- `transaction.completeByStcpay`

#### 请求方式

- PUT

#### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)
  - 需要另外传递的 Header:

| **名称**      | **类型** | **是否必填** | **说明**                          |
| ------------- | -------- | ------------ | --------------------------------- |
| user-agent    | String   | 是           | 用户在客户端的 UserAgent          |
| x-auth-uuid   | String   | 是           | 为用户生成的唯一识别码，UUID 格式 |
| x-customer-ip | String   | 是           | 用户的真实 IP                     |

- **Request Body**

| **参数** | **类型** | **必填** | **描述**                                        | **示例**          |
| -------- | -------- | -------- | ----------------------------------------------- | ----------------- |
| ticket   | string   | 是       | 票据凭证，创建订单后，响应的订单信息中的 ticket | "QnTkb......mTMc" |
| OtpValue | string   | 是       | 短信验证码                                      | "123456"          |

- **请求参数示例**

::: details 点击查看请求参数示例
```json
{
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",
    "OtpValue": "123456"
}
```
:::

#### 响应参数

响应参数如下：

- **Response Body**

| **参数**      | **类型** | **描述**                                                                                                                                                                                           | **示例**                                                                               |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| id            | string   | SGate 支付交易 ID，系统自动生成，全局唯一                                                                                                                                                          | "M000001T2022101023455774363043_2"                                                     |
| orderId       | string   | 所属订单 ID                                                                                                                                                                                        | "M000001T2022101023455774363043"                                                       |
| amount        | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数                                                                                                                                                 | 3.23                                                                                   |
| currency      | string   | 货币类型货币种类，三位大写字母                                                                                                                                                                     | "SAR"<br>"AED"<br>"BHD"<br>"EGP"<br>"EUR"<br>"GBP"<br>"KWD"<br>"OMR"<br>"QAR"<br>"USD" |
| createdAt     | string   | 支付交易创建时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                                             |
| completedAt   | string   | 支付交易完成时间                                                                                                                                                                                   | "2022-10-22T12:00:21.000Z"                                                             |
| paymentMethod | string   | 支付方式： <br> stcpay <br> mastercard <br> applePay <br> tap                                                                                                                                      | "mastercard"                                                                           |
| result        | string   | 支付结果： <br> Approved：完成支付 <br> Declined_Retirable：被拒绝，不允许重试 <br> Declined_NoRetry：被拒绝，允许重试 <br> Not_Yet：还未操作 <br> Aborted：有新的支付交易，之前未完成的交易被取消 | "Not_Yet"                                                                              |
| merchantId    | string   | 订单所属商户 ID                                                                                                                                                                                    | "M000001"                                                                              |

**响应参数示例**

```json
{
    "id": "M104563T20230804011028111111_1", // 支付交易ID
    "orderId": "M104563T202308040110111111", // 所属订单ID
    "amount": 1.23, // 订单金额
    "currency": "SAR", // 货币类型
    "createdAt": "2023-09-08T07:15:00.000Z", // 支付交易创建时间
    "completedAt": "2023-09-08T07:15:10.000Z", // 支付交易完成时间
    "paymentMethod": "stcpay", // 支付方式
    "result": "Approved", // 支付结果
    "merchantId": "M123456" // 订单所属商户ID
}
```