# 查询银行列表

## 功能简述

- 查询支持的银行列表

## 查询银行列表 API

### 请求 URL

- `/payee/banks`

### 请求方式

- GET

### 请求参数

请求参数如下：

- **Header**

  - [_查看请求/响应头_](/zh/payoutApi/apiRule/header)

- **Request Body**

| **参数** | **必填** | **类型** | **默认值** | **描述**                                                                                        |
| -------- | -------- | -------- | ---------- | ----------------------------------------------------------------------------------------------- |
| country  | 否       | string   | SAU        | 银行所属国家：<br> `ALL`: 全部银行 <br> `SAU`: 沙特阿拉伯 <br> `KWT`: 科威特 <br> `ARE`: 阿联酋 |


### 响应参数

响应参数如下：

- **Response Body**

| **参数名** | **类型** | **描述**       |
| ---------- | -------- | -------------- |
| country    | string   | 银行所属国家： |
| bankcode   | string   | 银行 CODE      |
| bankname   | string   | 银行名称       |

**响应参数示例**

```json
{
    "code": 200,
    "message": "Request succeeded.",
    "data": [
        {
            "country": "SAU",
            "bankcode": "114db",
            "bankname": "Saudi National Bank(SNB)"
        },
        {
            "country": "SAU",
            "bankcode": "11558",
            "bankname": "The Saudi British Bank"
        },
        {
            "country": "SAU",
            "bankcode": "115d5",
            "bankname": "Saudi Investment Bank"
        },
        {
            "country": "SAU",
            "bankcode": "11652",
            "bankname": "Alinma Bank"
        },
        {
            "country": "SAU",
            "bankcode": "116cf",
            "bankname": "Banque Saudi Fransi"
        },
        {
            "country": "SAU",
            "bankcode": "1174c",
            "bankname": "Riyad Bank"
        },
        {
            "country": "SAU",
            "bankcode": "11846",
            "bankname": "Saudi Awwal Bank(SAB)"
        },
        {
            "country": "SAU",
            "bankcode": "118c3",
            "bankname": "Al Rajhi Bank"
        },
        {
            "country": "SAU",
            "bankcode": "11940",
            "bankname": "Arab National Bank"
        },
        {
            "country": "SAU",
            "bankcode": "119bd",
            "bankname": "Bank AlBilad"
        },
        {
            "country": "SAU",
            "bankcode": "11a3a",
            "bankname": "Bank AlJazira"
        },
        {
            "country": "SAU",
            "bankcode": "11ab7",
            "bankname": "Gulf International Bank Saudi Aribia (GIB-SA)"
        },
        {
            "country": "KWT",
            "bankcode": "2fda0",
            "bankname": "KW banks"
        },
        {
            "country": "KWT",
            "bankcode": "2fe1d",
            "bankname": "Ahli United"
        },
        {
            "country": "KWT",
            "bankcode": "2fe9a",
            "bankname": "Al Ahli Bank of Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "2ff17",
            "bankname": "Bank of Bahrain and Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "2ff94",
            "bankname": "BNP Paribas"
        },
        {
            "country": "KWT",
            "bankcode": "30011",
            "bankname": "Boubyan Bank"
        },
        {
            "country": "KWT",
            "bankcode": "3008e",
            "bankname": "Burgan Bank of Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "3010b",
            "bankname": "Central Bank of Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "30188",
            "bankname": "CitiBank Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "30205",
            "bankname": "Commercial Bank of Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "30282",
            "bankname": "DOHA BANK"
        },
        {
            "country": "KWT",
            "bankcode": "302ff",
            "bankname": "First Abu Dhabi Bank"
        },
        {
            "country": "KWT",
            "bankcode": "3037c",
            "bankname": "Gulf Bank"
        },
        {
            "country": "KWT",
            "bankcode": "303f9",
            "bankname": "HSBC"
        },
        {
            "country": "KWT",
            "bankcode": "30476",
            "bankname": "Industrial and Commercial Bank of China Limited - Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "304f3",
            "bankname": "Industrial Bank of Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "30570",
            "bankname": "Kuwait Finance House"
        },
        {
            "country": "KWT",
            "bankcode": "305ed",
            "bankname": "Kuwait International Bank"
        },
        {
            "country": "KWT",
            "bankcode": "3066a",
            "bankname": "Mashreq Bank"
        },
        {
            "country": "KWT",
            "bankcode": "306e7",
            "bankname": "Masqat Bank"
        },
        {
            "country": "KWT",
            "bankcode": "30764",
            "bankname": "Masraf Al-Rajhi"
        },
        {
            "country": "KWT",
            "bankcode": "307e1",
            "bankname": "National Bank of Kuwait S.A.K"
        },
        {
            "country": "KWT",
            "bankcode": "3085e",
            "bankname": "QATAR NATIONAL BANK KUWAIT"
        },
        {
            "country": "KWT",
            "bankcode": "308db",
            "bankname": "SCB-Saving and Credit Bank"
        },
        {
            "country": "KWT",
            "bankcode": "30958",
            "bankname": "Union National Bank - Kuwait"
        },
        {
            "country": "KWT",
            "bankcode": "309d5",
            "bankname": "Warba Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4e5e8",
            "bankname": "ABU DHABI COMMERCIAL BANK"
        },
        {
            "country": "ARE",
            "bankcode": "4e665",
            "bankname": "ABU DHABI ISLAMIC BANK"
        },
        {
            "country": "ARE",
            "bankcode": "4e6e2",
            "bankname": "ADX- Dividends Disbursement"
        },
        {
            "country": "ARE",
            "bankcode": "4e75f",
            "bankname": "AGRICULTURAL BANK OF CHINADUBAI BRAN CH"
        },
        {
            "country": "ARE",
            "bankcode": "4e7dc",
            "bankname": "AJMAN BANK PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "4e859",
            "bankname": "AL AHLI BANK OF KUWAIT K S C P DUBAI BRA NCH"
        },
        {
            "country": "ARE",
            "bankcode": "4e8d6",
            "bankname": "AL FARDAN EXCHANGE LLC"
        },
        {
            "country": "ARE",
            "bankcode": "4e953",
            "bankname": "AL HILAL BANK PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "4e9d0",
            "bankname": "AL KHALIJI FRANCE S A"
        },
        {
            "country": "ARE",
            "bankcode": "4ea4d",
            "bankname": "ARAB AFRICAN INTERNATIONAL BANK"
        },
        {
            "country": "ARE",
            "bankcode": "4eaca",
            "bankname": "ARAB BANK FOR INVESTMENT AND FOREIGN TRADE"
        },
        {
            "country": "ARE",
            "bankcode": "4eb47",
            "bankname": "ARAB BANK PLC"
        },
        {
            "country": "ARE",
            "bankcode": "4ebc4",
            "bankname": "Aafaq Islamic Finance PSC"
        },
        {
            "country": "ARE",
            "bankcode": "4ec41",
            "bankname": "Agricultural Bank of China"
        },
        {
            "country": "ARE",
            "bankcode": "4ecbe",
            "bankname": "Ajman Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4ed3b",
            "bankname": "Al Ahli Bank Of Kuwait K S C"
        },
        {
            "country": "ARE",
            "bankcode": "4edb8",
            "bankname": "Al Ain Finance PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "4ee35",
            "bankname": "Al Fardan Exchange"
        },
        {
            "country": "ARE",
            "bankcode": "4eeb2",
            "bankname": "Al Hilal Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4ef2f",
            "bankname": "Al Maryah Community Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4efac",
            "bankname": "Al Masraf"
        },
        {
            "country": "ARE",
            "bankcode": "4f029",
            "bankname": "Amex"
        },
        {
            "country": "ARE",
            "bankcode": "4f0a6",
            "bankname": "Arab Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4f123",
            "bankname": "BANK ALFALAH LIMITED DUBAI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "4f1a0",
            "bankname": "BANK OF BARODA"
        },
        {
            "country": "ARE",
            "bankcode": "4f21d",
            "bankname": "BANK OF CHINA ABU DHABI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "4f29a",
            "bankname": "BANK OF SHARJAH THE"
        },
        {
            "country": "ARE",
            "bankcode": "4f317",
            "bankname": "BANQUE BANORIENT FRANCE"
        },
        {
            "country": "ARE",
            "bankcode": "4f394",
            "bankname": "BANQUE MISR"
        },
        {
            "country": "ARE",
            "bankcode": "4f411",
            "bankname": "BARCLAYS BANK PLC"
        },
        {
            "country": "ARE",
            "bankcode": "4f48e",
            "bankname": "BNP PARIBAS ABU DHABI"
        },
        {
            "country": "ARE",
            "bankcode": "4f50b",
            "bankname": "BNP Paribas"
        },
        {
            "country": "ARE",
            "bankcode": "4f588",
            "bankname": "BOK INTERNATIONAL"
        },
        {
            "country": "ARE",
            "bankcode": "4f605",
            "bankname": "BOK International Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4f682",
            "bankname": "Bank Alfalah Limited"
        },
        {
            "country": "ARE",
            "bankcode": "4f6ff",
            "bankname": "Bank Melli Iran"
        },
        {
            "country": "ARE",
            "bankcode": "4f77c",
            "bankname": "Bank Of China"
        },
        {
            "country": "ARE",
            "bankcode": "4f7f9",
            "bankname": "Bank Saderat Iran"
        },
        {
            "country": "ARE",
            "bankcode": "4f876",
            "bankname": "Bank of Sharjah"
        },
        {
            "country": "ARE",
            "bankcode": "4f8f3",
            "bankname": "Barclays Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4f970",
            "bankname": "Blom Bank France"
        },
        {
            "country": "ARE",
            "bankcode": "4f9ed",
            "bankname": "CBUAE - IA Charges"
        },
        {
            "country": "ARE",
            "bankcode": "4fa6a",
            "bankname": "CENTRAL BANK OF THE U A E"
        },
        {
            "country": "ARE",
            "bankcode": "4fae7",
            "bankname": "CITIBANK N A"
        },
        {
            "country": "ARE",
            "bankcode": "4fb64",
            "bankname": "COMMERCIAL BANK INTERNATIONAL"
        },
        {
            "country": "ARE",
            "bankcode": "4fbe1",
            "bankname": "COMMERCIAL BANK OF DUBAI"
        },
        {
            "country": "ARE",
            "bankcode": "4fc5e",
            "bankname": "CREDIT AGRICOLE CIB DUBAI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "4fcdb",
            "bankname": "Central Bank of UAE"
        },
        {
            "country": "ARE",
            "bankcode": "4fd58",
            "bankname": "Citibank NA"
        },
        {
            "country": "ARE",
            "bankcode": "4fdd5",
            "bankname": "Commercial Bank International PSC"
        },
        {
            "country": "ARE",
            "bankcode": "4fe52",
            "bankname": "Credit Agricole Corporate and Investment Bank"
        },
        {
            "country": "ARE",
            "bankcode": "4fecf",
            "bankname": "DEUTSCHE BANK AG ABU DHABI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "4ff4c",
            "bankname": "DOHA BANK"
        },
        {
            "country": "ARE",
            "bankcode": "4ffc9",
            "bankname": "DUBAI ISLAMIC BANK"
        },
        {
            "country": "ARE",
            "bankcode": "50046",
            "bankname": "Deutsche Bank"
        },
        {
            "country": "ARE",
            "bankcode": "500c3",
            "bankname": "Dubai Bank"
        },
        {
            "country": "ARE",
            "bankcode": "50140",
            "bankname": "EL-NILEIN BANK"
        },
        {
            "country": "ARE",
            "bankcode": "501bd",
            "bankname": "EMIRATES DEVELOPMENT BANK"
        },
        {
            "country": "ARE",
            "bankcode": "5023a",
            "bankname": "EMIRATES INVESTMENT BANK P J S C"
        },
        {
            "country": "ARE",
            "bankcode": "502b7",
            "bankname": "El Nilein Bank"
        },
        {
            "country": "ARE",
            "bankcode": "50334",
            "bankname": "Emirates Investment Bank"
        },
        {
            "country": "ARE",
            "bankcode": "503b1",
            "bankname": "Emiratization Penalties"
        },
        {
            "country": "ARE",
            "bankcode": "5042e",
            "bankname": "FINANCE HOUSE L L C"
        },
        {
            "country": "ARE",
            "bankcode": "504ab",
            "bankname": "FIRST ABU DHABI BANK PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "50528",
            "bankname": "Federal Authority For Government Human Reso urces -"
        },
        {
            "country": "ARE",
            "bankcode": "505a5",
            "bankname": "Federal Tax Authority"
        },
        {
            "country": "ARE",
            "bankcode": "50622",
            "bankname": "Federal Tax Authority Taxation of Corporations"
        },
        {
            "country": "ARE",
            "bankcode": "5069f",
            "bankname": "Federal Tax Authority Unregistered Tax Payers"
        },
        {
            "country": "ARE",
            "bankcode": "5071c",
            "bankname": "Finance House"
        },
        {
            "country": "ARE",
            "bankcode": "50799",
            "bankname": "First Abu Dhabi Bank"
        },
        {
            "country": "ARE",
            "bankcode": "50816",
            "bankname": "First Abu Dhabi Bank - Erstwhile FGB"
        },
        {
            "country": "ARE",
            "bankcode": "50893",
            "bankname": "First Gulf Bank"
        },
        {
            "country": "ARE",
            "bankcode": "50910",
            "bankname": "GPSSA-Pension Contribution Disbursements"
        },
        {
            "country": "ARE",
            "bankcode": "5098d",
            "bankname": "GULF INTERNATIONAL BANK B S C"
        },
        {
            "country": "ARE",
            "bankcode": "50a0a",
            "bankname": "Gulf International Bank"
        },
        {
            "country": "ARE",
            "bankcode": "50a87",
            "bankname": "HABIB BANK AG ZURICH"
        },
        {
            "country": "ARE",
            "bankcode": "50b04",
            "bankname": "HABIB BANK LIMITED"
        },
        {
            "country": "ARE",
            "bankcode": "50b81",
            "bankname": "HSBC BANK MIDDLE EAST LIMITED"
        },
        {
            "country": "ARE",
            "bankcode": "50bfe",
            "bankname": "HSBC Bank Middle East"
        },
        {
            "country": "ARE",
            "bankcode": "50c7b",
            "bankname": "INDUSTRIAL AND COMMERCIAL BANK OF CHIN A LIMITED-AB"
        },
        {
            "country": "ARE",
            "bankcode": "50cf8",
            "bankname": "INTERNATIONAL DEVELOPMENT BANK FOR IN VESTMENT AND"
        },
        {
            "country": "ARE",
            "bankcode": "50d75",
            "bankname": "INTESA SANPAOLO"
        },
        {
            "country": "ARE",
            "bankcode": "50df2",
            "bankname": "INTESA SANPAOLO - ABU DHABI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "50e6f",
            "bankname": "INVESTBANK"
        },
        {
            "country": "ARE",
            "bankcode": "50eec",
            "bankname": "ISO Annual Meetings"
        },
        {
            "country": "ARE",
            "bankcode": "50f69",
            "bankname": "Industrial and Commercial Bank of China"
        },
        {
            "country": "ARE",
            "bankcode": "50fe6",
            "bankname": "International Development Bank"
        },
        {
            "country": "ARE",
            "bankcode": "51063",
            "bankname": "Investbank PSC"
        },
        {
            "country": "ARE",
            "bankcode": "510e0",
            "bankname": "Islamic Finance Company"
        },
        {
            "country": "ARE",
            "bankcode": "5115d",
            "bankname": "JANATA BANK"
        },
        {
            "country": "ARE",
            "bankcode": "511da",
            "bankname": "KEB HANA BANK ABUDHABI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "51257",
            "bankname": "KEB HANA Bank"
        },
        {
            "country": "ARE",
            "bankcode": "512d4",
            "bankname": "KOTAK MAHINDRA BANK LIMITED"
        },
        {
            "country": "ARE",
            "bankcode": "51351",
            "bankname": "Lloyds TSB"
        },
        {
            "country": "ARE",
            "bankcode": "513ce",
            "bankname": "MASHREQBANK PSC"
        },
        {
            "country": "ARE",
            "bankcode": "5144b",
            "bankname": "MCB BANK LIMITED"
        },
        {
            "country": "ARE",
            "bankcode": "514c8",
            "bankname": "Mashreqbank"
        },
        {
            "country": "ARE",
            "bankcode": "51545",
            "bankname": "NATIONAL BANK OF BAHRAIN"
        },
        {
            "country": "ARE",
            "bankcode": "515c2",
            "bankname": "NATIONAL BANK OF FUJAIRAH"
        },
        {
            "country": "ARE",
            "bankcode": "5163f",
            "bankname": "NATIONAL BANK OF KUWAIT S A K"
        },
        {
            "country": "ARE",
            "bankcode": "516bc",
            "bankname": "NATIONAL BANK OF OMAN S A O G"
        },
        {
            "country": "ARE",
            "bankcode": "51739",
            "bankname": "NATIONAL BANK OF RAS AL-KHAIMAH THE"
        },
        {
            "country": "ARE",
            "bankcode": "517b6",
            "bankname": "NATIONAL BANK OF UMM AL QAIWAIN PSC"
        },
        {
            "country": "ARE",
            "bankcode": "51833",
            "bankname": "National Bank Of Kuwait"
        },
        {
            "country": "ARE",
            "bankcode": "518b0",
            "bankname": "National Bank Of Umm Al Qaiwain"
        },
        {
            "country": "ARE",
            "bankcode": "5192d",
            "bankname": "National Bank of Abu Dhabi"
        },
        {
            "country": "ARE",
            "bankcode": "519aa",
            "bankname": "National Bank of Oman"
        },
        {
            "country": "ARE",
            "bankcode": "51a27",
            "bankname": "National Bank of Ras Al-Khaimah"
        },
        {
            "country": "ARE",
            "bankcode": "51aa4",
            "bankname": "Noor Bank"
        },
        {
            "country": "ARE",
            "bankcode": "51b21",
            "bankname": "Noor Islamic Bank"
        },
        {
            "country": "ARE",
            "bankcode": "51b9e",
            "bankname": "OASIS EXCHANGE"
        },
        {
            "country": "ARE",
            "bankcode": "51c1b",
            "bankname": "PayBy Technologies Project LLC"
        },
        {
            "country": "ARE",
            "bankcode": "51c98",
            "bankname": "Payable for Training Insurance Companies Cont ribut"
        },
        {
            "country": "ARE",
            "bankcode": "51d15",
            "bankname": "Payments and Refunds for CB services"
        },
        {
            "country": "ARE",
            "bankcode": "51d92",
            "bankname": "Rafidain Bank"
        },
        {
            "country": "ARE",
            "bankcode": "51e0f",
            "bankname": "Ruya Community Islamic Bank LLC"
        },
        {
            "country": "ARE",
            "bankcode": "51e8c",
            "bankname": "SAMBA Financial Group"
        },
        {
            "country": "ARE",
            "bankcode": "51f09",
            "bankname": "SHARJAH ISLAMIC BANK"
        },
        {
            "country": "ARE",
            "bankcode": "51f86",
            "bankname": "SIRAJ FINANCE PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "52003",
            "bankname": "STANDARD CHARTERED BANK"
        },
        {
            "country": "ARE",
            "bankcode": "52080",
            "bankname": "Siraj Finance"
        },
        {
            "country": "ARE",
            "bankcode": "520fd",
            "bankname": "THE SAUDI NATIONAL BANK DUBAI BRANCH"
        },
        {
            "country": "ARE",
            "bankcode": "5217a",
            "bankname": "The Royal Bank Of Scotland PLC"
        },
        {
            "country": "ARE",
            "bankcode": "521f7",
            "bankname": "Training Fee Insurance Companies"
        },
        {
            "country": "ARE",
            "bankcode": "52274",
            "bankname": "UNITED ARAB BANK"
        },
        {
            "country": "ARE",
            "bankcode": "522f1",
            "bankname": "UNITED BANK LTD"
        },
        {
            "country": "ARE",
            "bankcode": "5236e",
            "bankname": "Union National Bank"
        },
        {
            "country": "ARE",
            "bankcode": "523eb",
            "bankname": "WIO BANK P J S C"
        },
        {
            "country": "ARE",
            "bankcode": "52468",
            "bankname": "Wio Bank PJSC"
        },
        {
            "country": "ARE",
            "bankcode": "524e5",
            "bankname": "ZAND BANK"
        },
        {
            "country": "ARE",
            "bankcode": "52562",
            "bankname": "ZAND BANK P J S C"
        }
    ],
    "sensitiveFields": {},
    "requestId": "4C49D6276563F49D1C8AACA1DB2ABF86"
}
```