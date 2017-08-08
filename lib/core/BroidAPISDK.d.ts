/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { Application, Integration, Realtime, User } from './endpoints';
export declare class BroidAPISDK {
    private credentials;
    private hostUrl;
    private apiVersion;
    private logLevel;
    private http;
    private logger;
    private rtm;
    users: User;
    applications: Application;
    integrations: Integration;
    constructor(credentials: any, hostUrl?: string, apiVersion?: string, logLevel?: string);
    realtime(): Promise<Realtime<any>>;
    sendMessage(message: any): Promise<any>;
}
