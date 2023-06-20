# 下载对账单

> 在UTC时区 D+1 日 1:00 AM 生成 D 日的对账文件，文件名称为：GCCRECO_{MerchantName}_{MerchantID}_{YYYYMMDD}。其中{YYYYMMDD}为交易日期（D-1日）

!> 文件响应成功的**HTTP状态码（非code）**为`200`，如果文件正在处理中响应的**HTTP状态码（非code）**为`202`

**请求URL**

- `{{host}}/openApi/v1/payee/statement`


**请求方式**

- GET

**请求参数**


| 参数名      | 必选 | 类型   | 默认值 | 说明                   |
| ----------- | ---- | ------ | ------ | ------------------ |
| day   | n    | string  | D-1      | 对账单日期，格式：YYYY-mm-dd，默认为前一天 |

**返回说明**

HTTP状态码为`200`返回为文件响应，文件格式为 `xlsx`，请自行保存文件;

HTTP状态码为`202`返回JSON数据，HTTP状态码为`202`时应当放弃当前请求，延后一定时间重新发起下载请求。

**对账文件表头**

| 栏位名称              | 栏位说明       |
| --------------------- | -------------- |
| Merchant_ID           | 商户ID         |
| Merchant_Name         | 商户名称       |
| Payment_ID            | 支付单号       |
| Payee_UID             | 商户支付单号   |
| Payment_Method        | 支付方式       |
| Payment_Create_Time   | 支付创建时间   |
| Payment_Complete_Time | 支付完成时间   |
| Amount                | 支付总金额     |
| Fee                   | 支付手续费     |
| Real_Amount           | 实际支付金额   |
| Currency              | 币种           |
| Payment_Status        | 支付状态       |
| Custom_ID             | 客户ID         |
| Custom_Name_E         | 客户英文名称   |
| Custom_Name_A         | 客户阿语名称   |
| Custom_Bank_Name      | 客户银行名称   |
| Custom_Bank_Code      | 客户银行号     |
| Custom_Card_No        | 客户银行卡号（卡号脱敏，只显示前六后四，中间用*代替）     |
| Custom_Iban           | 客户IBAN       |
| Custom_STCPay_Account | 客户Stcpay账号 |