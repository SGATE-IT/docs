# 商户信息查询

**功能简述**

- 查询商户信息

**请求方式：GET**

**Method：**`merchant.detail`

**URL：** `/merchants/{MERCHANT_ID}`

- `{MERCHANT_ID}`：您的商户 ID

**Request**

【查询商户信息】 的请求参数如下：

- **Header**

  - _查看公共参数_

**Response**

【商户信息查询】 的响应参数如下：

- **Response Body**

| **参数**                             | **类型** | **描述**                                            | **样例**                                        |
| ------------------------------------ | -------- | --------------------------------------------------- | ----------------------------------------------- |
| invoicePrefix                        | string   | 发票前缀                                            | "Sand00"                                        |
| id                                   | string   | 商户 ID                                             | "M448726"                                       |
| name                                 | string   | 商户名称                                            | "GCCPayMerchant"                                |
| status                               | string   | 商户状态：enableddisabled                           | "enabled"                                       |
| ownerId                              | string   | 登陆用户名                                          | "U771297"                                       |
| name_en                              | string   | 用户名称                                            | "Sandbox"                                       |
| CR_file                              | string   | 证件文件地址                                        |                                                 |
| CR_number                            | string   | 营业执照编号                                        |                                                 |
| CR_vatNumber                         | string   | 增值税编号                                          |                                                 |
| CR_expiredAt                         | string   | 证件过期时间                                        | "2023-04-21T00:00:00.000Z"                      |
| address                              | string   | 企业营业地址                                        | "SAR", "AED", "BHD", "EGP", "KWD", "OMR", "QAR" |
| telephone                            | string   | 联系电话                                            | "900000000"                                     |
| scope                                | string   | 营业范围                                            |                                                 |
| legalPerson                          | string   | 法人                                                | "Sandbox"                                       |
| mcc                                  | string   | MCC                                                 | "123333"                                        |
| agencyId                             | string   | 代理商 ID                                           | "A936252"                                       |
| currencys                            | string   | 商户可使用币种                                      | "SAR,KWD,AED,BHD,EGP,OMR,QAR"                   |
| addressFile                          | string   | 商户营业地址信息文件 URL                            |                                                 |
| vatFile                              | string   | 商户税务文件 URL                                    |                                                 |
| nationalId                           | string   | 商户营业执照文件 URL                                |                                                 |
| logoFile                             | string   | 商户 LOGO URL                                       |                                                 |
| website                              | string   | 商户网站地址                                        | https://xxx                                     |
| email                                | string   | 商户邮箱                                            | info@gmail.com                                  |
| city                                 | string   | 商户所在城市                                        |                                                 |
| district                             | string   | 商户所在区域                                        |                                                 |
| street                               | string   | 商户所在街道                                        |                                                 |
| zipcode                              | string   | 邮政编码                                            |                                                 |
| feeRate                              | number   | 手续费费率                                          |                                                 |
| statementStatus                      | string   | 对账方式： <br> hand：手动对账 <br> daily：每日对账 | "daily"                                         |
| bankCardWhiteList                    | string   | 卡号白名单                                          |                                                 |
| createdAt                            | string   | 生成时间                                            | "2022-11-08T23:20:19.000Z"                      |
| updatedAt                            | string   | 更新时间                                            | "2022-12-07T23:26:49.000Z"                      |
| owner                                | object   | 所属人信息                                          |                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.id     | string   | 所属人 ID                                           |                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.name   | string   | 所属人名称                                          |                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;owner.mobile | string   | 所属手机号                                          |                                                 |

**相应报文样例**

```json
{
  "invoicePrefix": "Sand00", // 发票前缀
  "id": "M226746", // 商户ID
  "name": "Sandbox_For_GCCMall_QCloud", // 商户名称
  "status": "enabled", // 商户状态 enabled / disabled
  "ownerId": "U592801", // 登陆用户名
  "name_en": "Sandbox For GCCMall QCloud", // 用户名称
  "CR_file": null, // 证件文件地址
  "CR_number": "111222", // 营业执照编号
  "CR_vatNumber": "111222", // 增值税编号
  "CR_expiredAt": "2023-04-21T00:00:00.000Z", // 证件过期时间
  "address": null, // 企业营业地址
  "telephone": "111222333", // 联系电话
  "scope": null, // 营业范围
  "legalPerson": "test", // 法人
  "mcc": "1111", // MCC
  "agencyId": "A936252", // 代理商ID
  "currencys": "SAR,AED,BHD,EGP,KWD,OMR,QAR,USD", // 商户可使用币种
  "addressFile": null, // 商户营业地址信息文件URL
  "vatFile": "2023-03-20/82/8217650e21bb2b8624af1cd83525fdcf.png", // 商户税务文件URL
  "nationalId": null, // 商户营业执照文件URL
  "logoFile": "2023-04-21/9b/9bcccd988b4e5873895c034b81092df3.png", // 商户LOGO URL
  "website": null, // 商户网站地址
  "email": null, // 商户邮箱
  "city": null, // 商户所在城市
  "district": null, // 商户所在区域
  "street": null, // 商户所在街道
  "zipcode": null, // 邮政编码
  "feeRate": 7, // 手续费费率
  "statementStatus": "daily", // 对账方式
  "bankCardWhiteList": "[{\"cardNumber\":\"439226011111111\",\"nameOnCard\":\"test\",\"expiryMonth\":\"07\",\"expiryYear\":\"2021\"},{\"cardNumber\":\"5123450000000008\",\"nameOnCard\":\"MasterCard SandBox\",\"expiryMonth\":\"01\",\"expiryYear\":\"2039\"}]", // 卡号白名单
  "createdAt": "2023-01-03T09:34:59.000Z", // 生成时间
  "updatedAt": "2023-07-26T02:52:42.000Z", // 更新时间
  "owner": {
    "id": "U592801", // 所属人ID
    "name": "Sandbox For GCCMall QCloud", // 所属人名称
    "mobile": "900000000" // 所属手机号
  }
}
```
