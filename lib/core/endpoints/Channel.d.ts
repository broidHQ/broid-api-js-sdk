/// <reference types="bluebird" />
import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
export declare class Channel {
    private http;
    private logger;
    constructor(http: Http, logger: Logger);
    create(channel: interfaces.Channel): Promise<interfaces.Channel>;
    delete(id: number): Promise<null>;
    disable(id: number): Promise<null>;
    update(id: number, channel: interfaces.Channel): Promise<null>;
}
