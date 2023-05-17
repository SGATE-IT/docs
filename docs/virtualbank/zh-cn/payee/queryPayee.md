# 查询代付工单列表

### **请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/list`

### **请求方式**

- POST

### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680070775,
    "params":{
        "pageNo": 10
    }
}
```

说明：

| 参数名    | 必选 | 类型   | 默认值 | 说明                                                      |
| --------- | ---- | ------ | ------ | --------------------------------------------------------- |
| pageNo    | n    | number | 1      | 页码                                                      |
| pageSize  | n    | number | 20     | 每页显示条数，最多支持100条                               |
| startTime | n    | number | -      | 工单创建开始时间，秒级时间戳                              |
| endTime   | n    | number | -      | 工单创建结束时间，秒级时间戳                              |
| customids | n    | array  | -      | 查询客户ID，传递数组，示例：["1187", "2f131"]             |
| payeeuid  | n    | string | -      | 自定义支付ID                                              |
| status    | n    | number | -      | 代付工单状态： 0=已经提交申请，1=已经完成打款，2=信息错误 |

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "ticketid": "11652",
            "customid": "11558",
            "payeeuid": "123wsddf",
            "amount": 123,
          	"realAmount": 122.38,
            "fee": 0.62,
          	"feeModel": 1,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11558",
                "name_e": "dbnuo4",
                "name_a": "dbnuo4",
                "identity": "123123123123",
                "identitypic": "",
                "signpic": "",
                "bankname": "Bank AlJazira",
                "bankcode": "11a3a",
                "account": "11112222",
                "ibanaccount": "SC11BJ2ss349897123879",
                "status": 1,
                "created_at": 1680000063,
                "updated_at": 1680000239
            },
            "created_at": 1639581540,
            "updated_at": 1639581540
        },
        {
            "ticketid": "115d5",
            "customid": "11558",
            "payeeuid": null,
            "amount": 2342,
          	"realAmount": 2330.29,
            "fee": 11.71,
          	"feeModel": 1,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11558",
                "name_e": "dbnuo4",
                "name_a": "dbnuo4",
                "identity": "123123123123",
                "identitypic": "",
                "signpic": "",
                "bankname": "Bank AlJazira",
                "bankcode": "11a3a",
                "account": "11112222",
                "ibanaccount": "SC11BJ2ss349897123879",
                "status": 1,
                "created_at": 1680000063,
                "updated_at": 1680000239
            },
            "created_at": 1639540275,
            "updated_at": 1639540275
        }
    ],
    "requestId": "0EFD319D173FC9DE5CBBB2EAA6FDC03B"
}
```

### **返回参数说明**

| 参数名      | 类型         | 说明                                                       |
| ----------- | ------------ | ---------------------------------------------------------- |
| ticketid    | string       | 代付工单ID                                                 |
| customid    | string       | 客户ID                                                     |
| payeeuid    | string       | 自定义支付ID                                               |
| amount      | double(16,2) | 薪水                                                       |
| realAmount  | double(16,2) | 实际发放薪水                                               |
| fee         | double(16,2) | 手续费                                                     |
| feeModel    | number       | 手续费模式：1=由客户承担手续费，2=由公司承担手续费         |
| status      | number       | 代付工单状态： 0=已经提交申请，1=已经完成打款 ，2=信息错误 |
| confirmtime | number       | 确认时间                                                   |
| custominfo  | object       | 代付工单创建时客户数据快照                                 |
| created_at  | number       | 创建时间                                                   |
| updated_at  | number       | 更新时间                                                   |