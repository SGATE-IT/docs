# Test Account

::: warning Note
1. Test accounts are only supported in the sandbox environment. All accounts in the production environment will make payments normally.
2. Test accounts in the sandbox environment are not affected by customer automatic approval. Even if the customer does not turn on automatic approval, it will still be automatically processed.
3. In the sandbox environment, if the customer turns on automatic approval and uses a test account, the approval result is the same as the automatic result of the test account.
4. In the sandbox environment, the customer automatic result of the test account in the quick payment work order is passed, and only the payment automatic result is effective.
:::

## Bank Transfer

| Bank Code | IBAN                     | Card No          | Customer Automatic Result | Payment Automatic Result |
| --------- | ------------------------ | ---------------- | ------------------------- | ------------------------ |
| 1174c     | SA000000000000000000001  | 5123450000000001 | Normal                    | Transferred              |
| 11652     | SA000000000000000000002  | 5123450000000002 | Normal                    | Transferred              |
| 1174c     | SA0020000000000000000021 | 5123450000000021 | Normal                    | Transferred              |
| 11652     | SA0005000000000000000022 | 5123450000000022 | Normal                    | Transferred              |
| 1174c     | SA000000000000000000003  | 5123450000000003 | Normal                    | Error                    |
| 11652     | SA000000000000000000004  | 5123450000000004 | Normal                    | Error                    |
| 118c3     | SA0080000000000000000023 | 5123450000000023 | Normal                    | Error                    |
| 114db     | SA0010000000000000000024 | 5123450000000024 | Normal                    | Error                    |
| 1174c     | SA0000000000000000000005 | 5123450000000005 | Reject                    | Error                    |
| 11652     | SA000000000000000000006  | 5123450000000006 | Reject                    | Error                    |
| 119bd     | SA0015000000000000000025 | 5123450000000025 | Reject                    | Error                    |
| 11a3a     | SA0060000000000000000026 | 5123450000000026 | Reject                    | Error                    |

## STCPay Transfers

| STCPay Accounts                                          | Customer Auto Results | Payment Auto Results |
| -------------------------------------------------------- | --------------------- | -------------------- |
| 512345678<br>0512345678<br>966512345678<br>+966512345678 | Normal                | Transferred          |
| 500000001<br>0500000001<br>966500000001<br>+966500000001 | Normal                | Transferred          |
| 510000001<br>0510000001<br>966510000001<br>+966510000001 | Normal                | Transferred          |
| 500000002<br>0500000002<br>966500000002<br>+966500000002 | Normal                | Error                |
| 500000003<br>0500000003<br>966500000003<br>+966500000003 | Normal                | Error                |
| 510000002<br>0510000002<br>966510000002<br>+966510000002 | Normal                | Error                |
| 510000003<br>0510000003<br>966510000003<br>+966510000003 | Normal                | Error                |
| 500000004<br>0500000004<br>966500000004<br>+966500000004 | Reject                | Error                |
| 500000005<br>0500000005<br>966500000005<br>+966500000005 | Reject                | Error                |
| 510000004<br>0510000004<br>966510000004<br>+966510000004 | Reject                | Error                |
| 510000005<br>0510000005<br>966510000005<br>+966510000005 | Reject                | Error                |