# 证书/密钥

## 系统公钥

由系统分配给商户的系统公钥，每个商户对应的系统公钥不同。

## 商户公/私钥

商户侧生成的公/私钥，生成规则需要遵循约定的[公/私钥算法](/zh/payoutApi/apiRule/certificateKey#公-私钥算法)，否则可能会出现签名验证不通过的问题。


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
package com.local.utils;

import org.apache.shiro.codec.Base64;

import javax.crypto.Cipher;
import java.io.ByteArrayOutputStream;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

/**
 * RSAUtils
 */
public class RSAUtils {

    /**
     * Signature algorithm
     */
    private static final String KEY_ALGORITHM = "RSA";
    private static final String SIGNATURE_ALGORITHM = "MD5withRSA";

    /**
     * Get the key of the public key
     */
    private static final String PUBLIC_KEY = "RSAPublicKey";

    /**
     * Get the key of the private key
     */
    private static final String PRIVATE_KEY = "RSAPrivateKey";

    /**
     * RSA maximum encrypted plaintext size
     */
    private static final int MAX_ENCRYPT_BLOCK = 245;

    /**
     * RSA maximum decryption ciphertext size
     */
    private static final int MAX_DECRYPT_BLOCK = 256;

    /**
     * Data encoding
     */
    private static final String ENCODING = "UTF-8";

    /**
     * Data encoding
     * @return Key pair Map object
     */
    static Map<String, Object> resetGenKeyPair() throws Exception {
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance(KEY_ALGORITHM);
        keyPairGen.initialize(2048);

        KeyPair keyPair            = keyPairGen.generateKeyPair();
        RSAPublicKey publicKey     = (RSAPublicKey) keyPair.getPublic();
        RSAPrivateKey privateKey   = (RSAPrivateKey) keyPair.getPrivate();
        Map<String, Object> keyMap = new HashMap<String, Object>(2);

        keyMap.put(PUBLIC_KEY, publicKey);
        keyMap.put(PRIVATE_KEY, privateKey);
        return keyMap;
    }

    /**
     * Get public key
     * @param keyMap Key pair Map object
     * @return Public key
     */
    static String getPublicKey(Map<String, Object> keyMap) throws Exception {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return Base64.encodeToString(key.getEncoded());
    }

    /**
     * Get private key
     * @param keyMap Key pair Map object
     * @return Private key
     */
    static String getPrivateKey(Map<String, Object> keyMap) throws Exception {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return Base64.encodeToString(key.getEncoded());
    }

    /**
     * Private key signature
     * @param data Raw data
     * @param privateKey Private key
     * @return Encrypt data
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
     * Public key signature verification
     * @param data Raw data
     * @param publicKey Public key
     * @param sign Data signature
     * @return Signature verification results
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
     * Private key encryption
     * @param dataStr Raw data
     * @param privateKey Private key
     * @return Encrypt data
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
     * Public key decryption
     * @param encryptedDataStr Encrypt data
     * @param publicKey Public key
     * @return Decrypted data
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
     * Public key encryption
     * @param dataStr Raw data
     * @param publicKey Public key
     * @return Encrypt data
     */
    public static String encryptByPublicKey(String dataStr, String publicKey) throws Exception {
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
     * Private key decryption
     * @param encryptedDataStr Encrypt data
     * @param privateKey Private key
     * @return Decrypted data
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

}
```

```php [PHP]
<?php

/**
 * RSAUtils
 */
class RSAUtils
{
    /**
     * Signature algorithm 
     */
    const KEY_ALGORITHM       = OPENSSL_KEYTYPE_RSA;
	const SIGNATURE_ALGORITHM = OPENSSL_ALGO_MD5;
	const EN_DE_ALGORITHM     = OPENSSL_PKCS1_PADDING;

    /**
     * Byte count
     */
    const PRIVATE_KEY_BITS = 2048;

    const PUBLIC_TYPE  = 'pub';
    const PRIVATE_TYPE = 'pri';

    /**
     * Generate key pairs (public and private keys)
     */
	public static function resetGenKeyPair()
    {
        $config = array(
            "private_key_bits" => self::PRIVATE_KEY_BITS,
            "private_key_type" => self::KEY_ALGORITHM,
        );

        $openssl = openssl_pkey_new($config);
        openssl_pkey_export($openssl, $privateKey);
        $publicKey = openssl_pkey_get_details($openssl);
        $publicKey = $publicKey["key"];

        return [
            'publicKey'     => $publicKey,
            'privateKey'    => $privateKey,
            'publicKeyStr'  => self::key2str($publicKey),
            'privateKeyStr' => self::key2str($privateKey)
        ];
    }

    /**
     * Private key signing
     * @param string $dataStr Data String
     * @param string $privateKey Private key
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
     * Public key verification
     * @param string $dataStr Add signature to the original data string
     * @param string $publicKey Public key
     * @param string $sign Signature
     * @return bool
     */
    public static function verifySign($dataStr, $publicKey, $sign)
    {
        $dataStr     = self::str2utf8($dataStr);
        $publicKeyId = openssl_get_publickey($publicKey);
        return (boolean) openssl_verify($dataStr, base64_decode($sign), $publicKeyId, self::SIGNATURE_ALGORITHM);
    }

    /**
     * Public key encryption
     * @param string $dataStr Add signature to the original data string
     * @param string $publicKey Public key
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
        if (PHP_VERSION_ID < 80000) {
            openssl_free_key($publicKeyId);
        }
        return base64_encode($data);
    }

    /**
     * Private key encryption
     * @param string $dataStr Add signature to the original data string
     * @param string $privateKey Private key
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
     * Public key decryption
     * @param string $encryptData Encrypted data string
     * @param string $publicKey Publci key
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
     * Private key decryption
     * @param string $encryptData Encrypted data string
     * @param string $private Private key
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
        if (PHP_VERSION_ID < 80000) {
            openssl_free_key($privateKeyId);
        }
        return $decrypted;
    }

    /**
     * Convert public and private keys to string format
     * @param string $key Public and private keys
     * @return string
     */
    public static function key2str($key)
    {
        $key = preg_replace('/-----.*-----/','', $key);
        $key = preg_replace('/[\n\s]/','', $key);
        return is_string($key) ? $key : '';
    }

    /**
     * Convert string to public/private key format
     * @param string $str String
     * @param string $type pub || pri
     * @return string
     */
    public static function str2key($str, $type)
    {
        $key   = wordwrap($str, 64, PHP_EOL, true);
        $start = '';
        $end   = '';
        switch ($type) {
            case self::PUBLIC_TYPE:
                $start = '-----BEGIN PUBLIC KEY-----' . PHP_EOL;
                $end   = PHP_EOL . '-----END PUBLIC KEY-----' . PHP_EOL;
                break;

            case self::PRIVATE_TYPE:
                $start = '-----BEGIN PRIVATE KEY-----' . PHP_EOL;
                $end   = PHP_EOL . '-----END PRIVATE KEY-----' . PHP_EOL;
                break;
        }
        return $start . $key . $end;
    }

    /**
     * Convert string encoding to utf8
     * @param $str
     * @return string
     */
    private static function str2utf8($str)
    {
        $encode = mb_detect_encoding($str, array('ASCII', 'UTF-8', 'GB2312', 'GBK', 'BIG5'));
        $str = $str ? $str : mb_convert_encoding($str, 'UTF-8', $encode);
        $str = is_string($str) ? $str : '';
        return $str;
    }
}
```

:::