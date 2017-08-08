/// <reference types="bluebird" />
import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
export declare class User {
    private http;
    private logger;
    constructor(http: Http, logger: Logger);
    me(): Promise<interfaces.User>;
    update(id: number, user: interfaces.User): Promise<interfaces.User>;
}
