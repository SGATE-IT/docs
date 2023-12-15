# 更新客户

## 功能简述

- 更新客户

### 客户状态说明

客户数据更新后，如果当前客户状态如果不是**封禁**状态或**待完善资料**状态，则会转变为**待审核状态**。

::: warning 注意
1. 如果提交的更新数据与客户现有数据一致，则客户信息保持不变，不做状态转变。
2. 客户资料变更不影响该客户已经创建的代付单，代付单会继续按照创建时的客户信息进行处理。
3. 客户账户信息中银行账户、STCPay 账户需要至少存在一个，如果用户当前只有 STCPay 账户，则 STCPay 账户不可修改为空。
:::

## 更新客户 API

### 请求 URL

- `/payee/custom/update`

### 请求方式

- POST

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

::: tip 提示
商户客户 ID 和系统客户 ID 传其中一个，如果都不传接口会响应参数缺失错误。
:::

| **参数**    | **必填** | **类型** | **默认值** | **描述**                                                                                       |
| ----------- | -------- | -------- | ---------- | ---------------------------------------------------------------------------------------------- |
| mercustomid | 否       | string   | -          | 商户客户 ID                                                                                    |
| customid    | 否       | string   | -          | 系统客户 ID                                                                                    |
| name_e      | 否       | string   | -          | 客户英文名称                                                                                   |
| name_a      | 否       | string   | -          | 客户阿拉伯文名称                                                                               |
| identity    | 否       | string   | -          | 身份证号（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| bankcode    | 否       | string   | -          | 银行 CODE                                                                                      |
| cardno      | 否       | string   | -          | 银行账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理）    |
| ibanaccount | 否       | string   | -          | IBAN                                                                                           |
| stcaccount  | 否       | string   | -          | STCPay 账户（敏感信息，使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)加密处理） |

### 响应参数

**返回更新后的客户数据信息**。

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
| bankname          | string   | 银行名称                                                                                             |
| bankcode          | string   | 银行 CODE                                                                                            |
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
    "data": {
        "customid": "12ad4",
        "mercustomid": "u004",
        "name_e": "updTest2",
        "name_a": "usera",
        "identity": "EgWVcEXDN90VwHClP1rl5qlX7yiDtedet7ACDUwHWBty0doC7xUV5eSYizInT0PNdAlcOg6JNVTujxKDgIv3bKvCaePHDmoD2pSZBed7WhrwTlwSdBM2FAPrf/PVAX74DiHyz1KZk7w81Xk4HP7VtMatAZX2ZVAjwbxo5Oj76xkCkm2N8RSoCX0tTXdsNP3zAb0ORZw2aucZUg4PLDKkvnsEI5SyPuhdhntN24/4nR5SmDoYwMyZ3Zlz4zArTL4M3NengD12C5Ewz4jcmwoAx/GmQsssjY6oDbgCeG1CsJlLgG9T4avL/TcA7d5vgAA9yU38WFJBCR8/kFUU3za5yg==",
        "identitypic": "",
        "signpic": "",
        "bankname": "Riyad Bank",
        "bankcode": "1174c",
        "cardno": "ER3wV/DhGZY3aFKXO0Yb4O/t0FHkNmFs/2ME0vg+fIQ/JgnNWTTdBwE3pL5FktKP31MhpRQP+ioH/oUcxHR/JNC1IjNEU/leRlSput+SafK9paKFAA8dVgunRbWQb7TsRWh4wVBujtnkfkOwDBhkhRaALWvBRau3i4WU7ZlTy3hpxX41lAPpi07Y8XkatVU1B3q51wFFu1mGD3L3UZI0jD6SceQD+HIH8cUutpt7JFSVS1rABgi3Hkh2yplfj1d7i61GNoSzr1SHyjIC5HydSZSVeEB1JXly+W04ccIeWENVDba2Sk4YYVPKmgell7a4NQhsMZr0+QL4ZG196/U1gg==",
        "ibanaccount": "1234567892",
        "stcaccount": "ied6668pUXSRLj3eIWENQSLy3IzheI/lZntPehScFdjsnSeXJtiHVROuT3+e+rAXKFclxCyuD2+n44IHLh/pjgHZEr4Vr9T2qZR1HRnj3uvESaT/yPbRLx1hynUknd2YnGfsM01ZUfUztlmhSArAQ48SPB7py4aIMZin8kOi4ak/z1bY0Yqh1iVK+9Qa07CFfBY80vBgqg0gu4ysil4HLsuC0XahYMNdqAJqY8EJ3bbssae+B52I6QjQ5a+5xll8O5JczIBsJJimGh34OZ1/t7Wtd1WyRRKeXcdIfSccOBaWtdH1cSLDj1xqLg0T7HU/whyZRVOB1fxedd/ceg3quA==",
        "status": 4,
        "statusdesc": "2023-06-15 06:12:54",
        "demand_perfection": [
            "identitypic"
        ],
        "created_at": 1686809574,
        "updated_at": 1686809659
    },
    "sensitiveFields": [
        "identity",
        "identitypic",
        "signpic",
        "stcaccount",
        "cardno"
    ],
    "requestId": "3684DFCB66E8A8D6DC18E6FF8626C93D"
}
```