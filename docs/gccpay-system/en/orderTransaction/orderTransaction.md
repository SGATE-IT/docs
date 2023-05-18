# Order & Transaction

## Order

All the payment orders will show in the [Orders] model.

![img](../_media/orderTransaction-1.png ':size=90%')

- The order has the following statuses:

![img](../_media/orderTransaction-2.png ':size=80%')

You can click the order name to see the order detail

![img](../_media/orderTransaction-3.png ':size=45%')
![img](../_media/orderTransaction-4.png ':size=45%')

## Transaction

The relationship between Order and Transaction

- Transaction: The information interaction between GCCPAY and channel providers is called transaction
- Order : As long as the merchant transmits the transaction information to the gccpay system, an order message will be generated whether the transaction succeeds or fails
- Tips：One order does not necessarily generate one transaction, but one transaction must correspond to one order

All the transactions will show in the [Transactions] model.

![img](../_media/orderTransaction-5.png ':size=90%')

- The transaction has the following result

![img](../_media/orderTransaction-6.png ':size=90%')

You can click the transaction ID to see the detail

![img](../_media/orderTransaction-7.png ':size=45%')
![img](../_media/orderTransaction-8.png ':size=45%')

- The transaction has the following status:

![img](../_media/orderTransaction-9.png ':size=80%')

- Notification times：Transaction notification merchant times
- Completed time：Channel return time
- Successfully notified time：Time to notify merchant of transaction result