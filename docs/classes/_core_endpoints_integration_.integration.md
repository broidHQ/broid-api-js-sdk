[@broid/api-sdk](../README.md) > ["core/endpoints/Integration"](../modules/_core_endpoints_integration_.md) > [Integration](../classes/_core_endpoints_integration_.integration.md)



# Class: Integration

## Index

### Constructors

* [constructor](_core_endpoints_integration_.integration.md#constructor)


### Methods

* [create](_core_endpoints_integration_.integration.md#create)
* [delete](_core_endpoints_integration_.integration.md#delete)
* [disable](_core_endpoints_integration_.integration.md#disable)
* [update](_core_endpoints_integration_.integration.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Integration**(http: *[Http](_core_helpers_http_.http.md)*, logger: *`Logger`*): [Integration](_core_endpoints_integration_.integration.md)



*Defined in [core/endpoints/Integration.ts:7](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Integration.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | [Http](_core_helpers_http_.http.md)   |  - |
| logger | `Logger`   |  - |





**Returns:** [Integration](_core_endpoints_integration_.integration.md)

---



## Methods
<a id="create"></a>

###  create

► **create**(integration: *[Integration](../interfaces/_core_interfaces_.integration.md)*): `Promise`.<[Integration](../interfaces/_core_interfaces_.integration.md)>




*Defined in [core/endpoints/Integration.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Integration.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| integration | [Integration](../interfaces/_core_interfaces_.integration.md)   |  - |





**Returns:** `Promise`.<[Integration](../interfaces/_core_interfaces_.integration.md)>





___

<a id="delete"></a>

###  delete

► **delete**(id: *`number`*): `Promise`.<`null`>




*Defined in [core/endpoints/Integration.ts:17](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Integration.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="disable"></a>

###  disable

► **disable**(id: *`number`*): `Promise`.<`null`>




*Defined in [core/endpoints/Integration.ts:22](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Integration.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="update"></a>

###  update

► **update**(id: *`number`*, integration: *[Integration](../interfaces/_core_interfaces_.integration.md)*): `Promise`.<`null`>




*Defined in [core/endpoints/Integration.ts:27](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Integration.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| integration | [Integration](../interfaces/_core_interfaces_.integration.md)   |  - |





**Returns:** `Promise`.<`null`>





___


