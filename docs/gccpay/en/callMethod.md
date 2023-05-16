# Call Method

## Term Explanation

| Term                            | Illustration                                                 |
| ------------------------------- | ------------------------------------------------------------ |
| Merchant                        | The merchant is the seller in the payment scenario, and the payment system is helping the seller to realize the collection business. |
| Payer                           | The buyer pays the seller through the payment page in the payment scene. |
| Payment order                   | It is created by the seller calling the create order API of the payment gateway by signature, and is used for collection. |
| Transaction                     | When the payer pays the seller through the payment page, a certain payment behavior is a transaction. One order may generate multiple payment transactions, but only one will succeed. If only one payment transaction succeeds, others will automatically invalidated. |
| 2FA(2-step verification string) | Using Google Indentity to improve account security, users need to import into the Google Identity Authentication installed on their mobile phones, and the verification data needs to be verified. |
| Client                          | Contains the ID, key and secret used to calculate the signature. |

## Service info

### Sandbox environment

**Service address：https://sandbox.gcc-pay.com/api_v1/**

**Communication protocol：HTTP**

**Encoding：UTF-8**

## Public parameters

Public request parameters

HTTP's header：

| Header name         | Type   | Is required | Illstration                                                  |
| ------------------- | ------ | ----------- | ------------------------------------------------------------ |
| x-auth-signature    | String | Yes         | The string of auth signature                                 |
| x-auth-key          | String | Yes         | The key of auth                                              |
| x-auth-timestamp    | String | Yes         | The request's timestamp, int32, accurate to seconds          |
| x-auth-sign-method  | String | Yes         | The signature calculation method is currency unified as HmacSHA256 |
| x-auth-sign-version | String | Yes         | The signature calculation method version is currently unified as 1 |

## Authentication mechanism

1. Construct the header information of the request parameters, and all the information in the signature verification is in the header information
2. Signature calculation method
   1. Arrange a batch of key-value pairs into the format of key=value. value is processed by urlencode;
   2. Then sort the batch of key-value pairs in ascending dictionary order, and then use the & symbolic link;
   3. Then use the secret applied above to use sha256 to calculate the summary information of the spliced string, and the output is base64 encoding.
   4. The key-value pairs are as follows
      1. `uri`: the requested url without the root part, for example: /users/100000/orders
      2. `key`: the applied key
      3. `timestamp`: timestamp, int32, accurate to seconds
      4. `signMethod`: fixed, "HmacSHA256"
      5. `signVersion`: fixed, "1" 
      6. `method`: 
         1. Create order：merchant.addOrder
         2. Query order：order.detail
         3. Query merchant information：merchant.detail

## Response Result

**Successful response**

When the HTTP response status code is `2xx`, the call is successful.

**Failure response**

When the HTTP response status code is `4xx` or `5xx`, the call fails.

**Response Sample**

```json
{
    "code": "notAllowed", ### Error code
    "message": "No access", ### Error description
    "data": ### Error detail
    [
        "signature error",
        {
            "uri": "/merchants/M448726",
            "key": "zS83UNCPhVTqBxDHACJ30sImZRKAlzQI",
            "timestamp": 1672991487,
            "signMethod": "HmacSHA256",
            "signVersion": "1",
            "method": "merchant.detail"
        }
    ]
}
```

[footer](../../_common/zh-cn/_footer.md ':include')