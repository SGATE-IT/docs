# 证书/密钥

## 系统公钥

由系统分配给商户的系统公钥，每个商户对应的系统公钥不同。

## 商户公/私钥

商户侧生成的公/私钥，生成规则需要遵循约定的[公/私钥算法](/zh/virtualAccountApi/apiRule/certificateKey#公-私钥算法)，否则可能会出现签名验证不通过的问题。


## 公/私钥算法

* 密钥算法：`RSA`
  * 对应 JAVA 算法：`RSA`
  * 对应 PHP 算法：`OPENSSL_KEYTYPE_RSA`

- 密钥字节数：2048
- 密钥格式：JAVA 需使用 PKCS8 格式，其他语言使用 PKCS1 格式。

* 签名算法：`MD5`
  * 对应 JAVA 算法：`MD5withRSA`
  * 对应 PHP 算法：`OPENSSL_ALGO_MD5`

* 填充模式：`OPENSSL_PKCS1_PADDING`

* 数据交互：签名、加密数据使用 `Base64` 编码数据传输


**使用 openssl 命令生成公私钥示例**

```shell
# 生成私钥

openssl genrsa -out key.pem 2048

# 私钥转换为pkcs8格式，后续就是用这个作为私钥

openssl pkcs8 -topk8 -inform PEM -in key.pem -outform PEM -nocrypt

# 生成公钥

openssl rsa -in key.pem -pubout -out public.pem
```

**代码示例**

::: details 点击查看代码示例
::: code-group

```java [JAVA]
/// ...
/**
 * 私钥加签
 * @param data 原始数据
 * @param privateKey 私钥
 * @return 加密数据
 * @throws Exception
 */
static String sign(String data, String privateKey) throws Exception {
byte[] keyBytes = Base64.decode(privateKey);
PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(keyBytes);

KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
PrivateKey privateK   = keyFactory.generatePrivate(pkcs8KeySpec);
Signature signature   = Signature.getInstance(SIGNATURE_ALGORITHM);

signature.initSign(privateK);
signature.update(data.getBytes(ENCODING));
return Base64.encodeToString(signature.sign());
}

/**
 * 公钥验签
 * @param data 原始数据
 * @param publicKey 公钥
 * @param sign 数据签名
 * @return 验签结果
 * @throws Exception
 */
static boolean verifySign(String data, String publicKey, String sign) throws Exception {
try {
    byte[] keyBytes = Base64.decode(publicKey);

    X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
    KeyFactory keyFactory      = KeyFactory.getInstance(KEY_ALGORITHM);
    PublicKey publicK          = keyFactory.generatePublic(keySpec);
    Signature signature        = Signature.getInstance(SIGNATURE_ALGORITHM);

    signature.initVerify(publicK);
    signature.update(data.getBytes(ENCODING));

    return signature.verify(Base64.decode(sign));
} catch (Exception e) {
    throw e;
}
}

/**
 * 私钥加密
 * @param dataStr 原始数据
 * @param privateKey 私钥
 * @return 加密数据
 * @throws Exception
 */
static String encryptByPrivateKey(String dataStr, String privateKey) throws Exception {
    byte[] data     = dataStr.getBytes(ENCODING);
    byte[] keyBytes = Base64.decode(privateKey);

    PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
    Key privateK          = keyFactory.generatePrivate(pkcs8KeySpec);
    Cipher cipher         = Cipher.getInstance(keyFactory.getAlgorithm());

    cipher.init(Cipher.ENCRYPT_MODE, privateK);
    int inputLen = data.length;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    int offSet = 0;
    byte[] cache;
    int i = 0;
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_ENCRYPT_BLOCK) {
            cache = cipher.doFinal(data, offSet, MAX_ENCRYPT_BLOCK);
        } else {
            cache = cipher.doFinal(data, offSet, inputLen - offSet);
        }
        out.write(cache, 0, cache.length);
        i++;
        offSet = i * MAX_ENCRYPT_BLOCK;
    }
    byte[] encryptedData = out.toByteArray();
    out.close();
    return Base64.encodeToString(encryptedData);
}

/**
 * 公钥解密
 * @param encryptedDataStr 加密数据
 * @param publicKey 公钥
 * @return 解密后数据
 * @throws Exception
 */
static String decryptByPublicKey(String encryptedDataStr, String publicKey) throws Exception {
    byte[] encryptedData = Base64.decode(encryptedDataStr);
    byte[] keyBytes      = Base64.decode(publicKey);

    X509EncodedKeySpec x509KeySpec = new X509EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
    Key publicK = keyFactory.generatePublic(x509KeySpec);
    Cipher cipher = Cipher.getInstance(keyFactory.getAlgorithm());

    cipher.init(Cipher.DECRYPT_MODE, publicK);
    int inputLen = encryptedData.length;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    int offSet = 0;
    byte[] cache;
    int i = 0;
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
            cache = cipher.doFinal(encryptedData, offSet, MAX_DECRYPT_BLOCK);
        } else {
            cache = cipher.doFinal(encryptedData, offSet, inputLen - offSet);
        }
        out.write(cache, 0, cache.length);
        i++;
        offSet = i * MAX_DECRYPT_BLOCK;
    }
    byte[] decryptedData = out.toByteArray();
    out.close();
    return new String(decryptedData, ENCODING);
}

/**
 * 公钥加密
 * @param dataStr 原始数据
 * @param publicKey 公钥
 * @return 加密数据
 * @throws Exception
 */
static String encryptByPublicKey(String dataStr, String publicKey) throws Exception {
    byte[] data     = dataStr.getBytes(ENCODING);
    byte[] keyBytes = Base64.decode(publicKey);

    X509EncodedKeySpec x509KeySpec = new X509EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
    Key publicK           = keyFactory.generatePublic(x509KeySpec);
    Cipher cipher         = Cipher.getInstance(keyFactory.getAlgorithm());

    cipher.init(Cipher.ENCRYPT_MODE, publicK);
    int inputLen = data.length;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    int offSet = 0;
    byte[] cache;
    int i = 0;
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_ENCRYPT_BLOCK) {
            cache = cipher.doFinal(data, offSet, MAX_ENCRYPT_BLOCK);
        } else {
            cache = cipher.doFinal(data, offSet, inputLen - offSet);
        }
        out.write(cache, 0, cache.length);
        i++;
        offSet = i * MAX_ENCRYPT_BLOCK;
    }
    byte[] encryptedData = out.toByteArray();
    out.close();
    return Base64.encodeToString(encryptedData);
}

/**
 * 私钥解密
 * @param encryptedDataStr 加密数据
 * @param privateKey 私钥
 * @return 解密后数据
 * @throws Exception
 */
static String decryptByPrivateKey(String encryptedDataStr, String privateKey) throws Exception {
    byte[] encryptedData = Base64.decode(encryptedDataStr);
    byte[] keyBytes      = Base64.decode(privateKey);

    PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
    Key privateK          = keyFactory.generatePrivate(pkcs8KeySpec);
    Cipher cipher         = Cipher.getInstance(keyFactory.getAlgorithm());

    cipher.init(Cipher.DECRYPT_MODE, privateK);
    int inputLen = encryptedData.length;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    int offSet = 0;
    byte[] cache;
    int i = 0;
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
            cache = cipher.doFinal(encryptedData, offSet, MAX_DECRYPT_BLOCK);
        } else {
            cache = cipher.doFinal(encryptedData, offSet, inputLen - offSet);
        }
        out.write(cache, 0, cache.length);
        i++;
        offSet = i * MAX_DECRYPT_BLOCK;
    }
    byte[] decryptedData = out.toByteArray();
    out.close();
    return new String(decryptedData, ENCODING);
}
/// ...
```

```php [PHP]
// ...
/**
 * 私钥加签
 * @param string $dataStr 数据字符串
 * @param string $privateKey 私钥
 * @return string
 */
public static function sign($dataStr, $privateKey)
{
    $dataStr = self::str2utf8($dataStr);
    $privateKeyId = openssl_get_privatekey($privateKey);
    openssl_sign($dataStr, $sign, $privateKeyId, self::SIGNATURE_ALGORITHM);
    if (PHP_VERSION_ID < 80000) {
        openssl_free_key($privateKeyId);
    }
    return base64_encode($sign);
}

/**
 * 公钥验签
 * @param string $dataStr 加签原数据字符串
 * @param string $publicKey 公钥
 * @param string $sign 签名
 * @return bool
 */
public static function verifySign($dataStr, $publicKey, $sign)
{
    $dataStr     = self::str2utf8($dataStr);
    $publicKeyId = openssl_get_publickey($publicKey);
    return (boolean) openssl_verify($dataStr, base64_decode($sign), $publicKeyId, self::SIGNATURE_ALGORITHM);
}

/**
 * 私钥加密
 * @param string $dataStr 加签原数据字符串
 * @param string $privateKey 私钥
 * @return string
 */
public static function encryptByPrivateKey($dataStr, $privateKey)
{
    $dataStr      = self::str2utf8($dataStr);
    $privateKeyId = openssl_get_privatekey($privateKey);
    $data         = "";

    $dataArray = str_split($dataStr, self::PRIVATE_KEY_BITS / 8 - 11);
    foreach ($dataArray as $value) {
        openssl_private_encrypt($value,$encryptedTemp, $privateKeyId,self::EN_DE_ALGORITHM);
        $data .= $encryptedTemp;
    }
    if (PHP_VERSION_ID < 80000) {
        openssl_free_key($privateKeyId);
    }
    return base64_encode($data);
}

/**
 * 公钥解密
 * @param string $encryptData 加密数据字符串
 * @param string $publicKey 公钥
 * @return string
 */
public static function decryptByPublicKey($encryptData, $publicKey) {
    $decrypted   = "";
    $decodeStr   = base64_decode($encryptData);
    $publicKeyId = openssl_get_publickey($publicKey);

    $enArray = str_split($decodeStr, self::PRIVATE_KEY_BITS / 8);

    foreach ($enArray as $value) {
        openssl_public_decrypt($value,$decryptedTemp, $publicKeyId,self::EN_DE_ALGORITHM);
        $decrypted .= $decryptedTemp;
    }
    if (PHP_VERSION_ID < 80000) {
        openssl_free_key($publicKeyId);
    }
    return $decrypted;
}

/**
 * 公钥加密
 * @param string $dataStr 加签原数据字符串
 * @param string $publicKey 公钥
 * @return string
 */
public static function encryptByPublicKey($dataStr, $publicKey)
{
    $dataStr     = self::str2utf8($dataStr);
    $publicKeyId = openssl_get_publickey($publicKey);
    $data        = "";

    $dataArray = str_split($dataStr, self::PRIVATE_KEY_BITS / 8 - 11);
    foreach ($dataArray as $value) {
        openssl_public_encrypt($value,$encryptedTemp, $publicKeyId,self::EN_DE_ALGORITHM);
        $data .= $encryptedTemp;
    }
    openssl_free_key($publicKeyId);
    return base64_encode($data);
}

/**
 * 私钥解密
 * @param string $encryptData 加密数据字符串
 * @param string $private 私钥
 * @return string
 */
public static function decryptByPrivateKey($encryptData, $private) {
    $decrypted    = "";
    $decodeStr    = base64_decode($encryptData);
    $privateKeyId = openssl_get_privatekey($private);

    $enArray = str_split($decodeStr, self::PRIVATE_KEY_BITS / 8);

    foreach ($enArray as $value) {
        openssl_private_decrypt($value,$decryptedTemp, $privateKeyId,self::EN_DE_ALGORITHM);
        $decrypted .= $decryptedTemp;
    }
    openssl_free_key($privateKeyId);
    return $decrypted;
}
// ...
```

:::