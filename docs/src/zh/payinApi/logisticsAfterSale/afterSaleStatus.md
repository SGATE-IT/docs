# 设置售后状态

## 功能简述

- 设置售后状态

## 设置售后状态 API

### 请求 URL

- `/orders/{ORDER_ID}/afterSale/status`
  - `{ORDER_ID}`：您的支付 ID

### 请求 Method

- `order.setAfterSaleStatus`

### 请求方式

- PUT

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

- **Request Body**

| **参数**                                     | **类型** | **必填** | **描述**     | **示例** |
| -------------------------------------------- | -------- | -------- | ------------ | -------- |
| value    | string   | 是       | 售后状态： <br> none：无 <br> applying：申请售后 <br> returning：退货中 <br> returned：退货完成 | "none"   |

### 响应参数

响应 HTTP 状态码为 `200` 即代表成功