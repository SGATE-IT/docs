# Callback Notification

## Function Description

- SGate provides notification callbacks for order payment/refund completion, and will request the corresponding Client's notification URL
- The merchant needs to provide a URL to receive `GET` requests. SGate will send a callback notification to the URL provided by the merchant after **successful completion of payment transaction** or **successful completion of refund**. SGate appends the following parameters to the URL:

   | **Parameter** | **Type** | **Description**                                                            | **Example**                      |
   | ------------- | -------- | -------------------------------------------------------------------------- | -------------------------------- |
   | _orderId      | string   | Order ID                                                                   | "M000001T2022101023455774363043" |
   | _type         | string   | Callback type: <br> payment: complete payment <br> refund: complete refund | "payment"                        |

  * Example: `https://merchant.com/Notification?_orderId=M000001T2022101023455774363043&_type=payment`

## Flow Description

![img](/images/payinApi_en/callback-notification.svg)

1. The merchant calls the SGate "Create Order" or "Initiate a Refund" interface to create a transaction.
2. SGate returns transaction creation success
3. SGate transaction processed successfully
4. SGate sends a callback notification to the URL provided by the merchant to notify the merchant that the transaction is successful.
5. The merchant calls the query interface corresponding to the SGate transaction to confirm the status.
6. SGate returns the transaction status queried by the merchant
7. After the merchant confirms that the transaction status is correct, a callback notification is returned, in which the body is: `COMPLETED::{ORDER_ID}`
    * `{ORDER_ID}`: Order ID of callback notification
    * Example: `COMPLETED::M448726T2022123112531745487632`

## Callback Notification Rules

- If the merchant does not provide a URL for receiving callback notifications, the callback notification function will not be triggered.
- If the notification callback is not responded to correctly, it will be requested multiple times. The rules are as follows:
   - If the merchant does not respond to the callback notification, SGate will retry 3 times every 5 seconds.
   - If the merchant callback notification returns an error, SGate will retry every 15 minutes.