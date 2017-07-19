import { Logger } from '@broid/utils';
import * as jsonBigint from 'json-bigint';
import * as jwt from 'jsonwebtoken';
import * as request from 'request-promise';

const EXP_TTL = (60 * 60);
const JSONstrict = jsonBigint({'strict': true});

export class Http {
  constructor(private credentials: any,
              private hostUrl: string = 'https://api-dev.broid.ai',
              private apiVersion: string = '1',
              private logger: Logger) {
  }

  private _autoParse(body, response) {
    // FIXME: The content big ID javascript JSON
    // Consider using the `content-type` library for a robust comparison.
    if (/application\/json/.test(response.headers['content-type'])) {
      return JSONstrict.parse(body);
    } else {
      return body;
    }
  }

  private _generateHeaders(): Object {
    const exp = Math.floor(Date.now()/1000) + EXP_TTL;
    const token = jwt.sign({ iss: this.credentials.secretID, exp },
                           this.credentials.secret,
                           { algorithm: 'HS256' });
    return {
      'Authorization': `Bearer ${token}`,
      'api-version': this.apiVersion,
    };
  }

  public makeRequest(method: string, url: string, body_: ObjectConstructor | null): request.RequestPromise {
    let headers = this._generateHeaders();
    let body: string | null = null;
    if (body_) {
      body = JSONstrict.stringify(body_);
      headers['Content-Type'] = 'application/json';
    }

    const params: request.OptionsWithUrl = {
      headers,
      json: false, // because we want to use _autoParse
      body,
      method,
      resolveWithFullResponse: false,
      transform: this._autoParse,
      url: `${this.hostUrl}/${this.apiVersion}/${url}`,
    };

    this.logger.debug(params);

    return request(params);
  }
}
