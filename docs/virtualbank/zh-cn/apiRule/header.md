# 成功请求/响应头

成功请求/响应接口消息时，需携带以下HTTP头。



* V-Api-Key

系统分配的商户 API KEY。



* V-Api-Version

使用的接口版本，目前默认为 `1`



* V-Timestamp

请求/响应时的秒级时间戳，与签名 `timestamp` 保持一致。



* V-Nonce-Str

签名随机字符串，与签名 `nonce_str` 保持一致。



* V-Signature

请求/响应签名。