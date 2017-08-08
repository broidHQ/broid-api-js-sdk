import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';

import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';

export class Integration {
  constructor(private http: Http,
              private logger: Logger
  ) {}

  public create(integration: interfaces.Integration): Promise<interfaces.Integration> {
    this.logger.debug('Create the integration', integration);
    return this.http.makeRequest('POST', 'integrations', integration);
  }

  public delete(id: number): Promise<null> {
    this.logger.debug(`Delete the integration ${id}`);
    return this.http.makeRequest('DELETE', `integrations/${id}`, null);
  }

  public disable(id: number): Promise<null> {
    this.logger.debug(`Disable the integration ${id}`);
    return this.http.makeRequest('DELETE', `integrations/${id}/disable`, null);
  }

  public update(id: number, integration: interfaces.Integration): Promise<null> {
    this.logger.debug(`Update the integration ${id}`, integration);
    return this.http.makeRequest('PUT', `integrations/${id}`, integration);
  }
}
