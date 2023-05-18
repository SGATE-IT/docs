# Payment

## Create a new client

Befor using the payment system, you need to create payment links.

- Select [Payment Links] in the meau, and click [Create] to create a new client.

![img](../_media/payment-1.png ':size=45%')
![img](../_media/payment-2.png ':size=45%')

- Name : The name of payment link.
- Bind IP(Optional) : 
  - If not filling in IP address, all servers can be connected to this client through API.
  - If the IP address is filled in, the IP is the only one accessible to the client
- Notification URL(Optional) : 
  - If not filling in [Notification URL], the payment system will not use [Callback Notification]
  - If the [Notification URL] is filled in, the payment system will send [Callback Notification] to the URL

!> PS : For details of the [Callback Notification] function, please refer to GCCPAY Open API documentation

## Payment Link

After you create the client, you can click the payment link name to see the details.

![img](../_media/payment-3.png ':size=90%')

### Default payment link

1. In the payment link detail, the default payment link is in [Link URL] models. The default payment link requires the customer to manually select the payment currency and amount for payment.

![img](../_media/payment-4.png ':size=45%')
![img](../_media/payment-5.png ':size=45%')

2. But you can set the default payment link config by  [Set cashier config]

![img](../_media/payment-6.png ':size=45%')
![img](../_media/payment-7.png ':size=45%')

- Need address: Whether to display the payer's receipt information after the payer has successfully paid.

![img](../_media/payment-8.png ':size=90%')

- Need tip: Whether to display the tip payment model when the payer pays
- Tip options: The preset tip amount of default payment link

![img](../_media/payment-9.png ':size=90%')

### Create payment link for fixed currency and amount

You can create a fixed currency and amount payment link according to the needs

![img](../_media/payment-10.png ':size=45%')
![img](../_media/payment-11.png ':size=45%')

- Payment currency: The currency of this payment link.
- Payment amount: The amount of this payment link.
- Need address: Whether to display the payer's receipt information after the payer has successfully paid.
- Need tip: Whether to display the tip payment model when the payer pays
- Tip options: The preset tip amount of default payment link

![img](../_media/payment-12.png ':size=90%')