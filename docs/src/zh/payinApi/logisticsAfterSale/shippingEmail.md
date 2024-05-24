# 设置发货电子邮件

## 功能简述

- 设置发货电子邮件

## 设置发货电子邮件 API

### 请求 URL

- `/orders/{ORDER_ID}/shippingEmail`
  - `{ORDER_ID}`：您的支付 ID

### 请求 Method

- `order.shippingEmail`

### 请求方式

- PUT

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

- **Request Body**

| **参数**         | **类型** | **必填** | **描述**       |
| ---------------- | -------- | -------- | -------------- |
| title            | string   | 是       | 邮件标题       |
| fromName         | string   | 是       | 发件人名称     |
| fromAddress      | string   | 是       | 发件人邮件地址 |
| recipientAddress | string   | 是       | 收件人邮件地址 |
| content          | string   | 是       | 邮件内容       |

### 响应参数

响应 HTTP 状态码为 `200` 即代表成功