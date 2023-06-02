# 完善客户资料

**请求URL**

- `{{host}}/openApi/v1/payee/custom/file/{{customid}}`
  - `{{customid}}` 为客户ID



**请求方式**

- POST



**请求参数**

| 参数名 | 必选 | 类型   | 默认值 | 说明                                                         |
| ------ | ---- | ------ | ------ | ------------------------------------------------------------ |
| file   | y    | file   | -      | 文件必须是图片 (jpeg, png, bmp, gif, svg, or webp)，文件大小不能超过2048kb |
| md5    | y    | string | -      | 文件的MD5值                                                  |
| type   | y    | string | -      | 文件的类型：identitypic=身份证照片，signpic=签名照片         |



**返回示例**

文件处理成功后，返回最新的客户状态。

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "116cf",
        "name_e": "testUpd",
        "name_a": "test2",
        "identity": "DrBiOHFwHJ7htoFUHqAhaHof7Vye+MAAfQkodZAs76oT/05XLAU+r8zzm0Eh095V+EXAodRYOjLOMIPdXOVSvwCcprJihBSIOYtGNM3a6BJn7aFmhQHSNxTg+6tnMPEPI1fo6855/Frw7daazswOHHW7D44NZptTszkopjDdXnRg68zYsz3TE9MwnpneaSa4Xy2Fw2S/eg7KM9ljDfXNMTzJ+KTvyqA7kyXzVdmIM2qdqPvTGwa20/6DuUHJwZM6HX+hia5Nk5qpu1KhQ3uzv2Ngvm/fhvZTISwBNnEDUYlhOA991Oqpmwp6hXqCEfRX/6hVhMa3b4t6FbpSJM2ZeQ==",
        "identitypic": "Aw5CXYUKtoc0pRJdQDW2zIXdxw7M7fCTz38TyoNzkNTE9c0079y+RYJ6vrFKJk6usMNLAW2IaqY2yy7pHk0djzwHP6myZuU5+NUglxtU5hGKDQjYwap1s1QcFDACPadjaXdLcDoKBNlh+SUu5+Zd+W5CUO8vrGWStmsWme66skXvhcgolb0++K1r0rmb3anrwqACUaQu6NhGyYqcC3+CHy2HhQ8x74GNSpIuPF4pLgR/RJHK03NJlxfBvWkeCcaqGVOn+cFRzUc9FXhmXCvkEPh2xPSyzDKwu63oJMEsfZaNSVY1CSXq7S4DwwjHbSh2CZpyALpyo2HSlCWwpLwDvA==",
        "signpic": "",
        "bankname": "The National Commercial Bank",
        "bankcode": "114db",
        "account": "jEUnxmj2oWK8FRyfEey9iPSBp0X6BNJ1Oejh7Ld+ty809dGPKDt1t+r5/LVWC6wDqRBnzyjUNyhMKaUYcDyAHob7KlKInUiZdBSBhcz36pzCQXRcKUSo1LAnXsMUAbnI4shZ3+qBdVmwAN0mH69naKHfzQdBe5NaUm4IgtoVFlsoDnkk2mKttvbNtjTKid+ZDNVwa3WwGwEWxnQTdjGgJMuBDFQZUKJUIE3K6w+NObJjGq5jJyRqty66QN9S0STIMJUnSwWJbtsL8CrUTuK0ghhXhOcfY387Imc7jNO94gzGr8veJNMezUofFe9WZD+vmq9XGyWjRyOk6PyFIqoEgw==",
        "ibanaccount": "213124325",
        "status": 0,
        "created_at": 1665371057,
        "updated_at": 1685677446
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "account"
    ],
    "requestId": "CD6B9C6F9066DD7D28ED2D636B289AEE"
}
```



**返回参数说明**

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| customid    | string | 客户ID                                          |
| name_e      | string | 客户英文名称                                    |
| name_a      | string | 客户阿拉伯文名称                                |
| identity    | string | 身份证号（敏感信息，使用系统私钥加密处理）      |
| identitypic | string | 身份证照片URL（敏感信息，使用系统私钥加密处理） |
| signpic     | string | 签名照片URL（敏感信息，使用系统私钥加密处理）   |
| bankname    | string | 银行名称                                        |
| bankcode    | string | 银行CODE                                        |
| account     | string | 账户（敏感信息，使用系统私钥加密处理）          |
| ibanaccount | string | IBAN                                            |
| status      | number | 客户状态（见附录）                              |
| created_at  | number | 创建时间                                        |
| updated_at  | number | 更新时间                                        |

