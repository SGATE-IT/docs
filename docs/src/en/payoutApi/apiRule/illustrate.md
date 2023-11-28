# Rule Description

## Request

* `GET`  request： The parameter is on the URL, and its value needs to be processed through `urlencode`.
* `POST` request：The parameters are reported in **Raw JSON** format in the **body**.
* File upload：The parameters are reported in the form of **Form Data** in the **body**.

## API KEY

Assigned by the system to identify merchants and used in signatures.


## Request ID

The system assigns a unique identifier to each received request. The unique identifier of the request is included in the requestId in the response body of the response. When you need help, please provide a unique identifier for the request so that we can quickly locate the specific request.

## Error Message

* The unified `HTTP` status code for successful requests is `200`, and the `code` in the response body is also `200`. Other `code` codes indicate business processing failures/exceptions, and the reason for the failure will be described in the `message` response field.
* A service system error occurred during request processing, and status codes of `500`, `501`, and `503` will be returned. This situation is relatively rare.

## User Agent

The HTTP protocol requires the requesting client to use the HTTP header `User-Agent` to identify themselves in each request. The system will refuse to process requests without a `User-Agent`.

## IP Whitelist

In the production environment, it is mandatory to verify whether the IP is on the whitelist, and there is no such restriction on the testing environment.