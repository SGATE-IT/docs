# 查询单个客户

### **请求URL**

- `{{host}}/openApi/v1/payee/custom/detail/{{customid}}`
  - `{{customid}}` 为客户ID

### **请求方式**

- POST



### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680070775,
    "params":{

    }
}
```

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "customid": "11846",
        "name_e": "dbnuo1e",
        "name_a": "dbnuo1a",
        "identity": "234234234234234",
        "identitypic": "http://www.vbank.loc/uploads/images/wallhaven-0jepxp.jpg",
        "signpic": "http://www.vbank.loc/uploads/images/2c455d98af22bdfd21057276fbc16289.jpg",
        "bankname": "The National Commercial Bank",
        "bankcode": "114db",
        "account": "345675213425436457",
        "ibanaccount": "SDF234354456",
        "created_at": 1679900027,
        "updated_at": 1680000675
    },
    "requestId": "8A7D34526A8342A0278D2AD3F4A3C72E"
}
```

### **返回参数说明**

| 参数名      | 类型   | 说明                                               |
| ----------- | ------ | -------------------------------------------------- |
| customid    | string | 客户ID                                             |
| name_e      | string | 客户英文名称                                       |
| name_a      | string | 客户阿拉伯文名称                                   |
| identity    | string | 身份证号                                           |
| identitypic | string | 身份证照片URL                                      |
| signpic     | string | 签名照片URL                                        |
| bankname    | string | 银行名称                                           |
| bankcode    | string | 银行CODE                                           |
| account     | string | 账户                                               |
| ibanaccount | string | IBAN                                               |
| status      | number | 客户状态：0=待审核，1=审核成功，2=审核失败，3=封禁 |
| created_at  | number | 创建时间                                           |
| updated_at  | number | 更新时间                                           |