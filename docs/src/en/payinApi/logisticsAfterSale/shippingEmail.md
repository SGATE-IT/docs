# Set Up Shipping Email

## Function Description

- Set up shipping email

## Set Up Shipping Email API

### Request URL

- `/orders/{ORDER_ID}/shippingEmail`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.shippingEmail`

### HTTP Verb

- PUT

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter**    | **Type** | **Required** | **Description**         |
| ---------------- | -------- | ------------ | ----------------------- |
| title            | string   | Y            | Mail title              |
| fromName         | string   | Y            | Sender name             |
| fromAddress      | string   | Y            | Sender email address    |
| recipientAddress | string   | Y            | Recipient email address |
| content          | string   | Y            | Content of email        |

### Response Parameters

Response HTTP status code `200` means success