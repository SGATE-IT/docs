# 查询单个代付工单

**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/detail/{{ticketid}}`



**请求方式**

- GET



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "ticketid": "124f8",
        "customid": "11a3a",
        "payeeuid": "TEST1234567w9",
        "amount": 2000.33,
        "realAmount": 2000.33,
        "fee": 100.02,
        "status": 0,
        "confirmtime": 0,
        "custominfo": {
            "customid": "12381",
            "name_e": "dbnuo4",
            "name_a": "dbnuo4",
            "identity": "ZmlW51H0+UlmhISoCn5OsjpbsiGZrGeBhtThg2g1139ppRmhZiaAXKN4quU0NBKIV4wPb3E15EFOY7yxm6LIrLTtOa7rJjepyJCe3Okw9luqm/aCCdSD/lAjRv/eEyl51xZpKvi/RGOJf1APhDRRFTaWj+LPbPq0I6lmjL7FVeiAX5MmzNQEX/QxC+XD4X3Uo6KTd2LnLb6RZIabIAOzK4ctHEnr47k3FHO1IM73laLKDu1sAwvD3LZeTesDVCHp7ZGG2qLxkfT06g/PfijOrEUgfZkvtD3b6tkL3uX1Ks7tM/V5Hz7SE+ryOAmDYvjfN0bKWuGVQ11zFyDlkzdyDA==",
            "identitypic": "",
            "signpic": "",
            "bankname": "",
            "bankcode": "",
            "account": "I4dSjGZVkVk6TVCIny1RbeyURLrNsMuOpWgpGE5BGeCfZ7lkpoLb0oAMH0rT3O+omcusWBc++55u5bJ0s1aot7wH3DHqNrYmWX5MFphTcp4khoZrm34dAWDcBQxOjyEg6pbekqJ0AESe7kCnbUMerQ/TbkomR0yK4Ybm5jlVt25G5f6dJDIyl0Aqy1isLOSwnnTOiltsMB7s/ykAlLnlwGHbWVNTXpkZWEJP30/qrQ7x908vcHq81lcgWiM6HVXxL8lgTOFbxI86jh2zmEb5tXTUuEID7H0iXOChKV/2la2bQ5AdEV5pebdGrb+Ck/7r8wCj1GVHUhwl0kfCOdl25g==",
            "ibanaccount": "SC11BJ2ss349897123879",
            "status": 1,
            "created_at": 1680075971,
            "updated_at": 1681194641
        },
        "created_at": 1681208811,
        "updated_at": 1683858559
    },
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "account"
        ]
    },
    "requestId": "F6FA02DD5E2BDE846C2100BBF31B040A"
}
```



**返回参数说明**

| 参数名      | 类型         | 说明                       |
| ----------- | ------------ | -------------------------- |
| ticketid    | string       | 代付工单ID                 |
| customid    | string       | 客户ID                     |
| payeeuid    | string       | 自定义支付ID               |
| amount      | double(16,2) | 薪水                       |
| realAmount  | double(16,2) | 实际发放薪水               |
| fee         | double(16,2) | 手续费                     |
| status      | number       | 代付工单状态（见附录）     |
| confirmtime | number       | 确认时间                   |
| custominfo  | object       | 代付工单创建时客户数据快照，数据结构同客户数据 |
| created_at  | number       | 创建时间                   |
| updated_at  | number       | 更新时间                   |

