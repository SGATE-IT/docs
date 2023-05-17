# Appendix

## Test Card Information

| Card NO          | Cardholder Name       | Expired Date（MM/YY） | CVV  | 3D Secure Enrolled |
| ---------------- | --------------------- | --------------------- | ---- | ------------------ |
| 5123450000000008 | GCCPay_%MerchantName% | 07 / 24               | 100  | Y                  |

- %MerchantName% needs to be replaced with the English name of merchant

## STCPAY Test Information

| Test telephone | Test OTP number |
| -------------- | --------------- |
| 0548220713     | 12345           |

## Order status

-  `pending` : Merchant's payment order is pending
-  `paid` : The payer has paid the payment order
-  `closed` : The payment order is closed
-  `expired` : The payment order is expired

## Demo Link

Git : https://github.com/SGATE-IT/gccpay-client-demo

## Payment Transaction limit

| **Country**              | **Currency** | **Minimm payment amount** | **Maximum payment amount** |
| ------------------------ | ------------ | ------------------------- | -------------------------- |
| Saudi Arabia             | SAR          | 0.1                       | unlimited                  |
| Kuwait                   | KWD          | 0.25                      | unlimited                  |
| Bahrain                  | BHD          | 0.1                       | 3000                       |
| The United Arab Emirates | AED          | 0.1                       | 29000                      |
| Oman                     | OMR          | 0.1                       | 3000                       |
| Qatar                    | QAR          | 0.1                       | 29000                      |
| Egypt                    | EGP          | 0.1                       | 238000                     |

!> PS: All limits are gateway transaction limits. If the user's bank card has a limit and is less than the gateway transaction limit, the user's bank card limit shall prevail