# 查询商户余额

**请求URL**

- `{{host}}/openApi/v1/merchant/balance`


**请求方式**

- GET

**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "currency": "SAR",
            "balance": 999999
        }
    ],
    "sensitiveFields": {},
    "requestId": "F846B971722D6420CCC5897D9FDF7FA4"
}
```



**返回参数说明**

| 参数名      | 类型   | 说明                                            |
| ----------- | ------ | ----------------------------------------------- |
| currency    | string | 货币代码（见附录）               |
| balance    | double(16,2) | 货币余额                 |

