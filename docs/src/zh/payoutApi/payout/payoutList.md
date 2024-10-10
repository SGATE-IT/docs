# 查询代付工单列表

## 功能简述

- 查询代付工单列表

## 查询代付工单列表 API

### 请求 URL

- `/payee/payCustomTicket/list`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数**  | **必填** | **类型** | **默认值** | **描述**                                                                  |
| --------- | -------- | -------- | ---------- | ------------------------------------------------------------------------- |
| pageno    | 否       | number   | 1          | 页码，最多支持 1000 页                                                    |
| pagesize  | 否       | number   | 20         | 每页显示条数，最多支持 100 条                                             |
| starttime | 否       | number   | -          | 工单创建开始时间，秒级时间戳                                              |
| endtime   | 否       | number   | -          | 工单创建结束时间，秒级时间戳                                              |
| customids | 否       | string   | -          | 系统客户 ID，多个 ID 以英文逗号分割，长度限制 512 字符，示例：1187, 2f131 |
| payeeuid  | 否       | string   | -          | 商户订单 ID，长度限制 64 字符                                             |
| ticketid  | 否       | string   | -          | 代付工单 ID，长度限制 64 字符                                             |
| status    | 否       | number   | -          | [代付工单状态](/zh/payoutApi/appendix/paymentStatus)                      |

### 响应参数

响应参数如下：

- **Response Body**

| **参数名**    | **类型** | **描述**                                                                  |
| ------------- | -------- | ------------------------------------------------------------------------- |
| ticketid      | string   | 代付工单 ID                                                               |
| key           | string   | 代付工单 Key，每个代付工单唯一                                            |
| customid      | string   | 系统客户 ID                                                               |
| mercustomid   | string   | 商户客户 ID                                                               |
| payeeuid      | string   | 商户订单 ID                                                               |
| trantype      | string   | [交易类型](/zh/payoutApi/appendix/tranType)                               |
| currency      | string   | 返回货币类型为申请 payout 时的[货币代码](/zh/payoutApi/appendix/currency) |
| paymentmethod | string   | [付款方式](/zh/payoutApi/appendix/paymentMethod)                          |
| amount        | float    | 付款人支付总金额                                                          |
| realamount    | float    | 收款人实际到账金额                                                        |
| fee           | float    | 手续费                                                                    |
| status        | number   | [代付工单状态](/zh/payoutApi/appendix/paymentStatus)                      |
| statusdesc    | string   | 状态说明                                                                  |
| confirmtime   | number   | 打款完成时间                                                              |
| custominfo    | object   | 代付工单创建时客户数据快照，数据结构同客户数据                            |
| created_at    | number   | 创建时间                                                                  |
| updated_at    | number   | 更新时间                                                                  |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "ticketid": "15b2b",
            "key": "M4TQCZW20230615071437",
            "customid": "12ad4",
            "mercustomid": "u004",
            "payeeuid": "TEST1234567aa12sd1",
            "trantype": "standard",
            "currency": "SAR",
            "paymentmethod": "bankTransfer",
            "amount": 2002,
            "realamount": 2002,
            "fee": 127.79,
            "feeconfigid": 0,
            "status": 0,
            "statusdesc": "",
            "confirmtime": 0,
            "custominfo": {
                "customid": "12ad4",
                "mercustomid": "u004",
                "name_e": "updTest2",
                "name_a": "usera",
                "address": "Saudi Arabia",
                "identity": "RFUkm6s2HSMzFlOkMooW/S6GIyE6ne7N2ocB21CZ4MG+XCvaaJnj0NfM3cRz31iZBFWJZVXLPSHpuPCBpTb1XEdkUAoiVslejvmCEAJW3VoOM+3uUPD9ucDWxu00usxDGVLLsz3rJ+zpjGfITjWi1EWLLA62JskzvyjGFyL7sS+DjPO0aXUVU3vwNBHKrXqxzvc8W4nplJCFsDfIZrcJLRdYR5Pmwc1m6EjILHFm3G77tWKeIM+MLHl0WzeVUivdYqg+RWDCQ+dSHNS6w44eLp4JOs/WhI/loXZnR8GuxZftwsxoSors0IN6AydPZtLpraMSM5z3rivLN3CcwbQRWA==",
                "identitypic": "iHnF276boBgErF3g7lTGiQku9BSDpHGKMUfzWz4scsWaj7mNl3o//g3t4ytqQ22FFLJKdAatyA/nhc5q20J/T63OfNqAsqkZaxQ8Seh+CDnK9o9T6z6lM1G1QG/2Zh6VW0iB/awMf5iZQg/vwmsSPM5enZye19sxzLVHy0bqB0rnYC3faG277XODWuyyBaWv8w726l3YBYvoh+/Li8x3pxXyXOEVySCYTZicQ3MNyU5fMQyKuI8tB+bokaixTdnnSmUmaXo0pgsJ5YwX3AzNdlw4bnuN6f7SzzNshKK4H1eUIpkwnEEx+MBVEE21728LQrml8gmzFwY8BTZLfVayfQ==",
                "signpic": "",
                "bankname": "Riyad Bank",
                "bankcode": "1174c",
                "cardno": "MWQt3VEF+FnD/7WlWS50b6/86HRho1W72jwiYFRV35xu4QvPgmybhixAha3wX2QsiclczmJsjSgHJVD6MtQWNl9hc2lt52/fNkT8U1if0xMf3oMw9PR6wen9NpQUvca3r8YqZzsk29kU087dzyc4zVHajiCra8GwVIhO9Z8D1NOFmbU/yqydnba4hATZK8eDOkQZYTzCBD2ynx0JcgoHjvN3kiVelFEEhzf75ucloVJUSPeCizMi8v40u+Gu57w1GpKYs0uDOKrk6JV4R2e72frcFuA79Lsw1WW/bEg++9R6cWWzoLgD7aaG+4EYGmr6Wdf0R1QqcgHtHJS7NFuQCg==",
                "ibanaccount": "1234567892",
                "swiftcode": "ABNACNSHXXX",
                "stcaccount": "q/ZSA9dKLdaRiw58dJqKbsSc4ngdaiZQOOHVTs2iICVMQEZifuIIRd0wDO1+X8clsKBzpVnua6TdfopvjJ5sM+Xp46yrsYsAjdnBZUfhRsEsd4cVO+UX+YSRrxI0MhyL0cYE+i5u6VpGb5ArN8deK2lWsinEUR9uel70gOqjSnJ3xyMyXzDeo3x9n4Dgi6hjtMbNG/+sFZSDWhMbMgZOXujHukJf1aaFVeHQxrH94/qHFma0wPShiI5QnhyFOm4NwtsmMYzL45neOkuDwluEApZ29LgfvLJygoBRSRad8AvAjcMiuxOqxK0QbRt0AeN6SMXzZl7CrF3xUTsDUzw4QQ==",
                "status": 1,
                "statusdesc": "2023-06-15 06:14:45",
                "demand_perfection": [],
                "created_at": 1686798774,
                "updated_at": 1686801815
            },
            "created_at": 1686802477,
            "updated_at": 1694791614
        }
    ],
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "stcaccount",
            "cardno"
        ]
    },
    "requestId": "63AC8117DD8BAB88D02D6472FAD9310C"
}
```