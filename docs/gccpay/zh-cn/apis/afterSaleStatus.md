# 设置售后状态

**功能简述**

- 设置售后状态

**请求方式：PUT**

**Method：**`order.setAfterSaleStatus`

**URL：** `/orders/{ORDER_ID}/afterSale/status`

- `{ORDER_ID}`：您的支付 ID

**Request**

【设置售后状态】 的请求参数如下：

- **Header**

  - _查看公共参数_

- **Request Body**

| **参数** | **类型** | **必填** | **描述**                                                                                        | **样例** |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------- | -------- |
| value    | string   | 是       | 售后状态： <br> none：无 <br> applying：申请售后 <br> returning：退货中 <br> returned：退货完成 | "none"   |

**Response**

【设置售后状态】的响应 HTTP 状态码为 200 即代表成功
