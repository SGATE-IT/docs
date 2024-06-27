# 请求/响应头

::: warning 注意
HTTP 标头是大小写不敏感的，获取响应头信息时需注意所使用的库是否对大小写进行了特殊处理。
:::

成功请求/响应接口消息时，需携带以下 HTTP 头信息。

* **V-Api-Key**

系统分配的商户 [API KEY](/zh/virtualAccountApi/apiRule/illustrate#api-key)。

* **V-Api-Version**

使用的接口版本，目前默认为 `1`

* **V-Timestamp**

请求/响应时的秒级时间戳，与签名 `timestamp` 保持一致。

* **V-Nonce-Str**

签名随机字符串，与签名 `nonce_str` 保持一致。

* **V-Signature**

`Base64` 编码的请求/响应签名。