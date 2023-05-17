# GCCPAY Payment API Document

## Introduction

> System overview: The GCCPAY payment system is used to complete the payment collection of merchants. The main process of docking is that the merchant creates a payment order through the interface, and guides the payer (buyer) to the GCCPAY payment page. After completing the payment, GCCPAY will guide the payer's browser to redirect to the merchant page,GCCPAY will also notify the merchant through the server.
PS: Please review the newest API Document in GCCPAY our official website: https://gccpay.com/documents/api-summary

## Update History

| Time     | Version | Originator    | Main changes                                                 |
| -------- | ------- | ------------- | ------------------------------------------------------------ |
| 20221023 | V1.0.0  | Xiongfei.Zhao | First edition                                                |
| 20221110 | V1.0.1  | Xiongfei.Zhao | Added [Notification Callback] module                         |
| 20221116 | V1.1.0  | Shaopeng.Li   | Add iframe docking method                                    |
| 20230302 | V1.1.1  | Xiongfei.Zhao | Add [tip], [payerInfo] and [payLink] in [Query Payment Order] method |
| 20230316 | V1.1.2  | Hengjie.Zhang | Add the 'lockPayMethod' parameter in the URL of payment link |

**Release time & Release content**

- Version V1.0.0 was released on October 23, 2022

- Version V1.0.1 was released on November 10, 2022

- Version V1.1.0 was released on November 16, 2022

- Version V1.1.1 was released on March 2, 2023

- Version V1.1.2 was released on March 16, 2023

**Post content**
- V1.0.0
  - The first draft of the payment system Open API
      
- V1.0.1
  - Added [Notification Callback] module

* V1.1.0
  - Added iframe docking method
  - Added code demo
  - Added [Merchant Information Query] method
  

* V1.1.1
  - Add [tip], [payerInfo] and [payLink] in [Query Payment Order] method
    

* V1.1.2
  - Add the 'lockPayMethod' parameter to the URL of the payment link which can control the payment method displayed on the cashier page.