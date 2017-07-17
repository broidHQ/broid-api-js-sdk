import * as Promise from 'bluebird';
import * as request from 'request-promise';

import * as interfaces from './interfaces';


export default class BroidAPISDK {
  private hostUrl: string;
  private apiVersion: string;

  constructor(hostUrl: string, apiVersion: string = 'v1') {
    this.hostUrl = hostUrl;
    this.apiVersion = apiVersion;
  }

  private _makeRequest(method: string, url: string, body: ObjectConstructor | null): request.RequestPromise {
    const params: request.OptionsWithUrl = {
      json: body || true,
      method,
      url: `${this.hostUrl}/${this.apiVersion}/${url}`,
    };

    return request(params);
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

  public deleteAPIKey(id: number): Promise<null> {
    return this._makeRequest('DELETE', `apikeys/${id}`, null);
  }

  public disableAPIKey(id: number): Promise<null> {
    return this._makeRequest('DELETE', `apikeys/${id}/disable`, null);
  }

  public createTeam(name: string): Promise<interfaces.Team> {
    const body: any = {name};
    return this._makeRequest('POST', 'teams', body);
  }

  public getTeam(id: number): Promise<interfaces.Team> {
    return this._makeRequest('POST', `teams/${id}`, null);
  }

  public updateTeam(id: number, name: string): Promise<null> {
    const body: any = {name};
    return this._makeRequest('PUT', `teams/${id}`, body);
  }

  public createUser(userObject: interfaces.User): Promise<interfaces.User> {
    return this._makeRequest('POST', 'users', userObject);
  }

  public deleteUser(id: number): Promise<interfaces.User> {
    return this._makeRequest('DELETE', `users/${id}`, null);
  }

  public getUser(id: number): Promise<interfaces.User> {
    return this._makeRequest('POST', `users/${id}`, null);
  }

  public getUserApplications(id: number): Promise<string[]> {
    return this._makeRequest('GET', `users/${id}/applications`, null);
  }

  public getUserAPIKeys(id: number): Promise<string[]> {
    return this._makeRequest('GET', `users/${id}/apikeys`, null);
  }

  public updateUser(userObject: interfaces.User): Promise<null> {
    return this._makeRequest('PUT', `users/${userObject.id}`, userObject);
  }
}
