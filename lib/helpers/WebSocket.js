"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws = require("ws");
const rxjs_1 = require("rxjs");
class WebSocket extends rxjs_1.Subject {
    constructor(logger) {
        super();
        this.logger = logger;
    }
    onclose(e) {
        this.logger.warning('Close event is received', e);
        switch (e) {
            case 1000:
                this.complete();
                break;
            default:
                this.error({ reconnect: true });
                break;
        }
    }
    onerror(e) {
        this.logger.warning('Error event is received', e);
        switch (e.code) {
            case 'ECONNREFUSED':
                this.error({ reconnect: true });
                break;
            default:
                this.error(e);
                break;
        }
    }
    onmessage(event) {
        this.logger.debug('Event is received', event);
        this.next(event);
    }
    onopen() {
        this.logger.debug('Socket is open.');
    }
    connect(url) {
        this.socket = new ws(url);
        this.socket.on('close', this.onclose.bind(this));
        this.socket.on('error', this.onerror.bind(this));
        this.socket.on('message', this.onmessage.bind(this));
        this.socket.on('open', this.onopen.bind(this));
    }
}
exports.WebSocket = WebSocket;
