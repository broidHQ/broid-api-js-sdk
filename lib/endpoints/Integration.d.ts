/// <reference types="bluebird" />
import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
export declare class Integration {
    private http;
    private logger;
    constructor(http: Http, logger: Logger);
    create(integration: interfaces.Integration): Promise<interfaces.Integration>;
    delete(id: number): Promise<null>;
    disable(id: number): Promise<null>;
    update(id: number, integration: interfaces.Integration): Promise<interfaces.Integration>;
}
