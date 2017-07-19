import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as jwt from 'jsonwebtoken';
import * as request from 'request-promise';

import { WebSocket } from './WebSocket';
import * as interfaces from './interfaces';


const EXP_TTL = (60 * 60);

export class BroidAPISDK {
  private apiVersion: string;
  private credentials: any;
  private hostUrl: string;
  private logLevel: string;
  private logger: Logger;

  // credentials: {
  //  appID: the APP ID
  //  secret: the APP Secret
  // }
  constructor(credentials: any,
              hostUrl: string = 'https://api-dev.broid.ai',
              apiVersion: string = '1',
              logLevel: string = 'info') {
    this.credentials = credentials;
    this.apiVersion = apiVersion;
    this.hostUrl = hostUrl;
    this.logLevel = logLevel;
    this.logger = new Logger('broid-sdk', this.logLevel);
  }

  private _makeRequest(method: string, url: string, body: ObjectConstructor | null): request.RequestPromise {
    const params: request.OptionsWithUrl = {
      json: body || true,
      method,
      url: `${this.hostUrl}/${this.apiVersion}/${url}`,
      headers: this._generateHeaders(),
    };

    this.logger.debug(params);

    return request(params);
  }

  private _generateHeaders(): Object {
    const exp = Math.floor(Date.now()/1000) + EXP_TTL;
    const token = jwt.sign({ iss: this.credentials.appID, exp },
                           this.credentials.secret,
                           { algorithm: 'HS256' });
    return {
      'Authorization': `Bearer ${token}`,
      'api-version': this.apiVersion,
    };
  }

  public realtime(): Promise<WebSocket<any>> {
    return this.getUserRealtimeURL()
      .then((response: any) => new WebSocket(response.url, this.logger));
  }

  public deleteApplication(id: number): Promise<null> {
    return this._makeRequest('DELETE', `applications/${id}`, null);
  }

  public disableApplication(id: number): Promise<null> {
    return this._makeRequest('DELETE', `applications/${id}/disable`, null);
  }

  public getApplicationIntegrations(id: number): Promise<string[]> {
    return this._makeRequest('GET', `applications/${id}/integrations`, null);
  }

  // Split in 4 methods one for the User, one for the APP
  // public deleteAPIKey(id: number): Promise<null> {
  //   return this._makeRequest('DELETE', `apikeys/${id}`, null);
  // }
  //
  // public disableAPIKey(id: number): Promise<null> {
  //   return this._makeRequest('DELETE', `apikeys/${id}/disable`, null);
  // }

  // INTERNAL
  // public createTeam(name: string): Promise<interfaces.Team> {
  //   const body: any = {name};
  //   return this._makeRequest('POST', 'teams', body);
  // }
  //
  // public getTeam(id: number): Promise<interfaces.Team> {
  //   return this._makeRequest('POST', `teams/${id}`, null);
  // }
  //
  // public updateTeam(id: number, name: string): Promise<null> {
  //   const body: any = {name};
  //   return this._makeRequest('PUT', `teams/${id}`, body);
  // }

  // INTERNAL
  // public createUser(userObject: interfaces.User): Promise<interfaces.User> {
  //   return this._makeRequest('POST', 'users', userObject);
  // }
  //
  // public deleteUser(id: number): Promise<interfaces.User> {
  //   return this._makeRequest('DELETE', `users/${id}`, null);
  // }

  // Replace by me function
  // public getUser(id: number): Promise<interfaces.User> {
  //   return this._makeRequest('POST', `users/${id}`, null);
  // }

  public getUserApplications(id: number): Promise<string[]> {
    return this._makeRequest('GET', `users/${id}/applications`, null);
  }

  // public getUserAPIKeys(id: number): Promise<string[]> {
  //   return this._makeRequest('GET', `users/${id}/apikeys`, null);
  // }

  public getUserRealtimeURL(): Promise<string[]> {
    return this._makeRequest('GET', `realtime`, null);
  }

  public updateUser(userObject: interfaces.User): Promise<null> {
    return this._makeRequest('PUT', `users/${userObject.id}`, userObject);
  }

  public sendMessage(message: any): Promise<null> {
    return this._makeRequest('POST', `message`, { message: message } as interfaces.SendMessage);
  }
}
