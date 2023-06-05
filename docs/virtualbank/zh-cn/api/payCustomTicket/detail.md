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
            "identity": "FYFfRfrOqK65LyhPkFmevuPyat2lvWbV8jz8NkkB5a09VQVjiVayMFWQ3Qvp/7Xaps2qffMsoUJjf/vflBdq3knfnRfHKBvghsY+vrcMQ+7HeRkkq5gaHqOgyBt5Zpq1STZnee8gT+p7MT05nAZBdHOx0ozAY8Q3ahg5gqghuYzelQHh4tiua0DdRegNu8PwvU4wEIxFCQarrQJotI62i5L3vJrsg/foyFF4g/MWD5wI+8rgnzSECeJEFQmySXHSj7Hq2i22LFM+pXuUco4Ev6CmIg0LsYFb2LtiWw5drGspeDSN9HD2xh+TpqQUubQ8eFIAh7ZgCfcxjfp9BI71MA==",
            "identitypic": "",
            "signpic": "",
            "bankname": "",
            "bankcode": "",
            "account": "xq7CI8bXWls776jb8mwW3rpsz0KQeG93Z/XkS9y+XDx6nqtQbPMD2ygzSxzm5GInbXb6zzgBE+r0Iaoctg/ESe1ULCELhOLHS4xIPQE9MS07HP4ykrX5/YEKvNrtB6dDqHi48M8tnbX5KcGr733FFLlPxc9Qeb3eC/2OJEEu3oLIFSCUg8/LMBSXJF1pYgnGhPho6LiSJFF2eRQcnfKaIwWBGgEk0gpF81WhwywIP9NXwofdve9Phs9NbcDxTIQzC7Tfs63x9AAz0+iTKeYh6jGpbG/0WR/JLuPzyi41Z2gXGc9i8kYHnjRB4tfbXoIQpwkLcg6DTitDkdBdXgMTDQ==",
            "ibanaccount": "SC11BJ2ss349897123879",
            "status": 1,
            "created_at": 1680075971,
            "updated_at": 1681194641
        },
        "created_at": 1681208811,
        "updated_at": 1683858559
    },
    "sensitiveFields": {},
    "requestId": "C421730813A20AFBD38D6B9D0265566B"
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
| custominfo  | object       | 代付工单创建时客户数据快照 |
| created_at  | number       | 创建时间                   |
| updated_at  | number       | 更新时间                   |

