# RSA Demo

## PHP

```php
/**
 * RSA工具类
 * Class RSAUtils
 * @author dbn
 */
class RSAUtils
{
    /**
     * 签名算法
     */
    const KEY_ALGORITHM       = OPENSSL_KEYTYPE_RSA;
	const SIGNATURE_ALGORITHM = OPENSSL_ALGO_MD5;
	const EN_DE_ALGORITHM     = OPENSSL_PKCS1_PADDING;

    /**
     * 字节数
     */
    const PRIVATE_KEY_BITS = 1024;

    const PUBLIC_TYPE  = 'pub';
    const PRIVATE_TYPE = 'pri';

    /**
     * 生成密钥对(公钥和私钥)
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
        if (PHP_VERSION_ID < 80000) {
            openssl_free_key($publicKeyId);
        }
        return base64_encode($data);
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
        if (PHP_VERSION_ID < 80000) {
            openssl_free_key($privateKeyId);
        }
        return $decrypted;
    }

    /**
     * 公私钥转为字符串格式
     * @param string $key 公私钥
     * @return string
     */
    public static function key2str($key)
    {
        $key = preg_replace('/-----.*-----/','', $key);
        $key = preg_replace('/[\n\s]/','', $key);
        return is_string($key) ? $key : '';
    }

    /**
     * 将字符串转为公私钥格式
     * @param string $str 字符串
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
     * 将字符串编码转为 utf8
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



## JAVA

```java
package com.localhost;

import org.apache.shiro.codec.Base64;

import java.io.ByteArrayOutputStream;
import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.Cipher;

/**
 * RSA工具类
 * Class RSAUtils
 * @author dbn
 */
class RSAUtils {

    /**
     * 签名算法
     */
    private static final String KEY_ALGORITHM = "RSA";
    private static final String SIGNATURE_ALGORITHM = "MD5withRSA";

    /**
     * 获取公钥的key
     */
    private static final String PUBLIC_KEY = "RSAPublicKey";

    /**
     * 获取私钥的key
     */
    private static final String PRIVATE_KEY = "RSAPrivateKey";

    /**
     * RSA最大加密明文大小
     */
    private static final int MAX_ENCRYPT_BLOCK = 117;

    /**
     * RSA最大解密密文大小
     */
    private static final int MAX_DECRYPT_BLOCK = 128;

    /**
     * 数据编码
     */
    private static final String ENCODING = "UTF-8";

    /**
     * 生成密钥对(公钥和私钥)
     * @return 密钥对 Map 对象
     * @throws Exception
     */
    static Map<String, Object> resetGenKeyPair() throws Exception {
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance(KEY_ALGORITHM);
        keyPairGen.initialize(1024);

        KeyPair keyPair            = keyPairGen.generateKeyPair();
        RSAPublicKey publicKey     = (RSAPublicKey) keyPair.getPublic();
        RSAPrivateKey privateKey   = (RSAPrivateKey) keyPair.getPrivate();
        Map<String, Object> keyMap = new HashMap<String, Object>(2);

        keyMap.put(PUBLIC_KEY, publicKey);
        keyMap.put(PRIVATE_KEY, privateKey);
        return keyMap;
    }

    /**
     * 获取公钥
     * @param keyMap 密钥对 Map 对象
     * @return 公钥
     * @throws Exception
     */
    static String getPublicKey(Map<String, Object> keyMap) throws Exception {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return Base64.encodeToString(key.getEncoded());
    }

    /**
     * 获取私钥
     * @param keyMap 密钥对 Map 对象
     * @return 私钥
     * @throws Exception
     */
    static String getPrivateKey(Map<String, Object> keyMap) throws Exception {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return Base64.encodeToString(key.getEncoded());
    }

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

}
```