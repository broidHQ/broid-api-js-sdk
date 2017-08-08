import { Logger } from '@broid/utils';
import * as Promise from 'bluebird';
import * as jsonBigint from 'json-bigint';
import { Subject, Subscription, Observable } from 'rxjs';

import * as interfaces from '../interfaces';
import { Http } from '../helpers/Http';
import { WebSocket } from '../helpers/WebSocket';

const JSONstrict = jsonBigint({'strict': true});

export class Realtime<T> extends Subject<T> {
  private reconnectionObservable: Observable<number> | null;
  private reconnectionSubscriber: Subscription | null;
  private websocket: WebSocket<any> | null;

  public connectionStatus: Observable<boolean>;

  constructor(private http: Http,
              private logger: Logger,
              private reconnectInterval: number = 5000,
              private reconnectAttempts: number = 10
  ) {
    super();
  }

  private initWebsocket(): Promise<boolean> {
    this.websocket = new WebSocket(this.logger);
    this.websocket.subscribe({
      next: (data) => {
        // Stop the reconnection process in case
        if (this.reconnectionSubscriber) {
          this.reconnectionSubscriber.unsubscribe();
          this.reconnectionSubscriber = null;
          this.reconnectionObservable = null;
        }

        if (data) {
          let message = JSONstrict.parse(data);
          this.next(message);
        }
      },
      error: (e: any) => {
        if (e.reconnect) {
          this.websocket = null;
          this.reconnect();
        } else {
          this.error(e);
        }
      },
      complete: () => this.complete(),
    });
    return Promise.resolve(true);
  }

  private getRealtimeURL(): Promise<interfaces.Realtime> {
    return this.http.makeRequest('GET', `realtime`, null);
  }

  private reconnect(): void {
    this.reconnectionObservable = Observable.interval(this.reconnectInterval)
      .takeWhile((_, index) => index < this.reconnectAttempts && !this.websocket);

    this.reconnectionSubscriber = this.reconnectionObservable.subscribe(
      () => this.connect(),
      () => {
        // NOOP
      },
      () => {
        if (!this.websocket) {
          // if the reconnection attempts are failed, then we call complete of our Subject and status
          this.logger.debug!('Reconnection attempts are failed');
          this.complete();
        }
      });
  }

  public connect(): Promise<boolean> {
    return this.initWebsocket()
      .then(() => this.getRealtimeURL())
      .then((response: interfaces.Realtime) => response.url)
      .then((url: string) => {
        if (this.websocket) {
          return this.websocket.connect(url);
        }
        throw new Error('Websocket can\'t initialize correctly.');
      })
      .then(() => true);
  }

  public sendMessage(message: interfaces.SendMessage): Promise<null> {
    return this.http.makeRequest('POST', 'message', message);
  }
}
