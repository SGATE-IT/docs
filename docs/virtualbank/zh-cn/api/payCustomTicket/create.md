# 创建代付工单

支持批量创建代付工单，**只有审核通过的客户才能成功创建代付工单**。



**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/create`



**请求方式**

- POST



**请求参数**

参数示例：

```json
[
    {
        "customid":"12093",
        "payeeuid":"TEST12345678912",
        "amount":2000.35
    },
    {
        "customid":"12110",
        "payeeuid":"TEST12345679013",
        "amount":2300.46
    }
]
```

说明：

| 参数名   | 必选 | 类型         | 默认值 | 说明                                         |
| -------- | ---- | ------------ | ------ | -------------------------------------------- |
| customid | y    | string       | -      | 客户ID                                       |
| payeeuid | y    | string       | -      | 自定义支付ID，要求全局唯一，长度不得超过64位 |
| amount   | y    | double(16,2) | -      | 薪水，精确到小数点后两位                     |



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "DA8AADE75EFD16CFCE98EC14CC4DC70E"
}
```

