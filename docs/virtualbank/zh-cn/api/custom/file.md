# 更新客户资料

目前客户强制需要完善的资料为身份证照片。如果客户未被**封禁**，当客户更新资料后并且**已设置身份证照片**，客户状态会重置为**待审核**状态。

如果提交的更新数据与客户现有数据一致，则客户信息保持不变，不做状态转变。

> 客户资料变更不影响该客户已经创建的代付单，代付单会继续按照创建时的客户信息进行处理。

**请求URL**

- `{{host}}/openApi/v1/payee/custom/file`


**请求方式**

- POST


**请求参数**

商户客户ID和系统客户ID传其中一个，如果都不传接口会响应参数缺失错误。

| 参数名 | 必选 | 类型   | 默认值 | 说明                                                         |
| ------ | ---- | ------ | ------ | ------------------------------------------------------------ |
| mercustomid   | n    | string  | -      | 商户客户ID |
| customid   | n    | string  | -      | 系统客户ID |
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
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "updTest2",
        "name_a": "usera",
        "identity": "NbX4Ex6OsXEujrdo3p3fqKPlI1607Z59xwRIZDwlaHlHtUNLSJCP6Hp9TQVVZt66Pw+7LLENT84l6TiH7owxgY+jUl5qfRs4+ooNb3Hb4tWgXcUBi3f8NDKI3KNL5FdiXXsaqy/l8uWZoiDuRuwfQCZEUJPl3yacVfwgq8IwUO4Gqld9iN6ciyxAT16w/rkafV56gNDaWNrLet8/3HxaCUXmYfs1SpYyUwi3Hn2uI1sDme9MLZtPUo/0Nwbq5MyR5IANq4O6Enw1K3LQ4g9ZmmS7QpY7iFGT/3zKFAsycjD8focAmM9+quITspykDR3p0y9Pvs6PWMXiR5FjhAaRsw==",
        "identitypic": "S6U6BDjYfqgHxJVGfgrRNoK+lMM050wJaxZZJ68k6dnLpyoqETiSbLvjVmmFnfdTnzQRKu3qXAKRe/PJYDq4EgT5G2hS0iS3UtvkHKgjACcDvgPqVIGDpH4ru7UbopZwJNRfrBLlVcV+N+wWMqii/r1t5wTGdx8yupy/3jhZX7hhO8HFl+BvR4JSgdPWNH00zu4sTi/w2P5wEayIzK4ya/Be7w0ULbhFgoczNRrdo9hoIbewH529s74OApked4/U3uaquCjjv6h+m+U/P9efRTsOl+5u/AmYxO4mTI2C+k8SY8lK9JUBI+1wVQm/Sj81UcXAFLN2IjFYo/bbrZuOww==",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "ZVanGfGN1gpvxACjCBvDuToQevSAgZbvmksSioWvej4ATnTjp2ytSmdcIkKA3CtkcoiZXTVp11yazyj4JYpQDC99uO+mE13zIz48Uxs98GM8DY+USO3SPCAEn70YyBZ5jX9GfhWob+1UwUkqjh++WOvQbYZl7JxxMLyTG62T4pXo74XWHZeX5kUTTFOJvX8Lc9h3WmVV8GG6xcU+HZ2dWlUO0EZHTIFm7ymre5w1fXUfR9ljHzb7AVYnTIArLENPPFSNYh7HvzZIMloA0exffgcUT4sZwUD5iTeNXDSAjfLRb/n7HDFAlTvZZpxWt0cKNSruPtvyQ5xiptAA3RmEOw==",
        "ibanaccount": "1234567892",
        "stcaccount": "W1pNqEGNzONfUPfixrH61nJsgh8iFI1pv1e0VFo/rNZO6d34fFPwj/SPMqajWRjOFp8IJjBJZWOMbFALS8nTx93lhIJddtEWkNPf3t+qKSlyehORZhF/5RYzvmAu7ThV/124BOzSs/LsX7u8ZKzhudpVU6GWFZr+0GgwzDZNr/SdVm9S2ec621wSuUVgzu3ahINg/7ko5RuVzkK6eUPZ+R/v8xnRowH6SCjKfuNtHONU/7u0si1gryL8D7cb1NYy2yAx7FxWexRFyDendPZB0TsISMwAqV29RSDxG+AfJDvbsfs3mZia352avZmEpxcxILntqncjOdRnVrjEheq8sQ==",
        "status": 0,
        "statusdesc": "2023-06-15 06:14:45",
        "demand_perfection": [],
        "created_at": 1686809574,
        "updated_at": 1686809685
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "B299710699082B7D5EA8E6C793E74649"
}
```

**返回参数说明**

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| customid    | string | 系统客户ID                                          |
| mercustomid    | string | 商户客户ID                 |
| name_e      | string | 客户英文名称                                    |
| name_a      | string | 客户阿拉伯文名称                                |
| identity    | string | 身份证号（敏感信息，使用**商户公钥**加密处理）      |
| identitypic | string | 身份证照片URL（敏感信息，使用**商户公钥**加密处理） |
| signpic     | string | 签名照片URL（敏感信息，使用**商户公钥**加密处理）   |
| bankname    | string | 银行名称                                        |
| bankcode    | string | 银行CODE                                        |
| cardno    | string | 银行账户（敏感信息，使用**商户公钥**加密处理）          |
| ibanaccount | string | IBAN                                            |
| stcaccount | string | STCPay账户（敏感信息，使用**商户公钥**加密处理）        |
| status      | number | 客户状态（见附录）                              |
| statusdesc  | number | 客户状态说明                              |
| demand_perfection      | array | 用户当前待完善哪些资料                  |
| created_at  | number | 创建时间(UTC时区)                       |
| updated_at  | number | 更新时间(UTC时区)                      |

