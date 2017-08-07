[broid-api-sdk](../README.md) > ["endpoints/Application"](../modules/_endpoints_application_.md) > [Application](../classes/_endpoints_application_.application.md)



# Class: Application

## Index

### Constructors

* [constructor](_endpoints_application_.application.md#constructor)


### Methods

* [create](_endpoints_application_.application.md#create)
* [delete](_endpoints_application_.application.md#delete)
* [disable](_endpoints_application_.application.md#disable)
* [info](_endpoints_application_.application.md#info)
* [integrations](_endpoints_application_.application.md#integrations)
* [setWebHook](_endpoints_application_.application.md#setwebhook)
* [update](_endpoints_application_.application.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Application**(http: *[Http](_helpers_http_.http.md)*, logger: *`Logger`*): [Application](_endpoints_application_.application.md)



*Defined in endpoints/Application.ts:7*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| http | [Http](_helpers_http_.http.md)   |  - |
| logger | `Logger`   |  - |





**Returns:** [Application](_endpoints_application_.application.md)

---



## Methods
<a id="create"></a>

###  create

► **create**(application: *[Application](../interfaces/_interfaces_.application.md)*): `Promise`.<[Application](../interfaces/_interfaces_.application.md)>




*Defined in endpoints/Application.ts:12*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| application | [Application](../interfaces/_interfaces_.application.md)   |  - |





**Returns:** `Promise`.<[Application](../interfaces/_interfaces_.application.md)>





___

<a id="delete"></a>

###  delete

► **delete**(id: *`string`*): `Promise`.<`null`>




*Defined in endpoints/Application.ts:17*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="disable"></a>

###  disable

► **disable**(id: *`string`*): `Promise`.<`null`>




*Defined in endpoints/Application.ts:22*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<`null`>





___

<a id="info"></a>

###  info

► **info**(id: *`string`*): `Promise`.<[Application](../interfaces/_interfaces_.application.md)>




*Defined in endpoints/Application.ts:27*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<[Application](../interfaces/_interfaces_.application.md)>





___

<a id="integrations"></a>

###  integrations

► **integrations**(id: *`string`*): `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)[]>




*Defined in endpoints/Application.ts:33*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `Promise`.<[Integration](../interfaces/_interfaces_.integration.md)[]>





___

<a id="setwebhook"></a>

###  setWebHook

► **setWebHook**(id: *`string`*, webhook: *[ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)*): `Promise`.<[ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)>




*Defined in endpoints/Application.ts:46*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| webhook | [ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)   |  - |





**Returns:** `Promise`.<[ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)>





___

<a id="update"></a>

###  update

► **update**(id: *`string`*, application: *[Application](../interfaces/_interfaces_.application.md)*): `Promise`.<[ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)>




*Defined in endpoints/Application.ts:38*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| application | [Application](../interfaces/_interfaces_.application.md)   |  - |





**Returns:** `Promise`.<[ApplicationWebHookURL](../interfaces/_interfaces_.applicationwebhookurl.md)>





___


