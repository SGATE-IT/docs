# 签名

## 参数兼容性

- 请求是否成功，与请求参数的顺序无关。
- 请求是否成功，与请求 JSON 中的键值对出现的顺序无关。
- 处理应答时，不应假设应答 JSON 中的键值对出现的顺序。

## 请求签名



请求签名的生成流程：**构建签名数据** --> **获取签名数据摘要** --> **使用商户私钥对数据摘要签名**



### 构建签名数据



签名应构建以下数据结构进行处理（**以下示例为格式化的 JSON 数据展示，实际数据应在一行**）。

!> 签名数据结构应保证KEY顺序不变

!> 签名数据转为JSON时，中文不转为unicode、不转义反斜杠

```json
{
  "api_key": "QH4Bf8O2RWcgpojN",
  "timestamp": 1680070775,
  "nonce_str": "sy7zJR9PBI83X8alLDIf",
  "url": "/openApi/v1/payee/custom/list?pageNo=1",
  "method": "GET",
  "body": ""
}
```

* api_key

数据类型：`string`

系统分配的商户 API KEY。



* timestamp

数据类型：`int`

请求时的秒级时间戳。



* nonce_str

数据类型：`string`

签名随机字符串。



* url

数据类型：`string`

去除 HOST 的 URL 信息，需要保留 URL 上的请求参数，URL 需要与实际请求地址一致（URL 同请求地址，参数的 value 需要 urlencode 处理）。

例如：`https://vbank.sgate.sa/openApi/v1/payee/custom/list?a=1&b=&c=2`

需要签名的 url 为：`/openApi/v1/payee/custom/list?a=1&b=&c=2`



* method

数据类型：`string`

请求方法。



* body

  固定字符串类型

  * POST请求：body 中以 Raw JSON 形式上报的数据。

  * GET 请求：body 为空字符串。

  * 文件上传：body 为空字符串。



### 获取签名数据摘要


当准备好签名数据时，使用 MD5 算法，进行数据摘要，示例：

```
md5('{"api_key":"QH4Bf8O2RWcgpojN","timestamp":1680070775,"nonce_str":"sy7zJR9PBI83X8alLDIf","url":"/openApi/v1/payee/custom/list?pageNo=1","body":""}');
```


### 使用商户私钥对数据摘要签名

使用**商户私钥**对数据摘要进行**签名**，签名结果应为**base64**格式字符串。


## 响应签名

响应签名处理流程同请求签名，响应签名使用**系统私钥**进行签名。

构建数据说明：

* api_key：同请求签名中的数据一致。
* timestamp：发起响应时的时间戳。
* nonce_str：随机生成字符串。
* url：同请求签名中的数据一致。
* method：同请求签名中的数据一致。
* body：响应结果数据。



!>  注意：当商户信息鉴别失败，此时响应签名会返回空字符串，此场景为极端情况，正常业务中不会出现该情况。