# 设置投递状态

**功能简述**

- 设置投递状态

**请求方式：PUT**

**Method：**`order.setDeliveryStatus`

**URL：** `/orders/{ORDER_ID}/delivery/status`

- `{ORDER_ID}`：您的支付 ID

**Request**

【设置投递状态】 的请求参数如下：

- **Header**

  - _查看公共参数_

- **Request Body**

| **参数** | **类型** | **必填** | **描述**                                                                                                                                                          | **样例**  |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| value    | string   | 是       | 投递状态： <br> pending：未发货 <br> shipping：海外已发货 <br> domesticInStock：境内待发货 <br> contacting：联系中 <br> delivering：投递中 <br> delivered：已签收 | "pending" |

**Response**

【设置投递状态】的响应 HTTP 状态码为 200 即代表成功
