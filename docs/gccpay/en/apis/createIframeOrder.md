# Using iframe to create payment order

**Summery**

- After creating a payment order through the payment system, use the iframe framework provided by GCCPAY to build your own cashier interface

**Sequence diagram**

![img](../_media/create-iframe-order.svg)

**Create payment order**

- Create a payment order in GCCPAY payment system by referring to "Create Payment Order"

**Create a cash register using the iframe framework**

1. After successfully creating the payment order, construct the cashier URL according to the returned response parameters

    ```
    https://sandbox.gcc-pay.com/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}``&language={LANGUAGE}
    ```

    - {ORDER_ID}：The order ID returned by GCCPAY after successfully creating the payment order
    - {ORDER_TICKET}：The TICKET returned by GCCPAY after successfully creating the payment order
    - {RETURN_URL}：After the user completes the payment, return to the URL address of the interface, RETURN_ URL needs URLencode
    - {LANGUAGE}： The default language of cashier, optional value is EN(English) and AR(Arabic)

2. Create your own cashier interface. The iframe frame is embedded in the cashier interface. The src of the iframe points to the URL constructed in step 

    - Demo

    ```javascript
    var iframe = document.createElement('iframe');
    iframe.src = 'https://sandbox.gcc-pay.com/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}';
    iframe.style = 'width: 1000px; height: 600px;';
    document.body.appendChild(iframe);
    ```