# 创建客户

支持批量创建客户，如果单个客户的身份证号+账户在商户下已经存在，则会覆盖已经存在的客户数据，反之则会创建新的客户数据。

创建客户的初始状态为待完善资料，商户完善客户资料后转变为待审核状态。

如果单个客户的身份证号+账户在商户下已经存在，并且覆盖的客户当前已完善资料则会转变为待审核状态。



**请求URL**

- `{{host}}/openApi/v1/payee/custom/create`



**请求方式**

- POST



**请求参数**

数组格式，每一个元素代表一个需要创建的客户信息，敏感信息需要使用商户私钥进行加密。参数示例：

```json
[
    {
        "name_e":"test11",
        "name_a":"test11",
        "identity": "abnXuZoj/ny7c3m9c/8vtkAu8Kk82eesPLVshSgZpHRsBU6cs4Jv6uK/30mpGAUqnxhutV3MwedCmMJbt3ftQqqDx3LDN+i0nWox3DCvcmR08N0IfFFqB8FszLvyWVNXmETR1PWVj51OqgY59Jx9xU/rMvdZTCFLzhRb22x5K1qBVsgdtHVNo1iD9hYR/V9KJsUzzOmuwledWWf6ryBIYPORd7Czz5wYr4Eu95i7kgFvhQ+MIeC8tUKvB7BfYhO6gPkYLcDhfap5ZbZd986GigzRKMDZGhU4SLNO9xmR7fOFQ8C96/WMpiM7/QlsO04yGHW81D3kdrOJ0MNGWMvExQ==",
        "bankcode":"1174c",
        "account": "YTjtZuTtYpnx2Wd425XQjxbUsULmr2M463XRVrR21/0yvgQCVhiwIopgQZrsynlSxDAmrq7l+gUOiH2nPZmwOB5J7cS/zow2nmNRr2warKjcHXuNJF1LDuSq3MYDPd0VIkaARHOZtOZOZsVB1KPHxvfd1wgLSXcOM9IHos4Xr06HyceytxkPAVwQ49jv/PgrwlGL5FHf218DK0LLydidB/UdnxWHPEOhPO07VOxgFlB78+dY4m91QKRC7kKob0ysuHc2/RiLyoPZ/OcC8dIxWiIEHLOEXBZj96DYCQrSOjdg+QCQ5701us4R2LsglVwBU7S5551AcZ7lwRtDsRGuxA==",
        "ibanaccount":"12345678911"
    },
    {
        "name_e":"test22",
        "name_a":"test22",
        "identity": "YnZ4SBGR01y81jKpcfdr1jIdZJKbQGe2QedT0gKvB4e52ts5ghaXSXXz8cq0eb6O9kSSZT9w+kGT24ZoQ4T3n0Ze2jD2oMwj6u/QLnJa0Dra0HvIwyiZkn6+PUPumXTQ9S3ImrTEKPS875+qji70+tV2glsI4E2606wITmxD+ZknLCnpi9PeyXczLYbe/fNZmfRIYJxVf9m5BMnXjUWoVBbeUWLciVyc/xzhVnMrx5MmUz8g5pc1Ejln4l/ri4/3xwAXlZaUHGtKlk7uuTiSJOBFdphC6Sd+jT86UKRZLaGbq40Wx/n+fy/RbrqlEeTAquX/ytJdBJxhxkAiMcGiPQ==",
        "bankcode":"1174c",
        "account": "LOujnE3eHbAMKw7FXjilQG/wE2Y5qAKpeeGfFw7Owlvaajw/cBShx+BtBeiNr04Ncy8QpBvDp9hA0PEQi5dycbkL5RnbRyBu6kPVby+iD2u7Twp9ZMt1SEpOABazdQB3PcmjRXY2Jrx9iL72aQ5WxaC6CvqsQYYk6neEuTCqTNhmYfvI0/ElP1QmoysHMdo0iTluWg9fIuwBnbdsYvsYtJ0+RL0igbNYuSOexjJ96y0uKE1axP1anlpcakpPgignI9VYPwlIee2FhWmAHkxUTZGq/bPvqbD7Os3pmemI22t2/R3E8q2cw5lS5YV/AySUMmPTbKp7bznwwWezCFJVWw==",
        "ibanaccount":"123456789"
    }
]
```

说明：

| 参数名      | 必选 | 类型   | 默认值 | 说明                                       |
| ----------- | ---- | ------ | ------ | ------------------------------------------ |
| name_e      | y    | string | -      | 客户英文名称                               |
| name_a      | y    | string | -      | 客户阿拉伯文名称                           |
| identity    | y    | string | -      | 身份证号（敏感信息，使用商户私钥加密处理） |
| bankcode    | y    | string | -      | 银行CODE                                   |
| account     | y    | string | -      | 账户（敏感信息，使用商户私钥加密处理）     |
| ibanaccount | y    | string | -      | IBAN                                       |



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": {},
    "sensitiveFields": {},
    "requestId": "65A91020D96D4A0C8D303D37B0953640"
}
```

