# Request/Response Header

::: warning Attention
HTTP headers are case-insensitive. When obtaining response header information, you need to pay attention to whether the library you are using performs special processing on upper and lower case.
:::

When successfully requesting/responding to interface messages, the following HTTP header information needs to be carried.

* **V-Api-Key**

Merchant [API KEY](/en/virtualAccountApi/apiRule/illustrate#api-key) assigned by the system.

* **V-Api-Version**

The interface version used is currently defaulted to `1`

* **V-Timestamp**

The second level timestamp of the request/response, consistent with the signature `timestamp`

* **V-Nonce-Str**

Signature random string, different from signature `nonce_ Str` remains consistent.

* **V-Signature**

`Base64` encoded request/response signature.