# 创建快捷代付工单

## 功能简述

- 商户可以绕过客户创建和审核的流程，直接提交基本信息发起代付工单。

## 创建快捷代付工单 API

### 请求 URL

- `/payee/payCustomTicket/rapid`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
mercustomid 为商户客户 ID，系统会自动依据 mercustomid 做以下处理：
1. 当商户下 mercustomid 已存在关联的客户，会根据提交的客户信息，对该客户信息进行更新，同时为该客户创建代付工单。
2. 当商户下 mercustomid 不存在关联的客户，则会新创建一个新的客户，客户创建后直接为审核通过的状态，同时为该新增的客户创建代付工单。
:::

* **必须**传递的参数：

| **参数**      | **必填** | **类型** | **默认值** | **描述**                                         |
| ------------- | -------- | -------- | ---------- | ------------------------------------------------ |
| mercustomid   | 是       | string   | -          | 商户客户 ID                                      |
| payeeuid      | 是       | string   | -          | 商户订单 ID，要求全局唯一，长度不得超过64位      |
| amount        | 是       | float    | -          | 付款金额，精确到小数点后两位                     |
| currency      | 是       | string   | -          | [货币代码](/zh/payoutApi/appendix/currency)      |
| paymentmethod | 是       | string   | -          | [付款方式](/zh/payoutApi/appendix/paymentMethod) |

* 使用 **bankTransfer** 付款方式，需要额外传递的参数：

| **参数**    | **必填** | **类型** | **默认值** | **描述**                                                                                    |
| ----------- | -------- | -------- | ---------- | ------------------------------------------------------------------------------------------- |
| name_e      | 是       | string   | -          | 客户英文名称                                                                                |
| name_a      | 是       | string   | -          | 客户阿拉伯文名称                                                                            |
| bankcode    | 是       | string   | -          | 银行 CODE                                                                                   |
| cardno      | 是       | string   | -          | 银行账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理） |
| ibanaccount | 是       | string   | -          | IBAN                                                                                        |

* 使用 **STCPay** 付款方式，需要额外传递的参数：

| **参数**   | **必填** | **类型** | **默认值** | **描述**                                                                                       |
| ---------- | -------- | -------- | ---------- | ---------------------------------------------------------------------------------------------- |
| stcaccount | 是       | string   | -          | STCPay 账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理） |

**请求参数示例**

```json
{
    "mercustomid":"u0043",
    "payeeuid":"payeeuid1",
    "amount":33.33,
    "currency":"SAR",
    "paymentmethod":"STCPay",
    "stcaccount":"j+7ehQuYum6eK+1CgMAyVnbJLZl5bU3I1q/Egyh2BNkqLyingkjeFuX+an2mkqZ2IaK1038zNhz7lvnix+R4C7gGM/hWSwZ2/OReoO4CTKfB8KH+XyYNEKgkd+5BIE/w35ssJNgCHy7BlqZz9sm2hboz6DOZAcY/Sv7eya328yChDllr8MlUY87x+yTN+EEjiUajvFA3RB7Lx/+DcQgkx58fmlrq4JhwlqnjKJllSimnqwK9DB6nKsNQAHONLzGndl4nAaL441EGyP0tVU+roSd0uJU1hpc+Gq9HKLr1N3rt1Y7QEd9+wHwZ3EBf0dUdIq94gC1ZuZ0VU+pBRim40Q=="
}
```

### 响应参数

响应参数如下：

- **Response Body**

| **参数名**    | **类型** | **描述**                                             |
| ------------- | -------- | ---------------------------------------------------- |
| ticketid      | string   | 代付工单 ID                                          |
| customid      | string   | 系统客户 ID                                          |
| mercustomid   | string   | 商户客户 ID                                          |
| payeeuid      | string   | 商户订单 ID                                          |
| trantype      | string   | [交易类型](/zh/payoutApi/appendix/tranType)          |
| currency      | string   | [货币代码](/zh/payoutApi/appendix/currency)          |
| paymentmethod | string   | [付款方式](/zh/payoutApi/appendix/paymentMethod)     |
| amount        | float    | 打款金额                                             |
| realamount    | float    | 实际到账金额                                         |
| fee           | float    | 手续费                                               |
| status        | number   | [代付工单状态](/zh/payoutApi/appendix/paymentStatus) |
| statusdesc    | string   | 状态说明                                             |
| confirmtime   | number   | 打款完成时间                                         |
| custominfo    | object   | 代付工单创建时客户数据快照，数据结构同客户数据       |
| created_at    | number   | 创建时间                                             |
| updated_at    | number   | 更新时间                                             |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {
        "ticketid": "15ba8",
        "customid": "12ad4",
        "mercustomid": "u004",
        "payeeuid": "TEST1234567aa12sd2",
        "trantype": "rapid",
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