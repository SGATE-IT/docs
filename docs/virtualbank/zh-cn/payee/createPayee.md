# 创建代付工单

支持批量创建代付工单，**只有审核通过的客户才能成功创建代付工单**。

### **请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/create`

### **请求方式**

- POST

### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680077076,
    "params":{
        "data":[
            {
                "customid":"12093",
                "payeeuid":"TEST123456789",
                "amount":2000.33
            },
            {
                "customid":"12088",
                "payeeuid":"TEST123456790",
                "amount":2300.45,
              	"feeModel":1
            }
        ]
    }
}
```

说明：

| 参数名   | 必选 | 类型         | 默认值 | 说明                                               |
| -------- | ---- | ------------ | ------ | -------------------------------------------------- |
| customid | y    | string       | -      | 客户ID                                             |
| payeeuid | y    | string       | -      | 自定义支付ID，要求全局唯一                         |
| amount   | y    | double(16,2) | -      | 薪水                                               |
| feeModel | n    | number       | 1      | 手续费模式：1=由客户承担手续费，2=由公司承担手续费 |

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "requestId": "2E988C58B693A1525F20167DA41669C7"
}
```