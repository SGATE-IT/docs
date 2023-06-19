# 查询单个客户

**请求URL**

- `{{host}}/openApi/v1/payee/custom/detail`


**请求方式**

- GET

**请求参数**

商户客户ID和系统客户ID传其中一个，如果都不传接口会响应参数缺失错误。

| 参数名      | 必选 | 类型   | 默认值 | 说明                   |
| ----------- | ---- | ------ | ------ | ------------------ |
| mercustomid   | n    | string  | -      | 商户客户ID |
| customid   | n    | string  | -      | 系统客户ID |

**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "usera",
        "name_a": "usera",
        "identity": "noGsqF+6wpnfchtRtiIjkuzL3t6YPFv3rqK1KobZf5cVnLRCZ7HjxoqMHoD9b+YHasd1izzd58GPJAl5DswpI8f4PxauKBv9ba45us0PlUZAUurpc0/8FmZrx/xuDTz+rtfGBUckUBiwz0iZXdbJ46PYAPdB9Hlz27Nn7eYU9UXBiluuISBKt/1Q1aJ4nKfhjvONntmDXOUyP719hD8BIyjD3aYYK96OxwIrPCbT4nDMbA/qQdhboOVPQTdom774OWUjlVv32bU7Ck1jzmERvsMptCkveb/Qjr4b/9Z6ZKDIx0VtPPzHDtffNwRohfpEv9RiKzG4RM52Mfr3jV78Eg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "jH8+rl4v3EqKOZWgyacTtNhGGdP+DvyRpeVhDuXhvEam4pcI2vuPEUMtAaYD6LOpZ85z8sHZd344dDzTLmNuIOMs9GnvdrV0RA2kCqwHHIkgRshci1CHE/S4Ds+MBNdCcs+eeVYGHMa/PH2dZRIsYpdkGw17ldUxF8TL2gcRyNZvF/VWz3ZduuKUwFZ3eYeqLmMoAwQcslPZNcAPW28vXhiPw4DSyPc9jp1wRJWVLLVaTXYrSnx5847I0WscR++O052XSuSUPLlKsjhNVXKPW/3QPkAHifvIRxwgEb2tv9y7Clxp8GrD1K+vpojs3yhSpaUiPiVb6MEgXZq2In0rBA==",
        "ibanaccount": "1234567892",
        "stcaccount": "",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809574
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "13AB5E3E15526172EF73CB2939D08535"
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

