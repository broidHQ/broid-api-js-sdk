"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const jsonBigint = require("json-bigint");
const rxjs_1 = require("rxjs");
const WebSocket_1 = require("../helpers/WebSocket");
const JSONstrict = jsonBigint({ 'strict': true });
class Realtime extends rxjs_1.Subject {
    constructor(http, logger, reconnectInterval = 5000, reconnectAttempts = 10) {
        super();
        this.http = http;
        this.logger = logger;
        this.reconnectInterval = reconnectInterval;
        this.reconnectAttempts = reconnectAttempts;
    }
    initWebsocket() {
        this.websocket = new WebSocket_1.WebSocket(this.logger);
        this.websocket.subscribe({
            next: (data) => {
                if (this.reconnectionSubscriber) {
                    this.reconnectionSubscriber.unsubscribe();
                    this.reconnectionSubscriber = null;
                    this.reconnectionObservable = null;
                }
                if (data) {
                    let message = JSONstrict.parse(data);
                    this.next(message);
                }
            },
            error: (e) => {
                if (e.reconnect) {
                    this.websocket = null;
                    this.reconnect();
                }
                else {
                    this.error(e);
                }
            },
            complete: () => this.complete(),
        });
        return Promise.resolve(true);
    }
    getRealtimeURL() {
        return this.http.makeRequest('GET', `realtime`, null);
    }
    reconnect() {
        this.reconnectionObservable = rxjs_1.Observable.interval(this.reconnectInterval)
            .takeWhile((_, index) => index < this.reconnectAttempts && !this.websocket);
        this.reconnectionSubscriber = this.reconnectionObservable.subscribe(() => this.connect(), () => {
        }, () => {
            if (!this.websocket) {
                this.logger.debug('Reconnection attempts are failed');
                this.complete();
            }
        });
    }
    connect() {
        return this.initWebsocket()
            .then(() => this.getRealtimeURL())
            .then((response) => response.url)
            .then((url) => {
            if (this.websocket) {
                return this.websocket.connect(url);
            }
            throw new Error('Websocket can\'t initialize correctly.');
        })
            .then(() => true);
    }
    sendMessage(message) {
        return this.http.makeRequest('POST', 'message', message);
    }
}
exports.Realtime = Realtime;
