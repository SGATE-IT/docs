# 设置境内物流信息

## 功能简述

- 设置境内物流信息

## 设置境内物流信息 API

### 请求 URL

- `/orders/{ORDER_ID}/logistics`
  - `{ORDER_ID}`：您的支付 ID

### 请求 Method

- `order.setLogistics`

### 请求方式

- PUT

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

- **Request Body**

| **参数**                                     | **类型** | **必填** | **描述**     |
| -------------------------------------------- | -------- | -------- | ------------ |
| value                                        | object   | 是       | 境内物流信息 |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingURL    | string   | 是       | 物流追踪网址 |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingNumber | string   | 是       | 物流追踪编号 |

### 响应参数

响应 HTTP 状态码为 `200` 即代表成功