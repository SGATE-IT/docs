# 调用方法

## 服务器信息

* **API 服务地址**：`{HOST}/api_v1`
  * `HOST`: 域名
    * 沙箱环境域名：`https://sandbox.sgate.sa`

* **通信协议：HTTP**

* **字符编码：UTF-8**

## 公共参数

**公共请求参数**

HTTP 中 header：

| **名称**            | **类型** | **是否必填** | **说明**                          |
| ------------------- | -------- | ------------ | --------------------------------- |
| x-auth-signature    | String   | 是           | 签名字符串                        |
| x-auth-key          | String   | 是           | 申请签名授权拿到的 key            |
| x-auth-timestamp    | String   | 是           | 发起请求的时间戳 int32 秒级       |
| x-auth-sign-method  | String   | 是           | 签名计算方式目前统一为 HmacSHA256 |
| x-auth-sign-version | String   | 是           | 签名计算方式版本目前统一为 1      |

## 鉴权机制

1. 构造请求参数的头信息, 签名验证所有信息均在头信息里
2. 签名计算方式

   1. 使用 key=value 的格式处理键值对。value 要经过 `urlencode` 处理,
   2. 按照字典**升序**的方式排序处理后的键值对，然后用 `&` 符号链接
   3. 再利用上面申请到的 `secret` 利用 `sha256` 来计算这个拼接后字符串的摘要信息, 输出为 `base64` 编码
   4. 键值对如下:

   | **KEY**     | **类型** | **说明**                                                                                                                                            |
   | ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
   | uri         | String   | 请求的 url 去掉 root 的部分，例如: /users/100000/orders                                                                                             |
   | key         | String   | 申请到的 key                                                                                                                                        |
   | timestamp   | Int32    | 时间戳： Int32 秒级                                                                                                                                  |
   | signMethod  | String   | `HmacSHA256` 固定                                                                                                                                   |
   | signVersion | String   | `1` 固定                                                                                                                                            |
   | method      | String   | 接口请求的 Method，示例："merchant.addOrder" |

* **加签代码示例：**

::: details 点击查看代码示例
::: code-group

```js [NODE]
// ...
const crypto = require('crypto');

const secret = "您的 secret";

const generator = (opt, secret) => {
    const string = Object.keys(opt)
        .map((k) => `${k}=${encodeURIComponent(opt[k])}`)
        .sort()
        .join('&');
    const h = crypto.createHmac('sha256', secret);
    return h.update(string).digest('base64');
};

const opt = {
    uri: "/users/100000/orders",
    key: "您的 key",
    timestamp: `${(Date.now() / 1000) | 0}`,
    signMethod: "HmacSHA256",
    signVersion: "1",
    method: "merchant.addOrder",
};

let header = [
  'x-auth-signature'    => generator(opt, secret),
  'x-auth-key'          => "您的 key",
  'x-auth-timestamp'    => opt.timestamp,
  'x-auth-sign-method'  => 'HmacSHA256',
  'x-auth-sign-version' => "1"
];

// ...
```

```php [PHP]
// ...
$secret = "您的 secret";
$key    = "您的 key";

$time = time();

$data = [
    'uri'         => "/users/100000/orders",
    'key'         => $key,
    'timestamp'   => $time,
    'signMethod'  => 'HmacSHA256',
    'signVersion' => 1,
    'method'      => "merchant.addOrder"
];

if (is_array($data)) {
    ksort($data);
    $data = http_build_query($data);
}

$str  = (string) $data;
$sign = base64_encode(hash_hmac('sha256', $str, $secret, true));

$header = [
  'x-auth-signature'    => $sign,
  'x-auth-key'          => $key,
  'x-auth-timestamp'    => $time,
  'x-auth-sign-method'  => 'HmacSHA256',
  'x-auth-sign-version' => 1
];
// ...
```

```python [PYTHON]
### ...
timestamp = str(int(time.time()))
signArr   = {}
signArr["key"]         = "您的 key"
signArr["method"]      = "merchant.addOrder"
signArr["signMethod"]  = "HmacSHA256"
signArr["signVersion"] = 1
signArr["timestamp"]   = timestamp
signArr["uri"]         = "/users/100000/orders"
signStr = urllib.parse.urlencode(sorted(signArr.items(),key=lambda d:d[0]))

sign = base64.b64encode(hmac.new(bytes("您的 secret",encoding = "utf-8"),bytes(signStr,encoding = "utf-8"),hashlib.sha256).digest()).decode()

headers = {}

headers["x-auth-signature"]    = sign
headers["x-auth-key"]          = "您的 key"
headers["x-auth-timestamp"]    = timestamp
headers["x-auth-sign-method"]  = "HmacSHA256"
headers["x-auth-sign-version"] = "1"
### ...
```

```java [JAVA]
/// ...
Map<String, String> params = new TreeMap<String, String>(
  new Comparator<String>() {
      @Override
      public int compare(String o1, String o2) {
          return o1.compareTo(o2);
      }
  }
);

String timestamp = String.valueOf(System.currentTimeMillis()/1000);

params.put("key", "您的 key");
params.put("method", "merchant.addOrder");
params.put("signMethod", "HmacSHA256");
params.put("signVersion", String.valueOf(1));
params.put("timestamp", timestamp);
params.put("uri", "/users/100000/orders");

String signStr ="";
for(Object key:params.keySet()){
    if(signStr.length()>0){
        signStr = signStr + "&";
    }
    String value = String.valueOf(key).equals("uri")? java.net.URLEncoder.encode(String.valueOf(params.get(key)),"UTF-8"):String.valueOf(params.get(key));
    signStr = signStr + String.valueOf(key)+"="+value;
}

SecretKeySpec keySpec = new SecretKeySpec("您的 secret".getBytes(), "HmacSHA256");
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(keySpec);
byte[] result = mac.doFinal(signStr.getBytes());
BASE64Encoder encoder = new BASE64Encoder();
String sign = encoder.encode(result);

HttpGet get = new HttpGet("请求地址");

get.addHeader("x-auth-signature", sign);
get.addHeader("x-auth-key", "您的 key");
get.addHeader("x-auth-timestamp", timestamp);
get.addHeader("x-auth-sign-method", "HmacSHA256");
get.addHeader("x-auth-sign-version", "1");
/// ...
```

:::

## 响应结果

**成功响应**

当 HTTP 响应状态码为 `2xx` 时，表明调用成功。

**失败响应**

当 HTTP 响应状态码为 `4xx` 或 `5xx` 时，表明调用失败。

**响应报文示例**

```json
{
  "code": "notAllowed", // 错误代码
  "message": "No access", // 错误描述
  // 详细错误信息
  "data": [
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