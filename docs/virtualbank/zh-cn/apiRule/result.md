# 响应消息格式

- `application/json`

| 字段名称        | 类型   | 说明                                           |
| --------------- | ------ | ---------------------------------------------- |
| code            | int    | 状态码（见附录）                               |
| message         | string | 响应信息                                       |
| data            | array  | 响应数据                                       |
| sensitiveFields | array  | 敏感信息字段，用于标识哪些字段做了敏感信息加密 |
| requestId       | string | 请求ID，每次请求返回的唯一                     |

