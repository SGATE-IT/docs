# Create Refund

## Function Description

- Initiate order refund

## Flow Description

![img](/images/payinApi_en/refund.svg)

## Create Refund API

### Request URL

- `/orders/{ORDER_ID}/refunds`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.refund`

### HTTP Verb

- POST

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter**    | **Type** | **Required** | **Description**                                               | **Example**            |
| ---------------- | -------- | ------------ | ------------------------------------------------------------- | ---------------------- |
| amount           | string   | Yes          | Order amount, floating point string, up to two decimal places | "1.35", "99.10", "127" |
| reason           | string   | Yes          | Reason for refund                                             | Return shipping fee    |
| merchantRefundId | string   | No           | Merchant refund order ID                                      | "TEST934759263495634"  |

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**       | **Type** | **Description**                                                                                         | **Example**                                        |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| amount              | number   | Order amount, note that this is a numeric type, floating point number, up to two decimal places         | 3.23                                               |
| status              | string   | Refund status: <br> pending: Refund in progress <br> success: Refund completed <br> fail: Refund failed | "pending"                                          |
| id                  | string   | Chargeback ID, globally unique                                                                          | "M948164T2023072607034709567189_R1"                |
| orderId             | string   | The order ID                                                                                            | "M948164T2023072607034709567189"                   |
| paymentMethod       | string   | Payment method: <br> stcpay <br> mastercard <br> applePay <br> tap                                      | "mastercard"                                       |
| merchantRefundId    | string   | Merchant refund order ID                                                                                | "TEST934759263495634"                              |
| merchantId          | string   | Merchant ID                                                                                             | "M948164"                                          |
| originTransactionId | string   | Order transaction ID                                                                                    | "M948164T2023072607034709567189_1"                 |
| currency            | string   | currency type currency type, three uppercase letters                                                    | "SAR"<br>"KWD"<br>"BHD"<br>"AED"<br>"OMR"<br>"QAR" |
| createdAt           | string   | Creation time                                                                                           | "2023-07-26T04:06:33.227Z"                         |
| updatedAt           | string   | Update time                                                                                             | "2023-07-26T04:06:33.227Z"                         |

**Response Parameter Example**

```json
{
  "amount": 7, // order amount
  "status": "pending", // Refund status
  "id": "M948164T2023072607034709567189_R1", // Chargeback ID
  "orderId": "M948164T2023072607034709567189", // Order ID
  "paymentMethod": "mastercard", // payment method
  "merchantRefundId": "TEST934759263495634", // Merchant refund order ID
  "merchantId": "M948164", // Merchant ID
  "originTransactionId": "M948164T2023072607034709567189_1", // Order transaction ID
  "currency": "SAR", // currency type
  "updatedAt": "2023-07-26T04:06:33.227Z", // Creation time
  "createdAt": "2023-07-26T04:06:33.227Z" // Update time
}
```