# 支付

## 创建支付链接

在使用支付之前，需要先创建支付链接

- 在【Payment Links】模块中，点击【Create】创建新的客户端

![img](../_media/payment-1.png ':size=45%')
![img](../_media/payment-2.png ':size=45%')

- Name : 支付链接名称
- Bind IP(可选项) : 
  - 如果Bind IP为空，则所有服务器均可以通过API调用该客户端
  - 如果Bind IP不为空，则只有绑定的IP可以通过API调用该客户端
- Notification URL(可选项) : 
  - 如果Notification URL为空，则系统不会启用【回调通知】功能
  - 如果Notification URL不为空，则系统会启用【回调通知】功能，向填写的URL发送回调通知

!> 注：【回调通知】的详细通能说明，请参照 GCCPAY OPEN API 文档

## 付款链接

在创建付款链接之后，可以点击链接名称查看支付链接详情

![img](../_media/payment-3.png ':size=90%')

### 默认付款链接

1. 在支付链接详情中，【Link URL】为默认付款链接，默认付款链接进行支付时需要客户手动选择付款货币和金额

![img](../_media/payment-4.png ':size=45%')
![img](../_media/payment-5.png ':size=45%')

2. 可以在【Set cashier config】中对默认付款链接进行设置

![img](../_media/payment-6.png ':size=45%')
![img](../_media/payment-7.png ':size=45%')

- Need address：在付款人成功支付后，是否展示填写付款人收货信息

![img](../_media/payment-8.png ':size=90%')

- Need tip：在付款人付款时，是否展示小费支付框
- Tip options：该付款链接预设的小费金额

![img](../_media/payment-9.png ':size=90%')

### 创建固定币种&金额的付款链接

可以根据商户需要，创建固定币种&金额的付款链接

![img](../_media/payment-10.png ':size=45%')
![img](../_media/payment-11.png ':size=45%')

- Payment currency：该付款链接的币种
- Payment amount：该付款链接的金额
- Need address：在付款人成功支付后，是否展示填写付款人收获信息
- Need tip：在付款人付款时，是否展示小费支付框
- Tip options：该付款链接预设的小费金额
- Remark：该付款链接的备注

![img](../_media/payment-12.png ':size=90%')