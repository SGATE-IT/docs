# 查询代付工单列表

**请求URL**

- `{{host}}/openApi/v1/payee/payCustomTicket/list`



**请求方式**

- GET



**请求参数**

| 参数名    | 必选 | 类型   | 默认值 | 说明                                                |
| --------- | ---- | ------ | ------ | --------------------------------------------------- |
| pageNo    | n    | number | 1      | 页码                                                |
| pageSize  | n    | number | 20     | 每页显示条数，最多支持100条                         |
| startTime | n    | number | -      | 工单创建开始时间，秒级时间戳                        |
| endTime   | n    | number | -      | 工单创建结束时间，秒级时间戳                        |
| customids | n    | array  | -      | 查询客户ID，多个ID以英文逗号分割，示例：1187, 2f131 |
| payeeuid  | n    | string | -      | 自定义支付ID                                        |
| status    | n    | number | -      | 代付工单状态（见附录）                              |



**返回示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "ticketid": "15aae",
            "customid": "12110",
            "payeeuid": "TEST123456722dcdf",
            "amount": 3020,
            "realAmount": 2838.8,
            "fee": 181.2,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12110",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "tlY28Hb7yeFVZrSA7UF70tYCbop5vkOXT82xHnokCi/+cls2mruLPfwa3H81qyDe71jOSldECxVgSObRX/IjPlN56Lm+XV5XshCSKfZrjEhY726nJ3DtMsemNu9KHb/23afGoIPEW+AOZksWe3SkXaOclok78vZDSz8DAAJPyhBvrGafTxP/XRBd1jczA6llRavuhejw1vJBDBKJCjqu1Nb0sLhHWkYYu2kQRLT3HNEuKIkF2dwGAeWUgqagJDNdzoCq+szHsd2RpE6NWHXtBRcntfuro7Mob4JQsu4+LlfVHJxif+TWIhGe81V2qRtIFZGeWy/630xJqkJwK2ZpQg==",
                "identitypic": "",
                "signpic": "K7vz1PDVehyJHLaMap11317Mi11iLJiz3UL5N8HQQfjLj6UZgi8CidefpBmViLIrq4qelZyPxNJHUL3ty+1vQLU6TGpvyN6jYbfSl70v1YNNp3eScreanwSPx67p3vjJuwtv9M6uUd75895oZqiNfOqA/pjvjd4CGC/FoXrBMeeh9sFRnmcWDp7tG9TITgoJ3d9gA9tFPDLmq1F6p5GPR458SJ3w1stT16zwfsC1ira3cKTMxwv2gH8d3CEX+uFuhTPmZBqc0ld5vp3EYpPwegFJ71iYO76NbxnwH3gJuiIvw/Ky15+9ejF2TcXKbKwxFs4FYO28v324OOV7EdwyVA==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "EHKQ2SP6hWfs7NCWnieBylA3dUPkTKh6x54NnkwmJ5Gm6VjgFqQceUAmuUXTCtJHVjLdBo3MOa5LB4oxRruhlJzwTQfgZRpM9pTwopr8j9iXX0MbsuZBoB2nHVIeXXKRzo+t0TUuERbOiBKvo4n5f+6nH6Hfv7fKf3PYuGk1CHQDaiVoqitpvRazRn8svV5WRR/9NisKsrrEGYQiwpwMOQyEuA+czwrd9VRR0NFctltazFEgzhdnsLj6Z9SDLFnMBTUSBVndRj/nHzvKaJzLMlRYm+43TJsIiQOnGAxaRwGdZuna44wmptuOJmAFy4p27ncnLiaJFQvuWQ2X1RK7HA==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686671313,
            "updated_at": 1686671313
        },
        {
            "ticketid": "15a31",
            "customid": "12093",
            "payeeuid": "TEST1234567aa12sd",
            "amount": 2002,
            "realAmount": 2002,
            "fee": 127.79,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12093",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "sV2rhuuGZLFi1Mvp3A476UlIv+yH+s2DukiAvXxz1BHfL/GkESuuEUYId1LY3JgfNJPC0cKFRTIY84vmmLUgn7NjrDg8gRNsfYGYc0cfXTUmzN6EbufbnXKHTrXC6oJ8JGtyHZPn2jDgT487JXYTON8SCzC4hbdz/zS5cHqb/hwBF9ymzeGfOWp0OgrPB9RKJBPFMDr/HFt8IMXuU9mr0BkJB1GbWQ03klOX5FUMnupdu26sxid8XTjxSclql+smd/9touGBm5UvDOWdnOx+D2AMzfJ5DAp+k6KuLNzd9E1as962LfQZk5KZR7Xr7xjL5pMJXkMLX+d3+zig4EQ7tg==",
                "identitypic": "pbbbNZxLuRYJRrADXeMka+Xk626qHoKHSXJQk5NibQVhl+i36i6Wy4XWvr+3VWRI2L7dol+NzoVKvcx1imxeoAi/dTBpozJyH2aPQmK9Bi5nAzaF2b0eUOyALSmWwOdT0ro2wYe0HZtMGN0KxT5dLCI+Xwa3y5S4yoh7blDvxwKUYAUKvOi5MQCY4N+CWOvEd2GVsbblXdP7hU7ljS+BlEJr/8Fs+meXttDcvchZ92SV5FaMFGma9XX2hDAhpWxRcHZJaMd59AAc7YsUKD3qDH8vLS40iHz5V1tsuwQNdp8rwVXU6BfLCvhfhL+WLAIlzfdwKy6+RFGAJBQuUwXO7w==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "EhXuFMN7yBtAUWXl+73F1i6V3qKO6OZGLlYcyOERS6zS/cfaC6uWT45G6R8oCdwEmFm1EHyvOXUsTtw4jUGWklkWyDJ7mJpT6nUcysqUocFjJ247/SMO5HzpSSJuKpwO1y6LHBi3cuXxDFdFOgD26hkNxHxFveRxOjvhMJsEHhxEe3eugHhRJd5BM7XeKWSl8GovrhWCoEgJdRyLbDs9u2BDpzdQtjEbpAA9mdN4weePZJ9OxmkW/seS9hCeceSccHtqnRC/ZxtvHSgqgYnfNfjJZGlwYzZQBmHVzcdrH1iJ44kGdyS43K/8ER/r4wjppO7EbG8HsMK2hF4iIbqYow==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686671313,
            "updated_at": 1686671313
        },
        {
            "ticketid": "158ba",
            "customid": "12287",
            "payeeuid": "DEFP647d83241d11",
            "amount": 100,
            "realAmount": 100,
            "fee": 6.38,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12287",
                "name_e": "dbnuo1",
                "name_a": "dbnuo2",
                "identity": "q8KlJxvRLFSZo1Qqg4ET+cZ1CZkT0/EFU26IILNLQ6h+9LbBzHji1/701h+BvULy+Zq09Zgw3qf3KbWPu3HpLkLSXmSqIjElUCPY2ld0QavZkTxuUTOXwKABn/KdlaYo4mh6NRSuZYdXimMW9O4AJJSe9lYYkvumtPl9EDJttU+hgbGMBhak4dsgUreseBn29hqxbBedwkKJZNlpA6e4obRgW4LaWfD8SNEiakEoHymxkJcCcYfzWOTEaX2cxldDv+GFRX3Ee///db2oFfAzpGCCju3GpTBg/VRDJAq4hbY6HERbjlcTHZks1WuLVnERzX7SkjSF8ZzglSuglv33Bw==",
                "identitypic": "",
                "signpic": "",
                "bankname": "Bank AlJazira",
                "bankcode": "11a3a",
                "account": "Q3UrnH2sjZ3Ql1r9gYYo8kS3MnrbylJWCxjRmGC3p0FDah4lsGtNUXPQTn4Tq9Pr+pIzZueKKfBQ6OZLcgL5qW7r4T3nlZItt3jRJ1VKzHoA9qEPouMgVbSsrAnsSmkSSeXiV84+kSozyDUFawaDKwFxdd/9gYA4mhF4zkUwQO0sSeHG5tRYw70vR/sbnDwYfvRkX1DaA7dcwdgtHnhVQfkHqhJrDHGkgRurZbvBAfEKEewgTfic+4sxmEZ69bPExzydLJy1qLGwZ97j6nBGbZSgzbqYeh1Iwmyt7rEPU1DE+NTdszqK+9JBqNQlLpXr39QKdVL+b2ewCsURicEgCA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679999468,
                "updated_at": 1681295251
            },
            "created_at": 1686639946,
            "updated_at": 1686639946
        },
        {
            "ticketid": "1583d",
            "customid": "119bd",
            "payeeuid": "DEFP6488137d90d55",
            "amount": 100,
            "realAmount": 100,
            "fee": 6.38,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "119bd",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "THJrbtzFUWxyLg6eX/+k6jJ4gu+P2Ma2hJaleJVPpCijxSerw4Pk7HdudLv67cWtrCem5jCQcR6mYc9tL/3+lU99sJha4bxTStbuq5A/0OSv/1ncLROPvippUTD1nkEB+Kdb6TMQE+N348iRydcU/9hFdaK7Rpfawl9pHwg1TvqzLN656t23D5rypoLJi2wsbmNWqHA3bdHmkkAcdY+/fxx0tXYjCGPUdYCO0Iy/r6YbGs0dUvebZSpnPO25W+am2a4KzvYfh6u6gSlGQHFkoFz3lT0c9FdyFe0cVyCkyYslzbyQ0UojKUcd/K9rXyiMH6mRmSo+Q/th20BvJwDI2w==",
                "identitypic": "kwIcOZ/Yzak3bgRGJbGGbeVj1QeS8FKoOlw2CPz6LplRChSKsi0pUw8YgbmnZT4TpUbNzXWq8TAV2vxsTHXHOrVe1AmsWdxrRNr0MO9kQy1UwAJyb1zp9cLHDlkHpANybOfg5aaBARaYml4k7HcfSPQFkzLgrfc5gkyzl4SNOH8Uvic8EIl6dFgQqCv/RzxsXhsDeEOijeEiPg4LOR1JArmYrHxQUYoXH9o4JPuOTWlatZabnd+BpyJN2/Y+gcx8xJWnfJcNxwTVbHVPOGKY7lDJrgW3dUwAfoR5tz85aKK9GOhz+O79T7aSIUXzJ41VlPl8FZk8GFTh7jLj4VMqOw==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "b1FwUINs/+ETjJPqvto5WkW5zogyU4wSKFlO2T+22VScSpK+eMlSDdlRfFEIRFd1H5fAWNrosCauQ7e2/BM+EhTp9mP04WnngmKFEBpx1XvdyJnQPBY4QnM0R2E5rD/8PCEyTmfqueRGxLPMkqxSE+U63JZTPf/n6iUsw7CjwaVeV9xH3ViXq6/ngKf8zuO6twoDWF3x9EJ8yZBH9ohrSkETCww3M0zd92DL55Xh2LfVdysqxRvi29akSSqkm/VgdH0GrxFwdqbXuNm281Z52tldcRQEWzaK1m8QRkldvXPnPqrDDA8YdC4andDWbc/ojkCegYLgiuHfYg7LvRgKyw==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1686639493,
            "updated_at": 1686639493
        },
        {
            "ticketid": "157c0",
            "customid": "12110",
            "payeeuid": "TEST1234567dcdf",
            "amount": 3000,
            "realAmount": 2820,
            "fee": 180,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12110",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "Nxef82G3xt50U1BMSO6dZ8HXDbBbkSfIO8soReeyfQOKGT89a/fFppdSgag4dyTfG5HPKlZ4ByWF91aVQhatK/lCK9POPf0Zo3IxL2R2zST+03yJ7PnLFyBt+R1gtznvSnl66iTrOvY2uDLr9pEDsyeYCFVFrnN5diqU4alkLJXo0H5Gig0rvMfN4y1MLT81NTvN3CPfjcdGbHXCVbJt5XoJ9bfPPSbHIQeL1s7j0EdGojktRMgQunLA1evbrR/W8Xco64kOFzEm1WBE8TvW9cHMWfdYLyH4DzkJa+lbvG6vHV/BqkTqw8cceqFCdn+8nWMvAXVDPFltwLWjX3mC4A==",
                "identitypic": "",
                "signpic": "flP6uPT+Yc0TgvsZjVQnrTNnrmY7/nP1ynn989K8lpC/jswunxPVYwYnad9NafDB2wKgbHlPIFbOjH4lwIE3DMgNU7CETzXgP2IQr51ecW5jjevX9KujkuzuFZEbm+Fu1GmG0wNGNxEOFVHG/0roVgp8QcaphppEJBI4dylcauFVBdtmbn/WebKqnMqwp3yeOEEOnOtLHmrRFTQjwC8xjgCBETDUKUpiuRR78PA/r1s7wohXyOBU8PzilGd6RZeSkUOnWC1KTegGrYlC4+BSOndlghI3aCXhlYvTZ2mdpjxaut7tgirXc3dFipkyNR2HX1UCOh/10vjJn2TJ7unl1Q==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "M50lIBEIPbi8tj/T4PIxi7dd+24VUtN1CBO/0Ul+AJyp8nerx0/35S9C/uUbW9m+lW7dFWQGQijpOnSvDA2Get4HI/HpmKs+RS5KPrAg8YRQWrYBe6nvRMkJiOazQ490hpHkAgJ2VSVwv5+NgthMKUMtvtF4IBOCfEC4X2ZZfI0Q4VHqZWyrGndR+8ICL9g7VYLeBISiSOnq9+f3i8HOVZ3bztybxg2zDndplgATp+BZv0cFkbRVJ85Pz1DDeS9L4t/RBJkr/knRb0hSkoz0HFfJNrJlxKuTDdUyrFPS8KOYUEUMb8rHoWHB92/AuLxdzV3l97rTLSEBRm82bl4S4g==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686638985,
            "updated_at": 1686638985
        },
        {
            "ticketid": "15743",
            "customid": "12093",
            "payeeuid": "TEST1234567aasd",
            "amount": 2000,
            "realAmount": 2000,
            "fee": 127.66,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12093",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "fiZcYR/Z5S0JGW76IAOpuYEWrIdYitKx2D8dE/n4RD5dpOZtdj4xvphR2SyPVO0qHDop2YleNNI+X6S3TDs4j6ErYRssKNrscYoYpNNp7byBTNlCdpfUEUfl4QURTAGur6Ytbtl0o5MIv+3f9+8mCZclLUiVlj2+nDTjnueNJKcE6OADzmT6Y/n1RIBOPM/LvuN/xQfCAUJuPBDZ1KRhwxLL9wNEPhSqwKIL4RKodVl+DaTDgz2IcwYiQgN30AXS3qWIUPxeRmvV8qtAGZYbvZynhXFf+qdKnsRL7Zt9Cf0tDfT8flQjgcc5zAS1JH71oQu1E+uMP+OVl4TuqBtL+A==",
                "identitypic": "ABFiLTDnFZRERrjr5D3fA9NCuVe8oH68RswffH9ss+A6sLFp9fbr0oVuO4PUOTU3+YkYulzIg1XRsqFItCVASUQPdrmca3c2Wt1iU1rL98r8VwLZIfSdaZncjcnX4ojq5DrTG5UwrSP66G0ATbZTZUxbg1BclppALwTDwQRcjPBaOgNZwQc1/5WTZPkD8Z5NPF/HV/tLiCdAt+7nIKgeyF3Aj3nl1eXu5zwZo752VYX19y41OVHljrHeJRnqBN9eeoSDYYNCLOAj71TNXoQIiowFgJD6gTivVuDguwqYvYM4lxYlgNV2ny0IyPq/SxduzNRL2RLod/dXHM9g1haOdQ==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "ms4RqOUEkBgpSco2LMWE1aqTeoUwPyeBjnovGD48n2PIzY63A/PUP7Cg/vErc4R+keQRzjGcJV9yidti5YD5Hiy7Vl5AjBNqzqxhzaRujX42XRIlNU8GctBeYiD0gWh4nS/9rEP/yEFU6SebZI26ogCqF0UtlC3tFh1+m5Z1byhjLhU48WQAMfvugLCX6Vl2+AWaKo2SVtob49Ts4iPSFLBNZ2hWAB17zXzasEV+4mixFRP4H0btuT6zZdiRkZSU/WZYFa7Taob6zPzAcTDbuO7yUXYzldJ97vHjp+ItEm806m66a8Gk0ea5MAYrJgS8nJd80VgLdh6s/27M6f5RWA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686638985,
            "updated_at": 1686638985
        },
        {
            "ticketid": "156c6",
            "customid": "12110",
            "payeeuid": "TEST1234567dcdf",
            "amount": 3000,
            "realAmount": 2850,
            "fee": 150,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12110",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "ViQdZW/TyQwbyrLmsz8MSaGsksWXgwQCpzq9beq+rmeBmfUKu83Rz3sXpWMmMvieYzYoWemur9O2FL9IBvQBmMSa3n5Y1LpCabJyeX/N+Wea8Xht8okXDuel6Xe0SbXFj1Cggd65B0RS2jmSI5Q+LF1zdW5G3ieBkveHxhU2z9FIzYWuXmNP5XSut230JrMAoAaX7r7NvL22dwwLbtyDbYn2tR2gsZEPbJQSOwJNF5+rdXMuofxRSqFRx3EDefGrbbw3kOILQAGopq+MY5mTzE+wiHws9D8dSl3wBX+ECz5Mtc/G1diUtGHx/W9BUPWoyMlXozskHjdJ1o+BC8bJcg==",
                "identitypic": "",
                "signpic": "YxXWPAceEYEC0uBWfkpFL+e5Dc6nEZsVNJ8AXUJX8auUWeguhxMhhCOsUkGrkr36mBSRbYmNh/mqR9iTrgv1UmffOEgaHYWRxygdn8PbUQlLJ44nN3gT97kTIusEX8xZMDfZnKkLd07UnvTjMN+1fgxKv+QgRDkbr0LNZ53/CzwJJxCY8J3vMy40g62vDl8opJ6FTrpi62KyuNsXDji633M6N3Fif9jDg81NO9gebnQKz6kw50tMqwdJJsXSi2CVk5gyoOaEeZpIxPjD5QVw9jNJiZOTBg4UJkQ8lDSDDvBskC5ozMZi9UA22Tr7QmmwCk5Fzqs8SXbiLi2gXagFrw==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "ag0mx3u5+bfGPpGZYoSE2fQsVZAfd6efxBKeDuLl296hO67jmFIl6j4uHLz/BU2yDaWinKZeoof70cfDtQnzQlL5zwY1RIHm+zpfYsGw2/JsLxMM69JZg8+/qGMD6ydB0sQgA+/bhSMkkWlrUEBdQLfd4BUfiLRFCG+mHBmFmxQXz6kZpwMeMHonpcXeM4nZQn483MqmTqVByK4v2bn75Xq9DvvYh1A5loEDpHeV7+bI8V4uZGAvi6l0Aoh+eSgg8qXjehWruD6QmrdIPfbPdBHBZavteeZr96oK6HOQqDOZFScpesQtH0r8b17qy2QiGFT6K0Fnk8/ktV0b4dxkSw==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686638921,
            "updated_at": 1686638921
        },
        {
            "ticketid": "15649",
            "customid": "12093",
            "payeeuid": "TEST1234567aasd",
            "amount": 2000,
            "realAmount": 2000,
            "fee": 105.26,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12093",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "lsepf4CnJ7wdpA4rTIUVA+JMEloeG7Hsh0tNmb7yb0bL4YBP7MK/SslHKir14jBYrK7QfsZDK0VE+v//97hOhM9x0DKHFp1pwAXrffQ/Gy4a2b2DM1BSw82kbXRXEd5kClU3AACL4ILltvvwGY1L74WcS/leE+TeYaZJ2h9C5NrYdtaEPiFvzum5QwjGXl9cxmJjGrElpxkfUEI4GzPZwfRez67zRZ26uxFVWHTfhTMOxX2BFpCLUZoy+K3jodDc9ytVGBhEQZqF4Vi/AZPYOSjSarfR0uPc8ph15heXUHbtk5nmCj04Z+mhvta6L5gPPXkdwQ9zABvxechm0AzELg==",
                "identitypic": "qQej13OJgjw8BRwotlz2kZjnBOdWsk9Kty88K2v34FjuEC3yYVJZfTvgRskoJGr6bbvepWagZh1KNzZqJNc/zsd//uka1mW4nQ1T3Ts+9TFfUUBwdwsQHwkAODAGYq1E5Dsb7emiWscRWo/3wej1F22O4m4E7fBftWn3/4Vb9+b8bfWmzU+ConN5x0SUFnMVdXqt30IkTUp2s9wYISO91wVCeOMpB7Cv6lXNPXI6BZARn4obz20RJ46X04OlOEVx5JTHDLRzyEhoGCxMmFYiF+laFrnM7wtgv31OtFS+jd5yfTM+D/3hbTq6PFV/IR5ERBhkgRpsdbXmcky7NfTIFQ==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "a2cV12yyIBMteZAi3u++NyxxUQkIRzUzjE5TixVilorMR2ljtcwC/+JYTYUH3mUnBiPEV240Oe6yYkgvEjnqgQgEGqy9KCcDg99sNN60c7t5CdpRjhQqJ4ZkXrGMxrtOA8DlNUr4+3uGVsu0YULOd95z01LqozjJWXjIfZLR4HFAZmHkl/UW0Fu567dDu+xX2+RIB22M/1/32xAOOQnj9dW4TTU0D45/qtSX1Xeo8M+v7eepibLQVac9RE2IvOHhFA3hjbTLR1T7XRV3q1PDy0s84uKytxinFibd9M8NJuhCXdGEAHqf1EOPTkL/xTx3X+n7qfjqgSvIgAF+lBwcHw==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1686638921,
            "updated_at": 1686638921
        },
        {
            "ticketid": "155cc",
            "customid": "11c2e",
            "payeeuid": "DEFP6486e83bda9c6",
            "amount": 100,
            "realAmount": 100,
            "fee": 5.26,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11c2e",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "ctwC3OQE5MiCtcfQ7Hl/HfCiucvUSMRic0ARaHBHUN562jHZVqjsJ0QY2LPpEf7tu2vsKt5pr37vvRRd0obup74wcwzWBXpF444cHXqt8gFeCTAEPDaWGEH6B5HSFKXoKohiO16065CMWXXZmg6wAyNGUgeKXhh+N7G7vEUcTiPgL2eJoVhC8UCbNFd4o8DvY3MGIf7qTAeBhEl/YgDpWd9crFRoDn+RKrQtEw+8Wm8aUmOC4bDiTaff811vEe/qhXHXL4p5EE1xOAI5aPq74eMVu/Ce3JmfjBWgLksWrliunY4mzNqfOnmatSYP3ujU0l3RxYnMuTtKEw/ABz39bA==",
                "identitypic": "",
                "signpic": "J/R5SKIK+n5zwY/WBbT4a2FvqsN/lmUFXrgSHbrhqgo+tpWczsKl2nuT0soL7qNi4KxOL0HlWX9YBJGzm+ZK8Jacz1MiKR6nHWrhh5EqJTo+WaGlcNULzWoRVu6OMJF9+BdTl4hYmvFKToJO/VbviGCN/k1tPlFoBcrInJN4RtSkA8+hjQgz+o263t0KpQrkalj6xfX841d4Sfg41KCWMjVsfWAoauqFxPVZ3uIx3TNv7KKUUOJrpnZDVhyp5hbWkGcwAx4d8wJebET1WsW2ZUQCyU+nMJKR8JJsszHcBUfZuihU6242VeGA05MWNto/5Wue/E7igNWaxhFzI4++2w==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "iJwpOi7Bzo4t6fTZsmxex0jDO7Wg5VEEYQojkcn9+zfk8qv2CIiVTKZTGhAxQUQSGS3xO/+aqKfvNbim9oxZaZqeTjJ/SkVrPUJxF0UMQv2LOPhYqqKp3O6z+JhDmYFNpVppRenMi+V/d7UiET47S+n9nO+UeeyNgBB5Du5ozPfSAJx1fGUOdxKY+oJIT0ZkbGSx/FAQXhxNv/cO3VwNe4AFcu/vfPkkdiIsAXdlwAuaW8hptS/UUogFcsjXYtGn2PJSCSdP/jdGLUyFNs9Klv3jwbSK0m/d+3T9sXw0/nLprbLHL2dwlCaI3Ngz8KCl+jte2V6k06Kuwo190d2mSw==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679910010,
                "updated_at": 1681194641
            },
            "created_at": 1686562883,
            "updated_at": 1686562883
        },
        {
            "ticketid": "1554f",
            "customid": "11a3a",
            "payeeuid": "DEFP6486e7c21a10e",
            "amount": 100,
            "realAmount": 100,
            "fee": 5.26,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11a3a",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "qTihp4yGvTXLrNA8vB/NQKilhBs7ap8uOr4NuriA2hsufydZ1h02d+fy1epXnU9heFmgbD1uj479pOTWYEQMHnwhIsK1otSvQPR+uHcYYQB2jh54OlZ5YBQuqF4HSnQsZIHQw0GZamxaN+NXBQYH0Auus16RP0lBolSgPvnWJvhuA+mm8ZcWWLZgix8HAKwvsvxxQBQkKI6hBs9D9ZO8/oaKff0CiPMMMSoKyp2JJp6tITR3e3ifzGYBcLF0hOpXBzLtJXwJCu0jnxnz1Nm1GfItAVjrRwPQOMPsOaAXNTIK3HZBZEjDdwvmD8HUt+LafAq8S5wY4MvLWd8xb1gKvA==",
                "identitypic": "",
                "signpic": "qyITcJVRuk4nyR8fQe/JtlfrhW/qf1rDd/SpdRAbCLdHtd4EXB1iOfV24/IuvA1k3FOyToFY8+rT9b7T5cScJ+uz9Vnd1Zpq91ZhTnLMvak/Fhd6p7SSE3oTaB8tlMi0RinEtKQSLgPrb6VyGRlaeh/JKMXXDwXn4FEvGPCUTRnXarliYMv3Xcay0r1jzJot0cer3aN6J8d+x/IosdsDkLtExy9hF6qNG9fWE2SrHHfubOr2rw3xwjTa5HicvAYHsuCIKWl1o1XReaSjNwxB990DSO7gJ3k1wH6q5OtBRi9bCuytGDNZrT6YqY5zOnpS+1XEQOgYsp0PCQ9lklNIlg==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "X0qpXsW9qAAtw4N52ehgHht0YxChIVPkBCOcMAxyTETuNTHhkoYN4nxpt55SokRYlG9pDMRPdocRLGMSoAGNl33Lg1eX38ti9dIR+OkcJxv+/cROCjAPDQEDWgE2+3kibUcHRiMxzgcsFzq8bfGYGPfwTvMSoW8mkJDqvZwVfKJmPIcKaShVltJMELSavw1oIbspN9PTcJCxkhloM+NRp+7/Crw2QFyDWapp5ZawAaWRyjC86Q4sgiGKWupX2gs2jcSHrenACkyhiAHz7Q5g+yAmZdHEVat8onTALUnqZUAJVUB2wzYPbEuB5r5O+2YWvITaLO3aX8uJk9uN2j5vfA==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1686562763,
            "updated_at": 1686562763
        },
        {
            "ticketid": "154d2",
            "customid": "119bd",
            "payeeuid": "DEFP6486e78a6d05d",
            "amount": 100,
            "realAmount": 95,
            "fee": 5,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "119bd",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "joQTJJv5X3KmWlx9Zu1pqYixUItEB9jHKTKzeSImNkmlxU/QPCIXx8iuKRoXnL9+K06JRZYEcrgN66LhYry6tsNobY7+c6fmswu6BCLhXmbtZqmcQfFdqwsNzj7XBpd5mxovWTADc+LeC7PEgYzpj+n4jRlORTuCoN9p6i+s6X84GRdRQVNdtTEZkUywQ778WdaM9OCLdCS4ot+oX0zRr2iT1v0l5BxX5OtkSwUnprCr3zuPswtBMVSiPxfNYPAY4xha8GmcS5A14w5ydfaEIijspC1JYBVxlxS9UtCBc0HXrupP9X+BBAVMyOr4OsY1H+Zt6NIHB4qNCoDllclMQg==",
                "identitypic": "BNfF816H1l4k1dcsElroRqIzkj5YU0gVlt9uJ4ZcPqprvRFFWnuPaZLQbYneUtiaCJDTjrPomnQvV+31o2HEp8GiT8Wq7fgGzdM7YXXvr8jqIfkoFAGu292ChemHPkedODYg8jPFFzcx0kT8scFYWuycjUFLUuorQPmXca5Z9HVOl0HWg7iG0BS3gagm7HJ4lZaUywy9stVX+OU4lT8P90F2oY0sfss1EKCng3SEiBPZVnwqiBJSj0WcdFE8H0JwTePREM13jk9nuQb6Ve5BZUF1n4jOWPKQ9UHDH41tRgpNE+94j9TbVbFwwOXCsDx0l3+zsmiaBWemIvn0fN4wjA==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "gFmCfCc/VrGmTuK4GQiYPQ8VzkSuZ8vTEbYDWK/idccCUp5zBNvfPAWoaEVoh1gk96e3k62MhjwDM7EU8iWTznXPbS4B4pp1CAci5+hbZpbRysa7dMAt7LlCfBAmaCxSfMe1aFUTd7miYq60zxPAsSvVcNk+nyY/cMl8M6ltsNA08DZfZ3UbZJrLqcVI/oV6aMMf/LaP9O3rnFeVojW9vG1ibUKSOn79O5LF7OMyqk+lBJbkKW5mj4Py8vtPfikX7M3oTaSBGNMwMIfZJzCe9ODMiRLD91PMC5qVR5lCOwBdYJtzVC7nKF8VlQHjYD6gjCoD43Rz5wY1auIXlFbUgA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1686562706,
            "updated_at": 1686562706
        },
        {
            "ticketid": "15455",
            "customid": "119bd",
            "payeeuid": "DEFP6486e75988f76",
            "amount": 100,
            "realAmount": 95,
            "fee": 5,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "119bd",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "loiVwKXPK4Pe1efhu/FP6UlH9Koatm8yeRMhv9aOuW11tPZeMmTwLIsTtqkWMadjEUBIaESJAcdPebOq0+EzxEXwxHjPGEJyzFHhH4euyWGSdlEDkl5mrckGjvitjrwjJctt996jgUyzGyAV9YNbRdEYzAb16T2J18V7hF/G4QkXh9xDsy/5QZQ3MTHV0eb4WOyyvonxcNZMdWmklLAYfAq2jHGJlLBzkYebzbjKLD5ZYel85L2A882EEBejhgDd10XTRmjXOrMS0GCkeN7cldFbN9ZV7qeGcyp41M+HF6gSZcYE9PMB7LG86GaeVfCKf5/2VsB/xoqQuFJEz9W0fA==",
                "identitypic": "TFDu8g/wsV+zlFkkehjAEb7oeAOIqQTXhrfW4K46b9B6M4RP4eP5ByoRJbKc+MC/4ZVnNfIeWZzJWoXxaf5gpZclwP+/5OBU+C8DzHrrmVagQW+SLRP/sCrkQ6Hz7vvY13FBJL9fwubCLkPRKclNLyqrKjRUIrBz1e2/RwQOCMgpx+YTpSFAVi2AlZJwD8rSGtCyNVXcK/VMAQ+5egKDYZ2nO757O//kx+CjHJkA90pGkr0Hb6UHPHEidXs2DuvJTS20lBt8UIPInZ5+9YwjXi7hxfI74sy1TnL72oLKtbA9ogsIR8rBr2KyYUQ0niQuidm46R4vQx5ftBnb0LVynQ==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "TdVWInpapLrLGGq33DuqzgTlD+Gi42TPHqUR1ruRClXE/IJdGoeodZCFVxwRYJEAgqozqrrb8+OLlgtciQ63cJRZL/hxRFpzH4GPUBhAgHvob4TBUl70pMBFgEr84zObZ/yVqYymwunOYo825DP4psZ7nxvU842Z3YOfrrIUGsrroanXHNZFX3V/0BrtZuRFSZW4gMWJ6qETfU5bljHNIIeaPiWE74wbO9FaWLyM49wtDUpqVnX+/QjRiQ6uJCIzZAGl3w5r+WEoOYfweisdJHvSicu2fgA548pO+2WniKdEU18zpOPDiHrUIGk3UXf2QLqnwRQpyQho/ef7A1fxkg==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1686562657,
            "updated_at": 1686562657
        },
        {
            "ticketid": "151e4",
            "customid": "119bd",
            "payeeuid": "DEFP647d8db24d890",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "119bd",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "EvB3rcRWeL4ju1XTxqFHTAgZXjOkTuCrOGvry715I0zy24NYLkp2UVrBQO8RVFYLqI7FZdx/Ttp9Bs1po+VqlFhQj1SoIihLeUjYXiTC7BtNF4hkJ6RE3bpqXrygc8qSYwHgY5lf5w8nvPt8GO/2egUv/VLoGVCvhDPyMV0kaZF0TGU9xoJ8PCREnpl3Fgs4zVJrIV/3Wi7FM+IMsCaVymf/swlAHDndGH+LFUPAJUrntB98N2zluhxHuM3ViEPWf3OJ8ITh90oxzKdfGQrIrs7joO7lvD2QFFdKLclCDrNJXdim/nKgDp/mYr5DOp8GaqEv/+FN2To5mH7Ki4DHYQ==",
                "identitypic": "R+uAgljkpxsC5MchXLyGocRo7XsYEmz9krfhPVx2hFDVSNSJ6cl1WSZNz36Ln6tLxEKzBWDd6tlWfbbWndwpVnVx/65DIGPi3MeojQGP2LFV36ya9v9OGGtlqkrrgFYA8sHgAs+evwvKcsvbTef+Dc9zgXAIQLRT4aImdkgnL+cbEqc7rD9koR1E8UCWm0+Zw7GzVlTr9c8TO5rdOnzBE4yXFLWQRtwV9MbKZVbLRgLU48iuNdovKiOx+3vU9w9AHJWIIDXg5GS4z/TOBLX4I4exlJTtjX5I+RGZuhoY6AixDcetRt9WuXJRFIawIC8iDUSbZADKEO3nOUyvRjkm1w==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "HR6XfQv+v/nnKauG1diq4Dc8zzpvleACH7f10JT+IsatoEEage5/3OnVcX8keQUEuXQJMRbBp9UpiwhRLNgdBG7solDma0jTBiwxiTNIA7Cq/c7yHKEPrBQLw6kXgxte4d4KPgSPVgxhJTUjJPirbvDk7bFUK5kGrn/A0mmLRw/vr1lNsnuK9JeOLj56SV+CzllgN+oX02s/wSia8NuCT7sV1MqfXG97aHhKF9Kts9pgddDtz17AZjEhU1OaCcww+tfGy/SNgg68byjj4Z+jTKun2ZD3mh5ezcxGAyskBPsbjJnha3cXXLhpCFL0H2uS0iT2FRk59OxNhnwR/gCVwA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1685950409,
            "updated_at": 1685950409
        },
        {
            "ticketid": "15167",
            "customid": "11a3a",
            "payeeuid": "DEFP647d8db24d10d",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11a3a",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "B6J877E48UDTPOXOaeF8hcFBAEE2JDlhMGkKUDJHDAA16edFlROb9uoqDxxg07gd2fkizgPx8AuXCAApWsrxOJ1UgZ8njI8W3CqFwaUZQQWH2X0flkH29lchLC5slE0yD/wsTU/JlDo5UxjSDwxhYujq1Fj0digbGn8ioXnC4lvh3nY96dxhaG6A2Y147+L+G9rArK3h7wLYVUIIHYImENxeNIjeyMPchfPBMfd591Rm28KRe3mfcRyWaxf6TVkPp7Va2MXJ7dfYUs49UHYRjtZ9Ou5vsHtWc2jzC7Qm/Te1CO0kSkZXAjKiu44vn/uZVtkhu33YPgUjDm+NAosRVw==",
                "identitypic": "",
                "signpic": "HsKImXT3I1GPK8sRxO4Im3xRtBF3oWjJG+9hoSji0Q/dlYsdD3XVb9tSqEpKeYu6p/zlP2TdbMJlQrmKz4huEaSfonKFwJU8sD19rVNyOo8Kap3z3SxZMVihHMK6BmkjpQH2z5UinHgC4Ssklvd92uObpLlKCkw4VQM58r/fJFSkI0oiUjFlxmbI7fHqJxoN2Ga+dxcGTIwUXlSyFeH/Hmq6VBQu7IA7MpVE6B674+va9HeAI8tFkuWdIonHj+w8HGJsj00xTEZkg7cjGgc4NxXXTEA2IOD9Zpf8nllskCImCusilNvJZ5Hc0+xgirn7whrSw3FLGf/jhlgHUTSXcw==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "FYl8GBWUA6qXtvKZ2dBWAZT5SIDV8PyrTU4eLhpVjvvx/FXFOY4PIKAAUOG4SaKneifsPsRDf4GwCc9l9XpkK/AlyO/mMP5ckwE0eEhTsnVJK/n408FDuwDR/k97dd1W3AOY49ah2xJo06C06AGpS4Mwo0HCMVZpq687Aeou3Wz9vym9zQo/ElAi/e5VYQn/d0GVkQZF5nNiC/UEGEOUgyTSzzE6nw69m25zuw7z62TtDfCmVDVZdZi3OlCTCqkaUXAqwqPz+8KS1psCUS2dYE700x5zSQS3hd040P6UixA0jATGKf51Ks51Eqn/pVdQ0JhwS1/JnSY/DrA0X8Pssw==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679908877,
                "updated_at": 1681194641
            },
            "created_at": 1685950409,
            "updated_at": 1685950409
        },
        {
            "ticketid": "150ea",
            "customid": "11b34",
            "payeeuid": "DEFP647d8db24c27e",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11b34",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "ApGIZAAE4TyDcYmdTG6HH2cKNFABRInjlz2vBXWkGKVQ/Cs9nfYDuGZUrulrWlhVDHOMmUaMIe676h1tYSTqKEmv3AmG6fPA07cXxo7N1pEcHt05QLc0FjcdaNpGD1LXlOV0hsxWJD78p4rg6EE8sWjYuGX/huJKGczdfeGMzLHJN6DEOc1r3ZItpG4MBO3sZuqD+iBNbLq7Y2LJN1HW7Ywytxu3QGFrF58gRHXjVM2XiOh7eKxPwfgWOcRMt2BXY0u/hSUdUkfsYs3DEc3/70Jp23I8J4xRHEl/rWN4ro21Yu03kD3y8R+s5hdLCTe7H4whTrsiTdOhz5wRM806vQ==",
                "identitypic": "",
                "signpic": "rHbqPAUM5LPPQPRpkHI5jCeeUf1UMQHeYIRziX76pCNanKw51tAn6XGKhA550ABY8Tg5kAlU26OUxGn1Czej1i1LTNuH4XJfcx9IzbFvo9wzdpJ5i9T4ZhwIzmdj6gGRCcMlKKFmKeamQ0QhGtF3OzFmggBRRtglM5ACnibv7UlgXnl8RcYGNN0F+jC0mlsMRP6gV7Nu5YoCxtgadXuYfWUhuqqvjVvem8brc66xj4Dt5Pz5wOTpDfqv1l8iP9EIyabO30Nm3uVJC3nExfPD1Gx6CsGhLn8pAYGDRZq/nDubA1kh982aYDM+zCrnj5MQ4qvsf6qE5bPeqWgJwYzTTA==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "FUNrsKizy7wgKdtIGMp5/Yc5xQYfTqz08JPZH7EhRukSFs9cSZiow9nlL4mnRmMlzGeqFiZApXddCJ3MLVUKTVccSPhil40yj9Ea3tmfdsaH/Uzz2No7QoZ3ZfZVKtMQ2Ziw6OhJbbiG7iWCpEHOA73jH9zRyN95ZnmC7Cu5K/VyB11UvReWlWdmRffqvAtxkdZBNY2DIdIutDXDzvFI9BRGhebMJDdWqn3DyyizfWuryXp9dklNzMKML41uLGUBhvB3zB6+mbVPyLL9I75bUXSWOsHRVbBKubok7J7ToV+76u0NjWTOs3nOOKvosgWVIqwIV/9y1GeWJpcF+Ek6aw==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679909800,
                "updated_at": 1681194641
            },
            "created_at": 1685950409,
            "updated_at": 1685950409
        },
        {
            "ticketid": "14ff0",
            "customid": "11da5",
            "payeeuid": "DEFP647d8db249c75",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11da5",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "CexZ0qgD2LTlxw2H2/faqCfWEd4Zi/exPl95V3+zzgjOSMvfC3haGXSiDBd441n3FBQpMUS4oRuDk0fJ8tLFGnDL9u9BW3yX36qwoIyM2aqr7brPIRveVfrTgRN8I5VLrzjDqg4fmnPJU6+vjY84BFTTaSQPrvzQykwUljVfGXF1k0ETReX4CnN+2M1F0hrM5Mda6F75SCiWBz2NwTstDZxEKEoil0gpAwP161gKlHtWydR4XlZp7JPQte+ycsljPVnzRz+qIJw4pU+r7W/3CNNbBQfMwEGBBiwd1yXZJrYhart8wQS6a/BtO08O/hFNKv8FbfTyV20RVt5p28cpig==",
                "identitypic": "nJsomWW9+EAcRHRm9mvSPeBSzPd662K2xREpPccZRqbBvRvjhANKZqFgaV5DOqLitXh5m+pcK369rB5O+p0YPA7wjgQDM5fc6T2eXug3O7M0y2jZlC+eUU8SD3EX3s8soJHflyKcDLIFWcA+8twIo1yS5r7cpRLRSef0JJW0SxcaVU2zRYyZ3fwW93i8PNGyqyiMMLfn3y9BVMFz1kIUFEr2/d5663p+3Usz7bINDqEy5KjeqbfAmYpqV1SGwJiReupqK76fjw3CAsaQHd/qq2vMxuHh8izzC2F1sBC5XtWpcNh93C1Tqj3h7miBo3qXiPjFK8jhKjyl3Qb5EddZVw==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "oQ5+IhFUgMSOSbkHaqY6eyH8IluN1gCz74W571t7MFBewiwgWLGxe7Q33++rldV0mDKqpZTMGNsQRFU/Cmu20xXDpg+9A8ewQZEkTZ/TuD4fC3TbAJ4jOqEmbvgmdixKu6VY112NEBxVBf5Dy2BEpBN2HERZDNLsgOlmH0OZBTiksF3wgr0jqviF7y0JmM3YrE6CjQZCwrPRhZ8O8N1n4AiQoHSw96t5d9Xej+EkvnPdMGm+7I3jVcZ4IG4WGSwxmAoUQKbrsncbSRlp3X+BgeQzPaBaSY9WaAQ6gukZw8NjhUjdY7dOaYz2KKNV73YWhFd2YaBDdnbgS7Hbm5iOVA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679989715,
                "updated_at": 1681194641
            },
            "created_at": 1685950409,
            "updated_at": 1685950409
        },
        {
            "ticketid": "14f73",
            "customid": "11e22",
            "payeeuid": "DEFP647d8db249442",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11e22",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "WJkqbIyorcJbBK6Ecswdgg5RCHtOq0Uba3qwxBwtRjLuzrMdAFEtqZV+bCY9qhbdYHV5Z8bvX1PQxpSjpkHpnpWKZYVrRebB1RJ4HFQNn6wj03lQWPtRFWAbuDJxhBQUmqzvkI4AdBVE7WFZPNpTEKfgYe5vzF7yIwHMLN/cwjB95nwHSkmIk6Yfnml9x9kIWc4uUbSuDea0GgryjfK0gxffDoZaQgmgHE+fBcnkhIqhotIvKjbntOockOuev97I/Qpw/Nxxxy6V/vdiYqz2uLSwB/8cqBfKOgUbG/KGSKF35BlNy4/UlefI/um8Cv0huehZO/oFvpC2gi31wZEEHQ==",
                "identitypic": "",
                "signpic": "RsZ9uTLmTZbIiQSwAfg4GEU8aZNIZCL06I/BFWBGadtsFW+6Itif/OoVtTXJhA964V4KIM4yb6lOPe/TF4+lQAMVx7yNSkuajfhHnSUY0FAhJsDbsTjhdfOzER4/ffuIT1jtApC2IiAPSQnK0BlHvH8xiJswzAachCzqrDwIgKjWuG4dDrFtYOkIll7ddfpB+ut4IMLmidg/baf4WbE0OV9/Ym/3rd2GqtxeqDQ3cP+6KAjtF91OBTOoeCO2hdial3by6Zue4lHBclWAVq4wapIZcPdBecjl8XKMem2WOWGvvo6N5nTM1M1NFWGEf5/UVwxvmqp06vjduV3lJG4gGw==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "bcKynRRpO+Jzu3tkYX5YOTnCO0rQyz4lP8Axoq53o6cZ9NKmwPT97zDWZWtvDOr9RmHGoRKhArHsXhSx49QVz6PyuNt3zCJgKOB1FRtBsDPrCd5asfzAT+mjg+6AJYAsOnsZDf8j6CGF7krdyuiFHAgMGbfkS7IN9pVPTAE/Y8joRe6zJ2bsFee2Jf2GPyNkLikDBvE9Ja1e+g50UShYk9+zqkKMcFCN7KafgAIHWAQt/rromWlPyaqaMjQ5lplVHFwQanYhbJUi8A9vY0uhQGkT4CRtSrVcnGnMuxR4EiBdVBJ2IlM/d8QTh+cgqvZcnOTyhgTnyh2vIv3gqZwwxQ==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679989715,
                "updated_at": 1681194641
            },
            "created_at": 1685950409,
            "updated_at": 1685950409
        },
        {
            "ticketid": "14ef6",
            "customid": "11f1c",
            "payeeuid": "DEFP647d8db248212",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11f1c",
                "name_e": "dbnuo2",
                "name_a": "dbnuo2",
                "identity": "Gs1+zdmXwnRls7N5X9i4dVtlxKW+65FLqKinQV1twBq+lbuZcJPfg/isDx6Ai/O00qJmt0Hv7PeycFkIqqn7E/y6dihTz5YuMG6/15uwG1Uz/LS7qmPQE3Pc0tlT/a7htWxbIA3ozaFC6BJjptmViuRYK5SwaAT0tVcby/4IzghIdU09vHUoxv+QMUamhpXAElQeIDb6LZ1/jXvLeDQHhYbDMakZZ3aJkfDeImGQS3PtdyeY58dgWTk6j2JRDoOzk3VFAMUcxBJFsH//8HWEhKgXxoL6AIwYSHqvGMkOJG6p07bIb2h+QbijWVl+3DVVCdqc0FGc4733nT0345hEfQ==",
                "identitypic": "",
                "signpic": "ILExO2iVNS8vGqzpFfI9t2BfjFPFAsS28Rx0hz7VuZ4dpGQUFEpO6PtQ9YsdF5QSnotoSFstqhqof23sBC7MUoLrwteVB/gc9Vou/WJ5rQXffvzD8JcRgH1dTanOqyaOX9Eh1brO1wc+O/SE8EcupnfEsj/yTWNbTrvnLi5jLTYsCILUYGvMhy6jdle6nChbY9XjTDd+bLwvBLoLOJ+pE8a3eXbZSKbbL7YBsrDfVuBJg2cy03fzfxxkxL1BNJNvVCcACDULlWf2zLMS7yPeIhFiTT5BwGcSGpCNjzdBUojFlYzuiMinfgLwIWMRMuTAZIX83HHBtRx5/Em1RsghLg==",
                "bankname": "The Saudi British Bank",
                "bankcode": "11558",
                "account": "IPXNp3UwnDKUvYTUHGWQXMYadOL92QbyJtRikchQm5NW4ZWrMnbBdYE++wHzH3uL9HANYiEOmTQiHADpNBBimXwQ/M6WLCm7iu0Ayscy3xqadluLYkrwuoIXgPw1KdSoR22DYGHj/yji4kLcAVEfQOSw5maXC9pu7cy7ZoUS6Kt3OYjoUUQ7zD27w2eFrCRgnw8kJQtFRUdfzuaiJBd06oqiV0ZVLR3tbTrrjYIAlnfB1SLvhwrBBtVPoX9npRmNyhmJXIVN+H+DmhFLHpYAe4/nXThjZHi9WSJ1oxha8ILiKds2gIuS/1yqPykWz05b3pryKZzqs9ub3nzRSY6IdA==",
                "ibanaccount": "SCsdaf23412349",
                "status": 1,
                "created_at": 1679990000,
                "updated_at": 1681194641
            },
            "created_at": 1685950408,
            "updated_at": 1685950408
        },
        {
            "ticketid": "14e79",
            "customid": "11f99",
            "payeeuid": "DEFP647d8db247875",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "11f99",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "TT66FvuAAZj/j+eXOL/oex9gt+KDJ36DATkPtB8ZxEqdFlRg/JMncK6lR3rLkyFcjoprC8bogmJluBphW7ccog+KcIhcacjrfZlXpXtFBpJhMaND+RBa21pp+jYfbABtFcXaY8CjMg7ngCDu9Mmeyw6GnP13ZC3rYvIoq5YeTF7zSwCU1H0+s/yERtH+Y/LCCVSPWYs6/VsIEXUeO9YKQd4tzp1e3tl+ySIwt9am36MPKhndM+Ns2NS6O/MdWoWUZjTrUp0pxQW3qHHiGGuDHB/da8WWQNDDSqPidgIoAI6As7EPVFrzL6P0Ew8n5UVeW0rrvQSRi49L86YgW+1bGw==",
                "identitypic": "Ur8qEdIVE9oUG6+JqwVS35t/zQPFSuytzdotVBomzxQ70iYGGPY/Sfhyl1VmMdwWhGvow7HxIgXx6Johb/Z5CjNNsGZ6CtD6zH3gwn86Uv9oR2s8g59eSslQlG5+MMh6wnwsAE/snBcXJVbzizQbM89vXrxnKTU4IChUJH2V4owjpfhgm/lpUGy37Zv36JFjQfVN7FN1i2WnRbGFfeM+BE8Hev8uN7kf/eNBhkDo2puldYpycgWlws7Tqc//3Tn3neu9LDQHKynYRx+pKCYqz6LK0IgcNQD9titfxFUq+eDKkkfgRHUO3sI1kxt9g+ehLdMB0sEE4S6jwicooGRQDQ==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "X7hcGyJisaxWEsgM/8BgV6ceIxOpJ+HvS39mcjpLD8aLx1D7V5Iqa60zfnCMW3R9+1KnZoFnmYDqw+cjWJlUPTmFFfYMXwxX1t/ug6dHJi59UsbShQZbu4jpN9DzwFuNk2m2KQ4feRqfh0GhAw9W7niEc2u+apVhBJ268UzPVYPcyyLe8DxnllYypfcOgalF3ifm3VZNPFTpl/E2faz/65AtkhTBY5VgwdqQvmioWEVLLhgFAl0UdQh5TbOX/S3bGHN/0QCAT21chmc5lSBINaStlX7qticS2KgO5GkVW5xO7FfksJJb2btzKKDnhoamO5BJ+aOQeGqxu9pxIJYBtA==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679991439,
                "updated_at": 1681194641
            },
            "created_at": 1685950408,
            "updated_at": 1685950408
        },
        {
            "ticketid": "14d7f",
            "customid": "12093",
            "payeeuid": "DEFP647d8db2469f2",
            "amount": 122,
            "realAmount": 115.58,
            "fee": 6.42,
            "status": 0,
            "confirmtime": 0,
            "custominfo": {
                "customid": "12093",
                "name_e": "dbnuo1",
                "name_a": "dbnuo1",
                "identity": "Er+czMZPXFBrICVbUUkTy+GZhhQnC0GIwnV6G5kAujTCK5o25KZM+B01B15pFJnyxMx8j6wSHoVL/41DqepBIphBkjeqot9zaq1Uh+AuCq1tuhKEWU0Ske2lVOG4VOpNRqk9pslXLSUqC1sFQ82jF5Hvp6YkQsprUa+452aAfpiM0WkJkqzDZQ0NUQY66xF9SEhbwIK8nJmKjSw32UyKV8830bRb4+xHOL/HeBYZFSYEW9/tzkY1NRdcAgMO+iUH3awySISBEPMUX+r3qR/Lhs4jpVMc6kekTixn4gqc0wSrmNgeRGnpKu+qA3+tuIa2pJmjgEV29OtIfiSU80z23Q==",
                "identitypic": "deAOJQ0K94he80zLvMMDIONcsIZp0GDE84Z2+1xQScN3114ULChYjNcKCDEPZLrZiUw9Kcz/SdsRH+QuyDaKvmyh/T0uP3SjYij/mzl51xdSjs1NtY4O6WSsmsTGbqT/qyffLz4NYMvKLimnvpL+7lV1rJ+VUVRS1VvUKmbiSozbKsIn3NVcSgBxjd7b6HxSHvSS+VojW5nQKWQi7ODR4/aWCG1jyL4LdhR+HuQa4Upt9kFTn8MCYfv1xwE4ujWV8llZSh+/DzryIcOpsNyvqyaBKPB3KYWdIcAOilRDdy+Mv6zF2lbiF50utLAhmyyW9Pc3MFDIKKX6YSHxcl4r0A==",
                "signpic": "",
                "bankname": "The National Commercial Bank",
                "bankcode": "114db",
                "account": "ifVulcAZQEFTiOJxgdgLUZJJj6/1FLtyhq+VyvljufHYS0VZwRhHyg1TzUJlmPm57NA+y5w+msC1rbPf+wKQ5PIkG3dPXuKgzjOCwhODNExreMKnHdYt111ERtocPv0sw5/KliuDoSK2wTUuKDk9GWCvMlKlK2+rzaBfLpeiutDT5K/OXJy/HHKv4LGBk5BmndrVzAahiK85KgXfONShuPfFPpSomfz49wotla6cA9reYfkNuQe4X+xX5hXWP5uxQEeDBKqMuGAqbCBELloNhWU1T+Tv2YXFFNkSXqIs5T909RyW6bqoIj83T1yLz0D9HSJi/IayXYnquCEo5w+w3Q==",
                "ibanaccount": "SCBJ2349897123879",
                "status": 1,
                "created_at": 1679998309,
                "updated_at": 1681194641
            },
            "created_at": 1685950408,
            "updated_at": 1685950408
        }
    ],
    "sensitiveFields": {
        "custominfo": [
            "identity",
            "identitypic",
            "signpic",
            "account"
        ]
    },
    "requestId": "55ADA20DFF3DEAADBFF50A17708C8696"
}
```



**返回参数说明**

| 参数名      | 类型         | 说明                       |
| ----------- | ------------ | -------------------------- |
| ticketid    | string       | 代付工单ID                 |
| customid    | string       | 客户ID                     |
| payeeuid    | string       | 自定义支付ID               |
| amount      | double(16,2) | 薪水                       |
| realAmount  | double(16,2) | 实际发放薪水               |
| fee         | double(16,2) | 手续费                     |
| status      | number       | 代付工单状态（见附录）     |
| confirmtime | number       | 确认时间                   |
| custominfo  | object       | 代付工单创建时客户数据快照，数据结构同客户数据 |
| created_at  | number       | 创建时间                   |
| updated_at  | number       | 更新时间                   |

