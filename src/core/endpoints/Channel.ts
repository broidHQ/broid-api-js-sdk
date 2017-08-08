import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';

import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';

export class Channel {
  constructor(private http: Http,
              private logger: Logger
  ) {}

  public create(channel: interfaces.Channel): Promise<interfaces.Channel> {
    this.logger.debug('Create the channel', channel);
    return this.http.makeRequest('POST', 'channels', channel);
  }

  public delete(id: number): Promise<null> {
    this.logger.debug(`Delete the channel ${id}`);
    return this.http.makeRequest('DELETE', `channels/${id}`, null);
  }

  public disable(id: number): Promise<null> {
    this.logger.debug(`Disable the channel ${id}`);
    return this.http.makeRequest('DELETE', `channels/${id}/disable`, null);
  }

  public update(id: number, channel: interfaces.Channel): Promise<null> {
    this.logger.debug(`Update the channel ${id}`, channel);
    return this.http.makeRequest('PUT', `channels/${id}`, channel);
  }
}
