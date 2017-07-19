"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonBigint = require("json-bigint");
const ws = require("ws");
const rxjs_1 = require("rxjs");
const JSONstrict = jsonBigint({ 'strict': true });
class WebSocketService {
    constructor(url, logger) {
        this.url = url;
        this.logger = logger;
    }
    createObservableSocket() {
        this.ws = new ws(this.url);
        return new rxjs_1.Observable((observer) => {
            this.ws.on('open', () => observer.next({ event: 'open', message: null }));
            this.ws.on('message', (event) => observer.next({ event: 'message', message: event }));
            this.ws.on('error', (e) => observer.error(e));
            this.ws.on('close', (event) => {
                observer.next({ event: 'close', message: event });
                observer.complete();
            });
            return () => this.ws.close();
        })
            .map((data) => {
            this.logger.debug(`Event received ${data.event}`, data.message);
            if (data.message) {
                return JSONstrict.parse(data.message);
            }
            ;
            return rxjs_1.Observable.empty();
        });
    }
}
exports.WebSocketService = WebSocketService;
