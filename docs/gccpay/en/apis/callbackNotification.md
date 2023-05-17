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

1. If merchants do not support the URL callback notification needed, then the callback notification function will not be triggered.
2. If GCCPAY does not receive callback notification response, then multiple requests will be made. The rules are as follows:
   - The time intervals of the first 10 requests are：0, 0, 2, 5, 10, 17, 25, 34, 46, 60 second
   - After the 11 times, the interval between each subsequent notification is 2500 seconds, and the max number of notifications is 205