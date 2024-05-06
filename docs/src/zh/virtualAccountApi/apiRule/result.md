# 响应消息格式

- `application/json`

| 字段名称        | 类型   | 说明                                                                              |
| --------------- | ------ | --------------------------------------------------------------------------------- |
| code            | int    | [状态码](/zh/virtualAccountApi/appendix/statusCode)                                       |
| message         | string | 响应信息                                                                          |
| data            | object | 响应数据                                                                          |
| sensitiveFields | object | 敏感信息字段，用于标识哪些字段做了[敏感信息加密](/zh/virtualAccountApi/apiRule/sensitive) |
| requestId       | string | 请求 ID，每次请求返回的唯一                                                       |