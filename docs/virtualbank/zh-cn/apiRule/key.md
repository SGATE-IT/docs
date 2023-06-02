# 证书/密钥

## 公私钥算法

* 密钥算法：**RSA**
  * 对应 java 算法：**RSA**
  * 对应 php 算法：**OPENSSL_KEYTYPE_RSA**



- 密钥字节数：2048
- 密钥格式：Java 需使用 PKCS8 格式，其他语言使用 PKCS1 格式。



* 签名算法：**MD5**
  * 对应 Java 算法：**MD5withRSA**
  * 对应 php 算法：**OPENSSL_ALGO_MD5**



* 加密算法：

  * 对应 java 算法：

  ```java
   KeyFactory keyFactory = KeyFactory.getInstance("RSA");
   Cipher cipher         = Cipher.getInstance(keyFactory.getAlgorithm());
  ```

  * 对应 php 算法：**OPENSSL_PKCS1_PADDING**



## 系统公钥

由系统分配给商户的系统公钥，每个商户对应的系统公钥不同。



## 商户公/私钥

商户侧生成的公/私钥，生成规则需要遵循上述公/私钥算法，否则可能会出现签名验证不通过的问题。