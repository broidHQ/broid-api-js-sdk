[@broid/api-sdk](../README.md) > ["core/BroidAPISDK"](../modules/_core_broidapisdk_.md) > [BroidAPISDK](../classes/_core_broidapisdk_.broidapisdk.md)



# Class: BroidAPISDK

## Index

### Constructors

* [constructor](_core_broidapisdk_.broidapisdk.md#constructor)


### Properties

* [apiVersion](_core_broidapisdk_.broidapisdk.md#apiversion)
* [applications](_core_broidapisdk_.broidapisdk.md#applications)
* [credentials](_core_broidapisdk_.broidapisdk.md#credentials)
* [hostUrl](_core_broidapisdk_.broidapisdk.md#hosturl)
* [http](_core_broidapisdk_.broidapisdk.md#http)
* [integrations](_core_broidapisdk_.broidapisdk.md#integrations)
* [logLevel](_core_broidapisdk_.broidapisdk.md#loglevel)
* [logger](_core_broidapisdk_.broidapisdk.md#logger)
* [rtm](_core_broidapisdk_.broidapisdk.md#rtm)
* [users](_core_broidapisdk_.broidapisdk.md#users)


### Methods

* [realtime](_core_broidapisdk_.broidapisdk.md#realtime)
* [sendMessage](_core_broidapisdk_.broidapisdk.md#sendmessage)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BroidAPISDK**(credentials: *`any`*, hostUrl?: *`string`*, apiVersion?: *`string`*, logLevel?: *`string`*): [BroidAPISDK](_core_broidapisdk_.broidapisdk.md)



*Defined in [core/BroidAPISDK.ts:16](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L16)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| credentials | `any`  | - |   - |
| hostUrl | `string`  | &quot;https://api.broid.ai&quot; |   - |
| apiVersion | `string`  | &quot;1&quot; |   - |
| logLevel | `string`  | &quot;info&quot; |   - |





**Returns:** [BroidAPISDK](_core_broidapisdk_.broidapisdk.md)

---


## Properties
<a id="apiversion"></a>

### «Private» apiVersion

**●  apiVersion**:  *`string`* 

*Defined in [core/BroidAPISDK.ts:20](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L20)*





___

<a id="applications"></a>

###  applications

**●  applications**:  *[Application](_core_endpoints_application_.application.md)* 

*Defined in [core/BroidAPISDK.ts:15](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L15)*





___

<a id="credentials"></a>

### «Private» credentials

**●  credentials**:  *`any`* 

*Defined in [core/BroidAPISDK.ts:18](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L18)*





___

<a id="hosturl"></a>

### «Private» hostUrl

**●  hostUrl**:  *`string`* 

*Defined in [core/BroidAPISDK.ts:19](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L19)*





___

<a id="http"></a>

### «Private» http

**●  http**:  *[Http](_core_helpers_http_.http.md)* 

*Defined in [core/BroidAPISDK.ts:10](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L10)*





___

<a id="integrations"></a>

###  integrations

**●  integrations**:  *[Integration](_core_endpoints_integration_.integration.md)* 

*Defined in [core/BroidAPISDK.ts:16](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L16)*





___

<a id="loglevel"></a>

### «Private» logLevel

**●  logLevel**:  *`string`* 

*Defined in [core/BroidAPISDK.ts:21](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L21)*





___

<a id="logger"></a>

### «Private» logger

**●  logger**:  *`Logger`* 

*Defined in [core/BroidAPISDK.ts:11](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L11)*





___

<a id="rtm"></a>

### «Private» rtm

**●  rtm**:  *[Realtime](_core_endpoints_realtime_.realtime.md)`any`* 

*Defined in [core/BroidAPISDK.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L12)*





___

<a id="users"></a>

###  users

**●  users**:  *[User](_core_endpoints_user_.user.md)* 

*Defined in [core/BroidAPISDK.ts:14](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L14)*





___


## Methods
<a id="realtime"></a>

###  realtime

► **realtime**(): `Promise`.<[Realtime](_core_endpoints_realtime_.realtime.md)`any`>




*Defined in [core/BroidAPISDK.ts:37](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L37)*





**Returns:** `Promise`.<[Realtime](_core_endpoints_realtime_.realtime.md)`any`>





___

<a id="sendmessage"></a>

###  sendMessage

► **sendMessage**(message: *`any`*): `Promise`.<`any`>




*Defined in [core/BroidAPISDK.ts:42](https://github.com/broidHQ/broid-api-js-sdk/blob/0f18411/src/core/BroidAPISDK.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `any`   |  - |





**Returns:** `Promise`.<`any`>





___


