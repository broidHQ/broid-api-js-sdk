/// <reference types="bluebird" />
import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
export declare class Application {
    private http;
    private logger;
    constructor(http: Http, logger: Logger);
    create(application: interfaces.Application): Promise<interfaces.Application>;
    delete(id: string): Promise<null>;
    disable(id: string): Promise<null>;
    info(id: string): Promise<interfaces.Application>;
    integrations(id: string): Promise<interfaces.Integration[]>;
    update(id: string, application: interfaces.Application): Promise<interfaces.ApplicationWebHookURL>;
    setWebHook(id: string, webhook: interfaces.ApplicationWebHookURL): Promise<interfaces.ApplicationWebHookURL>;
}
