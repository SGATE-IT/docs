# 查询单个客户

**请求URL**

- `{{host}}/openApi/v1/payee/custom/detail/{{customid}}`
  - `{{customid}}` 为客户ID



**请求方式**

- GET



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "116cf",
        "name_e": "test1",
        "name_a": "test2",
        "identity": "DrBiOHFwHJ7htoFUHqAhaHof7Vye+MAAfQkodZAs76oT/05XLAU+r8zzm0Eh095V+EXAodRYOjLOMIPdXOVSvwCcprJihBSIOYtGNM3a6BJn7aFmhQHSNxTg+6tnMPEPI1fo6855/Frw7daazswOHHW7D44NZptTszkopjDdXnRg68zYsz3TE9MwnpneaSa4Xy2Fw2S/eg7KM9ljDfXNMTzJ+KTvyqA7kyXzVdmIM2qdqPvTGwa20/6DuUHJwZM6HX+hia5Nk5qpu1KhQ3uzv2Ngvm/fhvZTISwBNnEDUYlhOA991Oqpmwp6hXqCEfRX/6hVhMa3b4t6FbpSJM2ZeQ==",
        "identitypic": "",
        "signpic": "",
        "bankname": "The National Commercial Bank",
        "bankcode": "114db",
        "account": "jEUnxmj2oWK8FRyfEey9iPSBp0X6BNJ1Oejh7Ld+ty809dGPKDt1t+r5/LVWC6wDqRBnzyjUNyhMKaUYcDyAHob7KlKInUiZdBSBhcz36pzCQXRcKUSo1LAnXsMUAbnI4shZ3+qBdVmwAN0mH69naKHfzQdBe5NaUm4IgtoVFlsoDnkk2mKttvbNtjTKid+ZDNVwa3WwGwEWxnQTdjGgJMuBDFQZUKJUIE3K6w+NObJjGq5jJyRqty66QN9S0STIMJUnSwWJbtsL8CrUTuK0ghhXhOcfY387Imc7jNO94gzGr8veJNMezUofFe9WZD+vmq9XGyWjRyOk6PyFIqoEgw==",
        "ibanaccount": "213124325",
        "status": 0,
        "created_at": 1665371057,
        "updated_at": 1681202608
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "account"
    ],
    "requestId": "382592B31FB04247098043087FF4F7E1"
}
```



**返回参数说明**

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| customid    | string | 客户ID                                          |
| name_e      | string | 客户英文名称                                    |
| name_a      | string | 客户阿拉伯文名称                                |
| identity    | string | 身份证号（敏感信息，使用**商户公钥**加密处理）      |
| identitypic | string | 身份证照片URL（敏感信息，使用**商户公钥**加密处理） |
| signpic     | string | 签名照片URL（敏感信息，使用**商户公钥**加密处理）   |
| bankname    | string | 银行名称                                        |
| bankcode    | string | 银行CODE                                        |
| account     | string | 账户（敏感信息，使用**商户公钥**加密处理）          |
| ibanaccount | string | IBAN                                            |
| status      | number | 客户状态（见附录）                              |
| created_at  | number | 创建时间                                        |
| updated_at  | number | 更新时间                                        |

