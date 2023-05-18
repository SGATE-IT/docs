# Callback Notification

**Summery**

- GCCPAY provides notification callback after order payment completion, and will request the corresponding client
- The merchant needs to provide URL which can receive GET request, GCCPAY will send the callback notification after the payment success. And GCCPAY will attach the `_orderId` parameter to the URL, and the parameter value is the order ID.
- **Sequence diagram**

![img](../_media/callback-notification.svg)

1. Merchant uses GCCPAY API to create a payment order
2. GCCPAY returned success in creating a payment order
3. The payment success
4. GCCPAY sends payment success notification to the URL which is provided by merchant
5. Merchant uses query order API to confirm the order status
6.  GCCPAY returns the status of the queried order
7. After merchant confirms the payment status, then returns response to callback notification which body is `COMPLETED::%ORDER_ID%`
   1. %ORDER_ID%：The payment order ID notifications.
   2. Demo：`COMPLETED::M448726T2022123112531745487632`

**The rules of callback notification**

1. If merchant do not support notification URL, then it will not trigger callback notification function
2. If the notification can not receive correct response, then GCCPAY will retry it, the rule is as follows:

   - If merchant does not respond to callback notification, then GCCPAY will retries 3 times every 5 seconds

   - If merchant's response is error, then GCCPAY will retries 1 time every 15 minutes