# Query Refund

## Function Description

- Query refund order

## Query Refund API

### Request URL

- `/refunds/{REFUND_ID}`
  - `{REFUND_ID}`：Your refund order ID

### Request Method

- `refund.detail`

### HTTP Verb

- GET

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**       | **Type** | **Description**                                                                                         | **Example**                                                  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| amount              | number   | Order amount, note that this is a numeric type, floating point number, up to two decimal places         | 3.23                                                         |
| id                  | string   | Chargeback ID, globally unique                                                                          | "M948164T2023072607034709567189_R1"                          |
| merchantId          | string   | Merchant ID                                                                                             | "M948164"                                                    |
| orderId             | string   | The order ID                                                                                            | "M948164T2023072607034709567189"                             |
| merchantRefundId    | string   | Merchant refund order ID                                                                                | "TEST934759263495634"                                        |
| refundTransactionId | string   | Refund operation transaction ID                                                                         | "M948164T2023072607034709567189_2"                           |
| originTransactionId | string   | Order transaction ID                                                                                    | "M948164T2023072607034709567189_1"                           |
| paymentMethod       | string   | Payment method: <br> stcpay <br> mastercard <br> applePay <br> tap                                      | "mastercard"                                                 |
| status              | string   | Refund status: <br> pending: Refund in progress <br> success: Refund completed <br> fail: Refund failed | "pending"                                                    |
| currency            | string   | currency type currency type, three uppercase letters                                                    | "SAR"<br>"AED"<br>"BHD"<br>"EGP"<br>"KWD"<br>"OMR"<br >"QAR" |
| reason              | string   | Reason for refund                                                                                       | "Return Shipping Fee"                                        |
| finishedAt          | string   | Refund completion time                                                                                  | "2023-07-27T11:38:11.000Z"                                   |
| createdAt           | string   | Creation time                                                                                           | "2023-07-26T04:06:33.227Z"                                   |
| updatedAt           | string   | Update time                                                                                             | "2023-07-26T04:06:33.227Z"                                   |

**Response Parameter Example**

```json
{
  "amount": 7, // order amount
  "id": "M948164T2023072607034709567189_R1", // Chargeback ID
  "merchantId": "M948164", // Merchant ID
  "orderId": "M948164T2023072607034709567189", // Order ID
  "merchantRefundId": "TEST456345768345", // Merchant refund order ID
  "refundTransactionId": "M948164T2023072607034709567189_2", // Refund operation transaction ID
  "originTransactionId": "M948164T2023072607034709567189_1", // Order transaction ID
  "paymentMethod": "mastercard", // payment method
  "status": "success", // Refund status
  "currency": "SAR", // currency type
  "reason": null, //Refund reason
  "finishedAt": "2023-07-27T11:38:11.000Z", // Refund completion time
  "createdAt": "2023-07-26T04:06:33.000Z", // Creation time
  "updatedAt": "2023-07-27T11:38:11.000Z" // Update time
}
```