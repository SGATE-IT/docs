# 查询客户列表

### **请求URL**

- `{{host}}/openApi/v1/payee/custom/list`

### **请求方式**

- POST

### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680070775,
    "params":{
        "customids":[
            "11558",
            "115d5"
        ]
    }
}
```

说明：

| 参数名      | 必选 | 类型   | 默认值 | 说明                                               |
| ----------- | ---- | ------ | ------ | -------------------------------------------------- |
| pageNo      | n    | number | 1      | 页码                                               |
| pageSize    | n    | number | 20     | 每页显示条数，最多支持100条                        |
| startTime   | n    | number | -      | 客户创建开始时间，秒级时间戳                       |
| endTime     | n    | number | -      | 客户创建结束时间，秒级时间戳                       |
| customids   | n    | array  | -      | 查询客户ID，传递数组，示例：["1187", "2f131"]      |
| identity    | n    | string | -      | 身份证号                                           |
| account     | n    | string | -      | 账户                                               |
| bankcode    | n    | string | -      | 银行CODE                                           |
| ibanaccount | n    | string | -      | IBAN                                               |
| name_e      | n    | string | -      | 客户英文名称，支持模糊查询                         |
| status      | n    | number | -      | 客户状态：0=待审核，1=审核成功，2=审核失败，3=封禁 |

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "customid": "12304",
            "name_e": "dbnuo4",
            "name_a": "dbnuo4",
            "identity": "1231231231ss23",
            "identitypic": "",
            "signpic": "",
            "bankname": "Bank AlJazira",
            "bankcode": "11a3a",
            "account": "11112222asdf",
            "ibanaccount": "SC11BJ2ss349897123879",
          	"status": 1,
            "created_at": 1680000063,
            "updated_at": 1680000239
        },
        {
            "customid": "12287",
            "name_e": "dbnuo1",
            "name_a": "dbnuo2",
            "identity": "123123123123",
            "identitypic": "",
            "signpic": "",
            "bankname": "Bank AlJazira",
            "bankcode": "11a3a",
            "account": "11112222asdf",
            "ibanaccount": "SCBJ2349897123879",
          	"status": 1,
            "created_at": 1679999468,
            "updated_at": 1680000028
        }
    ],
    "requestId": "D702051B3907B551FBB05D7F8831BFF5"
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