# 设置海外物流信息

**功能简述**

- 设置海外物流信息

**请求方式：PUT**

**Method：**`order.setOverseasLogistics`

**URL：** `/orders/{ORDER_ID}/overseasLogistics`

- `{ORDER_ID}`：您的支付 ID

**Request**

【设置海外物流信息】 的请求参数如下：

- **Header**

  - _查看公共参数_

- **Request Body**

| **参数**                                     | **类型** | **必填** | **描述**     | **样例** |
| -------------------------------------------- | -------- | -------- | ------------ | -------- |
| value                                        | object   | 是       | 海外物流信息 |          |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingURL    | string   | 是       | 物流追踪网址 |          |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingNumber | string   | 是       | 物流追踪编号 |          |

**Response**

【设置海外物流信息】的响应 HTTP 状态码为 200 即代表成功
