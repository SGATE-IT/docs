# Set After-Aales Status

## Function Description

- Set after-sales status

## Set After-Aales Status API

### Request URL

- `/orders/{ORDER_ID}/afterSale/status`
  - `{ORDER_ID}`：Your payment ID

### Request Method

- `order.setAfterSaleStatus`

### HTTP Verb

- PUT

### Request Parameters

The request parameters are as follows:

- **Header**

  - [_View public parameters_](/en/payinApi/callMethod/callMethod#public-parameters)

- **Request Body**

| **Parameter** | **Type** | **Required** | **Description**                                                                                                                               | **Example** |
| ------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| value         | string   | Y            | After-sales status: <br> `none`: None <br> `applying`: Applying for after-sales <br> `returning`: Returning <br> `returned`: Return completed | "none"      |

### Response Parameters

Response HTTP status code `200` means success