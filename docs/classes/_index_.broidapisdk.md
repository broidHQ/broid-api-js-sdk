[broid-api-sdk](../README.md) > ["index"](../modules/_index_.md) > [BroidAPISDK](../classes/_index_.broidapisdk.md)



# Class: BroidAPISDK

## Index

### Constructors

* [constructor](_index_.broidapisdk.md#constructor)


### Methods

* [_makeRequest](_index_.broidapisdk.md#_makerequest)
* [createTeam](_index_.broidapisdk.md#createteam)
* [createUser](_index_.broidapisdk.md#createuser)
* [deleteAPIKey](_index_.broidapisdk.md#deleteapikey)
* [deleteApplication](_index_.broidapisdk.md#deleteapplication)
* [deleteUser](_index_.broidapisdk.md#deleteuser)
* [disableAPIKey](_index_.broidapisdk.md#disableapikey)
* [disableApplication](_index_.broidapisdk.md#disableapplication)
* [getApplicationIntegrations](_index_.broidapisdk.md#getapplicationintegrations)
* [getTeam](_index_.broidapisdk.md#getteam)
* [getUser](_index_.broidapisdk.md#getuser)
* [getUserAPIKeys](_index_.broidapisdk.md#getuserapikeys)
* [getUserApplications](_index_.broidapisdk.md#getuserapplications)
* [updateTeam](_index_.broidapisdk.md#updateteam)
* [updateUser](_index_.broidapisdk.md#updateuser)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BroidAPISDK**(hostUrl: *`string`*, apiVersion?: *`string`*): [BroidAPISDK](_index_.broidapisdk.md)



*Defined in index.ts:9*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| hostUrl | `string` | - |
| apiVersion | `string` | Default value = &quot;v1&quot;.- |





**Returns:** [BroidAPISDK](_index_.broidapisdk.md)

---



## Methods
<a id="_makerequest"></a>

### «Private» _makeRequest

► **_makeRequest**(method: *`string`*, url: *`string`*, body: *`ObjectConstructor`⎮`null`*): `request.RequestPromise`




*Defined in index.ts:16*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| method | `string` | - |
| url | `string` | - |
| body | `ObjectConstructor`⎮`null` | - |





**Returns:** `request.RequestPromise`





___

<a id="createteam"></a>

###  createTeam

► **createTeam**(name: *`string`*): `Promise`<[Team](../interfaces/_interfaces_.team.md)>




*Defined in index.ts:46*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** `Promise`<[Team](../interfaces/_interfaces_.team.md)>





___

<a id="createuser"></a>

###  createUser

► **createUser**(userObject: *[User](../interfaces/_interfaces_.user.md)*): `Promise`<[User](../interfaces/_interfaces_.user.md)>




*Defined in index.ts:60*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| userObject | [User](../interfaces/_interfaces_.user.md) | - |





**Returns:** `Promise`<[User](../interfaces/_interfaces_.user.md)>





___

<a id="deleteapikey"></a>

###  deleteAPIKey

► **deleteAPIKey**(id: *`number`*): `Promise`<`null`>




*Defined in index.ts:38*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`null`>





___

<a id="deleteapplication"></a>

###  deleteApplication

► **deleteApplication**(id: *`number`*): `Promise`<`null`>




*Defined in index.ts:26*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`null`>





___

<a id="deleteuser"></a>

###  deleteUser

► **deleteUser**(id: *`number`*): `Promise`<[User](../interfaces/_interfaces_.user.md)>




*Defined in index.ts:64*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<[User](../interfaces/_interfaces_.user.md)>





___

<a id="disableapikey"></a>

###  disableAPIKey

► **disableAPIKey**(id: *`number`*): `Promise`<`null`>




*Defined in index.ts:42*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`null`>





___

<a id="disableapplication"></a>

###  disableApplication

► **disableApplication**(id: *`number`*): `Promise`<`null`>




*Defined in index.ts:30*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`null`>





___

<a id="getapplicationintegrations"></a>

###  getApplicationIntegrations

► **getApplicationIntegrations**(id: *`number`*): `Promise`<`string`[]>




*Defined in index.ts:34*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`string`[]>





___

<a id="getteam"></a>

###  getTeam

► **getTeam**(id: *`number`*): `Promise`<[Team](../interfaces/_interfaces_.team.md)>




*Defined in index.ts:51*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<[Team](../interfaces/_interfaces_.team.md)>





___

<a id="getuser"></a>

###  getUser

► **getUser**(id: *`number`*): `Promise`<[User](../interfaces/_interfaces_.user.md)>




*Defined in index.ts:68*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<[User](../interfaces/_interfaces_.user.md)>





___

<a id="getuserapikeys"></a>

###  getUserAPIKeys

► **getUserAPIKeys**(id: *`number`*): `Promise`<`string`[]>




*Defined in index.ts:76*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`string`[]>





___

<a id="getuserapplications"></a>

###  getUserApplications

► **getUserApplications**(id: *`number`*): `Promise`<`string`[]>




*Defined in index.ts:72*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |





**Returns:** `Promise`<`string`[]>





___

<a id="updateteam"></a>

###  updateTeam

► **updateTeam**(id: *`number`*, name: *`string`*): `Promise`<`null`>




*Defined in index.ts:55*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| id | `number` | - |
| name | `string` | - |





**Returns:** `Promise`<`null`>





___

<a id="updateuser"></a>

###  updateUser

► **updateUser**(userObject: *[User](../interfaces/_interfaces_.user.md)*): `Promise`<`null`>




*Defined in index.ts:80*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| userObject | [User](../interfaces/_interfaces_.user.md) | - |





**Returns:** `Promise`<`null`>





___


