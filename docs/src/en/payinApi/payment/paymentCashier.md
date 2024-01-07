# Payment Cashierr

## Create a payment cashierr

### Function Description

- After creating a payment order through the payment system, use the cashier interface provided by the payment system to collect payment.

### Flow Description

![img](/images/payinApi_en/create-order.svg)

### Create order API
<br>

#### Request URL

- `/merchants/{MERCHANT_ID}/orders`
  - `{MERCHANT_ID}`：Your merchant ID

#### Request Method

- `merchant.addOrder`

#### HTTP Verb

- POST

#### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter**                                             | **Type**        | **Required** | **Description**                                                                                                                     | **Example**                                                                             |
| --------------------------------------------------------- | --------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| merchantOrderId                                           | string          | Y            | Merchant payment order ID, cannot be repeated, ensure unique                                                                        | "2022102218233400123"                                                                   |
| amount                                                    | string          | Y            | Order amount, floating point string, up to two decimal places                                                                       | "1.35", "99.10", "127"                                                                  |
| currency                                                  | string          | Y            | Currency type, three capital letters                                                                                                | "SAR"<br>"AED"<br>"BHD"<br>"EGP"<br>"EUR"<br>"GBP"<br >"KWD"<br>"OMR"<br>"QAR"<br>"USD" |
| name                                                      | string          | Y            | Order description information for later viewing and reconciliation                                                                  | "Purchase a game recharge card with a face value of 100"                                |
| notificationURL                                           | string          | N            | Order payment success notification address                                                                                          | `https://xxxx`                                                                          |
| expiredAt                                                 | string          | N            | Order expiration time. Orders cannot be paid after expiration. It is recommended to set it to 30 minutes. The default is 30 minutes | "2022-10-23T12:00:21.000Z"                                                              |
| referenceURL                                              | string          | N            | Source URL                                                                                                                          | `https://xxxx`                                                                          |
| customer                                                  | object          | N            | Customer, payer, buyer information                                                                                                  |                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.nickname                 | string          | Y            | Customer nickname                                                                                                                   | "customerName"                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.mobile                   | string          | Y            | Customer mobile number                                                                                                              | "900000000"                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.address                  | string          | Y            | Customer logistics address                                                                                                          | "SA"                                                                                    |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.email                    | string          | N            | Customer email                                                                                                                      | `info@gmail.com`                                                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.uuid                     | string          | N            | The customer's unique ID in the merchant system                                                                                     | "89f2f444-cf93-435f-bbdd-ebdef591b6b5"                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.level                    | string          | N            | Customer level                                                                                                                      | "vip"                                                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;customer.registeredAt             | string          | N            | Customer registration time in merchant system                                                                                       | "2022-10-23T12:00:21.000Z"                                                              |
| products                                                  | array\<object\> | N            | Product information purchased for the current order                                                                                 |                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].name                | string          | Y            | Product name                                                                                                                        | "Test"                                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].type                | string          | Y            | Product type: <br> digital: virtual product <br> physical: physical product <br> unknown: unknown product                           | "physical"                                                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].quantity            | number          | Y            | Purchase quantity, supports decimals, accurate to the last two digits                                                               | 12.88、98                                                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].estimatedDeliveryAt | string          | N            | Estimated delivery time                                                                                                             | "2022-10-23T12:00:21.000Z"                                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].price               | string          | Y            | Product unit price                                                                                                                  | "38.97"                                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].sku                 | string          | Y            | The unique ID of the item in the merchant systemD                                                                                   | "72ea7af0-c374-4fe2-841d-c95bee12108b                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].amount              | string          | Y            | Total product amount                                                                                                                | "879.21"、"5699.34"                                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].avatar              | string          | Y            | Product header image access URL (within 1024 characters)                                                                            | `https://xxxx`                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].isPreSale           | boolean         | N            | Is it a pre-sale?                                                                                                                   | false                                                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].location            | string          | N            | Product shipping location, default: "Hong Kong"                                                                                     | "Shanghai"                                                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].productId           | string          | N            | The unique ID of the product in the merchant system                                                                                 | "SA"                                                                                    |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].description         | string          | N            | Product description information (within 4096 characters)                                                                            | "Test Desc"                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;products[_n_].showURL             | string          | N            | Product display page URL                                                                                                            | `https://xxxx`                                                                          |

- **Request Parameter Example**

::: details Click to view request parameter examples
```json
{
  "merchantId": "M448726",
  "merchantOrderId": "TEST1672491207",
  "name": "test",
  "amount": "12.02",
  "currency": "SAR",
  "notificationURL": "https://xxx",
  "referenceURL": "https://xxx",
  "customer": {
    "nickname": "customerName",
    "email": "info@gmail.com",
    "mobile": "900000000",
    "address": "Tabuk,Umluj,Al Balad,1022 9th Avenue"
  },
  "products": [
    {
      "name": "Slip On Classic Beige",
      "type": "unknown",
      "quantity": 1,
      "price": "12.02",
      "sku": "xxxx-xxxxx-xx",
      "productId": "16060111111111111111111",
      "amount": "12.02",
      "avatar": "https://xxx"
    }
  ]
}
```

:::

#### Response Parameters

The response parameters are as follows:

- **Response Body**

| **Parameter**   | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                             | **Example**                      |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id              | string   | Payment order number                                                                                                                                                                                                                                                                                                                                                                                                        | "M448726T2022123112531745487632" |
| clientId        | string   | client ID                                                                                                                                                                                                                                                                                                                                                                                                                   | "CLT9208307"                     |
| merchantId      | string   | Merchant ID                                                                                                                                                                                                                                                                                                                                                                                                                 | "M448726"                        |
| status          | string   | Order status: <br> pending: The payment system has created a payment order, but the channel party has not yet created an order<br> doing: Both the payment system and the channel order have been created, but the user has not paid<br> paid : The user has paid successfully<br> closed: The order is closed<br> error: An error occurred in the order<br> locked: The order is locked<br> expired: The order has expired | "pending"                        |
| ticket          | string   | Ticket voucher, used to verify the order ID                                                                                                                                                                                                                                                                                                                                                                                 | "QnTkb...mTMc"                   |
| name            | string   | order description                                                                                                                                                                                                                                                                                                                                                                                                           |                                  |
| merchantOrderId | string   | Merchant order ID                                                                                                                                                                                                                                                                                                                                                                                                           | "TEST1672491207"                 |
| notificationURL | string   | callback address                                                                                                                                                                                                                                                                                                                                                                                                            |                                  |
| amount          | float    | payment amount                                                                                                                                                                                                                                                                                                                                                                                                              | "12.02"                          |
| tip             | number   | Pay tip                                                                                                                                                                                                                                                                                                                                                                                                                     |                                  |
| currency        | string   | payment currency                                                                                                                                                                                                                                                                                                                                                                                                            | "SAR"                            |
| expiredAt       | string   | Order expiration time                                                                                                                                                                                                                                                                                                                                                                                                       | "2023-01-15T20:53:27.000Z"       |
| createAt        | string   | Order generation time                                                                                                                                                                                                                                                                                                                                                                                                       | "2022-12-31T12:53:17.454Z"       |
| refundTimes     | number   | The number of times a refund occurred                                                                                                                                                                                                                                                                                                                                                                                       | 0                                |
| refundAmount    | float    | refund amount                                                                                                                                                                                                                                                                                                                                                                                                               | "0"                              |
| refundStatus    | string   | Refund status: <br> none: No refund<br> fail: Refund failed<br> processing: Refund in process<br> partial: Partial refund<br> full: Full refund                                                                                                                                                                                                                                                                             | "none"                           |

**Response Parameter Example**

::: details Click to see an example of response parameters
```json
{
  "id": "M448726T2022123112531745487632", // Payment order ID, orderId
  "clientId": "CLT9208307", // ClientID
  "merchantId": "M448726", // Merchant ID
  "status": "pending", // order status
  "ticket": "QnTkb04gg5RzB6fPKlfKH9AJgTW7PYQKCYnP0Wwdz0uiQZjSt8UjsHtBJbBBmTMc", // Ticket voucher, used to verify the order ID
  "name": "Order test for desc", // order description
  "merchantOrderId": "TEST1672491207", // Merchant order ID
  "notificationURL": "", // callback address
  "amount": 12.02, // payment amount
  "currency": "SAR", // payment currency
  "tip": 0, // Pay tips
  "expiredAt": "2023-01-15T20:53:27.000Z", // order expiration time
  "createdAt": "2022-12-31T12:53:17.454Z", // Order generation time
  "refundTimes": 0, //Number of refunds
  "refundAmount": 0, // Refund amount
  "refundStatus": "none" // Refund status
}
```
:::

### Payment Link Rules
<br>

#### Standard Checkout Payment Link URL

::: tip
Automatically jump according to the payment method supported by the merchant.
:::

`https://sandbox.sgate.sa/order/{ORDER_ID}?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}`

#### Specify Specific Payment Method Checkout Link URL
<br>

##### Card Payment

`https://sandbox.sgate.sa/order/{ORDER_ID}/mada?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}`

##### STCPay Payment

`https://sandbox.sgate.sa/order/{ORDER_ID}/stcpay?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}`

##### ApplePay Payment

`https://sandbox.sgate.sa/order/{ORDER_ID}/applepay?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}`

##### Specify Non-SAR Currency Payment

`https://sandbox.sgate.sa/order/{ORDER_ID}/intl-card?ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}&lockPayMethod={LOCK_PAY_METHOD}`

##### Parameter Description

- `{ORDER_ID}`: the order ID returned after creating the order
- `{ORDER_TICKET}`: TICKET returned after creating an order
- `{RETURN_URL}`: The page address returned after payment is completed. RETURN_URL needs to be URLencoded.
- `{LANGUAGE}`: The default language of the checkout page, optional EN (English), AR (Arabic)
- `{LOCK_PAY_METHOD}`: optional. If the value of this parameter is yes, only the specified payment method will be displayed on the cashier interface.


## Create A Checkout Using An Iframe

### Function Description

- After creating a payment order through the payment system, use the iframe framework provided by SGate to build your own cashier interface

### Flow Description

![img](/images/payinApi_en/create-iframe-order.svg)

### Create Payment Order

- Refer to [Create Order API](/en/payinApi/payment/paymentCashier.html#create-order-api) to create a payment order in the payment system

#### Construct Iframe Payment Link
<br>

##### Card Payment

`https://sandbox.sgate.sa/embed/mada?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}`

##### STCPay

`https://sandbox.sgate.sa/embed/stcpay?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}`

##### Non-SAR Currency Payment

`https://sandbox.sgate.sa/embed/intl-card?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}`

##### Parameter Description

- `{ORDER_ID}`: The order ID returned by the payment system after the payment order is successfully created.
- `{ORDER_TICKET}`: TICKET returned by the payment system after successfully creating a payment order
- `{RETURN_URL}`: After the user completes the payment, the URL address of the interface is returned. RETURN_URL needs to be URLencoded
- `{LANGUAGE}`: The default language of the checkout page, optional EN (English), AR (Arabic)

#### Embed Payment Link Into Iframe

* Sample code:

```js
var iframe = document.createElement('iframe');
iframe.src = 'https://sandbox.sgate.sa/embed/mada?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}';
iframe.style = 'width: 1000px; height: 600px;';
document.body.appendChild(iframe);
```