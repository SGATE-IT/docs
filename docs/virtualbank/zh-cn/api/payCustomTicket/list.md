# 查询代付工单列表

**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/list`



**请求方式**

- GET



**请求参数**

| 参数名    | 必选 | 类型   | 默认值 | 说明                                                |
| --------- | ---- | ------ | ------ | --------------------------------------------------- |
| pageno    | n    | number | 1      | 页码                                                |
| pagesize  | n    | number | 20     | 每页显示条数，最多支持100条                         |
| starttime | n    | number | -      | 工单创建开始时间，秒级时间戳                        |
| endtime   | n    | number | -      | 工单创建结束时间，秒级时间戳                        |
| customids | n    | array  | -      | 系统客户ID，多个ID以英文逗号分割，示例：1187, 2f131 |
| payeeuid  | n    | string | -      | 商户订单ID                                        |
| ticketid  | n    | string | -      | 代付工单ID                                        |
| status    | n    | number | -      | 代付工单状态（见附录）                              |


**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
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
                "identity": "l+F+gGD3xqwEdqNmsjJqgu7U7oPWMU0qB01npsSOr13N4ykwfv0lj83EInkSDAQzbJSgR5sz4y74p5x/p4Se6eikSPultY9lZN7Tc07YieMv3DWqkLvh1MqLeAyHEBmpBiL4bz3TOD2u/qh3Me8x7fLs7DxCOGzfgvVEd8sfYDXFJfDJIKmobQzkkgDOW8FrdWVNgrQHdPiJz1V1QA431HniTzGR4zsViRgP+vk+dBx2IGNcqeqUhFfyN53gB2SUjNfoAahezL7E7nHpCuCY34SxxURvC+OCTx27BGVtMeHZC/Ylfea0zg+oDckpwdXbh2JS1IFoE9cSBLBIrstyeQ==",
                "identitypic": "F5RS/CjJCroN9BhZLxLRnkAEduJUZD5gUTOz8t4I7h/mGlwHogURQ3whdNA2CN8oIfQidW87D26/GZ97LdHiGJk6+s6vJCOFcduHOQR0IHCs1m1baxhYXzp72XU5wUZrjUyVI/vshcvzZRs/WVgmvpKS9s7BW03uNIZMip8/j4hRvTByDi5xAnOSWca0EvKECOZwF9Lht169ee1PKOgUHvxKZMUVwcMhALMRwg8mziKMlY85liW0C/PFQP65Om+LnZoO5L9EaNPcCfvZ14lb2xaankm7BOjIugqBWEnP2jZHJKpXOhNUgBSr0EYYek2nm+jxiKpDTHKe18ct8Nf1KA==",
                "signpic": "",
                "bankname": "Riyad Bank",
                "bankcode": "1174c",
                "cardno": "Uw7HBXGj4juKizHRvMvpcka7xcn9tycsoIA4JbjAOfDUWDwJOXIy5WXrvDXiueWOvcFYsQl+wBJOHEBhgRjE3GbwzxJ3Zewv4Ne+eer1dwXPwbBD9mNV8ZzvWJ9eR+lNIXbhphbvuccqwyl2MywlPHrj/2jMHMniL4+t2Z4YIWEQLW90leq5kpdV54KwdusnTNPHQgrMI7pe9T3p8W74XfMzjHfKpjaMNaar0TL4GSoYnA2el69m4KB+8vivzilruMEE2iNRpQMxYs8d25LHWgjvzcDrIOocA5C14OYl7TW9Yy7Hz28h/yu7IYW9l+XRt80MZ/lGD8g6rEH33eEhWQ==",
                "ibanaccount": "1234567892",
                "stcaccount": "cibEvUepVqJBH8b1zjZzb2xFttRj64UsxxccxPAW3H7cRyikiuyy6LXx80MmWf3br5ENmSYckeDei1jnwDFVFxNIn1R+OI/Q1BS+TJUNcyvXZPXHcYnic6GHMCWnzxZCZXM1gn6fz9lusO72/oNC75SuA6ycHhZ06EtubY8okhK6x9G4HyiEZzqX6IcHTLZRtLABv5jf1PWzXpinPMn7e3dmEOlDymvmRe5Tj7qkT5zVkZR2A2lnGzGbpaWbqiYYBXflFE1f5w/DG2g9sBYwDAVWq+Jun6jRkiUwZlympgLxsrj01vZ2Eh1+tO8LJByH5h7J0TQgcQIBZlNcFEp4/g==",
                "status": 1,
                "statusdesc": "2023-06-15 06:14:45",
                "demand_perfection": [],
                "created_at": 1686809574,
                "updated_at": 1686812615
            },
            "created_at": 1686813277,
            "updated_at": 1686813277
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
    "requestId": "25D2447741A2E3262AB22BF3600CD0DB"
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

