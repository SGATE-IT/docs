# Using GCCPAY Cashier page to create payment order

**Summery**

- After creating a payment order through the payment system, use the cashier interface provided by GCCPAY to collect money

**Sequence diagram**

![img](../_media/create-order.svg)

**HTTP request type：POST**

**URL：**/merchants/%YOUR_MERCHANT_ID%/orders

- %YOUR_MERCHANT_ID%：Your merchant ID in system
  - For example: if your merchant ID is 'M00001', then the URL is: https://sandbox.gcc-pay.com/api_v1/merchants/M00001/orders

**Request**

The request parameters for [Create Payment Order] are as follows:

- **Header**

  -  *View public request parameters.*

- **Request Body**

    | **Parameters**  | **Type** | **Required** | **Describe**                                                 | **Example**                                         |
    | --------------- | -------- | ------------ | ------------------------------------------------------------ | --------------------------------------------------- |
    | merchantOrderId | string   | Yes          | The merchant payment order ID, can't repeat.                 | "2022102218233400123"                               |
    | amount          | string   | Yes          | The order amount, floating point number of string, up to 2 digits after the decimal point. | "1.35", "99.10", "127"                              |
    | currency        | string   | Yes          | Type of currency, and 3 capital letters.                     | "SAR",  "AED", "BHD",  "EGP",  "KWD", "OMR", "QAR"  |
    | name            | string   | Yes          | The order description.                                       | "Buy a game recharge card with a face value of 100" |
    | notificationURL | string   | No           | Address for successful order payment notification.           |                                                     |
    | expiredAt       | string   | No           | The order expires. After the expiration, the order can not be paid.It is recommended to set it to 30 min later, and the default time is 15 days. | "2022-10-23T12:00:21.000Z"                          |

- **Request demo**

```json
{
    "merchantOrderId": "TEST1672491207",
    "amount": 12.02,
    "currency": "SAR",
    "name": "Order test for desc",
    "notificationURL": "",
    "expiredAt": "2023-01-15T20:53:27.000Z"
}
```

**Response**

- The response parameters for [Create Payment Order] are as follows:

| **Parameters**  | **Type** | **Description**                                              | **Sample**                                                   |
| --------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id              | string   | Payment order id                                             | "M448726T2022123112531745487632"                             |
| clientId        | string   | Client id                                                    | "CLT9208307"                                                 |
| merchantId      | string   | Merchant id                                                  | "M448726"                                                    |
| status          | string   | Order statuspending：GCCPAY payment system has created a payment order, but the channel party has not yet created an orderdoing：GCCPAY payment system and channel order have been created, but the user has not paidpaid：User has paid for the orderClosed：The order has been closederror：The order has some errorlocked：The order has been lockedexpired：The order has expired | "pending"                                                    |
| ticket          | string   | Bill voucher, used to verify order ID                        | "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc" |
| name            | string   | The description of order                                     | "2022-10-23T12:00:21.000Z"                                   |
| merchantOrderId | string   | The description of merchant's order                          | "TEST1672491207"                                             |
| notificationURL | string   | Callback address                                             |                                                              |
| amount          | float    | Payment amount                                               | "12.02"                                                      |
| tip             | number   | Payment tips                                                 |                                                              |
| currency        | string   | The payment currency                                         | "SAR"                                                        |
| expiredAt       | string   | The expired time of order                                    | "2023-01-15T20:53:27.000Z"                                   |
| createAt        | string   | The order created time                                       | "2022-12-31T12:53:17.454Z"                                   |
| refundAmount    | float    | The order refund amount                                      | "0"                                                          |

**Response demo**

```json
{
    "id": "M448726T2022123112531745487632",                ### OrderId
    "clientId": "CLT9208307",        ### ClientID
    "merchantId": "M448726",        ### Merchant ID
    "status": "pending",        ### Order status
    "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc",        ### Bill voucher, used to verify order ID
    "name": "Order test for desc",        ### Order describtion
    "merchantOrderId": "TEST1672491207",                ### Order ID of merchant
    "notificationURL": "",        ### Callback URL
    "amount": 12.02,        ### Payment amount
    "currency": "SAR",        ### Payment currency
    "tip": 0,        ### Payment tips
    "expiredAt": "2023-01-15T20:53:27.000Z",        ### Order expired time
    "createdAt": "2022-12-31T12:53:17.454Z",        ### Order create time
    "refundAmount": 0         ### Refund amount
}
```

**The rule of payment link**

- Standard payment link URL：`https://sandbox.gcc-pay.com/``?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}`
- The specific payment link URL：
  - Card Pay：`https://sandbox.gcc-pay.com/``mastercard/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - STCPAY：`https://sandbox.gcc-pay.com/``stcpay/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - APPLE PAY： `https://sandbox.gcc-pay.com/``applePay/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
  - Specified currency without SAR：`https://sandbox.gcc-pay.com/``tap/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&``language``={LANGUAGE}&lockPayMethod=yes`
- Parameter description：
  - orderId：Order ID returned after order created.
  - orderTicket：Ticket returned after order created.
  - returnURL： The page address after payment, and RETURN_URL needs URLencode.
  - language：The default language of the cashier. Optional values are EN(English) and AR(Arabic)
  - lockPayMethod：optional, if the value is 'yes', then it will not show other payment methods on the cashier page