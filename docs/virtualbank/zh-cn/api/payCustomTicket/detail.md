# 查询单个代付工单

**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/detail`


**请求方式**

- GET

**请求参数**

代付工单ID和商户订单ID传其中一个，如果都不传接口会响应参数缺失错误。

| 参数名   | 必选 | 类型         | 默认值 | 说明                                         |
| -------- | ---- | ------------ | ------ | -------------------------------------------- |
| ticketid | n    | string       | -      | 代付工单ID                                       |
| payeeuid | n    | string       | -      | 商户订单ID                                       |

**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "ticketid": "15b2b",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "TEST1234567aa12sd1",
        "currency": "SAR",
        "paymentmethod": "bankTransfer",
        "amount": 2002,
        "realamount": 2002,
        "fee": 127.79,
        "status": 0,
        "statusdesc": "",
        "confirmtime": 0,
        "custominfo": {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "updTest2",
            "name_a": "usera",
            "identity": "Rm1XLBip1jqmtVP64nPy+j9Nsi2FPQbmwH3OeIxXwm0xxilOJ5CgmHv9mRhG2rCzOj0xJh20ZxFEYNobECjZsU5wTzSkjSFEpmxWxENbPcwDBDtUXQY2U0Pv1zqPwaltSOjzo7/0UzKOJIVTExO27Hp3vm/OcE2Hj4R1mdFo1QibR/H/J7OslnVWR24J6coEYu452aojDZm0rKEgegDhTPgMwHxz8MUM6+ynY+wGaKb32Ad8r14NgvlW3aslCquMuS68IiXl3vbiQ4Pr6uMYkJ8qyllNU2W4cdWCZdqbCYRMXUcAYuUZ4zoqPTMDN659VAUMBJB9zHYfuo6RZcSmUg==",
            "identitypic": "I3ZJ/OhjmWj0mPRaKzKLTk38UA3z3MZOsq/2uSJtuM1IY9z9OFqXqgGSvk+NwR0GfayfO0kTdetesFW5a3f6C11xL21LJsAe1zrb6RqqXjlCa8/phgV77eyY5C/AJ8X0a5J5Q5WJodmh2A0AmeEAEbeySt0HsOqMO6bYYplcZV29abLfYa+45814aQXiVLAPNG63O+sMvT2WUyR3GlUoZ7NZK7JpBd0CnG/CXuZHRDbLoY8r1pej18hHDG0RNVkxqI+H7+glFjrIh/4QbmLmP46M5Sjs0k4NB/zRqhUDlFmQsIg1JWYmsLQTmQYBK7vwOGC7hT5riRTF2wKmHRuNRg==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "mQWxh+ypJe+DSn9o5/bdumuCsc+IMvj+5z32xr2anPs6sgqxQu4Zgt2yXs7Ye8Ptr9UFmbPnt5onxkhYQ6iPArmV3kqkJwOA8MiAuDiYwn3+eoiF2EdWCx0otF6YkC7tA0ESO98DL7I1BpDJNCdaDOrrppZS7syb0qtBosvBC/YvRIRrspMsGXzL/vAMI7GvT4wj7RyIiqEE48dSCXT9YLvx7OiQf33fQbrv36zoeYolOSoQLRTe+oTpcum9ACccTI1aS6/A2qOlPEQ5EkPrmxDljmWPUBotdwrmRmy1p0DJK7SwgeofPxGsrGo1Lcw7S7ShqdWUHScgaWIIH7miBQ==",
            "ibanaccount": "1234567892",
            "stcaccount": "iXyvq7ArPI1bofHHTtjHQ4dz9cYtE1wicUIbIl1b9aw82BqAXcOKVeDu9tniFRfTPKhtXVKMpEPmReHyw7tx8fAjxrLOSIJEdCvNIB7hSrC6HlDThTD/JZ3bqMO6sxdalj5zF7QY/IUbrRRm/ALW/xam/73IYz3CHxQXRz3nOUsG07yOZuid2l7fzqmflMQCijiNoXMRcZjqb1uMO3xOFeZc8SiFAfHTcombR3NmgJFmMTMNEs5SH/CUbzYHKDgrkq8vs6x10LJP9ox3FlC8C1W3B5p5FPWYvUaS6+PkLdOECvjwIu/bS3K0hrxv/hQjCfWMTfySkPsB0V78Wu7rtA==",
            "status": 1,
            "statusdesc": "2023-06-15 06:14:45",
            "demand_perfection": [],
            "created_at": 1686809574,
            "updated_at": 1686812615
        },
        "created_at": 1686813277,
        "updated_at": 1686813277
    },
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "stcaccount",
            "cardno"
        ]
    },
    "requestId": "8A926C296BE22E04324A0419F544FD7E"
}
```



**返回参数说明**

| 参数名      | 类型         | 说明                       |
| ----------- | ------------ | -------------------------- |
| ticketid    | string       | 代付工单ID                 |
| customid    | string       | 系统客户ID                     |
| mercustomid    | string       | 商户客户ID                     |
| payeeuid    | string       | 商户订单ID               |
| currency    | string       | 货币代码（见附录）               |
| paymentmethod    | string       | 付款方式（见附录）               |
| amount      | double(16,2) | 打款金额                       |
| realamount  | double(16,2) | 实际到账金额               |
| fee         | double(16,2) | 手续费                     |
| status      | number       | 代付工单状态（见附录）     |
| statusdesc      | string       | 状态说明     |
| confirmtime | number       | 打款完成时间(UTC时区)                   |
| custominfo  | object       | 代付工单创建时客户数据快照，数据结构同客户数据 |
| created_at  | number       | 创建时间(UTC时区)                   |
| updated_at  | number       | 更新时间(UTC时区)                   |

