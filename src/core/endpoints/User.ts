import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';

import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';

export class User {
  constructor(private http: Http,
              private logger: Logger
  ) {}

  public me(): Promise<interfaces.User> {
    return this.http.makeRequest('GET', `users/me`, null);
  }

  public update(id: number, user: interfaces.User): Promise<null> {
    this.logger.debug(`Update the user ${id}`, user);
    return this.http.makeRequest('PUT', `users/${id}`, user);
  }
}
