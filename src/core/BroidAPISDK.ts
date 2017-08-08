import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';

import { Http } from './helpers/Http';
import { Application, Integration, Realtime, User } from './endpoints';

import * as interfaces from './interfaces';

export class BroidAPISDK {
  private http: Http;
  private logger: Logger;
  private rtm: Realtime<any>;

  public users: User;
  public applications: Application;
  public integrations: Integration;

  constructor(private credentials: any,
              private hostUrl: string = 'https://api.broid.ai',
              private apiVersion: string = '1',
              private logLevel: string = 'info') {
    this.credentials = credentials;
    this.apiVersion = apiVersion;
    this.hostUrl = hostUrl;
    this.logLevel = logLevel;
    this.logger = new Logger('broid-sdk', this.logLevel);


    this.http = new Http(this.credentials, this.hostUrl, this.apiVersion, this.logger);
    this.rtm = new Realtime(this.http, this.logger);

    this.users = new User(this.http, this.logger);
    this.applications = new Application(this.http, this.logger);
    this.integrations = new Integration(this.http, this.logger);
  }

  public realtime(): Promise<Realtime<any>> {
    return this.rtm.connect()
      .then(() => this.rtm);
  }

  public sendMessage(message: any): Promise<any> {
    return this.rtm.sendMessage({ message: message } as interfaces.SendMessage);
  }
}
