# 下载对账单

## 功能简述

在 Asia/Riyadh (+03, +0300) 时区 D+1 日 1:00 AM 生成 D 日的对账文件:

- 文件名称为：`GCCRECO_{MERCHANT_NAME}_{MERCHANT_ID}_{YYYYMMDD}`
  - `MERCHANT_NAME`: 商户名称
  - `MERCHANT_ID`: 商户 ID
  - `YYYYMMDD`：交易日期（D-1日）

## 下载对账单 API

::: warning 注意
文件响应成功的 **HTTP 状态码 (非code)** 为 `200`，如果文件正在处理中响应的 **HTTP 状态码 (非code)** 为 `202`
:::

### 请求 URL

- `/payee/statement`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数** | **必填** | **类型** | **默认值** | **描述**                                   |
| -------- | -------- | -------- | ---------- | ------------------------------------------ |
| day      | 否       | string   | D-1        | 对账单日期，格式：YYYY-mm-dd，默认为前一天 |

### 响应参数

HTTP 状态码为 `200` 返回为文件响应，文件格式为 `xlsx`，请自行保存文件;

HTTP 状态码为 `202` 返回 JSON 数据，HTTP 状态码为 `202` 时应当放弃当前请求，延后一定时间重新发起下载请求。

## 对账文件表头

| 栏位名称              | 栏位说明                                              |
| --------------------- | ----------------------------------------------------- |
| Merchant_ID           | 商户 ID                                               |
| Merchant_Name         | 商户名称                                              |
| Payment_ID            | 支付单号                                              |
| Payee_UID             | 商户支付单号                                          |
| Payment_Method        | 支付方式                                              |
| Payment_Create_Time   | 支付创建时间                                          |
| Payment_Complete_Time | 支付完成时间                                          |
| Amount                | 支付总金额                                            |
| Fee                   | 支付手续费                                            |
| Real_Amount           | 实际支付金额                                          |
| Currency              | 币种                                                  |
| Payment_Status        | 支付状态                                              |
| Custom_ID             | 客户 ID                                               |
| Custom_Name_E         | 客户英文名称                                          |
| Custom_Name_A         | 客户阿语名称                                          |
| Custom_Bank_Name      | 客户银行名称                                          |
| Custom_Bank_Code      | 客户银行 CODE                                         |
| Custom_Card_No        | 客户银行卡号（卡号脱敏，只显示前六后四，中间用*代替） |
| Custom_Iban           | 客户 IBAN                                             |
| Custom_STCPay_Account | 客户 Stcpay 账号                                      |