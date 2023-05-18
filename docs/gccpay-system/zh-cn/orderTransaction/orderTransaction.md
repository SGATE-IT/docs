# 订单 & 交易

## 订单

所有的支付订单会展示在【Orders】模块

![img](../_media/orderTransaction-1.png ':size=90%')

- 订单有以下状态：

![img](../_media/orderTransaction-2.png ':size=80%')

可以点击订单名称查看订单详情

![img](../_media/orderTransaction-3.png ':size=45%')
![img](../_media/orderTransaction-4.png ':size=45%')

## 交易

- 交易和订单的关系
  - 支付交易：GCCPAY和渠道之间的交易信息称之为支付交易
  - 支付订单：无论实际交易是否成功，均会创建支付订单
  - 注：一笔支付交易不一定对应一笔支付订单，但是一笔支付交易一定对应一笔支付订单

所有的交易会在【Transactions】模块中展示

![img](../_media/orderTransaction-5.png ':size=90%')

- 交易有以下交易结果

![img](../_media/orderTransaction-6.png ':size=90%')

可以点击交易ID查看交易详情

![img](../_media/orderTransaction-7.png ':size=45%')
![img](../_media/orderTransaction-8.png ':size=45%')

- 交易有以下几种状态

![img](../_media/orderTransaction-9.png ':size=80%')

- Notification times：GCCPAY发起交易回调通知商户时间
- Completed time：交易渠道成功时间
- Successfully notified time：GCCPAY回调通知成功时间