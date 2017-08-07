[@broid/api-sdk](../README.md) > ["helpers/WebSocket"](../modules/_helpers_websocket_.md) > [WebSocket](../classes/_helpers_websocket_.websocket.md)



# Class: WebSocket

## Type parameters
#### T 
## Hierarchy


 `Subject`.<`T`>

**↳ WebSocket**







## Implements

* `Subscribable`.<`T`>
* `ISubscription`

## Index

### Modules

* [Observable](../modules/_helpers_websocket_.websocket.observable.md)


### Constructors

* [constructor](_helpers_websocket_.websocket.md#constructor)


### Properties

* [_isScalar](_helpers_websocket_.websocket.md#_isscalar)
* [closed](_helpers_websocket_.websocket.md#closed)
* [hasError](_helpers_websocket_.websocket.md#haserror)
* [isStopped](_helpers_websocket_.websocket.md#isstopped)
* [logger](_helpers_websocket_.websocket.md#logger)
* [observers](_helpers_websocket_.websocket.md#observers)
* [operator](_helpers_websocket_.websocket.md#operator)
* [socket](_helpers_websocket_.websocket.md#socket)
* [source](_helpers_websocket_.websocket.md#source)
* [thrownError](_helpers_websocket_.websocket.md#thrownerror)
* [_catch](_helpers_websocket_.websocket.md#_catch)
* [_do](_helpers_websocket_.websocket.md#_do)
* [_finally](_helpers_websocket_.websocket.md#_finally)
* [_switch](_helpers_websocket_.websocket.md#_switch)
* [audit](_helpers_websocket_.websocket.md#audit)
* [auditTime](_helpers_websocket_.websocket.md#audittime)
* [buffer](_helpers_websocket_.websocket.md#buffer)
* [bufferCount](_helpers_websocket_.websocket.md#buffercount)
* [bufferTime](_helpers_websocket_.websocket.md#buffertime)
* [bufferToggle](_helpers_websocket_.websocket.md#buffertoggle)
* [bufferWhen](_helpers_websocket_.websocket.md#bufferwhen)
* [catch](_helpers_websocket_.websocket.md#catch)
* [combineAll](_helpers_websocket_.websocket.md#combineall)
* [combineLatest](_helpers_websocket_.websocket.md#combinelatest)
* [concat](_helpers_websocket_.websocket.md#concat)
* [concatAll](_helpers_websocket_.websocket.md#concatall)
* [concatMap](_helpers_websocket_.websocket.md#concatmap)
* [concatMapTo](_helpers_websocket_.websocket.md#concatmapto)
* [count](_helpers_websocket_.websocket.md#count)
* [create](_helpers_websocket_.websocket.md#create)
* [debounce](_helpers_websocket_.websocket.md#debounce)
* [debounceTime](_helpers_websocket_.websocket.md#debouncetime)
* [defaultIfEmpty](_helpers_websocket_.websocket.md#defaultifempty)
* [delay](_helpers_websocket_.websocket.md#delay)
* [delayWhen](_helpers_websocket_.websocket.md#delaywhen)
* [dematerialize](_helpers_websocket_.websocket.md#dematerialize)
* [distinct](_helpers_websocket_.websocket.md#distinct)
* [distinctUntilChanged](_helpers_websocket_.websocket.md#distinctuntilchanged)
* [distinctUntilKeyChanged](_helpers_websocket_.websocket.md#distinctuntilkeychanged)
* [do](_helpers_websocket_.websocket.md#do)
* [elementAt](_helpers_websocket_.websocket.md#elementat)
* [every](_helpers_websocket_.websocket.md#every)
* [exhaust](_helpers_websocket_.websocket.md#exhaust)
* [exhaustMap](_helpers_websocket_.websocket.md#exhaustmap)
* [expand](_helpers_websocket_.websocket.md#expand)
* [filter](_helpers_websocket_.websocket.md#filter)
* [finally](_helpers_websocket_.websocket.md#finally)
* [find](_helpers_websocket_.websocket.md#find)
* [findIndex](_helpers_websocket_.websocket.md#findindex)
* [first](_helpers_websocket_.websocket.md#first)
* [flatMap](_helpers_websocket_.websocket.md#flatmap)
* [flatMapTo](_helpers_websocket_.websocket.md#flatmapto)
* [groupBy](_helpers_websocket_.websocket.md#groupby)
* [if](_helpers_websocket_.websocket.md#if)
* [ignoreElements](_helpers_websocket_.websocket.md#ignoreelements)
* [isEmpty](_helpers_websocket_.websocket.md#isempty)
* [last](_helpers_websocket_.websocket.md#last)
* [let](_helpers_websocket_.websocket.md#let)
* [letBind](_helpers_websocket_.websocket.md#letbind)
* [map](_helpers_websocket_.websocket.md#map)
* [mapTo](_helpers_websocket_.websocket.md#mapto)
* [materialize](_helpers_websocket_.websocket.md#materialize)
* [max](_helpers_websocket_.websocket.md#max)
* [merge](_helpers_websocket_.websocket.md#merge)
* [mergeAll](_helpers_websocket_.websocket.md#mergeall)
* [mergeMap](_helpers_websocket_.websocket.md#mergemap)
* [mergeMapTo](_helpers_websocket_.websocket.md#mergemapto)
* [mergeScan](_helpers_websocket_.websocket.md#mergescan)
* [min](_helpers_websocket_.websocket.md#min)
* [multicast](_helpers_websocket_.websocket.md#multicast)
* [observeOn](_helpers_websocket_.websocket.md#observeon)
* [onErrorResumeNext](_helpers_websocket_.websocket.md#onerrorresumenext)
* [pairwise](_helpers_websocket_.websocket.md#pairwise)
* [partition](_helpers_websocket_.websocket.md#partition)
* [pluck](_helpers_websocket_.websocket.md#pluck)
* [publish](_helpers_websocket_.websocket.md#publish)
* [publishBehavior](_helpers_websocket_.websocket.md#publishbehavior)
* [publishLast](_helpers_websocket_.websocket.md#publishlast)
* [publishReplay](_helpers_websocket_.websocket.md#publishreplay)
* [race](_helpers_websocket_.websocket.md#race)
* [reduce](_helpers_websocket_.websocket.md#reduce)
* [repeat](_helpers_websocket_.websocket.md#repeat)
* [repeatWhen](_helpers_websocket_.websocket.md#repeatwhen)
* [retry](_helpers_websocket_.websocket.md#retry)
* [retryWhen](_helpers_websocket_.websocket.md#retrywhen)
* [sample](_helpers_websocket_.websocket.md#sample)
* [sampleTime](_helpers_websocket_.websocket.md#sampletime)
* [scan](_helpers_websocket_.websocket.md#scan)
* [sequenceEqual](_helpers_websocket_.websocket.md#sequenceequal)
* [share](_helpers_websocket_.websocket.md#share)
* [shareReplay](_helpers_websocket_.websocket.md#sharereplay)
* [single](_helpers_websocket_.websocket.md#single)
* [skip](_helpers_websocket_.websocket.md#skip)
* [skipLast](_helpers_websocket_.websocket.md#skiplast)
* [skipUntil](_helpers_websocket_.websocket.md#skipuntil)
* [skipWhile](_helpers_websocket_.websocket.md#skipwhile)
* [startWith](_helpers_websocket_.websocket.md#startwith)
* [subscribeOn](_helpers_websocket_.websocket.md#subscribeon)
* [switch](_helpers_websocket_.websocket.md#switch)
* [switchMap](_helpers_websocket_.websocket.md#switchmap)
* [switchMapTo](_helpers_websocket_.websocket.md#switchmapto)
* [take](_helpers_websocket_.websocket.md#take)
* [takeLast](_helpers_websocket_.websocket.md#takelast)
* [takeUntil](_helpers_websocket_.websocket.md#takeuntil)
* [takeWhile](_helpers_websocket_.websocket.md#takewhile)
* [throttle](_helpers_websocket_.websocket.md#throttle)
* [throttleTime](_helpers_websocket_.websocket.md#throttletime)
* [throw](_helpers_websocket_.websocket.md#throw)
* [timeInterval](_helpers_websocket_.websocket.md#timeinterval)
* [timeout](_helpers_websocket_.websocket.md#timeout)
* [timeoutWith](_helpers_websocket_.websocket.md#timeoutwith)
* [timestamp](_helpers_websocket_.websocket.md#timestamp)
* [toArray](_helpers_websocket_.websocket.md#toarray)
* [toPromise](_helpers_websocket_.websocket.md#topromise)
* [window](_helpers_websocket_.websocket.md#window)
* [windowCount](_helpers_websocket_.websocket.md#windowcount)
* [windowTime](_helpers_websocket_.websocket.md#windowtime)
* [windowToggle](_helpers_websocket_.websocket.md#windowtoggle)
* [windowWhen](_helpers_websocket_.websocket.md#windowwhen)
* [withLatestFrom](_helpers_websocket_.websocket.md#withlatestfrom)
* [zip](_helpers_websocket_.websocket.md#zip)
* [zipAll](_helpers_websocket_.websocket.md#zipall)


### Methods

* [_subscribe](_helpers_websocket_.websocket.md#_subscribe)
* [_trySubscribe](_helpers_websocket_.websocket.md#_trysubscribe)
* [asObservable](_helpers_websocket_.websocket.md#asobservable)
* [complete](_helpers_websocket_.websocket.md#complete)
* [connect](_helpers_websocket_.websocket.md#connect)
* [error](_helpers_websocket_.websocket.md#error)
* [forEach](_helpers_websocket_.websocket.md#foreach)
* [lift](_helpers_websocket_.websocket.md#lift)
* [next](_helpers_websocket_.websocket.md#next)
* [onclose](_helpers_websocket_.websocket.md#onclose)
* [onerror](_helpers_websocket_.websocket.md#onerror)
* [onmessage](_helpers_websocket_.websocket.md#onmessage)
* [onopen](_helpers_websocket_.websocket.md#onopen)
* [subscribe](_helpers_websocket_.websocket.md#subscribe)
* [unsubscribe](_helpers_websocket_.websocket.md#unsubscribe)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WebSocket**(logger: *`Logger`*): [WebSocket](_helpers_websocket_.websocket.md)



*Overrides Subject.__constructor*

*Defined in [helpers/WebSocket.ts:6](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L6)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| logger | `Logger`   |  - |





**Returns:** [WebSocket](_helpers_websocket_.websocket.md)

---


## Properties
<a id="_isscalar"></a>

###  _isScalar

**●  _isScalar**:  *`boolean`* 

*Inherited from Observable._isScalar*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:19*





___

<a id="closed"></a>

###  closed

**●  closed**:  *`boolean`* 

*Inherited from Subject.closed*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:18*





___

<a id="haserror"></a>

###  hasError

**●  hasError**:  *`boolean`* 

*Inherited from Subject.hasError*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:20*





___

<a id="isstopped"></a>

###  isStopped

**●  isStopped**:  *`boolean`* 

*Inherited from Subject.isStopped*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:19*





___

<a id="logger"></a>

### «Private» logger

**●  logger**:  *`Logger`* 

*Defined in [helpers/WebSocket.ts:8](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L8)*





___

<a id="observers"></a>

###  observers

**●  observers**:  *`Observer`.<`T`>[]* 

*Inherited from Subject.observers*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:17*





___

<a id="operator"></a>

### «Protected» operator

**●  operator**:  *`Operator`.<`any`>,.<`T`>* 

*Inherited from Observable.operator*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:21*





___

<a id="socket"></a>

### «Private» socket

**●  socket**:  *`ws`* 

*Defined in [helpers/WebSocket.ts:6](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L6)*





___

<a id="source"></a>

### «Protected» source

**●  source**:  *`Observable`.<`any`>* 

*Inherited from Observable.source*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:20*





___

<a id="thrownerror"></a>

###  thrownError

**●  thrownError**:  *`any`* 

*Inherited from Subject.thrownError*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:21*





___

<a id="_catch"></a>

### «Static» _catch

**●  _catch**:  *`_catch`* 

*Inherited from Observable._catch*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/catch.d.ts:5*





___

<a id="_do"></a>

### «Static» _do

**●  _do**:  *`_do`* 

*Inherited from Observable._do*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/do.d.ts:5*





___

<a id="_finally"></a>

### «Static» _finally

**●  _finally**:  *`_finally`* 

*Inherited from Observable._finally*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/finally.d.ts:5*





___

<a id="_switch"></a>

### «Static» _switch

**●  _switch**:  *`_switch`* 

*Inherited from Observable._switch*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/switch.d.ts:5*





___

<a id="audit"></a>

### «Static» audit

**●  audit**:  *`audit`* 

*Inherited from Observable.audit*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/audit.d.ts:4*





___

<a id="audittime"></a>

### «Static» auditTime

**●  auditTime**:  *`auditTime`* 

*Inherited from Observable.auditTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/auditTime.d.ts:4*





___

<a id="buffer"></a>

### «Static» buffer

**●  buffer**:  *`buffer`* 

*Inherited from Observable.buffer*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/buffer.d.ts:4*





___

<a id="buffercount"></a>

### «Static» bufferCount

**●  bufferCount**:  *`bufferCount`* 

*Inherited from Observable.bufferCount*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/bufferCount.d.ts:4*





___

<a id="buffertime"></a>

### «Static» bufferTime

**●  bufferTime**:  *`bufferTime`* 

*Inherited from Observable.bufferTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/bufferTime.d.ts:4*





___

<a id="buffertoggle"></a>

### «Static» bufferToggle

**●  bufferToggle**:  *`bufferToggle`* 

*Inherited from Observable.bufferToggle*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/bufferToggle.d.ts:4*





___

<a id="bufferwhen"></a>

### «Static» bufferWhen

**●  bufferWhen**:  *`bufferWhen`* 

*Inherited from Observable.bufferWhen*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/bufferWhen.d.ts:4*





___

<a id="catch"></a>

### «Static» catch

**●  catch**:  *`_catch`* 

*Inherited from Observable.catch*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/catch.d.ts:4*





___

<a id="combineall"></a>

### «Static» combineAll

**●  combineAll**:  *`combineAll`* 

*Inherited from Observable.combineAll*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/combineAll.d.ts:4*





___

<a id="combinelatest"></a>

### «Static» combineLatest

**●  combineLatest**:  *`combineLatest`* 

*Inherited from Observable.combineLatest*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/combineLatest.d.ts:4*





___

<a id="concat"></a>

### «Static» concat

**●  concat**:  *`concat`* 

*Inherited from Observable.concat*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/concat.d.ts:4*





___

<a id="concatall"></a>

### «Static» concatAll

**●  concatAll**:  *`concatAll`* 

*Inherited from Observable.concatAll*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/concatAll.d.ts:4*





___

<a id="concatmap"></a>

### «Static» concatMap

**●  concatMap**:  *`concatMap`* 

*Inherited from Observable.concatMap*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/concatMap.d.ts:4*





___

<a id="concatmapto"></a>

### «Static» concatMapTo

**●  concatMapTo**:  *`concatMapTo`* 

*Inherited from Observable.concatMapTo*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/concatMapTo.d.ts:4*





___

<a id="count"></a>

### «Static» count

**●  count**:  *`count`* 

*Inherited from Observable.count*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/count.d.ts:4*





___

<a id="create"></a>

### «Static» create

**●  create**:  *`Function`* 

*Inherited from Subject.create*

*Overrides Observable.create*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:23*





___

<a id="debounce"></a>

### «Static» debounce

**●  debounce**:  *`debounce`* 

*Inherited from Observable.debounce*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/debounce.d.ts:4*





___

<a id="debouncetime"></a>

### «Static» debounceTime

**●  debounceTime**:  *`debounceTime`* 

*Inherited from Observable.debounceTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/debounceTime.d.ts:4*





___

<a id="defaultifempty"></a>

### «Static» defaultIfEmpty

**●  defaultIfEmpty**:  *`defaultIfEmpty`* 

*Inherited from Observable.defaultIfEmpty*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/defaultIfEmpty.d.ts:4*





___

<a id="delay"></a>

### «Static» delay

**●  delay**:  *`delay`* 

*Inherited from Observable.delay*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/delay.d.ts:4*





___

<a id="delaywhen"></a>

### «Static» delayWhen

**●  delayWhen**:  *`delayWhen`* 

*Inherited from Observable.delayWhen*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/delayWhen.d.ts:4*





___

<a id="dematerialize"></a>

### «Static» dematerialize

**●  dematerialize**:  *`dematerialize`* 

*Inherited from Observable.dematerialize*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/dematerialize.d.ts:4*





___

<a id="distinct"></a>

### «Static» distinct

**●  distinct**:  *`distinct`* 

*Inherited from Observable.distinct*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/distinct.d.ts:4*





___

<a id="distinctuntilchanged"></a>

### «Static» distinctUntilChanged

**●  distinctUntilChanged**:  *`distinctUntilChanged`* 

*Inherited from Observable.distinctUntilChanged*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/distinctUntilChanged.d.ts:4*





___

<a id="distinctuntilkeychanged"></a>

### «Static» distinctUntilKeyChanged

**●  distinctUntilKeyChanged**:  *`distinctUntilKeyChanged`* 

*Inherited from Observable.distinctUntilKeyChanged*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/distinctUntilKeyChanged.d.ts:4*





___

<a id="do"></a>

### «Static» do

**●  do**:  *`_do`* 

*Inherited from Observable.do*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/do.d.ts:4*





___

<a id="elementat"></a>

### «Static» elementAt

**●  elementAt**:  *`elementAt`* 

*Inherited from Observable.elementAt*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/elementAt.d.ts:4*





___

<a id="every"></a>

### «Static» every

**●  every**:  *`every`* 

*Inherited from Observable.every*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/every.d.ts:4*





___

<a id="exhaust"></a>

### «Static» exhaust

**●  exhaust**:  *`exhaust`* 

*Inherited from Observable.exhaust*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/exhaust.d.ts:4*





___

<a id="exhaustmap"></a>

### «Static» exhaustMap

**●  exhaustMap**:  *`exhaustMap`* 

*Inherited from Observable.exhaustMap*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/exhaustMap.d.ts:4*





___

<a id="expand"></a>

### «Static» expand

**●  expand**:  *`expand`* 

*Inherited from Observable.expand*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/expand.d.ts:4*





___

<a id="filter"></a>

### «Static» filter

**●  filter**:  *`filter`* 

*Inherited from Observable.filter*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/filter.d.ts:4*





___

<a id="finally"></a>

### «Static» finally

**●  finally**:  *`_finally`* 

*Inherited from Observable.finally*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/finally.d.ts:4*





___

<a id="find"></a>

### «Static» find

**●  find**:  *`find`* 

*Inherited from Observable.find*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/find.d.ts:4*





___

<a id="findindex"></a>

### «Static» findIndex

**●  findIndex**:  *`findIndex`* 

*Inherited from Observable.findIndex*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/findIndex.d.ts:4*





___

<a id="first"></a>

### «Static» first

**●  first**:  *`first`* 

*Inherited from Observable.first*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/first.d.ts:4*





___

<a id="flatmap"></a>

### «Static» flatMap

**●  flatMap**:  *`mergeMap`* 

*Inherited from Observable.flatMap*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeMap.d.ts:4*





___

<a id="flatmapto"></a>

### «Static» flatMapTo

**●  flatMapTo**:  *`mergeMapTo`* 

*Inherited from Observable.flatMapTo*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeMapTo.d.ts:4*





___

<a id="groupby"></a>

### «Static» groupBy

**●  groupBy**:  *`groupBy`* 

*Inherited from Observable.groupBy*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/groupBy.d.ts:4*





___

<a id="if"></a>

### «Static» if

**●  if**:  *`create`* 

*Inherited from Observable.if*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:60*





___

<a id="ignoreelements"></a>

### «Static» ignoreElements

**●  ignoreElements**:  *`ignoreElements`* 

*Inherited from Observable.ignoreElements*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/ignoreElements.d.ts:4*





___

<a id="isempty"></a>

### «Static» isEmpty

**●  isEmpty**:  *`isEmpty`* 

*Inherited from Observable.isEmpty*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/isEmpty.d.ts:4*





___

<a id="last"></a>

### «Static» last

**●  last**:  *`last`* 

*Inherited from Observable.last*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/last.d.ts:4*





___

<a id="let"></a>

### «Static» let

**●  let**:  *`letProto`* 

*Inherited from Observable.let*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/let.d.ts:4*





___

<a id="letbind"></a>

### «Static» letBind

**●  letBind**:  *`letProto`* 

*Inherited from Observable.letBind*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/let.d.ts:5*





___

<a id="map"></a>

### «Static» map

**●  map**:  *`map`* 

*Inherited from Observable.map*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/map.d.ts:4*





___

<a id="mapto"></a>

### «Static» mapTo

**●  mapTo**:  *`mapTo`* 

*Inherited from Observable.mapTo*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mapTo.d.ts:4*





___

<a id="materialize"></a>

### «Static» materialize

**●  materialize**:  *`materialize`* 

*Inherited from Observable.materialize*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/materialize.d.ts:4*





___

<a id="max"></a>

### «Static» max

**●  max**:  *`max`* 

*Inherited from Observable.max*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/max.d.ts:4*





___

<a id="merge"></a>

### «Static» merge

**●  merge**:  *`merge`* 

*Inherited from Observable.merge*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/merge.d.ts:4*





___

<a id="mergeall"></a>

### «Static» mergeAll

**●  mergeAll**:  *`mergeAll`* 

*Inherited from Observable.mergeAll*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeAll.d.ts:4*





___

<a id="mergemap"></a>

### «Static» mergeMap

**●  mergeMap**:  *`mergeMap`* 

*Inherited from Observable.mergeMap*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeMap.d.ts:5*





___

<a id="mergemapto"></a>

### «Static» mergeMapTo

**●  mergeMapTo**:  *`mergeMapTo`* 

*Inherited from Observable.mergeMapTo*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeMapTo.d.ts:5*





___

<a id="mergescan"></a>

### «Static» mergeScan

**●  mergeScan**:  *`mergeScan`* 

*Inherited from Observable.mergeScan*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/mergeScan.d.ts:4*





___

<a id="min"></a>

### «Static» min

**●  min**:  *`min`* 

*Inherited from Observable.min*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/min.d.ts:4*





___

<a id="multicast"></a>

### «Static» multicast

**●  multicast**:  *`multicast`* 

*Inherited from Observable.multicast*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/multicast.d.ts:4*





___

<a id="observeon"></a>

### «Static» observeOn

**●  observeOn**:  *`observeOn`* 

*Inherited from Observable.observeOn*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/observeOn.d.ts:4*





___

<a id="onerrorresumenext"></a>

### «Static» onErrorResumeNext

**●  onErrorResumeNext**:  *`onErrorResumeNext`* 

*Inherited from Observable.onErrorResumeNext*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/onErrorResumeNext.d.ts:4*





___

<a id="pairwise"></a>

### «Static» pairwise

**●  pairwise**:  *`pairwise`* 

*Inherited from Observable.pairwise*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/pairwise.d.ts:4*





___

<a id="partition"></a>

### «Static» partition

**●  partition**:  *`partition`* 

*Inherited from Observable.partition*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/partition.d.ts:4*





___

<a id="pluck"></a>

### «Static» pluck

**●  pluck**:  *`pluck`* 

*Inherited from Observable.pluck*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/pluck.d.ts:4*





___

<a id="publish"></a>

### «Static» publish

**●  publish**:  *`publish`* 

*Inherited from Observable.publish*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/publish.d.ts:4*





___

<a id="publishbehavior"></a>

### «Static» publishBehavior

**●  publishBehavior**:  *`publishBehavior`* 

*Inherited from Observable.publishBehavior*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/publishBehavior.d.ts:4*





___

<a id="publishlast"></a>

### «Static» publishLast

**●  publishLast**:  *`publishLast`* 

*Inherited from Observable.publishLast*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/publishLast.d.ts:4*





___

<a id="publishreplay"></a>

### «Static» publishReplay

**●  publishReplay**:  *`publishReplay`* 

*Inherited from Observable.publishReplay*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/publishReplay.d.ts:4*





___

<a id="race"></a>

### «Static» race

**●  race**:  *`race`* 

*Inherited from Observable.race*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/race.d.ts:4*





___

<a id="reduce"></a>

### «Static» reduce

**●  reduce**:  *`reduce`* 

*Inherited from Observable.reduce*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/reduce.d.ts:4*





___

<a id="repeat"></a>

### «Static» repeat

**●  repeat**:  *`repeat`* 

*Inherited from Observable.repeat*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/repeat.d.ts:4*





___

<a id="repeatwhen"></a>

### «Static» repeatWhen

**●  repeatWhen**:  *`repeatWhen`* 

*Inherited from Observable.repeatWhen*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/repeatWhen.d.ts:4*





___

<a id="retry"></a>

### «Static» retry

**●  retry**:  *`retry`* 

*Inherited from Observable.retry*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/retry.d.ts:4*





___

<a id="retrywhen"></a>

### «Static» retryWhen

**●  retryWhen**:  *`retryWhen`* 

*Inherited from Observable.retryWhen*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/retryWhen.d.ts:4*





___

<a id="sample"></a>

### «Static» sample

**●  sample**:  *`sample`* 

*Inherited from Observable.sample*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/sample.d.ts:4*





___

<a id="sampletime"></a>

### «Static» sampleTime

**●  sampleTime**:  *`sampleTime`* 

*Inherited from Observable.sampleTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/sampleTime.d.ts:4*





___

<a id="scan"></a>

### «Static» scan

**●  scan**:  *`scan`* 

*Inherited from Observable.scan*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/scan.d.ts:4*





___

<a id="sequenceequal"></a>

### «Static» sequenceEqual

**●  sequenceEqual**:  *`sequenceEqual`* 

*Inherited from Observable.sequenceEqual*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/sequenceEqual.d.ts:4*





___

<a id="share"></a>

### «Static» share

**●  share**:  *`share`* 

*Inherited from Observable.share*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/share.d.ts:4*





___

<a id="sharereplay"></a>

### «Static» shareReplay

**●  shareReplay**:  *`shareReplay`* 

*Inherited from Observable.shareReplay*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/shareReplay.d.ts:4*





___

<a id="single"></a>

### «Static» single

**●  single**:  *`single`* 

*Inherited from Observable.single*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/single.d.ts:4*





___

<a id="skip"></a>

### «Static» skip

**●  skip**:  *`skip`* 

*Inherited from Observable.skip*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/skip.d.ts:4*





___

<a id="skiplast"></a>

### «Static» skipLast

**●  skipLast**:  *`skipLast`* 

*Inherited from Observable.skipLast*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/skipLast.d.ts:4*





___

<a id="skipuntil"></a>

### «Static» skipUntil

**●  skipUntil**:  *`skipUntil`* 

*Inherited from Observable.skipUntil*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/skipUntil.d.ts:4*





___

<a id="skipwhile"></a>

### «Static» skipWhile

**●  skipWhile**:  *`skipWhile`* 

*Inherited from Observable.skipWhile*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/skipWhile.d.ts:4*





___

<a id="startwith"></a>

### «Static» startWith

**●  startWith**:  *`startWith`* 

*Inherited from Observable.startWith*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/startWith.d.ts:4*





___

<a id="subscribeon"></a>

### «Static» subscribeOn

**●  subscribeOn**:  *`subscribeOn`* 

*Inherited from Observable.subscribeOn*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/subscribeOn.d.ts:4*





___

<a id="switch"></a>

### «Static» switch

**●  switch**:  *`_switch`* 

*Inherited from Observable.switch*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/switch.d.ts:4*





___

<a id="switchmap"></a>

### «Static» switchMap

**●  switchMap**:  *`switchMap`* 

*Inherited from Observable.switchMap*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/switchMap.d.ts:4*





___

<a id="switchmapto"></a>

### «Static» switchMapTo

**●  switchMapTo**:  *`switchMapTo`* 

*Inherited from Observable.switchMapTo*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/switchMapTo.d.ts:4*





___

<a id="take"></a>

### «Static» take

**●  take**:  *`take`* 

*Inherited from Observable.take*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/take.d.ts:4*





___

<a id="takelast"></a>

### «Static» takeLast

**●  takeLast**:  *`takeLast`* 

*Inherited from Observable.takeLast*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/takeLast.d.ts:4*





___

<a id="takeuntil"></a>

### «Static» takeUntil

**●  takeUntil**:  *`takeUntil`* 

*Inherited from Observable.takeUntil*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/takeUntil.d.ts:4*





___

<a id="takewhile"></a>

### «Static» takeWhile

**●  takeWhile**:  *`takeWhile`* 

*Inherited from Observable.takeWhile*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/takeWhile.d.ts:4*





___

<a id="throttle"></a>

### «Static» throttle

**●  throttle**:  *`throttle`* 

*Inherited from Observable.throttle*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/throttle.d.ts:4*





___

<a id="throttletime"></a>

### «Static» throttleTime

**●  throttleTime**:  *`throttleTime`* 

*Inherited from Observable.throttleTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/throttleTime.d.ts:4*





___

<a id="throw"></a>

### «Static» throw

**●  throw**:  *`create`* 

*Inherited from Observable.throw*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:61*





___

<a id="timeinterval"></a>

### «Static» timeInterval

**●  timeInterval**:  *`timeInterval`* 

*Inherited from Observable.timeInterval*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/timeInterval.d.ts:4*





___

<a id="timeout"></a>

### «Static» timeout

**●  timeout**:  *`timeout`* 

*Inherited from Observable.timeout*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/timeout.d.ts:4*





___

<a id="timeoutwith"></a>

### «Static» timeoutWith

**●  timeoutWith**:  *`timeoutWith`* 

*Inherited from Observable.timeoutWith*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/timeoutWith.d.ts:4*





___

<a id="timestamp"></a>

### «Static» timestamp

**●  timestamp**:  *`timestamp`* 

*Inherited from Observable.timestamp*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/timestamp.d.ts:4*





___

<a id="toarray"></a>

### «Static» toArray

**●  toArray**:  *`toArray`* 

*Inherited from Observable.toArray*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/toArray.d.ts:4*





___

<a id="topromise"></a>

### «Static» toPromise

**●  toPromise**:  *`toPromise`* 

*Inherited from Observable.toPromise*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/toPromise.d.ts:4*





___

<a id="window"></a>

### «Static» window

**●  window**:  *`window`* 

*Inherited from Observable.window*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/window.d.ts:4*





___

<a id="windowcount"></a>

### «Static» windowCount

**●  windowCount**:  *`windowCount`* 

*Inherited from Observable.windowCount*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/windowCount.d.ts:4*





___

<a id="windowtime"></a>

### «Static» windowTime

**●  windowTime**:  *`windowTime`* 

*Inherited from Observable.windowTime*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/windowTime.d.ts:4*





___

<a id="windowtoggle"></a>

### «Static» windowToggle

**●  windowToggle**:  *`windowToggle`* 

*Inherited from Observable.windowToggle*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/windowToggle.d.ts:4*





___

<a id="windowwhen"></a>

### «Static» windowWhen

**●  windowWhen**:  *`windowWhen`* 

*Inherited from Observable.windowWhen*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/windowWhen.d.ts:4*





___

<a id="withlatestfrom"></a>

### «Static» withLatestFrom

**●  withLatestFrom**:  *`withLatestFrom`* 

*Inherited from Observable.withLatestFrom*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/withLatestFrom.d.ts:4*





___

<a id="zip"></a>

### «Static» zip

**●  zip**:  *`zipProto`* 

*Inherited from Observable.zip*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/zip.d.ts:4*





___

<a id="zipall"></a>

### «Static» zipAll

**●  zipAll**:  *`zipAll`* 

*Inherited from Observable.zipAll*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/add/operator/zipAll.d.ts:4*





___


## Methods
<a id="_subscribe"></a>

### «Protected» _subscribe

► **_subscribe**(subscriber: *`Subscriber`.<`T`>*): `Subscription`




*Inherited from Subject._subscribe*

*Overrides Observable._subscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:30*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subscriber | `Subscriber`.<`T`>   |  - |





**Returns:** `Subscription`





___

<a id="_trysubscribe"></a>

### «Protected» _trySubscribe

► **_trySubscribe**(subscriber: *`Subscriber`.<`T`>*): `TeardownLogic`




*Inherited from Subject._trySubscribe*

*Overrides Observable._trySubscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:29*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subscriber | `Subscriber`.<`T`>   |  - |





**Returns:** `TeardownLogic`





___

<a id="asobservable"></a>

###  asObservable

► **asObservable**(): `Observable`.<`T`>




*Inherited from Subject.asObservable*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:31*





**Returns:** `Observable`.<`T`>





___

<a id="complete"></a>

###  complete

► **complete**(): `void`




*Inherited from Subject.complete*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:27*





**Returns:** `void`





___

<a id="connect"></a>

###  connect

► **connect**(url: *`string`*): `void`




*Defined in [helpers/WebSocket.ts:45](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L45)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** `void`





___

<a id="error"></a>

###  error

► **error**(err: *`any`*): `void`




*Inherited from Subject.error*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:26*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| err | `any`   |  - |





**Returns:** `void`





___

<a id="foreach"></a>

###  forEach

► **forEach**(next: *function*, PromiseCtor?: *`undefined`⎮`PromiseConstructor`*): `Promise`.<`void`>




*Inherited from Observable.forEach*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:58*


**method**: forEach

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| next | function   |  a handler for each value emitted by the observable |
| PromiseCtor | `undefined`⎮`PromiseConstructor`   |  - |





**Returns:** `Promise`.<`void`>
a promise that either resolves on observable completion or
 rejects with the handled error






___

<a id="lift"></a>

###  lift

► **lift**R(operator: *`Operator`.<`T`>,.<`R`>*): `Observable`.<`R`>




*Inherited from Subject.lift*

*Overrides Observable.lift*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:24*



**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| operator | `Operator`.<`T`>,.<`R`>   |  - |





**Returns:** `Observable`.<`R`>





___

<a id="next"></a>

###  next

► **next**(value?: *[T]()*): `void`




*Inherited from Subject.next*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:25*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [T]()   |  - |





**Returns:** `void`





___

<a id="onclose"></a>

### «Private» onclose

► **onclose**(e: *`any`*): `void`




*Defined in [helpers/WebSocket.ts:12](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `any`   |  - |





**Returns:** `void`





___

<a id="onerror"></a>

### «Private» onerror

► **onerror**(e: *`any`*): `void`




*Defined in [helpers/WebSocket.ts:24](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L24)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `any`   |  - |





**Returns:** `void`





___

<a id="onmessage"></a>

### «Private» onmessage

► **onmessage**(event: *`any`*): `void`




*Defined in [helpers/WebSocket.ts:36](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L36)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `any`   |  - |





**Returns:** `void`





___

<a id="onopen"></a>

### «Private» onopen

► **onopen**(): `void`




*Defined in [helpers/WebSocket.ts:41](https://github.com/broidHQ/broid-api-js-sdk/blob/5f1b060/src/helpers/WebSocket.ts#L41)*





**Returns:** `void`





___

<a id="subscribe"></a>

###  subscribe

► **subscribe**(): `Subscription`

► **subscribe**(observer: *`PartialObserver`.<`T`>*): `Subscription`

► **subscribe**(next?: *`undefined`⎮function*, error?: *`undefined`⎮function*, complete?: *`undefined`⎮function*): `Subscription`




*Inherited from Observable.subscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:47*





**Returns:** `Subscription`




*Inherited from Observable.subscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:48*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| observer | `PartialObserver`.<`T`>   |  - |





**Returns:** `Subscription`




*Inherited from Observable.subscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Observable.d.ts:49*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| next | `undefined`⎮function   |  - |
| error | `undefined`⎮function   |  - |
| complete | `undefined`⎮function   |  - |





**Returns:** `Subscription`





___

<a id="unsubscribe"></a>

###  unsubscribe

► **unsubscribe**(): `void`




*Inherited from Subject.unsubscribe*

*Defined in /Users/dustinblackman/Git/broid-api-sdk-js/node_modules/rxjs/Subject.d.ts:28*





**Returns:** `void`





___


