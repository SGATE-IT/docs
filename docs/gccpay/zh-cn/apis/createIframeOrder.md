### 通过 iframe 的方式创建订单

**功能简述**

- 通过支付系统创建支付订单后，使用 SGate 提供的 iframe 框架，构建自己的收银台界面

**时序图**

![img](../_media/create-iframe-order.svg)

**创建支付订单**

- 参照“通过 SGate 的收银台链接创建订单”接口在支付系统创建支付订单

**使用 iframe 框架创建收银台**

1. 在成功创建支付订单后，依据返回的响应参数，构造收银台 URL，在 iframe 内嵌的收银台，需要指定具体的支付方式：

- 构造 URL：

  - 卡支付

  ```
  https://sandbox.sgate.sa/embed/mada?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}
  ```
  - STCPay

  ```
  https://sandbox.sgate.sa/embed/stcpay?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}
  ```

  - 非 SAR 币种货币支付：

  ```
  https://sandbox.sgate.sa/embed/intl-card?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}
  ```
- 参数说明：
  - `{ORDER_ID}`：在成功创建支付订单后，支付系统返回的订单 ID
  - `{ORDER_TICKET}`：在成功创建支付订单后，支付系统返回的 TICKET
  - `{RETURN_URL}`：在用户支付完成后，返回界面的 URL 地址，RETURN_URL 需要进行 URLencode
  - `{LANGUAGE}`：收银台页面默认语言，可选 EN（英语），AR（阿拉伯语）

1. 创建自己的收银台界面，收银台界面中嵌入 iframe 框架，iframe 的 src 指向步骤 1 构造的 URL

   * 示例代码：

   ```javascript
      var iframe = document.createElement('iframe');
      iframe.src = 'https://sandbox.sgate.sa/embed/mada?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}&language={LANGUAGE}';
      iframe.style = 'width: 1000px; height: 600px;';
      document.body.appendChild(iframe);
   ```