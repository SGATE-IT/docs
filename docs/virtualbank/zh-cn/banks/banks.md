# 查询支持银行列表

### **请求URL**

- `{{host}}/openApi/v1/payee/banks`

### **请求方式**

- POST

### **请求参数**

未加密参数示例：

```json
{
    "timestamp":1680070775,
    "params":{

    }
}
```

### **返回示例**

> data  字段为解密后数据展示

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "bankcode": "114db",
            "bankname": "The National Commercial Bank"
        },
        {
            "bankcode": "11558",
            "bankname": "The Saudi British Bank"
        },
        {
            "bankcode": "115d5",
            "bankname": "Saudi Investment Bank"
        },
        {
            "bankcode": "11652",
            "bankname": "alinma bank"
        },
        {
            "bankcode": "116cf",
            "bankname": "Banque Saudi Fransi"
        },
        {
            "bankcode": "1174c",
            "bankname": "Riyad Bank"
        },
        {
            "bankcode": "117c9",
            "bankname": "Samba Financial Group (Samba)"
        },
        {
            "bankcode": "11846",
            "bankname": "alawwal bank"
        },
        {
            "bankcode": "118c3",
            "bankname": "Al Rajhi Bank"
        },
        {
            "bankcode": "11940",
            "bankname": "Arab National Bank"
        },
        {
            "bankcode": "119bd",
            "bankname": "Bank AlBilad"
        },
        {
            "bankcode": "11a3a",
            "bankname": "Bank AlJazira"
        },
        {
            "bankcode": "11ab7",
            "bankname": "Gulf International Bank Saudi Aribia (GIB-SA)"
        }
    ],
    "requestId": "95E202816D044ADC7F2473892E941893"
}
```