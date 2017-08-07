[broid-api-sdk](../README.md) > ["helpers/Http"](../modules/_helpers_http_.md) > [Http](../classes/_helpers_http_.http.md)



# Class: Http

## Index

### Constructors

* [constructor](_helpers_http_.http.md#constructor)


### Methods

* [_autoParse](_helpers_http_.http.md#_autoparse)
* [_generateHeaders](_helpers_http_.http.md#_generateheaders)
* [makeRequest](_helpers_http_.http.md#makerequest)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Http**(credentials: *`any`*, hostUrl?: *`string`*, apiVersion?: *`string`*, logger: *`Logger`*): [Http](_helpers_http_.http.md)



*Defined in helpers/Http.ts:9*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| credentials | `any`  | - |   - |
| hostUrl | `string`  | &quot;https://api-dev.broid.ai&quot; |   - |
| apiVersion | `string`  | &quot;1&quot; |   - |
| logger | `Logger`  | - |   - |





**Returns:** [Http](_helpers_http_.http.md)

---



## Methods
<a id="_autoparse"></a>

### «Private» _autoParse

► **_autoParse**(body: *`any`*, response: *`any`*): `any`




*Defined in helpers/Http.ts:16*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| body | `any`   |  - |
| response | `any`   |  - |





**Returns:** `any`





___

<a id="_generateheaders"></a>

### «Private» _generateHeaders

► **_generateHeaders**(): `Object`




*Defined in helpers/Http.ts:26*





**Returns:** `Object`





___

<a id="makerequest"></a>

###  makeRequest

► **makeRequest**(method: *`string`*, url: *`string`*, body_: *`ObjectConstructor`⎮`null`*): `request.RequestPromise`




*Defined in helpers/Http.ts:37*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| method | `string`   |  - |
| url | `string`   |  - |
| body_ | `ObjectConstructor`⎮`null`   |  - |





**Returns:** `request.RequestPromise`





___


