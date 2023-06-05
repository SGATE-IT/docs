# 查询代付工单列表

**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/list`



**请求方式**

- GET



**请求参数**

| 参数名    | 必选 | 类型   | 默认值 | 说明                                                |
| --------- | ---- | ------ | ------ | --------------------------------------------------- |
| pageNo    | n    | number | 1      | 页码                                                |
| pageSize  | n    | number | 20     | 每页显示条数，最多支持100条                         |
| startTime | n    | number | -      | 工单创建开始时间，秒级时间戳                        |
| endTime   | n    | number | -      | 工单创建结束时间，秒级时间戳                        |
| customids | n    | array  | -      | 查询客户ID，多个ID以英文逗号分割，示例：1187, 2f131 |
| payeeuid  | n    | string | -      | 自定义支付ID                                        |
| status    | n    | number | -      | 代付工单状态（见附录）                              |



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "ticketid": "1397a",
            "customid": "12110",
            "payeeuid": "TEST12345679013",
            "amount": 2300.46,
            "realAmount": 2300.46,
            "fee": 121.08,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12110",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "wRT5ObftruKF8syvWOM9BWDM2jB0XYyB8/XJHr/biVGAJysnZ0aPkGwCHR56OUN1oOOZDH3U+gvBXAOcfaWlU7IjebnhA/izGGAHGmjqnXLOAofTDRRCWd0bTc7Kjewmo1By5wilBAO30VTojR7tGGnPfyJNMQssv2V3+5n7iwdWk8vuddXptDVp8+YLgYbrxN+SfWfzzzhXp+VRJadSIPoFKLOcmmMohVdglnMsSRtUCQUZr/IfQTU22VCvXKoyt3ZT30oaS/QTbwNs+7ymJ4CPmnXuoMFYaj5AtUECi5uxvf3M1RK0TnGlH5gvXx7CCBQDS8M+GKAZxbBGN2gLNg==",
                "identitypic": "",
                "signpic": "pyCHqJoYzxvrGkIOcDR6KjnW5xgjH53WElz5jDmj7omzzBDblVS32q7HgWdGr6yLafptFqjordKaeVFiLMFjhypfl+cTEU3pSofrlxrGdd0VDTPEkZuoWrV+SlYB7kXtZqZDc5D+RpmcNfThziN7ymBMbi+K7yd1iWCdjEFsxQ6Dfr3veC5vQGacbR2X4chFrGRC7b+kvpDAp1uv3DWFzsL9WPo1ce54XUZBAGkMYvSaf+VrDMdK3NnDZcgx0Wk2dM0m3eCqx84TcQ47cXWmmYNGPdBeQW8HJH+50/2joXj+W/YwhvhQyAigc6rDzMMk4nLr0dPNuqlAlUaPHSWKKA==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "wLcOjEb4Zu28rrnLUHAajxkQtmLffWaolkjSmOEn80D9Dgp2UDp6/Fm+S1EfL3AMsDWw3+gtuAXIpWfwGDDV1e1HLq0+7TLmHaoU7YKhm2BNTMQ5v1SwgTFD2gpe59J4lf14lEkOMkVe31tN9AfQ+M5SwZ7FeDUYEAE/v+eG4naH96O4Qibo1E1Bxt+XDPNqRqVRCIIiQ6/A57yFYYS/8ej/yyO1JGggSGJdKpMBki4I7NeZTd1EZiWi6k3lthN3rS7Z9Fsvea4iG09vfreCTIU6+UK5t1WLmDricWzbiRGBxYNOV3rKMiU60heaGxDy+g6s+SAInxdBh16Z3r6zPg==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1685604394,
            "updated_at": 1685604394
        },
        {
            "ticketid": "138fd",
            "customid": "12093",
            "payeeuid": "TEST12345678912",
            "amount": 2000.35,
            "realAmount": 2000.35,
            "fee": 105.28,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12093",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "urhFAfYe7giwFvFkolEl9aKj3WESXdRgtHINFCYHgqcy1poQucbeF5WlW6qs0A68e5/Bhkt2VM5glPZnTjQLAGpEN7JQWNIQvAtCZ/1N1k3fFBlRtsz0K+6HmT336BoP2aeMSNKoyvEeOQLEAVAAwxYtjpYB3NQ60eoL97HEZ4mXh+HOlqRTPBjZzG4K5ygRKdLNfzba08TE+p/GXh2xM5SGfNDaXt7tMp26f2PDNzCI06r4RewJfeWHHAMaxXSYVOlo/acLKnBOtKWWOYeWbW7/vIfGMdwN+6oNCgmtBD1LiqgsLJXsB8G0C73YcfYZjNqsI1oy86sMnLNgYnsO9w==",
                "identitypic": "0CDLv/doFLbZEHdlCwtIS7YWewKub0ERDAa81hrM011FM3RRwxaka3OJfS4acoTR1nFsKsngz9NxhDXxGeNVqasp9cz9/Vfpv8A2NHqP/1zz/aQvFY9pn9A7C4YoLM5MjNjx9jhkjnvg1hPuiCp7HfHeL313YCPY6f4th66ihRTFmjw04CmoZILXK8/qx0ldniyGfFaOs4nKFtR0auMooRLrJeYs6uw3cXRdDrwpQMabq/yu12ArZ3TdAOTvL+Sl/WATLrmpvzR2JuXySFC+J4FQrVGZ1OCcIlsrscOTIhW1U5nOPHCbAjImHKFTOiqU51Gbf91xOZuWUZe/bscfPQ==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "xq7CI8bXWls776jb8mwW3rpsz0KQeG93Z/XkS9y+XDx6nqtQbPMD2ygzSxzm5GInbXb6zzgBE+r0Iaoctg/ESe1ULCELhOLHS4xIPQE9MS07HP4ykrX5/YEKvNrtB6dDqHi48M8tnbX5KcGr733FFLlPxc9Qeb3eC/2OJEEu3oLIFSCUg8/LMBSXJF1pYgnGhPho6LiSJFF2eRQcnfKaIwWBGgEk0gpF81WhwywIP9NXwofdve9Phs9NbcDxTIQzC7Tfs63x9AAz0+iTKeYh6jGpbG/0WR/JLuPzyi41Z2gXGc9i8kYHnjRB4tfbXoIQpwkLcg6DTitDkdBdXgMTDQ==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1685604394,
            "updated_at": 1685604394
        }
    ],
    "sensitiveFields": {},
    "requestId": "CA17D56BFBDFC197EF03017F36F9BBD6"
}
```



**返回参数说明**

| 参数名      | 类型         | 说明                       |
| ----------- | ------------ | -------------------------- |
| ticketid    | string       | 代付工单ID                 |
| customid    | string       | 客户ID                     |
| payeeuid    | string       | 自定义支付ID               |
| amount      | double(16,2) | 薪水                       |
| realAmount  | double(16,2) | 实际发放薪水               |
| fee         | double(16,2) | 手续费                     |
| status      | number       | 代付工单状态（见附录）     |
| confirmtime | number       | 确认时间                   |
| custominfo  | object       | 代付工单创建时客户数据快照 |
| created_at  | number       | 创建时间                   |
| updated_at  | number       | 更新时间                   |

