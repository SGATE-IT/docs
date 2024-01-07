# Appendix

## Test Card Information

| Card number      | Cardholder name         | Validity period (MM/YY) | CVV | Whether to support 3DS |
| ---------------- | ----------------------- | ----------------------- | --- | ---------------------- |
| 5123450000000008 | `SGate_{MERCHANT_NAME}` | 07 / 24                 | 100 | Y                      |

- where `{MERCHANT_NAME}` is the English name of the merchant

## STCPAY test account information

| Test Mobile Phone Number | Test Verification Code |
| ------------------------ | ---------------------- |
| 0548220713               | 12345                  |

## Demo Download

GitHub：https://github.com/SGATE-IT/gccpay-client-demo

## Transaction Limit

| **Country**          | **Currency** | **Minimum Payment Amount** | **Maximum Payment Limit** |
| -------------------- | ------------ | -------------------------- | ------------------------- |
| Saudi Arabia         | SAR          | 0.1                        | Unlimited                 |
| Kuwait               | KWD          | 0.25                       | Unlimited                 |
| Bahrain              | BHD          | 0.1                        | 3000                      |
| United Arab Emirates | AED          | 0.1                        | 29000                     |
| Oman                 | OMR          | 0.1                        | 3000                      |
| Qatar                | QAR          | 0.1                        | 29000                     |

::: tip
All limits are gateway transaction limits. If the user's bank card has a limit and it is less than the gateway transaction limit, the user's bank card limit shall prevail.
:::

::: tip
STCPay single payment cannot exceed 500 SAR
:::