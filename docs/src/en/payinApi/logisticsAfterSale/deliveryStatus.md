# Set Delivery Status

## Function Description

- Set delivery status

## Set Delivery Status API

### Request URL

- `/orders/{ORDER_ID}/delivery/status`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.setDeliveryStatus`

### HTTP Verb

- PUT

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter** | **Type** | **Required** | **Description**                                                                                                                                                                                                               | **Example** |
| ------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| value         | string   | Y            | Delivery status: <br> `pending`: not shipped<br> `shipping`: shipped overseas<br> `domesticInStock`: waiting for shipment domestically<br> `contacting`: in contact<br> `delivering`: delivering <br> `delivered`: signed for | "pending"   |

### Response Parameters

Response HTTP status code `200` means success