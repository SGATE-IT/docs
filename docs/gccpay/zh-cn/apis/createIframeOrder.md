### 通过iframe的方式创建订单

**功能简述**

- 通过支付系统创建支付订单后，使用GCCPAY提供的iframe框架，构建自己的收银台界面

**时序图**

![img](../_media/create-iframe-order.svg)

**创建支付订单**

- 参照"创建订单接口"在GCCPAY支付系统创建支付订单

**使用iframe框架创建收银台**

1. 在成功创建支付订单后，依据返回的响应参数，构造收银台URL

  ```
  https://sandbox.gcc-pay.com/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}``&language={LANGUAGE}
  ```

  - {ORDER_ID}：在成功创建支付订单后，GCCPAY返回的订单ID
  - {ORDER_TICKET}：在成功创建支付订单后，GCCPAY返回的TICKET
  - {RETURN_URL}：在用户支付完成后，返回界面的URL地址，RETURN_URL需要进行URLencode
  - {LANGUAGE}：收银台页面默认语言，可选EN（英语），AR（阿拉伯语）

1. 创建自己的收银台界面，收银台界面中嵌入iframe框架，iframe的src指向步骤1构造的URL

   * 示例代码：

   ```javascript
      var iframe = document.createElement('iframe');
      iframe.src = 'https://sandbox.gcc-pay.com/?orderId={ORDER_ID}&ticket={ORDER_TICKET}&returnURL={RETURN_URL}';
      iframe.style = 'width: 1000px; height: 600px;';
      document.body.appendChild(iframe);
   ```