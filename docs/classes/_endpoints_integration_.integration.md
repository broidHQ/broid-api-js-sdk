[@broid/api-sdk](../README.md) > ["endpoints/Integration"](../modules/_endpoints_integration_.md) > [Integration](../classes/_endpoints_integration_.integration.md)



# Class: Integration

## Index

### Constructors

* [constructor](_endpoints_integration_.integration.md#constructor)


### Methods

* [create](_endpoints_integration_.integration.md#create)
* [delete](_endpoints_integration_.integration.md#delete)
* [disable](_endpoints_integration_.integration.md#disable)
* [update](_endpoints_integration_.integration.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Integration**(http: *[Http](_helpers_http_.http.md)*, logger: *`Logger`*): [Integration](_endpoints_integration_.integration.md)



*Defined in [endpoints/Integration.ts:7](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/endpoints/Integration.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | [Http](_helpers_http_.http.md)   |  - |
| logger | `Logger`   |  - |





**Returns:** [Integration](_endpoints_integration_.integration.md)

---



## Methods
<a id="create"></a>

###  create

► **create**(integration: *[Integration](../interfaces/_interfaces_.integration.md)*): `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)>




*Defined in [endpoints/Integration.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/endpoints/Integration.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| integration | [Integration](../interfaces/_interfaces_.integration.md)   |  - |





**Returns:** `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)>





___

<a id="delete"></a>

###  delete

► **delete**(id: *`number`*): `Promise`.<`null`>




*Defined in [endpoints/Integration.ts:17](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/endpoints/Integration.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="disable"></a>

###  disable

► **disable**(id: *`number`*): `Promise`.<`null`>




*Defined in [endpoints/Integration.ts:22](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/endpoints/Integration.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="update"></a>

###  update

► **update**(id: *`number`*, integration: *[Integration](../interfaces/_interfaces_.integration.md)*): `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)>




*Defined in [endpoints/Integration.ts:27](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/endpoints/Integration.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| integration | [Integration](../interfaces/_interfaces_.integration.md)   |  - |





**Returns:** `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)>





___


