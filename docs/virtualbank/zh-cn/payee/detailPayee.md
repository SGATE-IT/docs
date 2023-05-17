# 查询单个代付工单

### **请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/detail/{{ticketid}}`

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
        "ticketid": "117c9",
        "customid": "115d5",
        "payeeuid": "alfatest",
        "amount": 12344.35,
      	"realAmount": 11727.13,
        "fee": 617.22,
      	"feeModel": 1,
        "status": 0,
        "confirmtime": 0,
      	"custominfo": {
          	"customid": "115d5",
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
        "created_at": 1642491252,
        "updated_at": 1642491252
    },
    "requestId": "2691A172204EC32F0977FF8E0265FF5B"
}
```

### **返回参数说明**

| 参数名      | 类型         | 说明                                                      |
| ----------- | ------------ | --------------------------------------------------------- |
| ticketid    | string       | 代付工单ID                                                |
| customid    | string       | 客户ID                                                    |
| payeeuid    | string       | 自定义支付ID                                              |
| amount      | double(16,2) | 薪水                                                      |
| realAmount  | double(16,2) | 实际发放薪水                                              |
| fee         | double(16,2) | 手续费                                                    |
| feeModel    | number       | 手续费模式：1=由客户承担手续费，2=由公司承担手续费        |
| status      | number       | 代付工单状态： 0=已经提交申请，1=已经完成打款，2=信息错误 |
| confirmtime | number       | 确认时间                                                  |
| custominfo  | object       | 代付工单创建时客户数据快照                                |
| created_at  | number       | 创建时间                                                  |
| updated_at  | number       | 更新时间                                                  |

