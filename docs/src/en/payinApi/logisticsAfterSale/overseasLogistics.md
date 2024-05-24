# Set Overseas Logistics Information

## Function Description

- Set overseas logistics information

## Set Overseas Logistics Information API

### Request URL

- `/orders/{ORDER_ID}/overseasLogistics`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.setOverseasLogistics`

### HTTP Verb

- PUT

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter**                                | **Type** | **Required** | **Description**                |
| -------------------------------------------- | -------- | ------------ | ------------------------------ |
| value                                        | object   | Y            | Overseas logistics information |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingURL    | string   | Y            | Logistics tracking website     |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingNumber | string   | Y            | Logistics tracking number      |

### Response Parameters

Response HTTP status code `200` means success