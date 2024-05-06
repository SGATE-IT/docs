# Response Message Format

- `application/json`

| Field Name      | Type   | Description                                                                                                                                          |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| code            | int    | [status code](/en/virtualAccountApi/appendix/statusCode)                                                                                                     |
| message         | string | Response message                                                                                                                                     |
| data            | object | Response data                                                                                                                                        |
| sensitiveFields | object | Sensitive information field, used to identify which fields have been encrypted for [sensitive information](/en/virtualAccountApi/apiRule/illustrate#api-key) |
| requestId       | string | Request ID, unique return for each request                                                                                                           |