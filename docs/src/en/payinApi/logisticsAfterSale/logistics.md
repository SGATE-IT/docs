# Set Domestic Logistics Information

## Function Description

- Set domestic logistics information

## Set Domestic Logistics Information API

### Request URL

- `/orders/{ORDER_ID}/logistics`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.setLogistics`

### HTTP Verb

- PUT

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter**                                 | **Type** | **Required** | **Description**                | **Example**          |
| --------------------------------------------- | -------- | ------------ | ------------------------------ | -------------------- |
| value                                         | object   | Y            | Domestic logistics information |                      |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingURL     | string   | Y            | Logistics tracking website     |                      |
| &nbsp;&nbsp;&nbsp;&nbsp;value.trackingNumber  | string   | Y            | Logistics tracking number      |                      |
| &nbsp;&nbsp;&nbsp;&nbsp;value.shippedAt       | string   | N            | Delivery time                  | 2019-08-24T14:15:22Z |
| &nbsp;&nbsp;&nbsp;&nbsp;value.shippingCompany | string   | N            | Logistics company              |                      |

### Response Parameters

Response HTTP status code `200` means success