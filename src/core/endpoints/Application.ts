import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';

import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';

export class Application {
  constructor(private http: Http,
              private logger: Logger
  ) {}

  public create(application: interfaces.Application): Promise<interfaces.Application> {
    this.logger.debug('Create an application.', application);
    return this.http.makeRequest('POST', `applications`, application);
  }

  public delete(id: string): Promise<null> {
    this.logger.debug(`Delete the application ${id}`);
    return this.http.makeRequest('DELETE', `applications/${id}`, null);
  }

  public disable(id: string): Promise<null> {
    this.logger.debug(`Disable the application ${id}`);
    return this.http.makeRequest('DELETE', `applications/${id}/disable`, null);
  }

  public info(id: string): Promise<interfaces.Application> {
    this.logger.debug(`Get application ${id}`);
    return this.http.makeRequest('GET', `applications/${id}`, null);
  }

  public integrations(id: string): Promise<interfaces.Integration[]> {
    this.logger.debug(`Get integrations for application ${id}`);
    return this.http.makeRequest('GET', `applications/${id}/integrations`, null);
  }

  public update(
    id: string,
    application: interfaces.Application
  ): Promise<null> {
    this.logger.debug(`Update the application ${id}`, application);
    return this.http.makeRequest('PUT', `applications/${id}`, application);
  }

  public setWebHook(
    id: string,
    webhook: interfaces.ApplicationWebHookURL
  ): Promise<null> {
    this.logger.debug(`Set the WebHook for application ${id}`, webhook);
    return this.http.makeRequest('PUT', `applications/${id}`, webhook);
  }

  public createKey(application_id: string): Promise<interfaces.ApplicationKey> {
    this.logger.debug(`Create the Key for application ${application_id}`);
    return this.http.makeRequest('PUT', `keys/applications/`, {
      resource_id: application_id,
      state: 'enable'
    } as any);
  }

  public deleteKey(id: string): Promise<null> {
    this.logger.debug(`Delete the Application key ${id}`);
    return this.http.makeRequest('DELETE', `keys/applications/${id}`, null);
  }
}
