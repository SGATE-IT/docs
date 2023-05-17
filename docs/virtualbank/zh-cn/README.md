# VIRTUALBANK

### **全局变量**

- `host`：http api 域名

- 测试域名：[http://vbank.test.sgate.sa/](http://vbank.test.sgate.sa/admin/auth/login)
- 生产域名：[https://vbank.sgate.sa/](http://vbank.test.sgate.sa/admin/auth/login)

### **响应消息格式**

- `application/json`

| 字段名称   | 类型   | 说明                       |
| ---------- | ------ | -------------------------- |
| code       | int    | 状态码（见附录）           |
| message    | string | 响应信息                   |
| data       | string | 加密数据                   |
| request_id | string | 请求ID，每次请求返回的唯一 |