# 签名规则

## 参数兼容性

- 请求是否成功，与请求参数的顺序无关。
- 请求是否成功，与请求 JSON 中的键值对出现的顺序无关。
- 处理应答时，不应假设应答 JSON 中的键值对出现的顺序。

## 签名生成



请求签名的生成流程：**构建签名数据** --> **获取签名数据摘要** --> **使用商户私钥对数据摘要签名**


### 构建签名数据

我们希望商户的技术开发人员按照当前文档约定的规则构造签名数据。系统会使用同样的方式构造签名数据。如果商户构造签名数据的方式错误，将导致签名验证不通过。

签名数据应使用以下规定的数据结构进行处理（**以下示例为格式化的 JSON 数据展示，实际数据应在一行**）。

?> 1. 签名数据结构应保证KEY顺序不变
<br> 2. 签名数据转为JSON时，应保持原数据输出（中文不转为unicode、不转义反斜杠等）

```json
{
  "api_key": "xxxxxxxxxxxxxx",
  "timestamp": 1686647706,
  "nonce_str": "TIj5tZ3gM6FbprYlKNR2",
  "url": "/openApi/v1/payee/custom/list",
  "method": "GET",
  "body": ""
}
```

* **api_key**

数据类型：`string`

系统分配的商户 API KEY。


* **timestamp**

数据类型：`number`

请求时的秒级时间戳。

* **nonce_str**

数据类型：`string`

签名随机字符串。

* **url**

数据类型：`string`

去除 HOST 的 URL 信息，需要保留 URL 上的请求参数，URL 需要与实际请求地址一致（URL上的参数的 value 需要 urlencode 处理）。

例如：`https://vbank.sgate.sa/openApi/v1/payee/custom/list?a=1&b=&c=2`

需要签名的 url 为：`/openApi/v1/payee/custom/list?a=1&b=&c=2`


* **method**

数据类型：`string`

接口请求方式，要求大写，例如：`GET\POST`。


* **body**

数据类型：`string`

  * POST请求：body 中以 Raw JSON 形式上报的原始数据。

  * GET 请求：body 为空字符串。

  * 文件上传：body 为空字符串。

### 获取签名数据摘要


当准备好签名数据时，使用 MD5 算法，获取签名数据摘要，示例：

```powershell
# MD5 命令示例
md5 -s '{"api_key":"xxxxxxxxxxxxxx","timestamp":1686647706,"nonce_str":"TIj5tZ3gM6FbprYlKNR2","url":"/openApi/v1/payee/custom/list","method":"GET","body":""}'

# 上面命令输出结果
MD5 ("{"api_key":"xxxxxxxxxxxxxx","timestamp":1686647706,"nonce_str":"TIj5tZ3gM6FbprYlKNR2","url":"/openApi/v1/payee/custom/list","method":"GET","body":""}") = 8a5908e27626d79d73dc14bd9ba00e72

# 8a5908e27626d79d73dc14bd9ba00e72 即为数据摘要，是后续需要进行签名的明文数据。
```

### 使用商户私钥对数据摘要签名

使用**商户私钥**对数据摘要进行**签名**，签名结果应使用**Base64**对结果进行编码。

## 响应签名

响应签名处理流程同请求签名，响应签名使用**系统私钥**进行签名。

构建数据说明：

* api_key：同请求签名中的数据一致。
* timestamp：发起响应时的秒级时间戳。
* nonce_str：随机生成字符串。
* url：同请求签名中的数据一致。
* method：同请求签名中的数据一致。
* body：响应结果数据。

!>  注意：当商户信息鉴别失败，此时响应签名会返回空字符串，此场景为极端情况，正常业务中不会出现该情况。