"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonBigint = require("json-bigint");
const ws = require("ws");
const rxjs_1 = require("rxjs");
const JSONstrict = jsonBigint({ 'strict': true });
class WebSocket extends rxjs_1.Subject {
    constructor(url, logger, reconnectInterval = 5000, reconnectAttempts = 10) {
        super();
        this.url = url;
        this.logger = logger;
        this.reconnectInterval = reconnectInterval;
        this.reconnectAttempts = reconnectAttempts;
        this.connectionStatus = new rxjs_1.Observable((observer) => {
            this.connectionObserver = observer;
        }).share().distinctUntilChanged();
        this.connect();
        this.connectionStatus.subscribe((isConnected) => {
            if (!this.reconnectionObservable && typeof (isConnected) == "boolean" && !isConnected) {
                this.reconnect();
            }
        });
    }
    connect() {
        this.socket = new ws(this.url);
        this.socket.on('close', (e) => {
            this.logger.warn('Close event is received', e);
            switch (e) {
                case 1000:
                    this.complete();
                    break;
                default:
                    this.reconnect();
                    break;
            }
        });
        this.socket.on('error', (e) => {
            this.logger.warn('Error event is received', e);
            if (!this.socket) {
                this.reconnect();
            }
        });
        this.socket.on('open', () => {
            this.logger.debug('Socket is open.');
            this.connectionObserver.next(true);
        });
        this.socket.on('message', (event) => {
            this.logger.debug('Event is received', event);
            if (event) {
                let message = JSONstrict.parse(event);
                return this.next(message);
            }
            ;
        });
    }
    reconnect() {
        this.reconnectionObservable = rxjs_1.Observable.interval(this.reconnectInterval)
            .takeWhile((_, index) => {
            return index < this.reconnectAttempts && !this.socket;
        });
        this.reconnectionObservable.subscribe(() => this.connect(), () => {
        }, () => {
            this.logger.debug('Reconnection attempts are failed');
            this.reconnectionObservable = null;
            if (!this.socket) {
                this.logger.debug('Completing the subject.');
                this.complete();
                this.connectionObserver.complete();
            }
        });
    }
}
exports.WebSocket = WebSocket;
