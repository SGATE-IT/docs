# 日终文件清算

## 对账文件传输

### 文件生成时间

在 D 日 01:00:00 AM（GMT+3）生成 D-1 日对账文件

### 文件获取

#### 服务器信息

- 沙箱环境服务器地址：`sandbox.gcc-pay.com`

#### 文件获取规则

- 获取文件列表：

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.gcc-pay.com/" -v --ssl --list-only
```

- 下载对账文件

```shell
curl "ftp://{USER}:{PASSWORD}@sandbox.gcc-pay.com/GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}" -v --ssl -o GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}
```

- `{USER}`：商户在 SGate 系统对账 FTP 账户
- `{PASSWORD}`：商户在 SGate 系统对账 FTP 账户密码
- `{MERCHANR_ID}`：商户在 SGate 系统中的商户号
- `{YYYYMMDD}`：交易日期: D-1 日
- `{SESSION_ID}`：对账场次号，取值为 01-09，无多场次对账则默认取值为 01

## 对账文件基本信息

### 文件格式及编码方式

- 文件使用标准 `CSV` 格式文件，使用以半角逗号 `,` 作分隔符，列为空也会表达其存在。每行使用换行符 `\n` 作为其结尾
- 文件使用 `UTF-8` 编码为编码方式

### 文件名称

对账文件名称：`GCCRECO_{MERCHANR_ID}_{YYYYMMDD}_{SESSION_ID}`
- `{MERCHANR_ID}`：商户在 SGate 系统中的商户号
- `{YYYYMMDD}`：交易日期: D-1 日
- `{SESSION_ID}`：对账场次号，取值为 01-09，无多场次对账则默认取值为 01

### 数据类型

| 序号 | 类型         | 含义                                   |
| ---- | ------------ | -------------------------------------- |
| 1    | T（Text）    | 文本字段，可使用字母及中文等，可以为空 |
| 2    | N（Numeric） | 数字字段，不可为空                     |

## 对账文件内容

### 文件明细记录

对账文件明细记录为对应商户 T-1 日所有交易状态为终态的交易信息明细

| 序号 | 栏位名称            | 栏位说明       | 类型 | 含义                                                                   |
| ---- | ------------------- | -------------- | ---- | ---------------------------------------------------------------------- |
| 1    | Merchant_ID         | 商户号         | T    | 商户在 SGate 中的商户号                                                |
| 2    | Order_ID            | 订单号         | T    | 订单在 SGate 中的订单号                                                |
| 3    | Merchant_Order_ID   | 商户订单号     | T    | 订单在商户中的订单号                                                   |
| 4    | Order_Create_Time   | 订单创建时间   | T    | 订单创建时间：yyyy-MM-dd HH:mm:ss(z)<br>如：2023-01-23 13:33:28(GMT+3) |
| 6    | Order_Complete_Time | 订单完成时间   | T    | 订单完成时间：yyyy-MM-dd HH:mm:ss(z)<br>如：2023-01-23 13:33:28(GMT+3) |
| 8    | Amount              | 订单金额       | N    | 订单总金额                                                             |
| 9    | Currency            | 订单金额币种   | T    | 订单总金额对应币种                                                     |
| 10   | Trans_Type          | 交易类型       | T    | [订单交易类型](/zh/payinApi/statement/statement#订单交易类型)          |
| 11   | Order_Status        | 订单状态       | T    | [订单状态](/zh/payinApi/statement/statement#订单状态)                  |
| 12   | Ori_Order_ID        | 原交易订单号   | T    | 该订单的原交易在 SGate 中的订单号                                      |
| 13   | Ori_Order_Amount    | 原交易支付金额 | N    | 该订单的原交易的金额                                                   |
| 14   | Ori_Order_Currency  | 原交易支付币种 | T    | 该订单的原交易币种                                                     |

## 附录

### 订单状态

| 订单状态 | 含义       |
| -------- | ---------- |
| S        | 交易成功   |
| F        | 交易失败   |
| P        | 交易处理中 |

### 订单交易类型

| 交易类型 | 含义     |
| -------- | -------- |
| P        | 支付交易 |
| R        | 退款交易 |
| C        | 拒付交易 |