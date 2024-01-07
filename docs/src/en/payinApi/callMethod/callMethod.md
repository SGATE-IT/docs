# Call Method

## Server Information

* **API Service Address**：`{HOST}/api_v1`
  * `HOST`: Domain
    * Sandbox environment domain name: `https://sandbox.sgate.sa`

* **Communication protocol: HTTP**

* **Character encoding: UTF-8**

## Public Parameters

**Public Request Parameters**

HTTP header:

| **Parameter**       | **Type** | **Required** | **Description**                                                     |
| ------------------- | -------- | ------------ | ------------------------------------------------------------------- |
| x-auth-signature    | String   | Y            | Signature string                                                    |
| x-auth-key          | String   | Y            | The key obtained when applying for signature authorization          |
| x-auth-timestamp    | String   | Y            | Timestamp of request initiated int32 seconds                        |
| x-auth-sign-method  | String   | Y            | The signature calculation method is currently unified as HmacSHA256 |
| x-auth-sign-version | String   | Y            | The signature calculation version is currently unified to 1         |

## Authentication Mechanism

1. Construct the header information of the request parameters, and the signature verification all information is in the header information
2. Signature calculation method

   1. Use the key=value format to process key-value pairs. value needs to be processed by `urlencode`
   2. Sort the processed key-value pairs in **ascending order** of the dictionary, and then use `&` symbolic link
   3. Then use the `secret` applied above and use `sha256` to calculate the summary information of the spliced string, and the output is `base64` encoding.
   4. The key-value pairs are as follows:

   | **KEY**     | **Type** | **Description**                                                          |
   | ----------- | -------- | ------------------------------------------------------------------------ |
   | uri         | String   | The requested url minus the root part, for example: /users/100000/orders |
   | key         | String   | The applied key                                                          |
   | timestamp   | Int32    | Timestamp: Int32 seconds                                                 |
   | signMethod  | String   | `HmacSHA256` Fixed                                                       |
   | signVersion | String   | `1` Fixed                                                                |
   | method      | String   | Method requested by the interface, example: "merchant.addOrder"          |

* **Signing code example:**

::: details Click to view code example
::: code-group

```js [NODE]
// ...
const crypto = require('crypto');

const secret = "your secret";

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
    key: "your key",
    timestamp: `${(Date.now() / 1000) | 0}`,
    signMethod: "HmacSHA256",
    signVersion: "1",
    method: "merchant.addOrder",
};

let header = [
  'x-auth-signature'    => generator(opt, secret),
  'x-auth-key'          => "your key",
  'x-auth-timestamp'    => opt.timestamp,
  'x-auth-sign-method'  => 'HmacSHA256',
  'x-auth-sign-version' => "1"
];

// ...
```

```php [PHP]
// ...
$secret = "your secret";
$key    = "your key";

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
signArr["key"]         = "your key"
signArr["method"]      = "merchant.addOrder"
signArr["signMethod"]  = "HmacSHA256"
signArr["signVersion"] = 1
signArr["timestamp"]   = timestamp
signArr["uri"]         = "/users/100000/orders"
signStr = urllib.parse.urlencode(sorted(signArr.items(),key=lambda d:d[0]))

sign = base64.b64encode(hmac.new(bytes("your secret",encoding = "utf-8"),bytes(signStr,encoding = "utf-8"),hashlib.sha256).digest()).decode()

headers = {}

headers["x-auth-signature"]    = sign
headers["x-auth-key"]          = "your key"
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

params.put("key", "your key");
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

SecretKeySpec keySpec = new SecretKeySpec("your secret".getBytes(), "HmacSHA256");
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(keySpec);
byte[] result = mac.doFinal(signStr.getBytes());
BASE64Encoder encoder = new BASE64Encoder();
String sign = encoder.encode(result);

HttpGet get = new HttpGet("request address");

get.addHeader("x-auth-signature", sign);
get.addHeader("x-auth-key", "your key");
get.addHeader("x-auth-timestamp", timestamp);
get.addHeader("x-auth-sign-method", "HmacSHA256");
get.addHeader("x-auth-sign-version", "1");
/// ...
```

:::

## Response Result

**Successful Response**

When the HTTP response status code is `2xx`, the call is successful.

**Failure Response**

When the HTTP response status code is `4xx` or `5xx`, it indicates that the call failed.

**Response Parameter Example**

```json
{
  "code": "notAllowed", // Error code
  "message": "No access", // Wrong description
  // Detailed error message
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