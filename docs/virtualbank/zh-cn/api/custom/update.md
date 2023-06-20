# 更新客户

客户数据更新后，如果当前客户状态如果不是**封禁**状态或**待完善资料**状态，则会转变为**待审核状态**。

如果提交的更新数据与客户现有数据一致，则客户信息保持不变，不做状态转变。

> 客户资料变更不影响该客户已经创建的代付单，代付单会继续按照创建时的客户信息进行处理。

> 客户账户信息中银行账户、STCPay账户需要至少存在一个，如果用户当前只有STCPay账户，则STCPay账户不可修改为空。


**请求URL**

- `{{host}}/openApi/v1/payee/custom/update`


**请求方式**

- POST


**请求参数**

商户客户ID和系统客户ID传其中一个，如果都不传接口会响应参数缺失错误。

| 参数名      | 必选 | 类型   | 默认值 | 说明             |
| ----------- | ---- | ------ | ------ | ---------------- |
| mercustomid   | n    | string  | -      | 商户客户ID |
| customid   | n    | string  | -      | 系统客户ID |
| name_e      | n    | string | -      | 客户英文名称     |
| name_a      | n    | string | -      | 客户阿拉伯文名称 |
| identity    | n    | string | -      | 身份证号（敏感信息，使用**系统公钥**加密处理） |
| bankcode    | n    | string | -      | 银行CODE                                   |
| cardno     | n    | string | -      | 银行账户（敏感信息，使用**系统公钥**加密处理）    |
| ibanaccount | n    | string | -      | IBAN             |
| stcaccount | n    | string | -      | STCPay账户（敏感信息，使用**系统公钥**加密处理）             |

**返回示例**

返回更新后的客户数据信息。

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "updTest2",
        "name_a": "usera",
        "identity": "EgWVcEXDN90VwHClP1rl5qlX7yiDtedet7ACDUwHWBty0doC7xUV5eSYizInT0PNdAlcOg6JNVTujxKDgIv3bKvCaePHDmoD2pSZBed7WhrwTlwSdBM2FAPrf/PVAX74DiHyz1KZk7w81Xk4HP7VtMatAZX2ZVAjwbxo5Oj76xkCkm2N8RSoCX0tTXdsNP3zAb0ORZw2aucZUg4PLDKkvnsEI5SyPuhdhntN24/4nR5SmDoYwMyZ3Zlz4zArTL4M3NengD12C5Ewz4jcmwoAx/GmQsssjY6oDbgCeG1CsJlLgG9T4avL/TcA7d5vgAA9yU38WFJBCR8/kFUU3za5yg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "ER3wV/DhGZY3aFKXO0Yb4O/t0FHkNmFs/2ME0vg+fIQ/JgnNWTTdBwE3pL5FktKP31MhpRQP+ioH/oUcxHR/JNC1IjNEU/leRlSput+SafK9paKFAA8dVgunRbWQb7TsRWh4wVBujtnkfkOwDBhkhRaALWvBRau3i4WU7ZlTy3hpxX41lAPpi07Y8XkatVU1B3q51wFFu1mGD3L3UZI0jD6SceQD+HIH8cUutpt7JFSVS1rABgi3Hkh2yplfj1d7i61GNoSzr1SHyjIC5HydSZSVeEB1JXly+W04ccIeWENVDba2Sk4YYVPKmgell7a4NQhsMZr0+QL4ZG196/U1gg==",
        "ibanaccount": "1234567892",
        "stcaccount": "ied6668pUXSRLj3eIWENQSLy3IzheI/lZntPehScFdjsnSeXJtiHVROuT3+e+rAXKFclxCyuD2+n44IHLh/pjgHZEr4Vr9T2qZR1HRnj3uvESaT/yPbRLx1hynUknd2YnGfsM01ZUfUztlmhSArAQ48SPB7py4aIMZin8kOi4ak/z1bY0Yqh1iVK+9Qa07CFfBY80vBgqg0gu4ysil4HLsuC0XahYMNdqAJqY8EJ3bbssae+B52I6QjQ5a+5xll8O5JczIBsJJimGh34OZ1/t7Wtd1WyRRKeXcdIfSccOBaWtdH1cSLDj1xqLg0T7HU/whyZRVOB1fxedd/ceg3quA==",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809659
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "3684DFCB66E8A8D6DC18E6FF8626C93D"
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
| created_at  | number | 创建时间(UTC时区)                                        |
| updated_at  | number | 更新时间(UTC时区)                                        |
