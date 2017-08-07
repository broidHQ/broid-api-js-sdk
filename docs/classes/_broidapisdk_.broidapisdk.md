[@broid/api-sdk](../README.md) > ["BroidAPISDK"](../modules/_broidapisdk_.md) > [BroidAPISDK](../classes/_broidapisdk_.broidapisdk.md)



# Class: BroidAPISDK

## Index

### Constructors

* [constructor](_broidapisdk_.broidapisdk.md#constructor)


### Properties

* [apiVersion](_broidapisdk_.broidapisdk.md#apiversion)
* [applications](_broidapisdk_.broidapisdk.md#applications)
* [credentials](_broidapisdk_.broidapisdk.md#credentials)
* [hostUrl](_broidapisdk_.broidapisdk.md#hosturl)
* [http](_broidapisdk_.broidapisdk.md#http)
* [integrations](_broidapisdk_.broidapisdk.md#integrations)
* [logLevel](_broidapisdk_.broidapisdk.md#loglevel)
* [logger](_broidapisdk_.broidapisdk.md#logger)
* [rtm](_broidapisdk_.broidapisdk.md#rtm)
* [users](_broidapisdk_.broidapisdk.md#users)


### Methods

* [realtime](_broidapisdk_.broidapisdk.md#realtime)
* [sendMessage](_broidapisdk_.broidapisdk.md#sendmessage)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BroidAPISDK**(credentials: *`any`*, hostUrl?: *`string`*, apiVersion?: *`string`*, logLevel?: *`string`*): [BroidAPISDK](_broidapisdk_.broidapisdk.md)



*Defined in [BroidAPISDK.ts:16](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L16)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| credentials | `any`  | - |   - |
| hostUrl | `string`  | &quot;https://api.broid.ai&quot; |   - |
| apiVersion | `string`  | &quot;1&quot; |   - |
| logLevel | `string`  | &quot;info&quot; |   - |





**Returns:** [BroidAPISDK](_broidapisdk_.broidapisdk.md)

---


## Properties
<a id="apiversion"></a>

### «Private» apiVersion

**●  apiVersion**:  *`string`* 

*Defined in [BroidAPISDK.ts:20](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L20)*





___

<a id="applications"></a>

###  applications

**●  applications**:  *[Application](_endpoints_application_.application.md)* 

*Defined in [BroidAPISDK.ts:15](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L15)*





___

<a id="credentials"></a>

### «Private» credentials

**●  credentials**:  *`any`* 

*Defined in [BroidAPISDK.ts:18](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L18)*





___

<a id="hosturl"></a>

### «Private» hostUrl

**●  hostUrl**:  *`string`* 

*Defined in [BroidAPISDK.ts:19](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L19)*





___

<a id="http"></a>

### «Private» http

**●  http**:  *[Http](_helpers_http_.http.md)* 

*Defined in [BroidAPISDK.ts:10](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L10)*





___

<a id="integrations"></a>

###  integrations

**●  integrations**:  *[Integration](_endpoints_integration_.integration.md)* 

*Defined in [BroidAPISDK.ts:16](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L16)*





___

<a id="loglevel"></a>

### «Private» logLevel

**●  logLevel**:  *`string`* 

*Defined in [BroidAPISDK.ts:21](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L21)*





___

<a id="logger"></a>

### «Private» logger

**●  logger**:  *`Logger`* 

*Defined in [BroidAPISDK.ts:11](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L11)*





___

<a id="rtm"></a>

### «Private» rtm

**●  rtm**:  *[Realtime](_endpoints_realtime_.realtime.md)`any`* 

*Defined in [BroidAPISDK.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L12)*





___

<a id="users"></a>

###  users

**●  users**:  *[User](_endpoints_user_.user.md)* 

*Defined in [BroidAPISDK.ts:14](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L14)*





___


## Methods
<a id="realtime"></a>

###  realtime

► **realtime**(): `Promise`.<[Realtime](_endpoints_realtime_.realtime.md)`any`>




*Defined in [BroidAPISDK.ts:37](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L37)*





**Returns:** `Promise`.<[Realtime](_endpoints_realtime_.realtime.md)`any`>





___

<a id="sendmessage"></a>

###  sendMessage

► **sendMessage**(message: *`any`*): `Promise`.<`any`>




*Defined in [BroidAPISDK.ts:42](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/BroidAPISDK.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `any`   |  - |





**Returns:** `Promise`.<`any`>





___


