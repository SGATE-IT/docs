# 更新客户

客户数据更新后，如果客户当前状态为审核通过状态会重置为待审核。


**请求URL**

- `{{host}}/openApi/v1/payee/custom/update/{{customid}}`
  - `{{customid}}` 为客户ID



**请求方式**

- POST



**请求参数**

| 参数名      | 必选 | 类型   | 默认值 | 说明             |
| ----------- | ---- | ------ | ------ | ---------------- |
| name_e      | n    | string | -      | 客户英文名称     |
| name_a      | n    | string | -      | 客户阿拉伯文名称 |
| bankcode    | n    | string | -      | 银行CODE         |
| ibanaccount | n    | string | -      | IBAN             |



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "4CB36432D11C35156405203215C54CFF"
}
```

