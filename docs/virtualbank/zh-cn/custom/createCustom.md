# 创建客户

支持批量创建客户，如果单个客户的身份证号+账户在商户下已经存在，则会覆盖已经存在的客户数据（该客户状态重置为**待审核**状态），反之则会创建新的客户数据。

### **请求URL**

- `{{host}}/openApi/v1/payee/custom/create`

### **请求方式**

- POST

### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680075195,
    "params":{
        "data":[
            {
                "name_e":"test",
                "name_a":"test",
                "identity":"123456789",
                "bankcode":"1174c",
                "account":"123456789",
                "ibanaccount":"123456789"
            },
            {
                "name_e":"test2",
                "name_a":"test2",
                "identity":"123456789",
                "bankcode":"1174c",
                "account":"123456789",
                "ibanaccount":"123456789"
            }
        ]
    }
}
```

说明：

| 参数名      | 必选 | 类型   | 默认值 | 说明             |
| ----------- | ---- | ------ | ------ | ---------------- |
| name_e      | y    | string | -      | 客户英文名称     |
| name_a      | y    | string | -      | 客户阿拉伯文名称 |
| identity    | y    | string | -      | 身份证号         |
| identitypic | y    | string | -      | 身份证照片       |
| signpic     | n    | string | -      | 签名照片         |
| bankcode    | y    | string | -      | 银行CODE         |
| account     | y    | string | -      | 账户             |
| ibanaccount | y    | string | -      | IBAN             |

`identitypic` 、`signpic` 为文件字段，如需传递，需要传递经过 `Base64` 编码的图片源数据。支持格式：gif、png、jpg，单个图片大小不得超过2M。

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "requestId": "018626CB349A496353FBF305F1727550"
}
```

