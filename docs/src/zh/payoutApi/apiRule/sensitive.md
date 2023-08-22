# 敏感信息处理

为了保证通信过程中敏感信息字段（如银⾏卡号、⼿机号码等）的机密性，要求商户对**上送**的敏感信息字段使用[系统公钥](/zh/payoutApi/apiRule/certificateKey#系统公钥)进⾏加密。与之相对应，系统会对**下⾏**的敏感信息字段使用[商户公钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)进⾏加密，商户需使用[商户私钥](/zh/payoutApi/apiRule/certificateKey#商户公-私钥)解密后⽅能得到原⽂。