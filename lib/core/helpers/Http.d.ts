/// <reference types="request-promise" />
import { Logger } from '@broid/utils';
import * as request from 'request-promise';
export declare class Http {
    private credentials;
    private hostUrl;
    private apiVersion;
    private logger;
    constructor(credentials: any, hostUrl: string, apiVersion: string, logger: Logger);
    private _autoParse(body, response);
    private _generateHeaders();
    makeRequest(method: string, url: string, body_: ObjectConstructor | null): request.RequestPromise;
}
