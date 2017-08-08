[@broid/api-sdk](../README.md) > ["core/endpoints/Application"](../modules/_core_endpoints_application_.md) > [Application](../classes/_core_endpoints_application_.application.md)



# Class: Application

## Index

### Constructors

* [constructor](_core_endpoints_application_.application.md#constructor)


### Methods

* [create](_core_endpoints_application_.application.md#create)
* [createKey](_core_endpoints_application_.application.md#createkey)
* [delete](_core_endpoints_application_.application.md#delete)
* [deleteKey](_core_endpoints_application_.application.md#deletekey)
* [disable](_core_endpoints_application_.application.md#disable)
* [info](_core_endpoints_application_.application.md#info)
* [integrations](_core_endpoints_application_.application.md#integrations)
* [setWebHook](_core_endpoints_application_.application.md#setwebhook)
* [update](_core_endpoints_application_.application.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Application**(http: *[Http](_core_helpers_http_.http.md)*, logger: *`Logger`*): [Application](_core_endpoints_application_.application.md)



*Defined in [core/endpoints/Application.ts:7](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | [Http](_core_helpers_http_.http.md)   |  - |
| logger | `Logger`   |  - |





**Returns:** [Application](_core_endpoints_application_.application.md)

---



## Methods
<a id="create"></a>

###  create

► **create**(application: *[Application](../interfaces/_core_interfaces_.application.md)*): `Promise`.<[Application](../interfaces/_core_interfaces_.application.md)>




*Defined in [core/endpoints/Application.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| application | [Application](../interfaces/_core_interfaces_.application.md)   |  - |





**Returns:** `Promise`.<[Application](../interfaces/_core_interfaces_.application.md)>





___

<a id="createkey"></a>

###  createKey

► **createKey**(application_id: *`string`*): `Promise`.<[ApplicationKey](../interfaces/_core_interfaces_.applicationkey.md)>




*Defined in [core/endpoints/Application.ts:53](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L53)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| application_id | `string`   |  - |





**Returns:** `Promise`.<[ApplicationKey](../interfaces/_core_interfaces_.applicationkey.md)>





___

<a id="delete"></a>

###  delete

► **delete**(id: *`string`*): `Promise`.<`null`>




*Defined in [core/endpoints/Application.ts:17](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="deletekey"></a>

###  deleteKey

► **deleteKey**(id: *`string`*): `Promise`.<`null`>




*Defined in [core/endpoints/Application.ts:61](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L61)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="disable"></a>

###  disable

► **disable**(id: *`string`*): `Promise`.<`null`>




*Defined in [core/endpoints/Application.ts:22](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="info"></a>

###  info

► **info**(id: *`string`*): `Promise`.<[Application](../interfaces/_core_interfaces_.application.md)>




*Defined in [core/endpoints/Application.ts:27](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<[Application](../interfaces/_core_interfaces_.application.md)>





___

<a id="integrations"></a>

###  integrations

► **integrations**(id: *`string`*): `Promise`.<[Integration](../interfaces/_core_interfaces_.integration.md)[]>




*Defined in [core/endpoints/Application.ts:32](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<[Integration](../interfaces/_core_interfaces_.integration.md)[]>





___

<a id="setwebhook"></a>

###  setWebHook

► **setWebHook**(id: *`string`*, webhook: *[ApplicationWebHookURL](../interfaces/_core_interfaces_.applicationwebhookurl.md)*): `Promise`.<`null`>




*Defined in [core/endpoints/Application.ts:45](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L45)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| webhook | [ApplicationWebHookURL](../interfaces/_core_interfaces_.applicationwebhookurl.md)   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="update"></a>

###  update

► **update**(id: *`string`*, application: *[Application](../interfaces/_core_interfaces_.application.md)*): `Promise`.<`null`>




*Defined in [core/endpoints/Application.ts:37](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/endpoints/Application.ts#L37)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| application | [Application](../interfaces/_core_interfaces_.application.md)   |  - |





**Returns:** `Promise`.<`null`>





___


