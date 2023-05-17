# 商户信息查询

**功能简述**

- 查询商户信息

**请求方式：GET**

**URL：** `https://sandbox.gcc-pay.com/api_v1/merchants/{%MERCHANT_ID%}`

- %MERCHANT_ID%：商户ID

**Response**

【商户信息查询】 的响应参数如下：

- **Response Body**

| **参数**     | **类型**   | **描述**                                  | **样例**                                            |
| ------------ | ---------- | ----------------------------------------- | --------------------------------------------------- |
| id           | string     | GCCPAY 支付订单ID，系统自动生成，全局唯一 | "M448726"                                           |
| name         | string     | 商户名称                                  | "GCCPayMerchant"                                    |
| status       | string     | 商户状态：enableddisabled                 | "enabled"                                           |
| ownerId      | string     | 登陆用户名                                | "U771297"                                           |
| name_en      | string     | 用户名称                                  |                                                     |
| CR_file      | string     | 证件文件地址                              |                                                     |
| CR_number    | string     | 营业执照编号                              |                                                     |
| CR_vatNumber | string     | 增值税编号                                |                                                     |
| CR_expiredAt | string     | 证件过期时间                              |                                                     |
| address      | string     | 企业营业地址                              | "SAR",  "AED", "BHD",  "EGP",   "KWD", "OMR", "QAR" |
| telephone    | string     | 联系电话                                  |                                                     |
| scope        | string     | 营业范围                                  |                                                     |
| legalPerson  | string     | 法人                                      |                                                     |
| mcc          | string     | MCC                                       | "123333"                                            |
| agencyId     | string     | 代理商ID                                  | "A936252"                                           |
| currencys    | string     | 商户可使用币种                            | "SAR,KWD,AED,BHD,EGP,OMR,QAR"                       |
| createdAt    | string     | 生成时间                                  | "2022-11-08T23:20:19.000Z"                          |
| updatedAt    | string     | 更新时间                                  | "2022-12-07T23:26:49.000Z"                          |
| owner        | jsonObject | 所属人信息，包含ID，name，mobile          |                                                     |
| addressFile  | string     | 商户营业地址信息文件URL                   |                                                     |
| vatFile      | string     | 商户税务文件URL                           |                                                     |
| nationalId   | string     | 商户营业执照文件URL                       |                                                     |

**相应报文样例**

```json
{
    "id": "M448726",        ### 商户ID
    "name": "GCCPayMerchant",        ### 商户名称
    "status": "enabled",        ### 商户状态 enabled / disabled
    "ownerId": "U771297",        ### 登陆用户名
    "name_en": "null",        ### 用户名称
    "CR_file": None,        ### 证件文件地址
    "CR_number": "null",        ### 营业执照编号
    "CR_vatNumber": "null",        ### 增值税编号
    "CR_expiredAt": None,        ### 证件过期时间
    "address": "null",        ### 企业营业地址
    "telephone": "null",        ### 联系电话
    "scope": None,        ### 营业范围
    "legalPerson": "null",        ### 法人
    "mcc": "123333",        ### MCC
    "agencyId": "A936252",        ### 代理商ID
    "currencys": "SAR,KWD,AED,BHD,EGP,OMR,QAR",        ### 商户可使用币种
    "addressFile": null,        ### 商户营业地址信息文件URL
    "vatFile": null,            ### 商户税务文件URL
    "nationalId": null,        ### 商户营业执照文件URL
    "createdAt": "2022-11-08T23:20:19.000Z",        ### 生成时间
    "updatedAt": "2022-12-07T23:26:49.000Z",        ### 更新时间
    "owner":                ### 所属人信息
    {
        "id": "U771297",        ### 登陆ID
        "name": "GCCPayMerchant",        ### 登陆者名称
        "mobile": "17610908585"        ### 手机号
    }
```