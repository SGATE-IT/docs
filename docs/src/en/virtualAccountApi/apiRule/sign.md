# Signature Rules

## Parameter Compatibility

- The success of the request is independent of the order of the request parameters.
- The success of the request is independent of the order in which key value pairs appear in the request `JSON`.
- When processing responses, the order in which key value pairs appear in response `JSON `should not be assumed.

## Signature Generation

Request signature generation process: **Build signature data** --> **Obtain signature data summary** --> **Use merchant [private key](/en/virtualAccountApi/apiRule/certificateKey#merchant-public-private-key) to sign data summary**

### Build Signature Data

We hope that the technical developers of the merchant will construct signature data according to the rules agreed in the current document. The system will construct signature data in the same way. If the merchant constructs the signature data incorrectly, it will result in the signature verification not passing.

Signature data should be processed using the following specified data structure:

::: danger Attention
1. The signature data structure should ensure that the KEY order remains unchanged
2. When converting signature data to JSON, the original data output should be maintained (Chinese should not be converted to Unicode, backslashes should not be escaped, etc.)
:::

::: tip Notification
The following example is a formatted JSON data display, where the actual data should be on one line
:::

```json
{
  "api_key": "xxxxxxxxxxxxxx",
  "timestamp": 1686647706,
  "nonce_str": "TIj5tZ3gM6FbprYlKNR2",
  "url": "/openApi/v1/virtualAccount/receivingTrans/list",
  "method": "GET",
  "body": ""
}
```

* **api_key**

Data type：`string`

Merchant [API KEY](/en/virtualAccountApi/apiRule/illustrate#api-key)。

* **timestamp**

Data type：`number`

The second level timestamp at the time of the request.

* **nonce_str**

Data type：`string`

The signature is a random string, with a length requirement of less than 128 bits.

* **url**

Data type：`string`

The signature random character a removes the URL information of HOST, and the request parameters on the URL need to be preserved. The URL needs to be consistent with the actual request address (the value of the parameters on the URL needs to be processed by `urlencode`). The string must be less than 128 bits in length.

For example：`https://vbank.sgate.sa/openApi/v1/virtualAccount/receivingTrans/list?a=1&b=&c=2`

The URL that needs to be signed is：`/openApi/v1/virtualAccount/receivingTrans/list?a=1&b=&c=2`

* **method**

Data type：`string`

Interface request method, requiring uppercase, such as `GET`, `POST`


* **body**

数据类型：`string`

Data type：`string`

`POST`  **request**：The raw data reported in Raw JSON format in the body.

`GET` **request**：Body is an empty string.

**File upload**：Body is an empty string.

### Obtain Signature Data Summary

When the **signature data** is ready, use the ` MD5 ` algorithm to obtain a summary of the signature data, for example:

```shell
# MD5 Command Example
md5 -s '{"api_key":"xxxxxxxxxxxxxx","timestamp":1686647706,"nonce_str":"TIj5tZ3gM6FbprYlKNR2","url":"/openApi/v1/virtualAccount/receivingTrans/list","method":"GET","body":""}'

# The above command outputs the result
MD5 ("{"api_key":"xxxxxxxxxxxxxx","timestamp":1686647706,"nonce_str":"TIj5tZ3gM6FbprYlKNR2","url":"/openApi/v1/virtualAccount/receivingTrans/list","method":"GET","body":""}") = 8a5908e27626d79d73dc14bd9ba00e72

# 8a5908e27626d79d73dc14bd9ba00e72 is the data digest, which is the plaintext data that needs to be signed in the future.
```

### Signing data digest using merchant private key

Use the merchant's [private key](/en/virtualAccountApi/apiRule/certificateKey#merchant-public-private-key) to sign the data digest, and the signature result should be encoded using `Base64`.

## Response Signature

The system response result and signature processing process are the same as request signing, and the response signature is signed using the system **private key**.

Build Data Description：

* `api_key`：Consistent with the data in the request signature.
* `timestamp`：The second level timestamp when the system initiates a response.
* `nonce_str`：Randomly generate a string.
* `url`：Consistent with the data in the request signature.
* `method`：Consistent with the data in the request signature.
* `body`：Response result data.

::: warning Warning
When merchant information authentication fails, the response signature will return an empty string, which is an extreme scenario that does not occur in normal business.
:::