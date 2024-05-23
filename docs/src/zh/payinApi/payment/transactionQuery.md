# 查询交易

## 功能简述

- 查询支付系统支付订单的交易详情

## 查询交易 API

### 请求 URL

- `/transactions/{TRANSACTION_ID}/merchant`
  - `{TRANSACTION_ID}`：您的交易 ID

### 请求 Method

- `transaction.detailForMerchant`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看公共参数_](/zh/payinApi/callMethod/callMethod#公共参数)

### 响应参数

响应参数如下：

- **Response Body**


| **参数**               | **类型** | **描述**                                           | **示例**                                                                                                                |
| ---------------------- | -------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| id                     | string   | 订单的交易 ID，系统自动生成，全局唯一              | "M000001T2022101023455774363043_1"                                                                                      |
| clientId               | string   | 创建订单通过的 Client 的 ID                        | "CLT0000001"                                                                                                            |
| orderId                | string   | 订单所属商户 ID                                    | "M000001T2022101023455774363043"                                                                                        |
| merchantId             | string   | 商户 ID                                            | "M000001"                                                                                                               |
| amount                 | number   | 订单金额，注意这里是数字类型，浮点数，最多两位小数 | 3.23                                                                                                                    |
| currency               | string   | 货币类型货币种类，三位大写字母                     | "SAR"<br>"KWD"<br>"BHD"<br>"AED"<br>"OMR"<br>"QAR"                                                                      |
| deviceId               | string   | 支付用户的设备 ID                                  | "a13382f5-4dcf-4ef5-9e81-33a836a610a9"                                                                                  |
| clientIp               | string   | 支付用户的 IP                                      | "192.168.0.1"                                                                                                           |
| userAgent              | string   | 支付用户的 UserAgent                               | "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36" |
| result                 | string   | 交易结果                                           |                                                                                                                         |
| completedAt            | string   | 交易完成时间                                       | "2022-12-31T12:53:17.000Z"                                                                                              |
| type                   | string   | 交易类型                                           | "payment" 支付<br>"refund" 退款                                                                                         |
| paymentMethod          | string   | 交易方式                                           |                                                                                                                         |
| payerDigest            | string   | 交易人数据                                         | '{"nameOnCard":"MasterCard SandBox","number":"512345xxxxxx0008"}'                                                       |
| successfullyNotifiedAt | string   | 通知回调成功时间                                   | "2022-12-31T12:53:17.000Z"                                                                                              |
| notificationTimes      | number   | 通知次数                                           | 1                                                                                                                       |
| lastNotifiedAt         | string   | 最近一次通知时间                                   | "2022-12-31T12:53:17.000Z"                                                                                              |
| channelOrderResult     | string   | 支付网关响应结果                                   | "{}"                                                                                                                    |
| createdAt              | string   | 创建时间                                           | "2022-10-22T12:00:21.000Z"                                                                                              |
| updatedAt              | string   | 更新时间                                           | "2022-12-31T12:53:17.000Z"                                                                                              |

**响应参数示例**

```json
{
    "amount":0.12,
    "channelFee":0,
    "agencyFee":0,
    "merchantFee":0,
    "id":"M424843T2023111313380659443799_1",
    "orderId":"M424843T2023111313380659443799",
    "channelId":"C231656",
    "clientId":"CLT8083667",
    "agencyId":"A158770",
    "merchantId":"M424843",
    "feeId":"F02701120",
    "productId":"P520636",
    "deviceId":"a13382f5-4dcf-4ef5-9e81-33a836a610a9",
    "clientIp":"124.126.202.12",
    "userAgent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/119.0.0.0 Safari\/537.36",
    "result":"Approved",
    "completedAt":"2023-11-13T10:39:51.000Z",
    "type":"payment",
    "paymentMethod":"stcpay",
    "currency":"SAR",
    "channelFeeSnapId":"FS83453",
    "agencyFeeSnapId":"FS47115",
    "merchantFeeSnapId":"FS2551345",
    "cleared":"no",
    "status":"initial",
    "payerDigest":"{\"mobile\":\"******0713\"}",
    "successfullyNotifiedAt":null,
    "notificationTimes":105,
    "lastNotifiedAt":"2023-11-14T14:23:11.000Z",
    "statementId":null,
    "clearanceId":null,
    "createdAt":"2023-11-13T10:39:40.000Z",
    "updatedAt":"2023-11-14T14:23:11.000Z",
    "channelOrderResult":{
        "MerchantID":"72002035477",
        "BranchID":"none",
        "TellerID":"none",
        "RefNum":"M424843T2023111313380659443799",
        "STCPayRefNum":"FT23317FWXPZ",
        "TokenId":"525051493906926355088",
        "Amount":0.12,
        "PaymentDate":"2023-11-13T13:39:40.13",
        "PaymentStatus":2,
        "PaymentStatusDesc":"Paid"
    }
}
```