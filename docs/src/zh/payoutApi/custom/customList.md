# 查询客户列表

## 功能简述

- 查询客户列表

## 查询客户列表 API

### 请求 URL

- `/payee/custom/list`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数**     | **必填** | **类型** | **默认值** | **描述**                                                                                     |
| ------------ | -------- | -------- | ---------- | -------------------------------------------------------------------------------------------- |
| pageno       | 否       | number   | 1          | 页码                                                                                         |
| pagesize     | 否       | number   | 20         | 每页显示条数，最多支持100条                                                                  |
| starttime    | 否       | number   | -          | 客户创建开始时间，秒级时间戳                                                                 |
| endtime      | 否       | number   | -          | 客户创建结束时间，秒级时间戳                                                                 |
| mercustomids | 否       | string   | -          | 商户客户 ID，多个 ID 以英文逗号分割，示例：u001, u002                                        |
| customids    | 否       | string   | -          | 系统客户 ID，多个 ID 以英文逗号分割，示例：1187, 2f131                                       |
| identity     | 否       | string   | -          | 身份证号（敏感信息，需[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| cardno       | 否       | string   | -          | 银行账户（敏感信息，需[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| bankcode     | 否       | string   | -          | [银行 CODE](/zh/payoutApi/banks/bankList)                                                    |
| ibanaccount  | 否       | string   | -          | IBAN                                                                                         |
| name_e       | 否       | string   | -          | 客户英文名称，支持模糊查询                                                                   |
| status       | 否       | number   | -          | [客户状态](/zh/payoutApi/appendix/customStatus)                                              |
| stcaccount   | 否       | string   | -          | STCPay 账户（敏感信息，需[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理） |

### 响应参数

响应参数如下：

- **Response Body**

| **参数名**        | **类型** | **描述**                                                                                             |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| customid          | string   | 系统客户 ID                                                                                          |
| mercustomid       | string   | 商户客户 ID                                                                                          |
| name_e            | string   | 客户英文名称                                                                                         |
| name_a            | string   | 客户阿拉伯文名称                                                                                     |
| identity          | string   | 身份证号（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）       |
| identitypic       | string   | 身份证照片 URL（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理） |
| signpic           | string   | 签名照片 URL（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）   |
| bankname          | string   | [银行名称](/zh/payoutApi/banks/bankList)                                                             |
| bankcode          | string   | [银行 CODE](/zh/payoutApi/banks/bankList)                                                            |
| cardno            | string   | 银行账户（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）       |
| ibanaccount       | string   | IBAN                                                                                                 |
| stcaccount        | string   | STCPay 账户（敏感信息，使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)加密处理）    |
| status            | number   | [客户状态](/zh/payoutApi/appendix/customStatus)                                                      |
| statusdesc        | string   | 客户状态说明                                                                                         |
| demand_perfection | array    | 用户当前待完善哪些资料                                                                               |
| created_at        | number   | 创建时间                                                                                             |
| updated_at        | number   | 更新时间                                                                                             |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "customid": "12ad4",
            "mercustomid": "u004",
            "name_e": "usera",
            "name_a": "usera",
            "identity": "hg3TiMx12VsW+m0a60FpIbU6k+ppfrWz5VAzpzRr8wOasTELnFuQqRO5bGLn/SUK8FhpfLqI+Mf9GqMFuKk7Ogh6izh2UkTbg5/kO8unT2pNsI1vqSuAKJP2QeMzKBORWAn878fLvNf10Y7drMimwP+FU3ChMVREaPMoosOIWdsDh13mFce6IfDQUBXqcHDeUZAdRZMvIyUBAAhp60d4J83BXuvZeQkrxKMnD34AhO0/gABRqiSWAWgNGv6UgBkiH0siLlevyKt674HZSRaMGh4tv5KXx/qWVTUGI7JGes5vh6iO1gy+5G6bd8amfUQ+J2W3UysyZGcNLrtBq5VfpQ==",
            "identitypic": "",
            "signpic": "",
            "bankname": "Riyad Bank",
            "bankcode": "1174c",
            "cardno": "OAz0pmLB/wKtKvyNHte+Bsq4D3FlKt5snflmh15PnyIV3nyuoLs10Xm5Eg2erq5jgeeRdrQsBqAF5FeUfthS4NaAtgVVTlOpe5vFLtt3RL6BQ1i829Fx7rSCjdoYXpBDdBG7D85D4OnNgJpSxXvAJMK8qZDZv4XPxwAgcH5b+VCu138kpOaBjDuzl9dVOgoX69xIBWrd+kkD7btGytKD4H+jvU+NK+/Lfo0I61gzc/xYe5VEwFxlH4Cr/TeMhH1opwM6F2V+Mi45JL58DprZx7N0TtPaUOyhioZn6MdbNlJoI1bLARjMJIyt6sB1ZsglLChDRLFDhkLonWrlYxZWhA==",
            "ibanaccount": "1234567892",
            "stcaccount": "",
            "status": 4,
            "statusdesc": "2023-06-15 06:12:54",
            "demand_perfection": [
                "identitypic"
            ],
            "created_at": 1686809574,
            "updated_at": 1686809574
        }
    ],
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "5B7C31E52D37FF42627F18A20BD9AFB2"
}
```