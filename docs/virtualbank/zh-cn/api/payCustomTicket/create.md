# 创建代付工单

创建代付工单，**只有审核通过的客户才能成功创建代付工单**。



**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/create`


**请求方式**

- POST



**请求参数**

参数示例：

```json
{
    "mercustomid":"u004",
    "payeeuid":"TEST1234567aa12sd2",
    "amount":2002,
    "currency":"SAR",
    "paymentmethod":"bankTransfer"
}
```

说明：

商户客户ID和系统客户ID传其中一个，如果都不传接口会响应参数缺失错误。

| 参数名   | 必选 | 类型         | 默认值 | 说明                                         |
| -------- | ---- | ------------ | ------ | -------------------------------------------- |
| customid | n    | string       | -      | 系统客户ID                                       |
| mercustomid | n    | string       | -      | 商户客户ID                                       |
| payeeuid | y    | string       | -      | 商户订单ID，要求全局唯一，长度不得超过64位 |
| amount   | y    | double(16,2) | -      | 付款金额，精确到小数点后两位                     |
| currency   | y    | string | -      | 货币代码（见附录）                        |
| paymentmethod   | y    | string | -      | 付款方式（见附录）                        |


**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "ticketid": "15ba8",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "TEST1234567aa12sd2",
        "currency": "SAR",
        "paymentmethod": "bankTransfer",
        "amount": 2002,
        "realamount": 2002,
        "fee": 127.79,
        "status": 0,
        "statusdesc": "2023-06-15 07:34:25",
        "confirmtime": 0,
        "custominfo": {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "updTest2",
            "name_a": "usera",
            "identity": "koRRcWj15/GjSowB2jfL1aagXcWZ2aRwRX5v/RjZ2robnH7abFUZXKLmyXsQHts0WGJBYhboqszYTqbT+iMOPvJ1flGIW4AAlLG6IoYscihUilKe0ieAYEyeTZE4ywlnS1cJRGsCDanzwLkRTsIl75uE3HSbkk6bAOGTwnASvjXJFe9ypx8Rj6NGuupwI9OfxDtr8NkIl5qKyOT5AzGKjhRZwoMl1gfzqJACef+HSKQNCikqYjKcoxeFQaCcmEwcWujDCHrk6+/SlN2NBpZdNlDmubPM7/JlsqudtKQp4HP+FNubwe9nZO2cPxvArBumGKIdsCv6yTOVqTEios43Tw==",
            "identitypic": "clLxhBvq8ZuCHyYLdhDdqqJA6hZkJeGkbCwsWv2TRTOQ3q+MGw4SpNLmXGNdxy9+/gZh4kGS9zMAAy8eMPW+KqDGNYSFBvT5NEoHnGc11PHCrQ95yp7qFsh/I03+ZQxKIKRpLkmY/hqs9i0QJlNqji0Wx7Ne712Dyh9qflfxkKF1f8Pcey0dHA1j7SwAuBndAcTBpnI/FcKvKt6n0vHQ8c4tKHNhMd9xRzap3Mr+09mAXtjyy1QQbb+e93x+YBoLGqdCoZouHGCTVCuqmQSiIS5TdRRMWKh/SIvVJA7bQ7bWkusgVGZF4NZQ8Jd6OzTgcpuW3ZVREyuNBYpdaZCbkQ==",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "FMIWFZJJWR34P8rN9P1WDMj7+J9UNpzLD8B5ZJIV+0VYevwgOdchFMnLM4kJwefyQXiVzP9Xh9jOLupgWrLx6Xs3PzYB6DI0PyKYw0MbbgW0oX64wsfKymRROpjQ3BvsjJfnffbDrB7/td7X52+ju0f5spw99NQ3VS+3A3Q1pcsTtTTdZSLGfd9hranY3hVUvmKr1bZq0KIkqFEl6bQ7AK0J1xVd9qQZCh8iFJNPV50FXcXwV4t2Xtua7AVd6yi6fUFZN1gngz67+/r0CG1ffNF2ykFgqYRUzedRwIHl9kmADsMSXpbUTCL97IG60VdLZ+ICu/yY1h1zU0kin7K6pw==",
            "ibanaccount": "1234567892",
            "stcaccount": "Do1W7v5LOya9dSz0IlLj2HxKsUG5WFDopMOysuY4us/1oHS1DwBrt7RPgjxTX2D1ZiArxBZL2I8MoSDXzkYM7j7+gNiLtrYvyeUcdU6DpRmvKAKzSJ4IUqJ0auf0SgmXupjcD9hcl7XG0qn5dOA59dRiGRy0xzWg++LF4dLUSplqlnVh4j+SlCmuJatCKOVOV70PD3M+cgmAjNW+VivaVFImc9VIzv30CITKEkGoJ37ByUpx3f3mBO6mZB4DoK0UQ6rEGt0ewBTphYePrf7HE0m5mflagAsIk6AXRSORTMF//Yv2UgD+tEcjhuADI8OIhfPzExPRVWDY7S8bz9B5tg==",
            "status": 1,
            "statusdesc": "2023-06-15 06:14:45",
            "demand_perfection": [],
            "created_at": 1686809574,
            "updated_at": 1686812615
        },
        "created_at": 1686814465,
        "updated_at": 1686814465
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
    "requestId": "0D56C58DC6698B9374EE10E13897DCB7"
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
| confirmtime | number       | 打款完成时间                   |
| custominfo  | object       | 代付工单创建时客户数据快照，数据结构同客户数据 |
| created_at  | number       | 创建时间                   |
| updated_at  | number       | 更新时间                   |
