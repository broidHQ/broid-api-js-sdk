/// <reference types="bluebird" />
import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import { Subject, Observable } from 'rxjs';
import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
export declare class Realtime<T> extends Subject<T> {
    private http;
    private logger;
    private reconnectInterval;
    private reconnectAttempts;
    private reconnectionObservable;
    private reconnectionSubscriber;
    private websocket;
    connectionStatus: Observable<boolean>;
    constructor(http: Http, logger: Logger, reconnectInterval?: number, reconnectAttempts?: number);
    private initWebsocket();
    private getRealtimeURL();
    private reconnect();
    connect(): Promise<boolean>;
    sendMessage(message: interfaces.SendMessage): Promise<null>;
}
