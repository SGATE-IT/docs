# 资金账单结算文件

## 文件传输

### 文件生成时间

在 D 日 01:00:00 AM（GMT+3）生成 D-1 日资金账单结算文件

### 文件获取
<br>

#### 服务器信息

- 沙箱环境服务器地址：`sandbox.sgate.sa`

#### 文件获取规则

- 获取文件列表：

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/" -v --ssl --list-only
```

- 下载资金账单结算文件

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.sgate.sa/{YYYYMMDD}/GCCFUND_{MERCHANR_ID}_{YYYYMMDD}.xlsx" -v --ssl -o "GCCRECO_{MERCHANR_ID}_{YYYYMMDD}.xlsx"
```

1. `{USER}`：商户在 SGate 系统对账 FTP 账户
2. `{PASSWORD}`：商户在 SGate 系统对账 FTP 账户密码
3. `{MERCHANR_ID}`：商户在 SGate 系统中的商户号
4. `{YYYYMMDD}`：交易日期: D-1 日，格式：`yyyy-MM-dd`，示例：`2023-08-21`

- 系统后台获取

![img](/images/payinApi_zh/fund-statement.png)


## 文件基本信息

### 文件格式及编码方式

- 文件使用标准 `xlsx` 格式文件
- 文件使用 `UTF-8` 编码为编码方式

### 文件名称

资金账单结算文件名称：`GCCFUND_{MERCHANR_ID}_{YYYYMMDD}`
- `{MERCHANR_ID}`：商户在 SGate 系统中的商户号
- `{YYYYMMDD}`：交易日期: D-1 日，格式：`yyyy-MM-dd`，示例：`2023-08-21`

## 文件内容

### 文件明细记录

资金账单结算文件明细记录为对应商户 T-1 日所有交易状态为终态的交易信息明细

| 序号 | 栏位名称              | 栏位说明         | 含义                                                               |
| ---- | --------------------- | ---------------- | ------------------------------------------------------------------ |
| 1    | Merchant_ID           | 商户号           | 商户在 SGate 中的商户号                                            |
| 2    | Order_ID              | 订单号           | 订单在 SGate 中的订单号                                            |
| 3    | Merchant_Order_ID     | 商户订单号       | 订单在商户中的订单号                                               |
| 4    | Order_Create_Time     | 订单创建时间     | 订单创建时间，yyyy-MM-dd HH:mm:ss(z)。如2023-01-23 13:33:28(GMT+3) |
| 6    | Order_Complete_Time   | 订单完成时间     | 订单完成时间，yyyy-MM-dd HH:mm:ss(z)。如2023-01-23 13:33:28(GMT+3) |
| 8    | Amount                | 订单金额         | 订单总金额，精确两位小数                                           |
| 9    | Currency              | 订单金额币种     | 订单总金额对应币种                                                 |
| 10   | Order_Status          | 订单状态         | [订单状态](/zh/payinApi/statement/fundStatement#订单状态)          |
| 11   | Trans_Type            | 交易类型         | [订单交易类型](/zh/payinApi/statement/fundStatement#订单交易类型)  |
| 12   | Payment_Type          | 支付类型         | 用户支付订单的类型，如 DEBIT                                       |
| 13   | Payment_Method        | 支付方式         | 用户支付订单的方式，如 MADA                                        |
| 14   | Fee_Amount            | 手续费金额       | 订单对应手续费金额，精确两位小数                                   |
| 15   | Fee_Currency          | 手续费币种       | 订单对应手续费币种                                                 |
| 16   | Settle_Amount         | 应结算金额       | 该订单对应的应结算金额，精确两位小数                               |
| 17   | Settle_Currency       | 应结算金额币种   | 该订单对应的应结算金额币种                                         |
| 18   | Refund_Amount         | 退款金额         | 订单的退款总金额                                                   |
| 19   | Refund_Currency       | 退款币种         | 申请退款的币种                                                     |
| 20   | Refund_Time           | 退款时间         | 退款完成时间                                                       |
| 21   | Ori_Order_ID          | 原交易订单号     | SGate 原交易订单号                                                 |
| 22   | Ori_Merchant_Order_ID | 原交易商户订单号 | 原交易的商户订单号                                                 |

### 交易汇总数据

- Total Amount：订单总金额
- Total Fee：手续费总金额
- Total Settle Amount：应结算总金额

## 附录

### 订单状态

| 订单状态 | 含义     |
| -------- | -------- |
| S        | 交易成功 |

### 订单交易类型

| 交易类型 | 含义     |
| -------- | -------- |
| P        | 支付交易 |
| R        | 退款交易 |
| C        | 拒付交易 |